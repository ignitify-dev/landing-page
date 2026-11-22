import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { a as SIGN_IN_OPEN, i as PRICES_SHOWN, n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import { t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import { n as ACCOUNT_ORIGIN } from "./account-origin_B3Hw8Ff7.mjs";
import { n as WEB_ROUTES, t as BILLING_PLAN_PARAM } from "./api-routes_1HhbY0si.mjs";
import { a as bytesBinary, c as imageCeiling, d as networkLine, f as presetRung, l as interpolate, n as NETWORK_TEXT, o as duration, p as row, s as egressQuota, t as NETWORK_FLAGS, u as mib } from "./tiers_DIe1pdQ_.mjs";
//#region src/lib/pricing-table.ts
/** A network capability row: the plain label, then what it means for the task. */
var networkCapability = (direction) => ({
	label: `${NETWORK_TEXT[direction].label} (${NETWORK_TEXT[direction].means})`,
	key: NETWORK_FLAGS[direction],
	absentSr: "No",
	highlight: true
});
/** The word for an inbound limit that a tier does not cap: the platform maximum applies. */
var INBOUND_UNCAPPED = "Platform maximum";
var GROUPS = [
	{
		title: "Concurrency",
		rows: [
			{
				label: "Concurrent runs",
				key: "max_running_vms"
			},
			{
				label: "Units",
				key: "max_units",
				unlimitedText: "No units limit"
			},
			{
				label: "Pinned VMs",
				key: "max_pinned_vms",
				capability: "may_pin",
				highlight: true
			},
			{
				label: "Warm VMs",
				key: "max_warm_vms"
			}
		]
	},
	{
		title: "What you can create",
		rows: [
			{
				label: "Tasks",
				key: "max_tasks"
			},
			{
				label: "Deployments",
				key: "max_deployments"
			},
			{
				label: "Secrets",
				key: "max_secrets"
			},
			{
				label: "API keys",
				key: "max_api_keys"
			},
			{
				label: "Schedules",
				key: "max_schedules"
			},
			{
				label: "Webhooks",
				key: "max_webhooks",
				capability: "may_use_webhooks",
				highlight: true
			}
		]
	},
	{
		title: "Rate",
		rows: [
			{
				label: "Runs / minute",
				key: "runs_per_minute"
			},
			{
				label: "Runs / hour",
				key: "runs_per_hour"
			},
			{
				label: "Runs / day",
				key: "runs_per_day"
			},
			{
				label: "Deployments / minute",
				key: "deployments_per_minute"
			},
			{
				label: "API requests / sec",
				key: "api_requests_per_sec"
			}
		]
	},
	{
		title: "Size & time",
		rows: [
			{
				label: "Max run duration",
				key: "max_timeout_sec",
				format: duration
			},
			{
				label: "Monthly compute",
				key: "max_compute_seconds_month",
				format: duration,
				unlimitedText: "No cap"
			},
			{
				label: "Idle warm VM lifetime",
				key: "max_vm_lifetime_sec",
				format: duration
			},
			{
				label: "Scratch storage",
				key: "max_storage_mib",
				format: mib
			},
			{
				label: "Deployment image",
				key: "max_image_bytes",
				format: imageCeiling
			},
			{
				label: "Image storage",
				key: "max_total_image_bytes",
				format: bytesBinary
			}
		]
	},
	{
		title: "Network",
		rows: [
			networkCapability("outbound"),
			{
				label: "Outbound bandwidth",
				key: "egress_mbit",
				capability: NETWORK_FLAGS.outbound,
				format: (v) => `${v} Mbit`
			},
			{
				label: "Outbound data each month",
				key: "monthly_egress_bytes",
				capability: NETWORK_FLAGS.outbound,
				format: egressQuota,
				unlimitedText: "Unmetered"
			},
			{
				label: "Outbound connections per VM",
				key: "max_conns_per_vm",
				capability: NETWORK_FLAGS.outbound
			},
			{
				label: "DNS queries / sec",
				key: "dns_max_qps",
				capability: NETWORK_FLAGS.outbound
			},
			networkCapability("inbound"),
			{
				label: "Inbound requests / sec (per route)",
				key: "ingress_rps",
				capability: NETWORK_FLAGS.inbound,
				unlimitedText: INBOUND_UNCAPPED
			},
			{
				label: "Inbound burst (requests, per route)",
				key: "ingress_burst",
				capability: NETWORK_FLAGS.inbound,
				unlimitedText: INBOUND_UNCAPPED
			},
			{
				label: "Inbound requests at one time (per vCPU)",
				key: "ingress_max_concurrent",
				capability: NETWORK_FLAGS.inbound,
				unlimitedText: INBOUND_UNCAPPED
			}
		]
	},
	{
		title: "Capabilities",
		rows: [
			{
				label: "Pin a VM",
				key: "may_pin",
				absentSr: "No"
			},
			{
				label: "Secrets",
				key: "may_use_secrets",
				absentSr: "No"
			},
			{
				label: "Webhooks",
				key: "may_use_webhooks",
				absentSr: "No"
			},
			{
				label: "Automatic retries",
				key: "may_use_retry",
				absentSr: "No"
			},
			{
				label: "Long duration",
				key: "may_duration_long",
				absentSr: "No"
			},
			{
				label: "Continuous workloads",
				key: "may_cardinality_continuous",
				absentSr: "No"
			},
			{
				label: "Warm reuse",
				key: "may_state_across_runs",
				absentSr: "No"
			},
			{
				label: "Retry attempts",
				key: "failure_max_attempts"
			},
			{
				label: "VM sizes",
				key: "allowed_presets",
				rowClass: "presets",
				unlimitedText: "All sizes"
			}
		]
	}
];
//#endregion
//#region src/components/PricingTable.astro
var $$PricingTable = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<thead><tr><th scope="col">Limit</th><th scope="col">Free</th><th scope="col">Starter</th><th scope="col">Team</th><th scope="col">Pro</th><th scope="col">Enterprise</th></tr></thead>${GROUPS.map((group) => renderTemplate`<tbody class="grp"><tr class="gh"><th scope="colgroup" colspan="6">${group.title}</th></tr>${group.rows.map((spec) => renderTemplate`<tr${addAttribute([spec.highlight && "hl", spec.rowClass].filter(Boolean).join(" ") || void 0, "class")}><th scope="row">${spec.label}</th>${row(spec.key, {
		format: spec.format,
		capability: spec.capability,
		absentSr: spec.absentSr,
		unlimitedText: spec.unlimitedText
	}).map((cell) => cell.kind === "yes" ? renderTemplate`<td class="num y">Yes</td>` : cell.kind === "absent" ? renderTemplate`<td class="num n"><span class="sr">${cell.sr}</span><span aria-hidden="true">—</span></td>` : cell.kind === "list" ? renderTemplate`<td class="num"><ul class="cell-list">${cell.items.map((i) => renderTemplate`<li${addAttribute(cell.added.includes(i) ? "new" : void 0, "class")}>${i}</li>`)}</ul></td>` : renderTemplate`<td class="num">${cell.text}</td>`)}</tr>`)}</tbody>`)}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/PricingTable.astro", void 0);
var SYMBOL = {
	SEK: "kr",
	EUR: "€",
	USD: "$"
};
/**
* Render a price. ⭐ Zero is "Free", not "0 kr" — a zero price is a product statement and
* reads as one; "0 kr" reads like a rounding error.
*/
function formatPrice(amount, currency = "SEK") {
	if (amount === 0) return "Free";
	const sym = SYMBOL[currency] ?? currency;
	return currency === "SEK" ? `${group(amount)}\u00A0${sym}` : `${sym}${group(amount)}`;
}
/**
* Thousands separated by a NARROW NO-BREAK SPACE (U+202F).
*
* ⌛ Added 2026-09-18 with `pro`, the first four-digit price this page has ever rendered —
* until then every number was under 1000 and the gap was invisible. `3490 kr` is not how a
* price is written in the market this page sells to.
*
* ⛔ A NARROW NO-BREAK space, not a plain one: a normal space lets a browser wrap `3` onto one
* line and `490 kr` onto the next, which reads as a different price. It is also why this is
* not `toLocaleString('sv-SE')` — that emits a plain U+00A0 and, more importantly, would make
* the rendered price depend on the build machine's ICU data rather than on this file.
*/
function group(n) {
	return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
//#endregion
//#region src/components/PlanCards.astro
var $$PlanCards = createComponent(async ($$result, $$props, $$slots) => {
	const EMAIL = "admin@ignitify.dev";
	const cards = (await getCollection("pricing")).sort((a, b) => a.data.order - b.data.order);
	const nameOf = new Map(cards.map((c) => [c.data.plan_id, c.data.display_name]));
	const priceByTier = new Map((await getCollection("plans")).filter((p) => p.data.period === "month").map((p) => [p.data.tier, p.data.prices["SEK"]]));
	function chooseHref(tier) {
		const price = priceByTier.get(tier);
		if (!SIGN_IN_OPEN || price === null || price === void 0 || price <= 0) return null;
		return `${ACCOUNT_ORIGIN}${WEB_ROUTES.BILLING_START}?${new URLSearchParams({ [BILLING_PLAN_PARAM]: tier })}`;
	}
	return renderTemplate`${maybeRenderHead($$result)}<div class="plans stagger">${cards.map((p) => renderTemplate`<div${addAttribute(["plan", p.data.card_class].filter(Boolean).join(" "), "class")}><div class="phead"><span class="prung" aria-hidden="true">${p.data.rung}</span><h3>${p.data.display_name}</h3></div><div class="price">${priceByTier.get(p.data.plan_id) === null || priceByTier.get(p.data.plan_id) === void 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<b>Contact us</b><span class="tbd-note">Price on request</span>` })}` : !PRICES_SHOWN && priceByTier.get(p.data.plan_id) !== 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<b class="redacted" aria-hidden="true">000 kr</b><span class="tbd-note">Price to be announced</span>` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<b>${formatPrice(priceByTier.get(p.data.plan_id))}</b>${priceByTier.get(p.data.plan_id) !== 0 && renderTemplate`<span class="tbd-note">per month, ex. VAT</span>`}` })}`}</div><p class="blurb">${p.data.blurb}</p><ul class="pfeat">${[networkLine(p.data.plan_id), ...p.data.features.map((f) => ({
		...f,
		text: interpolate(f.text, p.data.plan_id)
	}))].map((f) => renderTemplate`<li${addAttribute(f.kind, "class")}>${f.text}</li>`)}</ul>${(() => {
		const r = presetRung(p.data.plan_id);
		return renderTemplate`<div class="ppreset"><span class="ppreset-h">VM sizes</span><ul>${r.from && renderTemplate`<li class="from">${nameOf.get(r.from) ?? r.from} +</li>`}${r.names.map((n) => renderTemplate`<li class="chip">${n}</li>`)}</ul></div>`;
	})()}${(() => {
		const href = chooseHref(p.data.plan_id);
		if (priceByTier.get(p.data.plan_id) === null || priceByTier.get(p.data.plan_id) === void 0) {
			const subject = new URLSearchParams({ subject: `Ignitify ${p.data.display_name}` }).toString().replace(/\+/g, "%20");
			return renderTemplate`<a class="btn ghost wide"${addAttribute(`mailto:${EMAIL}?${subject}`, "href")}>${EMAIL}</a>`;
		}
		return href && renderTemplate`<a class="btn ghost wide"${addAttribute(href, "href")}>Choose ${p.data.display_name}</a>`;
	})()}</div>`)}</div>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/PlanCards.astro", void 0);
//#endregion
//#region src/_extracted/pricing.head.html?raw
var pricing_head_default = "<main>\n\n     <!-- ════ PRICING · re-composed 2026-08-25. See PRICING-SPEC.md ════\n       The page argues its own lede: most of the ladder is QUANTITY, two\n       rungs are CAPABILITY. Elevation and lemon are what make those two\n       look different from each other, here and in the table below.\n\n         ground  the argument   hero, lede, the two policy columns\n         well    where you act  the ladder band\n         plate   what's offered each plan, the comparison sheet\n\n       LEMON HAS A FACTUAL PRECONDITION on this page, checkable against\n       config/product/tiers/production/*.json: a lemon edge appears on a plan\n       IFF it grants a capability flag the rung below it does not (starter,\n       pro — and NOT team or enterprise, whose may_* flags equal the rung\n       below: they unlock NO new capability flag), and on a table row IFF the\n       row is a capability rather than a quantity. Two cards, two rungs,\n       one fact. ⌛ The headline no longer names them — it now says what does\n       NOT change between plans — so the two-ness is carried by the cards,\n       the lede and the table, and no longer by the h1.\n       ════════════════════════════════════════════════════════════════════ -->\n\n     <section class=\"hero-sec reveal\" id=\"pricing-hero\">\n          <div class=\"mid\">\n               <!-- ⌛ 2026-09-14. The h1 used to be \"Five tiers. Three of them change\n           what your code can do\" — accurate (exactly three rungs flipped a\n           capability flag) but it described the LADDER, which is what the lede\n           below already does at length.\n           This says what the ladder does NOT change, which is the thing a buyer\n           is quietly asking on a pricing page and the one answer that is the\n           same on every row. Checkable against config/product/tiers/production/: no tier weakens\n           the boundary — may_use_secrets is true on all five (may_use_egress\n           is false on free, so a free VM has no network card), and one MicroVM per job is a platform invariant rather than a\n           tier feature. Only HOW MANY at once changes (1 · 3 · 6 · 12 · 24).\n           It is also D3's position — reframe on isolation, name no rivals.\n           <em> takes the site-wide lemon marker, as on home's \"its own\n           <em>kernel</em>\". -->\n               <h1>The isolation is the same on <em>every</em>&nbsp;plan.</h1>\n               <!-- Centred as a BLOCK, set LEFT. .mid centres its text, which is right\n           for the one- and two-line decks it was built for; this runs several\n           lines and centred prose gives the reader a ragged left edge to hunt\n           for on every return sweep.\n           ⌛ 2026-09-14: was two paragraphs — one naming which rungs unlock\n           what, one on enforcement and the 429/503 split. Merged and made\n           general: the cards and the comparison sheet below already say which\n           rung does what, per tier and per row, so naming them here said it a\n           third time and dated the lede to the current ladder. -->\n          </div>\n     </section>\n\n     <section class=\"band band-well reveal\" id=\"pricing-ladder\">";
//#endregion
//#region src/_extracted/pricing.mid.html?raw
var pricing_mid_default = "</section>\n\n  <section class=\"reveal\" id=\"pricing-compare\">\n    <div class=\"mid\">\n      <h2 class=\"sh\" id=\"cmp-h\">Compare everything</h2>\n      <p class=\"def\">Every row is read straight from the published plan definitions. A dash means the capability is not granted — not that the limit is zero.</p>\n    </div>\n    <!-- .tw no longer clips vertically. It carried max-height:min(72vh,660px)\n         purely to give `thead th{position:sticky;top:0}` a scrollport, because\n         overflow:auto had made .tw the scroller — a workaround for the real\n         bug, which was body{overflow-x:hidden} stopping the VIEWPORT from\n         being the scroll container at all (see sk-styles.css). With that\n         fixed, the heads stick to the viewport and 37 rows read as 37 rows.\n         Below 600px the table's 527px intrinsic minimum no longer fits, so the\n         horizontal scroller comes back and sticky goes away with it. -->\n    <div class=\"tw\">\n      <table class=\"cmp\" aria-labelledby=\"cmp-h\">\n<!-- ════ THE COMPARISON SHEET IS NOT IN THIS FILE ════\n       Its ~185 entitlement values are rendered at build time from\n       config/product/tiers/production/ by src/components/PricingTable.astro,\n       so a limit exists in exactly one place (DESIGN-NOTES §2, class C).\n       Row labels, grouping and the lemon-edge rule live in\n       src/lib/pricing-table.ts. Nothing here needs editing when a limit moves.\n       ════════════════════════════════════════════════════════════════════ -->\n";
//#endregion
//#region src/_extracted/pricing.foot.html?raw
var pricing_foot_default = "</table>\n</div>\n</section>\n\n<!-- Two parallel properties, read across. REDESIGN-SPEC §9c landed on ruled\n       columns for exactly this shape: the box added nothing but edges, and\n       this page already spends its edges on plates and a sheet. -->\n<section class=\"reveal\" id=\"pricing-policy\">\n  <div class=\"two stagger\">\n    <div class=\"col\">\n      <h3>What happens when you hit a limit</h3>\n      <p class=\"muted\">Going over a quota gives a <b>429</b> with the reason, the limit, and what you actually used — and upgrading fixes it. Using something your plan does not include gives a <b>400</b> at deploy or a <b>403</b> at run, naming the capability.</p>\n      <p class=\"muted\">Two limits decide how many runs go at once: <b>concurrent runs</b> on every plan, and <b>units</b> on a plan that lists them. Each VM size has a weight in units. See <a href=\"/docs/concepts/how-capacity-works\">how capacity works</a>.</p>\n      <p class=\"muted\">What you <em>won’t</em> get is a 429 because the host is busy. That case returns <b>503</b>, or the run is simply queued and dispatched when a slot frees. A transient full host is never reported as a plan problem, so you’re\n        never told to upgrade when all you needed was to wait.</p>\n      <p class=\"stack-4\"><a class=\"lbl link-accent\" href=\"/docs\">Error reference →</a></p>\n    </div>\n    <div class=\"col\">\n      <h3>Changing plans</h3>\n      <p class=\"muted\"><b>Your plan is pinned at the version you were granted.</b> Plans are never edited in place — a price or limit change publishes a new version, and existing customers stay on theirs. We move a whole plan only to correct an error, or with notice.</p>\n      <p class=\"muted\">Grandfathering isn’t a policy anyone has to remember here; it’s how the tier system is built.</p>\n    </div>\n  </div>\n</section>\n\n<!-- The base plate. Identical to / and /platform — this page used to stop\n       dead into the footer. NO per-plan CTA exists above, deliberately:\n       DESIGN-NOTES §1 rules that signup and checkout are not backend\n       capabilities yet, and a \"choose this plan\" button under a plan with no price,\n       wired to a route with no form, is the exact failure that section is\n       about. One honest call to action, at the end. -->\n<section class=\"closing reveal\" id=\"pricing-closing\">\n  <div class=\"cta-row\">\n    <a class=\"btn solid live lg\" href=\"/contact\">Talk to us</a>\n    <a class=\"btn ghost lg\" href=\"/docs\">Read the docs</a>\n    <span class=\"lbl\">ignitify.dev</span>\n  </div>\n</section>\n\n</main>";
//#endregion
//#region src/pages/pricing.astro
var pricing_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pricing,
	file: () => $$file,
	url: () => $$url
});
var $$Pricing = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "pricing",
		"title": "Pricing — Ignitify",
		"description": "Five rungs; two of them change what your code can do. Enterprise: contact us for a price."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(pricing_head_default)}` })}${renderComponent($$result, "PlanCards", $$PlanCards, {})}${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(pricing_mid_default)}` })}${renderComponent($$result, "PricingTable", $$PricingTable, {})}${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${unescapeHTML(pricing_foot_default)}` })}${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/pricing.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/pricing.astro";
var $$url = "/pricing";
//#endregion
//#region \0virtual:astro:page:src/pages/pricing@_@astro
var page = () => pricing_exports;
//#endregion
export { page };
