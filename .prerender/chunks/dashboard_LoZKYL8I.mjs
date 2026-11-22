import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { a as SIGN_IN_OPEN, n as $$Base, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import { r as PROFILE_URL, t as ACCOUNT_HOST } from "./account-origin_B3Hw8Ff7.mjs";
/* empty css                  */
//#region src/pages/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	url: () => $$url
});
var $$Dashboard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "dashboard",
		"noindex": true,
		"title": "Dashboard — Ignitify",
		"description": `Your account page is on ${ACCOUNT_HOST}.`
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="si"><div class="si-shell"><section class="si-card" aria-labelledby="da-h"><span class="eyebrow">Account</span><h1 id="da-h">Your account page</h1><p class="si-lead">See your workspace and plan, and manage your keys. It is on ${ACCOUNT_HOST}.</p><a${addAttribute(SIGN_IN_OPEN ? "gbtn" : "gbtn is-disabled", "class")}${addAttribute(SIGN_IN_OPEN ? PROFILE_URL : void 0, "href")}${addAttribute(SIGN_IN_OPEN ? void 0 : "link", "role")}${addAttribute(SIGN_IN_OPEN ? void 0 : "true", "aria-disabled")}><svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"></path><path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z"></path><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"></path></svg><span>Continue with Google</span></a>${SIGN_IN_OPEN ? renderTemplate`<p class="si-note">If you are signed out, you sign in first. You go to ${ACCOUNT_HOST}.</p>` : renderTemplate`<p class="si-note"><strong>Sign-in is not open yet.</strong> It opens soon.</p>`}<p class="si-trust">We use Google only to sign you in. See <a href="/privacy">Privacy</a>.</p></section><section class="si-next" aria-labelledby="da-n"><h2 id="da-n">On your account page</h2><ol class="si-steps si-plain"><li><span class="si-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4" width="17" height="16" rx="3"></rect><path d="M3.5 9.5h17M8.5 14.5h4"></path></svg></span><div><h3>Workspace and plan</h3><p>Your plan and its limits.</p></div></li><li><span class="si-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="3.6"></circle><path d="m10.6 12.4 8.4-8.4M16 7l2.5 2.5"></path></svg></span><div><h3>Your keys</h3><p>When each key was last used and when it expires. You can revoke a key. A key is never shown.</p></div></li><li><span class="si-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="3"></rect><path d="m7.5 10 3 2.5-3 2.5M13 15h3.5"></path></svg></span><div><h3>New here?</h3><p><a href="/signin">Read how sign-in works</a> or <a href="/docs/install">install the CLI</a>.</p></div></li></ol></section></div></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/dashboard.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/dashboard.astro";
var $$url = "/dashboard";
//#endregion
//#region \0virtual:astro:page:src/pages/dashboard@_@astro
var page = () => dashboard_exports;
//#endregion
export { page };
