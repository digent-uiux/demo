// Header 01: the menu button opens and closes the folded menu; Escape closes it.
if (!customElements.get("blko-header-01")) {
  customElements.define("blko-header-01", class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "1";
      const btn = this.querySelector("[data-toggle]"), panel = this.querySelector("[data-panel]");
      if (!btn || !panel) return;
      const set = (open) => {
        panel.hidden = !open;
        btn.setAttribute("aria-expanded", open);
        btn.setAttribute("aria-label", open ? btn.dataset.closeLabel : btn.dataset.openLabel);
        btn.querySelector("[data-icon-open]").hidden = open;
        btn.querySelector("[data-icon-close]").hidden = !open;
      };
      btn.addEventListener("click", () => set(panel.hidden));
      this.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
    }
  });
}
