import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { n as getEntry } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Callout } from "./Callout_CbSyIQwi.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { t as $$TutorialLayout } from "./TutorialLayout_BpUH9Gak.mjs";
import { t as $$FileTabs } from "./FileTabs_dpTW2kFW.mjs";
//#region tutorials/code-sandbox/main.py?raw
var main_default = "# Code sandbox for AI agents: run a snippet of untrusted Python and return what it printed.\n#\n# Payload: {\"code\": \"<python source>\", \"stdin\": \"<optional>\", \"timeout_sec\": 10 (at most 30)}\n# Result:  {\"ok\", \"exit_code\", \"signal\", \"timed_out\", \"duration_ms\", \"stdout\", \"stderr\",\n#           \"stdout_truncated\", \"stderr_truncated\", \"python\"}\n#\n# An agent calls this as a tool: `ignitify task:run code-sandbox --payload '{\"code\": ...}' --wait --json`.\n# Each run gets a fresh MicroVM with no network (task.yaml), so the code cannot reach the internet,\n# other runs or your machine. A failing snippet is a normal result (ok: false), not a failed run:\n# the agent reads the traceback and tries again. Only a bad payload fails the run.\n#\n# This file is the shell. The checks, limits and the child process live in sandbox.py.\n\nimport os\n\nfrom sandbox import execute, parse_payload\n\n# The code drive is read-only; the scratch disk ($HOME) is the only place to write.\nWORKDIR = os.environ.get(\"HOME\", \"/mnt/scratch\")\n\n\ndef run(payload, ctx):\n    job = parse_payload(payload)\n    result = execute(job, WORKDIR)\n    ctx.metric(\"sandbox_duration_ms\", result[\"duration_ms\"])\n    print(f\"exit={result['exit_code']} timed_out={result['timed_out']} duration_ms={result['duration_ms']}\")\n    return result\n";
//#endregion
//#region tutorials/code-sandbox/sandbox.py?raw
var sandbox_default = "\"\"\"The pure parts of code-sandbox, and the one function that runs the code.\n\nThe VM is the security boundary: one fresh MicroVM per run, with no network. Inside it, the\nuntrusted code runs in a child process so the task can still answer when that code hangs,\ncrashes, eats memory or prints megabytes: a wall-clock timeout, resource limits, and capped\noutput. The child never sees the task's environment.\n\"\"\"\n\nimport json\nimport os\nimport resource\nimport signal\nimport subprocess\nimport sys\nimport tempfile\nimport time\nfrom dataclasses import dataclass\n\nMAX_CODE_BYTES = 8 * 1024        # the payload limit is 10 KiB, with room for the other fields\nMAX_STDIN_BYTES = 1024\nDEFAULT_TIMEOUT_S = 10.0\nMAX_TIMEOUT_S = 30.0\nMEMORY_MB = 128                  # address space of the child; the std.small VM has 256 MiB\nMAX_FILE_MB = 16                 # the largest file the child may write\nMAX_PROCS = 64                   # stops a fork bomb from filling the VM\nRESULT_BUDGET = 9 * 1024         # the result limit is 10 KiB\n\n\n@dataclass(frozen=True)\nclass Job:\n    code: str\n    stdin: str\n    timeout_s: float\n\n\ndef parse_payload(payload: dict) -> Job:\n    \"\"\"Check the payload: `code` is required; `stdin` and `timeout_sec` are optional.\"\"\"\n    code = payload.get(\"code\")\n    if not isinstance(code, str) or not code.strip():\n        raise ValueError(\"payload.code must be a non-empty string of Python source\")\n    if len(code.encode()) > MAX_CODE_BYTES:\n        raise ValueError(f\"payload.code is over {MAX_CODE_BYTES} bytes\")\n    stdin = payload.get(\"stdin\", \"\")\n    if not isinstance(stdin, str) or len(stdin.encode()) > MAX_STDIN_BYTES:\n        raise ValueError(f\"payload.stdin must be a string of at most {MAX_STDIN_BYTES} bytes\")\n    timeout = payload.get(\"timeout_sec\", DEFAULT_TIMEOUT_S)\n    if not isinstance(timeout, (int, float)) or timeout <= 0:\n        raise ValueError(\"payload.timeout_sec must be a positive number\")\n    return Job(code=code, stdin=stdin, timeout_s=min(float(timeout), MAX_TIMEOUT_S))\n\n\ndef _limits(timeout_s: float):\n    \"\"\"Resource limits for the child, applied after fork and before the code starts.\"\"\"\n    def apply() -> None:\n        cpu = int(timeout_s) + 1\n        resource.setrlimit(resource.RLIMIT_CPU, (cpu, cpu))\n        resource.setrlimit(resource.RLIMIT_AS, (MEMORY_MB << 20, MEMORY_MB << 20))\n        resource.setrlimit(resource.RLIMIT_FSIZE, (MAX_FILE_MB << 20, MAX_FILE_MB << 20))\n        resource.setrlimit(resource.RLIMIT_NPROC, (MAX_PROCS, MAX_PROCS))\n        resource.setrlimit(resource.RLIMIT_CORE, (0, 0))\n    return apply\n\n\ndef _cut(text: str, limit: int) -> tuple[str, bool]:\n    \"\"\"The first `limit` characters, and whether anything was cut.\"\"\"\n    return (text, False) if len(text) <= limit else (text[:limit], True)\n\n\ndef _signal_name(code: int) -> str | None:\n    \"\"\"A negative return code means the child died of a signal.\"\"\"\n    return signal.Signals(-code).name if code < 0 else None\n\n\ndef fit(result: dict) -> dict:\n    \"\"\"Shrink stdout and stderr until the JSON result fits the platform's result limit.\"\"\"\n    out, err = result[\"stdout\"], result[\"stderr\"]\n    while len(json.dumps(result).encode()) > RESULT_BUDGET and (out or err):\n        out, err = out[: len(out) * 3 // 4], err[: len(err) * 3 // 4]\n        result = {**result, \"stdout\": out, \"stderr\": err, \"stdout_truncated\": True, \"stderr_truncated\": bool(err) or result[\"stderr_truncated\"]}\n    return result\n\n\ndef execute(job: Job, workdir: str) -> dict:\n    \"\"\"Run the code in a child Python with limits, and describe what happened.\"\"\"\n    with tempfile.TemporaryDirectory(dir=workdir) as tmp:\n        script = os.path.join(tmp, \"main.py\")\n        with open(script, \"w\", encoding=\"utf-8\") as f:\n            f.write(job.code)\n        started = time.monotonic()\n        # -I: no user site, no environment variables, no script directory on sys.path from outside.\n        child = subprocess.Popen(\n            [sys.executable, \"-I\", \"-X\", \"utf8\", script],\n            cwd=tmp,\n            env={\"PATH\": \"/usr/bin:/bin\", \"HOME\": tmp, \"LANG\": \"C.UTF-8\"},\n            stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE,\n            preexec_fn=_limits(job.timeout_s),\n            start_new_session=True,   # its own process group, so a timeout kills every child it made\n        )\n        try:\n            raw_out, raw_err = child.communicate(job.stdin.encode(), timeout=job.timeout_s)\n            timed_out = False\n        except subprocess.TimeoutExpired:\n            os.killpg(child.pid, signal.SIGKILL)\n            raw_out, raw_err = child.communicate()\n            timed_out = True\n        duration_ms = round((time.monotonic() - started) * 1000)\n\n    stdout, out_cut = _cut(raw_out.decode(\"utf-8\", \"replace\"), 4000)\n    stderr, err_cut = _cut(raw_err.decode(\"utf-8\", \"replace\"), 2000)\n    return fit({\n        \"ok\": child.returncode == 0 and not timed_out,\n        \"exit_code\": child.returncode,\n        \"signal\": _signal_name(child.returncode),\n        \"timed_out\": timed_out,\n        \"duration_ms\": duration_ms,\n        \"stdout\": stdout,\n        \"stderr\": stderr,\n        \"stdout_truncated\": out_cut,\n        \"stderr_truncated\": err_cut,\n        \"python\": sys.version.split()[0],\n    })\n";
//#endregion
//#region tutorials/code-sandbox/agent.py?raw
var agent_default = "\"\"\"agent.py — Claude writes Python, and the Ignitify code-sandbox task runs it.\n\nRuns on your machine, not on the platform. Claude gets one tool, run_python; each call starts a\nrun of code-sandbox in a fresh MicroVM with no network, and the JSON result goes back to Claude.\n\n    pip install anthropic\n    ignitify login                       # the CLI must be signed in; this script calls it\n    export ANTHROPIC_API_KEY=...         # or sign in with `ant auth login`\n    python agent.py \"How many primes are there below 1,000,000? Check it by running code.\"\n\"\"\"\n\nimport json\nimport subprocess\nimport sys\n\nimport anthropic\nfrom anthropic import beta_tool\n\nclient = anthropic.Anthropic()\n\n\n@beta_tool\ndef run_python(code: str, stdin: str = \"\") -> str:\n    \"\"\"Run a Python 3.11 program in a fresh, isolated MicroVM and return the result as JSON.\n\n    The result has ok, exit_code, timed_out, duration_ms, stdout and stderr. Print what you want\n    to see. There is no network and only the standard library; the time limit is 10 seconds.\n\n    Args:\n        code: The complete Python program to run.\n        stdin: Optional text for standard input.\n    \"\"\"\n    payload = json.dumps({\"code\": code, \"stdin\": stdin})\n    proc = subprocess.run(\n        [\"ignitify\", \"task:run\", \"code-sandbox\", \"--payload\", payload, \"--wait\", \"--json\"],\n        capture_output=True, text=True, timeout=300,\n    )\n    # --wait --json prints the finished run, as `run:get` does. A refused payload fails the run.\n    try:\n        run = json.loads(proc.stdout)\n    except json.JSONDecodeError:\n        return json.dumps({\"ok\": False, \"error\": proc.stderr.strip()[-2000:] or \"the CLI printed no JSON\"})\n    if run.get(\"result\") is None:\n        return json.dumps({\"ok\": False, \"status\": run.get(\"status\"), \"error\": proc.stderr.strip()[-2000:]})\n    return json.dumps(run[\"result\"])\n\n\ndef main() -> None:\n    question = \" \".join(sys.argv[1:]) or \"What is the 50th Fibonacci number? Check it by running code.\"\n    runner = client.beta.messages.tool_runner(\n        model=\"claude-opus-5-5\",\n        max_tokens=16000,\n        # A safety decline is re-run on Anthropic's recommended fallback model, server-side.\n        betas=[\"server-side-fallback-2026-07-01\"],\n        fallbacks=\"default\",\n        system=\"When a question can be answered by computing, write a Python program and run it with run_python. \"\n               \"Read the result before you answer. If the program fails, fix it and run it again.\",\n        tools=[run_python],\n        messages=[{\"role\": \"user\", \"content\": question}],\n    )\n    last = None\n    for message in runner:\n        last = message\n        for block in message.content:\n            if block.type == \"tool_use\":\n                print(f\"→ run_python: {len(block.input.get('code', ''))} characters of code\")\n            elif block.type == \"text\":\n                print(block.text)\n    if last is not None and last.stop_reason == \"refusal\":\n        print(\"Claude declined this request.\")\n\n\nif __name__ == \"__main__\":\n    main()\n";
//#endregion
//#region tutorials/code-sandbox/task.yaml?raw
var task_default = "schema_version: 1\nslug: code-sandbox              # must match this directory's name\nruntime: python\n\nexecution:\n  duration: short               # a snippet runs for 30 s at most\n  network:\n    type: none                  # no network at all: the code cannot reach the internet or anything else\n\nrun:\n  payload:\n    code: |\n      import platform, sys\n      print(\"hello from\", platform.machine(), sys.version.split()[0])\n  preset: std.small             # 256 MiB: the snippet gets 128 MiB, the rest is the runtime and the VM\n  timeout_sec: 60               # covers the snippet's own 30 s limit and start-up\n";
//#endregion
//#region tutorials/code-sandbox/README.md?raw
var README_default = "# code-sandbox\n\nRun untrusted Python, such as code an AI agent wrote, in a fresh MicroVM with no network, and get back what it printed. A failing program is a normal result (`ok: false` with the traceback), so the agent can read it and try again.\n\n## Files\n\n- `task.yaml`: Python runtime, no network, a 30 s limit per snippet, the `std.small` preset.\n- `main.py`: the shell: `run(payload, ctx)`.\n- `sandbox.py`: the payload checks, the resource limits and the child process.\n- `agent.py`: runs on your machine, not on the platform. Claude writes code and calls this task as a tool. `.ignitifyignore` keeps it out of the deploy.\n\n## Payload and result\n\n| Field | Default | Meaning |\n| :-- | :-- | :-- |\n| `code` | none | The Python program (required, at most 8 KiB) |\n| `stdin` | `\"\"` | Text for standard input (at most 1 KiB) |\n| `timeout_sec` | 10 | Wall-clock limit for the program (at most 30) |\n\nResult: `ok`, `exit_code`, `signal`, `timed_out`, `duration_ms`, `stdout` (first 4,000 characters), `stderr` (first 2,000), `stdout_truncated`, `stderr_truncated`, `python`.\n\n## Limits inside the VM\n\nThe VM is the boundary: one per run, no network. Inside it, the program runs as a child process with a 128 MiB memory cap, a CPU-time cap, a 16 MiB file-size cap, at most 64 processes, no core dumps, and an empty environment (`PATH`, `HOME`, `LANG` only). A timeout kills the child and everything it started.\n\n## Lifecycle\n\n```bash\nignitify login\nignitify task:create code-sandbox --lang python\nignitify task:validate code-sandbox\nignitify task:deploy code-sandbox\nignitify task:run code-sandbox --wait\nignitify task:run code-sandbox --wait --payload '{\"code\":\"print(sum(range(10**6)))\"}'\n```\n\nWith an agent:\n\n```bash\npip install anthropic\nexport ANTHROPIC_API_KEY=...\npython agent.py \"How many primes are there below 1,000,000? Check it by running code.\"\n```\n";
//#endregion
//#region src/pages/tutorials/code-sandbox.astro
var code_sandbox_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CodeSandbox,
	file: () => $$file,
	url: () => $$url
});
var $$CodeSandbox = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("tutorials", "code-sandbox");
	if (!entry) throw new Error("[tutorials] missing src/content/tutorials/code-sandbox.yaml");
	const t = entry.data;
	const tierName = t.tier[0].toUpperCase() + t.tier.slice(1);
	const hostile = [
		{
			name: "Endless loop",
			code: "while True: pass",
			what: "Killed at the time limit (SIGKILL), timed_out: true"
		},
		{
			name: "Background child",
			code: "subprocess.Popen([\"sleep\",\"100\"])",
			what: "The whole process group is killed at the time limit"
		},
		{
			name: "Memory bomb",
			code: "bytearray(512 * 1024 * 1024)",
			what: "MemoryError: the 128 MiB cap holds"
		},
		{
			name: "Fork bomb",
			code: "os.fork() in a loop",
			what: "Refused after 64 processes (Errno 11)"
		},
		{
			name: "Huge output",
			code: "print('x' * 100000)",
			what: "Cut to fit the result limit, stdout_truncated: true"
		},
		{
			name: "Large file",
			code: "write 64 MiB to disk",
			what: "OSError: File too large (16 MiB cap)"
		},
		{
			name: "Read secrets",
			code: "print(os.environ)",
			what: "Only PATH, HOME and LANG are there"
		}
	];
	return renderTemplate`${renderComponent($$result, "TutorialLayout", $$TutorialLayout, {
		"title": t.title,
		"description": t.summary
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="tut-proves"><p>What this tutorial proves</p><ul><li>Untrusted code, including code an AI wrote, runs in its own MicroVM, never shared with another tenant.</li><li>With <code>network: none</code> the code cannot reach the internet, your other runs or your machine.</li><li>A hostile snippet (an endless loop, a memory bomb, a fork bomb) ends with a clear result, not a hung or crashed task.</li><li>An agent can use the platform as a tool: Claude writes the code, the task runs it, Claude reads the result.</li></ul></div><h2>What you build</h2><ol><li>A Python task that takes a program in its payload, runs it, and returns stdout, stderr and the exit code.</li><li>A short agent script on your machine. Claude gets one tool, <code>run_python</code>, and each call starts a run of the task.</li></ol>${renderComponent($$result, "Code", $$Code, {
			"lang": "bash",
			"label": "the flow",
			"code": `you ──question──▶ agent.py (your machine) ──▶ Claude (claude-opus-5-5)
                         ▲                          │ tool call: run_python(code)
                         │                          ▼
                         └── result JSON ◀── ignitify task:run code-sandbox --wait --json
                                                    │
                                     fresh MicroVM, no network: python3 main.py`
		})}<h2>The task's nature</h2><div class="drows"><table><thead><tr><th scope="col">Setting</th><th scope="col">Value</th><th scope="col">Why</th></tr></thead><tbody><tr><td data-label="Setting"><code>runtime</code></td><td data-label="Value"><code>python</code></td><td data-label="Why">Python 3.11 and the standard library. No packages to install.</td></tr><tr><td data-label="Setting"><code>network.type</code></td><td data-label="Value"><code>none</code></td><td data-label="Why">No network at all. The strongest setting, and the right one for untrusted code.</td></tr><tr><td data-label="Setting"><code>duration</code></td><td data-label="Value"><code>short</code></td><td data-label="Why">A snippet runs for 30 seconds at most.</td></tr><tr><td data-label="Setting"><code>preset</code></td><td data-label="Value"><code>std.small</code></td><td data-label="Why">256 MiB. The snippet gets 128 MiB, the rest is the runtime and the VM.</td></tr><tr><td data-label="Setting"><code>timeout_sec</code></td><td data-label="Value"><code>60</code></td><td data-label="Why">Covers the snippet's own limit and start-up.</td></tr></tbody></table></div><h2>Before you start</h2><ul><li>A plan with the <code>std.small</code> preset. This tutorial uses <a href="/pricing">Starter</a>.</li><li>The CLI, installed and signed in. See <a href="/docs/install">Install</a>.</li><li>For the agent: Python 3.10 or later, the <code>anthropic</code> package, and an Anthropic API key.</li></ul>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify login" })}<h2>Create the task</h2>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:create code-sandbox --lang python" })}${renderComponent($$result, "Code", $$Code, {
			"lang": "bash",
			"label": "tasks/code-sandbox/",
			"code": `tasks/code-sandbox/
