/* Balm motion kit. GENERATED from components/ui/kits/balm.ts by kits/liquid.mjs; do not edit.
   Runs only under html.blko-kit-balm (added by blko-balm-motion.js when motion is allowed). */
(() => {
  if (window.blkoKitOn_balm) return;
  window.blkoKitOn_balm = true;
  try { if (!(!new URLSearchParams(location.search).has('static') && !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches)) return; } catch (e) { return; }
  document.documentElement.classList.add("blko-kit-balm");
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
  const S = {"on":"html.blko-kit-balm:root","k":"balm","scope":":root","onClass":"blko-kit-balm","btn":".blko-ui-button:not(.blko-ui-button--link)","arrow":".blko-ui-arrow-link","arrowIcon":".blko-ui-arrow-link__icon","shown":"[data-reveal-group][data-shown]","heading":":is(h1, h2)","img":":is(img, svg[data-placeholder])","card":".blko-ui-product-card","link":":is(nav, footer, p) a:not(.blko-ui-button):not(.blko-ui-arrow-link):not(:has(img, svg))","load":":is([data-reveal-group], section:not(:has([data-reveal-group], section))):not([data-pending], [data-shown], [data-reveal], :has(nav))","tile":":is(:is(ul, ol, [class*=\"grid\"]) > :has(img, svg[data-placeholder]), .blko-ui-product-card:not(:is(ul, ol, [class*=\"grid\"]) > * .blko-ui-product-card))"};
  (function init(s     ) {
  const w = window                                      ;
  const key = "blkoKit_" + s.k;
  if (w[key] || !document.documentElement.classList.contains(s.onClass)) return;
  w[key] = true;
  kitIndex(s, s.tile);
  const attr = "data-" + s.k + "-split";
  const split = (h             ) => {
    if (h.hasAttribute(attr) || h.querySelector("img, svg, input, button") || (h.textContent || "").trim().split(/\s+/).length > 24) return;
    const done                   = [];
    const tw = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
    const texts         = [];
    while (tw.nextNode()) texts.push(tw.currentNode        );
    for (const t of texts) {
      if (!(t.nodeValue || "").trim()) continue;
      const nodes = (t.nodeValue || "").split(/(\s+)/).filter(Boolean).map((part) => {
        if (!part.trim()) return document.createTextNode(part);
        const sp = document.createElement("span");
        sp.className = s.k + "-w";
        sp.textContent = part;
        return sp;
      });
      t.replaceWith(...nodes);
      done.push([t, nodes]);
    }
    if (!done.length) return;
    h.setAttribute(attr, "");
    let top                = null, l = -1;
    h.querySelectorAll             ("." + s.k + "-w").forEach((sp) => {
      if (top === null || Math.abs(sp.offsetTop - top) > 2) { top = sp.offsetTop; l++; }
      sp.style.setProperty("--" + s.k + "-l", String(l));
    });
    const undo = () => {
      for (const [t, nodes] of done) {
        if (!nodes[0]?.parentNode) continue;
        nodes[0].parentNode.insertBefore(t, nodes[0]);
        nodes.forEach((n) => (n             ).remove());
      }
      h.removeAttribute(attr);
    };
    const group = h.closest("[data-reveal-group]");
    if (!group) return undo();
    const mo = new MutationObserver(() => {
      if (!group.hasAttribute("data-shown")) return;
      mo.disconnect();
      setTimeout(undo, 1500 + l * 110);
    });
    mo.observe(group, { attributes: true, attributeFilter: ["data-shown"] });
  };
  kitWatch(() => document.querySelectorAll             ("[data-reveal-group][data-pending] :is(h1, h2)").forEach((h) => {
    if (h.closest(s.scope) && !h.closest("[data-cine]")) split(h);
  }));
})(S);
})();
