import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Motion } from "./Motion_DAc_pbLo.mjs";
//#region src/pages/about.astro
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => $$About,
	file: () => $$file,
	url: () => $$url
});
var $$About = createComponent(($$result, $$props, $$slots) => {
	const DEK = "Ignitify runs any code in its own machine. Your code gets its own Firecracker MicroVM, with its own kernel. A warm VM can serve your next run.";
	const [LEAD, ...REST] = DEK.split(/(?<=\.) /);
	const RUNTIMES = [
		"Node.js",
		"Python",
		"Go",
		"Rust"
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "about",
		"title": "About — Ignitify",
		"description": DEK,
		"data-astro-cid-ta2fbyqs": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main data-astro-cid-ta2fbyqs><section class="ab-hero" data-astro-cid-ta2fbyqs><p class="ab-eyebrow" data-astro-cid-ta2fbyqs>About Ignitify</p><h1 data-astro-cid-ta2fbyqs>Your code, its own kernel.</h1><p class="ab-dek" data-astro-cid-ta2fbyqs><strong data-astro-cid-ta2fbyqs>${LEAD}</strong> ${REST.join(" ")}</p><div id="intro" class="ab-motion" data-astro-cid-ta2fbyqs>${renderComponent($$result, "Motion", $$Motion, {
		"id": "intro",
		"data-astro-cid-ta2fbyqs": true
	})}</div></section><section data-astro-cid-ta2fbyqs><div class="split" data-astro-cid-ta2fbyqs><div class="split-h" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>Isolation you do not have to configure.</h2></div><div class="split-b" data-astro-cid-ta2fbyqs><p class="def" data-astro-cid-ta2fbyqs>Running someone else's code is a containment problem before it is a scheduling problem. The usual answer is a container. A container shares the host kernel with everything else on the machine, so the isolation is only as good as the sandbox around it.</p><p class="def" data-astro-cid-ta2fbyqs>Ignitify gives your code its own kernel, its own root filesystem and its own network path. A VM never serves two tenants. When its work is done, the machine is destroyed. If you ask for it, a VM stays warm for your next run, or pinned until you delete it.</p></div></div><ol class="pc-grid" data-astro-cid-ta2fbyqs><li class="pc" data-astro-cid-ta2fbyqs><span class="pc-n" aria-hidden="true" data-astro-cid-ta2fbyqs>01</span><h3 data-astro-cid-ta2fbyqs>A kernel of your own</h3><p class="def" data-astro-cid-ta2fbyqs>Not a process, not a container. A MicroVM with its own kernel, walled off from every other tenant.</p></li><li class="pc" data-astro-cid-ta2fbyqs><span class="pc-n" aria-hidden="true" data-astro-cid-ta2fbyqs>02</span><h3 data-astro-cid-ta2fbyqs>Limits that refuse early</h3><p class="def" data-astro-cid-ta2fbyqs>What a plan allows is checked when a run is admitted, with a reason. You do not find out halfway through, when something fails.</p></li><li class="pc" data-astro-cid-ta2fbyqs><span class="pc-n" aria-hidden="true" data-astro-cid-ta2fbyqs>03</span><h3 data-astro-cid-ta2fbyqs>Bare metal underneath</h3><p class="def" data-astro-cid-ta2fbyqs>Firecracker needs <span class="mono" data-astro-cid-ta2fbyqs>/dev/kvm</span>. Nesting it inside another hypervisor costs the thing we are selling, so our servers run on real hardware.</p></li></ol><div class="link-row pg-left" data-astro-cid-ta2fbyqs><a href="/platform" class="lbl link-accent" data-astro-cid-ta2fbyqs>How the boundaries nest →</a></div></section><section data-astro-cid-ta2fbyqs><div class="split" data-astro-cid-ta2fbyqs><div class="split-h" data-astro-cid-ta2fbyqs><h2 data-astro-cid-ta2fbyqs>Teams that must run code they cannot fully trust.</h2></div><div class="split-b" data-astro-cid-ta2fbyqs><p class="def" data-astro-cid-ta2fbyqs>If your product runs code from your users, from third parties, or from a source you do not control, Ignitify gives your users’ code a hard boundary. You write a task in Node.js, Python, Go or Rust, deploy it once, and run it as often as you need. One command line drives all of it.</p><div class="rt" data-astro-cid-ta2fbyqs><span class="lbl" id="rt-l" data-astro-cid-ta2fbyqs>Runtimes</span><ul class="rt-list" aria-labelledby="rt-l" data-astro-cid-ta2fbyqs>${RUNTIMES.map((r) => renderTemplate`<li class="rt-chip" data-astro-cid-ta2fbyqs>${r}</li>`)}</ul></div><p class="def" data-astro-cid-ta2fbyqs>Accounts are not self-serve yet. To get access, or to talk about a plan, <a href="/contact" data-astro-cid-ta2fbyqs>write to us</a>.</p><div class="cta-row pg-cta" data-astro-cid-ta2fbyqs><a class="btn solid live" href="/docs" data-astro-cid-ta2fbyqs>Read the docs</a><a class="btn ghost" href="/pricing" data-astro-cid-ta2fbyqs>See the plans</a><a class="btn ghost" href="/contact" data-astro-cid-ta2fbyqs>Contact</a></div></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ta2fbyqs": true })}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/about.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/about.astro";
var $$url = "/about";
//#endregion
//#region \0virtual:astro:page:src/pages/about@_@astro
var page = () => about_exports;
//#endregion
export { page };
