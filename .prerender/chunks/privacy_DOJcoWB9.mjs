import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { n as $$LegalHeader, t as $$LegalSections } from "./LegalSections_BWbwy2aR.mjs";
import { n as EMAIL, r as companyLines, t as COMPANY_NAME } from "./company_CM5OS1NG.mjs";
//#region src/pages/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	const LAST_UPDATED = "2026-10-27";
	const SECTIONS = [
		{
			n: "01",
			t: "Who we are",
			p: [
				"Ignitify runs the code of its users in isolated VMs. This policy says what personal data Ignitify holds, why, and for how long.",
				"For the data of your account (section 02, first group) Ignitify decides why and how the data is used. In data protection terms, Ignitify is the controller. For the data that your own code handles, you are the controller and Ignitify is the processor. That case is in the Data Processing Addendum.",
				"The controller is " + COMPANY_NAME + ".",
				...companyLines(),
				"To reach us, write to " + EMAIL + "."
			]
		},
		{
			n: "02",
			t: "What we collect",
			p: [
				{
					b: "Account data.",
					t: "The workspace name and the owner email address. At the first sign-in both come from your Google account. API keys: we store a hash of each key (never the key itself), a label, the time it was last used, and whether it was revoked. For a key from ignitify login, the label is the name of your computer, and we store when the key expires."
				},
				{
					b: "Sign-in data.",
					t: "You sign in with Google. Google gives us your Google account id, your email address and your name. We store them, the time of your first and your last sign-in, and whether your sign-in is active or disabled. We do not receive your Google password."
				},
				{
					b: "Sessions.",
					t: "For each browser session on the account pages: a hash of the session cookie, the IP address and the browser user agent, and when the session started, expires or was ended. For each start of a sign-in with Google: single-use values that tie the answer from Google to your browser."
				},
				{
					b: "Logins of the command line tool.",
					t: "For each ignitify login: the name of your computer, the version of the tool, the IP address that started the login, a hash of the device code, and the short code you approve."
				},
				{
					b: "Your code and settings.",
					t: "The source of your tasks, the images we build from them, and your deployment settings. Secrets that you store are encrypted."
				},
				{
					b: "Run data.",
					t: "The payload you send to a run and the result it returns, each limited to 10 KiB, and the status of the run. The console output of a VM of your run, and the log of a build, stay on the machine that ran the VM. You read them through the API, and our operators can read them there to give support. We do not copy them into our log or database systems."
				},
				{
					b: "Usage records.",
					t: "For each run: when it started and ended, its duration and its VM size. For each account and month: runs started, deployments created, compute seconds, network egress, and a count of API requests. Storage use is recorded too."
				},
				{
					b: "Billing records.",
					t: "If you buy a plan: the customer and subscription ids that Paddle gives us, your plan, currency and subscription status, and for each invoice its id, amount, period and payment time. We never receive your card details, billing address or tax number. Paddle holds them."
				},
				{
					b: "Request and audit records.",
					t: "For each API request: the method, the route, the status and the duration. These records also hold the headers, URL, query and body of the request. Credentials and secret-looking values are replaced with \"<redacted>\" before storage. Headers can include the network address of the caller. Records of events in your account, such as a run starting, are kept in the same place."
				},
				{
					b: "Your emails.",
					t: "If you write to us, we keep your message and our reply."
				},
				{
					b: "This website.",
					t: "The site is static. It sets no cookie and runs no analytics. It reads one cookie of the account pages to show \"Profile\" instead of \"Sign in\". The payment page loads Paddle’s checkout. See section 09."
				}
			]
		},
		{
			n: "03",
			t: "Why we hold it",
			p: [
				{
					b: "To provide the service:",
					t: "to create your account, to sign you in, to authenticate your requests, to build and run your code, to show you your runs and usage, and to apply the plan you bought through Paddle."
				},
				{
					b: "To keep the platform safe:",
					t: "to limit abuse, to apply the limits of your plan, and to find and fix faults. The request and audit records serve this purpose."
				},
				{
					b: "To answer you:",
					t: "to reply to your emails and to give support."
				},
				{
					b: "To meet the law:",
					t: "to keep the records that the law asks us to keep, such as invoices."
				},
				"Where the law needs a legal basis, we rely on: the contract with you, our legitimate interest in security and in preventing abuse, and a legal obligation."
			]
		},
		{
			n: "04",
			t: "How long we keep it",
			p: [
				"These periods are what the platform does now. They are the current default settings and can change.",
				{
					b: "Sign-in data:",
					t: "until your sign-in is deleted. You can ask us to delete it (section 08). Then we delete it, with its sessions, and disable your workspace (Terms of Service, section 08)."
				},
				{
					b: "Browser sessions:",
					t: "a session lasts at most 30 days. Its record, with the IP address and the user agent, is deleted 7 days after the session expires or ends."
				},
				{
					b: "Starts of a sign-in with Google:",
					t: "valid for 10 minutes, deleted 1 hour after that."
				},
				{
					b: "Logins of the command line tool:",
					t: "the code is valid for 10 minutes. The record, with the IP address, is deleted 24 hours after the code expires."
				},
				"An hourly job deletes the records of sessions, sign-in starts and logins. These periods can change after legal review.",
				{
					b: "Account, tasks, deployments, runs, payloads and results:",
					t: "until the account is deleted. A delete marks these records as deleted and hides them. It does not erase them from the database at the same moment. At present nothing erases them later by itself."
				},
				{
					b: "Stored secrets:",
					t: "unrecoverable once the account is deleted, because the encryption key of the account is destroyed."
				},
				{
					b: "API keys:",
					t: "revoked when the account is deleted. The hash stays in the record."
				},
				{
					b: "Usage records and invoices:",
					t: "not deleted by any automatic job. A bill must still read as it was issued."
				},
				{
					b: "Request and audit records:",
					t: "180 days, then they are removed."
				},
				{
					b: "Console output of a run, and the log of a build:",
					t: "up to 30 days on the machine that ran the VM, then they are deleted. They are deleted sooner if the log space of that machine is full or the machine is removed."
				},
				{
					b: "Records of failed inbound requests to your apps:",
					t: "14 days."
				},
				{
					b: "VMs:",
					t: "a VM is destroyed when its work is done. If you ask for it, a VM stays warm for your next run, or pinned until you delete it."
				},
				{
					b: "Your emails:",
					t: "no retention period has been set yet."
				}
			]
		},
		{
			n: "05",
			t: "Who else sees it",
			p: [
				"We do not sell your data. We do not share it for advertising.",
				"We use a few providers to run the service. They are listed in the sub-processor list in the Data Processing Addendum, annex section 10. In short:",
				{
					b: "Google",
					t: "is the identity provider for sign-in. When you sign in, Google tells us your Google account id, your email address and your name, and that Google has verified the email address. Google receives no run data. Google handles your Google account under its own privacy policy."
				},
				{
					b: "GitHub Pages",
					t: "hosts this website. It serves the pages to visitors. It does not receive your account or run data."
				},
				{
					b: "Namecheap",
					t: "provides the DNS of the ignitify.dev domain. It sees domain name lookups. It does not receive your account or run data."
				},
				{
					b: "Paddle",
					t: "sells our paid plans as reseller and Merchant of Record. On its checkout page you give Paddle your email address, country and payment details. Paddle uses them to take the payment, charge tax, send receipts and prevent fraud, as an independent controller under its own privacy policy (https://www.paddle.com/legal/privacy). Paddle tells us which workspace bought which plan. It receives no run data."
				},
				{
					b: "Hetzner Online GmbH",
					t: "provides the machines that run the platform and hold its database, in data centres in Germany. It is the only provider that holds account and run data."
				},
				"We also disclose data when the law requires it."
			]
		},
		{
			n: "06",
			t: "Where it is stored",
			p: ["Account data and run data are stored on servers that Ignitify operates on machines of Hetzner Online GmbH, in Germany, in the EU. They do not leave the EU.", "Google, GitHub and Namecheap are based in the United States. Paddle is based in the United Kingdom. They receive only the data named in section 05. Where data goes to a country outside the EU, the transfer relies on an adequacy decision of the European Commission (for the United Kingdom, and for United States companies certified under the EU-US Data Privacy Framework) or on the EU standard contractual clauses."]
		},
		{
			n: "07",
			t: "Security",
			p: [
				"We take these measures. They are not a promise of any result.",
				"Every run has its own Firecracker microVM with its own kernel. A VM never serves two customers.",
				"A request is tied to the account of its API key. Queries for runs and logs are limited to that account.",
				"API keys are stored as hashes. Stored secrets are encrypted with AES-256-GCM under a key for each account.",
				"VMs can reach the public internet only. They cannot reach other VMs, the private networks of the platform, or cloud metadata addresses.",
				"Plans set limits for each account, and failed sign-in attempts are rate-limited by source address.",
				"Credentials are redacted from the request records before they are stored.",
				"We hold no security certification. We cannot guarantee that a breach will never happen."
			]
		},
		{
			n: "08",
			t: "Your rights",
			p: [
				"Where the law gives you the rights, you may ask us for access to your personal data, for correction of it, for deletion of it, to restrict or to object to its use, and to receive it in a portable form.",
				"To use a right, write to " + EMAIL + " from the owner email address of the account. We may ask you to prove who you are.",
				"When we delete your sign-in, the record of your Google account and its sessions are deleted from the database. A deleted workspace stays in the database as a record marked deleted (section 04). If you ask for deletion, we tell you what we can remove and what we must keep.",
				"You may also complain to the data protection authority of your country. In Sweden, this is the Swedish Authority for Privacy Protection (IMY)."
			]
		},
		{
			n: "09",
			t: "Cookies and browser storage",
			p: [
				"This website sets no cookies. It has no analytics, no advertising pixel and no third-party tag. One page is the exception: the payment page (/pay) loads Paddle’s checkout from Paddle’s servers when you are sent there to pay. Paddle’s checkout may set its own cookies, under Paddle’s policy.",
				"The account pages on account.ignitify.dev set three cookies. Two are needed to sign you in, and neither is used for anything else. The session cookie lasts at most 30 days and ends when you sign out. The sign-in cookie lasts 10 minutes and ties the answer from Google to your browser.",
				"The third cookie (ignitify_signed_in) tells this website that you are signed in, so the page header shows \"Profile\" instead of \"Sign in\". It holds only the name of the account pages host. It holds no identifier, no email address and no secret, and it does not sign you in. This website can read it. It lasts no longer than your session and is removed when you sign out.",
				"It keeps two preferences in your browser storage: the light or dark theme (ig-theme), and the example tab you last chose in the docs (ig-docs-tab). Neither leaves your browser.",
				"GitHub Pages serves this site. It may record visitor requests under its own policy."
			]
		},
		{
			n: "10",
			t: "Children",
			p: ["Ignitify is not for children, and we do not knowingly collect data about children."]
		},
		{
			n: "11",
			t: "Changes to this policy",
			p: ["We may change this policy. The date at the top of this page shows the last update."]
		},
		{
			n: "12",
			t: "Contact",
			p: ["Write to " + EMAIL + "."]
		}
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "privacy",
		"title": "Privacy Policy — Ignitify",
		"description": "What personal data Ignitify holds, why, and for how long."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main>${renderComponent($$result, "LegalHeader", $$LegalHeader, {
		"current": "privacy",
		"title": "Privacy Policy",
		"dek": "What personal data Ignitify holds, why, where it is stored, and for how long.",
		"updated": LAST_UPDATED,
		"sections": SECTIONS
	})}${renderComponent($$result, "LegalSections", $$LegalSections, { "sections": SECTIONS })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/privacy.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/privacy.astro";
var $$url = "/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
