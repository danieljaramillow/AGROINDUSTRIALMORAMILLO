// Service worker mínimo: permite instalar la página como app.
const C="moramillo-v3";
const F=["./","index.html","manifest.webmanifest","logo.svg","icon-192.png","icon-512.png","apple-touch-icon.png","favicon-64.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",e=>{
  if(new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
