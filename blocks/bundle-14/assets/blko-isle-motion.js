/* Isle motion kit. GENERATED from components/ui/kits/isle.ts by kits/liquid.mjs; do not edit.
   Runs only under html.blko-kit-isle (added by blko-isle-motion.js when motion is allowed). */
(() => {
  if (window.blkoKitOn_isle) return;
  window.blkoKitOn_isle = true;
  try { if (!(!new URLSearchParams(location.search).has('static') && !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches)) return; } catch (e) { return; }
  document.documentElement.classList.add("blko-kit-isle");
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
  function kitWatch(scan            ) {
    scan();
    let raf = 0;
    const again = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(scan); };
    new MutationObserver(again).observe(document.body, { childList: true, subtree: true });
    document.addEventListener("shopify:section:load", again);
  }
  const S = {"on":"html.blko-kit-isle:root","k":"isle","scope":":root","onClass":"blko-kit-isle","btn":".blko-ui-button:not(.blko-ui-button--link)","arrow":".blko-ui-arrow-link","arrowIcon":".blko-ui-arrow-link__icon","shown":"[data-reveal-group][data-shown]","heading":":is(h1, h2)","img":":is(img, svg[data-placeholder])","card":".blko-ui-product-card","link":":is(nav, footer, p) a:not(.blko-ui-button):not(.blko-ui-arrow-link):not(:has(img, svg))","load":":is([data-reveal-group], section:not(:has([data-reveal-group], section))):not([data-pending], [data-shown], [data-reveal], :has(nav))","tile":":is(:is(ul, ol, [class*=\"grid\"]) > :has(img, svg[data-placeholder]), .blko-ui-product-card:not(:is(ul, ol, [class*=\"grid\"]) > * .blko-ui-product-card))"};
  (function init(s     ) {
  const w = window                                      ;
  const key = "blkoKit_" + s.k;
  if (w[key] || !document.documentElement.classList.contains(s.onClass)) return;
  w[key] = true;
  kitIndex(s, s.tile);
  document.addEventListener("pointerover", (e) => {
    const b = (e.target           ).closest?.(s.btn)                      ;
    if (!b || !b.closest(s.scope) || b.contains(e.relatedTarget        )) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--" + s.k + "-x", (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%");
    b.style.setProperty("--" + s.k + "-y", (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%");
  }, { passive: true });
  const attr = "data-" + s.k + "-drift";
  let raf = 0;
  const framed = (el             ) => {
    const p = el.parentElement;
    if (!p || !el.closest(s.scope)) return false;
    const a = el.getBoundingClientRect(), b = p.getBoundingClientRect();
    return getComputedStyle(p).overflow !== "visible" && a.width >= b.width * 0.9 && a.height >= b.height * 0.9 && a.height > 160;
  };
  const tick = () => {
    raf = 0;
    const els = Array.from(document.querySelectorAll             (s.img));
    const vh = innerHeight, out                          = [];
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      if (!el.hasAttribute(attr) && !framed(el)) continue;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      out.push([el, Math.max(-1, Math.min(1, p)) * r.height * -0.06]);
    }
    for (const [el, dy] of out) { el.setAttribute(attr, ""); el.style.setProperty("--" + s.k + "-dy", dy.toFixed(1) + "px"); }
  };
  const req = () => { if (!raf) raf = requestAnimationFrame(tick); };
  addEventListener("scroll", req, { passive: true });
  addEventListener("resize", req);
  req();
})(S);
})();
