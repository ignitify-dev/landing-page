import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { o as renderScript } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
var motions_default = {
	intro: {
		"file": "ignitify-intro.html",
		"mobile": "ignitify-intro-mobile.html",
		"title": "Ignitify in 60 seconds",
		"summary": "Code from everywhere, everything Ignitify runs around it, the walls, the network, and how to start.",
		"scenes": 8,
		"seconds": 62.5,
		"still": "4,6"
	},
	overview: {
		"file": "ignitify.html",
		"title": "The platform, in 79 seconds",
		"summary": "The problem, the answer, how it works, the machines and the isolation.",
		"scenes": 8,
		"seconds": 79,
		"still": "3,6"
	},
	integration: {
		"file": "ignitify-integration.html",
		"title": "One task, from start to end",
		"summary": "Write a task with the stream integration, deploy it, start a run, watch it live, and see the clean-up.",
		"scenes": 7,
		"seconds": 84,
		"still": "2,8"
	},
	request: {
		"file": "ignitify-request.html",
		"title": "The life of one request",
		"summary": "The call, admission, placement, boot, the work, and the result back to the caller.",
		"scenes": 9,
		"seconds": 90,
		"still": "4,6"
	},
	build: {
		"file": "ignitify-build.html",
		"title": "Build and deploy",
		"summary": "Your source goes to the platform, is built inside its own VM, becomes READY, and goes to a host.",
		"scenes": 7,
		"seconds": 71,
		"still": "3,6"
	},
	microvm: {
		"file": "ignitify-microvm.html",
		"title": "The life of a MicroVM",
		"summary": "The slot and the identity, the jail, the boot, the run, warm reuse and teardown, in depth.",
		"scenes": 8,
		"seconds": 84,
		"still": "3,6"
	},
	"microvm-simple": {
		"file": "ignitify-microvm-simple.html",
		"title": "How a VM is isolated",
		"summary": "Its own identity, its own jail, its own kernel, fenced in, and everything goes back at the end.",
		"scenes": 7,
		"seconds": 54,
		"still": "3,5"
	},
	observability: {
		"file": "ignitify-observability.html",
		"title": "How we watch the platform",
		"summary": "What an orchestrator emits, where logs and metrics go, your run's timeline and output, and the one alert. The motion calls an orchestrator a brain.",
		"scenes": 8,
		"seconds": 90,
		"still": "4,8"
	},
	brains: {
		"file": "ignitify-brains.html",
		"title": "Two orchestrators, one run",
		"summary": "Two peers, one winner per run, and a run that one starts and the other finishes. The motion calls an orchestrator a brain.",
		"scenes": 7,
		"seconds": 87,
		"still": "5,6"
	},
	ingress: {
		"file": "ignitify-ingress.html",
		"title": "Live ingress",
		"summary": "A public name, the route opens, a viewer comes in, the guards, and the route closes.",
		"scenes": 7,
		"seconds": 78,
		"still": "4,6"
	}
};
//#endregion
//#region src/components/Motion.astro
createAstro("https://ignitify.dev");
var $$Motion = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Motion;
	const { id } = Astro.props;
	const m = motions_default[id];
	if (!m) throw new Error(`[Motion] unknown motion "${id}" (see src/data/motions.json)`);
	const src = `/motions/${m.file}`;
	const mobileSrc = "mobile" in m ? `/motions/${m.mobile}` : void 0;
	const seconds = Math.round(m.seconds);
	const length = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="motion" data-motion${addAttribute(mobileSrc, "data-mobile")}${addAttribute(m.still, "data-still")} data-astro-cid-lruqq6ax><div class="motion-frame" data-astro-cid-lruqq6ax><iframe${addAttribute(`${src}#${m.still}`, "src")}${addAttribute(`${src}?play`, "data-src")}${addAttribute(`Motion: ${m.title}`, "title")} loading="lazy" allow="fullscreen" allowfullscreen tabindex="-1" aria-hidden="true" data-astro-cid-lruqq6ax></iframe><a class="motion-play"${addAttribute(src, "href")} target="_blank" rel="noopener" data-play${addAttribute(`Play the motion: ${m.title} (${length})`, "aria-label")} data-astro-cid-lruqq6ax><span class="motion-btn" aria-hidden="true" data-astro-cid-lruqq6ax><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" data-astro-cid-lruqq6ax><path d="M8 5.5v13l10.5-6.5z" data-astro-cid-lruqq6ax></path></svg></span><span class="motion-cap" data-astro-cid-lruqq6ax><strong data-astro-cid-lruqq6ax>${m.title}</strong><span data-astro-cid-lruqq6ax>${m.scenes} scenes · ${length}</span></span></a></div><figcaption data-astro-cid-lruqq6ax><span data-astro-cid-lruqq6ax>${m.summary}</span><a${addAttribute(src, "href")} target="_blank" rel="noopener" data-astro-cid-lruqq6ax>Open full screen ↗</a></figcaption></figure>${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/components/Motion.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/Motion.astro", void 0);
//#endregion
export { $$Motion as t };
