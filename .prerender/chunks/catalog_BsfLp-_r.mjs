import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, o as renderScript, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { a as lowestTier, i as detailUrl, l as tierLabel, n as INTEGRATIONS, r as categoryCounts } from "./integrations_YLdGWyDg.mjs";
/* empty css               */
/* empty css                    */
import { t as $$IntegrationIcon } from "./IntegrationIcon_BMyg6FHd.mjs";
//#region src/pages/integrations/catalog.astro
var catalog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Catalog,
	file: () => $$file,
	url: () => $$url
});
var $$Catalog = createComponent(($$result, $$props, $$slots) => {
	const items = [...INTEGRATIONS].sort((a, b) => a.name.localeCompare(b.name));
	const counts = categoryCounts();
	const searchText = (i) => [
		i.name,
		i.summary,
		i.category,
		i.kind,
		...i.worksWith
	].join(" ").toLowerCase();
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "catalog",
		"title": "Integration catalog — Ignitify",
		"description": "Every integration that you can add to a task: search by name or service, filter by category, and open one to see what it writes and the code to use it."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="docs-main int-page"><section class="hero-sec int-hero"><div class="mid"><a class="int-eyebrow int-back" href="/integrations">Integrations</a><h1>Integration catalog</h1><p class="def int-lead">Every integration that you can add to a task today. Each one is an open-source npm package that you add with one command.</p><div class="icat-search" id="icat-search" hidden><svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><circle cx="7" cy="7" r="4.6"></circle><path d="M10.5 10.5 14 14"></path></svg><input id="icat-q" type="search" placeholder="Search by name or service" aria-label="Search the integrations" autocomplete="off"></div></div></section><section class="icat"><aside class="icat-side" id="icat-side" hidden><h2 class="icat-label">Category</h2><ul class="icat-cats"><li><button type="button" data-cat="" aria-pressed="true">All <span>${items.length}</span></button></li>${counts.map(([c, n]) => renderTemplate`<li><button type="button"${addAttribute(c, "data-cat")} aria-pressed="false">${c} <span>${n}</span></button></li>`)}</ul></aside><div class="icat-main"><p class="icat-count" id="icat-count" role="status" aria-live="polite">${items.length} integration${items.length === 1 ? "" : "s"}</p><ul class="icat-grid">${items.map((i) => {
		const tier = lowestTier(i);
		return renderTemplate`<li${addAttribute(i.category, "data-cat")}${addAttribute(searchText(i), "data-q")}><a class="icat-tile"${addAttribute(detailUrl(i), "href")}><span class="icat-tile-h">${renderComponent($$result, "IntegrationIcon", $$IntegrationIcon, { "category": i.category })}<code>${i.name}</code></span><span class="icat-tile-sum">${i.summary}</span><span class="icat-tile-with">Works with ${i.worksWith.join(", ")}</span><span class="icat-tile-meta"><span class="tut-chip">${i.category}</span><span class="tut-chip tut-chip-tier">${tierLabel(tier)} plan or higher</span></span></a></li>`;
	})}<li class="icat-ask"><a class="icat-tile" href="/contact"><span class="icat-tile-h"><strong>Request an integration</strong></span><span class="icat-tile-sum">Tell us the service, and the work that you want to stop building.</span><span class="icat-tile-go">Contact us →</span></a></li></ul><p class="icat-empty" id="icat-empty" hidden>No integration matches your search. <a href="/contact">Request one →</a></p></div></section><section class="icat-foot"><p>New to integrations? <a href="/integrations">See how they work</a>, or follow the <a href="/docs/guides/integrations">Integrations guide</a>.</p></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations/catalog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations/catalog.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations/catalog.astro";
var $$url = "/integrations/catalog";
//#endregion
//#region \0virtual:astro:page:src/pages/integrations/catalog@_@astro
var page = () => catalog_exports;
//#endregion
export { page };
