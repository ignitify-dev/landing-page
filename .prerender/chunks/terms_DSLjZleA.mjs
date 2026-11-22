import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { n as $$LegalHeader, t as $$LegalSections } from "./LegalSections_BWbwy2aR.mjs";
import { n as EMAIL, r as companyLines, t as COMPANY_NAME } from "./company_CM5OS1NG.mjs";
//#region src/pages/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	const LAST_UPDATED = "2026-10-27";
	const SECTIONS = [
		{
			n: "01",
			t: "The service",
			p: [
				"Ignitify runs code that you deploy. Each run happens in its own Firecracker microVM, with its own kernel. A VM never serves two customers.",
				"Ignitify is for people and businesses that run their own code. By using the service you agree to these terms for yourself and, if you act for a business, for that business.",
				"In these terms, \"Ignitify\", \"we\" and \"us\" mean the company named in section 12."
			]
		},
		{
			n: "02",
			t: "Accounts and API keys",
			p: [
				"You sign in with a Google account. Your first sign-in creates your account and a workspace on the free plan at once. Google must confirm your email address. One Google account has one workspace. In these terms, \"account\" means your sign-in and your workspace together.",
				"You get the free plan by signing in. You can buy a paid plan on the Pricing page or on your account page. Ignitify can also set up an account on another plan for you, for example Enterprise. To ask, write to " + EMAIL + ".",
				"If the free plan is full when you first sign in, we keep your sign-in but create no workspace. Sign in again later to try again.",
				"Your workspace has a name and an owner email address. At the first sign-in we take them from your Google account. You reach the service with an API key. The command line tool gets a key when you run ignitify login and approve it on your account page. A key from ignitify login stops working after 90 days without use. We store only a hash of the key, so we cannot show it to you again.",
				"Keep your keys secret. You are responsible for what is done with your keys. If a key leaks, revoke it on your account page, or tell us so that we revoke it."
			]
		},
		{
			n: "03",
			t: "Acceptable use",
			p: [
				"Do not use the service for anything illegal.",
				"Do not use a VM to attack other systems, networks or people, or to scan, spam or send malware.",
				"Do not try to reach another customer, another VM, or the platform itself. Do not try to get around the isolation between VMs.",
				"Do not abuse limits. Do not try to bypass a plan limit, a rate limit or a size cap. Stay inside the technical limits of the platform, for example the 10 KiB cap on the payload and the result of a run.",
				"We may stop a run or suspend an account that breaks these rules (section 07)."
			]
		},
		{
			n: "04",
			t: "Your content and ownership",
			p: [
				"Your code, your task files, the payloads you send, the results and the secrets you store are your content. You keep all rights in it. We do not claim ownership.",
				"You give us the right to store, build, run and show your content, only as far as needed to provide the service to you.",
				"Secrets you store are encrypted at rest. You are responsible for your content, and for having the right to run it."
			]
		},
		{
			n: "05",
			t: "Plans, limits and fees",
			p: [
				"What a plan allows is set per plan and is shown on the Pricing page. The service checks the limits when a run is admitted and refuses the run, with a reason, when a limit is reached.",
				"Paid plans are monthly subscriptions. Prices are shown on the Pricing page in SEK, EUR or USD, per month and excluding tax. Enterprise is priced on request and is not sold through the checkout.",
				{
					b: "Paddle is the seller.",
					t: "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle takes the payment, adds the tax of your country, sends the receipt, and handles refunds and payment questions. Paddle’s buyer terms (https://www.paddle.com/legal/checkout-buyer-terms) also apply. We never receive your card details."
				},
				{
					b: "Changes and cancel.",
					t: "An upgrade applies at once; Paddle charges the difference for the rest of the month. A downgrade or a cancel applies at the end of the month you paid for, and you can undo it before then. If a renewal payment fails and is not paid, your workspace moves to the free plan. Nothing is deleted when a plan gets smaller; new runs over the new limits are refused."
				},
				"Refunds are described in the Refund Policy (/refunds).",
				"We may change plans and prices. A new price applies to a subscription only from its next renewal."
			]
		},
		{
			n: "06",
			t: "Availability",
			p: ["We provide the service as it is and as it is available. There is no service level agreement and no uptime promise.", "We may change, pause or maintain the service. We do not promise that no run will ever be interrupted."]
		},
		{
			n: "07",
			t: "Suspension",
			p: [
				"We may disable an account when it breaks these terms or when it puts the platform or other customers at risk.",
				"A disabled account cannot create new deployments or new runs. It can still read its runs, logs and usage. A disable does not stop a VM that is already running and does not delete anything. The reason for the disable is recorded and shown to the account.",
				"We may also disable a sign-in. Then nobody can sign in with it, and its open browser sessions end."
			]
		},
		{
			n: "08",
			t: "Termination and deletion",
			p: [
				"You may stop using the service at any time. To close an account, write to " + EMAIL + ".",
				"Closing your account or deleting your workspace cancels a paid subscription at once. To keep the month you paid for, cancel on your account page first.",
				"When we delete your sign-in, we delete the record of your Google account (its Google id, email address and name) and its browser sessions. In the same step we disable your workspace and revoke all of its API keys. The data in the workspace is deleted in a separate step, described below. If you later sign in with the same Google account, you get a new free workspace.",
				"When a workspace is deleted: its tasks, deployments and runs are marked deleted and are no longer shown; its API keys are revoked so a deleted workspace can no longer authenticate; runs that have not finished are cancelled; and the encryption key that protects its stored secrets is destroyed, so the secrets cannot be recovered.",
				"Records are marked deleted. They are not erased from the database at the same moment. Invoices and usage records stay, because a bill must still read as it was issued. See the Privacy Policy for how long records are kept."
			]
		},
		{
			n: "09",
			t: "Liability",
			p: ["To the extent the law allows, Ignitify is not liable for indirect or consequential loss, for loss of profit, or for loss of data, and the service is provided without warranty of any kind.", "Nothing in these terms limits a liability that the law does not allow us to limit."]
		},
		{
			n: "10",
			t: "Changes to these terms",
			p: ["We may change these terms. The date at the top of this page shows the last update. If you continue to use the service after a change, you accept the new terms."]
		},
		{
			n: "11",
			t: "Governing law and courts",
			p: [
				"Swedish law governs these terms. Disputes go to the courts of Sweden.",
				"If you are a consumer, you keep the protection that the law of your country of residence gives you, and you may also bring a claim in the courts of that country.",
				"Before you go to court, write to us. We try to solve the problem with you first."
			]
		},
		{
			n: "12",
			t: "Who we are and how to reach us",
			p: [
				"Ignitify is run by " + COMPANY_NAME + ".",
				...companyLines(),
				"Write to " + EMAIL + ". This is the one address for access, plans, billing, refunds, support, legal questions and security reports."
			]
		},
		{
			n: "13",
			t: "The command line tool",
			p: [
				"The command line tool is the npm package ignitify. You may install it and use it with the service at no charge. It comes with its own licence, in the file LICENSE in the package. That licence covers the tool. These terms cover the service.",
				"The tool contains code from other authors under their own open source licences. Their texts are in the file ignitify-NOTICE.txt in the package.",
				"Some commands write files into your project, for example the files of a new task, and the runtime client of a Go or Rust task. You may use, change and share these files as part of your own code.",
				"The HTTP API behind the command line tool is not a supported product. Use the service through the command line tool."
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "terms",
		"title": "Terms of Service — Ignitify",
		"description": "The terms under which you use Ignitify."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "LegalHeader", $$LegalHeader, {
		"current": "terms",
		"title": "Terms of Service",
		"dek": "The agreement between Ignitify and the people and businesses that use it.",
		"updated": LAST_UPDATED,
		"sections": SECTIONS
	})}${renderComponent($$result, "LegalSections", $$LegalSections, { "sections": SECTIONS })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/terms.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/terms.astro";
var $$url = "/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };
