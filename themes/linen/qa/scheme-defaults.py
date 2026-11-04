"""Compare pre/post rendered markup, excluding stylesheet blocks and fixture path/title differences."""
import re
from pathlib import Path
before=Path('/tmp/linen-schemes-before-render');after=Path('/tmp/linen-schemes-after-render');root=str(Path('design-system/site/liquid/linen').resolve())
for p in sorted(before.glob('*.html')):
 a=p.read_text().replace('/tmp/linen-schemes-before','/THEME').replace('linen-schemes-before','linen');b=(after/p.name).read_text().replace(root,'/THEME')
 a=re.sub(r'<style\b[^>]*>.*?</style>','',a,flags=re.S);b=re.sub(r'<style\b[^>]*>.*?</style>','',b,flags=re.S)
 assert a==b,p.name+' markup changed'
 print(p.name,'BYTE-IDENTICAL markup')
