import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/components/integrations/IntegrationIcon.astro
createAstro("https://ignitify.dev");
var $$IntegrationIcon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IntegrationIcon;
	const { category, size = 22 } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<span class="int-ico" aria-hidden="true"><svg viewBox="0 0 24 24"${addAttribute(size, "width")}${addAttribute(size, "height")} fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${category === "Storage" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<ellipse cx="12" cy="6" rx="7" ry="2.6"></ellipse><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"></path><path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6"></path>` })}`}${category === "Media" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<rect x="3" y="5" width="18" height="14" rx="2.5"></rect><path d="M10 9.2v5.6l4.6-2.8z"></path>` })}`}</svg></span>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/integrations/IntegrationIcon.astro", void 0);
//#endregion
export { $$IntegrationIcon as t };
