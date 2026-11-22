import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, o as renderScript, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const EMAIL = "admin@ignitify.dev";
	const TOPICS = [
		{
			t: "Access and plans",
			subject: "Access request",
			d: "Free sign-up is open. Ask for a plan change, paid access, or an Enterprise price."
		},
		{
			t: "A problem you have hit",
			subject: "Problem with a run",
			d: "Give the command you ran and the output. After a server error, the CLI prints a server trace id: include it."
		},
		{
			t: "A security issue",
			subject: "Security",
			d: "Put \"Security\" in the subject line, and give us a chance to fix the issue before you publish it."
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "contact",
		"title": "Contact — Ignitify",
		"description": "One address for access, plans, support and security reports: admin@ignitify.dev."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="pg-hero"><h1>Write to us.</h1><div class="mail"><p class="lbl mail-l">One address for everything. No account needed.</p><a class="mail-addr"${addAttribute(`mailto:${EMAIL}`, "href")}>${EMAIL}</a><div class="cta-row"><a class="btn solid live"${addAttribute(`mailto:${EMAIL}`, "href")}>Write an email</a><button class="btn ghost" type="button"${addAttribute(EMAIL, "data-copy")} hidden>Copy address</button><span class="lbl" role="status" data-copy-note></span></div></div></section><section><div class="split"><div class="split-h"><h2>The same address takes all of it.</h2></div><div class="split-b"><p class="def">Questions about the platform or the plans, a problem you have hit, or something on this site that looks wrong. These details help us answer the first time.</p></div></div><ul class="tp-grid">${TOPICS.map((x) => renderTemplate`<li class="tp"><h3>${x.t}</h3><p class="def">${x.d}</p><p class="lbl tp-s">Subject: <span class="mono">${x.subject}</span></p></li>`)}</ul><p class="tp-guide"><span class="def">Something not working?</span><a href="/docs/guides/troubleshoot" class="lbl link-accent">Try the troubleshooting guide first →</a></p></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/contact.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
