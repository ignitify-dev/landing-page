import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { n as getEntry } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Callout } from "./Callout_CbSyIQwi.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { t as $$TutorialLayout } from "./TutorialLayout_BpUH9Gak.mjs";
import { t as $$FileTabs } from "./FileTabs_dpTW2kFW.mjs";
//#region src/components/tutorials/LoadChart.astro
createAstro("https://ignitify.dev");
var $$LoadChart = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LoadChart;
	const { steps, capMbit } = Astro.props, W = 640, H = 260, L = 44;
	const top = Math.ceil(Math.max(capMbit, ...steps.map((s) => s.mbit_s)) / 20) * 20 + 10;
	const plotW = 584, plotH = 204;
	const band = plotW / steps.length;
	const y = (v) => 220 - v / top * plotH;
	const ticks = Array.from({ length: Math.floor(top / 20) + 1 }, (_, i) => i * 20);
	const label = `Throughput by number of viewers. It rises with viewers and stays flat at about ${capMbit} Mbit/s from ${steps.find((s) => s.mbit_s >= capMbit * .97)?.viewers ?? "?"} viewers; freezes start at ${steps.find((s) => s.stalls > 0)?.viewers ?? "?"} viewers.`;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="tut-chart"><svg${addAttribute(`0 0 ${W} ${H}`, "viewBox")} role="img"${addAttribute(label, "aria-label")}>${ticks.map((t) => renderTemplate`<g><line class="tut-grid"${addAttribute(L, "x1")}${addAttribute(628, "x2")}${addAttribute(y(t), "y1")}${addAttribute(y(t), "y2")}></line><text class="tut-axis"${addAttribute(38, "x")}${addAttribute(y(t) + 4, "y")} text-anchor="end">${t}</text></g>`)}${steps.map((s, i) => {
		const x = L + i * band + band * .18;
		const w = band * .64;
		return renderTemplate`<g><rect${addAttribute(s.stalls > 0 ? "tut-bar tut-bar-bad" : "tut-bar", "class")}${addAttribute(x, "x")}${addAttribute(y(s.mbit_s), "y")}${addAttribute(w, "width")}${addAttribute(220 - y(s.mbit_s), "height")} rx="2"></rect><text class="tut-axis"${addAttribute(x + w / 2, "x")}${addAttribute(236, "y")} text-anchor="middle">${s.viewers}</text>${s.stalls > 0 && renderTemplate`<text class="tut-stall"${addAttribute(x + w / 2, "x")}${addAttribute(y(s.mbit_s) - 6, "y")} text-anchor="middle">${s.stalls}</text>`}</g>`;
	})}<line class="tut-cap"${addAttribute(L, "x1")}${addAttribute(628, "x2")}${addAttribute(y(capMbit), "y1")}${addAttribute(y(capMbit), "y2")}></line><text class="tut-cap-t"${addAttribute(50, "x")}${addAttribute(y(capMbit) - 6, "y")}>bandwidth cap ${capMbit} Mbit/s</text><text class="tut-axis"${addAttribute(336, "x")}${addAttribute(254, "y")} text-anchor="middle">viewers</text><text class="tut-axis" x="12"${addAttribute(118, "y")} text-anchor="middle"${addAttribute(`rotate(-90 12 118)`, "transform")}>Mbit/s</text></svg><figcaption class="tiny">Bars: data delivered to all viewers. Red bars and numbers: steps where viewers froze, and how many freezes.</figcaption></figure>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/tutorials/LoadChart.astro", void 0);
