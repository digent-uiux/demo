// Swatches 04: undertone filter (never hides the chosen shade from the try-on card), pick a card to paint the shade onto
// the demo lips (main photo and three skin tones; the colour crossfades in CSS), and add the matching product variant to the bag (/cart/add.js).
// With motion (html.blko-ui-motion, not reduced) the chip wall paints in when it scrolls into view.
if (!customElements.get("blko-swatches-04")) {
  customElements.define("blko-swatches-04", class extends HTMLElement {
    connectedCallback() {
      if (this.abort) return;
      this.abort = new AbortController();
      const on = { signal: this.abort.signal };
      this.aside = this.querySelector(".bswatches04__aside");
      this.add = this.querySelector("[data-add]");
      this.status = this.querySelector("[data-status]");
      this.lips = this.querySelectorAll("[data-lip]");
      this.reveal();
      this.current = this.querySelector('[data-shade][aria-pressed="true"]') || this.querySelector("[data-shade]");
      if (this.current) this.show(this.current);
      this.addEventListener("click", (e) => {
        const f = e.target.closest("[data-filter]");
        if (f) return this.filter(f);
        const c = e.target.closest("[data-shade]");
        if (c) return this.show(c);
        if (e.target.closest("[data-add]")) this.buy();
      }, on);
      // Theme Editor: selecting a shade block picks it.
      this.addEventListener("shopify:block:select", (e) => {
        const c = e.target.querySelector?.("[data-shade]");
        if (c) { e.target.hidden = false; this.show(c); }
      }, on);
    }

    disconnectedCallback() {
      this.abort?.abort();
      this.abort = null;
      clearTimeout(this.timer);
      this.io?.disconnect();
    }

    reveal() {
      const wall = this.querySelector("[data-stage]");
      if (!wall) return;
      const motion = document.documentElement.classList.contains("blko-ui-motion") && !matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!motion || !("IntersectionObserver" in window)) return wall.setAttribute("data-in", "");
      this.io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { wall.setAttribute("data-in", ""); this.io.disconnect(); }
      }, { rootMargin: "0px 0px -12% 0px" });
      this.io.observe(wall);
    }

    filter(btn) {
      const tone = btn.dataset.filter;
      this.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      this.querySelectorAll("[data-tone]").forEach((li) => { li.hidden = tone !== "all" && li.dataset.tone !== tone; });
    }

    label(key, name) {
      return (this.add?.dataset[key] || "").replace("[name]", name);
    }

    show(card) {
      this.current = card;
      this.querySelectorAll("[data-shade]").forEach((c) => c.setAttribute("aria-pressed", String(c === card)));
      const d = card.dataset;
      this.lips.forEach((l) => { l.style.backgroundColor = d.hex; });
      this.querySelector("[data-out-name]").textContent = d.name;
      this.querySelector("[data-out-meta]").textContent = d.meta;
      this.state();
    }

    state(text) {
      if (!this.add || !this.current) return;
      const d = this.current.dataset;
      const sold = d.variant && d.available === "false";
      this.add.disabled = !!sold;
      this.add.querySelector("[data-out-add]").textContent = text || this.label(sold ? "soldText" : "addText", d.name);
    }

    async buy() {
      const d = this.current?.dataset;
      if (!d) return;
      // No product on this section: the button is a link to the shop.
      if (!d.variant) { if (this.add.dataset.link) location.href = this.add.dataset.link; return; }
      this.add.disabled = true;
      try {
        const res = await fetch((window.Shopify?.routes?.root || "/") + "cart/add.js", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ items: [{ id: Number(d.variant), quantity: 1 }] }),
        });
        if (!res.ok) throw new Error(String(res.status));
        const msg = this.label("addedText", d.name);
        this.status.textContent = msg;
        this.state(msg);
        document.dispatchEvent(new CustomEvent("cart:refresh", { bubbles: true }));
      } catch {
        this.status.textContent = this.add.dataset.errorText || "";
        this.state();
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.state(), 2400);
    }
  });
}
