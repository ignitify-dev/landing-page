import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { n as $$LegalHeader, t as $$LegalSections } from "./LegalSections_BWbwy2aR.mjs";
import { n as EMAIL, t as COMPANY_NAME } from "./company_CM5OS1NG.mjs";
//#region src/pages/dpa.astro
var dpa_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dpa,
	file: () => $$file,
	url: () => $$url
});
var $$Dpa = createComponent(($$result, $$props, $$slots) => {
	const LAST_UPDATED = "2026-10-27";
	const SECTIONS = [
		{
			n: "01",
			t: "Roles",
			p: [
				"This addendum applies when the code you run on Ignitify handles personal data of other people.",
				"For that data, you are the controller and Ignitify (" + COMPANY_NAME + ") is the processor. You decide why and how the data is used. We process it on your behalf.",
				"This addendum is part of the Terms of Service. You accept it when you accept the terms.",
				"For the data of your account, such as the owner email address, Ignitify is a controller. That case is in the Privacy Policy."
			]
		},
		{
			n: "02",
			t: "Scope of processing",
			p: [
				{
					b: "Subject matter:",
					t: "running your code, and storing and returning its inputs and outputs."
				},
				{
					b: "Duration:",
					t: "as long as your account exists, until the data is deleted as in section 08."
				},
				{
					b: "Nature:",
					t: "we receive, store, build, run and return the data, and we delete it. A run receives a payload and returns a result, each limited to 10 KiB. We store your task source and built images. We read the console output of a VM when you ask for it."
				},
				{
					b: "Purpose:",
					t: "to provide the service to you."
				},
				{
					b: "Types of data:",
					t: "whatever your code and your payloads contain. We do not look at it and we do not know what it is. You decide what you send. Do not send data that the law treats as specially protected unless you have the right to do so."
				},
				{
					b: "Data subjects:",
					t: "the people the data is about, for example your customers, your users or your staff."
				}
			]
		},
		{
			n: "03",
			t: "Instructions",
			p: [
				"We process this data only on your documented instructions. Your instructions are this addendum, the terms, and what you do through the API and the command line tool.",
				"If we think an instruction breaks the law, we tell you.",
				"The people who can reach the data are bound to keep it confidential."
			]
		},
		{
			n: "04",
			t: "Security measures",
			p: [
				"We apply these measures. They are the same as in the Privacy Policy, section 07.",
				"Every run has its own Firecracker microVM with its own kernel. A VM never serves two customers.",
				"Requests and queries are tied to the account of the API key.",
				"API keys are stored as hashes. Stored secrets are encrypted with AES-256-GCM under a key for each account.",
				"VMs can reach the public internet only. They cannot reach other VMs or the private networks of the platform.",
				"Credentials are redacted from the request records.",
				"We make no claim of certification and give no guarantee of a result."
			]
		},
		{
			n: "05",
			t: "Sub-processors",
			p: [
				"You give us a general authorisation to use the sub-processors in the annex (section 10).",
				"Before we add or replace a sub-processor, we update the annex and tell you by email to the owner address of the account, at least 30 days ahead. If you object on reasonable data protection grounds, tell us. If we cannot solve it, you may end the service, and a paid subscription is cancelled at once.",
				"Each sub-processor is bound by data protection terms that give at least the same protection as this addendum. We stay responsible to you for its work."
			]
		},
		{
			n: "06",
			t: "Help with rights requests and compliance",
			p: [
				"If a person asks you to use a right over data we process for you, we help you as far as we can, with the means we have. If a person writes to us directly, we pass the request to you.",
				"We also help you, with the information we have, with security, breach reports, data protection impact assessments and talks with a supervisory authority.",
				"On request, we give you the information you need to show that this addendum is followed. You may audit this, or have an auditor do it, with reasonable notice and at your cost. We can answer most questions in writing first."
			]
		},
		{
			n: "07",
			t: "Breach notification",
			p: ["If we learn of a breach of security that affects the personal data we process for you, we tell you without undue delay, by email to the owner address of the account. We give you the facts we have, and we add more as we learn them."]
		},
		{
			n: "08",
			t: "Deletion and return",
			p: [
				"During the agreement you can read your runs, results and usage through the API and the command line tool, and so take your data out.",
				"When your account is deleted, the records are marked deleted and hidden, and the encryption key of the account is destroyed, so stored secrets cannot be recovered. At present the records are not erased from the database at the same moment, and nothing erases them later by itself. Request and audit records are removed after 180 days. See the Privacy Policy, section 04.",
				"To have data removed from the database, write to " + EMAIL + "."
			]
		},
		{
			n: "09",
			t: "International transfers",
			p: ["The data your code handles is stored and processed on machines of Hetzner Online GmbH, in data centres in Germany, in the EU. It does not leave the EU.", "No other provider in the annex receives the data your code handles. If that ever changes and the data must leave the EU, we use the EU standard contractual clauses or rely on an adequacy decision of the European Commission, and we tell you first (section 05)."]
		},
		{
			n: "10",
			t: "Annex — sub-processors",
			p: [
				{
					b: "Hetzner Online GmbH.",
					t: "Receives: everything the platform stores, including account data and run data. Purpose: the machines and the database. Location: Germany (EU)."
				},
				{
					b: "GitHub Pages (GitHub, Inc.).",
					t: "Receives: the requests of visitors to the website. It does not receive account data or run data. Purpose: hosting the website. Location: United States."
				},
				{
					b: "Namecheap, Inc.",
					t: "Receives: domain name lookups for ignitify.dev. It does not receive account data or run data. Purpose: DNS. Location: United States."
				},
				{
					b: "Google.",
					t: "Receives: the sign-in of the people who sign in to Ignitify with a Google account. It sends us their Google account id, email address and name. It does not receive run data. Purpose: sign-in. Location: United States."
				},
				{
					b: "Paddle (Paddle.com Market Ltd).",
					t: "Receives: the id of the workspace that buys a plan, and, from the buyer on its checkout page, the email address, country and payment details. It does not receive run data or any data your code handles. Purpose: selling and billing paid plans, as reseller and Merchant of Record. Paddle acts as an independent controller for payment data. Location: United Kingdom."
				},
				"Only Hetzner receives the data your code handles. The others receive only account, sign-in or payment data, as the Privacy Policy describes. No other sub-processor is used today."
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "dpa",
		"title": "Data Processing Addendum — Ignitify",
		"description": "The processor terms that apply when the code you run on Ignitify handles personal data."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "LegalHeader", $$LegalHeader, {
		"current": "dpa",
		"title": "Data Processing Addendum",
		"dek": "The processor terms that attach when the code you run on Ignitify handles someone else’s personal data.",
		"updated": LAST_UPDATED,
		"sections": SECTIONS
	})}${renderComponent($$result, "LegalSections", $$LegalSections, { "sections": SECTIONS })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/dpa.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/dpa.astro";
var $$url = "/dpa";
//#endregion
//#region \0virtual:astro:page:src/pages/dpa@_@astro
var page = () => dpa_exports;
//#endregion
export { page };
