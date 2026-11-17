// Installments 02: dates the later payments from the shopper's today (the page may be cached), re-splits the price
// when another size is picked, and plays the step and cell rise once when the band scrolls in (motion layer only).
(() => {
  const fmt = (cents, format) => {
    const group = (s, sep) => s.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    const [i, d] = (cents / 100).toFixed(2).split(".");
    return (format || "${{amount}}").replace(/\{\{\s*(\w+)\s*\}\}/, (_, k) => {
      if (k === "amount_no_decimals") return group(String(Math.round(cents / 100)), ",");
      if (k === "amount_with_comma_separator") return group(i, ".") + "," + d;
      if (k === "amount_no_decimals_with_comma_separator") return group(String(Math.round(cents / 100)), ".");
      return group(i, ",") + "." + d;
    }).replace(/<[^>]*>/g, "").replace(/([.,])00(?!\d)/, "");
  };

  function init(root) {
    const band = root.querySelector("[data-in2]");
    if (!band || band.dataset.ready) return;
    band.dataset.ready = "1";
    const n = Number(root.dataset.n) || 4;
    const lang = document.documentElement.lang || undefined;
    root.querySelectorAll("[data-at]").forEach((cell) => {
      const when = cell.querySelector(".binstallments02__when");
      const at = new Date(Date.now() + Number(cell.dataset.at) * 1000);
      if (when) when.textContent = at.toLocaleDateString(lang, { month: "short", day: "numeric" });
    });

    const form = root.querySelector("[data-in2-form]");
    const json = form && form.querySelector("[data-variants]");
    if (json) {
      let variants = [];
      try { variants = JSON.parse(json.textContent); } catch (e) {}
      const sets = [...form.querySelectorAll("[data-opt]")];
      form.addEventListener("click", (e) => {
        if (!e.target.closest("[data-blko-ui-option]")) return;
        requestAnimationFrame(() => {
          const want = sets.map((set) => { const on = set.querySelector('[data-blko-ui-option][aria-pressed="true"]'); return on ? on.value : null; });
          const v = variants.find((x) => x.o.every((o, i) => want[i] == null || o === want[i]));
          const btn = form.querySelector("[data-add]");
          if (!v) { if (btn) btn.disabled = true; return; }
          form.querySelector("[data-id]").value = v.id;
          if (btn) btn.disabled = !v.a;
          const label = form.querySelector("[data-label]");
          if (label) label.textContent = v.a ? root.dataset.tAdd : root.dataset.tSold;
          const price = root.querySelector("[data-price]");
          if (price) price.textContent = fmt(v.c, root.dataset.money);
          root.querySelectorAll("[data-part]").forEach((el) => { el.textContent = fmt(Math.floor(v.c / n), root.dataset.money); });
        });
      });
    }

    if (document.documentElement.classList.contains("blko-ui-motion") && "IntersectionObserver" in window) {
      band.setAttribute("data-armed", "");
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { band.setAttribute("data-in", ""); io.disconnect(); } }, { threshold: 0.2 });
      io.observe(band);
    }
  }

  const all = (scope) => scope.querySelectorAll("[data-binstallments02]").forEach(init);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => all(document));
  else all(document);
  document.addEventListener("shopify:section:load", (e) => all(e.target));
})();