//#endregion
//#region tutorials/streaming-job/index.ts?raw
var streaming_job_default = "// Live video stream: ffmpeg reads a video from a URL and re-streams it as HLS that anyone can watch.\n//\n// Payload: { url: string (https), seconds?: number (default 60, max 300), height?: number (default 480),\n//            start_delay_sec?: number (default 0: stream at once; set it to wait before streaming),\n//            linger_sec?: number (default: none) }\n// After the stream ends the task keeps serving, so viewers can replay the whole video. It stops only on\n// SIGTERM (`ignitify run:cancel <run-id>`), or at the platform's hard cap. Set linger_sec to stop on its own instead.\n//\n// Outbound: ffmpeg downloads the source (egress_allow in task.yaml).\n// Inbound:  an HTTP server on inbound_port serves /live/ (inbound_routes in task.yaml):\n//             /live/              a player page (hls.js), for any browser\n//             /live/index.m3u8    the HLS playlist, for VLC, Safari or ffplay\n// ctx.chunk(data) streams the viewer URL first, then progress (max 10 KiB each).\n//\n// This file is the shell: server, ffmpeg process, signals. The pure parts live in utils.ts.\n\nimport { spawn, execFile, type ChildProcessByStdio } from \"node:child_process\";\nimport { createServer, type Server, type ServerResponse } from \"node:http\";\nimport { promisify } from \"node:util\";\nimport { mkdir, readFile, rm } from \"node:fs/promises\";\nimport path from \"node:path\";\nimport type { Readable } from \"node:stream\";\nimport {\n  ROUTE, PROGRESS_START, ffmpegArgs, parseInput, parseProgress, resolveRoute, sleep, stopSignal, viewerUrl,\n  type ProgressReport, type Route, type StreamInput,\n} from \"./utils.js\";\n\ntype Ctx = {\n  chunk(data: unknown): void;\n  metric(name: string, value: number): void;\n  ready(): Promise<void> | void;\n  callback?: { url: string };\n};\n\ntype RunResult =\n  | { success: true; cancelled: true; stage: \"before-stream\" }\n  | { success: true; cancelled: boolean; watch: string | undefined; streamed_s: number; height: number; wall_ms: number };\n\ntype Ffmpeg = ChildProcessByStdio<null, Readable, Readable>;\n\nconst execFileP = promisify(execFile);\nconst PORT = 8080; // must equal execution.network.inbound_port\n// The VM has no /tmp. The only writable disk is the scratch disk, mounted at /mnt/scratch (the task's HOME).\nconst HLS_DIR = path.join(process.env.HOME ?? \"/mnt/scratch\", \"hls\");\nconst CHUNK_EVERY_MS = 2000;\nconst STDERR_TAIL_CHARS = 2000;\n\nexport async function init(): Promise<void> {\n  const { stdout } = await execFileP(\"ffmpeg\", [\"-version\"]);\n  console.log(stdout.split(\"\\n\")[0]);\n}\n\nfunction respond(route: Route, res: ServerResponse): void {\n  if (route.kind === \"player\") {\n    res.writeHead(200, { \"content-type\": \"text/html; charset=utf-8\" }).end(route.body);\n    return;\n  }\n  if (route.kind === \"none\") {\n    res.writeHead(404).end();\n    return;\n  }\n  readFile(route.file).then(\n    (body) => res.writeHead(200, { \"content-type\": route.type, \"cache-control\": \"no-cache\" }).end(body),\n    () => res.writeHead(404).end(),\n  );\n}\n\nasync function startServer(): Promise<Server> {\n  const server = createServer((req, res) => respond(resolveRoute(new URL(req.url ?? \"/\", \"http://x\").pathname, HLS_DIR), res));\n  await new Promise<void>((resolve) => server.listen(PORT, resolve));\n  return server;\n}\n\n// Wait `ms`, or less if a stop comes first.\nconst sleepUnlessStopped = (ms: number, stopped: Promise<void>): Promise<void> => Promise.race([stopped, sleep(ms)]);\n\nfunction startFfmpeg(input: StreamInput, stopped: Promise<void>): Ffmpeg {\n  const ff = spawn(\"ffmpeg\", ffmpegArgs(input, path.join(HLS_DIR, \"index.m3u8\")), { stdio: [\"ignore\", \"pipe\", \"pipe\"] });\n  void stopped.then(() => ff.kill(\"SIGTERM\"));\n  return ff;\n}\n\n// Keep only the last STDERR_TAIL_CHARS of stderr, for the error message.\nfunction stderrTail(ff: Ffmpeg): () => string {\n  let tail = \"\";\n  ff.stderr.on(\"data\", (b: Buffer) => { tail = (tail + String(b)).slice(-STDERR_TAIL_CHARS); });\n  return () => tail;\n}\n\n// One `streaming` chunk and metric per CHUNK_EVERY_MS, and always for the last report.\nfunction reportProgress(ff: Ffmpeg, ctx: Ctx, seconds: number): void {\n  let state = PROGRESS_START;\n  let lastChunk = 0;\n  const emit = (r: ProgressReport): void => {\n    if (Date.now() - lastChunk < CHUNK_EVERY_MS && !r.end) return;\n    lastChunk = Date.now();\n    ctx.chunk({ status: \"streaming\", time_s: Number(r.doneSec.toFixed(1)), of_s: seconds, speed: r.speed });\n    ctx.metric(\"streamed_seconds\", r.doneSec);\n  };\n  ff.stdout.on(\"data\", (b: Buffer) => {\n    const parsed = parseProgress(state, String(b));\n    state = parsed.state;\n    parsed.reports.forEach(emit);\n  });\n}\n\nfunction exitCode(ff: Ffmpeg): Promise<number> {\n  return new Promise((resolve, reject) => {\n    ff.on(\"error\", reject);\n    ff.on(\"close\", (c) => resolve(c ?? -1));\n  });\n}\n\nexport async function run(payload: Record<string, unknown>, ctx: Ctx): Promise<RunResult> {\n  const input = parseInput(payload);\n  const { stopped, isStopped } = stopSignal();\n\n  await rm(HLS_DIR, { recursive: true, force: true });\n  await mkdir(HLS_DIR, { recursive: true });\n\n  const server = await startServer();\n  await ctx.ready();\n\n  const watch = viewerUrl(ctx.callback?.url);\n  ctx.chunk({ status: \"live\", watch, playlist: watch && `${watch}index.m3u8` });\n  console.log(`serving ${ROUTE} on :${PORT}${watch ? `, public at ${watch}` : \"\"}`);\n\n  // Stay up before streaming, so the viewer can open the link first.\n  if (input.startDelaySec > 0) {\n    ctx.chunk({ status: \"waiting\", start_in_s: input.startDelaySec, watch });\n    console.log(`streaming starts in ${input.startDelaySec} s`);\n    await sleepUnlessStopped(input.startDelaySec * 1000, stopped);\n  }\n  if (isStopped()) {\n    server.close();\n    return { success: true, cancelled: true, stage: \"before-stream\" };\n  }\n\n  const ff = startFfmpeg(input, stopped);\n  const stderr = stderrTail(ff);\n  reportProgress(ff, ctx, input.seconds);\n\n  const started = Date.now();\n  const code = await exitCode(ff);\n  if (code !== 0 && !isStopped()) {\n    server.close();\n    throw new Error(`ffmpeg exited with ${code}: ${stderr().trim()}`);\n  }\n\n  if (!isStopped()) {\n    ctx.chunk({ status: \"ended\", replay_until: input.lingerSec ? `${input.lingerSec} s` : \"run:cancel\", watch });\n    console.log(\"stream ended, still serving the replay until the run is cancelled\");\n    const lingerMs = (input.lingerSec ?? 0) * 1000;\n    await (lingerMs > 0 ? sleepUnlessStopped(lingerMs, stopped) : stopped);\n  }\n  server.close();\n  return { success: true, cancelled: isStopped(), watch, streamed_s: input.seconds, height: input.height, wall_ms: Date.now() - started };\n}\n";
//#endregion
//#region tutorials/streaming-job/utils.ts?raw
var utils_default = "// Helpers for the live stream task. All pure (payload parsing, ffmpeg arguments, the -progress parser,\n// route resolution, the player page), except sleep and stopSignal. index.ts wires the effects.\n\nimport path from \"node:path\";\n\nexport const ROUTE = \"/live/\"; // must equal the inbound_routes prefix\nconst MAX_SECONDS = 300;\n\nexport type StreamInput = {\n  readonly url: string;\n  readonly seconds: number;\n  readonly height: number;\n  readonly startDelaySec: number;\n  readonly lingerSec: number | undefined;\n};\n\n// One finished -progress report: the encoded time and ffmpeg's speed; `end` on the last one.\nexport type ProgressReport = {\n  readonly doneSec: number;\n  readonly speed: string;\n  readonly end: boolean;\n};\n\n// The parser's carry-over between stdout reads: a partial line, and the fields of the open report.\nexport type ProgressState = {\n  readonly buf: string;\n  readonly fields: Readonly<Record<string, string>>;\n};\n\nexport type Route =\n  | { readonly kind: \"player\"; readonly body: string }\n  | { readonly kind: \"file\"; readonly file: string; readonly type: string }\n  | { readonly kind: \"none\" };\n\nconst TYPES: Readonly<Record<string, string>> = {\n  \".m3u8\": \"application/vnd.apple.mpegurl\",\n  \".ts\": \"video/mp2t\",\n};\n\nconst PLAYER = `<!doctype html><meta charset=\"utf-8\"><title>Live</title>\n<body style=\"margin:0;background:#000\">\n<video id=\"v\" controls autoplay muted playsinline style=\"width:100%;height:100vh\"></video>\n<script src=\"https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js\"><\/script>\n<script>\n  const v = document.getElementById(\"v\"), src = \"index.m3u8\";\n  // The playlist does not exist until the stream starts: poll until it does, then play.\n  const play = () => {\n    if (v.canPlayType(\"application/vnd.apple.mpegurl\")) v.src = src;\n    else { const h = new Hls(); h.loadSource(src); h.attachMedia(v); }\n  };\n  const wait = () => fetch(src, { cache: \"no-store\" }).then((r) => (r.ok ? play() : setTimeout(wait, 2000)), () => setTimeout(wait, 2000));\n  wait();\n<\/script></body>`;\n\nconst positiveOr = (v: unknown, d: number): number => (typeof v === \"number\" && v > 0 ? v : d);\n\n// Throws on a missing or non-https url; every other field falls back to its default.\nexport function parseInput(payload: Readonly<Record<string, unknown>>): StreamInput {\n  const url = typeof payload.url === \"string\" ? new URL(payload.url) : undefined;\n  if (!url || url.protocol !== \"https:\") throw new Error(\"payload.url must be an https URL\");\n  return {\n    url: url.toString(),\n    seconds: Math.min(positiveOr(payload.seconds, 60), MAX_SECONDS),\n    height: positiveOr(payload.height, 480),\n    startDelaySec: typeof payload.start_delay_sec === \"number\" ? Math.max(0, payload.start_delay_sec) : 0,\n    lingerSec: typeof payload.linger_sec === \"number\" && payload.linger_sec > 0 ? payload.linger_sec : undefined,\n  };\n}\n\n// -re reads at playback speed, so the stream is live, not a fast transcode.\n// \"event\" playlist keeps every segment, so a late viewer can still seek to the start.\nexport function ffmpegArgs(input: StreamInput, playlist: string): readonly string[] {\n  return [\n    \"-hide_banner\", \"-nostats\", \"-loglevel\", \"error\", \"-progress\", \"pipe:1\",\n    \"-re\", \"-i\", input.url, \"-t\", String(input.seconds),\n    \"-vf\", `scale=-2:${input.height}`, \"-c:v\", \"libx264\", \"-preset\", \"veryfast\", \"-g\", \"48\", \"-sc_threshold\", \"0\",\n    \"-c:a\", \"aac\", \"-b:a\", \"128k\",\n    \"-f\", \"hls\", \"-hls_time\", \"4\", \"-hls_list_size\", \"0\", \"-hls_playlist_type\", \"event\",\n    playlist,\n  ];\n}\n\nexport const PROGRESS_START: ProgressState = { buf: \"\", fields: {} };\n\n// -progress prints key=value lines; a \"progress=\" line ends one report.\n// Text in, finished reports out; a partial last line waits in `buf` for the next read.\nexport function parseProgress(state: ProgressState, text: string): { state: ProgressState; reports: readonly ProgressReport[] } {\n  const lines = (state.buf + text).split(\"\\n\");\n  const buf = lines.pop() ?? \"\";\n  const none: readonly ProgressReport[] = [];\n  const start = { fields: state.fields, reports: none };\n  const { fields, reports } = lines.reduce((acc, line) => {\n    const [k, v] = line.split(\"=\");\n    if (k === undefined || v === undefined) return acc;\n    const next = { ...acc.fields, [k]: v };\n    if (k !== \"progress\") return { ...acc, fields: next };\n    const report = { doneSec: Number(next.out_time_us ?? 0) / 1e6, speed: next.speed ?? \"\", end: v === \"end\" };\n    return { fields: {}, reports: [...acc.reports, report] };\n  }, start);\n  return { state: { buf, fields }, reports };\n}\n\n// Serve only .m3u8/.ts files inside `dir`, under ROUTE, plus the player page. Everything else is 404.\nexport function resolveRoute(urlPath: string, dir: string): Route {\n  if (urlPath === ROUTE || urlPath === ROUTE.slice(0, -1)) return { kind: \"player\", body: PLAYER };\n  const name = path.basename(urlPath);\n  const type = TYPES[path.extname(name)];\n  if (!urlPath.startsWith(ROUTE) || !type) return { kind: \"none\" };\n  return { kind: \"file\", file: path.join(dir, name), type };\n}\n\n// The public address: the deployment hostname, taken from this run's callback URL.\nexport function viewerUrl(callbackUrl: string | undefined): string | undefined {\n  return callbackUrl ? `${new URL(callbackUrl).origin}${ROUTE}` : undefined;\n}\n\nexport const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));\n\n// A graceful `run:cancel` arrives as SIGTERM. Node's default would exit at once, leaving ffmpeg behind.\n// `stopped` resolves on the first SIGTERM/SIGINT; `isStopped()` reads the same fact synchronously.\nexport function stopSignal(): { stopped: Promise<void>; isStopped: () => boolean } {\n  const stopped = new Promise<void>((resolve) => {\n    process.once(\"SIGTERM\", resolve);\n    process.once(\"SIGINT\", resolve);\n  });\n  let flag = false;\n  void stopped.then(() => { flag = true; });\n  return { stopped, isStopped: () => flag };\n}\n";
//#endregion
//#region tutorials/streaming-job/task.yaml?raw
var task_default = "schema_version: 1\nslug: streaming-job             # must match this directory's name\nruntime: node\n\n# Installed into the image at build time.\nbuild:\n  system_packages: [ffmpeg]\n\nexecution:\n  duration: long                # runs until you cancel it\n  interaction: continuous       # ctx.chunk updates reach `run:get` while the run is live\n  network:\n    type: bidirectional         # outbound to the video host, inbound from viewers\n    egress_allow: [raw.githubusercontent.com]   # the only host the task may reach\n    inbound_port: 8080          # must equal PORT in index.ts\n    inbound_routes:             # the only public paths (\"/\" is refused: it covers /__callback/)\n      - prefix: /live/\n    inbound_max_concurrent: 16  # requests in flight at one time, not viewers\n\nrun:\n  payload:\n    url: https://raw.githubusercontent.com/chthomos/video-media-samples/master/big-buck-bunny-1080p-30sec.mp4\n    seconds: 30\n  preset: std.medium            # 512 MiB: live x264 runs out of memory on std.micro\n  timeout_sec: 21600            # silence budget; heartbeats extend it up to the hard cap. The task normally ends on run:cancel\n";
//#endregion
//#region tutorials/streaming-job/README.md?raw
var README_default = "# streaming-job\n\nffmpeg downloads a video from an https URL and re-streams it as live HLS. Anyone with the link can watch. After the stream ends, the task keeps serving the whole video for replay until you cancel the run.\n\n## Files\n\n- `task.yaml`: slug, runtime, build packages, task nature and default run parameters.\n- `index.ts`: the shell: `init()`, `run()`, the HTTP server, the ffmpeg process and signals.\n- `utils.ts`: the pure parts: payload parsing, ffmpeg arguments, the progress parser, routes.\n\n## Payload\n\n| Field | Default | Meaning |\n| :-- | :-- | :-- |\n| `url` | none | https URL of the source video (required) |\n| `seconds` | 60 | Seconds to stream (at most 300) |\n| `height` | 480 | Output height in pixels |\n| `start_delay_sec` | 0 | Wait this long before streaming starts |\n| `linger_sec` | none | Stop on its own this long after the stream ends. Leave out to run until `run:cancel` |\n\n## Lifecycle\n\n```bash\nignitify login\nignitify task:create streaming-job\nignitify task:validate streaming-job --review-packages\nignitify task:deploy streaming-job\nignitify task:run streaming-job\nignitify run:get <run-id> --full          # progress.watch is the viewer address\nignitify run:cancel <run-id> --yes        # graceful stop (SIGTERM)\n```\n\nWatch it at `https://<route-id>--<tenant-id>.ignitify.app/live/` in a browser, or play the playlist:\n\n```bash\nffplay https://<route-id>--<tenant-id>.ignitify.app/live/index.m3u8\n```\n\nDeploy again after every change to `index.ts`, `utils.ts` or `task.yaml`.\n";
var loadtest_default = {
	measured: "2026-10-20",
	where: "Ignitify test fleet (dev-class hosts), std.medium, Pro tier limits",
	source: "Big Buck Bunny 1080p, 30 s, re-encoded to 480p HLS: 8 segments, about 1–1.8 Mbit/s",
	viewer: "simulated HLS player: 12 s buffer, 3 retries (0.5 s, 1 s, 1.5 s), one connection each",
	steps: [
		{
			"viewers": 8,
			"refused_pct": 0,
			"mbit_s": 11.1,
			"p95_ms": 82,
			"stalls": 0,
			"stall_s": 0
		},
		{
			"viewers": 16,
			"refused_pct": 0,
			"mbit_s": 24.1,
			"p95_ms": 1002,
			"stalls": 0,
			"stall_s": 0
		},
		{
			"viewers": 24,
			"refused_pct": 0,
			"mbit_s": 30.5,
			"p95_ms": 259,
			"stalls": 0,
			"stall_s": 0
		},
		{
			"viewers": 32,
			"refused_pct": .4,
			"mbit_s": 38.6,
			"p95_ms": 64,
			"stalls": 0,
			"stall_s": 0
		},
		{
			"viewers": 48,
			"refused_pct": 9.1,
			"mbit_s": 56.7,
			"p95_ms": 300,
			"stalls": 0,
			"stall_s": 0
		},
		{
			"viewers": 64,
			"refused_pct": 13.9,
			"mbit_s": 74.1,
			"p95_ms": 726,
			"stalls": 0,
			"stall_s": 0
		},
		{
			"viewers": 80,
			"refused_pct": 14.4,
			"mbit_s": 94.4,
			"p95_ms": 968,
			"stalls": 0,
			"stall_s": 0
		},
		{
			"viewers": 96,
			"refused_pct": 53.7,
			"mbit_s": 101.1,
			"p95_ms": 1467,
			"stalls": 4,
			"stall_s": 5.7
		},
		{
			"viewers": 128,
			"refused_pct": 76.5,
			"mbit_s": 98.2,
			"p95_ms": 1657,
			"stalls": 15,
			"stall_s": 50
		},
		{
			"viewers": 160,
			"refused_pct": 82.3,
			"mbit_s": 98.1,
			"p95_ms": 1684,
			"stalls": 41,
			"stall_s": 334
		}
	]
};
//#endregion
//#region src/pages/tutorials/streaming-job.astro
var streaming_job_exports = /* @__PURE__ */ __exportAll({
	default: () => $$StreamingJob,
	file: () => $$file,
	url: () => $$url
});
var $$StreamingJob = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("tutorials", "streaming-job");
	if (!entry) throw new Error("[tutorials] missing src/content/tutorials/streaming-job.yaml");
	const t = entry.data;
	const tierName = t.tier[0].toUpperCase() + t.tier.slice(1);
	const WATCH = "https://<route-id>--<tenant-id>.ignitify.app/live/";
	const CAP_MBIT = 100;
	const firstStall = loadtest_default.steps.find((s) => s.stalls > 0);
	const lastClean = [...loadtest_default.steps].reverse().find((s) => s.stalls === 0 && s.viewers < (firstStall?.viewers ?? Infinity));
	return renderTemplate`${renderComponent($$result, "TutorialLayout", $$TutorialLayout, {
		"title": t.title,
		"description": t.summary
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="tut-proves"><p>What this tutorial proves</p><ul><li>A task reaches the internet only through an allow-list (<code>egress_allow</code>).</li><li>A deployment gets its own public HTTPS address, and the task chooses which paths are public.</li><li>A run can report live progress while it runs (<code>ctx.chunk</code>).</li><li>A run can last until you stop it, and it stops cleanly on <code>run:cancel</code> (SIGTERM).</li><li>System tools such as ffmpeg are installed into the image at build time.</li></ul></div><h2>What you build</h2><p>A task that turns any https video into a live stream that anyone can watch in a browser.</p><ol><li>The task starts a small HTTP server on port 8080 and tells the platform it is ready.</li><li>ffmpeg downloads the video (outbound) and re-encodes it to HLS at playback speed.</li><li>Viewers open <code>/live/</code> on the deployment's public address (inbound).</li><li>When the video ends, the task keeps serving it for replay until you cancel the run.</li></ol>${renderComponent($$result, "Code", $$Code, {
			"lang": "bash",
			"label": "the path of a request",
			"code": `viewer ──HTTPS──▶ <route-id>--<tenant-id>.ignitify.app/live/ ──▶ VM :8080 (Node server + ffmpeg)
                                                                      │
