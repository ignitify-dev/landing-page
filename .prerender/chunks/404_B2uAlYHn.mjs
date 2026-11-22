import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "404",
		"title": "Page not found — Ignitify",
		"description": "This page does not exist.",
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="hero-sec"><div class="mid"><span class="eyebrow">404</span><h1>No such page.</h1><p class="dek">The address may be mistyped, or the page was moved.</p><div class="cta-row" style="margin-top:22px"><a class="btn solid" href="/docs">Read the docs</a><a class="btn ghost" href="/">Go home</a></div></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/404.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
