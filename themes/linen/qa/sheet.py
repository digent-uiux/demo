from PIL import Image,ImageDraw
from pathlib import Path
import sys
id=sys.argv[1]
for w in [1440,390]:
 d=Path('design-system/site/liquid/linen/qa/frames')/id/str(w);cw=420 if w==1440 else 220;ch=round(900*cw/w);s=Image.new('RGB',(cw*4,(ch+22)*2),'white');dr=ImageDraw.Draw(s)
 for r,m in enumerate(['ds','liquid']):
  for c,f in enumerate(['load-0ms','load-300ms','load-800ms','scroll-800ms']):
   im=Image.open(d/f'{m}-{f}.png');im.thumbnail((cw,ch));s.paste(im,(c*cw,r*(ch+22)+22));dr.text((c*cw+4,r*(ch+22)+3),m+' '+f,fill='black')
 s.save('/tmp/linen-'+id+'-'+str(w)+'.jpg')
