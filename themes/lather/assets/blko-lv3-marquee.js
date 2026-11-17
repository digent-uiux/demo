(() => {
  const init = () => {
    if (!document.documentElement.classList.contains('motion')) return;
    document.querySelectorAll('.s-cmt [data-cmt-list]').forEach(list => {
      if (list.dataset.cloned) return;
      list.dataset.cloned = '1';
      // the second copy makes the loop seamless; it is hidden from assistive tech
      const copy = list.cloneNode(true);
      copy.removeAttribute('data-cmt-list');
      copy.setAttribute('aria-hidden', 'true');
      list.after(copy);
      // a CSS rule hides [aria-hidden] copies in the static list; under motion show it
      copy.style.display = 'flex';
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', init);
})();
