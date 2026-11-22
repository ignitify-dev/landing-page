import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, p as renderTemplate, u as renderSlot } from "./server_D7BsF4R_.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/components/docs/Callout.astro
createAstro("https://ignitify.dev");
var $$Callout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Callout;
	const { kind = "note", title } = Astro.props;
	const heading = title ?? kind[0].toUpperCase() + kind.slice(1);
	return renderTemplate`${maybeRenderHead($$result)}<aside${addAttribute(`callout callout-${kind}`, "class")}><span class="callout-i" aria-hidden="true"></span><div class="callout-b"><p class="callout-t">${heading}</p><div class="callout-x">${renderSlot($$result, $$slots["default"])}</div></div></aside>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/Callout.astro", void 0);
//#endregion
export { $$Callout as t };
