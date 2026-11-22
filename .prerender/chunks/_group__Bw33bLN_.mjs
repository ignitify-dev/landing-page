import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import { t as $$DocsLayout } from "./DocsLayout_vM0j6Y3p.mjs";
import { n as getEntry, t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { i as commandBadges, o as splitInlineCode, r as commandAnchor } from "./docs-components_D6y5gSKR.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Callout } from "./Callout_CbSyIQwi.mjs";
import { n as $$Related, t as $$InlineText } from "./InlineText_BXIy3H0K.mjs";
import { n as $$ExampleTabs, t as $$Steps } from "./Steps_xwowod3e.mjs";
import { a as findCommand, d as relatedItems, f as samplesOf, i as fillDeep, l as groupSlug, n as CLI_GLOBAL, o as flagRows, r as commandMeta, s as groupEntryId, t as CATALOG } from "./cli-render_CIGfQxoe.mjs";
import { t as $$CliSample } from "./CliSample_DQmn3xCz.mjs";
//#region src/components/docs/CommandHeader.astro
createAstro("https://ignitify.dev");
var $$CommandHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CommandHeader;
	const { name, purpose, level = 2, ...meta } = Astro.props;
	const words = purpose.trim().split(/\s+/).length;
	if (words > 15) throw new Error(`[CommandHeader ${name}] purpose has ${words} words; the limit is 15`);
	const id = commandAnchor(name);
	const badges = commandBadges(meta);
	const Heading = `h${level}`;
	return renderTemplate`${maybeRenderHead($$result)}<header class="dch">${renderComponent($$result, "Heading", Heading, {
		"class": "dch-name",
		"id": id
	}, { "default": ($$result) => renderTemplate`<a${addAttribute(`#${id}`, "href")}>${name}</a>` })}<p class="dch-purpose">${purpose}</p><ul class="dbadges"${addAttribute(`${name} properties`, "aria-label")}>${badges.map((b) => renderTemplate`<li${addAttribute(`dbadge dbadge-${b.tone}`, "class")}>${b.text}</li>`)}</ul></header>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/CommandHeader.astro", void 0);
//#endregion
//#region src/components/docs/SampleList.astro
createAstro("https://ignitify.dev");
var $$SampleList = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SampleList;
	const { samples } = Astro.props;
	const [first, ...rest] = samples;
	return renderTemplate`${first && renderTemplate`${renderComponent($$result, "CliSample", $$CliSample, { "sample": first })}`}${rest.length > 0 && renderTemplate`${maybeRenderHead($$result)}<details class="dmore"><summary>More examples (${rest.length})</summary>${rest.map((s) => renderTemplate`${renderComponent($$result, "CliSample", $$CliSample, { "sample": s })}`)}</details>`}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/SampleList.astro", void 0);
//#endregion
//#region src/components/docs/FlagTable.astro
createAstro("https://ignitify.dev");
var $$FlagTable = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FlagTable;
	const { rows } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="dflags"><table><thead><tr><th scope="col">Flag</th><th scope="col">Value</th><th scope="col">Default</th><th scope="col">Description</th></tr></thead><tbody>${rows.map((r) => renderTemplate`<tr><td data-label="Flag"><code class="df-flag">${r.flag}</code>${r.required && renderTemplate`<span class="df-req">required</span>`}</td><td data-label="Value"${addAttribute(r.value ? void 0 : "", "data-empty")}>${r.value ? renderTemplate`<code>${r.value}</code>` : renderTemplate`<span class="df-none">—</span>`}</td><td data-label="Default"${addAttribute(r.default ? void 0 : "", "data-empty")}>${r.default ? renderTemplate`<code>${r.default}</code>` : renderTemplate`<span class="df-none">—</span>`}</td><td data-label="Description">${splitInlineCode(r.description).map((p) => p.code ? renderTemplate`<code>${p.text}</code>` : p.text)}</td></tr>`)}</tbody></table></div>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/FlagTable.astro", void 0);
//#endregion
//#region src/components/docs/CommandSection.astro
createAstro("https://ignitify.dev");
var $$CommandSection = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CommandSection;
	const { fact, doc: rawDoc } = Astro.props;
	const doc = fillDeep(rawDoc, fact.name);
	const rows = flagRows(fact, doc);
	const outputs = samplesOf(doc, "output");
	const jsons = samplesOf(doc, "json");
	const errors = samplesOf(doc, "error");
	const id = commandAnchor(fact.name);
	return renderTemplate`${maybeRenderHead($$result)}<section class="dcmd"${addAttribute(fact.name, "aria-label")}>${renderComponent($$result, "CommandHeader", $$CommandHeader, {
		"name": fact.name,
		"purpose": doc.purpose,
		...commandMeta(fact)
	})}<div class="dcmd-syn">${fact.synopsis.map((line, i) => renderTemplate`${renderComponent($$result, "Terminal", $$Terminal, {
		"command": line,
		"label": i === 0 ? "synopsis" : "or"
	})}`)}</div>${doc.samples.length > 0 && renderTemplate`${renderComponent($$result, "ExampleTabs", $$ExampleTabs, { "id": id }, {
		"output": ($$result) => renderTemplate`${outputs.length > 0 && renderTemplate`<div>${renderComponent($$result, "SampleList", $$SampleList, { "samples": outputs })}</div>`}`,
		"json": ($$result) => renderTemplate`${jsons.length > 0 && renderTemplate`<div>${renderComponent($$result, "SampleList", $$SampleList, { "samples": jsons })}</div>`}`,
		"error": ($$result) => renderTemplate`${errors.length > 0 && renderTemplate`<div>${renderComponent($$result, "SampleList", $$SampleList, { "samples": errors })}</div>`}`
	})}`}${rows.length > 0 && renderTemplate`${renderComponent($$result, "FlagTable", $$FlagTable, { "rows": rows })}`}${doc.steps.length > 0 && renderTemplate`<div class="dcmd-steps"><p class="dcmd-k">What happens</p>${renderComponent($$result, "Steps", $$Steps, { "items": doc.steps })}</div>`}${doc.notes.map((n) => renderTemplate`${renderComponent($$result, "Callout", $$Callout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "InlineText", $$InlineText, { "text": n })}` })}`)}${doc.related.length > 0 && renderTemplate`${renderComponent($$result, "Related", $$Related, { "items": relatedItems(doc.related) })}`}</section>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/CommandSection.astro", void 0);
