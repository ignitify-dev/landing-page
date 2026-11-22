import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { o as renderScript } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/components/LegalHeader.astro
createAstro("https://ignitify.dev");
var COUNSEL_NOTICE = "This page is being reviewed by counsel. It may change.";
var LEGAL_DOCS = [
	{
		id: "terms",
		href: "/terms",
		label: "Terms of Service"
	},
	{
		id: "privacy",
		href: "/privacy",
		label: "Privacy Policy"
	},
	{
		id: "dpa",
		href: "/dpa",
		label: "Data Processing Addendum"
	},
	{
		id: "refunds",
		href: "/refunds",
		label: "Refund Policy"
	}
];
var $$LegalHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LegalHeader;
	const { title, dek, updated, sections, current } = Astro.props;
	const siblings = LEGAL_DOCS.filter((d) => d.id !== current);
	const updatedText = (/* @__PURE__ */ new Date(updated + "T00:00:00Z")).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "UTC"
	});
	return renderTemplate`${maybeRenderHead($$result)}<section class="lh"><div class="lh-grid"><div class="lh-main"><h1>${title}</h1><p class="dek">${dek}</p><p class="dek">${COUNSEL_NOTICE}</p><dl class="lh-meta"><div><dt>Last updated</dt><dd><time${addAttribute(updated, "datetime")}>${updatedText}</time></dd></div><div><dt>Clauses</dt><dd>${sections.length}</dd></div></dl><div class="cta-row"><a class="btn solid live" href="/contact">Contact us</a></div><nav class="lh-sib" aria-label="Other legal documents"><span class="lbl">Also read</span>${siblings.map((d) => renderTemplate`<a class="link-accent"${addAttribute(d.href, "href")}>${d.label}</a>`)}</nav></div><nav class="lh-index" aria-label="On this page"><details open data-lh-index><summary>On this page</summary><ol>${sections.map((s) => renderTemplate`<li><a${addAttribute(`#s-${s.n}`, "href")}><span class="lh-n">${s.n}</span><span>${s.t}</span></a></li>`)}</ol></details></nav></div></section>${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/components/LegalHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/LegalHeader.astro", void 0);
//#endregion
//#region src/components/LegalSections.astro
createAstro("https://ignitify.dev");
var $$LegalSections = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LegalSections;
	const { sections } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="lh-body"><h2 class="lh-h2">The clauses</h2><div class="tbl">${sections.map((s) => renderTemplate`<div class="tr c2"${addAttribute(`s-${s.n}`, "id")}><div class="td"><span class="v">${s.n}</span><strong style="display:block">${s.t}</strong>${s.missing && renderTemplate`<span class="tag soon">In preparation</span>`}</div><div class="td">${s.p.map((x) => typeof x === "string" ? renderTemplate`<p class="def">${x}</p>` : renderTemplate`<p class="def"><strong>${x.b}</strong> ${x.t}</p>`)}${s.missing && renderTemplate`<p class="blocked"><strong>Missing:</strong> ${s.missing}</p>`}</div></div>`)}</div><div class="link-row lh-end"><a href="/contact" class="lbl link-accent">Questions about this document →</a></div></section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/LegalSections.astro", void 0);
//#endregion
export { $$LegalHeader as n, $$LegalSections as t };
