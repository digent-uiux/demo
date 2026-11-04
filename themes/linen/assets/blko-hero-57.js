/* Hero 57 - ripple: hero-57.tsx useEffect, on window.BlkoCine (blko-cine.js) + lazy blko-cine-gl.js. */
(function () {
  var done = new WeakMap();
  function gl(url) {
    if (window.BlkoCineGL) return Promise.resolve(window.BlkoCineGL);
    if (!gl.p) gl.p = new Promise(function (ok, no) { var s = document.createElement("script"); s.src = url; s.async = true; s.onload = function () { ok(window.BlkoCineGL); }; s.onerror = no; document.head.appendChild(s); });
    return gl.p;
  }
  function init(el) {
    var C = window.BlkoCine;
    if (!C || done.has(el) || !C.cineOn()) return;
    var m = el.querySelector("[data-move]"), h = el.querySelector("[data-heading]"), c = el.querySelector("[data-copy]"), im = el.querySelector("img.bhero57__img");
    if (!m || !h || !c) return;
    var offs = [C.cineLines(h), C.cineButtons(c), C.cineTrack(el, function (p) {
      m.style.translate = "0 " + (p * 10).toFixed(2) + "%";
      c.style.opacity = (1 - C.phase(p, 0.3, 0.7)).toFixed(3);
    }, { start: "top top", end: "bottom top" })];
    var dispose = null, dead = false, k = +(el.dataset.strength || 0) / 1000;
    var t = im && k > 0 ? setTimeout(function () {
      gl(el.dataset.gl).then(function (g) { if (!dead && g) dispose = g.cineRipple(m, im, { strength: k, rgb: k * 0.1 }); }, function () {});
    }, 700) : 0;
    done.set(el, function () { dead = true; clearTimeout(t); offs.forEach(function (f) { f(); }); if (dispose) dispose(); });
  }
  function stop(el) { var f = done.get(el); if (f) { f(); done.delete(el); } }
  function all(root) { root.querySelectorAll("[data-blko-hero57]").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { all(document); }); else all(document);
  document.addEventListener("shopify:section:load", function (e) { all(e.target); });
  document.addEventListener("shopify:section:unload", function (e) { e.target.querySelectorAll("[data-blko-hero57]").forEach(stop); });
})();
