// Trust badges 05: the picker swaps photo, name and claims (and points the link at that product); a claim tile opens its
// explanation under the tiles, a second tap, the close button or Escape shuts it and puts focus back on the tile.
if (!customElements.get("blko-trust-badges-05")) {
  customElements.define("blko-trust-badges-05", class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "1";
      this.pop = this.querySelector("[data-pop]");
      this.open = null;
      this.addEventListener("click", (e) => {
        const pick = e.target.closest("[data-pick]");
        if (pick) return this.show(pick.dataset.pick);
        const tile = e.target.closest("[data-claim]");
        if (tile) return tile === this.open ? this.close(true) : this.expand(tile);
        if (e.target.closest("[data-close]")) this.close(true);
      });
      this.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.open) { e.preventDefault(); this.close(true); }
      });
    }

    show(i) {
      this.close(false);
      this.querySelectorAll("[data-pick]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.pick === i));
      this.querySelectorAll("[data-media]").forEach((m) => { m.hidden = m.dataset.media !== i; });
      this.querySelectorAll("[data-panel]").forEach((p) => {
        p.hidden = p.dataset.panel !== i;
        if (!p.hidden && p.dataset.url) { const a = this.querySelector(".blko-tb05__link"); if (a) a.href = p.dataset.url; }
      });
    }

    expand(tile) {
      if (this.open) this.open.setAttribute("aria-expanded", "false");
      this.open = tile;
      tile.setAttribute("aria-expanded", "true");
      this.pop.querySelector("[data-pop-title]").textContent = tile.dataset.title;
      this.pop.querySelector("[data-pop-body]").textContent = tile.dataset.body;
      this.pop.setAttribute("aria-label", tile.dataset.title);
      this.pop.hidden = false;
    }

    close(focus) {
      if (!this.open) return;
      const tile = this.open;
      this.open = null;
      tile.setAttribute("aria-expanded", "false");
      this.pop.hidden = true;
      this.pop.setAttribute("aria-label", this.pop.dataset.label);
      if (focus) tile.focus();
    }
  });
}
