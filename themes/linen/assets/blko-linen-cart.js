(() => {
  if (window.LinenCart) return;
  const section = 'blko-linen-cart';
  const drawer = () => document.querySelector('[data-linen-cart]');
  let tail = Promise.resolve(), trigger, overflow = '', closes = 0, focusIntent=null;
  const root = () => { const value = window.Shopify?.routes?.root || drawer()?.dataset.root || '/'; return value.endsWith('/') ? value : value + '/'; };
  const message = (text) => { const d=drawer(), node=d?.querySelector('[data-linen-cart-error]'); if(node){node.textContent=text;node.hidden=!text;} };
  const count = (value) => {
    document.querySelectorAll('[data-linen-count]').forEach(n=>{n.textContent=value;n.hidden=!value;});
    document.querySelectorAll('[data-linen-cart-open]').forEach(n=>{n.setAttribute('aria-label',value===1?n.dataset.countOne:n.dataset.countMany?.replace('[count]',value)||n.getAttribute('aria-label'));});
  };
  const open = (from) => {const d=drawer();if(!d?.showModal)return;trigger=from||document.activeElement;if(!d.open){overflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';d.showModal();d.querySelector('h2')?.focus();}};
  const close = () => drawer()?.close();
  const json = async (url, options) => {
    const r=await fetch(url,{...options,headers:{Accept:'application/json',...options?.headers}});
    const data=await r.json();if(!r.ok||Number(data.status)>=400)throw new Error(drawer()?.dataset.error||'');return data;
  };
  const render = (html) => {
    if(!html)return false;
    const doc=new DOMParser().parseFromString(html,'text/html'), fresh=doc.querySelector('[data-linen-cart-content]'),target=drawer()?.querySelector('[data-linen-cart-content]');
    if(!fresh||!target||!Number.isSafeInteger(Number(fresh.dataset.count)))return false;
    const active=document.activeElement,line=active?.closest('[data-linen-line]')?.dataset.key||(focusIntent?.scope==='drawer'?focusIntent.key:null),name=active?.getAttribute('name')||(focusIntent?.scope==='drawer'?focusIntent.name:null);
    target.hidden=false;target.replaceChildren(...fresh.childNodes);target.dataset.count=fresh.dataset.count;count(Number(fresh.dataset.count));
    if(line){const replacement=target.querySelector(`[data-key="${CSS.escape(line)}"] [name="${CSS.escape(name||'')}"]`);(replacement||drawer().querySelector('h2')).focus();}
    else if(name==='note')target.querySelector('[name=note]')?.focus();
    return true;
  };
  const pageRoot=()=>document.querySelector('blko-cart-page-13[data-live]');
  const ids=()=>[section,...(pageRoot()?.dataset.sectionId?[pageRoot().dataset.sectionId]:[])];
  const renderPage=html=>{
    const target=pageRoot();if(!target)return true;if(!html)return false;
    const fresh=new DOMParser().parseFromString(html,'text/html').querySelector('blko-cart-page-13[data-live]');if(!fresh)return false;
    const active=document.activeElement,key=active?.closest('[data-line]')?.dataset.key||(focusIntent?.scope==='page'?focusIntent.key:null),name=active?.getAttribute('name')||(focusIntent?.scope==='page'?focusIntent.name:null);
    target.replaceWith(fresh);
    if(key){const input=fresh.querySelector(`[data-key="${CSS.escape(key)}"] input[name="updates[]"]`);(input||fresh.querySelector('a'))?.focus({preventScroll:true});}
    else if(name)fresh.querySelector(`[name="${CSS.escape(name)}"]`)?.focus({preventScroll:true});
    return true;
  };
  const refresh = async (sections) => {
    const pageId=pageRoot()?.dataset.sectionId;
    let good=render(sections?.[section]),pageGood=!pageId||renderPage(sections?.[pageId]);
    if(!good||!pageGood){try{const data=await json(root()+'cart?sections='+ids().map(encodeURIComponent).join(','));if(!good)good=render(data[section]);if(!pageGood)pageGood=renderPage(data[pageId]);}catch{}}
    if(!good||!pageGood){try{const cart=await json(root()+'cart.js');count(cart.item_count);}catch{document.querySelectorAll('[data-linen-count]').forEach(n=>n.hidden=true);}
      message(drawer()?.dataset.refreshError||'');const fallback=drawer()?.querySelector('[data-linen-cart-fallback]');if(fallback)fallback.hidden=false;
      if(!good){const content=drawer()?.querySelector('[data-linen-cart-content]');if(content)content.hidden=true;}
      if(!pageGood){const page=pageRoot(),status=page?.querySelector('[data-linen-cart-status]');if(status){status.hidden=false;status.textContent=drawer()?.dataset.refreshError||'';}if(page){page.dataset.stale='true';page.querySelector('form').inert=true;page.querySelector('[data-linen-cart-page-fallback]').hidden=false;}}
    }else {message('');const fallback=drawer()?.querySelector('[data-linen-cart-fallback]');if(fallback)fallback.hidden=true;}
    document.dispatchEvent(new CustomEvent('linen:cart-updated',{detail:{rendered:good&&pageGood}}));return good&&pageGood;
  };
  const busy = on => {const d=drawer();d?.setAttribute('aria-busy',String(on));const fields=d?.querySelector('fieldset');if(fields)fields.disabled=on;
    const page=pageRoot();page?.setAttribute('aria-busy',String(on));page?.querySelectorAll('form input,form select,form textarea,form button').forEach(n=>{if(on){n.dataset.linenDisabled=n.disabled?'1':'0';n.disabled=true;}else if(n.dataset.linenDisabled!==undefined){n.disabled=n.dataset.linenDisabled==='1';delete n.dataset.linenDisabled;}});
  };
  const enqueue = job => {const current=tail.catch(()=>{}).then(job);tail=current;return current;};
  const mutate = (endpoint, payload, show=false) => {
    const closedAtStart=closes;
    return enqueue(async()=>{const active=document.activeElement;focusIntent={scope:active?.closest('[data-linen-cart]')?'drawer':'page',key:active?.closest('[data-linen-line],[data-line]')?.dataset.key,name:active?.getAttribute('name')};busy(true);message('');try{
      const data=await json(root()+'cart/'+endpoint+'.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,sections:ids(),sections_url:location.pathname.startsWith('/')?location.pathname:root()})});
      // A successful mutation stays successful if Section Rendering later fails; never invite a duplicate add.
      const rendered=await refresh(data.sections);if(show&&closes===closedAtStart)open();return {accepted:true,rendered,data};
    }catch(error){message(drawer()?.dataset.error||'');throw error;}finally{busy(false);if(document.activeElement===document.body&&focusIntent?.key){const scope=focusIntent.scope==='page'?pageRoot():drawer();if(scope&&(focusIntent.scope==='page'||scope.open))scope.querySelector(`[data-key="${CSS.escape(focusIntent.key)}"] [name="${CSS.escape(focusIntent.name||'')}"]`)?.focus({preventScroll:true});}focusIntent=null;}});
  };
  window.LinenCart={
    add:payload=>{if(!Array.isArray(payload.items)||payload.items.some(i=>!Number.isSafeInteger(Number(i.id))||Number(i.id)<=0||!Number.isSafeInteger(Number(i.quantity))||Number(i.quantity)<1))return Promise.reject(Error());return mutate('add',payload,true);},
    change:(id,quantity)=>{if(!id||!Number.isSafeInteger(quantity)||quantity<0)return Promise.reject(Error());return mutate('change',{id,quantity});},
    update:payload=>mutate('update',payload),refresh:()=>enqueue(()=>refresh()),open,close
  };
  document.addEventListener('click',event=>{
    const opener=event.target.closest('[data-linen-cart-open]');if(opener&&drawer()){event.preventDefault();open(opener);return;}
    if(event.target.closest('[data-linen-cart] [data-linen-close]'))close();
    const remove=event.target.closest('[data-linen-remove]');if(remove){event.preventDefault();if(drawer()?.getAttribute('aria-busy')==='true')return;window.LinenCart.change(remove.closest('[data-linen-line]').dataset.key,0).catch(()=>{});}
  });
  document.addEventListener('change',event=>{
    const input=event.target, line=input.closest('[data-linen-cart] [data-linen-line]');
    if(line&&input.matches('input[type=number]')){if(!input.checkValidity()||!Number.isInteger(Number(input.value))){input.reportValidity();return;}window.LinenCart.change(line.dataset.key,Number(input.value)).catch(()=>{if(input.isConnected)input.value=input.defaultValue;});}
    else if(input.matches('[data-linen-cart] [name=note]'))window.LinenCart.update({note:input.value}).catch(()=>{});
  });
  document.addEventListener('submit',async event=>{
    const form=event.target;if(event.defaultPrevented||event.submitter?.closest('.shopify-payment-button,shopify-accelerated-checkout')||!(form instanceof HTMLFormElement)||!form.matches('[data-linen-ajax-form]'))return;const fd=new FormData(form);if([...fd.values()].some(v=>v instanceof File&&v.size))return;event.preventDefault();if(form.dataset.pending)return;
    const id=Number(fd.get('id')),quantity=Number(fd.get('quantity')||1),selling_plan=fd.get('selling_plan');
    const button=form.querySelector('[type=submit]'),status=form.querySelector('[data-linen-add-status]');form.dataset.pending='true';if(button)button.disabled=true;
    try{const item={id,quantity};if(selling_plan)item.selling_plan=selling_plan;const properties={};for(const[k,v]of fd)if(k.startsWith('properties['))properties[k.slice(11,-1)]=v;if(Object.keys(properties).length)item.properties=properties;await window.LinenCart.add({items:[item]});if(status)status.textContent=form.dataset.added;}
    catch{if(status)status.textContent=drawer()?.dataset.error||'';}finally{delete form.dataset.pending;if(button)button.disabled=form.dataset.available==='false';}
  });
  function mount(){const d=drawer();if(!d||d.__linenBound)return;d.__linenBound=true;d.addEventListener('close',()=>{closes++;document.documentElement.style.overflow=overflow;trigger?.isConnected&&trigger.focus();});d.addEventListener('click',e=>{const r=d.getBoundingClientRect();if(e.target===d&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))close();});}
  mount();document.addEventListener('shopify:section:load',mount);document.addEventListener('shopify:section:unload',e=>{if(e.target.contains(drawer())&&drawer()?.open)close();});
  document.addEventListener('cart:refresh',()=>window.LinenCart.refresh().catch(()=>{}));
})();
