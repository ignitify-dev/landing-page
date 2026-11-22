import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { n as getEntry } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Callout } from "./Callout_CbSyIQwi.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { t as $$TutorialLayout } from "./TutorialLayout_BpUH9Gak.mjs";
import { t as $$FileTabs } from "./FileTabs_dpTW2kFW.mjs";
//#region tutorials/nightly-report/index.ts?raw
var nightly_report_default = "// Nightly report: a digest of the last N hours of one GitHub repository — releases, merged and new\n// pull requests, new and closed issues, commits — returned as Markdown.\n//\n// Payload: { repo: \"owner/name\" (required), hours?: number (default 24, at most 168) }\n// Secret:  GITHUB_TOKEN (a read-only token), from `ignitify secret:set GITHUB_TOKEN --stdin`.\n// Network: outbound to api.github.com only (egress_allow in task.yaml).\n//\n// Run it at a set time with `task:run --at`, or every night from a cron that calls a webhook.\n// When the run ends, notify:set calls your URL; read the report with `run:get <run-id> --json`.\n//\n// This file is the shell: the GitHub calls and the result. The pure parts live in utils.ts.\n\nimport {\n  PAGE_SIZE, counts, digest, parseInput, renderReport,\n  type Commit, type Issue, type Release, type Repo,\n} from \"./utils.js\";\n\ntype Ctx = {\n  secrets: Record<string, string>;\n  metric(name: string, value: number): void;\n};\n\ntype ReportResult = {\n  repo: string;\n  since: string;\n  hours: number;\n  counts: Record<string, number>;\n  report: string;\n};\n\nconst API = \"https://api.github.com\";\nconst TIMEOUT_MS = 20_000;\n\n/** One GitHub GET. A refusal names its cause, so the failed run says what to fix. */\nasync function github<T>(token: string, path: string): Promise<T> {\n  const res = await fetch(`${API}${path}`, {\n    headers: {\n      accept: \"application/vnd.github+json\",\n      authorization: `Bearer ${token}`,\n      \"user-agent\": \"ignitify-nightly-report\",\n      \"x-github-api-version\": \"2022-11-28\",\n    },\n    signal: AbortSignal.timeout(TIMEOUT_MS),\n  });\n  if (res.status === 401) throw new Error(\"GitHub refused GITHUB_TOKEN (401): set a valid token with `ignitify secret:set GITHUB_TOKEN --stdin`\");\n  if (res.status === 404) throw new Error(`GitHub has no repository at ${path.split(\"/\").slice(2, 4).join(\"/\")} (404), or the token cannot see it`);\n  if (res.status === 403 || res.status === 429) {\n    const reset = Number(res.headers.get(\"x-ratelimit-reset\"));\n    const when = Number.isFinite(reset) && reset > 0 ? new Date(reset * 1000).toISOString() : \"a while\";\n    throw new Error(`GitHub refused the request (${res.status}): a rate limit, or the token has no access. Rate limit resets at ${when}`);\n  }\n  if (!res.ok) throw new Error(`GitHub answered ${res.status} for ${path}`);\n  return (await res.json()) as T;\n}\n\nexport async function run(payload: Record<string, unknown>, ctx: Ctx): Promise<ReportResult> {\n  const now = new Date();\n  const input = parseInput(payload, now);\n  const token = ctx.secrets.GITHUB_TOKEN ?? \"\";\n  const base = `/repos/${input.repo}`;\n  const since = encodeURIComponent(input.since);\n  console.log(`report for ${input.repo} since ${input.since}`);\n\n  // The four reads are independent, so they run at the same time.\n  const [repo, commits, issues, releases] = await Promise.all([\n    github<Repo>(token, base),\n    github<Commit[]>(token, `${base}/commits?since=${since}&per_page=${PAGE_SIZE}`),\n    github<Issue[]>(token, `${base}/issues?state=all&since=${since}&sort=updated&per_page=${PAGE_SIZE}`),\n    github<Release[]>(token, `${base}/releases?per_page=20`),\n  ]);\n\n  const d = digest(commits, issues, releases, input.since);\n  const numbers = counts(d);\n  for (const [name, value] of Object.entries(numbers)) ctx.metric(`report_${name}`, value);\n  console.log(`done: ${Object.entries(numbers).map(([k, v]) => `${k}=${v}`).join(\" \")}`);\n\n  return { repo: repo.full_name, since: input.since, hours: input.hours, counts: numbers, report: renderReport(input, repo, d, now) };\n}\n";
//#endregion
//#region tutorials/nightly-report/utils.ts?raw
var utils_default = "// The pure parts of nightly-report: payload rules, the digest of what GitHub returned, and the\n// Markdown report. No I/O here, so every function is a plain input → output.\n\n/** What the task needs, after the payload is checked. */\nexport type ReportInput = { readonly repo: string; readonly hours: number; readonly since: string };\n\n/** The fields the report reads from GitHub's REST answers. */\nexport type Repo = { full_name: string; html_url: string; stargazers_count: number; forks_count: number; open_issues_count: number };\nexport type Commit = { sha: string; html_url: string; commit: { message: string; author: { name: string } | null } };\nexport type Issue = {\n  number: number; title: string; html_url: string; state: \"open\" | \"closed\";\n  created_at: string; closed_at: string | null; user: { login: string } | null;\n  pull_request?: { merged_at: string | null };\n};\nexport type Release = { tag_name: string; name: string | null; html_url: string; published_at: string | null };\n\n/** One line of the report: a title, a link, and who. */\nexport type Item = { readonly title: string; readonly url: string; readonly by: string };\n\nexport type Digest = {\n  readonly commits: readonly Item[];\n  readonly openedIssues: readonly Item[];\n  readonly closedIssues: readonly Item[];\n  readonly openedPulls: readonly Item[];\n  readonly mergedPulls: readonly Item[];\n  readonly releases: readonly Item[];\n  /** GitHub returned a full page (PAGE_SIZE) of commits or issues: the counts are \"at least\". */\n  readonly truncated: boolean;\n};\n\nexport const PAGE_SIZE = 100;\nconst MAX_HOURS = 168;\nconst ITEMS_PER_SECTION = 10;\n/** The result limit is 10 KiB; the report keeps under this, with room for the other fields. */\nconst REPORT_MAX_BYTES = 8000;\n\n/** Check the payload: `repo` is \"owner/name\"; `hours` defaults to 24, at most a week. */\nexport function parseInput(payload: Record<string, unknown>, now: Date): ReportInput {\n  const repo = typeof payload.repo === \"string\" ? payload.repo.trim() : \"\";\n  if (!/^[\\w.-]+\\/[\\w.-]+$/.test(repo)) throw new Error('payload.repo must be \"owner/name\", for example \"nodejs/node\"');\n  const hours = typeof payload.hours === \"number\" && payload.hours > 0 ? Math.min(payload.hours, MAX_HOURS) : 24;\n  return { repo, hours, since: new Date(now.getTime() - hours * 3_600_000).toISOString() };\n}\n\nconst after = (iso: string | null | undefined, since: string): boolean => iso != null && iso >= since;\nconst firstLine = (s: string): string => s.split(\"\\n\")[0]?.trim() ?? \"\";\nconst issueItem = (i: Issue): Item => ({ title: `#${i.number} ${i.title}`, url: i.html_url, by: i.user?.login ?? \"unknown\" });\n\n/** Sort GitHub's answers into what happened since `since`. The issues list holds pull requests too. */\nexport function digest(commits: readonly Commit[], issues: readonly Issue[], releases: readonly Release[], since: string): Digest {\n  const pulls = issues.filter((i) => i.pull_request !== undefined);\n  const plain = issues.filter((i) => i.pull_request === undefined);\n  return {\n    commits: commits.map((c) => ({ title: firstLine(c.commit.message), url: c.html_url, by: c.commit.author?.name ?? \"unknown\" })),\n    openedIssues: plain.filter((i) => after(i.created_at, since)).map(issueItem),\n    closedIssues: plain.filter((i) => i.state === \"closed\" && after(i.closed_at, since)).map(issueItem),\n    openedPulls: pulls.filter((i) => after(i.created_at, since)).map(issueItem),\n    mergedPulls: pulls.filter((i) => after(i.pull_request?.merged_at, since)).map(issueItem),\n    releases: releases.filter((r) => after(r.published_at, since)).map((r) => ({ title: r.name || r.tag_name, url: r.html_url, by: r.tag_name })),\n    truncated: commits.length >= PAGE_SIZE || issues.length >= PAGE_SIZE,\n  };\n}\n\n/** The numbers, for the result and the metrics. */\nexport function counts(d: Digest): Record<string, number> {\n  return {\n    commits: d.commits.length,\n    issues_opened: d.openedIssues.length,\n    issues_closed: d.closedIssues.length,\n    pulls_opened: d.openedPulls.length,\n    pulls_merged: d.mergedPulls.length,\n    releases: d.releases.length,\n  };\n}\n\nfunction section(title: string, items: readonly Item[]): string[] {\n  if (items.length === 0) return [];\n  const more = items.length > ITEMS_PER_SECTION ? [`- …and ${items.length - ITEMS_PER_SECTION} more`] : [];\n  return [`## ${title} (${items.length})`, ...items.slice(0, ITEMS_PER_SECTION).map((i) => `- [${i.title}](${i.url}) by ${i.by}`), ...more, \"\"];\n}\n\n/** The Markdown report, cut to fit the result limit. */\nexport function renderReport(input: ReportInput, repo: Repo, d: Digest, now: Date): string {\n  const quiet = Object.values(counts(d)).every((n) => n === 0);\n  const lines = [\n    `# ${repo.full_name}: the last ${input.hours} h`,\n    \"\",\n    `${input.since.slice(0, 16)}Z → ${now.toISOString().slice(0, 16)}Z · ★ ${repo.stargazers_count} · forks ${repo.forks_count} · open issues and PRs ${repo.open_issues_count}`,\n    \"\",\n    ...(quiet ? [\"Nothing happened in this window.\", \"\"] : []),\n    ...section(\"Releases\", d.releases),\n    ...section(\"Merged pull requests\", d.mergedPulls),\n    ...section(\"New pull requests\", d.openedPulls),\n    ...section(\"New issues\", d.openedIssues),\n    ...section(\"Closed issues\", d.closedIssues),\n    ...section(\"Commits\", d.commits),\n    ...(d.truncated ? [`Note: GitHub returned a full page (${PAGE_SIZE}), so some counts are at least that many.`] : []),\n  ];\n  const text = lines.join(\"\\n\").trim();\n  return Buffer.byteLength(text) <= REPORT_MAX_BYTES ? text : `${Buffer.from(text).subarray(0, REPORT_MAX_BYTES).toString().replace(/�*$/, \"\")}\\n\\n…(cut to fit the result limit)`;\n}\n";
//#endregion
//#region tutorials/nightly-report/task.yaml?raw
var task_default = "schema_version: 1\nslug: nightly-report            # must match this directory's name\nruntime: node\n\n# Secret NAMES the task reads from ctx.secrets. Set the value with `ignitify secret:set GITHUB_TOKEN --stdin`.\n# A run fails if a declared name has no value.\nsecrets: [GITHUB_TOKEN]\n\nexecution:\n  duration: short               # a few seconds of API calls\n  network:\n    type: egress                # outbound only: nothing can connect to this task\n    egress_allow: [api.github.com]   # the only host the task may reach\n\nrun:\n  payload:\n    repo: nodejs/node\n    hours: 24\n  preset: std.micro             # 128 MiB is enough: four HTTP calls and some text\n  timeout_sec: 120\n";
//#endregion
//#region tutorials/nightly-report/README.md?raw
var README_default = "# nightly-report\n\nA digest of the last N hours of one GitHub repository: releases, merged and new pull requests, new and closed issues, and commits, as Markdown. Run it once at a set time, or every night from a cron that calls a webhook. When a run ends, the platform calls your URL, and you read the report from the run.\n\n## Files\n\n- `task.yaml`: slug, runtime, the secret name, outbound access to `api.github.com` only, and run defaults.\n- `index.ts`: the shell: four GitHub calls at the same time, the metrics and the result.\n- `utils.ts`: the pure parts: payload rules, the digest and the Markdown report.\n\n## Payload\n\n| Field | Default | Meaning |\n| :-- | :-- | :-- |\n| `repo` | `nodejs/node` (in task.yaml) | The repository, as `owner/name` (required) |\n| `hours` | 24 | The window, at most 168 (one week) |\n\n## Result\n\n`{ repo, since, hours, counts: { commits, issues_opened, issues_closed, pulls_opened, pulls_merged, releases }, report }`. `report` is Markdown, cut to fit the 10 KiB result limit. Each section lists 10 items at most.\n\n## Lifecycle\n\n```bash\nignitify login\nignitify task:create nightly-report\nignitify secret:set GITHUB_TOKEN --stdin < github-token.txt   # a read-only token\nignitify task:validate nightly-report\nignitify task:deploy nightly-report\nignitify task:run nightly-report --wait\nignitify task:run nightly-report --payload '{\"repo\":\"nodejs/node\",\"hours\":24}' --at 2027-01-15T06:00:00Z\nignitify schedule:list\n```\n\nEvery night: create a webhook with `ignitify hook:create nightly-report`, and call it from a cron (for example a GitHub Actions schedule). Get a callback when the run ends with `ignitify notify:set <deployment-id> --url https://… --secret-stdin`.\n\nRead a report:\n\n```bash\nignitify run:get <run-id> --json | jq -r .result.report\n```\n";
//#endregion
//#region tutorials/nightly-report/nightly.yml?raw
var nightly_default = "# .github/workflows/nightly-report.yml — starts one report run every night by calling the webhook.\n# Repository secrets: IGNITIFY_HOOK_URL and IGNITIFY_HOOK_SECRET (from `ignitify hook:create`).\nname: nightly-report\non:\n  schedule:\n    - cron: \"0 6 * * *\"        # 06:00 UTC every day\n  workflow_dispatch: {}         # and a \"Run workflow\" button for a test\njobs:\n  trigger:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Start the report run\n        env:\n          HOOK_URL: ${{ secrets.IGNITIFY_HOOK_URL }}\n          HOOK_SECRET: ${{ secrets.IGNITIFY_HOOK_SECRET }}\n        run: |\n          BODY='{\"repo\":\"nodejs/node\",\"hours\":24}'\n          SIG=$(printf %s \"$BODY\" | openssl dgst -sha256 -hmac \"$HOOK_SECRET\" -hex | sed 's/^.* //')\n          # One delivery id per day: if the job is retried, the platform returns the same run.\n          curl -fsS -X POST \"$HOOK_URL\" \\\n            -H \"content-type: application/json\" \\\n            -H \"x-ignitify-signature: sha256=$SIG\" \\\n            -H \"x-ignitify-delivery: nightly-report-$(date -u +%F)\" \\\n            -d \"$BODY\"\n";
//#endregion
//#region tutorials/nightly-report/receiver.ts?raw
var receiver_default = "// receiver.ts — your endpoint for `notify:set`. The platform POSTs here when a run ends:\n//   {\"run_id\":\"run_…\",\"status\":\"COMPLETED\",\"deployment_id\":\"…\",\"tenant_id\":\"…\"}\n// signed like a webhook (x-ignitify-signature: sha256=<hmac of the raw body>). The body has no\n// result, so read the report from the run.\nimport { createHmac, timingSafeEqual } from \"node:crypto\";\nimport { createServer } from \"node:http\";\nimport { execFile } from \"node:child_process\";\n\nconst SECRET = process.env.NOTIFY_SECRET ?? \"\";\n\nfunction isFromIgnitify(rawBody: string, header: string): boolean {\n  const expected = createHmac(\"sha256\", SECRET).update(rawBody).digest(\"hex\");\n  const got = header.replace(/^sha256=/, \"\");\n  return got.length === expected.length && timingSafeEqual(Buffer.from(got), Buffer.from(expected));\n}\n\ncreateServer((req, res) => {\n  let body = \"\";\n  req.on(\"data\", (c) => (body += c));\n  req.on(\"end\", () => {\n    if (!isFromIgnitify(body, String(req.headers[\"x-ignitify-signature\"] ?? \"\"))) return void res.writeHead(401).end();\n    res.writeHead(204).end();\n    const { run_id, status } = JSON.parse(body) as { run_id: string; status: string };\n    if (status !== \"COMPLETED\") return console.log(`run ${run_id} ended ${status}`);\n    // Read the result with the CLI (or the API): the Markdown report is result.report.\n    execFile(\"ignitify\", [\"run:get\", run_id, \"--json\"], (err, out) => {\n      if (err) return console.error(err.message);\n      console.log((JSON.parse(out) as { result: { report: string } }).result.report);\n    });\n  });\n}).listen(8080);\n";
//#endregion
//#region src/pages/tutorials/nightly-report.astro
var nightly_report_exports = /* @__PURE__ */ __exportAll({
	default: () => $$NightlyReport,
	file: () => $$file,
	url: () => $$url
});
var $$NightlyReport = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("tutorials", "nightly-report");
	if (!entry) throw new Error("[tutorials] missing src/content/tutorials/nightly-report.yaml");
	const t = entry.data;
	const tierName = t.tier[0].toUpperCase() + t.tier.slice(1);
	const SAMPLE_REPORT = `# octo-org/widgets: the last 24 h

2026-10-19T06:00Z → 2026-10-20T06:00Z · ★ 4210 · forks 388 · open issues and PRs 57

## Merged pull requests (2)
- [#812 cache: drop stale entries on reload](https://github.com/octo-org/widgets/pull/812) by ana
- [#809 docs: fix the install command](https://github.com/octo-org/widgets/pull/809) by lee

## New issues (1)
- [#815 Crash when the config file is empty](https://github.com/octo-org/widgets/issues/815) by sam

## Commits (5)
- [cache: drop stale entries on reload](https://github.com/octo-org/widgets/commit/3f2a1c9) by Ana
- …`;
	return renderTemplate`${renderComponent($$result, "TutorialLayout", $$TutorialLayout, {
		"title": t.title,
		"description": t.summary
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="tut-proves"><p>What this tutorial proves</p><ul><li>A task reads a secret by name (<code>ctx.secrets</code>). The value is never in the code, the config or the command line.</li><li>A task reaches only the hosts you allow (<code>egress_allow</code>), and nothing can connect in.</li><li>A run can start at a set time (<code>task:run --at</code>), or from a signed webhook that a cron calls.</li><li>A repeated webhook delivery returns the same run, so a retried cron job does not start a second report.</li><li>The platform calls your server when a run ends (<code>notify:set</code>), signed, so you know it is from us.</li></ul></div><h2>What you build</h2><p>A daily digest of one GitHub repository, as Markdown: releases, merged and new pull requests, new and closed issues, and commits.</p><ol><li>A cron calls the task's webhook every night, with the repository in the body.</li><li>The task reads four GitHub endpoints at the same time, with your token.</li><li>It returns the counts and the Markdown report as the run's result.</li><li>The platform calls your server. Your server reads the report from the run.</li></ol>${renderComponent($$result, "Code", $$Code, {
			"lang": "bash",
			"label": "the flow",
			"code": `cron (06:00 UTC) ──signed POST──▶ api.ignitify.dev/hooks/trigger/<hook-id>
                                        │ starts a run
                                        ▼
                       VM: nightly-report ──HTTPS──▶ api.github.com (only)
                                        │ run ends
                                        ▼
