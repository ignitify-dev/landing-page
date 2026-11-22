import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { t as $$DocsLayout } from "./DocsLayout_vM0j6Y3p.mjs";
import { o as renderScript } from "./Footer_CI9oCuuP.mjs";
import { n as getEntry, t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { i as commandBadges } from "./docs-components_D6y5gSKR.mjs";
import { t as CATALOG, u as indexRow } from "./cli-render_CIGfQxoe.mjs";
//#region src/components/docs/CommandIndex.astro
createAstro("https://ignitify.dev");
var $$CommandIndex = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CommandIndex;
	const { rows } = Astro.props;
	const groups = [...new Set(rows.map((r) => r.group))];
	return renderTemplate`${maybeRenderHead($$result)}<div class="dci" data-ci><div class="dci-tools"><label class="dci-find"><span class="dci-sr">Filter commands</span><input type="search" placeholder="Filter commands, e.g. deploy or secret" autocomplete="off" data-ci-q></label><div class="dci-chips" role="group" aria-label="Filter by group"><button type="button" class="dci-chip" data-g="" aria-pressed="true">All</button>${groups.map((g) => renderTemplate`<button type="button" class="dci-chip"${addAttribute(g, "data-g")} aria-pressed="false">${g}</button>`)}</div></div><p class="dci-count" role="status" aria-live="polite" data-ci-count>${rows.length} commands</p><ul class="dci-list">${rows.map((r) => renderTemplate`<li class="dci-row"${addAttribute(r.group, "data-g")}${addAttribute(`${r.name} ${r.group} ${r.purpose}`.toLowerCase(), "data-q")}><a class="dci-name"${addAttribute(r.href, "href")}><code>${r.name}</code></a><span class="dci-purpose">${r.purpose}</span><ul class="dbadges">${commandBadges(r).map((b) => renderTemplate`<li${addAttribute(`dbadge dbadge-${b.tone}`, "class")}>${b.text}</li>`)}</ul></li>`)}</ul><p class="dci-empty" hidden data-ci-empty>No command matches. Clear the filter to see all.</p></div>${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/CommandIndex.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/CommandIndex.astro", void 0);
//#endregion
//#region src/pages/docs/cli/all.astro
var all_exports = /* @__PURE__ */ __exportAll({
	default: () => $$All,
	file: () => $$file,
	url: () => $$url
});
var $$All = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("docs", "cli/all-commands");
	const docs = new Map((await getCollection("cli")).map((e) => [e.data.command, e.data]));
	const rows = CATALOG.commands.map((c) => {
		const doc = docs.get(c.name);
		if (!doc) throw new Error(`[cli-docs] no yaml for ${c.name}`);
		return indexRow(c, doc);
	});
	return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, {
		"id": "cli/all-commands",
		"title": entry.data.title,
		"description": entry.data.description,
		"group": entry.data.group,
		"toc": []
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>${entry.data.title}</h1><p class="def">${entry.data.description}</p>${renderComponent($$result, "CommandIndex", $$CommandIndex, { "rows": rows })}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/cli/all.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/cli/all.astro";
var $$url = "/docs/cli/all";
//#endregion
//#region \0virtual:astro:page:src/pages/docs/cli/all@_@astro
var page = () => all_exports;
//#endregion
export { page };
