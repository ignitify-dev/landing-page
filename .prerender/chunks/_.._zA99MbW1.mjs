import { n as __exportAll, t as createComponent } from "./astro-component_rKi5iQzd.mjs";
import { B as addAttribute, J as unescapeHTML, R as maybeRenderHead, Z as createAstro, o as renderComponent, p as renderTemplate, s as Fragment, u as renderSlot } from "./server_D7BsF4R_.mjs";
import { i as fillDocTokens, t as $$DocsLayout } from "./DocsLayout_vM0j6Y3p.mjs";
import { t as getCollection } from "./_astro_content_DdhCzG80.mjs";
import { r as PROFILE_URL, t as ACCOUNT_HOST } from "./account-origin_B3Hw8Ff7.mjs";
import { t as $$Motion } from "./Motion_DAc_pbLo.mjs";
import { a as parseTerminalText, r as commandAnchor } from "./docs-components_D6y5gSKR.mjs";
import { t as $$Terminal } from "./Terminal_BKj3377S.mjs";
import { t as $$Callout } from "./Callout_CbSyIQwi.mjs";
import { n as $$Related, t as $$InlineText } from "./InlineText_BXIy3H0K.mjs";
import { t as $$RowTable } from "./RowTable_Dm3zcrSq.mjs";
import { t as $$Code } from "./Code_v08uVNPz.mjs";
import { c as readmeUrl, i as detailUrl, n as INTEGRATIONS, t as CATALOG_URL } from "./integrations_YLdGWyDg.mjs";
import { n as $$ExampleTabs, t as $$Steps } from "./Steps_xwowod3e.mjs";
//#region src/content/docs/_bodies/presets-limits.html?raw
var presets_limits_default = "      <h1>Presets &amp; limits</h1>\n      <p class=\"def\">\n        A preset is a fixed VM size, chosen with <span class=\"mono\">run.preset</span> in <a href=\"/docs/reference/task-yaml\">task.yaml</a>. Your tier sets which presets you may use, and every other ceiling.\n      </p>\n\n      <h2>The preset catalogue</h2>\n      <p class=\"def\">{{presets.count}} names, closed — a typo is caught offline by <span class=\"mono\">task:validate</span>.</p>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c5\">\n          <div class=\"td\"><span class=\"lbl-h\">Preset</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">vCPU</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Memory</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Default scratch</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Weight</span></div>\n        </div>\n        {{presets.rows}}\n      </div>\n      <p class=\"def\"><strong>Default scratch</strong> is the disk a run gets when its task asks for less or nothing. See <a href=\"/docs/concepts/storage-and-residency\">Storage and residency</a>. {{presets.unsold}}</p>\n      <p class=\"def\"><strong>Weight</strong> is the number of units one run of the preset uses. Only a plan with a units limit counts them. See <a href=\"/docs/concepts/how-capacity-works\">How capacity works</a>.</p>\n\n      <h2>What each tier grants</h2>\n      <p class=\"def\">The numbers that matter first. <span class=\"mono\">whoami</span> and <span class=\"mono\">quota</span> print your own current ceiling.</p>\n      <div class=\"tbl scroll\">\n        <div class=\"tr head c7\">\n          <div class=\"td\"><span class=\"lbl-h\">Tier</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Tasks</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Running VMs</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Units</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Scratch</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Max timeout</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Presets</span></div>\n        </div>\n        {{tiers.rows}}\n      </div>\n      <p class=\"def\"><strong>Running VMs</strong> is how many runs can be active at the same time. <strong>Units</strong> limits the total weight of those runs, and today only these plans have it: {{units.plans}}. A plan with no units limit is still limited by its running VMs and its presets.</p>\n\n      <p class=\"def\">Three capabilities are gated per tier: <strong>pinning</strong> (<span class=\"mono\">residency: pinned</span>: {{tiers.gate.pin}}), <strong>outbound networking</strong> (<span class=\"mono\">network: egress</span>: {{tiers.gate.egress}}) and <strong>inbound networking</strong> (<span class=\"mono\">network: bidirectional</span>: {{tiers.gate.ingress}}). Inbound also needs outbound. A tier that has not unlocked one refuses it. See <a href=\"/docs/reference/refused-values\">Refused values</a>.</p>\n\n      <aside class=\"callout callout-warning\"><span class=\"callout-i\" aria-hidden=\"true\"></span><div class=\"callout-b\"><p class=\"callout-t\">A higher ceiling is refused</p><div class=\"callout-x\"><p>A ceiling you declare above your tier's is refused, not clamped. This covers <span class=\"mono\">execution.storage_mib</span>, <span class=\"mono\">inbound_rps</span> and <span class=\"mono\">egress_mbit</span>. Rate ceilings (deployments per minute, runs per day, API requests per second) are enforced live, not at deploy. See <span class=\"mono\">quota</span> and <span class=\"mono\">usage</span>.</p></div></div></aside>\n\n      <h2>Payload and result size</h2>\n      <p class=\"def\">Two limits are the same for every plan. Both sizes are the compact JSON of the value. Ask <span class=\"mono\">ignitify whoami --json</span> for the numbers (<span class=\"mono\">limits.max_payload_bytes</span> and <span class=\"mono\">limits.max_result_bytes</span>).</p>\n      <ul class=\"def\">\n        <li>At most {{limits.payload}} goes <em>into</em> a task: the <span class=\"mono\">payload</span> of a run, a webhook body, or a schedule.</li>\n        <li>At most {{limits.result}} comes <em>out</em>: the result, an error or a progress chunk.</li>\n      </ul>\n      <p class=\"def\">Over the limit, a payload is refused with <span class=\"mono\">413</span> and the run does not start. A result over the limit fails the run (<span class=\"mono\">result exceeds max size</span>). A webhook body over {{limits.payload.short}} gets <span class=\"mono\">413 payload too large</span> before the signature is checked. <span class=\"mono\">task:validate</span> and <span class=\"mono\">task:deploy</span> refuse a <span class=\"mono\">run.payload</span> in <span class=\"mono\">task.yaml</span> that is over the limit.</p>\n      <aside class=\"callout callout-tip\"><span class=\"callout-i\" aria-hidden=\"true\"></span><div class=\"callout-b\"><p class=\"callout-t\">Need to move more data?</p><div class=\"callout-x\"><p>Send it to your own store, for example S3, from inside the task and return a link. A task with <span class=\"mono\">network: none</span> can only return {{limits.result.short}}.</p></div></div></aside>\n";
//#endregion
//#region src/content/docs/_bodies/refused-values.html?raw
var refused_values_default = "      <h1>Refused values</h1>\n      <p class=\"def\">\n        <a href=\"/docs/reference/errors\">Errors</a> covers the gates on a live request. This page covers <span class=\"mono\">task.yaml</span>. The platform refuses a declaration at deploy rather than run your task with a policy it cannot honour.\n      </p>\n\n      <h2>An unknown key is refused, never ignored</h2>\n      <p class=\"def\">\n        <span class=\"mono\">execution.cardinaliti: \"many\"</span> is a typo. It is rejected, not defaulted, and the error names the field. An ignored key would hide a policy that does not apply, which is a security failure for the network allowlist.\n      </p>\n\n      <h2>Values whose mechanism doesn't exist yet</h2>\n      <p class=\"def\">These are rejected, not run degraded.</p>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c3\">\n          <div class=\"td\"><span class=\"lbl-h\">Declaration</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Refusal</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">duration: unbounded</span></div>\n          <div class=\"td\"><span class=\"mono\">is not supported yet (needs checkpoint/resume)</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">state: across-crashes</span></div>\n          <div class=\"td\"><span class=\"mono\">is not supported yet (needs checkpoint/resume)</span></div>\n        </div>\n      </div>\n      <p class=\"def\">The one combination accepted with a warning is on <a href=\"/docs/concepts/seven-axes\">The seven axes</a>.</p>\n\n      <h2>Values that only make sense together</h2>\n      <p class=\"def\">Each of these is refused however it arises. That includes the platform default, so declaring only one side of a pair can still trigger it.</p>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c3\">\n          <div class=\"td\"><span class=\"lbl-h\">Declared</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Refused because</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">egress_allow</span> (even <span class=\"mono\">[]</span>) with <span class=\"v\">network: none</span></div>\n          <div class=\"td\">no egress path exists to allow or deny</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">inbound_port</span> / <span class=\"v\">inbound_routes</span> / inbound rate limits with anything but <span class=\"v\">network: bidirectional</span></div>\n          <div class=\"td\">no inbound path exists to configure</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">network: bidirectional</span> with no <span class=\"v\">inbound_port</span></div>\n          <div class=\"td\">a serving task with no declared listen port is unroutable</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">cardinality: one</span> + <span class=\"v\">state: across-runs</span></div>\n          <div class=\"td\">a one-shot VM has no state to carry between units</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">cardinality: one</span> + <span class=\"v\">residency: pinned</span></div>\n          <div class=\"td\">a one-shot VM tears down after its unit — there is nothing to pin</div>\n        </div>\n      </div>\n\n      <aside class=\"callout callout-note\"><span class=\"callout-i\" aria-hidden=\"true\"></span><div class=\"callout-b\"><p class=\"callout-t\">Checked twice</p><div class=\"callout-x\"><p>Every refusal here fires at <span class=\"mono\">task:validate</span>, and again as the authority at <span class=\"mono\">task:deploy</span>. Both use the same rule table, so they cannot disagree.</p></div></div></aside>\n";
//#endregion
//#region src/content/docs/_bodies/seven-axes.html?raw
var seven_axes_default = "      <h1>The seven axes</h1>\n      <p class=\"def\">\n        A deployment declares its <strong>task nature</strong> under <span class=\"mono\">execution</span> in <a href=\"/docs/reference/task-yaml\">task.yaml</a>. Seven axes describe what the work needs. Omit one and the platform default applies.\n      </p>\n\n      <div class=\"grid g3\">\n        <div class=\"card\"><h2>cardinality</h2>\n          <p class=\"def\">How many units of work per deployment: <span class=\"mono\">one</span> (default),\n          <span class=\"mono\">many</span>, <span class=\"mono\">continuous</span>.</p>\n        </div>\n        <div class=\"card\"><h2>duration</h2>\n          <p class=\"def\">How long one unit runs: <span class=\"mono\">short</span> (default),\n          <span class=\"mono\">long</span>. <span class=\"mono\">unbounded</span> is declared but refused today\n          — see below.</p>\n        </div>\n        <div class=\"card\"><h2>state</h2>\n          <p class=\"def\">Whether a unit depends on state from before: <span class=\"mono\">independent</span>\n          (default), <span class=\"mono\">across-runs</span>. <span class=\"mono\">across-crashes</span> is\n          refused today.</p>\n        </div>\n        <div class=\"card\"><h2>interaction</h2>\n          <p class=\"def\">Whether the task touches the outside world only at the edges\n          (<span class=\"mono\">boundary-only</span>, default) or during the run\n          (<span class=\"mono\">continuous</span>).</p>\n        </div>\n        <div class=\"card\"><h2>network</h2>\n          <p class=\"def\">The network capability grant: <span class=\"mono\">none</span> (default),\n          <span class=\"mono\">egress</span>, <span class=\"mono\">bidirectional</span>. See\n          <a href=\"/docs/concepts/network\">Network</a>.</p>\n        </div>\n        <div class=\"card\"><h2>storage_mib</h2>\n          <p class=\"def\">Ephemeral scratch drive capacity in MiB, sealed at VM boot and wiped at teardown.\n          The default is the run's preset size ({{presets.defaults.range}}); a smaller value is raised to it. See\n          <a href=\"/docs/concepts/storage-and-residency\">Storage &amp; residency</a>.</p>\n        </div>\n        <div class=\"card\"><h2>residency</h2>\n          <p class=\"def\"><span class=\"mono\">auto</span> (default) — normal lifecycle. <span class=\"mono\">pinned</span>\n          — permanent standby, exempt from every reaper sweep. See\n          <a href=\"/docs/concepts/storage-and-residency\">Storage &amp; residency</a>.</p>\n        </div>\n      </div>\n\n      <h2>Two axes are declared but not supported yet</h2>\n      <p class=\"def\">Both are refused at deploy, never accepted and mis-run. Their mechanism, checkpoint and resume, does not exist yet.</p>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c3\">\n          <div class=\"td\"><span class=\"lbl-h\">Declared</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Refusal</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Why</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">duration: unbounded</span></div>\n          <div class=\"td\">rejected at deploy</div>\n          <div class=\"td\">holding a VM for weeks with no checkpoint isn't safe to run</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">state: across-crashes</span></div>\n          <div class=\"td\">rejected at deploy</div>\n          <div class=\"td\">durability can't be faked without a real checkpoint</div>\n        </div>\n      </div>\n      <p class=\"def\">One more value is accepted but degraded. <span class=\"mono\">state: across-runs</span> falls back to a booted-VM warm start: state is reused, not snapshot-persisted. <span class=\"mono\">task:validate</span> prints a warning, not a refusal.</p>\n\n      <h2>Two combinations are rejected, however they arise</h2>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c3\">\n          <div class=\"td\"><span class=\"lbl-h\">Combination</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Rejected because</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Fix</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">cardinality: one</span> + <span class=\"v\">state: across-runs</span></div>\n          <div class=\"td\">a one-shot VM tears down after its unit — there is nothing to carry state between</div>\n          <div class=\"td\">declare <span class=\"mono\">many</span> or <span class=\"mono\">continuous</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">cardinality: one</span> + <span class=\"v\">residency: pinned</span></div>\n          <div class=\"td\">a one-shot VM tears down after its unit — there is nothing to pin</div>\n          <div class=\"td\">declare <span class=\"mono\">many</span> or <span class=\"mono\">continuous</span></div>\n        </div>\n      </div>\n\n      <aside class=\"callout callout-note\"><span class=\"callout-i\" aria-hidden=\"true\"></span><div class=\"callout-b\"><p class=\"callout-t\">One rule table</p><div class=\"callout-x\"><p>One function, <span class=\"mono\">resolveNature</span>, enforces every rule on this page. The CLI runs it offline at <span class=\"mono\">task:validate</span>, and the platform runs it again as the authority at <span class=\"mono\">task:deploy</span>. One table, so they cannot drift.</p></div></div></aside>\n";
//#endregion
//#region src/content/docs/_bodies/storage-residency.html?raw
var storage_residency_default = "      <h1>Storage &amp; residency</h1>\n      <p class=\"def\">\n        Two of the <a href=\"/docs/concepts/seven-axes\">seven axes</a>, in depth: how much scratch disk a run gets,\n        and whether its VM survives between runs.\n      </p>\n\n      <h2>Scratch storage — <span class=\"mono\">storage_mib</span></h2>\n      <p class=\"def\">\n        An ephemeral drive, sized in MiB, sealed at VM boot and <strong>wiped at teardown</strong> — it\n        never survives past the VM that made it. The default depends on the run's preset: {{presets.defaults}}.\n      </p>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c2\">\n          <div class=\"td\"><span class=\"lbl-h\">You declare</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">The run gets</span></div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\">nothing</div>\n          <div class=\"td\">the preset's default</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\">less than the preset's default</div>\n          <div class=\"td\">the preset's default. The reply carries a <span class=\"mono\">storage-clamped</span> notice, and the CLI prints it.</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\">more, up to your plan's <span class=\"mono\">max_storage_mib</span></div>\n          <div class=\"td\">what you declared</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\">more than your plan's <span class=\"mono\">max_storage_mib</span></div>\n          <div class=\"td\">refused (<span class=\"mono\">400</span>), at deploy and at run — never silently capped</div>\n        </div>\n      </div>\n      <p class=\"def\">\n        The disk is reserved in full when the VM boots, and the same size is what your plan is charged\n        for scratch. A webhook-triggered run does not reconfigure the task: it always gets the preset's\n        default. See <a href=\"/docs/concepts/presets-and-limits\">Presets &amp; limits</a> for each plan's limit.\n      </p>\n\n      <h3>The <span class=\"mono\">storage-clamped</span> notice</h3>\n      <p class=\"def\">\n        When a declared size is raised to the preset default, the reply to <span class=\"mono\">task:run</span>\n        (and to a scheduled run, <span class=\"mono\">task:run --at</span>) lists what changed in\n        <span class=\"mono\">notices</span>. The CLI prints one line:\n      </p>\n      <div class=\"slab\">\n        <span class=\"filename\">Reply notice</span>\n        <pre class=\"term\"><span class=\"dim\">Note:</span> storage_mib 1 is below the {{presets.example.name}} default ({{presets.example.default}} MiB). The run uses {{presets.example.default}} MiB.</pre>\n      </div>\n      <p class=\"def\">\n        With <span class=\"mono\">--json</span> the same notice is\n        <span class=\"mono\">{\"code\":\"storage-clamped\",\"preset\":\"{{presets.example.name}}\",\"requested\":1,\"effective\":{{presets.example.default}}}</span>.\n        A scheduled run is checked twice: at <span class=\"mono\">--at</span> time (you get the notice) and again\n        when it fires, against your plan as it is then. A webhook run declares no size, so it never gets a notice.\n      </p>\n\n      <h2>VM residency — <span class=\"mono\">residency</span></h2>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c3\">\n          <div class=\"td\"><span class=\"lbl-h\">Value</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Lifecycle</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Torn down by</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">auto</span></div>\n          <div class=\"td\">normal — default</div>\n          <div class=\"td\">idle TTL, age cap, or capacity pressure — whichever hits first</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">pinned</span></div>\n          <div class=\"td\">permanent standby — boots once, reused forever</div>\n          <div class=\"td\">nothing automatic; only an explicit <span class=\"mono\">vm:delete --force</span>,\n          or a delete cascade from the deployment it belongs to</div>\n        </div>\n      </div>\n\n      <p class=\"def\">\n        Pinning must be requested explicitly — it is never a side effect. It also requires\n        <span class=\"mono\">cardinality: many</span> or <span class=\"mono\">continuous</span>: a one-shot VM\n        tears down after its single unit, so there is nothing to pin (rejected at deploy). Not every tier\n        may pin at all — see <a href=\"/docs/concepts/presets-and-limits\">Presets &amp; limits</a>.\n      </p>\n\n      <h2>What pinning actually survives</h2>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c3\">\n          <div class=\"td\"><span class=\"lbl-h\">Event</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Effect on a pinned VM</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\">idle time</div>\n          <div class=\"td\">exempt from the reaper's idle sweep. Past the idle-warning window (24h by\n          default) it shows <span class=\"mono\">⚠</span> in <span class=\"mono\">vm:list --pinned</span> —\n          a warning only, never a kill.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\">a bare <span class=\"mono\">vm:delete</span> (no <span class=\"mono\">--force</span>)</div>\n          <div class=\"td\">refused, naming the residency and age. The VM survives.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\">a VM host restart</div>\n          <div class=\"td\"><strong>does not survive.</strong> The pin is lost, honestly reported\n          (<span class=\"mono\">vm:list --pinned</span> shows a \"lost\" row) — the next run cold-boots a new\n          VM with fresh state and the pin re-establishes on it.</div>\n        </div>\n      </div>\n\n      <aside class=\"callout callout-note\"><span class=\"callout-i\" aria-hidden=\"true\"></span><div class=\"callout-b\"><p class=\"callout-t\">Permanent standby</p><div class=\"callout-x\"><p>This describes what tears a pinned VM down, not a guarantee against every host failure. A restart is the one exception. The platform never hides it behind a silently re-created VM.</p></div></div></aside>\n";
//#endregion
//#region src/content/docs/_bodies/task-config.html?raw
var task_config_default = "      <h1>task.yaml</h1>\n      <p class=\"def\">A task's configuration is <strong>data, never an executable module</strong>. <span class=\"mono\">task:create</span> scaffolds it beside the entry file. Nothing here is inferred from your code.</p>\n\n      <h2>Accepted file names</h2>\n      <p class=\"def\">In resolution order — the first match wins.</p>\n      <pre class=\"term\">task.yaml\ntask.yml\ntask.json</pre>\n      <p class=\"def\">YAML comes first, because a config needs comments to say <em>why</em> a timeout is 300. JSON is accepted because it is a subset of YAML.</p>\n\n      <h2>Top-level keys</h2>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c3\">\n          <div class=\"td\"><span class=\"lbl-h\">Key</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Required</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Holds</span></div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">schema_version</span></div>\n          <div class=\"td\"><span class=\"v\">yes</span></div>\n          <div class=\"td\">Must be <span class=\"mono\">1</span> — the only accepted value. Anything else is refused, naming the field.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">slug</span></div>\n          <div class=\"td\"><span class=\"v\">yes</span></div>\n          <div class=\"td\">Lowercase letters, digits and interior hyphens only, {{limits.slug.min}}–{{limits.slug.max}} characters.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">runtime</span></div>\n          <div class=\"td\"><span class=\"v\">yes</span></div>\n          <div class=\"td\">One of the four runtime rows below.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">entry</span></div>\n          <div class=\"td\"><span class=\"n\">no</span></div>\n          <div class=\"td\">Entry file. Omitted ⇒ the runtime's default (<span class=\"mono\">index.ts</span>, <span class=\"mono\">main.py</span>, …).</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">execution</span></div>\n          <div class=\"td\"><span class=\"n\">no</span></div>\n          <div class=\"td\">The <a href=\"/docs/concepts/seven-axes\">seven axes</a> — cardinality, duration, state, interaction, network, residency, storage_mib.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">secrets</span></div>\n          <div class=\"td\"><span class=\"n\">no</span></div>\n          <div class=\"td\">Secret <em>names</em> only. Values are set with <span class=\"mono\">secret:set</span> and never live in this file.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">run</span></div>\n          <div class=\"td\"><span class=\"n\">no</span></div>\n          <div class=\"td\">Default <span class=\"mono\">payload</span>, <span class=\"mono\">preset</span> and <span class=\"mono\">timeout_sec</span> for <span class=\"mono\">task:run</span> and for a webhook run. Your plan must allow the preset and the timeout, or the deploy is refused.</div>\n        </div>\n        <div class=\"tr c3\">\n          <div class=\"td\"><span class=\"v\">build</span></div>\n          <div class=\"td\"><span class=\"n\">no</span></div>\n          <div class=\"td\"><span class=\"mono\">allowed_hosts</span> the build may fetch from; <span class=\"mono\">ship</span> paths copied onto the code drive as-is; <span class=\"mono\">system_packages</span> Debian packages the task needs (see below).</div>\n        </div>\n      </div>\n      <p class=\"def\">\n        An unknown top-level key is refused, naming it — a misspelled block reports as invalid rather\n        than silently applying none of its policy.\n      </p>\n\n      <h2>Runtimes</h2>\n      <p class=\"def\">One row, one runtime — adding a runtime costs the platform one row, never a protocol change. All four are live.</p>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c4\">\n          <div class=\"td\"><span class=\"lbl-h\">runtime</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Entry file</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Dependency manifest</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Lockfile</span></div>\n        </div>\n        <div class=\"tr c4\">\n          <div class=\"td\"><span class=\"v\">node</span></div>\n          <div class=\"td\"><span class=\"v\">index.ts</span></div>\n          <div class=\"td\"><span class=\"v\">package.json</span></div>\n          <div class=\"td\"><span class=\"v\">package-lock.json</span></div>\n        </div>\n        <div class=\"tr c4\">\n          <div class=\"td\"><span class=\"v\">python</span></div>\n          <div class=\"td\"><span class=\"v\">main.py</span></div>\n          <div class=\"td\"><span class=\"v\">requirements.txt</span></div>\n          <div class=\"td\"><span class=\"v\">requirements.txt</span></div>\n        </div>\n        <div class=\"tr c4\">\n          <div class=\"td\"><span class=\"v\">go</span></div>\n          <div class=\"td\"><span class=\"v\">main.go</span></div>\n          <div class=\"td\"><span class=\"v\">go.mod</span></div>\n          <div class=\"td\"><span class=\"v\">go.sum</span></div>\n        </div>\n        <div class=\"tr c4\">\n          <div class=\"td\"><span class=\"v\">rust</span></div>\n          <div class=\"td\"><span class=\"v\">src/main.rs</span></div>\n          <div class=\"td\"><span class=\"v\">Cargo.toml</span></div>\n          <div class=\"td\"><span class=\"v\">Cargo.lock</span></div>\n        </div>\n      </div>\n      <p class=\"def\">Every runtime needs a lockfile. An upload without one is refused, because the build would not be reproducible.</p>\n      <p class=\"def\">Go and Rust compile to one binary and run on the same task image as Node and Python. A binary that needs a system library the image lacks is caught at deploy, not at run.</p>\n\n      <h2>System packages</h2>\n      <p class=\"def\">\n        A task that needs a Debian tool (<span class=\"mono\">ffmpeg</span>, <span class=\"mono\">git</span>,\n        <span class=\"mono\">wget</span>) lists it under <span class=\"mono\">build.system_packages</span>.\n        The build installs the list once. The task VM then finds the tools on its normal path.\n      </p>\n      <pre class=\"term\">build:\n  system_packages: [git, ca-certificates, ffmpeg]</pre>\n      <div class=\"tbl wide\">\n        <div class=\"tr head c2\">\n          <div class=\"td\"><span class=\"lbl-h\">Rule</span></div>\n          <div class=\"td\"><span class=\"lbl-h\">Detail</span></div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\"><span class=\"v\">Names</span></div>\n          <div class=\"td\">Bare Debian names only: lower-case letters, digits, <span class=\"mono\">+ - .</span>, {{limits.package.name.min}}–{{limits.package.name.max}} characters. No version, no release, no path. Any other name is refused, naming it. A name is never changed for you: <span class=\"mono\">FFmpeg</span> is refused, not read as <span class=\"mono\">ffmpeg</span>.</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\"><span class=\"v\">Count</span></div>\n          <div class=\"td\">At most {{limits.package.count}} distinct names. Order does not matter; duplicates count once.</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\"><span class=\"v\">Source</span></div>\n          <div class=\"td\">Debian <span class=\"mono\">main</span> only, at the snapshot the platform pins. Every name must install exactly as written, or the build fails and says what to fix: a name Debian does not have gets the closest real names, and a virtual name (for example <span class=\"mono\">awk</span>) gets the real package to write (<span class=\"mono\">mawk</span>).</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\"><span class=\"v\">What is kept</span></div>\n          <div class=\"td\">Only new files under <span class=\"mono\">/usr</span> and <span class=\"mono\">/etc</span>. Documentation, man pages and translations (<span class=\"mono\">/usr/share/doc</span>, <span class=\"mono\">man</span>, <span class=\"mono\">info</span>, <span class=\"mono\">locale</span>) are not installed, and files under <span class=\"mono\">/var</span> are dropped. A package that changes a file of the base image or creates a user (for example <span class=\"mono\">dbus</span>) is refused, naming the paths.</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\"><span class=\"v\">Dependencies</span></div>\n          <div class=\"td\">Hard dependencies are installed; recommended packages are not. A tool that talks HTTPS needs <span class=\"mono\">ca-certificates</span> in your list.</div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\"><span class=\"v\">AI check</span></div>\n          <div class=\"td\"><span class=\"mono\">ignitify task:validate &lt;id&gt; --review-packages</span> asks the platform's AI to review the list and to estimate the time it adds to the first build. It only advises: the exit code does not change, and a suggestion is not checked against Debian. <strong>Only the package names and the runtime id leave your machine, never your code, your slug or your secrets.</strong></div>\n        </div>\n        <div class=\"tr c2\">\n          <div class=\"td\"><span class=\"v\">Image move</span></div>\n          <div class=\"td\">When the platform moves its base image to a new snapshot, a task with an old packages drive is refused. Run <span class=\"mono\">ignitify deployment:delete &lt;id&gt;</span>, then deploy again. A hook of the deleted deployment must be created again.</div>\n        </div>\n      </div>\n      <p class=\"def\">\n        <strong>Licences.</strong> System packages come from Debian <span class=\"mono\">main</span> (free software).\n        Each build keeps a list of the source packages and versions, and the sources stay on snapshot.debian.org.\n      </p>\n\n      <h2>A complete example</h2>\n      <pre class=\"term\">schema_version: 1\nslug: streaming-job\nruntime: node\n\nexecution:\n  cardinality: one\n  duration: short\n  state: independent\n  interaction: continuous\n  network:\n    type: egress\n\nrun:\n  payload:\n    q: war\n  timeout_sec: 15</pre>\n";
//#endregion
//#region src/content/docs/_bodies/concepts.astro
var concepts_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Concepts,
	file: () => $$file$36,
	url: () => void 0
});
var $$Concepts = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Tasks, deployments, runs, VMs</h1><p class="def">Four nouns, one ownership chain. There is no "project" layer between a tenant and a task.</p><pre class="term">tenant → task → deployment → run → (VM)</pre><div class="grid g3"><div class="card"><h2>Task</h2><p class="def">A standing name that lives forever. <span class="mono">task:create</span> reserves the slug and gives it a stable id. Nothing is built or run yet.</p></div><div class="card"><h2>Deployment</h2><p class="def"><strong>Immutable and content-addressed.</strong> <span class="mono">task:deploy</span> uploads the source. The platform builds it once and dedups on the content hash, so the same bytes deployed twice reuse the first build.</p></div><div class="card"><h2>Run</h2><p class="def">One job, started from one deployment, in its own MicroVM or a warm one of yours. <span class="mono">task:run</span> returns an id at once, and the VM boots behind it.</p></div></div><p class="def">A <strong>VM</strong> is not a fourth thing you create. It is what a run boots into. Whether it is torn down after the run or kept warm is the <span class="mono">residency</span> axis, on <a href="/docs/concepts/seven-axes">The seven axes</a>.</p><h2>The VM</h2><p class="def">Each run is kept apart from every other run. The motion shows how one VM is isolated, from its start to its end. For the full detail, see <a href="/platform#platform-isolation">the three boundaries</a>.</p>${renderComponent($$result, "Motion", $$Motion, { "id": "microvm-simple" })}<h2>Why deployments are separate from tasks</h2><p class="def">A task is a name you keep. A deployment is one verified build under that name. The same source always resolves to the same deployment, so repeating <span class="mono">task:deploy</span> after a network error never builds a second copy.</p><h2>Why runs are separate from deployments</h2><p class="def">One deployment run 500 times a day is 500 runs and one deployment. You pay the build once and each run every time. So <span class="mono">task:delete</span> reports both counts, and <a href="/docs/reference/errors">the entitlement gate</a> asks different questions at deploy time and at run time.</p><aside class="callout callout-note"><span class="callout-i" aria-hidden="true"></span><div class="callout-b"><p class="callout-t">Ids</p><div class="callout-x"><p>Every id is a UUIDv7, plus a short <span class="mono">resource_id</span> (<span class="mono">tsk_…</span>, <span class="mono">run_…</span>). Commands that create a resource show both. Either one works as an argument to a later command.</p></div></div></aside>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/concepts.astro", void 0);
var $$file$36 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/concepts.astro";
//#endregion
//#region src/content/docs/_bodies/errors.astro
var errors_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Errors,
	file: () => $$file$35,
	url: () => void 0
});
var $$Errors = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms",
		usage: "account-and-usage",
		whoami: "account-and-usage"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Errors</h1><p class="def">Every failure prints an <code>Error:</code> line on stderr and exits with code <code>1</code> (130 if you press Ctrl+C during a wait). Find your line below. Each entry gives what it means and one command to fix it.</p><p class="def">A refusal from the server prints the sentence and its code in brackets: <code>Error: &lt;sentence&gt; [&lt;reason&gt;]</code>. The code is stable, and the sentence can change. With <code>--json</code> the CLI prints the raw answer instead, <code>${"API <status>: {\"error\":…,\"reason\":…}"}</code>, with extra fields such as <code>limit</code> and <code>observed</code>.</p><p class="def"><a href="/docs/guides/troubleshoot">Troubleshoot</a> covers exit codes and the trace id.</p><h2>Three gates refuse a request</h2><p class="def">A refusal comes from one of three gates, and each has a different fix. A plan limit asks for a wait or a bigger plan. A capacity refusal asks for a short wait. A capability refusal asks you to change what you declare, or your plan.</p><h2>Plan limits</h2><h3>A monthly limit is reached</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run fetch",
		"output": `✗ Run refused — a monthly limit is reached (monthly-compute-quota).
  Monthly compute limit reached: 20.0 h of 20.0 h used (100%) since 2026-10-14T09:12:40.000Z. It resets at 2026-11-14T09:12:40.000Z. For details, run: ignitify quota
server trace id: 019fdecb-1e57-7c08-9a46-d3b2f7e0a619`
	})}<p class="def">The monthly allowance of your plan is used up (the Free plan has one for compute). The month starts on the day and time you bought the plan and starts again at each paid renewal; with no paid plan, it starts on your sign-up day. While a payment has failed, the allowance does not start again: it resets at your next paid renewal. Fix: <code>ignitify quota</code> shows what you used in this month and when it resets.</p><h3>Too many runs at the same time</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run fetch",
		"output": `Error: concurrent run quota exceeded (tier starter v1: {{tiers.starter.running}}) [concurrent-run-quota]
server trace id: 01a15a8b-f5a5-70bc-b49f-151fbe8797a9`
	})}<p class="def">Your plan allows a set number of runs at the same time, and all of them are in use. In the <code>--json</code> body, <code>limit</code> is the number your plan allows. <code>observed</code> is the number of runs you have now. <code>--on-busy queue</code> does not wait for this limit. A webhook gets the same 429, and no run starts. A scheduled run waits and tries again for a limited time. Fix: wait for a run to finish, or stop one with <code>ignitify run:cancel &lt;run-id&gt;</code>. <code>ignitify quota</code> shows your live runs against the limit. A bigger plan allows more runs at the same time.</p><h3>Your units are full</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run report",
		"output": `Error: run unit quota exceeded (tier {{units.example.plan}} v1: {{units.example.max}}) — wait for a run to end, use a lighter preset (ignitify whoami shows each weight) or upgrade the tier [run-unit-quota]
server trace id: 019fdecf-2c71-7b05-9e48-6a3d1f0c8b27`
	})}<p class="def">Your plan has a units limit, and the new run needs more units than are free. In the <code>--json</code> body, <code>limit</code> is the units your plan allows, and <code>observed</code> is the units your active runs use now. Here, <code>report</code> uses <code>${"{{units.example.refused}}"}</code>, which weighs ${"{{units.example.refused.weight}}"} units. The running-VM limit is checked first, so a VM was still free. <code>--on-busy queue</code> does not wait for this limit. Fix: wait for a run to end, or set a lighter <code>run.preset</code>. <code>ignitify whoami</code> shows the weight of each preset, and <a href="/docs/concepts/how-capacity-works">How capacity works</a> explains units.</p><h3>You run too fast</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run fetch",
		"output": `Error: run rate quota exceeded (per minute) (tier starter v1: 60) [run-rate-quota]
server trace id: 019fdece-4a18-7e3c-b5d2-8c1f6a0e9d73`
	})}<p class="def">Your plan allows a set number of runs in the window, and you used them. In the <code>--json</code> body, <code>limit</code> is that number and <code>observed</code> is how many runs you had already started in the window. Fix: <code>ignitify whoami</code> shows the limit; run again after the window.</p><h3>You send requests too fast</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:list",
		"output": `Error: API request rate limit exceeded [rate-limited]
server trace id: 019fdece-9b27-7a41-8d05-3e6c2f1a7b58`
	})}<p class="def">Your plan allows a set number of API requests each second, and a script sent more. This is not the run limit above. Fix: slow the script, then send the request again.</p><h3>A bidirectional task already has a VM</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run listen --on-busy reject",
		"output": `✗ Run refused — this bidirectional deployment already has a live VM.

  Concurrent VMs for bidirectional-network tasks are not supported
  (one VM at a time).

  Retry when the live VM finishes, or omit --on-busy=reject to queue instead.
server trace id: 019fdecc-83a2-7d15-b0e9-4f6c1a2d7e30`
	})}<p class="def">A task that takes inbound traffic runs one VM at a time. Fix: <code>ignitify task:run listen --on-busy queue</code> waits for the VM.</p><h2>Capacity</h2><p class="def">A capacity refusal means no host can fit your VM right now. It is not about your plan, and it never names a tier. Wait a short time and run again.</p>${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`No live capacity refusal has been recorded yet, so no example line is shown. Its JSON carries <code>"boundBy":"host-capacity"</code> in place of <code>"tier-entitlement"</code>.` })}<h2>Capability</h2><h3>Your plan does not include it</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify hook:create nightly-report",
		"output": `Error: webhooks are not included in your current tier (capability 'may_use_webhooks'; task nightly-report) [capability-denied]
server trace id: 019fdecd-5d09-7b64-a8c1-2e9f0b3d6a47`
	})}<p class="def">Your plan does not allow this kind of work. Fix: <code>ignitify whoami</code> lists what your plan allows in its <code>may_…</code> lines.</p><h3>A declaration is refused</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:validate fetch",
		"output": `Error: task.yaml: unknown run.preset "std.mikro" (valid: std.micro, std.small, std.medium, std.large, std.xlarge, mem.large, mem.xlarge, cpu.large). An unrecognised preset would silently fall back to the platform default, giving you a different instance class than you declared.`
	})}<p class="def">The platform refuses a value it cannot honour, and the line names the field. Fix: correct the field, then run <code>ignitify task:validate fetch</code> again. <a href="/docs/reference/refused-values">Refused values</a> lists every case.</p><h2>Before the request is sent</h2><h3>Not signed in</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify whoami",
		"output": "Error: Not signed in. Run 'ignitify login', or set the IGNITIFY_API_KEY environment variable."
	})}<p class="def">The CLI has no key. Fix: run <code>ignitify login</code> (see <a href="/docs/install">Install and sign in</a>). A key that is wrong or revoked answers <code>Error: API 401</code>.</p><h3>Unknown flag</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify task:run fetch --paylod '{}'`,
		"output": "Error: unknown flag --paylod for task:run. Did you mean --payload?"
	})}<p class="def">The flag is not one of that command's flags. Fix: <code>ignitify help task:run</code> lists the flags of one command.</p><h3>The payload is too large</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify task:run fetch --payload "$(cat big.json)"`,
		"output": "Error: payload is 12011 bytes; the limit is {{cli.payload.bytes}} bytes"
	})}<p class="def">The payload is over the limit of ${"{{limits.payload.short}}"}. Keep large data in your own storage and pass a link in <code>--payload</code>.</p><h2>Deploys and builds</h2><h3>No deployment found</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run fetch",
		"output": "Error: no deployment found for 'fetch' — run `ignitify task:deploy fetch` first, or pass --deployment <id> explicitly."
	})}<p class="def">The task has no deployment to run. Fix: <code>ignitify task:deploy fetch</code>.</p><h3>The latest deploy is still building</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run fetch",
		"output": "Error: the latest deploy of fetch is still building (019fdec9-0c3e-7b52-a417-6e2d9f8b1c05). Wait for it ('ignitify deployment:get 019fdec9-0c3e-7b52-a417-6e2d9f8b1c05'), or pass --deployment <id> to run an older one."
	})}<p class="def">A run needs a finished build. Fix: <code>ignitify deployment:get 019fdec9-0c3e-7b52-a417-6e2d9f8b1c05</code> until its status is <code>READY</code>.</p><h3>The build failed</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:deploy broken",
		"output": `✗ Build failed · 23s
Error: deployment 019fdeca-6b14-7a90-8e23-c1d4f0a7b958 failed to build — the build failed at stage "fetch" (exit 1)

Build log:
  build refused at stage "fetch": npm ci failed:
  npm error code E404
  npm error 404  'no-such-package@1.0.0' is not in this registry.`
	})}<p class="def">The build stopped at the named stage, and the log tail shows why. Fix: <code>ignitify deployment:get 019fdeca-6b14-7a90-8e23-c1d4f0a7b958</code> prints the failure and the last ${"{{cli.buildlog.lines}}"} lines of the build log.</p><h3>The latest deploy failed</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run broken",
		"output": `Error: the latest deploy of broken failed: the build failed at stage "fetch" (exit 1). Fix the task and run 'ignitify task:deploy broken' again, or pass --deployment <id> to run an older one.`
	})}<p class="def">The newest build failed, so there is nothing new to run. Fix: change the task, then <code>ignitify task:deploy broken</code>.</p><h2>Access</h2><h3>The key does not have the permission</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:deploy hello",
		"output": `Error: permission denied: this key needs the deployments.write permission. Ask the owner to grant it to one of your groups.`
	})}<p class="def">This is a user key, and none of its groups grants the permission (<code>permission-denied</code>). Fix: <code>ignitify whoami</code> shows the permissions of the key. Ask the owner to add the named permission to one of your groups. See <a href="/docs/guides/access-control">Users, groups and permissions</a>.</p><h3>Only an owner key can do this</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify user:list",
		"output": `Error: owner key required: only owner keys manage users, groups and keys. This is a user key.`
	})}<p class="def">The <code>user:*</code>, <code>group:*</code> and <code>key:*</code> commands need an owner key (<code>owner-required</code>). Fix: run the command with the key from <code>ignitify login</code>.</p><h2>Scripts and CI</h2><h3>The idempotency key was used for another run</h3><p class="def"><code>task:run --idempotency-key</code> is refused when the key was already sent with a different request: <code>Error: Idempotency-Key was already used for a different request</code>. The CLI adds: <code>Use a new --idempotency-key for a different run. Reuse a key only to retry the same run.</code> If the first request with the key is still in progress, the CLI says to retry with the same key shortly. Fix: use a new key for each new run, and pin <code>--deployment</code>. See <a href="/docs/guides/pass-input-and-read-results#retry-a-run-safely">Retry a run safely</a>.</p><h3>A script cannot answer the question</h3>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify vm:delete vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47 < /dev/null",
		"output": `Will tear down VM vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47.
Error: Refusing to proceed: not a TTY. Re-run with --yes to confirm non-interactively.
Aborted.`
	})}<p class="def">A delete asks you to confirm, and a script has no keyboard. Fix: add <code>-y</code> to every delete in a script.</p><h3>Read the reason, not the text</h3><p class="def">The words before the brackets are for people and can change. The code in brackets is stable. In a script, run the command with <code>--json</code> and read the <code>reason</code> field (a tier refusal also has <code>boundBy</code>) in the JSON after <code>API &lt;status&gt;:</code>.</p>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Troubleshoot",
			href: "/docs/guides/troubleshoot"
		},
		{
			label: "Refused values",
			href: "/docs/reference/refused-values"
		},
		{
			label: "task:run",
			href: ref("task:run")
		},
		{
			label: "whoami",
			href: ref("whoami")
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/errors.astro", void 0);
var $$file$35 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/errors.astro";
//#endregion
//#region src/content/docs/_bodies/guide-access-control.astro
var guide_access_control_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideAccessControl,
	file: () => $$file$34,
	url: () => void 0
});
var $$GuideAccessControl = createComponent(($$result, $$props, $$slots) => {
	const access = (cmd) => `/docs/cli/access#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Users, groups and permissions</h1><p class="def">Give each person, CI job or AI client its own key. Each key gets only the permissions it needs, and you can revoke it alone. You need CLI 2.0.0 or later.</p><h2>Owner keys and user keys</h2>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Key", "What it can do"],
		"rows": [{
			name: "Owner key",
			text: "Everything. It is the only key that manages users, groups and keys. You get it from `ignitify login`."
		}, {
			name: "User key",
			text: "It belongs to one user. It has the permissions of that user's groups, and nothing more. The owner makes it with `ignitify key:create`."
		}]
	})}<ul><li>A user has a name only. A user has no password, no email and cannot sign in.</li><li>A user's permissions are the union of the permissions of all its groups. A user in no group can only run <code>whoami</code> and the commands that need no key.</li><li>Only an owner key can run the <code>user:*</code>, <code>group:*</code> and <code>key:*</code> commands. A user key cannot change its own access, so it can never lock the owner out.</li><li>A user key does not expire. It works until you revoke it, or remove its user.</li></ul><h2>The permissions</h2><p class="def">A group grants permissions from a fixed list of 11. You cannot make a new one. Read and write are separate for each resource, and a delete is a write.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify permission:list",
		"output": `permission         allows
─────────────────  ─────────────────────────────────────────────────────────────
tasks.read         Read tasks
tasks.write        Create and delete tasks. Note: …
deployments.read   Read deployments and build logs
deployments.write  Deploy, delete a deployment, ask for package advice
runs.read          Read runs, logs, timeline, failures, schedules, VMs
runs.write         Start, cancel, delete runs; create, edit, pause and delete
                   schedules; stop VMs
secrets.read       List secret names (values are never readable). Note: …
secrets.write      Set and delete secrets
hooks.read         List a task's hooks, read one hook
hooks.write        Create and delete hooks; set notify. Note: …
usage.read         Usage, series, notifications`
	})}<p class="def"><a${addAttribute(access("permission:list"), "href")}><code>permission:list</code></a> needs no key and sends no request. Three permissions reach further than their name:</p>${renderComponent($$result, "Callout", $$Callout, {
		"kind": "warning",
		"title": "Read these before you grant"
	}, { "default": ($$result) => renderTemplate`<ul><li><strong><code>secrets.read</code></strong> lists secret names only. But <code>deployments.write</code> plus <code>runs.write</code> can read secret values: a user can deploy code that prints its environment, then run it. Treat that pair as access to your secret values.</li><li><strong><code>hooks.write</code></strong> can start runs, because a webhook trigger starts a run. It can also send run results to any URL (notify). Grant it only where <code>runs.write</code> is acceptable too.</li><li><strong><code>tasks.write</code></strong> can delete a task. That also deletes its deployments and runs, and stops their VMs. Grant it only where <code>deployments.write</code> and <code>runs.write</code> are acceptable too.</li></ul>` })}<h2>1 · Create a group</h2><p class="def">Do these steps with your owner key. Name the permissions, separated by commas.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify group:create readers --permissions tasks.read,deployments.read,runs.read,usage.read" })}<p>A user or group name is 1 to 63 lower case letters, digits and <code>-</code>, and starts with a letter or a digit. The CLI checks names and permissions before it sends the request. To change a group later, use <a${addAttribute(access("group:grant"), "href")}><code>group:grant</code></a> and <a${addAttribute(access("group:revoke"), "href")}><code>group:revoke</code></a>.</p><h2>2 · Create a user and add it to the group</h2>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify user:create ai-assistant
ignitify group:add-user readers ai-assistant` })}<p>A user can be in more than one group. <a${addAttribute(access("user:get"), "href")}><code>user:get</code></a> shows its groups, its permissions and its live keys.</p><h2>3 · Create a key for the user</h2><p class="def">Write the key to a new file with <code>--out</code>. The file gets mode 0600, and the CLI prints only the key id.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify key:create --user ai-assistant --label laptop --out ./ai-assistant.key",
		"output": `✓ key key_Hn4TqXw8Zc2 written to ./ai-assistant.key (mode 0600). Hand the file over, then delete your copy.`
	})}<ul><li><code>--user</code> and <code>--label</code> are required. The label tells you later where the key is used.</li><li><code>--out</code> writes a new file only. It never writes over a file and never follows a link. If the file exists, no key is made.</li><li>Without <code>--out</code>, the CLI prints the key on the terminal.</li></ul>${renderComponent($$result, "Callout", $$Callout, {
		"kind": "warning",
		"title": "The key is shown once"
	}, { "default": ($$result) => renderTemplate`You cannot read a key again. Give the key to its holder by hand, then delete your copy. If a key is lost, revoke it with <a${addAttribute(access("key:revoke"), "href")}><code>key:revoke</code></a> and create a new one.` })}<h2>4 · Use the key</h2><p class="def">The holder puts the key in the <code>IGNITIFY_API_KEY</code> environment variable. The CLI uses this variable before a saved login.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `export IGNITIFY_API_KEY="$(cat ./ai-assistant.key)"
ignitify whoami`,
		"output": `
Tenant Profile
…

This Key
key          key_Hn4TqXw8Zc2
user         ai-assistant
groups       readers
permissions  tasks.read, deployments.read, runs.read, usage.read
…`
	})}<p><a href="/docs/cli/account-and-usage#whoami"><code>whoami</code></a> shows the <strong>This Key</strong> block: the key, its user (<code>owner</code> for an owner key), its groups and its permissions.</p><h2>When a key is refused</h2><p class="def">A user key that does not have the permission gets <code>permission-denied</code>. The message names the permission, so the holder knows what to ask for.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:deploy hello",
		"output": `Error: permission denied: this key needs the deployments.write permission. Ask the owner to grant it to one of your groups.`
	})}<p class="def">A user key on a <code>user:*</code>, <code>group:*</code> or <code>key:*</code> command gets <code>owner-required</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify key:list",
		"output": `Error: owner key required: only owner keys manage users, groups and keys. This is a user key.`
	})}<h2>Revoke and remove</h2><ul><li><a${addAttribute(access("key:revoke"), "href")}><code>key:revoke &lt;key-id&gt;</code></a> stops one key at once. <a${addAttribute(access("key:list"), "href")}><code>key:list</code></a> shows each key with its user, label and last use, never the key value.</li><li><a${addAttribute(access("user:remove"), "href")}><code>user:remove &lt;name&gt;</code></a> revokes all keys of the user and removes it from all groups. You can use the name again.</li><li><a${addAttribute(access("group:remove-user"), "href")}><code>group:remove-user</code></a> and <a${addAttribute(access("group:delete"), "href")}><code>group:delete</code></a> take permissions away. Users and keys stay.</li><li>A change has an effect on the next request of the key.</li></ul><h2>The key limit</h2><p class="def">Your plan limits the number of live API keys. The limit counts every key: owner keys and user keys together. The limits are: ${"{{tiers.keys}}"}.</p><p>When you are at the limit, <code>key:create</code> is refused. Revoke a key you no longer use, or remove its user. See <a href="/pricing">Pricing</a> and <a href="/docs/guides/watch-usage-and-limits">Watch usage and limits</a>.</p><h2>Example · A read-only AI assistant</h2><p class="def">An AI client can read your tasks, deployments, runs and usage, but cannot change anything.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify group:create readers --permissions tasks.read,deployments.read,runs.read,usage.read
