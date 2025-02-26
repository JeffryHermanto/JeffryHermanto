import * as server from '../entries/pages/moneypulse/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/moneypulse/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/moneypulse/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.H4Nv9RHX.js","_app/immutable/chunks/C12Doe4p.js","_app/immutable/chunks/iIR710R2.js","_app/immutable/chunks/DQ2aI0y0.js","_app/immutable/chunks/CEIjNOYr.js"];
export const stylesheets = ["_app/immutable/assets/4.BXntKuUv.css"];
export const fonts = [];