your server ◀──signed POST (notify)── api.ignitify.dev ── run:get ──▶ the report`
		})}<h2>The task's nature</h2><div class="drows"><table><thead><tr><th scope="col">Setting</th><th scope="col">Value</th><th scope="col">Why</th></tr></thead><tbody><tr><td data-label="Setting"><code>secrets</code></td><td data-label="Value"><code>[GITHUB_TOKEN]</code></td><td data-label="Why">The name the task reads. A run fails if the name has no value yet.</td></tr><tr><td data-label="Setting"><code>network.type</code></td><td data-label="Value"><code>egress</code></td><td data-label="Why">Outbound only. Nothing can connect to the task.</td></tr><tr><td data-label="Setting"><code>egress_allow</code></td><td data-label="Value"><code>[api.github.com]</code></td><td data-label="Why">The only host the task may reach.</td></tr><tr><td data-label="Setting"><code>duration</code></td><td data-label="Value"><code>short</code></td><td data-label="Why">Four API calls and some text: a few seconds.</td></tr><tr><td data-label="Setting"><code>preset</code></td><td data-label="Value"><code>std.micro</code></td><td data-label="Why">128 MiB is enough. The smallest size costs the least.</td></tr></tbody></table></div><h2>Before you start</h2><ul><li>A plan with webhooks. This tutorial uses <a href="/pricing">Starter</a>. Free allows the secret, but not the outbound call, <code>hook:create</code> or <code>notify:set</code>.</li><li>The CLI, installed and signed in. See <a href="/docs/install">Install</a>.</li><li>A GitHub token that can read the repository: a fine-grained token with read-only access is enough.</li></ul>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify login" })}<h2>Create the task</h2>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:create nightly-report" })}${renderComponent($$result, "Code", $$Code, {
			"lang": "bash",
			"label": "tasks/nightly-report/",
			"code": `tasks/nightly-report/
