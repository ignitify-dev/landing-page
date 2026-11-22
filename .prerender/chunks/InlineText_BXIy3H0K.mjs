import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { o as splitInlineCode } from "./docs-components_D6y5gSKR.mjs";
//#region src/components/docs/Related.astro
createAstro("https://ignitify.dev");
var $$Related = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Related;
	const { items, title = "Related" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="drel"${addAttribute(title, "aria-label")}><span class="drel-t">${title}</span><ul>${items.map((i) => renderTemplate`<li><a${addAttribute(i.href, "href")}>${i.label}</a></li>`)}</ul></nav>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/Related.astro", void 0);
//#endregion
//#region src/components/docs/InlineText.astro
createAstro("https://ignitify.dev");
var $$InlineText = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$InlineText;
	const { text } = Astro.props;
	return renderTemplate`${splitInlineCode(text).map((p) => p.code ? renderTemplate`${maybeRenderHead($$result)}<code>${p.text}</code>` : p.text)}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/InlineText.astro", void 0);
//#endregion
export { $$Related as n, $$InlineText as t };
