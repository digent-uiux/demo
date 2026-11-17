/* Blush motion kit. GENERATED from components/ui/kits/blush.ts by kits/liquid.mjs; do not edit.
   Runs only under html.blko-kit-blush (added by blko-blush-motion.js when motion is allowed). */
(() => {
  if (window.blkoKitOn_blush) return;
  window.blkoKitOn_blush = true;
  try { if (!(!new URLSearchParams(location.search).has('static') && !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches)) return; } catch (e) { return; }
  document.documentElement.classList.add("blko-kit-blush");
  function kitIndex(s     , sel        ) {
    kitWatch(() => {
      const seen = new Map                 ();
      document.querySelectorAll             (sel).forEach((el) => {
        const box = el.closest("[data-reveal-group], section") || document.body;
        const i = seen.get(box) || 0;
        seen.set(box, i + 1);
        el.style.setProperty("--" + s.k + "-i", String(Math.min(i, 7)));
      });
    });
  }
  function kitScrub(s     , name        , sel        , set                                      , ok                               ) {
    const attr = "data-" + s.k + "-" + name, live = new Set             ();
    let raf = 0;
    const tick = () => {
      raf = 0;
      const h = innerHeight;
      live.forEach((el) => { const r = el.getBoundingClientRect(); set(el, Math.min(1, Math.max(0, (h - r.top) / (h + r.height)))); });
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    const io = new IntersectionObserver((es) => {
      for (const e of es) { if (e.isIntersecting) live.add(e.target               ); else live.delete(e.target               ); }
      on();
    }, { rootMargin: "25% 0px" });
    kitWatch(() => document.querySelectorAll             (sel).forEach((el) => {
      if (el.hasAttribute(attr) || !el.closest(s.scope) || (ok && !ok(el))) return;
      el.setAttribute(attr, "");
      io.observe(el);
    }));
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
  }
  function kitWatch(scan            ) {
    scan();
    let raf = 0;
    const again = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(scan); };
    new MutationObserver(again).observe(document.body, { childList: true, subtree: true });
    document.addEventListener("shopify:section:load", again);
  }
  const S = {"on":"html.blko-kit-blush:root","k":"blush","scope":":root","onClass":"blko-kit-blush","btn":".blko-ui-button:not(.blko-ui-button--link)","arrow":".blko-ui-arrow-link","arrowIcon":".blko-ui-arrow-link__icon","shown":"[data-reveal-group][data-shown]","heading":":is(h1, h2)","img":":is(img, svg[data-placeholder])","card":".blko-ui-product-card","link":":is(nav, footer, p) a:not(.blko-ui-button):not(.blko-ui-arrow-link):not(:has(img, svg))","load":":is([data-reveal-group], section:not(:has([data-reveal-group], section))):not([data-pending], [data-shown], [data-reveal], :has(nav))","tile":":is(:is(ul, ol, [class*=\"grid\"]) > :has(img, svg[data-placeholder]), .blko-ui-product-card:not(:is(ul, ol, [class*=\"grid\"]) > * .blko-ui-product-card))"};
  (function init(s     ) {
  const w = window                                      ;
  const key = "blkoKit_" + s.k;
  if (w[key] || !document.documentElement.classList.contains(s.onClass)) return;
  w[key] = true;
  kitIndex(s, s.tile);
  kitScrub(s, "m", "[data-reveal-group] h2", (el, p) => el.style.setProperty("--" + s.k + "-m", Math.min(1, Math.max(0, (p - 0.08) / 0.4)).toFixed(3)));
})(S);
})();
