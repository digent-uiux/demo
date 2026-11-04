// collection-grid-44.
// Drawer: [data-open] (row button, mobile pill) opens the <dialog>; close button, backdrop click and Esc close it and
// reset unapplied changes (form.reset()). Clear unticks everything in the drawer. Live: ticking refreshes the
// "Show N" count through the Section Rendering API; Apply submits the GET form. Preview: Apply sorts the preview cards.
// Density: [data-density] buttons set root[data-density] (airy / dense), aria-pressed, remembered in localStorage. With
// the balm kit (and no reduced motion) the case re-racks: each compartment glides from its old box (FLIP, 700ms).
// Coordinates: each [data-co] reads its compartment's row letter + column number from the layout (A·1 …), refreshed on
// resize, density, sort and load more.
// Mobile pill: shown while the grid is in view and the row is not (IntersectionObserver); it only fades.
// Cards: [data-add] posts /cart/add.js with the variant id, then dispatches blko:cart:add (preview cards just confirm).
// Load more (live) appends the next page's cards via the Section Rendering API and moves the progress rule.
(() => {
  const pad = (n) => (n < 10 ? '0' : '') + n;
  const KEY = 'blko-cg44-density';
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    root.setAttribute('data-js', '');
    const live = root.dataset.live === 'true', PER = +root.dataset.per || 8;
    const $ = (s) => root.querySelector(s), $$ = (s, el) => [...(el || root).querySelectorAll(s)];
    const form = $('[data-ctl]'), grid = $('[data-grid]'), wrap = $('[data-more-wrap]'), more = $('[data-more]');
    const shownEl = $('[data-shown]'), fill = $('[data-fill]');
    const dlg = $('[data-dlg]'), nEl = $('[data-n]'), countEl = $('[data-count]');

    // Coordinates
    const coords = () => {
      if (!grid) return;
      const lis = [...grid.children].filter((li) => !li.hidden);
      const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
      const w = grid.clientWidth / cols;
      const tops = [...new Set(lis.map((li) => li.offsetTop))].sort((a, b) => a - b);
      lis.forEach((li) => {
        const c = li.querySelector(':scope > [data-co]');
        if (c) c.textContent = String.fromCharCode(65 + tops.indexOf(li.offsetTop)) + '\u00b7' + (Math.round(li.offsetLeft / w) + 1);
      });
    };
    if (grid && 'ResizeObserver' in window) new ResizeObserver(coords).observe(grid);

    // Density (+ the re-rack)
    const moving = () => document.documentElement.classList.contains('blko-kit-balm') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dens = $$('[data-density]').filter((b) => b.tagName === 'BUTTON');
    const setDensity = (v, save) => {
      const flip = save && grid && v !== root.dataset.density && moving();
      const was = flip ? new Map([...grid.children].map((li) => [li, li.getBoundingClientRect()])) : null;
      root.dataset.density = v;
      if (was) was.forEach((a, li) => {
        const b = li.getBoundingClientRect();
        if (!b.width || li.hidden) return;
        li.animate([{ transformOrigin: '0 0', transform: 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px) scale(' + a.width / b.width + ')' }, { transformOrigin: '0 0', transform: 'none' }], { duration: 700, easing: 'cubic-bezier(.16,1,.3,1)' });
      });
      coords();
      dens.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.density === v)));
      if (save) { try { localStorage.setItem(KEY, v); } catch (e) { /* storage blocked */ } }
    };
    try { const v = localStorage.getItem(KEY); if (v === 'airy' || v === 'dense') setDensity(v, false); } catch (e) { /* storage blocked */ }
    dens.forEach((b) => b.addEventListener('click', () => setDensity(b.dataset.density, true)));

    // Drawer
    let applying = false, t = 0, ctl = null;
    const recount = () => {
      if (!nEl) return;
      if (!live) { nEl.textContent = $$('[data-card]').length; return; }
      clearTimeout(t);
      t = setTimeout(async () => {
        if (ctl) ctl.abort();
        ctl = new AbortController();
        const q = new URLSearchParams();
        new FormData(form).forEach((v, k) => { if (v !== '') q.append(k, v); });
        q.set('section_id', root.dataset.section);
        try {
          const html = await (await fetch(form.action + '?' + q.toString(), { signal: ctl.signal })).text();
          const c = new DOMParser().parseFromString(html, 'text/html').querySelector('[data-count]');
          if (c && c.dataset.total) nEl.textContent = c.dataset.total;
        } catch (e) { /* keep the last count */ }
      }, 350);
    };
    if (dlg && form) {
      const open = () => { if (!dlg.open) dlg.showModal(); };
      $$('[data-open]').forEach((b) => b.addEventListener('click', open));
      const x = $('[data-close]'); if (x) x.addEventListener('click', () => dlg.close());
      dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
      dlg.addEventListener('close', () => { if (!applying) { form.reset(); if (nEl && countEl) nEl.textContent = countEl.dataset.total; } applying = false; });
      dlg.addEventListener('change', recount);
      dlg.addEventListener('input', (e) => { if (e.target.type === 'number') recount(); });
      const clear = $('[data-clear]');
      if (clear) clear.addEventListener('click', (e) => {
        e.preventDefault();
        $$('input[type="checkbox"]', dlg).forEach((i) => { i.checked = false; });
        $$('input[type="number"]', dlg).forEach((i) => { i.value = ''; });
        recount();
      });
      form.addEventListener('submit', (e) => {
        applying = true;
        if (!live) { e.preventDefault(); $$('input', form).forEach((i) => { i.defaultChecked = i.checked; }); draw(); dlg.close(); return; }
        $$('input[type="number"]', form).forEach((i) => { if (i.value === '') i.disabled = true; });
      });
    }

    // Mobile pill
    const pill = $('[data-fpill]'), row = $('[data-row]');
    if (pill && row && grid && 'IntersectionObserver' in window) {
      const seen = { row: true, grid: false };
      const io = new IntersectionObserver((es) => {
        es.forEach((e) => { seen[e.target === row ? 'row' : 'grid'] = e.isIntersecting; });
        const on = seen.grid && !seen.row;
        pill.classList.toggle('is-on', on);
        pill.setAttribute('aria-hidden', String(!on));
        pill.tabIndex = on ? 0 : -1;
      });
      io.observe(row); io.observe(grid);
    }

    // Add to bag
    root.addEventListener('click', async (e) => {
      const b = e.target.closest('[data-add]');
      if (!b || !root.contains(b) || b.getAttribute('aria-busy') === 'true') return;
      e.preventDefault();
      const card = b.closest('article');
      const pb = card && card.querySelector('.bcollectiongrid44__pbtn[data-add]'), plus = card && card.querySelector('.bcollectiongrid44__plus');
      const flash = (msg) => {
        const was = pb ? pb.textContent : '';
        if (pb) pb.textContent = msg;
        if (plus) plus.classList.add('is-added');
        setTimeout(() => { if (pb) pb.textContent = was; if (plus) plus.classList.remove('is-added'); }, 1800);
      };
      const id = Number(b.dataset.add);
      if (!id) { flash(root.dataset.added); return; }
      b.setAttribute('aria-busy', 'true');
      try {
        const base = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
        const r = await fetch(base + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: [{ id, quantity: 1 }] }) });
        if (!r.ok) throw new Error('cart');
        const detail = await r.json();
        document.dispatchEvent(new CustomEvent('blko:cart:add', { detail }));
        flash(root.dataset.added);
      } catch (x) { flash(root.dataset.error); }
      b.removeAttribute('aria-busy');
    });

    if (live) {
      if (more && wrap) {
        let next = wrap.dataset.next, shown = $$('[data-card]').length, total = 0;
        const m = (shownEl && shownEl.parentElement.textContent.match(/(\d+)\D+(\d+)/)); if (m) { shown = +m[1]; total = +m[2]; }
        more.addEventListener('click', async (e) => {
          e.preventDefault(); if (!next) return;
          more.setAttribute('aria-busy', 'true');
          try {
            const u = next + (next.includes('?') ? '&' : '?') + 'section_id=' + encodeURIComponent(root.dataset.section);
            const html = await (await fetch(u)).text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const cards = $$('[data-card]', doc);
            cards.forEach((c) => grid.appendChild(document.importNode(c, true)));
            coords();
            shown += cards.length;
            if (shownEl) shownEl.textContent = pad(shown);
            if (fill && total) fill.style.width = Math.round(shown / total * 100) + '%';
            const w2 = doc.querySelector('[data-more-wrap]');
            next = w2 ? w2.dataset.next : '';
            if (next) more.href = next; else more.hidden = true;
          } catch (x) { location.href = next; }
          more.removeAttribute('aria-busy');
        });
      }
      return;
    }
    // Preview: sort and Load more on the preview cards, like the DS.
    var items = $$('[data-card]'), tile = $('[data-tile]');
    var TILE = tile ? items.indexOf(tile.previousElementSibling) + 1 : 0;
    let upto = PER;
    function order() {
      const r = form && form.querySelector('input[name="sort_by"]:checked');
      const v = r ? r.value : 'manual';
      const l = items.slice();
      if (v === 'price-ascending') l.sort((a, b) => a.dataset.price - b.dataset.price || a.dataset.i - b.dataset.i);
      else if (v === 'price-descending') l.sort((a, b) => b.dataset.price - a.dataset.price || a.dataset.i - b.dataset.i);
      else if (v === 'created-descending') l.sort((a, b) => a.dataset.new - b.dataset.new || a.dataset.i - b.dataset.i);
      else l.sort((a, b) => a.dataset.i - b.dataset.i);
      return l;
    }
    function draw() {
      const l = order();
      l.forEach((c, i) => { grid.appendChild(c); c.hidden = i >= upto; if (tile && i === TILE - 1) grid.appendChild(tile); });
      const n = Math.min(upto, l.length);
      if (shownEl) shownEl.textContent = pad(n);
      if (fill) fill.style.width = Math.round(n / l.length * 100) + '%';
      if (wrap && more) more.hidden = upto >= l.length;
      if (wrap && upto >= l.length) wrap.hidden = true;
      coords();
    }
    if (more) more.addEventListener('click', (e) => { e.preventDefault(); upto = items.length; draw(); });
  }
  const all = () => document.querySelectorAll('[data-bcollectiongrid44]').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
