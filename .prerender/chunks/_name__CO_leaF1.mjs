import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { n as $$Base, o as renderScript, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { a as lowestTier, c as readmeUrl, i as detailUrl, l as tierLabel, n as INTEGRATIONS, o as npmUrl, s as packageName, t as CATALOG_URL } from "./integrations_YLdGWyDg.mjs";
/* empty css               */
/* empty css                    */
import { t as $$IntegrationIcon } from "./IntegrationIcon_BMyg6FHd.mjs";
//#region src/pages/integrations/[name].astro
var _name__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Name,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://ignitify.dev");
function getStaticPaths() {
	if (INTEGRATIONS.some((i) => i.name === "catalog")) throw new Error("[integrations] \"catalog\" is a reserved name");
	return INTEGRATIONS.map((i) => ({
		params: { name: i.name },
		props: { i }
	}));
}
var $$Name = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Name;
	const { i } = Astro.props;
	const tier = lowestTier(i);
	const others = INTEGRATIONS.filter((o) => o.name !== i.name);
	const NETWORK = {
		egress: "Outbound only",
		bidirectional: "Inbound and outbound"
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "catalog",
		"title": `${i.name} integration — Ignitify`,
		"description": `${i.summary} Add it to a task with one command.`
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="docs-main int-page"><nav class="ipage-crumbs" aria-label="Breadcrumb"><a href="/integrations">Integrations</a><span aria-hidden="true">/</span><a${addAttribute(CATALOG_URL, "href")}>Catalog</a><span aria-hidden="true">/</span><span aria-current="page">${i.name}</span></nav><header class="ipage-head">${renderComponent($$result, "IntegrationIcon", $$IntegrationIcon, {
		"category": i.category,
		"size": 30
	})}<div><h1><code>${i.name}</code></h1><p class="ipage-sum">${i.summary}</p><div class="ipage-chips"><span class="tut-chip">${i.category}</span><span class="tut-chip">${i.kind}</span><span class="tut-chip tut-chip-tier">${tierLabel(tier)} plan or higher</span></div></div></header><div class="ipage"><article class="ipage-body"><h2>What you no longer build</h2><ul>${i.noLonger.map((x) => renderTemplate`<li>${x}</li>`)}</ul><h2>Add it to a task</h2><p>Read the plan first. <code>--dry-run</code> shows every setting and changes nothing. Then run it again and answer <code>y</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify integration:add ${i.name} --task <slug> --dry-run` })}${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify integration:add ${i.name} --task <slug>` })}<h2>What it writes into task.yaml</h2><ul class="int-mono">${i.writes.map((x) => renderTemplate`<li>${x}</li>`)}</ul><h2>What you add yourself</h2><ul>${i.youAdd.map((x) => renderTemplate`<li>${x}</li>`)}</ul><h2>Use it in your code</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "ts",
		"label": "index.ts",
		"code": i.useIt
	})}<h2>Limits</h2><ul>${i.limits.map((x) => renderTemplate`<li>${x}</li>`)}</ul><p class="ipage-more">All options are in the <a${addAttribute(readmeUrl(i), "href")}>README</a>. To check, upgrade or remove an integration, see the <a href="/docs/guides/integrations">Integrations guide</a>.</p></article><aside class="ipage-side" aria-label="Facts"><dl><div><dt>Category</dt><dd>${i.category}</dd></div><div><dt>Plan</dt><dd><a href="/pricing">${tierLabel(tier)}</a> or higher</dd></div><div><dt>Network</dt><dd>${NETWORK[i.needs.network]}</dd></div><div><dt>Preset</dt><dd>${i.needs.preset ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<code>${i.needs.preset}</code> or larger` })}` : "Any"}</dd></div><div><dt>Secrets</dt><dd>${i.needs.secrets === 0 ? "None" : i.needs.secrets}</dd></div><div><dt>Works with</dt><dd>${i.worksWith.join(", ")}</dd></div><div><dt>Package</dt><dd><a${addAttribute(npmUrl(i), "href")}>${packageName(i)}</a></dd></div><div><dt>Source</dt><dd><a${addAttribute(readmeUrl(i), "href")}>README on GitHub</a> · Apache-2.0</dd></div></dl></aside></div><section class="ipage-others"><h2>Other integrations</h2><ul class="icat-grid">${others.map((o) => renderTemplate`<li><a class="icat-tile"${addAttribute(detailUrl(o), "href")}><span class="icat-tile-h">${renderComponent($$result, "IntegrationIcon", $$IntegrationIcon, { "category": o.category })}<code>${o.name}</code></span><span class="icat-tile-sum">${o.summary}</span></a></li>`)}<li class="icat-ask"><a class="icat-tile"${addAttribute(CATALOG_URL, "href")}><span class="icat-tile-h"><strong>See all integrations</strong></span><span class="icat-tile-sum">Search the catalog by name or service.</span><span class="icat-tile-go">Open the catalog →</span></a></li></ul></section></main><div class="docs-sr" id="docs-live" role="status" aria-live="polite"></div>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations/[name].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations/[name].astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/integrations/[name].astro";
var $$url = "/integrations/[name]";
//#endregion
//#region \0virtual:astro:page:src/pages/integrations/[name]@_@astro
var page = () => _name__exports;
//#endregion
export { page };
