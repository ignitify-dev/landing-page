import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { o as renderScript } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
//#region src/components/tutorials/FileTabs.astro
createAstro("https://ignitify.dev");
var $$FileTabs = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FileTabs;
	const { id, files } = Astro.props;
	const slug = (name) => name.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
	return renderTemplate`${maybeRenderHead($$result)}<div class="dxt" data-ft><div class="dxt-list" role="tablist" aria-label="Task files">${files.map((f, i) => renderTemplate`<button type="button" role="tab" class="dxt-tab"${addAttribute(`${id}-tab-${slug(f.name)}`, "id")}${addAttribute(slug(f.name), "data-tab")}${addAttribute(`${id}-panel-${slug(f.name)}`, "aria-controls")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute(i === 0 ? 0 : -1, "tabindex")}>${f.name}</button>`)}</div>${files.map((f, i) => renderTemplate`<div class="dxt-panel" role="tabpanel"${addAttribute(`${id}-panel-${slug(f.name)}`, "id")}${addAttribute(slug(f.name), "data-panel")}${addAttribute(i === 0 ? void 0 : "", "data-off")}${addAttribute(`${id}-tab-${slug(f.name)}`, "aria-labelledby")}>${renderComponent($$result, "Code", $$Code, {
		"code": f.code,
		"lang": f.lang,
		"label": f.name
	})}</div>`)}</div>${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/components/tutorials/FileTabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/tutorials/FileTabs.astro", void 0);
//#endregion
export { $$FileTabs as t };
