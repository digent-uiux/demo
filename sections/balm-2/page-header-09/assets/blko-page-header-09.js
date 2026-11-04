// page-header-09: question search over the FAQ answers on the page ([id^="balm-faq-"][data-faq-q], e.g. faq-37).
// Every term must match; up to four ruled links to the answers' anchors; Esc clears; suggestion words fill the field.
(() => {
  function init(root) {
    if (root.dataset.bound) return; root.dataset.bound = '1';
    const box = root.querySelector('[data-search]'); if (!box) return;
    const q = box.querySelector('[data-q]'), clear = box.querySelector('[data-clear]'), count = box.querySelector('[data-count]');
    const hits = box.querySelector('[data-hits]'), sugg = box.querySelector('[data-sugg]'), tpl = box.querySelector('template[data-hit]'), none = box.querySelector('template[data-none]');
    const list = () => [...document.querySelectorAll('[id^="balm-faq-"][data-faq-q]')].map((el) => ({ id: el.id, q: el.dataset.faqQ, ch: el.dataset.faqCh || '' }));
    const run = () => {
      const s = q.value.trim().toLowerCase();
      clear.hidden = !q.value;
      hits.textContent = '';
      if (!s) { count.textContent = ''; hits.hidden = true; if (sugg) sugg.hidden = false; return; }
      const terms = s.split(/\s+/);
      const found = list().filter((x) => terms.every((t) => x.q.toLowerCase().includes(t)));
      if (found.length) {
        count.textContent = (found.length === 1 ? box.dataset.tOne : box.dataset.tMany.replace('{n}', found.length)) + (found.length > 4 ? box.dataset.tFirst : '') + '.';
        found.slice(0, 4).forEach((x) => {
          const li = tpl.content.firstElementChild.cloneNode(true);
          li.querySelector('a').href = '#' + x.id;
          li.querySelector('.bpageheader09__no').textContent = x.ch ? box.dataset.tNo + ' ' + x.ch : '';
          li.querySelector('.bpageheader09__q').textContent = x.q;
          hits.append(li);
        });
        hits.hidden = false; if (sugg) sugg.hidden = true;
      } else {
        count.innerHTML = none.innerHTML;
        hits.hidden = true; if (sugg) sugg.hidden = false;
      }
    };
    q.addEventListener('input', run);
    q.addEventListener('keydown', (e) => { if (e.key === 'Escape') { q.value = ''; run(); } });
    clear.addEventListener('click', () => { q.value = ''; run(); q.focus(); });
    box.querySelectorAll('[data-word]').forEach((b) => b.addEventListener('click', () => { q.value = b.dataset.word; run(); q.focus(); }));
  }
  const all = () => document.querySelectorAll('.bpageheader09').forEach(init);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', all); else all();
  document.addEventListener('shopify:section:load', all);
})();
