from pathlib import Path
import importlib.util,tempfile,json,re
spec=importlib.util.spec_from_file_location('s','design-system/site/liquid/_tools/theme-schemes.py');m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
_,ss,page,feeds=m.load('linen')
with tempfile.TemporaryDirectory() as d:
 for name in ['blko-featured-products-49','blko-scroll-images-09','blko-linen-cart']:
  src=Path('design-system/site/liquid/linen/sections/'+name+'.liquid').read_text();src=m.PICK_RE.sub('',src);src=re.sub(r'  assign blko_sid = [^\n]*\n','',src);match=re.search(r'{% schema %}(.*?){% endschema %}',src,re.S);j=json.loads(match[1]);j['settings']=[x for x in j['settings']if x.get('id')!='color_scheme'];src=src[:match.start(1)]+'\n'+json.dumps(j,indent=2)+'\n'+src[match.end(1):];p=Path(d)/(name+'.liquid');p.write_text(src);assert m.patch(str(p),'design-system/site/liquid/linen/assets/'+name+'.css',ss,page,feeds);first=p.read_bytes();assert p.read_text().count('blko-scheme-pick')==1;assert m.patch(str(p),'design-system/site/liquid/linen/assets/'+name+'.css',ss,page,feeds);assert first==p.read_bytes();print(name,'fresh picker and idempotence PASS')
 _,rs,rpage,rfeeds=m.load('roast');src=Path('design-system/site/liquid/roast/sections/blko-marquee-gsap-05.liquid');p=Path(d)/'roast.liquid';p.write_bytes(src.read_bytes());m.patch(str(p),'design-system/site/liquid/roast/assets/blko-marquee-gsap-05.css',rs,rpage,rfeeds);assert p.read_bytes()==src.read_bytes();print('Roast literal root unchanged PASS')
