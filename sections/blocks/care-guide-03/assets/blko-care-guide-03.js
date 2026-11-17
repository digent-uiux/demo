// Care guide 03: single-open accordion (aria-expanded + hidden), editor block select, and the scroll reveal arm
// (oak photo unclips, open panel bars fill; CSS replays the panel reveal on every open). Static = final frame.
(()=>{
  const motionOn=()=>document.documentElement.classList.contains('blko-ui-motion');
  const arm=(root)=>{
    const band=root.querySelector('[data-cg3]');
    if(!band||band.dataset.armed!==undefined||!motionOn()||!('IntersectionObserver' in window))return;
    band.setAttribute('data-armed','');
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){band.setAttribute('data-in','');io.disconnect();}},{threshold:.2});
    io.observe(band);
  };
  const init=(scope=document)=>{
    scope.querySelectorAll('[data-bcareguide03]').forEach(root=>{
      arm(root);
      if(root.dataset.ready)return;root.dataset.ready='true';
      const items=[...root.querySelectorAll('[data-item]')];
      const set=(item,open)=>{
        items.forEach(it=>{
          const on=it===item&&open,btn=it.querySelector('[data-toggle]'),panel=it.querySelector('[role=region]');
          if(btn)btn.setAttribute('aria-expanded',String(on));
          if(panel)panel.hidden=!on;
        });
      };
      items.forEach(it=>{
        const btn=it.querySelector('[data-toggle]');
        btn&&btn.addEventListener('click',()=>set(it,btn.getAttribute('aria-expanded')!=='true'));
        it.addEventListener('shopify:block:select',()=>set(it,true));
      });
    });
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init());else init();
  document.addEventListener('shopify:section:load',e=>init(e.target));
})();