VM ──HTTPS (egress_allow only)──▶ raw.githubusercontent.com (the source video)`
		})}<h2>The task's nature</h2><p>In <code>task.yaml</code> you declare what the task is. The platform decides how to run it.</p><div class="drows"><table><thead><tr><th scope="col">Setting</th><th scope="col">Value</th><th scope="col">Why</th></tr></thead><tbody><tr><td data-label="Setting"><code>network.type</code></td><td data-label="Value"><code>bidirectional</code></td><td data-label="Why">Outbound to fetch the video, inbound so viewers can connect.</td></tr><tr><td data-label="Setting"><code>egress_allow</code></td><td data-label="Value"><code>[raw.githubusercontent.com]</code></td><td data-label="Why">The only host the task may reach. A redirect to another host is blocked.</td></tr><tr><td data-label="Setting"><code>inbound_port</code></td><td data-label="Value"><code>8080</code></td><td data-label="Why">The port the task listens on. It must match <code>PORT</code> in <code>index.ts</code>.</td></tr><tr><td data-label="Setting"><code>inbound_routes</code></td><td data-label="Value"><code>/live/</code></td><td data-label="Why">Only these paths are public. Everything else answers 404.</td></tr><tr><td data-label="Setting"><code>interaction</code></td><td data-label="Value"><code>continuous</code></td><td data-label="Why">Progress chunks reach <code>run:get</code> while the run is live.</td></tr><tr><td data-label="Setting"><code>duration</code></td><td data-label="Value"><code>long</code></td><td data-label="Why">The run lasts until you cancel it. Heartbeats keep it alive past <code>timeout_sec</code>, up to the platform's hard cap.</td></tr><tr><td data-label="Setting"><code>preset</code></td><td data-label="Value"><code>std.medium</code></td><td data-label="Why">512 MiB. Live x264 runs out of memory on <code>std.micro</code>.</td></tr></tbody></table></div><h2>Before you start</h2><ul><li>A plan that allows inbound traffic and the <code>std.medium</code> preset. This tutorial uses <a href="/pricing">Pro</a>.</li><li>The CLI, installed and signed in. See <a href="/docs/install">Install</a>.</li></ul>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify login" })}${renderComponent($$result, "Callout", $$Callout, {
			"kind": "note",
			"title": "On the Team plan"
		}, { "default": ($$result) => renderTemplate`The Team plan also allows inbound traffic and <code>std.medium</code>, but its longest run is 1 hour. Set <code>run.timeout_sec</code> to 3600 or less in <code>task.yaml</code>.` })}<h2>Create the task</h2><p>Register the name and get a task folder with starter files. You replace the starter files in the next step.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:create streaming-job" })}${renderComponent($$result, "Code", $$Code, {
			"lang": "bash",
			"label": "tasks/streaming-job/",
			"code": `tasks/streaming-job/
