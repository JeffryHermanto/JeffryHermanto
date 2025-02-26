import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.ByGt9nYY.js","_app/immutable/chunks/C12Doe4p.js","_app/immutable/chunks/iIR710R2.js","_app/immutable/chunks/DQ2aI0y0.js","_app/immutable/chunks/rcHts6qf.js","_app/immutable/chunks/BeyWME6T.js","_app/immutable/chunks/CuI73hGv.js","_app/immutable/chunks/CEIjNOYr.js","_app/immutable/chunks/IKETNTFE.js"];
export const stylesheets = ["_app/immutable/assets/3.tS-cJUdZ.css"];
export const fonts = [];
