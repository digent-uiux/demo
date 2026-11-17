/* Linen motion kit. GENERATED from components/ui/kits/linen.ts by kits/liquid.mjs; do not edit.
   Runs only under html.blko-kit-linen (added by blko-linen-motion.js when motion is allowed). */
(() => {
  if (window.blkoKitOn_linen) return;
  window.blkoKitOn_linen = true;
  try { if (!(!new URLSearchParams(location.search).has('static') && !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches)) return; } catch (e) { return; }
  document.documentElement.classList.add("blko-kit-linen");
  function kitBig(el             ) {
    const r = el.getBoundingClientRect();
    return r.width >= innerWidth * 0.4 && r.height >= 200;
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
  function kitText(s     , ms = 2600) {
    const attr = "data-" + s.k + "-t";
    const undos = new Map                         ();
    const plain = (el                , max        )                    => {
      if (!(el instanceof HTMLElement) || !el.offsetWidth || el.closest("[aria-hidden='true'], [data-cine]")) return false;
      if (el.querySelector("img, video, canvas, svg, input, button, select, textarea, [data-cine]")) return false;
      const c = getComputedStyle(el);
      if (c.animationName !== "none" || /text/.test(c.backgroundClip)) return false;
      const w = (el.textContent || "").trim().split(/\s+/).filter(Boolean).length;
      return w > 0 && w <= max;
    };
    const shown = new MutationObserver((rs) => rs.forEach((r) => {
      const g = r.target           , list = undos.get(g);
      if (!g.hasAttribute("data-shown") || !list || !list.length) return;
      undos.set(g, []);
      setTimeout(() => { list.forEach((u) => u()); g.querySelectorAll("[" + attr + "]").forEach((e) => e.removeAttribute(attr)); }, ms);
    }));
    const prep = () => document.querySelectorAll             ("[data-reveal-group][data-pending]").forEach((g) => {
      if (undos.has(g) || !g.closest(s.scope)) return;
      const list                 = [];
      g.querySelectorAll             ("h1, h2").forEach((h) => {
        if (!plain(h, 24)) return;
        const eb = h.previousElementSibling, lead = h.nextElementSibling;
        if (eb && /^(P|SPAN|DIV)$/.test(eb.tagName) && !eb.children.length && (eb.textContent || "").trim().length <= 32 && plain(eb, 10)) {
          list.push(cineSplit(eb, "word")[0]); eb.setAttribute(attr, "e");
        }
        list.push(cineSplit(h, "line")[0]); h.setAttribute(attr, "h");
        if (lead && lead.tagName === "P" && plain(lead, 60)) { list.push(cineSplit(lead, "word")[0]); lead.setAttribute(attr, "b"); }
      });
      undos.set(g, list);
      if (list.length) shown.observe(g, { attributes: true, attributeFilter: ["data-shown"] });
    });
    prep();
    new MutationObserver(prep).observe(document.body, { subtree: true, attributes: true, attributeFilter: ["data-pending"] });
  }
  function cineSplit(el             , mode                          )                               {
    const texts         = [], done                   = [];
    const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentElement?.closest("svg") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
    while (tw.nextNode()) texts.push(tw.currentNode        );
    const full = (el.textContent || "").replace(/\s+/g, " ").trim();
    let i = 0, sr                     = null;
    for (const t of texts) {
      const val = t.nodeValue || "";
      if (!val.trim()) continue;
      const nodes         = [];
      for (const part of mode === "char" ? Array.from(val) : val.split(/(\s+)/)) {
        if (!part) continue;
        if (mode !== "char" && !part.trim()) { nodes.push(document.createTextNode(part)); continue; }
        const s = document.createElement("span");
        if (mode === "line") { const l = document.createElement("span"); l.className = "cine-l"; l.textContent = part; s.className = "cine-m"; s.append(l); }
        else { s.className = mode === "char" ? "cine-c" : "cine-w"; s.textContent = part; s.style.setProperty("--i", String(i)); }
        if (mode === "char") s.setAttribute("aria-hidden", "true");
        i++;
        nodes.push(s);
      }
      t.replaceWith(...nodes);
      done.push([t, nodes]);
    }
    if (mode === "char" && done.length) {
      sr = document.createElement("span");
      sr.textContent = full;
      sr.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap";
      el.append(sr);
    }
    let lines = 1;
    if (mode !== "char") {
      let top                = null, l = -1;
      el.querySelectorAll             (mode === "line" ? ".cine-m" : ".cine-w").forEach((s) => {
        const y = s.offsetTop;
        if (top === null || Math.abs(y - top) > 2) { top = y; l++; }
        (mode === "line" ? (s.firstChild               ) : s).style.setProperty("--l", String(l));
      });
      lines = l + 1;
    }
    const undo = () => {
      for (const [t, nodes] of done) {
        const first = nodes[0];
        if (!first?.parentNode) continue;
        first.parentNode.insertBefore(t, first);
        nodes.forEach((n) => (n             ).remove());
      }
      sr?.remove();
    };
    return [undo, i, lines];
  }
  function kitWatch(scan            ) {
    scan();
    let raf = 0;
    const again = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(scan); };
    new MutationObserver(again).observe(document.body, { childList: true, subtree: true });
    document.addEventListener("shopify:section:load", again);
  }
  const S = {"on":"html.blko-kit-linen:root","k":"linen","scope":":root","onClass":"blko-kit-linen","btn":".blko-ui-button:not(.blko-ui-button--link)","arrow":".blko-ui-arrow-link","arrowIcon":".blko-ui-arrow-link__icon","shown":"[data-reveal-group][data-shown]","heading":":is(h1, h2)","img":":is(img, svg[data-placeholder])","card":".blko-ui-product-card","link":":is(nav, footer, p) a:not(.blko-ui-button):not(.blko-ui-arrow-link):not(:has(img, svg))","load":":is([data-reveal-group], section:not(:has([data-reveal-group], section))):not([data-pending], [data-shown], [data-reveal], :has(nav))","tile":":is(:is(ul, ol, [class*=\"grid\"]) > :has(img, svg[data-placeholder]), .blko-ui-product-card:not(:is(ul, ol, [class*=\"grid\"]) > * .blko-ui-product-card))"};
  (function init(s     ) {
  const w = window                                      ;
  const key = "blkoKit_" + s.k;
  if (w[key] || !document.documentElement.classList.contains(s.onClass)) return;
  w[key] = true;
  const clamp = (n        ) => Math.min(1, Math.max(0, n)).toFixed(3);
  kitText(s);
  kitScrub(s, "u", s.img, (el, p) => el.style.setProperty("--" + s.k + "-u", clamp((p - 0.02) / 0.4)), kitBig);
  kitScrub(s, "f", "[data-reveal-group] h2", (el, p) => el.style.setProperty("--" + s.k + "-f", clamp((p - 0.04) / 0.35)));
})(S);
})();