├── task.yaml     the config: nature, network, build packages, run defaults
├── index.ts      the shell: init(), run(), server, ffmpeg, signals
├── utils.ts      the pure parts: payload, ffmpeg arguments, progress parser, routes
└── README.md     how to run it`
		})}<h2>The code</h2><p><code>index.ts</code> wires the server, the ffmpeg process and the stop signal. <code>utils.ts</code> holds the pure functions, so they are easy to read and to test. The platform bundles both files into one, so a relative import works.</p>${renderComponent($$result, "FileTabs", $$FileTabs, {
			"id": "sj-files",
			"files": [
				{
					name: "index.ts",
					code: streaming_job_default,
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
		})}<h2>Validate</h2><p>Check <code>task.yaml</code> on your machine. Nothing is sent and nothing is built.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:validate streaming-job",
			"output": `✓ task config valid`
		})}<p>Ask the platform's AI to review the system packages and estimate the build time. It is advice only and never changes the exit code. Only the package names and the runtime leave your machine.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:validate streaming-job --review-packages",
			"output": `✓ task config valid

Package review
  AI advice only. A suggestion is not checked against Debian.

  Package  Verdict  Size     Note  Suggest
  ───────  ───────  ───────  ────  ───────
  ffmpeg   ok       <size>

No concerns found in 1 package.

