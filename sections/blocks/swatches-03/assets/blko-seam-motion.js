/* Seam motion kit (Liquid half of components/ui/seam-motion.tsx; docs/plans/theme-motion-kits-A-report.md). CSS does the motion;
   this only (1) adds html.blko-m when motion is allowed (no ?static, no reduced motion, not an automated browser), the
   same rule as the DS head script, and (2) gives the theme's generic sections the DS scroll reveal: each section's inner
   box becomes a [data-reveal-group], held back only when it starts below the first screen. Bundles reveal through
   blko-ui-motion.js. Re-scans on shopify:section:load. */
(() => {
  const blkoR3 = (cfg) => {
    const w = window;
    if (w["blkoR3_" + cfg.t]) return;
    w["blkoR3_" + cfg.t] = 1;
    const sc = CSS.supports("animation-timeline: view()");
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.setAttribute("data-km-in", "");
      io.unobserve(e.target);
    }), { rootMargin: "0px 0px -10% 0px" });
    const mark = (root) => {
      const hero = document.querySelector(cfg.hero);
      const inHero = (el) => !!hero && hero.contains(el);
      root.querySelectorAll(cfg.img).forEach((i) => {
        if (i.hasAttribute("data-km-big") || inHero(i) || i.closest(cfg.card)) return;
        const r = i.getBoundingClientRect();
        if (r.width < 420 || r.height < 260) return;
        i.setAttribute("data-km-big", "");
        if (!sc) io.observe(i);
      });
      if (!sc) root.querySelectorAll(cfg.h2).forEach((h) => { if (!inHero(h)) io.observe(h); });
      root.querySelectorAll("[data-reveal-group]").forEach((g) => {
        if (inHero(g) || g.querySelector("[data-km-i]")) return;
        const box = Array.prototype.find.call(g.querySelectorAll("ul, ol, div"), (el) => {
          if (el.childElementCount < 3 || el.closest("header, footer, nav")) return false;
          const a = el.children[0].getBoundingClientRect(), b = el.children[1].getBoundingClientRect();
          return a.width > 40 && Math.abs(a.top - b.top) < 3 && b.left > a.left + 8 && a.width < el.getBoundingClientRect().width * .6;
        });
        if (!box) return;
        Array.prototype.slice.call(box.children, 0, 12).forEach((c, n) => {
          c.setAttribute("data-km-i", "");
          c.style.setProperty("--ki", String(n));
        });
      });
    };
    const go = () => mark(document);
    if ("requestIdleCallback" in w) w.requestIdleCallback(go, { timeout: 700 }); else setTimeout(go, 120);
    document.addEventListener("shopify:section:load", (e) => mark(e.target));
  };
  if (window.blkoKit) return;
  window.blkoKit = 'seam';
  try { if (new URLSearchParams(location.search).has('static') || navigator.webdriver || matchMedia('(prefers-reduced-motion: reduce)').matches) return; } catch (e) { return; }
  document.documentElement.classList.add('blko-m');
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target); e.target.removeAttribute('data-pending'); e.target.setAttribute('data-shown', '');
  }), { rootMargin: '0px 0px -8% 0px' });
  const scan = (root) => root.querySelectorAll('.blko-section').forEach((s) => {
    const g = s.querySelector(':scope > .blko-container') || s;
    if (g.hasAttribute('data-reveal-group')) return;
    g.setAttribute('data-reveal-group', '');
    if (g.getBoundingClientRect().top > innerHeight) { g.setAttribute('data-pending', ''); io.observe(g); }
  });
  const start = () => { scan(document); blkoR3({"t": "seam", "hero": "#MainContent > .shopify-section:first-child .blko-section:not(#km)", "img": ":is(img, svg.blko-placeholder)", "card": ":is(.blko-card, .blko-ui-product-card)", "h2": ":is(h2, .blko-h2)"}); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  document.addEventListener('shopify:section:load', (e) => scan(e.target));
})();