ignitify user:create ai-assistant
ignitify group:add-user readers ai-assistant
ignitify key:create --user ai-assistant --label laptop --out ./ai-assistant.key` })}<p>Put the key only in the environment of the AI client, as <code>IGNITIFY_API_KEY</code>. <a href="/docs/guides/ai-harness">Use an AI client</a> tells you how.</p><h2>Example · A CI job that deploys and runs</h2><p class="def">A CI job can deploy a task and start runs. It cannot set secrets, delete tasks or manage access.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify group:create ci --permissions tasks.read,deployments.read,deployments.write,runs.read,runs.write
ignitify user:create github-ci
ignitify group:add-user ci github-ci
ignitify key:create --user github-ci --label github --out ./github-ci.key` })}<p>Put the contents of <code>github-ci.key</code> in your CI system's secret store, and give it to the job as <code>IGNITIFY_API_KEY</code>. Remember that <code>deployments.write</code> plus <code>runs.write</code> can read secret values.</p><p>In the job, start a run with <code>--idempotency-key</code>, so a retry after a network error starts no second run:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `DEPLOYMENT_ID="$(ignitify task:deploy hello --json | jq -r .resource_id)"
ignitify task:run hello --deployment "$DEPLOYMENT_ID" --idempotency-key "ci-run-$CI_PIPELINE_ID"` })}<p>Here <code>CI_PIPELINE_ID</code> stands for the unique id that your CI system gives each pipeline. The script pins <code>--deployment</code>, so a retry sends the same request.</p><p>See <a href="/docs/guides/pass-input-and-read-results#retry-a-run-safely">Retry a run safely</a> for the rules of the key.</p>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Access control commands",
			href: "/docs/cli/access"
		},
		{
			label: "Use an AI client",
			href: "/docs/guides/ai-harness"
		},
		{
			label: "Install and sign in",
			href: "/docs/install"
		},
		{
			label: "Use secrets",
			href: "/docs/guides/use-secrets"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-access-control.astro", void 0);
var $$file$34 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-access-control.astro";
//#endregion
//#region src/content/docs/_bodies/guide-ai-harness.astro
var guide_ai_harness_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideAiHarness,
	file: () => $$file$33,
	url: () => void 0
});
var $$GuideAiHarness = createComponent(($$result, $$props, $$slots) => {
	const REPO = "https://github.com/ignitify-dev/ignitify-tenant-harness";
	return renderTemplate`${maybeRenderHead($$result)}<h1>Use an AI client</h1><p class="def">The <a${addAttribute(REPO, "href")} target="_blank" rel="noopener">Ignitify AI harness</a> is an open-source (Apache-2.0) set of skills, prompts, templates and examples. It teaches your AI client how Ignitify works and how to use the <code>ignitify</code> CLI, so it can write a task, find why a run failed, or explain a failed build.</p><h2>What it is</h2><ul><li><strong>Your client, your model.</strong> Ignitify makes no model call for the harness. Your AI client (Claude Code, an IDE assistant, or any client that reads files and runs shell commands) reads it and uses its own model.</li><li><strong>The CLI is the only tool.</strong> The client runs <code>ignitify …</code> commands with the key you give it. There is no extra server.</li><li><strong>Your own work only.</strong> It covers your tasks, deployments, runs, recurring schedules, secrets, webhooks, limits and usage.</li></ul><p>The repository holds skills in the open Agent Skills format, sample prompts (diagnose a run, write a task, review a <code>task.yaml</code>, explain a failed deploy, prepare a support report), <code>task.yaml</code> starters for Node, Python, Go and Rust, small working examples, a Claude Code plugin, and an <code>AGENTS.md</code> block for other clients. A skill for Terraform and OpenTofu (<code>ignitify-terraform</code>) helps the client write the configuration that sets up your tenant as code. See <a href="/docs/guides/terraform">Manage a tenant with Terraform</a>.</p><h2>1 · Install the CLI</h2><p class="def">The client needs the CLI, version 3.2.0 or later. You sign in once yourself, to get the owner key that creates the client's key. See <a href="/docs/install">Install and sign in</a>.</p><h2>2 · Add the harness to Claude Code</h2><p class="def">Add the repository as a plugin source, then install the plugin.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `/plugin marketplace add ignitify-dev/ignitify-tenant-harness
