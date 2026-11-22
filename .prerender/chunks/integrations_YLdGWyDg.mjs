import { i as TIER_IDS, r as TIERS } from "./tiers_DIe1pdQ_.mjs";
//#region src/data/integrations.ts
var STREAM_PRESET = "std.medium";
var STORE_TREE = "https://github.com/ignitify-dev/ignitify-integrations/tree/master/integrations";
var NPM_SCOPE = "@ignitify-integrations";
/** The catalog filters. A new category needs an icon in components/integrations/IntegrationIcon.astro. */
var CATEGORIES = ["Storage", "Media"];
var INTEGRATIONS = [{
	name: "s3-storage",
	category: "Storage",
	worksWith: [
		"AWS S3",
		"Cloudflare R2",
		"Backblaze B2",
		"MinIO"
	],
	needs: {
		network: "egress",
		secrets: 2
	},
	kind: "Settings + code",
	summary: "Upload a file to an S3-compatible bucket and return a download link.",
	text: "Upload a file to an S3-compatible bucket and return a download link. Use it for a result that is too big to return.",
	noLonger: [
		"The upload code and the signed download link.",
		"A way to return a result that is bigger than 10 KiB: the task returns a short link.",
		"The secret names and the network settings for the bucket."
	],
	writes: ["secrets: S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY", "execution.network.type: egress (if the task has no network)"],
	youAdd: ["The values of the two secrets, with secret:set.", "Your bucket host in execution.network.egress_allow. On AWS it is <bucket>.s3.<region>.amazonaws.com."],
	useIt: `import { storage } from '@ignitify-integrations/s3-storage';

export async function run(payload, ctx) {
  const file = await buildReport(payload); // a path on the scratch disk
  const store = storage(ctx, { bucket: 'acme-reports', region: 'eu-west-1' });
  const url = await store.putAndLink(file, { expiresSec: 86400, contentType: 'application/pdf' });
  return { url };
}`,
	limits: [
		"Works with AWS S3, Cloudflare R2, Backblaze B2 and MinIO.",
		"One upload is at most 5 GiB. A link is valid for 1 second to 7 days.",
		"Errors and logs never contain your keys."
	]
}, {
	name: "stream",
	category: "Media",
	worksWith: [
		"HLS",
		"ffmpeg",
		"Browser player"
	],
	needs: {
		network: "bidirectional",
		secrets: 0,
		continuous: true,
		preset: STREAM_PRESET
	},
	kind: "Settings + code, runs ffmpeg",
	summary: "Serve a live audio or video stream that viewers open in a browser.",
	text: "Serve a live HLS stream that viewers open in a browser. It runs the server, the player page, the viewer link and the progress, and stops on cancel.",
	noLonger: [
		"The HTTPS server and the player page that viewers open in a browser.",
		"The viewer link and the progress that the caller gets while the stream runs.",
		"The ffmpeg process, and a clean stop when the run is cancelled."
	],
	writes: [
		"execution.network: bidirectional, inbound_port 8080, route /live/",
		"execution: duration long, interaction continuous",
		"build.system_packages: ffmpeg",
		"run.preset: at least std.medium"
	],
	youAdd: ["For an https:// source, its host in execution.network.egress_allow. A file on the VM needs no host."],
	useIt: `import { stream } from '@ignitify-integrations/stream';

export async function run(payload, ctx) {
  return stream(ctx, { source: payload.url, seconds: payload.seconds });
}`,
	limits: [
		"HLS over HTTPS only, with a few seconds of delay.",
		"No ingest: you cannot send a stream into the task.",
		"One stream per task, for a small audience."
	]
}];
var packageName = (i) => `${NPM_SCOPE}/${i.name}`;
var readmeUrl = (i) => `${STORE_TREE}/${i.name}`;
var npmUrl = (i) => `https://www.npmjs.com/package/${packageName(i)}`;
/** A tier allows these needs. A null max_secrets is unlimited (the capability flag says secrets are allowed). */
function allows(t, n) {
	const maxSecrets = t.max_secrets;
	return t.may_use_egress === true && (n.network !== "bidirectional" || t.may_use_ingress === true) && (n.secrets === 0 || t.may_use_secrets === true && (maxSecrets === null || maxSecrets >= n.secrets)) && (!n.continuous || t.may_cardinality_continuous === true && t.may_duration_long === true) && (!n.preset || t.allowed_presets.includes(n.preset));
}
/** The lowest plan on the ladder that can run a task with this integration. */
function lowestTier(i) {
	const id = TIER_IDS.find((t) => allows(TIERS[t], i.needs));
	if (!id) throw new Error(`[integrations] no plan allows the needs of ${i.name}`);
	return id;
}
var tierLabel = (id) => id[0].toUpperCase() + id.slice(1);
var detailUrl = (i) => `/integrations/${i.name}`;
var CATALOG_URL = "/integrations/catalog";
/** Category -> how many integrations it has, in CATEGORIES order (empty ones left out). */
var categoryCounts = () => CATEGORIES.map((c) => [c, INTEGRATIONS.filter((i) => i.category === c).length]).filter(([, n]) => n > 0);
//#endregion
export { lowestTier as a, readmeUrl as c, detailUrl as i, tierLabel as l, INTEGRATIONS as n, npmUrl as o, categoryCounts as r, packageName as s, CATALOG_URL as t };
