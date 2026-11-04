// faq-37: one answer open per chapter; the contents list marks the chapter in view and scrolls to it; a URL hash
// #balm-faq-<handle> (page-header-09's search, a shared link, a hashchange) opens that answer and centres it.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const toc = [...root.querySelectorAll('[data-toc]')];
    const setActive = (n) => toc.forEach((a) => { const on = a.dataset.toc === String(n); a.classList.toggle('is-on', on); on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); });
    const openQ = (btn, on) => {
      const chap = btn.closest('[data-chapter]');
      chap.querySelectorAll('[data-q]').forEach((b) => {
        const o = b === btn ? on : false;
        b.setAttribute('aria-expanded', String(o));
        const p = root.querySelector('#' + CSS.escape(b.getAttribute('aria-controls')));
        if (p) p.hidden = !o;
      });
      setActive(chap.dataset.chapter);
    };
    root.querySelectorAll('[data-q]').forEach((b) => b.addEventListener('click', () => openQ(b, b.getAttribute('aria-expanded') !== 'true')));
    toc.forEach((a) => a.addEventListener('click', (e) => {
      const t = root.querySelector('[data-chapter="' + a.dataset.toc + '"]'); if (!t) return;
      e.preventDefault(); setActive(a.dataset.toc); t.scrollIntoView({ block: 'start' });
    }));
    const fromHash = () => {
      let h = ''; try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
      if (!h.startsWith('balm-faq-')) return;
      const li = root.querySelector('#' + CSS.escape(h)); if (!li) return;
      const btn = li.querySelector('[data-q]'); if (!btn) return;
      openQ(btn, true);
      requestAnimationFrame(() => { li.scrollIntoView({ block: 'center' }); btn.focus({ preventScroll: true }); });
    };
    fromHash();
    addEventListener('hashchange', fromHash);
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((es) => {
        const hit = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.dataset.chapter);
      }, { rootMargin: '-30% 0px -60% 0px' });
      root.querySelectorAll('[data-chapter]').forEach((c) => io.observe(c));
    }
  }
  const all = () => document.querySelectorAll('.bfaq37').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