/plugin install ignitify@ignitify-tenant-harness`,
		"output": ``
	})}<p>The skills load when they apply. The plugin adds the commands <code>/ignitify:diagnose-run</code>, <code>/ignitify:write-task</code>, <code>/ignitify:review-task-yaml</code>, <code>/ignitify:why-deploy-failed</code> and <code>/ignitify:prepare-support-report</code>.</p><h2>Or use the install script</h2><p class="def">The script downloads one tagged release, checks its SHA-256, and copies files. It needs no root and no npm, and <code>--uninstall</code> removes exactly what it installed. Read the script before you run it.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"label": "Claude Code",
		"command": "curl -fsSL https://raw.githubusercontent.com/ignitify-dev/ignitify-tenant-harness/v0.1.4/install.sh | sh -s -- --client claude-code",
		"output": ``
	})}<p>This puts the skills and commands in <code>~/.claude</code>. To check the download, add <code>--sha256 &lt;hex&gt;</code> with the checksum from the release notes. Add <code>--scope project</code> to use <code>./.claude</code> instead.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"label": "Any other client",
		"command": "curl -fsSL https://raw.githubusercontent.com/ignitify-dev/ignitify-tenant-harness/v0.1.4/install.sh | sh -s -- --client generic",
		"output": ``
	})}<p>This puts the files in <code>./.ignitify-harness</code>. Then add the block from <code>AGENTS.md</code> to your project.</p><h2>Other clients, by hand</h2><p>Copy the <code>skills/</code> folder into the skills folder of your client. Copy the block in <code>clients/generic/AGENTS.md</code> into your project's instruction file. The <a${addAttribute(REPO, "href")} target="_blank" rel="noopener">README</a> has the details.</p><h2>Give the client a read-only key</h2><p class="def">Give your AI client its own key that can only read. Then a client that ignores its instructions still cannot deploy, run, delete or read secrets. You need CLI 3.2.0 or later, and an owner key (the key from <code>ignitify login</code>).</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify permission:list
ignitify group:create readers --permissions tasks.read,deployments.read,runs.read,secrets.read,hooks.read,usage.read
ignitify user:create ai-assistant
ignitify group:add-user readers ai-assistant
ignitify key:create --user ai-assistant --label laptop --out ./ai-assistant.key` })}<p>The last command writes the key to a new file (mode 0600). The key is shown once. Give the key to the AI client only through <code>IGNITIFY_API_KEY</code> in the environment of that client, for example in the shell or the settings you start the client from. Keep it out of your own shell profile, so your own commands still use your owner key. Then delete the file.</p><p>When the client runs <code>ignitify whoami</code>, the <strong>This Key</strong> block shows <code>user ai-assistant</code> and the six read permissions. A write is refused with <code>permission-denied</code>. To stop the client, run <code>ignitify key:list --user ai-assistant</code>, then <code>ignitify key:revoke &lt;key-id&gt;</code>. <a href="/docs/guides/access-control">Users, groups and permissions</a> has the details.</p><h2>Use it safely</h2>${renderComponent($$result, "Callout", $$Callout, {
		"kind": "warning",
		"title": "Your own key is full access"
	}, { "default": ($$result) => renderTemplate`Without its own key, your AI client uses the key you signed in with. It can do what you can do: deploy, run (a run uses your plan and costs compute), cancel and delete. Give it a read-only key, as shown above.` })}<ol><li>The skills tell the client to read freely, ask before every write, and never delete, use secret commands, or run <code>login</code> and <code>logout</code>. These are instructions, not a lock. A client can ignore them. The read-only key is the lock.</li><li>In Claude Code, add the rules from <code>clients/claude-code/settings.example.json</code> to your <code>.claude/settings.json</code>. They allow read-only commands, ask before writes, and deny the destructive and secret commands.</li><li>Give the client only its read-only key. Do not put your owner key in the environment of your AI client.</li><li>If you add a write permission to the client's group, read every command your client proposes. Do not approve <code>--yes</code> on a delete you did not ask for.</li><li>Your client sends what it reads (run logs, results, <code>task.yaml</code>) to its model vendor. Keep secrets out of logs and results.</li><li>Run logs and results are written by your code. The skills tell the client to treat them as data, not as instructions.</li></ol>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Install and sign in",
			href: "/docs/install"
		},
		{
			label: "Users, groups and permissions",
			href: "/docs/guides/access-control"
		},
		{
			label: "Use secrets",
			href: "/docs/guides/use-secrets"
		},
		{
			label: "Troubleshoot",
			href: "/docs/guides/troubleshoot"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-ai-harness.astro", void 0);
var $$file$33 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-ai-harness.astro";
//#endregion
//#region src/content/docs/_bodies/guide-choose-a-vm-size-and-disk.astro
var guide_choose_a_vm_size_and_disk_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideChooseAVmSizeAndDisk,
	file: () => $$file$32,
	url: () => void 0
});
var $$GuideChooseAVmSizeAndDisk = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms",
		secret: "secrets",
		schedule: "schedules"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	const exampleName = fillDocTokens("{{presets.example.name}}", "guide-choose-a-vm-size-and-disk");
	const exampleDefault = fillDocTokens("{{presets.example.default}}", "guide-choose-a-vm-size-and-disk");
	return renderTemplate`${maybeRenderHead($$result)}<h1>Choose a VM size and disk</h1><p class="def">A preset sets the vCPU, memory and default scratch disk of the VM. You choose it with <code>run.preset</code> and can ask for a bigger disk with <code>storage_mib</code>.</p><h2>1 · Pick a preset</h2><p class="def">Set <code>run.preset</code> in <a href="/docs/reference/task-yaml">task.yaml</a>; the sizes are in <a href="/docs/concepts/presets-and-limits">Presets and limits</a>.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml",
		"code": `run:
  preset: ${exampleName}`
	})}<h2>2 · Check what your plan allows</h2><p class="def"><a href="/docs/cli/account-and-usage#whoami"><code>whoami</code></a> shows the presets and the scratch limit of your plan.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify whoami | grep -E 'allowed_presets|scratch_ceiling'",
		"output": `scratch_ceiling          512 MiB
allowed_presets             std.micro, std.small`
	})}<h2>3 · On a plan with units, check the weight</h2><p class="def">On a plan with a units limit, a bigger preset uses more units while it runs. <code>whoami</code> shows the weight of each preset that your plan allows. See <a href="/docs/concepts/how-capacity-works">How capacity works</a>.</p><h2>4 · Ask for more disk</h2><p class="def"><code>execution.storage_mib</code> is a floor: use more than the preset default, up to your plan's limit.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml",
		"code": `execution:
  storage_mib: <MiB>   # more than the preset default, at most your plan's limit`
	})}<h2>5 · A value below the default is raised</h2><p class="def">With <code>storage_mib: 1</code>, the run gets the preset default, and the CLI prints a <code>storage-clamped</code> note.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run my-task",
		"output": `✓ Run Submitted
run_id       019fdec2-1b6c-7d90-a3f4-5c8e2b7d9e10
resource_id  run_Hx7LpA2nRc4V
status       PENDING

Note: storage_mib 1 is below the ${exampleName} default (${exampleDefault} MiB). The run uses ${exampleDefault} MiB.`
	})}<h2>6 · A value above your plan's limit is refused</h2><p class="def"><a${addAttribute(ref("task:run"), "href")}><code>task:run</code></a> refuses it. Nothing is capped for you.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run my-task",
		"output": `Error: execution.storage_mib: <n> MiB is above your plan's scratch limit (<n> MiB). Declare <n> or less. [bad-request]`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "tip" }, { "default": ($$result) => renderTemplate`Leave <code>storage_mib</code> out to get the preset default.` })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Presets and limits",
			href: "/docs/concepts/presets-and-limits"
		},
		{
			label: "How capacity works",
			href: "/docs/concepts/how-capacity-works"
		},
		{
			label: "Storage and residency",
			href: "/docs/concepts/storage-and-residency"
		},
		{
			label: "task:run",
			href: ref("task:run")
		},
		{
			label: "task.yaml",
			href: "/docs/reference/task-yaml"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-choose-a-vm-size-and-disk.astro", void 0);
var $$file$32 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-choose-a-vm-size-and-disk.astro";
//#endregion
//#region src/content/docs/_bodies/guide-integrations.astro
var guide_integrations_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideIntegrations,
	file: () => $$file$31,
	url: () => void 0
});
var $$GuideIntegrations = createComponent(($$result, $$props, $$slots) => {
	const AVAILABLE = "Available";
	return renderTemplate`${maybeRenderHead($$result)}<h1>Integrations</h1><p class="def">An integration writes the settings that a task needs for one service into your <a href="/docs/reference/task-yaml">task.yaml</a>, with one command. You see every change before it is written.</p><h2>1 · What an integration is</h2><p class="def">An integration is one npm package, <code>@ignitify-integrations/&lt;name&gt;</code>. It lists the settings that a task needs for one service: secret names, egress hosts, the network type, system packages and the smallest preset. Some integrations also have code that you import. They work with Node tasks.</p><ul><li><strong>task.yaml stays the one truth.</strong> The platform enforces only <code>task.yaml</code>, as today. It never reads the settings list of an integration.</li><li><strong>package.json is the record.</strong> Your task's own dependency list shows which integrations it has. <code>task.yaml</code> gets no new field.</li><li><strong>It is an option.</strong> You can always write the same settings by hand, and add any library or system package that you want.</li></ul><h2>2 · Add one to a task</h2><p class="def"><code>integration:add</code> shows a plan and asks before it changes anything.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "bash",
		"label": "usage",
		"code": `ignitify integration:add <name> --task <slug> [--yes | --dry-run] [--dir <base-dir>]`
	})}<ol><li>It downloads the latest version of the package into a temporary folder. Nothing in the task changes.</li><li>It shows the plan: each setting it adds or raises, and what you must add yourself.</li><li>It asks <code>Apply? [y/N]</code>. <code>--dry-run</code> stops after the plan. <code>--yes</code> skips the question.</li><li>Only after a yes, it installs that exact version as a normal dependency, with no install scripts, and writes <code>task.yaml</code>. Your comments and the order of your keys stay.</li></ol><p>The plan for <code>stream</code> on a task with no network and no preset:</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify integration:add stream --task live",
		"output": `@ignitify-integrations/stream@0.1.3 · settings + code · runs ffmpeg
  execution.network.type: none -> bidirectional
  run.preset: (default) -> std.medium
  + execution: duration long, interaction continuous
  + execution.network: inbound_port 8080
  + execution.network.inbound_routes: /live/
  + build.system_packages: ffmpeg
you add:
  egress host: the host of an https source (for example raw.githubusercontent.com); none for a local file
Apply? [y/N]`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`An "N", <code>--dry-run</code> or a refusal changes nothing in the task: not <code>package.json</code>, the lockfile, <code>node_modules</code> or <code>task.yaml</code>. If the install fails after a yes, <code>task.yaml</code> is not written.` })}<ul><li><strong>A conflict is refused, never overwritten.</strong> If your <code>task.yaml</code> has a value that the integration cannot use, the command stops and tells you which one. You change it by hand, or you use another task.</li><li><strong>Settings are only raised.</strong> The network type and the preset go up, never down. Lists such as secrets and system packages are joined.</li><li><strong>"you add" is yours.</strong> A host that is different for each user, such as your bucket host, is not written for you. Add it to <code>execution.network.egress_allow</code> yourself.</li><li><strong>The task needs a package.json.</strong> <code>task:create</code> writes one for a Node task. A task folder with no <code>package.json</code> is refused before npm runs.</li><li><strong>Without a terminal</strong>, use <code>--yes</code> or <code>--dry-run</code>, or the command refuses before npm runs.</li></ul><h2>3 · Check a task before you deploy</h2><p class="def"><code>task:validate</code> checks that <code>task.yaml</code> still covers every integration that the task has.</p><ul><li>If <code>package.json</code> lists an integration that is not in <code>node_modules</code>, it tells you to run <code>npm install</code> and checks nothing else.</li><li>It reports each setting that <code>task.yaml</code> no longer covers, for example a secret name that someone deleted or a preset that is too small. It cannot check the hosts that you add yourself.</li><li>It warns when an installed version is obsolete and names the latest one. For this it sends the package names to the public npm registry (<code>registry.npmjs.org</code>). With no network it skips this warning and tells you so. The warning does not change the exit code.</li></ul><h2>4 · Upgrade or remove</h2><p class="def">To upgrade, run <code>integration:add</code> again. It installs the latest version and shows only the new settings. Adding the same version again changes nothing.</p><p>To remove an integration, run <code>npm uninstall @ignitify-integrations/&lt;name&gt;</code> in the task folder. The settings it wrote stay in <code>task.yaml</code>: delete the ones that you no longer need.</p><h2>5 · The first integrations</h2><p class="def">Two integrations come first. Each one does the work that every task of that type repeats.</p><div class="drows"><table><thead><tr><th scope="col">Integration</th><th scope="col">Type</th><th scope="col">What you no longer build</th><th scope="col">Status</th></tr></thead><tbody>${INTEGRATIONS.map((i) => renderTemplate`<tr><td data-label="Integration"><a${addAttribute(detailUrl(i), "href")}><code>${i.name}</code></a></td><td data-label="Type">${i.kind}</td><td data-label="What you no longer build">${i.text}</td><td data-label="Status">${AVAILABLE}</td></tr>`)}</tbody></table></div><p>Each integration has a README with its settings and code. Read them in the public integrations repository: ${INTEGRATIONS.map((i, n) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`${n > 0 && (n === INTEGRATIONS.length - 1 ? " and " : ", ")}<a${addAttribute(readmeUrl(i), "href")}>${i.name}</a>` })}`)}. All integrations are in the <a${addAttribute(CATALOG_URL, "href")}>integration catalog</a>.</p><h2>6 · What runs where</h2><ul><li>The code of an integration runs only in your task's VM, with the secrets and hosts of that task. The build installs it from your lockfile, the same as any other dependency.</li><li>The plan shows every change before it is written, and your lockfile pins the exact version.</li><li>An integration cannot ask for a wildcard host, so <code>--yes</code> in a script cannot open egress to a whole domain.</li></ul><h2>7 · Try it</h2><p class="def">The tutorial <a href="/tutorials/launch-event">Launch event</a> uses both integrations in one task: stream a video live, and keep the recording in your own bucket.</p>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Use secrets",
			href: "/docs/guides/use-secrets"
		},
		{
			label: "Network access",
			href: "/docs/guides/network-access"
		},
		{
			label: "Pass input and read results",
			href: "/docs/guides/pass-input-and-read-results"
		},
		{
			label: "task.yaml",
			href: "/docs/reference/task-yaml"
		},
		{
			label: "CLI: integration:add",
			href: "/docs/cli/integrations#integration-add"
		},
		{
			label: "Launch event tutorial",
			href: "/tutorials/launch-event"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-integrations.astro", void 0);
var $$file$31 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-integrations.astro";
//#endregion
//#region src/content/docs/_bodies/guide-keep-a-vm-warm-or-pinned.astro
var guide_keep_a_vm_warm_or_pinned_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideKeepAVmWarmOrPinned,
	file: () => $$file$30,
	url: () => void 0
});
var $$GuideKeepAVmWarmOrPinned = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		run: "runs",
		vm: "vms",
		account: "account-and-usage",
		quota: "account-and-usage"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	const plain = (text) => text.split("\n").map((line) => ({
		kind: "plain",
		text: line
	}));
	const TABLE = `vm_id                                    deployment_id                         task_slug  preset     residency  state           age  idle
---------------------------------------  ------------------------------------  ---------  ---------  ---------  --------------  ---  ----
vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47  019fdec7-1d02-7a68-8f35-4b9c0e7d2a16  worker     std.small  pinned     pinned-standby  19s  12s`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Keep a VM warm or pinned</h1><p class="def">A warm VM serves your next run without a cold boot, and a pinned VM stays until you delete it. Look at your VMs with <a${addAttribute(ref("vm:list"), "href")}><code>vm:list</code></a> and remove one with <a${addAttribute(ref("vm:delete"), "href")}><code>vm:delete</code></a>.</p><h2>1 · Declare it in task.yaml</h2><p class="def">Declare <code>cardinality: many</code> to reuse a VM between runs, and add <code>residency: pinned</code> to keep it until you delete it.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml",
		"code": `execution:
  cardinality: many     # one VM can serve many runs
  residency: pinned     # auto (default) = reaped when idle`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`Pinning needs a plan that allows it: ${"{{tiers.gate.pin}}"}. The samples with a pinned VM on this page, and on the vm pages of the CLI reference, come from a tenant on a plan that allows it.` })}<h2>2 · Run it and list your VMs</h2><p class="def"><code>vm:list</code> shows each live VM with its residency, state, age and idle time.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify vm:list",
		"output": plain(TABLE)
	})}<h2>3 · Look at one VM</h2><p class="def"><a${addAttribute(ref("vm:get"), "href")}><code>vm:get</code></a> adds the boot time to the detail of one VM.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify vm:get vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47",
		"output": `VM Details
vm_id            vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47
deployment_id    019fdec7-1d02-7a68-8f35-4b9c0e7d2a16
task_slug        worker
preset           std.small
residency        pinned
state            pinned-standby
booted_at        2026-10-14T19:00:18.689Z
age              26s
idle             19s`
	})}<h2>4 · Show only pinned VMs</h2><p class="def"><code>--pinned</code> lists the pins, and a <code>⚠</code> after the idle time marks a pin idle past the warning window, which is only a warning.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify vm:list --pinned",
		"output": plain(TABLE)
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`A host restart ends a pin: <code>vm:list --pinned</code> reports it as lost, and the next run sets the pin again.` })}<h2>5 · Delete a VM</h2><p class="def">A pinned VM needs <code>--force</code> to unlock the delete, and <code>-y</code> skips the question that <code>--force</code> does not.</p>${renderComponent($$result, "ExampleTabs", $$ExampleTabs, { "id": "vm-delete" }, {
		"output": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "output" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify vm:delete vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47 --force -y",
			"output": `Will tear down VM vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47 (PINNED — --force given).
VM deleted: vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47`
		})}` })}`,
		"error": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "error" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify vm:delete vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47",
			"output": `Refusing to delete vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47: this VM is PINNED (permanent standby, alive 0.0h).
Deleting it is exactly what "permanent" protects against — re-run with --force if you mean it.`
		})}` })}`
	})}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "vm:list",
			href: ref("vm:list")
		},
		{
			label: "vm:get",
			href: ref("vm:get")
		},
		{
			label: "vm:delete",
			href: ref("vm:delete")
		},
		{
			label: "Storage and residency",
			href: "/docs/concepts/storage-and-residency"
		},
		{
			label: "Watch usage and limits",
			href: "/docs/guides/watch-usage-and-limits"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-keep-a-vm-warm-or-pinned.astro", void 0);
var $$file$30 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-keep-a-vm-warm-or-pinned.astro";
//#endregion
//#region src/content/docs/_bodies/guide-network-access.astro
var guide_network_access_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideNetworkAccess,
	file: () => $$file$29,
	url: () => void 0
});
var $$GuideNetworkAccess = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Network access</h1><p class="def">A task has no network until you ask for it. Set <code>execution.network</code> in <a href="/docs/reference/task-yaml">task.yaml</a> to let it call out, or to serve requests.</p><h2>1 · Allow outbound hosts</h2><p class="def">Set <code>type: egress</code> and list the hosts the task may reach; leave the list out to allow all hosts, or write <code>[]</code> to allow none.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml",
		"code": `execution:
  network:
    type: egress              # none (default) | egress | bidirectional
    egress_allow:
      - api.github.com
      - "*.s3.amazonaws.com"  # a left-most * is the only wildcard`
	})}<h2>2 · Check it offline</h2><p class="def"><a${addAttribute(ref("task:validate"), "href")}><code>task:validate</code></a> refuses a network block that does not fit together before you deploy.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:validate fetch",
		"output": "✓ task config valid"
	})}<h2>3 · Reach an allowed host</h2><p class="def">A call to a host on the list works.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify task:run fetch --payload '{"url":"https://api.github.com"}' --wait`,
		"output": `✓ Run COMPLETED · 9s

Run Details
status  COMPLETED

Result:
  {
    "url": "https://api.github.com",
    "status": 200
  }`
	})}<h2>4 · See a blocked host</h2><p class="def">A call to any other host is cut off, and the task sees a reset connection.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify task:run fetch --payload '{"url":"https://example.com"}' --wait`,
		"output": `✓ Run COMPLETED · 12s

Run Details
status  COMPLETED

Result:
  {
    "url": "https://example.com",
    "error": "Error: read ECONNRESET"
  }`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`Outbound network needs a plan that allows it: ${"{{tiers.gate.egress}}"}. Inbound needs a plan that allows inbound and outbound: ${"{{tiers.gate.ingress}}"}.` })}<h2>5 · Serve requests</h2><p class="def">Use <code>type: bidirectional</code> with the port the task listens on and the paths you open, because a path you do not list is refused.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml",
		"code": `execution:
  network:
    type: bidirectional
    inbound_port: 8080          # required; the task calls ctx.ready() once it listens
    inbound_routes:
      - prefix: /webhooks/
      - path: /health`
	})}<h2>6 · Choose what a second run does</h2><p class="def">A bidirectional task runs one VM at a time, and <code>--on-busy</code> picks whether a second run waits (<code>queue</code>, the default) or fails at once (<code>reject</code>).</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run listen --on-busy reject",
		"output": `✗ Run refused — this bidirectional deployment already has a live VM.

  Concurrent VMs for bidirectional-network tasks are not supported
  (one VM at a time).

  Retry when the live VM finishes, or omit --on-busy=reject to queue instead.
server trace id: 019fdec6-5c20-7a14-b8d3-0f7e2c91a4b6`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`<code>--on-busy</code> also applies to every other task when no host has room: <code>queue</code> waits for a limited time, and <code>reject</code> fails the run at once.` })}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "tip",
		"title": "Integrations"
	}, { "default": ($$result) => renderTemplate`An <a href="/docs/guides/integrations">integration</a> adds the network type it needs to task.yaml for you, and tells you which hosts to add.` })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "task:validate",
			href: ref("task:validate")
		},
		{
			label: "task:run",
			href: ref("task:run")
		},
		{
			label: "Network (all keys)",
			href: "/docs/concepts/network"
		},
		{
			label: "Refused values",
			href: "/docs/reference/refused-values"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-network-access.astro", void 0);
var $$file$29 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-network-access.astro";
//#endregion
//#region src/content/docs/_bodies/guide-pass-input-and-read-results.astro
var guide_pass_input_and_read_results_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuidePassInputAndReadResults,
	file: () => $$file$28,
	url: () => void 0
});
var $$GuidePassInputAndReadResults = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms",
		secret: "secrets",
		schedule: "schedules"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Pass input and read results</h1><p class="def">Send JSON to a run with <a${addAttribute(ref("task:run"), "href")}><code>--payload</code></a>. Read what the task returns with <a${addAttribute(ref("run:get"), "href")}><code>run:get</code></a>.</p><h2>1 · Read the payload in your task</h2><p class="def">The first argument of <code>run</code> is the payload, and what you return is the result.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "ts",
		"label": "index.ts",
		"code": `export async function run(payload, _ctx) {
  console.log("hello from run, name =", payload.name);
  return { greeting: \`hello \${payload.name ?? "world"}\` };
}`
	})}<h2>2 · Set a default payload</h2><p class="def"><code>run.payload</code> in <a href="/docs/reference/task-yaml">task.yaml</a> is the input when you pass none.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml",
		"code": `run:
  payload: { name: "world" }`
	})}<h2>3 · Pass a payload for one run</h2><p class="def"><code>--payload</code> replaces the default for this run only. It must be valid JSON.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify task:run hello --payload '{"name":"Ada"}'`,
		"output": `✓ Run Submitted
run_id       019fdec1-7a40-7c3e-9b1d-3e5f0a8c4d21
resource_id  run_Qm3TbX8kLw2Z
status       PENDING`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "tip" }, { "default": ($$result) => renderTemplate`Add <code>--wait</code> to follow the run and print its result in one command.` })}<h2>4 · Read the result</h2><p class="def"><a${addAttribute(ref("run:get"), "href")}><code>run:get</code></a> prints the run and its <code>Result</code>. A failed run shows the error there.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:get run_Qm3TbX8kLw2Z",
		"output": `Run Details
id           019fdec1-7a40-7c3e-9b1d-3e5f0a8c4d21
resource_id  run_Qm3TbX8kLw2Z
status       COMPLETED
task_name    hello
preset       std.micro
timeout_sec  120
created_at   2026-10-14T18:51:01.241Z

Result:
  {
    "greeting": "hello Ada"
  }`
	})}<h2>5 · Read the logs</h2><p class="def"><a${addAttribute(ref("run:logs"), "href")}><code>run:logs</code></a> prints the console output of the run. Your own <code>console.log</code> lines start with <code>[task]</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:logs run_Qm3TbX8kLw2Z | grep '\\[task\\]'",
		"output": `[task] INFO: hello from run, name = Ada`
	})}<h2>6 · Stay inside the size limits</h2><p class="def">A payload is at most ${"{{limits.payload.short}}"} and a result at most ${"{{limits.result.short}}"}. The CLI refuses a payload that is too big before it sends it.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify task:run hello --payload "$(cat big.json)"`,
		"output": `Error: payload is <n> bytes; the limit is <n> bytes`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`A result over the limit fails the run. Send big data to your own store from inside the task and return a link. See <a href="/docs/concepts/presets-and-limits">Presets and limits</a>.` })}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "tip",
		"title": "Integrations"
	}, { "default": ($$result) => renderTemplate`The <code>s3-storage</code> <a href="/docs/guides/integrations">integration</a> uploads a big file to your bucket and returns a download link.` })}<h2>Retry a run safely</h2><p class="def">A script that retries <code>task:run</code> after a network error can start the same run two times. Give the run an idempotency key to prevent this. You need CLI 2.0.0 or later.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify task:run hello --deployment dep_Hn4TqXw8Zc2P --payload '{"name":"Ada"}' --idempotency-key order-4711` })}<ul><li>The key is 8 to 255 characters of <code>A-Z a-z 0-9 . _ : -</code>. The CLI checks it before it sends the request.</li><li>A retry with the same key gets the answer of the first request and starts no second run. The CLI then says on stderr: <code>this is the answer to an earlier request with the same --idempotency-key; no new run was started.</code></li><li>The same key with a different request is refused. Use a new key for each new run.</li><li>Pin <code>--deployment</code> in a script that retries. Without it, a deploy between two tries changes the request, and the retry is refused.</li></ul>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "task:run",
			href: ref("task:run")
		},
		{
			label: "run:get",
			href: ref("run:get")
		},
		{
			label: "run:logs",
			href: ref("run:logs")
		},
		{
			label: "Run later",
			href: "/docs/guides/run-later"
		},
		{
			label: "task.yaml",
			href: "/docs/reference/task-yaml"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-pass-input-and-read-results.astro", void 0);
var $$file$28 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-pass-input-and-read-results.astro";
//#endregion
//#region src/content/docs/_bodies/guide-run-later.astro
var guide_run_later_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideRunLater,
	file: () => $$file$27,
	url: () => void 0
});
var $$GuideRunLater = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms",
		secret: "secrets",
		schedule: "schedules"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Run later</h1><p class="def">Start a run at a set time with <a${addAttribute(ref("task:run"), "href")}><code>--at</code></a>, or on a repeat with a cron expression. List the schedules and cancel one with <a${addAttribute(ref("schedule:list"), "href")}><code>schedule:list</code></a> and <a${addAttribute(ref("schedule:cancel"), "href")}><code>schedule:cancel</code></a>.</p><h2>1 · Schedule the run</h2><p class="def">Give <code>--at</code> a future time in ISO-8601, in UTC when it ends with <code>Z</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run hello --at 2027-01-15T03:00:00Z",
		"output": `Scheduled: sch_Wk4RtZ9pXe1B fires at 2027-01-15T03:00:00.000Z
No run exists until it fires. List with 'ignitify schedule:list'; cancel with 'ignitify schedule:cancel sch_Wk4RtZ9pXe1B'.`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`A time in the past is refused with <code>at must be in the future</code>.` })}<h2>2 · List the pending runs</h2><p class="def"><code>schedule:list</code> shows each pending schedule, soonest first, then your recurring schedules.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify schedule:list",
		"output": `schedule_id       kind  task   status   next_fire_at              cron  timezone
────────────────  ────  ─────  ───────  ────────────────────────  ────  ────────
sch_Wk4RtZ9pXe1B  once  hello  PENDING  2027-01-15T03:00:00.000Z  -     -`
	})}<h2>3 · Cancel one</h2><p class="def"><code>schedule:cancel</code> asks first; <code>-y</code> skips the question, and a script needs it.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify schedule:cancel sch_Wk4RtZ9pXe1B -y",
		"output": `Will cancel schedule sch_Wk4RtZ9pXe1B — it will never fire.
