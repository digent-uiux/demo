// Pre-order 02: when the timeline scrolls into view, lights its stops one by one (200ms, then every 450ms).
// Lit stops stay lit. Without the motion layer (static, reduced motion) nothing is armed: every stop shows lit.
(() => {
  const init = (scope) => scope.querySelectorAll("[data-bpreorder02]").forEach((root) => {
    const band = root.querySelector("[data-po2]");
    const line = root.querySelector("[data-po2-line]");
    if (!band || !line || band.dataset.armed !== undefined || !document.documentElement.classList.contains("blko-ui-motion") || !("IntersectionObserver" in window)) return;
    const stops = [...line.querySelectorAll("[data-stop]")];
    band.setAttribute("data-armed", "");
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      stops.forEach((s, i) => setTimeout(() => s.setAttribute("data-lit", ""), 200 + i * 450));
    }, { threshold: 0.25 });
    io.observe(line);
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => init(document));
  else init(document);
  document.addEventListener("shopify:section:load", (e) => init(e.target));
})();
