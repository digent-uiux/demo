// Wishlist 01: pick a shade and a size per tile (price, compare price, "Back in stock" and sold-out follow the variant),
// filter the grid, remove with undo, "Move to bag" (real variants post to /cart/add.js), "Notify me" for an out shade,
// copy the list link. The list card's count, value and drops follow the tiles still on the list.
// Kept in this browser: removed tiles (localStorage "blko-wishlist-hidden"), notify picks ("blko-notify").
if (!customElements.get("blko-wishlist-01")) {
  customElements.define("blko-wishlist-01", class extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = "1";
      this.filter = 0;
      this.removed = null;
      this.tiles = [...this.querySelectorAll("[data-tile]")];
      const hidden = this.store("blko-wishlist-hidden");
      this.tiles.forEach((t) => { if (hidden.includes(t.dataset.tile)) t.dataset.gone = "1"; this.update(t, true); });
      this.addEventListener("click", (e) => this.onClick(e));
      this.addEventListener("blko-ui:change", (e) => {
        if (e.target.matches("blko-ui-tabs")) { this.filter = e.detail.index; this.render(); }
      });
      if (hidden.length) this.render();
    }

    store(key, next) {
      try {
        if (next) localStorage.setItem(key, JSON.stringify(next));
        return JSON.parse(localStorage.getItem(key) || "[]");
      } catch { return next || []; }
    }

    money(cents) {
      const fmt = this.dataset.moneyFormat || "${{amount}}";
      const whole = cents % 100 === 0;
      const n = (cents / 100).toLocaleString("en-US", { minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: whole ? 0 : 2 });
      return fmt.replace(/\{\{\s*(\w+)\s*\}\}/, (_, k) => (k.includes("comma") ? n.replace(/,/g, "_").replace(/\./g, ",").replace(/_/g, ".") : n));
    }

    combo(t) {
      return t.querySelector(`[data-price="${t.dataset.shade}-${t.dataset.size}"]`) || t.querySelector("[data-price]");
    }

    // Variant of the tile's current picks: price slot, sold-out note, badge, which button shows.
    update(t, first) {
      const c = this.combo(t);
      const out = c.dataset.out === "1";
      if (!first) t.querySelector("[data-price-slot]").innerHTML = c.innerHTML;
      const dot = t.querySelector(`[data-pick-shade="${t.dataset.shade}"]`);
      if (dot) {
        t.querySelector("[data-shade-name]").textContent = dot.dataset.label;
        t.querySelector("[data-out]").hidden = !out;
        t.querySelector("[data-back-badge]").hidden = dot.dataset.back !== "1";
      }
      t.querySelector("[data-move]").hidden = out;
      t.querySelector("[data-notify-wrap]").hidden = !out;
      const key = `${t.dataset.tile}-${c.dataset.id || t.dataset.shade}`;
      this.notifyState(t, this.store("blko-notify").includes(key));
    }

    notifyState(t, on) {
      const b = t.querySelector("[data-notify]");
      b.setAttribute("aria-pressed", on);
      b.classList.toggle("blko-ui-button--secondary", on);
      b.classList.toggle("blko-ui-button--outline", !on);
      b.querySelector("[data-i-off]").hidden = on; b.querySelector("[data-i-on]").hidden = !on;
      b.querySelector("[data-t-off]").hidden = on; b.querySelector("[data-t-on]").hidden = !on;
    }

    match(t) {
      return [true, t.dataset.drop === "true", t.dataset.back === "true", t.dataset.low === "true"][this.filter] ?? true;
    }

    // Visibility, the count line, the empty state and the list card's figures.
    render() {
      const live = this.tiles.filter((t) => !t.dataset.gone);
      let shown = 0, value = 0, dropped = 0;
      live.forEach((t) => {
        const c = this.combo(t), p = +c.dataset.p, was = +c.dataset.c;
        value += p;
        if (was > p) dropped += was - p;
      });
      this.tiles.forEach((t) => {
        const on = !t.dataset.gone && this.match(t);
        t.hidden = !on;
        if (on) shown++;
      });
      this.querySelector("[data-count]").textContent = this.dataset.shown.replace("[n]", shown).replace("[total]", live.length);
      const empty = this.querySelector("[data-empty]");
      empty.hidden = shown > 0;
      this.querySelector("[data-grid]").hidden = shown === 0;
      const tab = this.querySelectorAll("blko-ui-tabs [role=tab]")[this.filter];
      this.querySelector("[data-empty-text]").textContent = this.dataset.none.replace("[filter]", tab ? tab.textContent.trim() : "");
      this.querySelector("[data-n]").textContent = live.length;
      this.querySelector("[data-value]").textContent = this.money(value);
      this.querySelector("[data-dropped]").textContent = this.money(dropped);
    }

    say(tpl, name) { this.querySelector("[data-say]").textContent = this.dataset[tpl].replace("[name]", name); }

    remove(t, toBag) {
      t.dataset.gone = "1";
      const list = this.store("blko-wishlist-hidden").filter((x) => x !== t.dataset.tile);
      this.store("blko-wishlist-hidden", [...list, t.dataset.tile]);
      const undo = this.querySelector("[data-undo]");
      if (toBag) { this.removed = null; undo.hidden = true; this.say("moved", t.dataset.name); }
      else {
        this.removed = t;
        this.querySelector("[data-undo-name]").textContent = t.dataset.name;
        undo.hidden = false;
        this.say("removed", t.dataset.name);
      }
      this.render();
    }

    async toBag(t, btn) {
      const id = this.combo(t).dataset.id;
      if (id) {
        btn.disabled = true;
        try {
          const items = [{ id: Number(id), quantity: 1 }];
          const r = await fetch((window.Shopify?.routes?.root || "/") + "cart/add.js", {
            method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ items }),
          });
          if (!r.ok) throw new Error();
          document.dispatchEvent(new CustomEvent("blko:cart:add", { detail: { items } }));
        } catch { btn.disabled = false; return; }
        btn.disabled = false;
      }
      this.remove(t, true);
    }

    async copy(btn) {
      try { await navigator.clipboard?.writeText(this.dataset.share || location.href); } catch { /* the link stays in the address bar */ }
      const flip = (done) => {
        btn.querySelector("[data-i-copy]").hidden = done; btn.querySelector("[data-i-done]").hidden = !done;
        btn.querySelector("[data-t-copy]").hidden = done; btn.querySelector("[data-t-done]").hidden = !done;
      };
      flip(true);
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => flip(false), 2000);
    }

    onClick(e) {
      const t = e.target.closest("[data-tile]");
      const shade = e.target.closest("[data-pick-shade]");
      const size = e.target.closest("[data-pick-size]");
      if (t && shade) { t.dataset.shade = shade.dataset.pickShade; this.update(t); this.render(); return; }
      if (t && size) { t.dataset.size = size.dataset.pickSize; this.update(t); this.render(); return; }
      if (t && e.target.closest("[data-remove]")) return this.remove(t);
      const bag = e.target.closest("[data-to-bag]");
      if (t && bag) return this.toBag(t, bag);
      if (t && e.target.closest("[data-notify]")) {
        const key = `${t.dataset.tile}-${this.combo(t).dataset.id || t.dataset.shade}`;
        const list = this.store("blko-notify");
        const on = !list.includes(key);
        this.store("blko-notify", on ? [...list, key] : list.filter((x) => x !== key));
        return this.notifyState(t, on);
      }
      if (e.target.closest("[data-undo-btn]") && this.removed) {
        const r = this.removed;
        delete r.dataset.gone;
        this.store("blko-wishlist-hidden", this.store("blko-wishlist-hidden").filter((x) => x !== r.dataset.tile));
        this.removed = null;
        this.querySelector("[data-undo]").hidden = true;
        this.say("restored", r.dataset.name);
        return this.render();
      }
      if (e.target.closest("[data-all]")) {
        const tab = this.querySelector("blko-ui-tabs [role=tab]");
        if (tab) tab.click();
        return;
      }
      const copy = e.target.closest("[data-copy]");
      if (copy) this.copy(copy);
    }
  });
}
