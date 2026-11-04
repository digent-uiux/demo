from pathlib import Path
import json,copy,html
base=Path(__file__).resolve().parent
request={'host':'linen.example','design_mode':False,'page_type':'page'}
def save(name,globals=None,forms=None,template=None):
 r={'globals':{'request':request,**(globals or {})}}
 if forms:r['forms']=forms
 if template:r['template']=template
 (base/(name+'-fixture.json')).write_text(json.dumps(r,indent=2)+'\n')
error={'messages':{'email':'Email could not be accepted.'},'translated_fields':{'email':'email'}}
success={'posted_successfully':True,'posted_successfully?':True}
save('audit-login');save('audit-recover-error',forms={'recover_customer_password':{'errors':error}});save('audit-recover-success',forms={'recover_customer_password':success})
save('audit-newsletter-error',forms={'customer':{'errors':error}});save('audit-newsletter-success',forms={'customer':success});save('audit-contact-error',forms={'contact':{'errors':error}});save('audit-contact-success',forms={'contact':success})
for key,form in [('register','create_customer'),('activate','activate_customer_password'),('reset','reset_customer_password')]:save('audit-'+key+'-error',forms={form:{'errors':error}})
options=''.join('<option value="'+name+'" data-provinces="'+html.escape(json.dumps(provinces),quote=True)+'">'+name+'</option>'for name,provinces in [('Canada',[['Ontario','Ontario'],['Quebec','Quebec']]),('Singapore',[])])
address={'id':101,'name':'Avery Example','first_name':'Avery','last_name':'Example','address1':'1 Sample Street','city':'Montreal','country':'Canada','province':'Quebec','zip':'H1A 0A1'}
customer={'name':'Avery Example','email':'avery@example.test','orders_count':1,'addresses_count':1,'default_address':address,'addresses':[address], 'new_address':{'country':'Canada','province':'Ontario'}}
line={'id':1702,'title':'Washed linen shirt','variant':{'title':'Oat / M'},'product':{'title':'Washed linen shirt'},'quantity':3,'price':1750,'final_price':1750,'original_price':2000,'line_price':5251,'final_line_price':5251,'original_line_price':6000,'discount_allocations':[]}
order={'id':1001,'name':'#1001','created_at':'2026-11-01','line_items':[line],'line_items_subtotal_price':5251,'subtotal_price':5251,'total_price':5251,'total_net_amount':5251,'total_refunded_amount':0,'financial_status_label':'Paid','fulfillment_status_label':'Unfulfilled','billing_address':address,'shipping_address':address,'shipping_methods':[],'tax_lines':[]}
save('audit-addresses',{'customer':customer,'all_country_option_tags':options});save('audit-order',{'customer':customer,'order':order})
card={'initial_value':5000,'balance':2500,'enabled':True,'expired':False,'code':'TEST000000000001','qr_identifier':'fixture-gift-card-token','pass_url':'https://example.test/wallet'}
save('audit-gift',{'gift_card':card},template='gift_card');card=copy.deepcopy(card);card['expired']=True;card['balance']=0;save('audit-gift-expired',{'gift_card':card},template='gift_card')
