import "./server_D7BsF4R_.mjs";
//#region src/lib/account-origin.ts
var SITE_MODE = {
	DEVELOPMENT: "development",
	STAGING: "staging",
	PRODUCTION: "production"
};
var ACCOUNT_ORIGIN_BY_MODE = {
	[SITE_MODE.DEVELOPMENT]: "http://localhost:8180",
	[SITE_MODE.STAGING]: "https://account.staging.ignitify.dev",
	[SITE_MODE.PRODUCTION]: "https://account.ignitify.dev"
};
function accountOriginFor(mode) {
	const origin = ACCOUNT_ORIGIN_BY_MODE[mode];
	if (origin === void 0) throw new Error(`account-origin: no account host for Astro mode "${mode}" (use ${Object.keys(ACCOUNT_ORIGIN_BY_MODE).join(", ")})`);
	return origin;
}
var ACCOUNT_ORIGIN = accountOriginFor("production");
var ACCOUNT_HOST = new URL(ACCOUNT_ORIGIN).host;
var SIGNIN_URL = `${ACCOUNT_ORIGIN}/web/signin`;
var PROFILE_URL = `${ACCOUNT_ORIGIN}/web/profile`;
var SIGNED_IN_HINT_PAIR = `ignitify_signed_in=${ACCOUNT_HOST}`;
//#endregion
export { SIGNIN_URL as a, SIGNED_IN_HINT_PAIR as i, ACCOUNT_ORIGIN as n, SITE_MODE as o, PROFILE_URL as r, ACCOUNT_HOST as t };
