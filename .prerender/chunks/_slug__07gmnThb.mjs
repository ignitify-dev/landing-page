import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import { i as renderEntry, t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/pages/blog/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://ignitify.dev");
async function getStaticPaths() {
	return (await getCollection("blog", (p) => !p.data.draft)).map((p) => ({
		params: { slug: p.id },
		props: { post: p }
	}));
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { post } = Astro.props;
	const { Content } = await renderEntry(post);
	const stamp = post.data.date.toISOString().slice(0, 10);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "blog",
		"title": `${post.data.title} — Ignitify`,
		"description": post.data.description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="hero-sec"><div class="mid"><h1>${post.data.title}</h1><p class="def" style="max-width:60ch;margin-top:12px">${post.data.description}</p><p class="tiny" style="color:var(--faint);margin-top:10px"><time${addAttribute(stamp, "datetime")}>${stamp}</time></p></div></section><section><div class="mid"><article class="prose">${renderComponent($$result, "Content", Content, {})}</article></div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/blog/[slug].astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/blog/[slug].astro";
var $$url = "/blog/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