Schedule cancelled: sch_Wk4RtZ9pXe1B`
	})}<h2>4 · Do not combine it with --wait</h2><p class="def">A scheduled run has no run id until it fires, so the CLI refuses <code>--at</code> with <code>--wait</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run hello --at 2027-01-15T03:00:00Z --wait",
		"output": `Error: --wait cannot be used with --at: a scheduled run has no run id until it fires. Drop --wait; follow it later with 'ignitify schedule:list' and 'ignitify run:list'.`
	})}<h2>5 · Find the run after it fires</h2><p class="def">When the time comes, the schedule leaves the list and the run shows up in <a${addAttribute(ref("run:list"), "href")}><code>run:list</code></a>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify run:list --task-name hello" })}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`Cancelling a schedule that has fired, or is firing now, fails with exit code 1. Then look for the run instead.` })}<h2>6 · Run it on a repeat</h2><p class="def">To run a task every day or every hour, create a recurring schedule with <a${addAttribute(ref("schedule:create"), "href")}><code>schedule:create</code></a> and a cron expression. Check the expression first with <a${addAttribute(ref("schedule:preview"), "href")}><code>schedule:preview</code></a>. It prints the next fire times in UTC and makes no schedule.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify schedule:preview "0 9 * * 1-5" --tz America/New_York`,
		"output": `cron      0 9 * * 1-5
timezone  America/New_York

Next fire times (UTC; the expression reads in America/New_York)
  • 2027-01-15T14:00:00.000Z
  • 2027-01-18T14:00:00.000Z
  • 2027-01-19T14:00:00.000Z
  • 2027-01-20T14:00:00.000Z
  • 2027-01-21T14:00:00.000Z`
	})}<p class="def">Then create the schedule. At each slot, the platform starts a run of the newest READY deployment of the task. The expression has five fields: minute, hour, day of month, month and day of week. <code>--tz</code> sets the IANA time zone, and the default is UTC.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify schedule:create hello --cron "0 3 * * *" --tz Europe/Berlin` })}<ul><li>The run options of <a${addAttribute(ref("task:run"), "href")}><code>task:run</code></a> work here too: <code>--payload</code>, <code>--preset</code>, <code>--timeout-sec</code> and <code>--deadline-sec</code>. Every run of the schedule uses them.</li><li><code>--overlap skip</code> is the default. A slot starts nothing while the last run of the schedule is still active. With <code>--overlap allow</code>, the slot starts a run anyway.</li><li><a${addAttribute(ref("schedule:list"), "href")}><code>schedule:list</code></a> shows one-time and recurring schedules. <a${addAttribute(ref("schedule:show"), "href")}><code>schedule:show &lt;sch-id&gt;</code></a> shows one schedule with its next fire times. See the runs it started with <a${addAttribute(ref("run:list"), "href")}><code>run:list --schedule &lt;sch-id&gt;</code></a>.</li></ul><h2>7 · Pause, resume and delete</h2><p class="def"><a${addAttribute(ref("schedule:pause"), "href")}><code>schedule:pause</code></a> stops a schedule from firing. A run that already started goes on. <a${addAttribute(ref("schedule:resume"), "href")}><code>schedule:resume</code></a> starts it again from its next slot. It does not catch up the slots it missed while it was paused.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": `ignitify schedule:pause sch_Vb7LmQ2sXe9K
ignitify schedule:resume sch_Vb7LmQ2sXe9K` })}<p><code>schedule:cancel</code> deletes a recurring schedule. The runs it started stay. After many failed slots in a row, the platform pauses the schedule and sends a notification. Find the cause in <code>pause_reason</code> of <code>schedule:show --json</code>, fix it, then resume.</p>${renderComponent($$result, "Callout", $$Callout, {
		"kind": "note",
		"title": "The plan limit"
	}, { "default": ($$result) => renderTemplate`Your plan limits how many schedules you keep, and a paused schedule counts too. <a href="/docs/cli/account-and-usage#whoami"><code>whoami</code></a> shows <code>max_schedules</code>. The runs of a schedule count against your run limits like any run. See <a href="/pricing">Pricing</a>.` })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "task:run",
			href: ref("task:run")
		},
		{
			label: "schedule:list",
			href: ref("schedule:list")
		},
		{
			label: "schedule:cancel",
			href: ref("schedule:cancel")
		},
		{
			label: "schedule:create",
			href: ref("schedule:create")
		},
		{
			label: "schedule:preview",
			href: ref("schedule:preview")
		},
		{
			label: "schedule:pause",
			href: ref("schedule:pause")
		},
		{
			label: "schedule:resume",
			href: ref("schedule:resume")
		},
		{
			label: "Pass input and read results",
			href: "/docs/guides/pass-input-and-read-results"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-run-later.astro", void 0);
var $$file$27 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-run-later.astro";
//#endregion
//#region src/content/docs/_bodies/guide-stop-and-clean-up.astro
var guide_stop_and_clean_up_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideStopAndCleanUp,
	file: () => $$file$26,
	url: () => void 0
});
var $$GuideStopAndCleanUp = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms",
		secret: "secrets",
		schedule: "schedules"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Stop and clean up</h1><p class="def">Stop a live run with <a${addAttribute(ref("run:cancel"), "href")}><code>run:cancel</code></a>. Remove runs, deployments and tasks with the <code>:delete</code> commands.</p><h2>1 · Cancel a run gracefully</h2><p class="def">The run is asked to stop, and it is killed if it does not finish in time. Add <code>--grace &lt;ms&gt;</code> to ask for a longer wind-down.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:cancel run_Qm3TbX8kLw2Z -y",
		"output": `Will ask run run_Qm3TbX8kLw2Z to stop gracefully; it is killed if it does not finish in time.
Run cancelled: run_Qm3TbX8kLw2Z (was RUNNING)`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`Every command that deletes or cancels asks first. <code>-y</code> (or <code>--yes</code>) skips the question, and without a terminal the CLI refuses unless you pass it.` })}<h2>2 · Cancel a run now</h2><p class="def"><code>--force</code> kills the run at once, even on a pinned VM. It cannot be combined with <code>--grace</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:cancel run_Qm3TbX8kLw2Z --force -y",
		"output": `Will cancel run run_Qm3TbX8kLw2Z immediately (force: destroys the VM even if it is pinned).
Run cancelled: run_Qm3TbX8kLw2Z (was RUNNING)`
	})}<h2>3 · Delete a run</h2><p class="def"><a${addAttribute(ref("run:delete"), "href")}><code>run:delete</code></a> removes the run record. A live run is marked CANCELLED, but its VM is not stopped, so use <code>run:cancel</code> first.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:delete run_Qm3TbX8kLw2Z -y",
		"output": `Will soft-delete run run_Qm3TbX8kLw2Z.
run deleted: run_Qm3TbX8kLw2Z`
	})}<h2>4 · Delete a deployment and its runs</h2><p class="def"><a${addAttribute(ref("deployment:delete"), "href")}><code>deployment:delete</code></a> also deletes every run of that deployment, and the last line counts them.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify deployment:delete 019fdec3-0d12-7a58-8c47-2e9b6f1a3d70 -y",
		"output": `Will soft-delete deployment 019fdec3-0d12-7a58-8c47-2e9b6f1a3d70 and all its runs (cascade).
deployment deleted: 019fdec3-0d12-7a58-8c47-2e9b6f1a3d70 (runs: 2, vms: 0, forfeited pins: 0)`
	})}<h2>5 · Delete a task and everything under it</h2><p class="def"><a${addAttribute(ref("task:delete"), "href")}><code>task:delete</code></a> lists what will go first, then deletes the task, its deployments and its runs. Your files stay; only the local <code>.ignitify/</code> link is removed.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:delete hello -y",
		"output": `The following will be deleted:
  • task (server, soft-delete):  hello
  • deployments:                 1
  • runs:                        4
  • local link (.ignitify/):    /home/you/tasks/hello  (files kept)
task deleted: 019fdec3-0b4e-7c2a-9d16-8f3a5e7b1c04 (deployments: 1, runs: 4, vms: 0, forfeited pins: 0)
Removed local link: /home/you/tasks/hello/.ignitify`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`Deleting a task cancels its live runs and destroys their VMs. The list names them first, even with <code>-y</code>.` })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "run:cancel",
			href: ref("run:cancel")
		},
		{
			label: "run:delete",
			href: ref("run:delete")
		},
		{
			label: "deployment:delete",
			href: ref("deployment:delete")
		},
		{
			label: "task:delete",
			href: ref("task:delete")
		},
		{
			label: "Run later",
			href: "/docs/guides/run-later"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-stop-and-clean-up.astro", void 0);
var $$file$26 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-stop-and-clean-up.astro";
//#endregion
//#region src/content/docs/_bodies/guide-terraform.astro
var guide_terraform_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideTerraform,
	file: () => $$file$25,
	url: () => void 0
});
var $$GuideTerraform = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Manage a tenant with Terraform</h1><p class="def">The Ignitify provider sets up an existing tenant as code, with Terraform or OpenTofu: users, groups, permissions, user keys, secrets, tasks with their code, and hooks. You review a plan, apply it, and the tenant matches your files.</p><h2>What the provider does and does not do</h2>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Topic", "Detail"],
		"rows": [
			{
				name: "It manages",
				text: "Users, groups with their permissions and members, user keys, secrets, tasks, the code of a task (a deployment), and hooks. It also reads who you are, with a data source."
			},
			{
				name: "No tenant",
				text: "The provider does not create a tenant, change a plan or buy one. A tenant comes from sign-up, and the provider takes a key you already have."
			},
			{
				name: "No runs",
				text: "Runs, schedules, VMs and logs are not resources. A run starts from a hook, the CLI or the API."
			}
		]
	})}<h2>Install</h2><p class="def">You need Terraform 1.11 or later, or OpenTofu 1.11 or later. The secret resource uses a write-only argument, which older versions do not have. Name the provider in <code>required_providers</code>, then run <code>init</code>. <code>init</code> installs it from the <a href="https://registry.terraform.io/providers/ignitify-dev/ignitify/latest">Terraform Registry</a> and checks its signature.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "main.tf",
		"code": `terraform {
  required_version = ">= 1.11"
  required_providers {
    ignitify = {
      source = "ignitify-dev/ignitify"
    }
  }
}

