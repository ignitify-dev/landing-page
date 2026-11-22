import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, V as defineScriptVars, Z as createAstro, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, o as renderScript, r as $$AccountLink, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import { n as getEntry, t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as highlight } from "./highlight_aYfT6Jh2.mjs";
import { a as defaultPresetOf, n as PRESETS, t as HOST_MAX_STORAGE_MIB } from "./presets_-p1mqr2C.mjs";
import { i as TIER_IDS, r as TIERS } from "./tiers_DIe1pdQ_.mjs";
import { n as $$Nest, r as inline, t as $$Closing } from "./Closing_BEOzowNd.mjs";
//#region src/components/home/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- SPLIT FOLD. Argument left, evidence right. The unit is at object scale,
       the seal sits directly beneath it, and the manifest declares the seven
       axes as a ruled form. Reading order is the argument, then the proof.
       Copy is unchanged from the previous world: this is a visual replacement,
       not a rewrite. --><section class="hero-sec" id="home-hero"><div class="fold"><div class="fold-arg"><!-- Deliberately unnumbered. The numbered sequence 01-07 belongs to the
             sections below; a hero that also says "01" makes two different
             things claim the same index, and the numbering stops carrying
             information the moment it repeats. --><span class="eyebrow">One unit, one kernel</span><h1>Your code gets its own <em>kernel</em>.</h1><p class="dek">Untrusted code in its own Firecracker MicroVM. A warm VM can serve your next run.</p><p class="def dek-sub">You describe what the work <strong>is</strong>. Ignitify derives the machine it needs, boots it, and destroys it when the work is done.</p><!-- THE CONVERSION ACTION IS NOT HERE — it is the lemon \`Get started\` in
             the header, which is sticky and therefore reachable from every point
             in the page rather than only from the top of it. A hero button and a
             header button pointing at the same page were the same offer made
             twice, 60px apart, and the hero copy competed with the header for
             the one filled weight the palette allows.
             What is left are the two EXPLORE actions, and they are ordered by
             commitment: read the contract, then drive the thing. Both are in-page
             anchors, so neither leaves the argument. --><!-- ONE ROW, TWO WEIGHTS. These were two stacked blocks 11px apart —
             a ghost button and a text link, the two weakest weights in the
             system — so the column trailed off instead of resolving. They are
             one terminal beat now.
             \`Write a task\` takes INK-solid, not lemon: lemon means "live" and is
             rationed to two filled buttons per page (the header and the closing
             section). Ink-solid is the system's neutral primary and already
             ships on /platform, so this restores a primary without spending the
             accent. Same words, same order, same destinations. --><!-- 2026-10-16 (Saeed): the hero carries Get started and Sign in. They take the place of
             \`Write a task\` (still reached from \`Try the console\` and by scrolling to the next sections).
             /signin is the front door. A signed-in visitor sees Profile instead (components/AccountLink.astro). --><div class="cta-row"><a class="btn solid lg" href="/docs/install">Get started</a>${renderComponent($$result, "AccountLink", $$AccountLink, { "class": "btn ghost lg" })}<a class="cta-link" href="#home-console">Try the console</a></div></div><!-- The four boundaries, drawn as the physical nesting they actually
           are — and then RUN. This is the page's central claim rendered rather
           than asserted: each layer is literally a DOM descendant of the one
           outside it, so the containment is structural, not a picture of
           containment. Drawing it as four sibling cards would assert the
           hierarchy while contradicting it.

           The rig is a lifecycle, not a diagram. A static nest can only claim
           isolation; the interesting fact about this product is that the walls
           are BUILT PER JOB and torn down after — which is inherently temporal
           and cannot be shown by a still image. \`data-stage\` on .rig drives
           every layer, and the JS advances it: idle → land → seal → boot →
           run → done → reclaim, then loops. Nothing here is decorative: each
           stage corresponds to a real step (bind, jail, boot, execute, destroy).

           ACCESSIBILITY. The figure is aria-hidden and the caption carries the
           whole argument in prose, because a screen reader announcing a
           7-stage loop is noise, not information. Reduced-motion pins the rig
           at the \`run\` stage — its most informative frame — and kills the
           animation, so the diagram never depends on movement to be readable.

           CONTRAST. Every label sits on a flat carrier (.lay-tab / .job).
           Nothing is set directly on the corrugated shell — 12.5px text on the
           lit rib fails WCAG in BOTH themes and no token value fixes it
           (passing on the lit rib means failing on the shadow rib), so the
           ribbed shells stay wordless and every text region is plated. --><div class="fold-ev"><!-- aria-hidden moved OFF the figure and onto .rig-fig. The steps are
             <button>s and were sitting inside an aria-hidden subtree: focusable,
             reachable by Tab, announced as nothing — a WCAG 4.1.2 failure that
             predates this work. The DIAGRAM stays hidden (a screen reader
             announcing an 8-stage loop is noise); the CONTROLS that operate it
             are exposed, and the figcaption is now the figure's accessible
             name, so the prose carrying the argument is what actually lands. --><figure class="rig" id="rig" data-stage="idle" aria-labelledby="rig-cap"><div class="rig-fig" aria-hidden="true"><!-- The wire. The job arrives from outside the host — it is not
               already there, which is the whole point of the sequence. --><div class="wire"><span class="wire-lbl">task:run</span><span class="wire-pkt"></span></div><div class="lay lay-host"><span class="lay-tab">Host machine <em class="lay-st"></em></span><!-- The teardown statement, centred on the host. It occupies the
                 space the machine vacated, which is the argument: the walls
                 were here, they are gone, and nothing of the run remains.
                 Sourced from proof.yaml → callback_isolation — after teardown
                 the routes unpublished and a callback returned 404 with no host
                 code run and no VM revived, captured 2026-08-05. --><span class="rig-retained">0 retained · routes unpublished</span><!-- data-built is the ghost/built switch. These two layers are the
                 ones the product actually MANUFACTURES per job; the host is
                 not ours and the payload is not a wall, so neither takes it. --><div class="lay lay-jail" data-built="0"><span class="lay-tab">Jailed hypervisor <em>uid per VM · chroot · firecracker</em></span><div class="lay lay-vm" data-built="0"><span class="lay-tab">MicroVM <em>its own kernel</em></span><div class="job"><span class="job-run">run()</span><span class="job-uid">uid 10001 · --no-new-privs</span><!-- The execution bar: real progress, not a spinner. It only
                       moves during \`run\`, so it reads as work being done. --><span class="job-bar" aria-hidden="true"><i></i></span></div></div></div></div></div><!-- /.rig-fig --><!-- The stage readout. This is what makes the motion legible: without
               a name, a moving diagram is just movement. Each line is a real
               step and lights only while that step is current.

               The steps double as the transport: clicking one jumps to that
               stage and pauses there, so the diagram can be READ rather than
               only watched. That is why they are <button>s — they are genuinely
               interactive, and a div with a click handler would not be
               reachable by keyboard. --><!-- THE SEQUENCE RAIL. Five numbered nodes on a track that FILLS as
               the lifecycle advances. The numerals are not decoration: they
               make "five steps" countable at a glance and they are what keeps
               the order readable below 560px, where the row scrolls and
               position alone stops encoding sequence.
               Arrows between the labels were considered and rejected — four
               chevrons are four pieces of chrome that each say nothing alone,
               and they break at exactly the width where direction matters most.
               One filling track says it once, and carries progress as well as
               direction. --><!-- THE RAIL ROW. The step rail and the transport drive the same
               state, so they sit on one line rather than as two stacked blocks.
               DOM order is rail-then-transport, so keyboard focus still reaches
               Pause immediately after the five steps it controls. --><div class="rig-rail"><ol class="rig-steps"><li><button type="button" data-for="land"><i>1</i><b>bind</b></button></li><li><button type="button" data-for="seal"><i>2</i><b>jail</b></button></li><li><button type="button" data-for="boot"><i>3</i><b>boot</b></button></li><li><button type="button" data-for="run"><i>4</i><b>run</b></button></li><li><button type="button" data-for="reclaim"><i>5</i><b>destroy</b></button></li></ol><!-- Transport. The animation loops, and a loop the reader cannot stop
                 is a nuisance on a page they came to read — so pause is a real
                 control, not a concession. It is a button (not a checkbox) with
                 aria-pressed, and the label text changes with the state so it is
                 not colour-only. --><div class="rig-ctl"><button type="button" class="rig-play" id="rigplay" aria-pressed="false" aria-controls="rig"><span class="rig-ico" aria-hidden="true"></span><span class="rig-play-t">Pause</span></button><!-- The stage name is no longer PRINTED beside the transport: the
                   numbered rail already names the current step, and a second
                   readout saying the same word was redundant chrome next to the
                   one control in the row.
                   Its accessibility job is real and is kept — the live region
                   announces stage changes while paused, so a screen-reader user
                   scrubbing the sequence hears where they landed. It is now
                   visually hidden rather than deleted; removing it would have
                   silently taken that away. --><span class="rig-now vh" id="rignow" aria-live="polite"></span></div></div><!-- THE CAPTION IS NOW INSIDE ITS FIGURE, and that is a correctness
               fix as much as a compositional one. It previously sat as a sibling
               of <figure> inside .fold-ev — a <figcaption> outside a <figure>,
               which is invalid HTML, carries no association to the figure for
               assistive technology, and left the figure with NO accessible name
               at all despite a comment here claiming it was the figure's name.
               aria-labelledby now makes that claim true.
               Compositionally: the transport used to sit BETWEEN the figure and
               its caption, splitting them, so the evidence column read as three
               loose blocks. It is one object now. --><figcaption class="cap" id="rig-cap"></figcaption></figure></div></div></section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/home/Hero.astro", void 0);
//#endregion
//#region src/components/home/Console.astro
var $$Console = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="home-console" class="band band-well reveal"><div class="mid"><div class="eyebrow">01 — The console</div><h2 class="sh">You don’t configure a runtime. You describe a workload.</h2></div><!-- Was one paragraph carrying three unrelated instructions. They are three
         steps, not three clauses, so they are numbered: the reader declares,
         the platform derives, and the platform reclaims. That is the real
         lifecycle order, which is why the numbering is allowed to exist here
         at all.
         ⌛ Step 3 was "Two combinations are refused — try to find them", a
         literal count of the console's two data-reject options and its call to
         action. The REFUSAL IS STILL SHOWN — both options are marked in the
         console below and produce the resolver's real message (home.js) — but
         it is no longer what this step points at. If the steps ever lose that,
         re-read DESIGN-NOTES §3: showing what is rejected is the trust signal,
         not an aside. --><ol class="steps stagger"><li class="step"><span class="step-i" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"><!-- Three rails with handles at different stops: the axes are
                 things you SET, which four plain rules did not say. --><path d="M3 5h14M3 10h14M3 15h14"></path><path d="M7 3v4M13 8v4M6 13v4"></path></svg></span><h3>You set seven axes</h3><p class="def">Cardinality, duration, state, interaction, network, residency, storage. The VM size is a preset your plan allows.</p></li><li class="step"><span class="step-i" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"><!-- One line in, three out. "Derives the rest" is a fan-out;
                 the old cross-and-chevron read as neither. --><path d="M3 10h5"></path><path d="M8 4v12"></path><path d="M8 4h6M8 10h6M8 16h6"></path></svg></span><h3>The platform derives the rest</h3><p class="def">VM lifecycle, teardown, worker instructions, network, and the boot fingerprint.</p></li><li class="step"><span class="step-i" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"><!-- A unit going back into the pool. Deliberately NOT a
                 prohibition sign (the old circle-and-slash) — that said
                 "refused", and this step no longer does. --><path d="M4 9h12"></path><path d="M6 9v8h8V9"></path><path d="M10 2v5M7.5 4.5L10 7l2.5-2.5"></path></svg></span><h3>A garbage collector reclaims it</h3><p class="def">When its work ends the VM is destroyed and its slot returned to the pool. A warm or pinned VM waits for your next run first.</p></li></ol><div class="cwrap"><div class="console"><div class="panel"><div class="panel-h"><b>You declare</b><span>task.yaml</span></div><div class="panel-b"><!-- plan and preset are not \`execution:\` keys. The plan is who you are; the preset is
                 chosen per run (\`run.preset\`). Both are filled from config by home.js. --><div class="axis"><div class="axis-h"><dfn>your plan</dfn><i>not in task.yaml · sets what you may use</i></div><div class="opts" data-axis="plan" id="plan-opts"></div></div><div class="axis"><div class="axis-h"><dfn>run.preset</dfn><i>chosen per run · sets RAM, CPU, default disk</i></div><div class="opts" data-axis="preset" id="preset-opts"></div><p class="subnote" id="preset-note"></p></div><div class="axis"><div class="axis-h"><dfn>cardinality</dfn><i>How many units per VM?</i></div><div class="opts" data-axis="cardinality"><button class="opt" type="button" data-v="one">one</button><button class="opt" type="button" data-v="many">many</button><button class="opt" type="button" data-v="continuous">continuous</button></div></div><div class="axis"><div class="axis-h"><dfn>duration</dfn><i>How long is one unit?</i></div><div class="opts" data-axis="duration"><button class="opt" type="button" data-v="short">short</button><button class="opt" type="button" data-v="long">long</button><button class="opt" type="button" data-v="unbounded" data-reject="1">unbounded</button></div></div><div class="axis"><div class="axis-h"><dfn>state</dfn><i>What survives between units?</i></div><div class="opts" data-axis="state"><button class="opt" type="button" data-v="independent">independent</button><button class="opt" type="button" data-v="across-runs">across-runs</button><button class="opt" type="button" data-v="across-crashes" data-reject="1">across-crashes</button></div></div><div class="axis"><div class="axis-h"><dfn>interaction</dfn><i>When do you need output?</i></div><div class="opts" data-axis="interaction"><button class="opt" type="button" data-v="boundary-only">boundary-only</button><button class="opt" type="button" data-v="continuous">continuous</button></div></div><div class="axis"><div class="axis-h"><dfn>network.type</dfn><i>What can the VM reach?</i></div><div class="opts" data-axis="network"><button class="opt" type="button" data-v="none">none</button><button class="opt" type="button" data-v="egress">egress</button><button class="opt" type="button" data-v="bidirectional">bidirectional</button></div><!-- network is an OBJECT, not a scalar. Nine sub-keys, gated by type. --><div class="sub" id="sub-egress" hidden><div class="subrow"><label for="eallow"><code>egress_allow</code> <em>omitted = allow-all · [] = deny-all</em></label><input type="text" id="eallow" class="tin" placeholder="api.github.com, *.stripe.com" autocomplete="off"></div><div class="subrow inline"><label for="etls"><code>egress_tls_only</code></label><span class="chk"><input type="checkbox" id="etls"><em id="etlsnote">auto-true once an allowlist is declared</em></span></div><div class="subrow inline"><label for="embit"><code>egress_mbit</code> <em>may only lower the host default</em></label><input type="number" id="embit" class="tin narrow" min="1" placeholder="—"></div></div><div class="sub" id="sub-inbound" hidden><div class="subrow inline"><label for="iport"><code>inbound_port</code> <em class="req">required · 1024–65535</em></label><input type="number" id="iport" class="tin narrow" min="1024" max="65535" value="8080"></div><div class="subrow"><label for="iroutes"><code>inbound_routes</code> <em>omitted = expose nothing</em></label><input type="text" id="iroutes" class="tin" placeholder="/api/*, /healthz" autocomplete="off"></div><div class="subrow inline triple"><span><label for="irps"><code>inbound_rps</code></label><input type="number" id="irps" class="tin narrow" min="1" placeholder="—"></span><span><label for="iburst"><code>inbound_burst</code></label><input type="number" id="iburst" class="tin narrow" min="1" placeholder="—"></span><span><label for="imax"><code>max_concurrent</code></label><input type="number" id="imax" class="tin narrow" min="1" placeholder="—"></span></div><p class="subnote">A rate above the host ceiling is refused — a tenant may only lower it. <code>max_concurrent</code> defaults to <code>round(per_vcpu × preset.vcpu)</code>.</p></div></div><div class="axis"><div class="axis-h"><dfn>residency</dfn><i>Who owns the VM’s lifetime?</i></div><div class="opts" data-axis="residency"><button class="opt" type="button" data-v="auto">auto</button><button class="opt" type="button" data-v="pinned">pinned</button></div></div><div class="axis"><div class="axis-h"><dfn>storage_mib</dfn><i>Scratch disk · a floor you can raise</i></div><div class="rangerow"><input type="range" id="stor" min="1" step="1" aria-label="storage_mib"><input type="number" id="storn" class="tin narrow" min="1" step="1" placeholder="default" aria-label="storage_mib in MiB"><span class="rangeval">MiB</span></div><p class="subnote" id="stor-note"></p></div></div></div><!-- Small screens only (CSS hides it on wide ones): a one-line summary that sticks to the
             bottom of the screen while the controls are in view, so a change shows its effect at
             once, and links to the full result below. It replaced a docked results drawer, which
             covered half the controls and hid task.yaml behind a second scroll. home.js fills it. --><a class="cbar" id="cbar" href="#c-result" aria-label="Show the result"><span class="cbar-t" id="cbar-t">—</span><b aria-hidden="true">↓</b></a><div class="panel" id="c-result"><div class="panel-h"><b>Platform derives</b><span>you never set this</span></div><p class="ilk" id="ilk"><b id="ilkhead">Rejected at deploy</b><span id="ilktext"></span></p><p class="wrn" id="wrn"></p><div class="fpline"><k>boot_fingerprint</k><span class="fp" id="fp">—</span></div><div class="derived" aria-live="polite"><div class="dcell"><k>lifecycle</k><v id="d-life">—</v></div><div class="dcell"><k>loop shape</k><v id="d-loop">—</v></div><div class="dcell"><k>on terminal</k><v id="d-term">—</v></div><div class="dcell"><k>network class</k><v id="d-net">—</v></div><div class="dcell"><k>heartbeat</k><v id="d-hb">—</v></div><div class="dcell"><k>stream chunks</k><v id="d-st">—</v></div><div class="dcell"><k>reuse child</k><v id="d-rc">—</v></div><div class="dcell"><k>vm size</k><v id="d-vm">—</v></div><div class="dcell"><k>scratch drive</k><v id="d-sc">—</v></div><div class="dcell"><k>plan disk cap</k><v id="d-cap">—</v></div></div><div class="emit-h"><span class="filename">task.yaml</span><span class="lbl">what you would write</span></div><pre class="emit"><code class="src" id="emit"></code></pre></div></div></div></section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/home/Console.astro", void 0);
//#endregion
//#region src/content/snippets/session.html?raw
var session_default = "<span class=\"pr\">$</span> ignitify task:create streaming-job\n<span class=\"ok\">✓ Task Registered</span>\n<span class=\"dim\">task_id</span>      019fdebb-171e-7198-a812-a755d67e0aa2\n<span class=\"dim\">resource_id</span>  tsk_EZWekgdGJSLt\n\n<span class=\"pr\">$</span> ignitify task:deploy streaming-job\n<span class=\"ok\">✓ Deployment Created</span>\n<span class=\"dim\">deployment_id</span>  019fdebb-199b-75cc-8a15-650f3de2c717\n<span class=\"dim\">status</span>         READY\n<span class=\"dim\">reused</span>         false\n<span class=\"dim\">content_hash</span>   sha256:fbb55da6adde4995…\n\n<span class=\"pr\">$</span> ignitify task:run streaming-job\n<span class=\"ok\">✓ Run Submitted</span>\n<span class=\"dim\">run_id</span>       019fdebb-1ce5-7048-bc36-ce8821f02c08\n<span class=\"dim\">status</span>       PENDING";
//#endregion
//#region src/content/snippets/task-index.ts?raw
var task_index_default = "export async function run(payload, ctx) {\n  const res = await fetch(\n    `https://api.datamuse.com/sug?s=…`,\n  );\n  const json = await res.json();\n  const top = json.map((w) => w.word).slice(0, 5);\n\n  for (const [i, suggestion] of top.entries()) {\n    ctx.chunk({ suggestion, i });\n  }\n\n  return { q: payload.q, count: top.length };\n}\n";
//#endregion
//#region src/content/snippets/task.yaml?raw
var task_default = "schema_version: 1\nslug: streaming-job\nruntime: node\n\nexecution:\n  cardinality: one\n  duration: short\n  state: independent\n  interaction: continuous\n  network:\n    type: egress\n\nbuild:\n  system_packages: [ffmpeg, git]\n\nrun:\n  payload:\n    q: war\n  timeout_sec: 15\n";
//#endregion
//#region src/components/home/Write.astro
var $$Write = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("home", "write");
	if (!entry) throw new Error("[home] missing content entry: write");
	const d = entry.data;
	const snippets = /* #__PURE__ */ Object.assign({
		"../../content/snippets/session.html": session_default,
		"../../content/snippets/task-index.ts": task_index_default,
		"../../content/snippets/task.yaml": task_default
	});
	const code = (name, lang) => {
		const key = Object.keys(snippets).find((k) => k.endsWith(`/${name}`));
		if (!key) throw new Error(`[home] missing snippet: ${name}`);
		return lang ? highlight(snippets[key], lang) : snippets[key];
	};
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(d.id, "id")}${addAttribute(d.section_class, "class")}><div class="mid"><span class="eyebrow">${d.eyebrow}</span><h2>${unescapeHTML(inline(d.heading))}</h2><p class="def">${d.dek}</p></div><div class="split stack-5">${(d.slabs ?? []).map((slab) => renderTemplate`<div class="slab"><span class="filename">${slab.filename}</span><pre${addAttribute(slab.kind, "class")}>${unescapeHTML(code(slab.snippet, slab.lang))}</pre>${slab.note && renderTemplate`<p class="tiny note">${unescapeHTML(inline(slab.note))}</p>`}</div>`)}</div>${d.session && renderTemplate`<div class="slab stack-4"><span class="filename">${d.session.filename}</span><pre${addAttribute(d.session.kind, "class")}>${unescapeHTML(code(d.session.snippet, d.session.lang))}</pre>${d.session_note && renderTemplate`<p class="tiny note">${unescapeHTML(inline(d.session_note))}</p>`}</div>`}<div class="grid g3 stack-5 stagger">${(d.cards ?? []).map((c) => renderTemplate`<div class="card up"><h3>${c.title}</h3><p class="def">${unescapeHTML(inline(c.text))}</p></div>`)}</div></section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/home/Write.astro", void 0);
//#endregion
//#region src/components/home/CardGrid.astro
createAstro("https://ignitify.dev");
var $$CardGrid = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CardGrid;
	const { entry: id } = Astro.props;
	const entry = await getEntry("home", id);
	if (!entry) throw new Error(`[home] missing content entry: ${id}`);
	const { eyebrow, heading, dek, cards = [], links, section_class } = entry.data;
	const mono = inline;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(entry.data.id, "id")}${addAttribute(section_class, "class")}><div class="mid"><span class="eyebrow">${eyebrow}</span><h2>${heading}</h2><p class="def">${dek}</p></div><div class="grid g3 stack-5 stagger">${cards.map((card) => renderTemplate`<div class="card up"><h3>${unescapeHTML(mono(card.title))}</h3><p class="def">${unescapeHTML(mono(card.text))}</p>${card.tag && renderTemplate`<span class="tag soon">${card.tag}</span>`}</div>`)}</div>${links && renderTemplate`<div class="link-row">${links.map((l) => renderTemplate`<a${addAttribute(l.href, "href")} class="lbl link-accent">${l.text}</a>`)}</div>`}</section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/home/CardGrid.astro", void 0);
