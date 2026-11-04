from pathlib import Path
import json,re,shutil,sys
id=sys.argv[1];base=Path('design-system/site/liquid');b=base/'blocks'/id;t=base/'linen';p=b/'sections'/('blko-'+id+'.liquid');s=p.read_text();needle="{{ 'blko-ui-core.css' | asset_url | stylesheet_tag }}";kit='''<script data-blko-kit="linen">try { if (!new URLSearchParams(location.search).has('static') && !navigator.webdriver && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('blko-kit-linen'); } catch (e) {}</script>
{{ 'blko-linen-motion.css' | asset_url | stylesheet_tag }}
<script src="{{ 'blko-linen-motion.js' | asset_url }}" defer="defer"></script>'''
if 'data-blko-kit="linen"' not in s:s=s.replace(needle,needle+'\n'+kit)
p.write_text(s)
for f in ['blko-linen-motion.css','blko-linen-motion.js']:shutil.copyfile(t/'assets'/f,b/'assets'/f)
for folder in ['sections','assets','snippets']:
 for f in (b/folder).glob('blko-'+id+'*'):shutil.copyfile(f,t/folder/f.name)
p=t/'locales/en.default.json';loc=json.loads(p.read_text());new=json.loads((b/'locales/en.default.blko.json').read_text()) if (b/'locales/en.default.blko.json').exists() else {};loc.setdefault('blko',{}).update(new.get('blko',{}));p.write_text(json.dumps(loc,indent=2,ensure_ascii=False)+'\n')
schema=json.loads(re.search(r'{% schema %}([\s\S]*?){% endschema %}',s).group(1));presets=schema.get('presets',[{}])[0].get('blocks',[])
for p in (t/'templates').glob('*.json'):
 data=json.loads(p.read_text());changed=False
 for section in data.get('sections',{}).values():
  if section.get('type')!='blko-'+id:continue
  for key,preset in zip(section.get('block_order',[]),presets):
   block=section['blocks'][key]
   if block['type']==preset.get('type'):
    for k,v in preset.get('settings',{}).items():
     if k not in block['settings']:block['settings'][k]=v;changed=True
 if changed:p.write_text(json.dumps(data,indent=2,ensure_ascii=False)+'\n')
