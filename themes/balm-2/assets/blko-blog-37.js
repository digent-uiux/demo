// blog-37 (preview only; on a blog page the pager is links): the post blocks are paged in the browser, `per` a page.
// Each block already carries its page number and its place on the wall (lead / w1..w5), so paging only shows a page.
(() => {
  const pad = (n) => String(n).padStart(2, '0');
  function init(root) {
    const pager = root.querySelector('[data-pager]');
    if (!pager || root.dataset.bound) return; root.dataset.bound = '1';
    const items = [...root.querySelectorAll('[data-wall] > [data-page]')];
    const per = +pager.dataset.per || 6, total = +pager.dataset.total || items.length, pages = Math.max(1, Math.ceil(total / per));
    const prev = pager.querySelector('[data-prev]'), next = pager.querySelector('[data-next]'), count = pager.querySelector('[data-count]');
    const btns = [...pager.querySelectorAll('[data-goto]')];
    let page = 1;
    const draw = () => {
      items.forEach((li) => { li.hidden = +li.dataset.page !== page; });
      btns.forEach((b) => { if (+b.dataset.goto === page) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
      prev.disabled = page <= 1; next.disabled = page >= pages;
      const a = (page - 1) * per + 1, z = Math.min(total, page * per);
      if (count) count.textContent = count.dataset.t.replace('[a]', pad(a)).replace('[b]', pad(z)).replace('[t]', total);
    };
    btns.forEach((b) => b.addEventListener('click', () => { page = +b.dataset.goto; draw(); }));
    prev.addEventListener('click', () => { page--; draw(); });
    next.addEventListener('click', () => { page++; draw(); });
    draw();
  }
  const all = () => document.querySelectorAll('.bblog37').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
