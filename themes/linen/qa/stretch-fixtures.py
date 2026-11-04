from pathlib import Path
from copy import deepcopy
import json
b=Path(__file__).parent
photos=['https://images.unsplash.com/photo-1713881604560-085594ed2c3d','https://images.unsplash.com/photo-1713881842156-3d9ef36418cc','https://images.unsplash.com/photo-1713881676551-b16f22ce4719']
media=lambda src,alt:dict(src=src,alt=alt)
c=json.loads((b/'filter-live-fixture.json').read_text());products=c['globals']['collection']['products']
for i,p in enumerate(products):
 p['featured_media']=media(photos[i],p['title']);p['images']=[p['featured_media'],media(photos[i]+'?crop=top&fit=crop&h=800',p['title']+' fabric detail')];p['type']='Linen'
 products[i]['selected_or_first_available_variant']['compare_at_price']=22000
 products[i]['variants'][0]['compare_at_price']=22000
sold=deepcopy(products[0]);sold.update(id=19,title='Gathered linen shirt',url='/products/gathered',available=False);sold['featured_media']=media(photos[2],sold['title']);sold['images']=[sold['featured_media']];sold['variants']=[dict(id=1901,options=['M'],price=9200,available=False)];sold['selected_or_first_available_variant']=sold['variants'][0];products.append(sold)
c['sectionSettings']={'blko-collection-grid-34':{'editorial_image':media('https://images.unsplash.com/photo-1767968037382-8eb9c564339f','A rail of linen garments'),'editorial_caption':'The rail, before the first fitting.','collection_menu':{'links':[{'title':'All clothing','url':'/collections/clothing','active':True},{'title':'Shirts','url':'/collections/shirts'}]}}}
(b/'stretch-collection-fixture.json').write_text(json.dumps(c,indent=2)+'\n')
p=json.loads((b/'product-live-fixture.json').read_text());product=p['globals']['product'];product['featured_media']=media(photos[0],'Chalk linen shirt on a branch');product['selected_or_first_available_variant']['featured_media']=product['featured_media'];product['variants'][0]['featured_media']=product['featured_media']
p['sectionSettings']={'blko-product-detail-27':{'care_details':'Wash cool. Dry in the shade. Smooth the collar while damp.','material_details':'Linen with a visible slub and a light, dry hand.','pairs_with':[dict(id=20,title='Blue flax shirt',url='/products/blue-flax',price=9800,featured_image=media(photos[1],'Blue flax shirt'))]}}
(b/'stretch-product-fixture.json').write_text(json.dumps(p,indent=2)+'\n')
s=json.loads((b/'search-results-fixture.json').read_text());s['sectionOnly']='blko-linen-predictive';resources=s['globals']['predictive_search']['resources'];resources['collections']=[dict(title='Linen shirts',url='/collections/linen-shirts')];resources['articles']=[dict(title='A quieter wash day',url='/blogs/journal/wash-day')];(b/'stretch-search-fixture.json').write_text(json.dumps(s,indent=2)+'\n')
