// Swatches 03: pick a cloth (click, or arrow keys along the fan with a roving tabindex); it swings to the front and the
// card reads its composition, weight on the light-to-heavy scale, seasons, and points the fitting button at it. The swing
// is the CSS transition. With motion (html.blko-ui-motion, not reduced) the bunch fans open when it scrolls in.
if (!customElements.get("blko-swatches-03")) {
  customElements.define("blko-swatches-03", class extends HTMLElement {
    connectedCallback() {
      if (this.abort) return;
      this.abort = new AbortController();
      const on = { signal: this.abort.signal };
      this.strips = [...this.querySelectorAll("[data-cloth]")];
      this.reveal();
      this.addEventListener("click", (e) => {
        const b = e.target.closest("[data-cloth]");
        if (b) this.pick(this.strips.indexOf(b));
      }, on);
      this.addEventListener("keydown", (e) => {
        if (!e.target.closest?.("[data-cloth]")) return;
        const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        const n = this.strips.length;
        const next = (this.strips.indexOf(e.target.closest("[data-cloth]")) + d + n) % n;
        this.pick(next);
        this.strips[next].focus();
      }, on);
      this.addEventListener("shopify:block:select", (e) => {
        const i = this.strips.indexOf(e.target);
        if (i >= 0) this.pick(i);
      }, on);
    }

    disconnectedCallback() { this.abort?.abort(); this.abort = null; this.io?.disconnect(); }

    reveal() {
      const fan = this.querySelector("[data-stage]");
      if (!fan) return;
      const motion = document.documentElement.classList.contains("blko-ui-motion") && !matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!motion || !("IntersectionObserver" in window)) return fan.setAttribute("data-in", "");
      this.io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { fan.setAttribute("data-in", ""); this.io.disconnect(); }
      }, { rootMargin: "0px 0px -15% 0px" });
      this.io.observe(fan);
    }

    set(sel, text) {
      const el = this.querySelector(sel);
      if (el) el.textContent = text;
      return el;
    }

    pick(sel) {
      if (sel < 0) return;
      const n = this.strips.length;
      this.strips.forEach((b, i) => {
        const on = i === sel;
        b.setAttribute("aria-pressed", String(on));
        b.tabIndex = on ? 0 : -1;
        b.style.setProperty("--a", (on ? 0 : b.dataset.angle) + "deg");
        b.style.setProperty("--y", on ? "12px" : "0px");
        b.style.zIndex = String(on ? n + 1 : i < sel ? i : n - i);
      });
      const d = this.strips[sel].dataset;
      this.set("[data-out-name]", d.name);
      this.set("[data-out-feel]", d.feel);
      this.set("[data-out-comp]", d.comp);
      const gsm = this.querySelector("[data-out-gsm]");
      if (gsm) gsm.textContent = `${d.gsm} ${gsm.dataset.unit || ""}`.trim();
      const fill = this.querySelector("[data-out-fill]");
      if (fill) fill.style.width = d.w + "%";
      const seasons = this.querySelector("[data-out-seasons]");
      if (seasons) {
        seasons.replaceChildren(...d.seasons.split(",").map((x) => x.trim()).filter(Boolean).map((x) => {
          const s = document.createElement("span");
          s.className = "bswatches03__season";
          s.textContent = x;
          return s;
        }));
      }
      const tag = this.querySelector("[data-out-swatch]");
      if (tag) { tag.dataset.weave = this.strips[sel].dataset.weave; tag.style.setProperty("--hex", d.hex); }
      const link = this.querySelector("[data-out-link]");
      if (link) link.href = d.url;
      const note = this.querySelector("[data-out-note]");
      if (note) note.textContent = note.dataset.template.replace("[name]", d.name.toLowerCase());
    }
  });
}
