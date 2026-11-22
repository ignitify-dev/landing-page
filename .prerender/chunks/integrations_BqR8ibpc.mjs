import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, o as renderScript, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Motion } from "./Motion_DAc_pbLo.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { a as lowestTier, i as detailUrl, l as tierLabel, n as INTEGRATIONS, t as CATALOG_URL } from "./integrations_YLdGWyDg.mjs";
/* empty css               */
/* empty css                    */
import { t as $$IntegrationIcon } from "./IntegrationIcon_BMyg6FHd.mjs";
//#region src/pages/integrations.astro
var integrations_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Integrations,
	file: () => $$file,
	url: () => $$url
});
var $$Integrations = createComponent(($$result, $$props, $$slots) => {
	const STREAM_PRESET = "std.medium";
	const STREAM_PLAN = `@ignitify-integrations/stream@<version> · settings + code · runs ffmpeg
  execution.network.type: none -> bidirectional
  run.preset: (default) -> ${STREAM_PRESET}
  + execution: duration long, interaction continuous
  + execution.network: inbound_port 8080
  + execution.network.inbound_routes: /live/
  + build.system_packages: ffmpeg
you add:
  egress host: the host of an https source (for example raw.githubusercontent.com); none for a local file
dry run: task.yaml was not changed`;
	const S3_PLAN_LINES = `@ignitify-integrations/s3-storage@<version> · settings + code
  execution.network.type: none -> egress
  + secrets: S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY
you add:
  secret S3_ACCESS_KEY_ID (new): ignitify secret:set S3_ACCESS_KEY_ID --stdin
  secret S3_SECRET_ACCESS_KEY (new): ignitify secret:set S3_SECRET_ACCESS_KEY --stdin
  egress host: your bucket host: <bucket>.s3.<region>.amazonaws.com on AWS, or the host of your custom endpoint`;
	const S3_DRY = `${S3_PLAN_LINES}
dry run: task.yaml was not changed`;
	const S3_APPLY = `${S3_PLAN_LINES}
Apply? [y/N] y
✓ @ignitify-integrations/s3-storage@<version> installed
✓ task.yaml updated`;
	const S3_AGAIN = `@ignitify-integrations/s3-storage@<version> · settings + code
you add:
  secret S3_ACCESS_KEY_ID: ignitify secret:set S3_ACCESS_KEY_ID --stdin
  secret S3_SECRET_ACCESS_KEY: ignitify secret:set S3_SECRET_ACCESS_KEY --stdin
  egress host: your bucket host: <bucket>.s3.<region>.amazonaws.com on AWS, or the host of your custom endpoint
task.yaml already has every setting this integration needs; nothing to write`;
	const STREAM_NO = `@ignitify-integrations/stream@<version> · settings + code · runs ffmpeg
  execution.network.type: none -> bidirectional
  run.preset: (default) -> ${STREAM_PRESET}
  + execution: duration long, interaction continuous
  + execution.network: inbound_port 8080
  + execution.network.inbound_routes: /live/
  + build.system_packages: ffmpeg
you add:
  egress host: the host of an https source (for example raw.githubusercontent.com); none for a local file
Apply? [y/N] n
Aborted.`;
	const VALIDATE_BAD = `✗ @ignitify-integrations/s3-storage: secret S3_ACCESS_KEY_ID is missing from secrets
✗ @ignitify-integrations/s3-storage: secret S3_SECRET_ACCESS_KEY is missing from secrets`;
	const S3_YAML = `secrets:
  - S3_ACCESS_KEY_ID
  - S3_SECRET_ACCESS_KEY
execution:
  network:
    type: egress
    egress_allow:
      - acme-reports.s3.eu-west-1.amazonaws.com # you add: your bucket host`;
	const S3_CODE = INTEGRATIONS.find((i) => i.name === "s3-storage")?.useIt;
	if (!S3_CODE) throw new Error("[integrations] s3-storage is missing from src/data/integrations.ts");
	const HOW = [
		{
			t: "Pick one",
			d: "Choose the integration for the service that your task uses.",
			c: "integration:add <name>"
		},
		{
			t: "Read the plan",
			d: "The CLI shows every setting that it will write, and what you must add yourself.",
			c: "--dry-run"
		},
		{
			t: "Answer y",
			d: "It installs the package and writes task.yaml. Any other answer changes nothing.",
			c: "Apply? [y/N]"
		},
		{
			t: "Finish and deploy",
			d: "Add your secret values and hosts, check the task, and deploy.",
			c: "task:deploy"
		}
	];
	const PLAN_PARTS = [
		{
			k: "get",
			t: "What you get",
			d: "The package, and what it brings: settings, code, and the system program that it runs (here <code>ffmpeg</code>)."
		},
		{
			k: "set",
			t: "What it writes",
			d: "<code>a -&gt; b</code> raises a setting. <code>+</code> adds a setting. A setting is never lowered."
		},
		{
			k: "you",
			t: "What you add",
			d: "The part that is different for each user, so the CLI cannot write it. You add it after the apply."
		},
		{
			k: "end",
			t: "The result",
			d: "With <code>--dry-run</code>, the command stops here. With no <code>--dry-run</code>, it asks <code>Apply? [y/N]</code>."
		}
	];
	const PLAN_LINES = STREAM_PLAN.split("\n").reduce((acc, text, n) => {
		const prev = acc[n - 1]?.k;
		const k = n === 0 ? "get" : text.startsWith("dry run") ? "end" : text.startsWith("you add") || prev === "you" ? "you" : "set";
		acc.push({
			text,
			k,
			first: k !== prev
		});
		return acc;
	}, []);
	const PART_NO = Object.fromEntries(PLAN_PARTS.map((p, n) => [p.k, n + 1]));
	const DOES = [
		{
			t: "Installs one npm package",
			d: "As a normal dependency. Your lockfile pins the exact version."
		},
		{
			t: "Writes the settings",
			d: "Network type, preset, ports, routes, system packages, and the names of the secrets."
		},
		{
			t: "Gives you the code",
			d: "You import it in your task, the same as any other package."
		}
	];
	const YOURS = [
		{
			t: "Set the secret values",
			d: "It writes only the names. The values go to the platform with secret:set, and never into task.yaml."
		},
		{
			t: "Add your hosts",
			d: "Your bucket or source host is different for each user, and an integration cannot ask for a wildcard host."
		},
		{
			t: "Call the code, check, deploy",
			d: "You decide where your task uses it. Then task:validate and task:deploy, as usual."
		}
	];
	const SAFE = [
		{
			t: "A plan before any change",
			d: "You see each setting before it is written. \"N\" or --dry-run changes nothing: not package.json, the lockfile, node_modules or task.yaml."
		},
		{
			t: "No install scripts",
			d: "The package installs with --ignore-scripts, the same as your build. Your lockfile pins the exact version."
		},
		{
			t: "Conflicts are refused",
			d: "A value that the integration cannot use is never overwritten. The command stops and names the field."
		},
		{
			t: "Your file, your settings",
			d: "task.yaml stays the one truth, and the platform enforces only task.yaml. Edit or delete any setting by hand."
		},
		{
			t: "task:validate checks it",
			d: "It finds a task that no longer covers its integrations, for example a deleted secret name or a preset that is too small."
		},
		{
			t: "Your VM only",
			d: "The code runs only in your own task VM, with the secrets and hosts of that task. The build installs it from your lockfile."
		}
	];
	const PLAN_LIST = INTEGRATIONS.map((i) => `<code>${i.name}</code> needs the ${tierLabel(lowestTier(i))} plan or higher`).join("; ");
	const FAQ = [
		{
			q: "Do I need an integration?",
			a: "<p>No. An integration is an option that saves you work. It writes normal settings into your <code>task.yaml</code> and adds one npm package with the code. The platform enforces only <code>task.yaml</code>, so a task with settings that you wrote by hand runs in the same way.</p><p>To do it by hand, open the integration in the <a href=\"" + CATALOG_URL + "\">catalog</a>. Its page lists each setting that it writes, what you add yourself, and the code, with a link to its README.</p><p>What you lose without it: the plan before each change, and the <code>task:validate</code> check that your task still covers the integration.</p>"
		},
		{
			q: "Does my task need to be a Node task?",
			a: "<p>Yes. An integration is an npm package, so the task folder needs a <code>package.json</code>. <code>task:create</code> writes one for a Node task, and a Node task that you have already works too.</p><p>The command installs the package as a normal dependency, and your lockfile pins its version. You then import its code in your task, the same as any other package.</p>"
		},
		{
			q: "What if it conflicts with my task?",
			a: "<p>The command stops before it changes anything, and it names the field. No file changes: not <code>package.json</code>, the lockfile or <code>task.yaml</code>.</p><p>For example, <code>stream</code> needs <code>interaction: continuous</code>. If your task sets another value, the command refuses. Change the field by hand and run the command again, or add the integration to another task.</p><p>A value that is already higher than what the integration needs is not a conflict. Settings are only raised, never lowered, so a larger preset or a wider network type that you set stays.</p>"
		},
		{
			q: "What does it cost?",
			a: "<p>The integrations are free and open source (Apache-2.0). You pay for your runs as usual, and an integration adds no charge of its own.</p><p>An integration can change what your runs need. <code>stream</code> raises the preset to <code>std.medium</code>, opens inbound traffic, and makes the run long and continuous. A larger preset has a larger weight while it runs. See <a href=\"/docs/concepts/presets-and-limits\">Presets and limits</a> and <a href=\"/docs/concepts/how-capacity-works\">How capacity works</a>.</p><p>Your plan must also allow what the integration needs. Today, " + PLAN_LIST + ". Each integration page shows its plan, and the <a href=\"/pricing\">pricing page</a> shows what each plan allows.</p>"
		},
		{
			q: "Can I suggest an integration?",
			a: "<p>Yes. <a href=\"/contact\">Contact us</a>, and tell us three things: the service, what your task does with it, and the work that you want to stop building.</p><p>The <a href=\"" + CATALOG_URL + "\">catalog</a> shows every integration that you can add today. Until the one that you need exists, you can write its settings and code yourself.</p>"
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "integrations",
		"title": "Integrations — Ignitify",
		"description": "Add the settings and code for one service to a task with one command. You see every change before it is written."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="docs-main int-page"><section class="hero-sec int-hero"><div class="mid"><p class="int-eyebrow">Integrations</p><h1>Add a service to your task with one command.</h1><p class="def int-lead">One npm package writes the settings for a service into your <code>task.yaml</code> and gives you the code to use it. You write only your task.</p><div class="cta-row"><a class="btn solid" href="#quick-start">Add your first integration</a><a class="btn ghost"${addAttribute(CATALOG_URL, "href")}>Browse the catalog</a></div><ul class="int-facts"><li>A plan before any change</li><li>No install scripts</li><li>task.yaml stays yours</li><li>Open source</li></ul></div></section><section id="available" class="int-avail-sec"><div class="int-avail-bar"><h2 class="int-avail-h">Available integrations <span>${INTEGRATIONS.length}</span></h2><a${addAttribute(CATALOG_URL, "href")}>Browse the catalog →</a></div><ul class="int-avail">${INTEGRATIONS.map((i) => renderTemplate`<li><a${addAttribute(detailUrl(i), "href")}><span class="int-avail-top">${renderComponent($$result, "IntegrationIcon", $$IntegrationIcon, { "category": i.category })}<code>${i.name}</code></span><span class="int-avail-sum">${i.summary}</span><span class="int-avail-meta"><span class="tut-chip">${i.category}</span><span class="tut-chip tut-chip-tier">${tierLabel(lowestTier(i))} plan or higher</span></span><span class="int-avail-go">Details →</span></a></li>`)}<li class="int-avail-ask"><a href="/contact"><span class="int-avail-top"><strong>Need another service?</strong></span><span class="int-avail-sum">Tell us the service, and the work that you want to stop building.</span><span class="int-avail-go">Contact us →</span></a></li></ul></section><section id="how-it-works"><div class="mid"><p class="int-eyebrow">1 · Understand</p><h2>How it works</h2><p class="def int-lead">Four steps. Nothing changes in your task until step 3.</p></div><ol class="int-flow">${HOW.map((s, n) => renderTemplate`<li><span class="int-flow-n" aria-hidden="true">${n + 1}</span><h3>${s.t}</h3><p>${s.d}</p><code>${s.c}</code></li>`)}</ol>${renderComponent($$result, "Motion", $$Motion, { "id": "integration" })}</section><section id="plan"><div class="mid"><p class="int-eyebrow">2 · Read the plan</p><h2>The plan tells you everything first</h2><p class="def int-lead">This is the plan for <code>stream</code> on a new Node task. It has four parts. Point at a part to see its lines.</p></div><div class="int-anat"><figure class="dblock dterm int-plan"><div class="dblock-bar"><span class="dblock-label">terminal</span><button type="button" class="dcopy" data-copy="ignitify integration:add stream --task live --dry-run" aria-label="Copy command: ignitify integration:add stream --task live --dry-run">Copy</button></div><pre class="dpre" tabindex="0" aria-label="Terminal: the plan for stream"><span class="tl tl-cmd"><span class="pr">$ </span>ignitify integration:add stream --task live --dry-run</span>${PLAN_LINES.map((l) => renderTemplate`<span${addAttribute(`tl int-pl int-pl-${l.k}`, "class")}${addAttribute(l.k, "data-g")}>${l.first && renderTemplate`<span class="int-pm" aria-hidden="true">${PART_NO[l.k]}</span>`}${l.text}</span>`)}</pre></figure><ol class="int-key">${PLAN_PARTS.map((p, n) => renderTemplate`<li${addAttribute(p.k, "data-g")} tabindex="0"${addAttribute(`int-key-${p.k}`, "class")}><span class="int-pm" aria-hidden="true">${n + 1}</span><div><h3>${p.t}</h3><p>${unescapeHTML(p.d)}</p></div></li>`)}</ol></div><p class="int-note"><code>&lt;version&gt;</code> is the latest version of the integration. The yellow lines are always yours: the same colour marks your steps below.</p></section><section id="who"><div class="mid"><p class="int-eyebrow">3 · Know your part</p><h2>What it does, and what you do</h2><p class="def int-lead">An integration writes what is the same for every user. You add what is different for you.</p></div><div class="int-who"><div class="int-who-col"><h3>The integration</h3><ul>${DOES.map((x) => renderTemplate`<li><strong>${x.t}</strong><span>${x.d}</span></li>`)}</ul></div><div class="int-who-col int-who-you"><h3>You</h3><ul>${YOURS.map((x) => renderTemplate`<li><strong>${x.t}</strong><span>${x.d}</span></li>`)}</ul></div></div></section><section id="quick-start"><div class="mid"><p class="int-eyebrow">4 · Try it</p><h2>Add your first integration</h2><p class="def int-lead">Give a task a place to keep big results: add <code>s3-storage</code> to a Node task, then check it and deploy it. Each output comes from a real run.</p></div><div class="int-phase"><h3 class="int-phase-h"><span>A</span>Prepare</h3><ol class="int-qs" style="counter-reset: qs 0"><li><div class="int-qs-t"><h4>Get the CLI</h4><p>You need the ignitify CLI 1.2.2 or later, installed and signed in. See <a href="/docs/install">Install</a>.</p></div><div class="int-qs-c">${renderComponent($$result, "Terminal", $$Terminal, { "command": "npm install --global ignitify@latest" })}</div></li><li><div class="int-qs-t"><h4>Create a Node task</h4><p>An integration needs a <code>package.json</code> in the task folder. <code>task:create</code> writes one. You can also use a Node task that you have. See <a href="/docs/your-first-task">Your first task</a>.</p></div><div class="int-qs-c">${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:create report" })}</div></li></ol></div><div class="int-phase"><h3 class="int-phase-h"><span>B</span>Add the integration</h3><ol class="int-qs" style="counter-reset: qs 2"><li><div class="int-qs-t"><h4>Read the plan</h4><p>With <code>--dry-run</code>, the command shows the plan and stops. Nothing in the task changes.</p></div><div class="int-qs-c">${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify integration:add s3-storage --task report --dry-run",
		"output": S3_DRY
	})}</div></li><li><div class="int-qs-t"><h4>Apply it</h4><p>Run the command again with no <code>--dry-run</code>, and answer <code>y</code>. It installs the package and writes <code>task.yaml</code>. Your comments and the order of your keys stay.</p></div><div class="int-qs-c">${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify integration:add s3-storage --task report",
		"output": S3_APPLY
	})}</div></li></ol></div><div class="int-phase int-phase-you"><h3 class="int-phase-h"><span>C</span>Add your part <span class="int-you">You add</span></h3><ol class="int-qs" style="counter-reset: qs 4"><li><div class="int-qs-t"><h4>Store the secret values</h4><p>The plan wrote the secret names. You set the values. Each command reads the value from stdin, so it stays out of your shell history. See <a href="/docs/guides/use-secrets">Use secrets</a>.</p></div><div class="int-qs-c">${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify secret:set S3_ACCESS_KEY_ID --stdin" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify secret:set S3_SECRET_ACCESS_KEY --stdin" })}</div></li><li><div class="int-qs-t"><h4>Add your bucket host</h4><p>The task had no network, so the plan wrote <code>egress_allow: []</code>: the task cannot connect to a host yet. Put your bucket host in the list. See <a href="/docs/guides/network-access">Network access</a>.</p></div><div class="int-qs-c">${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml (end)",
		"code": S3_YAML
	})}</div></li></ol></div><div class="int-phase"><h3 class="int-phase-h"><span>D</span>Use it and ship</h3><ol class="int-qs" style="counter-reset: qs 6"><li><div class="int-qs-t"><h4>Use it in your code</h4><p>Upload a file from the scratch disk and return a download link. The result stays small, also for a big file.</p></div><div class="int-qs-c">${renderComponent($$result, "Code", $$Code, {
		"lang": "ts",
		"label": "index.ts",
		"code": S3_CODE
	})}</div></li><li><div class="int-qs-t"><h4>Check the task</h4><p><code>task:validate</code> also checks that <code>task.yaml</code> covers every integration of the task.</p></div><div class="int-qs-c">${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:validate report",
		"output": "✓ task config valid"
	})}</div></li><li><div class="int-qs-t"><h4>Deploy as usual</h4><p>The build installs the package from your lockfile, the same as any other dependency.</p></div><div class="int-qs-c">${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:deploy report" })}</div></li></ol></div></section><section id="after"><div class="mid"><p class="int-eyebrow">5 · Keep it working</p><h2>After you add it</h2><p class="def int-lead">What happens when you say no, edit by hand, add a second integration, upgrade or remove.</p></div><div class="int-life" data-life><div class="int-life-list" role="tablist" aria-label="After you add an integration" aria-orientation="vertical"><button type="button" role="tab" id="life-tab-no" aria-controls="life-no" aria-selected="true" tabindex="0">Say no</button><button type="button" role="tab" id="life-tab-edit" aria-controls="life-edit" aria-selected="false" tabindex="-1">Edit by hand</button><button type="button" role="tab" id="life-tab-more" aria-controls="life-more" aria-selected="false" tabindex="-1">Add a second one</button><button type="button" role="tab" id="life-tab-up" aria-controls="life-up" aria-selected="false" tabindex="-1">Upgrade</button><button type="button" role="tab" id="life-tab-rm" aria-controls="life-rm" aria-selected="false" tabindex="-1">Remove</button></div><div class="int-life-panel" role="tabpanel" id="life-no" aria-labelledby="life-tab-no"><h3>Any answer other than <code>y</code> changes nothing</h3><p>The command stops. No file changes: not <code>package.json</code>, the lockfile, <code>node_modules</code> or <code>task.yaml</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify integration:add stream --task live",
		"output": STREAM_NO
	})}</div><div class="int-life-panel" role="tabpanel" id="life-edit" aria-labelledby="life-tab-edit" data-off><h3>Your edits are fine. <code>task:validate</code> catches a break.</h3><p>The settings are normal lines in your <code>task.yaml</code>. If someone deletes the secret names, the check fails before a deploy, not during a run:</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:validate report",
		"output": VALIDATE_BAD
	})}</div><div class="int-life-panel" role="tabpanel" id="life-more" aria-labelledby="life-tab-more" data-off><h3>Settings join. They never go down.</h3><p>You can add more than one integration to a task. Each plan shows only what it adds to the task that you have.</p><ul class="int-rules"><li><strong>Lists are joined</strong><span>Secrets, hosts, routes and system packages from each integration are all kept.</span></li><li><strong>Levels only go up</strong><span>The network type and the preset go to the higher value that an integration needs.</span></li><li><strong>A conflict stops the command</strong><span>It names the field and changes nothing.</span></li></ul><p>The <a href="/tutorials/launch-event">Launch event</a> tutorial uses <code>stream</code> and <code>s3-storage</code> in one task.</p></div><div class="int-life-panel" role="tabpanel" id="life-up" aria-labelledby="life-tab-up" data-off><h3>Run the same command again</h3><p>Only the latest version is supported. <code>task:validate</code> warns when your version is old, and names the latest one. <code>integration:add</code> installs the latest version and shows only the new settings. If there are none, it changes nothing:</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify integration:add s3-storage --task report",
		"output": S3_AGAIN
	})}</div><div class="int-life-panel" role="tabpanel" id="life-rm" aria-labelledby="life-tab-rm" data-off><h3>Uninstall the package</h3><p>The settings that it wrote stay in <code>task.yaml</code>, because they are yours. Delete the ones that you no longer need, by hand. Then run <code>task:validate</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "npm uninstall @ignitify-integrations/s3-storage" })}</div></div></section><section id="safe"><div class="mid"><p class="int-eyebrow">6 · Trust it</p><h2>Safe by design</h2><p class="def int-lead">An integration changes only what you can see and read, and only after a yes.</p></div><ul class="int-safe">${SAFE.map((s) => renderTemplate`<li><svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2.5 4 5v4.6c0 3.7 2.5 6.6 6 7.9 3.5-1.3 6-4.2 6-7.9V5z"></path><path d="m7.4 10 1.9 1.9 3.4-3.6"></path></svg><div><h3>${s.t}</h3><p>${s.d}</p></div></li>`)}</ul></section><section id="faq"><div class="mid"><h2>Questions</h2></div><div class="int-faq">${FAQ.map((f) => renderTemplate`<details><summary>${f.q}</summary><div class="int-faq-a">${unescapeHTML(f.a)}</div></details>`)}</div></section><section id="next"><div class="mid"><h2>Next steps</h2></div><div class="tut-list int-next"><a class="tut-card" href="/docs/guides/integrations"><h3>Integrations guide</h3><p>How to add, check, upgrade and remove an integration.</p><span class="tut-go">Read the guide →</span></a><a class="tut-card" href="/tutorials/launch-event"><h3>Launch event tutorial</h3><p>Stream a video live and keep the recording in your bucket, with two integrations in one task. Preview.</p><span class="tut-go">Start the tutorial →</span></a><a class="tut-card" href="/docs/cli/integrations#integration-add"><h3>CLI reference</h3><p>Every flag of <code>integration:add</code>, with examples.</p><span class="tut-go">Open the reference →</span></a></div></section></main><div class="docs-sr" id="docs-live" role="status" aria-live="polite"></div>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations.astro";
var $$url = "/integrations";
//#endregion
//#region \0virtual:astro:page:src/pages/integrations@_@astro
var page = () => integrations_exports;
//#endregion
export { page };
