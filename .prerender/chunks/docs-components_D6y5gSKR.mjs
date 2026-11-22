//#region src/lib/docs-components.ts
var isSpace = (c) => c === " " || c === "	";
/**
* Split one command line into tokens for highlighting (plan §4.4):
* `ignitify` bin · `task:run` command · `--payload` flag · quoted text string · `<id>` placeholder
* · everything else argument · `[ ] |` punctuation (synopsis).
*/
function tokenizeCommand(line) {
	const out = [];
	let i = 0;
	let words = 0;
	while (i < line.length) {
		const c = line[i];
		if (isSpace(c)) {
			let j = i;
			while (j < line.length && isSpace(line[j])) j++;
			out.push({
				kind: "space",
				text: line.slice(i, j)
			});
			i = j;
		} else if (c === "[" || c === "]" || c === "|") {
			out.push({
				kind: "punct",
				text: c
			});
			i++;
		} else if (c === "'" || c === "\"") {
			let j = i + 1;
			while (j < line.length && line[j] !== c) j++;
			out.push({
				kind: "str",
				text: line.slice(i, Math.min(j + 1, line.length))
			});
			i = j + 1;
		} else if (c === "<") {
			const j = line.indexOf(">", i);
			const end = j === -1 ? line.length : j + 1;
			out.push({
				kind: "ph",
				text: line.slice(i, end)
			});
			i = end;
		} else {
			let j = i;
			while (j < line.length && !isSpace(line[j]) && !"[]|'\"<".includes(line[j])) j++;
			const word = line.slice(i, j);
			if (word.startsWith("-")) {
				const eq = word.indexOf("=");
				if (eq === -1) out.push({
					kind: "flag",
					text: word
				});
				else {
					out.push({
						kind: "flag",
						text: word.slice(0, eq)
					});
					out.push({
						kind: "punct",
						text: "="
					});
					out.push({
						kind: "arg",
						text: word.slice(eq + 1)
					});
				}
			} else {
				out.push({
					kind: words === 0 ? "bin" : words === 1 ? "cmd" : "arg",
					text: word
				});
				words++;
			}
			i = j;
		}
	}
	return out;
}
/**
* Classify captured output text into tinted lines (plan §4.4):
* `✓` ok · `✗` / `Error:` err · `Note:` / `⚠` warn · `… ` or `· ` progress dim ·
* `key  value` rows (two or more spaces) with a dim key · anything else plain.
*/
function parseTerminalText(raw) {
	return raw.replace(/\n$/, "").split("\n").map((text) => {
		if (text.startsWith("✓")) return {
			kind: "ok",
			text
		};
		if (text.startsWith("✗") || text.startsWith("Error:")) return {
			kind: "err",
			text
		};
		if (text.startsWith("Note:") || text.startsWith("Warning:") || text.startsWith("⚠")) return {
			kind: "warn",
			text
		};
		if (text.startsWith("… ") || text.startsWith("· ")) return {
			kind: "dim",
			text
		};
		const kv = /^([a-z][a-z0-9_]*)(\s{2,})(\S.*)$/.exec(text);
		if (kv) return {
			kind: "kv",
			key: kv[1],
			gap: kv[2],
			value: kv[3]
		};
		return {
			kind: "plain",
			text
		};
	});
}
/** The three tabs. A tab is shown only if its slot has content. */
var EXAMPLE_TABS = [
	"output",
	"json",
	"error"
];
var EXAMPLE_TAB_LABEL = {
	output: "Output",
	json: "JSON",
	error: "Error"
};
/** `task:run` -> `task-run`, the URL anchor of a command (`/docs/cli/tasks#task-run`). */
var commandAnchor = (name) => name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
var AUTH_BADGE = {
	key: "needs API key",
	offline: "no API key",
	optional: "API key optional"
};
/** The badges of one command, in a fixed order. Text always says the fact; colour only adds. */
function commandBadges(m) {
	const badges = [{
		text: m.authNote ? `${AUTH_BADGE[m.auth]} · ${m.authNote}` : AUTH_BADGE[m.auth],
		tone: "neutral"
	}];
	if (m.confirms) badges.push({
		text: "asks to confirm",
		tone: "neutral"
	});
	if (m.deletes) badges.push({
		text: "deletes data",
		tone: "danger"
	});
	if (m.waits) badges.push({
		text: "waits",
		tone: "neutral"
	});
	badges.push({
		text: `--json: ${m.json}`,
		tone: "neutral"
	});
	return badges;
}
/** Split text on `backticks` into plain and code parts, for templates that render `<code>`. */
function splitInlineCode(text) {
	return text.split("`").map((t, i) => ({
		code: i % 2 === 1,
		text: t
	})).filter((p) => p.text.length > 0);
}
//#endregion
export { parseTerminalText as a, commandBadges as i, EXAMPLE_TAB_LABEL as n, splitInlineCode as o, commandAnchor as r, tokenizeCommand as s, EXAMPLE_TABS as t };
