import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, o as renderComponent, p as renderTemplate, s as Fragment, z as renderHead } from "./server_D7BsF4R_.mjs";
import { n as ACCOUNT_ORIGIN, o as SITE_MODE, r as PROFILE_URL } from "./account-origin_B3Hw8Ff7.mjs";
import { n as WEB_ROUTES } from "./api-routes_1HhbY0si.mjs";
import { createHash } from "node:crypto";
//#region src/lib/checkout.ts
var PADDLE_SCRIPT_URL = "https://cdn.paddle.com/paddle/v2/paddle.js";
/** A client-side token of each system: `test_` or `live_` and 27 letters or digits. */
var TOKEN_PATTERN = {
	sandbox: /^test_[a-zA-Z0-9]{27}$/,
	production: /^live_[a-zA-Z0-9]{27}$/
};
/** Where the buyer lands after paying: the account page that waits for the payment to be confirmed. */
var CHECKOUT_SUCCESS_URL = `${ACCOUNT_ORIGIN}${WEB_ROUTES.BILLING_SUCCESS}`;
/** Where a buyer who closes the checkout, or whose checkout fails, goes back to. */
var CHECKOUT_BACK_URL = PROFILE_URL;
/** PURE. The Paddle system of one Astro mode: only the published site takes real money. */
var paddleEnvironmentFor = (mode) => mode === SITE_MODE.PRODUCTION ? "production" : "sandbox";
/** PURE. The settings of the pay page, or `null` when no usable token was given for this mode. */
function checkoutSettingsFor(mode, token) {
	const environment = paddleEnvironmentFor(mode);
	const value = token?.trim() ?? "";
	if (!TOKEN_PATTERN[environment].test(value)) return null;
	return {
		environment,
		token: value,
		successUrl: CHECKOUT_SUCCESS_URL
	};
}
/**
* PURE. The CSP of the pay page. `scriptHash` is the sha256 (base64) of its one inline script; with
* no checkout there is no script at all. Paddle.js draws its checkout in a frame from a Paddle host
* and adds its own styles, so frames, requests, images and styles are allowed from Paddle hosts.
*/
function payPageCsp(scriptHash) {
	const paddle = "https://*.paddle.com";
	return [
		"default-src 'none'",
		scriptHash === null ? "script-src 'none'" : `script-src ${PADDLE_SCRIPT_URL} 'sha256-${scriptHash}'`,
		`frame-src ${paddle}`,
		`connect-src ${paddle}`,
		`img-src 'self' data: ${paddle}`,
		`style-src 'self' 'unsafe-inline' ${paddle}`,
		`font-src 'self' data: ${paddle}`,
		"base-uri 'none'",
		"form-action 'none'"
	].join("; ");
}
//#endregion
//#region src/pages/pay.astro
var pay_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Pay,
	file: () => $$file,
	url: () => $$url
});
var $$Pay = createComponent(($$result, $$props, $$slots) => {
	const settings = checkoutSettingsFor("production", void 0);
	const boot = settings === null ? null : `(function (s) {
  var show = function (id) {
    document.getElementById('pay-wait').hidden = true;
    document.getElementById(id).hidden = false;
  };
  if (!new URLSearchParams(location.search).get('_ptxn')) { show('pay-none'); return; }
  show('pay-wait');
  var tag = document.createElement('script');
  tag.src = s.script;
  tag.onerror = function () { show('pay-failed'); };
  tag.onload = function () {
    if (s.environment === 'sandbox') Paddle.Environment.set('sandbox');
    Paddle.Initialize({
      token: s.token,
      checkout: { settings: { successUrl: s.successUrl } },
      eventCallback: function (e) {
        if (e && (e.name === 'checkout.closed' || e.name === 'checkout.error')) show('pay-closed');
      },
    });
  };
  document.head.appendChild(tag);
})(${JSON.stringify({
		...settings,
		script: PADDLE_SCRIPT_URL
	})});`;
	const csp = payPageCsp(boot === null ? null : createHash("sha256").update(boot).digest("base64"));
	return renderTemplate`<html lang="en" data-astro-cid-uerroqwx><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy"${addAttribute(csp, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><meta name="referrer" content="origin"><title>Payment — Ignitify</title><link rel="icon" href="data:,">${renderHead($$result)}</head><body data-astro-cid-uerroqwx><main data-astro-cid-uerroqwx><h1 data-astro-cid-uerroqwx>Payment</h1>${settings === null ? renderTemplate`<p data-astro-cid-uerroqwx>Checkout is not available here. To buy a plan, <a href="/contact" data-astro-cid-uerroqwx>contact us</a>.</p>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<p id="pay-wait" role="status" hidden data-astro-cid-uerroqwx>Opening the secure checkout…</p><p id="pay-none" role="status" hidden data-astro-cid-uerroqwx>There is no payment to open. Choose a plan on the <a href="/pricing" data-astro-cid-uerroqwx>pricing page</a>.</p><p id="pay-failed" role="status" hidden data-astro-cid-uerroqwx>The checkout could not load. Check your connection and reload this page, or <a${addAttribute(CHECKOUT_BACK_URL, "href")} data-astro-cid-uerroqwx>go back to your account</a>.</p><p id="pay-closed" role="status" hidden data-astro-cid-uerroqwx>The checkout is closed. Nothing was paid unless you finished it. <a${addAttribute(CHECKOUT_BACK_URL, "href")} data-astro-cid-uerroqwx>Go back to your account</a>.</p><noscript><p data-astro-cid-uerroqwx>The checkout needs JavaScript.</p></noscript><p data-astro-cid-uerroqwx><small data-astro-cid-uerroqwx>Paddle.com is the seller of this order (Merchant of Record). By paying, you accept our <a href="/terms" data-astro-cid-uerroqwx>Terms of Service</a> and <a href="/refunds" data-astro-cid-uerroqwx>Refund Policy</a>.</small></p><script>${unescapeHTML(boot)}<\/script>` })}`}</main></body></html>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/pay.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/pay.astro";
var $$url = "/pay";
//#endregion
//#region \0virtual:astro:page:src/pages/pay@_@astro
var page = () => pay_exports;
//#endregion
export { page };