├── task.yaml          Python, no network, std.small
├── main.py            the shell: run(payload, ctx)
├── sandbox.py         payload checks, resource limits, the child process
├── requirements.txt   empty: only the standard library is used
├── agent.py           runs on your machine; kept out of the deploy by .ignitifyignore
└── .ignitifyignore    agent.py`
		})}<h2>The code</h2><p>The VM is the security boundary. Inside it, <code>sandbox.py</code> runs the program as a child process, so the task can still answer when the program hangs, crashes or floods its output. The child gets resource limits and an empty environment, and a timeout kills it with everything it started.</p>${renderComponent($$result, "FileTabs", $$FileTabs, {
			"id": "cs-files",
			"files": [
				{
					name: "main.py",
					code: main_default,
					lang: "python"
				},
				{
					name: "sandbox.py",
					code: sandbox_default,
					lang: "python"
				},
				{
					name: "task.yaml",
					code: task_default,
					lang: "yaml"
				},
				{
					name: "README.md",
					code: README_default,
					lang: "md"
				}
			]
		})}<p>Create <code>.ignitifyignore</code> with one line, <code>agent.py</code>, so the agent script stays on your machine.</p><h2>Validate and deploy</h2>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:validate code-sandbox",
			"output": `✓ task config valid`
		})}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:pack code-sandbox",
			"output": `ignored by .ignitifyignore: agent.py`
		})}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:deploy code-sandbox",
			"output": `✓ Image built · <build time>

