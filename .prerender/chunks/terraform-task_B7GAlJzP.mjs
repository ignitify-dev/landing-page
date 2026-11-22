import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { R as maybeRenderHead, o as renderComponent, p as renderTemplate, s as Fragment } from "./server_D7BsF4R_.mjs";
import { n as getEntry } from "./_astro_content_DdhCzG80.mjs";
import "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Callout } from "./Callout_CbSyIQwi.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { t as $$TutorialLayout } from "./TutorialLayout_BpUH9Gak.mjs";
import { t as $$FileTabs } from "./FileTabs_dpTW2kFW.mjs";
//#region src/pages/tutorials/terraform-task.astro
var terraform_task_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TerraformTask,
	file: () => $$file,
	url: () => $$url
});
var $$TerraformTask = createComponent(async ($$result, $$props, $$slots) => {
	const entry = await getEntry("tutorials", "terraform-task");
	if (!entry) throw new Error("[tutorials] missing src/content/tutorials/terraform-task.yaml");
	const t = entry.data;
	const tierName = t.tier[0].toUpperCase() + t.tier.slice(1);
	const taskYaml = `schema_version: 1
slug: terraform-demo
runtime: node
secrets: [DEMO_TOKEN]
execution:
  cardinality: many
  state: across-runs
  interaction: continuous
  network:
    type: egress
    egress_allow: [example.com]
run:
  payload: { mode: default }
  preset: std.small
  timeout_sec: 120`;
	const indexTs = `// terraform-demo: reports the code version, a hash of its secret (never the value),
// its warm-process counters, and what an allowed and a blocked outbound call do.
import { createHash } from "node:crypto";

const VERSION = "A";

let initCount = 0;
let runCount = 0;

export async function init() {
  initCount += 1;
}

type Ctx = {
  secrets: Record<string, string>;
  chunk: (data: unknown) => void;
  metric: (name: string, value: number) => void;
};

async function allowedStatus(url: string): Promise<number | string> {
  try {
    return (await fetch(url, { signal: AbortSignal.timeout(10_000) })).status;
  } catch (e) {
    return errorCode(e);
  }
}

async function blockedCode(url: string): Promise<string> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    return \`reached:\${res.status}\`;
  } catch (e) {
    return String(errorCode(e));
  }
}

function errorCode(e: unknown): string {
  const err = e as { code?: string; cause?: { code?: string }; name?: string };
  return err.cause?.code ?? err.code ?? err.name ?? "error";
}

export async function run(payload: Record<string, unknown>, ctx: Ctx) {
  runCount += 1;
  ctx.chunk({ step: 1 });
  const token = ctx.secrets.DEMO_TOKEN ?? "";
  const tokenSha256_8 = createHash("sha256").update(token).digest("hex").slice(0, 8);
  const allowed = await allowedStatus("https://example.com");
  const blocked = await blockedCode("https://github.com");
  ctx.metric("demo_runs", 1);
  ctx.chunk({ step: 2 });
  return {
    version: VERSION,
    token_sha256_8: tokenSha256_8,
    run_count: runCount,
    init_count: initCount,
    allowed,
    blocked,
    payload_echo: payload,
  };
}`;
	const accessTf = `# Access: one user, one group and the user's key. Applied with the OWNER key.
terraform {
  required_version = ">= 1.11"
  required_providers {
    ignitify = {
      source  = "ignitify-dev/ignitify"
      version = "0.3.2"
    }
  }
}

provider "ignitify" {}

data "ignitify_whoami" "me" {}

check "owner_key" {
  assert {
    condition     = data.ignitify_whoami.me.is_owner_key
    error_message = "This configuration manages access and needs an owner key."
  }
}

resource "ignitify_user" "ci" {
  name = "tf-ci"
}

resource "ignitify_group" "app" {
  name = "tf-app"
  permissions = [
    "tasks.read",
    "tasks.write",
    "deployments.read",
    "deployments.write",
    "secrets.read",
    "secrets.write",
    "hooks.read",
    "hooks.write",
    "runs.read",
    "runs.write",
  ]
  members = [ignitify_user.ci.name]
}

resource "ignitify_api_key" "ci" {
  user  = ignitify_user.ci.name
  label = "tutorial"
}

output "app_key" {
  value     = ignitify_api_key.ci.raw_key
  sensitive = true
}`;
	const appTf = `# App: a secret, a task, its code and a hook. Applied with the USER key from ../access.
terraform {
  required_version = ">= 1.11"
  required_providers {
    ignitify = {
      source  = "ignitify-dev/ignitify"
      version = "0.3.2"
    }
  }
}

provider "ignitify" {}

variable "demo_token" {
  type      = string
  sensitive = true
  ephemeral = true
}

variable "demo_token_version" {
  type    = number
  default = 1
}

variable "task_dir" {
  type = string
}

resource "ignitify_secret" "token" {
  name             = "DEMO_TOKEN"
  value_wo         = var.demo_token
  value_wo_version = var.demo_token_version
}

resource "ignitify_task" "demo" {
  slug = "terraform-demo"
}

resource "ignitify_deployment" "demo" {
  task       = ignitify_task.demo.slug
  source_dir = var.task_dir

  timeouts = {
    create = "20m"
    update = "20m"
  }
}

resource "ignitify_hook" "demo" {
  task = ignitify_task.demo.slug
}

output "hook_url" {
  value = ignitify_hook.demo.url
}

output "hook_secret" {
  value     = ignitify_hook.demo.secret
  sensitive = true
}`;
	const refusedTf = `terraform {
  required_providers {
    ignitify = {
      source  = "ignitify-dev/ignitify"
      version = "0.3.2"
    }
  }
}

provider "ignitify" {}

resource "ignitify_user" "nope" {
  name = "tf-nope"
}`;
	return renderTemplate`${renderComponent($$result, "TutorialLayout", $$TutorialLayout, {
		"title": t.title,
		"description": t.summary
	}, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="tut-proves"><p>What this tutorial proves</p><ul><li>One owner key makes access (a user, a group and a key). A user key then manages the app. A user key cannot make access.</li><li>The secret value never enters the Terraform state.</li><li>A code change is one in-place change in the plan, and the hook URL stays.</li><li>A secret rotates with no redeploy.</li><li>You can import an object that already exists, and clean up in reverse order.</li></ul></div><h2>What you build</h2><p>Two Terraform folders, each with its own state and its own key, and one task folder.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "bash",
			"label": "the folders",
			"code": `terraform-tutorial/
├── tasks/terraform-demo/   the task: task.yaml and index.ts
├── access/main.tf          user, group, key       (owner key)
└── app/main.tf             secret, task, code, hook (user key)`
		})}<p>The <code>access</code> folder makes a user, a group with its permissions, and a key for the user. The <code>app</code> folder uses that key to make the secret, the task, its code (a deployment) and a hook. Keep the folders apart, so the daily job never holds the owner key. <a href="/docs/guides/terraform">Manage a tenant with Terraform</a> explains why.</p><h2>1 · What you need</h2><ul><li>Terraform 1.11 or later. The secret resource uses a write-only argument. OpenTofu works too, with the full source address (see <a href="/docs/terraform/provider">Provider configuration</a>).</li><li>An owner key, from <code>ignitify login</code>. See <a href="/docs/install">Install</a>.</li><li>The <code>ignitify</code> CLI. Version 3.1.0 or later. This tutorial was run with 3.1.0, and 3.2.0 changes no flag it uses.</li><li>A plan that allows webhooks and outbound calls. This tutorial uses <a href="/pricing">Starter</a>. If <code>ignitify_hook</code> fails, run <code>ignitify whoami</code> and check <code>may_use_webhooks</code>.</li></ul><p>Make the folders, and keep the path of the top folder in a variable:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `mkdir -p terraform-tutorial/{tasks/terraform-demo,access,app}
cd terraform-tutorial
export ROOT="$PWD"` })}${renderComponent($$result, "Callout", $$Callout, {
			"kind": "warning",
			"title": "Keep the Terraform folders outside the task folder"
		}, { "default": ($$result) => renderTemplate`The deployment uploads the whole task folder. Put <code>access/</code> and <code>app/</code> next to it, never inside it.` })}<h2>2 · The task folder</h2><p>The task has two files. It reads a secret, calls one host that <code>egress_allow</code> permits and one that it does not, and counts its runs. It returns a short hash of the secret, never the value.</p>${renderComponent($$result, "FileTabs", $$FileTabs, {
			"id": "tf-task-files",
			"files": [{
				name: "task.yaml",
				code: taskYaml,
				lang: "yaml"
			}, {
				name: "index.ts",
				code: indexTs,
				lang: "ts"
			}]
		})}<p>Save them as <code>tasks/terraform-demo/task.yaml</code> and <code>tasks/terraform-demo/index.ts</code>. The <code>slug</code> in <code>task.yaml</code> must equal the <code>slug</code> of the <code>ignitify_task</code> resource below.</p><h2>3 · Access, with the owner key</h2><p>Save this as <code>access/main.tf</code>. It makes the user <code>tf-ci</code>, the group <code>tf-app</code> and a key. The group holds ten permissions. It has <code>runs.write</code>, because the user will start runs. A job that only deploys does not need it.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "hcl",
			"label": "access/main.tf",
			"code": accessTf
		})}<p>The <code>check</code> block warns when the key is not an owner key. Apply it:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `export IGNITIFY_API_KEY=<your owner key>
cd "$ROOT/access"
terraform init
terraform apply`,
			"output": `Plan: 3 to add, 0 to change, 0 to destroy.
…
Apply complete! Resources: 3 added, 0 changed, 0 destroyed.

Outputs:

app_key = <sensitive>`
		})}<p><code>init</code> installs the provider and checks its signature, and prints <code>Installed ignitify-dev/ignitify v0.3.2 (self-signed, key ID 318F7795E174644F)</code>. With the owner key, <code>ignitify user:list</code> shows <code>tf-ci</code>, and <code>ignitify group:list</code> shows <code>tf-app</code> and its permissions.</p><p>Take the user key from the state into your shell, without printing it. From now on, you act as the user:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `export IGNITIFY_API_KEY="$(terraform output -raw app_key)"` })}${renderComponent($$result, "Callout", $$Callout, {
			"kind": "warning",
			"title": "Never print a key"
		}, { "default": ($$result) => renderTemplate`Do not use <code>echo</code> on it. The state of this folder holds the raw key, so protect it. See the end of this page.` })}<h3>Optional · A user key cannot make access</h3><p>To see the split, make a folder <code>refused/</code> with one user resource and apply it with the user key that is now in your shell.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "hcl",
			"label": "refused/main.tf",
			"code": refusedTf
		})}${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `cd "$ROOT/refused"
terraform init
terraform apply`,
			"output": `POST /users: HTTP 403: only an owner key manages users, groups and keys (reason: owner-required)`
		})}<p>The message is part of the error that Terraform prints. Nothing was made. Delete the <code>refused</code> folder.</p><h2>4 · The app, with the user key</h2><p>Save this as <code>app/main.tf</code>. It makes the secret, the task, the code and the hook.</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "hcl",
			"label": "app/main.tf",
			"code": appTf
		})}<ul><li>The secret variable is <code>sensitive</code> and <code>ephemeral</code>, and <code>value_wo</code> is write-only. The value is sent to the platform and never saved in the state.</li><li><code>task_dir</code> is the absolute path of the task folder.</li><li>The deployment waits for the build. The timeouts of 20 minutes leave room for a large task.</li></ul><p>Pass the secret in the environment, never in a file. Pass each <code>-var</code> as its own quoted word:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `cd "$ROOT/app"
export TF_VAR_demo_token=<a secret value>
terraform init
terraform apply -var "task_dir=$ROOT/tasks/terraform-demo"`,
			"output": `Plan: 4 to add, 0 to change, 0 to destroy.
…
ignitify_deployment.demo: Creation complete after 28s
…
Apply complete! Resources: 4 added, 0 changed, 0 destroyed.

Outputs:

hook_secret = <sensitive>
hook_url = "https://…/hooks/trigger/<id>"`
		})}<p>The build took about 28 s for this small task. Check the deployment, with the id from the apply:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify deployment:get <deployment-id>" })}<p>It shows <code>status READY</code>, <code>secrets ["DEMO_TOKEN"]</code> and the <code>execution</code> block. Search the state for your secret value: there is no match.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `grep -c "$TF_VAR_demo_token" terraform.tfstate`,
			"output": "0"
		})}<h2>5 · Run the task and read the result</h2><p>Terraform made the task, so you have no local <code>.ignitify</code> state. The CLI finds the deployment on the server. <code>--dir</code> must name an existing folder that holds the task folder.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `ignitify task:run terraform-demo --wait --json --dir "$ROOT/tasks"`,
			"output": `Using deployment <id> (resolved from the server — no local state).`
		})}<p>The result of the first run:</p>${renderComponent($$result, "Code", $$Code, {
			"lang": "json",
			"label": "the result",
			"code": `{ "allowed": 200, "blocked": "ECONNRESET", "version": "A", "run_count": 1, "init_count": 1,
  "payload_echo": { "mode": "default" }, "token_sha256_8": "<8 hex characters>" }`
		})}<ul><li><code>allowed: 200</code> is the call to <code>example.com</code>, which <code>egress_allow</code> permits.</li><li><code>blocked: "ECONNRESET"</code> is the answer of the platform to a host outside <code>egress_allow</code>.</li><li><code>token_sha256_8</code> is the first 8 hex characters of the SHA-256 of your secret. Check it yourself:</li></ul>${renderComponent($$result, "Terminal", $$Terminal, { "command": `printf '%s' "$TF_VAR_demo_token" | shasum -a 256 | cut -c1-8` })}<p>Run it again, and a third time with a payload:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify task:run terraform-demo --wait --json --dir "$ROOT/tasks"
ignitify task:run terraform-demo --wait --json --dir "$ROOT/tasks" --payload '{"mode":"custom"}'` })}<p>These runs return <code>run_count</code> 2 and 3 and <code>init_count</code> 1. They run on the same warm VM. <code>ignitify run:logs &lt;run-id&gt;</code> shows the task metric <code>task_demo_runs</code>, and never the secret.</p><h2>6 · Update the code</h2><p>In <code>tasks/terraform-demo/index.ts</code>, change <code>const VERSION = "A";</code> to <code>"B"</code>. Then plan:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `terraform plan -var "task_dir=$ROOT/tasks/terraform-demo"`,
			"output": "Plan: 0 to add, 1 to change, 0 to destroy."
		})}<p>Only <code>ignitify_deployment</code> changes, in place. The plan sees the change through the hash of the files in the folder. Apply it:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `terraform apply -var "task_dir=$ROOT/tasks/terraform-demo"` })}<p>The apply takes about 30 s. It waits for the new build, and then deletes the old deployment. The hook URL and the secret stay the same.</p>${renderComponent($$result, "Callout", $$Callout, {
			"kind": "note",
			"title": "The old deployment's runs go with it"
		}, { "default": ($$result) => renderTemplate`When the old deployment is deleted, its runs disappear from <code>run:list</code>. Do not use <code>create_before_destroy</code> on <code>ignitify_deployment</code>.` })}<p>Run the task. The result now says <code>"version": "B"</code>.</p><h2>7 · Rotate the secret</h2><p>The secret value is write-only, so Terraform cannot see that it changed. Change the value and raise <code>demo_token_version</code>:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `export TF_VAR_demo_token=<a new value>
terraform apply -var "task_dir=$ROOT/tasks/terraform-demo" -var demo_token_version=2` })}<p>The plan changes only <code>ignitify_secret.token</code>. The deployment id stays the same, and there is no rebuild. <code>ignitify secret:list</code> shows a new <code>updated_at</code>, and the next run returns the new <code>token_sha256_8</code>. See <a href="/docs/terraform/secret">ignitify_secret</a>.</p><h2>8 · Call the hook with a signed request</h2><p>The hook is a URL that starts a run. A request must carry an HMAC-SHA256 signature of its body, made with the hook secret. Take both from the outputs. Send the body with <code>--data-binary</code> and the JSON content type. With <code>-d</code>, curl labels the body as a form, and the signature check answers <code>401 invalid-signature</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `BODY='{"leg":"x"}'
SIG=$(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "$(terraform output -raw hook_secret)" -binary | xxd -p -c256)
curl -s -X POST "$(terraform output -raw hook_url)" \\
  -H "x-ignitify-signature: sha256=$SIG" -H "x-ignitify-delivery: $(date +%s)-1" \\
  -H 'content-type: application/json' --data-binary "$BODY"`,
			"output": `202 {"run_id": …, "resource_id": "run_…", "status": "PENDING"}`
		})}<p>Each call needs a new <code>x-ignitify-delivery</code> value. A repeat is deduplicated. The answer holds the <code>resource_id</code> of the run. Wait until its status is <code>COMPLETED</code>, about 5 to 8 s, then read the result with the user key (<code>runs.read</code> is enough):</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:get <resource_id> --full --json" })}<p>The result has <code>"version": "B"</code>. See <a href="/docs/terraform/hook">ignitify_hook</a>.</p><h2>9 · Import an object that already exists</h2><p>Import lets Terraform own an object that it did not make. To try it, forget the hook and import it back. First read the hook's id:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `terraform state show ignitify_hook.demo` })}<p>Note <code>resource_id</code>. Then:</p>${renderComponent($$result, "Terminal", $$Terminal, {
			"command": `terraform state rm ignitify_hook.demo
terraform import -var "task_dir=$ROOT/tasks/terraform-demo" -var demo_token_version=2 ignitify_hook.demo terraform-demo/<resource_id>
terraform plan -var "task_dir=$ROOT/tasks/terraform-demo" -var demo_token_version=2`,
			"output": `Import successful!
…
No changes.`
		})}<p>After an import, the hook <code>secret</code> in the state is empty. The server shows it once. The hook still works with the secret you read earlier. The import id of each resource is on its page. See <a href="/docs/terraform/recipes#import-existing-objects">Recipes</a>.</p><h2>10 · Clean up, in reverse order</h2><p>Destroy the app first, and then access. Access needs the owner key again.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `cd "$ROOT/app"
terraform destroy -var "task_dir=$ROOT/tasks/terraform-demo" -var demo_token_version=2

export IGNITIFY_API_KEY=<your owner key>
cd "$ROOT/access"
terraform destroy` })}<p>The first destroy removes the hook, the secret, the deployment and the task. The second removes the key, the group and the user. After both:</p><ul><li>The hook URL answers <code>404 ${`{"error":"unknown hook","reason":"hook-not-found"}`}</code>.</li><li><code>GET /tasks/terraform-demo</code> answers <code>404 task-not-found</code>.</li><li>The user key is refused with <code>API key is unknown or has been revoked [key-invalid]</code>.</li></ul><h2>Keep these in mind</h2><ul><li><strong>The state holds secrets.</strong> The <code>access</code> state holds the raw key of the user. The <code>app</code> state holds the hook secret. The secret value itself is never in it. Add <code>.terraform/</code> and <code>*.tfstate*</code> to <code>.gitignore</code>, and use an encrypted backend with limited access.</li><li><strong>The CLI after a Terraform setup.</strong> <code>task:run</code> and <code>run:get</code> work with the user key. <code>task:get</code> reads only the local task folder, so use <code>ignitify task:list</code> for the server side.</li><li><strong>Pass the flags as separate quoted words</strong>, for example <code>-var "task_dir=$ROOT/tasks/terraform-demo"</code>. In zsh, an unquoted variable that holds several flags is not split, and Terraform answers <code>flag provided but not defined</code>.</li><li><strong>Without the right permission, a run is refused.</strong> With <code>runs.read</code> only, <code>task:run</code> answers <code>permission denied: this key needs the runs.write permission</code>.</li></ul><h2>Next steps</h2><ul><li>Read one page per resource: <a href="/docs/terraform/provider">Provider configuration</a>, <a href="/docs/terraform/deployment">ignitify_deployment</a>, <a href="/docs/terraform/group">ignitify_group</a> and the others in the Terraform section of the docs.</li><li>Run the app module in CI with the user key: <a href="/docs/terraform/recipes">Recipes</a>.</li><li>When a plan or an apply fails, see <a href="/docs/terraform/troubleshooting">Troubleshooting</a>.</li><li>Learn the permissions: <a href="/docs/guides/access-control">Users, groups and permissions</a>.</li></ul>`,
		"header": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result) => renderTemplate`<h1>${t.title}</h1><p class="def">${t.summary}</p><div class="tut-meta"><span class="tut-chip">${t.runtime}</span>${t.tags.map((tag) => renderTemplate`<span class="tut-chip">${tag}</span>`)}<span class="tut-chip">${t.duration}</span><span class="tut-chip tut-chip-tier">${tierName} tier</span></div>` })}`
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/terraform-task.astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/tutorials/terraform-task.astro";
var $$url = "/tutorials/terraform-task";
//#endregion
//#region \0virtual:astro:page:src/pages/tutorials/terraform-task@_@astro
var page = () => terraform_task_exports;
//#endregion
export { page };
