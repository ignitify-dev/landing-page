import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, H as createRenderInstruction, R as maybeRenderHead, V as defineScriptVars, Z as createAstro, o as renderComponent, p as renderTemplate, s as Fragment, t as spreadAttributes, u as renderSlot, z as renderHead } from "./server_D7BsF4R_.mjs";
import { i as SIGNED_IN_HINT_PAIR, o as SITE_MODE, r as PROFILE_URL } from "./account-origin_B3Hw8Ff7.mjs";
//#region node_modules/.pnpm/astro@7.2.0_@emnapi+core@1.11.1_@emnapi+runtime@1.11.3_yaml@2.9.1/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/lib/launch.ts
var PUBLISHED = "production" === SITE_MODE.PRODUCTION;
var SIGN_IN_OPEN = !PUBLISHED;
var PRICES_SHOWN = !PUBLISHED;
//#endregion
//#region src/components/AccountLink.astro
createAstro("https://ignitify.dev");
var $$AccountLink = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AccountLink;
	const { class: cls, current = false } = Astro.props;
	return renderTemplate`${SIGN_IN_OPEN ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`${cls} if-signed-out`, "class")} href="/signin"${addAttribute(current ? "page" : void 0, "aria-current")}><svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="5.6" r="2.7"></circle><path d="M2.6 14c.5-2.6 2.7-4.1 5.4-4.1s4.9 1.5 5.4 4.1"></path></svg><span>Sign in</span></a><a${addAttribute(`${cls} if-signed-in`, "class")}${addAttribute(PROFILE_URL, "href")} aria-label="Profile: your account"><svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="5.6" r="2.7"></circle><path d="M2.6 14c.5-2.6 2.7-4.1 5.4-4.1s4.9 1.5 5.4 4.1"></path></svg><span>Profile</span></a>` })}` : renderTemplate`<a${addAttribute(`${cls} is-disabled`, "class")} role="link" aria-disabled="true" title="Sign-in opens soon"><svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true"><circle cx="8" cy="5.6" r="2.7"></circle><path d="M2.6 14c.5-2.6 2.7-4.1 5.4-4.1s4.9 1.5 5.4 4.1"></path></svg><span>Sign in</span></a>`}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/AccountLink.astro", void 0);
//#endregion
//#region src/layouts/Base.astro
createAstro("https://ignitify.dev");
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { title, description, page, noindex = false } = Astro.props;
	const canonical = new URL(Astro.url.pathname, "https://ignitify.dev");
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" href="data:,">${noindex && renderTemplate`<meta name="robots" content="noindex">`}<meta property="og:type" content="website"><meta property="og:site_name" content="Ignitify"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta name="twitter:card" content="summary"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><script>
    (function () {
      try {
        var t = localStorage.getItem('ig-theme');
        if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
      } catch (e) { /* private mode — fall back to prefers-color-scheme */ }
      // The \`js\` class is what gates every scroll reveal. Without it the
      // .reveal rules never match, so a JS-off visitor gets the full page at
      // full opacity rather than a blank column — a reveal that can strand
      // content invisible is a content bug wearing an animation's clothes.
      // Set here, before first paint, so revealed sections never flash in.
      document.documentElement.classList.add('js');
    })();
  <\/script><script>(function(){${defineScriptVars({ hint: SIGNED_IN_HINT_PAIR })}
    try {
      if (document.cookie.split('; ').indexOf(hint) !== -1) document.documentElement.setAttribute('data-signed-in', '');
    } catch (e) { /* cookies blocked: the page shows "Sign in" */ }
  })();<\/script>${renderHead($$result)}</head><body><a class="skip" href="#main">Skip to content</a><header class="hdr" id="hdr" data-scrolled="false"><div class="hdr-in"><a class="mark" href="/"><span class="spark" aria-hidden="true"></span><span class="wordmark">Ignitify<span>.dev</span></span></a><nav class="nav" id="sitenav" data-open="false">${[
		{
			href: "/docs",
			page: "docs",
			label: "Docs"
		},
		{
			href: "/platform",
			page: "platform",
			label: "Platform"
		},
		{
			href: "/pricing",
			page: "pricing",
			label: "Pricing"
		},
		{
			href: "/tutorials",
			page: "tutorials",
			label: "Tutorials"
		},
		{
			href: "/integrations",
			page: "integrations",
			label: "Integrations"
		},
		{
			href: "/integrations/catalog",
			page: "catalog",
			label: "Catalog"
		},
		{
			href: "https://github.com/ignitify-dev/ignitify-tenant-harness",
			page: "ai-harness",
			label: "AI harness ↗",
			external: true
		}
	].map((n) => renderTemplate`<a${addAttribute(n.href, "href")}${addAttribute(page === n.page ? "page" : void 0, "aria-current")}${spreadAttributes(n.external ? {
		target: "_blank",
		rel: "noopener"
	} : {})}>${n.label}</a>`)}<a class="nav-m" href="/docs/install">Get started</a>${renderComponent($$result, "AccountLink", $$AccountLink, {
		"class": "nav-m",
		"current": page === "signin"
	})}</nav><span class="sp"></span><div class="hdr-cta"><button class="themetog" type="button" id="bt" aria-label="Switch between light and dark theme"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="8" cy="8" r="3.4"></circle><path d="M8 .8v2M8 13.2v2M.8 8h2M13.2 8h2M2.9 2.9l1.4 1.4M11.7 11.7l1.4 1.4M13.1 2.9l-1.4 1.4M4.3 11.7l-1.4 1.4"></path></svg></button>${renderComponent($$result, "AccountLink", $$AccountLink, {
		"class": "btn ghost hdr-signin",
		"current": page === "signin"
	})}<a class="btn solid live" href="/docs/install">Get started</a><button class="burger" type="button" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="sitenav"><span></span><span></span><span></span></button></div></div></header><div id="main" tabindex="-1">${renderSlot($$result, $$slots["default"])}</div>${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/layouts/Base.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/layouts/Base.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="ft"><div class="ft-in"><div class="ft-cols"><div class="ft-col"><div class="mark" style="margin-bottom:4px"><span class="spark" aria-hidden="true"></span><span class="wordmark">Ignitify<span>.dev</span></span></div><p class="tiny" style="color:var(--graphite);max-width:26ch">Untrusted code, one Firecracker MicroVM per job.</p></div><div class="ft-col"><h4>Product</h4><a href="/docs">Docs</a><a href="/platform">Platform</a><a href="/pricing">Pricing</a><a href="/tutorials">Tutorials</a><a href="/integrations">Integrations</a></div><div class="ft-col"><h4>Company</h4><a href="/about">About</a><a href="/contact">Contact</a></div><div class="ft-col"><h4>Legal</h4><a href="/terms">Terms</a><a href="/privacy">Privacy</a><a href="/dpa">DPA</a><a href="/refunds">Refunds</a></div></div></div><div class="ft-bot"><span class="tiny">© 2026 Ignitify</span></div></footer>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/Footer.astro", void 0);
//#endregion
export { SIGN_IN_OPEN as a, PRICES_SHOWN as i, $$Base as n, renderScript as o, $$AccountLink as r, $$Footer as t };