├── task.yaml     the secret name, outbound access, run defaults
├── index.ts      the shell: the GitHub calls, the metrics, the result
├── utils.ts      the pure parts: payload rules, the digest, the Markdown report
└── README.md     how to run it`
		})}<h2>The code</h2><p><code>index.ts</code> makes the four GitHub calls at the same time and turns a GitHub refusal into a clear error, so a failed run says what to fix. <code>utils.ts</code> sorts what GitHub returned into the report and keeps it under the 10 KiB result limit: at most 10 items per section, and a note when GitHub returned a full page.</p>${renderComponent($$result, "FileTabs", $$FileTabs, {
			"id": "nr-files",
			"files": [
				{
					name: "index.ts",
					code: nightly_report_default,
					lang: "ts"
				},
				{
					name: "utils.ts",
					code: utils_default,
					lang: "ts"
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
		})}<h2>Store the token</h2><p>Read the value from a file or a pipe, so it stays out of your shell history. A value on the command line is refused.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify secret:set GITHUB_TOKEN --stdin < github-token.txt",
			"output": `✓ secret GITHUB_TOKEN stored`
		})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify secret:list" })}<h2>Validate and deploy</h2>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:validate nightly-report",
			"output": `✓ task config valid`
		})}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:deploy nightly-report",
			"output": `✓ Image built · <build time>

