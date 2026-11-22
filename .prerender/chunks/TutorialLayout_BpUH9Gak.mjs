import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { n as $$Base, o as renderScript, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
/* empty css               */
import { t as withHeadingIds } from "./docs-toc_D1Nujo_I.mjs";
/* empty css                    */
//#region src/layouts/TutorialLayout.astro
createAstro("https://ignitify.dev");
var $$TutorialLayout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TutorialLayout;
	const { title, description } = Astro.props;
	const { html: body, toc } = withHeadingIds(await Astro.slots.render("default"));
	const steps = toc.filter((t) => t.level === 2);
	const header = await Astro.slots.render("header");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "tutorials",
		"title": `${title} — Ignitify tutorials`,
		"description": description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="docs-main"><div class="tut"><nav class="dtoc" aria-label="Steps"><p class="dtoc-t">Steps</p><ul>${steps.map((t) => renderTemplate`<li><a${addAttribute(`#${t.id}`, "href")}${addAttribute(t.id, "data-toc")}>${t.text}</a></li>`)}</ul></nav><article class="dbody"><a class="eyebrow" href="/tutorials">Tutorials</a>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(header)}` })}<nav class="tut-steps-inline" aria-label="Steps"><ol>${steps.map((t) => renderTemplate`<li><a${addAttribute(`#${t.id}`, "href")}>${t.text}</a></li>`)}</ol></nav>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(body)}` })}</article></div></main><div class="docs-sr" id="docs-live" role="status" aria-live="polite"></div>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/layouts/TutorialLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/layouts/TutorialLayout.astro", void 0);
//#endregion
export { $$TutorialLayout as t };
