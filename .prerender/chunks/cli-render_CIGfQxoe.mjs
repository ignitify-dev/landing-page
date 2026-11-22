import { a as fillCliTokens, n as cliCatalogSchema, o as cli_catalog_default, r as parseCliGlobal } from "./DocsLayout_vM0j6Y3p.mjs";
import { r as commandAnchor } from "./docs-components_D6y5gSKR.mjs";
import { parse } from "yaml";
//#region src/content/cli/global.yaml?raw
var global_default = "title: CLI overview\nlede: What every command shares - the API key, flags, output, exit codes, confirmations and waits.\ngroups:\n  tasks: Create, check, deploy and run a task from your own folder.\n  integrations: Add an integration package to a Node task and write its settings into task.yaml.\n  deployments: See and delete the builds of your tasks.\n  runs: Read, stop and delete runs.\n  vms: See the VMs that run your tasks, and delete them.\n  secrets: Store secret values by name, which can never be read back.\n  schedules: See and cancel runs that wait for a time.\n  webhooks: Create webhooks that start runs, and set a callback URL for a deployment.\n  access: Give people and programs their own keys, with only the permissions they need.\n  account: Sign in and out, see your identity, limits and usage, the version and help.\nsections:\n  - id: auth\n    title: Sign in with an API key\n    paragraphs:\n      - Every command that talks to the platform needs your tenant API key. Run `ignitify login` once on each machine, or set the `IGNITIFY_API_KEY` environment variable, which wins.\n      - Never put the key in task.yaml. The CLI sends it as a bearer token with each request.\n      - Each command page shows a badge. It says if the command needs the key. A command with the badge \"no API key\" runs without a key, but it can still use the network.\n    samples:\n      - kind: error\n        label: No key set\n        command: ignitify task:list\n        text: |\n          Error: Not signed in. Run 'ignitify login', or set the IGNITIFY_API_KEY environment variable.\n  - id: environment\n    title: Environment variables\n    rows:\n      - name: \"{{cli.env.key}}\"\n        text: Your tenant API key.\n      - name: \"{{cli.env.dir}}\"\n        text: \"Folder that holds your task folders. Default: `{{cli.dir.default}}`, from where you run the command.\"\n    paragraphs:\n      - The `--dir` flag wins over the variable. The variable wins over the default.\n  - id: global-flags\n    title: Global flags\n    paragraphs:\n      - These flags work on every command.\n    rows:\n      - name: \"--json\"\n        text: Print one JSON document on stdout. Messages go to stderr.\n      - name: \"--help\"\n        text: Print the usage of the command and stop.\n    samples:\n      - kind: error\n        label: Misspelled flag\n        command: ignitify task:list --limt 5\n        bad_flag: true\n        text: |\n          Error: unknown flag --limt for task:list. Did you mean --limit?\n  - id: short-flags\n    title: Short flags\n    paragraphs:\n      - There are three short flags. No other short flag exists.\n      - A flag or an argument that a command does not take is an error, not ignored.\n    rows:\n      - name: \"-h\"\n        text: The same as `--help`. Works anywhere.\n      - name: \"-y\"\n        text: The same as `--yes`. Works anywhere, on commands that have `--yes`.\n      - name: \"-v\"\n        text: The same as `--version`. Works only as the first word.\n  - id: output\n    title: Output\n    paragraphs:\n      - A command prints its result on stdout. Progress lines, notes, warnings and questions go to stderr.\n      - Colour is used only when the output is a terminal. A progress line is drawn only on a terminal, and a pipe gets one line per phase.\n  - id: json\n    title: The --json rule\n    paragraphs:\n      - With `--json`, a command that succeeds prints exactly one JSON document on stdout, and nothing else. The keys are snake_case.\n      - A command with nothing to report prints a short document about its outcome, for example the schedule id and `cancelled`.\n      - A command that fails prints nothing on stdout. Read the error on stderr.\n      - \"One exception: `task:run --wait` prints the finished run even when it did not complete, because that run is the result.\"\n    samples:\n      - kind: json\n        command: ignitify task:validate image-resize --json\n        text: |\n          {\n            \"task_id\": \"image-resize\",\n            \"valid\": true\n          }\n  - id: errors\n    title: Errors and the trace id\n    paragraphs:\n      - An error prints on stderr as `Error:` and a message.\n      - After an error from the server, the CLI also prints `server trace id:` and an id. Give this id to support.\n      - A refusal from the server prints its sentence and its code in brackets, like `secret not found [secret-not-found]`. The code is stable; the sentence can change. With `--json` the CLI prints `API`, the status and the raw body instead.\n    samples:\n      - kind: error\n        command: ignitify hook:create nightly-report\n        captured: false\n        text: |\n          Error: webhooks are not included in your current tier (capability 'may_use_webhooks'; task nightly-report) [capability-denied]\n          server trace id: 5d1e8c0a-4b7f-4f6e-9a21-3c0d7e5b8f12\n  - id: exit-codes\n    title: Exit codes\n    rows:\n      - name: \"0\"\n        text: The command did what you asked.\n      - name: \"1\"\n        text: \"It did not: an error, a refusal, bad input, a declined question, or a run that did not complete under `--wait`.\"\n      - name: \"{{cli.exit.interrupt}}\"\n        text: You pressed Ctrl+C while the CLI waited. Nothing was cancelled on the server.\n    paragraphs:\n      - A command page lists an exit code only when it differs from this table.\n  - id: confirmations\n    title: Confirmations\n    paragraphs:\n      - Delete and cancel commands ask `Proceed? [y/N]` before they act. Only `--yes` skips the question.\n      - \"`--force` is different. It unlocks a refusal, for example a pinned VM, and the command still asks.\"\n      - With no terminal and no `--yes`, the command refuses and exits 1.\n    samples:\n      - kind: error\n        command: ignitify run:delete run_H8kQ2mNxT4pL\n        captured: false\n        text: |\n          Will soft-delete run run_H8kQ2mNxT4pL.\n          Error: Refusing to proceed: not a TTY. Re-run with --yes to confirm non-interactively.\n          Aborted.\n  - id: pagination\n    title: Pagination\n    paragraphs:\n      - \"`task:list`, `deployment:list`, `run:list`, `hook:list` and `vm:list` return one page. `--limit` sets the page size, and the server sets the default and the largest value.\"\n      - For the next page, pass the id of the last row as `--after-id`. The `--after` flag is a time filter, not a cursor.\n      - \"`vm:list` is ordered by VM id: its cursor is the `vm_id` of the last row, and its `--after` filters on the boot time.\"\n      - A full page ends with a note on stderr that names the command for the next page.\n  - id: waits\n    title: Waits\n    paragraphs:\n      - \"`task:deploy` waits up to {{cli.deploy.wait}} for the build. `task:run --wait` waits up to {{cli.run.wait}} for the run.\"\n      - The CLI asks again with a growing pause, from {{cli.poll.deploy}} for a deploy and from {{cli.poll.run}} for a run.\n      - When the time is up, or when you press Ctrl+C, the CLI stops waiting. It cancels nothing on the server.\n      - A failed check is tried again. The CLI gives up after {{cli.wait.tries}} failures in a row that last at least {{cli.wait.grace}}.\n    samples:\n      - kind: error\n        label: Ctrl+C during a wait\n        command: ignitify task:run image-resize --wait\n        captured: false\n        text: |\n          Monthly egress: 0 B of 100.0 GB used (0%), 100.0 GB left\n          Monthly compute: 42 s used, no monthly limit\n          Since 2026-10-14T09:12:40.000Z · Resets 2026-11-14T09:12:40.000Z · details: ignitify quota\n\n          Stopped waiting. The run keeps going on the server — nothing was cancelled.\n          Check it with: ignitify run:get 019f3c27-9d63-7e48-a5b0-2f17c8d4e936\n  - id: timeouts\n    title: Timeouts and limits\n    rows:\n      - name: Request\n        text: \"{{cli.timeout.request}} for each call to the server.\"\n      - name: Upload\n        text: \"{{cli.timeout.upload}} for the upload of a deploy. The task folder may hold up to {{cli.upload.max}}.\"\n      - name: Package review\n        text: \"{{cli.timeout.review}} for `task:validate --review-packages`.\"\n      - name: Version check\n        text: \"{{cli.timeout.version}} for `ignitify --version`.\"\n      - name: Payload and result\n        text: \"A run takes at most {{cli.payload.limit}} of input and gives back at most {{cli.result.limit}}.\"\n    paragraphs:\n      - A write that times out may still complete on the server. The error says so; check before you repeat it.\n      - \"`run:get` shows the first {{cli.result.lines}} lines of a result, and a failed build shows the last {{cli.buildlog.lines}} lines of its log.\"\n  - id: version-check\n    title: Version check\n    paragraphs:\n      - Every server answer names the oldest client that the API supports. An older client prints one warning on stderr and keeps working.\n      - \"`ignitify --version` prints the client version and the API version.\"\n";
//#endregion
//#region src/lib/cli-render.ts
var CATALOG = cliCatalogSchema.parse(cli_catalog_default);
/** The Overview words, tokens filled. */
var CLI_GLOBAL = fillDeep(parseCliGlobal(global_default, parse), "global.yaml");
/** Where a group lives: `/docs/cli/<slug>`, and the docs entry (sidebar) that points at it. */
var GROUP_PAGE = {
	webhooks: {
		slug: "webhooks",
		entry: "cli/webhooks-and-notify"
	},
	account: {
		slug: "account-and-usage",
		entry: "cli/account-and-usage"
	}
};
var groupSlug = (groupId) => GROUP_PAGE[groupId]?.slug ?? groupId;
var groupEntryId = (groupId) => GROUP_PAGE[groupId]?.entry ?? `cli/${groupId}`;
var groupHref = (groupId) => `/docs/cli/${groupSlug(groupId)}`;
var findCommand = (name) => {
	const c = CATALOG.commands.find((x) => x.name === name);
	if (!c) throw new Error(`[cli-docs] no command "${name}" in the catalogue`);
	return c;
};
/** `/docs/cli/tasks#task-run` */
var commandHref = (name) => `${groupHref(findCommand(name).group)}#${commandAnchor(name)}`;
/** The badge facts of one command, straight from the catalogue. */
function commandMeta(c) {
	const auth = c.auth.key === "always" ? "key" : c.auth.key === "optional" ? "optional" : "offline";
	const flags = (names) => names.map((n) => `--${n}`).join(", ");
	return {
		auth,
		authNote: c.auth.offline_when?.length ? `no API key with ${flags(c.auth.offline_when)}` : c.auth.key_needed_when?.length ? `key needed with ${flags(c.auth.key_needed_when)}` : void 0,
		confirms: c.confirms,
		deletes: c.deletes,
		waits: c.waits !== null,
		json: c.json
	};
}
/** Replace the `{{cli.*}}` tokens in every string of a value (objects and arrays are copied). */
function fillDeep(value, where) {
	if (typeof value === "string") return fillCliTokens(value, where);
	if (Array.isArray(value)) return value.map((v) => fillDeep(v, where));
	if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fillDeep(v, where)]));
	return value;
}
/** Arguments first (as the synopsis orders them), then the flags. */
function flagRows(c, doc) {
	const describe = (map, key) => {
		const text = map[key];
		if (!text) throw new Error(`[cli-docs] ${c.name}: no description for "${key}"`);
		return text;
	};
	const args = c.args.map((a) => ({
		flag: `<${a.name}>`,
		description: describe(doc.args, a.name),
		required: a.required
	}));
	const flags = c.flags.map((f) => ({
		flag: f.short ? `--${f.name}, -${f.short}` : `--${f.name}`,
		value: f.kind === "value" ? f.value : void 0,
		default: f.default,
		description: describe(doc.flags, f.name),
		required: f.required
	}));
	return [...args, ...flags];
}
var samplesOf = (doc, kind) => doc.samples.filter((s) => s.kind === kind);
function relatedItems(names) {
	return names.map((n) => ({
		label: n,
		href: commandHref(n)
	}));
}
/** One row of the "All commands" table. */
function indexRow(c, doc) {
	const group = CATALOG.groups.find((g) => g.id === c.group);
	return {
		...commandMeta(c),
		name: c.name,
		group: group.title,
		purpose: doc.purpose,
		href: commandHref(c.name)
	};
}
//#endregion
export { findCommand as a, groupHref as c, relatedItems as d, samplesOf as f, fillDeep as i, groupSlug as l, CLI_GLOBAL as n, flagRows as o, commandMeta as r, groupEntryId as s, CATALOG as t, indexRow as u };
