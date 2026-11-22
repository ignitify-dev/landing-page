import "./api-routes_1HhbY0si.mjs";
import { parse } from "yaml";
import "js-yaml";
//#region ../config/machine/orchestrator/config.yaml?raw
var config_default = "# Base config for the brain. It is the same in every environment.\n# The environment name comes from IGNITIFY_BRAIN_ENVIRONMENT (dev, test, staging or prod).\n# Values that differ by environment are in environments/<env>.yaml, next to this file.\n# A key that belongs to the environment file must not be set here, or the brain will not start.\n\nnetwork:\n  # Network settings copied to each fleet host when it is built. A running host keeps its old values.\n  gateway_ip: \"192.168.0.1\"\n  port: 8080\n  # Admin API port. It listens on 127.0.0.1 only. Must be 1024-65535.\n  # Brain 2 gets its own port (8091) from its service drop-in.\n  admin_port: 8090\n  # Network devices (TAP) and VM slots pre-created on each host. Must be at least\n  # scheduler.max_concurrent_vms. 64 fits a small 8 GiB host with room to spare.\n  pool_size: 64\n\n# Capacity limits. Host size is not set here: each host reports its own size.\ncapacity:\n  # Most pinned VMs one host may hold. null = work it out from the host's slots\n  # minus warm.min_free_slots. Must be above 0 when set.\n  max_pinned_slots: null\n  # Factor on what a host may start right now. Above 0, up to 1.\n  # 1.0 trusts the host's own numbers. Lower keeps spare room.\n  # To sell more, raise commit_oversell_factor or add a host. Do not raise this.\n  oversell_factor: 1.0\n  # commit_oversell_factor (how much may be sold) is set per environment: see environments/<env>.yaml.\n\n  # Seconds a run waits for free capacity before it fails. 300 is longer than a normal\n  # VM teardown (about 60 s), so a fleet that is really too small fails fast and visibly.\n  # A run with on_busy: reject does not wait.\n  placement_queue_sec: 300\n  # Seconds a run may wait for a VM, for any reason, before it fails as \"no capacity\".\n  # It also covers what the line above does not: every host drained, no brain dispatching,\n  # a deployment's one VM busy, a pinned run waiting for its pin. Must be above\n  # placement_queue_sec. 3600 rides out a host re-provision or a brain ship, and frees a\n  # recurring schedule (overlap: skip) within the hour. The run is not charged for the wait.\n  pending_expiry_sec: 3600\n\n\n# VM sizes. Required: the brain will not start without a valid entry for every preset.\n# The preset names are fixed in code. This file only sets their numbers.\n#\n#   vcpu, mem_size_mib   what the VM gets.\n#   reserve_vcpu         capacity charged for the VM. It is a weight, not a CPU share.\n#   reserve_mem_mib      capacity charged on the sell side only. The start gate charges real RAM.\n#   default_storage_mib  scratch disk when the task asks for less. It is both the disk\n#                        the VM gets and the disk charged. Must be above 0 and at most limits.max_storage_mib.\n#\n# Changing a weight does not reprice tiers already published. Republish them to use the new weights.\n# Check a tier with: sadmin tier:get\npreset_families:\n  # A preset is <family>.<size>. Its numbers must follow its family:\n  #   reserve_vcpu        = vcpu x cpu_share\n  #   reserve_mem_mib     = mem_size_mib x mem_share\n  #   default_storage_mib = mem_size_mib x storage_share\n  # std: shared CPU, mostly idle. mem: more RAM per vCPU. cpu: dedicated CPU.\n  std: { cpu_share: 0.1,  mem_share: 0.25, storage_share: 0.5 }\n  mem: { cpu_share: 0.25, mem_share: 0.5,  storage_share: 0.25 }\n  cpu: { cpu_share: 1.0,  mem_share: 0.25, storage_share: 1.0 }\n\npresets:\n  # The size word sets guest RAM in every family: micro 128, small 256, medium 512,\n  # large 1024, xlarge 2048 MiB. std gets 1 vCPU up to 512 MiB and 2 above.\n  std.micro:\n    vcpu: 1\n    mem_size_mib: 128\n    default_storage_mib: 64\n    reserve_vcpu: 0.1\n    reserve_mem_mib: 32\n  std.small:\n    vcpu: 1\n    mem_size_mib: 256\n    default_storage_mib: 128\n    reserve_vcpu: 0.1\n    reserve_mem_mib: 64\n  std.medium:\n    vcpu: 1\n    mem_size_mib: 512\n    default_storage_mib: 256\n    reserve_vcpu: 0.1\n    reserve_mem_mib: 128\n  std.large:\n    vcpu: 2\n    mem_size_mib: 1024\n    default_storage_mib: 512\n    reserve_vcpu: 0.2\n    reserve_mem_mib: 256\n  std.xlarge:\n    vcpu: 2\n    mem_size_mib: 2048\n    default_storage_mib: 1024\n    reserve_vcpu: 0.2\n    reserve_mem_mib: 512\n  mem.large:\n    vcpu: 1\n    mem_size_mib: 1024\n    default_storage_mib: 256\n    reserve_vcpu: 0.25\n    reserve_mem_mib: 512\n  mem.xlarge:\n    vcpu: 2\n    mem_size_mib: 2048\n    default_storage_mib: 512\n    reserve_vcpu: 0.5\n    reserve_mem_mib: 1024\n  cpu.large:\n    vcpu: 2\n    mem_size_mib: 1024\n    default_storage_mib: 1024\n    reserve_vcpu: 2.0\n    reserve_mem_mib: 256\n\nscheduler:\n  # Most VMs starting or running at once on ONE host (not the whole fleet).\n  # The VM ledger may admit fewer, never more. Integer, at least 1.\n  # Must not be above network.pool_size.\n  max_concurrent_vms: 12\n  # How often the scheduler polls, in milliseconds.\n  poll_interval_ms: 2000\n  # Most jobs started in one poll. Keep it below pool_size.\n  dispatch_batch_size: 10\n  # Seconds a job may stay in PROVISIONING before it times out and frees its slot.\n  provisioning_timeout_sec: 60\n  # Hard time cap for a run = its timeout_sec x this number. Heartbeats extend the silence\n  # window but never this cap. Must be above 1.\n  # A run may set its own deadline_sec, which can only make the cap tighter.\n  wall_cap_multiplier: 10\n  # Extra cap on a run that keeps sending heartbeats. The cap is the smaller of:\n  #   timeout_sec x wall_cap_multiplier,  timeout_sec + leak_grace_sec\n  # 0 = cap at exactly timeout_sec. Number, at least 0.\n  # Keep it set if you raise limits.max_timeout_sec.\n  leak_grace_sec: 3600            # 1 h\n  # Seconds a host may be silent before its runs are judged on their own activity.\n  # While a host is still unknown (for example after a database crash) its runs are spared\n  # the silence clock, but never the wall cap. Must be more than one summary cycle\n  # (heartbeat.interval_ms). A smaller value is refused. 60 s is twelve cycles.\n  host_liveness_grace_sec: 60\n  # Seconds a host may be silent before it leaves the fleet (state LOST, no new work).\n  # Larger than the value above, and at least the fleet daemon's fence (600 s) plus its\n  # warm window (120 s) plus 30 s, so a LOST host has already torn its VMs down. A smaller\n  # value is refused (750 s floor). A host that never sent a summary is never swept.\n  host_lost_grace_sec: 900\n  # Seconds a READY host that came back from LOST must speak without a gap before it returns to\n  # ACTIVE by itself. At least host_liveness_grace_sec. Guards that also apply: no operator\n  # quarantine, versions match the fleet target, certificate not near expiry, not lost twice\n  # inside the window below.\n  host_readmit_steady_sec: 180\n  # A second LOST inside this many seconds keeps the host READY (a person runs host:activate, or\n  # the first loss ages out). Must be more than host_lost_grace_sec + host_readmit_steady_sec.\n  host_readmit_flap_window_sec: 3600\n  # Switch for the automatic return of a READY host to ACTIVE. false: a person runs host:activate.\n  host_readmit_enabled: true\n  # Times one run is re-queued after a brain crash before it fails (ORCHESTRATOR_CRASHED).\n  # Stops a run that crashes the brain from looping forever. Integer, at least 1.\n  # 1 = never re-queue.\n  crash_max_attempts: 3\n  # Most scheduled runs one tenant may have waiting. Over the cap the request gets 429\n  # (schedule-backlog-cap). Integer, at least 0. 0 = no limit.\n  max_scheduled_runs_per_tenant: 1000\n  # How far ahead a run may be scheduled, in milliseconds. Number, above 0.\n  max_schedule_ms: 7776000000    # 90 days\n  # Times a run is retried after a temporary failure (unknown error, or the VM exited before\n  # it reported a result). A clear verdict such as a timeout is never retried.\n  # Integer, at least 1. 1 = never retry. The delay is the outbox backoff.\n  failure_max_attempts: 3\n  # Seconds a draining host gives its runs to finish. After that they are killed and re-queued.\n  # Keep it above the longest timeout any tier sells. Integer, above 0.\n  host_drain_deadline_sec: 3600\n  # Recurring (cron) schedules. A tick on each brain moves due schedules to the outbox.\n  # Most due schedules one tick claims in one transaction; it claims again while a batch is full.\n  # 500 keeps the transaction short; 1,000 slots due in the same minute drain in two claims.\n  # Integer, at least 1.\n  recurring_tick_batch: 500\n  # Seconds a slot may still start late. An older slot is one missed slot, told to the tenant.\n  # 10 min rides out a brain restart or a short database failover. Integer from 60 to 3600:\n  # below one cron minute a few seconds of lag would miss slots; above an hour each late\n  # schedule costs the tick more work (one step per slot inside the deadline).\n  starting_deadline_sec: 600\n  # Misses in a row that the tenant can fix (no READY deployment, refused run settings, waiting\n  # on its own run limits) before the platform pauses the schedule. 10: more than a week of\n  # tries for a daily schedule. Integer, at least 1.\n  auto_pause_after_misses: 10\n  # Milliseconds a refused slot waits before the next try (a rate refusal waits for its own\n  # retry time). 5 s: a run slot frees in seconds. Integer, at least 1, below\n  # starting_deadline_sec, or every refused slot would give up at once.\n  recurring_defer_ms: 5000\n\n# ---------------------------------------------------------------------------\n# Code packaging\n# ---------------------------------------------------------------------------\ndeploy:\n  # Folder for the brain's packed build sources. Built images are not kept here:\n  # hosts pull them from the artifact store.\n  # Layout: <image_root>/<tenant_id>/<task_slug>/<contentHash>-source/code.ext4\n  image_root: \"/var/lib/ignitify/images\"\n  # Largest single image, in bytes. A tier may set its own value. 0 = no cap.\n  max_image_bytes: 10737418240 # 10 GiB\n  # Image cache size per fleet host, in bytes. 0 = off. A host needs twice this on disk:\n  # the daemon keeps its own verified copy of each cached image.\n  store_ceiling_bytes: 214748364800 # 200 GiB\n  # Fraction of the cache that counts as full. store_ceiling_bytes x this must hold\n  # one max_image_bytes image, or the brain will not start. Above 0, up to 1.\n  high_water_fraction: 0.9\n  # Address of the artifact store that hosts pull images from. Only the brain writes to it.\n  # Set it with IGNITIFY_ARTIFACT_STORE_URL, not here, so one config works for every fleet.\n  # Empty = the brain cannot build or publish images.\n  # Must be https://, or the brain will not start.\n  artifact_store_url: \"\"\n\n  # Debian snapshot used to build task images, as YYYYMMDDTHHMMSSZ. Must equal\n  # DEBIAN_SNAPSHOT in deploy/03-images/task-image.lock.\n  # Empty = tasks may not ask for system packages.\n  # Fill it only after every agent, daemon and image carrying that snapshot is delivered.\n  task_image_snapshot: \"20261008T143407Z\"\n\nwarm:\n  # true = reuse warm VMs. false = always boot a new VM.\n  enabled: true\n  # Seconds an idle warm VM stays in RAM before it is evicted.\n  hot_ttl_sec: 30\n  # Most seconds an idle pooled VM lives before it is destroyed. Busy and pinned VMs are\n  # not covered: a busy VM is limited by the run wall cap, a pinned VM by its tier limit.\n  vm_lifetime_sec: 3600\n  # How often (ms) an idle warm worker looks for work.\n  wait_poll_ms: 1000\n  # Keep at least this many slots free. When fewer are free, the longest-idle warm VMs\n  # are evicted. Must be at least 1. It also limits pinned VMs on a host:\n  # pinned VMs <= slots - min_free_slots.\n  min_free_slots: 1\n  # Seconds a pinned VM may sit idle before a warning event. It only warns, never kills.\n  # 0 = off.\n  pinned_idle_warning_sec: 86400\n\nsecrets:\n  # Per-tenant secret vault. This block sets how the root key (KEK) is found.\n  # false = vault off: tasks cannot use secrets and nothing is injected.\n  enabled: true\n  # File that holds the root key (mode 0600). The unit install script creates it once.\n  # The brain only reads it and will not start without it, even when `enabled` is false,\n  # because the key also protects hook and notify secrets.\n  # There is no fallback path: a wrong path is a setup fault.\n  kek_path: \"/var/lib/ignitify/secrets/kek\"\n\nlimits:\n  # Largest input to a task (POST /runs, webhook body, schedule). Same for every tier.\n  max_payload_bytes: 10240        # 10 KiB\n  # Largest output from a task (result, error, chunk). Same for every tier.\n  max_result_bytes: 10240         # 10 KiB\n  # Largest scratch disk one VM may ask for, when the tier sets none.\n  # Every preset's default_storage_mib must fit under it.\n  max_storage_mib: 1024           # 1 GiB\n  # Longest timeout_sec a caller may request, in seconds. Must be a number.\n  # Lowering it rejects runs that were accepted before (400).\n  # Real limit on one run: min(this x wall_cap_multiplier, this + leak_grace_sec).\n  # With the values here that is 7200 s (2 h).\n  max_timeout_sec: 3600           # 1 h\n  # Throttle on failed authentication, per source address. Only failures count, so normal\n  # clients never see it. 0 = off. Limits in this block are per brain, so with N brains\n  # the real limit can be N times higher.\n  auth_failures_per_sec: 5\n  auth_failures_burst: 20\n  # Throttle on public webhook triggers, per hook. 0 = off. Burst must be at least per_sec.\n  webhook_trigger_per_sec: 5\n  webhook_trigger_burst: 20\n\n# Webhook behaviour. The limits above are separate.\nwebhooks:\n  # Notification sent to a tenant when a run ends. Retries use the outbox backoff below.\n  notify:\n    timeout_ms: 5000              # time allowed for one send; above 0\n\n    # Attempts for notifications only. Replaces outbox.max_attempts for this kind.\n    # A tenant's receiver is a third party, so 8 attempts (about 2 minutes) lets a restart\n    # pass and still shows a dead receiver quickly. Do not lower outbox.max_attempts for\n    # this: other job kinds need the long budget.\n    max_attempts: 8\n\n  # Duplicate protection for inbound triggers. Providers resend, and a repeat must not\n  # start a second run (extra VM, repeated side effects, billed twice).\n  trigger:\n    # Headers that carry the provider's delivery id. The first one found is used.\n    # Names are case-insensitive. A provider with no listed header is still de-duplicated\n    # by body, which is weaker. List its real header.\n    delivery_id_headers:\n      - x-ignitify-delivery       # our own header; a tenant's relay should send it\n      - x-github-delivery      # GitHub\n      - x-request-id           # common fallback\n    # A delivery stays de-duplicated for idempotency.retention_sec. A resend after that\n    # starts a new run.\n\n# Optional idempotency keys. A request with an Idempotency-Key header runs exactly once;\n# a retry gets the stored answer. Requests without the header are not affected.\nidempotency:\n  # Seconds to keep idempotency records and webhook delivery records (cleaned daily).\n  # This is how long a retry can still be matched. Keep it longer than any provider's\n  # retry schedule. 0 = keep forever.\n  retention_sec: 86400            # 24 h\n\n# Outbox: durable queue for builds, retries, webhooks and crash re-queues. A feature saves\n# its job in its own database transaction, so state and job are saved together or not at all.\n# These values only set pace. Each is range-checked at load.\noutbox:\n  # Backup poll interval in ms. New jobs wake the relay at once; this only matters if a\n  # wake-up is missed. Above 0.\n  poll_floor_ms: 1000\n  batch_size: 5                   # most jobs one poll takes; above 0\n\n  # Most jobs of ONE tenant in one poll, so one tenant cannot fill the batch.\n  # Must be below batch_size. To raise it, raise batch_size too.\n  per_tenant_claim_cap: 1\n\n  # The recurring-schedule relay (kind run.recurring) has its own two values, because a\n  # burst of slots at :00 must not wait on the batch size of the other kinds.\n  # Most slots one poll takes. 20 drains a burst fast and keeps one claim short. Above 0.\n  recurring_batch_size: 20\n  # Most slots of ONE tenant in one poll, so one tenant's burst cannot fill the claim; its\n  # own run limits pace it anyway. Must be below recurring_batch_size. Above 0.\n  recurring_per_tenant_claim_cap: 5\n\n  # Seconds before a claimed job that went quiet is given back as pending. Must be more\n  # than handler_timeout_sec, or a job could run twice at once.\n  vis_timeout_sec: 120\n\n  # Tries before a job is dead-lettered. The last try still runs. With the backoff below,\n  # 20 tries last hours, so a long outage is waited out. Above 0.\n  max_attempts: 20\n\n  # Seconds one job handler may run. A timeout counts as a failure. Above 0, below vis_timeout_sec.\n  handler_timeout_sec: 30\n\n  backoff_base_ms: 1000           # first retry delay; doubles each try (1s, 2s, 4s...)\n  backoff_max_ms: 300000          # longest delay: 5 min\n\n  # Most pending jobs per tenant and kind. An enqueue over this fails and rolls back its\n  # transaction, so the caller gets 429 or 202. 0 = no limit.\n  # Off on purpose: measure the real queue before setting a limit.\n  max_pending_per_tenant: 0\n\n  # Seconds to keep finished (DONE) and dead (DEAD) jobs before they are deleted. Must be\n  # more than vis_timeout_sec x max_attempts (40 min here). 7 days leaves time to look at\n  # a dead job and replay it. 0 = keep forever.\n  retention_sec: 604800           # 7 days\n\negress:\n  # Address ranges guests may not reach. Result: public internet only.\n  deny_cidrs:\n    - \"10.0.0.0/8\"          # guest network; blocks reaching other tenants\n    - \"169.254.0.0/16\"      # link-local and cloud metadata\n    - \"172.16.0.0/12\"       # private network\n    - \"192.168.0.0/16\"      # private network and host\n    - \"100.64.0.0/10\"       # shared address space (carrier NAT, mesh VPNs)\n  # Most connections per guest. Stops one guest from filling the host's connection table.\n  # Also sets the minimum nf_conntrack_max (pool_size x this x 2).\n  max_conns_per_vm: 256\n\n  # --- Allowlist proxy -------------------------------------------------------\n  # Port of the egress proxy. Guest traffic to ports 80 and 443 is redirected here.\n  # It enforces each deployment's egress_allow list.\n  proxy_port: 15001\n  # Route file written by the daemon. The egress proxy reloads it when it changes.\n  lds_path: \"/var/lib/ignitify/egress/lds.json\"\n  # Log of denied connections, one line each. It is under /var/log because the proxy\n  # mounts the config folder read-only.\n  deny_log_path: \"/var/log/ignitify/egress/deny.log\"\n\n  # --- Bandwidth -------------------------------------------------------------\n  # Mbit/s per direction. It is both the default and the ceiling: a deployment's egress_mbit\n  # can only go lower. It stops one tenant from filling the shared uplink; it is not a meter.\n  # 0 = no shaping.\n  # It is also the rate every network device has before a VM is assigned, so keep it a safe\n  # ceiling. It is read once at start: a change needs a restart, which fails running runs.\n  # To change the rate for running VMs, change a tier's egress_mbit (database write).\n  default_mbit: 100\n\n  # --- DNS -------------------------------------------------------------------\n  # Guests need DNS, and data can be hidden in DNS queries. These settings raise the cost\n  # of abuse but do not stop it.\n  # dns_resolver (the one resolver guests may use; others are dropped) differs by environment: it is\n  # set in environments/<env>.yaml, never here.\n  dns_max_qps: 0         # queries per second per guest. 0 = off; 50 is a good start\n\n  # --- Monthly egress quota --------------------------------------------------\n  # Counts bytes SENT by the guest only. Bytes received are recorded but not counted.\n  monthly_quota_bytes: 0   # 0 = no quota\n  # false = only warn. true = refuse new runs (at submit, never during a run) for a\n  # tenant over quota. Watch real usage before turning it on.\n  quota_enforce: false\n  # Loopback port of the egress proxy admin page. The meter reads per-guest byte counters\n  # from it.\n  admin_port: 9902\n\n# ---------------------------------------------------------------------------\n# Inbound traffic. Two steps with the same routes:\n#   1. The central ingress proxy (on the control machine) ends TLS for platform hostnames\n#      and forwards to the fleet host that serves the deployment.\n#   2. That host's own ingress proxy routes by Host header to the current VM, in plain HTTP.\n# Routes are files each proxy reloads without a restart. Paths below are used on both\n# machines and mean \"this machine's own copy\".\n# ---------------------------------------------------------------------------\ningress:\n  # Platform hostnames are <route>--<tenant>.<base_domain>: one label before the base, so\n  # one wildcard certificate (*.<base_domain>) covers all. base_domain is set per\n  # environment: see environments/<env>.yaml.\n  # Listening ports. Three places must agree (central listener, fleet listener, central\n  # upstream), and all three read these values.\n  https_port: 443              # central: ends TLS. fleet: plain HTTP routing by Host\n  http_port: 80               # central only: redirects to https\n  # Route files, rewritten on each VM start or stop and reloaded without a restart.\n  # Fleet host: the daemon writes them (listener for Host routing, one cluster per route).\n  # Control machine: the brain writes them (TLS listener, clusters over the fleet hosts).\n  lds_path: \"/var/lib/ignitify/ingress/lds.json\"\n  cds_path: \"/var/lib/ignitify/ingress/cds.json\"\n  # Wildcard TLS certificate and key for the central ingress. The key stays on the control\n  # machine only. On dev, a self-signed *.ignitify.local certificate is enough.\n  tls_cert_path: \"/var/lib/ignitify/ingress/tls/fullchain.pem\"\n  tls_key_path: \"/var/lib/ignitify/ingress/tls/privkey.pem\"\n  # Milliseconds a bidirectional guest has to report ready. After that the run fails with\n  # INBOUND_NOT_LISTENING, so no route is published to a guest that is not listening.\n  ready_timeout_ms: 30000\n\n  # --- Inbound rate limits ---------------------------------------------------\n  # A deployment may lower these but never go above the ceiling.\n  default_rps: 100              # requests per second per route, when not set\n  default_burst: 200            # short spike allowed above that rate\n  max_rps: 5000                 # ceiling\n  # Most requests in flight = max_concurrent_per_vcpu x the preset's vcpu. A small VM\n  # gets a smaller limit than a large one. Tune this, not per-deployment values.\n  max_concurrent_per_vcpu: 64\n  l4_idle_timeout_ms: 60000     # idle connections are dropped (slowloris protection)\n  # Loopback admin port of the ingress proxy. Must match envoy-ingress-bootstrap.yaml.\n  admin_port: 9903\n\n  # --- Callback refusal ------------------------------------------------------\n  # Seconds in Retry-After on the 404 for a /__callback/<token> that cannot be routed\n  # (unknown or expired token, or a VM that is rebooting). The token survives a reboot,\n  # so the provider should retry. Keep it a little under a VM reboot (about 8-10 s).\n  callback_retry_after_seconds: 5\n  # Port of the local HAProxy listener that receives dead-letter reports from the edge.\n  # It is not a brain admin port, because both brains write the same central config.\n  # Must equal the port in deploy/02-provision/02-control/network-configs/haproxy-brain-lb.cfg\n  # (a contract test checks it).\n  dead_letter_ingest_port: 8198\n  # Port of the local HAProxy listener (brain_public_fe) that the public door vhosts of the\n  # central ingress forward to (ADR-49 2.6). Used only while public_door.enabled is true.\n  # Must equal the bind in haproxy-brain-lb.cfg (a contract test checks it).\n  public_door_port: 8181\n  # Mutual TLS between the central ingress and the fleet hosts, by stage:\n  #   plaintext -> dual -> mtls-central -> mtls\n  # Move ONE stage at a time, on BOTH brains, and check before the next. Skipping a stage\n  # causes an outage. Stay on plaintext until the hop certificates exist on control and on\n  # every fleet host. To roll back, go to the previous stage.\n  fleet_hop: mtls\n  # public_door.{enabled,api_host,account_host} (the public internet entry) are set per\n  # environment: see environments/<env>.yaml.\n\n# ===========================================================================\n# fleet: the port and certificates for fleet hosts (mutual TLS).\n# This is the private fleet CA, separate from the public certificate that tenant traffic uses.\n# ===========================================================================\nfleet:\n  # Port where hosts connect to the brain (mutual TLS). Must not be 8080 or 8090: those\n  # belong to the tenant gateway and the admin API. It cannot be 0: a started VM calls back\n  # over this port for its payload and result. With a non-zero port, the three certificate\n  # and key files below are required.\n  host_api_port: 8095\n  # Port of each host agent's inbound listener. The brain sends every VM start there over\n  # mutual TLS. It cannot be 0. One port for the whole fleet. Must equal\n  # IGNITIFY_DISPATCH_PORT in deploy/agent.env, or every host is dialled on a closed port.\n  agent_dispatch_port: 8096\n  # Milliseconds the brain waits for one host to answer a VM start. Must be MORE than the\n  # agent's own IGNITIFY_DISPATCH_DAEMON_TIMEOUT_MS: if the brain gives up first, the host\n  # may still start the VM and the result is unknown. Timing out cancels nothing.\n  # The agent's deadline D must fit: 18500 < D < this value. The fleet uses D = 19000.\n  # Lowering this can leave no valid D, and then every agent refuses to start.\n  # A test (dispatch-deadline-twin) checks these numbers together.\n  agent_dispatch_timeout_ms: 20000\n  # Seconds the brain will not place new work on a host whose last start failed with an\n  # unknown result. 0 = off. It is a cool-off, not a diagnosis. Keep it about 3 x\n  # agent_dispatch_timeout_ms, and below host_lost_grace_sec.\n  dispatch_veto_sec: 60\n  # Private key (Ed25519, PKCS#8 PEM) that signs host network policy. Set a PATH, never the\n  # key itself. Hosts hold the public half in /etc/ignitify/brain-policy-key.pub; rotate\n  # both together. Empty = the brain signs and sends no policy.\n  policy_signing_key_path: '/etc/ignitify/brain-policy-key'\n  # The brain's own certificate from the fleet CA. Both sides check each other, so it must\n  # allow both serverAuth and clientAuth.\n  server_cert_path: \"/var/lib/ignitify/fleet/brain.crt\"\n  server_key_path: \"/var/lib/ignitify/fleet/brain.key\"\n  # Root certificate of the fleet CA. Without it, a certificate from any public CA could\n  # pass as a fleet host. This is the trust boundary.\n  ca_cert_path: \"/var/lib/ignitify/fleet/root_ca.crt\"\n  # Versions every host must run. On each summary the brain compares a host's reported\n  # values to these. A host that differs is QUARANTINED (reason 'drift'): it keeps its VMs,\n  # gets no new ones, and returns by itself when it matches again.\n  #\n  # Empty value = that item is not checked. All empty = no check.\n  # An unknown key here stops the brain (a typo would silently check nothing).\n  # Values are exact text matches. Read each one from a real host:\n  #   kernel               uname -r on the host\n  #   firecracker          FC_VERSION in 01-install-fleet-host.sh (without the \"v\")\n  #   agent                AGENT_VERSION in apps/host-agent/index.ts\n  #   daemon               version in apps/vm-host-daemon/Cargo.toml\n  #   guest_kernel_sha256  sha256 of /var/lib/ignitify/boot/vmlinux.bin on the host\n  #   base_rootfs_sha256   sha256 of /var/lib/ignitify/boot/base-rootfs.ext4 on the host\n  # Measure the two digests with sudo sha256sum on the hosts. Do not copy them from the\n  # hosts table or from deploy/03-images: a value copied from what it checks always agrees.\n  #\n  # To change a value: install the new thing on EVERY host first, then raise the value.\n  # Raising it early quarantines the fleet. A host parked by hand (reason 'operator') is\n  # never released by this check.\n  # Hold the kernel packages on every fleet host so the OS cannot change the kernel by itself\n  # (the host build script does this).\n  target_versions:\n    # Must equal KERNEL in deploy/01-machines/02-base-image/base-image.lock (a test checks it).\n    # Change both with bump-base-image.sh, never this line alone.\n    kernel: \"6.8.0-142-generic\"\n    # A version change is a rollout: set \"\" first, upgrade and test one host at a time,\n    # then set the new value.\n    firecracker: \"1.17.0\"\n    agent: \"1.0.0\"\n    daemon: \"0.1.0\"\n    # The two sha256 values are raised by deploy/08-ship/sync-boot-pins.sh during a brain\n    # ship, but only if already set, every host holds the same file, and the file matches\n    # its sidecar. Setting a pin for the first time is a human decision.\n    guest_kernel_sha256: \"e2d7c3d6cc123de9e6052d1f434ca7b47635a1f630d63f7fcc1b7164958375e4\"\n    # Raise this after the rootfs is installed on every host, then roll the brains quickly.\n    # There is a short quarantine window either way, because hosts measure the file and\n    # the brain compares it to this value.\n    base_rootfs_sha256: \"fc3271f894803b33da12ef79ff5fce47a812577b8f3604816457d56d5109ff1e\"\n\nheartbeat:\n  # How often a guest says it is alive, so a long task is not killed by the reaper.\n  interval_ms: 5000               # guest send interval\n\nexecution:\n  # Default task nature, used when a task declares no execution block. The axes are fixed\n  # in code (PLATFORM_DEFAULT_NATURE in packages/execution/nature.ts), not set here.\n  # It applies to deploys, VM boot, and runs with no execution block (a task:run, or a webhook\n  # run of a deployment whose task.yaml declared none).\n  # A run without execution gets network \"none\": less than a declared one, never more.\n  # Scratch disk is not set here: a run gets its preset's default_storage_mib or more.\n  #\n  # Time, in ms, a run gets to stop cleanly after run:cancel. The guest is told on its next\n  # heartbeat and killed if it has not finished. It is a ceiling, not a promise. Keep it\n  # at least 2 heartbeats, or a graceful cancel becomes a forced one. Only long-duration\n  # tasks can drain; short runs are killed at once.\n  cancel_grace_ms: 15000\n  # Largest grace a caller may ask for with --grace. A caller gets the smallest of: what they\n  # asked, this value, and the run's remaining time. Without a ceiling a tenant could hold a\n  # slot past the time their tier sold. The answer reports the grace actually used.\n  cancel_grace_ms_max: 120000\n\ntelemetry:\n  # Where each kind of record goes. Any kind can go to any sink. A kind not listed uses the\n  # default in code. A sink this build does not have stops the brain.\n  #\n  # Sinks:\n  #   console   brain: stdout to journald (journalctl -u ignitify-brain-1 -f).\n  #             cli: stderr. Logs only. Journald is not durable: never use it for audit.\n  #   timeline  one JSONL file per tenant in /var/log/ignitify/timeline/ (_control.jsonl for\n  #             records with no tenant). Written synchronously. Only named records enter it\n  #             (plain lines and the classes in core/telemetry/trail-class.ts stay on the\n  #             console). The spool shipper copies it into table telemetry_records every 5 s,\n  #             the one path into that table, and deletes rotated files after 24 h.\n  #   prom      in-memory metrics shown at GET /metrics on the admin port and scraped by\n  #             Prometheus. Metrics only.\n  routing:\n    log:    [\"console\", \"timeline\"]\n\n    # Metrics go to prom only. The timeline refuses metrics.\n    metric: [\"prom\"]\n\n  # Sink limits. Each key is optional; a missing or bad value uses the sink default.\n  timeline:                        # per-tenant audit files\n    dir: /var/log/ignitify/timeline                 # absolute path\n    max_segment_bytes: 10485760    # 10 MiB per file; above 0\n\n  # Settings for the telemetry_records prune. The retention (180 days, the same as Prometheus\n  # and Loki) is not set here: it is the SQL function ignitify_telemetry_records_retention(),\n  # which the prune reads and the table's append-only trigger enforces. Change it with a migration.\n  records:\n    prune_batch: 5000              # rows per DELETE, repeated until done (20 passes at most)\n\n# AI review of system packages (POST /packages/advice): one analyst call, then one judge\n# call. Gemini only: Anthropic is off here (no model id starts with `claude-`), so its key\n# is never used. Each package is judged once and stored.\n# The API keys are in the brain env file. With no keys the review gives no advice and\n# nothing is blocked. Each value is range-checked at load.\npackage_advice:\n  enabled: true\n  models:\n    analyst: { primary: gemini-3.8-flash, backup: gemini-3.5-flash }\n    judge:   { primary: gemini-3.8-flash, backup: gemini-3.5-flash }   # a `claude-` id here turns Anthropic back on\n  timeout_ms: { primary: 10000, backup: 15000 }   # per call; worst case about 50 s for both steps\n  max_output_tokens: 8192                         # a ceiling, not a cost: 64 names need about 6.5K tokens\n  cache_ttl_days: 30                              # about one Debian snapshot cycle\n  limits:\n    requests_per_minute: 12                       # per tenant, per brain\n    burst: 4\n    new_names_per_hour: 128                       # per tenant, per brain; at least 64\n    daily_new_names: 500                          # whole platform; at least new_names_per_hour\n    max_in_flight: 4\n  estimate: { base_s: 20, per_mib_s: 2.0, low_factor: 0.6, high_factor: 1.6, measured_band: 0.25 }   # time estimate fitted on the dev fleet\n\n# Sign-in. Every value is range-checked at load. auth.device.{enabled,verification_uri} and\n# auth.web.{enabled,account_origin,site_origin} are set per environment: see\n# environments/<env>.yaml. Keep device login off for any environment whose public door is\n# open until its firewall is in place.\nauth:\n  # CLI login (device flow).\n  device:\n    code_ttl_sec: 600              # 10 min to approve a code\n    poll_interval_sec: 5           # seconds between CLI checks\n    max_poll_interval_sec: 30      # each slow_down adds 5 s, up to this\n    key_ttl_days: 90               # a key unused for 90 days expires\n    key_refresh_below_days: 60     # a key with under 60 days left is renewed to 90 when used\n    max_pending: 5000              # open logins, whole platform; more gets 503. 0 = off\n    starts_per_ip_per_hour: 10     # per address; exact across brains. 0 = off. Off while ingress.public_door.enabled is false\n    polls_per_ip_per_sec: 1        # per address, per brain (2 brains = up to 2x). 0 = off. Off while ingress.public_door.enabled is false\n    polls_per_ip_burst: 60         # room for many machines behind one NAT\n  # \"Sign in with Google\" and the account pages (/web/*). The Google client id and secret are\n  # not here: set IGNITIFY_GOOGLE_CLIENT_ID and IGNITIFY_GOOGLE_CLIENT_SECRET in the brain\n  # env file. Enabling sign-in with either empty stops the brain.\n  web:\n    session_days: 30               # browser session length\n    max_new_tenants_per_day: 50    # new free tenants per rolling 24 h, whole platform\n    new_tenants_per_ip_per_day: 3  # per address, per brain. 0 = off. Off while ingress.public_door.enabled is false (every request then shares the balancer's address)\n    signin_per_ip_burst: 10        # sign-in only (the callback counts its own failures with these numbers). 0 = off. Off while ingress.public_door.enabled is false: one scanner would lock everyone out\n    signin_per_ip_per_min: 6\n    signin_global_per_min: 120     # sign-in, ALL sources together, per brain; bounds the stored attempts. On in every environment. 0 = off\n    signin_global_burst: 60        # room for a launch post; needs at least 1 while the rate is on\n    lookup_account_burst: 5        # failed code lookups per account before a lock. 0 = off\n    lookup_account_per_min: 1\n    lookup_lock_after: 20          # failures that lock an account ...\n    lookup_lock_min: 15            # ... for this many minutes\n    lookup_ip_burst: 10            # per address. 0 = off. Off while ingress.public_door.enabled is false\n    lookup_ip_per_min: 2\n\n# Payments. payments.enabled_providers (providers whose adapter and events are on) and\n# payments.checkout_provider (where a new purchase goes; '' = no checkout) are set per\n# environment: see environments/<env>.yaml. A provider that moves real money needs its keys in\n# the brain env file, IGNITIFY_<PROVIDER>_API_KEY and IGNITIFY_<PROVIDER>_WEBHOOK_SECRET:\n# enabling it with either empty stops the brain. A production brain refuses the fake provider.\n# payments.api_urls names, per provider, the https origin of its API (its test system or its live\n# system); a provider that moves real money must have one while it is enabled.\n";
//#endregion
//#region ../packages/execution/presets.ts
/**
* Every legal preset name, `<family>.<size>` (ADR-37). The size word fixes the guest RAM; the
* family fixes the CPU shape and the reserve shares (`config.yaml` `preset_families:`). Order is
* presentational only (it is what an error message lists). `as const` so `PresetName` is a closed
* union, making a typo a compile error anywhere a PresetName is expected.
*/
var PRESET_NAMES = [
	"std.micro",
	"std.small",
	"std.medium",
	"std.large",
	"std.xlarge",
	"mem.large",
	"mem.xlarge",
	"cpu.large"
];
/**
* The preset a run gets when its task names none. A code constant, not config: the offline CLI
* (the scaffolded `task.yaml`) and the brain must agree on it, and the CLI cannot read
* `config.yaml`. The brain re-exports it as `DEFAULTS.PRESET`. `satisfies PresetName`, so
* renaming it out of the vocabulary is a compile error.
*/
var DEFAULT_PRESET = "std.micro";
/**
* The preset a run gets when the caller names none, for a plan that sells `allowed` (`null` = every
* preset). `DEFAULT_PRESET` when the plan sells it, else the first catalogue preset (`PRESET_NAMES`
* order, smallest first) the plan sells; a list with no known preset keeps the default, and the
* capability check refuses it. Pure: the brain and the website console both call it.
*/
function defaultPresetOf(allowed) {
	if (allowed === null || allowed.includes("std.micro")) return DEFAULT_PRESET;
	return PRESET_NAMES.find((name) => allowed.includes(name)) ?? "std.micro";
}
var MS_PER_MINUTE = 6e4;
24 * (60 * MS_PER_MINUTE);
//#endregion
//#region ../packages/contract/wire/hop-10.generated.ts
/**
* The complete op vocabulary — CLOSED. Source: CONTROL in
* apps/orchestrator/constants/control-plane.ts, dispatched by handleControl's switch. Seven
* ops; an eighth needs a decision, not an edit. Values are camelCase ON THE WIRE (guest
* capabilities are hyphenated instead — a generator must normalise neither).
*/
var HOP10_OPS = [
	"getPayload",
	"postResult",
	"postError",
	"heartbeat",
	"postChunk",
	"ready",
	"hello"
];
//#endregion
//#region ../packages/contract/wire/hop-8.generated.ts
/**
* Ops whose sender waits for a reply, and therefore must carry `corr`.
*/
var HOP8_AWAITED_OPS = [
	"spawn",
	"relay-payload",
	"relay-settle",
	"relay-hello",
	"policy-apply",
	"teardown",
	"identify",
	"metrics"
];
Number.MAX_SAFE_INTEGER - 1;
//#endregion
//#region ../packages/contract/hop8-transport.ts
/**
* How a relay op maps to the brain endpoint that answers it — **D47's four**.
*
* ⛔ IT IS A TOTAL MAP OVER THE FOUR RELAY OPS AND NOTHING ELSE. D47 gives each
* control-plane op exactly one home, and `api/host/relay.ts`'s `opBelongsHere`
* refuses a request that arrives at the wrong one — so a wrong entry here is not a
* mis-route, it is a `wrong-endpoint-for-op` refusal the guest cannot act on.
*
* ⚠️ `relay-hello` shares `/host/claim` with `relay-payload` DELIBERATELY: D47 puts
* the hello on *"endpoint 1's reply path"*, and `claim.ts`'s `CLAIM_OPS` lists both.
* A fifth endpoint for it would be a second place to keep the seal rule.
*/
var RELAY_OP_ENDPOINT = {
	"relay-payload": "/host/claim",
	"relay-hello": "/host/claim",
	"relay-settle": "/host/settle",
	"relay-ready": "/host/ready",
	"relay-progress": "/host/settle"
};
var isRelay = (op) => Object.prototype.hasOwnProperty.call(RELAY_OP_ENDPOINT, op);
HOP8_AWAITED_OPS.filter(isRelay);
//#endregion
//#region ../packages/contract/terminal-hooks.ts
/** ⚠️ NAMED OFF THE GENERATED VOCABULARY, not spelled as literals. `HOP10_OPS` is emitted
*  from the hop-10 schema both languages generate from, so a renamed op fails the build
*  here rather than becoming a rule that silently stops matching. */
var opNamed = (name) => {
	if (!HOP10_OPS.includes(name)) throw new Error(`hop-10 has no op named ${name}`);
	return name;
};
opNamed("postResult");
opNamed("postError");
/**
* The runtime registry (plan **A3**) — the one table that replaces every hard-coded
* language fact. Adding a runtime is **one row**: no brain change, no host change, no
* protocol change (ADR §9).
*
* ⭐ The `python`, `go` and `rust` rows were added in W1, before the code that consumes them,
* **on purpose**: A3's acceptance is that adding a runtime costs one row. All four are live
* since ADR-29 W3 (Python) and W4 S5 (Go, Rust).
*/
var RUNTIME_REGISTRY = Object.freeze({
	node: Object.freeze({
		entryFile: "index.ts",
		depManifest: "package.json",
		lockfile: "package-lock.json",
		wireRuntime: "node22",
		status: "live"
	}),
	python: Object.freeze({
		entryFile: "main.py",
		depManifest: "requirements.txt",
		lockfile: "requirements.txt",
		wireRuntime: "python3.11",
		status: "live"
	}),
	go: Object.freeze({
		entryFile: "main.go",
		depManifest: "go.mod",
		lockfile: "go.sum",
		wireRuntime: "go",
		status: "live"
	}),
	rust: Object.freeze({
		entryFile: "src/main.rs",
		depManifest: "Cargo.toml",
		lockfile: "Cargo.lock",
		wireRuntime: "rust",
		status: "live"
	})
});
/** Every runtime in the vocabulary, in declaration order. */
var RUNTIME_IDS = Object.keys(RUNTIME_REGISTRY);
RUNTIME_IDS.filter((id) => RUNTIME_REGISTRY[id].status === "live");
Object.freeze({
	allErrors: true,
	strict: true,
	/** Defaults are resolved explicitly against the registry, never injected by the validator. */
	useDefaults: false
});
Object.freeze({
	$schema: "https://json-schema.org/draft/2020-12/schema",
	$id: "https://ignitify.dev/schemas/task-config/v1.json",
	title: "Ignitify task configuration",
	type: "object",
	required: [
		"schema_version",
		"slug",
		"runtime"
	],
	additionalProperties: false,
	properties: {
		schema_version: { const: 1 },
		slug: {
			type: "string",
			minLength: 1
		},
		runtime: { enum: [...RUNTIME_IDS] },
		entry: {
			type: "string",
			minLength: 1
		},
		execution: { type: "object" },
		secrets: {
			type: "array",
			items: {
				type: "string",
				minLength: 1
			},
			uniqueItems: true
		},
		run: {
			type: "object",
			additionalProperties: false,
			properties: {
				payload: { type: "object" },
				preset: {
					type: "string",
					minLength: 1
				},
				timeout_sec: {
					type: "integer",
					exclusiveMinimum: 0
				}
			}
		},
		build: {
			type: "object",
			additionalProperties: false,
			properties: {
				allowed_hosts: {
					type: "array",
					items: {
						type: "string",
						minLength: 1
					},
					uniqueItems: true
				},
				ship: {
					type: "array",
					items: {
						type: "string",
						minLength: 1
					},
					uniqueItems: true
				},
				system_packages: {
					type: "array",
					items: {
						type: "string",
						minLength: 1
					}
				}
			}
		}
	}
});
Object.freeze([
	"execution",
	"secrets",
	"run"
]);
Object.freeze([
	".git",
	".ignitify",
	"node_modules",
	"__pycache__",
	".venv",
	"venv",
	".mypy_cache",
	".pytest_cache"
]);
Object.freeze(["target", "dist"]);
Object.freeze([".env"]);
/**
* Package-manager config files that may hold a registry credential, and the keys that do.
* The FILE is legitimate (`build_from_source=true`, a scope's registry); only a credential in it
* is refused — it would be stored in the source store and the image store, like a `.env`.
*/
var CREDENTIAL_KEYS = Object.freeze({
	".npmrc": /^[ \t]*(?![#;])[^=\n]*_(?:authToken|auth|password)[ \t]*=[ \t]*(?!\$\{\w+\}[ \t]*$)\S/m,
	".yarnrc.yml": /^[ \t]*npmAuth(?:Token|Ident)[ \t]*:[ \t]*(?!["']?\$\{\w+\}["']?[ \t]*$)\S/m
});
Object.freeze(Object.keys(CREDENTIAL_KEYS));
//#endregion
//#region ../packages/contract/db-role.ts
/**
* The FQDN shapes that may become a role name.
*
* ⭐ THE ALLOWLIST ADMITS NO CHARACTER THAT COULD ESCAPE A QUOTED IDENTIFIER — no
* quote, no backslash, no semicolon, no whitespace. That is the whole security
* argument, and it is stronger than escaping: there is nothing to escape. Lowercase
* LDH labels only, which is also what DNS permits.
*
* ⚠️ LOWERCASE IS NOT TIDINESS. The `pg_ident.conf` map above is a literal regex
* substitution, so the role name must be a BYTE-IDENTICAL transform of the CN. If a
* CN carried an uppercase letter, the role we create and the role the map produces
* would be the same string, but folding it here would make them different — so an
* uppercase CN is REFUSED rather than normalised.
*/
var FQDN_LABEL = "[a-z0-9]([a-z0-9-]*[a-z0-9])?";
new RegExp(`^${FQDN_LABEL}(\\.${FQDN_LABEL})*$`);
/**
* The hop directory, the SAME path on the machine and inside the Envoy container (mounted ro).
* ⛔ OUTSIDE `/var/lib/ignitify/ingress` and `/etc/ignitify/envoy`: `check-fleet-tls-absence.sh`
* fails on any private key there (tenant TLS material, D24), and the hop key is not that.
* It holds the leaf, its key, a COPY of the fleet root (a directory mount, never a file mount)
* and the SDS document Envoy watches.
*/
var INGRESS_HOP_DIR = "/etc/ignitify/ingress-hop";
`${INGRESS_HOP_DIR}`;
`${INGRESS_HOP_DIR}`;
`${INGRESS_HOP_DIR}`;
`${INGRESS_HOP_DIR}`;
//#endregion
//#region ../packages/contract/api-errors.ts
var API_ERROR = {
	/** 400: the request could not be read (also the last-resort handler). Extra: `field` when known. */
	BAD_REQUEST: "bad-request",
	/** 400: the JSON body did not parse. */
	INVALID_JSON: "invalid-json",
	/** 400: a deploy that is not a multipart/form-data request. */
	NOT_MULTIPART: "not-multipart",
	/** 400: a name (slug, secret name, label) breaks its grammar. Extra: `field` when known. */
	INVALID_NAME: "invalid-name",
	/** 400: the `Idempotency-Key` header is malformed. */
	IDEMPOTENCY_KEY_INVALID: "idempotency-key-invalid",
	/** 400: a read cursor this list or this run's output did not return. */
	INVALID_CURSOR: "invalid-cursor",
	/** 400: a timeline cursor this run's timeline did not return. */
	INVALID_TIMELINE_CURSOR: "invalid-timeline-cursor",
	/** 400: `days` is not a whole number of days from 1 up. */
	INVALID_DAYS: "invalid-days",
	/** 400: `wait_sec` is not whole seconds in the long-poll range. */
	INVALID_WAIT: "invalid-wait",
	/** 400: a notification list `filter` that is not one of the filters. */
	INVALID_FILTER: "invalid-filter",
	/** 400: a notification list `kind` that is not one of the kinds. */
	INVALID_KIND: "invalid-kind",
	/** 400: a list `limit` that is not a whole number from 1 up. */
	INVALID_LIMIT: "invalid-limit",
	/** 401 (403 on the operator plane): no `Authorization: Bearer <key>` header (or an empty one). */
	KEY_MISSING: "key-missing",
	/** 401 (403 on the operator plane): the key is unknown or revoked. */
	KEY_INVALID: "key-invalid",
	/** 401: a device key not used for its lifetime; the client logs in again. */
	KEY_EXPIRED: "key-expired",
	/** 401: a tenant app read with no live session. */
	SIGNED_OUT: "signed-out",
	/** 401: a hook trigger whose signature does not verify. */
	INVALID_SIGNATURE: "invalid-signature",
	/** 403: the tenant is disabled (a disabled tenant may still read). */
	TENANT_DISABLED: "tenant-disabled",
	/** 403: the tenant has no tier grant (an unfinished onboarding). */
	NO_TIER_GRANT: "no-tier-grant",
	/** 403 on a run or a hook trigger, 400 on a deploy: the tier withholds a capability. */
	CAPABILITY_DENIED: "capability-denied",
	/** 403 on a run or a hook trigger, 400 on a deploy: a declared number is above the plan limit. */
	CEILING_EXCEEDED: "ceiling-exceeded",
	/** 403: the person denied the device sign-in. */
	DEVICE_LOGIN_DENIED: "device-login-denied",
	/** 403: a tenant app read another site sent. */
	CROSS_SITE: "cross-site",
	/** 403: a session write whose CSRF token or origin does not match. */
	CSRF: "csrf",
	/** 403: the signed-in account is disabled. */
	ACCOUNT_DISABLED: "account-disabled",
	/** 403: the signed-in account has no live workspace. */
	NO_WORKSPACE: "no-workspace",
	/** 404: no route has this method and path (a hidden route answers the same). */
	ROUTE_NOT_FOUND: "route-not-found",
	TASK_NOT_FOUND: "task-not-found",
	DEPLOYMENT_NOT_FOUND: "deployment-not-found",
	RUN_NOT_FOUND: "run-not-found",
	VM_NOT_FOUND: "vm-not-found",
	KEY_NOT_FOUND: "key-not-found",
	SECRET_NOT_FOUND: "secret-not-found",
	HOOK_NOT_FOUND: "hook-not-found",
	SCHEDULE_NOT_FOUND: "schedule-not-found",
	/** 404: a device code that is unknown or already used (the same words for both). */
	DEVICE_CODE_UNKNOWN: "device-code-unknown",
	/** 409: a task with this slug already exists for this tenant. */
	TASK_SLUG_TAKEN: "task-slug-taken",
	/** 409: a request with this `Idempotency-Key` is still running; retry shortly. */
	IDEMPOTENCY_IN_PROGRESS: "idempotency-in-progress",
	/** 409: the deployment is still building, or its build failed. */
	DEPLOYMENT_NOT_BOOTABLE: "deployment-not-bootable",
	/**
	* The task has no READY deployment. 404 from `GET /tasks/:id/deployments/current` (there is no
	* current deployment to read); 409 from the hook trigger (the hook exists, a run cannot start now).
	*/
	NO_READY_DEPLOYMENT: "no-ready-deployment",
	/** 409: a bidirectional deployment already runs its one VM. Extras: `vm_id`, `pinned`. */
	BIDIRECTIONAL_BUSY: "bidirectional-busy",
	/** 409: the run has already finished. Extra: `status`. */
	RUN_ALREADY_TERMINAL: "run-already-terminal",
	/** 409: the act destroys a pinned VM and needs force. Extras: `residency`, `age_ms` where known. */
	FORCE_REQUIRED: "force-required",
	/** 409: the run never got a VM, so it has no output to read. */
	RUN_NEVER_RAN: "run-never-ran",
	/** 409: the deployment's build left no console to read. */
	NO_BUILD_CONSOLE: "no-build-console",
	/** 409: the deployment this request joined vanished in a race; a retry succeeds. */
	DEPLOYMENT_RACE: "deployment-race",
	/** 410: the device code expired before a person approved it. */
	DEVICE_CODE_EXPIRED: "device-code-expired",
	/** 410: the host that ran this VM is no longer in the fleet. */
	HOST_GONE: "host-gone",
	/** 410: the host no longer holds this run's output. */
	NO_FILE: "no-file",
	/** 412: `POST /secrets` with `If-None-Match: *` names a secret that exists; nothing changed. */
	SECRET_EXISTS: "secret-exists",
	/** 413: the whole request body is over the app-wide limit. */
	BODY_TOO_LARGE: "body-too-large",
	/** 413: a deploy upload (or one of its fields) is over its limit. */
	UPLOAD_TOO_LARGE: "upload-too-large",
	/** 413: a secret value is over the maximum size. */
	SECRET_TOO_LARGE: "secret-too-large",
	/** 413: a run or hook payload is over the configured maximum. */
	PAYLOAD_TOO_LARGE: "payload-too-large",
	/** 415: a webhook trigger whose body is not JSON (`content-type` is not `application/json`). */
	UNSUPPORTED_MEDIA_TYPE: "unsupported-media-type",
	/** 422: this `Idempotency-Key` was used for a different request. */
	IDEMPOTENCY_KEY_REUSED: "idempotency-key-reused",
	/** 429: a protective rate limit (the API, a hook, package advice, tenant app reads) or a full outbox (backpressure). */
	RATE_LIMITED: "rate-limited",
	/** 429: the source spent its failed-authentication budget. Never retried: the key is bad. */
	AUTH_THROTTLED: "auth-throttled",
	/** 429: too many device sign-ins started from this network. */
	DEVICE_START_LIMITED: "device-start-limited",
	/** 429: too many open waits on this run, tenant or brain. */
	WAIT_REFUSED: "wait-refused",
	/** 429: a device poll came too early; wait `interval` seconds. */
	SLOW_DOWN: "slow-down",
	/** 500: a server bug; the detail is in the server log only. */
	INTERNAL_ERROR: "internal-error",
	/** 502: the host answered a cursor read from the top (it predates the cursor). */
	AGENT_OUTDATED_CURSOR: "agent-outdated-cursor",
	/** 502: the host that holds a log could not serve it. `error` is the host's word (`host-unreachable` for a transport failure). */
	HOST_LOG_UNREADABLE: "host-log-unreadable",
	/** 503: the secret vault is not enabled on this platform. */
	VAULT_DISABLED: "vault-disabled",
	/** 503: the hook's sealed secret did not open. */
	HOOK_SECRET_UNAVAILABLE: "hook-secret-unavailable",
	/** 503: device sign-in is not available now. */
	DEVICE_LOGIN_UNAVAILABLE: "device-login-unavailable",
	/** 503: the brain cannot serve the read now (busy or draining); retry after `Retry-After`. */
	OBS_UNAVAILABLE: "obs-unavailable",
	/** 503: this brain's config drifted off the fleet target, so it admits no new work. Extra: `detail`. */
	CONFIG_DRIFT: "config-drift",
	/** 503: the payment provider cannot be reached now. */
	BILLING_UNAVAILABLE: "billing-unavailable"
};
/**
* The query parameters of the tenant read routes, one spelling for the brain and every client.
* `wait_sec` is whole seconds (≤ `OBS_LONG_POLL_MAX_SEC`), suffixed like `timeout_sec`.
* `from_offset` is the same name the host relay takes. `status` is the runs list filter (a column).
*/
var OBS_QUERY = {
	CURSOR: "cursor",
	WAIT_SEC: "wait_sec",
	FROM_OFFSET: "from_offset",
	STATUS: "status",
	DAYS: "days",
	/** The runs list filter of one schedule (`sch_…`). */
	SCHEDULE_ID: "schedule_id"
};
API_ERROR.RUN_NEVER_RAN, API_ERROR.INVALID_CURSOR, API_ERROR.AGENT_OUTDATED_CURSOR, API_ERROR.HOST_GONE, API_ERROR.NO_FILE, API_ERROR.INVALID_TIMELINE_CURSOR, API_ERROR.INVALID_DAYS, API_ERROR.INVALID_WAIT, API_ERROR.WAIT_REFUSED, API_ERROR.OBS_UNAVAILABLE;
//#endregion
//#region ../packages/contract/tenant-notifications.ts
/** Every kind, closed. A new kind needs a migration (the table's CHECK) before a brain raises it. */
var NOTIFICATION_KINDS = [
	"limit.reached",
	"limit.near",
	"runs.failing",
	"callback.failing",
	"schedule.missed",
	"pin.lost",
	"plan.changed",
	"hook.refused",
	"schedule.paused"
];
/** The class, severity and label of each kind. */
var NOTIFICATION_KIND_INFO = {
	"limit.reached": {
		class: "alert",
		severity: "critical",
		label: "Monthly limit reached"
	},
	"limit.near": {
		class: "notification",
		severity: "warning",
		label: "Monthly limit near"
	},
	"runs.failing": {
		class: "alert",
		severity: "warning",
		label: "Runs failing"
	},
	"callback.failing": {
		class: "alert",
		severity: "warning",
		label: "Run callbacks failing"
	},
	"schedule.missed": {
		class: "notification",
		severity: "warning",
		label: "Schedule did not run"
	},
	"pin.lost": {
		class: "notification",
		severity: "warning",
		label: "Pinned VM lost"
	},
	"plan.changed": {
		class: "notification",
		severity: "info",
		label: "Plan changed"
	},
	"hook.refused": {
		class: "alert",
		severity: "warning",
		label: "Webhook refused"
	},
	"schedule.paused": {
		class: "alert",
		severity: "warning",
		label: "Schedule paused"
	}
};
NOTIFICATION_KINDS.filter((k) => NOTIFICATION_KIND_INFO[k].class === "alert").filter((k) => NOTIFICATION_KIND_INFO[k].severity === "critical");
/** The views of the list: every row, the unread rows, the open alerts. Closed: another value is refused. */
var NOTIFICATION_FILTERS = [
	"all",
	"unread",
	"open"
];
OBS_QUERY.CURSOR;
API_ERROR.INVALID_FILTER, `${NOTIFICATION_FILTERS.join(", ")}`, API_ERROR.INVALID_KIND, `${NOTIFICATION_KINDS.join(", ")}`, API_ERROR.INVALID_LIMIT, API_ERROR.INVALID_CURSOR;
//#endregion
//#region ../packages/contract/tenant-access.ts
/** The fixed catalogue. Read and write are separate for every resource; a delete is a write. */
var PERMISSION = {
	TASKS_READ: "tasks.read",
	TASKS_WRITE: "tasks.write",
	DEPLOYMENTS_READ: "deployments.read",
	DEPLOYMENTS_WRITE: "deployments.write",
	RUNS_READ: "runs.read",
	RUNS_WRITE: "runs.write",
	SECRETS_READ: "secrets.read",
	SECRETS_WRITE: "secrets.write",
	HOOKS_READ: "hooks.read",
	HOOKS_WRITE: "hooks.write",
	USAGE_READ: "usage.read"
};
new Set(Object.values(PERMISSION));
PERMISSION.TASKS_READ, PERMISSION.TASKS_WRITE, PERMISSION.DEPLOYMENTS_READ, PERMISSION.DEPLOYMENTS_WRITE, PERMISSION.RUNS_READ, PERMISSION.RUNS_WRITE, PERMISSION.SECRETS_READ, PERMISSION.SECRETS_WRITE, PERMISSION.HOOKS_READ, PERMISSION.HOOKS_WRITE, PERMISSION.USAGE_READ;
//#endregion
//#region ../packages/contract/index.ts
/**
* Canonical sink names. The per-kind `telemetry.routing.<kind>` lists resolve
* these → sink instances (unknown names warn-and-skip, forward-compat). One place so a typo is a compile error.
*/
var SINK_NAMES = {
	console: "console",
	prom: "prom",
	timeline: "timeline"
};
SINK_NAMES.prom, SINK_NAMES.timeline, SINK_NAMES.console;
//#endregion
//#region ../apps/orchestrator/constants/payments.ts
/** The longest one call to a payment provider's API may take, answer included. */
var PROVIDER_CALL_TIMEOUT_MS = 1e4;
/**
* How close to a renewal a payment provider takes no plan change and no cancel: it locks the
* subscription while the renewal is billed. A call in this band is refused, and nothing changes.
*/
var PROVIDER_RENEWAL_LOCK_MS = 30 * MS_PER_MINUTE;
180 * MS_PER_MINUTE;
/** How often each brain switches the downgrades that are due: about 15 tries before the provider's lock. */
var DOWNGRADE_PASS_INTERVAL_MS = 10 * MS_PER_MINUTE;
PROVIDER_RENEWAL_LOCK_MS + DOWNGRADE_PASS_INTERVAL_MS;
3 * DOWNGRADE_PASS_INTERVAL_MS;
2 * PROVIDER_CALL_TIMEOUT_MS + 5e3;
Object.freeze({
	vcpu: 0,
	ram_mib: 0,
	slots: 0,
	disk_mib: 0
});
/**
* The preset that weighs one unit: every preset's weight is its reserve measured in this
* preset's reserve (`weightOf`). The smallest preset, so every weight is a whole number ≥ 1.
* Not `DEFAULT_PRESET`: that is what a run gets when it names no preset, a different question
* that only happens to have the same answer.
*/
var UNIT_BASE_PRESET = "std.micro";
/** `reserve_vcpu` is compared in whole milli-vCPU, so a binary float never moves a ratio. */
var MILLI_VCPU_PER_VCPU = 1e3;
//#endregion
//#region ../apps/orchestrator/core/capacity/tier-footprint.ts
var ceilDiv = (a, b) => Math.ceil(a / b);
/**
* Whole milli-vCPU: the loader refuses a `reserve_vcpu` that is not one, and a `reserve_mem_mib`
* that is not a whole MiB, so this only drops float noise and both axes can be summed exactly.
*/
var milliVcpu = (vcpu) => Math.round(vcpu * MILLI_VCPU_PER_VCPU);
/**
* The units one run of `preset` uses: its larger per-axis reserve ratio to `base`, rounded up.
*
* One whole number per preset, so a customer never sees a fraction. Safe on every axis by
* construction: `weight × base reserve ≥ preset reserve` for both vCPU and RAM, so runs that fit
* in N units never reserve more than N runs of the base preset. Both ratios are of integers
* (milli-vCPU, whole MiB), so a binary float never moves a weight.
*/
function weightOf(preset, base) {
	return Math.max(ceilDiv(milliVcpu(preset.reserve_vcpu), milliVcpu(base.reserve_vcpu)), ceilDiv(preset.reserve_mem_mib, base.reserve_mem_mib));
}
/** Every preset's weight against `base` (`weightOf`), by name. */
function presetWeights(presets, base) {
	return Object.fromEntries(Object.entries(presets).map(([name, p]) => [name, weightOf(p, base)]));
}
//#endregion
//#region src/lib/presets.ts
var config = parse(config_default);
var table = config?.presets;
if (!table || Object.keys(table).length === 0) throw new Error("[presets] config.yaml has no `presets:` table.");
/** Every preset, in config order. */
var PRESETS = Object.entries(table).map(([name, p]) => ({
	name,
	vcpu: p.vcpu,
	mem_size_mib: p.mem_size_mib,
	default_storage_mib: p.default_storage_mib
}));
if (!PRESETS.find((p) => p.name === DEFAULT_PRESET)) throw new Error(`[presets] the default preset "${DEFAULT_PRESET}" is not in config.yaml presets:.`);
/** The host's scratch ceiling (`limits.max_storage_mib`): a plan that sets no cap of its own gets this. */
var HOST_MAX_STORAGE_MIB = config?.limits?.max_storage_mib;
if (!Number.isInteger(HOST_MAX_STORAGE_MIB)) throw new Error("[presets] config.yaml has no integer `limits.max_storage_mib`.");
var base = table[UNIT_BASE_PRESET];
if (!base) throw new Error(`[presets] the unit base preset "${UNIT_BASE_PRESET}" is not in config.yaml presets:.`);
/** The units one run of each preset uses against a plan's `max_units`, by name. Public, like whoami. */
var PRESET_WEIGHTS = presetWeights(table, base);
/** The preset that weighs one unit. */
var UNIT_BASE_PRESET_NAME = UNIT_BASE_PRESET;
//#endregion
export { defaultPresetOf as a, UNIT_BASE_PRESET_NAME as i, PRESETS as n, config_default as o, PRESET_WEIGHTS as r, HOST_MAX_STORAGE_MIB as t };
