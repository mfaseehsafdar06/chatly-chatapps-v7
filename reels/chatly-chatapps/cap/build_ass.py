import re
import json,math,sys
W=json.load(open('src/words.json'))
# phrases: break on sentence end or pause > 0.35
phr=[];cur=[]
for i,w in enumerate(W):
    cur.append(w); nxt=W[i+1]['s'] if i+1<len(W) else 999
    if w['w'][-1] in '.?!' or nxt-w['e']>0.35: phr.append(cur);cur=[]
if cur: phr.append(cur)
MAX=34
def L(ws): return len(' '.join(x['w'] for x in ws))
def split(ws):
    if L(ws)<=MAX: return [ws]
    best=None
    for k in range(2,len(ws)-1):
        a,b=ws[:k],ws[k:]
        if len(a)<2 or len(b)<2: continue
        cost=abs(L(a)-L(b)) - (25 if a[-1]['w'].endswith(',') else 0) - (10 if b[0]['w'].lower() in ('and','but','so','to','except') else 0) + (40 if max(L(a),L(b))>MAX+6 else 0)
        if best is None or cost<best[0]: best=(cost,k)
    if best is None: return [ws]
    k=best[1]; return split(ws[:k])+split(ws[k:])
lines=[l.split() for l in open('cap/lines.txt').read().splitlines() if l.strip()]
chunks=[];i=0
norm=lambda x:re.sub(r'[^a-z0-9\']','',x.lower())
for l in lines:
    c=W[i:i+len(l)]
    assert [norm(x['w']) for x in c]==[norm(x) for x in l],(l,[x['w'] for x in c])
    chunks.append(c); i+=len(l)
assert i==len(W)
def t(x): return f"{int(x//3600)}:{int(x%3600//60):02}:{x%60:05.2f}"
ev=[]
for k,c in enumerate(chunks):
    s=c[0]['s']; e=c[-1]['e']+0.15
    if k+1<len(chunks):
        n=chunks[k+1][0]['s']; e=n if n-e<0.3 else min(e,n)
    ev.append((s,e,' '.join(x['w'] for x in c).rstrip('.,')))
hdr=open('cap/header.ass').read()
with open('cap/captions.ass','w') as f:
    f.write(hdr)
    for s,e,x in ev:
        f.write(f"Dialogue: 0,{t(s)},{t(e)},Shd,,0,0,0,,{{\\blur5\\pos(961,994)\\an2}}{x}\n")
        f.write(f"Dialogue: 1,{t(s)},{t(e)},Cap,,0,0,0,,{{\\pos(960,992)\\an2}}{x}\n")
for s,e,x in ev: print(f"{s:6.2f} {e:6.2f} {x}")
