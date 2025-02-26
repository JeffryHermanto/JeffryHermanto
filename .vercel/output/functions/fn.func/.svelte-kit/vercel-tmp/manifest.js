export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","moneypulse/$10k_moneypulse_template.mpd","moneypulse/10jt_moneypulse_template.mpd","moneypulse/15jt_moneypulse_template.mpd","moneypulse/30jt_moneypulse_template.mpd","moneypulse/5jt_moneypulse_template.mpd","moneypulse/multi_income_moneypulse_template.mpd"]),
	mimeTypes: {".png":"image/png",".mpd":"application/dash+xml",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BinXAJ-_.js",app:"_app/immutable/entry/app.D3FdNkUB.js",imports:["_app/immutable/entry/start.BinXAJ-_.js","_app/immutable/chunks/CC0mGImB.js","_app/immutable/chunks/iIR710R2.js","_app/immutable/chunks/PK9xBjzw.js","_app/immutable/entry/app.D3FdNkUB.js","_app/immutable/chunks/iIR710R2.js","_app/immutable/chunks/rcHts6qf.js","_app/immutable/chunks/BeyWME6T.js","_app/immutable/chunks/C12Doe4p.js","_app/immutable/chunks/B-4ui2L6.js","_app/immutable/chunks/IKETNTFE.js","_app/immutable/chunks/PK9xBjzw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/moneypulse",
				pattern: /^\/moneypulse\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/devices.N-Ko6oRE.svg":4362,"_app/immutable/assets/attendance_point_system.DCmQTyz6.jpg":370343,"_app/immutable/assets/ballradar.BDuu3Xl0.png":90852,"_app/immutable/assets/greenotes.CAN03twe.jpg":55884,"_app/immutable/assets/haixin_notebook.Bod9hkq5.jpg":69609,"_app/immutable/assets/inspiraya.DVW11jWX.png":100445,"_app/immutable/assets/lirix.CxUDTc7p.jpg":42438,"_app/immutable/assets/loadsmile.CGowJqXe.jpg":22785,"_app/immutable/assets/moneypulse.C4rYNnXN.png":107272,"_app/immutable/assets/native_updater.CcqgCH8B.jpg":102839,"_app/immutable/assets/nerf_war.4FSLqIGh.jpg":108233,"_app/immutable/assets/nutrix.B8L2Cqax.jpg":47816,"_app/immutable/assets/orbitrade.CkEq1Ewg.jpg":100851,"_app/immutable/assets/pinang_maksima.DS05ScUI.png":103531,"_app/immutable/assets/raya.AhjsuYDQ.jpg":207316,"_app/immutable/assets/rima_kata.Bv--1vox.jpg":49993,"_app/immutable/assets/survey_pengembangan_usaha.Dxbp7KtL.jpg":34066,"_app/immutable/assets/tiket_valet.XcPQzbP3.jpg":63561}
	}
}
})();
