import json, sys, subprocess, numpy as np
SR=48000
IG='/Users/faseeh/Developer/Chatly/reference/ig'
def e20(p):
    raw=subprocess.run(["ffmpeg","-v","error","-i",p,"-ac","1","-ar",str(SR),"-f","f32le","-"],capture_output=True).stdout
    x=np.frombuffer(raw,dtype=np.float32); w=int(.02*SR); n=len(x)//w
    return 10*np.log10((x[:n*w].reshape(n,w)**2).mean(1)+1e-12)
rows=[]
for fn in sys.argv[1:]:
    rows+=json.load(open(fn))
out=[]
for r in rows:
    ev=e20(f"{IG}/{r['id']}/stems/htdemucs/audio/vocals.wav")
    vp95=float(np.percentile(ev[ev>-50],95)) if (ev>-50).any() else -99
    tr=r['transients']; ts=np.array([x['t'] for x in tr])
    # dominant inter-onset interval
    keep=[]
    if len(ts)>3:
        d=np.diff(ts); P=float(np.median(d[(d>0.3)&(d<1.2)])) if ((d>0.3)&(d<1.2)).any() else 0
    else: P=0
    for i,x in enumerate(tr):
        ongrid=0
        if P:
            for j,y in enumerate(tr):
                if i==j or abs(y['t']-x['t'])>6: continue
                k=round(abs(y['t']-x['t'])/P)
                if k>=1 and abs(abs(y['t']-x['t'])-k*P)<0.05 and abs(y['lvl_db']-x['lvl_db'])<3: ongrid+=1
        x['beat']=ongrid>=2
        x['rel_voice_db']=round(x['lvl_db']-vp95,1)
        if not x['beat']: keep.append(x)
    r['voice_p95_20ms']=round(vp95,1); r['grid_period']=round(P,3)
    r['sfx']=keep; r['sfx_per_min']=round(len(keep)/r['dur']*60,1)
    out.append(r)
json.dump(out,open('ref_all.json','w'),indent=1)
for r in out:
    print(r['id'], 'P',r['grid_period'],'sfx',len(r['sfx']),'/min',r['sfx_per_min'],'voiceP95',r['voice_p95_20ms'])
    print('   ',' '.join(f"{x['t']}:{x['kind'].split('/')[0][:5]}({x['rel_voice_db']:+.0f}dB,c{x['cent']})" for x in r['sfx']))
