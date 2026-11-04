from pathlib import Path
from copy import deepcopy
import json
base=Path('design-system/site/liquid/linen');variant=dict(id=1702,title='Oat / M',options=['Oat','M'],price=2000,available=True,quantity_rule=dict(min=1,max=10,increment=1))
product=dict(id=17,title='Washed linen shirt',has_only_default_variant=False,url='/products/linen-shirt',options_with_values=[dict(name='Colour',values=['Oat'],position=1),dict(name='Size',values=['M'],position=2)],variants=[variant],selected_or_first_available_variant=variant)
a=dict(key='1702:gift',id=1702,title=product['title'],url='/products/linen-shirt?variant=1702',product=product,variant=variant,quantity=3,final_price=1750,final_line_price=5251,original_line_price=6000,properties={'Gift':'Yes'},line_level_discount_allocations=[dict(discount_application=dict(title='Studio welcome'),amount=749)])
b=deepcopy(a);b.update(key='1702:plain',quantity=1,final_line_price=1750,original_line_price=2000,properties={'Gift':'No'},line_level_discount_allocations=[dict(discount_application=dict(title='Studio welcome'),amount=250)])
for name,quantities,note in [('live',[3,1],''),('changed',[2,1],''),('removed',[2,0],''),('note',[2,0],'Please leave at reception.'),('empty',[0,0],'')]:
 lines=[]
 for item,q in zip([a,b],quantities):
  if not q:continue
  line=deepcopy(item);line['quantity']=q
  if name!='live':line['final_line_price']=q*1750;line['original_line_price']=q*2000
  line['line_level_discount_allocations']=[dict(discount_application=dict(title='Studio welcome'),amount=line['original_line_price']-line['final_line_price'])]
  lines.append(line)
 cart=dict(item_count=sum(quantities),items=lines,total_price=sum(x['final_line_price'] for x in lines),items_subtotal_price=sum(x['final_line_price'] for x in lines),original_total_price=sum(x['original_line_price'] for x in lines),total_discount=sum(x['original_line_price']-x['final_line_price'] for x in lines),attributes={},cart_level_discount_applications=[],note=note,taxes_included=False)
 fixture=dict(globals=dict(cart=cart,request=dict(host='linen.example',page_type='cart',path='/cart',design_mode=False,locale=dict(iso_code='en'))))
 (base/'qa'/('cart-'+name+'-fixture.json')).write_text(json.dumps(fixture,indent=2)+'\n')