provider "ignitify" {}`
	})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform init" })}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "note",
		"title": "OpenTofu"
	}, { "default": ($$result) => renderTemplate`The provider is not in the OpenTofu Registry. With OpenTofu, write the full address: <code>source = "registry.terraform.io/ignitify-dev/ignitify"</code>.` })}<p class="def">With OpenTofu, run <code>tofu init</code>. Every example in this section works with both tools. The provider reads the key from <code>IGNITIFY_API_KEY</code>. See <a href="/docs/terraform/provider">Provider configuration</a>.</p><h2>Owner key and user key: two root modules</h2><p class="def">Users, groups and keys need an owner key. Secrets, tasks, deployments and hooks work with a user key. Keep them in two separate Terraform root modules, so the daily job never holds the owner key.</p><ol><li><b>access</b> uses the owner key. It makes a user, a group with its permissions and members, and a key for that user.</li><li><b>app</b> is applied by CI with that user key. It manages a task, its code, a hook and a secret.</li></ol><p class="def">With a user key, an access resource fails with <code>owner-required</code>. The <a href="/docs/guides/access-control">Users, groups and permissions</a> guide explains the permissions, and <a href="/docs/terraform/recipes#set-up-from-zero">Recipes</a> has both modules in full.</p><h2>The pages of this section</h2><ul><li><a href="/docs/terraform/provider">Provider configuration</a>: Every argument and environment variable, the keys to use, retries and idempotency.</li><li><a href="/docs/terraform/user">ignitify_user</a>: A user of the tenant.</li><li><a href="/docs/terraform/group">ignitify_group</a>: Permissions and members, with the full list of permissions.</li><li><a href="/docs/terraform/api-key">ignitify_api_key</a>: The key of a user, shown once.</li><li><a href="/docs/terraform/secret">ignitify_secret</a>: A secret with a write-only value.</li><li><a href="/docs/terraform/task">ignitify_task</a>: The name code is deployed under.</li><li><a href="/docs/terraform/deployment">ignitify_deployment</a>: The code of a task: files, build, update rules, slots and the notify callback.</li><li><a href="/docs/terraform/hook">ignitify_hook</a>: A hook that starts a run.</li><li><a href="/docs/terraform/schedule">ignitify_schedule</a>: A recurring schedule that starts a run at each slot of a cron expression.</li><li><a href="/docs/terraform/whoami">ignitify_whoami</a>: The data source for the tenant, key, limits and usage.</li><li><a href="/docs/terraform/recipes">Recipes</a>: Set up from zero, roll a code update, rotate, import and run from CI.</li><li><a href="/docs/terraform/troubleshooting">Errors and troubleshooting</a>: The reasons the provider acts on, and what to do.</li></ul><h2>Keep the state safe</h2>${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`The state holds user keys and hook secrets as sensitive values. Use an encrypted state backend with limited access. Secret values and notify secrets never reach the state.` })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Provider configuration",
			href: "/docs/terraform/provider"
		},
		{
			label: "Recipes",
			href: "/docs/terraform/recipes"
		},
		{
			label: "Users, groups and permissions",
			href: "/docs/guides/access-control"
		},
		{
			label: "Use secrets",
			href: "/docs/guides/use-secrets"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-terraform.astro", void 0);
var $$file$25 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-terraform.astro";
//#endregion
//#region src/content/docs/_bodies/guide-trigger-from-a-webhook.astro
var guide_trigger_from_a_webhook_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideTriggerFromAWebhook,
	file: () => $$file$24,
	url: () => void 0
});
var $$GuideTriggerFromAWebhook = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		hook: "webhooks",
		notify: "webhooks"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Trigger from a webhook</h1><p class="def">A webhook starts a run when another system sends a signed HTTP call. Create one with <a${addAttribute(ref("hook:create"), "href")}><code>hook:create</code></a>, and get a callback when runs end with <a${addAttribute(ref("notify:set"), "href")}><code>notify:set</code></a>.</p><h2>1 · Create the webhook</h2><p class="def"><code>hook:create</code> needs the task slug, and each run it starts is a run of the task's newest ready deployment. A code update keeps the same URL and secret. Its reply shows the <code>secret</code> once, so store it now.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify hook:create nightly-report",
		"output": `⚠️  The \`secret\` below is shown ONCE and cannot be read back — \`hook:list\` never returns it. Store it now; if it is lost, delete the hook and create a new one.
A webhook body over {{cli.payload.limit}} is refused with 413 before the signature is checked.

✓ Webhook Created
resource_id          hok_Wd3Lm8Qz5RtY
hook_id              4f1c9a7e2b6d03581a9c7e4d2f60b8315ce79a04d1b2863f
url                  https://api.ignitify.dev/hooks/trigger/4f1c9a7e2b6d03581a9c7e4d2f60b8315ce79a04d1b2863f
secret (shown ONCE)  9d3f6a1c8e5b2074a6c91f3e8d0b5a72c4e61f98b3d7a05e2c4f1a86d09b37e`
	})}<h2>2 · Sign the body and send it</h2><p class="def">The signature is the HMAC-SHA256 of the exact body, in hex, with the secret as the key.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "bash",
		"label": "sender",
		"code": `SECRET=9d3f6a1c8e5b2074a6c91f3e8d0b5a72c4e61f98b3d7a05e2c4f1a86d09b37e
HOOK_URL=https://api.ignitify.dev/hooks/trigger/4f1c9a7e2b6d03581a9c7e4d2f60b8315ce79a04d1b2863f
BODY='{"name":"world"}'

SIG=$(printf %s "$BODY" | openssl dgst -sha256 -hmac "$SECRET" -hex | sed 's/^.* //')

# x-ignitify-delivery is optional: a repeated id returns the same run.
curl -X POST "$HOOK_URL" \\
  -H "content-type: application/json" \\
  -H "x-ignitify-signature: sha256=$SIG" \\
  -H "x-ignitify-delivery: order-1042" \\
  -d "$BODY"`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`The body must be JSON and the <code>content-type</code> must be <code>application/json</code>. Any other body (text, a form, a <code>+json</code> type) is refused with 415 <code>unsupported-media-type</code>. A call with no body is fine with any content type, or none.` })}<h2>3 · Read the answer</h2><p class="def">A good request answers 202 and starts a run whose payload is the body. Your task gets the parsed JSON, the same object that <code>ignitify task:run --payload</code> passes. The run uses what your <code>task.yaml</code> declared when you deployed it: the <code>execution</code> block (its network too), <code>run.preset</code> and <code>run.timeout_sec</code>. Your plan's limits apply as for <code>ignitify task:run</code>.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "bash",
		"label": "answers",
		"code": `202  {"run_id":"019fdec4-2b71-7d90-a3c5-1e8f4b6a9d02","resource_id":"run_Qm3TbX8kLw2Z","status":"PENDING"}
401  {"error":"invalid signature","reason":"invalid-signature"}
403  {"error":"…","reason":"capability-denied"}
404  {"error":"unknown hook","reason":"hook-not-found"}
409  {"error":"task has no ready deployment — deploy the task and wait for READY","reason":"no-ready-deployment"}
409  {"error":"the run settings in task … are not allowed: … — fix task.yaml and redeploy","reason":"deployment-not-bootable"}
413  {"error":"payload too large","reason":"payload-too-large"}
415  {"error":"the body must be JSON, sent with content-type: application/json","reason":"unsupported-media-type"}
429  {"error":"rate limited","reason":"rate-limited"}`
	})}<p class="def">A 409 <code>no-ready-deployment</code> is retryable: send the call again when a deploy is ready. A 409 <code>deployment-not-bootable</code> and a 403 <code>capability-denied</code> are not: your plan no longer allows what <code>task.yaml</code> declared, so fix it and deploy again. A limit of your plan answers 429 (or 403 when your plan does not include webhooks) with the same <code>error</code> and <code>reason</code> fields, and no usage numbers. Read <code>reason</code>, not the sentence.</p><p class="def">The sender sees these answers, and you may not. So a signed call refused for a reason you can fix (no ready deployment, or a <code>task.yaml</code> or plan problem) also opens a <code>hook.refused</code> alert in your notifications: <code>ignitify notification:list --kind hook.refused</code>. The next call that starts a run, or <code>hook:delete</code>, closes it. An unsigned call and a rate limit open nothing.</p><h2>4 · List and delete webhooks</h2><p class="def"><a${addAttribute(ref("hook:list"), "href")}><code>hook:list</code></a> shows the webhooks of a task, and <a${addAttribute(ref("hook:delete"), "href")}><code>hook:delete</code></a> removes one by its own <code>hok_</code> id.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify hook:list nightly-report",
		"output": `id           019f3c30-6e12-7b44-8a07-9c15d3e2f8a6
task_id      019f3c1e-8a40-7c52-9d63-2b7e1f0a4c95
resource_id  hok_Wd3Lm8Qz5RtY
hook_id      4f1c9a7e2b6d03581a9c7e4d2f60b8315ce79a04d1b2863f
created_at   2026-10-14T09:40:00.000Z`
	})}<h2>5 · Get a callback when a run ends</h2><p class="def"><code>notify:set</code> takes an HTTPS URL and a signing secret of at least ${"{{limits.secret.min}}"} characters, read from stdin. The URL is your own endpoint, and the server must be able to find its host name.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `printf %s "$NOTIFY_SECRET" | ignitify notify:set dep_Hn4TqXw8Zc2P --url https://your-domain.example/ignitify --secret-stdin`,
		"output": "Notify URL for dep_Hn4TqXw8Zc2P set to https://your-domain.example/ignitify"
	})}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "warning",
		"title": "Use your own endpoint"
	}, { "default": ($$result) => renderTemplate`The host <code>your-domain.example</code> above is a placeholder. A host the server cannot resolve is refused with <code>notify url rejected: no-resolution</code>.` })}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`Remove the callback with <code>ignitify notify:set dep_Hn4TqXw8Zc2P --clear</code>.` })}<h2>6 · Check the callback signature</h2><p class="def">The callback is a POST with the same <code>x-ignitify-signature</code> header, so check it the same way.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "ts",
		"label": "receiver.ts",
		"code": `import { createHmac, timingSafeEqual } from "node:crypto";

// Body: {"run_id":"run_Qm3TbX8kLw2Z","status":"COMPLETED","deployment_id":"…","tenant_id":"…"}
export function isFromIgnitify(rawBody: string, header: string, secret: string): boolean {
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const got = header.replace(/^sha256=/, "");
  return got.length === expected.length && timingSafeEqual(Buffer.from(got), Buffer.from(expected));
}`
	})}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "hook:create",
			href: ref("hook:create")
		},
		{
			label: "hook:list",
			href: ref("hook:list")
		},
		{
			label: "hook:delete",
			href: ref("hook:delete")
		},
		{
			label: "notify:set",
			href: ref("notify:set")
		},
		{
			label: "Troubleshoot",
			href: "/docs/guides/troubleshoot"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-trigger-from-a-webhook.astro", void 0);
var $$file$24 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-trigger-from-a-webhook.astro";
//#endregion
//#region src/content/docs/_bodies/guide-troubleshoot.astro
var guide_troubleshoot_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideTroubleshoot,
	file: () => $$file$23,
	url: () => void 0
});
var $$GuideTroubleshoot = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms",
		usage: "account-and-usage",
		whoami: "account-and-usage"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Troubleshoot</h1><p class="def">Every failure prints an <code>Error:</code> line on stderr and sets the exit code. Find your line below and run the fix.</p><h2>Exit codes and the trace id</h2><p class="def">The exit code is <code>0</code> when the command worked, <code>1</code> for an error or a refusal, and <code>${"{{cli.exit.interrupt}}"}</code> when you press Ctrl+C during a wait.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:get run_Qm3TbX8kLw2Z; echo $?",
		"output": `Error: not found [run-not-found]
server trace id: 019fdec8-4a1c-7e30-b6d2-9c0f5a7e1b84
1`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`Ctrl+C stops the wait, not the build or the run. After a server error, give the trace id to <a href="/contact">support</a>. Never paste an API key into a report.` })}<h2>Find your error</h2><p class="def">Every <code>Error:</code> line, what it means and its fix are on the <a href="/docs/reference/errors">Errors</a> page. Start with the group that matches what you did.</p><ul><li>A refusal that names a limit or your plan: <a href="/docs/reference/errors#plan-limits">Plan limits</a>, <a href="/docs/reference/errors#capability">Capability</a>.</li><li>A message before anything ran, such as a missing key or a wrong flag: <a href="/docs/reference/errors#before-the-request-is-sent">Before the request is sent</a>.</li><li>A deploy that did not finish: <a href="/docs/reference/errors#deploys-and-builds">Deploys and builds</a>.</li><li>A command that fails only in a script: <a href="/docs/reference/errors#scripts-and-ci">Scripts and CI</a>.</li></ul><h2>Three commands that answer most questions</h2><p class="def"><code>ignitify whoami</code> shows your plan and its limits. <code>ignitify deployment:get &lt;id&gt;</code> shows a build and its log tail. <code>ignitify usage</code> shows what you used this month.</p>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "task:run",
			href: ref("task:run")
		},
		{
			label: "deployment:get",
			href: ref("deployment:get")
		},
		{
			label: "whoami",
			href: ref("whoami")
		},
		{
			label: "Errors",
			href: "/docs/reference/errors"
		},
		{
			label: "Refused values",
			href: "/docs/reference/refused-values"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-troubleshoot.astro", void 0);
var $$file$23 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-troubleshoot.astro";
//#endregion
//#region src/content/docs/_bodies/guide-use-secrets.astro
var guide_use_secrets_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideUseSecrets,
	file: () => $$file$22,
	url: () => void 0
});
var $$GuideUseSecrets = createComponent(($$result, $$props, $$slots) => {
	const GROUP = {
		task: "tasks",
		deployment: "deployments",
		run: "runs",
		vm: "vms",
		secret: "secrets",
		schedule: "schedules"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Use secrets</h1><p class="def">Store a value once with <a${addAttribute(ref("secret:set"), "href")}><code>secret:set</code></a>. A task reads it by name, so it is never in your code or on the command line.</p><h2>1 · Name the secret in task.yaml</h2><p class="def">Use capital letters, digits and underscores, starting with a letter.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "yaml",
		"label": "task.yaml",
		"code": `secrets: [DB_PASSWORD]`
	})}<h2>2 · Store the value from stdin</h2><p class="def"><code>--stdin</code> reads the value from a file or a pipe, so it stays out of your shell history.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify secret:set DB_PASSWORD --stdin < db-password.txt",
		"output": `✓ secret DB_PASSWORD stored`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`A value on the command line is refused, and so is <code>--value</code>. Rotate any secret you typed there.` })}<h2>3 · Read it in your task</h2><p class="def">The run gets the secrets you named in <code>ctx.secrets</code>, keyed by name.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "ts",
		"label": "index.ts",
		"code": `export async function run(_payload, ctx) {
  const password = ctx.secrets.DB_PASSWORD;
  // connect to your database with it
  return { ok: true };
}`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`In Python use <code>ctx.secrets["DB_PASSWORD"]</code>. Go has <code>ctx.Secrets</code> and Rust has <code>ctx.secrets</code>. A run fails if a name you declared has no value yet.` })}<h2>4 · List the names</h2><p class="def"><a${addAttribute(ref("secret:list"), "href")}><code>secret:list</code></a> shows names and update times. A value can never be read back.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify secret:list",
		"output": `DB_PASSWORD    2026-10-14T18:50:56.580Z`
	})}<h2>5 · Delete one</h2><p class="def"><a${addAttribute(ref("secret:delete"), "href")}><code>secret:delete</code></a> asks first; <code>-y</code> skips the question.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify secret:delete DB_PASSWORD -y",
		"output": `Will delete secret DB_PASSWORD. Its value cannot be read back.
✓ secret DB_PASSWORD removed`
	})}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "tip",
		"title": "Integrations"
	}, { "default": ($$result) => renderTemplate`An <a href="/docs/guides/integrations">integration</a> adds the secret names it needs to task.yaml for you. You still set the values.` })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "secret:set",
			href: ref("secret:set")
		},
		{
			label: "secret:list",
			href: ref("secret:list")
		},
		{
			label: "secret:delete",
			href: ref("secret:delete")
		},
		{
			label: "task.yaml",
			href: "/docs/reference/task-yaml"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-use-secrets.astro", void 0);
var $$file$22 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-use-secrets.astro";
//#endregion
//#region src/content/docs/_bodies/guide-watch-usage-and-limits.astro
var guide_watch_usage_and_limits_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuideWatchUsageAndLimits,
	file: () => $$file$21,
	url: () => void 0
});
var $$GuideWatchUsageAndLimits = createComponent(($$result, $$props, $$slots) => {
	const ref = (cmd) => `/docs/cli/account-and-usage#${commandAnchor(cmd)}`;
	const plain = (text) => text.split("\n").map((line) => ({
		kind: "plain",
		text: line
	}));
	return renderTemplate`${maybeRenderHead($$result)}<h1>Watch usage and limits</h1><p class="def">See what your plan allows with <a${addAttribute(ref("whoami"), "href")}><code>whoami</code></a> and <a${addAttribute(ref("quota"), "href")}><code>quota</code></a>. See what you used with <a${addAttribute(ref("usage"), "href")}><code>usage</code></a>, and take the data out with <a${addAttribute(ref("usage:export"), "href")}><code>usage:export</code></a>.</p><h2>1 · See who you are and what the plan allows</h2><p class="def"><code>whoami</code> prints the tenant, then the limits of its plan. The number after the plan name is its version: it starts at 1 and goes up each time the terms of the plan change.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify whoami",
		"output": `Tenant Profile
tenant_id    019f2b10-3c55-7a01-b2e4-9d0c61f7a8b3
resource_id  tnt_Xk29QmWr5LdA
name         acme
status       ACTIVE
tier         starter v1
bound_by     tier-entitlement

Entitlements (tier policy)
max_tasks                   15
max_running_vms             3
max_units                   unlimited
max_pinned_vms              0
max_warm_vms                3
max_secrets                 25
max_webhooks                3
max_api_keys                5
max_schedules               30`
	})}<h2>2 · See what you hold now</h2><p class="def"><code>quota</code> shows each live count against its limit, as <code>used / max</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify quota",
		"output": `Usage & Limits
tasks                    7 / 15
active_runs              0 / 3
pinned_vms               0 / 0
deployments              7
disk_used                56.1 MiB / 1.0 GiB
scratch_ceiling          512 MiB
egress_out_this_month    0 B
deployments_this_month   13
api_requests_this_month  ~515 (approx)

Monthly egress: 1.2 GB of 100.0 GB used (1%), 98.8 GB left
Monthly compute: 3.5 h used, no monthly limit
Since 2026-10-14T09:12:40.000Z · Resets 2026-11-14T09:12:40.000Z · details: ignitify quota`
	})}<p class="def">On a plan with no network, such as Free, the egress line reads <code>Monthly egress: not included in this plan</code>: a run on that plan cannot send traffic, so there is no egress to count.</p>${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`<code>quota</code> counts what you hold right now, and <code>usage</code> is the ledger for a calendar month. The <code>Monthly</code> lines count your plan's month: it starts on the day and time you bought the plan and starts again at each paid renewal (with no paid plan, on your sign-up day). While a payment has failed it does not start again, and the reset reads "at your next paid renewal".` })}<h2>3 · On a plan with units, watch the units</h2><p class="def">A plan with a units limit adds a <code>units</code> line after <code>active_runs</code>. Each active run uses the weight of its preset. A plan without units shows no <code>units</code> line, and <code>max_units</code> reads <code>unlimited</code> in <code>whoami</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify quota | grep -E '^(active_runs|units) '",
		"output": `active_runs              {{units.example.vms}} / {{units.example.running}}
units                    {{units.example.used}} / {{units.example.max}}`
	})}<h2>4 · See what you used this month</h2><p class="def"><code>usage</code> prints one row per axis for the current month.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify usage",
		"output": plain(`usage for 2026-10

  AXIS        QUANTITY            LINES   RECONCILIATION
  compute     10m 13s                 7   —
  network     0 B                     0   agrees with the meter
  network_in  934 B                   1   —
  disk        1.4 GiB·h               8   —
  scratch     5.0 MiB·h               7   —
  runs        13                     13   agrees with the meter
  pin         8m 51s                  7   —
  build       3m 9s                   8   —

  runs started 13   deployments created 13   API requests 515 (approx)`)
	})}<h2>5 · Narrow it down</h2><p class="def">Pick a month with <code>--period</code> and an axis with <code>--axis</code>, filter by <code>--vm</code> or <code>--run</code>, and add <code>--vms</code> or <code>--runs</code> to list the lines behind the totals.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify usage --period 2026-10 --axis compute --vms",
		"output": plain(`usage for 2026-10  (filtered)

  AXIS        QUANTITY            LINES   RECONCILIATION
  compute     10m 13s                 7   —

  AXIS        QUANTITY            VM / RUN                                DETAIL
  compute     2m 28s              vm_019f3c2a-7d41-7b3e-9a10-4c5e8f21d0a6  running
  compute     20 s                vm_019f3c31-0b88-7e52-8c47-1d6a9b3f5e02  running
  compute     27 s                vm_019fdec7-3a10-7c52-9b84-6d2e1f0a8c47  running`)
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`<code>--run</code> takes the run's UUID <code>id</code>, not the <code>run_…</code> id.` })}<h2>6 · Export the lines</h2><p class="def"><code>usage:export</code> prints one row per ledger line, in the one format you name: <code>--csv</code> or <code>--json</code>.</p>${renderComponent($$result, "ExampleTabs", $$ExampleTabs, { "id": "usage-export" }, {
		"output": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "output" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify usage:export --period 2026-10 --axis compute --csv",
			"output": plain(`axis,vm_id,run_id,deployment_id,window_start,window_end,quantity,unit,detail
"compute","vm_019f3c2a-7d41-7b3e-9a10-4c5e8f21d0a6","","019f3c24-1b05-7c9a-8e21-4d6f0b93a7e2","2026-10-12T23:49:38.882Z","2026-10-12T23:52:06.545Z","147663","ms","running"`)
		})}` })}`,
		"error": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "error" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Terminal", $$Terminal, {
			"command": "ignitify usage:export --period 2026-10",
			"output": `usage: ignitify usage:export [--period YYYY-MM] (--json|--csv)   (name exactly one format)`
		})}` })}`
	})}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "whoami",
			href: ref("whoami")
		},
		{
			label: "quota",
			href: ref("quota")
		},
		{
			label: "usage",
			href: ref("usage")
		},
		{
			label: "usage:export",
			href: ref("usage:export")
		},
		{
			label: "Presets and limits",
			href: "/docs/concepts/presets-and-limits"
		},
		{
			label: "How capacity works",
			href: "/docs/concepts/how-capacity-works"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-watch-usage-and-limits.astro", void 0);
var $$file$21 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/guide-watch-usage-and-limits.astro";
//#endregion
//#region src/content/docs/_bodies/how-capacity-works.astro
var how_capacity_works_exports = /* @__PURE__ */ __exportAll({
	default: () => $$HowCapacityWorks,
	file: () => $$file$20,
	url: () => void 0
});
var $$HowCapacityWorks = createComponent(($$result, $$props, $$slots) => {
	const ref = (cmd) => `/docs/cli/account-and-usage#${commandAnchor(cmd)}`;
	const runRef = `/docs/cli/tasks#${commandAnchor("task:run")}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>How capacity works</h1><p class="def">Your plan limits how much work runs at the same time. This page shows the two limits, how a run counts against them, and what happens when one is full.</p><h2>Two limits on what runs at once</h2><ul class="def"><li><strong>Running VMs.</strong> Every plan has this limit. It is the number of runs that can be active at the same time, of any size.</li><li><strong>Units.</strong> Only some plans have this limit. Today these plans have it: ${"{{units.plans}}"}. Each active run uses units, and the total must stay at or below the limit.</li></ul><p class="def">A new run starts only when it fits under every limit that your plan has. A plan without units (${"{{units.plans.none}}"}) is not unlimited: its running-VM limit and its list of presets still apply. <a href="/docs/concepts/presets-and-limits">Presets and limits</a> shows the numbers of each plan.</p><h2>Each preset has a weight</h2><p class="def">A weight is the number of units that one run of a preset uses. The smallest preset, <code>${"{{units.base}}"}</code>, weighs 1 unit. The weights come from the same preset table that the platform reads.</p><div class="tbl wide"><div class="tr head c4"><div class="td"><span class="lbl-h">Preset</span></div><div class="td"><span class="lbl-h">vCPU</span></div><div class="td"><span class="lbl-h">Memory</span></div><div class="td"><span class="lbl-h">Weight</span></div></div>${"{{units.weights.rows}}"}</div><p class="def">A weight is not the vCPU or the memory number. It shows how much of a host the preset takes.</p><h2>A run uses its weight while it is active</h2><p class="def">A run takes its weight in units when the platform accepts it. It gives the units back when it gets a final status (see <a href="/docs/concepts/lifecycle-and-statuses">Lifecycle and statuses</a>). A run that waits for a host also uses its units.</p><p class="def">Runs from a webhook or a schedule count in the same way. A webhook run uses the default preset of your plan, so it uses the weight of that preset.</p><h2>Mix presets as you like</h2><p class="def">The limits count runs and units, not presets. You can run many small runs, a few large runs, or a mix. The example below uses the ${"{{units.example.plan}}"} plan: ${"{{units.example.max}}"} units and ${"{{units.example.running}}"} running VMs. Each row shows the active runs, then one more run.</p><div class="tbl wide"><div class="tr head c5"><div class="td"><span class="lbl-h">Active runs</span></div><div class="td"><span class="lbl-h">Running VMs</span></div><div class="td"><span class="lbl-h">Units</span></div><div class="td"><span class="lbl-h">Next run (weight)</span></div><div class="td"><span class="lbl-h">Result</span></div></div>${"{{units.example.rows}}"}</div><p class="def">The first row fills the running-VM limit with small runs. The second row fills the units with large runs. The last two rows show that free units must cover the full weight of the next run.</p><h2>Pinned VMs count on their own</h2><p class="def">A pinned VM counts against the pinned-VM limit of your plan. An idle pinned VM is not a running VM and uses no units. A run on a pinned VM counts like any other run: it is a running VM and it uses its weight.</p><h2>When a limit is full</h2><ul class="def"><li><strong>The running-VM limit is full:</strong> <code>429</code> with <code>concurrent-run-quota</code>. The platform checks this limit first.</li><li><strong>The units are full:</strong> <code>429</code> with <code>run-unit-quota</code>. A run of a lighter preset can still fit.</li><li><strong>A host is busy:</strong> this is not a plan limit, and it never gives a <code>429</code>. With <a${addAttribute(runRef, "href")}><code>--on-busy queue</code></a> (the default) the run waits for room for a limited time. With <code>--on-busy reject</code> it fails at once.</li></ul><p class="def"><code>--on-busy</code> does not wait for a plan limit. A full plan limit refuses the run at once. A webhook gets the same <code>429</code>, and a scheduled run waits and tries again for a limited time.</p>${renderComponent($$result, "Callout", $$Callout, { "kind": "tip" }, { "default": ($$result) => renderTemplate`Each refusal names one limit. Read the <code>reason</code> field, not the text. <a href="/docs/reference/errors">Errors</a> shows a sample of each.` })}<h2>Wait for Retry-After</h2><p class="def">A rate limit (<code>run-rate-quota</code>, <code>rate-limited</code>) answers <code>429</code> with a <code>Retry-After</code> header. During a short server restart, the API answers <code>503</code> with the same header. The value is a whole number of seconds. Wait that long, then send the request again.</p><p class="def">The two limits on this page send no <code>Retry-After</code>: <code>concurrent-run-quota</code> and <code>run-unit-quota</code>. Room comes back when a run ends, not at a set time.</p><p class="def">The CLI waits for <code>Retry-After</code> when it reads a run. The Terraform provider waits for it too, for up to 30 seconds, and tries a request at most 4 times.</p><h2>See your numbers</h2><p class="def"><a${addAttribute(ref("quota"), "href")}><code>quota</code></a> shows <code>active_runs</code> against your running-VM limit. On a plan with units, a <code>units</code> line follows it. On a plan without units, there is no <code>units</code> line.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify quota | grep -E '^(active_runs|units) '",
		"output": `active_runs              {{units.example.vms}} / {{units.example.running}}
units                    {{units.example.used}} / {{units.example.max}}`
	})}<p class="def"><a${addAttribute(ref("whoami"), "href")}><code>whoami</code></a> shows the weight of each preset that your plan allows, but only on a plan with units. <code>whoami --json</code> always has the fields: <code>limits.max_units</code> (<code>null</code> when there is no units limit), <code>usage.active_units</code> and <code>unit_weights</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify whoami | grep -A{{units.example.count}} 'Units per run'",
		"output": `Units per run (by preset)
{{units.example.weights}}`
	})}<h2>Words on this page</h2><ul class="def"><li><strong>Unit:</strong> the amount that a run of <code>${"{{units.base}}"}</code> uses. A plan with units has a limit on the total.</li><li><strong>Weight:</strong> the number of units that one run of a preset uses.</li><li><strong>Running-VM limit:</strong> the number of runs that can be active at the same time, on every plan.</li><li><strong>Pinned VM:</strong> a VM that stays up between runs. It counts against its own limit. While idle it uses no units; a run on it uses its weight.</li></ul>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Presets and limits",
			href: "/docs/concepts/presets-and-limits"
		},
		{
			label: "Errors",
			href: "/docs/reference/errors"
		},
		{
			label: "Watch usage and limits",
			href: "/docs/guides/watch-usage-and-limits"
		},
		{
			label: "quota",
			href: ref("quota")
		},
		{
			label: "whoami",
			href: ref("whoami")
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/how-capacity-works.astro", void 0);
var $$file$20 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/how-capacity-works.astro";
//#endregion
//#region src/content/docs/_bodies/install-and-sign-in.astro
var install_and_sign_in_exports = /* @__PURE__ */ __exportAll({
	default: () => $$InstallAndSignIn,
	file: () => $$file$19,
	url: () => void 0
});
var $$InstallAndSignIn = createComponent(($$result, $$props, $$slots) => {
	const pinnedCommand = fillDocTokens("npx ignitify@{{cli.version}} whoami", "install-and-sign-in");
	const GROUP = {
		run: "runs",
		schedule: "schedules"
	};
	const ref = (cmd) => `/docs/cli/${GROUP[cmd.split(":")[0]]}#${commandAnchor(cmd)}`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Install &amp; sign in</h1><p class="def">Install the CLI, sign in once with your Google account, and check that it works. It takes three steps.</p><h2>1 · Install the CLI</h2><p class="def">You need Node 22.13 or newer, on macOS or Linux (WSL included). Windows is not tested. The CLI is an npm package named <code>ignitify</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "npm install --global ignitify" })}<p class="def">In CI, or for one command, run a pinned version with <code>npx</code>:</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": pinnedCommand })}${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify --version",
		"output": `ignitify {{cli.version}} (built for API {{cli.api.version}})
API: {{cli.api.version}} at https://api.ignitify.dev`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`The line after the version tells you the CLI reached the platform. It can end with <code>(minimum client …)</code>.` })}<h2>2 · Sign in</h2><p class="def">A new account starts on the free plan, with no key. The CLI gets its key when you run <code>ignitify login</code> and approve it in your browser.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify login",
		"output": `Sign in to Ignitify

Open this page:
  https://account.ignitify.dev/web/device?code=BCDFGHJK

Check this code
  ┌─────────────┐
  │  BCDF-GHJK  │
  └─────────────┘
  The page must show the same code.

Waiting for approval. The code expires in 10 minutes.
✓ Signed in

  Account      ada
  Account id   tnt_Xk29QmWr5LdA
  Key label    ada-laptop
  Key expires  90 days after last use; each use renews it
  Saved to     ~/.config/ignitify/credentials.json`
	})}<p class="def">The CLI also opens the page in your browser. Do these steps there:</p>${renderComponent($$result, "Steps", $$Steps, { "items": [
		"If the page asks, sign in with Google. The first sign-in creates your account on the free plan.",
		"Compare the code on the page with the code in your terminal. They must be the same.",
		"Choose Approve. Choose Deny if you did not run `ignitify login` yourself."
	] })}<p class="def">The terminal then prints the line that starts with <code>✓ Signed in</code>.</p>${renderComponent($$result, "Callout", $$Callout, {
		"kind": "tip",
		"title": "No browser on this machine"
	}, { "default": ($$result) => renderTemplate`Run <code>ignitify login --no-browser</code>. The CLI prints the page and does not open it. Open the page on any device that has a browser.` })}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "note",
		"title": "The code is short-lived"
	}, { "default": ($$result) => renderTemplate`The code works for 10 minutes. If it expires, the CLI says so. Run <code>ignitify login</code> again.` })}<h3>Name the key</h3><p class="def">Each machine has one key. Its label is the host name of the machine. Use <code>--name</code> to choose another label, for example when two machines have the same host name.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "ignitify login --name build-box" })}<p class="def">A second login with the same label replaces the old key. The old key stops working. Your plan limits the number of keys, and the limit counts every key, the keys of your users too: ${"{{tiers.keys}}"}. If your account is at its key limit, the approve page asks you to pick the key to replace.</p><h2>3 · Check it works</h2><p class="def"><code>ignitify whoami</code> shows your workspace, your plan and what you use. More lines follow the part shown here.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify whoami",
		"output": `
Tenant Profile
tenant_id    019f2b10-3c55-7a01-b2e4-9d0c61f7a8b3
resource_id  tnt_Xk29QmWr5LdA
name         ada
status       ACTIVE
tier         free v1
bound_by     tier-entitlement

Usage & Limits
…`
	})}<p class="def">If you are not signed in, a command stops with this message:</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify whoami",
		"output": `Error: Not signed in. Run 'ignitify login', or set the IGNITIFY_API_KEY environment variable.`
	})}<h2>Your account page</h2><p class="def">Open <a${addAttribute(PROFILE_URL, "href")}>${ACCOUNT_HOST}/web/profile</a> and sign in with Google. The page shows:</p>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Part", "What it shows"],
		"rows": [
			{
				name: "Workspace",
				text: "The name, the id (`tnt_…`), the status and the plan of your workspace."
			},
			{
				name: "Plan limits",
				text: "A table of what your plan allows: tasks, running VMs, pinned VMs, image storage and scratch storage per VM."
			},
			{
				name: "Keys",
				text: "Each key with its label, id, when it was last used, when it expires, when it was created and how it was issued. Choose Revoke to stop a key at once."
			},
			{
				name: "Use the CLI",
				text: "The command `ignitify login`, where the CLI saves your key (`~/.config/ignitify/credentials.json`), a short list of useful commands and links to these docs."
			}
		]
	})}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "note",
		"title": "The page never shows a key"
	}, { "default": ($$result) => renderTemplate`The account page lists keys but never shows the secret. A key goes to your machine only through <code>ignitify login</code>. If you lose a key, revoke it on the page and run <code>ignitify login</code> again.` })}<p class="def">Choose <strong>Sign out</strong> on the page to end your browser session. This does not revoke any key.</p><h2>Sign out of the CLI</h2><p class="def"><code>ignitify logout</code> revokes the key of this machine, then deletes the saved file.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify logout",
		"output": `✓ Signed out

  Key label  ada-laptop
  Revoked    yes
  Deleted    ~/.config/ignitify/credentials.json`
	})}<p class="def">If the platform cannot be reached, the CLI still deletes the file. It then warns you that the key may still work, and exits with code 1. Revoke the key on your account page.</p>${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`If the <code>IGNITIFY_API_KEY</code> environment variable is set, <code>ignitify logout</code> does not change it and does not revoke it. It prints a note.` })}<h2>Where the key is stored</h2><p class="def">The CLI saves the key in <code>~/.config/ignitify/credentials.json</code>. If <code>XDG_CONFIG_HOME</code> is set to an absolute path, the file is <code>$XDG_CONFIG_HOME/ignitify/credentials.json</code>. Only you can read it (mode 0600), and only you can open its folder (mode 0700). The CLI refuses a file or a folder that is a link or that belongs to another user, and a file that other users can read.</p><p class="def">The key lasts 90 days without use. Each use renews it. It is tied to the server that issued it, so the CLI never sends it to another address. The CLI sends a key only over <code>https</code>, or over plain <code>http</code> to this machine (<code>localhost</code>, <code>127.0.0.1</code>, <code>::1</code>).</p><h2>Upgrade</h2>${renderComponent($$result, "Terminal", $$Terminal, { "command": "npm install --global ignitify@latest" })}<h3>Upgrade to 3.2</h3><p class="def">CLI 3.2.0 removes and renames no flag. Run <code>npm install --global ignitify@latest</code>, then note these changes:</p><ul><li>Recurring schedules. <a${addAttribute(ref("schedule:create"), "href")}><code>schedule:create &lt;task&gt; --cron "&lt;expr&gt;"</code></a> starts a run of the task's newest READY deployment at each slot of a 5-field cron expression. <code>--tz</code> sets the IANA time zone (default UTC). It takes the run options of <code>task:run</code> (<code>--payload</code>, <code>--preset</code>, <code>--timeout-sec</code>, <code>--deadline-sec</code>). <code>--overlap skip</code> (the default) starts nothing while the last run of the schedule is still active; <code>--overlap allow</code> starts the run.</li><li><a${addAttribute(ref("schedule:show"), "href")}><code>schedule:show</code></a> prints one recurring schedule: its state, its run settings and its next fire times.</li><li><a${addAttribute(ref("schedule:pause"), "href")}><code>schedule:pause</code></a> and <a${addAttribute(ref("schedule:resume"), "href")}><code>schedule:resume</code></a> stop and start a schedule. A resumed schedule fires from its next slot. It does not catch up the slots it missed.</li><li><a${addAttribute(ref("schedule:preview"), "href")}><code>schedule:preview &lt;cron&gt;</code></a> prints the next fire times (in UTC) and makes no schedule.</li><li><a${addAttribute(ref("run:list"), "href")}><code>run:list --schedule &lt;sch-id&gt;</code></a> lists the runs that a schedule started.</li><li><a${addAttribute(ref("schedule:list"), "href")}><code>schedule:list</code></a> shows both kinds: one-time (<code>task:run --at</code>) and recurring. <a${addAttribute(ref("schedule:cancel"), "href")}><code>schedule:cancel</code></a> deletes a schedule of either kind, and asks first.</li><li><code>whoami</code> and <code>quota</code> show the monthly outbound data of a plan with no outbound network as "not included in this plan".</li></ul><p>Each new command takes <code>--json</code>. See <a href="/docs/guides/run-later">Run later</a>.</p><h3>Upgrade to 3.1</h3><p class="def">CLI 3.1.0 changes no flag. Run <code>npm install --global ignitify@latest</code>, then note these changes:</p><ul><li>An error from the server prints its sentence and its code, like <code>secret not found [secret-not-found]</code>. With <code>--json</code> a script still gets the raw body.</li><li><code>hook:list</code> prints a line on stderr that names the deployment the webhooks run now.</li><li><code>deployment:get</code> and <code>deployment:list</code> show <code>admitted_at</code>, the time of the latest build request.</li><li><code>task:run</code> without local state runs the task's newest deploy request, and <code>task:get</code> lists deployments in the same order.</li><li><code>task:deploy</code> warns when it reuses an older deployment while a newer one is READY, because webhooks still run the newer one.</li><li><code>.ignitifyignore</code> and <code>task.yaml</code> must be regular files. A link or a special file is refused.</li></ul><h3>Upgrade to 3.0</h3><p class="def">CLI 3.0.0 is a major release. Check your scripts for this change:</p><ul><li><code>hook:create</code> and <code>hook:list</code> take a task (its slug or id), not a deployment id. A hook now belongs to the task, so a code update keeps its URL and secret. The <code>--task-name</code> option is removed.</li></ul><p>3.0.0 also makes <code>task:create</code> bring back a task you deleted with the same slug, and shows <code>execution</code> in <code>deployment:get</code>.</p><h3>Upgrade to 2.0</h3><p class="def">CLI 2.0.0 is a major release. Check your scripts for these two changes:</p><ul><li>The CLI talks only to the API address that is built into it. The old hidden flag that set another address is removed, and a command that has it is refused as an unknown flag. So your key cannot be sent to another host.</li><li><code>run:logs --json</code> and <code>deployment:logs --json</code> now print a JSON document. Before, they printed the raw output. A script that reads the raw logs must drop <code>--json</code>, or read the document.</li></ul><p>2.0.0 also adds users, groups and keys, <code>task:run --idempotency-key</code>, <code>run:timeline</code>, <code>run:logs --follow</code>, <code>usage:series</code> and <code>run:failures</code>. 2.0.1 fixes small bugs in <code>key:create</code> and in the help text.</p><h2>Keys for CI and other people</h2><p class="def">A key from <code>ignitify login</code> is an owner key: it can do everything. For CI, a script, a team member or an AI client, make a user key with only the permissions it needs. See <a href="/docs/guides/access-control">Users, groups and permissions</a>.</p><p class="def">The CLI reads the <code>IGNITIFY_API_KEY</code> environment variable first. If it is set and not empty, the CLI uses it instead of the saved key.</p>${renderComponent($$result, "Related", $$Related, {
		"title": "Next",
		"items": [
			{
				label: "Quickstart (5 min)",
				href: "/docs/quickstart"
			},
			{
				label: "Users, groups and permissions",
				href: "/docs/guides/access-control"
			},
			{
				label: "login",
				href: "/docs/cli/account-and-usage#login"
			},
			{
				label: "logout",
				href: "/docs/cli/account-and-usage#logout"
			},
			{
				label: "whoami",
				href: "/docs/cli/account-and-usage#whoami"
			}
		]
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/install-and-sign-in.astro", void 0);
var $$file$19 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/install-and-sign-in.astro";
//#endregion
//#region src/components/docs/Diagram.astro
createAstro("https://ignitify.dev");
var $$Diagram = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Diagram;
	const { label, caption, minWidth = 600 } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<figure class="ddgm"${addAttribute(`--dgm-min:${minWidth}px`, "style")}><div class="ddgm-box" role="group"${addAttribute(label, "aria-label")} tabindex="0">${renderSlot($$result, $$slots["default"])}</div>${caption && renderTemplate`<figcaption>${caption}</figcaption>`}</figure>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/Diagram.astro", void 0);
//#endregion
//#region src/content/docs/_bodies/lifecycle-and-statuses.astro
var lifecycle_and_statuses_exports = /* @__PURE__ */ __exportAll({
	default: () => $$LifecycleAndStatuses,
	file: () => $$file$18,
	url: () => void 0
});
var $$LifecycleAndStatuses = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Lifecycle and statuses</h1><p class="def">A run has a status. A deployment has a status. Each one moves along a short path. Read the status to know what to do next.</p><h2>A run</h2><p class="def">A run starts as <code>PENDING</code>. It ends as <code>COMPLETED</code>, <code>FAILED</code> or <code>CANCELLED</code>. These three are final. A final run never changes again.</p>${renderComponent($$result, "Diagram", $$Diagram, {
		"label": "The status path of a run.",
		"caption": "Solid boxes are final. A run that fails for a short-lived reason waits in RETRYING, then goes back to PENDING.",
		"minWidth": 660
	}, { "default": ($$result) => renderTemplate`<svg viewBox="0 0 660 230" role="img" aria-label="PENDING, then PROVISIONING, then RUNNING, then COMPLETED. RUNNING can also go to RETRYING and back to PENDING, or to FAILED. CANCELLED can be reached from any live status."><defs><marker id="ls-ah-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="dg-head" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect class="dg-box" x="0" y="10" width="140" height="50" rx="8"></rect><rect class="dg-box" x="173" y="10" width="140" height="50" rx="8"></rect><rect class="dg-box" x="346" y="10" width="140" height="50" rx="8"></rect><rect class="dg-box-p" x="519" y="10" width="140" height="50" rx="8"></rect><rect class="dg-box" x="173" y="120" width="140" height="50" rx="8"></rect><rect class="dg-box-p" x="519" y="120" width="140" height="50" rx="8"></rect><rect class="dg-box-p" x="346" y="120" width="140" height="50" rx="8"></rect><g class="dg-t" text-anchor="middle"><text x="70" y="42">PENDING</text><text x="243" y="42">PROVISIONING</text><text x="416" y="42">RUNNING</text><text x="589" y="42">COMPLETED</text><text x="243" y="152">RETRYING</text><text x="416" y="152">CANCELLED</text><text x="589" y="152">FAILED</text></g><g class="dg-line"><path d="M142 35 H170" marker-end="url(#ls-ah-r)"></path><path d="M315 35 H343" marker-end="url(#ls-ah-r)"></path><path d="M488 35 H516" marker-end="url(#ls-ah-r)"></path><path d="M380 62 V90 H243 V117" marker-end="url(#ls-ah-r)"></path><path d="M170 145 H70 V63" marker-end="url(#ls-ah-r)"></path><path d="M452 62 V90 H589 V117" marker-end="url(#ls-ah-r)"></path></g><text class="dg-n" x="0" y="210">run:cancel moves a PENDING, PROVISIONING, RUNNING or RETRYING run to CANCELLED.</text></svg>` })}<div class="tbl wide"><div class="tr head c3"><div class="td"><span class="lbl-h">Status</span></div><div class="td"><span class="lbl-h">Final</span></div><div class="td"><span class="lbl-h">Meaning</span></div></div><div class="tr c3"><div class="td"><strong>PENDING</strong></div><div class="td">no</div><div class="td">The run waits for a place to start. <code>task:run</code> returns it at once in this status.</div></div><div class="tr c3"><div class="td"><strong>PROVISIONING</strong></div><div class="td">no</div><div class="td">The platform boots a VM for the run.</div></div><div class="tr c3"><div class="td"><strong>RUNNING</strong></div><div class="td">no</div><div class="td">Your code runs in the VM. A run that takes a VM that is already warm goes from PENDING to RUNNING at once.</div></div><div class="tr c3"><div class="td"><strong>RETRYING</strong></div><div class="td">no</div><div class="td">The run failed for a short-lived reason. It waits, then goes back to PENDING. It still counts against your limits.</div></div><div class="tr c3"><div class="td"><strong>COMPLETED</strong></div><div class="td">yes</div><div class="td">The run finished and reported a result.</div></div><div class="tr c3"><div class="td"><strong>FAILED</strong></div><div class="td">yes</div><div class="td">The run failed. A run that failed too many times also ends here.</div></div><div class="tr c3"><div class="td"><strong>CANCELLED</strong></div><div class="td">yes</div><div class="td">You stopped the run with <code>run:cancel</code>, or you deleted its deployment or task. A stop is not a failure. If its VM was already created, that VM time still shows in <code>usage</code>.</div></div></div><h3>What moves a run</h3><div class="tbl wide"><div class="tr head c2"><div class="td"><span class="lbl-h">You do this</span></div><div class="td"><span class="lbl-h">What happens</span></div></div><div class="tr c2"><div class="td"><code>task:run</code></div><div class="td">A new run starts in PENDING.</div></div><div class="tr c2"><div class="td"><code>task:run --wait</code></div><div class="td">The CLI follows the run to its end. The exit code is 0 only when the run is COMPLETED. Ctrl+C stops the wait, not the run.</div></div><div class="tr c2"><div class="td"><code>run:cancel</code></div><div class="td">A run that is not final becomes CANCELLED. A final run keeps its status. A graceful stop of a task that listens for it leaves the run RUNNING until the task ends or the grace time ends; if the task finishes first, the run is COMPLETED.</div></div><div class="tr c2"><div class="td">A short-lived failure</div><div class="td">The run goes to RETRYING, then PENDING. After the last allowed try, it goes to FAILED.</div></div></div><h2>A deployment</h2><p class="def">A deployment starts as <code>BUILDING</code>. The platform builds it once. You can start runs only when it is <code>READY</code>.</p>${renderComponent($$result, "Motion", $$Motion, { "id": "build" })}${renderComponent($$result, "Diagram", $$Diagram, {
		"label": "The status path of a deployment.",
		"caption": "A delete moves a deployment in any status to ARCHIVED. Deploying the same code again builds a FAILED or deleted deployment anew.",
		"minWidth": 660
	}, { "default": ($$result) => renderTemplate`<svg viewBox="0 0 660 230" role="img" aria-label="BUILDING goes to READY or FAILED. READY and FAILED go to ARCHIVED after a delete. Deploying the same code again takes a FAILED deployment back to BUILDING."><defs><marker id="ls-ah-d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="dg-head" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect class="dg-box" x="0" y="10" width="140" height="50" rx="8"></rect><rect class="dg-box" x="259" y="10" width="140" height="50" rx="8"></rect><rect class="dg-box" x="259" y="120" width="140" height="50" rx="8"></rect><rect class="dg-box" x="519" y="65" width="140" height="50" rx="8"></rect><g class="dg-t" text-anchor="middle"><text x="70" y="42">BUILDING</text><text x="329" y="42">READY</text><text x="329" y="152">FAILED</text><text x="589" y="97">ARCHIVED</text></g><g class="dg-line"><path d="M142 35 H256" marker-end="url(#ls-ah-d)"></path><path d="M70 62 V145 H256" marker-end="url(#ls-ah-d)"></path><path d="M401 35 H589 V62" marker-end="url(#ls-ah-d)"></path><path d="M401 145 H589 V118" marker-end="url(#ls-ah-d)"></path><path d="M329 172 V200 H40 V63" marker-end="url(#ls-ah-d)"></path></g><text class="dg-n" x="412" y="27">after a delete</text><text class="dg-n" x="412" y="137">after a delete</text><text class="dg-n" x="52" y="220">deploy the same code again</text></svg>` })}<div class="tbl wide"><div class="tr head c2"><div class="td"><span class="lbl-h">Status</span></div><div class="td"><span class="lbl-h">Meaning</span></div></div><div class="tr c2"><div class="td"><strong>BUILDING</strong></div><div class="td">The platform builds the code. <code>task:deploy</code> waits for this to end.</div></div><div class="tr c2"><div class="td"><strong>READY</strong></div><div class="td">The build worked. You can run it.</div></div><div class="tr c2"><div class="td"><strong>FAILED</strong></div><div class="td">The build failed. The deployment keeps the reason.</div></div><div class="tr c2"><div class="td"><strong>ARCHIVED</strong></div><div class="td">You deleted the deployment and the platform freed its image. The row stays as history.</div></div></div><h3>What moves a deployment</h3><div class="tbl wide"><div class="tr head c2"><div class="td"><span class="lbl-h">You do this</span></div><div class="td"><span class="lbl-h">What happens</span></div></div><div class="tr c2"><div class="td"><code>task:deploy</code></div><div class="td">A new deployment starts in BUILDING. The same code gives the same deployment, so a repeat does not build twice.</div></div><div class="tr c2"><div class="td"><code>deployment:delete</code></div><div class="td">The deployment is deleted with all its runs. A run that is not final becomes CANCELLED. Later, the platform frees the image and the status becomes ARCHIVED.</div></div></div>${renderComponent($$result, "Related", $$Related, {
		"title": "Next",
		"items": [{
			label: "Tasks, deployments, runs, VMs",
			href: "/docs/concepts/tasks-deployments-runs-vms"
		}, {
			label: "Stop a run and clean up",
			href: "/docs/guides/stop-and-clean-up"
		}]
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/lifecycle-and-statuses.astro", void 0);
var $$file$18 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/lifecycle-and-statuses.astro";
//#endregion
//#region src/content/docs/_bodies/network.astro
var network_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Network,
	file: () => $$file$17,
	url: () => void 0
});
var $$Network = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Network</h1><p class="def">One of the <a href="/docs/concepts/seven-axes">seven axes</a>. Every network setting is under <span class="mono">execution.network</span> in <a href="/docs/reference/task-yaml">task.yaml</a>: one object, one required <span class="mono">type</span>, and the rest is policy for that type.</p><div class="tbl wide"><div class="tr head c3"><div class="td"><span class="lbl-h">type</span></div><div class="td"><span class="lbl-h">Grants</span></div><div class="td"><span class="lbl-h">What needs it</span></div></div><div class="tr c3"><div class="td"><span class="v">none</span></div><div class="td">no NIC at all (default)</div><div class="td">pure compute — nothing below applies</div></div><div class="tr c3"><div class="td"><span class="v">egress</span></div><div class="td">outbound only</div><div class="td">the task calls out to an API and never listens</div></div><div class="tr c3"><div class="td"><span class="v">bidirectional</span></div><div class="td">outbound and inbound</div><div class="td">the task serves requests — an HTTP endpoint, a webhook receiver</div></div></div><h2>Outbound (egress) — <span class="mono">egress</span> or <span class="mono">bidirectional</span></h2><div class="tbl wide"><div class="tr head c3"><div class="td"><span class="lbl-h">Key</span></div><div class="td"><span class="lbl-h">Default</span></div><div class="td"><span class="lbl-h">Meaning</span></div></div><div class="tr c3"><div class="td"><span class="v">egress_allow</span></div><div class="td">omitted = allow-all</div><div class="td">a hostname allowlist (max ${"{{limits.egress.max}}"}). <span class="mono">[]</span> means deny-all egress while keeping the NIC. A left-most <span class="mono">*</span> wildcard is the only pattern accepted — <span class="mono">*.s3.amazonaws.com</span>, never a bare TLD.</div></div><div class="tr c3"><div class="td"><span class="v">egress_tls_only</span></div><div class="td">true iff <span class="mono">egress_allow</span> is declared, else false</div><div class="td">plaintext :80 is dropped at the fence; the proxy checks the TLS ClientHello's SNI against the allowlist (handshake shape only, no decryption).</div></div><div class="tr c3"><div class="td"><span class="v">egress_mbit</span></div><div class="td">the platform ceiling (per tier)</div><div class="td">a bandwidth cap. A value above the ceiling is refused; you may only lower it.</div></div></div><h2>Inbound — <span class="mono">bidirectional</span> only</h2><p class="def">Every inbound key is <strong>rejected</strong> under <span class="mono">none</span> or <span class="mono">egress</span>. <span class="mono">inbound_port</span> is <strong>required</strong> once you declare <span class="mono">bidirectional</span>.</p><p class="def">The motion shows one live task from its public name to the end of its route: how a viewer comes in, and the guards on the way.</p>${renderComponent($$result, "Motion", $$Motion, { "id": "ingress" })}<div class="tbl wide"><div class="tr head c3"><div class="td"><span class="lbl-h">Key</span></div><div class="td"><span class="lbl-h">Default</span></div><div class="td"><span class="lbl-h">Meaning</span></div></div><div class="tr c3"><div class="td"><span class="v">inbound_port</span></div><div class="td">required, no default</div><div class="td">the port the guest listens on, ${"{{limits.port.min}}"}–${"{{limits.port.max}}"} (privileged ports are unbindable by the de-privileged task).</div></div><div class="tr c3"><div class="td"><span class="v">inbound_routes</span></div><div class="td">omitted or <span class="mono">[]</span> = expose nothing tenant-facing</div><div class="td">the public path allowlist (max ${"{{limits.egress.max}}"}): each entry is a <span class="mono">${"{prefix}"}</span>or exact <span class="mono">${"{path}"}</span>. Deny-by-default — the opposite of egress, on purpose: egress trusts your own outbound code, inbound cannot trust the internet. The platform's<span class="mono">/__callback/</span> namespace is unconditional and always reachable, whatever you declare.</div></div><div class="tr c3"><div class="td"><span class="v">inbound_rps</span> / <span class="v">inbound_burst</span></div><div class="td">the tier ceiling</div><div class="td">a per-route token bucket. You may only lower it.</div></div><div class="tr c3"><div class="td"><span class="v">inbound_max_concurrent</span></div><div class="td">a preset-derived ceiling (vCPU × operator ratio)</div><div class="td">desired max in-flight requests. A declared value above the ceiling is clamped down.</div></div></div><aside class="callout callout-note"><span class="callout-i" aria-hidden="true"></span><div class="callout-b"><p class="callout-t">The boot fingerprint</p><div class="callout-x"><p>Only <span class="mono">inbound_port</span> is in the boot fingerprint, because the guest can see it: it changes what the guest binds to. A warm VM booted under an old port is never reused for a run that expects a new one. Every other key here is host-side policy, and an edit applies at the next bind with no cold boot.</p></div></div></aside>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/network.astro", void 0);
var $$file$17 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/network.astro";
//#endregion
//#region src/content/docs/_bodies/quickstart.astro
var quickstart_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Quickstart,
	file: () => $$file$16,
	url: () => void 0
});
var $$Quickstart = createComponent(($$result, $$props, $$slots) => {
	const buildingFrame = {
		kind: "dim",
		text: "⠹ Building image 019fdebb-199b-75cc-8a15-650f3de2c717 · 7s  (Ctrl+C stops waiting, not the build)"
	};
	const runningFrame = {
		kind: "dim",
		text: "⠹ Run 019fdebb-1ce5-7048-bc36-ce8821f02c08 RUNNING · 2s  (Ctrl+C stops waiting, not the run)"
	};
	const createOut = `
✓ Task Registered
task_id      019fdebb-171e-7198-a812-a755d67e0aa2
resource_id  tsk_EZWekgdGJSLt
local_dir    /home/ada/work/tasks/hello

Command template for next step: Next Step: ignitify task:deploy <task_id>
Full command:                 ignitify task:deploy hello

payload max {{limits.payload.short}}, result max {{limits.result.short}}; over the limit the run fails`;
	const deployTable = `
✓ Deployment Created
deployment_id  019fdebb-199b-75cc-8a15-650f3de2c717
resource_id    dep_Hn4TqXw8Zc2P
status         READY
reused         false
task_id        019fdebb-171e-7198-a812-a755d67e0aa2
tenant_id      019f2b10-3c55-7a01-b2e4-9d0c61f7a8b3
content_hash   sha256:8d6d2fbd538cada906bf06ea61fd4d25392d7ab4a34807614cdabd85a0553385

System Resources:
  • Image: built and stored by the platform; there is nothing for you to download.

Monthly egress: 0 B of 100.0 GB used (0%), 100.0 GB left
Monthly compute: 42 s used, no monthly limit
Since 2026-10-14T09:12:40.000Z · Resets 2026-11-14T09:12:40.000Z · details: ignitify quota

Command template for next step: Next Step: ignitify task:run <task_id>
Full command:                 ignitify task:run hello`;
	const runPre = `Monthly egress: 0 B of 100.0 GB used (0%), 100.0 GB left
Monthly compute: 42 s used, no monthly limit
Since 2026-10-14T09:12:40.000Z · Resets 2026-11-14T09:12:40.000Z · details: ignitify quota`;
	const runDetails = `
Run Details
id                     019fdebb-1ce5-7048-bc36-ce8821f02c08
resource_id            run_E2u6u6f5F4i9
deployment_id          019fdebb-199b-75cc-8a15-650f3de2c717
tenant_id              019f2b10-3c55-7a01-b2e4-9d0c61f7a8b3
status                 COMPLETED
task_name              hello
preset                 std.micro
timeout_sec            120
boot_fingerprint       3f9c1a2b
started_at             2026-10-14T09:12:04.118Z
attempt_count          0
failure_attempt_count  0
updated_at             2026-10-14T09:12:06.902Z
created_at             2026-10-14T09:12:03.540Z

Result:
  {
    "success": true,
    "task": "hello"
  }`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Quickstart (5 min)</h1><p class="def">Four commands take you from an empty folder to a finished run. You need the ignitify CLI, installed and signed in (see <a href="/docs/install">Install and sign in</a>).</p><h2>1 · Create the task</h2><p class="def">This reserves the name <code>hello</code> and writes the starter files to <code>./tasks/hello</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:create hello",
		"output": createOut
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`The starter is Node. Add <code>--lang python</code>, <code>--lang go</code> or <code>--lang rust</code> for another language.` })}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`A registered name stays yours, so check the spelling first.` })}<h2>2 · Deploy it</h2><p class="def">The CLI uploads the folder and waits until the platform has built it. Deploy the same code again and the build is reused.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:deploy hello",
		"output": [
			buildingFrame,
			{
				kind: "ok",
				text: "✓ Image built · 14s"
			},
			...parseTerminalText(deployTable)
		]
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "tip" }, { "default": ($$result) => renderTemplate`Ctrl+C stops the wait, not the build.` })}<h2>3 · Run it and wait</h2><p class="def">The run boots its own MicroVM. <code>--wait</code> follows it to the end and prints the result. The exit code is 0 only when the run is COMPLETED.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:run hello --wait",
		"output": [
			...parseTerminalText(runPre),
			runningFrame,
			{
				kind: "ok",
				text: "✓ Run COMPLETED · 3s"
			},
			...parseTerminalText(runDetails)
		]
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`With no <code>--deployment</code>, a run uses the latest deploy of the task. If that deploy is still building or failed, the command stops and says so.` })}<h2>4 · Read the logs</h2><p class="def">Use the <code>resource_id</code> from the run, or its <code>id</code>. Both work.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:logs run_E2u6u6f5F4i9",
		"output": `[task] INFO: Task hello initialised
[task] INFO: Running task hello with payload: {}`
	})}<p class="def">That is the whole loop. Next, change the code and pass input to the task.</p>${renderComponent($$result, "Related", $$Related, {
		"title": "Next",
		"items": [
			{
				label: "Your first real task",
				href: "/docs/your-first-task"
			},
			{
				label: "task:deploy and task:run",
				href: "/docs/cli/tasks#task-deploy"
			},
			{
				label: "run:logs",
				href: "/docs/cli/runs#run-logs"
			},
			{
				label: "Tasks, deployments, runs, VMs",
				href: "/docs/concepts/tasks-deployments-runs-vms"
			}
		]
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/quickstart.astro", void 0);
var $$file$16 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/quickstart.astro";
//#endregion
//#region src/content/docs/_bodies/reliability.astro
var reliability_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Reliability,
	file: () => $$file$15,
	url: () => void 0
});
var $$Reliability = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Reliability</h1><p class="def">What happens to a run when something goes wrong that has nothing to do with your code — a transient failure, an orchestrator restarting, a host dying underneath a pinned VM.</p><h2>A transient failure retries automatically</h2><p class="def">A run that fails for a transient reason is parked as <span class="mono">RETRYING</span>, not <span class="mono">FAILED</span>. It is submitted again after a short backoff, up to your tier's attempt budget.</p><p class="def">A <strong>deliberate refusal still fails at once</strong>. If your task declared a network policy the host cannot enforce, a retry would repeat a run the platform already refused.</p><div class="tbl wide"><div class="tr head c2"><div class="td"><span class="lbl-h">Tier</span></div><div class="td"><span class="lbl-h">Total attempts (first try included)</span></div></div>${"{{tiers.attempts.rows}}"}</div><h2>An orchestrator crash re-queues your run</h2><p class="def">If the process that dispatches your run crashes, the run is re-queued at the next startup. The number of attempts is capped, so a run that keeps crashing the dispatcher cannot loop for ever.</p><p class="def">The platform runs two orchestrators as peers. One of them wins each run, and a run that one starts, the other can finish.</p>${renderComponent($$result, "Motion", $$Motion, { "id": "brains" })}<p class="def">A <em>planned</em> restart, such as a routine deploy, costs nothing from that budget. The run is marked failed cleanly, because the platform chose to stop.</p><h2>A pinned VM has one exception</h2><p class="def"><a href="/docs/concepts/storage-and-residency">A pinned VM</a> survives idle time and every routine reaper sweep. It does <strong>not</strong> survive a host restart.</p><p class="def"><span class="mono">vm:list --pinned</span> then reports the pin as lost. The next run against that task cold-boots a fresh VM, and the pin is set again on it.</p><aside class="callout callout-note"><span class="callout-i" aria-hidden="true"></span><div class="callout-b"><p class="callout-t">What "permanent standby" means</p><div class="callout-x"><p>Nothing tears a pinned VM down except <span class="mono">vm:delete --force</span> or deleting its deployment. It is not a guarantee against every host failure.</p></div></div></aside><aside class="callout callout-note"><span class="callout-i" aria-hidden="true"></span><div class="callout-b"><p class="callout-t">You configure none of this</p><div class="callout-x"><p>Retries and re-queues are what the platform already does. The only related setting you declare is <span class="mono">residency</span>. See <a href="/docs/concepts/storage-and-residency">Storage and residency</a>.</p></div></div></aside><h2>How we watch the platform</h2><p class="def">Each orchestrator emits logs and metrics. The events of your run go to its timeline, which you read with <span class="mono">run:timeline</span>. The console output of your run stays on the host until you ask for it with <span class="mono">run:logs</span>.</p><p class="def">The operators read the rest on dashboards. If an orchestrator stops answering for 2 minutes, an alert reaches them.</p>${renderComponent($$result, "Motion", $$Motion, { "id": "observability" })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/reliability.astro", void 0);
var $$file$15 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/reliability.astro";
//#endregion
//#region src/components/docs/TfSchema.astro
createAstro("https://ignitify.dev");
var $$TfSchema = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$TfSchema;
	const { rows } = Astro.props;
	const USE = {
		required: "Required",
		optional: "Optional",
		computed: "Read-only"
	};
	return renderTemplate`${maybeRenderHead($$result)}<div class="drows tfs"><table><thead><tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Use</th><th scope="col">Meaning</th></tr></thead><tbody>${rows.map((r) => renderTemplate`<tr><td data-label="Name"><code>${r.name}</code></td><td data-label="Type">${r.type}</td><td data-label="Use">${USE[r.use]}${r.flags?.length ? renderTemplate`<span class="tfs-flags">${r.flags.join(" · ")}</span>` : null}</td><td data-label="Meaning">${renderComponent($$result, "InlineText", $$InlineText, { "text": r.text })}</td></tr>`)}</tbody></table></div>`;
}, "/Users/saeed/Projects/repos/mitra/website/src/components/docs/TfSchema.astro", void 0);
//#endregion
//#region src/content/docs/_bodies/tf-api-key.astro
var tf_api_key_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfApiKey,
	file: () => $$file$14,
	url: () => void 0
});
var $$TfApiKey = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_api_key</h1><p class="def">An API key of a user. Needs an owner key. The raw key is stored in the state as a sensitive value. A user key never expires: destroy the resource to revoke it.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "access.tf",
		"code": `resource "ignitify_api_key" "ci" {
  user  = ignitify_user.ci.name
  label = "ci-pipeline"
}

# The raw key is in the state as a sensitive value.
# Pass it to a secret store. Never print it.
output "ci_key" {
  value     = ignitify_api_key.ci.raw_key
  sensitive = true
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "user",
			type: "String",
			use: "required",
			flags: ["forces replacement"],
			text: "The name of the user that holds the key."
		},
		{
			name: "label",
			type: "String",
			use: "required",
			flags: ["forces replacement"],
			text: "A label for the key. 1 to 64 letters, digits, `.`, `_` and `-`, not starting or ending with `-`."
		},
		{
			name: "raw_key",
			type: "String",
			use: "computed",
			flags: ["sensitive"],
			text: "The key itself. The server shows it once, at create. Empty after an import."
		},
		{
			name: "created_at",
			type: "String",
			use: "computed",
			text: "When the key was created (ISO 8601)."
		},
		{
			name: "resource_id",
			type: "String",
			use: "computed",
			flags: ["import id"],
			text: "The server id of the key."
		}
	] })}<h2>Behaviour</h2><ul><li>A new <code>user</code> or <code>label</code> replaces the key, and the new key has a new value. Update the place where you stored the old one.</li><li>A user key never expires. To rotate it, replace the resource: <code>terraform apply -replace=ignitify_api_key.ci</code>.</li><li>The plan of your tier caps the number of keys. A create above the cap fails at once with a plan-limit error.</li></ul>${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`The state holds <code>raw_key</code>. Use an encrypted state backend with limited access, and never print the value.` })}<h2>Import</h2><p class="def">The import id is the <code>resource_id</code> of the key. After an import, <code>raw_key</code> is empty, because the server cannot show it again.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_api_key.ci <resource_id>" })}${renderComponent($$result, "Related", $$Related, { "items": [{
		label: "ignitify_user",
		href: "/docs/terraform/user"
	}, {
		label: "Recipes",
		href: "/docs/terraform/recipes"
	}] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-api-key.astro", void 0);
var $$file$14 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-api-key.astro";
//#endregion
//#region src/content/docs/_bodies/tf-deployment.astro
var tf_deployment_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfDeployment,
	file: () => $$file$13,
	url: () => void 0
});
var $$TfDeployment = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_deployment</h1><p class="def">The deployed code of a task: the files of a task folder, uploaded and built by the server. A change of the files uploads them again and waits for the build. Needs <code>tasks.read</code>, <code>deployments.read</code> and <code>deployments.write</code>. The notify fields also need <code>hooks.write</code>.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app.tf",
		"code": `resource "ignitify_task" "report" {
  slug = "report"
}

