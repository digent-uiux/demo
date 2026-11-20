// Pre-order 01: arms the reveal (photo mask, bar fill) and keeps the buy box in step with the picked options:
// the hidden variant id, the price, the button label (pre-order / in stock / sold out) and the "Pre-order" line.
(() => {
  const motionOn = () => document.documentElement.classList.contains("blko-ui-motion");

  function arm(root) {
    const band = root.querySelector("[data-po1]");
    if (!band || band.dataset.armed !== undefined || !motionOn() || !("IntersectionObserver" in window)) return;
    band.setAttribute("data-armed", "");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { band.setAttribute("data-in", ""); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(band);
  }

  function buy(root) {
    const form = root.querySelector("[data-po1-form]");
    if (!form || form.dataset.ready) return;
    form.dataset.ready = "1";
    let variants = [];
    try { variants = JSON.parse(form.querySelector("[data-variants]").textContent); } catch (e) { return; }
    const t = root;
    const sets = [...form.querySelectorAll("[data-opt]")];
    const picked = () => sets.map((set) => {
      const on = set.querySelector('[data-blko-ui-option][aria-pressed="true"]');
      return on ? on.value : null;
    });
    const update = () => {
      const want = picked();
      sets.forEach((set, i) => { const v = set.querySelector("[data-val]"); if (v && want[i] != null) v.textContent = want[i]; });
      const v = variants.find((x) => x.o.every((o, i) => want[i] == null || o === want[i]));
      const btn = form.querySelector("[data-add]");
      const label = form.querySelector("[data-label]");
      if (!v) { if (btn) btn.disabled = true; if (label) label.textContent = t.dataset.tUnavailable || ""; return; }
      form.querySelector("[data-id]").value = v.id;
      if (btn) btn.disabled = !(v.a || v.pre);
      if (label) label.textContent = v.pre ? t.dataset.tPre : v.a ? t.dataset.tIn : t.dataset.tSold;
      const kicker = root.querySelector("[data-kicker]");
      if (kicker) kicker.hidden = !v.pre;
      const amount = root.querySelector("[data-price] .blko-ui-price__amount");
      if (amount && v.p) amount.innerHTML = v.p;
    };
    form.addEventListener("click", (e) => { if (e.target.closest("[data-blko-ui-option]")) requestAnimationFrame(update); });
  }

  const init = (scope) => scope.querySelectorAll("[data-bpreorder01]").forEach((root) => { arm(root); buy(root); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => init(document));
  else init(document);
  document.addEventListener("shopify:section:load", (e) => init(e.target));
})();
