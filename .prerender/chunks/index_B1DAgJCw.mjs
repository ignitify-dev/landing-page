import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { t as $$DocsLayout } from "./DocsLayout_vM0j6Y3p.mjs";
import { n as getEntry } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { n as $$Related, t as $$InlineText } from "./InlineText_BXIy3H0K.mjs";
import { t as $$RowTable } from "./RowTable_Dm3zcrSq.mjs";
import { c as groupHref, n as CLI_GLOBAL, t as CATALOG } from "./cli-render_CIGfQxoe.mjs";
import { t as $$CliSample } from "./CliSample_DQmn3xCz.mjs";
//#region src/pages/docs/cli/index.astro
var cli_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("docs", "cli/overview");
	const links = [{
		label: "All commands",
		href: "/docs/cli/all"
	}, ...CATALOG.groups.map((x) => ({
		label: x.title,
		href: groupHref(x.id)
	}))];
	return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, {
		"id": "cli/overview",
		"title": entry.data.title,
		"description": entry.data.description,
		"group": entry.data.group
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>${entry.data.title}</h1><p class="def">${CLI_GLOBAL.lede}</p>${renderComponent($$result, "Related", $$Related, {
		"title": "Commands",
		"items": links
	})}${CLI_GLOBAL.sections.map((s) => renderTemplate`<section class="dsec"><h2>${s.title}</h2>${s.paragraphs[0] && renderTemplate`<p class="def">${renderComponent($$result, "InlineText", $$InlineText, { "text": s.paragraphs[0] })}</p>`}${s.samples.map((x) => renderTemplate`${renderComponent($$result, "CliSample", $$CliSample, { "sample": x })}`)}${s.rows.length > 0 && renderTemplate`${renderComponent($$result, "RowTable", $$RowTable, { "rows": s.rows })}`}${s.paragraphs.slice(1).map((p) => renderTemplate`<p class="def">${renderComponent($$result, "InlineText", $$InlineText, { "text": p })}</p>`)}</section>`)}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/cli/index.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/cli/index.astro";
var $$url = "/docs/cli";
//#endregion
//#region \0virtual:astro:page:src/pages/docs/cli/index@_@astro
var page = () => cli_exports;
//#endregion
export { page };