# A change of the files in source_dir uploads them and waits for the build.
# The old deployment is deleted once the new one is READY.
resource "ignitify_deployment" "report" {
  task       = ignitify_task.report.slug
  source_dir = "\${path.module}/report"

  timeouts = {
    create = "45m"
    update = "45m"
  }
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "task",
			type: "String",
			use: "required",
			flags: ["forces replacement", "import id"],
			text: "The slug of the task. It must equal the `slug` in the folder's task config."
		},
		{
			name: "source_dir",
			type: "String",
			use: "required",
			text: "The task folder. The upload holds the files a deploy selects. See \"Which files are uploaded\" below."
		},
		{
			name: "notify_url",
			type: "String",
			use: "optional",
			text: "An HTTPS URL the deployment calls when a run ends. Unset clears it. Needs `notify_secret_wo`."
		},
		{
			name: "notify_secret_wo",
			type: "String",
			use: "optional",
			flags: ["sensitive", "write-only"],
			text: "The key that signs each notify call. At least 32 characters. Terraform cannot see a change of it, so change `notify_secret_wo_version` to send it again."
		},
		{
			name: "notify_secret_wo_version",
			type: "Number",
			use: "optional",
			text: "Any number. A change sends `notify_url` and `notify_secret_wo` again."
		},
		{
			name: "timeouts",
			type: "Object",
			use: "optional",
			text: "How long the apply waits for the build: `create` and `update`, each a duration such as `\"30m\"` or `\"1h\"`. The default is 30 minutes."
		},
		{
			name: "deployment_id",
			type: "String",
			use: "computed",
			text: "The server id of the live deployment. Unknown in a plan that uploads."
		},
		{
			name: "status",
			type: "String",
			use: "computed",
			text: "The deployment status. `READY` after a successful apply. Any other status uploads again at the next apply."
		},
		{
			name: "source_hash",
			type: "String",
			use: "computed",
			text: "A digest of the selected files, computed at plan time. A change uploads the files again."
		},
		{
			name: "content_hash",
			type: "String",
			use: "computed",
			text: "The server's content key of the deployment."
		},
		{
			name: "execution",
			type: "String",
			use: "computed",
			text: "The `execution` block of the task config, as JSON. Null when the config declares none."
		},
		{
			name: "secrets",
			type: "List of String",
			use: "computed",
			text: "The secret names the task config declares. Null when it declares none."
		}
	] })}<h2>Which files are uploaded</h2><p class="def">At plan time the provider selects the files as <code>task:deploy</code> does.</p><ul><li><b>Left out:</b> <code>.env</code> files, vendored dependencies, local state, and the paths your <code>.ignitifyignore</code> excludes.</li><li><b>Refused:</b> a symbolic link, a registry credential in <code>.npmrc</code> or <code>.yarnrc.yml</code>, a missing lockfile or entry file, and a folder over the upload size.</li><li><b>Warned about:</b> excluded files, and file names that look like private keys.</li></ul><h2>A code update</h2>${renderComponent($$result, "Callout", $$Callout, {
		"kind": "warning",
		"title": "Old runs end"
	}, { "default": ($$result) => renderTemplate`When the files change, the apply uploads the new code and waits for the new deployment to be READY. Then it deletes the old deployment. That ends the runs that are still running on the old one and deletes its run history. Hooks are not affected, because they belong to the task.` })}<ul><li>The same code and the same task config reuse the same deployment.</li><li>A failed or timed-out build keeps the old deployment. The error shows the reason, the provider deletes the deployment that did not become ready, and the next plan uploads again.</li><li>If the old deployment cannot be deleted, the new one is live and in the state, and the error names the old one. Delete it with <code>ignitify deployment:delete &lt;deployment-id&gt;</code>.</li><li>Do not use <code>create_before_destroy</code> on this resource. The same code gives the same deployment back, and the destroy step would delete the live one.</li></ul><h2>Deployment slots</h2><p class="def">Your plan allows a set number of live deployments. An update builds the new deployment before it deletes the old one, so an update needs one free slot. When all slots are used, the upload is refused with a plan-limit error. Delete a deployment you do not need (<code>ignitify deployment:list</code> shows them), or use a bigger plan. <a href="/docs/terraform/whoami">ignitify_whoami</a> shows how many you hold (<code>usage.deployment_count</code>).</p><h2>Notify callback</h2><p class="def">A deployment can call your HTTPS endpoint when a run ends, as <a href="/docs/cli/webhooks">notify:set</a> does. Every new deployment gets the callback again, and removing <code>notify_url</code> clears it. The plan refuses <code>notify_url</code> when your plan has no webhooks.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "notify.tf",
		"code": `variable "notify_secret" {
  type      = string
  sensitive = true
  ephemeral = true
}

resource "ignitify_deployment" "report" {
  task       = ignitify_task.report.slug
  source_dir = "\${path.module}/report"

  notify_url               = "https://your-domain.example/ignitify"
  notify_secret_wo         = var.notify_secret
  notify_secret_wo_version = 1
}`
	})}<h2>Import</h2><p class="def">The import id is the task slug, when the task has exactly one live deployment. Otherwise name the deployment: <code>&lt;task slug&gt;/&lt;deployment id&gt;</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_deployment.report report" })}<p class="def">The state has no <code>source_dir</code> after an import, so the first apply uploads the folder. The same code reuses the same deployment.</p>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "ignitify_task",
			href: "/docs/terraform/task"
		},
		{
			label: "Recipes: roll a code update",
			href: "/docs/terraform/recipes#roll-a-code-update"
		},
		{
			label: "Network access",
			href: "/docs/guides/network-access"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-deployment.astro", void 0);
var $$file$13 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-deployment.astro";
//#endregion
//#region src/content/docs/_bodies/tf-group.astro
var tf_group_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfGroup,
	file: () => $$file$12,
	url: () => void 0
});
var $$TfGroup = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_group</h1><p class="def">A group of the tenant: a named set of permissions and the users that get them. Needs an owner key.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "access.tf",
		"code": `resource "ignitify_group" "deployers" {
  name        = "deployers"
  permissions = ["tasks.read", "tasks.write", "deployments.read", "deployments.write"]
  members     = [ignitify_user.ci.name]
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "name",
			type: "String",
			use: "required",
			flags: ["forces replacement", "import id"],
			text: "The group name, unique in the tenant. 1 to 63 lower case letters, digits and `-`, starting with a letter or digit."
		},
		{
			name: "permissions",
			type: "Set of String",
			use: "required",
			text: "The permissions the group grants. At least one, from the list below."
		},
		{
			name: "members",
			type: "Set of String",
			use: "optional",
			text: "The user names in the group. Empty when you do not set it, so a member added outside Terraform shows as drift."
		},
		{
			name: "created_at",
			type: "String",
			use: "computed",
			text: "When the group was created (ISO 8601)."
		},
		{
			name: "resource_id",
			type: "String",
			use: "computed",
			text: "The server id of the group."
		}
	] })}<h2>Permissions</h2><p class="def">A group may grant these permissions, and no others. An unknown name is refused at plan time.</p>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Permission", "Allows"],
		"rows": [
			{
				name: "tasks.read",
				text: "Read tasks."
			},
			{
				name: "tasks.write",
				text: "Create and delete tasks. A delete also deletes the task's deployments, runs and hooks."
			},
			{
				name: "deployments.read",
				text: "Read deployments and build logs."
			},
			{
				name: "deployments.write",
				text: "Deploy, delete a deployment, ask for package advice."
			},
			{
				name: "runs.read",
				text: "Read runs, logs, timeline, failures, schedules and VMs."
			},
			{
				name: "runs.write",
				text: "Start, cancel, delete runs; create, edit, pause and delete schedules; stop VMs."
			},
			{
				name: "secrets.read",
				text: "List secret names. A value is never readable."
			},
			{
				name: "secrets.write",
				text: "Set and delete secrets."
			},
			{
				name: "hooks.read",
				text: "List the hooks of a task and read one hook."
			},
			{
				name: "hooks.write",
				text: "Create and delete hooks; set the notify callback. A hook can start runs."
			},
			{
				name: "usage.read",
				text: "Read usage, series and notifications."
			}
		]
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`A key with <code>deployments.write</code> can read secret values through the code it deploys. Grant that permission only to people who may read the secrets.` })}<h2>Behaviour</h2><ul><li>The group owns both lists. A grant or a member added outside Terraform shows as drift, and the next apply removes it.</li><li>A member must be an existing user. Refer to <code>ignitify_user.ci.name</code> and Terraform creates the user first.</li></ul><h2>Import</h2><p class="def">The import id is the group name.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_group.deployers deployers" })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "ignitify_user",
			href: "/docs/terraform/user"
		},
		{
			label: "ignitify_api_key",
			href: "/docs/terraform/api-key"
		},
		{
			label: "Users, groups and permissions",
			href: "/docs/guides/access-control"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-group.astro", void 0);
var $$file$12 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-group.astro";
//#endregion
//#region src/content/docs/_bodies/tf-hook.astro
var tf_hook_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfHook,
	file: () => $$file$11,
	url: () => void 0
});
var $$TfHook = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_hook</h1><p class="def">An inbound hook of a task. A POST to its URL, signed with its secret, starts a run of the newest ready deployment of the task. Needs <code>hooks.read</code> and <code>hooks.write</code>, and a plan with webhooks.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app.tf",
		"code": `# The hook belongs to the task: a code update keeps its URL and secret.
