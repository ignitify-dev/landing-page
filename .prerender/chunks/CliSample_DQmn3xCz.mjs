import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
//#region src/components/docs/CliSample.astro
createAstro("https://ignitify.dev");
var $$CliSample = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CliSample;
	const { sample } = Astro.props;
	const label = sample.label ?? (sample.kind === "error" ? "error" : "terminal");
	return renderTemplate`${sample.kind === "json" ? renderTemplate`${maybeRenderHead($$result)}<div class="dsample-json">${renderComponent($$result, "Terminal", $$Terminal, {
		"command": sample.command,
		"label": label
	})}${renderComponent($$result, "Code", $$Code, {
		"code": sample.text,
		"lang": "json",
		"label": "--json"
	})}</div>` : renderTemplate`${renderComponent($$result, "Terminal", $$Terminal, {
		"command": sample.command,
		"output": sample.text,
		"label": label
	})}`}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/CliSample.astro", void 0);
//#endregion
export { $$CliSample as t };
