// Recommendations 07: arrows scroll the rail by 80% of its width, the bar follows the scroll, quick add posts the
// card's variant to /cart/add.js. The tapes hold still with ?static in the URL.
if (!customElements.get("blko-recommendations-07")) {
  customElements.define("blko-recommendations-07", class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "1";
      if (location.search.includes("static")) this.querySelectorAll("[data-run]").forEach((r) => r.classList.add("is-still"));
      const track = this.querySelector("[data-track]");
      const thumb = this.querySelector("[data-thumb]");
      const sync = () => {
        const p = track.scrollLeft / Math.max(1, track.scrollWidth - track.clientWidth);
        thumb.style.marginLeft = `${p * 75}%`;
      };
      track.addEventListener("scroll", sync, { passive: true });
      this.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => {
        track.scrollBy({ left: +b.dataset.step * track.clientWidth * 0.8, behavior: "smooth" });
      }));
      this.addEventListener("blko-ui:quick-add", (e) => this.add(e.detail));
    }

    async add({ variantId, card }) {
      if (!variantId) return;
      const items = [{ id: Number(variantId), quantity: 1 }];
      try {
        const r = await fetch((window.Shopify?.routes?.root || "/") + "cart/add.js", {
          method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ items }),
        });
        if (!r.ok) return;
        document.dispatchEvent(new CustomEvent("blko:cart:add", { detail: { items } }));
        const say = this.querySelector("[data-say]");
        say.textContent = say.dataset.added.replace("[title]", card?.querySelector("h3")?.textContent.trim() || "");
      } catch { /* the card stays as it was */ }
    }
  });
}
