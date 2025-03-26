import { g as decodeKey } from './chunks/astro/server_CZLiJSpa.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DBUt2jyQ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///G:/Proyecto%20Terpel%20V2/","cacheDir":"file:///G:/Proyecto%20Terpel%20V2/node_modules/.astro/","outDir":"file:///G:/Proyecto%20Terpel%20V2/dist/","srcDir":"file:///G:/Proyecto%20Terpel%20V2/src/","publicDir":"file:///G:/Proyecto%20Terpel%20V2/public/","buildClientDir":"file:///G:/Proyecto%20Terpel%20V2/dist/client/","buildServerDir":"file:///G:/Proyecto%20Terpel%20V2/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"antioquia_prog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/antioquia_prog","isIndex":false,"type":"page","pattern":"^\\/antioquia_prog\\/?$","segments":[[{"content":"antioquia_prog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/antioquia_prog.astro","pathname":"/antioquia_prog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"boletin_qnlp/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/boletin_qnlp","isIndex":false,"type":"page","pattern":"^\\/boletin_qnlp\\/?$","segments":[[{"content":"boletin_qnlp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/boletin_qnlp.astro","pathname":"/boletin_qnlp","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"programacion_escuelascol/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/programacion_escuelascol","isIndex":false,"type":"page","pattern":"^\\/programacion_escuelascol\\/?$","segments":[[{"content":"programacion_escuelascol","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programacion_escuelascol.astro","pathname":"/programacion_escuelascol","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://github.com/Dante20012002/Proyecto_Terpel","base":"/Proyecto_Terpel","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["G:/Proyecto Terpel V2/src/pages/antioquia_prog.astro",{"propagation":"none","containsHead":true}],["G:/Proyecto Terpel V2/src/pages/boletin_qnlp.astro",{"propagation":"none","containsHead":true}],["G:/Proyecto Terpel V2/src/pages/programacion_escuelascol.astro",{"propagation":"none","containsHead":true}],["G:/Proyecto Terpel V2/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/antioquia_prog@_@astro":"pages/antioquia_prog.astro.mjs","\u0000@astro-page:src/pages/boletin_qnlp@_@astro":"pages/boletin_qnlp.astro.mjs","\u0000@astro-page:src/pages/programacion_escuelascol@_@astro":"pages/programacion_escuelascol.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B8PXZkGn.mjs","G:/Proyecto Terpel V2/src/layouts/Selec_reg.astro?astro&type=script&index=0&lang.ts":"_astro/Selec_reg.astro_astro_type_script_index_0_lang.C0H9I5bV.js","G:/Proyecto Terpel V2/src/layouts/Boletin.astro?astro&type=script&index=0&lang.ts":"_astro/Boletin.astro_astro_type_script_index_0_lang.CyF2iU7T.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["G:/Proyecto Terpel V2/src/layouts/Selec_reg.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const l=document.querySelectorAll(\"area\"),e=document.getElementById(\"tooltip\");l.forEach(t=>{t.addEventListener(\"mouseenter\",function(i){t.dataset.originalTitle=t.getAttribute(\"title\"),t.removeAttribute(\"title\");const n=t.dataset.originalTitle;e.textContent=n,e.classList.add(\"active\");const o=i.clientX+10,s=i.clientY+10;e.style.left=`${o}px`,e.style.top=`${s}px`}),t.addEventListener(\"mouseleave\",function(){e.classList.remove(\"active\"),t.dataset.originalTitle&&(t.setAttribute(\"title\",t.dataset.originalTitle),delete t.dataset.originalTitle)}),t.addEventListener(\"mousemove\",function(i){const n=i.clientX+10,o=i.clientY+10;e.style.left=`${n}px`,e.style.top=`${o}px`})})});"],["G:/Proyecto Terpel V2/src/layouts/Boletin.astro?astro&type=script&index=0&lang.ts","console.log(\"El resultado de la suma es \");"]],"assets":["/Proyecto_Terpel/_astro/Terpel-Sans-Medium-Condensed.jgusGP__.woff2","/Proyecto_Terpel/_astro/Terpel-Sans-ExtraBold-Condensed.dSj9g7kg.woff2","/Proyecto_Terpel/favicon.svg","/Proyecto_Terpel/media/docs/Cronograma.pdf","/Proyecto_Terpel/media/docs/Cronograma.pptx","/Proyecto_Terpel/media/docs/CronogramaV2.pdf","/Proyecto_Terpel/media/docs/PDF Programas Escuelas Terpel.pptx","/Proyecto_Terpel/media/docs/Prueba 1.pdf","/Proyecto_Terpel/media/img/Asset 2@2x-8.png","/Proyecto_Terpel/media/img/Asset 31@2x-8.png","/Proyecto_Terpel/media/img/Campo entrenamiento.png","/Proyecto_Terpel/media/img/Caravana Video.png","/Proyecto_Terpel/media/img/Caravana.png","/Proyecto_Terpel/media/img/cronograma semanal V2.png","/Proyecto_Terpel/media/img/cronograma semanal.png","/Proyecto_Terpel/media/img/EDS Calle 28_161.jpg","/Proyecto_Terpel/media/img/EDS Calle 28_174.jpg","/Proyecto_Terpel/media/img/EDS Confiable 2.png","/Proyecto_Terpel/media/img/EDS Confiable.png","/Proyecto_Terpel/media/img/Escuela de Administradores.png","/Proyecto_Terpel/media/img/Escuela de Promotores.png","/Proyecto_Terpel/media/img/Foto Estacion GNV.jpeg","/Proyecto_Terpel/media/img/Fotogría de Promotor.jpg","/Proyecto_Terpel/media/img/Imagen Anfitrion Altoque.png","/Proyecto_Terpel/media/img/Imagen1.png","/Proyecto_Terpel/media/img/Logo Terpel Escuelas.png","/Proyecto_Terpel/media/img/Terpel_Logosimbolo_anim.gif","/Proyecto_Terpel/media/img/Terpel_logosimbolo_Vertical_rojo.png","/Proyecto_Terpel/media/img/Terpel_simbolo.png","/Proyecto_Terpel/media/img/Tienda Altoque.png","/Proyecto_Terpel/media/img/Tiendas Video.png","/Proyecto_Terpel/media/videos/video_escuelas_terpel.mp4","/Proyecto_Terpel/media/docs/Boletines/Boletín EDS Confiable N 75.pdf","/Proyecto_Terpel/media/docs/Boletines/Boletín EDS Confiable N 76.pdf","/Proyecto_Terpel/media/docs/Boletines/Boletín EDS Confiable N 77.pdf","/Proyecto_Terpel/media/docs/Boletines/Boletín EDS Confiable N 78.pdf","/Proyecto_Terpel/media/docs/Boletines/Boletín EDS Confiable N 80.pdf","/Proyecto_Terpel/media/img/Regionales/mapa_antioquia.png","/Proyecto_Terpel/media/img/Regionales/mapa_bucaramanga.png","/Proyecto_Terpel/media/img/Regionales/mapa_centro.png","/Proyecto_Terpel/media/img/Regionales/mapa_completo.png","/Proyecto_Terpel/media/img/Regionales/mapa_norte.png","/Proyecto_Terpel/media/img/Regionales/mapa_occidente.png","/Proyecto_Terpel/media/img/Regionales/mapa_sabana.png","/Proyecto_Terpel/media/img/Regionales/mapa_sur.png","/Proyecto_Terpel/antioquia_prog/index.html","/Proyecto_Terpel/boletin_qnlp/index.html","/Proyecto_Terpel/programacion_escuelascol/index.html","/Proyecto_Terpel/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"liMG6fpQ3ulqHtoEG9i+rzZruL8+bRJu0a64GKvfvc8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
