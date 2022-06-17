(function () {
  'use strict';

  /**
   *  From zip.js/z-worker.js, combined with inflate.js, exports as raw string so it can be requied and to use as a blob.
   */

  var zWorker$1 = 'function inflate(a){"use strict";function w(){function m(a,b,d,h,m,n,o,p,q,r,s){var t,u,w,x,z,A,B,C,E,F,G,H,I,D=0,y=d;do e[a[b+D]]++,D++,y--;while(0!==y);if(e[0]==d)return o[0]=-1,p[0]=0,c;for(B=p[0],z=1;v>=z&&0===e[z];z++);for(A=z,z>B&&(B=z),y=v;0!==y&&0===e[y];y--);for(w=y,B>y&&(B=y),p[0]=B,H=1<<z;y>z;z++,H<<=1)if((H-=e[z])<0)return g;if((H-=e[y])<0)return g;for(e[y]+=H,l[1]=z=0,D=1,G=2;0!==--y;)l[G]=z+=e[D],G++,D++;y=0,D=0;do 0!==(z=a[b+D])&&(s[l[z]++]=y),D++;while(++y<d);for(d=l[w],l[0]=y=0,D=0,x=-1,F=-B,j[0]=0,E=0,I=0;w>=A;A++)for(t=e[A];0!==t--;){for(;A>F+B;){if(x++,F+=B,I=w-F,I=I>B?B:I,(u=1<<(z=A-F))>t+1&&(u-=t+1,G=A,I>z))for(;++z<I&&!((u<<=1)<=e[++G]);)u-=e[G];if(I=1<<z,r[0]+I>k)return g;j[x]=E=r[0],r[0]+=I,0!==x?(l[x]=y,f[0]=z,f[1]=B,z=y>>>F-B,f[2]=E-j[x-1]-z,q.set(f,3*(j[x-1]+z))):o[0]=E}for(f[1]=A-F,D>=d?f[0]=192:s[D]<h?(f[0]=s[D]<256?0:96,f[2]=s[D++]):(f[0]=n[s[D]-h]+16+64,f[2]=m[s[D++]-h]),u=1<<A-F,z=y>>>F;I>z;z+=u)q.set(f,3*(E+z));for(z=1<<A-1;0!==(y&z);z>>>=1)y^=z;for(y^=z,C=(1<<F)-1;(y&C)!=l[x];)x--,F-=B,C=(1<<F)-1}return 0!==H&&1!=w?i:c}function n(a){var c;for(b||(b=[],d=[],e=new Int32Array(v+1),f=[],j=new Int32Array(v),l=new Int32Array(v+1)),d.length<a&&(d=[]),c=0;a>c;c++)d[c]=0;for(c=0;v+1>c;c++)e[c]=0;for(c=0;3>c;c++)f[c]=0;j.set(e.subarray(0,v),0),l.set(e.subarray(0,v+1),0)}var b,d,e,f,j,l,a=this;a.inflate_trees_bits=function(a,c,e,f,h){var j;return n(19),b[0]=0,j=m(a,0,19,19,null,null,e,c,f,b,d),j==g?h.msg="oversubscribed dynamic bit lengths tree":(j==i||0===c[0])&&(h.msg="incomplete dynamic bit lengths tree",j=g),j},a.inflate_trees_dynamic=function(a,e,f,j,k,l,o,p,q){var v;return n(288),b[0]=0,v=m(f,0,a,257,r,s,l,j,p,b,d),v!=c||0===j[0]?(v==g?q.msg="oversubscribed literal/length tree":v!=h&&(q.msg="incomplete literal/length tree",v=g),v):(n(288),v=m(f,a,e,0,t,u,o,k,p,b,d),v!=c||0===k[0]&&a>257?(v==g?q.msg="oversubscribed distance tree":v==i?(q.msg="incomplete distance tree",v=g):v!=h&&(q.msg="empty distance tree with lengths",v=g),v):c)}}function H(){function u(a,b,e,f,h,i,k,l){var m,n,o,p,y,z,A,B,s=l.next_in_index,t=l.avail_in,q=k.bitb,r=k.bitk,u=k.write,v=u<k.read?k.read-u-1:k.end-u,w=j[a],x=j[b];do{for(;20>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;if(m=q&w,n=e,o=f,B=3*(o+m),0!==(p=n[B]))for(;;){if(q>>=n[B+1],r-=n[B+1],0!==(16&p)){for(p&=15,y=n[B+2]+(q&j[p]),q>>=p,r-=p;15>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;for(m=q&x,n=h,o=i,B=3*(o+m),p=n[B];;){if(q>>=n[B+1],r-=n[B+1],0!==(16&p)){for(p&=15;p>r;)t--,q|=(255&l.read_byte(s++))<<r,r+=8;if(z=n[B+2]+(q&j[p]),q>>=p,r-=p,v-=y,u>=z)A=u-z,u-A>0&&2>u-A?(k.window[u++]=k.window[A++],k.window[u++]=k.window[A++],y-=2):(k.window.set(k.window.subarray(A,A+2),u),u+=2,A+=2,y-=2);else{A=u-z;do A+=k.end;while(0>A);if(p=k.end-A,y>p){if(y-=p,u-A>0&&p>u-A){do k.window[u++]=k.window[A++];while(0!==--p)}else k.window.set(k.window.subarray(A,A+p),u),u+=p,A+=p,p=0;A=0}}if(u-A>0&&y>u-A){do k.window[u++]=k.window[A++];while(0!==--y)}else k.window.set(k.window.subarray(A,A+y),u),u+=y,A+=y,y=0;break}if(0!==(64&p))return l.msg="invalid distance code",y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,g;m+=n[B+2],m+=q&j[p],B=3*(o+m),p=n[B]}break}if(0!==(64&p))return 0!==(32&p)?(y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,d):(l.msg="invalid literal/length code",y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,g);if(m+=n[B+2],m+=q&j[p],B=3*(o+m),0===(p=n[B])){q>>=n[B+1],r-=n[B+1],k.window[u++]=n[B+2],v--;break}}else q>>=n[B+1],r-=n[B+1],k.window[u++]=n[B+2],v--}while(v>=258&&t>=10);return y=l.avail_in-t,y=y>r>>3?r>>3:y,t+=y,s-=y,r-=y<<3,k.bitb=q,k.bitk=r,l.avail_in=t,l.total_in+=s-l.next_in_index,l.next_in_index=s,k.write=u,c}var b,h,q,s,a=this,e=0,i=0,k=0,l=0,m=0,n=0,o=0,p=0,r=0,t=0;a.init=function(a,c,d,e,f,g){b=x,o=a,p=c,q=d,r=e,s=f,t=g,h=null},a.proc=function(a,v,w){var H,I,J,N,O,P,Q,K=0,L=0,M=0;for(M=v.next_in_index,N=v.avail_in,K=a.bitb,L=a.bitk,O=a.write,P=O<a.read?a.read-O-1:a.end-O;;)switch(b){case x:if(P>=258&&N>=10&&(a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,w=u(o,p,q,r,s,t,a,v),M=v.next_in_index,N=v.avail_in,K=a.bitb,L=a.bitk,O=a.write,P=O<a.read?a.read-O-1:a.end-O,w!=c)){b=w==d?E:G;break}k=o,h=q,i=r,b=y;case y:for(H=k;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}if(I=3*(i+(K&j[H])),K>>>=h[I+1],L-=h[I+1],J=h[I],0===J){l=h[I+2],b=D;break}if(0!==(16&J)){m=15&J,e=h[I+2],b=z;break}if(0===(64&J)){k=J,i=I/3+h[I+2];break}if(0!==(32&J)){b=E;break}return b=G,v.msg="invalid literal/length code",w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case z:for(H=m;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}e+=K&j[H],K>>=H,L-=H,k=p,h=s,i=t,b=A;case A:for(H=k;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}if(I=3*(i+(K&j[H])),K>>=h[I+1],L-=h[I+1],J=h[I],0!==(16&J)){m=15&J,n=h[I+2],b=B;break}if(0===(64&J)){k=J,i=I/3+h[I+2];break}return b=G,v.msg="invalid distance code",w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case B:for(H=m;H>L;){if(0===N)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,N--,K|=(255&v.read_byte(M++))<<L,L+=8}n+=K&j[H],K>>=H,L-=H,b=C;case C:for(Q=O-n;0>Q;)Q+=a.end;for(;0!==e;){if(0===P&&(O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P&&(a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P)))return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);a.window[O++]=a.window[Q++],P--,Q==a.end&&(Q=0),e--}b=x;break;case D:if(0===P&&(O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P&&(a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,O==a.end&&0!==a.read&&(O=0,P=O<a.read?a.read-O-1:a.end-O),0===P)))return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);w=c,a.window[O++]=l,P--,b=x;break;case E:if(L>7&&(L-=8,N++,M--),a.write=O,w=a.inflate_flush(v,w),O=a.write,P=O<a.read?a.read-O-1:a.end-O,a.read!=a.write)return a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);b=F;case F:return w=d,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);case G:return w=g,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w);default:return w=f,a.bitb=K,a.bitk=L,v.avail_in=N,v.total_in+=M-v.next_in_index,v.next_in_index=M,a.write=O,a.inflate_flush(v,w)}},a.free=function(){}}function T(a,b){var o,e=this,h=J,l=0,m=0,n=0,p=[0],q=[0],r=new H,s=0,t=new Int32Array(3*k),u=0,v=new w;e.bitk=0,e.bitb=0,e.window=new Uint8Array(b),e.end=b,e.read=0,e.write=0,e.reset=function(a,b){b&&(b[0]=u),h==P&&r.free(a),h=J,e.bitk=0,e.bitb=0,e.read=e.write=0},e.reset(a,null),e.inflate_flush=function(a,b){var f=a.next_out_index,g=e.read,d=(g<=e.write?e.write:e.end)-g;return d>a.avail_out&&(d=a.avail_out),0!==d&&b==i&&(b=c),a.avail_out-=d,a.total_out+=d,a.next_out.set(e.window.subarray(g,g+d),f),f+=d,g+=d,g==e.end&&(g=0,e.write==e.end&&(e.write=0),d=e.write-g,d>a.avail_out&&(d=a.avail_out),0!==d&&b==i&&(b=c),a.avail_out-=d,a.total_out+=d,a.next_out.set(e.window.subarray(g,g+d),f),f+=d,g+=d),a.next_out_index=f,e.read=g,b},e.proc=function(a,b){for(var i,B,C,D,E,F,G,H,T,U,V,W,x=a.next_in_index,y=a.avail_in,k=e.bitb,u=e.bitk,z=e.write,A=z<e.read?e.read-z-1:e.end-z;;)switch(h){case J:for(;3>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}switch(i=7&k,s=1&i,i>>>1){case 0:k>>>=3,u-=3,i=7&u,k>>>=i,u-=i,h=K;break;case 1:C=[],D=[],E=[[]],F=[[]],w.inflate_trees_fixed(C,D,E,F),r.init(C[0],D[0],E[0],0,F[0],0),k>>>=3,u-=3,h=P;break;case 2:k>>>=3,u-=3,h=M;break;case 3:return k>>>=3,u-=3,h=S,a.msg="invalid block type",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b)}break;case K:for(;32>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if((65535&~k>>>16)!=(65535&k))return h=S,a.msg="invalid stored block lengths",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);l=65535&k,k=u=0,h=0!==l?L:0!==s?Q:J;break;case L:if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(0===A&&(z==e.end&&0!==e.read&&(z=0,A=z<e.read?e.read-z-1:e.end-z),0===A&&(e.write=z,b=e.inflate_flush(a,b),z=e.write,A=z<e.read?e.read-z-1:e.end-z,z==e.end&&0!==e.read&&(z=0,A=z<e.read?e.read-z-1:e.end-z),0===A)))return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(b=c,i=l,i>y&&(i=y),i>A&&(i=A),e.window.set(a.read_buf(x,i),z),x+=i,y-=i,z+=i,A-=i,0!==(l-=i))break;h=0!==s?Q:J;break;case M:for(;14>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(m=i=16383&k,(31&i)>29||(31&i>>5)>29)return h=S,a.msg="too many length or distance symbols",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);if(i=258+(31&i)+(31&i>>5),!o||o.length<i)o=[];else for(B=0;i>B;B++)o[B]=0;k>>>=14,u-=14,n=0,h=N;case N:for(;4+(m>>>10)>n;){for(;3>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}o[I[n++]]=7&k,k>>>=3,u-=3}for(;19>n;)o[I[n++]]=0;if(p[0]=7,i=v.inflate_trees_bits(o,p,q,t,a),i!=c)return b=i,b==g&&(o=null,h=S),e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);n=0,h=O;case O:for(;;){if(i=m,n>=258+(31&i)+(31&i>>5))break;for(i=p[0];i>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(i=t[3*(q[0]+(k&j[i]))+1],H=t[3*(q[0]+(k&j[i]))+2],16>H)k>>>=i,u-=i,o[n++]=H;else{for(B=18==H?7:H-14,G=18==H?11:3;i+B>u;){if(0===y)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);b=c,y--,k|=(255&a.read_byte(x++))<<u,u+=8}if(k>>>=i,u-=i,G+=k&j[B],k>>>=B,u-=B,B=n,i=m,B+G>258+(31&i)+(31&i>>5)||16==H&&1>B)return o=null,h=S,a.msg="invalid bit length repeat",b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);H=16==H?o[B-1]:0;do o[B++]=H;while(0!==--G);n=B}}if(q[0]=-1,T=[],U=[],V=[],W=[],T[0]=9,U[0]=6,i=m,i=v.inflate_trees_dynamic(257+(31&i),1+(31&i>>5),o,T,U,V,W,t,a),i!=c)return i==g&&(o=null,h=S),b=i,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);r.init(T[0],U[0],t,V[0],t,W[0]),h=P;case P:if(e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,(b=r.proc(e,a,b))!=d)return e.inflate_flush(a,b);if(b=c,r.free(a),x=a.next_in_index,y=a.avail_in,k=e.bitb,u=e.bitk,z=e.write,A=z<e.read?e.read-z-1:e.end-z,0===s){h=J;break}h=Q;case Q:if(e.write=z,b=e.inflate_flush(a,b),z=e.write,A=z<e.read?e.read-z-1:e.end-z,e.read!=e.write)return e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);h=R;case R:return b=d,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);case S:return b=g,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b);default:return b=f,e.bitb=k,e.bitk=u,a.avail_in=y,a.total_in+=x-a.next_in_index,a.next_in_index=x,e.write=z,e.inflate_flush(a,b)}},e.free=function(a){e.reset(a,null),e.window=null,t=null},e.set_dictionary=function(a,b,c){e.window.set(a.subarray(b,b+c),0),e.read=e.write=c},e.sync_point=function(){return h==K?1:0}}function fb(){function b(a){return a&&a.istate?(a.total_in=a.total_out=0,a.msg=null,a.istate.mode=bb,a.istate.blocks.reset(a,null),c):f}var a=this;a.mode=0,a.method=0,a.was=[0],a.need=0,a.marker=0,a.wbits=0,a.inflateEnd=function(b){return a.blocks&&a.blocks.free(b),a.blocks=null,c},a.inflateInit=function(d,e){return d.msg=null,a.blocks=null,8>e||e>15?(a.inflateEnd(d),f):(a.wbits=e,d.istate.blocks=new T(d,1<<e),b(d),c)},a.inflate=function(a,b){var h,j;if(!a||!a.istate||!a.next_in)return f;for(b=b==m?i:c,h=i;;)switch(a.istate.mode){case W:if(0===a.avail_in)return h;if(h=b,a.avail_in--,a.total_in++,(15&(a.istate.method=a.read_byte(a.next_in_index++)))!=V){a.istate.mode=db,a.msg="unknown compression method",a.istate.marker=5;break}if((a.istate.method>>4)+8>a.istate.wbits){a.istate.mode=db,a.msg="invalid window size",a.istate.marker=5;break}a.istate.mode=X;case X:if(0===a.avail_in)return h;if(h=b,a.avail_in--,a.total_in++,j=255&a.read_byte(a.next_in_index++),0!==((a.istate.method<<8)+j)%31){a.istate.mode=db,a.msg="incorrect header check",a.istate.marker=5;break}if(0===(j&U)){a.istate.mode=bb;break}a.istate.mode=Y;case Y:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need=4278190080&(255&a.read_byte(a.next_in_index++))<<24,a.istate.mode=Z;case Z:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need+=16711680&(255&a.read_byte(a.next_in_index++))<<16,a.istate.mode=$;case $:if(0===a.avail_in)return h;h=b,a.avail_in--,a.total_in++,a.istate.need+=65280&(255&a.read_byte(a.next_in_index++))<<8,a.istate.mode=_;case _:return 0===a.avail_in?h:(h=b,a.avail_in--,a.total_in++,a.istate.need+=255&a.read_byte(a.next_in_index++),a.istate.mode=ab,e);case ab:return a.istate.mode=db,a.msg="need dictionary",a.istate.marker=0,f;case bb:if(h=a.istate.blocks.proc(a,h),h==g){a.istate.mode=db,a.istate.marker=0;break}if(h==c&&(h=b),h!=d)return h;h=b,a.istate.blocks.reset(a,a.istate.was),a.istate.mode=cb;case cb:return d;case db:return g;default:return f}},a.inflateSetDictionary=function(a,b,d){var e=0,g=d;return a&&a.istate&&a.istate.mode==ab?(g>=1<<a.istate.wbits&&(g=(1<<a.istate.wbits)-1,e=d-g),a.istate.blocks.set_dictionary(b,e,g),a.istate.mode=bb,c):f},a.inflateSync=function(a){var d,e,h,j,k;if(!a||!a.istate)return f;if(a.istate.mode!=db&&(a.istate.mode=db,a.istate.marker=0),0===(d=a.avail_in))return i;for(e=a.next_in_index,h=a.istate.marker;0!==d&&4>h;)a.read_byte(e)==eb[h]?h++:h=0!==a.read_byte(e)?0:4-h,e++,d--;return a.total_in+=e-a.next_in_index,a.next_in_index=e,a.avail_in=d,a.istate.marker=h,4!=h?g:(j=a.total_in,k=a.total_out,b(a),a.total_in=j,a.total_out=k,a.istate.mode=bb,c)},a.inflateSyncPoint=function(a){return a&&a.istate&&a.istate.blocks?a.istate.blocks.sync_point():f}}function gb(){}function hb(){var a=this,b=new gb,e=512,f=l,g=new Uint8Array(e),h=!1;b.inflateInit(),b.next_out=g,a.append=function(a,j){var k,p,l=[],m=0,n=0,o=0;if(0!==a.length){b.next_in_index=0,b.next_in=a,b.avail_in=a.length;do{if(b.next_out_index=0,b.avail_out=e,0!==b.avail_in||h||(b.next_in_index=0,h=!0),k=b.inflate(f),h&&k===i){if(0!==b.avail_in)throw new Error("inflating: bad input")}else if(k!==c&&k!==d)throw new Error("inflating: "+b.msg);if((h||k===d)&&b.avail_in===a.length)throw new Error("inflating: bad input");b.next_out_index&&(b.next_out_index===e?l.push(new Uint8Array(g)):l.push(new Uint8Array(g.subarray(0,b.next_out_index)))),o+=b.next_out_index,j&&b.next_in_index>0&&b.next_in_index!=m&&(j(b.next_in_index),m=b.next_in_index)}while(b.avail_in>0||0===b.avail_out);return p=new Uint8Array(o),l.forEach(function(a){p.set(a,n),n+=a.length}),p}},a.flush=function(){b.inflateEnd()}}var x,y,z,A,B,C,D,E,F,G,I,J,K,L,M,N,O,P,Q,R,S,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,ib,b=15,c=0,d=1,e=2,f=-2,g=-3,h=-4,i=-5,j=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],k=1440,l=0,m=4,n=9,o=5,p=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],q=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],t=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],u=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],v=15;w.inflate_trees_fixed=function(a,b,d,e){return a[0]=n,b[0]=o,d[0]=p,e[0]=q,c},x=0,y=1,z=2,A=3,B=4,C=5,D=6,E=7,F=8,G=9,I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=0,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,U=32,V=8,W=0,X=1,Y=2,Z=3,$=4,_=5,ab=6,bb=7,cb=12,db=13,eb=[0,0,255,255],gb.prototype={inflateInit:function(a){var c=this;return c.istate=new fb,a||(a=b),c.istate.inflateInit(c,a)},inflate:function(a){var b=this;return b.istate?b.istate.inflate(b,a):f},inflateEnd:function(){var b,a=this;return a.istate?(b=a.istate.inflateEnd(a),a.istate=null,b):f},inflateSync:function(){var a=this;return a.istate?a.istate.inflateSync(a):f},inflateSetDictionary:function(a,b){var c=this;return c.istate?c.istate.inflateSetDictionary(c,a,b):f},read_byte:function(a){var b=this;return b.next_in.subarray(a,a+1)[0]},read_buf:function(a,b){var c=this;return c.next_in.subarray(a,a+b)}},ib=a.zip||a,ib.Inflater=ib._jzlib_Inflater=hb}!function(a){"use strict";function d(){inflate(a),postMessage({type:"importScripts"})}function e(b){var d=a[b.codecClass],e=b.sn;if(c[e])throw Error("duplicated sn");c[e]={codec:new d(b.options),crcInput:"input"===b.crcType,crcOutput:"output"===b.crcType,crc:new j},postMessage({type:"newTask",sn:e})}function g(a){var i,j,k,m,n,o,p,b=a.sn,d=a.type,g=a.data,h=c[b];if(!h&&a.codecClass&&(e(a),h=c[b]),i="append"===d,j=f(),i)try{k=h.codec.append(g,function(a){postMessage({type:"progress",sn:b,loaded:a})})}catch(l){throw delete c[b],l}else delete c[b],k=h.codec.flush();m=f()-j,j=f(),g&&h.crcInput&&h.crc.append(g),k&&h.crcOutput&&h.crc.append(k),n=f()-j,o={type:d,sn:b,codecTime:m,crcTime:n},p=[],k&&(o.data=k,p.push(k.buffer)),i||!h.crcInput&&!h.crcOutput||(o.crc=h.crc.get());try{postMessage(o,p)}catch(q){postMessage(o)}}function h(a,b,c){var d={type:a,sn:b,error:i(c)};postMessage(d)}function i(a){return{message:a.message,stack:a.stack}}function j(){this.crc=-1}function k(){}var b,c,f;if(a.zWorkerInitialized)throw new Error("z-worker.js should be run only once");a.zWorkerInitialized=!0,addEventListener("message",function(a){var c=a.data,d=c.type,e=c.sn,f=b[d];if(f)try{f(c)}catch(g){h(d,e,g)}postMessage({type:"echo",originalType:d,sn:e})}),b={importScripts:d,newTask:e,append:g,flush:g},c={},f=a.performance?a.performance.now.bind(a.performance):Date.now,j.prototype.append=function(a){var d,e,b=0|this.crc,c=this.table;for(d=0,e=0|a.length;e>d;d++)b=b>>>8^c[255&(b^a[d])];this.crc=b},j.prototype.get=function(){return~this.crc},j.prototype.table=function(){var a,b,c,d=[];for(a=0;256>a;a++){for(c=a,b=0;8>b;b++)1&c?c=3988292384^c>>>1:c>>>=1;d[a]=c}return d}(),a.NOOP=k,k.prototype.append=function(a){return a},k.prototype.flush=function(){}}(this);';

  /*
   Modified from https://gildas-lormeau.github.io/zip.js/, we do a little change to let it work fine with Browserfy/Webpack.

   Copyright (c) 2013 Gildas Lormeau. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in
   the documentation and/or other materials provided with the distribution.

   3. The names of the authors may not be used to endorse or promote products
   derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
   INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
   INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
   INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
   OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */

  // import zWorkerCode from './z-worker';
  // import zWorkerCode from 'raw!./z-worker';
  var workerRawString = zWorker$1;

  var zWorker = URL.createObjectURL(new Blob([workerRawString], {
    type: 'text/javascript'
  }));
  var ERR_BAD_FORMAT = 'File format is not recognized.';
  var ERR_CRC = 'CRC failed.';
  var ERR_ENCRYPTED = 'File contains encrypted entry.';
  var ERR_ZIP64 = 'File is using Zip64 (4gb+ file size).';
  var ERR_READ = 'Error while reading zip file.';
  var ERR_WRITE = 'Error while writing zip file.';
  var ERR_WRITE_DATA = 'Error while writing file data.';
  var ERR_READ_DATA = 'Error while reading file data.';
  var ERR_DUPLICATED_NAME = 'File already exists.';
  var CHUNK_SIZE = 512 * 1024;
  var TEXT_PLAIN = 'text/plain';
  var appendABViewSupported;

  try {
    appendABViewSupported = new Blob([new DataView(new ArrayBuffer(0))]).size === 0;
  } catch (err) {
    appendABViewSupported = undefined;
  }

  var zip$1 = {}; ////////////

  function Crc32() {
    this.crc = -1;
  }

  Crc32.prototype.append = function append(data) {
    var crc = this.crc | 0,
        table = this.table;

    for (var offset = 0, len = data.length | 0; offset < len; offset++) crc = crc >>> 8 ^ table[(crc ^ data[offset]) & 0xFF];

    this.crc = crc;
  };

  Crc32.prototype.get = function get() {
    return ~this.crc;
  };

  Crc32.prototype.table = function () {
    var i,
        j,
        t,
        table = []; // Uint32Array is actually slower than []

    for (i = 0; i < 256; i++) {
      t = i;

      for (j = 0; j < 8; j++) if (t & 1) t = t >>> 1 ^ 0xEDB88320;else t = t >>> 1;

      table[i] = t;
    }

    return table;
  }(); // "no-op" codec


  function NOOP() {}

  NOOP.prototype.append = function append(bytes, onprogress) {
    return bytes;
  };

  NOOP.prototype.flush = function flush() {};

  function blobSlice(blob, index, length) {
    if (index < 0 || length < 0 || index + length > blob.size) throw new RangeError('offset:' + index + ', length:' + length + ', size:' + blob.size);
    if (blob.slice) return blob.slice(index, index + length);else if (blob.webkitSlice) return blob.webkitSlice(index, index + length);else if (blob.mozSlice) return blob.mozSlice(index, index + length);else if (blob.msSlice) return blob.msSlice(index, index + length);
  }

  function getDataHelper(byteLength, bytes) {
    var dataBuffer, dataArray;
    dataBuffer = new ArrayBuffer(byteLength);
    dataArray = new Uint8Array(dataBuffer);
    if (bytes) dataArray.set(bytes, 0);
    return {
      buffer: dataBuffer,
      array: dataArray,
      view: new DataView(dataBuffer)
    };
  } // Readers


  function Reader() {}

  function TextReader(text) {
    var that = this,
        blobReader;

    function init(callback, onerror) {
      var blob = new Blob([text], {
        type: TEXT_PLAIN
      });
      blobReader = new BlobReader(blob);
      blobReader.init(function () {
        that.size = blobReader.size;
        callback();
      }, onerror);
    }

    function readUint8Array(index, length, callback, onerror) {
      blobReader.readUint8Array(index, length, callback, onerror);
    }

    that.size = 0;
    that.init = init;
    that.readUint8Array = readUint8Array;
  }

  TextReader.prototype = new Reader();
  TextReader.prototype.constructor = TextReader;

  function Data64URIReader(dataURI) {
    var that = this,
        dataStart;

    function init(callback) {
      var dataEnd = dataURI.length;

      while (dataURI.charAt(dataEnd - 1) == "=") dataEnd--;

      dataStart = dataURI.indexOf(",") + 1;
      that.size = Math.floor((dataEnd - dataStart) * 0.75);
      callback();
    }

    function readUint8Array(index, length, callback) {
      var i,
          data = getDataHelper(length);
      var start = Math.floor(index / 3) * 4;
      var end = Math.ceil((index + length) / 3) * 4;
      var bytes = atob(dataURI.substring(start + dataStart, end + dataStart));
      var delta = index - Math.floor(start / 4) * 3;

      for (i = delta; i < delta + length; i++) data.array[i - delta] = bytes.charCodeAt(i);

      callback(data.array);
    }

    that.size = 0;
    that.init = init;
    that.readUint8Array = readUint8Array;
  }

  Data64URIReader.prototype = new Reader();
  Data64URIReader.prototype.constructor = Data64URIReader;

  function BlobReader(blob) {
    var that = this;

    function init(callback) {
      that.size = blob.size;
      callback();
    }

    function readUint8Array(index, length, callback, onerror) {
      var reader = new FileReader();

      reader.onload = function (e) {
        callback(new Uint8Array(e.target.result));
      };

      reader.onerror = onerror;

      try {
        reader.readAsArrayBuffer(blobSlice(blob, index, length));
      } catch (e) {
        onerror(e);
      }
    }

    that.size = 0;
    that.init = init;
    that.readUint8Array = readUint8Array;
  }

  BlobReader.prototype = new Reader();
  BlobReader.prototype.constructor = BlobReader; // Writers

  function Writer() {}

  Writer.prototype.getData = function (callback) {
    callback(this.data);
  };

  function TextWriter(encoding) {
    var that = this,
        blob;

    function init(callback) {
      blob = new Blob([], {
        type: TEXT_PLAIN
      });
      callback();
    }

    function writeUint8Array(array, callback) {
      blob = new Blob([blob, appendABViewSupported ? array : array.buffer], {
        type: TEXT_PLAIN
      });
      callback();
    }

    function getData(callback, onerror) {
      var reader = new FileReader();

      reader.onload = function (e) {
        callback(e.target.result);
      };

      reader.onerror = onerror;
      reader.readAsText(blob, encoding);
    }

    that.init = init;
    that.writeUint8Array = writeUint8Array;
    that.getData = getData;
  }

  TextWriter.prototype = new Writer();
  TextWriter.prototype.constructor = TextWriter;

  function Data64URIWriter(contentType) {
    var that = this,
        data = "",
        pending = "";

    function init(callback) {
      data += "data:" + (contentType || "") + ";base64,";
      callback();
    }

    function writeUint8Array(array, callback) {
      var i,
          delta = pending.length,
          dataString = pending;
      pending = "";

      for (i = 0; i < Math.floor((delta + array.length) / 3) * 3 - delta; i++) dataString += String.fromCharCode(array[i]);

      for (; i < array.length; i++) pending += String.fromCharCode(array[i]);

      if (dataString.length > 2) data += btoa(dataString);else pending = dataString;
      callback();
    }

    function getData(callback) {
      callback(data + btoa(pending));
    }

    that.init = init;
    that.writeUint8Array = writeUint8Array;
    that.getData = getData;
  }

  Data64URIWriter.prototype = new Writer();
  Data64URIWriter.prototype.constructor = Data64URIWriter;

  function BlobWriter(contentType) {
    var blob,
        that = this;

    function init(callback) {
      blob = new Blob([], {
        type: contentType
      });
      callback();
    }

    function writeUint8Array(array, callback) {
      blob = new Blob([blob, appendABViewSupported ? array : array.buffer], {
        type: contentType
      });
      callback();
    }

    function getData(callback) {
      callback(blob);
    }

    that.init = init;
    that.writeUint8Array = writeUint8Array;
    that.getData = getData;
  }

  BlobWriter.prototype = new Writer();
  BlobWriter.prototype.constructor = BlobWriter;
  /**
   * inflate/deflate core functions
   * @param worker {Worker} web worker for the task.
   * @param initialMessage {Object} initial message to be sent to the worker. should contain
   *   sn(serial number for distinguishing multiple tasks sent to the worker), and codecClass.
   *   This function may add more properties before sending.
   */

  function launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror) {
    var chunkIndex = 0,
        index,
        outputSize,
        sn = initialMessage.sn,
        crc;

    function onflush() {
      worker.removeEventListener('message', onmessage, false);
      onend(outputSize, crc);
    }

    function onmessage(event) {
      var message = event.data,
          data = message.data,
          err = message.error;

      if (err) {
        err.toString = function () {
          return 'Error: ' + this.message;
        };

        onreaderror(err);
        return;
      }

      if (message.sn !== sn) return;
      if (typeof message.codecTime === 'number') worker.codecTime += message.codecTime; // should be before onflush()

      if (typeof message.crcTime === 'number') worker.crcTime += message.crcTime;

      switch (message.type) {
        case 'append':
          if (data) {
            outputSize += data.length;
            writer.writeUint8Array(data, function () {
              step();
            }, onwriteerror);
          } else step();

          break;

        case 'flush':
          crc = message.crc;

          if (data) {
            outputSize += data.length;
            writer.writeUint8Array(data, function () {
              onflush();
            }, onwriteerror);
          } else onflush();

          break;

        case 'progress':
          if (onprogress) onprogress(index + message.loaded, size);
          break;

        case 'importScripts': //no need to handle here

        case 'newTask':
        case 'echo':
          break;

        default:
          console.warn('zip.js:launchWorkerProcess: unknown message: ', message);
      }
    }

    function step() {
      index = chunkIndex * CHUNK_SIZE; // use `<=` instead of `<`, because `size` may be 0.

      if (index <= size) {
        reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function (array) {
          if (onprogress) onprogress(index, size);
          var msg = index === 0 ? initialMessage : {
            sn: sn
          };
          msg.type = 'append';
          msg.data = array; // posting a message with transferables will fail on IE10

          try {
            worker.postMessage(msg, [array.buffer]);
          } catch (ex) {
            worker.postMessage(msg); // retry without transferables
          }

          chunkIndex++;
        }, onreaderror);
      } else {
        worker.postMessage({
          sn: sn,
          type: 'flush'
        });
      }
    }

    outputSize = 0;
    worker.addEventListener('message', onmessage, false);
    step();
  }

  function launchProcess(process, reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror) {
    var chunkIndex = 0,
        index,
        outputSize = 0,
        crcInput = crcType === 'input',
        crcOutput = crcType === 'output',
        crc = new Crc32();

    function step() {
      var outputData;
      index = chunkIndex * CHUNK_SIZE;
      if (index < size) reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function (inputData) {
        var outputData;

        try {
          outputData = process.append(inputData, function (loaded) {
            if (onprogress) onprogress(index + loaded, size);
          });
        } catch (e) {
          onreaderror(e);
          return;
        }

        if (outputData) {
          outputSize += outputData.length;
          writer.writeUint8Array(outputData, function () {
            chunkIndex++;
            setTimeout(step, 1);
          }, onwriteerror);
          if (crcOutput) crc.append(outputData);
        } else {
          chunkIndex++;
          setTimeout(step, 1);
        }

        if (crcInput) crc.append(inputData);
        if (onprogress) onprogress(index, size);
      }, onreaderror);else {
        try {
          outputData = process.flush();
        } catch (e) {
          onreaderror(e);
          return;
        }

        if (outputData) {
          if (crcOutput) crc.append(outputData);
          outputSize += outputData.length;
          writer.writeUint8Array(outputData, function () {
            onend(outputSize, crc.get());
          }, onwriteerror);
        } else onend(outputSize, crc.get());
      }
    }

    step();
  }

  function inflate(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
    var crcType = computeCrc32 ? 'output' : 'none';

    if (zip$1.useWebWorkers) {
      var initialMessage = {
        sn: sn,
        codecClass: 'Inflater',
        crcType: crcType
      };
      launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
    } else launchProcess(new zip$1.Inflater(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
  }

  function deflate(worker, sn, reader, writer, level, onend, onprogress, onreaderror, onwriteerror) {
    var crcType = 'input';

    if (zip$1.useWebWorkers) {
      var initialMessage = {
        sn: sn,
        options: {
          level: level
        },
        codecClass: 'Deflater',
        crcType: crcType
      };
      launchWorkerProcess(worker, initialMessage, reader, writer, 0, reader.size, onprogress, onend, onreaderror, onwriteerror);
    } else launchProcess(new zip$1.Deflater(), reader, writer, 0, reader.size, crcType, onprogress, onend, onreaderror, onwriteerror);
  }

  function copy(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
    var crcType = 'input';

    if (zip$1.useWebWorkers && computeCrc32) {
      var initialMessage = {
        sn: sn,
        codecClass: 'NOOP',
        crcType: crcType
      };
      launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
    } else launchProcess(new NOOP(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
  } // ZipReader


  function decodeASCII(str) {
    var i,
        out = "",
        charCode,
        extendedASCII = ['\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB', '\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9', '\u00FF', '\u00D6', '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1', '\u00AA', '\u00BA', '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB', '_', '_', '_', '\u00A6', '\u00A6', '\u00C1', '\u00C2', '\u00C0', '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-', '-', '+', '-', '+', '\u00E3', '\u00C3', '+', '+', '-', '-', '\u00A6', '-', '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i', '\u00CD', '\u00CE', '\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_', '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5', '\u00FE', '\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD', '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7', '\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3', '\u00B2', '_', ' '];

    for (i = 0; i < str.length; i++) {
      charCode = str.charCodeAt(i) & 0xFF;
      if (charCode > 127) out += extendedASCII[charCode - 128];else out += String.fromCharCode(charCode);
    }

    return out;
  }

  function decodeUTF8(string) {
    return decodeURIComponent(escape(string));
  }

  function getString(bytes) {
    var i,
        str = "";

    for (i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);

    return str;
  }

  function getDate(timeRaw) {
    var date = (timeRaw & 0xffff0000) >> 16,
        time = timeRaw & 0x0000ffff;

    try {
      return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5, (time & 0x001F) * 2, 0);
    } catch (e) {}
  }

  function readCommonHeader(entry, data, index, centralDirectory, onerror) {
    entry.version = data.view.getUint16(index, true);
    entry.bitFlag = data.view.getUint16(index + 2, true);
    entry.compressionMethod = data.view.getUint16(index + 4, true);
    entry.lastModDateRaw = data.view.getUint32(index + 6, true);
    entry.lastModDate = getDate(entry.lastModDateRaw);

    if ((entry.bitFlag & 0x01) === 0x01) {
      onerror(ERR_ENCRYPTED);
      return;
    }

    if (centralDirectory || (entry.bitFlag & 0x0008) != 0x0008) {
      entry.crc32 = data.view.getUint32(index + 10, true);
      entry.compressedSize = data.view.getUint32(index + 14, true);
      entry.uncompressedSize = data.view.getUint32(index + 18, true);
    }

    if (entry.compressedSize === 0xFFFFFFFF || entry.uncompressedSize === 0xFFFFFFFF) {
      onerror(ERR_ZIP64);
      return;
    }

    entry.filenameLength = data.view.getUint16(index + 22, true);
    entry.extraFieldLength = data.view.getUint16(index + 24, true);
  }

  function createZipReader(reader, callback, onerror) {
    var inflateSN = 0;

    function Entry() {}

    Entry.prototype.getData = function (writer, onend, onprogress, checkCrc32) {
      var that = this;

      function testCrc32(crc32) {
        var dataCrc32 = getDataHelper(4);
        dataCrc32.view.setUint32(0, crc32);
        return that.crc32 == dataCrc32.view.getUint32(0);
      }

      function getWriterData(uncompressedSize, crc32) {
        if (checkCrc32 && !testCrc32(crc32)) onerror(ERR_CRC);else writer.getData(function (data) {
          onend(data);
        });
      }

      function onreaderror(err) {
        onerror(err || ERR_READ_DATA);
      }

      function onwriteerror(err) {
        onerror(err || ERR_WRITE_DATA);
      }

      reader.readUint8Array(that.offset, 30, function (bytes) {
        var data = getDataHelper(bytes.length, bytes),
            dataOffset;

        if (data.view.getUint32(0) != 0x504b0304) {
          onerror(ERR_BAD_FORMAT);
          return;
        }

        readCommonHeader(that, data, 4, false, onerror);
        dataOffset = that.offset + 30 + that.filenameLength + that.extraFieldLength;
        writer.init(function () {
          if (that.compressionMethod === 0) copy(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);else inflate(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
        }, onwriteerror);
      }, onreaderror);
    };

    function seekEOCDR(eocdrCallback) {
      // "End of central directory record" is the last part of a zip archive, and is at least 22 bytes long.
      // Zip file comment is the last part of EOCDR and has max length of 64KB,
      // so we only have to search the last 64K + 22 bytes of a archive for EOCDR signature (0x06054b50).
      var EOCDR_MIN = 22;

      if (reader.size < EOCDR_MIN) {
        onerror(ERR_BAD_FORMAT);
        return;
      }

      var ZIP_COMMENT_MAX = 256 * 256,
          EOCDR_MAX = EOCDR_MIN + ZIP_COMMENT_MAX; // In most cases, the EOCDR is EOCDR_MIN bytes long

      doSeek(EOCDR_MIN, function () {
        // If not found, try within EOCDR_MAX bytes
        doSeek(Math.min(EOCDR_MAX, reader.size), function () {
          onerror(ERR_BAD_FORMAT);
        });
      }); // seek last length bytes of file for EOCDR

      function doSeek(length, eocdrNotFoundCallback) {
        reader.readUint8Array(reader.size - length, length, function (bytes) {
          for (var i = bytes.length - EOCDR_MIN; i >= 0; i--) {
            if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) {
              eocdrCallback(new DataView(bytes.buffer, i, EOCDR_MIN));
              return;
            }
          }

          eocdrNotFoundCallback();
        }, function () {
          onerror(ERR_READ);
        });
      }
    }

    var zipReader = {
      getEntries: function (callback) {
        var worker = this._worker; // look for End of central directory record

        seekEOCDR(function (dataView) {
          var datalength, fileslength;
          datalength = dataView.getUint32(16, true);
          fileslength = dataView.getUint16(8, true);

          if (datalength < 0 || datalength >= reader.size) {
            onerror(ERR_BAD_FORMAT);
            return;
          }

          reader.readUint8Array(datalength, reader.size - datalength, function (bytes) {
            var i,
                index = 0,
                entries = [],
                entry,
                filename,
                comment,
                data = getDataHelper(bytes.length, bytes);

            for (i = 0; i < fileslength; i++) {
              entry = new Entry();
              entry._worker = worker;

              if (data.view.getUint32(index) != 0x504b0102) {
                onerror(ERR_BAD_FORMAT);
                return;
              }

              readCommonHeader(entry, data, index + 6, true, onerror);
              entry.commentLength = data.view.getUint16(index + 32, true);
              entry.directory = (data.view.getUint8(index + 38) & 0x10) == 0x10;
              entry.offset = data.view.getUint32(index + 42, true);
              filename = getString(data.array.subarray(index + 46, index + 46 + entry.filenameLength));
              entry.filename = (entry.bitFlag & 0x0800) === 0x0800 ? decodeUTF8(filename) : decodeASCII(filename);
              if (!entry.directory && entry.filename.charAt(entry.filename.length - 1) == "/") entry.directory = true;
              comment = getString(data.array.subarray(index + 46 + entry.filenameLength + entry.extraFieldLength, index + 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength));
              entry.comment = (entry.bitFlag & 0x0800) === 0x0800 ? decodeUTF8(comment) : decodeASCII(comment);
              entries.push(entry);
              index += 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength;
            }

            callback(entries);
          }, function () {
            onerror(ERR_READ);
          });
        });
      },
      close: function (callback) {
        if (this._worker) {
          this._worker.terminate();

          this._worker = null;
        }

        if (callback) callback();
      },
      _worker: null
    };
    if (!zip$1.useWebWorkers) callback(zipReader);else {
      createWorker('inflater', function (worker) {
        zipReader._worker = worker;
        callback(zipReader);
      }, function (err) {
        onerror(err);
      });
    }
  } // ZipWriter


  function encodeUTF8(string) {
    return unescape(encodeURIComponent(string));
  }

  function getBytes(str) {
    var i,
        array = [];

    for (i = 0; i < str.length; i++) array.push(str.charCodeAt(i));

    return array;
  }

  function createZipWriter(writer, callback, onerror, dontDeflate) {
    var files = {},
        filenames = [],
        datalength = 0;
    var deflateSN = 0;

    function onwriteerror(err) {
      onerror(err || ERR_WRITE);
    }

    function onreaderror(err) {
      onerror(err || ERR_READ_DATA);
    }

    var zipWriter = {
      add: function (name, reader, onend, onprogress, options) {
        var header, filename, date;
        var worker = this._worker;

        function writeHeader(callback) {
          var data;
          date = options.lastModDate || new Date();
          header = getDataHelper(26);
          files[name] = {
            headerArray: header.array,
            directory: options.directory,
            filename: filename,
            offset: datalength,
            comment: getBytes(encodeUTF8(options.comment || ''))
          };
          header.view.setUint32(0, 0x14000808);
          if (options.version) header.view.setUint8(0, options.version);
          if (!dontDeflate && options.level !== 0 && !options.directory) header.view.setUint16(4, 0x0800);
          header.view.setUint16(6, (date.getHours() << 6 | date.getMinutes()) << 5 | date.getSeconds() / 2, true);
          header.view.setUint16(8, (date.getFullYear() - 1980 << 4 | date.getMonth() + 1) << 5 | date.getDate(), true);
          header.view.setUint16(22, filename.length, true);
          data = getDataHelper(30 + filename.length);
          data.view.setUint32(0, 0x504b0304);
          data.array.set(header.array, 4);
          data.array.set(filename, 30);
          datalength += data.array.length;
          writer.writeUint8Array(data.array, callback, onwriteerror);
        }

        function writeFooter(compressedLength, crc32) {
          var footer = getDataHelper(16);
          datalength += compressedLength || 0;
          footer.view.setUint32(0, 0x504b0708);

          if (typeof crc32 !== 'undefined') {
            header.view.setUint32(10, crc32, true);
            footer.view.setUint32(4, crc32, true);
          }

          if (reader) {
            footer.view.setUint32(8, compressedLength, true);
            header.view.setUint32(14, compressedLength, true);
            footer.view.setUint32(12, reader.size, true);
            header.view.setUint32(18, reader.size, true);
          }

          writer.writeUint8Array(footer.array, function () {
            datalength += 16;
            onend();
          }, onwriteerror);
        }

        function writeFile() {
          options = options || {};
          name = name.trim();
          if (options.directory && name.charAt(name.length - 1) != "/") name += "/";

          if (files.hasOwnProperty(name)) {
            onerror(ERR_DUPLICATED_NAME);
            return;
          }

          filename = getBytes(encodeUTF8(name));
          filenames.push(name);
          writeHeader(function () {
            if (reader) {
              if (dontDeflate || options.level === 0) copy(worker, deflateSN++, reader, writer, 0, reader.size, true, writeFooter, onprogress, onreaderror, onwriteerror);else deflate(worker, deflateSN++, reader, writer, options.level, writeFooter, onprogress, onreaderror, onwriteerror);
            } else writeFooter();
          });
        }

        if (reader) reader.init(writeFile, onreaderror);else writeFile();
      },
      close: function (callback) {
        if (this._worker) {
          this._worker.terminate();

          this._worker = null;
        }

        var data,
            length = 0,
            index = 0,
            indexFilename,
            file;

        for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
          file = files[filenames[indexFilename]];
          length += 46 + file.filename.length + file.comment.length;
        }

        data = getDataHelper(length + 22);

        for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
          file = files[filenames[indexFilename]];
          data.view.setUint32(index, 0x504b0102);
          data.view.setUint16(index + 4, 0x1400);
          data.array.set(file.headerArray, index + 6);
          data.view.setUint16(index + 32, file.comment.length, true);
          if (file.directory) data.view.setUint8(index + 38, 0x10);
          data.view.setUint32(index + 42, file.offset, true);
          data.array.set(file.filename, index + 46);
          data.array.set(file.comment, index + 46 + file.filename.length);
          index += 46 + file.filename.length + file.comment.length;
        }

        data.view.setUint32(index, 0x504b0506);
        data.view.setUint16(index + 8, filenames.length, true);
        data.view.setUint16(index + 10, filenames.length, true);
        data.view.setUint32(index + 12, length, true);
        data.view.setUint32(index + 16, datalength, true);
        writer.writeUint8Array(data.array, function () {
          writer.getData(callback);
        }, onwriteerror);
      },
      _worker: null
    };
    if (!zip$1.useWebWorkers) callback(zipWriter);else {
      createWorker('deflater', function (worker) {
        zipWriter._worker = worker;
        callback(zipWriter);
      }, function (err) {
        onerror(err);
      });
    }
  }
  //   deflater: ['z-worker.js', 'deflate.js'],
  //   inflater: ['z-worker.js', 'inflate.js']
  // };


  function createWorker(type, callback, onerror) {
    if (zip$1.workerScripts !== null && zip$1.workerScriptsPath !== null) {
      onerror(new Error('Either zip.workerScripts or zip.workerScriptsPath may be set, not both.'));
      return;
    }

    var worker = new Worker(zWorker); // record total consumed time by inflater/deflater/crc32 in this worker

    worker.codecTime = worker.crcTime = 0;
    worker.postMessage({
      type: 'importScripts',
      scripts: ['inflate.js']
    });
    worker.addEventListener('message', onmessage);

    function onmessage(ev) {
      var msg = ev.data;

      if (msg.error) {
        worker.terminate(); // should before onerror(), because onerror() may throw.

        onerror(msg.error);
        return;
      }

      if (msg.type === 'importScripts') {
        worker.removeEventListener('message', onmessage);
        worker.removeEventListener('error', errorHandler);
        callback(worker);
      }
    } // catch entry script loading error and other unhandled errors


    worker.addEventListener('error', errorHandler);

    function errorHandler(err) {
      worker.terminate();
      onerror(err);
    }
  }

  function onerror_default(error) {
    console.error(error);
  }

  var extendsOpts = {
    Reader: Reader,
    Writer: Writer,
    BlobReader: BlobReader,
    Data64URIReader: Data64URIReader,
    TextReader: TextReader,
    BlobWriter: BlobWriter,
    Data64URIWriter: Data64URIWriter,
    TextWriter: TextWriter,
    createReader: function (reader, callback, onerror) {
      onerror = onerror || onerror_default;
      reader.init(function () {
        createZipReader(reader, callback, onerror);
      }, onerror);
    },
    createWriter: function (writer, callback, onerror, dontDeflate) {
      onerror = onerror || onerror_default;
      dontDeflate = !!dontDeflate;
      writer.init(function () {
        createZipWriter(writer, callback, onerror, dontDeflate);
      }, onerror);
    },
    useWebWorkers: true,

    /**
     * Directory containing the default worker scripts (z-worker.js, deflate.js, and inflate.js), relative to current base url.
     * E.g.: zip.workerScripts = './';
     */
    workerScriptsPath: null,

    /**
     * Advanced option to control which scripts are loaded in the Web worker. If this option is specified, then workerScriptsPath must not be set.
     * workerScripts.deflater/workerScripts.inflater should be arrays of urls to scripts for deflater/inflater, respectively.
     * Scripts in the array are executed in order, and the first one should be z-worker.js, which is used to start the worker.
     * All urls are relative to current base url.
     * E.g.:
     * zip.workerScripts = {
     *   deflater: ['z-worker.js', 'deflate.js'],
     *   inflater: ['z-worker.js', 'inflate.js']
     * };
     */
    workerScripts: null
  };

  for (var i$1 in extendsOpts) {
    zip$1[i$1] = extendsOpts[i$1];
  }

  var zip_1 = zip$1;

  var buffer = {};

  var base64Js = {};

  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  } // Support decoding URL-safe base64 strings, as Node.js does.
  // See: https://en.wikipedia.org/wiki/Base64#URL_applications


  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;

  function getLens(b64) {
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    } // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42


    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  } // base64 is 4/3 + up to two characters of the original data


  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }

  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }

  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;

    for (i = 0; i < len; i += 4) {
      tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
      arr[curByte++] = tmp >> 16 & 0xFF;
      arr[curByte++] = tmp >> 8 & 0xFF;
      arr[curByte++] = tmp & 0xFF;
    }

    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
      arr[curByte++] = tmp & 0xFF;
    }

    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 0xFF;
      arr[curByte++] = tmp & 0xFF;
    }

    return arr;
  }

  function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
  }

  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];

    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
      output.push(tripletToBase64(tmp));
    }

    return output.join('');
  }

  function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3
    // go through the array every three bytes, we'll deal with trailing stuff later

    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    } // pad the end with zeros, but make sure to not forget the extra bytes


    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + uint8[len - 1];
      parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
    }

    return parts.join('');
  }

  var ieee754 = {};

  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

  ieee754.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;

    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;

    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }

    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };

  ieee754.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);

      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }

      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }

      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;

    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  };

  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */

  (function (exports) {

  	var base64 = base64Js;

  	var ieee754$1 = ieee754;

  	var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
  	? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
  	: null;
  	exports.Buffer = Buffer;
  	exports.SlowBuffer = SlowBuffer;
  	exports.INSPECT_MAX_BYTES = 50;
  	var K_MAX_LENGTH = 0x7fffffff;
  	exports.kMaxLength = K_MAX_LENGTH;
  	/**
  	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
  	 *   === true    Use Uint8Array implementation (fastest)
  	 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
  	 *               implementation (most compatible, even IE6)
  	 *
  	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
  	 * Opera 11.6+, iOS 4.2+.
  	 *
  	 * We report that the browser does not support typed arrays if the are not subclassable
  	 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
  	 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
  	 * for __proto__ and has a buggy typed array implementation.
  	 */

  	Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

  	if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  	  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
  	}

  	function typedArraySupport() {
  	  // Can typed array instances can be augmented?
  	  try {
  	    var arr = new Uint8Array(1);
  	    var proto = {
  	      foo: function () {
  	        return 42;
  	      }
  	    };
  	    Object.setPrototypeOf(proto, Uint8Array.prototype);
  	    Object.setPrototypeOf(arr, proto);
  	    return arr.foo() === 42;
  	  } catch (e) {
  	    return false;
  	  }
  	}

  	Object.defineProperty(Buffer.prototype, 'parent', {
  	  enumerable: true,
  	  get: function () {
  	    if (!Buffer.isBuffer(this)) return undefined;
  	    return this.buffer;
  	  }
  	});
  	Object.defineProperty(Buffer.prototype, 'offset', {
  	  enumerable: true,
  	  get: function () {
  	    if (!Buffer.isBuffer(this)) return undefined;
  	    return this.byteOffset;
  	  }
  	});

  	function createBuffer(length) {
  	  if (length > K_MAX_LENGTH) {
  	    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  	  } // Return an augmented `Uint8Array` instance


  	  var buf = new Uint8Array(length);
  	  Object.setPrototypeOf(buf, Buffer.prototype);
  	  return buf;
  	}
  	/**
  	 * The Buffer constructor returns instances of `Uint8Array` that have their
  	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
  	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
  	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
  	 * returns a single octet.
  	 *
  	 * The `Uint8Array` prototype remains unmodified.
  	 */


  	function Buffer(arg, encodingOrOffset, length) {
  	  // Common case.
  	  if (typeof arg === 'number') {
  	    if (typeof encodingOrOffset === 'string') {
  	      throw new TypeError('The "string" argument must be of type string. Received type number');
  	    }

  	    return allocUnsafe(arg);
  	  }

  	  return from(arg, encodingOrOffset, length);
  	}

  	Buffer.poolSize = 8192; // not used by this implementation

  	function from(value, encodingOrOffset, length) {
  	  if (typeof value === 'string') {
  	    return fromString(value, encodingOrOffset);
  	  }

  	  if (ArrayBuffer.isView(value)) {
  	    return fromArrayView(value);
  	  }

  	  if (value == null) {
  	    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  	  }

  	  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
  	    return fromArrayBuffer(value, encodingOrOffset, length);
  	  }

  	  if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
  	    return fromArrayBuffer(value, encodingOrOffset, length);
  	  }

  	  if (typeof value === 'number') {
  	    throw new TypeError('The "value" argument must not be of type number. Received type number');
  	  }

  	  var valueOf = value.valueOf && value.valueOf();

  	  if (valueOf != null && valueOf !== value) {
  	    return Buffer.from(valueOf, encodingOrOffset, length);
  	  }

  	  var b = fromObject(value);
  	  if (b) return b;

  	  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
  	    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  	  }

  	  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
  	}
  	/**
  	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
  	 * if value is a number.
  	 * Buffer.from(str[, encoding])
  	 * Buffer.from(array)
  	 * Buffer.from(buffer)
  	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
  	 **/


  	Buffer.from = function (value, encodingOrOffset, length) {
  	  return from(value, encodingOrOffset, length);
  	}; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
  	// https://github.com/feross/buffer/pull/148


  	Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
  	Object.setPrototypeOf(Buffer, Uint8Array);

  	function assertSize(size) {
  	  if (typeof size !== 'number') {
  	    throw new TypeError('"size" argument must be of type number');
  	  } else if (size < 0) {
  	    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  	  }
  	}

  	function alloc(size, fill, encoding) {
  	  assertSize(size);

  	  if (size <= 0) {
  	    return createBuffer(size);
  	  }

  	  if (fill !== undefined) {
  	    // Only pay attention to encoding if it's a string. This
  	    // prevents accidentally sending in a number that would
  	    // be interpreted as a start offset.
  	    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  	  }

  	  return createBuffer(size);
  	}
  	/**
  	 * Creates a new filled Buffer instance.
  	 * alloc(size[, fill[, encoding]])
  	 **/


  	Buffer.alloc = function (size, fill, encoding) {
  	  return alloc(size, fill, encoding);
  	};

  	function allocUnsafe(size) {
  	  assertSize(size);
  	  return createBuffer(size < 0 ? 0 : checked(size) | 0);
  	}
  	/**
  	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
  	 * */


  	Buffer.allocUnsafe = function (size) {
  	  return allocUnsafe(size);
  	};
  	/**
  	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
  	 */


  	Buffer.allocUnsafeSlow = function (size) {
  	  return allocUnsafe(size);
  	};

  	function fromString(string, encoding) {
  	  if (typeof encoding !== 'string' || encoding === '') {
  	    encoding = 'utf8';
  	  }

  	  if (!Buffer.isEncoding(encoding)) {
  	    throw new TypeError('Unknown encoding: ' + encoding);
  	  }

  	  var length = byteLength(string, encoding) | 0;
  	  var buf = createBuffer(length);
  	  var actual = buf.write(string, encoding);

  	  if (actual !== length) {
  	    // Writing a hex string, for example, that contains invalid characters will
  	    // cause everything after the first invalid character to be ignored. (e.g.
  	    // 'abxxcd' will be treated as 'ab')
  	    buf = buf.slice(0, actual);
  	  }

  	  return buf;
  	}

  	function fromArrayLike(array) {
  	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  	  var buf = createBuffer(length);

  	  for (var i = 0; i < length; i += 1) {
  	    buf[i] = array[i] & 255;
  	  }

  	  return buf;
  	}

  	function fromArrayView(arrayView) {
  	  if (isInstance(arrayView, Uint8Array)) {
  	    var copy = new Uint8Array(arrayView);
  	    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
  	  }

  	  return fromArrayLike(arrayView);
  	}

  	function fromArrayBuffer(array, byteOffset, length) {
  	  if (byteOffset < 0 || array.byteLength < byteOffset) {
  	    throw new RangeError('"offset" is outside of buffer bounds');
  	  }

  	  if (array.byteLength < byteOffset + (length || 0)) {
  	    throw new RangeError('"length" is outside of buffer bounds');
  	  }

  	  var buf;

  	  if (byteOffset === undefined && length === undefined) {
  	    buf = new Uint8Array(array);
  	  } else if (length === undefined) {
  	    buf = new Uint8Array(array, byteOffset);
  	  } else {
  	    buf = new Uint8Array(array, byteOffset, length);
  	  } // Return an augmented `Uint8Array` instance


  	  Object.setPrototypeOf(buf, Buffer.prototype);
  	  return buf;
  	}

  	function fromObject(obj) {
  	  if (Buffer.isBuffer(obj)) {
  	    var len = checked(obj.length) | 0;
  	    var buf = createBuffer(len);

  	    if (buf.length === 0) {
  	      return buf;
  	    }

  	    obj.copy(buf, 0, 0, len);
  	    return buf;
  	  }

  	  if (obj.length !== undefined) {
  	    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
  	      return createBuffer(0);
  	    }

  	    return fromArrayLike(obj);
  	  }

  	  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
  	    return fromArrayLike(obj.data);
  	  }
  	}

  	function checked(length) {
  	  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  	  // length is NaN (which is otherwise coerced to zero.)
  	  if (length >= K_MAX_LENGTH) {
  	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  	  }

  	  return length | 0;
  	}

  	function SlowBuffer(length) {
  	  if (+length != length) {
  	    // eslint-disable-line eqeqeq
  	    length = 0;
  	  }

  	  return Buffer.alloc(+length);
  	}

  	Buffer.isBuffer = function isBuffer(b) {
  	  return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
  	};

  	Buffer.compare = function compare(a, b) {
  	  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  	  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

  	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
  	    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  	  }

  	  if (a === b) return 0;
  	  var x = a.length;
  	  var y = b.length;

  	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
  	    if (a[i] !== b[i]) {
  	      x = a[i];
  	      y = b[i];
  	      break;
  	    }
  	  }

  	  if (x < y) return -1;
  	  if (y < x) return 1;
  	  return 0;
  	};

  	Buffer.isEncoding = function isEncoding(encoding) {
  	  switch (String(encoding).toLowerCase()) {
  	    case 'hex':
  	    case 'utf8':
  	    case 'utf-8':
  	    case 'ascii':
  	    case 'latin1':
  	    case 'binary':
  	    case 'base64':
  	    case 'ucs2':
  	    case 'ucs-2':
  	    case 'utf16le':
  	    case 'utf-16le':
  	      return true;

  	    default:
  	      return false;
  	  }
  	};

  	Buffer.concat = function concat(list, length) {
  	  if (!Array.isArray(list)) {
  	    throw new TypeError('"list" argument must be an Array of Buffers');
  	  }

  	  if (list.length === 0) {
  	    return Buffer.alloc(0);
  	  }

  	  var i;

  	  if (length === undefined) {
  	    length = 0;

  	    for (i = 0; i < list.length; ++i) {
  	      length += list[i].length;
  	    }
  	  }

  	  var buffer = Buffer.allocUnsafe(length);
  	  var pos = 0;

  	  for (i = 0; i < list.length; ++i) {
  	    var buf = list[i];

  	    if (isInstance(buf, Uint8Array)) {
  	      if (pos + buf.length > buffer.length) {
  	        Buffer.from(buf).copy(buffer, pos);
  	      } else {
  	        Uint8Array.prototype.set.call(buffer, buf, pos);
  	      }
  	    } else if (!Buffer.isBuffer(buf)) {
  	      throw new TypeError('"list" argument must be an Array of Buffers');
  	    } else {
  	      buf.copy(buffer, pos);
  	    }

  	    pos += buf.length;
  	  }

  	  return buffer;
  	};

  	function byteLength(string, encoding) {
  	  if (Buffer.isBuffer(string)) {
  	    return string.length;
  	  }

  	  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
  	    return string.byteLength;
  	  }

  	  if (typeof string !== 'string') {
  	    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
  	  }

  	  var len = string.length;
  	  var mustMatch = arguments.length > 2 && arguments[2] === true;
  	  if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

  	  var loweredCase = false;

  	  for (;;) {
  	    switch (encoding) {
  	      case 'ascii':
  	      case 'latin1':
  	      case 'binary':
  	        return len;

  	      case 'utf8':
  	      case 'utf-8':
  	        return utf8ToBytes(string).length;

  	      case 'ucs2':
  	      case 'ucs-2':
  	      case 'utf16le':
  	      case 'utf-16le':
  	        return len * 2;

  	      case 'hex':
  	        return len >>> 1;

  	      case 'base64':
  	        return base64ToBytes(string).length;

  	      default:
  	        if (loweredCase) {
  	          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
  	        }

  	        encoding = ('' + encoding).toLowerCase();
  	        loweredCase = true;
  	    }
  	  }
  	}

  	Buffer.byteLength = byteLength;

  	function slowToString(encoding, start, end) {
  	  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  	  // property of a typed array.
  	  // This behaves neither like String nor Uint8Array in that we set start/end
  	  // to their upper/lower bounds if the value passed is out of range.
  	  // undefined is handled specially as per ECMA-262 6th Edition,
  	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  	  if (start === undefined || start < 0) {
  	    start = 0;
  	  } // Return early if start > this.length. Done here to prevent potential uint32
  	  // coercion fail below.


  	  if (start > this.length) {
  	    return '';
  	  }

  	  if (end === undefined || end > this.length) {
  	    end = this.length;
  	  }

  	  if (end <= 0) {
  	    return '';
  	  } // Force coercion to uint32. This will also coerce falsey/NaN values to 0.


  	  end >>>= 0;
  	  start >>>= 0;

  	  if (end <= start) {
  	    return '';
  	  }

  	  if (!encoding) encoding = 'utf8';

  	  while (true) {
  	    switch (encoding) {
  	      case 'hex':
  	        return hexSlice(this, start, end);

  	      case 'utf8':
  	      case 'utf-8':
  	        return utf8Slice(this, start, end);

  	      case 'ascii':
  	        return asciiSlice(this, start, end);

  	      case 'latin1':
  	      case 'binary':
  	        return latin1Slice(this, start, end);

  	      case 'base64':
  	        return base64Slice(this, start, end);

  	      case 'ucs2':
  	      case 'ucs-2':
  	      case 'utf16le':
  	      case 'utf-16le':
  	        return utf16leSlice(this, start, end);

  	      default:
  	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
  	        encoding = (encoding + '').toLowerCase();
  	        loweredCase = true;
  	    }
  	  }
  	} // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
  	// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
  	// reliably in a browserify context because there could be multiple different
  	// copies of the 'buffer' package in use. This method works even for Buffer
  	// instances that were created from another copy of the `buffer` package.
  	// See: https://github.com/feross/buffer/issues/154


  	Buffer.prototype._isBuffer = true;

  	function swap(b, n, m) {
  	  var i = b[n];
  	  b[n] = b[m];
  	  b[m] = i;
  	}

  	Buffer.prototype.swap16 = function swap16() {
  	  var len = this.length;

  	  if (len % 2 !== 0) {
  	    throw new RangeError('Buffer size must be a multiple of 16-bits');
  	  }

  	  for (var i = 0; i < len; i += 2) {
  	    swap(this, i, i + 1);
  	  }

  	  return this;
  	};

  	Buffer.prototype.swap32 = function swap32() {
  	  var len = this.length;

  	  if (len % 4 !== 0) {
  	    throw new RangeError('Buffer size must be a multiple of 32-bits');
  	  }

  	  for (var i = 0; i < len; i += 4) {
  	    swap(this, i, i + 3);
  	    swap(this, i + 1, i + 2);
  	  }

  	  return this;
  	};

  	Buffer.prototype.swap64 = function swap64() {
  	  var len = this.length;

  	  if (len % 8 !== 0) {
  	    throw new RangeError('Buffer size must be a multiple of 64-bits');
  	  }

  	  for (var i = 0; i < len; i += 8) {
  	    swap(this, i, i + 7);
  	    swap(this, i + 1, i + 6);
  	    swap(this, i + 2, i + 5);
  	    swap(this, i + 3, i + 4);
  	  }

  	  return this;
  	};

  	Buffer.prototype.toString = function toString() {
  	  var length = this.length;
  	  if (length === 0) return '';
  	  if (arguments.length === 0) return utf8Slice(this, 0, length);
  	  return slowToString.apply(this, arguments);
  	};

  	Buffer.prototype.toLocaleString = Buffer.prototype.toString;

  	Buffer.prototype.equals = function equals(b) {
  	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  	  if (this === b) return true;
  	  return Buffer.compare(this, b) === 0;
  	};

  	Buffer.prototype.inspect = function inspect() {
  	  var str = '';
  	  var max = exports.INSPECT_MAX_BYTES;
  	  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  	  if (this.length > max) str += ' ... ';
  	  return '<Buffer ' + str + '>';
  	};

  	if (customInspectSymbol) {
  	  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
  	}

  	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  	  if (isInstance(target, Uint8Array)) {
  	    target = Buffer.from(target, target.offset, target.byteLength);
  	  }

  	  if (!Buffer.isBuffer(target)) {
  	    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
  	  }

  	  if (start === undefined) {
  	    start = 0;
  	  }

  	  if (end === undefined) {
  	    end = target ? target.length : 0;
  	  }

  	  if (thisStart === undefined) {
  	    thisStart = 0;
  	  }

  	  if (thisEnd === undefined) {
  	    thisEnd = this.length;
  	  }

  	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
  	    throw new RangeError('out of range index');
  	  }

  	  if (thisStart >= thisEnd && start >= end) {
  	    return 0;
  	  }

  	  if (thisStart >= thisEnd) {
  	    return -1;
  	  }

  	  if (start >= end) {
  	    return 1;
  	  }

  	  start >>>= 0;
  	  end >>>= 0;
  	  thisStart >>>= 0;
  	  thisEnd >>>= 0;
  	  if (this === target) return 0;
  	  var x = thisEnd - thisStart;
  	  var y = end - start;
  	  var len = Math.min(x, y);
  	  var thisCopy = this.slice(thisStart, thisEnd);
  	  var targetCopy = target.slice(start, end);

  	  for (var i = 0; i < len; ++i) {
  	    if (thisCopy[i] !== targetCopy[i]) {
  	      x = thisCopy[i];
  	      y = targetCopy[i];
  	      break;
  	    }
  	  }

  	  if (x < y) return -1;
  	  if (y < x) return 1;
  	  return 0;
  	}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  	//
  	// Arguments:
  	// - buffer - a Buffer to search
  	// - val - a string, Buffer, or number
  	// - byteOffset - an index into `buffer`; will be clamped to an int32
  	// - encoding - an optional encoding, relevant is val is a string
  	// - dir - true for indexOf, false for lastIndexOf


  	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  	  // Empty buffer means no match
  	  if (buffer.length === 0) return -1; // Normalize byteOffset

  	  if (typeof byteOffset === 'string') {
  	    encoding = byteOffset;
  	    byteOffset = 0;
  	  } else if (byteOffset > 0x7fffffff) {
  	    byteOffset = 0x7fffffff;
  	  } else if (byteOffset < -0x80000000) {
  	    byteOffset = -0x80000000;
  	  }

  	  byteOffset = +byteOffset; // Coerce to Number.

  	  if (numberIsNaN(byteOffset)) {
  	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
  	    byteOffset = dir ? 0 : buffer.length - 1;
  	  } // Normalize byteOffset: negative offsets start from the end of the buffer


  	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  	  if (byteOffset >= buffer.length) {
  	    if (dir) return -1;else byteOffset = buffer.length - 1;
  	  } else if (byteOffset < 0) {
  	    if (dir) byteOffset = 0;else return -1;
  	  } // Normalize val


  	  if (typeof val === 'string') {
  	    val = Buffer.from(val, encoding);
  	  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  	  if (Buffer.isBuffer(val)) {
  	    // Special case: looking for empty string/buffer always fails
  	    if (val.length === 0) {
  	      return -1;
  	    }

  	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  	  } else if (typeof val === 'number') {
  	    val = val & 0xFF; // Search for a byte value [0-255]

  	    if (typeof Uint8Array.prototype.indexOf === 'function') {
  	      if (dir) {
  	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
  	      } else {
  	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
  	      }
  	    }

  	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  	  }

  	  throw new TypeError('val must be string, number or Buffer');
  	}

  	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  	  var indexSize = 1;
  	  var arrLength = arr.length;
  	  var valLength = val.length;

  	  if (encoding !== undefined) {
  	    encoding = String(encoding).toLowerCase();

  	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
  	      if (arr.length < 2 || val.length < 2) {
  	        return -1;
  	      }

  	      indexSize = 2;
  	      arrLength /= 2;
  	      valLength /= 2;
  	      byteOffset /= 2;
  	    }
  	  }

  	  function read(buf, i) {
  	    if (indexSize === 1) {
  	      return buf[i];
  	    } else {
  	      return buf.readUInt16BE(i * indexSize);
  	    }
  	  }

  	  var i;

  	  if (dir) {
  	    var foundIndex = -1;

  	    for (i = byteOffset; i < arrLength; i++) {
  	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
  	        if (foundIndex === -1) foundIndex = i;
  	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
  	      } else {
  	        if (foundIndex !== -1) i -= i - foundIndex;
  	        foundIndex = -1;
  	      }
  	    }
  	  } else {
  	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

  	    for (i = byteOffset; i >= 0; i--) {
  	      var found = true;

  	      for (var j = 0; j < valLength; j++) {
  	        if (read(arr, i + j) !== read(val, j)) {
  	          found = false;
  	          break;
  	        }
  	      }

  	      if (found) return i;
  	    }
  	  }

  	  return -1;
  	}

  	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  	  return this.indexOf(val, byteOffset, encoding) !== -1;
  	};

  	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
  	};

  	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
  	};

  	function hexWrite(buf, string, offset, length) {
  	  offset = Number(offset) || 0;
  	  var remaining = buf.length - offset;

  	  if (!length) {
  	    length = remaining;
  	  } else {
  	    length = Number(length);

  	    if (length > remaining) {
  	      length = remaining;
  	    }
  	  }

  	  var strLen = string.length;

  	  if (length > strLen / 2) {
  	    length = strLen / 2;
  	  }

  	  for (var i = 0; i < length; ++i) {
  	    var parsed = parseInt(string.substr(i * 2, 2), 16);
  	    if (numberIsNaN(parsed)) return i;
  	    buf[offset + i] = parsed;
  	  }

  	  return i;
  	}

  	function utf8Write(buf, string, offset, length) {
  	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  	}

  	function asciiWrite(buf, string, offset, length) {
  	  return blitBuffer(asciiToBytes(string), buf, offset, length);
  	}

  	function base64Write(buf, string, offset, length) {
  	  return blitBuffer(base64ToBytes(string), buf, offset, length);
  	}

  	function ucs2Write(buf, string, offset, length) {
  	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  	}

  	Buffer.prototype.write = function write(string, offset, length, encoding) {
  	  // Buffer#write(string)
  	  if (offset === undefined) {
  	    encoding = 'utf8';
  	    length = this.length;
  	    offset = 0; // Buffer#write(string, encoding)
  	  } else if (length === undefined && typeof offset === 'string') {
  	    encoding = offset;
  	    length = this.length;
  	    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  	  } else if (isFinite(offset)) {
  	    offset = offset >>> 0;

  	    if (isFinite(length)) {
  	      length = length >>> 0;
  	      if (encoding === undefined) encoding = 'utf8';
  	    } else {
  	      encoding = length;
  	      length = undefined;
  	    }
  	  } else {
  	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  	  }

  	  var remaining = this.length - offset;
  	  if (length === undefined || length > remaining) length = remaining;

  	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
  	    throw new RangeError('Attempt to write outside buffer bounds');
  	  }

  	  if (!encoding) encoding = 'utf8';
  	  var loweredCase = false;

  	  for (;;) {
  	    switch (encoding) {
  	      case 'hex':
  	        return hexWrite(this, string, offset, length);

  	      case 'utf8':
  	      case 'utf-8':
  	        return utf8Write(this, string, offset, length);

  	      case 'ascii':
  	      case 'latin1':
  	      case 'binary':
  	        return asciiWrite(this, string, offset, length);

  	      case 'base64':
  	        // Warning: maxLength not taken into account in base64Write
  	        return base64Write(this, string, offset, length);

  	      case 'ucs2':
  	      case 'ucs-2':
  	      case 'utf16le':
  	      case 'utf-16le':
  	        return ucs2Write(this, string, offset, length);

  	      default:
  	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
  	        encoding = ('' + encoding).toLowerCase();
  	        loweredCase = true;
  	    }
  	  }
  	};

  	Buffer.prototype.toJSON = function toJSON() {
  	  return {
  	    type: 'Buffer',
  	    data: Array.prototype.slice.call(this._arr || this, 0)
  	  };
  	};

  	function base64Slice(buf, start, end) {
  	  if (start === 0 && end === buf.length) {
  	    return base64.fromByteArray(buf);
  	  } else {
  	    return base64.fromByteArray(buf.slice(start, end));
  	  }
  	}

  	function utf8Slice(buf, start, end) {
  	  end = Math.min(buf.length, end);
  	  var res = [];
  	  var i = start;

  	  while (i < end) {
  	    var firstByte = buf[i];
  	    var codePoint = null;
  	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

  	    if (i + bytesPerSequence <= end) {
  	      var secondByte, thirdByte, fourthByte, tempCodePoint;

  	      switch (bytesPerSequence) {
  	        case 1:
  	          if (firstByte < 0x80) {
  	            codePoint = firstByte;
  	          }

  	          break;

  	        case 2:
  	          secondByte = buf[i + 1];

  	          if ((secondByte & 0xC0) === 0x80) {
  	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

  	            if (tempCodePoint > 0x7F) {
  	              codePoint = tempCodePoint;
  	            }
  	          }

  	          break;

  	        case 3:
  	          secondByte = buf[i + 1];
  	          thirdByte = buf[i + 2];

  	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
  	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

  	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
  	              codePoint = tempCodePoint;
  	            }
  	          }

  	          break;

  	        case 4:
  	          secondByte = buf[i + 1];
  	          thirdByte = buf[i + 2];
  	          fourthByte = buf[i + 3];

  	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
  	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

  	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
  	              codePoint = tempCodePoint;
  	            }
  	          }

  	      }
  	    }

  	    if (codePoint === null) {
  	      // we did not generate a valid codePoint so insert a
  	      // replacement char (U+FFFD) and advance only 1 byte
  	      codePoint = 0xFFFD;
  	      bytesPerSequence = 1;
  	    } else if (codePoint > 0xFFFF) {
  	      // encode to utf16 (surrogate pair dance)
  	      codePoint -= 0x10000;
  	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
  	      codePoint = 0xDC00 | codePoint & 0x3FF;
  	    }

  	    res.push(codePoint);
  	    i += bytesPerSequence;
  	  }

  	  return decodeCodePointsArray(res);
  	} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  	// the lowest limit is Chrome, with 0x10000 args.
  	// We go 1 magnitude less, for safety


  	var MAX_ARGUMENTS_LENGTH = 0x1000;

  	function decodeCodePointsArray(codePoints) {
  	  var len = codePoints.length;

  	  if (len <= MAX_ARGUMENTS_LENGTH) {
  	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  	  } // Decode in chunks to avoid "call stack size exceeded".


  	  var res = '';
  	  var i = 0;

  	  while (i < len) {
  	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  	  }

  	  return res;
  	}

  	function asciiSlice(buf, start, end) {
  	  var ret = '';
  	  end = Math.min(buf.length, end);

  	  for (var i = start; i < end; ++i) {
  	    ret += String.fromCharCode(buf[i] & 0x7F);
  	  }

  	  return ret;
  	}

  	function latin1Slice(buf, start, end) {
  	  var ret = '';
  	  end = Math.min(buf.length, end);

  	  for (var i = start; i < end; ++i) {
  	    ret += String.fromCharCode(buf[i]);
  	  }

  	  return ret;
  	}

  	function hexSlice(buf, start, end) {
  	  var len = buf.length;
  	  if (!start || start < 0) start = 0;
  	  if (!end || end < 0 || end > len) end = len;
  	  var out = '';

  	  for (var i = start; i < end; ++i) {
  	    out += hexSliceLookupTable[buf[i]];
  	  }

  	  return out;
  	}

  	function utf16leSlice(buf, start, end) {
  	  var bytes = buf.slice(start, end);
  	  var res = ''; // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)

  	  for (var i = 0; i < bytes.length - 1; i += 2) {
  	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  	  }

  	  return res;
  	}

  	Buffer.prototype.slice = function slice(start, end) {
  	  var len = this.length;
  	  start = ~~start;
  	  end = end === undefined ? len : ~~end;

  	  if (start < 0) {
  	    start += len;
  	    if (start < 0) start = 0;
  	  } else if (start > len) {
  	    start = len;
  	  }

  	  if (end < 0) {
  	    end += len;
  	    if (end < 0) end = 0;
  	  } else if (end > len) {
  	    end = len;
  	  }

  	  if (end < start) end = start;
  	  var newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

  	  Object.setPrototypeOf(newBuf, Buffer.prototype);
  	  return newBuf;
  	};
  	/*
  	 * Need to make sure that buffer isn't trying to write out of bounds.
  	 */


  	function checkOffset(offset, ext, length) {
  	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
  	}

  	Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkOffset(offset, byteLength, this.length);
  	  var val = this[offset];
  	  var mul = 1;
  	  var i = 0;

  	  while (++i < byteLength && (mul *= 0x100)) {
  	    val += this[offset + i] * mul;
  	  }

  	  return val;
  	};

  	Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;

  	  if (!noAssert) {
  	    checkOffset(offset, byteLength, this.length);
  	  }

  	  var val = this[offset + --byteLength];
  	  var mul = 1;

  	  while (byteLength > 0 && (mul *= 0x100)) {
  	    val += this[offset + --byteLength] * mul;
  	  }

  	  return val;
  	};

  	Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 1, this.length);
  	  return this[offset];
  	};

  	Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  return this[offset] | this[offset + 1] << 8;
  	};

  	Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  return this[offset] << 8 | this[offset + 1];
  	};

  	Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
  	};

  	Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
  	};

  	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkOffset(offset, byteLength, this.length);
  	  var val = this[offset];
  	  var mul = 1;
  	  var i = 0;

  	  while (++i < byteLength && (mul *= 0x100)) {
  	    val += this[offset + i] * mul;
  	  }

  	  mul *= 0x80;
  	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  	  return val;
  	};

  	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;
  	  if (!noAssert) checkOffset(offset, byteLength, this.length);
  	  var i = byteLength;
  	  var mul = 1;
  	  var val = this[offset + --i];

  	  while (i > 0 && (mul *= 0x100)) {
  	    val += this[offset + --i] * mul;
  	  }

  	  mul *= 0x80;
  	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  	  return val;
  	};

  	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 1, this.length);
  	  if (!(this[offset] & 0x80)) return this[offset];
  	  return (0xff - this[offset] + 1) * -1;
  	};

  	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  var val = this[offset] | this[offset + 1] << 8;
  	  return val & 0x8000 ? val | 0xFFFF0000 : val;
  	};

  	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 2, this.length);
  	  var val = this[offset + 1] | this[offset] << 8;
  	  return val & 0x8000 ? val | 0xFFFF0000 : val;
  	};

  	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
  	};

  	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
  	};

  	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return ieee754$1.read(this, offset, true, 23, 4);
  	};

  	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 4, this.length);
  	  return ieee754$1.read(this, offset, false, 23, 4);
  	};

  	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 8, this.length);
  	  return ieee754$1.read(this, offset, true, 52, 8);
  	};

  	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  	  offset = offset >>> 0;
  	  if (!noAssert) checkOffset(offset, 8, this.length);
  	  return ieee754$1.read(this, offset, false, 52, 8);
  	};

  	function checkInt(buf, value, offset, ext, max, min) {
  	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  	}

  	Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;

  	  if (!noAssert) {
  	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
  	    checkInt(this, value, offset, byteLength, maxBytes, 0);
  	  }

  	  var mul = 1;
  	  var i = 0;
  	  this[offset] = value & 0xFF;

  	  while (++i < byteLength && (mul *= 0x100)) {
  	    this[offset + i] = value / mul & 0xFF;
  	  }

  	  return offset + byteLength;
  	};

  	Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  byteLength = byteLength >>> 0;

  	  if (!noAssert) {
  	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
  	    checkInt(this, value, offset, byteLength, maxBytes, 0);
  	  }

  	  var i = byteLength - 1;
  	  var mul = 1;
  	  this[offset + i] = value & 0xFF;

  	  while (--i >= 0 && (mul *= 0x100)) {
  	    this[offset + i] = value / mul & 0xFF;
  	  }

  	  return offset + byteLength;
  	};

  	Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  	  this[offset] = value & 0xff;
  	  return offset + 1;
  	};

  	Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  	  this[offset] = value & 0xff;
  	  this[offset + 1] = value >>> 8;
  	  return offset + 2;
  	};

  	Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  	  this[offset] = value >>> 8;
  	  this[offset + 1] = value & 0xff;
  	  return offset + 2;
  	};

  	Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  	  this[offset + 3] = value >>> 24;
  	  this[offset + 2] = value >>> 16;
  	  this[offset + 1] = value >>> 8;
  	  this[offset] = value & 0xff;
  	  return offset + 4;
  	};

  	Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  	  this[offset] = value >>> 24;
  	  this[offset + 1] = value >>> 16;
  	  this[offset + 2] = value >>> 8;
  	  this[offset + 3] = value & 0xff;
  	  return offset + 4;
  	};

  	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;

  	  if (!noAssert) {
  	    var limit = Math.pow(2, 8 * byteLength - 1);
  	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  	  }

  	  var i = 0;
  	  var mul = 1;
  	  var sub = 0;
  	  this[offset] = value & 0xFF;

  	  while (++i < byteLength && (mul *= 0x100)) {
  	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
  	      sub = 1;
  	    }

  	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  	  }

  	  return offset + byteLength;
  	};

  	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;

  	  if (!noAssert) {
  	    var limit = Math.pow(2, 8 * byteLength - 1);
  	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  	  }

  	  var i = byteLength - 1;
  	  var mul = 1;
  	  var sub = 0;
  	  this[offset + i] = value & 0xFF;

  	  while (--i >= 0 && (mul *= 0x100)) {
  	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
  	      sub = 1;
  	    }

  	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  	  }

  	  return offset + byteLength;
  	};

  	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  	  if (value < 0) value = 0xff + value + 1;
  	  this[offset] = value & 0xff;
  	  return offset + 1;
  	};

  	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  	  this[offset] = value & 0xff;
  	  this[offset + 1] = value >>> 8;
  	  return offset + 2;
  	};

  	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  	  this[offset] = value >>> 8;
  	  this[offset + 1] = value & 0xff;
  	  return offset + 2;
  	};

  	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  	  this[offset] = value & 0xff;
  	  this[offset + 1] = value >>> 8;
  	  this[offset + 2] = value >>> 16;
  	  this[offset + 3] = value >>> 24;
  	  return offset + 4;
  	};

  	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;
  	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  	  if (value < 0) value = 0xffffffff + value + 1;
  	  this[offset] = value >>> 24;
  	  this[offset + 1] = value >>> 16;
  	  this[offset + 2] = value >>> 8;
  	  this[offset + 3] = value & 0xff;
  	  return offset + 4;
  	};

  	function checkIEEE754(buf, value, offset, ext, max, min) {
  	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  	  if (offset < 0) throw new RangeError('Index out of range');
  	}

  	function writeFloat(buf, value, offset, littleEndian, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;

  	  if (!noAssert) {
  	    checkIEEE754(buf, value, offset, 4);
  	  }

  	  ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
  	  return offset + 4;
  	}

  	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  	  return writeFloat(this, value, offset, true, noAssert);
  	};

  	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  	  return writeFloat(this, value, offset, false, noAssert);
  	};

  	function writeDouble(buf, value, offset, littleEndian, noAssert) {
  	  value = +value;
  	  offset = offset >>> 0;

  	  if (!noAssert) {
  	    checkIEEE754(buf, value, offset, 8);
  	  }

  	  ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
  	  return offset + 8;
  	}

  	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  	  return writeDouble(this, value, offset, true, noAssert);
  	};

  	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  	  return writeDouble(this, value, offset, false, noAssert);
  	}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


  	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  	  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  	  if (!start) start = 0;
  	  if (!end && end !== 0) end = this.length;
  	  if (targetStart >= target.length) targetStart = target.length;
  	  if (!targetStart) targetStart = 0;
  	  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  	  if (end === start) return 0;
  	  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  	  if (targetStart < 0) {
  	    throw new RangeError('targetStart out of bounds');
  	  }

  	  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  	  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  	  if (end > this.length) end = this.length;

  	  if (target.length - targetStart < end - start) {
  	    end = target.length - targetStart + start;
  	  }

  	  var len = end - start;

  	  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
  	    // Use built-in when available, missing from IE11
  	    this.copyWithin(targetStart, start, end);
  	  } else {
  	    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  	  }

  	  return len;
  	}; // Usage:
  	//    buffer.fill(number[, offset[, end]])
  	//    buffer.fill(buffer[, offset[, end]])
  	//    buffer.fill(string[, offset[, end]][, encoding])


  	Buffer.prototype.fill = function fill(val, start, end, encoding) {
  	  // Handle string cases:
  	  if (typeof val === 'string') {
  	    if (typeof start === 'string') {
  	      encoding = start;
  	      start = 0;
  	      end = this.length;
  	    } else if (typeof end === 'string') {
  	      encoding = end;
  	      end = this.length;
  	    }

  	    if (encoding !== undefined && typeof encoding !== 'string') {
  	      throw new TypeError('encoding must be a string');
  	    }

  	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
  	      throw new TypeError('Unknown encoding: ' + encoding);
  	    }

  	    if (val.length === 1) {
  	      var code = val.charCodeAt(0);

  	      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
  	        // Fast path: If `val` fits into a single byte, use that numeric value.
  	        val = code;
  	      }
  	    }
  	  } else if (typeof val === 'number') {
  	    val = val & 255;
  	  } else if (typeof val === 'boolean') {
  	    val = Number(val);
  	  } // Invalid ranges are not set to a default, so can range check early.


  	  if (start < 0 || this.length < start || this.length < end) {
  	    throw new RangeError('Out of range index');
  	  }

  	  if (end <= start) {
  	    return this;
  	  }

  	  start = start >>> 0;
  	  end = end === undefined ? this.length : end >>> 0;
  	  if (!val) val = 0;
  	  var i;

  	  if (typeof val === 'number') {
  	    for (i = start; i < end; ++i) {
  	      this[i] = val;
  	    }
  	  } else {
  	    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
  	    var len = bytes.length;

  	    if (len === 0) {
  	      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
  	    }

  	    for (i = 0; i < end - start; ++i) {
  	      this[i + start] = bytes[i % len];
  	    }
  	  }

  	  return this;
  	}; // HELPER FUNCTIONS
  	// ================


  	var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

  	function base64clean(str) {
  	  // Node takes equal signs as end of the Base64 encoding
  	  str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

  	  str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  	  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  	  while (str.length % 4 !== 0) {
  	    str = str + '=';
  	  }

  	  return str;
  	}

  	function utf8ToBytes(string, units) {
  	  units = units || Infinity;
  	  var codePoint;
  	  var length = string.length;
  	  var leadSurrogate = null;
  	  var bytes = [];

  	  for (var i = 0; i < length; ++i) {
  	    codePoint = string.charCodeAt(i); // is surrogate component

  	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
  	      // last char was a lead
  	      if (!leadSurrogate) {
  	        // no lead yet
  	        if (codePoint > 0xDBFF) {
  	          // unexpected trail
  	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	          continue;
  	        } else if (i + 1 === length) {
  	          // unpaired lead
  	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	          continue;
  	        } // valid lead


  	        leadSurrogate = codePoint;
  	        continue;
  	      } // 2 leads in a row


  	      if (codePoint < 0xDC00) {
  	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	        leadSurrogate = codePoint;
  	        continue;
  	      } // valid surrogate pair


  	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
  	    } else if (leadSurrogate) {
  	      // valid bmp char, but last char was a lead
  	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
  	    }

  	    leadSurrogate = null; // encode utf8

  	    if (codePoint < 0x80) {
  	      if ((units -= 1) < 0) break;
  	      bytes.push(codePoint);
  	    } else if (codePoint < 0x800) {
  	      if ((units -= 2) < 0) break;
  	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
  	    } else if (codePoint < 0x10000) {
  	      if ((units -= 3) < 0) break;
  	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
  	    } else if (codePoint < 0x110000) {
  	      if ((units -= 4) < 0) break;
  	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
  	    } else {
  	      throw new Error('Invalid code point');
  	    }
  	  }

  	  return bytes;
  	}

  	function asciiToBytes(str) {
  	  var byteArray = [];

  	  for (var i = 0; i < str.length; ++i) {
  	    // Node's code seems to be doing this and not & 0x7F..
  	    byteArray.push(str.charCodeAt(i) & 0xFF);
  	  }

  	  return byteArray;
  	}

  	function utf16leToBytes(str, units) {
  	  var c, hi, lo;
  	  var byteArray = [];

  	  for (var i = 0; i < str.length; ++i) {
  	    if ((units -= 2) < 0) break;
  	    c = str.charCodeAt(i);
  	    hi = c >> 8;
  	    lo = c % 256;
  	    byteArray.push(lo);
  	    byteArray.push(hi);
  	  }

  	  return byteArray;
  	}

  	function base64ToBytes(str) {
  	  return base64.toByteArray(base64clean(str));
  	}

  	function blitBuffer(src, dst, offset, length) {
  	  for (var i = 0; i < length; ++i) {
  	    if (i + offset >= dst.length || i >= src.length) break;
  	    dst[i + offset] = src[i];
  	  }

  	  return i;
  	} // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
  	// the `instanceof` check but they should be treated as of that type.
  	// See: https://github.com/feross/buffer/issues/166


  	function isInstance(obj, type) {
  	  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
  	}

  	function numberIsNaN(obj) {
  	  // For IE11 support
  	  return obj !== obj; // eslint-disable-line no-self-compare
  	} // Create lookup table for `toString('hex')`
  	// See: https://github.com/feross/buffer/issues/219


  	var hexSliceLookupTable = function () {
  	  var alphabet = '0123456789abcdef';
  	  var table = new Array(256);

  	  for (var i = 0; i < 16; ++i) {
  	    var i16 = i * 16;

  	    for (var j = 0; j < 16; ++j) {
  	      table[i16 + j] = alphabet[i] + alphabet[j];
  	    }
  	  }

  	  return table;
  	}();
  } (buffer));

  /* global Blob, FileReader */

  // Code exacted from https://github.com/feross/blob-to-buffer.
  // Because it have not import Buffer module for browser usage.
  var Buffer = buffer.Buffer;

  var blobToBuffer$1 = function blobToBuffer(blob, cb) {
    if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
      throw new Error('first argument must be a Blob');
    }

    if (typeof cb !== 'function') {
      throw new Error('second argument must be a function');
    }

    var reader = new FileReader();

    function onLoadEnd(e) {
      reader.removeEventListener('loadend', onLoadEnd, false);
      if (e.error) cb(e.error);else cb(null, new Buffer(reader.result));
    }

    reader.addEventListener('loadend', onLoadEnd, false);
    reader.readAsArrayBuffer(blob);
  };

  function toArray(arrayLikeObj) {
    if (!arrayLikeObj) return [];
    return Array.prototype.slice.call(arrayLikeObj);
  }

  function extend(destObject) {
    var args = toArray(arguments);

    if (args.length == 1) {
      return destObject;
    }

    args.shift(); // 从前往后遍历

    for (var i = 0, l = args.length; i < l; i++) {
      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          destObject[key] = args[i][key];
        }
      }
    }

    return destObject;
  }

  function isTypeOf(something, type) {
    if (!type) return false;
    type = type.toLowerCase();
    var realTypeString = Object.prototype.toString.call(something);
    return realTypeString.toLowerCase() === '[object ' + type + ']';
  }

  function isArray(something) {
    return isTypeOf(something, 'array');
  }

  function isFunction(something) {
    return typeof something === 'function';
  }

  function isString(something) {
    return typeof something === 'string';
  }

  function isDefined(something) {
    return !(typeof something === 'undefined');
  }

  function isObject(something) {
    return typeof something === 'object';
  }

  function isReg(something) {
    return isTypeOf(something, 'regexp');
  }
  /**
   *
   * @param {Function/String/RegExp} rule
   * @param {String}                 entryName
   * @return {Boolean}
   */


  function isThisWhatYouNeed(rule, entryName) {
    return isFunction(rule) ? rule(entryName) : isString(rule) ? entryName.toLowerCase().indexOf(rule.toLowerCase()) > -1 : isReg(rule) ? rule.test(entryName.toLowerCase()) : false;
  }
  /**
   *
   * @param str
   * @param prefix
   * @returns {boolean}
   */


  function startWith(str, prefix) {
    return str.indexOf(prefix) === 0;
  }

  function isResouces(attrValue) {
    return startWith(attrValue, 'resourceId:');
  }

  function transKeyToMatchResourceMap(resourceId) {
    return '@' + resourceId.replace('resourceId:0x', '').toUpperCase();
  }

  function castLogger(doWhat, fromWhen) {
    console.log(doWhat + ' cost: ' + (Date.now() - fromWhen) + 'ms');
  }

  var utils$1 = {
    toArray: toArray,
    extend: extend,
    startWith: startWith,
    isResouces: isResouces,
    transKeyToMatchResourceMap: transKeyToMatchResourceMap,
    castLogger: castLogger,
    isTypeOf: isTypeOf,
    isArray: isArray,
    isFunction: isFunction,
    isString: isString,
    isDefined: isDefined,
    isObject: isObject,
    isReg: isReg,
    isThisWhatYouNeed: isThisWhatYouNeed
  };

  var zip = zip_1;

  var blobToBuffer = blobToBuffer$1;

  var utils = utils$1;

  function Unzip(file
  /* or blob */
  ) {
    if (!(file instanceof Blob)) {
      throw new Error('Invalid input, expect the first param to be a File/Blob.');
    }

    if (!(this instanceof Unzip)) return new Unzip(file);
    this.file = file;
  }

  Unzip.prototype.destroy = function () {
    this.file = null;
  };
  /**
   *
   * @param {Array<String>} whatYouNeed
   * @param {Object} options       (Optional)
   * @param {String} options.type  Currently, only support 'blob', by default it will return Buffers
   * @param {Boolean} options.multiple If true, it will collect all the file which match the whtaYouNeed rule
   * @param callback Will be called like callback(err, buffers)
   */


  Unzip.prototype.getBuffer = function (whatYouNeed, options, callback) {
    if (!utils.isArray(whatYouNeed) || !utils.isFunction(callback)) {
      return callback(new Error('getBuffer: invalid param, expect first param to be an Array and the second param to be a callback function'));
    }

    if (utils.isFunction(options)) {
      callback = options;
      options = {};
    }

    whatYouNeed = whatYouNeed.map(function (rule) {
      if (typeof rule === 'string') {
        rule = rule.split('\u0000').join('');
      }

      return rule;
    });
    var isMultiple = options && options.multiple || false;
    this.getEntries(function (error, entries) {
      if (error) return callback(error);
      var matchedEntries = {};
      entries.forEach(function (entry) {
        // Add regexp support
        return whatYouNeed.some(function (entryName) {
          if (utils.isThisWhatYouNeed(entryName, entry.filename)) {
            if (isMultiple) {
              var obj = {
                fileName: entryName,
                buffer: entry
              };
              matchedEntries[entryName] ? matchedEntries[entryName].push(obj) : matchedEntries[entryName] = [obj];
            } else {
              matchedEntries[entryName] = entry;
            }

            return true;
          }
        });
      });
      iterator(matchedEntries, options, function (error, bufferArray) {
        callback(error, bufferArray, entries.length);
      });
    });
  };

  Unzip.prototype.getEntries = function (callback) {
    zip.createReader(new zip.BlobReader(this.file), function (zipReader) {
      zipReader.getEntries(function (entries) {
        callback(null, entries, entries.length);
      });
    }, callback);
  };

  Unzip.getEntryData = function (entry, callback) {
    var writer = new zip.BlobWriter();
    entry.getData(writer, function (blob) {
      callback(null, blob, entry.length);
    });
  };

  function iterator(entries, options, callback) {
    var output = {};
    var serialize = [];
    var index = 0;

    for (var entryName in entries) {
      serialize.push({
        name: entryName,
        entry: entries[entryName]
      });
    }

    if (!serialize.length) {
      callback(null, {}, serialize.length);
    }

    serialize.forEach(function (entryInfo) {
      (function (name, entry) {
        Unzip.getEntryData(entry, function (err, blob) {
          if (err) return callback(err);

          if (options.type === 'blob') {
            add(name, blob);

            if (index >= serialize.length) {
              callback(null, output, serialize.length);
            }
          } else {
            blobToBuffer(blob, function (error, buffer) {
              if (error) {
                console.error(error);
                return callback(error);
              }

              add(name, buffer);

              if (index >= serialize.length) {
                callback(null, output, serialize.length);
              }
            });
          }
        });
      })(entryInfo.name, entryInfo.entry);
    });

    function add(name, data) {
      index++;
      output[name] = data;
    }
  }

  var zipBrowser = Unzip;

  const form = document.querySelector("#file-form");
  const fileInput = document.querySelector("#file-input");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const file = fileInput.files[0];
    if (!file) return;
    const zip = new zipBrowser(file);
    zip.getEntries((error, entries) => {
      if (error) return console.error(error);
      const fileNames = entries.map(entry => entry.filename);
      zip.getBuffer(fileNames, {}, (error, buffers) => {
        if (error) return console.error(error);
        Object.keys(buffers).forEach(key => {
          const buffer = buffers[key];
          console.log(key, buffer.toString());
        });
      });
    });
  });

})();
