// Coupon 07: copy the code; the button shows a tick for 2 s and the status line tells screen readers.
if (!customElements.get("blko-coupon-07")) {
  customElements.define("blko-coupon-07", class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "1";
      const btn = this.querySelector("[data-copy]");
      const status = this.querySelector("[data-status]");
      btn?.addEventListener("click", async () => {
        try { await navigator.clipboard?.writeText(this.querySelector("[data-code]").textContent.trim()); } catch { /* the code stays visible */ }
        const flip = (done) => {
          btn.querySelector("[data-i-copy]").hidden = done;
          btn.querySelector("[data-i-done]").hidden = !done;
          btn.setAttribute("aria-label", done ? btn.dataset.doneLabel : btn.dataset.label);
          status.textContent = done ? status.dataset.text : "";
        };
        flip(true);
        clearTimeout(this.timer);
        this.timer = setTimeout(() => flip(false), 2000);
      });
    }
  });
}
