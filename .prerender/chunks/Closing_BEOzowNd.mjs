import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, Z as createAstro, p as renderTemplate, u as renderSlot } from "./server_D7BsF4R_.mjs";
import { n as getEntry } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/lib/inline.ts
var escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/**
* Escape, then compile the three inline markers.
*
* Double backticks are handled BEFORE single ones — otherwise ``run`` would be
* consumed as an empty single-backtick pair and the word would vanish.
*/
var inline = (s) => escapeHtml(s).replace(/``([^`]+)``/g, "<code>$1</code>").replace(/`([^`]+)`/g, "<span class=\"mono\">$1</span>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
//#endregion
//#region src/components/Nest.astro
createAstro("https://ignitify.dev");
var $$Nest = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Nest;
	const { collection, entry: id } = Astro.props;
	const entry = await getEntry(collection, id);
	if (!entry) throw new Error(`[${collection}] missing content entry: ${id}`);
	const d = entry.data;
	const numbered = d.numbered !== false;
	const pad = (n) => String(n).padStart(2, "0");
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(d.id, "id")}${addAttribute(d.section_class, "class")}><div class="mid">${d.eyebrow && renderTemplate`<span class="eyebrow">${d.eyebrow}</span>`}${d.heading && renderTemplate`<h2>${unescapeHTML(inline(d.heading))}</h2>`}${d.dek && renderTemplate`<p class="def">${d.dek}</p>`}</div><div class="nest stack-5 stagger">${(d.layers ?? []).map((layer, i) => renderTemplate`<div class="nest-l">${numbered && renderTemplate`<span class="nest-n">${pad(i + 1)}</span>`}<div class="nest-b"><h3>${layer.title}</h3>${layer.role && renderTemplate`<p class="tiny role">${layer.role}</p>`}<p class="def">${unescapeHTML(inline(layer.text))}</p></div></div>`)}</div>${renderSlot($$result, $$slots["default"])}${d.link && renderTemplate`<div class="link-row"><a${addAttribute(d.link.href, "href")} class="lbl link-accent">${d.link.text}</a></div>`}</section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/Nest.astro", void 0);
//#endregion
//#region src/components/Closing.astro
createAstro("https://ignitify.dev");
var $$Closing = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Closing;
	const { collection, entry: id } = Astro.props;
	const entry = await getEntry(collection, id);
	if (!entry) throw new Error(`[${collection}] missing content entry: ${id}`);
	const { heading, dek, cta = [], wordmark, section_class } = entry.data;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(section_class, "class")}${addAttribute(entry.data.id, "id")}>${(heading || dek) && renderTemplate`<div class="mid">${heading && renderTemplate`<h2>${heading}</h2>`}${dek && renderTemplate`<p class="def">${dek}</p>`}</div>`}<div class="cta-row">${cta.map((c) => renderTemplate`<a${addAttribute(c.class, "class")}${addAttribute(c.href, "href")}>${c.text}</a>`)}${wordmark && renderTemplate`<span class="lbl">${wordmark}</span>`}</div></section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/Closing.astro", void 0);
//#endregion
export { $$Nest as n, inline as r, $$Closing as t };
