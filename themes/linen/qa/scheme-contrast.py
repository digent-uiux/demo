"""The shared tool checks primary surfaces; include alternate surfaces used by cards and inputs."""
from pathlib import Path
import importlib.util
p=Path(__file__).resolve().parents[2]/'_tools/theme-schemes.py';spec=importlib.util.spec_from_file_location('schemes',p);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
_,schemes,_,_=m.load('linen')
for sid,c in schemes.items():
 values={f'{role}/{surface}':m.contrast(c[role],c[surface])for role in ['text','text_muted']for surface in ['background','background_alt']}
 values.update({'button/background':m.contrast(c['button'],c['background']),'button/alternate':m.contrast(c['button'],c['background_alt']),'label/button':m.contrast(c['button_label'],c['button'])})
 for key,value in values.items():assert value >= (3 if key.startswith('button/') else 4.5),(sid,key,value)
 print(sid,'PASS',', '.join(f'{k}={v:.2f}'for k,v in values.items()))