Build time
  Added          about <range> (model estimate)
  Applies to     the first deploy of this list. A later code-only redeploy reuses the drive.`
		})}<p>List the files that a deploy would upload:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:pack streaming-job" })}<h2>Deploy</h2><p>Upload the source. The platform installs ffmpeg, bundles <code>index.ts</code> and <code>utils.ts</code>, and builds the image.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify task:deploy streaming-job",
			"output": `✓ Image built · <build time>

✓ Deployment Created
deployment_id  <deployment-id>`
		})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify deployment:get <deployment-id>" })}<p>Deploy again after every change to <code>index.ts</code>, <code>utils.ts</code> or <code>task.yaml</code>. Each deployment gets its own public address.</p><h2>Run and watch</h2><p>Start a run. The default payload in <code>task.yaml</code> streams a 30 s Big Buck Bunny clip, so no flags are needed.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:run streaming-job" })}<p>To stream another video, pass a payload. Add the video's host to <code>egress_allow</code> first, and redeploy.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify task:run streaming-job --payload '{"url":"https://raw.githubusercontent.com/chthomos/video-media-samples/master/big-buck-bunny-1080p-30sec.mp4","seconds":30,"height":360}'` })}<p>Find the viewer address. <code>progress</code> holds the last chunk the task sent, and its <code>watch</code> field is the address. The plain <code>run:get</code> view does not show <code>progress</code>, so use <code>--full</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:get <run-id> --full" })}${renderComponent($$result, "Code", $$Code, {
			"lang": "json",
			"label": "run:get --full (part)",
			"code": `{
  "status": "RUNNING",
  "progress": {
    "status": "live",
    "watch": "${WATCH}",
    "playlist": "${WATCH}index.m3u8"
  }
}`
		})}<p>Open the <code>watch</code> address in a browser, or play the playlist with ffplay or VLC:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ffplay ${WATCH}index.m3u8` })}<p>The task log shows the same address and any ffmpeg error:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify run:logs <run-id>",
			"output": `[task] INFO: serving /live/ on :8080, public at ${WATCH}`
		})}<p>When the video ends, the last chunk becomes <code>${`{"status":"ended","replay_until":"run:cancel"}`}</code>. The run stays <code>RUNNING</code>, and viewers can replay the whole video.</p><h2>Stop and clean up</h2><p>A graceful cancel sends the task SIGTERM. The task stops ffmpeg, closes the server and returns <code>${`{"cancelled": true}`}</code>. It arrives with the next heartbeat, so it can take about 5 s.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:cancel <run-id> --yes" })}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify run:cancel <run-id> --yes --force",
			"label": "kill now"
		})}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify run:get <run-id>",
			"label": "status is CANCELLED"
		})}<p>Delete what you no longer need:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify deployment:delete <deployment-id> --yes" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify task:delete streaming-job --yes" })}<h2>Load test</h2><p>How many viewers can one run serve? We ran simulated viewers against one run and added more in steps.</p><ul><li><strong>Viewer:</strong> ${loadtest_default.viewer}.</li><li><strong>Video:</strong> ${loadtest_default.source}.</li><li><strong>Where:</strong> ${loadtest_default.where}, ${loadtest_default.measured}.</li></ul>${renderComponent($$result, "LoadChart", $$LoadChart, {
			"steps": loadtest_default.steps,
			"capMbit": CAP_MBIT
		})}<div class="drows"><table><thead><tr><th scope="col">Viewers</th><th scope="col">Refused requests</th><th scope="col">Throughput</th><th scope="col">p95 segment</th><th scope="col">Freezes</th></tr></thead><tbody>${loadtest_default.steps.map((s) => renderTemplate`<tr><td data-label="Viewers">${s.viewers}</td><td data-label="Refused requests">${s.refused_pct}%</td><td data-label="Throughput">${s.mbit_s} Mbit/s</td><td data-label="p95 segment">${(s.p95_ms / 1e3).toFixed(1)} s</td><td data-label="Freezes">${s.stalls === 0 ? "0" : `${s.stalls} (${s.stall_s} s)`}</td></tr>`)}</tbody></table></div><h3>What the numbers mean</h3><ul><li><strong>The task never failed.</strong> No test step caused a crash or a connection error. The platform refused extra requests before they reached the VM.</li><li><strong>Refusals start at about 32 viewers, but nobody notices.</strong> <code>inbound_max_concurrent: 16</code> counts requests at the same instant, not viewers. A viewer downloads a 4 s segment in a fraction of a second, then waits. When more than 16 downloads overlap, one is refused, and the player retries half a second later. Its 12 s buffer hides the wait.</li><li><strong>Freezes start at ${firstStall?.viewers} viewers, and the cause is bandwidth.</strong> Throughput stays flat at the plan's cap of about ${CAP_MBIT} Mbit/s. Downloads slow down, more of them overlap, retries fail, and a buffer runs empty.</li><li><strong>So one run serves about ${lastClean?.viewers} viewers at 480p</strong> with no freezes. A lower <code>height</code> uses less bandwidth per viewer and raises that number.</li></ul>${renderComponent($$result, "Callout", $$Callout, {
			"kind": "warning",
			"title": "Test servers, not production"
		}, { "default": ($$result) => renderTemplate`These numbers come from our test servers on dev-class hosts. They show where the limits are, not a guaranteed capacity. Your numbers depend on your plan's bandwidth and the video's bitrate.` })}<h2>Next steps</h2><ul><li>The <code>stream</code> <a href="/docs/guides/integrations">integration</a> writes these settings and this plumbing for you.</li><li>Change <code>height</code> to 360 or 720 and compare the load-test numbers.</li><li>Stream from another host: add it to <code>egress_allow</code> and redeploy. See <a href="/docs/guides/network-access">Network access</a>.</li><li>Learn how runs end and what each status means: <a href="/docs/concepts/lifecycle-and-statuses">Lifecycle and statuses</a>.</li><li>Read every <code>task.yaml</code> key: <a href="/docs/reference/task-yaml">task.yaml reference</a>.</li></ul>`,
		"header": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result) => renderTemplate`<h1>${t.title}</h1><p class="def">${t.summary}</p><div class="tut-meta"><span class="tut-chip">${t.runtime}</span>${t.tags.map((tag) => renderTemplate`<span class="tut-chip">${tag}</span>`)}<span class="tut-chip">${t.duration}</span><span class="tut-chip tut-chip-tier">${tierName} tier</span></div>` })}`
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/streaming-job.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/streaming-job.astro";
var $$url = "/tutorials/streaming-job";
//#endregion
//#region \0virtual:astro:page:src/pages/tutorials/streaming-job@_@astro
var page = () => streaming_job_exports;
//#endregion
export { page };