resource "ignitify_hook" "report" {
  task = ignitify_task.report.slug
}

output "hook_url" {
  value = ignitify_hook.report.url
}

output "hook_secret" {
  value     = ignitify_hook.report.secret
  sensitive = true
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "task",
			type: "String",
			use: "required",
			flags: ["forces replacement"],
			text: "The slug of the task."
		},
		{
			name: "url",
			type: "String",
			use: "computed",
			text: "The URL that triggers the hook."
		},
		{
			name: "secret",
			type: "String",
			use: "computed",
			flags: ["sensitive"],
			text: "The key that signs a trigger. The server shows it once, at create. Empty after an import."
		},
		{
			name: "created_at",
			type: "String",
			use: "computed",
			text: "When the hook was created (ISO 8601)."
		},
		{
			name: "resource_id",
			type: "String",
			use: "computed",
			text: "The server id of the hook. The import id is `<task slug>/<resource_id>`."
		}
	] })}<h2>Behaviour</h2><ul><li>The hook belongs to the task. A code update keeps its URL and secret.</li><li>To rotate the URL and the secret, replace the hook: <code>terraform apply -replace=ignitify_hook.report</code>. The old URL stops working.</li><li>A sender signs each call with the secret. See <a href="/docs/guides/trigger-from-a-webhook">Trigger from a webhook</a>.</li></ul>${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`The state holds <code>secret</code>. Use an encrypted state backend with limited access.` })}<h2>Import</h2><p class="def">The import id is <code>&lt;task slug&gt;/&lt;resource_id&gt;</code>. After an import, <code>secret</code> is empty.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_hook.report report/<resource_id>" })}${renderComponent($$result, "Related", $$Related, { "items": [{
		label: "ignitify_task",
		href: "/docs/terraform/task"
	}, {
		label: "Trigger from a webhook",
		href: "/docs/guides/trigger-from-a-webhook"
	}] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-hook.astro", void 0);
var $$file$11 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-hook.astro";
//#endregion
//#region src/content/docs/_bodies/tf-provider.astro
var tf_provider_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfProvider,
	file: () => $$file$10,
	url: () => void 0
});
var $$TfProvider = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Provider configuration</h1><p class="def">The <code>ignitify</code> provider has two arguments, and both have an environment variable. Most setups need only the key.</p><h2>Arguments</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [{
		name: "api_key",
		type: "String",
		use: "optional",
		flags: ["sensitive"],
		text: "The API key. Defaults to the `IGNITIFY_API_KEY` environment variable. Users, groups and user keys need an owner key. Secrets, tasks, deployments and hooks work with a user key that holds their permissions."
	}, {
		name: "endpoint",
		type: "String",
		use: "optional",
		text: "The API base URL. Defaults to the `IGNITIFY_API_URL` environment variable, else `https://api.ignitify.dev`. It must use `https`. Plain `http` is accepted only to your own machine."
	}] })}<p class="def">An argument in the block wins over its environment variable. With no key at all, the plan fails with <code>no API key</code>. Both values must be known when the provider starts, so do not set them from a value that Terraform computes during the apply.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "provider.tf",
		"code": `terraform {
  required_version = ">= 1.11"
  required_providers {
    ignitify = {
      source = "ignitify-dev/ignitify"
    }
  }
}

# The key comes from IGNITIFY_API_KEY. Do not commit a key.
provider "ignitify" {}`
	})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "export IGNITIFY_API_KEY=<your key>" })}${renderComponent($$result, "Callout", $$Callout, {
		"kind": "note",
		"title": "OpenTofu"
	}, { "default": ($$result) => renderTemplate`The provider is not in the OpenTofu Registry. With OpenTofu, write the full address: <code>source = "registry.terraform.io/ignitify-dev/ignitify"</code>.` })}<p>The provider is on the <a href="https://registry.terraform.io/providers/ignitify-dev/ignitify/latest">Terraform Registry</a>. <code>init</code> installs it and checks its signature. A local build stays an option for development.</p><h2>Which key to use</h2>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Key", "What it manages"],
		"rows": [
			{
				name: "Owner key",
				text: "`ignitify_user`, `ignitify_group` and `ignitify_api_key`. An owner key manages access only. Keep it in a separate root module that you apply by hand."
			},
			{
				name: "User key",
				text: "`ignitify_secret`, `ignitify_task`, `ignitify_deployment`, `ignitify_hook` and `ignitify_schedule`. The groups of the key's user must grant the permissions each resource needs. Use it in CI."
			},
			{
				name: "Any key",
				text: "The data source `ignitify_whoami`."
			}
		]
	})}<p class="def">With a user key, an access resource fails with <code>owner-required</code>. The <a href="/docs/guides/access-control">Users, groups and permissions</a> guide explains the permissions.</p><h2>How the provider talks to the API</h2><ul><li><b>Idempotency.</b> Every write carries an idempotency key, so a retry after a lost answer never acts twice.</li><li><b>Retries.</b> A request is tried up to 4 times. The provider retries a missing answer, a short rate limit (it waits as long as the server asks, up to 30 seconds), and a <code>503</code> that carries a wait. It waits 1, 2 and 4 seconds between tries.</li><li><b>No retry.</b> A plan limit (for example the cap on keys or secrets) fails at once. So does a rate limit with a wait longer than 30 seconds, and the error names that wait. A refused key (<code>auth-throttled</code>) is never retried.</li><li><b>Forgetting an object.</b> Terraform removes an object from the state only when the API answers that exactly that object does not exist. A wrong address or a proxy page is an error, so it never makes Terraform forget an object.</li><li><b>No CLI file.</b> The provider does not read the credentials file of the Ignitify CLI.</li></ul>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Overview",
			href: "/docs/guides/terraform"
		},
		{
			label: "ignitify_whoami",
			href: "/docs/terraform/whoami"
		},
		{
			label: "Errors and troubleshooting",
			href: "/docs/terraform/troubleshooting"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-provider.astro", void 0);
var $$file$10 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-provider.astro";
//#endregion
//#region src/content/docs/_bodies/tf-recipes.astro
var tf_recipes_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfRecipes,
	file: () => $$file$9,
	url: () => void 0
});
var $$TfRecipes = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Recipes</h1><p class="def">Short, practical setups. Every sample works with Terraform and with OpenTofu 1.11 or later. Replace the names with your own.</p><h2 id="set-up-from-zero">Set up a tenant from zero</h2><p class="def">The tenant already exists, because it comes from sign-up. This recipe fills it with access, a secret, a task, its code and a hook. Use two root modules, so the daily job never holds the owner key.</p><h3>1 · Access, with the owner key</h3><p class="def">Apply this once, by hand. It makes a user, a group and a key for CI.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "access/main.tf",
		"code": `terraform {
  required_version = ">= 1.11"
  required_providers {
    ignitify = { source = "ignitify-dev/ignitify" }
  }
}

provider "ignitify" {}

resource "ignitify_user" "ci" {
  name = "ci"
}

resource "ignitify_group" "deployers" {
  name = "deployers"
  permissions = [
    "tasks.read", "tasks.write",
    "deployments.read", "deployments.write",
    "secrets.read", "secrets.write",
    "hooks.read", "hooks.write",
    "runs.read",
    # Add "runs.write" when CI also starts runs (ignitify task:run).
  ]
  members = [ignitify_user.ci.name]
}

resource "ignitify_api_key" "ci" {
  user  = ignitify_user.ci.name
  label = "ci-pipeline"
}

output "ci_key" {
  value     = ignitify_api_key.ci.raw_key
  sensitive = true
}`
	})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "IGNITIFY_API_KEY=<owner key> terraform apply" })}<p class="def">Read the key once with <code>terraform output -raw ci_key</code> and put it in the secret store of your CI system. Do not print it to a log.</p><h3>2 · The app, with the user key</h3><p class="def">CI applies this with the user key from step 1.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app/main.tf",
		"code": `terraform {
  required_version = ">= 1.11"
  required_providers {
    ignitify = { source = "ignitify-dev/ignitify" }
  }
}

provider "ignitify" {}

variable "db_password" {
  type      = string
  sensitive = true
  ephemeral = true
}

resource "ignitify_secret" "db_password" {
  name             = "DB_PASSWORD"
  value_wo         = var.db_password
  value_wo_version = 1
}

resource "ignitify_task" "report" {
  slug = "report"
}

resource "ignitify_deployment" "report" {
  task       = ignitify_task.report.slug
  source_dir = "\${path.module}/report"
}

resource "ignitify_hook" "report" {
  task = ignitify_task.report.slug
}

output "hook_url" {
  value = ignitify_hook.report.url
}`
	})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "IGNITIFY_API_KEY=<user key> TF_VAR_db_password=<value> terraform apply" })}<p class="def">The apply makes the secret, the task, uploads and builds the code, then makes the hook. The <code>report</code> folder holds a task config with <code>slug: report</code> and a task that reads <code>DB_PASSWORD</code>. See <a href="/docs/your-first-task">Your first task</a>.</p><h2 id="roll-a-code-update">Roll a code update</h2><p class="def">Change a file in the task folder, then plan and apply.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "terraform plan",
		"output": `  # ignitify_deployment.report will be updated in-place
  ~ resource "ignitify_deployment" "report" {
      ~ deployment_id = "<old id>" -> (known after apply)
      ~ source_hash   = "<old hash>" -> "<new hash>"
    }

Plan: 0 to add, 1 to change, 0 to destroy.`
	})}<ul><li>The apply builds the new deployment first. It deletes the old one only when the new one is READY.</li><li>The hook keeps its URL and its secret.</li><li>A failed build keeps the old deployment live. Fix the code and apply again.</li><li>Runs that are still running on the old deployment end, and its run history is deleted. Apply when no run you need is in flight.</li></ul><h2 id="rotate-a-secret">Rotate a secret</h2><p class="def">Terraform cannot see a write-only value, so a new value needs a new version number.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app/main.tf",
		"code": `resource "ignitify_secret" "db_password" {
  name             = "DB_PASSWORD"
  value_wo         = var.db_password
  value_wo_version = 2   # was 1
}`
	})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "TF_VAR_db_password=<new value> terraform apply" })}<p class="def">A task reads the new value on its next run. A VM that is already running keeps the value it started with.</p><h2 id="rotate-a-key-or-a-hook">Rotate a user key or a hook</h2><p class="def">Replace the resource. The new one has a new value, and the old one stops working.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform apply -replace=ignitify_api_key.ci" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform apply -replace=ignitify_hook.report" })}<p class="def">After a key replace, put the new key in your CI store. After a hook replace, give the new URL and secret to the sender.</p><h2 id="import-existing-objects">Bring existing objects under Terraform</h2><p class="def">You made a task, a secret or a user with the CLI, and now you want Terraform to own it. Write the resource, then import it. The plan must show no change before you apply.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app/main.tf",
		"code": `resource "ignitify_task" "report" {
  slug = "report"
}

resource "ignitify_secret" "db_password" {
  name             = "DB_PASSWORD"
  value_wo         = var.db_password
}`
	})}${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_task.report report" })}${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_secret.db_password DB_PASSWORD" })}<ul><li>Import a task before its deployment and its hook.</li><li>After an import of a key or a hook, the raw key or secret is empty. Replace the resource to get a new one.</li><li>A secret with no version in your code is not sent. Set <code>value_wo_version</code> only when you want the first apply to write your value.</li></ul><p class="def">Each resource page lists its import id.</p><h2 id="use-it-from-ci">Use it from CI</h2><p class="def">A CI job needs the provider, the user key, the secret values and a state backend.</p><ol><li><b>Key.</b> Store the user key in the secret store of your CI system. Expose it to the job as <code>IGNITIFY_API_KEY</code>.</li><li><b>Values.</b> Expose each secret value as <code>TF_VAR_&lt;name&gt;</code>, for an <code>ephemeral</code> variable.</li><li><b>State.</b> Use an encrypted backend with limited access. The state holds hook secrets and user keys.</li><li><b>Steps.</b> Run <code>init</code>, then <code>plan -out</code>, then <code>apply</code> of that plan file. Apply only from your main branch.</li><li><b>Time.</b> A deployment waits for the build, which can take minutes. Set <code>timeouts</code> on the deployment, and a job timeout above it.</li></ol>${renderComponent($$result, "Code", $$Code, {
		"lang": "sh",
		"label": "ci.sh",
		"code": `terraform init -input=false
terraform plan -input=false -out=tfplan
terraform apply -input=false tfplan`
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`Never run the owner key in CI. Keep the access module out of the pipeline, or apply it by hand.` })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Overview",
			href: "/docs/guides/terraform"
		},
		{
			label: "Errors and troubleshooting",
			href: "/docs/terraform/troubleshooting"
		},
		{
			label: "ignitify_deployment",
			href: "/docs/terraform/deployment"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-recipes.astro", void 0);
var $$file$9 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-recipes.astro";
//#endregion
//#region src/content/docs/_bodies/tf-schedule.astro
var tf_schedule_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfSchedule,
	file: () => $$file$8,
	url: () => void 0
});
var $$TfSchedule = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_schedule</h1><p class="def">A recurring schedule of a task. At each slot of a cron expression, the platform starts a run of the task's newest ready deployment, with the payload and run settings given here. A code update keeps the schedule. Needs <code>runs.read</code> and <code>runs.write</code>, and a plan with room for one more schedule.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app.tf",
		"code": `# Every night at 03:00 Berlin time. The task comes from the deployment, so the
# schedule is created after the first build is ready.
resource "ignitify_schedule" "nightly" {
  task     = ignitify_deployment.report.task
  cron     = "0 3 * * *"
  timezone = "Europe/Berlin"

  # Stored in the state in plain text: never put a secret here.
  payload = jsonencode({ day = "yesterday" })

  timeout_sec = 600
  overlap     = "skip"
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "task",
			type: "String",
			use: "required",
			flags: ["forces replacement"],
			text: "The slug of the task."
		},
		{
			name: "cron",
			type: "String",
			use: "required",
			text: "A 5-field cron expression, or a nickname such as `@daily`. The server checks it at apply."
		},
		{
			name: "payload",
			type: "String",
			use: "required",
			text: "The run payload as JSON (use `jsonencode`). Stored in the state in plain text: never a secret. Empty after an import, so the first apply sends it."
		},
		{
			name: "timezone",
			type: "String",
			use: "optional",
			text: "The IANA time zone of the expression. Default `UTC`. Write the canonical name, for example `Europe/Berlin`."
		},
		{
			name: "overlap",
			type: "String",
			use: "optional",
			text: "What a slot does while the previous run is live: `skip` (default) or `allow`."
		},
		{
			name: "paused",
			type: "Boolean",
			use: "optional",
			text: "Whether the schedule is paused. Default `false`."
		},
		{
			name: "preset",
			type: "String",
			use: "optional",
			text: "The run preset. Unset: the deployment's at each slot."
		},
		{
			name: "timeout_sec",
			type: "Number",
			use: "optional",
			text: "The run timeout in seconds. Unset: the deployment's at each slot."
		},
		{
			name: "deadline_sec",
			type: "Number",
			use: "optional",
			text: "A hard limit on the run's total time, in seconds. At least the timeout. Unset: no deadline."
		},
		{
			name: "execution",
			type: "String",
			use: "optional",
			text: "The run's execution settings as JSON. Unset: the deployment's at each slot."
		},
		{
			name: "status",
			type: "String",
			use: "computed",
			text: "`active`, `paused` or `auto_paused` (paused by the platform; see `pause_reason`)."
		},
		{
			name: "pause_reason",
			type: "String",
			use: "computed",
			text: "Why the platform paused the schedule; null unless `status` is `auto_paused`."
		},
		{
			name: "payload_sha256",
			type: "String",
			use: "computed",
			text: "The server's digest of the stored payload. It changes only when the payload changes."
		},
		{
			name: "schedule_id",
			type: "String",
			use: "computed",
			text: "The server id (`sch_…`). The import id is `<task slug>/<schedule_id>`."
		},
		{
			name: "created_by",
			type: "String",
			use: "computed",
			text: "The id of the API key that created the schedule."
		},
		{
			name: "created_at",
			type: "String",
			use: "computed",
			text: "When the schedule was created (ISO 8601)."
		}
	] })}<h2>Behaviour</h2><ul><li>Each slot runs the task's newest ready deployment, so a code update needs no change here.</li><li>A change made outside Terraform shows in the next plan: a pause, a new payload, another zone or expression. The apply puts the configured values back.</li><li>The platform pauses a schedule after too many missed slots in a row, or when the plan no longer allows what it runs. Then <code>status</code> is <code>auto_paused</code> and every plan warns. Terraform does not resume it on its own: fix the cause, then resume it with <code>ignitify schedule:resume</code>.</li><li>A resumed schedule fires from its next slot. It does not catch up the slots it missed.</li><li>Deleting the task deletes its schedules.</li><li>The plan limits how many schedules a tenant holds. One more is refused at apply with <code>schedule-quota</code>.</li></ul>${renderComponent($$result, "Callout", $$Callout, { "kind": "warning" }, { "default": ($$result) => renderTemplate`The state holds <code>payload</code> in plain text. Never put a secret in a payload: the task reads secrets through <code>ignitify_secret</code>.` })}<h2>Import</h2><p class="def">The import id is <code>&lt;task slug&gt;/&lt;schedule_id&gt;</code>. After an import, <code>payload</code> is empty, so the first apply sends the configured payload.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_schedule.nightly report/<schedule_id>" })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "ignitify_task",
			href: "/docs/terraform/task"
		},
		{
			label: "ignitify_deployment",
			href: "/docs/terraform/deployment"
		},
		{
			label: "Run later",
			href: "/docs/guides/run-later"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-schedule.astro", void 0);
var $$file$8 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-schedule.astro";
//#endregion
//#region src/content/docs/_bodies/tf-secret.astro
var tf_secret_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfSecret,
	file: () => $$file$7,
	url: () => void 0
});
var $$TfSecret = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_secret</h1><p class="def">A tenant secret that tasks read by name. The value is write-only: it never reaches the plan or the state. Works with a user key that holds <code>secrets.read</code> and <code>secrets.write</code>.</p>${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`Write-only arguments need Terraform 1.11 or later, or OpenTofu 1.11 or later.` })}<h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app.tf",
		"code": `variable "db_password" {
  type      = string
  sensitive = true
  ephemeral = true
}

# The value is write-only. Raise value_wo_version to send a new value.
resource "ignitify_secret" "db_password" {
  name             = "DB_PASSWORD"
  value_wo         = var.db_password
  value_wo_version = 1
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "name",
			type: "String",
			use: "required",
			flags: ["forces replacement", "import id"],
			text: "The secret name. 1 to 64 capital letters, digits and `_`, starting with a letter."
		},
		{
			name: "value_wo",
			type: "String",
			use: "required",
			flags: ["sensitive", "write-only"],
			text: "The secret value. Terraform cannot see a change of a write-only argument, so change `value_wo_version` to send it again."
		},
		{
			name: "value_wo_version",
			type: "Number",
			use: "optional",
			text: "Any number. A change sends `value_wo` to the API again."
		},
		{
			name: "updated_at",
			type: "String",
			use: "computed",
			text: "When the value was last written (ISO 8601). A write made outside Terraform shows here."
		}
	] })}<h2>Behaviour</h2><ul><li>Declare the variable as <code>ephemeral</code>, so Terraform never stores the value.</li><li>A create refuses a name that already exists, because the write would overwrite the value. To manage an existing secret, import it first.</li><li>After an import the state has no version. If your code sets <code>value_wo_version</code>, the first apply sends your value once. If it sets none, nothing is sent.</li><li>The plan of your tier caps the number of secrets. A create above the cap fails at once with a plan-limit error.</li></ul><p class="def">A task reads the secret by name. See <a href="/docs/guides/use-secrets">Use secrets</a>.</p><h2>Import</h2><p class="def">The import id is the secret name.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_secret.db_password DB_PASSWORD" })}${renderComponent($$result, "Related", $$Related, { "items": [{
		label: "Recipes: rotate a secret",
		href: "/docs/terraform/recipes#rotate-a-secret"
	}, {
		label: "Use secrets",
		href: "/docs/guides/use-secrets"
	}] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-secret.astro", void 0);
