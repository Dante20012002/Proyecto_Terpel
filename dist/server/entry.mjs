import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_j3VBbFwJ.mjs';
import { manifest } from './manifest_B8PXZkGn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/antioquia_prog.astro.mjs');
const _page1 = () => import('./pages/boletin_qnlp.astro.mjs');
const _page2 = () => import('./pages/programacion_escuelascol.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/antioquia_prog.astro", _page0],
    ["src/pages/boletin_qnlp.astro", _page1],
    ["src/pages/programacion_escuelascol.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///G:/Proyecto%20Terpel%20V2/dist/client/",
    "server": "file:///G:/Proyecto%20Terpel%20V2/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