✓ Deployment Created
deployment_id  <deployment-id>`
		})}<h2>Run it once</h2><p>The default payload in <code>task.yaml</code> reads <code>nodejs/node</code> for the last 24 hours. <code>--wait</code> follows the run and prints the result.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:run nightly-report --wait" })}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `ignitify task:run nightly-report --wait --payload '{"repo":"your-org/your-repo","hours":72}'`,
			"label": "another repository"
		})}<p>Print only the Markdown report:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:get <run-id> --json | jq -r .result.report" })}${renderComponent($$result, "Code", $$Code, {
			"lang": "md",
			"label": "report (example)",
			"code": SAMPLE_REPORT
		})}<p>A wrong repository or token fails the run with the reason, for example <code>GitHub has no repository at owner/name (404), or the token cannot see it</code>. Read it with <code>run:get &lt;run-id&gt;</code>.</p><h2>Run it at a set time</h2><p>For one run at a known time, use <code>--at</code> with a future UTC time. No run exists until it fires.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `ignitify task:run nightly-report --at 2027-01-15T06:00:00Z`,
			"output": `Scheduled: sch_<schedule-id> fires at 2027-01-15T06:00:00.000Z
No run exists until it fires. List with 'ignitify schedule:list'; cancel with 'ignitify schedule:cancel sch_<schedule-id>'.`
		})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify schedule:list" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify schedule:cancel sch_<schedule-id> -y" })}${renderComponent($$result, "Callout", $$Callout, {
			"kind": "note",
			"title": "One time, not a repeat"
		}, { "default": ($$result) => renderTemplate`A <code>--at</code> schedule fires once. For a report every night, use <code>schedule:create</code> with a cron expression, or let your own cron call a webhook, as in the next step.` })}<h2>Run it every night</h2><p>Create a webhook for the task. The reply shows the secret once, so store it now. A new deploy of the task keeps the same URL and secret.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify hook:create nightly-report",
			"output": `⚠️ The \`secret\` below is shown ONCE and cannot be read back — \`hook:list\` never returns it.
✓ Webhook Created
url     https://api.ignitify.dev/hooks/trigger/<hook-id>
secret  <hook-secret> (shown ONCE)`
		})}<p>Put the URL and the secret in your repository's Actions secrets as <code>IGNITIFY_HOOK_URL</code> and <code>IGNITIFY_HOOK_SECRET</code>, and add this workflow. It signs the body and sends one delivery id per day, so a retried job returns the same run.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "yaml",
			"label": ".github/workflows/nightly-report.yml",
			"code": nightly_default
		})}<p>A good call answers <code>202</code> with the new run id. A wrong signature answers <code>401</code>.</p><h2>Get told when it is ready</h2><p>Give the deployment a callback URL and a signing secret of your own. The platform POSTs there when a run ends.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `printf %s "$NOTIFY_SECRET" | ignitify notify:set <deployment-id> --url https://reports.your-domain.example/ignitify --secret-stdin` })}<p>The callback body has the run id and status, not the result. Check the signature, then read the report from the run:</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "ts",
			"label": "receiver.ts",
			"code": receiver_default
		})}<p>Remove the callback with <code>ignitify notify:set &lt;deployment-id&gt; --clear</code>.</p><h2>Clean up</h2>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify hook:list nightly-report" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify hook:delete <hook-resource-id> -y" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify secret:delete GITHUB_TOKEN -y" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:delete nightly-report --yes" })}<h2>Next steps</h2><ul><li>Send the report on: post <code>result.report</code> to your chat tool from the receiver.</li><li>Watch several repositories: add one webhook call per repository to the workflow.</li><li>Read more about secrets and webhooks: <a href="/docs/guides/use-secrets">Use secrets</a>, <a href="/docs/guides/trigger-from-a-webhook">Trigger from a webhook</a>, <a href="/docs/guides/run-later">Run later</a>.</li></ul>`,
		"header": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result) => renderTemplate`<h1>${t.title}</h1><p class="def">${t.summary}</p><div class="tut-meta"><span class="tut-chip">${t.runtime}</span>${t.tags.map((tag) => renderTemplate`<span class="tut-chip">${tag}</span>`)}<span class="tut-chip">${t.duration}</span><span class="tut-chip tut-chip-tier">${tierName} tier</span></div>` })}`
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/nightly-report.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/nightly-report.astro";
var $$url = "/tutorials/nightly-report";
//#endregion
//#region \0virtual:astro:page:src/pages/tutorials/nightly-report@_@astro
var page = () => nightly_report_exports;
//#endregion
export { page };
