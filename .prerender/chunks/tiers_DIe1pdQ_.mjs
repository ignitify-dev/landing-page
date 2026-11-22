var enterprise_default = {
	name: "enterprise",
	lifecycle: "draft",
	max_tasks: null,
	max_deployments: null,
	max_running_vms: 24,
	max_units: 240,
	max_pinned_vms: 12,
	max_warm_vms: 20,
	max_secrets: null,
	max_webhooks: null,
	max_api_keys: null,
	max_schedules: 200,
	deployments_per_minute: 60,
	deployments_per_hour: 1e3,
	deployments_per_day: null,
	runs_per_minute: 1200,
	runs_per_hour: 5e4,
	runs_per_day: null,
	api_requests_per_sec: 500,
	api_requests_burst: 1e3,
	failure_max_attempts: 3,
	max_storage_mib: 32768,
	max_image_bytes: 268435456,
	max_total_image_bytes: 21474836480,
	max_timeout_sec: 43200,
	max_vm_lifetime_sec: 86400,
	egress_mbit: 100,
	monthly_egress_bytes: 0xa0000000000,
	max_compute_seconds_month: null,
	max_conns_per_vm: 128,
	dns_max_qps: 100,
	ingress_rps: 1e3,
	ingress_burst: 2e3,
	ingress_max_concurrent: 64,
	build_weight: 16,
	may_pin: true,
	may_use_egress: true,
	may_use_ingress: true,
	may_use_secrets: true,
	may_use_webhooks: true,
	may_use_retry: true,
	may_duration_long: true,
	may_duration_unbounded: false,
	may_cardinality_continuous: true,
	may_state_across_runs: true,
	may_state_across_crashes: false,
	allowed_presets: [
		"std.micro",
		"std.small",
		"std.medium",
		"std.large",
		"std.xlarge",
		"mem.large",
		"mem.xlarge",
		"cpu.large"
	]
};
var free_default = {
	name: "free",
	lifecycle: "sellable",
	max_tasks: 3,
	max_deployments: 2,
	max_running_vms: 1,
	max_units: null,
	max_pinned_vms: 0,
	max_warm_vms: 0,
	max_secrets: 10,
	max_webhooks: 0,
	max_api_keys: 2,
	max_schedules: 6,
	deployments_per_minute: 3,
	deployments_per_hour: 10,
	deployments_per_day: 30,
	runs_per_minute: 10,
	runs_per_hour: 120,
	runs_per_day: 500,
	api_requests_per_sec: 5,
	api_requests_burst: 10,
	failure_max_attempts: 1,
	max_storage_mib: 128,
	max_image_bytes: 268435456,
	max_total_image_bytes: 268435456,
	max_timeout_sec: 300,
	max_vm_lifetime_sec: 600,
	egress_mbit: 50,
	monthly_egress_bytes: 5368709120,
	max_compute_seconds_month: 72e3,
	max_conns_per_vm: 32,
	dns_max_qps: 25,
	ingress_rps: null,
	ingress_burst: null,
	ingress_max_concurrent: null,
	build_weight: 1,
	may_pin: false,
	may_use_egress: false,
	may_use_ingress: false,
	may_use_secrets: true,
	may_use_webhooks: false,
	may_use_retry: false,
	may_duration_long: true,
	may_duration_unbounded: false,
	may_cardinality_continuous: false,
	may_state_across_runs: false,
	may_state_across_crashes: false,
	allowed_presets: ["std.micro"]
};
var pro_default = {
	name: "pro",
	lifecycle: "sellable",
	max_tasks: 100,
	max_deployments: 50,
	max_running_vms: 12,
	max_units: null,
	max_pinned_vms: 4,
	max_warm_vms: 10,
	max_secrets: 100,
	max_webhooks: 20,
	max_api_keys: 25,
	max_schedules: 200,
	deployments_per_minute: 15,
	deployments_per_hour: 200,
	deployments_per_day: 1e3,
	runs_per_minute: 300,
	runs_per_hour: 1e4,
	runs_per_day: 1e5,
	api_requests_per_sec: 100,
	api_requests_burst: 200,
	failure_max_attempts: 3,
	max_storage_mib: 8192,
	max_image_bytes: 268435456,
	max_total_image_bytes: 5368709120,
	max_timeout_sec: 21600,
	max_vm_lifetime_sec: 43200,
	egress_mbit: 100,
	monthly_egress_bytes: 1099511627776,
	max_compute_seconds_month: null,
	max_conns_per_vm: 128,
	dns_max_qps: 100,
	ingress_rps: 100,
	ingress_burst: 200,
	ingress_max_concurrent: 25,
	build_weight: 8,
	may_pin: true,
	may_use_egress: true,
	may_use_ingress: true,
	may_use_secrets: true,
	may_use_webhooks: true,
	may_use_retry: true,
	may_duration_long: true,
	may_duration_unbounded: false,
	may_cardinality_continuous: true,
	may_state_across_runs: true,
	may_state_across_crashes: false,
	allowed_presets: [
		"std.micro",
		"std.small",
		"std.medium",
		"std.large",
		"mem.large",
		"mem.xlarge"
	]
};
var starter_default = {
	name: "starter",
	lifecycle: "sellable",
	max_tasks: 15,
	max_deployments: 10,
	max_running_vms: 3,
	max_units: null,
	max_pinned_vms: 0,
	max_warm_vms: 3,
	max_secrets: 25,
	max_webhooks: 3,
	max_api_keys: 5,
	max_schedules: 30,
	deployments_per_minute: 5,
	deployments_per_hour: 40,
	deployments_per_day: 200,
	runs_per_minute: 60,
	runs_per_hour: 1e3,
	runs_per_day: 1e4,
	api_requests_per_sec: 25,
	api_requests_burst: 50,
	failure_max_attempts: 2,
	max_storage_mib: 512,
	max_image_bytes: 268435456,
	max_total_image_bytes: 1073741824,
	max_timeout_sec: 1800,
	max_vm_lifetime_sec: 3600,
	egress_mbit: 50,
	monthly_egress_bytes: 107374182400,
	max_compute_seconds_month: null,
	max_conns_per_vm: 32,
	dns_max_qps: 25,
	ingress_rps: 25,
	ingress_burst: 50,
	ingress_max_concurrent: 5,
	build_weight: 2,
	may_pin: false,
	may_use_egress: true,
	may_use_ingress: true,
	may_use_secrets: true,
	may_use_webhooks: true,
	may_use_retry: true,
	may_duration_long: true,
	may_duration_unbounded: false,
	may_cardinality_continuous: false,
	may_state_across_runs: true,
	may_state_across_crashes: false,
	allowed_presets: ["std.micro", "std.small"]
};
var team_default = {
	name: "team",
	lifecycle: "sellable",
	max_tasks: 40,
	max_deployments: 25,
	max_running_vms: 6,
	max_units: null,
	max_pinned_vms: 0,
	max_warm_vms: 5,
	max_secrets: 50,
	max_webhooks: 8,
	max_api_keys: 10,
	max_schedules: 80,
	deployments_per_minute: 10,
	deployments_per_hour: 100,
	deployments_per_day: 500,
	runs_per_minute: 150,
	runs_per_hour: 4e3,
	runs_per_day: 4e4,
	api_requests_per_sec: 50,
	api_requests_burst: 100,
	failure_max_attempts: 3,
	max_storage_mib: 2048,
	max_image_bytes: 268435456,
	max_total_image_bytes: 2684354560,
	max_timeout_sec: 3600,
	max_vm_lifetime_sec: 7200,
	egress_mbit: 100,
	monthly_egress_bytes: 322122547200,
	max_compute_seconds_month: null,
	max_conns_per_vm: 128,
	dns_max_qps: 25,
	ingress_rps: 50,
	ingress_burst: 100,
	ingress_max_concurrent: 10,
	build_weight: 4,
	may_pin: false,
	may_use_egress: true,
	may_use_ingress: true,
	may_use_secrets: true,
	may_use_webhooks: true,
	may_use_retry: true,
	may_duration_long: true,
	may_duration_unbounded: false,
	may_cardinality_continuous: false,
	may_state_across_runs: true,
	may_state_across_crashes: false,
	allowed_presets: [
		"std.micro",
		"std.small",
		"std.medium"
	]
};
//#endregion
//#region ../config/product/ladder.json
var ladder_default = [
	"free",
	"starter",
	"team",
	"pro",
	"enterprise"
];
//#endregion
//#region src/lib/tiers.ts
/**
* The tier files, by file name. A glob, not five named imports: the ladder
* (`config/product/ladder.json`) says which tiers exist and in what order, and this reads exactly
* those files. Adding a rung is then one edit in `ladder.json` plus its tier file.
*/
var tierFiles = /* #__PURE__ */ Object.assign({
	"../../../config/product/tiers/production/enterprise.json": enterprise_default,
	"../../../config/product/tiers/production/free.json": free_default,
	"../../../config/product/tiers/production/pro.json": pro_default,
	"../../../config/product/tiers/production/starter.json": starter_default,
	"../../../config/product/tiers/production/team.json": team_default
});
/** Ladder order. The page's whole argument is rung-to-rung, so order is data. */
var TIER_IDS = ladder_default;
var TIERS = Object.fromEntries(TIER_IDS.map((id) => {
	const key = Object.keys(tierFiles).find((k) => k.endsWith(`/${id}.json`));
	if (!key) throw new Error(`[pricing] ladder.json names "${id}" but config/product/tiers/production/${id}.json does not exist.`);
	return [id, tierFiles[key]];
}));
var groupDigits = (n) => n.toLocaleString("en-US");
/** Seconds -> "5 min" / "1 h". The table never prints raw seconds. */
var duration = (sec) => {
	if (sec < 3600) return `${sec / 60} min`;
	return `${sec / 3600} h`;
};
/** MiB -> "64 MiB" / "2 GiB" (binary, for scratch storage). */
var mib = (v) => v >= 1024 ? `${v / 1024} GiB` : `${v} MiB`;
/** Bytes -> "64 KiB" / "4 MiB" / "256 MiB" (binary, for payload/result/image). */
var bytesBinary = (v) => {
	const KiB = 1024, MiB = KiB * 1024, GiB = MiB * 1024;
	if (v >= GiB) return `${v / GiB} GiB`;
	if (v >= MiB) return `${v / MiB} MiB`;
	return `${v / KiB} KiB`;
};
/**
* Egress quota -> "5 GB" / "100 GB" / "1 TB".
*
* ⚠️ THE STORED VALUE IS BINARY, THE PUBLISHED LABEL IS "GB". 107374182400 is
* exactly 100 GiB, and every tier document prints it as "100 GB"
* (config/product/README.md — the tier reference). So this divides by 2^30 and labels
* the result GB, which is what the ladder has always advertised.
*
* This is deliberately NOT "corrected" to 107.4 GB here: the unit a quota is
* SOLD in is a commercial decision (class C), not a formatting bug, and
* changing a published figure is not a refactor's business. If the label is
* ever made strict, it changes in the tier docs first and here second.
*/
var egressQuota = (v) => {
	const GiB = 2 ** 30, TiB = 2 ** 40;
	if (v >= TiB) return `${v / TiB} TB`;
	return `${v / GiB} GB`;
};
/** Deployment image ceiling -> "256 MiB" / "1 GB" / "10 GB". Same convention:
*  binary quantity, and the ladder prints GB above the MiB break. */
var imageCeiling = (v) => {
	const MiB = 2 ** 20, GiB = 2 ** 30;
	if (v >= GiB) return `${v / GiB} GB`;
	return `${v / MiB} MiB`;
};
/**
* Read one entitlement and decide what the cell says.
*
* `capability` names the flag that distinguishes "unlimited" from "not
* included" when the value is null. Omit it and a null means unlimited.
*/
function cell(tier, key, opts = {}) {
	const { format = groupDigits, capability, absentSr = "Not included", unlimitedText = "Unlimited" } = opts;
	const raw = tier[key];
	if (capability && tier[capability] === false) return {
		kind: "absent",
		sr: absentSr
	};
	if (raw === null || raw === void 0) return {
		kind: "unlimited",
		text: unlimitedText
	};
	if (typeof raw === "boolean") return raw ? { kind: "yes" } : {
		kind: "absent",
		sr: "No"
	};
	if (Array.isArray(raw)) return {
		kind: "list",
		items: raw.map(String),
		added: raw.map(String)
	};
	if (typeof raw === "number") {
		if (raw === 0) return {
			kind: "absent",
			sr: absentSr
		};
		return {
			kind: "value",
			text: format(raw)
		};
	}
	return {
		kind: "value",
		text: String(raw)
	};
}
/** Every tier's cell for one row, in ladder order. */
var row = (key, opts) => {
	const cells = TIER_IDS.map((id) => cell(TIERS[id], key, opts));
	return cells.map((c, i) => {
		const below = i > 0 ? cells[i - 1] : void 0;
		return c.kind === "list" && below?.kind === "list" ? {
			...c,
			added: c.items.filter((x) => !below.items.includes(x))
		} : c;
	});
};
var presetsOf = (id) => {
	const raw = TIERS[id].allowed_presets;
	if (!Array.isArray(raw)) throw new Error(`[pricing] tier "${id}" allowed_presets is not a list.`);
	return raw;
};
/** The presets this rung allows that the rung below does not (ladder order). */
function addedPresets(id) {
	const i = TIER_IDS.indexOf(id);
	const below = i > 0 ? presetsOf(TIER_IDS[i - 1]) : [];
	return presetsOf(id).filter((p) => !below.includes(p));
}
/**
* A plan card's preset list, derived from the tier files (never typed by hand): when the rung
* keeps everything below it and adds something, only the additions, and `from` names the rung below (the card prints "Free + std.small"); otherwise the full list.
*/
function presetRung(id) {
	const i = TIER_IDS.indexOf(id);
	const below = i > 0 ? presetsOf(TIER_IDS[i - 1]) : [];
	const all = presetsOf(id);
	const added = addedPresets(id);
	return below.length > 0 && below.every((p) => all.includes(p)) && added.length > 0 ? {
		from: TIER_IDS[i - 1],
		names: added
	} : {
		from: null,
		names: [...all]
	};
}
/** The capability flag that opens each direction of a task's network. */
var NETWORK_FLAGS = {
	outbound: "may_use_egress",
	inbound: "may_use_ingress"
};
/** The plain words for each network access, shared by the plan cards and the comparison sheet. */
var NETWORK_TEXT = {
	outbound: {
		label: "Outbound network",
		means: "the task can call outside services"
	},
	inbound: {
		label: "Inbound network",
		means: "a public HTTPS address into the task"
	},
	card: {
		none: "No network: no outbound, no inbound",
		outbound: "Outbound network only: no inbound",
		both: "Outbound and inbound network"
	}
};
/**
* The network access a tier grants, from its two flags. The platform gives an inbound address
* only to a task that also has the outbound path, so a tier with inbound and no outbound grants
* something no task can use: that is a mistake in the tier file, and the build stops on it.
*/
function networkAccessOf(tier) {
	const outbound = tier[NETWORK_FLAGS.outbound] === true;
	const inbound = tier[NETWORK_FLAGS.inbound] === true;
	if (inbound && !outbound) throw new Error(`[pricing] tier "${tier.name}" sets ${NETWORK_FLAGS.inbound} without ${NETWORK_FLAGS.outbound}. Inbound network always comes with outbound network.`);
	return inbound ? "both" : outbound ? "outbound" : "none";
}
/**
* A plan card's network line, derived from the tier flags (never typed by hand). The mark follows
* the card rule: `off` when the plan has no network, `key` when the plan opens more network than
* the rung below it.
*/
function networkLine(id) {
	const access = networkAccessOf(TIERS[id]);
	const i = TIER_IDS.indexOf(id);
	const below = i > 0 ? networkAccessOf(TIERS[TIER_IDS[i - 1]]) : "none";
	const text = NETWORK_TEXT.card[access];
	if (access === "none") return {
		text,
		kind: "off"
	};
	return access === below ? { text } : {
		text,
		kind: "key"
	};
}
/** Formatters a plan card's `{key:formatter}` may name. */
var FORMATTERS = {
	duration,
	mib,
	bytesBinary,
	egressQuota,
	imageCeiling
};
/**
* Resolve `{key}` / `{key:formatter}` against one tier's entitlements.
*
* ⛔ THROWS on an unknown key or formatter rather than leaving the placeholder
*    in the output. A card reading "{max_taks} tasks" is a typo that ships —
*    silently, and on the page where the product is priced. Failing the build
*    is the only outcome that cannot be missed.
*/
function interpolate(text, id) {
	const tier = TIERS[id];
	return text.replace(/\{([a-z_]+)(?::([a-zA-Z]+))?\}/g, (_all, key, fmt) => {
		if (!(key in tier)) throw new Error(`[pricing] plan "${id}" references unknown entitlement "{${key}}". Check the key against config/product/tiers/production/${id}.json.`);
		if (key === "allowed_presets" && fmt === "added") {
			const added = addedPresets(id);
			if (added.length === 0) throw new Error(`[pricing] plan "${id}" adds no preset over the rung below.`);
			return added.join(" · ");
		}
		const raw = tier[key];
		if (raw === null || raw === void 0) throw new Error(`[pricing] plan "${id}" interpolates "{${key}}", which is null (unlimited / not included). A card cannot print that as a number — write the words instead.`);
		if (fmt) {
			const f = FORMATTERS[fmt];
			if (!f) throw new Error(`[pricing] unknown formatter "{${key}:${fmt}}". Known: ${Object.keys(FORMATTERS).join(", ")}.`);
			return f(Number(raw));
		}
		return typeof raw === "number" ? raw.toLocaleString("en-US") : String(raw);
	});
}
//#endregion
export { bytesBinary as a, imageCeiling as c, networkLine as d, presetRung as f, TIER_IDS as i, interpolate as l, ladder_default as m, NETWORK_TEXT as n, duration as o, row as p, TIERS as r, egressQuota as s, NETWORK_FLAGS as t, mib as u };
