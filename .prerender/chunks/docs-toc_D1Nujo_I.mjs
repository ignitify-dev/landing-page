//#region src/lib/docs-toc.ts
var ENTITIES = {
	"&amp;": "&",
	"&lt;": "<",
	"&gt;": ">",
	"&quot;": "\"",
	"&#39;": "'"
};
var plain = (html) => html.replace(/<[^>]*>/g, "").replace(/&(amp|lt|gt|quot|#39);/g, (m) => ENTITIES[m] ?? m).replace(/\s+/g, " ").trim();
var slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";
/** Add an id to each h2/h3 that has none; return the new HTML and the heading list. */
function withHeadingIds(html) {
	const toc = [];
	const used = /* @__PURE__ */ new Set();
	return {
		html: html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g, (whole, lvl, attrs, inner) => {
			const text = plain(inner);
			const given = /\sid="([^"]+)"/.exec(attrs)?.[1];
			let id = given ?? slug(text);
			for (let n = 2; !given && used.has(id); n++) id = `${slug(text)}-${n}`;
			used.add(id);
			toc.push({
				id,
				text,
				level: Number(lvl)
			});
			return given ? whole : `<h${lvl} id="${id}"${attrs}>${inner}</h${lvl}>`;
		}),
		toc
	};
}
//#endregion
export { withHeadingIds as t };
