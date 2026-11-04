"""Linen captured-class adapters; run after shared theme-schemes.py linen. No shared tool mutation."""
from pathlib import Path
import importlib.util,json,re
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('shared_schemes',ROOT.parent/'_tools/theme-schemes.py');shared=importlib.util.module_from_spec(spec);spec.loader.exec_module(shared)
_,schemes,page,feeds=shared.load('linen')
count=0
for path in sorted((ROOT/'sections').glob('*.liquid')):
 text=path.read_text();match=re.search(r'({%[- ]*schema.*?%})(.*?)({%[- ]*endschema.*?%})',text,re.S)
 if not match: continue
 schema=json.loads(match[2]);settings=schema.get('settings',[])
 # Existing generic shell sections already expose a picker. Predictive is a render-only endpoint.
 if path.stem=='blko-linen-predictive': continue
 if any(x.get('id')=='color_scheme' for x in settings) and 'assign blko_sid =' not in text: continue
 cap=re.search(r'{%- capture blko_class -%}(.*?){%- endcapture -%}',text,re.S)
 if cap:
  prefix=re.match(r'b[a-z0-9]+',cap[1])[0]
 elif path.stem in ['blko-hero-57','blko-scroll-images-09']:
  prefix={'blko-hero-57':'bhero57','blko-scroll-images-09':'bscrollimages09'}[path.stem]
 elif path.stem=='blko-linen-cart': prefix='blko-linen-cart'
 else: raise RuntimeError(f'Unrecognized section without picker: {path.name}')
 # Shared nearest-surface logic needs its historical literal-root marker; inject in memory only.
 css=(ROOT/'assets'/f'{path.stem}.css').read_text() if (ROOT/'assets'/f'{path.stem}.css').exists() else ''
 fake=text+' class="'+prefix+'" data-tokens="{{ s.tokens }}"'
 sid,why=('scheme-1','drawer ground') if prefix=='blko-linen-cart' else shared.default_scheme(fake,css,schemes,page,feeds)
 if path.stem=='blko-footer-06': sid,why='scheme-5','footer band'
 if path.stem=='blko-linen-cart': sid,why='scheme-1','drawer ground'
 line=f"  assign blko_sid = s.color_scheme.id | default: s.color_scheme | default: '{sid}'"
 if 'assign blko_sid =' in text: text=re.sub(r'  assign blko_sid = [^\n]*',line,text,count=1)
 elif '  assign s = section.settings\n' in text: text=text.replace('  assign s = section.settings\n','  assign s = section.settings\n'+line+'\n',1)
 else: text="{%- liquid\n  assign s = section.settings\n"+line+"\n-%}"+text
 pick="{% if blko_sid != '"+sid+"' %} color-{{ blko_sid }} blko-scheme-pick{% endif %}"
 # Remove only this adapter's previously emitted condition before re-applying.
 text=re.sub(r"{% if blko_sid != 'scheme-\d+' %} color-{{ blko_sid }} blko-scheme-pick{% endif %}",'',text)
 if cap:
  text=re.sub(r'({%- capture blko_class -%}.*?)(?={%- endcapture -%})',lambda m:m[1]+pick,text,count=1,flags=re.S)
 elif prefix=='blko-linen-cart': text=text.replace('class="blko-linen-dialog blko-linen-cart"','class="blko-linen-dialog blko-linen-cart'+pick+'"',1)
 else: text=text.replace(prefix+'--theme{% endif %}"',prefix+'--theme{% endif %}'+pick+'"',1)
 match=re.search(r'({%[- ]*schema.*?%})(.*?)({%[- ]*endschema.*?%})',text,re.S)
 settings=[x for x in settings if x.get('id')!='color_scheme'];at=next((i+1 for i,x in enumerate(settings) if x.get('id')=='tokens'),0)
 settings.insert(at,{'type':'color_scheme','id':'color_scheme','label':'t:blko.linen.color_scheme','default':sid})
 schema['settings']=settings;text=text[:match.start(2)]+'\n'+json.dumps(schema,indent=2,ensure_ascii=False)+'\n'+text[match.end(2):];path.write_text(text)
 count+=1;print(path.stem,sid,why)
print(count,'Linen sections adapted')

# Keep Linen-only aliases when the coordinator's shared generator is rerun.
p=ROOT/'snippets/blko-color-schemes.liquid'
base=p.read_text().split('<style>\n  /* Linen')[0].rstrip()
p.write_text(re.sub(r'</style>\s*<style','</style><style',base+(ROOT/'qa/section-scheme-overrides.liquid').read_text().rstrip()))
