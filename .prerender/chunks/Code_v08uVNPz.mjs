import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, Z as createAstro, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as highlight } from "./highlight_aYfT6Jh2.mjs";
//#region src/components/docs/Code.astro
createAstro("https://ignitify.dev");
var $$Code = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Code;
	const { code, lang, label } = Astro.props;
	const html = highlight(code, lang);
	return renderTemplate`${maybeRenderHead($$result)}<figure class="dblock dcode"><div class="dblock-bar"><span class="dblock-label">${label ?? lang}</span><button type="button" class="dcopy"${addAttribute(code.replace(/\n$/, ""), "data-copy")}${addAttribute(`Copy ${label ?? lang}`, "aria-label")}>Copy</button></div><pre class="dpre src" tabindex="0"${addAttribute(label ?? lang, "aria-label")}><code>${unescapeHTML(html)}</code></pre></figure>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/Code.astro", void 0);
//#endregion
export { $$Code as t };
