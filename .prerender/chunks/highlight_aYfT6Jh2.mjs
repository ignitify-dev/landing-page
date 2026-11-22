import { createHighlighter } from "shiki";
//#region src/lib/highlight.ts
/**
* THEMES: VS Code's own light-plus / dark-plus.
*
* ⛔ CHOSEN BY MEASUREMENT, not taste. Two properties were required and only
*    these two candidates had both:
*
*    1. EVERY token clears 4.5:1 on the ground the code panels actually sit on
*       — `--plate`, i.e. #FFFFFF light and #1C1C1F dark. A bundled theme is
*       tuned for ITS OWN editor background, so this has to be re-measured
*       rather than assumed: `vitesse` bottoms out at 2.85/2.96 and `one-light`
*       at 3.21 on these grounds. Worst here is 4.60 light, 5.10 dark.
*    2. OBJECT KEYS ARE COLOURED DISTINCTLY (#001080 / #9CDCFE). github-light
*       renders a TypeScript property name in plain body colour, so
*       `config.ts` — which is one big object literal — read as an undifferen-
*       tiated wall. This is the "make it look like JSON" quality, obtained
*       without claiming the file IS json.
*
*    ⌛ This replaced github-light/github-dark plus a hand-patched comment
*    colour: dark-plus's comment measures 5.10:1 here unmodified, so the
*    override is gone rather than carried.
*/
var highlighter = await createHighlighter({
	themes: ["light-plus", "dark-plus"],
	langs: [...[
		"ts",
		"yaml",
		"json",
		"bash",
		"md",
		"python",
		"go",
		"hcl"
	]]
});
/**
* Highlight one snippet to HTML.
*
* Returns the inner markup only — the caller supplies the <pre>, because the
* page's own `.src` / `.term` classes carry the layout (the `min-width:0` on
* `.src` is load-bearing: without it a white-space:pre block reports its full
* intrinsic width to a grid parent and the page scrolls sideways at 390px).
*/
function highlight(code, lang) {
	const m = highlighter.codeToHtml(code.replace(/\n$/, ""), {
		lang,
		themes: {
			light: "light-plus",
			dark: "dark-plus"
		},
		defaultColor: false
	}).match(/<code[^>]*>([\s\S]*)<\/code>/);
	if (!m) throw new Error("[highlight] unexpected Shiki output shape");
	return m[1];
}
//#endregion
export { highlight as t };