//#endregion
//#region src/components/home/Flow.astro
var $$Flow = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<!-- ════ 06 FLOW ════ --><section id="home-flow" class="reveal"><div class="mid"><span class="eyebrow">06 — Deploy and scale</span><h2>From your machine <br> to a MicroVM in one crossing.</h2></div><!-- Two lanes over six columns. The seam between them is the section's subject; the only
       lemon node sits where task:deploy crosses it. See the home.flow block in ig-content.css. --><div class="flow" id="flow"><ol class="flow-lanes" aria-label="The six commands, what each does on your machine, and what the platform does in response"><li class="fst" data-i="0"><div class="fst-cmd"><span class="fst-n">01</span><h3>task:create</h3><p class="def">Scaffolds <span class="mono">task.yaml</span> and an entry file. Add <span class="mono">--local</span> to stay fully offline.</p></div><div class="fst-wire" aria-hidden="true"><i></i></div><div class="fst-srv"><p class="def">Reserves the slug and gives the task a stable id.</p></div></li><li class="fst local" data-i="1"><div class="fst-cmd"><span class="fst-n">02</span><h3>task:validate</h3><p class="def">Checks the execution nature and the seven axes against the platform's own rules.</p></div><div class="fst-wire" aria-hidden="true"><i></i></div><div class="fst-srv"><p class="def muted">Nothing leaves your machine.</p></div></li><li class="fst cross" data-i="2"><div class="fst-cmd"><span class="fst-n">03<span class="fst-opt">the crossing</span></span><h3>task:deploy</h3><p class="def">Uploads your source and lockfile as they are. Nothing is built on your machine.</p></div><div class="fst-wire" aria-hidden="true"><i></i></div><div class="fst-srv"><ol class="fl-chain" aria-label="What the platform does with the upload"><li data-k="Build">in its own microVM</li><li data-k="Harvest">the result, hashed</li><li data-k="Serve">the image, by digest</li></ol></div></li><li class="fst" data-i="3"><div class="fst-cmd"><span class="fst-n">04</span><h3>task:run</h3><p class="def">Submits a job and returns its id at once.</p></div><div class="fst-wire" aria-hidden="true"><i></i></div><div class="fst-srv"><p class="def">Boots a MicroVM against that image and executes your <span class="mono">run()</span>.</p></div></li><li class="fst" data-i="4"><div class="fst-cmd"><span class="fst-n">05</span><h3>run:get</h3><p class="def">Asks for the status and result.</p></div><div class="fst-wire" aria-hidden="true"><i></i></div><div class="fst-srv"><p class="def">Returns the status, the result and the last streamed chunk.</p></div></li></ol><!-- The return path. Not a step, so aria-hidden: 05 and 06 already say it in prose. --><div class="fl-return" aria-hidden="true"><span class="fz-rule"></span><span class="tiny">deploy once · run many</span><span class="fz-rule"></span></div></div></section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/home/Flow.astro", void 0);
