/* Scroll Images 09 - pinned zoom story: scroll-images-09.tsx effect, on window.BlkoCine (blko-cine.js). */
(function () {
  var PLATES = { wide: { a: [16, 9, 16, 54], b: [8, 4, 8, 34] }, narrow: { a: [9, 10, 44, 10], b: [5, 5, 30, 5] } };
  var done = new WeakMap();
  function init(el) {
    var C = window.BlkoCine;
    if (!C || done.has(el) || !C.cineOn()) return;
    var q = function (s) { return el.querySelector(s); };
    var track = q("[data-track]"), frame = q("[data-frame]"), photo = frame && frame.querySelector(".bscrollimages09__img");
    var caps = Array.prototype.slice.call(el.querySelectorAll("[data-cap]")), scrim = q("[data-scrim]"), plate = q("[data-plate]");
    var foot = q("[data-foot]"), bar = q("[data-bar]"), count = q("[data-count]"), eyebrow = q("[data-eyebrow]");
    if (!track || !frame) return;
    var narrow = track.offsetWidth < 768;
    var onResize = function () { narrow = track.offsetWidth < 768; };
    addEventListener("resize", onResize);
    var stop = C.cineTrack(track, function (p) {
      var P = narrow ? PLATES.narrow : PLATES.wide;
      var a = C.ease(C.phase(p, 0.08, 0.42)), b = C.ease(C.phase(p, 0.54, 0.88));
      var ins = P.a.map(function (v, i) { return ((v + (P.b[i] - v) * a) * (1 - b)).toFixed(2) + "%"; });
      frame.style.clipPath = "inset(" + ins.join(" ") + " round " + (14 * (1 - b)).toFixed(1) + "px)";
      if (photo) photo.style.transform = "scale(" + (1.16 - 0.16 * C.ease(C.phase(p, 0.05, 0.92))).toFixed(4) + ")";
      var o = [1 - C.phase(p, 0.28, 0.36), C.phase(p, 0.3, 0.38) * (1 - C.phase(p, 0.52, 0.6)), C.phase(p, 0.7, 0.78)];
      caps.forEach(function (c, i) {
        var v = o[i];
        c.style.opacity = v.toFixed(3);
        c.style.translate = "0 " + ((1 - v) * 18).toFixed(1) + "px";
        c.style.filter = v > 0.99 ? "" : "blur(" + ((1 - v) * 6).toFixed(1) + "px)";
        c.style.visibility = v < 0.01 ? "hidden" : "";
      });
      if (scrim) scrim.style.opacity = b.toFixed(3);
      if (plate) plate.style.opacity = (1 - C.phase(a, 0, 0.5)).toFixed(3);
      if (foot) foot.toggleAttribute("data-light", b > 0.55);
      if (bar) bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
      if (count) count.textContent = "0" + (p < 0.34 ? 1 : p < 0.7 ? 2 : 3);
    });
    var offs = [stop, C.cineButtons(el), eyebrow ? C.cineReveal(eyebrow) : function () {}];
    done.set(el, function () { offs.forEach(function (f) { f(); }); removeEventListener("resize", onResize); });
  }
  function stop(el) { var f = done.get(el); if (f) { f(); done.delete(el); } }
  function all(root) { root.querySelectorAll("[data-blko-scrollimages09]").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { all(document); }); else all(document);
  document.addEventListener("shopify:section:load", function (e) { all(e.target); });
  document.addEventListener("shopify:section:unload", function (e) { e.target.querySelectorAll("[data-blko-scrollimages09]").forEach(stop); });
})();
