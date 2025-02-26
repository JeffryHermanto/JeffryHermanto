import * as server from '../entries/pages/portfolio/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/portfolio/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.s_mNMG1I.js","_app/immutable/chunks/C12Doe4p.js","_app/immutable/chunks/iIR710R2.js","_app/immutable/chunks/DQ2aI0y0.js","_app/immutable/chunks/BeyWME6T.js","_app/immutable/chunks/CuI73hGv.js","_app/immutable/chunks/CEIjNOYr.js","_app/immutable/chunks/IKETNTFE.js","_app/immutable/chunks/rcHts6qf.js","_app/immutable/chunks/B-4ui2L6.js","_app/immutable/chunks/CwGaDcIX.js"];
export const stylesheets = ["_app/immutable/assets/5.B4G5uQ5e.css"];
export const fonts = [];
