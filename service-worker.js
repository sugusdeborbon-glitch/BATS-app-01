/* Service Worker — Arcano Tarot */
var CACHE_VERSION = "arcano-v1";

var ARCHIVOS = [
  "index.html",
  "manifest.json",
  "datos_bats.js",
  "cartas/00-TheFool.jpg",
  "cartas/01-TheMagician.jpg",
  "cartas/02-TheHighPriestess.jpg",
  "cartas/03-TheEmpress.jpg",
  "cartas/04-TheEmperor.jpg",
  "cartas/05-TheHierophant.jpg",
  "cartas/06-TheLovers.jpg",
  "cartas/07-TheChariot.jpg",
  "cartas/08-Strength.jpg",
  "cartas/09-TheHermit.jpg",
  "cartas/10-WheelOfFortune.jpg",
  "cartas/11-Justice.jpg",
  "cartas/12-TheHangedMan.jpg",
  "cartas/13-Death.jpg",
  "cartas/14-Temperance.jpg",
  "cartas/15-TheDevil.jpg",
  "cartas/16-TheTower.jpg",
  "cartas/17-TheStar.jpg",
  "cartas/18-TheMoon.jpg",
  "cartas/19-TheSun.jpg",
  "cartas/20-Judgement.jpg",
  "cartas/21-TheWorld.jpg",
  "cartas/CardBacks.jpg",
  "cartas/Cups01.jpg","cartas/Cups02.jpg","cartas/Cups03.jpg","cartas/Cups04.jpg",
  "cartas/Cups05.jpg","cartas/Cups06.jpg","cartas/Cups07.jpg","cartas/Cups08.jpg",
  "cartas/Cups09.jpg","cartas/Cups10.jpg","cartas/Cups11.jpg","cartas/Cups12.jpg",
  "cartas/Cups13.jpg","cartas/Cups14.jpg",
  "cartas/Pentacles01.jpg","cartas/Pentacles02.jpg","cartas/Pentacles03.jpg","cartas/Pentacles04.jpg",
  "cartas/Pentacles05.jpg","cartas/Pentacles06.jpg","cartas/Pentacles07.jpg","cartas/Pentacles08.jpg",
  "cartas/Pentacles09.jpg","cartas/Pentacles10.jpg","cartas/Pentacles11.jpg","cartas/Pentacles12.jpg",
  "cartas/Pentacles13.jpg","cartas/Pentacles14.jpg",
  "cartas/Swords01.jpg","cartas/Swords02.jpg","cartas/Swords03.jpg","cartas/Swords04.jpg",
  "cartas/Swords05.jpg","cartas/Swords06.jpg","cartas/Swords07.jpg","cartas/Swords08.jpg",
  "cartas/Swords09.jpg","cartas/Swords10.jpg","cartas/Swords11.jpg","cartas/Swords12.jpg",
  "cartas/Swords13.jpg","cartas/Swords14.jpg",
  "cartas/Wands01.jpg","cartas/Wands02.jpg","cartas/Wands03.jpg","cartas/Wands04.jpg",
  "cartas/Wands05.jpg","cartas/Wands06.jpg","cartas/Wands07.jpg","cartas/Wands08.jpg",
  "cartas/Wands09.jpg","cartas/Wands10.jpg","cartas/Wands11.jpg","cartas/Wands12.jpg",
  "cartas/Wands13.jpg","cartas/Wands14.jpg"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache){
      return cache.addAll(ARCHIVOS);
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(claves){
      return Promise.all(claves.map(function(k){
        if(k!==CACHE_VERSION) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  e.respondWith(
    caches.match(e.request).then(function(resp){
      return resp || fetch(e.request);
    })
  );
});