//#endregion
//#region src/pages/docs/cli/[group].astro
var _group__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Group,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://ignitify.dev");
function getStaticPaths() {
	return CATALOG.groups.map((g) => ({
		params: { group: groupSlug(g.id) },
		props: { groupId: g.id }
	}));
}
var $$Group = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Group;
	const { groupId } = Astro.props;
	const group = CATALOG.groups.find((g) => g.id === groupId);
	const entry = await getEntry("docs", groupEntryId(groupId));
	const docs = new Map((await getCollection("cli")).map((e) => [e.data.command, e.data]));
	const commands = group.commands.map((name) => {
		const doc = docs.get(name);
		if (!doc) throw new Error(`[cli-docs] no yaml for ${name}`);
		return {
			fact: findCommand(name),
			doc
		};
	});
	const toc = group.commands.map((name) => ({
		id: commandAnchor(name),
		text: name,
		level: 2
	}));
	const lede = CLI_GLOBAL.groups[groupId];
	return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, {
		"id": groupEntryId(groupId),
		"title": entry.data.title,
		"description": entry.data.description,
		"group": entry.data.group,
		"toc": toc
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h1>${entry.data.title}</h1>${lede && renderTemplate`<p class="def">${lede}</p>`}${commands.map((c) => renderTemplate`${renderComponent($$result, "CommandSection", $$CommandSection, {
		"fact": c.fact,
		"doc": c.doc
	})}`)}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/cli/[group].astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/cli/[group].astro";
var $$url = "/docs/cli/[group]";
//#endregion
//#region \0virtual:astro:page:src/pages/docs/cli/[group]@_@astro
var page = () => _group__exports;
//#endregion
export { page };
