import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, R as maybeRenderHead, Z as createAstro, p as renderTemplate } from "./server_D7BsF4R_.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { a as parseTerminalText, s as tokenizeCommand } from "./docs-components_D6y5gSKR.mjs";
//#region src/components/docs/Terminal.astro
createAstro("https://ignitify.dev");
var $$Terminal = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Terminal;
	const { command, output, label = "terminal" } = Astro.props;
	const tokens = tokenizeCommand(command);
	const lines = typeof output === "string" ? parseTerminalText(output) : output ?? [];
	return renderTemplate`${maybeRenderHead($$result)}<figure class="dblock dterm"><div class="dblock-bar"><span class="dblock-label">${label}</span><button type="button" class="dcopy"${addAttribute(command, "data-copy")}${addAttribute(`Copy command: ${command}`, "aria-label")}>Copy</button></div><pre class="dpre" tabindex="0"${addAttribute(`Terminal: ${command}`, "aria-label")}><span class="tl tl-cmd"><span class="pr">$ </span>${tokens.map((t) => t.kind === "space" ? t.text : renderTemplate`<span${addAttribute(`tk tk-${t.kind}`, "class")}>${t.text}</span>`)}</span>${lines.map((l) => l.kind === "kv" ? renderTemplate`<span class="tl"><span class="tl-key">${l.key}</span>${l.gap}${l.value}</span>` : renderTemplate`<span${addAttribute(`tl tl-${l.kind}`, "class")}>${l.text}</span>`)}</pre></figure>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/Terminal.astro", void 0);
//#endregion
export { $$Terminal as t };
