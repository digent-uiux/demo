// Care guide 01: arms the scroll reveal (photo unclips, pins pop, care symbols draw). Static = final frame.
(() => {
  const motionOn = () => document.documentElement.classList.contains("blko-ui-motion");
  function arm(root) {
    const band = root.querySelector("[data-cg1]");
    if (!band || band.dataset.armed !== undefined || !motionOn() || !("IntersectionObserver" in window)) return;
    band.setAttribute("data-armed", "");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { band.setAttribute("data-in", ""); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(band);
  }
  const init = (scope) => scope.querySelectorAll("[data-bcareguide01]").forEach(arm);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => init(document));
  else init(document);
  document.addEventListener("shopify:section:load", (e) => init(e.target));
})();
