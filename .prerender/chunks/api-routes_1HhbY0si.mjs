var TENANT_ROUTES = {
	TASKS: "/tasks",
	TASK_BY_ID: "/tasks/:id",
	TASK_DELETION_PREVIEW: "/tasks/:id/deletion-preview",
	DEPLOYMENTS: "/deployments",
	DEPLOYMENT_BY_ID: "/deployments/:id",
	RUNS: "/runs",
	RUN_BY_ID: "/runs/:id",
	RUN_CANCEL: "/runs/:id/cancel",
	WHOAMI: "/whoami",
	PACKAGE_ADVICE: "/packages/advice",
	VMS: "/vms",
	VM_BY_ID: "/vms/:id",
	HOOKS: "/hooks",
	TRIGGER: "/hooks/trigger",
	TRIGGER_HOOK: "/hooks/trigger/:hookId",
	SECRETS: "/secrets",
	SECRET_BY_NAME: "/secrets/:name",
	SCHEDULES: "/schedules",
	SCHEDULE_PREVIEW: "/schedules/preview",
	SCHEDULE_BY_ID: "/schedules/:id",
	/**
	* ADR-24 U4 — the metered statement: `GET /usage?period=&axis=&vm=&run=`.
	*
	* ⛔ **NOT A SECOND SPELLING OF `WHOAMI`, AND THE PAIR IS THE POINT.** `/whoami` answers
	* *"what am I entitled to, and how much of that am I holding right now"* — a QUOTA
	* snapshot, read from live counts. This answers *"what did I consume in May"* — a LEDGER
	* statement, read from four append-only tables for a named period. One moves as VMs come
	* and go; the other is a closed fact about a month. Merging them would put a number that
	* is still moving into a statement, which is the thing `run_usage` refuses to do with an
	* unsettled run.
	*
	* ⚠️ The ADR writes this route as `/tenants/me/usage`. The tenant app has no `/tenants`
	* prefix — the API key IS the "me" — so the shipped path is the same idea spelled the way
	* every other tenant route already spells it (`/runs`, not `/tenants/me/runs`).
	*/
	USAGE: "/usage",
	/** The usage per UTC day (runs by status, duration p50/p95, compute, egress): `GET /usage/series?days=`. */
	USAGE_SERIES: "/usage/series",
	/**
	* ⭐ **ONE RUN'S GUEST OUTPUT, PULLED ON DEMAND** — the guest-log-plane plan's C1, built
	* 2026-09-14. `GET /runs/:id/logs`.
	*
	* ⛔ **NOTHING IS STORED TO SERVE THIS, AND THAT IS THE DESIGN, NOT AN OPTIMISATION.** The
	* brain resolves the run to a HOST and a FILE **from its own rows**, asks that host's agent
	* for a slice, and passes opaque bytes through. No new table, no standing flow, no ingest —
	* the 2026-09-08 NUL-byte incident (one hostile byte jammed a brain's telemetry queue for
	* ~4.7 h) is why guest bytes never enter the platform's own pipeline.
	*
	* Following is a poll, not a stream: a client asks again from the byte offset the last page
	* returned (`from_offset`), so no connection stays open.
	*/
	RUN_LOGS: "/runs/:id/logs",
	/** One run's lifecycle events, its row and its output position: `GET /runs/:id/timeline?cursor=&wait_sec=` (a long-poll when `wait_sec` > 0). */
	RUN_TIMELINE: "/runs/:id/timeline",
	/**
	* The failed and cancelled runs by failure class, and the tasks that fail most: `GET /runs/failures?days=`.
	* The brain registers it before `RUN_BY_ID`, which would otherwise read `failures` as a run id.
	*/
	RUN_FAILURES: "/runs/failures",
	/** One deployment's build console (the build VM's log block), pulled on demand from the host like `RUN_LOGS`. */
	DEPLOYMENT_LOGS: "/deployments/:id/logs",
	TASK_HOOKS: "/tasks/:id/hooks",
	/** The deployment a task's hooks run now: its newest READY one (404 when none is READY). */
	TASK_CURRENT_DEPLOYMENT: "/tasks/:id/deployments/current",
	DEPLOYMENT_NOTIFY: "/deployments/:id/notify",
	HOOK_BY_ID: "/hooks/:id",
	/**
	* ADR-21 D51/D66 — the brain's readiness probe. UNAUTHENTICATED, deliberately.
	*
	* ⛔ **A LOAD BALANCER HAS NO API KEY**, and D51's whole enforcement is *"it fails
	* readiness and the load balancer drains it"*. A probe that required a tenant key would
	* be a probe no prober could call, and the drain would never happen.
	*
	* ⚠️ It reveals exactly two things — whether this process is admitting work, and which
	* config axis drifted if it is not. Neither is a secret: the digests are hashes of a
	* file that ships in the repository, and the reason code is the thing an operator is
	* meant to act on.
	*/
	READYZ: "/readyz",
	/**
	* ADR-21 9.8(b-2)/D51 — the brain's LIVENESS probe. UNAUTHENTICATED, for `READYZ`'s reason.
	*
	* ⛔ **IT IS NOT A SECOND SPELLING OF `READYZ` AND THE PAIR IS THE POINT.** `READYZ` is
	* *"is this brain admitting work?"* and a drifted brain answers **no**; this is *"is this
	* process alive?"* and the same brain answers **yes**. `readyz.ts` states why in its own
	* words — *"a refusing brain is HEALTHY … answers its hosts"* — so the AGENT cluster is
	* health-checked here and the TENANT cluster at `READYZ`. Swapping them drains a brain
	* away from the hosts it is deliberately still serving.
	*
	* ⚠️ It reveals nothing at all: a constant 200 and a constant body. There is no state to
	* leak, which is also why it cannot be quietly turned into a readiness probe.
	*/
	LIVEZ: "/livez",
	/**
	* ADR-43 — `ignitify login` / `logout` (RFC 8628 device flow). The two POSTs are KEY-LESS
	* (`publicRoute`) and answer 404 while `auth.device.enabled` is false; `AUTH_KEY` needs the key
	* it revokes and stays on, so a logout always works. Every `/auth/*` path answers only on
	* `ingress.public_door.api_host` while the public door is open (D31).
	*/
	AUTH_DEVICE: "/auth/device",
	AUTH_DEVICE_TOKEN: "/auth/device/token",
	AUTH_KEY: "/auth/key",
	/** The tenant's notifications and alerts, newest first: `GET /notifications?filter=&kind=&cursor=&limit=`. */
	NOTIFICATIONS: "/notifications",
	/**
	* Access control, owner keys only (`tenant-access.ts`). `:id` of a user or a group is its NAME
	* (unique among live rows); `:id` of a key is its `resource_id`.
	*/
	USERS: "/users",
	USER_BY_ID: "/users/:id",
	GROUPS: "/groups",
	GROUP_BY_ID: "/groups/:id",
	GROUP_PERMISSION: "/groups/:id/permissions/:permission",
	GROUP_USER: "/groups/:id/users/:user",
	KEYS: "/keys",
	KEY_BY_ID: "/keys/:id"
};
/**
* ADR-43 §11.5 — the account-host pages. A separate table from `TENANT_ROUTES` on purpose: these
* are HTML for a browser, not API, so no CLI verb drives them and the CLI-coverage and wire
* guardrails must not expect one. The brain registers each on `app` with the FULL path (never on a
* Router mounted at `/web`), so the audit tag Express matches equals the value here, and the
* per-route redaction rules key on it.
*/
var WEB_ROUTES = {
	SIGNIN: "/web/signin",
	GOOGLE_CALLBACK: "/web/auth/google/callback",
	PROFILE: "/web/profile",
	SIGNOUT: "/web/signout",
	KEY_REVOKE: "/web/keys/:id/revoke",
	DEVICE: "/web/device",
	DEVICE_APPROVE: "/web/device/approve",
	DEVICE_DENY: "/web/device/deny",
	/** The confirm page of a plan a person chose (`?plan=<name>`). A GET never starts a payment. */
	BILLING_START: "/web/billing/start",
	/** The POST of the confirm page: the one place a payment starts (owner session, CSRF). */
	BILLING_CHECKOUT: "/web/billing/checkout",
	/** Where the provider sends the browser after a checkout: it shows the state, it grants nothing. */
	BILLING_SUCCESS: "/web/billing/success",
	/** The billing page's "Manage billing" POST: it opens the provider's own page for card update and receipts. */
	BILLING_PORTAL: "/web/billing/portal",
	/** The receipt of one invoice of the session tenant (`:id` = the invoice row id): a 303 to a link the provider makes now. */
	BILLING_RECEIPT: "/web/billing/receipts/:id",
	/** A paying tenant's change of its subscription: upgrade, downgrade, cancel, or undo of a waiting change. */
	BILLING_CHANGE: "/web/billing/change",
	/** The checkout page of the `fake` payment provider: served only while that provider is enabled. */
	BILLING_FAKE: "/web/billing/fake",
	RUNS: "/web/runs",
	RUN: "/web/runs/:id",
	USAGE: "/web/usage",
	FAILURES: "/web/failures",
	BILLING: "/web/billing",
	/** One run's output as a download: served with its own sandboxed headers, never as a page. */
	RUN_OUTPUT: "/web/runs/:id/output",
	/** The app's built files (`:file` is an exact key of the built set, never a path). */
	ASSETS: "/web/assets/:file",
	API_RUNS: "/web/api/runs",
	API_RUN_TIMELINE: "/web/api/runs/:id/timeline",
	API_RUN_OUTPUT: "/web/api/runs/:id/output",
	API_USAGE: "/web/api/usage",
	API_FAILURES: "/web/api/failures",
	API_ACCOUNT: "/web/api/account",
	/** The notifications page. */
	NOTIFICATIONS: "/web/notifications",
	/** The mark-read form POST of the notifications page: one row, or all rows up to `as_of`. */
	NOTIFICATIONS_READ: "/web/notifications/read",
	API_NOTIFICATIONS: "/web/api/notifications",
	/** The unread count and the open alerts, for the sidebar. */
	API_NOTIFICATIONS_SUMMARY: "/web/api/notifications/summary",
	/** The schedules pages: the list (both kinds) and one recurring schedule. */
	SCHEDULES: "/web/schedules",
	SCHEDULE: "/web/schedules/:id",
	/** The pause and resume form POST of one recurring schedule (field `SCHEDULE_STATUS_FIELD`). */
	SCHEDULE_STATUS: "/web/schedules/:id/status",
	/** The delete form POST of one recurring schedule. */
	SCHEDULE_DELETE: "/web/schedules/:id/delete",
	API_SCHEDULES: "/web/api/schedules",
	API_SCHEDULE: "/web/api/schedules/:id"
};
/**
* The query key and form field that carry the chosen plan name: the website's links to
* `WEB_ROUTES.BILLING_START`, the sign-in that keeps the plan, the confirm form and the checkout
* link of a provider page must all agree on it.
*/
var BILLING_PLAN_PARAM = "plan";
TENANT_ROUTES.TASKS, TENANT_ROUTES.DEPLOYMENTS, TENANT_ROUTES.RUNS, TENANT_ROUTES.RUN_FAILURES, TENANT_ROUTES.WHOAMI, TENANT_ROUTES.PACKAGE_ADVICE, TENANT_ROUTES.VMS, TENANT_ROUTES.HOOKS, TENANT_ROUTES.TRIGGER, TENANT_ROUTES.SECRETS, TENANT_ROUTES.SCHEDULES, TENANT_ROUTES.SCHEDULE_PREVIEW, TENANT_ROUTES.USAGE, TENANT_ROUTES.USAGE_SERIES, TENANT_ROUTES.READYZ, TENANT_ROUTES.LIVEZ, TENANT_ROUTES.AUTH_DEVICE, TENANT_ROUTES.AUTH_DEVICE_TOKEN, TENANT_ROUTES.AUTH_KEY, TENANT_ROUTES.NOTIFICATIONS, TENANT_ROUTES.USERS, TENANT_ROUTES.GROUPS, TENANT_ROUTES.KEYS;
//#endregion
export { WEB_ROUTES as n, BILLING_PLAN_PARAM as t };
