import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, Z as createAstro, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { o as renderScript } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { n as EXAMPLE_TAB_LABEL, o as splitInlineCode, t as EXAMPLE_TABS } from "./docs-components_D6y5gSKR.mjs";
//#region src/components/docs/ExampleTabs.astro
createAstro("https://ignitify.dev");
var $$ExampleTabs = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ExampleTabs;
	const { id } = Astro.props;
	const tabs = EXAMPLE_TABS.filter((t) => Astro.slots.has(t));
	if (tabs.length === 0) throw new Error(`[ExampleTabs ${id}] needs at least one of the slots: ${EXAMPLE_TABS.join(", ")}`);
	const rendered = await Promise.all(tabs.map(async (t) => ({
		t,
		html: await Astro.slots.render(t)
	})));
	return renderTemplate`${maybeRenderHead($$result)}<div class="dxt" data-xt><div class="dxt-list" role="tablist" aria-label="Example views">${rendered.map(({ t }, i) => renderTemplate`<button type="button" role="tab" class="dxt-tab"${addAttribute(`${id}-tab-${t}`, "id")}${addAttribute(t, "data-tab")}${addAttribute(`${id}-panel-${t}`, "aria-controls")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute(i === 0 ? 0 : -1, "tabindex")}>${EXAMPLE_TAB_LABEL[t]}</button>`)}</div>${rendered.map(({ t, html }, i) => renderTemplate`<div class="dxt-panel" role="tabpanel"${addAttribute(`${id}-panel-${t}`, "id")}${addAttribute(t, "data-panel")}${addAttribute(i === 0 ? void 0 : "", "data-off")}${addAttribute(`${id}-tab-${t}`, "aria-labelledby")}>${unescapeHTML(html)}</div>`)}</div>${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/ExampleTabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/ExampleTabs.astro", void 0);
//#endregion
//#region src/components/docs/Steps.astro
createAstro("https://ignitify.dev");
var $$Steps = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Steps;
	const { items } = Astro.props;
	if (items.length > 4) throw new Error(`[Steps] ${items.length} items; the limit is 4`);
	return renderTemplate`${maybeRenderHead($$result)}<ol class="dsteps">${items.map((item) => renderTemplate`<li><span>${splitInlineCode(item).map((p) => p.code ? renderTemplate`<code>${p.text}</code>` : p.text)}</span></li>`)}</ol>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/Steps.astro", void 0);
//#endregion
export { $$ExampleTabs as n, $$Steps as t };
