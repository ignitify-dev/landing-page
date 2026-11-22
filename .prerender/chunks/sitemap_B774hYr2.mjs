import { n as __exportAll } from "./astro-component_rKi5iQzd.mjs";
import { t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import { i as detailUrl, n as INTEGRATIONS, t as CATALOG_URL } from "./integrations_YLdGWyDg.mjs";
//#region src/pages/sitemap.xml.ts
var sitemap_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
var SITE = "https://ignitify.dev";
var STATIC = [
	"/",
	"/platform",
	"/pricing",
	"/about",
	"/contact",
	"/privacy",
	"/terms",
	"/dpa",
	"/refunds"
];
async function GET() {
	const docs = (await getCollection("docs")).filter((e) => !e.data.planned).map((e) => e.data.route ?? `/docs/${e.id}`);
	const posts = (await getCollection("blog", (p) => !p.data.draft)).map((p) => `/blog/${p.id}`);
	const tutorials = (await getCollection("tutorials")).map((t) => `/tutorials/${t.id}`);
	const body = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" + [
		...STATIC,
		"/tutorials",
		"/integrations",
		CATALOG_URL,
		...INTEGRATIONS.map(detailUrl),
		...posts.length > 0 ? ["/blog"] : [],
		...docs,
		...posts,
		...tutorials
	].sort().map((u) => `  <url><loc>${SITE}${u === "/" ? "/" : u}</loc></url>`).join("\n") + "\n</urlset>\n";
	return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
//#endregion
//#region \0virtual:astro:page:src/pages/sitemap.xml@_@ts
var page = () => sitemap_xml_exports;
//#endregion
export { page };
