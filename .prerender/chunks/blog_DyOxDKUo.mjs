import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import { t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/pages/blog.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Blog,
	file: () => $$file,
	url: () => $$url
});
var $$Blog = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await getCollection("blog", (p) => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "blog",
		"noindex": posts.length === 0,
		"title": "Writing — Ignitify",
		"description": "Coming soon"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="hero-sec"><div class="mid"><h1>Writing</h1><p class="def" style="max-width:60ch;margin-top:12px">Coming soon</p></div></section><section><div class="mid">${posts.map((post) => renderTemplate`<a class="postrow"${addAttribute(`/blog/${post.id}`, "href")}><span class="t lg">${post.data.title}</span><p class="def" style="max-width:60ch;margin-top:6px">${post.data.description}</p><time class="tiny" style="color:var(--faint)"${addAttribute(post.data.date.toISOString().slice(0, 10), "datetime")}>${post.data.date.toISOString().slice(0, 10)}</time></a>`)}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/blog.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/blog.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog@_@astro
var page = () => blog_exports;
//#endregion
export { page };
