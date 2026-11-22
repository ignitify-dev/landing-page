import { t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { h as slash } from "./path_CsjwVQRw.mjs";
import { A as promise, B as addAttribute, C as boolean, D as never, E as literal, I as _coercedDate, J as unescapeHTML, L as NEVER, M as strictObject, N as string, O as number, P as union, R as maybeRenderHead, S as array, Z as createAstro, _ as ZodIssueCode, b as _function, dt as s, j as record, k as object, o as renderComponent, p as renderTemplate, s as Fragment, v as ZodDate, w as custom, x as any, y as _enum } from "./server_D7BsF4R_.mjs";
import { n as $$Base, o as renderScript, t as $$Footer } from "./Footer_CI9oCuuP.mjs";
import { a as CONTENT_LAYER_TYPE, o as LIVE_CONTENT_TYPE, r as defineCollection, t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import "./metadata_DFnwEoja.mjs";
import "./hash_D1WsWCPg.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { i as UNIT_BASE_PRESET_NAME, n as PRESETS, o as config_default, r as PRESET_WEIGHTS } from "./presets_-p1mqr2C.mjs";
import { i as TIER_IDS, m as ladder_default, o as duration$1, r as TIERS, u as mib } from "./tiers_DIe1pdQ_.mjs";
/* empty css               */
import { t as withHeadingIds } from "./docs-toc_D1Nujo_I.mjs";
import { parse } from "yaml";
import "js-yaml";
import { existsSync, promises } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path, { relative } from "node:path";
import pLimit from "p-limit";
import picomatch from "picomatch";
import { glob } from "tinyglobby";
//#region node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/classic/coerce.js
function date(params) {
	return _coercedDate(ZodDate, params);
}
//#endregion
//#region ../packages/contract/limits.ts
/** Inbound-port bounds (Phase 4 WI-1): privileged ports (<1024) are unbindable by
*  the de-privileged guest task; 65535 is the TCP maximum. `INBOUND_PORT_MIN` is exported for T-605:
*  the fleet host's egress-proxy guard REJECTs uid 101's tcp/443 to guests, which is safe only
*  because the ingress Envoy (same uid) never dials a guest below this port. */
var INBOUND_PORT_MIN = 1024;
var INBOUND_PORT_MAX = 65535;
var cli_catalog_default = {
	generated_by: "tools/cli-docs/generate.mjs",
	schema_version: 1,
	constants: {
		"payload_fallback_bytes": 10240,
		"result_fallback_bytes": 10240,
		"upload_max_bytes": 67108864,
		"deploy_wait_ms": 9e5,
		"run_wait_ms": 18e5,
		"deploy_poll_base_ms": 500,
		"deploy_poll_max_ms": 1e3,
		"run_poll_base_ms": 500,
		"run_poll_max_ms": 3e3,
		"poll_error_min_tries": 3,
		"poll_error_grace_ms": 6e4,
		"request_timeout_ms": 12e4,
		"upload_timeout_ms": 3e5,
		"review_timeout_ms": 6e4,
		"version_probe_timeout_ms": 3e3,
		"result_max_lines": 40,
		"build_log_tail_lines": 30,
		"task_report_page": 100,
		"interrupt_exit_code": 130,
		"client_version": "3.2.0",
		"api_version": "1"
	},
	global: {
		"flags": [{
			"name": "json",
			"kind": "bool"
		}, {
			"name": "help",
			"kind": "bool",
			"short": "h"
		}],
		"short_flags": [
			{
				"short": "h",
				"long": "help",
				"anywhere": true
			},
			{
				"short": "y",
				"long": "yes",
				"anywhere": true
			},
			{
				"short": "v",
				"long": "version",
				"anywhere": false
			}
		],
		"env": [{
			"name": "IGNITIFY_API_KEY",
			"required": true
		}, {
			"name": "IGNITIFY_TASKS_DIR",
			"required": false,
			"default": "tasks"
		}],
		"exit_codes": [
			0,
			1,
			130
		],
		"files": {
			"ignore_file": ".ignitifyignore",
			"state_dir": ".ignitify"
		}
	},
	groups: [
		{
			"id": "tasks",
			"title": "Tasks",
			"commands": [
				"task:create",
				"task:list",
				"task:get",
				"task:validate",
				"task:pack",
				"task:deploy",
				"task:run",
				"task:delete"
			]
		},
		{
			"id": "integrations",
			"title": "Integrations",
			"commands": ["integration:add"]
		},
		{
			"id": "deployments",
			"title": "Deployments",
			"commands": [
				"deployment:list",
				"deployment:get",
				"deployment:logs",
				"deployment:delete"
			]
		},
		{
			"id": "runs",
			"title": "Runs",
			"commands": [
				"run:list",
				"run:get",
				"run:logs",
				"run:timeline",
				"run:failures",
				"run:cancel",
				"run:delete"
			]
		},
		{
			"id": "vms",
			"title": "VMs",
			"commands": [
				"vm:list",
				"vm:get",
				"vm:delete"
			]
		},
		{
			"id": "secrets",
			"title": "Secrets",
			"commands": [
				"secret:set",
				"secret:list",
				"secret:delete"
			]
		},
		{
			"id": "schedules",
			"title": "Schedules",
			"commands": [
				"schedule:create",
				"schedule:list",
				"schedule:show",
				"schedule:pause",
				"schedule:resume",
				"schedule:preview",
				"schedule:cancel"
			]
		},
		{
			"id": "webhooks",
			"title": "Webhooks and notify",
			"commands": [
				"hook:create",
				"hook:list",
				"hook:delete",
				"notify:set"
			]
		},
		{
			"id": "access",
			"title": "Access control",
			"commands": [
				"permission:list",
				"user:create",
				"user:list",
				"user:get",
				"user:remove",
				"group:create",
				"group:list",
				"group:get",
				"group:grant",
				"group:revoke",
				"group:add-user",
				"group:remove-user",
				"group:delete",
				"key:create",
				"key:list",
				"key:revoke"
			]
		},
		{
			"id": "account",
			"title": "Account and usage",
			"commands": [
				"login",
				"logout",
				"whoami",
				"quota",
				"usage",
				"usage:series",
				"usage:export",
				"notification:list",
				"--version",
				"help"
			]
		}
	],
	commands: [
		{
			"name": "task:create",
			"group": "tasks",
			"anchor": "task-create",
			"synopsis": ["ignitify task:create <task-id> [--lang node|python|go|rust] [--local] [--no-init] [--no-scaffold] [--dir <base-dir>]"],
			"args": [{
				"name": "task-id",
				"required": true
			}],
			"flags": [
				{
					"name": "dir",
					"kind": "value",
					"value": "<base-dir>",
					"default": "$IGNITIFY_TASKS_DIR, else tasks",
					"required": false
				},
				{
					"name": "lang",
					"kind": "value",
					"value": "node|python|go|rust",
					"choices": [
						"node",
						"python",
						"go",
						"rust"
					],
					"default": "node",
					"required": false
				},
				{
					"name": "local",
					"kind": "bool",
					"required": false
				},
				{
					"name": "no-init",
					"kind": "bool",
					"required": false
				},
				{
					"name": "no-scaffold",
					"kind": "bool",
					"required": false
				}
			],
			"auth": {
				"key": "always",
				"offline_when": ["local"]
			},
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "task:list",
			"group": "tasks",
			"anchor": "task-list",
			"synopsis": ["ignitify task:list [--limit N] [--after-id <id>] [--after <iso>]"],
			"args": [],
			"flags": [
				{
					"name": "limit",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "after",
					"kind": "value",
					"value": "<iso>",
					"required": false
				},
				{
					"name": "after-id",
					"kind": "value",
					"value": "<id>",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "task:get",
			"group": "tasks",
			"anchor": "task-get",
			"synopsis": ["ignitify task:get <task-id> [--dir <base-dir>]"],
			"args": [{
				"name": "task-id",
				"required": true
			}],
			"flags": [{
				"name": "dir",
				"kind": "value",
				"value": "<base-dir>",
				"default": "$IGNITIFY_TASKS_DIR, else tasks",
				"required": false
			}],
			"auth": { "key": "optional" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "task:validate",
			"group": "tasks",
			"anchor": "task-validate",
			"synopsis": ["ignitify task:validate <task-id> [--dir <base-dir>] [--review-packages]"],
			"args": [{
				"name": "task-id",
				"required": true
			}],
			"flags": [{
				"name": "dir",
				"kind": "value",
				"value": "<base-dir>",
				"default": "$IGNITIFY_TASKS_DIR, else tasks",
				"required": false
			}, {
				"name": "review-packages",
				"kind": "bool",
				"required": false
			}],
			"auth": {
				"key": "offline",
				"key_needed_when": ["review-packages"]
			},
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "task:pack",
			"group": "tasks",
			"anchor": "task-pack",
			"synopsis": ["ignitify task:pack <task-id> [--dir <base-dir>]"],
			"args": [{
				"name": "task-id",
				"required": true
			}],
			"flags": [{
				"name": "dir",
				"kind": "value",
				"value": "<base-dir>",
				"default": "$IGNITIFY_TASKS_DIR, else tasks",
				"required": false
			}],
			"auth": { "key": "none" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "task:deploy",
			"group": "tasks",
			"anchor": "task-deploy",
			"synopsis": ["ignitify task:deploy <task-id> [--dir <base-dir>] [--check]"],
			"args": [{
				"name": "task-id",
				"required": true
			}],
			"flags": [{
				"name": "dir",
				"kind": "value",
				"value": "<base-dir>",
				"default": "$IGNITIFY_TASKS_DIR, else tasks",
				"required": false
			}, {
				"name": "check",
				"kind": "bool",
				"required": false
			}],
			"auth": {
				"key": "always",
				"offline_when": ["check"]
			},
			"confirms": false,
			"deletes": false,
			"waits": {
				"for": "build",
				"budget": "deploy_wait_ms",
				"skipped_by": "check"
			},
			"json": "full"
		},
		{
			"name": "task:run",
			"group": "tasks",
			"anchor": "task-run",
			"synopsis": ["ignitify task:run <task-id> [--dir <base-dir>] [--deployment <id>] [--payload <json>] [--timeout-sec <n>] [--on-busy queue|reject] [--at <iso>] [--idempotency-key <key>] [--wait]"],
			"args": [{
				"name": "task-id",
				"required": true
			}],
			"flags": [
				{
					"name": "deployment",
					"kind": "value",
					"value": "<id>",
					"default": "the task's latest deploy",
					"required": false
				},
				{
					"name": "payload",
					"kind": "value",
					"value": "<json>",
					"default": "run.payload from task.yaml",
					"required": false
				},
				{
					"name": "timeout-sec",
					"kind": "value",
					"value": "<n>",
					"default": "run.timeout_sec from task.yaml",
					"required": false
				},
				{
					"name": "on-busy",
					"kind": "value",
					"value": "queue|reject",
					"choices": ["queue", "reject"],
					"default": "queue",
					"required": false
				},
				{
					"name": "at",
					"kind": "value",
					"value": "<iso>",
					"required": false
				},
				{
					"name": "idempotency-key",
					"kind": "value",
					"value": "<key>",
					"required": false
				},
				{
					"name": "wait",
					"kind": "bool",
					"required": false
				},
				{
					"name": "dir",
					"kind": "value",
					"value": "<base-dir>",
					"default": "$IGNITIFY_TASKS_DIR, else tasks",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": {
				"for": "run",
				"budget": "run_wait_ms",
				"only_with": "wait"
			},
			"json": "full"
		},
		{
			"name": "task:delete",
			"group": "tasks",
			"anchor": "task-delete",
			"synopsis": ["ignitify task:delete <task-id> [--dir <base-dir>] [--yes] [--json]"],
			"args": [{
				"name": "task-id",
				"required": true
			}],
			"flags": [
				{
					"name": "dir",
					"kind": "value",
					"value": "<base-dir>",
					"default": "$IGNITIFY_TASKS_DIR, else tasks",
					"required": false
				},
				{
					"name": "yes",
					"kind": "bool",
					"short": "y",
					"required": false
				},
				{
					"name": "json",
					"kind": "bool",
					"required": false,
					"global": true
				}
			],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "integration:add",
			"group": "integrations",
			"anchor": "integration-add",
			"synopsis": ["ignitify integration:add <name> --task <slug> [--yes | --dry-run] [--dir <base-dir>]"],
			"args": [{
				"name": "name",
				"required": true
			}],
			"flags": [
				{
					"name": "dir",
					"kind": "value",
					"value": "<base-dir>",
					"default": "$IGNITIFY_TASKS_DIR, else tasks",
					"required": false
				},
				{
					"name": "yes",
					"kind": "bool",
					"short": "y",
					"required": false
				},
				{
					"name": "task",
					"kind": "value",
					"value": "<slug>",
					"required": true
				},
				{
					"name": "dry-run",
					"kind": "bool",
					"required": false
				}
			],
			"auth": { "key": "none" },
			"confirms": true,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "deployment:list",
			"group": "deployments",
			"anchor": "deployment-list",
			"synopsis": ["ignitify deployment:list [--limit N] [--after-id <id>] [--after <iso>]"],
			"args": [],
			"flags": [
				{
					"name": "limit",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "after",
					"kind": "value",
					"value": "<iso>",
					"required": false
				},
				{
					"name": "after-id",
					"kind": "value",
					"value": "<id>",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "deployment:get",
			"group": "deployments",
			"anchor": "deployment-get",
			"synopsis": ["ignitify deployment:get <deployment-id>"],
			"args": [{
				"name": "deployment-id",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "deployment:logs",
			"group": "deployments",
			"anchor": "deployment-logs",
			"synopsis": ["ignitify deployment:logs <deployment-id> [--raw]"],
			"args": [{
				"name": "deployment-id",
				"required": true
			}],
			"flags": [{
				"name": "raw",
				"kind": "bool",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "deployment:delete",
			"group": "deployments",
			"anchor": "deployment-delete",
			"synopsis": ["ignitify deployment:delete <deployment-id> [--yes]"],
			"args": [{
				"name": "deployment-id",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "run:list",
			"group": "runs",
			"anchor": "run-list",
			"synopsis": ["ignitify run:list [--status S] [--deployment-id D] [--task-name N] [--preset P] [--correlation-id C] [--vm-id V] [--schedule <sch-id>] [--limit N] [--after-id <id>] [--after <iso>]"],
			"args": [],
			"flags": [
				{
					"name": "status",
					"kind": "value",
					"value": "S",
					"required": false
				},
				{
					"name": "deployment-id",
					"kind": "value",
					"value": "D",
					"required": false
				},
				{
					"name": "task-name",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "preset",
					"kind": "value",
					"value": "P",
					"required": false
				},
				{
					"name": "correlation-id",
					"kind": "value",
					"value": "C",
					"required": false
				},
				{
					"name": "vm-id",
					"kind": "value",
					"value": "V",
					"required": false
				},
				{
					"name": "schedule",
					"kind": "value",
					"value": "<sch-id>",
					"required": false
				},
				{
					"name": "limit",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "after",
					"kind": "value",
					"value": "<iso>",
					"required": false
				},
				{
					"name": "after-id",
					"kind": "value",
					"value": "<id>",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "run:get",
			"group": "runs",
			"anchor": "run-get",
			"synopsis": ["ignitify run:get <run-id> [--full]"],
			"args": [{
				"name": "run-id",
				"required": true
			}],
			"flags": [{
				"name": "full",
				"kind": "bool",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "run:logs",
			"group": "runs",
			"anchor": "run-logs",
			"synopsis": ["ignitify run:logs <run-id> [--follow] [--tail N] [--raw]"],
			"args": [{
				"name": "run-id",
				"required": true
			}],
			"flags": [
				{
					"name": "raw",
					"kind": "bool",
					"required": false
				},
				{
					"name": "follow",
					"kind": "bool",
					"required": false
				},
				{
					"name": "tail",
					"kind": "value",
					"value": "N",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "run:timeline",
			"group": "runs",
			"anchor": "run-timeline",
			"synopsis": ["ignitify run:timeline <run-id> [--follow]"],
			"args": [{
				"name": "run-id",
				"required": true
			}],
			"flags": [{
				"name": "follow",
				"kind": "bool",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "run:failures",
			"group": "runs",
			"anchor": "run-failures",
			"synopsis": ["ignitify run:failures [--days N] [--json]"],
			"args": [],
			"flags": [{
				"name": "days",
				"kind": "value",
				"value": "N",
				"default": "30",
				"required": false
			}, {
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "run:cancel",
			"group": "runs",
			"anchor": "run-cancel",
			"synopsis": ["ignitify run:cancel <run-id> [--yes] [--force] [--grace <ms>]"],
			"args": [{
				"name": "run-id",
				"required": true
			}],
			"flags": [
				{
					"name": "yes",
					"kind": "bool",
					"short": "y",
					"required": false
				},
				{
					"name": "force",
					"kind": "bool",
					"required": false
				},
				{
					"name": "grace",
					"kind": "value",
					"value": "<ms>",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": true,
			"force_unlocks_refusal": true,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "run:delete",
			"group": "runs",
			"anchor": "run-delete",
			"synopsis": ["ignitify run:delete <run-id> [--yes]"],
			"args": [{
				"name": "run-id",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "vm:list",
			"group": "vms",
			"anchor": "vm-list",
			"synopsis": ["ignitify vm:list [--pinned] [--deployment-id D] [--task-name N] [--preset P] [--older-than 24h] [--limit N] [--after-id <vm-id>] [--after <iso>]"],
			"args": [],
			"flags": [
				{
					"name": "deployment-id",
					"kind": "value",
					"value": "D",
					"required": false
				},
				{
					"name": "task-name",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "preset",
					"kind": "value",
					"value": "P",
					"required": false
				},
				{
					"name": "older-than",
					"kind": "value",
					"value": "24h",
					"required": false
				},
				{
					"name": "limit",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "after",
					"kind": "value",
					"value": "<iso>",
					"required": false
				},
				{
					"name": "after-id",
					"kind": "value",
					"value": "<vm-id>",
					"required": false
				},
				{
					"name": "pinned",
					"kind": "bool",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "vm:get",
			"group": "vms",
			"anchor": "vm-get",
			"synopsis": ["ignitify vm:get <vm-id>"],
			"args": [{
				"name": "vm-id",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "vm:delete",
			"group": "vms",
			"anchor": "vm-delete",
			"synopsis": ["ignitify vm:delete <vm-id> [--yes] [--force]"],
			"args": [{
				"name": "vm-id",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}, {
				"name": "force",
				"kind": "bool",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"force_unlocks_refusal": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "secret:set",
			"group": "secrets",
			"anchor": "secret-set",
			"synopsis": ["ignitify secret:set <NAME> --stdin"],
			"args": [{
				"name": "NAME",
				"required": true
			}],
			"flags": [{
				"name": "stdin",
				"kind": "bool",
				"required": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "secret:list",
			"group": "secrets",
			"anchor": "secret-list",
			"synopsis": ["ignitify secret:list"],
			"args": [],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "secret:delete",
			"group": "secrets",
			"anchor": "secret-delete",
			"synopsis": ["ignitify secret:delete <NAME> [--yes]"],
			"args": [{
				"name": "NAME",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "schedule:create",
			"group": "schedules",
			"anchor": "schedule-create",
			"synopsis": ["ignitify schedule:create <task> --cron <expression> [--tz <zone>] [--payload <json>] [--preset <preset>] [--timeout-sec <n>] [--deadline-sec <n>] [--overlap skip|allow]"],
			"args": [{
				"name": "task",
				"required": true
			}],
			"flags": [
				{
					"name": "cron",
					"kind": "value",
					"value": "<expression>",
					"required": true
				},
				{
					"name": "tz",
					"kind": "value",
					"value": "<zone>",
					"default": "UTC",
					"required": false
				},
				{
					"name": "payload",
					"kind": "value",
					"value": "<json>",
					"default": "{}",
					"required": false
				},
				{
					"name": "preset",
					"kind": "value",
					"value": "<preset>",
					"default": "the deployment's run.preset when it fires",
					"required": false
				},
				{
					"name": "timeout-sec",
					"kind": "value",
					"value": "<n>",
					"default": "the deployment's run.timeout_sec when it fires",
					"required": false
				},
				{
					"name": "deadline-sec",
					"kind": "value",
					"value": "<n>",
					"required": false
				},
				{
					"name": "overlap",
					"kind": "value",
					"value": "skip|allow",
					"choices": ["skip", "allow"],
					"default": "skip",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "schedule:list",
			"group": "schedules",
			"anchor": "schedule-list",
			"synopsis": ["ignitify schedule:list"],
			"args": [],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "schedule:show",
			"group": "schedules",
			"anchor": "schedule-show",
			"synopsis": ["ignitify schedule:show <sch-id>"],
			"args": [{
				"name": "sch-id",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "schedule:pause",
			"group": "schedules",
			"anchor": "schedule-pause",
			"synopsis": ["ignitify schedule:pause <sch-id>"],
			"args": [{
				"name": "sch-id",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "schedule:resume",
			"group": "schedules",
			"anchor": "schedule-resume",
			"synopsis": ["ignitify schedule:resume <sch-id>"],
			"args": [{
				"name": "sch-id",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "schedule:preview",
			"group": "schedules",
			"anchor": "schedule-preview",
			"synopsis": ["ignitify schedule:preview <cron> [--tz <zone>]"],
			"args": [{
				"name": "cron",
				"required": true
			}],
			"flags": [{
				"name": "tz",
				"kind": "value",
				"value": "<zone>",
				"default": "UTC",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "schedule:cancel",
			"group": "schedules",
			"anchor": "schedule-cancel",
			"synopsis": ["ignitify schedule:cancel <sch-id> [--yes]"],
			"args": [{
				"name": "sch-id",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "hook:create",
			"group": "webhooks",
			"anchor": "hook-create",
			"synopsis": ["ignitify hook:create <task>"],
			"args": [{
				"name": "task",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "hook:list",
			"group": "webhooks",
			"anchor": "hook-list",
			"synopsis": ["ignitify hook:list <task> [--limit N] [--after-id <id>] [--after <iso>]"],
			"args": [{
				"name": "task",
				"required": true
			}],
			"flags": [
				{
					"name": "limit",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "after",
					"kind": "value",
					"value": "<iso>",
					"required": false
				},
				{
					"name": "after-id",
					"kind": "value",
					"value": "<id>",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "hook:delete",
			"group": "webhooks",
			"anchor": "hook-delete",
			"synopsis": ["ignitify hook:delete <hook-resource-id> [--yes]"],
			"args": [{
				"name": "hook-resource-id",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "notify:set",
			"group": "webhooks",
			"anchor": "notify-set",
			"synopsis": ["ignitify notify:set <deployment-id> --url <https://…> --secret-stdin", "ignitify notify:set <deployment-id> --clear"],
			"args": [{
				"name": "deployment-id",
				"required": true
			}],
			"flags": [
				{
					"name": "url",
					"kind": "value",
					"value": "<https://…>",
					"required": false
				},
				{
					"name": "clear",
					"kind": "bool",
					"required": false
				},
				{
					"name": "secret-stdin",
					"kind": "bool",
					"required": false
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "permission:list",
			"group": "access",
			"anchor": "permission-list",
			"synopsis": ["ignitify permission:list [--json]"],
			"args": [],
			"flags": [{
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "none" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "user:create",
			"group": "access",
			"anchor": "user-create",
			"synopsis": ["ignitify user:create <name> [--json]"],
			"args": [{
				"name": "name",
				"required": true
			}],
			"flags": [{
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "user:list",
			"group": "access",
			"anchor": "user-list",
			"synopsis": ["ignitify user:list [--json]"],
			"args": [],
			"flags": [{
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "user:get",
			"group": "access",
			"anchor": "user-get",
			"synopsis": ["ignitify user:get <name> [--json]"],
			"args": [{
				"name": "name",
				"required": true
			}],
			"flags": [{
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "user:remove",
			"group": "access",
			"anchor": "user-remove",
			"synopsis": ["ignitify user:remove <name> [--yes]"],
			"args": [{
				"name": "name",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:create",
			"group": "access",
			"anchor": "group-create",
			"synopsis": ["ignitify group:create <name> --permissions <p1,p2,…> [--json]"],
			"args": [{
				"name": "name",
				"required": true
			}],
			"flags": [{
				"name": "permissions",
				"kind": "value",
				"value": "<p1,p2,…>",
				"required": true
			}, {
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:list",
			"group": "access",
			"anchor": "group-list",
			"synopsis": ["ignitify group:list [--json]"],
			"args": [],
			"flags": [{
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:get",
			"group": "access",
			"anchor": "group-get",
			"synopsis": ["ignitify group:get <name> [--json]"],
			"args": [{
				"name": "name",
				"required": true
			}],
			"flags": [{
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:grant",
			"group": "access",
			"anchor": "group-grant",
			"synopsis": ["ignitify group:grant <name> <permission>"],
			"args": [{
				"name": "name",
				"required": true
			}, {
				"name": "permission",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:revoke",
			"group": "access",
			"anchor": "group-revoke",
			"synopsis": ["ignitify group:revoke <name> <permission>"],
			"args": [{
				"name": "name",
				"required": true
			}, {
				"name": "permission",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:add-user",
			"group": "access",
			"anchor": "group-add-user",
			"synopsis": ["ignitify group:add-user <group> <user>"],
			"args": [{
				"name": "group",
				"required": true
			}, {
				"name": "user",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:remove-user",
			"group": "access",
			"anchor": "group-remove-user",
			"synopsis": ["ignitify group:remove-user <group> <user>"],
			"args": [{
				"name": "group",
				"required": true
			}, {
				"name": "user",
				"required": true
			}],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "group:delete",
			"group": "access",
			"anchor": "group-delete",
			"synopsis": ["ignitify group:delete <name> [--yes]"],
			"args": [{
				"name": "name",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "key:create",
			"group": "access",
			"anchor": "key-create",
			"synopsis": ["ignitify key:create --user <name> --label <text> [--out <file>] [--json]"],
			"args": [],
			"flags": [
				{
					"name": "user",
					"kind": "value",
					"value": "<name>",
					"required": true
				},
				{
					"name": "label",
					"kind": "value",
					"value": "<text>",
					"required": true
				},
				{
					"name": "out",
					"kind": "value",
					"value": "<file>",
					"required": false
				},
				{
					"name": "json",
					"kind": "bool",
					"required": false,
					"global": true
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "key:list",
			"group": "access",
			"anchor": "key-list",
			"synopsis": ["ignitify key:list [--user <name>] [--json]"],
			"args": [],
			"flags": [{
				"name": "user",
				"kind": "value",
				"value": "<name>",
				"required": false
			}, {
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "key:revoke",
			"group": "access",
			"anchor": "key-revoke",
			"synopsis": ["ignitify key:revoke <key-resource-id> [--yes]"],
			"args": [{
				"name": "key-resource-id",
				"required": true
			}],
			"flags": [{
				"name": "yes",
				"kind": "bool",
				"short": "y",
				"required": false
			}],
			"auth": { "key": "always" },
			"confirms": true,
			"deletes": true,
			"waits": null,
			"json": "full"
		},
		{
			"name": "login",
			"group": "account",
			"anchor": "login",
			"synopsis": ["ignitify login [--name <label>] [--no-browser]"],
			"args": [],
			"flags": [{
				"name": "no-browser",
				"kind": "bool",
				"required": false
			}, {
				"name": "name",
				"kind": "value",
				"value": "<label>",
				"required": false
			}],
			"auth": { "key": "none" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "none"
		},
		{
			"name": "logout",
			"group": "account",
			"anchor": "logout",
			"synopsis": ["ignitify logout"],
			"args": [],
			"flags": [],
			"auth": { "key": "none" },
			"confirms": false,
			"deletes": true,
			"waits": null,
			"json": "none"
		},
		{
			"name": "whoami",
			"group": "account",
			"anchor": "whoami",
			"synopsis": ["ignitify whoami"],
			"args": [],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "quota",
			"group": "account",
			"anchor": "quota",
			"synopsis": ["ignitify quota"],
			"args": [],
			"flags": [],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "usage",
			"group": "account",
			"anchor": "usage",
			"synopsis": ["ignitify usage [--period YYYY-MM] [--axis compute|network|network_in|disk|scratch|runs|pin|build] [--vm <vm-id>] [--run <run-id>] [--runs|--vms] [--json]"],
			"args": [],
			"flags": [
				{
					"name": "period",
					"kind": "value",
					"value": "YYYY-MM",
					"required": false
				},
				{
					"name": "axis",
					"kind": "value",
					"value": "compute|network|network_in|disk|scratch|runs|pin|build",
					"choices": [
						"compute",
						"network",
						"network_in",
						"disk",
						"scratch",
						"runs",
						"pin",
						"build"
					],
					"required": false
				},
				{
					"name": "vm",
					"kind": "value",
					"value": "<vm-id>",
					"required": false
				},
				{
					"name": "run",
					"kind": "value",
					"value": "<run-id>",
					"required": false
				},
				{
					"name": "runs",
					"kind": "bool",
					"required": false
				},
				{
					"name": "vms",
					"kind": "bool",
					"required": false
				},
				{
					"name": "json",
					"kind": "bool",
					"required": false,
					"global": true
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "usage:series",
			"group": "account",
			"anchor": "usage-series",
			"synopsis": ["ignitify usage:series [--days N] [--json]"],
			"args": [],
			"flags": [{
				"name": "days",
				"kind": "value",
				"value": "N",
				"default": "30",
				"required": false
			}, {
				"name": "json",
				"kind": "bool",
				"required": false,
				"global": true
			}],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "usage:export",
			"group": "account",
			"anchor": "usage-export",
			"synopsis": ["ignitify usage:export [--period YYYY-MM] [--axis compute|network|network_in|disk|scratch|runs|pin|build] [--vm <vm-id>] [--run <run-id>] (--json|--csv)"],
			"args": [],
			"flags": [
				{
					"name": "period",
					"kind": "value",
					"value": "YYYY-MM",
					"required": false
				},
				{
					"name": "axis",
					"kind": "value",
					"value": "compute|network|network_in|disk|scratch|runs|pin|build",
					"choices": [
						"compute",
						"network",
						"network_in",
						"disk",
						"scratch",
						"runs",
						"pin",
						"build"
					],
					"required": false
				},
				{
					"name": "vm",
					"kind": "value",
					"value": "<vm-id>",
					"required": false
				},
				{
					"name": "run",
					"kind": "value",
					"value": "<run-id>",
					"required": false
				},
				{
					"name": "csv",
					"kind": "bool",
					"required": false
				},
				{
					"name": "json",
					"kind": "bool",
					"required": false,
					"global": true
				}
			],
			"one_of": [["json", "csv"]],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "notification:list",
			"group": "account",
			"anchor": "notification-list",
			"synopsis": ["ignitify notification:list [--unread | --open] [--kind <kind>] [--limit N] [--json]"],
			"args": [],
			"flags": [
				{
					"name": "kind",
					"kind": "value",
					"value": "<kind>",
					"required": false
				},
				{
					"name": "limit",
					"kind": "value",
					"value": "N",
					"required": false
				},
				{
					"name": "unread",
					"kind": "bool",
					"required": false
				},
				{
					"name": "open",
					"kind": "bool",
					"required": false
				},
				{
					"name": "json",
					"kind": "bool",
					"required": false,
					"global": true
				}
			],
			"auth": { "key": "always" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "full"
		},
		{
			"name": "--version",
			"group": "account",
			"anchor": "version",
			"synopsis": ["ignitify --version"],
			"args": [],
			"flags": [],
			"auth": { "key": "none" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "none"
		},
		{
			"name": "help",
			"group": "account",
			"anchor": "help",
			"synopsis": ["ignitify help [<command>]"],
			"args": [{
				"name": "command",
				"required": false
			}],
			"flags": [],
			"auth": { "key": "none" },
			"confirms": false,
			"deletes": false,
			"waits": null,
			"json": "none"
		}
	]
};
//#endregion
//#region src/lib/cli-doc-tokens.ts
var c = cli_catalog_default.constants;
var num = (key) => {
	const v = c[key];
	if (typeof v !== "number") throw new Error(`[cli-docs] catalogue constant "${key}" is missing; run tools/cli-docs/generate.mjs`);
	return v;
};
var str = (key) => String(c[key] ?? "");
/** 900000 → "15 min"; 120000 → "120 s"; 500 → "0.5 s". Whole minutes only when the value divides evenly. */
var duration = (ms) => {
	if (ms >= 6e5 && ms % 6e4 === 0) return `${ms / 6e4} min`;
	const s = ms / 1e3;
	return `${Number.isInteger(s) ? s : s.toFixed(1)} s`;
};
var range = (a, b) => `${(a / 1e3).toFixed(1).replace(/\.0$/, "")} to ${duration(b)}`;
/** 10240 → "10 KiB"; 67108864 → "64 MiB". */
var size = (bytes) => bytes % 1048576 === 0 ? `${bytes / 1048576} MiB` : `${bytes / 1024} KiB`;
var env = (name) => cli_catalog_default.global.env.find((e) => e.name === name)?.name ?? name;
var files = cli_catalog_default.global.files;
/** Every `{{cli.*}}` token and its value. */
var CLI_TOKENS = Object.freeze({
	"cli.payload.limit": size(num("payload_fallback_bytes")),
	"cli.payload.bytes": String(num("payload_fallback_bytes")),
	"cli.result.limit": size(num("result_fallback_bytes")),
	"cli.upload.max": size(num("upload_max_bytes")),
	"cli.deploy.wait": duration(num("deploy_wait_ms")),
	"cli.run.wait": duration(num("run_wait_ms")),
	"cli.poll.deploy": range(num("deploy_poll_base_ms"), num("deploy_poll_max_ms")),
	"cli.poll.run": range(num("run_poll_base_ms"), num("run_poll_max_ms")),
	"cli.wait.tries": String(num("poll_error_min_tries")),
	"cli.wait.grace": duration(num("poll_error_grace_ms")),
	"cli.timeout.request": duration(num("request_timeout_ms")),
	"cli.timeout.upload": duration(num("upload_timeout_ms")),
	"cli.timeout.review": duration(num("review_timeout_ms")),
	"cli.timeout.version": duration(num("version_probe_timeout_ms")),
	"cli.result.lines": String(num("result_max_lines")),
	"cli.buildlog.lines": String(num("build_log_tail_lines")),
	"cli.report.page": String(num("task_report_page")),
	"cli.exit.interrupt": String(num("interrupt_exit_code")),
	"cli.version": str("client_version"),
	"cli.api.version": str("api_version"),
	"cli.env.key": env("IGNITIFY_API_KEY"),
	"cli.env.dir": env("IGNITIFY_TASKS_DIR"),
	"cli.dir.default": cli_catalog_default.global.env.find((e) => e.name === "IGNITIFY_TASKS_DIR")?.default ?? "",
	"cli.state.dir": files.state_dir,
	"cli.ignore.file": files.ignore_file
});
/** The matcher doc-tokens.ts uses, so a token that passes here passes there. */
var TOKEN_RE = /\{\{([a-z.]+)\}\}/g;
/**
* Replace every `{{cli.*}}` token in a yaml string. Throws on an unknown `cli.*` token, like
* `fillDocTokens` does. Tokens of other namespaces are left for doc-tokens.ts.
*/
function fillCliTokens(text, where) {
	return text.replace(TOKEN_RE, (all, key) => {
		if (!key.startsWith("cli.")) return all;
		const value = CLI_TOKENS[key];
		if (value === void 0) throw new Error(`[cli-docs] "${where}" uses unknown token {{${key}}}. Known: ${Object.keys(CLI_TOKENS).join(", ")}.`);
		return value;
	});
}
//#endregion
//#region src/lib/doc-tokens.ts
var limits = parse(config_default)?.limits;
var WORDS = [
	"zero",
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten"
];
var countWord = (n) => WORDS[n] ?? String(n);
var mono = (s) => `<span class="mono">${s}</span>`;
var kib = (bytes) => `<strong>${bytes / 1024} KiB</strong> (${bytes.toLocaleString("en-US")} bytes)`;
/** "A, B and C" */
var andList = (items) => items.length <= 1 ? items[0] ?? "" : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
var presetsOf = (id) => TIERS[id].allowed_presets ?? PRESETS.map((p) => p.name);
/** A preset's weight in units. Throws on a name the table does not have, so a renamed preset fails the build. */
var weightOf = (name) => {
	const w = PRESET_WEIGHTS[name];
	if (w === void 0) throw new Error(`[docs] preset "${name}" has no weight.`);
	return w;
};
var presetRows = PRESETS.map((p) => `<div class="tr c5"><div class="td"><span class="v">${p.name}</span></div><div class="td">${p.vcpu}</div><div class="td">${p.mem_size_mib} MiB</div><div class="td">${p.default_storage_mib} MiB</div><div class="td">${weightOf(p.name)}</div></div>`).join("\n");
var weightRows = PRESETS.map((p) => `<div class="tr c4"><div class="td"><span class="v">${p.name}</span></div><div class="td">${p.vcpu}</div><div class="td">${p.mem_size_mib} MiB</div><div class="td">${weightOf(p.name)}</div></div>`).join("\n");
var byDefault = /* @__PURE__ */ new Map();
for (const p of PRESETS) byDefault.set(p.default_storage_mib, [...byDefault.get(p.default_storage_mib) ?? [], mono(p.name)]);
var presetDefaults = andList([...byDefault.entries()].sort(([a], [b]) => a - b).map(([v, names]) => `${v} MiB on ${andList(names)}`));
var sold = new Set(TIER_IDS.flatMap(presetsOf));
var unsold = PRESETS.map((p) => p.name).filter((n) => !sold.has(n));
var presetsUnsold = unsold.length === 0 ? "" : `${andList(unsold.map(mono))} ${unsold.length === 1 ? "is" : "are"} not on any current plan.`;
var planName = (id) => TIERS[id].lifecycle === "draft" ? `${id} (on request)` : id;
var tierRows = TIER_IDS.map((id) => {
	const t = TIERS[id];
	return `<div class="tr c7">${[
		planName(id),
		t.max_tasks === null ? "no cap" : String(t.max_tasks),
		String(t.max_running_vms),
		typeof t.max_units === "number" ? String(t.max_units) : "no units limit",
		mib(t.max_storage_mib),
		duration$1(t.max_timeout_sec),
		presetsOf(id).join(" · ")
	].map((c) => `<div class="td">${c}</div>`).join("")}</div>`;
}).join("\n");
/** "free may not; starter/team/pro/enterprise may" for one capability flag. */
var gate = (flag) => {
	const yes = TIER_IDS.filter((id) => TIERS[id][flag] === true);
	return `${TIER_IDS.filter((id) => TIERS[id][flag] !== true).map(planName).join("/") || "none"} may not; ${yes.map(planName).join("/") || "none"} may`;
};
var example = PRESETS.filter((p) => sold.has(p.name)).sort((a, b) => b.default_storage_mib - a.default_storage_mib)[0];
var attemptRows = (() => {
	const byValue = /* @__PURE__ */ new Map();
	for (const id of TIER_IDS) {
		const n = TIERS[id].failure_max_attempts;
		byValue.set(n, [...byValue.get(n) ?? [], id]);
	}
	const retries = (n) => n === 1 ? "no retry" : `${n - 1} ${n === 2 ? "retry" : "retries"}`;
	return [...byValue.entries()].map(([n, ids]) => `<div class="tr c2"><div class="td">${ids.map(planName).join(" / ")}</div><div class="td">${n} (${retries(n)})</div></div>`).join("\n");
})();
var unitPlans = TIER_IDS.filter((id) => typeof TIERS[id].max_units === "number");
var noUnitPlans = TIER_IDS.filter((id) => !unitPlans.includes(id));
var unitExample = (() => {
	const id = unitPlans[0];
	if (id === void 0) throw new Error("[docs] \"How capacity works\" needs a plan with max_units; none has one.");
	const t = TIERS[id];
	const max = t.max_units;
	const running = t.max_running_vms;
	const allowed = presetsOf(id);
	const w = (name) => {
		if (!allowed.includes(name)) throw new Error(`[docs] the units example uses ${name}, which ${id} does not allow.`);
		return weightOf(name);
	};
	const units = (mix) => mix.reduce((sum, [p, n]) => sum + n * w(p), 0);
	const vms = (mix) => mix.reduce((sum, [, n]) => sum + n, 0);
	const label = (mix) => mix.map(([p, n]) => `${n} × ${mono(p)}`).join(" + ");
	const verdict = (mix, next) => vms(mix) + 1 > running ? "concurrent-run-quota" : units(mix) + w(next) > max ? "run-unit-quota" : "starts";
	const light = UNIT_BASE_PRESET_NAME;
	const heavy = "cpu.large";
	const big = "mem.xlarge";
	const small = "std.small";
	const fits = "std.large";
	const refused = "std.xlarge";
	if (max % w(heavy) !== 0) throw new Error(`[docs] the units example needs ${heavy} to fill ${max} units exactly.`);
	const mixed = [[big, 7], [small, 4]];
	const free = max - units(mixed);
	const html = [
		{
			mix: [[light, running]],
			next: light,
			want: "concurrent-run-quota",
			why: "The running-VM limit is full. Units are still free."
		},
		{
			mix: [[heavy, max / w(heavy)]],
			next: light,
			want: "run-unit-quota",
			why: "The units are full. VMs are still free."
		},
		{
			mix: mixed,
			next: fits,
			want: "starts",
			why: `It fits: ${w(fits)} units are needed and ${free} are free.`
		},
		{
			mix: mixed,
			next: refused,
			want: "run-unit-quota",
			why: `${w(refused)} units are needed and only ${free} are free.`
		}
	].map((r) => {
		const got = verdict(r.mix, r.next);
		if (got !== r.want) throw new Error(`[docs] units example row "${label(r.mix)}" + ${r.next}: expected ${r.want}, got ${got}.`);
		const result = got === "starts" ? `<strong>Starts.</strong> ${r.why}` : `<strong>429</strong> ${mono(got)}. ${r.why}`;
		return `<div class="tr c5">${[
			label(r.mix),
			`${vms(r.mix)} / ${running}`,
			`${units(r.mix)} / ${max}`,
			`${mono(r.next)} (${w(r.next)})`,
			result
		].map((c) => `<div class="td">${c}</div>`).join("")}</div>`;
	}).join("\n");
	const shown = PRESETS.map((p) => p.name).filter((n) => allowed.includes(n));
	const pad = Math.max(...shown.map((p) => p.length));
	const weightsText = shown.map((p) => `${p.padEnd(pad)}  ${w(p)}`).join("\n");
	return {
		id,
		max,
		running,
		html,
		used: units(mixed),
		vms: vms(mixed),
		free,
		refused,
		weightsText,
		count: shown.length
	};
})();
var TOKENS = {
	...CLI_TOKENS,
	"presets.count": countWord(PRESETS.length),
	"presets.rows": presetRows,
	"presets.defaults": presetDefaults,
	"presets.defaults.range": `${Math.min(...PRESETS.map((p) => p.default_storage_mib))} to ${Math.max(...PRESETS.map((p) => p.default_storage_mib))} MiB`,
	"presets.unsold": presetsUnsold,
	"units.weights.rows": weightRows,
	"units.base": UNIT_BASE_PRESET_NAME,
	"units.plans": andList(unitPlans.map(planName)) || "none",
	"units.plans.none": andList(noUnitPlans.map(planName)) || "none",
	"units.example.plan": unitExample.id,
	"units.example.max": String(unitExample.max),
	"units.example.running": String(unitExample.running),
	"units.example.rows": unitExample.html,
	"units.example.used": String(unitExample.used),
	"units.example.vms": String(unitExample.vms),
	"units.example.free": String(unitExample.free),
	"units.example.refused": unitExample.refused,
	"units.example.refused.weight": String(weightOf(unitExample.refused)),
	"units.example.weights": unitExample.weightsText,
	"units.example.count": String(unitExample.count),
	"tiers.rows": tierRows,
	"tiers.attempts.rows": attemptRows,
	"tiers.gate.pin": gate("may_pin"),
	"tiers.gate.egress": gate("may_use_egress"),
	"tiers.gate.ingress": gate("may_use_ingress"),
	"tiers.starter.running": String(TIERS.starter.max_running_vms),
	"tiers.keys": andList(TIER_IDS.map((id) => {
		const max = TIERS[id].max_api_keys;
		return `${planName(id)} ${max === null ? "unlimited" : String(max)}`;
	})),
	"limits.egress.max": String(32),
	"limits.port.min": String(INBOUND_PORT_MIN),
	"limits.port.max": String(INBOUND_PORT_MAX),
	"limits.slug.min": String(1),
	"limits.slug.max": String(63),
	"limits.package.name.min": String(2),
	"limits.package.name.max": String(64),
	"limits.package.count": String(64),
	"limits.secret.min": String(32),
	"limits.payload": kib(limits.max_payload_bytes),
	"limits.result": kib(limits.max_result_bytes),
	"limits.payload.short": `${limits.max_payload_bytes / 1024} KiB`,
	"limits.result.short": `${limits.max_result_bytes / 1024} KiB`,
	"presets.example.name": example.name,
	"presets.example.default": String(example.default_storage_mib)
};
/** Replace every `{{token}}` in a docs body. Throws on an unknown token. */
function fillDocTokens(body, page) {
	return body.replace(/\{\{([a-z.]+)\}\}/g, (_all, key) => {
		const value = TOKENS[key];
		if (value === void 0) throw new Error(`[docs] "${page}" uses unknown token {{${key}}}. Known: ${Object.keys(TOKENS).join(", ")}.`);
		return value;
	});
}
//#endregion
//#region src/components/DocNav.astro
createAstro("https://ignitify.dev");
var $$DocNav = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DocNav;
	const { groups, current } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<nav class="docnav" id="docnav" aria-label="Docs" data-open="false"><div class="docnav-head"><span>Docs menu</span><button type="button" class="docnav-close" data-docmenu-close aria-label="Close the docs menu">Close</button></div>${groups.map((group) => renderTemplate`<details class="docgrp"${addAttribute(group.entries.some((e) => e.id === current), "open")}><summary><span class="docgrp-t">${group.name}</span></summary><ul>${group.entries.map((entry) => renderTemplate`<li>${entry.planned ? renderTemplate`<span class="doc-soon" aria-disabled="true">${entry.title}<span class="doc-soon-tag">soon</span></span>` : renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.id === current ? "on" : void 0, "class")}${addAttribute(entry.id === current ? "page" : void 0, "aria-current")}>${entry.title}</a>`}</li>`)}</ul></details>`)}</nav>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/DocNav.astro", void 0);
//#endregion
//#region node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/regex.js
var regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
Object.hasOwnProperty;
/**
* Generate a slug.
*
* Does not track previously generated slugs: repeated calls with the same value
* will result in the exact same slug.
* Use the `GithubSlugger` class to get unique slugs.
*
* @param  {string} value
*   String of text to slugify
* @param  {boolean} [maintainCase=false]
*   Keep the current case, otherwise make all lowercase
* @return {string}
*   A unique slug string
*/
function slug(value, maintainCase) {
	if (typeof value !== "string") return "";
	if (!maintainCase) value = value.toLowerCase();
	return value.replace(regex, "").replace(/ /g, "-");
}
new Uint8Array([
	0,
	97,
	115,
	109,
	1,
	0,
	0,
	0,
	1,
	48,
	8,
	96,
	3,
	127,
	127,
	127,
	1,
	127,
	96,
	3,
	127,
	127,
	127,
	0,
	96,
	2,
	127,
	127,
	0,
	96,
	1,
	127,
	1,
	127,
	96,
	3,
	127,
	127,
	126,
	1,
	126,
	96,
	3,
	126,
	127,
	127,
	1,
	126,
	96,
	2,
	127,
	126,
	0,
	96,
	1,
	127,
	1,
	126,
	3,
	11,
	10,
	0,
	0,
	2,
	1,
	3,
	4,
	5,
	6,
	1,
	7,
	5,
	3,
	1,
	0,
	1,
	7,
	85,
	9,
	3,
	109,
	101,
	109,
	2,
	0,
	5,
	120,
	120,
	104,
	51,
	50,
	0,
	0,
	6,
	105,
	110,
	105,
	116,
	51,
	50,
	0,
	2,
	8,
	117,
	112,
	100,
	97,
	116,
	101,
	51,
	50,
	0,
	3,
	8,
	100,
	105,
	103,
	101,
	115,
	116,
	51,
	50,
	0,
	4,
	5,
	120,
	120,
	104,
	54,
	52,
	0,
	5,
	6,
	105,
	110,
	105,
	116,
	54,
	52,
	0,
	7,
	8,
	117,
	112,
	100,
	97,
	116,
	101,
	54,
	52,
	0,
	8,
	8,
	100,
	105,
	103,
	101,
	115,
	116,
	54,
	52,
	0,
	9,
	10,
	251,
	22,
	10,
	242,
	1,
	1,
	4,
	127,
	32,
	0,
	32,
	1,
	106,
	33,
	3,
	32,
	1,
	65,
	16,
	79,
	4,
	127,
	32,
	3,
	65,
	16,
	107,
	33,
	6,
	32,
	2,
	65,
	168,
	136,
	141,
	161,
	2,
	106,
	33,
	3,
	32,
	2,
	65,
	137,
	235,
	208,
	208,
	7,
	107,
	33,
	4,
	32,
	2,
	65,
	207,
	140,
	162,
	142,
	6,
	106,
	33,
	5,
	3,
	64,
	32,
	3,
	32,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	3,
	32,
	4,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	4,
	32,
	2,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	2,
	32,
	5,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	5,
	32,
	6,
	32,
	0,
	65,
	4,
	106,
	34,
	0,
	79,
	13,
	0,
	11,
	32,
	2,
	65,
	12,
	119,
	32,
	5,
	65,
	18,
	119,
	106,
	32,
	4,
	65,
	7,
	119,
	106,
	32,
	3,
	65,
	1,
	119,
	106,
	5,
	32,
	2,
	65,
	177,
	207,
	217,
	178,
	1,
	106,
	11,
	32,
	1,
	106,
	32,
	0,
	32,
	1,
	65,
	15,
	113,
	16,
	1,
	11,
	146,
	1,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	2,
	3,
	64,
	32,
	1,
	65,
	4,
	106,
	32,
	2,
	75,
	69,
	4,
	64,
	32,
	0,
	32,
	1,
	40,
	2,
	0,
	65,
	189,
	220,
	202,
	149,
	124,
	108,
	106,
	65,
	17,
	119,
	65,
	175,
	214,
	211,
	190,
	2,
	108,
	33,
	0,
	32,
	1,
	65,
	4,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	3,
	64,
	32,
	1,
	32,
	2,
	79,
	69,
	4,
	64,
	32,
	0,
	32,
	1,
	45,
	0,
	0,
	65,
	177,
	207,
	217,
	178,
	1,
	108,
	106,
	65,
	11,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	0,
	32,
	1,
	65,
	1,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	32,
	0,
	32,
	0,
	65,
	15,
	118,
	115,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	34,
	0,
	65,
	13,
	118,
	32,
	0,
	115,
	65,
	189,
	220,
	202,
	149,
	124,
	108,
	34,
	0,
	65,
	16,
	118,
	32,
	0,
	115,
	11,
	63,
	0,
	32,
	0,
	65,
	8,
	106,
	32,
	1,
	65,
	168,
	136,
	141,
	161,
	2,
	106,
	54,
	2,
	0,
	32,
	0,
	65,
	12,
	106,
	32,
	1,
	65,
	137,
	235,
	208,
	208,
	7,
	107,
	54,
	2,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	1,
	54,
	2,
	0,
	32,
	0,
	65,
	20,
	106,
	32,
	1,
	65,
	207,
	140,
	162,
	142,
	6,
	106,
	54,
	2,
	0,
	11,
	195,
	4,
	1,
	6,
	127,
	32,
	1,
	32,
	2,
	106,
	33,
	6,
	32,
	0,
	65,
	24,
	106,
	33,
	4,
	32,
	0,
	65,
	40,
	106,
	40,
	2,
	0,
	33,
	3,
	32,
	0,
	32,
	0,
	40,
	2,
	0,
	32,
	2,
	106,
	54,
	2,
	0,
	32,
	0,
	65,
	4,
	106,
	34,
	5,
	32,
	5,
	40,
	2,
	0,
	32,
	2,
	65,
	16,
	79,
	32,
	0,
	40,
	2,
	0,
	65,
	16,
	79,
	114,
	114,
	54,
	2,
	0,
	32,
	2,
	32,
	3,
	106,
	65,
	16,
	73,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	32,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	40,
	106,
	32,
	2,
	32,
	3,
	106,
	54,
	2,
	0,
	15,
	11,
	32,
	3,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	65,
	16,
	32,
	3,
	107,
	34,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	8,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	12,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	65,
	4,
	106,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	16,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	65,
	8,
	106,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	20,
	106,
	34,
	3,
	32,
	3,
	40,
	2,
	0,
	32,
	4,
	65,
	12,
	106,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	54,
	2,
	0,
	32,
	0,
	65,
	40,
	106,
	65,
	0,
	54,
	2,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	1,
	11,
	32,
	1,
	32,
	6,
	65,
	16,
	107,
	77,
	4,
	64,
	32,
	6,
	65,
	16,
	107,
	33,
	8,
	32,
	0,
	65,
	8,
	106,
	40,
	2,
	0,
	33,
	2,
	32,
	0,
	65,
	12,
	106,
	40,
	2,
	0,
	33,
	3,
	32,
	0,
	65,
	16,
	106,
	40,
	2,
	0,
	33,
	5,
	32,
	0,
	65,
	20,
	106,
	40,
	2,
	0,
	33,
	7,
	3,
	64,
	32,
	2,
	32,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	2,
	32,
	3,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	3,
	32,
	5,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	5,
	32,
	7,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	40,
	2,
	0,
	65,
	247,
	148,
	175,
	175,
	120,
	108,
	106,
	65,
	13,
	119,
	65,
	177,
	243,
	221,
	241,
	121,
	108,
	33,
	7,
	32,
	8,
	32,
	1,
	65,
	4,
	106,
	34,
	1,
	79,
	13,
	0,
	11,
	32,
	0,
	65,
	8,
	106,
	32,
	2,
	54,
	2,
	0,
	32,
	0,
	65,
	12,
	106,
	32,
	3,
	54,
	2,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	5,
	54,
	2,
	0,
	32,
	0,
	65,
	20,
	106,
	32,
	7,
	54,
	2,
	0,
	11,
	32,
	1,
	32,
	6,
	73,
	4,
	64,
	32,
	4,
	32,
	1,
	32,
	6,
	32,
	1,
	107,
	34,
	1,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	40,
	106,
	32,
	1,
	54,
	2,
	0,
	11,
	11,
	97,
	1,
	1,
	127,
	32,
	0,
	65,
	16,
	106,
	40,
	2,
	0,
	33,
	1,
	32,
	0,
	65,
	4,
	106,
	40,
	2,
	0,
	4,
	127,
	32,
	1,
	65,
	12,
	119,
	32,
	0,
	65,
	20,
	106,
	40,
	2,
	0,
	65,
	18,
	119,
	106,
	32,
	0,
	65,
	12,
	106,
	40,
	2,
	0,
	65,
	7,
	119,
	106,
	32,
	0,
	65,
	8,
	106,
	40,
	2,
	0,
	65,
	1,
	119,
	106,
	5,
	32,
	1,
	65,
	177,
	207,
	217,
	178,
	1,
	106,
	11,
	32,
	0,
	40,
	2,
	0,
	106,
	32,
	0,
	65,
	24,
	106,
	32,
	0,
	65,
	40,
	106,
	40,
	2,
	0,
	16,
	1,
	11,
	255,
	3,
	2,
	3,
	126,
	1,
	127,
	32,
	0,
	32,
	1,
	106,
	33,
	6,
	32,
	1,
	65,
	32,
	79,
	4,
	126,
	32,
	6,
	65,
	32,
	107,
	33,
	6,
	32,
	2,
	66,
	214,
	235,
	130,
	238,
	234,
	253,
	137,
	245,
	224,
	0,
	124,
	33,
	3,
	32,
	2,
	66,
	177,
	169,
	172,
	193,
	173,
	184,
	212,
	166,
	61,
	125,
	33,
	4,
	32,
	2,
	66,
	249,
	234,
	208,
	208,
	231,
	201,
	161,
	228,
	225,
	0,
	124,
	33,
	5,
	3,
	64,
	32,
	3,
	32,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	3,
	32,
	4,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	4,
	32,
	2,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	2,
	32,
	5,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	5,
	32,
	6,
	32,
	0,
	65,
	8,
	106,
	34,
	0,
	79,
	13,
	0,
	11,
	32,
	2,
	66,
	12,
	137,
	32,
	5,
	66,
	18,
	137,
	124,
	32,
	4,
	66,
	7,
	137,
	124,
	32,
	3,
	66,
	1,
	137,
	124,
	32,
	3,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	4,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	2,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	5,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	5,
	32,
	2,
	66,
	197,
	207,
	217,
	178,
	241,
	229,
	186,
	234,
	39,
	124,
	11,
	32,
	1,
	173,
	124,
	32,
	0,
	32,
	1,
	65,
	31,
	113,
	16,
	6,
	11,
	134,
	2,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	2,
	3,
	64,
	32,
	2,
	32,
	1,
	65,
	8,
	106,
	79,
	4,
	64,
	32,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	32,
	0,
	133,
	66,
	27,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	33,
	0,
	32,
	1,
	65,
	8,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	32,
	1,
	65,
	4,
	106,
	32,
	2,
	77,
	4,
	64,
	32,
	0,
	32,
	1,
	53,
	2,
	0,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	23,
	137,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	249,
	243,
	221,
	241,
	153,
	246,
	153,
	171,
	22,
	124,
	33,
	0,
	32,
	1,
	65,
	4,
	106,
	33,
	1,
	11,
	3,
	64,
	32,
	1,
	32,
	2,
	73,
	4,
	64,
	32,
	0,
	32,
	1,
	49,
	0,
	0,
	66,
	197,
	207,
	217,
	178,
	241,
	229,
	186,
	234,
	39,
	126,
	133,
	66,
	11,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	0,
	32,
	1,
	65,
	1,
	106,
	33,
	1,
	12,
	1,
	11,
	11,
	32,
	0,
	32,
	0,
	66,
	33,
	136,
	133,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	34,
	0,
	32,
	0,
	66,
	29,
	136,
	133,
	66,
	249,
	243,
	221,
	241,
	153,
	246,
	153,
	171,
	22,
	126,
	34,
	0,
	32,
	0,
	66,
	32,
	136,
	133,
	11,
	77,
	0,
	32,
	0,
	65,
	8,
	106,
	32,
	1,
	66,
	214,
	235,
	130,
	238,
	234,
	253,
	137,
	245,
	224,
	0,
	124,
	55,
	3,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	1,
	66,
	177,
	169,
	172,
	193,
	173,
	184,
	212,
	166,
	61,
	125,
	55,
	3,
	0,
	32,
	0,
	65,
	24,
	106,
	32,
	1,
	55,
	3,
	0,
	32,
	0,
	65,
	32,
	106,
	32,
	1,
	66,
	249,
	234,
	208,
	208,
	231,
	201,
	161,
	228,
	225,
	0,
	124,
	55,
	3,
	0,
	11,
	244,
	4,
	2,
	3,
	127,
	4,
	126,
	32,
	1,
	32,
	2,
	106,
	33,
	5,
	32,
	0,
	65,
	40,
	106,
	33,
	4,
	32,
	0,
	65,
	200,
	0,
	106,
	40,
	2,
	0,
	33,
	3,
	32,
	0,
	32,
	0,
	41,
	3,
	0,
	32,
	2,
	173,
	124,
	55,
	3,
	0,
	32,
	2,
	32,
	3,
	106,
	65,
	32,
	73,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	32,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	200,
	0,
	106,
	32,
	2,
	32,
	3,
	106,
	54,
	2,
	0,
	15,
	11,
	32,
	3,
	4,
	64,
	32,
	3,
	32,
	4,
	106,
	32,
	1,
	65,
	32,
	32,
	3,
	107,
	34,
	2,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	8,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	16,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	65,
	8,
	106,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	24,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	65,
	16,
	106,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	32,
	106,
	34,
	3,
	32,
	3,
	41,
	3,
	0,
	32,
	4,
	65,
	24,
	106,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	55,
	3,
	0,
	32,
	0,
	65,
	200,
	0,
	106,
	65,
	0,
	54,
	2,
	0,
	32,
	1,
	32,
	2,
	106,
	33,
	1,
	11,
	32,
	1,
	65,
	32,
	106,
	32,
	5,
	77,
	4,
	64,
	32,
	5,
	65,
	32,
	107,
	33,
	2,
	32,
	0,
	65,
	8,
	106,
	41,
	3,
	0,
	33,
	6,
	32,
	0,
	65,
	16,
	106,
	41,
	3,
	0,
	33,
	7,
	32,
	0,
	65,
	24,
	106,
	41,
	3,
	0,
	33,
	8,
	32,
	0,
	65,
	32,
	106,
	41,
	3,
	0,
	33,
	9,
	3,
	64,
	32,
	6,
	32,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	6,
	32,
	7,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	7,
	32,
	8,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	8,
	32,
	9,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	41,
	3,
	0,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	124,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	33,
	9,
	32,
	2,
	32,
	1,
	65,
	8,
	106,
	34,
	1,
	79,
	13,
	0,
	11,
	32,
	0,
	65,
	8,
	106,
	32,
	6,
	55,
	3,
	0,
	32,
	0,
	65,
	16,
	106,
	32,
	7,
	55,
	3,
	0,
	32,
	0,
	65,
	24,
	106,
	32,
	8,
	55,
	3,
	0,
	32,
	0,
	65,
	32,
	106,
	32,
	9,
	55,
	3,
	0,
	11,
	32,
	1,
	32,
	5,
	73,
	4,
	64,
	32,
	4,
	32,
	1,
	32,
	5,
	32,
	1,
	107,
	34,
	1,
	252,
	10,
	0,
	0,
	32,
	0,
	65,
	200,
	0,
	106,
	32,
	1,
	54,
	2,
	0,
	11,
	11,
	188,
	2,
	1,
	5,
	126,
	32,
	0,
	65,
	24,
	106,
	41,
	3,
	0,
	33,
	1,
	32,
	0,
	41,
	3,
	0,
	34,
	2,
	66,
	32,
	90,
	4,
	126,
	32,
	0,
	65,
	8,
	106,
	41,
	3,
	0,
	34,
	3,
	66,
	1,
	137,
	32,
	0,
	65,
	16,
	106,
	41,
	3,
	0,
	34,
	4,
	66,
	7,
	137,
	124,
	32,
	1,
	66,
	12,
	137,
	32,
	0,
	65,
	32,
	106,
	41,
	3,
	0,
	34,
	5,
	66,
	18,
	137,
	124,
	124,
	32,
	3,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	4,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	1,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	32,
	5,
	66,
	207,
	214,
	211,
	190,
	210,
	199,
	171,
	217,
	66,
	126,
	66,
	31,
	137,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	133,
	66,
	135,
	149,
	175,
	175,
	152,
	182,
	222,
	155,
	158,
	127,
	126,
	66,
	157,
	163,
	181,
	234,
	131,
	177,
	141,
	138,
	250,
	0,
	125,
	5,
	32,
	1,
	66,
	197,
	207,
	217,
	178,
	241,
	229,
	186,
	234,
	39,
	124,
	11,
	32,
	2,
	124,
	32,
	0,
	65,
	40,
	106,
	32,
	2,
	66,
	31,
	131,
	167,
	16,
	6,
	11
]);
//#endregion
//#region node_modules/.pnpm/astro@7.2.0_@emnapi+core@1.11.1_@emnapi+runtime@1.11.3_yaml@2.9.1/node_modules/astro/dist/core/viteUtils.js
var isWindows = typeof process !== "undefined" && process.platform === "win32";
function normalizePath(id) {
	return path.posix.normalize(isWindows ? slash(id) : id);
}
//#endregion
//#region node_modules/.pnpm/astro@7.2.0_@emnapi+core@1.11.1_@emnapi+runtime@1.11.3_yaml@2.9.1/node_modules/astro/dist/content/loaders/glob.js
function generateIdDefault({ entry, base, data }, isLegacy) {
	if (data.slug) return data.slug;
	const entryURL = new URL(encodeURI(entry), base);
	if (isLegacy) {
		const { id } = getContentEntryIdAndSlug({
			entry: entryURL,
			contentDir: base,
			collection: ""
		});
		return id;
	}
	const { slug } = getContentEntryIdAndSlug({
		entry: entryURL,
		contentDir: base,
		collection: ""
	});
	return slug;
}
function checkPrefix(pattern, prefix) {
	if (Array.isArray(pattern)) return pattern.some((p) => p.startsWith(prefix));
	return pattern.startsWith(prefix);
}
var secretLegacyFlag = /* @__PURE__ */ Symbol("astro.legacy-glob");
function glob$1(globOptions) {
	if (checkPrefix(globOptions.pattern, "../")) throw new Error("Glob patterns cannot start with `../`. Set the `base` option to a parent directory instead.");
	if (checkPrefix(globOptions.pattern, "/")) throw new Error("Glob patterns cannot start with `/`. Set the `base` option to a parent directory or use a relative path instead.");
	const isLegacy = !!globOptions[secretLegacyFlag];
	const generateId = globOptions?.generateId ?? ((opts) => generateIdDefault(opts, isLegacy));
	const fileToIdMap = /* @__PURE__ */ new Map();
	return {
		name: "glob-loader",
		load: async ({ config, collection, logger, watcher, parseData, store, generateDigest, entryTypes }) => {
			const renderFunctionByContentType = /* @__PURE__ */ new WeakMap();
			const untouchedEntries = new Set(store.keys());
			async function syncData(entry, base, entryType, oldId) {
				if (!entryType) {
					logger.warn(`No entry type found for ${entry}`);
					return;
				}
				const fileUrl = new URL(encodeURI(entry), base);
				const contents = await promises.readFile(fileUrl, "utf-8").catch((err) => {
					logger.error(`Error reading ${entry}: ${err.message}`);
				});
				if (!contents && contents !== "") {
					logger.warn(`No contents found for ${entry}`);
					return;
				}
				const { body, data } = await entryType.getEntryInfo({
					contents,
					fileUrl
				});
				const id = generateId({
					entry,
					base,
					data
				});
				if (oldId && oldId !== id) store.delete(oldId);
				untouchedEntries.delete(id);
				const existingEntry = store.get(id);
				const digest = generateDigest(contents);
				const filePath2 = fileURLToPath(fileUrl);
				if (existingEntry && existingEntry.digest === digest && existingEntry.filePath) {
					if (existingEntry.deferredRender) store.addModuleImport(existingEntry.filePath);
					if (existingEntry.assetImports?.length) store.addAssetImports(existingEntry.assetImports, existingEntry.filePath);
					fileToIdMap.set(filePath2, id);
					return;
				}
				const relativePath2 = posixRelative(fileURLToPath(config.root), filePath2);
				const parsedData = await parseData({
					id,
					data,
					filePath: filePath2
				});
				if (existingEntry && existingEntry.filePath && existingEntry.filePath !== relativePath2) {
					const oldFilePath = new URL(existingEntry.filePath, config.root);
					if (existsSync(oldFilePath)) logger.warn(`Duplicate id "${id}" found in ${filePath2}. Later items with the same id will overwrite earlier ones.`);
				}
				if (entryType.getRenderFunction && !globOptions.deferRender) {
					let render = renderFunctionByContentType.get(entryType);
					if (!render) {
						render = await entryType.getRenderFunction(config);
						renderFunctionByContentType.set(entryType, render);
					}
					let rendered = void 0;
					try {
						rendered = await render?.({
							id,
							data,
							body,
							filePath: filePath2,
							digest
						});
					} catch (error) {
						logger.error(`Error rendering ${entry}: ${error.message}`);
					}
					store.set({
						id,
						data: parsedData,
						body: globOptions.retainBody === false ? void 0 : body,
						filePath: relativePath2,
						digest,
						rendered,
						assetImports: rendered?.metadata?.imagePaths
					});
				} else if (entryType.getRenderFunction && globOptions.deferRender || "contentModuleTypes" in entryType) store.set({
					id,
					data: parsedData,
					body: globOptions.retainBody === false ? void 0 : body,
					filePath: relativePath2,
					digest,
					deferredRender: true
				});
				else store.set({
					id,
					data: parsedData,
					body: globOptions.retainBody === false ? void 0 : body,
					filePath: relativePath2,
					digest
				});
				fileToIdMap.set(filePath2, id);
			}
			let baseDir;
			if (isLegacy && !globOptions.base) baseDir = new URL(`./src/content/${collection}`, config.root);
			else baseDir = globOptions.base ? new URL(globOptions.base, config.root) : config.root;
			if (!baseDir.pathname.endsWith("/")) baseDir.pathname = `${baseDir.pathname}/`;
			const filePath = fileURLToPath(baseDir);
			const relativePath = relative(fileURLToPath(config.root), filePath);
			const exists = existsSync(baseDir);
			if (!exists) logger.warn(`The base directory "${fileURLToPath(baseDir)}" does not exist.`);
			const files = await glob(globOptions.pattern, {
				cwd: fileURLToPath(baseDir),
				expandDirectories: false
			});
			if (exists && files.length === 0) {
				logger.warn(`No files found matching "${globOptions.pattern}" in directory "${relativePath}"`);
				return;
			}
			function configForFile(file) {
				const ext = file.split(".").at(-1);
				if (!ext) {
					logger.warn(`No extension found for ${file}`);
					return;
				}
				return entryTypes.get(`.${ext}`);
			}
			const limit = pLimit(10);
			const skippedFiles = [];
			const contentDir = new URL("content/", config.srcDir);
			const configFiles = new Set([
				"config.js",
				"config.ts",
				"config.mjs"
			].map((file) => new URL(file, contentDir).href));
			function isConfigFile(file) {
				const fileUrl = new URL(file, baseDir);
				return configFiles.has(fileUrl.href);
			}
			await Promise.all(files.map((entry) => {
				if (isConfigFile(entry)) return;
				return limit(async () => {
					const entryType = configForFile(entry);
					await syncData(entry, baseDir, entryType);
				});
			}));
			const skipCount = skippedFiles.length;
			if (skipCount > 0) {
				const patternList = Array.isArray(globOptions.pattern) ? globOptions.pattern.join(", ") : globOptions.pattern;
				logger.warn(`The glob() loader cannot be used for files in ${s.bold("src/content")} when legacy mode is enabled.`);
				if (skipCount > 10) logger.warn(`Skipped ${s.green(skippedFiles.length)} files that matched ${s.green(patternList)}.`);
				else {
					logger.warn(`Skipped the following files that matched ${s.green(patternList)}:`);
					skippedFiles.forEach((file) => logger.warn(`\u2022 ${s.green(file)}`));
				}
			}
			untouchedEntries.forEach((id) => store.delete(id));
			if (!watcher) return;
			watcher.add(filePath);
			const patterns = Array.isArray(globOptions.pattern) ? globOptions.pattern : [globOptions.pattern];
			const positivePatterns = patterns.filter((p) => !p.startsWith("!"));
			const negationPatterns = patterns.filter((p) => p.startsWith("!")).map((p) => p.slice(1));
			const matchesGlob = (entry) => !entry.startsWith("../") && picomatch.isMatch(entry, positivePatterns, { ignore: negationPatterns.length > 0 ? negationPatterns : void 0 });
			const basePath = fileURLToPath(baseDir);
			async function onChange(changedPath) {
				const entry = posixRelative(basePath, changedPath);
				if (!matchesGlob(entry)) return;
				const entryType = configForFile(changedPath);
				const baseUrl = pathToFileURL(basePath);
				const oldId = fileToIdMap.get(changedPath);
				try {
					await syncData(entry, baseUrl, entryType, oldId);
					logger.info(`Reloaded data from ${s.green(entry)}`);
				} catch (e) {
					logger.error(`Failed to reload ${entry}: ${e.message}`);
				}
			}
			watcher.on("change", onChange);
			watcher.on("add", onChange);
			watcher.on("unlink", async (deletedPath) => {
				const entry = posixRelative(basePath, deletedPath);
				if (!matchesGlob(entry)) return;
				const id = fileToIdMap.get(deletedPath);
				if (id) {
					store.delete(id);
					fileToIdMap.delete(deletedPath);
				}
			});
		}
	};
}
//#endregion
//#region node_modules/.pnpm/astro@7.2.0_@emnapi+core@1.11.1_@emnapi+runtime@1.11.3_yaml@2.9.1/node_modules/astro/dist/content/utils.js
var entryTypeSchema = object({ id: string({ error: "Content entry `id` must be a string" }) }).passthrough();
union([array(entryTypeSchema), record(string(), object({ id: string({ error: "Content entry `id` must be a string" }).optional() }).passthrough())]);
var collectionConfigParser = union([
	object({
		type: literal("content").optional(),
		schema: any().optional(),
		loader: never().optional()
	}),
	object({
		type: literal("data").optional(),
		schema: any().optional(),
		loader: never().optional()
	}),
	object({
		type: literal(CONTENT_LAYER_TYPE),
		schema: any().optional(),
		loader: union([_function(), object({
			name: string(),
			load: _function({
				input: [custom()],
				output: custom()
			}),
			schema: any().transform((v) => {
				if (typeof v === "function") {
					console.warn(`Your loader's schema is defined using a function. This is no longer supported and the schema will be ignored. Please update your loader to use the \`createSchema()\` utility instead, or report this to the loader author. In a future major version, this will cause the loader to break entirely.`);
					return;
				}
				return v;
			}).superRefine((v, ctx) => {
				if (v !== void 0 && !("_zod" in v)) {
					ctx.addIssue({
						code: ZodIssueCode.custom,
						message: "Invalid Zod schema"
					});
					return NEVER;
				}
			}).optional(),
			createSchema: _function({
				input: [],
				output: promise(object({
					schema: custom((v) => "_zod" in v),
					types: string()
				}))
			}).optional()
		})])
	}),
	object({
		type: literal(LIVE_CONTENT_TYPE).optional().default(LIVE_CONTENT_TYPE),
		schema: any().optional(),
		loader: _function()
	})
]);
object({ collections: record(string(), collectionConfigParser) });
function getContentEntryIdAndSlug({ entry, contentDir, collection }) {
	const relativePath = getRelativeEntryPath(entry, collection, contentDir);
	const slug$1 = relativePath.replace(new RegExp(path.extname(relativePath) + "$"), "").split(path.sep).map((segment) => slug(segment)).join("/").replace(/\/index$/, "");
	return {
		id: normalizePath(relativePath),
		slug: slug$1
	};
}
function getRelativeEntryPath(entry, collection, contentDir) {
	const relativeToContent = path.relative(fileURLToPath(contentDir), fileURLToPath(entry));
	return path.relative(collection, relativeToContent);
}
function posixifyPath(filePath) {
	return filePath.split(path.sep).join("/");
}
function posixRelative(from, to) {
	return posixifyPath(path.relative(from, to));
}
//#endregion
//#region src/lib/cli-docs-schema.ts
var flagFact = strictObject({
	name: string().min(1),
	kind: _enum(["bool", "value"]),
	/** The value placeholder as USAGE writes it: `N`, `<iso>`, `queue|reject`. Only for a value flag. */
	value: string().optional(),
	choices: array(string()).optional(),
	/** The one-letter form (`y` for `--yes`). */
	short: string().length(1).optional(),
	/** Text, never a number typed by hand: a numeric default would be a token. */
	default: string().optional(),
	required: boolean(),
	/** True for `--json`: a global flag that this command's synopsis names. */
	global: boolean().optional()
});
var authFact = strictObject({
	/** always: needs IGNITIFY_API_KEY · none: never · optional: uses it when present · offline: no key unless `key_needed_when` · */
	key: _enum([
		"always",
		"none",
		"optional",
		"offline"
	]),
	/** Flags that make an `always` command run without a key (`--local`, `--check`). */
	offline_when: array(string()).optional(),
	/** Flags that make an `offline` command need a key (`--review-packages`). */
	key_needed_when: array(string()).optional()
});
var waitsFact = strictObject({
	for: _enum(["build", "run"]),
	/** Name of a key in `constants`. */
	budget: string(),
	skipped_by: string().nullable().optional(),
	only_with: string().optional()
});
var commandFact = strictObject({
	name: string().min(1),
	group: string().min(1),
	anchor: string().min(1),
	synopsis: array(string().min(1)).min(1),
	args: array(strictObject({
		name: string(),
		required: boolean()
	})),
	flags: array(flagFact),
	one_of: array(array(string()).min(2)).optional(),
	auth: authFact,
	confirms: boolean(),
	force_unlocks_refusal: boolean().optional(),
	deletes: boolean(),
	waits: waitsFact.nullable(),
	json: _enum([
		"full",
		"partial",
		"none"
	])
});
var cliCatalogSchema = strictObject({
	generated_by: string(),
	schema_version: literal(1),
	constants: record(string(), union([number(), string()])),
	global: strictObject({
		flags: array(strictObject({
			name: string(),
			kind: _enum(["bool", "value"]),
			short: string().optional()
		})),
		short_flags: array(strictObject({
			short: string().length(1),
			long: string(),
			anywhere: boolean()
		})),
		env: array(strictObject({
			name: string(),
			required: boolean(),
			default: string().optional()
		})),
		exit_codes: array(number()),
		files: strictObject({
			ignore_file: string(),
			state_dir: string()
		})
	}),
	groups: array(strictObject({
		id: string(),
		title: string(),
		commands: array(string()).min(1)
	})),
	commands: array(commandFact).min(1)
});
/**
* One example: the command, and what the terminal shows. `kind` is the tab (Output, JSON or Error).
* `text` is plain text; for `json` it is one JSON document, checked by the build gate.
*/
var cliSampleSchema = strictObject({
	kind: _enum([
		"output",
		"json",
		"error"
	]),
	/** A short label when a command has more than one sample of a kind. */
	label: string().optional(),
	command: string().min(1),
	text: string().min(1),
	/** Set only on a sample that shows a refused (unknown) flag, so the flag check skips it. */
	bad_flag: boolean().optional(),
	/** `false` on a sample typed by hand because the real CLI and fleet cannot produce it; every other sample is captured (tools/cli-docs/capture.mjs). */
	captured: boolean().optional()
});
/** `<command>.yaml`. Rules (§1.1) are enforced by website/scripts/check-cli-docs.mjs, not by the schema. */
var cliDocSchema = strictObject({
	/** The command, exactly as the catalogue spells it: `task:run`, `--version`, `help`. */
	command: string().min(1),
	/** One line, 15 words or fewer. */
	purpose: string().min(1),
	/** Positional arguments: name (from the synopsis, no brackets) -> one short line. */
	args: record(string(), string().min(1)).default({}),
	/** Every public flag of the command in the catalogue: name without `--` -> one short line. */
	flags: record(string(), string().min(1)).default({}),
	/** What happens, in user words. Only for commands with side effects. At most 4. */
	steps: array(string().min(1)).max(4).default([]),
	/** Callouts: one sentence each, at most 2. */
	notes: array(string().min(1)).max(2).default([]),
	/** Command names to use next. */
	related: array(string().min(1)).default([]),
	samples: array(cliSampleSchema).default([])
});
var section = strictObject({
	/** One of the ids the Overview page needs (see REQUIRED_GLOBAL_SECTIONS). */
	id: string().min(1),
	title: string().min(1),
	/** Paragraphs: 3 sentences at most each. */
	paragraphs: array(string().min(1)).default([]),
	/** A two-column table: a name or code in the first column, one line in the second. */
	rows: array(strictObject({
		name: string().min(1),
		text: string().min(1)
	})).default([]),
	samples: array(cliSampleSchema).default([])
});
/** `global.yaml`: the CLI Overview page. */
var cliGlobalSchema = strictObject({
	title: string().min(1),
	/** One line under the title. */
	lede: string().min(1),
	/** Group id (as in the catalogue) -> one line for the top of that group's page. */
	groups: record(string(), string().min(1)),
	sections: array(section).min(1)
});
/** Parse the text of global.yaml. The caller passes the YAML parser: `parse` from the `yaml` package. */
function parseCliGlobal(raw, parse) {
	return cliGlobalSchema.parse(parse(raw));
}
//#endregion
//#region src/content.config.ts
/** Sidebar groups, in the order they appear. A page names one of these; a typo
*  is a build error rather than a link that quietly lands in no group. */
/** A tier name on the commercial ladder (`config/product/ladder.json`), checked at build. */
var onLadder = string().refine((v) => ladder_default.includes(v), { message: `not on the ladder (${ladder_default.join(", ")})` });
var DOC_GROUPS = [
	"Start",
	"Guides",
	"Concepts",
	"Terraform",
	"CLI reference",
	"Reference"
];
defineCollection({
	loader: glob$1({
		pattern: "**/*.yaml",
		base: "./src/content/docs"
	}),
	schema: object({
		/** <h1> and the sidebar label. */
		title: string().min(1),
		/** Which sidebar group this page belongs to. */
		group: _enum(DOC_GROUPS),
		/** Position within the group. Sparse integers are fine. */
		order: number().int(),
		/** <title>/<meta description>. Required — a docs page with no description
		*  is a search result with nothing under the link. */
		description: string().min(1),
		/** Body file, relative to src/content/docs/. Empty for a planned page or a page
		*  with its own `route` — which is why the three are checked against each other below. */
		body: string().default(""),
		/** A page drawn by its OWN route file, not by `docs/[...slug].astro`. The sidebar
		*  links here. Used by the CLI group pages. */
		route: string().startsWith("/docs/").optional(),
		/** A page listed in the sidebar but not yet written. Renders as a disabled
		*  entry instead of a link — which is what the old sidebar SHOULD have done
		*  with its 16 entries, all of which pointed at /docs and went nowhere. */
		planned: boolean().optional()
	}).refine((d) => [
		d.body.length > 0,
		d.planned === true,
		d.route !== void 0
	].filter(Boolean).length === 1, { message: "a docs entry must have exactly one of: a body, a route, or planned:true" })
});
defineCollection({
	loader: glob$1({
		pattern: "**/*.md",
		base: "./src/content/blog"
	}),
	schema: object({
		title: string().min(1),
		description: string().min(1),
		/** Publication date. A post with no date cannot be ordered. */
		date: date(),
		/** Hide from the index without deleting the file. */
		draft: boolean().optional()
	})
});
defineCollection({
	loader: glob$1({
		pattern: "*.yaml",
		base: "../config/product/plans"
	}),
	schema: object({
		tier: onLadder,
		period: _enum(["month", "year"]),
		/** Every supported currency, always present. `null` = not yet priced. */
		prices: object({
			SEK: number().nullable(),
			EUR: number().nullable(),
			USD: number().nullable()
		})
	})
});
defineCollection({
	loader: glob$1({
		pattern: "*.yaml",
		base: "./src/content/pricing"
	}),
	schema: object({
		plan_id: onLadder,
		display_name: string().min(1),
		/** The stencilled rung numeral. Encodes ladder position — DESIGN-NOTES §6:
		*  numbering must encode something true. */
		rung: string().regex(/^\d{2}$/),
		order: number().int().positive(),
		blurb: string().min(1),
		card_class: string(),
		features: array(object({
			text: string().min(1),
			/** `key` = a capability this rung unlocks (lemon). `off` = something
			*  it does NOT have. Neither is decoration — DESIGN-NOTES §3. */
			kind: _enum(["key", "off"]).optional()
		})).min(1)
	})
});
/**
* Home-page sections — one file per section, so a copy change is a YAML edit
* rather than surgery inside 669 lines of hand-tuned markup.
*
* ⛔ THE MARKUP IS NOT TEMPLATED AWAY. DESIGN-NOTES §6 records ~30 traps paid
*    for in this page's structure (an id selector eating a class's layout, a
*    grid item's min-width:auto, an inset ratio that reads as nesting). Each
*    section keeps its own component with its own markup; only the TEXT moves
*    here. A generic section renderer would flatten the design into cards,
*    which is the one outcome the whole visual world exists to avoid.
*/
/**
* The shape a page section may take. Shared by `home` and `platform` because
* they are the same kind of document — a narrative page built from sections —
* and duplicating the schema would let the two drift.
*/
var sectionSchema = object({
	id: string().min(1),
	/** Reading order. The eyebrow numerals encode it, so it is a fact. */
	order: number().int(),
	eyebrow: string().min(1).optional(),
	heading: string().min(1).optional(),
	dek: string().min(1).optional(),
	/** The three nested boundaries. Order is the claim: outside in. */
	layers: array(object({
		title: string().min(1),
		text: string().min(1),
		/** A .tiny.role line. Where present it occupies the register a
		*  numeral would, which is why such a section sets numbered:false. */
		role: string().min(1).optional()
	})).min(1).optional(),
	/** Numerals on .nest layers. TRUE only where the ORDER is the claim —
	*  home §02 counts boundaries outside-in. Default true for that reason. */
	numbered: boolean().optional(),
	link: object({
		href: string().min(1),
		text: string().min(1)
	}).optional(),
	/** Extra classes on the <section> — band/well variants differ per section. */
	section_class: string().optional(),
	/** A .grid.g3 of .card.up. `text` may use `backticks` for inline .mono. */
	cards: array(object({
		title: string().min(1),
		text: string().min(1),
		/** The honest-gap marker (.tag.soon). DESIGN-NOTES §3 — a gap is
		*  marked, never hidden. Never set it for something that ships. */
		tag: string().min(1).optional()
	})).min(1).optional(),
	/** A trailing .link-row. */
	links: array(object({
		href: string().min(1),
		text: string().min(1)
	})).min(1).optional(),
	/** Code panels. `snippet` names a file in src/content/snippets/. */
	slabs: array(object({
		filename: string().min(1),
		/** File under src/content/snippets/, WITH its extension. */
		snippet: string().min(1),
		kind: _enum(["src", "term"]),
		/** Grammar for Shiki. Omit for a pre-marked .html snippet (a captured
		*  terminal session, whose colours carry meaning no grammar knows). */
		lang: _enum(["ts", "yaml"]).optional(),
		/** A .tiny.note inside this slab, under its code. */
		note: string().optional()
	})).optional(),
	session: object({
		filename: string().min(1),
		snippet: string().min(1),
		kind: _enum(["src", "term"]),
		lang: _enum(["ts", "yaml"]).optional()
	}).optional(),
	session_note: string().optional(),
	/** The closing call-to-action row. */
	cta: array(object({
		href: string().min(1),
		text: string().min(1),
		class: string().min(1)
	})).min(1).optional(),
	wordmark: string().optional()
});
defineCollection({
	loader: glob$1({
		pattern: "*.yaml",
		base: "./src/content/home"
	}),
	schema: sectionSchema
});
defineCollection({
	loader: glob$1({
		pattern: "*.yaml",
		base: "./src/content/platform"
	}),
	schema: sectionSchema
});
defineCollection({
	loader: glob$1({
		pattern: ["*.yaml", "!global.yaml"],
		base: "./src/content/cli"
	}),
	schema: cliDocSchema
});
defineCollection({
	loader: glob$1({
		pattern: "*.yaml",
		base: "./src/content/tutorials"
	}),
	schema: object({
		title: string().min(1),
		summary: string().min(1),
		/** Position on the list page. */
		order: number().int(),
		/** "about 15 min". */
		duration: string().min(1),
		runtime: _enum([
			"node",
			"python",
			"go",
			"rust"
		]),
		/** The lowest tier the tutorial runs on, as named on the ladder. */
		tier: onLadder,
		/** Short facts for the chips: "bidirectional", "ffmpeg". */
		tags: array(string().min(1)).max(4)
	})
});
//#endregion
//#region src/lib/docs-nav.ts
var docHref = (e) => e.data.route ?? `/docs/${e.id}`;
function buildNav(all, groupOrder) {
	return groupOrder.map((name) => ({
		name,
		entries: all.filter((e) => e.data.group === name).sort((a, b) => a.data.order - b.data.order).map((e) => ({
			id: e.id,
			title: e.data.title,
			href: docHref(e),
			planned: e.data.planned === true
		}))
	})).filter((g) => g.entries.length > 0);
}
/** Previous and next written page of `id`, in sidebar order. A planned page is skipped. */
function neighbours(groups, id) {
	const flat = groups.flatMap((g) => g.entries).filter((e) => !e.planned);
	const i = flat.findIndex((e) => e.id === id);
	if (i === -1) return {};
	return {
		prev: flat[i - 1],
		next: flat[i + 1]
	};
}
//#endregion
//#region src/layouts/DocsLayout.astro
createAstro("https://ignitify.dev");
var $$DocsLayout = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DocsLayout;
	const { id, title, description, group } = Astro.props;
	const { html: body, toc: found } = withHeadingIds(fillDocTokens(await Astro.slots.render("default"), id));
	const toc = Astro.props.toc ?? found;
	const groups = buildNav(await getCollection("docs"), DOC_GROUPS);
	const { prev, next } = neighbours(groups, id);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"page": "docs",
		"title": `${title} — Ignitify docs`,
		"description": description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="docs-main"><div class="docs"><div class="docs-bar"><button type="button" class="docs-menu-btn" id="docmenu-btn" aria-expanded="false" aria-controls="docnav"><span class="docs-menu-ic" aria-hidden="true"></span>Docs menu</button><span class="docs-bar-cur">${title}</span></div>${renderComponent($$result, "DocNav", $$DocNav, {
		"groups": groups,
		"current": id
	})}<article class="dbody"><span class="eyebrow">${group}</span>${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(body)}` })}${(prev || next) && renderTemplate`<nav class="dpn" aria-label="Previous and next page">${prev ? renderTemplate`<a class="dpn-prev"${addAttribute(prev.href, "href")}><span>Previous</span>${prev.title}</a>` : renderTemplate`<span></span>`}${next ? renderTemplate`<a class="dpn-next"${addAttribute(next.href, "href")}><span>Next</span>${next.title}</a>` : renderTemplate`<span></span>`}</nav>`}</article>${toc.length > 0 && renderTemplate`<nav class="dtoc" aria-label="On this page"><p class="dtoc-t">On this page</p><ul>${toc.map((t) => renderTemplate`<li${addAttribute(`dtoc-l${t.level}`, "class")}><a${addAttribute(`#${t.id}`, "href")}${addAttribute(t.id, "data-toc")}>${t.text}</a></li>`)}</ul></nav>`}</div></main><div class="docs-sr" id="docs-live" role="status" aria-live="polite"></div>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "/Users/saeed/Projects/repos/mitra/website/src/layouts/DocsLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/layouts/DocsLayout.astro", void 0);
//#endregion
export { fillCliTokens as a, fillDocTokens as i, cliCatalogSchema as n, cli_catalog_default as o, parseCliGlobal as r, $$DocsLayout as t };