var $$file$7 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-secret.astro";
//#endregion
//#region src/content/docs/_bodies/tf-task.astro
var tf_task_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfTask,
	file: () => $$file$6,
	url: () => void 0
});
var $$TfTask = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_task</h1><p class="def">A task: the name its code is deployed and run under. Needs <code>tasks.read</code> and <code>tasks.write</code>. The code comes from <a href="/docs/terraform/deployment">ignitify_deployment</a>.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "app.tf",
		"code": `resource "ignitify_task" "report" {
  slug = "report"
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "slug",
			type: "String",
			use: "required",
			flags: ["forces replacement", "import id"],
			text: "The task slug. 1 to 63 lower case letters, digits and `-`, starting and ending with a letter or digit. It must equal the `slug` in the task config of the folder you deploy."
		},
		{
			name: "created_at",
			type: "String",
			use: "computed",
			text: "When the task was created (ISO 8601)."
		},
		{
			name: "resource_id",
			type: "String",
			use: "computed",
			text: "The public resource id of the task."
		},
		{
			name: "task_id",
			type: "String",
			use: "computed",
			text: "The server id of the task."
		}
	] })}<h2>Behaviour</h2><ul><li>A create on the slug of a live task fails with <code>task-slug-taken</code>. To manage an existing task, import it.</li><li>A destroy deletes the task with its deployments, runs and hooks.</li><li>Creating the same slug again brings back the same task, without those objects.</li></ul><h2>Import</h2><p class="def">The import id is the task slug.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_task.report report" })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "ignitify_deployment",
			href: "/docs/terraform/deployment"
		},
		{
			label: "ignitify_hook",
			href: "/docs/terraform/hook"
		},
		{
			label: "ignitify_schedule",
			href: "/docs/terraform/schedule"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-task.astro", void 0);
var $$file$6 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-task.astro";
//#endregion
//#region src/content/docs/_bodies/tf-troubleshooting.astro
var tf_troubleshooting_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfTroubleshooting,
	file: () => $$file$5,
	url: () => void 0
});
var $$TfTroubleshooting = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>Errors and troubleshooting</h1><p class="def">When the API refuses a request, the error shows the HTTP status, the message and a <code>reason</code> code. This page lists the reasons the provider acts on, and what to do.</p><h2>Access refusals</h2>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Reason", "What it means and what to do"],
		"rows": [
			{
				name: "owner-required",
				text: "You used a user key on an owner-only resource (`ignitify_user`, `ignitify_group`, `ignitify_api_key`). Apply the access module with the owner key."
			},
			{
				name: "permission-denied",
				text: "The key lacks a permission. The error names it (`needed`). Add it to a group of the key's user, then apply again."
			},
			{
				name: "user-not-found",
				text: "A user in the request does not exist. Create the `ignitify_user` first, and refer to its `name` so Terraform orders them."
			},
			{
				name: "group-not-found",
				text: "A group in the request does not exist."
			},
			{
				name: "name-taken",
				text: "A user or group with this name exists. Import it, or choose another name."
			},
			{
				name: "unknown-permission",
				text: "A permission name is not in the fixed list. See the list on the `ignitify_group` page."
			}
		]
	})}<h2>Missing objects</h2><p class="def">These answers mean one exact object is gone. A refresh drops it from the state, and a delete counts as done.</p>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Reason", "Object"],
		"rows": [
			{
				name: "key-not-found",
				text: "An `ignitify_api_key`."
			},
			{
				name: "secret-not-found",
				text: "An `ignitify_secret`."
			},
			{
				name: "task-not-found",
				text: "An `ignitify_task`."
			},
			{
				name: "deployment-not-found",
				text: "An `ignitify_deployment`."
			},
			{
				name: "hook-not-found",
				text: "An `ignitify_hook`."
			}
		]
	})}<p class="def">Any other <code>404</code>, such as a wrong endpoint or a proxy page, is an error. It never makes Terraform forget an object.</p><h2>Conflicts</h2>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Reason", "What it means and what to do"],
		"rows": [
			{
				name: "task-slug-taken",
				text: "A create used the slug of a live task. Import the task: `terraform import ignitify_task.<name> <slug>`."
			},
			{
				name: "secret-exists",
				text: "A create used the name of a secret that exists. Import it first, so a write does not overwrite its value."
			},
			{
				name: "idempotency-in-progress",
				text: "The same write is still running on the server. The provider tries again by itself."
			},
			{
				name: "deployment-race",
				text: "The deployment a create joined was deleted at the same moment. The provider tries again by itself."
			}
		]
	})}<h2>Limits and waits</h2>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Reason", "What it means and what to do"],
		"rows": [{
			name: "rate-limited",
			text: "A short limit. The provider waits as long as the server asks, up to 30 seconds, and tries again (4 tries at most). A longer wait fails, and the error names it."
		}, {
			name: "auth-throttled",
			text: "The key was refused too many times. The provider does not retry. Check that the key is right."
		}]
	})}<p class="def">A <code>429</code> with no reason is a plan limit, for example the cap on keys, secrets or deployments. It fails at once. Free a slot, or use a bigger plan. <a href="/docs/terraform/whoami">ignitify_whoami</a> shows your limits and usage.</p><h2>Problems you may see in a plan</h2>${renderComponent($$result, "RowTable", $$RowTable, {
		"head": ["Message or sign", "Cause and fix"],
		"rows": [
			{
				name: "no API key",
				text: "The provider has no key. Set `IGNITIFY_API_KEY`, or `api_key` in the provider block."
			},
			{
				name: "endpoint must use https",
				text: "The endpoint is plain `http` to another machine. Use `https`."
			},
			{
				name: "api_key and endpoint must be known",
				text: "A provider argument comes from a value that Terraform computes during the apply. Set it from a variable or the environment."
			},
			{
				name: "Drift on a group",
				text: "A permission or a member was added outside Terraform. The next apply removes it. Add it to the configuration if you want to keep it."
			},
			{
				name: "Secret shows a new updated_at",
				text: "The value was written outside Terraform. Raise `value_wo_version` to write yours again."
			},
			{
				name: "A deployment is updated at every plan",
				text: "Its status is not READY, or the files change at every run (for example a generated file in the folder). Exclude generated files with `.ignitifyignore`."
			},
			{
				name: "The build fails",
				text: "The error shows the build reason. The old deployment stays live and the failed one is deleted. Fix the code and apply again."
			},
			{
				name: "A slot is missing for an update",
				text: "An update needs one free deployment slot. Delete a deployment you do not need, or use a bigger plan."
			}
		]
	})}<h2>Still stuck</h2><p class="def">Run <code>ignitify whoami</code> with the same key to check the key, its permissions and your plan. See <a href="/docs/guides/troubleshoot">Troubleshoot</a> for the CLI side, and <a href="/docs/reference/errors">Errors</a> for the API errors.</p>${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "Provider configuration",
			href: "/docs/terraform/provider"
		},
		{
			label: "Recipes",
			href: "/docs/terraform/recipes"
		},
		{
			label: "Errors",
			href: "/docs/reference/errors"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-troubleshooting.astro", void 0);
var $$file$5 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-troubleshooting.astro";
//#endregion
//#region src/content/docs/_bodies/tf-user.astro
var tf_user_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfUser,
	file: () => $$file$4,
	url: () => void 0
});
var $$TfUser = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_user</h1><p class="def">A user of the tenant. A user has no password and cannot sign in. It holds <a href="/docs/terraform/api-key">keys</a> and gets its permissions from <a href="/docs/terraform/group">groups</a>. Needs an owner key.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "access.tf",
		"code": `resource "ignitify_user" "ci" {
  name = "ci"
}`
	})}<h2>Arguments and attributes</h2>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "name",
			type: "String",
			use: "required",
			flags: ["forces replacement", "import id"],
			text: "The user name, unique in the tenant. 1 to 63 lower case letters, digits and `-`, starting with a letter or digit."
		},
		{
			name: "created_at",
			type: "String",
			use: "computed",
			text: "When the user was created (ISO 8601)."
		},
		{
			name: "resource_id",
			type: "String",
			use: "computed",
			text: "The server id of the user."
		}
	] })}<h2>Behaviour</h2><ul><li>A new name replaces the user, and the old user's keys are revoked.</li><li>Deleting a user revokes all its keys and takes it out of every group.</li></ul><h2>Import</h2><p class="def">The import id is the user name.</p>${renderComponent($$result, "Terminal", $$Terminal, { "command": "terraform import ignitify_user.ci ci" })}${renderComponent($$result, "Related", $$Related, { "items": [
		{
			label: "ignitify_group",
			href: "/docs/terraform/group"
		},
		{
			label: "ignitify_api_key",
			href: "/docs/terraform/api-key"
		},
		{
			label: "Users, groups and permissions",
			href: "/docs/guides/access-control"
		}
	] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-user.astro", void 0);
var $$file$4 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-user.astro";
//#endregion
//#region src/content/docs/_bodies/tf-whoami.astro
var tf_whoami_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TfWhoami,
	file: () => $$file$3,
	url: () => void 0
});
var $$TfWhoami = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>ignitify_whoami</h1><p class="def">A data source. It reads the tenant, the calling key, the permissions it holds, the limits of your plan and what the tenant holds now. It works with any key.</p><h2>Example</h2>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "main.tf",
		"code": `data "ignitify_whoami" "me" {}

# Stop early when the configuration needs an owner key.
check "owner_key" {
  assert {
    condition     = data.ignitify_whoami.me.is_owner_key
    error_message = "This configuration manages access and needs an owner key."
  }
}`
	})}<h2>Attributes</h2><p class="def">Every attribute is read-only. The data source has no arguments.</p>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "tenant_id",
			type: "String",
			use: "computed",
			text: "The tenant id."
		},
		{
			name: "tenant_name",
			type: "String",
			use: "computed",
			text: "The tenant name."
		},
		{
			name: "status",
			type: "String",
			use: "computed",
			text: "The tenant status."
		},
		{
			name: "tier_name",
			type: "String",
			use: "computed",
			text: "The tenant's plan."
		},
		{
			name: "tier_version",
			type: "Number",
			use: "computed",
			text: "The version of the plan."
		},
		{
			name: "key_id",
			type: "String",
			use: "computed",
			text: "The resource id of the calling key."
		},
		{
			name: "is_owner_key",
			type: "Boolean",
			use: "computed",
			text: "Whether the calling key is an owner key."
		},
		{
			name: "user",
			type: "String",
			use: "computed",
			text: "The user that holds the calling key. Null for an owner key."
		},
		{
			name: "groups",
			type: "Set of String",
			use: "computed",
			text: "The groups of the key's user."
		},
		{
			name: "permissions",
			type: "Set of String",
			use: "computed",
			text: "The permissions the key holds."
		},
		{
			name: "limits",
			type: "Object",
			use: "computed",
			text: "The limits of your plan. A null limit is unlimited. See below."
		},
		{
			name: "usage",
			type: "Object",
			use: "computed",
			text: "What the tenant holds now. See below."
		}
	] })}<h3>limits</h3>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "max_tasks",
			type: "Number",
			use: "computed",
			text: "Most tasks."
		},
		{
			name: "max_running_vms",
			type: "Number",
			use: "computed",
			text: "Most VMs running at once."
		},
		{
			name: "max_pinned_vms",
			type: "Number",
			use: "computed",
			text: "Most pinned VMs."
		},
		{
			name: "max_units",
			type: "Number",
			use: "computed",
			text: "Most run units in use at once."
		},
		{
			name: "max_storage_mib",
			type: "Number",
			use: "computed",
			text: "Scratch storage per run, in MiB."
		},
		{
			name: "max_total_image_bytes",
			type: "Number",
			use: "computed",
			text: "Most bytes in the image store."
		},
		{
			name: "max_payload_bytes",
			type: "Number",
			use: "computed",
			text: "Most bytes passed into a task. The same for every tenant."
		},
		{
			name: "max_result_bytes",
			type: "Number",
			use: "computed",
			text: "Most bytes a task sends back. The same for every tenant."
		}
	] })}<h3>usage</h3>${renderComponent($$result, "TfSchema", $$TfSchema, { "rows": [
		{
			name: "task_count",
			type: "Number",
			use: "computed",
			text: "Tasks."
		},
		{
			name: "deployment_count",
			type: "Number",
			use: "computed",
			text: "Deployments."
		},
		{
			name: "active_runs",
			type: "Number",
			use: "computed",
			text: "Active runs."
		},
		{
			name: "active_units",
			type: "Number",
			use: "computed",
			text: "Run units in use."
		},
		{
			name: "pinned_vms",
			type: "Number",
			use: "computed",
			text: "Pinned VMs."
		},
		{
			name: "total_image_bytes",
			type: "Number",
			use: "computed",
			text: "Bytes in the image store."
		}
	] })}<h2>Check a limit before you apply</h2><p class="def">A <code>check</code> block shows a warning in the plan. It does not stop the apply.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "hcl",
		"label": "main.tf",
		"code": `# Warn, with a clear message, when no task slot is free.
check "task_slot" {
  assert {
    condition = (
      data.ignitify_whoami.me.limits.max_tasks == null ||
      data.ignitify_whoami.me.usage.task_count < data.ignitify_whoami.me.limits.max_tasks
    )
    error_message = "The plan has no free task slot."
  }
}`
	})}${renderComponent($$result, "Related", $$Related, { "items": [{
		label: "Provider configuration",
		href: "/docs/terraform/provider"
	}, {
		label: "Watch usage and limits",
		href: "/docs/guides/watch-usage-and-limits"
	}] })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-whoami.astro", void 0);
var $$file$3 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/tf-whoami.astro";
//#endregion
//#region src/content/docs/_bodies/what-is-ignitify.astro
var what_is_ignitify_exports = /* @__PURE__ */ __exportAll({
	default: () => $$WhatIsIgnitify,
	file: () => $$file$2,
	url: () => void 0
});
var $$WhatIsIgnitify = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<h1>What is Ignitify</h1><p class="def">Ignitify runs your code in a Firecracker MicroVM. Your code gets its own VM, with its own kernel. A warm VM can serve your next run.</p><ul class="def"><li>You write a <strong>task</strong>: a folder with your code and a <code>task.yaml</code>.</li><li>You <strong>deploy</strong> it. The platform builds it once.</li><li>You <strong>run</strong> it. A run boots a MicroVM, or takes a warm one.</li><li>You say what the task needs. The platform picks how to run it.</li><li>A VM is torn down after its run, unless you ask to keep it warm.</li></ul>${renderComponent($$result, "Motion", $$Motion, { "id": "overview" })}${renderComponent($$result, "Diagram", $$Diagram, {
		"label": "A task has deployments. A deployment has runs. Each run boots a MicroVM or takes a warm one.",
		"caption": "You create the first three. The platform boots the VM.",
		"minWidth": 0
	}, { "default": ($$result) => renderTemplate`<svg class="dg-wide" viewBox="0 0 660 120" role="img" aria-label="Task, then deployment, then run, then MicroVM."><defs><marker id="wi-ah-w" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="dg-head" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect class="dg-box" x="0" y="10" width="140" height="70" rx="8"></rect><rect class="dg-box" x="173" y="10" width="140" height="70" rx="8"></rect><rect class="dg-box" x="346" y="10" width="140" height="70" rx="8"></rect><rect class="dg-box-p" x="519" y="10" width="140" height="70" rx="8"></rect><g class="dg-t" text-anchor="middle"><text x="70" y="40">task</text><text x="243" y="40">deployment</text><text x="416" y="40">run</text><text x="589" y="40">MicroVM</text></g><g class="dg-s" text-anchor="middle"><text x="70" y="64">task:create</text><text x="243" y="64">task:deploy</text><text x="416" y="64">task:run</text><text x="589" y="64">one per run</text></g><g class="dg-line"><path d="M142 45 H170" marker-end="url(#wi-ah-w)"></path><path d="M315 45 H343" marker-end="url(#wi-ah-w)"></path><path d="M488 45 H516" marker-end="url(#wi-ah-w)"></path></g><rect class="dg-box" x="0" y="98" width="22" height="16" rx="3"></rect><text class="dg-n" x="30" y="111">you create it</text><rect class="dg-box-p" x="180" y="98" width="22" height="16" rx="3"></rect><text class="dg-n" x="210" y="111">the platform boots it</text></svg><svg class="dg-narrow" viewBox="0 0 300 410" role="img" aria-label="Task, then deployment, then run, then MicroVM, from top to bottom."><defs><marker id="wi-ah-n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="dg-head" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect class="dg-box" x="10" y="6" width="280" height="56" rx="8"></rect><rect class="dg-box" x="10" y="90" width="280" height="56" rx="8"></rect><rect class="dg-box" x="10" y="174" width="280" height="56" rx="8"></rect><rect class="dg-box-p" x="10" y="258" width="280" height="56" rx="8"></rect><g class="dg-t"><text x="26" y="29">task</text><text x="26" y="113">deployment</text><text x="26" y="197">run</text><text x="26" y="281">MicroVM</text></g><g class="dg-s"><text x="26" y="49">task:create</text><text x="26" y="133">task:deploy</text><text x="26" y="217">task:run</text><text x="26" y="301">one per run</text></g><g class="dg-line"><path d="M150 64 V88" marker-end="url(#wi-ah-n)"></path><path d="M150 148 V172" marker-end="url(#wi-ah-n)"></path><path d="M150 232 V256" marker-end="url(#wi-ah-n)"></path></g><rect class="dg-box" x="10" y="340" width="22" height="16" rx="3"></rect><text class="dg-n" x="40" y="353">you create it</text><rect class="dg-box-p" x="10" y="366" width="22" height="16" rx="3"></rect><text class="dg-n" x="40" y="379">the platform boots it</text></svg>` })}<h2>Three terms</h2><div class="tbl"><div class="tr head c3"><div class="td"><span class="lbl-h">Term</span></div><div class="td"><span class="lbl-h">Id</span></div><div class="td"><span class="lbl-h">What it is</span></div></div><div class="tr c3"><div class="td"><strong>task</strong></div><div class="td"><code>tsk_…</code></div><div class="td">A name you keep. <code>task:create</code> reserves it.</div></div><div class="tr c3"><div class="td"><strong>deployment</strong></div><div class="td"><code>dep_…</code></div><div class="td">One built version of the task. Same code, same deployment.</div></div><div class="tr c3"><div class="td"><strong>run</strong></div><div class="td"><code>run_…</code></div><div class="td">One job in one MicroVM, started from a deployment.</div></div></div><p class="def">Every id also has a long UUID. Either one works in a command.</p><h2>What you do</h2><p class="def">Three commands, from a folder to a finished job.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "bash",
		"label": "terminal",
		"code": `ignitify task:create hello
ignitify task:deploy hello
ignitify task:run hello --wait`
	})}${renderComponent($$result, "Related", $$Related, {
		"title": "Next",
		"items": [
			{
				label: "Quickstart (5 min)",
				href: "/docs/quickstart"
			},
			{
				label: "Tasks, deployments, runs, VMs",
				href: "/docs/concepts/tasks-deployments-runs-vms"
			},
			{
				label: "The seven axes",
				href: "/docs/concepts/seven-axes"
			}
		]
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/what-is-ignitify.astro", void 0);
var $$file$2 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/what-is-ignitify.astro";
//#endregion
//#region src/content/docs/_bodies/your-first-task.astro
var your_first_task_exports = /* @__PURE__ */ __exportAll({
	default: () => $$YourFirstTask,
	file: () => $$file$1,
	url: () => void 0
});
var $$YourFirstTask = createComponent(($$result, $$props, $$slots) => {
	const building = {
		kind: "dim",
		text: "⠹ Building image 019fdebc-2a40-7e11-95d3-1c4b7f08a6e5 · 9s  (Ctrl+C stops waiting, not the build)"
	};
	const running = {
		kind: "dim",
		text: "⠹ Run 019fdebc-5e13-7b02-9c2d-7f1a6b3e8c22 RUNNING · 2s  (Ctrl+C stops waiting, not the run)"
	};
	const deployNew = `
✓ Deployment Created
Key            Value
-------------  -----------------------------------------------------------------------
deployment_id  019fdebc-2a40-7e11-95d3-1c4b7f08a6e5
resource_id    dep_Wc5LpR8kYt3N
status         READY
reused         false
task_id        019fdebb-171e-7198-a812-a755d67e0aa2
tenant_id      019f2b10-3c55-7a01-b2e4-9d0c61f7a8b3
content_hash   sha256:ba793a91f402ef04c373a0c05a03da343e5de27370f745b56b3e5f571094957a

System Resources:
  • Image: built and stored by the platform; there is nothing for you to download.

Monthly egress: 0 B of 100.0 GB used (0%), 100.0 GB left
Monthly compute: 42 s used, no monthly limit
Since 2026-10-14T09:12:40.000Z · Resets 2026-11-14T09:12:40.000Z · details: ignitify quota

Command template for next step: Next Step: ignitify task:run <task_id>
Full command:                 ignitify task:run hello`;
	const deployReused = deployNew.replace("reused         false", "reused         true");
	const runPre = `Monthly egress: 0 B of 100.0 GB used (0%), 100.0 GB left
Monthly compute: 42 s used, no monthly limit
Since 2026-10-14T09:12:40.000Z · Resets 2026-11-14T09:12:40.000Z · details: ignitify quota`;
	const runDetails = `
Run Details
id                     019fdebc-5e13-7b02-9c2d-7f1a6b3e8c22
resource_id            run_Qm7TnX4vC9bD
deployment_id          019fdebc-2a40-7e11-95d3-1c4b7f08a6e5
tenant_id              019f2b10-3c55-7a01-b2e4-9d0c61f7a8b3
status                 COMPLETED
task_name              hello
preset                 std.micro
timeout_sec            120
boot_fingerprint       3f9c1a2b
started_at             2026-10-14T09:20:41.207Z
attempt_count          1
failure_attempt_count  0
updated_at             2026-10-14T09:20:43.511Z
created_at             2026-10-14T09:20:40.093Z

Result:
  {
    "success": true,
    "greeting": "Hello, Ada"
  }`;
	return renderTemplate`${maybeRenderHead($$result)}<h1>Your first real task</h1><p class="def">Take the <code>hello</code> task from the <a href="/docs/quickstart">Quickstart</a>. Change its code, send it input, read the result, and see an unchanged deploy reused.</p><h2>1 · Edit run()</h2><p class="def">Open <code>tasks/hello/index.ts</code>. <code>run(payload, ctx)</code> gets the JSON you pass with <code>--payload</code>. Whatever it returns is the result.</p>${renderComponent($$result, "Code", $$Code, {
		"lang": "ts",
		"label": "tasks/hello/index.ts",
		"code": `export async function run(payload: { name?: string }, _ctx: unknown) {
  const name = payload.name ?? "world";
  console.log(\`Hello, \${name}\`);
  return { success: true, greeting: \`Hello, \${name}\` };
}`
	})}<h2>2 · Deploy the change</h2><p class="def">New code means a new build, so <code>reused</code> is <code>false</code>.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:deploy hello",
		"output": [
			building,
			{
				kind: "ok",
				text: "✓ Image built · 16s"
			},
			...parseTerminalText(deployNew)
		]
	})}<h2>3 · Run it with a payload</h2><p class="def">The payload is JSON. It applies to this run only; <code>task.yaml</code> is never changed.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": `ignitify task:run hello --payload '{"name":"Ada"}' --wait`,
		"output": [
			...parseTerminalText(runPre),
			running,
			{
				kind: "ok",
				text: "✓ Run COMPLETED · 3s"
			},
			...parseTerminalText(runDetails)
		]
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "note" }, { "default": ($$result) => renderTemplate`Bad JSON is refused before anything is sent: <code>Error: --payload is not valid JSON: …</code>` })}<h2>4 · Read the logs</h2><p class="def">Logs hold what the task printed. The result holds what it returned.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify run:logs run_Qm7TnX4vC9bD",
		"output": `[task] INFO: Task hello initialised
[task] INFO: Hello, Ada`
	})}<h2>5 · Deploy again, unchanged</h2><p class="def">The same code gives the same deployment. Nothing is built, and the line says so.</p>${renderComponent($$result, "Terminal", $$Terminal, {
		"command": "ignitify task:deploy hello",
		"output": [{
			kind: "ok",
			text: "✓ Image already built — reused · 1s"
		}, ...parseTerminalText(deployReused)]
	})}${renderComponent($$result, "Callout", $$Callout, { "kind": "tip" }, { "default": ($$result) => renderTemplate`A run uses the latest deploy. To run an older one, pass <code>--deployment &lt;id&gt;</code>.` })}<h2>Size limits</h2><p class="def">A payload is at most ${"{{limits.payload.short}}"} and a result at most ${"{{limits.result.short}}"}. For more data, write it to your own store from inside the task and return a link. See <a href="/docs/concepts/presets-and-limits">Presets and limits</a>.</p>${renderComponent($$result, "Related", $$Related, {
		"title": "Next",
		"items": [
			{
				label: "Tasks, deployments, runs, VMs",
				href: "/docs/concepts/tasks-deployments-runs-vms"
			},
			{
				label: "task.yaml",
				href: "/docs/reference/task-yaml"
			},
			{
				label: "task:run",
				href: "/docs/cli/tasks#task-run"
			},
			{
				label: "run:get",
				href: "/docs/cli/runs#run-get"
			}
		]
	})}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/your-first-task.astro", void 0);
var $$file$1 = "/Users/saeed/Projects/repos/mitra/website/src/content/docs/_bodies/your-first-task.astro";
//#endregion
//#region src/pages/docs/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://ignitify.dev");
async function getStaticPaths() {
	return (await getCollection("docs")).filter((e) => !e.data.planned && e.data.route === void 0).map((e) => ({
		params: { slug: e.id },
		props: { entry: e }
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const { entry } = Astro.props;
	const file = entry.data.body.split("/").pop();
	const htmlBodies = /* #__PURE__ */ Object.assign({
		"../../content/docs/_bodies/presets-limits.html": presets_limits_default,
		"../../content/docs/_bodies/refused-values.html": refused_values_default,
		"../../content/docs/_bodies/seven-axes.html": seven_axes_default,
		"../../content/docs/_bodies/storage-residency.html": storage_residency_default,
		"../../content/docs/_bodies/task-config.html": task_config_default
	});
	const astroBodies = /* #__PURE__ */ Object.assign({
		"../../content/docs/_bodies/concepts.astro": concepts_exports,
		"../../content/docs/_bodies/errors.astro": errors_exports,
		"../../content/docs/_bodies/guide-access-control.astro": guide_access_control_exports,
		"../../content/docs/_bodies/guide-ai-harness.astro": guide_ai_harness_exports,
		"../../content/docs/_bodies/guide-choose-a-vm-size-and-disk.astro": guide_choose_a_vm_size_and_disk_exports,
		"../../content/docs/_bodies/guide-integrations.astro": guide_integrations_exports,
		"../../content/docs/_bodies/guide-keep-a-vm-warm-or-pinned.astro": guide_keep_a_vm_warm_or_pinned_exports,
		"../../content/docs/_bodies/guide-network-access.astro": guide_network_access_exports,
		"../../content/docs/_bodies/guide-pass-input-and-read-results.astro": guide_pass_input_and_read_results_exports,
		"../../content/docs/_bodies/guide-run-later.astro": guide_run_later_exports,
		"../../content/docs/_bodies/guide-stop-and-clean-up.astro": guide_stop_and_clean_up_exports,
		"../../content/docs/_bodies/guide-terraform.astro": guide_terraform_exports,
		"../../content/docs/_bodies/guide-trigger-from-a-webhook.astro": guide_trigger_from_a_webhook_exports,
		"../../content/docs/_bodies/guide-troubleshoot.astro": guide_troubleshoot_exports,
		"../../content/docs/_bodies/guide-use-secrets.astro": guide_use_secrets_exports,
		"../../content/docs/_bodies/guide-watch-usage-and-limits.astro": guide_watch_usage_and_limits_exports,
		"../../content/docs/_bodies/how-capacity-works.astro": how_capacity_works_exports,
		"../../content/docs/_bodies/install-and-sign-in.astro": install_and_sign_in_exports,
		"../../content/docs/_bodies/lifecycle-and-statuses.astro": lifecycle_and_statuses_exports,
		"../../content/docs/_bodies/network.astro": network_exports,
		"../../content/docs/_bodies/quickstart.astro": quickstart_exports,
		"../../content/docs/_bodies/reliability.astro": reliability_exports,
		"../../content/docs/_bodies/tf-api-key.astro": tf_api_key_exports,
		"../../content/docs/_bodies/tf-deployment.astro": tf_deployment_exports,
		"../../content/docs/_bodies/tf-group.astro": tf_group_exports,
		"../../content/docs/_bodies/tf-hook.astro": tf_hook_exports,
		"../../content/docs/_bodies/tf-provider.astro": tf_provider_exports,
		"../../content/docs/_bodies/tf-recipes.astro": tf_recipes_exports,
		"../../content/docs/_bodies/tf-schedule.astro": tf_schedule_exports,
		"../../content/docs/_bodies/tf-secret.astro": tf_secret_exports,
		"../../content/docs/_bodies/tf-task.astro": tf_task_exports,
		"../../content/docs/_bodies/tf-troubleshooting.astro": tf_troubleshooting_exports,
		"../../content/docs/_bodies/tf-user.astro": tf_user_exports,
		"../../content/docs/_bodies/tf-whoami.astro": tf_whoami_exports,
		"../../content/docs/_bodies/what-is-ignitify.astro": what_is_ignitify_exports,
		"../../content/docs/_bodies/your-first-task.astro": your_first_task_exports
	});
	const find = (m) => m[Object.keys(m).find((k) => k.endsWith("/" + file)) ?? ""];
	const raw = find(htmlBodies);
	const Body = find(astroBodies)?.default;
	if (raw === void 0 && !Body) throw new Error(`[docs] body not found for "${entry.id}": ${entry.data.body}`);
	return renderTemplate`${renderComponent($$result, "DocsLayout", $$DocsLayout, {
		"id": entry.id,
		"title": entry.data.title,
		"description": entry.data.description,
		"group": entry.data.group
	}, { "default": ($$result) => renderTemplate`${Body ? renderTemplate`${renderComponent($$result, "Body", Body, {})}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(raw)}` })}`}` })}`;
}, "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/[...slug].astro", void 0);
var $$file = "/Users/saeed/Projects/repos/mitra/website/src/pages/docs/[...slug].astro";
var $$url = "/docs/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/docs/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