//#endregion
//#region src/lib/console-data.ts
function buildConsoleData(presets, tiers, hostMaxStorageMib) {
	const names = presets.map((p) => p.name);
	if (tiers.length === 0) throw new Error("[console] the ladder is empty.");
	const plans = tiers.map((t) => {
		const allowed = t.allowed_presets === null ? names : names.filter((n) => t.allowed_presets.includes(n));
		return {
			id: t.id,
			label: t.label,
			allowed_presets: allowed,
			max_storage_mib: t.max_storage_mib ?? hostMaxStorageMib,
			default_preset: defaultPresetOf(t.allowed_presets)
		};
	});
	return {
		presets: [...presets],
		plans
	};
}
async function loadConsoleData() {
	const cards = await getCollection("pricing");
	const labelOf = new Map(cards.map((c) => [c.data.plan_id, c.data.display_name]));
	return buildConsoleData(PRESETS, TIER_IDS.map((id) => ({
		id,
		label: labelOf.get(id) ?? id,
		allowed_presets: TIERS[id].allowed_presets ?? null,
		max_storage_mib: TIERS[id].max_storage_mib ?? null
	})), HOST_MAX_STORAGE_MIB);
}
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const consoleData = await loadConsoleData();
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "home",
		"title": "Ignitify — your code gets its own kernel",
		"description": "Untrusted code, one Firecracker MicroVM per job. Declare a workload's nature; the platform derives the mechanism."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Console", $$Console, {})}${renderComponent($$result, "Nest", $$Nest, {
		"collection": "home",
		"entry": "isolation"
	})}${renderComponent($$result, "Write", $$Write, {})}${renderComponent($$result, "CardGrid", $$CardGrid, { "entry": "toolkit" })}${renderComponent($$result, "CardGrid", $$CardGrid, { "entry": "platform" })}${renderComponent($$result, "Flow", $$Flow, {})}${renderComponent($$result, "Closing", $$Closing, {
		"collection": "home",
		"entry": "closing"
	})}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}<script>(function(){${defineScriptVars({ consoleData })}window.IGNITIFY_DEMO = consoleData;})();<\/script>${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/index.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
