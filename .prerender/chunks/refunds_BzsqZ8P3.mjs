import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { n as $$LegalHeader, t as $$LegalSections } from "./LegalSections_BWbwy2aR.mjs";
//#region src/pages/refunds.astro
var refunds_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Refunds,
	file: () => $$file,
	url: () => $$url
});
var $$Refunds = createComponent(($$result, $$props, $$slots) => {
	const LAST_UPDATED = "2026-10-23";
	const SECTIONS = [
		{
			n: "01",
			t: "Who handles refunds",
			p: ["Paddle.com is the reseller and Merchant of Record for all our orders. Paddle makes every refund, to the payment method you used, and sends you a credit note.", "This policy says when we agree to a refund. Paddle’s refund policy (https://www.paddle.com/legal/refund-policy) also applies. Your legal rights as a consumer always apply."]
		},
		{
			n: "02",
			t: "Cancel at any time",
			p: ["You can cancel a subscription at any time on your account page. You keep your plan until the end of the month you paid for. No further payment is taken."]
		},
		{
			n: "03",
			t: "When you get a refund",
			p: [
				{
					b: "First 14 days.",
					t: "If you ask within 14 days of the first payment of your workspace’s first paid subscription, we refund every payment of that subscription so far, including an upgrade paid in those 14 days. Renewals, a new subscription after a cancel, and part months are not refunded."
				},
				{
					b: "Business buyers.",
					t: "A business gets this refund once in 12 months, and not when the workspace used more than 10 % of its plan’s monthly egress or compute in those 14 days."
				},
				{
					b: "Our mistakes.",
					t: "If we charged you in error, or a fault on our side stopped the service, we refund the affected amount at any time."
				}
			]
		},
		{
			n: "04",
			t: "How to ask",
			p: ["Write to admin@ignitify.dev from the owner email address of your workspace, with the date and amount of the payment.", "When we refund, we also end the subscription, and your workspace moves to the free plan. Nothing in it is deleted. A large refund can take Paddle some days to approve."]
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "refunds",
		"title": "Refund Policy — Ignitify",
		"description": "When you get your money back for a paid Ignitify plan, and how to ask."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "LegalHeader", $$LegalHeader, {
		"current": "refunds",
		"title": "Refund Policy",
		"dek": "When you get your money back for a paid plan, and how to ask.",
		"updated": LAST_UPDATED,
		"sections": SECTIONS
	})}${renderComponent($$result, "LegalSections", $$LegalSections, { "sections": SECTIONS })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/refunds.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/refunds.astro";
var $$url = "/refunds";
//#endregion
//#region \0virtual:astro:page:src/pages/refunds@_@astro
var page = () => refunds_exports;
//#endregion
export { page };
