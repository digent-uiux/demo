from PIL import Image,ImageDraw
from pathlib import Path
p=Path(__file__).resolve().parent/'frames/schemes/motion'
for w in [1440,390]:
 for pick in ['dark','light']:
  thumb=450 if w==1440 else 300;h=round(900*thumb/w);out=Image.new('RGB',(thumb*4,(h+24)*3),'white');draw=ImageDraw.Draw(out)
  for row,prefix in enumerate(['bhero57','bfeaturedproducts49','bnewsletter52']):
   for col,t in enumerate(['0','300','800','scroll']):
    im=Image.open(p/f'{w}-{pick}-{prefix}-{t}.png').convert('RGB').resize((thumb,h));x,y=col*thumb,row*(h+24);draw.text((x+4,y+4),prefix+' '+t,fill='black');out.paste(im,(x,y+24))
  out.save(f'/tmp/linen-schemes-{w}-{pick}.jpg')
