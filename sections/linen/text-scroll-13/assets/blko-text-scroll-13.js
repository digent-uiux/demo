/* Text Scroll 13 - statement ink: text-scroll-13.tsx effect, on window.BlkoCine (blko-cine.js). */
(function () {
  var done = new WeakMap();
  function init(el) {
    var C = window.BlkoCine, box = el.querySelector("[data-box]");
    if (!C || !box || done.has(el) || !C.cineOn()) return;
    var words = Array.prototype.slice.call(box.querySelectorAll("[data-w]")), chips = Array.prototype.slice.call(box.querySelectorAll("[data-chip]")), N = words.length;
    var faint = "color-mix(in oklab, var(--blko-color-text, #3b2a1e) 22%, var(--blko-color-bg-alt, #e9e0d0))";
    var set = function (p) {
      words.forEach(function (w, i) {
        var f = C.cineInk(i, N, p, 0.3), to = w.hasAttribute("data-em") ? "var(--blko-color-accent, #9a4a28)" : "var(--blko-color-text, #3b2a1e)";
        w.style.color = f >= 1 ? "" : "color-mix(in oklab, " + to + " " + (f * 100).toFixed(1) + "%, " + faint + ")";
      });
      chips.forEach(function (c) {
        var i = +(c.getAttribute("data-chip") || 0), o = C.ease(C.clamp01((C.cineInk(i, N, p, 0.3) - 0.4) / 0.6));
        var win = c.firstElementChild, im = win && win.firstElementChild;
        if (!win) return;
        win.style.clipPath = o >= 1 ? "" : "inset(" + ((1 - o) * 30).toFixed(1) + "% " + ((1 - o) * 46).toFixed(1) + "% round 999px)";
        if (im) im.style.transform = "scale(" + (1.35 - 0.35 * o).toFixed(3) + ")";
      });
    };
    var head = el.querySelector("[data-head]"), sign = el.querySelector("[data-sign]");
    var offs = [C.cineTrack(box, set, { start: "top 75%", end: "bottom 45%", play: 2400 }), head ? C.cineReveal(head) : function () {}, sign ? C.cineReveal(sign) : function () {}];
    done.set(el, function () { offs.forEach(function (f) { f(); }); });
  }
  function stop(el) { var f = done.get(el); if (f) { f(); done.delete(el); } }
  function all(root) { root.querySelectorAll("[data-blko-textscroll13]").forEach(init); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { all(document); }); else all(document);
  document.addEventListener("shopify:section:load", function (e) { all(e.target); });
  document.addEventListener("shopify:section:unload", function (e) { e.target.querySelectorAll("[data-blko-textscroll13]").forEach(stop); });
})();
