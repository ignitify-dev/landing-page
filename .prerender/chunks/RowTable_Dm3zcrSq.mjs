import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$InlineText } from "./InlineText_BXIy3H0K.mjs";
//#region src/components/docs/RowTable.astro
createAstro("https://ignitify.dev");
var $$RowTable = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$RowTable;
	const { rows, head = ["Name", "Meaning"] } = Astro.props;
	const isCode = (n) => /^(-|\d+$|[A-Z][A-Z0-9_]+$)/.test(n);
	return renderTemplate`${maybeRenderHead($$result)}<div class="drows"><table><thead><tr><th scope="col">${head[0]}</th><th scope="col">${head[1]}</th></tr></thead><tbody>${rows.map((r) => renderTemplate`<tr><td${addAttribute(head[0], "data-label")}>${isCode(r.name) ? renderTemplate`<code>${r.name}</code>` : r.name}</td><td${addAttribute(head[1], "data-label")}>${renderComponent($$result, "InlineText", $$InlineText, { "text": r.text })}</td></tr>`)}</tbody></table></div>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/RowTable.astro", void 0);
//#endregion
export { $$RowTable as t };
