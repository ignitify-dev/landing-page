import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { n as getEntry } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Motion } from "./Motion_DAc_pbLo.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Callout } from "./Callout_CbSyIQwi.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { t as $$TutorialLayout } from "./TutorialLayout_BpUH9Gak.mjs";
//#region src/pages/tutorials/launch-event.astro
var launch_event_exports = /* @__PURE__ */ __exportAll({
	default: () => $$LaunchEvent,
	file: () => $$file,
	url: () => $$url
});
var $$LaunchEvent = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("tutorials", "launch-event");
	if (!entry) throw new Error("[tutorials] missing src/content/tutorials/launch-event.yaml");
	const t = entry.data;
	const tierName = t.tier[0].toUpperCase() + t.tier.slice(1);
	const START_PRESET = "std.small";
	const STREAM_PRESET = "std.medium";
	const WATCH = "https://<route-id>--<tenant-id>.ignitify.app/live/";
	const START_YAML = `schema_version: 1
slug: launch-event
runtime: node
execution:
  interaction: boundary-only
build:
  system_packages: [imagemagick]
run:
  payload: {}
  preset: ${START_PRESET}
  timeout_sec: 7200`;
	const FINAL_YAML = `schema_version: 1
slug: launch-event
runtime: node
execution:
  interaction: continuous
  duration: long
  network:
    type: bidirectional
    egress_allow:
      - media.example.com # you added: the video source
      - acme-rec.s3.eu-west-1.amazonaws.com # you added: the bucket
    inbound_port: 8080
    inbound_routes:
      - prefix: /live/
build:
  system_packages: [imagemagick, ffmpeg]
run:
  payload:
    video: https://media.example.com/launch.mp4 # the default video; a run can send another
    start_delay_sec: 120 # the viewer link is in the progress this long before the video starts
  preset: ${STREAM_PRESET}
  timeout_sec: 7200
secrets:
  - S3_ACCESS_KEY_ID
  - S3_SECRET_ACCESS_KEY`;
	const INDEX_TS = `import { stream } from '@ignitify-integrations/stream';
import { storage } from '@ignitify-integrations/s3-storage';
import { readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const WEEK_SEC = 7 * 86400; // the longest a download link can be valid

// payload (defaults in task.yaml run.payload): { video, start_delay_sec }
export async function run(payload, ctx) {
  const { video, start_delay_sec = 120 } = payload;

  // 1. Stream. The player page is served at once; the video starts after the delay,
  //    so viewers can open the link first.
  const live = await stream(ctx, { source: video, startDelaySec: start_delay_sec, after: 'stop' });
  if (live.cancelled) return live;

  // 2. Upload. after: 'stop' leaves the recording (a playlist and its segment files) in $HOME/hls
  const store = storage(ctx, { bucket: 'acme-rec', region: 'eu-west-1' });
  const dir = join(process.env.HOME, 'hls');
  const lines = [];
  for (const file of (await readdir(dir)).sort()) {
    const url = await store.putAndLink(join(dir, file), { expiresSec: WEEK_SEC });
    lines.push(\`\${file} \${url}\`);
  }

  // 3. Return. A run result is small, so the download links go into one file, and the result links to that file.
  const list = join(process.env.HOME, 'recording-links.txt');
  await writeFile(list, lines.join('\\n') + '\\n');
  const recording = await store.putAndLink(list, { expiresSec: WEEK_SEC, contentType: 'text/plain' });

  return { watch: live.watch, files: lines.length, recording };
}`;
	const STATS = [
		{
			n: "~20",
			t: "lines of task code that you write",
			mine: true
		},
		{
			n: "~800",
			t: "lines of tested code that you do not write"
		},
		{
			n: "7",
			t: "settings written for you by integration:add"
		}
	];
	const WITHOUT = [
		"The ffmpeg command for live HLS, and a clean stop on cancel",
		"A web server, a player page and a video player script",
		"S3 request signing, uploads and expiring download links",
		"The network, inbound route, machine size and packages, found by trial and error"
	];
	const WITH_CODE = `ignitify integration:add stream
ignitify integration:add s3-storage

await stream(ctx, { source: video })
await store.putAndLink(file)`;
	const WHY = [
		{
			t: "Less code",
			d: "You keep only your own logic. The hard parts are in packages that are tested and kept up to date."
		},
		{
			t: "Correct settings",
			d: "Each integration shows a plan and writes nothing until you say yes. task:validate finds a hand edit that breaks it, before you deploy."
		},
		{
			t: "Safe by default",
			d: "The network stays closed: you add each host. Secrets are names in task.yaml, never values in your code."
		},
		{
			t: "One-command upgrades",
			d: "Run integration:add again to get the latest version. The plan shows only what is new."
		}
	];
	const PAYLOAD = `{"video":"https://media.example.com/rehearsal.mp4","start_delay_sec":10}`;
	return renderTemplate`${renderComponent($$result, "TutorialLayout", $$TutorialLayout, {
		"title": t.title,
		"description": t.summary
	}, {
		"default": ($$result) => renderTemplate`${renderComponent($$result, "Callout", $$Callout, {
			"kind": "note",
			"title": "CLI version"
		}, { "default": ($$result) => renderTemplate`You need ignitify CLI 1.2.2 or later for ${maybeRenderHead($$result)}<code>integration:add</code>. The outputs on this page come from real runs. See <a href="/docs/guides/integrations">Integrations</a>.` })}<div class="tut-proves"><p>What this tutorial shows</p><ul><li>Each integration shows a plan and changes nothing before you say yes.</li><li>A task with no network gets no open egress: <code>egress_allow</code> holds only the hosts that you add.</li><li>A value that conflicts is refused, never overwritten. The network type and the preset are only raised, and lists are joined.</li><li>A host that is different for each user is left for you to add ("you add").</li><li><code>task:validate</code> finds a hand edit that breaks an integration, before you deploy.</li></ul></div><h2>What you build</h2><p>A task for a product launch:</p><ol><li>It gives the viewer link in the run's progress, two minutes before the stream starts.</li><li>It streams the launch video live. Viewers open the link in a browser.</li><li>When the stream ends, it uploads the recording to your bucket and returns download links.</li></ol><p>Two integrations write the settings for this: <code>stream</code> and <code>s3-storage</code>. You write the task code.</p><h2>The journey</h2><p>You run a product launch. You want a live video that people can watch in a browser, and a recording in your own bucket after the event. Without help, that is a lot of work that is not your product: a live encoder, a player, a web server, S3 request signing, and the right network and machine settings.</p><p class="tut-why-lead"><strong>Integrations do that work for you.</strong> Each one is a tested package plus the settings it needs. You add it with one command, and you write only what is yours.</p><div class="tut-stats">${STATS.map((x) => renderTemplate`<div${addAttribute(`tut-stat${"mine" in x ? " tut-stat-mine" : ""}`, "class")}><span class="tut-stat-n">${x.n}</span><span class="tut-stat-t">${x.t}</span></div>`)}</div><div class="tut-vs"><div class="tut-vs-col tut-vs-without"><p class="tut-vs-h">Without integrations, you build</p><ul>${WITHOUT.map((w) => renderTemplate`<li>${w}</li>`)}</ul></div><div class="tut-vs-col tut-vs-with"><p class="tut-vs-h">With integrations, you write</p><pre><code>${WITH_CODE}</code></pre><p class="tut-vs-note">Two commands and two calls are the core of the task. The full code is in step 5.</p></div></div><p>The motion shows the <code>stream</code> part of this task from start to end: write it, deploy it, start a run, watch it live, and the clean-up.</p>${renderComponent($$result, "Motion", $$Motion, { "id": "integration" })}<h3>Why integrations matter</h3><div class="tut-why">${WHY.map((w) => renderTemplate`<div class="tut-why-card"><p class="tut-why-t">${w.t}</p><p>${w.d}</p></div>`)}</div><h3>The steps</h3><ol><li><strong>Create</strong> a task. You get a folder with <code>task.yaml</code> and <code>package.json</code>.</li><li><strong>Add the integrations.</strong> Each one shows a plan of the settings it needs, and writes them when you say yes.</li><li><strong>Finish <code>task.yaml</code>.</strong> You add two hosts: the host of the video and the host of your bucket.</li><li><strong>Write the code.</strong> About 20 lines: stream, upload, return.</li><li><strong>Deploy and run.</strong> Share the viewer link. The recording links come back in the run's result.</li></ol><h2>Before you start</h2><ul><li>A plan that allows inbound traffic and the <code>${STREAM_PRESET}</code> preset. This tutorial uses <a href="/pricing">Pro</a>.</li><li>The CLI, installed and signed in. See <a href="/docs/install">Install</a>.</li><li>An S3-compatible bucket and an access key for it.</li><li>The launch video at an <code>https://</code> address.</li></ul>${renderComponent($$result, "Callout", $$Callout, {
			"kind": "note",
			"title": "On the Team plan"
		}, { "default": ($$result) => renderTemplate`The Team plan also allows inbound traffic and <code>${STREAM_PRESET}</code>, but its longest run is 1 hour. Set <code>run.timeout_sec</code> to 3600 or less in <code>task.yaml</code>.` })}<h2>Step 1: Create the task</h2><p>Create a Node task. <code>task:create</code> also writes the <code>package.json</code> that the integrations need.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:create launch-event" })}<p>The task already has some settings of its own: a system package, a preset and an <code>interaction</code> value. Make <code>task.yaml</code> look like this:</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "yaml",
			"label": "task.yaml (before integrations)",
			"code": START_YAML
		})}<h2>Step 2: Add stream</h2><p>The first try is refused:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify integration:add stream --task launch-event",
			"output": `@ignitify-integrations/stream@0.1.3 · settings + code · runs ffmpeg
✗ execution.interaction is boundary-only but @ignitify-integrations/stream needs continuous: change it by hand or use another task`
		})}<p>Nothing is written. The stream sends progress while it runs, so it needs <code>interaction: continuous</code>. In <code>task.yaml</code>, change <code>interaction: boundary-only</code> to <code>interaction: continuous</code>, and run the command again:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify integration:add stream --task launch-event",
			"output": `@ignitify-integrations/stream@0.1.3 · settings + code · runs ffmpeg
  execution.network.type: none -> bidirectional
  run.preset: ${START_PRESET} -> ${STREAM_PRESET}
  + execution: duration long
  + execution.network: inbound_port 8080
  + execution.network.inbound_routes: /live/
  + build.system_packages: ffmpeg
you add:
  egress host: the host of an https source (for example raw.githubusercontent.com); none for a local file
Apply? [y/N] y
✓ @ignitify-integrations/stream@0.1.3 installed
✓ task.yaml updated`
		})}<p>The network type and the preset go up. <code>ffmpeg</code> is added to your system packages, and <code>imagemagick</code> stays. The task had no network, so <code>egress_allow</code> is written as <code>[]</code>: the task cannot connect to a host until you add one.</p><h2>Step 3: Add s3-storage</h2>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify integration:add s3-storage --task launch-event",
			"output": `@ignitify-integrations/s3-storage@0.1.1 · settings + code
  + secrets: S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY
you add:
  secret S3_ACCESS_KEY_ID (new): ignitify secret:set S3_ACCESS_KEY_ID --stdin
  secret S3_SECRET_ACCESS_KEY (new): ignitify secret:set S3_SECRET_ACCESS_KEY --stdin
  egress host: your bucket host: <bucket>.s3.<region>.amazonaws.com on AWS, or the host of your custom endpoint
Apply? [y/N] y
✓ @ignitify-integrations/s3-storage@0.1.1 installed
✓ task.yaml updated`
		})}<p>Add <code>stream</code> again. The plan has no changes, and <code>task.yaml</code>, <code>package.json</code> and the lockfile stay the same:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify integration:add stream --task launch-event",
			"output": `@ignitify-integrations/stream@0.1.3 · settings + code · runs ffmpeg
you add:
  egress host: the host of an https source (for example raw.githubusercontent.com); none for a local file
task.yaml already has every setting this integration needs; nothing to write`
		})}<h2>Step 4: Finish task.yaml</h2><p>Replace <code>egress_allow: []</code> with the two "you add" hosts: the host of the video, and the host of your bucket. The integrations wrote everything else.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "yaml",
			"label": "task.yaml",
			"code": FINAL_YAML
		})}<p><code>package.json</code> now lists <code>@ignitify-integrations/stream</code> and <code>@ignitify-integrations/s3-storage</code>.</p><h2>Step 5: Write the code</h2><p>The code has three parts: stream, upload, return. <code>startDelaySec</code> serves the player page and puts the viewer link in the run's progress before the video starts (120 s by default). <code>after: 'stop'</code> makes <code>stream()</code> return when the video ends, with the recording left on the disk.</p><p>The video and the delay come from the payload, so one deployment serves a rehearsal and the real event. The defaults are in <code>run.payload</code> in <code>task.yaml</code>.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "ts",
			"label": "index.ts",
			"code": INDEX_TS
		})}${renderComponent($$result, "Callout", $$Callout, {
			"kind": "note",
			"title": "The recording"
		}, { "default": ($$result) => renderTemplate`The recording is a playlist file and its segment files. Each file gets its own download link, valid for up to 7 days. The result holds one link: a text file that lists the download link of each file.` })}<h2>Step 6: Store the secrets</h2><p>Each command reads the value from stdin, so it stays out of your shell history. See <a href="/docs/guides/use-secrets">Use secrets</a>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify secret:set S3_ACCESS_KEY_ID --stdin" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify secret:set S3_SECRET_ACCESS_KEY --stdin" })}<h2>Step 7: Validate</h2><p><code>task:validate</code> also checks that <code>task.yaml</code> covers every integration of the task.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:validate launch-event",
			"output": `✓ task config valid`
		})}<h2>Step 8: Deploy and run</h2><p>The build installs ffmpeg and the packages from your lockfile.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:deploy launch-event" })}<p>Run a rehearsal first, with another video and a 10-second delay. <code>--payload</code> replaces the whole default payload for this run only, so give every key:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify task:run launch-event --payload '${PAYLOAD}'` })}<p>For the event, run with the defaults from <code>task.yaml</code>:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:run launch-event" })}<p>Each command prints the run id. A new deploy is needed only when you change the code or <code>task.yaml</code>, not for another video.</p><h2>Step 9: Share the viewer link</h2><p>During the wait before the stream starts, the viewer link is in the run's progress. <code>progress</code> holds the last chunk that the task sent, so copy the <code>watch</code> link during the wait:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:get <run-id> --full" })}${renderComponent($$result, "Code", $$Code, {
			"lang": "json",
			"label": "run:get --full (part)",
			"code": `{
  "status": "RUNNING",
  "progress": {
    "status": "waiting",
    "start_in_s": 120,
    "watch": "${WATCH}"
  }
}`
		})}<p>Open the link in a browser. Keep the <code>/</code> at the end. The page waits for the stream and starts to play when the video starts. Send the same link to your viewers.</p><p>While the video plays, <code>progress</code> shows the stream's state: <code>"status": "streaming"</code>, the seconds streamed, and the encode speed.</p><h2>Step 10: Get the recording</h2><p>When the video ends, the task uploads the recording and returns. Read the result:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:get <run-id>" })}${renderComponent($$result, "Code", $$Code, {
			"lang": "json",
			"label": "Result",
			"code": `{
  "watch": "${WATCH}",
  "files": <n>,
  "recording": "<download link of recording-links.txt>"
}`
		})}<p>Open the <code>recording</code> link. It is a text file with one download link for each file of the recording.</p><h2>Stop early or debug</h2><p>To stop the stream before the video ends, cancel the run. <code>stream()</code> stops ffmpeg and returns <code>cancelled: true</code>, and the task returns before the upload:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:cancel <run-id> --yes" })}<p>The task's console output (the ffmpeg log and the stream's messages):</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:logs <run-id>" })}<p>All runs of the task:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:list --task-name launch-event" })}<p>See <a href="/docs/guides/troubleshoot">Troubleshoot</a> for the common errors.</p><h2>Later: a hand edit breaks the task</h2><p>Months later, someone deletes the secret names and lowers the preset to save money. <code>task:validate</code> finds it before a deploy, not when ffmpeg runs out of memory during the event:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:validate launch-event",
			"output": `✗ @ignitify-integrations/s3-storage: secret S3_ACCESS_KEY_ID is missing from secrets
✗ @ignitify-integrations/s3-storage: secret S3_SECRET_ACCESS_KEY is missing from secrets
✗ @ignitify-integrations/stream: run.preset is ${START_PRESET}, needs at least ${STREAM_PRESET}`
		})}<h2>Later: upgrade an integration</h2><p>When a new version of an integration comes out, <code>task:validate</code> warns that your version is obsolete and names the latest one. The warning does not change the exit code.</p><p>To upgrade, run <code>integration:add</code> again. It installs the latest version, and the plan shows only the new settings:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify integration:add stream --task launch-event" })}<p>Then run <code>task:validate</code>. It now checks <code>task.yaml</code> against the new version. Then deploy.</p><h2>Clean up</h2><p>Delete what you no longer need. The files in your bucket stay until you delete them there.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify deployment:delete <deployment-id> --yes" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:delete launch-event --yes" })}<h2>Next steps</h2><ul><li>Read how integrations work: <a href="/docs/guides/integrations">Integrations</a>.</li><li>Build the stream by hand, with no integration: <a href="/tutorials/streaming-job">Live video streaming job</a>.</li><li>Allow other hosts: <a href="/docs/guides/network-access">Network access</a>.</li><li>Read every <code>task.yaml</code> key: <a href="/docs/reference/task-yaml">task.yaml reference</a>.</li></ul>`,
		"header": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result) => renderTemplate`<h1>${t.title}</h1><p class="def">${t.summary}</p><div class="tut-meta"><span class="tut-chip">${t.runtime}</span>${t.tags.map((tag) => renderTemplate`<span class="tut-chip">${tag}</span>`)}<span class="tut-chip">${t.duration}</span><span class="tut-chip tut-chip-tier">${tierName} tier</span></div>` })}`
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/launch-event.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/launch-event.astro";
var $$url = "/tutorials/launch-event";
//#endregion
//#region \0virtual:astro:page:src/pages/tutorials/launch-event@_@astro
var page = () => launch_event_exports;
//#endregion
export { page };