✓ Deployment Created
deployment_id  <deployment-id>`
		})}<h2>Run a snippet</h2><p>The default payload prints the machine and the Python version. Pass your own program with <code>--payload</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:run code-sandbox --wait" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify task:run code-sandbox --wait --json --payload '{"code":"import math\\nprint(math.factorial(20))"}' | jq .result` })}${renderComponent($$result, "Code", $$Code, {
			"lang": "json",
			"label": "result",
			"code": `{
  "ok": true,
  "exit_code": 0,
  "signal": null,
  "timed_out": false,
  "duration_ms": 14,
  "stdout": "2432902008176640000\\n",
  "stderr": "",
  "stdout_truncated": false,
  "stderr_truncated": false,
  "python": "3.11.2"
}`
		})}<p>A program that fails is still a completed run. The result has <code>ok: false</code> and the traceback in <code>stderr</code>, which is what an agent needs to fix its code. Only a bad payload fails the run, for example code over 8 KiB.</p><h2>Try to break it</h2><p>We ran these snippets through <code>sandbox.py</code>. Each one ends with a clear result, and the task keeps working:</p><div class="drows"><table><thead><tr><th scope="col">Snippet</th><th scope="col">Code</th><th scope="col">What happens</th></tr></thead><tbody>${hostile.map((h) => renderTemplate`<tr><td data-label="Snippet">${h.name}</td><td data-label="Code"><code>${h.code}</code></td><td data-label="What happens">${h.what}</td></tr>`)}</tbody></table></div>${renderComponent($$result, "Callout", $$Callout, {
			"kind": "note",
			"title": "Two layers"
		}, { "default": ($$result) => renderTemplate`These results come from the limits in <code>sandbox.py</code>, measured on a Linux machine. On the platform the MicroVM adds the outer layer: a fresh VM per run, no network, and nothing left behind when the run ends.` })}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `ignitify task:run code-sandbox --wait --json --payload '{"code":"while True: pass","timeout_sec":3}' | jq '.result | {ok, timed_out, signal}'`,
			"label": "try one yourself"
		})}<h2>Give it to an agent</h2><p><code>agent.py</code> runs on your machine. It gives Claude one tool, <code>run_python</code>. The SDK's tool runner handles the loop: Claude writes a program, the tool runs it as a task run, and Claude reads the JSON result before it answers.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "python",
			"label": "agent.py",
			"code": agent_default
		})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "pip install anthropic" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": `python agent.py "How many primes are there below 1,000,000? Check it by running code."` })}<p>The script uses <code>claude-opus-5-5</code>, and turns on <code>fallbacks: "default"</code>: if Claude declines a request on safety grounds, the API re-runs it on Anthropic's recommended fallback model.</p>${renderComponent($$result, "Callout", $$Callout, {
			"kind": "tip",
			"title": "Each tool call is a run"
		}, { "default": ($$result) => renderTemplate`Every <code>run_python</code> call starts a new run in a new VM, so one snippet cannot see files or state from another. List them with <code>ignitify run:list --task-name code-sandbox</code>.` })}<h2>Clean up</h2>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:delete code-sandbox --yes" })}<h2>Next steps</h2><ul><li>Allow some packages: add them to <code>requirements.in</code>, generate the hashed <code>requirements.txt</code>, and redeploy.</li><li>Give the code a little network: switch to <code>egress</code> with an <code>egress_allow</code> list. See <a href="/docs/guides/network-access">Network access</a>.</li><li>Read about sizes and limits: <a href="/docs/guides/choose-a-vm-size-and-disk">Choose a VM size and disk</a>.</li></ul>`,
		"header": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result) => renderTemplate`<h1>${t.title}</h1><p class="def">${t.summary}</p><div class="tut-meta"><span class="tut-chip">${t.runtime}</span>${t.tags.map((tag) => renderTemplate`<span class="tut-chip">${tag}</span>`)}<span class="tut-chip">${t.duration}</span><span class="tut-chip tut-chip-tier">${tierName} tier</span></div>` })}`
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/code-sandbox.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/code-sandbox.astro";
var $$url = "/tutorials/code-sandbox";
//#endregion
//#region \0virtual:astro:page:src/pages/tutorials/code-sandbox@_@astro
var page = () => code_sandbox_exports;
//#endregion
export { page };
