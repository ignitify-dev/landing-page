import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import { t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
/* empty css               */
/* empty css                    */
//#region src/pages/tutorials.astro
var tutorials_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tutorials,
	file: () => $$file,
	url: () => $$url
});
var $$Tutorials = createComponent(async ($$result, $$props, $$slots) => {
	const tutorials = (await getCollection("tutorials")).sort((a, b) => a.data.order - b.data.order);
	const tierName = (t) => t[0].toUpperCase() + t.slice(1);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "tutorials",
		"title": "Tutorials — Ignitify",
		"description": "Build real tasks step by step: the code, the config, the commands, and what each one proves."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="docs-main"><section class="hero-sec"><div class="mid"><h1>Tutorials</h1><p class="def" style="max-width:60ch;margin-top:12px">Build real tasks step by step: the code, the config, every command from validate to cancel, and what each task proves.</p></div></section><section><div class="tut-list">${tutorials.map((t) => renderTemplate`<a class="tut-card"${addAttribute(`/tutorials/${t.id}`, "href")}><h2>${t.data.title}</h2><p>${t.data.summary}</p><div class="tut-meta"><span class="tut-chip">${t.data.runtime}</span>${t.data.tags.map((tag) => renderTemplate`<span class="tut-chip">${tag}</span>`)}<span class="tut-chip">${t.data.duration}</span><span class="tut-chip tut-chip-tier">${tierName(t.data.tier)}</span></div><span class="tut-go">Start the tutorial →</span></a>`)}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials.astro";
var $$url = "/tutorials";
//#endregion
//#region \0virtual:astro:page:src/pages/tutorials@_@astro
var page = () => tutorials_exports;
//#endregion
export { page };
