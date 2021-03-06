(function () {
	'use strict';

	function getAugmentedNamespace(n) {
	  var f = n.default;
		if (typeof f == "function") {
			var a = function () {
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

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

	base64Js.byteLength = byteLength$1;
	base64Js.toByteArray = toByteArray$1;
	base64Js.fromByteArray = fromByteArray$1;
	var lookup$1 = [];
	var revLookup$1 = [];
	var Arr$1 = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup$1[i] = code[i];
	  revLookup$1[code.charCodeAt(i)] = i;
	} // Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications


	revLookup$1['-'.charCodeAt(0)] = 62;
	revLookup$1['_'.charCodeAt(0)] = 63;

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


	function byteLength$1(b64) {
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];
	  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}

	function _byteLength(b64, validLen, placeHoldersLen) {
	  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}

	function toByteArray$1(b64) {
	  var tmp;
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];
	  var arr = new Arr$1(_byteLength(b64, validLen, placeHoldersLen));
	  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

	  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
	  var i;

	  for (i = 0; i < len; i += 4) {
	    tmp = revLookup$1[b64.charCodeAt(i)] << 18 | revLookup$1[b64.charCodeAt(i + 1)] << 12 | revLookup$1[b64.charCodeAt(i + 2)] << 6 | revLookup$1[b64.charCodeAt(i + 3)];
	    arr[curByte++] = tmp >> 16 & 0xFF;
	    arr[curByte++] = tmp >> 8 & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 2) {
	    tmp = revLookup$1[b64.charCodeAt(i)] << 2 | revLookup$1[b64.charCodeAt(i + 1)] >> 4;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 1) {
	    tmp = revLookup$1[b64.charCodeAt(i)] << 10 | revLookup$1[b64.charCodeAt(i + 1)] << 4 | revLookup$1[b64.charCodeAt(i + 2)] >> 2;
	    arr[curByte++] = tmp >> 8 & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  return arr;
	}

	function tripletToBase64$1(num) {
	  return lookup$1[num >> 18 & 0x3F] + lookup$1[num >> 12 & 0x3F] + lookup$1[num >> 6 & 0x3F] + lookup$1[num & 0x3F];
	}

	function encodeChunk$1(uint8, start, end) {
	  var tmp;
	  var output = [];

	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
	    output.push(tripletToBase64$1(tmp));
	  }

	  return output.join('');
	}

	function fromByteArray$1(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3
	  // go through the array every three bytes, we'll deal with trailing stuff later

	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk$1(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  } // pad the end with zeros, but make sure to not forget the extra bytes


	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    parts.push(lookup$1[tmp >> 2] + lookup$1[tmp << 4 & 0x3F] + '==');
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    parts.push(lookup$1[tmp >> 10] + lookup$1[tmp >> 4 & 0x3F] + lookup$1[tmp << 2 & 0x3F] + '=');
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
	var Buffer$3 = buffer.Buffer;

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
	    if (e.error) cb(e.error);else cb(null, new Buffer$3(reader.result));
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

	  args.shift(); // ??????????????????

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

	function isArray$5(something) {
	  return isTypeOf(something, 'array');
	}

	function isFunction$1(something) {
	  return typeof something === 'function';
	}

	function isString$1(something) {
	  return typeof something === 'string';
	}

	function isDefined(something) {
	  return !(typeof something === 'undefined');
	}

	function isObject$1(something) {
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
	  return isFunction$1(rule) ? rule(entryName) : isString$1(rule) ? entryName.toLowerCase().indexOf(rule.toLowerCase()) > -1 : isReg(rule) ? rule.test(entryName.toLowerCase()) : false;
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
	  isArray: isArray$5,
	  isFunction: isFunction$1,
	  isString: isString$1,
	  isDefined: isDefined,
	  isObject: isObject$1,
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

	var global$1 = (typeof global !== "undefined" ? global :
	  typeof self !== "undefined" ? self :
	  typeof window !== "undefined" ? window : {});

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global$1.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof global$1.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	var title = 'browser';
	var platform = 'browser';
	var browser = true;
	var env = {};
	var argv = [];
	var version = ''; // empty string to avoid regexp issues
	var versions = {};
	var release = {};
	var config = {};

	function noop() {}

	var on = noop;
	var addListener = noop;
	var once = noop;
	var off = noop;
	var removeListener = noop;
	var removeAllListeners = noop;
	var emit = noop;

	function binding(name) {
	    throw new Error('process.binding is not supported');
	}

	function cwd () { return '/' }
	function chdir (dir) {
	    throw new Error('process.chdir is not supported');
	}function umask() { return 0; }

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance = global$1.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	// generate timestamp or delta
	// see http://nodejs.org/api/process.html#process_process_hrtime
	function hrtime(previousTimestamp){
	  var clocktime = performanceNow.call(performance)*1e-3;
	  var seconds = Math.floor(clocktime);
	  var nanoseconds = Math.floor((clocktime%1)*1e9);
	  if (previousTimestamp) {
	    seconds = seconds - previousTimestamp[0];
	    nanoseconds = nanoseconds - previousTimestamp[1];
	    if (nanoseconds<0) {
	      seconds--;
	      nanoseconds += 1e9;
	    }
	  }
	  return [seconds,nanoseconds]
	}

	var startTime = new Date();
	function uptime() {
	  var currentTime = new Date();
	  var dif = currentTime - startTime;
	  return dif / 1000;
	}

	var browser$1 = {
	  nextTick: nextTick,
	  title: title,
	  browser: browser,
	  env: env,
	  argv: argv,
	  version: version,
	  versions: versions,
	  on: on,
	  addListener: addListener,
	  once: once,
	  off: off,
	  removeListener: removeListener,
	  removeAllListeners: removeAllListeners,
	  emit: emit,
	  binding: binding,
	  cwd: cwd,
	  chdir: chdir,
	  umask: umask,
	  hrtime: hrtime,
	  platform: platform,
	  release: release,
	  config: config,
	  uptime: uptime
	};

	var xml$1 = {exports: {}};

	var XML_CHARACTER_MAP = {
	  '&': '&amp;',
	  '"': '&quot;',
	  "'": '&apos;',
	  '<': '&lt;',
	  '>': '&gt;'
	};

	function escapeForXML$1(string) {
	  return string && string.replace ? string.replace(/([&"<>'])/g, function (str, item) {
	    return XML_CHARACTER_MAP[item];
	  }) : string;
	}

	var escapeForXML_1 = escapeForXML$1;

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.usingDomains = false;

	EventEmitter.prototype.domain = undefined;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	EventEmitter.init = function() {
	  this.domain = null;
	  if (EventEmitter.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active ) ;
	  }

	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n))
	    throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn)
	    handler.call(self);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn)
	    handler.call(self, arg1);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn)
	    handler.call(self, arg1, arg2);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn)
	    handler.call(self, arg1, arg2, arg3);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2, arg3);
	  }
	}

	function emitMany(handler, isFn, self, args) {
	  if (isFn)
	    handler.apply(self, args);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].apply(self, args);
	  }
	}

	EventEmitter.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var doError = (type === 'error');

	  events = this._events;
	  if (events)
	    doError = (doError && events.error == null);
	  else if (!doError)
	    return false;

	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er)
	        er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }

	  handler = events[type];

	  if (!handler)
	    return false;

	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++)
	        args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');

	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] :
	                                          [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' +
	                            existing.length + ' ' + type + ' listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }

	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');

	      events = this._events;
	      if (!events)
	        return this;

	      list = events[type];
	      if (!list)
	        return this;

	      if (list === listener || (list.listener && list.listener === listener)) {
	        if (--this._eventsCount === 0)
	          this._events = new EventHandlers();
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length; i-- > 0;) {
	          if (list[i] === listener ||
	              (list[i].listener && list[i].listener === listener)) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (list.length === 1) {
	          list[0] = undefined;
	          if (--this._eventsCount === 0) {
	            this._events = new EventHandlers();
	            return this;
	          } else {
	            delete events[type];
	          }
	        } else {
	          spliceOne(list, position);
	        }

	        if (events.removeListener)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };
	    
	// Alias for removeListener added in NodeJS 10.0
	// https://nodejs.org/api/events.html#events_emitter_off_eventname_listener
	EventEmitter.prototype.off = function(type, listener){
	    return this.removeListener(type, listener);
	};

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events;

	      events = this._events;
	      if (!events)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (!events.removeListener) {
	        if (arguments.length === 0) {
	          this._events = new EventHandlers();
	          this._eventsCount = 0;
	        } else if (events[type]) {
	          if (--this._eventsCount === 0)
	            this._events = new EventHandlers();
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        for (var i = 0, key; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = new EventHandlers();
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners) {
	        // LIFO order
	        do {
	          this.removeListener(type, listeners[listeners.length - 1]);
	        } while (listeners[0]);
	      }

	      return this;
	    };

	EventEmitter.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;

	  if (!events)
	    ret = [];
	  else {
	    evlistener = events[type];
	    if (!evlistener)
	      ret = [];
	    else if (typeof evlistener === 'function')
	      ret = [evlistener.listener || evlistener];
	    else
	      ret = unwrapListeners(evlistener);
	  }

	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount$1.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount$1;
	function listenerCount$1(type) {
	  var events = this._events;

	  if (events) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
	    list[i] = list[k];
	  list.pop();
	}

	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--)
	    copy[i] = arr[i];
	  return copy;
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

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

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray$4 = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer$2.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
	  ? global$1.TYPED_ARRAY_SUPPORT
	  : true;

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	kMaxLength();

	function kMaxLength () {
	  return Buffer$2.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer$2.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer$2(length);
	    }
	    that.length = length;
	  }

	  return that
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

	function Buffer$2 (arg, encodingOrOffset, length) {
	  if (!Buffer$2.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$2)) {
	    return new Buffer$2(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer$2.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer$2._augment = function (arr) {
	  arr.__proto__ = Buffer$2.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer$2.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	  Buffer$2.prototype.__proto__ = Uint8Array.prototype;
	  Buffer$2.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer$2.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer$2.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer$2.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer$2.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer$2.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer$2.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray$4(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	Buffer$2.isBuffer = isBuffer;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer$2.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer$2.isEncoding = function isEncoding (encoding) {
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
	      return true
	    default:
	      return false
	  }
	};

	Buffer$2.concat = function concat (list, length) {
	  if (!isArray$4(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer$2.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer$2.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer$2.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer$2.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer$2.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer$2.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer$2.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer$2.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer$2.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer$2.compare(this, b) === 0
	};

	Buffer$2.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer$2.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
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
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer$2.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer$2.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
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
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer$2.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer$2.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer$2.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
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

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer$2.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer$2.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
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

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer$2.prototype.slice = function slice (start, end) {
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

	  var newBuf;
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer$2.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer$2(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer$2.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer$2.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer$2.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer$2.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer$2.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer$2.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer$2.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer$2.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$2.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$2.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer$2.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$2.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$2.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer$2.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer$2.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer$2.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer$2.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer$2.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer$2.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$2.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$2.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer$2.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer$2.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$2.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer$2.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$2.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer$2.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
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
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$2.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
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
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$2.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer$2.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer$2.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$2.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer$2.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$2.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer$2.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer$2.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer$2.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer$2.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer$2.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer$2.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer$2.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer$2.prototype.fill = function fill (val, start, end, encoding) {
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
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer$2.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
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
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer$2(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	var inherits;
	if (typeof Object.create === 'function'){
	  inherits = function inherits(ctor, superCtor) {
	    // implementation from standard node.js 'util' module
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function () {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}
	var inherits$1 = inherits;

	var formatRegExp = /%[sdj%]/g;
	function format$1(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	}

	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	function deprecate(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global$1.process)) {
	    return function() {
	      return deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (browser$1.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (browser$1.throwDeprecation) {
	        throw new Error(msg);
	      } else if (browser$1.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	var debugs = {};
	var debugEnviron;
	function debuglog(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = browser$1.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = 0;
	      debugs[set] = function() {
	        var msg = format$1.apply(null, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	}

	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    _extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}

	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray$3(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function(prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray$3(ar) {
	  return Array.isArray(ar);
	}

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}

	function isNull(arg) {
	  return arg === null;
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isString(arg) {
	  return typeof arg === 'string';
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	function _extend(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	}
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return buffer.Buffer.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = buffer.Buffer.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

	var string_decoder = {};

	var StringDecoder_1;
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	var Buffer$1 = buffer.Buffer;

	var isBufferEncoding = Buffer$1.isEncoding || function (encoding) {
	  switch (encoding && encoding.toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	    case 'raw':
	      return true;

	    default:
	      return false;
	  }
	};

	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	} // StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.


	var StringDecoder = StringDecoder_1 = string_decoder.StringDecoder = function (encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);

	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;

	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;

	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;

	    default:
	      this.write = passThroughWrite;
	      return;
	  } // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).


	  this.charBuffer = new Buffer$1(6); // Number of bytes received for the current incomplete multi-byte character.

	  this.charReceived = 0; // Number of bytes expected for the current incomplete multi-byte character.

	  this.charLength = 0;
	}; // write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .


	StringDecoder.prototype.write = function (buffer) {
	  var charStr = ''; // if our last write ended with an incomplete multibyte character

	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length; // add the new bytes to the char buffer

	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    } // remove bytes belonging to the current character from the buffer


	    buffer = buffer.slice(available, buffer.length); // get the character that was split

	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character

	    var charCode = charStr.charCodeAt(charStr.length - 1);

	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }

	    this.charReceived = this.charLength = 0; // if there are no more bytes in this buffer, just emit our char

	    if (buffer.length === 0) {
	      return charStr;
	    }

	    break;
	  } // determine and set charLength / charReceived


	  this.detectIncompleteChar(buffer);
	  var end = buffer.length;

	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);
	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character

	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  } // or just emit the charStr


	  return charStr;
	}; // detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.


	StringDecoder.prototype.detectIncompleteChar = function (buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = buffer.length >= 3 ? 3 : buffer.length; // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.

	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i]; // See http://en.wikipedia.org/wiki/UTF-8#Description
	    // 110XXXXX

	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    } // 1110XXXX


	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    } // 11110XXX


	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }

	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function (buffer) {
	  var res = '';
	  if (buffer && buffer.length) res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}

	Readable.ReadableState = ReadableState;

	var debug = debuglog('stream');
	inherits$1(Readable, EventEmitter);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event])
	      emitter.on(event, fn);
	    else if (Array.isArray(emitter._events[event]))
	      emitter._events[event].unshift(fn);
	    else
	      emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	function listenerCount (emitter, type) {
	  return emitter.listeners(type).length;
	}
	function ReadableState(options, stream) {

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    this.decoder = new StringDecoder_1(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	function Readable(options) {

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  EventEmitter.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = Buffer$2.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  this._readableState.decoder = new StringDecoder_1(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer$2.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    nextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false);

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (listenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && src.listeners('data').length) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var _i = 0; _i < len; _i++) {
	      dests[_i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1) return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = EventEmitter.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        nextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    nextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = Buffer$2.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    nextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	// A bit simpler than readable streams.
	Writable.WritableState = WritableState;
	inherits$1(Writable, EventEmitter);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Object.defineProperty(this, 'buffer', {
	    get: deprecate(function () {
	      return this.getBuffer();
	    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	  });
	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function writableStateGetBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	function Writable(options) {

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  EventEmitter.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  nextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!buffer.Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    nextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (buffer.Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = buffer.Buffer.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (buffer.Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) nextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	        nextTick(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) nextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}

	inherits$1(Duplex, Readable);

	var keys$1 = Object.keys(Writable.prototype);
	for (var v = 0; v < keys$1.length; v++) {
	  var method = keys$1[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  nextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	// a transform stream is a readable/writable stream where you do
	inherits$1(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er) {
	      done(stream, er);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('Not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er) {
	  if (er) return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

	inherits$1(PassThrough, Transform);
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

	inherits$1(Stream$1, EventEmitter);
	Stream$1.Readable = Readable;
	Stream$1.Writable = Writable;
	Stream$1.Duplex = Duplex;
	Stream$1.Transform = Transform;
	Stream$1.PassThrough = PassThrough;

	// Backwards-compat with node 0.4.x
	Stream$1.Stream = Stream$1;

	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream$1() {
	  EventEmitter.call(this);
	}

	Stream$1.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EventEmitter.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};

	var _polyfillNode_stream = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': Stream$1,
		Readable: Readable,
		Writable: Writable,
		Duplex: Duplex,
		Transform: Transform,
		PassThrough: PassThrough,
		Stream: Stream$1
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_stream);

	var escapeForXML = escapeForXML_1;

	var Stream = require$$0.Stream;

	var DEFAULT_INDENT = '    ';

	function xml(input, options) {
	  if (typeof options !== 'object') {
	    options = {
	      indent: options
	    };
	  }

	  var stream = options.stream ? new Stream() : null,
	      output = "",
	      interrupted = false,
	      indent = !options.indent ? '' : options.indent === true ? DEFAULT_INDENT : options.indent,
	      instant = true;

	  function delay(func) {
	    if (!instant) {
	      func();
	    } else {
	      browser$1.nextTick(func);
	    }
	  }

	  function append(interrupt, out) {
	    if (out !== undefined) {
	      output += out;
	    }

	    if (interrupt && !interrupted) {
	      stream = stream || new Stream();
	      interrupted = true;
	    }

	    if (interrupt && interrupted) {
	      var data = output;
	      delay(function () {
	        stream.emit('data', data);
	      });
	      output = "";
	    }
	  }

	  function add(value, last) {
	    format(append, resolve(value, indent, indent ? 1 : 0), last);
	  }

	  function end() {
	    if (stream) {
	      var data = output;
	      delay(function () {
	        stream.emit('data', data);
	        stream.emit('end');
	        stream.readable = false;
	        stream.emit('close');
	      });
	    }
	  }

	  function addXmlDeclaration(declaration) {
	    var encoding = declaration.encoding || 'UTF-8',
	        attr = {
	      version: '1.0',
	      encoding: encoding
	    };

	    if (declaration.standalone) {
	      attr.standalone = declaration.standalone;
	    }

	    add({
	      '?xml': {
	        _attr: attr
	      }
	    });
	    output = output.replace('/>', '?>');
	  } // disable delay delayed


	  delay(function () {
	    instant = false;
	  });

	  if (options.declaration) {
	    addXmlDeclaration(options.declaration);
	  }

	  if (input && input.forEach) {
	    input.forEach(function (value, i) {
	      var last;
	      if (i + 1 === input.length) last = end;
	      add(value, last);
	    });
	  } else {
	    add(input, end);
	  }

	  if (stream) {
	    stream.readable = true;
	    return stream;
	  }

	  return output;
	}

	function
	  /*input, ???*/
	element() {
	  var input = Array.prototype.slice.call(arguments),
	      self = {
	    _elem: resolve(input)
	  };

	  self.push = function (input) {
	    if (!this.append) {
	      throw new Error("not assigned to a parent!");
	    }

	    var that = this;
	    var indent = this._elem.indent;
	    format(this.append, resolve(input, indent, this._elem.icount + (indent ? 1 : 0)), function () {
	      that.append(true);
	    });
	  };

	  self.close = function (input) {
	    if (input !== undefined) {
	      this.push(input);
	    }

	    if (this.end) {
	      this.end();
	    }
	  };

	  return self;
	}

	function create_indent(character, count) {
	  return new Array(count || 0).join(character || '');
	}

	function resolve(data, indent, indent_count) {
	  indent_count = indent_count || 0;
	  var indent_spaces = create_indent(indent, indent_count);
	  var name;
	  var values = data;
	  var interrupt = false;

	  if (typeof data === 'object') {
	    var keys = Object.keys(data);
	    name = keys[0];
	    values = data[name];

	    if (values && values._elem) {
	      values._elem.name = name;
	      values._elem.icount = indent_count;
	      values._elem.indent = indent;
	      values._elem.indents = indent_spaces;
	      values._elem.interrupt = values;
	      return values._elem;
	    }
	  }

	  var attributes = [],
	      content = [];
	  var isStringContent;

	  function get_attributes(obj) {
	    var keys = Object.keys(obj);
	    keys.forEach(function (key) {
	      attributes.push(attribute(key, obj[key]));
	    });
	  }

	  switch (typeof values) {
	    case 'object':
	      if (values === null) break;

	      if (values._attr) {
	        get_attributes(values._attr);
	      }

	      if (values._cdata) {
	        content.push(('<![CDATA[' + values._cdata).replace(/\]\]>/g, ']]]]><![CDATA[>') + ']]>');
	      }

	      if (values.forEach) {
	        isStringContent = false;
	        content.push('');
	        values.forEach(function (value) {
	          if (typeof value == 'object') {
	            var _name = Object.keys(value)[0];

	            if (_name == '_attr') {
	              get_attributes(value._attr);
	            } else {
	              content.push(resolve(value, indent, indent_count + 1));
	            }
	          } else {
	            //string
	            content.pop();
	            isStringContent = true;
	            content.push(escapeForXML(value));
	          }
	        });

	        if (!isStringContent) {
	          content.push('');
	        }
	      }

	      break;

	    default:
	      //string
	      content.push(escapeForXML(values));
	  }

	  return {
	    name: name,
	    interrupt: interrupt,
	    attributes: attributes,
	    content: content,
	    icount: indent_count,
	    indents: indent_spaces,
	    indent: indent
	  };
	}

	function format(append, elem, end) {
	  if (typeof elem != 'object') {
	    return append(false, elem);
	  }

	  var len = elem.interrupt ? 1 : elem.content.length;

	  function proceed() {
	    while (elem.content.length) {
	      var value = elem.content.shift();
	      if (value === undefined) continue;
	      if (interrupt(value)) return;
	      format(append, value);
	    }

	    append(false, (len > 1 ? elem.indents : '') + (elem.name ? '</' + elem.name + '>' : '') + (elem.indent && !end ? '\n' : ''));

	    if (end) {
	      end();
	    }
	  }

	  function interrupt(value) {
	    if (value.interrupt) {
	      value.interrupt.append = append;
	      value.interrupt.end = proceed;
	      value.interrupt = false;
	      append(true);
	      return true;
	    }

	    return false;
	  }

	  append(false, elem.indents + (elem.name ? '<' + elem.name : '') + (elem.attributes.length ? ' ' + elem.attributes.join(' ') : '') + (len ? elem.name ? '>' : '' : elem.name ? '/>' : '') + (elem.indent && len > 1 ? '\n' : ''));

	  if (!len) {
	    return append(false, elem.indent ? '\n' : '');
	  }

	  if (!interrupt(elem)) {
	    proceed();
	  }
	}

	function attribute(key, value) {
	  return key + '=' + '"' + escapeForXML(value) + '"';
	}

	xml$1.exports = xml;
	xml$1.exports.element = xml$1.exports.Element = element;

	var current_ansi=1252;var VALID_ANSI=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,10000];/* ECMA-376 Part I 18.4.1 charset to codepage mapping */var CS2CP={/*::[*/0/*::]*/:1252,/* ANSI */ /*::[*/1/*::]*/:65001,/* DEFAULT */ /*::[*/2/*::]*/:65001,/* SYMBOL */ /*::[*/77/*::]*/:10000,/* MAC */ /*::[*/128/*::]*/:932,/* SHIFTJIS */ /*::[*/129/*::]*/:949,/* HANGUL */ /*::[*/130/*::]*/:1361,/* JOHAB */ /*::[*/134/*::]*/:936,/* GB2312 */ /*::[*/136/*::]*/:950,/* CHINESEBIG5 */ /*::[*/161/*::]*/:1253,/* GREEK */ /*::[*/162/*::]*/:1254,/* TURKISH */ /*::[*/163/*::]*/:1258,/* VIETNAMESE */ /*::[*/177/*::]*/:1255,/* HEBREW */ /*::[*/178/*::]*/:1256,/* ARABIC */ /*::[*/186/*::]*/:1257,/* BALTIC */ /*::[*/204/*::]*/:1251,/* RUSSIAN */ /*::[*/222/*::]*/:874,/* THAI */ /*::[*/238/*::]*/:1250,/* EASTEUROPE */ /*::[*/255/*::]*/:1252,/* OEM */ /*::[*/69/*::]*/:6969/* MISC */}/*:any*/;var set_ansi=function(cp/*:number*/){if(VALID_ANSI.indexOf(cp)==-1)return;current_ansi=CS2CP[0]=cp;};function reset_ansi(){set_ansi(1252);}var set_cp=function(cp/*:number*/){set_ansi(cp);};function reset_cp(){set_cp(1200);reset_ansi();}function char_codes(data/*:string*/)/*:Array<number>*/{var o/*:Array<number>*/=[];for(var i=0,len=data.length;i<len;++i)o[i]=data.charCodeAt(i);return o;}function utf16leread(data/*:string*/)/*:string*/{var o/*:Array<string>*/=[];for(var i=0;i<data.length>>1;++i)o[i]=String.fromCharCode(data.charCodeAt(2*i)+(data.charCodeAt(2*i+1)<<8));return o.join("");}function utf16beread(data/*:string*/)/*:string*/{var o/*:Array<string>*/=[];for(var i=0;i<data.length>>1;++i)o[i]=String.fromCharCode(data.charCodeAt(2*i+1)+(data.charCodeAt(2*i)<<8));return o.join("");}var debom=function(data/*:string*/)/*:string*/{var c1=data.charCodeAt(0),c2=data.charCodeAt(1);if(c1==0xFF&&c2==0xFE)return utf16leread(data.slice(2));if(c1==0xFE&&c2==0xFF)return utf16beread(data.slice(2));if(c1==0xFEFF)return data.slice(1);return data;};var _getchar=function _gc1(x/*:number*/)/*:string*/{return String.fromCharCode(x);};var _getansi=function _ga1(x/*:number*/)/*:string*/{return String.fromCharCode(x);};var $cptable;var Base64_map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Base64_encode(input){var o="";var c1=0,c2=0,c3=0,e1=0,e2=0,e3=0,e4=0;for(var i=0;i<input.length;){c1=input.charCodeAt(i++);e1=c1>>2;c2=input.charCodeAt(i++);e2=(c1&3)<<4|c2>>4;c3=input.charCodeAt(i++);e3=(c2&15)<<2|c3>>6;e4=c3&63;if(isNaN(c2)){e3=e4=64;}else if(isNaN(c3)){e4=64;}o+=Base64_map.charAt(e1)+Base64_map.charAt(e2)+Base64_map.charAt(e3)+Base64_map.charAt(e4);}return o;}function Base64_decode(input){var o="";var c1=0,c2=0,c3=0,e1=0,e2=0,e3=0,e4=0;input=input.replace(/[^\w\+\/\=]/g,"");for(var i=0;i<input.length;){e1=Base64_map.indexOf(input.charAt(i++));e2=Base64_map.indexOf(input.charAt(i++));c1=e1<<2|e2>>4;o+=String.fromCharCode(c1);e3=Base64_map.indexOf(input.charAt(i++));c2=(e2&15)<<4|e3>>2;if(e3!==64){o+=String.fromCharCode(c2);}e4=Base64_map.indexOf(input.charAt(i++));c3=(e3&3)<<6|e4;if(e4!==64){o+=String.fromCharCode(c3);}}return o;}var has_buf=/*#__PURE__*/function(){return typeof Buffer!=='undefined'&&typeof process!=='undefined'&&typeof process.versions!=='undefined'&&!!process.versions.node;}();var Buffer_from=/*#__PURE__*/function(){if(typeof Buffer!=='undefined'){var nbfs=!Buffer.from;if(!nbfs)try{Buffer.from("foo","utf8");}catch(e){nbfs=true;}return nbfs?function(buf,enc){return enc?new Buffer(buf,enc):new Buffer(buf);}:Buffer.from.bind(Buffer);}return function(){};}();function new_raw_buf(len/*:number*/){/* jshint -W056 */if(has_buf)return Buffer.alloc?Buffer.alloc(len):new Buffer(len);return typeof Uint8Array!="undefined"?new Uint8Array(len):new Array(len);/* jshint +W056 */}function new_unsafe_buf(len/*:number*/){/* jshint -W056 */if(has_buf)return Buffer.allocUnsafe?Buffer.allocUnsafe(len):new Buffer(len);return typeof Uint8Array!="undefined"?new Uint8Array(len):new Array(len);/* jshint +W056 */}var s2a=function s2a(s/*:string*/)/*:any*/{if(has_buf)return Buffer_from(s,"binary");return s.split("").map(function(x/*:string*/)/*:number*/{return x.charCodeAt(0)&0xff;});};function a2s(data/*:any*/)/*:string*/{if(Array.isArray(data))return data.map(function(c){return String.fromCharCode(c);}).join("");var o/*:Array<string>*/=[];for(var i=0;i<data.length;++i)o[i]=String.fromCharCode(data[i]);return o.join("");}function ab2a(data/*:ArrayBuffer|Uint8Array*/)/*:Array<number>*/{if(typeof ArrayBuffer=='undefined')throw new Error("Unsupported");if(data instanceof ArrayBuffer)return ab2a(new Uint8Array(data));/*:: if(data instanceof ArrayBuffer) throw new Error("unreachable"); */var o=new Array(data.length);for(var i=0;i<data.length;++i)o[i]=data[i];return o;}var bconcat=has_buf?function(bufs){return Buffer.concat(bufs.map(function(buf){return Buffer.isBuffer(buf)?buf:Buffer_from(buf);}));}:function(bufs){if(typeof Uint8Array!=="undefined"){var i=0,maxlen=0;for(i=0;i<bufs.length;++i)maxlen+=bufs[i].length;var o=new Uint8Array(maxlen);var len=0;for(i=0,maxlen=0;i<bufs.length;maxlen+=len,++i){len=bufs[i].length;if(bufs[i]instanceof Uint8Array)o.set(bufs[i],maxlen);else if(typeof bufs[i]=="string"){throw "wtf";}else o.set(new Uint8Array(bufs[i]),maxlen);}return o;}return [].concat.apply([],bufs.map(function(buf){return Array.isArray(buf)?buf:[].slice.call(buf);}));};function utf8decode(content/*:string*/){var out=[],widx=0,L=content.length+250;var o=new_raw_buf(content.length+255);for(var ridx=0;ridx<content.length;++ridx){var c=content.charCodeAt(ridx);if(c<0x80)o[widx++]=c;else if(c<0x800){o[widx++]=192|c>>6&31;o[widx++]=128|c&63;}else if(c>=0xD800&&c<0xE000){c=(c&1023)+64;var d=content.charCodeAt(++ridx)&1023;o[widx++]=240|c>>8&7;o[widx++]=128|c>>2&63;o[widx++]=128|d>>6&15|(c&3)<<4;o[widx++]=128|d&63;}else {o[widx++]=224|c>>12&15;o[widx++]=128|c>>6&63;o[widx++]=128|c&63;}if(widx>L){out.push(o.slice(0,widx));widx=0;o=new_raw_buf(65535);L=65530;}}out.push(o.slice(0,widx));return bconcat(out);}var chr0=/\u0000/g,chr1=/[\u0001-\u0006]/g;/*::
	declare type Block = any;
	declare type BufArray = {
		newblk(sz:number):Block;
		next(sz:number):Block;
		end():any;
		push(buf:Block):void;
	};

	type RecordHopperCB = {(d:any, Rn:string, RT:number):?boolean;};

	type EvertType = {[string]:string};
	type EvertNumType = {[string]:number};
	type EvertArrType = {[string]:Array<string>};

	type StringConv = {(string):string};

	*/ /* ssf.js (C) 2013-present SheetJS -- http://sheetjs.com */ /*jshint -W041 */function _strrev(x/*:string*/)/*:string*/{var o="",i=x.length-1;while(i>=0)o+=x.charAt(i--);return o;}function pad0(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v;return t.length>=d?t:fill('0',d-t.length)+t;}function pad_(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v;return t.length>=d?t:fill(' ',d-t.length)+t;}function rpad_(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v;return t.length>=d?t:t+fill(' ',d-t.length);}function pad0r1(v/*:any*/,d/*:number*/)/*:string*/{var t=""+Math.round(v);return t.length>=d?t:fill('0',d-t.length)+t;}function pad0r2(v/*:any*/,d/*:number*/)/*:string*/{var t=""+v;return t.length>=d?t:fill('0',d-t.length)+t;}var p2_32=/*#__PURE__*/Math.pow(2,32);function pad0r(v/*:any*/,d/*:number*/)/*:string*/{if(v>p2_32||v<-p2_32)return pad0r1(v,d);var i=Math.round(v);return pad0r2(i,d);}/* yes, in 2022 this is still faster than string compare */function SSF_isgeneral(s/*:string*/,i/*:?number*/)/*:boolean*/{i=i||0;return s.length>=7+i&&(s.charCodeAt(i)|32)===103&&(s.charCodeAt(i+1)|32)===101&&(s.charCodeAt(i+2)|32)===110&&(s.charCodeAt(i+3)|32)===101&&(s.charCodeAt(i+4)|32)===114&&(s.charCodeAt(i+5)|32)===97&&(s.charCodeAt(i+6)|32)===108;}var days/*:Array<Array<string> >*/=[['Sun','Sunday'],['Mon','Monday'],['Tue','Tuesday'],['Wed','Wednesday'],['Thu','Thursday'],['Fri','Friday'],['Sat','Saturday']];var months/*:Array<Array<string> >*/=[['J','Jan','January'],['F','Feb','February'],['M','Mar','March'],['A','Apr','April'],['M','May','May'],['J','Jun','June'],['J','Jul','July'],['A','Aug','August'],['S','Sep','September'],['O','Oct','October'],['N','Nov','November'],['D','Dec','December']];function SSF_init_table(t/*:any*/){if(!t)t={};t[0]='General';t[1]='0';t[2]='0.00';t[3]='#,##0';t[4]='#,##0.00';t[9]='0%';t[10]='0.00%';t[11]='0.00E+00';t[12]='# ?/?';t[13]='# ??/??';t[14]='m/d/yy';t[15]='d-mmm-yy';t[16]='d-mmm';t[17]='mmm-yy';t[18]='h:mm AM/PM';t[19]='h:mm:ss AM/PM';t[20]='h:mm';t[21]='h:mm:ss';t[22]='m/d/yy h:mm';t[37]='#,##0 ;(#,##0)';t[38]='#,##0 ;[Red](#,##0)';t[39]='#,##0.00;(#,##0.00)';t[40]='#,##0.00;[Red](#,##0.00)';t[45]='mm:ss';t[46]='[h]:mm:ss';t[47]='mmss.0';t[48]='##0.0E+0';t[49]='@';t[56]='"??????/?????? "hh"???"mm"???"ss"??? "';return t;}/* repeated to satiate webpack */var table_fmt={0:'General',1:'0',2:'0.00',3:'#,##0',4:'#,##0.00',9:'0%',10:'0.00%',11:'0.00E+00',12:'# ?/?',13:'# ??/??',14:'m/d/yy',15:'d-mmm-yy',16:'d-mmm',17:'mmm-yy',18:'h:mm AM/PM',19:'h:mm:ss AM/PM',20:'h:mm',21:'h:mm:ss',22:'m/d/yy h:mm',37:'#,##0 ;(#,##0)',38:'#,##0 ;[Red](#,##0)',39:'#,##0.00;(#,##0.00)',40:'#,##0.00;[Red](#,##0.00)',45:'mm:ss',46:'[h]:mm:ss',47:'mmss.0',48:'##0.0E+0',49:'@',56:'"??????/?????? "hh"???"mm"???"ss"??? "'};/* Defaults determined by systematically testing in Excel 2019 */ /* These formats appear to default to other formats in the table */var SSF_default_map={5:37,6:38,7:39,8:40,//  5 -> 37 ...  8 -> 40
	23:0,24:0,25:0,26:0,// 23 ->  0 ... 26 ->  0
	27:14,28:14,29:14,30:14,31:14,// 27 -> 14 ... 31 -> 14
	50:14,51:14,52:14,53:14,54:14,// 50 -> 14 ... 58 -> 14
	55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,// 59 ->  1 ... 62 ->  4
	67:9,68:10,// 67 ->  9 ... 68 -> 10
	69:12,70:13,71:14,// 69 -> 12 ... 71 -> 14
	72:14,73:15,74:16,75:17,// 72 -> 14 ... 75 -> 17
	76:20,77:21,78:22,// 76 -> 20 ... 78 -> 22
	79:45,80:46,81:47,// 79 -> 45 ... 81 -> 47
	82:0// 82 ->  0 ... 65536 -> 0 (omitted)
	};/* These formats technically refer to Accounting formats with no equivalent */var SSF_default_str={//  5 -- Currency,   0 decimal, black negative
	5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',//  6 -- Currency,   0 decimal, red   negative
	6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',//  7 -- Currency,   2 decimal, black negative
	7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',//  8 -- Currency,   2 decimal, red   negative
	8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',// 41 -- Accounting, 0 decimal, No Symbol
	41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',// 42 -- Accounting, 0 decimal, $  Symbol
	42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',// 43 -- Accounting, 2 decimal, No Symbol
	43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',// 44 -- Accounting, 2 decimal, $  Symbol
	44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function SSF_frac(x/*:number*/,D/*:number*/,mixed/*:?boolean*/)/*:Array<number>*/{var sgn=x<0?-1:1;var B=x*sgn;var P_2=0,P_1=1,P=0;var Q_2=1,Q_1=0,Q=0;var A=Math.floor(B);while(Q_1<D){A=Math.floor(B);P=A*P_1+P_2;Q=A*Q_1+Q_2;if(B-A<0.00000005)break;B=1/(B-A);P_2=P_1;P_1=P;Q_2=Q_1;Q_1=Q;}if(Q>D){if(Q_1>D){Q=Q_2;P=P_2;}else {Q=Q_1;P=P_1;}}if(!mixed)return [0,sgn*P,Q];var q=Math.floor(sgn*P/Q);return [q,sgn*P-q*Q,Q];}function SSF_parse_date_code(v/*:number*/,opts/*:?any*/,b2/*:?boolean*/){if(v>2958465||v<0)return null;var date=v|0,time=Math.floor(86400*(v-date)),dow=0;var dout=[];var out={D:date,T:time,u:86400*(v-date)-time,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(out.u)<1e-6)out.u=0;if(opts&&opts.date1904)date+=1462;if(out.u>0.9999){out.u=0;if(++time==86400){out.T=time=0;++date;++out.D;}}if(date===60){dout=b2?[1317,10,29]:[1900,2,29];dow=3;}else if(date===0){dout=b2?[1317,8,29]:[1900,1,0];dow=6;}else {if(date>60)--date;/* 1 = Jan 1 1900 in Gregorian */var d=new Date(1900,0,1);d.setDate(d.getDate()+date-1);dout=[d.getFullYear(),d.getMonth()+1,d.getDate()];dow=d.getDay();if(date<60)dow=(dow+6)%7;if(b2)dow=SSF_fix_hijri(d,dout);}out.y=dout[0];out.m=dout[1];out.d=dout[2];out.S=time%60;time=Math.floor(time/60);out.M=time%60;time=Math.floor(time/60);out.H=time;out.q=dow;return out;}var SSFbasedate=/*#__PURE__*/new Date(1899,11,31,0,0,0);var SSFdnthresh=/*#__PURE__*/SSFbasedate.getTime();var SSFbase1904=/*#__PURE__*/new Date(1900,2,1,0,0,0);function datenum_local(v/*:Date*/,date1904/*:?boolean*/)/*:number*/{var epoch=/*#__PURE__*/v.getTime();if(date1904)epoch-=1461*24*60*60*1000;else if(v>=SSFbase1904)epoch+=24*60*60*1000;return (epoch-(SSFdnthresh+(/*#__PURE__*/v.getTimezoneOffset()-/*#__PURE__*/SSFbasedate.getTimezoneOffset())*60000))/(24*60*60*1000);}/* ECMA-376 18.8.30 numFmt*/ /* Note: `toPrecision` uses standard form when prec > E and E >= -6 */ /* exponent >= -9 and <= 9 */function SSF_strip_decimal(o/*:string*/)/*:string*/{return o.indexOf(".")==-1?o:o.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1");}/* General Exponential always shows 2 digits exp and trims the mantissa */function SSF_normalize_exp(o/*:string*/)/*:string*/{if(o.indexOf("E")==-1)return o;return o.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2");}/* exponent >= -9 and <= 9 */function SSF_small_exp(v/*:number*/)/*:string*/{var w=v<0?12:11;var o=SSF_strip_decimal(v.toFixed(12));if(o.length<=w)return o;o=v.toPrecision(10);if(o.length<=w)return o;return v.toExponential(5);}/* exponent >= 11 or <= -10 likely exponential */function SSF_large_exp(v/*:number*/)/*:string*/{var o=SSF_strip_decimal(v.toFixed(11));return o.length>(v<0?12:11)||o==="0"||o==="-0"?v.toPrecision(6):o;}function SSF_general_num(v/*:number*/)/*:string*/{var V=Math.floor(Math.log(Math.abs(v))*Math.LOG10E),o;if(V>=-4&&V<=-1)o=v.toPrecision(10+V);else if(Math.abs(V)<=9)o=SSF_small_exp(v);else if(V===10)o=v.toFixed(10).substr(0,12);else o=SSF_large_exp(v);return SSF_strip_decimal(SSF_normalize_exp(o.toUpperCase()));}/*
		"General" rules:
		- text is passed through ("@")
		- booleans are rendered as TRUE/FALSE
		- "up to 11 characters" displayed for numbers
		- Default date format (code 14) used for Dates

		The longest 32-bit integer text is "-2147483648", exactly 11 chars
		TODO: technically the display depends on the width of the cell
	*/function SSF_general(v/*:any*/,opts/*:any*/){switch(typeof v){case'string':return v;case'boolean':return v?"TRUE":"FALSE";case'number':return (v|0)===v?v.toString(10):SSF_general_num(v);case'undefined':return "";case'object':if(v==null)return "";if(v instanceof Date)return SSF_format(14,datenum_local(v,opts&&opts.date1904),opts);}throw new Error("unsupported value in General format: "+v);}function SSF_fix_hijri(date/*:Date*/,o/*:[number, number, number]*/){/* TODO: properly adjust y/m/d and  */o[0]-=581;var dow=date.getDay();if(date<60)dow=(dow+6)%7;return dow;}//var THAI_DIGITS = "\u0E50\u0E51\u0E52\u0E53\u0E54\u0E55\u0E56\u0E57\u0E58\u0E59".split("");
	function SSF_write_date(type/*:number*/,fmt/*:string*/,val,ss0/*:?number*/)/*:string*/{var o="",ss=0,tt=0,y=val.y,out,outl=0;switch(type){case 98:/* 'b' buddhist year */y=val.y+543;/* falls through */case 121:/* 'y' year */switch(fmt.length){case 1:case 2:out=y%100;outl=2;break;default:out=y%10000;outl=4;break;}break;case 109:/* 'm' month */switch(fmt.length){case 1:case 2:out=val.m;outl=fmt.length;break;case 3:return months[val.m-1][1];case 5:return months[val.m-1][0];default:return months[val.m-1][2];}break;case 100:/* 'd' day */switch(fmt.length){case 1:case 2:out=val.d;outl=fmt.length;break;case 3:return days[val.q][0];default:return days[val.q][1];}break;case 104:/* 'h' 12-hour */switch(fmt.length){case 1:case 2:out=1+(val.H+11)%12;outl=fmt.length;break;default:throw 'bad hour format: '+fmt;}break;case 72:/* 'H' 24-hour */switch(fmt.length){case 1:case 2:out=val.H;outl=fmt.length;break;default:throw 'bad hour format: '+fmt;}break;case 77:/* 'M' minutes */switch(fmt.length){case 1:case 2:out=val.M;outl=fmt.length;break;default:throw 'bad minute format: '+fmt;}break;case 115:/* 's' seconds */if(fmt!='s'&&fmt!='ss'&&fmt!='.0'&&fmt!='.00'&&fmt!='.000')throw 'bad second format: '+fmt;if(val.u===0&&(fmt=="s"||fmt=="ss"))return pad0(val.S,fmt.length);/*::if(!ss0) ss0 = 0; */if(ss0>=2)tt=ss0===3?1000:100;else tt=ss0===1?10:1;ss=Math.round(tt*(val.S+val.u));if(ss>=60*tt)ss=0;if(fmt==='s')return ss===0?"0":""+ss/tt;o=pad0(ss,2+ss0);if(fmt==='ss')return o.substr(0,2);return "."+o.substr(2,fmt.length-1);case 90:/* 'Z' absolute time */switch(fmt){case'[h]':case'[hh]':out=val.D*24+val.H;break;case'[m]':case'[mm]':out=(val.D*24+val.H)*60+val.M;break;case'[s]':case'[ss]':out=((val.D*24+val.H)*60+val.M)*60+Math.round(val.S+val.u);break;default:throw 'bad abstime format: '+fmt;}outl=fmt.length===3?1:2;break;case 101:/* 'e' era */out=y;outl=1;break;}var outstr=outl>0?pad0(out,outl):"";return outstr;}/*jshint -W086 */ /*jshint +W086 */function commaify(s/*:string*/)/*:string*/{var w=3;if(s.length<=w)return s;var j=s.length%w,o=s.substr(0,j);for(;j!=s.length;j+=w)o+=(o.length>0?",":"")+s.substr(j,w);return o;}var pct1=/%/g;function write_num_pct(type/*:string*/,fmt/*:string*/,val/*:number*/)/*:string*/{var sfmt=fmt.replace(pct1,""),mul=fmt.length-sfmt.length;return write_num(type,sfmt,val*Math.pow(10,2*mul))+fill("%",mul);}function write_num_cm(type/*:string*/,fmt/*:string*/,val/*:number*/)/*:string*/{var idx=fmt.length-1;while(fmt.charCodeAt(idx-1)===44)--idx;return write_num(type,fmt.substr(0,idx),val/Math.pow(10,3*(fmt.length-idx)));}function write_num_exp(fmt/*:string*/,val/*:number*/)/*:string*/{var o/*:string*/;var idx=fmt.indexOf("E")-fmt.indexOf(".")-1;if(fmt.match(/^#+0.0E\+0$/)){if(val==0)return "0.0E+0";else if(val<0)return "-"+write_num_exp(fmt,-val);var period=fmt.indexOf(".");if(period===-1)period=fmt.indexOf('E');var ee=Math.floor(Math.log(val)*Math.LOG10E)%period;if(ee<0)ee+=period;o=(val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);if(o.indexOf("e")===-1){var fakee=Math.floor(Math.log(val)*Math.LOG10E);if(o.indexOf(".")===-1)o=o.charAt(0)+"."+o.substr(1)+"E+"+(fakee-o.length+ee);else o+="E+"+(fakee-ee);while(o.substr(0,2)==="0."){o=o.charAt(0)+o.substr(2,period)+"."+o.substr(2+period);o=o.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");}o=o.replace(/\+-/,"-");}o=o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3){return $1+$2+$3.substr(0,(period+ee)%period)+"."+$3.substr(ee)+"E";});}else o=val.toExponential(idx);if(fmt.match(/E\+00$/)&&o.match(/e[+-]\d$/))o=o.substr(0,o.length-1)+"0"+o.charAt(o.length-1);if(fmt.match(/E\-/)&&o.match(/e\+/))o=o.replace(/e\+/,"e");return o.replace("e","E");}var frac1=/# (\?+)( ?)\/( ?)(\d+)/;function write_num_f1(r/*:Array<string>*/,aval/*:number*/,sign/*:string*/)/*:string*/{var den=parseInt(r[4],10),rr=Math.round(aval*den),base=Math.floor(rr/den);var myn=rr-base*den,myd=den;return sign+(base===0?"":""+base)+" "+(myn===0?fill(" ",r[1].length+1+r[4].length):pad_(myn,r[1].length)+r[2]+"/"+r[3]+pad0(myd,r[4].length));}function write_num_f2(r/*:Array<string>*/,aval/*:number*/,sign/*:string*/)/*:string*/{return sign+(aval===0?"":""+aval)+fill(" ",r[1].length+2+r[4].length);}var dec1=/^#*0*\.([0#]+)/;var closeparen=/\).*[0#]/;var phone=/\(###\) ###\\?-####/;function hashq(str/*:string*/)/*:string*/{var o="",cc;for(var i=0;i!=str.length;++i)switch(cc=str.charCodeAt(i)){case 35:break;case 63:o+=" ";break;case 48:o+="0";break;default:o+=String.fromCharCode(cc);}return o;}function rnd(val/*:number*/,d/*:number*/)/*:string*/{var dd=Math.pow(10,d);return ""+Math.round(val*dd)/dd;}function dec(val/*:number*/,d/*:number*/)/*:number*/{var _frac=val-Math.floor(val),dd=Math.pow(10,d);if(d<(''+Math.round(_frac*dd)).length)return 0;return Math.round(_frac*dd);}function carry(val/*:number*/,d/*:number*/)/*:number*/{if(d<(''+Math.round((val-Math.floor(val))*Math.pow(10,d))).length){return 1;}return 0;}function flr(val/*:number*/)/*:string*/{if(val<2147483647&&val>-2147483648)return ""+(val>=0?val|0:val-1|0);return ""+Math.floor(val);}function write_num_flt(type/*:string*/,fmt/*:string*/,val/*:number*/)/*:string*/{if(type.charCodeAt(0)===40&&!fmt.match(closeparen)){var ffmt=fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(val>=0)return write_num_flt('n',ffmt,val);return '('+write_num_flt('n',ffmt,-val)+')';}if(fmt.charCodeAt(fmt.length-1)===44)return write_num_cm(type,fmt,val);if(fmt.indexOf('%')!==-1)return write_num_pct(type,fmt,val);if(fmt.indexOf('E')!==-1)return write_num_exp(fmt,val);if(fmt.charCodeAt(0)===36)return "$"+write_num_flt(type,fmt.substr(fmt.charAt(1)==' '?2:1),val);var o;var r/*:?Array<string>*/,ri,ff,aval=Math.abs(val),sign=val<0?"-":"";if(fmt.match(/^00+$/))return sign+pad0r(aval,fmt.length);if(fmt.match(/^[#?]+$/)){o=pad0r(val,0);if(o==="0")o="";return o.length>fmt.length?o:hashq(fmt.substr(0,fmt.length-o.length))+o;}if(r=fmt.match(frac1))return write_num_f1(r,aval,sign);if(fmt.match(/^#+0+$/))return sign+pad0r(aval,fmt.length-fmt.indexOf("0"));if(r=fmt.match(dec1)){o=rnd(val,r[1].length).replace(/^([^\.]+)$/,"$1."+hashq(r[1])).replace(/\.$/,"."+hashq(r[1])).replace(/\.(\d*)$/,function($$,$1){return "."+$1+fill("0",hashq(/*::(*/r/*::||[""])*/[1]).length-$1.length);});return fmt.indexOf("0.")!==-1?o:o.replace(/^0\./,".");}fmt=fmt.replace(/^#+([0.])/,"$1");if(r=fmt.match(/^(0*)\.(#*)$/)){return sign+rnd(aval,r[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");}if(r=fmt.match(/^#{1,3},##0(\.?)$/))return sign+commaify(pad0r(aval,0));if(r=fmt.match(/^#,##0\.([#0]*0)$/)){return val<0?"-"+write_num_flt(type,fmt,-val):commaify(""+(Math.floor(val)+carry(val,r[1].length)))+"."+pad0(dec(val,r[1].length),r[1].length);}if(r=fmt.match(/^#,#*,#0/))return write_num_flt(type,fmt.replace(/^#,#*,/,""),val);if(r=fmt.match(/^([0#]+)(\\?-([0#]+))+$/)){o=_strrev(write_num_flt(type,fmt.replace(/[\\-]/g,""),val));ri=0;return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o.charAt(ri++):x==='0'?'0':"";}));}if(fmt.match(phone)){o=write_num_flt(type,"##########",val);return "("+o.substr(0,3)+") "+o.substr(3,3)+"-"+o.substr(6);}var oa="";if(r=fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)){ri=Math.min(/*::String(*/r[4]/*::)*/.length,7);ff=SSF_frac(aval,Math.pow(10,ri)-1,false);o=""+sign;oa=write_num("n",/*::String(*/r[1]/*::)*/,ff[1]);if(oa.charAt(oa.length-1)==" ")oa=oa.substr(0,oa.length-1)+"0";o+=oa+/*::String(*/r[2]/*::)*/+"/"+/*::String(*/r[3]/*::)*/;oa=rpad_(ff[2],ri);if(oa.length<r[4].length)oa=hashq(r[4].substr(r[4].length-oa.length))+oa;o+=oa;return o;}if(r=fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)){ri=Math.min(Math.max(r[1].length,r[4].length),7);ff=SSF_frac(aval,Math.pow(10,ri)-1,true);return sign+(ff[0]||(ff[1]?"":"0"))+" "+(ff[1]?pad_(ff[1],ri)+r[2]+"/"+r[3]+rpad_(ff[2],ri):fill(" ",2*ri+1+r[2].length+r[3].length));}if(r=fmt.match(/^[#0?]+$/)){o=pad0r(val,0);if(fmt.length<=o.length)return o;return hashq(fmt.substr(0,fmt.length-o.length))+o;}if(r=fmt.match(/^([#0?]+)\.([#0]+)$/)){o=""+val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");ri=o.indexOf(".");var lres=fmt.indexOf(".")-ri,rres=fmt.length-o.length-lres;return hashq(fmt.substr(0,lres)+o+fmt.substr(fmt.length-rres));}if(r=fmt.match(/^00,000\.([#0]*0)$/)){ri=dec(val,r[1].length);return val<0?"-"+write_num_flt(type,fmt,-val):commaify(flr(val)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$){return "00,"+($$.length<3?pad0(0,3-$$.length):"")+$$;})+"."+pad0(ri,r[1].length);}switch(fmt){case"###,##0.00":return write_num_flt(type,"#,##0.00",val);case"###,###":case"##,###":case"#,###":var x=commaify(pad0r(aval,0));return x!=="0"?sign+x:"";case"###,###.00":return write_num_flt(type,"###,##0.00",val).replace(/^0\./,".");case"#,###.00":return write_num_flt(type,"#,##0.00",val).replace(/^0\./,".");}throw new Error("unsupported format |"+fmt+"|");}function write_num_cm2(type/*:string*/,fmt/*:string*/,val/*:number*/)/*:string*/{var idx=fmt.length-1;while(fmt.charCodeAt(idx-1)===44)--idx;return write_num(type,fmt.substr(0,idx),val/Math.pow(10,3*(fmt.length-idx)));}function write_num_pct2(type/*:string*/,fmt/*:string*/,val/*:number*/)/*:string*/{var sfmt=fmt.replace(pct1,""),mul=fmt.length-sfmt.length;return write_num(type,sfmt,val*Math.pow(10,2*mul))+fill("%",mul);}function write_num_exp2(fmt/*:string*/,val/*:number*/)/*:string*/{var o/*:string*/;var idx=fmt.indexOf("E")-fmt.indexOf(".")-1;if(fmt.match(/^#+0.0E\+0$/)){if(val==0)return "0.0E+0";else if(val<0)return "-"+write_num_exp2(fmt,-val);var period=fmt.indexOf(".");if(period===-1)period=fmt.indexOf('E');var ee=Math.floor(Math.log(val)*Math.LOG10E)%period;if(ee<0)ee+=period;o=(val/Math.pow(10,ee)).toPrecision(idx+1+(period+ee)%period);if(!o.match(/[Ee]/)){var fakee=Math.floor(Math.log(val)*Math.LOG10E);if(o.indexOf(".")===-1)o=o.charAt(0)+"."+o.substr(1)+"E+"+(fakee-o.length+ee);else o+="E+"+(fakee-ee);o=o.replace(/\+-/,"-");}o=o.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function($$,$1,$2,$3){return $1+$2+$3.substr(0,(period+ee)%period)+"."+$3.substr(ee)+"E";});}else o=val.toExponential(idx);if(fmt.match(/E\+00$/)&&o.match(/e[+-]\d$/))o=o.substr(0,o.length-1)+"0"+o.charAt(o.length-1);if(fmt.match(/E\-/)&&o.match(/e\+/))o=o.replace(/e\+/,"e");return o.replace("e","E");}function write_num_int(type/*:string*/,fmt/*:string*/,val/*:number*/)/*:string*/{if(type.charCodeAt(0)===40&&!fmt.match(closeparen)){var ffmt=fmt.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(val>=0)return write_num_int('n',ffmt,val);return '('+write_num_int('n',ffmt,-val)+')';}if(fmt.charCodeAt(fmt.length-1)===44)return write_num_cm2(type,fmt,val);if(fmt.indexOf('%')!==-1)return write_num_pct2(type,fmt,val);if(fmt.indexOf('E')!==-1)return write_num_exp2(fmt,val);if(fmt.charCodeAt(0)===36)return "$"+write_num_int(type,fmt.substr(fmt.charAt(1)==' '?2:1),val);var o;var r/*:?Array<string>*/,ri,ff,aval=Math.abs(val),sign=val<0?"-":"";if(fmt.match(/^00+$/))return sign+pad0(aval,fmt.length);if(fmt.match(/^[#?]+$/)){o=""+val;if(val===0)o="";return o.length>fmt.length?o:hashq(fmt.substr(0,fmt.length-o.length))+o;}if(r=fmt.match(frac1))return write_num_f2(r,aval,sign);if(fmt.match(/^#+0+$/))return sign+pad0(aval,fmt.length-fmt.indexOf("0"));if(r=fmt.match(dec1)){/*:: if(!Array.isArray(r)) throw new Error("unreachable"); */o=(""+val).replace(/^([^\.]+)$/,"$1."+hashq(r[1])).replace(/\.$/,"."+hashq(r[1]));o=o.replace(/\.(\d*)$/,function($$,$1){/*:: if(!Array.isArray(r)) throw new Error("unreachable"); */return "."+$1+fill("0",hashq(r[1]).length-$1.length);});return fmt.indexOf("0.")!==-1?o:o.replace(/^0\./,".");}fmt=fmt.replace(/^#+([0.])/,"$1");if(r=fmt.match(/^(0*)\.(#*)$/)){return sign+(""+aval).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");}if(r=fmt.match(/^#{1,3},##0(\.?)$/))return sign+commaify(""+aval);if(r=fmt.match(/^#,##0\.([#0]*0)$/)){return val<0?"-"+write_num_int(type,fmt,-val):commaify(""+val)+"."+fill('0',r[1].length);}if(r=fmt.match(/^#,#*,#0/))return write_num_int(type,fmt.replace(/^#,#*,/,""),val);if(r=fmt.match(/^([0#]+)(\\?-([0#]+))+$/)){o=_strrev(write_num_int(type,fmt.replace(/[\\-]/g,""),val));ri=0;return _strrev(_strrev(fmt.replace(/\\/g,"")).replace(/[0#]/g,function(x){return ri<o.length?o.charAt(ri++):x==='0'?'0':"";}));}if(fmt.match(phone)){o=write_num_int(type,"##########",val);return "("+o.substr(0,3)+") "+o.substr(3,3)+"-"+o.substr(6);}var oa="";if(r=fmt.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)){ri=Math.min(/*::String(*/r[4]/*::)*/.length,7);ff=SSF_frac(aval,Math.pow(10,ri)-1,false);o=""+sign;oa=write_num("n",/*::String(*/r[1]/*::)*/,ff[1]);if(oa.charAt(oa.length-1)==" ")oa=oa.substr(0,oa.length-1)+"0";o+=oa+/*::String(*/r[2]/*::)*/+"/"+/*::String(*/r[3]/*::)*/;oa=rpad_(ff[2],ri);if(oa.length<r[4].length)oa=hashq(r[4].substr(r[4].length-oa.length))+oa;o+=oa;return o;}if(r=fmt.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)){ri=Math.min(Math.max(r[1].length,r[4].length),7);ff=SSF_frac(aval,Math.pow(10,ri)-1,true);return sign+(ff[0]||(ff[1]?"":"0"))+" "+(ff[1]?pad_(ff[1],ri)+r[2]+"/"+r[3]+rpad_(ff[2],ri):fill(" ",2*ri+1+r[2].length+r[3].length));}if(r=fmt.match(/^[#0?]+$/)){o=""+val;if(fmt.length<=o.length)return o;return hashq(fmt.substr(0,fmt.length-o.length))+o;}if(r=fmt.match(/^([#0]+)\.([#0]+)$/)){o=""+val.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1");ri=o.indexOf(".");var lres=fmt.indexOf(".")-ri,rres=fmt.length-o.length-lres;return hashq(fmt.substr(0,lres)+o+fmt.substr(fmt.length-rres));}if(r=fmt.match(/^00,000\.([#0]*0)$/)){return val<0?"-"+write_num_int(type,fmt,-val):commaify(""+val).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function($$){return "00,"+($$.length<3?pad0(0,3-$$.length):"")+$$;})+"."+pad0(0,r[1].length);}switch(fmt){case"###,###":case"##,###":case"#,###":var x=commaify(""+aval);return x!=="0"?sign+x:"";default:if(fmt.match(/\.[0#?]*$/))return write_num_int(type,fmt.slice(0,fmt.lastIndexOf(".")),val)+hashq(fmt.slice(fmt.lastIndexOf(".")));}throw new Error("unsupported format |"+fmt+"|");}function write_num(type/*:string*/,fmt/*:string*/,val/*:number*/)/*:string*/{return (val|0)===val?write_num_int(type,fmt,val):write_num_flt(type,fmt,val);}function SSF_split_fmt(fmt/*:string*/)/*:Array<string>*/{var out/*:Array<string>*/=[];var in_str=false/*, cc*/;for(var i=0,j=0;i<fmt.length;++i)switch(/*cc=*/fmt.charCodeAt(i)){case 34:/* '"' */in_str=!in_str;break;case 95:case 42:case 92:/* '_' '*' '\\' */++i;break;case 59:/* ';' */out[out.length]=fmt.substr(j,i-j);j=i+1;}out[out.length]=fmt.substr(j);if(in_str===true)throw new Error("Format |"+fmt+"| unterminated string ");return out;}var SSF_abstime=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function fmt_is_date(fmt/*:string*/)/*:boolean*/{var i=0,/*cc = 0,*/c="",o="";while(i<fmt.length){switch(c=fmt.charAt(i)){case'G':if(SSF_isgeneral(fmt,i))i+=6;i++;break;case'"':for(;/*cc=*/fmt.charCodeAt(++i)!==34&&i<fmt.length;){/*empty*/}++i;break;case'\\':i+=2;break;case'_':i+=2;break;case'@':++i;break;case'B':case'b':if(fmt.charAt(i+1)==="1"||fmt.charAt(i+1)==="2")return true;/* falls through */case'M':case'D':case'Y':case'H':case'S':case'E':/* falls through */case'm':case'd':case'y':case'h':case's':case'e':case'g':return true;case'A':case'a':case'???':if(fmt.substr(i,3).toUpperCase()==="A/P")return true;if(fmt.substr(i,5).toUpperCase()==="AM/PM")return true;if(fmt.substr(i,5).toUpperCase()==="??????/??????")return true;++i;break;case'[':o=c;while(fmt.charAt(i++)!==']'&&i<fmt.length)o+=fmt.charAt(i);if(o.match(SSF_abstime))return true;break;case'.':/* falls through */case'0':case'#':while(i<fmt.length&&("0#?.,E+-%".indexOf(c=fmt.charAt(++i))>-1||c=='\\'&&fmt.charAt(i+1)=="-"&&"0#".indexOf(fmt.charAt(i+2))>-1)){/* empty */}break;case'?':while(fmt.charAt(++i)===c){/* empty */}break;case'*':++i;if(fmt.charAt(i)==' '||fmt.charAt(i)=='*')++i;break;case'(':case')':++i;break;case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':while(i<fmt.length&&"0123456789".indexOf(fmt.charAt(++i))>-1){/* empty */}break;case' ':++i;break;default:++i;break;}}return false;}function eval_fmt(fmt/*:string*/,v/*:any*/,opts/*:any*/,flen/*:number*/){var out=[],o="",i=0,c="",lst='t',dt,j,cc;var hr='H';/* Tokenize */while(i<fmt.length){switch(c=fmt.charAt(i)){case'G':/* General */if(!SSF_isgeneral(fmt,i))throw new Error('unrecognized character '+c+' in '+fmt);out[out.length]={t:'G',v:'General'};i+=7;break;case'"':/* Literal text */for(o="";(cc=fmt.charCodeAt(++i))!==34&&i<fmt.length;)o+=String.fromCharCode(cc);out[out.length]={t:'t',v:o};++i;break;case'\\':var w=fmt.charAt(++i),t=w==="("||w===")"?w:'t';out[out.length]={t:t,v:w};++i;break;case'_':out[out.length]={t:'t',v:" "};i+=2;break;case'@':/* Text Placeholder */out[out.length]={t:'T',v:v};++i;break;case'B':case'b':if(fmt.charAt(i+1)==="1"||fmt.charAt(i+1)==="2"){if(dt==null){dt=SSF_parse_date_code(v,opts,fmt.charAt(i+1)==="2");if(dt==null)return "";}out[out.length]={t:'X',v:fmt.substr(i,2)};lst=c;i+=2;break;}/* falls through */case'M':case'D':case'Y':case'H':case'S':case'E':c=c.toLowerCase();/* falls through */case'm':case'd':case'y':case'h':case's':case'e':case'g':if(v<0)return "";if(dt==null){dt=SSF_parse_date_code(v,opts);if(dt==null)return "";}o=c;while(++i<fmt.length&&fmt.charAt(i).toLowerCase()===c)o+=c;if(c==='m'&&lst.toLowerCase()==='h')c='M';if(c==='h')c=hr;out[out.length]={t:c,v:o};lst=c;break;case'A':case'a':case'???':var q={t:c,v:c};if(dt==null)dt=SSF_parse_date_code(v,opts);if(fmt.substr(i,3).toUpperCase()==="A/P"){if(dt!=null)q.v=dt.H>=12?"P":"A";q.t='T';hr='h';i+=3;}else if(fmt.substr(i,5).toUpperCase()==="AM/PM"){if(dt!=null)q.v=dt.H>=12?"PM":"AM";q.t='T';i+=5;hr='h';}else if(fmt.substr(i,5).toUpperCase()==="??????/??????"){if(dt!=null)q.v=dt.H>=12?"??????":"??????";q.t='T';i+=5;hr='h';}else {q.t="t";++i;}if(dt==null&&q.t==='T')return "";out[out.length]=q;lst=c;break;case'[':o=c;while(fmt.charAt(i++)!==']'&&i<fmt.length)o+=fmt.charAt(i);if(o.slice(-1)!==']')throw 'unterminated "[" block: |'+o+'|';if(o.match(SSF_abstime)){if(dt==null){dt=SSF_parse_date_code(v,opts);if(dt==null)return "";}out[out.length]={t:'Z',v:o.toLowerCase()};lst=o.charAt(1);}else if(o.indexOf("$")>-1){o=(o.match(/\$([^-\[\]]*)/)||[])[1]||"$";if(!fmt_is_date(fmt))out[out.length]={t:'t',v:o};}break;/* Numbers */case'.':if(dt!=null){o=c;while(++i<fmt.length&&(c=fmt.charAt(i))==="0")o+=c;out[out.length]={t:'s',v:o};break;}/* falls through */case'0':case'#':o=c;while(++i<fmt.length&&"0#?.,E+-%".indexOf(c=fmt.charAt(i))>-1)o+=c;out[out.length]={t:'n',v:o};break;case'?':o=c;while(fmt.charAt(++i)===c)o+=c;out[out.length]={t:c,v:o};lst=c;break;case'*':++i;if(fmt.charAt(i)==' '||fmt.charAt(i)=='*')++i;break;// **
	case'(':case')':out[out.length]={t:flen===1?'t':c,v:c};++i;break;case'1':case'2':case'3':case'4':case'5':case'6':case'7':case'8':case'9':o=c;while(i<fmt.length&&"0123456789".indexOf(fmt.charAt(++i))>-1)o+=fmt.charAt(i);out[out.length]={t:'D',v:o};break;case' ':out[out.length]={t:c,v:c};++i;break;case'$':out[out.length]={t:'t',v:'$'};++i;break;default:if(",$-+/():!^&'~{}<>=???acfijklopqrtuvwxzP".indexOf(c)===-1)throw new Error('unrecognized character '+c+' in '+fmt);out[out.length]={t:'t',v:c};++i;break;}}/* Scan for date/time parts */var bt=0,ss0=0,ssm;for(i=out.length-1,lst='t';i>=0;--i){switch(out[i].t){case'h':case'H':out[i].t=hr;lst='h';if(bt<1)bt=1;break;case's':if(ssm=out[i].v.match(/\.0+$/))ss0=Math.max(ss0,ssm[0].length-1);if(bt<3)bt=3;/* falls through */case'd':case'y':case'M':case'e':lst=out[i].t;break;case'm':if(lst==='s'){out[i].t='M';if(bt<2)bt=2;}break;case'X':/*if(out[i].v === "B2");*/break;case'Z':if(bt<1&&out[i].v.match(/[Hh]/))bt=1;if(bt<2&&out[i].v.match(/[Mm]/))bt=2;if(bt<3&&out[i].v.match(/[Ss]/))bt=3;}}/* time rounding depends on presence of minute / second / usec fields */switch(bt){case 0:break;case 1:/*::if(!dt) break;*/if(dt.u>=0.5){dt.u=0;++dt.S;}if(dt.S>=60){dt.S=0;++dt.M;}if(dt.M>=60){dt.M=0;++dt.H;}break;case 2:/*::if(!dt) break;*/if(dt.u>=0.5){dt.u=0;++dt.S;}if(dt.S>=60){dt.S=0;++dt.M;}break;}/* replace fields */var nstr="",jj;for(i=0;i<out.length;++i){switch(out[i].t){case't':case'T':case' ':case'D':break;case'X':out[i].v="";out[i].t=";";break;case'd':case'm':case'y':case'h':case'H':case'M':case's':case'e':case'b':case'Z':/*::if(!dt) throw "unreachable"; */out[i].v=SSF_write_date(out[i].t.charCodeAt(0),out[i].v,dt,ss0);out[i].t='t';break;case'n':case'?':jj=i+1;while(out[jj]!=null&&((c=out[jj].t)==="?"||c==="D"||(c===" "||c==="t")&&out[jj+1]!=null&&(out[jj+1].t==='?'||out[jj+1].t==="t"&&out[jj+1].v==='/')||out[i].t==='('&&(c===' '||c==='n'||c===')')||c==='t'&&(out[jj].v==='/'||out[jj].v===' '&&out[jj+1]!=null&&out[jj+1].t=='?'))){out[i].v+=out[jj].v;out[jj]={v:"",t:";"};++jj;}nstr+=out[i].v;i=jj-1;break;case'G':out[i].t='t';out[i].v=SSF_general(v,opts);break;}}var vv="",myv,ostr;if(nstr.length>0){if(nstr.charCodeAt(0)==40)/* '(' */{myv=v<0&&nstr.charCodeAt(0)===45?-v:v;ostr=write_num('n',nstr,myv);}else {myv=v<0&&flen>1?-v:v;ostr=write_num('n',nstr,myv);if(myv<0&&out[0]&&out[0].t=='t'){ostr=ostr.substr(1);out[0].v="-"+out[0].v;}}jj=ostr.length-1;var decpt=out.length;for(i=0;i<out.length;++i)if(out[i]!=null&&out[i].t!='t'&&out[i].v.indexOf(".")>-1){decpt=i;break;}var lasti=out.length;if(decpt===out.length&&ostr.indexOf("E")===-1){for(i=out.length-1;i>=0;--i){if(out[i]==null||'n?'.indexOf(out[i].t)===-1)continue;if(jj>=out[i].v.length-1){jj-=out[i].v.length;out[i].v=ostr.substr(jj+1,out[i].v.length);}else if(jj<0)out[i].v="";else {out[i].v=ostr.substr(0,jj+1);jj=-1;}out[i].t='t';lasti=i;}if(jj>=0&&lasti<out.length)out[lasti].v=ostr.substr(0,jj+1)+out[lasti].v;}else if(decpt!==out.length&&ostr.indexOf("E")===-1){jj=ostr.indexOf(".")-1;for(i=decpt;i>=0;--i){if(out[i]==null||'n?'.indexOf(out[i].t)===-1)continue;j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")-1:out[i].v.length-1;vv=out[i].v.substr(j+1);for(;j>=0;--j){if(jj>=0&&(out[i].v.charAt(j)==="0"||out[i].v.charAt(j)==="#"))vv=ostr.charAt(jj--)+vv;}out[i].v=vv;out[i].t='t';lasti=i;}if(jj>=0&&lasti<out.length)out[lasti].v=ostr.substr(0,jj+1)+out[lasti].v;jj=ostr.indexOf(".")+1;for(i=decpt;i<out.length;++i){if(out[i]==null||'n?('.indexOf(out[i].t)===-1&&i!==decpt)continue;j=out[i].v.indexOf(".")>-1&&i===decpt?out[i].v.indexOf(".")+1:0;vv=out[i].v.substr(0,j);for(;j<out[i].v.length;++j){if(jj<ostr.length)vv+=ostr.charAt(jj++);}out[i].v=vv;out[i].t='t';lasti=i;}}}for(i=0;i<out.length;++i)if(out[i]!=null&&'n?'.indexOf(out[i].t)>-1){myv=flen>1&&v<0&&i>0&&out[i-1].v==="-"?-v:v;out[i].v=write_num(out[i].t,out[i].v,myv);out[i].t='t';}var retval="";for(i=0;i!==out.length;++i)if(out[i]!=null)retval+=out[i].v;return retval;}var cfregex2=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function chkcond(v,rr){if(rr==null)return false;var thresh=parseFloat(rr[2]);switch(rr[1]){case"=":if(v==thresh)return true;break;case">":if(v>thresh)return true;break;case"<":if(v<thresh)return true;break;case"<>":if(v!=thresh)return true;break;case">=":if(v>=thresh)return true;break;case"<=":if(v<=thresh)return true;break;}return false;}function choose_fmt(f/*:string*/,v/*:any*/){var fmt=SSF_split_fmt(f);var l=fmt.length,lat=fmt[l-1].indexOf("@");if(l<4&&lat>-1)--l;if(fmt.length>4)throw new Error("cannot find right format for |"+fmt.join("|")+"|");if(typeof v!=="number")return [4,fmt.length===4||lat>-1?fmt[fmt.length-1]:"@"];switch(fmt.length){case 1:fmt=lat>-1?["General","General","General",fmt[0]]:[fmt[0],fmt[0],fmt[0],"@"];break;case 2:fmt=lat>-1?[fmt[0],fmt[0],fmt[0],fmt[1]]:[fmt[0],fmt[1],fmt[0],"@"];break;case 3:fmt=lat>-1?[fmt[0],fmt[1],fmt[0],fmt[2]]:[fmt[0],fmt[1],fmt[2],"@"];break;}var ff=v>0?fmt[0]:v<0?fmt[1]:fmt[2];if(fmt[0].indexOf("[")===-1&&fmt[1].indexOf("[")===-1)return [l,ff];if(fmt[0].match(/\[[=<>]/)!=null||fmt[1].match(/\[[=<>]/)!=null){var m1=fmt[0].match(cfregex2);var m2=fmt[1].match(cfregex2);return chkcond(v,m1)?[l,fmt[0]]:chkcond(v,m2)?[l,fmt[1]]:[l,fmt[m1!=null&&m2!=null?2:1]];}return [l,ff];}function SSF_format(fmt/*:string|number*/,v/*:any*/,o/*:?any*/){if(o==null)o={};var sfmt="";switch(typeof fmt){case"string":if(fmt=="m/d/yy"&&o.dateNF)sfmt=o.dateNF;else sfmt=fmt;break;case"number":if(fmt==14&&o.dateNF)sfmt=o.dateNF;else sfmt=(o.table!=null?o.table/*:any*/:table_fmt)[fmt];if(sfmt==null)sfmt=o.table&&o.table[SSF_default_map[fmt]]||table_fmt[SSF_default_map[fmt]];if(sfmt==null)sfmt=SSF_default_str[fmt]||"General";break;}if(SSF_isgeneral(sfmt,0))return SSF_general(v,o);if(v instanceof Date)v=datenum_local(v,o.date1904);var f=choose_fmt(sfmt,v);if(SSF_isgeneral(f[1]))return SSF_general(v,o);if(v===true)v="TRUE";else if(v===false)v="FALSE";else if(v===""||v==null)return "";return eval_fmt(f[1],v,o,f[0]);}function SSF_load(fmt/*:string*/,idx/*:?number*/)/*:number*/{if(typeof idx!='number'){idx=+idx||-1;/*::if(typeof idx != 'number') return 0x188; */for(var i=0;i<0x0188;++i){/*::if(typeof idx != 'number') return 0x188; */if(table_fmt[i]==undefined){if(idx<0)idx=i;continue;}if(table_fmt[i]==fmt){idx=i;break;}}/*::if(typeof idx != 'number') return 0x188; */if(idx<0)idx=0x187;}/*::if(typeof idx != 'number') return 0x188; */table_fmt[idx]=fmt;return idx;}function make_ssf(){table_fmt=SSF_init_table();}var SSFImplicit/*{[number]:string}*/={"5":'"$"#,##0_);\\("$"#,##0\\)',"6":'"$"#,##0_);[Red]\\("$"#,##0\\)',"7":'"$"#,##0.00_);\\("$"#,##0.00\\)',"8":'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',"23":'General',"24":'General',"25":'General',"26":'General',"27":'m/d/yy',"28":'m/d/yy',"29":'m/d/yy',"30":'m/d/yy',"31":'m/d/yy',"32":'h:mm:ss',"33":'h:mm:ss',"34":'h:mm:ss',"35":'h:mm:ss',"36":'m/d/yy',"41":'_(* #,##0_);_(* \(#,##0\);_(* "-"_);_(@_)',"42":'_("$"* #,##0_);_("$"* \(#,##0\);_("$"* "-"_);_(@_)',"43":'_(* #,##0.00_);_(* \(#,##0.00\);_(* "-"??_);_(@_)',"44":'_("$"* #,##0.00_);_("$"* \(#,##0.00\);_("$"* "-"??_);_(@_)',"50":'m/d/yy',"51":'m/d/yy',"52":'m/d/yy',"53":'m/d/yy',"54":'m/d/yy',"55":'m/d/yy',"56":'m/d/yy',"57":'m/d/yy',"58":'m/d/yy',"59":'0',"60":'0.00',"61":'#,##0',"62":'#,##0.00',"63":'"$"#,##0_);\\("$"#,##0\\)',"64":'"$"#,##0_);[Red]\\("$"#,##0\\)',"65":'"$"#,##0.00_);\\("$"#,##0.00\\)',"66":'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',"67":'0%',"68":'0.00%',"69":'# ?/?',"70":'# ??/??',"71":'m/d/yy',"72":'m/d/yy',"73":'d-mmm-yy',"74":'d-mmm',"75":'mmm-yy',"76":'h:mm',"77":'h:mm:ss',"78":'m/d/yy h:mm',"79":'mm:ss',"80":'[h]:mm:ss',"81":'mmss.0'}/*:any*/;/* dateNF parse TODO: move to SSF */var dateNFregex=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function dateNF_regex(dateNF/*:string|number*/)/*:RegExp*/{var fmt=typeof dateNF=="number"?table_fmt[dateNF]:dateNF;fmt=fmt.replace(dateNFregex,"(\\d+)");return new RegExp("^"+fmt+"$");}function dateNF_fix(str/*:string*/,dateNF/*:string*/,match/*:Array<string>*/)/*:string*/{var Y=-1,m=-1,d=-1,H=-1,M=-1,S=-1;(dateNF.match(dateNFregex)||[]).forEach(function(n,i){var v=parseInt(match[i+1],10);switch(n.toLowerCase().charAt(0)){case'y':Y=v;break;case'd':d=v;break;case'h':H=v;break;case's':S=v;break;case'm':if(H>=0)M=v;else m=v;break;}});if(S>=0&&M==-1&&m>=0){M=m;m=-1;}var datestr=(""+(Y>=0?Y:new Date().getFullYear())).slice(-4)+"-"+("00"+(m>=1?m:1)).slice(-2)+"-"+("00"+(d>=1?d:1)).slice(-2);if(datestr.length==7)datestr="0"+datestr;if(datestr.length==8)datestr="20"+datestr;var timestr=("00"+(H>=0?H:0)).slice(-2)+":"+("00"+(M>=0?M:0)).slice(-2)+":"+("00"+(S>=0?S:0)).slice(-2);if(H==-1&&M==-1&&S==-1)return datestr;if(Y==-1&&m==-1&&d==-1)return timestr;return datestr+"T"+timestr;}/*::
	declare var ReadShift:any;
	declare var CheckField:any;
	declare var prep_blob:any;
	declare var __readUInt32LE:any;
	declare var __readInt32LE:any;
	declare var __toBuffer:any;
	declare var __utf16le:any;
	declare var bconcat:any;
	declare var s2a:any;
	declare var chr0:any;
	declare var chr1:any;
	declare var has_buf:boolean;
	declare var new_buf:any;
	declare var new_raw_buf:any;
	declare var new_unsafe_buf:any;
	declare var Buffer_from:any;
	*/ /* cfb.js (C) 2013-present SheetJS -- http://sheetjs.com */ /* vim: set ts=2: */ /*jshint eqnull:true */ /*exported CFB */ /*global Uint8Array:false, Uint16Array:false */ /*::
	type SectorEntry = {
		name?:string;
		nodes?:Array<number>;
		data:RawBytes;
	};
	type SectorList = {
		[k:string|number]:SectorEntry;
		name:?string;
		fat_addrs:Array<number>;
		ssz:number;
	}
	type CFBFiles = {[n:string]:CFBEntry};
	*/ /* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */ /* vim: set ts=2: */ /*exported CRC32 */var CRC32=/*#__PURE__*/function(){var CRC32={};CRC32.version='1.2.0';/* see perf/crc32table.js */ /*global Int32Array */function signed_crc_table()/*:any*/{var c=0,table/*:Array<number>*/=new Array(256);for(var n=0;n!=256;++n){c=n;c=c&1?-306674912^c>>>1:c>>>1;c=c&1?-306674912^c>>>1:c>>>1;c=c&1?-306674912^c>>>1:c>>>1;c=c&1?-306674912^c>>>1:c>>>1;c=c&1?-306674912^c>>>1:c>>>1;c=c&1?-306674912^c>>>1:c>>>1;c=c&1?-306674912^c>>>1:c>>>1;c=c&1?-306674912^c>>>1:c>>>1;table[n]=c;}return typeof Int32Array!=='undefined'?new Int32Array(table):table;}var T0=signed_crc_table();function slice_by_16_tables(T){var c=0,v=0,n=0,table/*:Array<number>*/=typeof Int32Array!=='undefined'?new Int32Array(4096):new Array(4096);for(n=0;n!=256;++n)table[n]=T[n];for(n=0;n!=256;++n){v=T[n];for(c=256+n;c<4096;c+=256)v=table[c]=v>>>8^T[v&0xFF];}var out=[];for(n=1;n!=16;++n)out[n-1]=typeof Int32Array!=='undefined'?table.subarray(n*256,n*256+256):table.slice(n*256,n*256+256);return out;}var TT=slice_by_16_tables(T0);var T1=TT[0],T2=TT[1],T3=TT[2],T4=TT[3],T5=TT[4];var T6=TT[5],T7=TT[6],T8=TT[7],T9=TT[8],Ta=TT[9];var Tb=TT[10],Tc=TT[11],Td=TT[12],Te=TT[13],Tf=TT[14];function crc32_bstr(bstr/*:string*/,seed/*:number*/)/*:number*/{var C=seed/*:: ? 0 : 0 */^-1;for(var i=0,L=bstr.length;i<L;)C=C>>>8^T0[(C^bstr.charCodeAt(i++))&0xFF];return ~C;}function crc32_buf(B/*:Uint8Array|Array<number>*/,seed/*:number*/)/*:number*/{var C=seed/*:: ? 0 : 0 */^-1,L=B.length-15,i=0;for(;i<L;)C=Tf[B[i++]^C&255]^Te[B[i++]^C>>8&255]^Td[B[i++]^C>>16&255]^Tc[B[i++]^C>>>24]^Tb[B[i++]]^Ta[B[i++]]^T9[B[i++]]^T8[B[i++]]^T7[B[i++]]^T6[B[i++]]^T5[B[i++]]^T4[B[i++]]^T3[B[i++]]^T2[B[i++]]^T1[B[i++]]^T0[B[i++]];L+=15;while(i<L)C=C>>>8^T0[(C^B[i++])&0xFF];return ~C;}function crc32_str(str/*:string*/,seed/*:number*/)/*:number*/{var C=seed^-1;for(var i=0,L=str.length,c=0,d=0;i<L;){c=str.charCodeAt(i++);if(c<0x80){C=C>>>8^T0[(C^c)&0xFF];}else if(c<0x800){C=C>>>8^T0[(C^(192|c>>6&31))&0xFF];C=C>>>8^T0[(C^(128|c&63))&0xFF];}else if(c>=0xD800&&c<0xE000){c=(c&1023)+64;d=str.charCodeAt(i++)&1023;C=C>>>8^T0[(C^(240|c>>8&7))&0xFF];C=C>>>8^T0[(C^(128|c>>2&63))&0xFF];C=C>>>8^T0[(C^(128|d>>6&15|(c&3)<<4))&0xFF];C=C>>>8^T0[(C^(128|d&63))&0xFF];}else {C=C>>>8^T0[(C^(224|c>>12&15))&0xFF];C=C>>>8^T0[(C^(128|c>>6&63))&0xFF];C=C>>>8^T0[(C^(128|c&63))&0xFF];}}return ~C;}CRC32.table=T0;CRC32.bstr=crc32_bstr;CRC32.buf=crc32_buf;CRC32.str=crc32_str;return CRC32;}();/* [MS-CFB] v20171201 */var CFB=/*#__PURE__*/function _CFB(){var exports={};exports.version='1.2.1';/* [MS-CFB] 2.6.4 */function namecmp(l/*:string*/,r/*:string*/)/*:number*/{var L=l.split("/"),R=r.split("/");for(var i=0,c=0,Z=Math.min(L.length,R.length);i<Z;++i){if(c=L[i].length-R[i].length)return c;if(L[i]!=R[i])return L[i]<R[i]?-1:1;}return L.length-R.length;}function dirname(p/*:string*/)/*:string*/{if(p.charAt(p.length-1)=="/")return p.slice(0,-1).indexOf("/")===-1?p:dirname(p.slice(0,-1));var c=p.lastIndexOf("/");return c===-1?p:p.slice(0,c+1);}function filename(p/*:string*/)/*:string*/{if(p.charAt(p.length-1)=="/")return filename(p.slice(0,-1));var c=p.lastIndexOf("/");return c===-1?p:p.slice(c+1);}/* -------------------------------------------------------------------------- */ /* DOS Date format:
	   high|YYYYYYYm.mmmddddd.HHHHHMMM.MMMSSSSS|low
	   add 1980 to stored year
	   stored second should be doubled
	*/ /* write JS date to buf as a DOS date */function write_dos_date(buf/*:CFBlob*/,date/*:Date|string*/){if(typeof date==="string")date=new Date(date);var hms/*:number*/=date.getHours();hms=hms<<6|date.getMinutes();hms=hms<<5|date.getSeconds()>>>1;buf.write_shift(2,hms);var ymd/*:number*/=date.getFullYear()-1980;ymd=ymd<<4|date.getMonth()+1;ymd=ymd<<5|date.getDate();buf.write_shift(2,ymd);}/* read four bytes from buf and interpret as a DOS date */function parse_dos_date(buf/*:CFBlob*/)/*:Date*/{var hms=buf.read_shift(2)&0xFFFF;var ymd=buf.read_shift(2)&0xFFFF;var val=new Date();var d=ymd&0x1F;ymd>>>=5;var m=ymd&0x0F;ymd>>>=4;val.setMilliseconds(0);val.setFullYear(ymd+1980);val.setMonth(m-1);val.setDate(d);var S=hms&0x1F;hms>>>=5;var M=hms&0x3F;hms>>>=6;val.setHours(hms);val.setMinutes(M);val.setSeconds(S<<1);return val;}function parse_extra_field(blob/*:CFBlob*/)/*:any*/{prep_blob(blob,0);var o=/*::(*/{}/*:: :any)*/;var flags=0;while(blob.l<=blob.length-4){var type=blob.read_shift(2);var sz=blob.read_shift(2),tgt=blob.l+sz;var p={};switch(type){/* UNIX-style Timestamps */case 0x5455:{flags=blob.read_shift(1);if(flags&1)p.mtime=blob.read_shift(4);/* for some reason, CD flag corresponds to LFH */if(sz>5){if(flags&2)p.atime=blob.read_shift(4);if(flags&4)p.ctime=blob.read_shift(4);}if(p.mtime)p.mt=new Date(p.mtime*1000);}break;}blob.l=tgt;o[type]=p;}return o;}var fs/*:: = require('fs'); */;function get_fs(){return fs||(fs={});}function parse(file/*:RawBytes*/,options/*:CFBReadOpts*/)/*:CFBContainer*/{if(file[0]==0x50&&file[1]==0x4b)return parse_zip(file,options);if((file[0]|0x20)==0x6d&&(file[1]|0x20)==0x69)return parse_mad(file,options);if(file.length<512)throw new Error("CFB file size "+file.length+" < 512");var mver=3;var ssz=512;var nmfs=0;// number of mini FAT sectors
	var difat_sec_cnt=0;var dir_start=0;var minifat_start=0;var difat_start=0;var fat_addrs/*:Array<number>*/=[];// locations of FAT sectors
	/* [MS-CFB] 2.2 Compound File Header */var blob/*:CFBlob*/=/*::(*/file.slice(0,512)/*:: :any)*/;prep_blob(blob,0);/* major version */var mv=check_get_mver(blob);mver=mv[0];switch(mver){case 3:ssz=512;break;case 4:ssz=4096;break;case 0:if(mv[1]==0)return parse_zip(file,options);/* falls through */default:throw new Error("Major Version: Expected 3 or 4 saw "+mver);}/* reprocess header */if(ssz!==512){blob=/*::(*/file.slice(0,ssz)/*:: :any)*/;prep_blob(blob,28/* blob.l */);}/* Save header for final object */var header/*:RawBytes*/=file.slice(0,ssz);check_shifts(blob,mver);// Number of Directory Sectors
	var dir_cnt/*:number*/=blob.read_shift(4,'i');if(mver===3&&dir_cnt!==0)throw new Error('# Directory Sectors: Expected 0 saw '+dir_cnt);// Number of FAT Sectors
	blob.l+=4;// First Directory Sector Location
	dir_start=blob.read_shift(4,'i');// Transaction Signature
	blob.l+=4;// Mini Stream Cutoff Size
	blob.chk('00100000','Mini Stream Cutoff Size: ');// First Mini FAT Sector Location
	minifat_start=blob.read_shift(4,'i');// Number of Mini FAT Sectors
	nmfs=blob.read_shift(4,'i');// First DIFAT sector location
	difat_start=blob.read_shift(4,'i');// Number of DIFAT Sectors
	difat_sec_cnt=blob.read_shift(4,'i');// Grab FAT Sector Locations
	for(var q=-1,j=0;j<109;++j){/* 109 = (512 - blob.l)>>>2; */q=blob.read_shift(4,'i');if(q<0)break;fat_addrs[j]=q;}/** Break the file up into sectors */var sectors/*:Array<RawBytes>*/=sectorify(file,ssz);sleuth_fat(difat_start,difat_sec_cnt,sectors,ssz,fat_addrs);/** Chains */var sector_list/*:SectorList*/=make_sector_list(sectors,dir_start,fat_addrs,ssz);sector_list[dir_start].name="!Directory";if(nmfs>0&&minifat_start!==ENDOFCHAIN)sector_list[minifat_start].name="!MiniFAT";sector_list[fat_addrs[0]].name="!FAT";sector_list.fat_addrs=fat_addrs;sector_list.ssz=ssz;/* [MS-CFB] 2.6.1 Compound File Directory Entry */var files/*:CFBFiles*/={},Paths/*:Array<string>*/=[],FileIndex/*:CFBFileIndex*/=[],FullPaths/*:Array<string>*/=[];read_directory(dir_start,sector_list,sectors,Paths,nmfs,files,FileIndex,minifat_start);build_full_paths(FileIndex,FullPaths,Paths);Paths.shift();var o={FileIndex:FileIndex,FullPaths:FullPaths};// $FlowIgnore
	if(options&&options.raw)o.raw={header:header,sectors:sectors};return o;}// parse
	/* [MS-CFB] 2.2 Compound File Header -- read up to major version */function check_get_mver(blob/*:CFBlob*/)/*:[number, number]*/{if(blob[blob.l]==0x50&&blob[blob.l+1]==0x4b)return [0,0];// header signature 8
	blob.chk(HEADER_SIGNATURE,'Header Signature: ');// clsid 16
	//blob.chk(HEADER_CLSID, 'CLSID: ');
	blob.l+=16;// minor version 2
	var mver/*:number*/=blob.read_shift(2,'u');return [blob.read_shift(2,'u'),mver];}function check_shifts(blob/*:CFBlob*/,mver/*:number*/)/*:void*/{var shift=0x09;// Byte Order
	//blob.chk('feff', 'Byte Order: '); // note: some writers put 0xffff
	blob.l+=2;// Sector Shift
	switch(shift=blob.read_shift(2)){case 0x09:if(mver!=3)throw new Error('Sector Shift: Expected 9 saw '+shift);break;case 0x0c:if(mver!=4)throw new Error('Sector Shift: Expected 12 saw '+shift);break;default:throw new Error('Sector Shift: Expected 9 or 12 saw '+shift);}// Mini Sector Shift
	blob.chk('0600','Mini Sector Shift: ');// Reserved
	blob.chk('000000000000','Reserved: ');}/** Break the file up into sectors */function sectorify(file/*:RawBytes*/,ssz/*:number*/)/*:Array<RawBytes>*/{var nsectors=Math.ceil(file.length/ssz)-1;var sectors/*:Array<RawBytes>*/=[];for(var i=1;i<nsectors;++i)sectors[i-1]=file.slice(i*ssz,(i+1)*ssz);sectors[nsectors-1]=file.slice(nsectors*ssz);return sectors;}/* [MS-CFB] 2.6.4 Red-Black Tree */function build_full_paths(FI/*:CFBFileIndex*/,FP/*:Array<string>*/,Paths/*:Array<string>*/)/*:void*/{var i=0,L=0,R=0,C=0,j=0,pl=Paths.length;var dad/*:Array<number>*/=[],q/*:Array<number>*/=[];for(;i<pl;++i){dad[i]=q[i]=i;FP[i]=Paths[i];}for(;j<q.length;++j){i=q[j];L=FI[i].L;R=FI[i].R;C=FI[i].C;if(dad[i]===i){if(L!==-1/*NOSTREAM*/&&dad[L]!==L)dad[i]=dad[L];if(R!==-1&&dad[R]!==R)dad[i]=dad[R];}if(C!==-1/*NOSTREAM*/)dad[C]=i;if(L!==-1&&i!=dad[i]){dad[L]=dad[i];if(q.lastIndexOf(L)<j)q.push(L);}if(R!==-1&&i!=dad[i]){dad[R]=dad[i];if(q.lastIndexOf(R)<j)q.push(R);}}for(i=1;i<pl;++i)if(dad[i]===i){if(R!==-1/*NOSTREAM*/&&dad[R]!==R)dad[i]=dad[R];else if(L!==-1&&dad[L]!==L)dad[i]=dad[L];}for(i=1;i<pl;++i){if(FI[i].type===0/* unknown */)continue;j=i;if(j!=dad[j])do{j=dad[j];FP[i]=FP[j]+"/"+FP[i];}while(j!==0&&-1!==dad[j]&&j!=dad[j]);dad[i]=-1;}FP[0]+="/";for(i=1;i<pl;++i){if(FI[i].type!==2/* stream */)FP[i]+="/";}}function get_mfat_entry(entry/*:CFBEntry*/,payload/*:RawBytes*/,mini/*:?RawBytes*/)/*:CFBlob*/{var start=entry.start,size=entry.size;//return (payload.slice(start*MSSZ, start*MSSZ + size)/*:any*/);
	var o=[];var idx=start;while(mini&&size>0&&idx>=0){o.push(payload.slice(idx*MSSZ,idx*MSSZ+MSSZ));size-=MSSZ;idx=__readInt32LE(mini,idx*4);}if(o.length===0)return new_buf(0)/*:any*/;return bconcat(o).slice(0,entry.size)/*:any*/;}/** Chase down the rest of the DIFAT chain to build a comprehensive list
	    DIFAT chains by storing the next sector number as the last 32 bits */function sleuth_fat(idx/*:number*/,cnt/*:number*/,sectors/*:Array<RawBytes>*/,ssz/*:number*/,fat_addrs)/*:void*/{var q/*:number*/=ENDOFCHAIN;if(idx===ENDOFCHAIN){if(cnt!==0)throw new Error("DIFAT chain shorter than expected");}else if(idx!==-1/*FREESECT*/){var sector=sectors[idx],m=(ssz>>>2)-1;if(!sector)return;for(var i=0;i<m;++i){if((q=__readInt32LE(sector,i*4))===ENDOFCHAIN)break;fat_addrs.push(q);}sleuth_fat(__readInt32LE(sector,ssz-4),cnt-1,sectors,ssz,fat_addrs);}}/** Follow the linked list of sectors for a given starting point */function get_sector_list(sectors/*:Array<RawBytes>*/,start/*:number*/,fat_addrs/*:Array<number>*/,ssz/*:number*/,chkd/*:?Array<boolean>*/)/*:SectorEntry*/{var buf/*:Array<number>*/=[],buf_chain/*:Array<any>*/=[];if(!chkd)chkd=[];var modulus=ssz-1,j=0,jj=0;for(j=start;j>=0;){chkd[j]=true;buf[buf.length]=j;buf_chain.push(sectors[j]);var addr=fat_addrs[Math.floor(j*4/ssz)];jj=j*4&modulus;if(ssz<4+jj)throw new Error("FAT boundary crossed: "+j+" 4 "+ssz);if(!sectors[addr])break;j=__readInt32LE(sectors[addr],jj);}return {nodes:buf,data:__toBuffer([buf_chain])};}/** Chase down the sector linked lists */function make_sector_list(sectors/*:Array<RawBytes>*/,dir_start/*:number*/,fat_addrs/*:Array<number>*/,ssz/*:number*/)/*:SectorList*/{var sl=sectors.length,sector_list/*:SectorList*/=[]/*:any*/;var chkd/*:Array<boolean>*/=[],buf/*:Array<number>*/=[],buf_chain/*:Array<RawBytes>*/=[];var modulus=ssz-1,i=0,j=0,k=0,jj=0;for(i=0;i<sl;++i){buf=[]/*:Array<number>*/;k=i+dir_start;if(k>=sl)k-=sl;if(chkd[k])continue;buf_chain=[];var seen=[];for(j=k;j>=0;){seen[j]=true;chkd[j]=true;buf[buf.length]=j;buf_chain.push(sectors[j]);var addr/*:number*/=fat_addrs[Math.floor(j*4/ssz)];jj=j*4&modulus;if(ssz<4+jj)throw new Error("FAT boundary crossed: "+j+" 4 "+ssz);if(!sectors[addr])break;j=__readInt32LE(sectors[addr],jj);if(seen[j])break;}sector_list[k]={nodes:buf,data:__toBuffer([buf_chain])}/*:SectorEntry*/;}return sector_list;}/* [MS-CFB] 2.6.1 Compound File Directory Entry */function read_directory(dir_start/*:number*/,sector_list/*:SectorList*/,sectors/*:Array<RawBytes>*/,Paths/*:Array<string>*/,nmfs,files,FileIndex,mini){var minifat_store=0,pl=Paths.length?2:0;var sector=sector_list[dir_start].data;var i=0,namelen=0,name;for(;i<sector.length;i+=128){var blob/*:CFBlob*/=/*::(*/sector.slice(i,i+128)/*:: :any)*/;prep_blob(blob,64);namelen=blob.read_shift(2);name=__utf16le(blob,0,namelen-pl);Paths.push(name);var o/*:CFBEntry*/={name:name,type:blob.read_shift(1),color:blob.read_shift(1),L:blob.read_shift(4,'i'),R:blob.read_shift(4,'i'),C:blob.read_shift(4,'i'),clsid:blob.read_shift(16),state:blob.read_shift(4,'i'),start:0,size:0};var ctime/*:number*/=blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2);if(ctime!==0)o.ct=read_date(blob,blob.l-8);var mtime/*:number*/=blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2)+blob.read_shift(2);if(mtime!==0)o.mt=read_date(blob,blob.l-8);o.start=blob.read_shift(4,'i');o.size=blob.read_shift(4,'i');if(o.size<0&&o.start<0){o.size=o.type=0;o.start=ENDOFCHAIN;o.name="";}if(o.type===5){/* root */minifat_store=o.start;if(nmfs>0&&minifat_store!==ENDOFCHAIN)sector_list[minifat_store].name="!StreamData";/*minifat_size = o.size;*/}else if(o.size>=4096/* MSCSZ */){o.storage='fat';if(sector_list[o.start]===undefined)sector_list[o.start]=get_sector_list(sectors,o.start,sector_list.fat_addrs,sector_list.ssz);sector_list[o.start].name=o.name;o.content=sector_list[o.start].data.slice(0,o.size)/*:any*/;}else {o.storage='minifat';if(o.size<0)o.size=0;else if(minifat_store!==ENDOFCHAIN&&o.start!==ENDOFCHAIN&&sector_list[minifat_store]){o.content=get_mfat_entry(o,sector_list[minifat_store].data,(sector_list[mini]||{}).data);}}if(o.content)prep_blob(o.content,0);files[name]=o;FileIndex.push(o);}}function read_date(blob/*:RawBytes|CFBlob*/,offset/*:number*/)/*:Date*/{return new Date((__readUInt32LE(blob,offset+4)/1e7*Math.pow(2,32)+__readUInt32LE(blob,offset)/1e7-11644473600)*1000);}function read_file(filename/*:string*/,options/*:CFBReadOpts*/){get_fs();return parse(fs.readFileSync(filename),options);}function read(blob/*:RawBytes|string*/,options/*:CFBReadOpts*/){var type=options&&options.type;if(!type){if(has_buf&&Buffer.isBuffer(blob))type="buffer";}switch(type||"base64"){case"file":/*:: if(typeof blob !== 'string') throw "Must pass a filename when type='file'"; */return read_file(blob,options);case"base64":/*:: if(typeof blob !== 'string') throw "Must pass a base64-encoded binary string when type='file'"; */return parse(s2a(Base64_decode(blob)),options);case"binary":/*:: if(typeof blob !== 'string') throw "Must pass a binary string when type='file'"; */return parse(s2a(blob),options);}return parse(/*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */blob,options);}function init_cfb(cfb/*:CFBContainer*/,opts/*:?any*/)/*:void*/{var o=opts||{},root=o.root||"Root Entry";if(!cfb.FullPaths)cfb.FullPaths=[];if(!cfb.FileIndex)cfb.FileIndex=[];if(cfb.FullPaths.length!==cfb.FileIndex.length)throw new Error("inconsistent CFB structure");if(cfb.FullPaths.length===0){cfb.FullPaths[0]=root+"/";cfb.FileIndex[0]={name:root,type:5}/*:any*/;}if(o.CLSID)cfb.FileIndex[0].clsid=o.CLSID;seed_cfb(cfb);}function seed_cfb(cfb/*:CFBContainer*/)/*:void*/{var nm="\u0001Sh33tJ5";if(CFB.find(cfb,"/"+nm))return;var p=new_buf(4);p[0]=55;p[1]=p[3]=50;p[2]=54;cfb.FileIndex.push({name:nm,type:2,content:p,size:4,L:69,R:69,C:69}/*:any*/);cfb.FullPaths.push(cfb.FullPaths[0]+nm);rebuild_cfb(cfb);}function rebuild_cfb(cfb/*:CFBContainer*/,f/*:?boolean*/)/*:void*/{init_cfb(cfb);var gc=false,s=false;for(var i=cfb.FullPaths.length-1;i>=0;--i){var _file=cfb.FileIndex[i];switch(_file.type){case 0:if(s)gc=true;else {cfb.FileIndex.pop();cfb.FullPaths.pop();}break;case 1:case 2:case 5:s=true;if(isNaN(_file.R*_file.L*_file.C))gc=true;if(_file.R>-1&&_file.L>-1&&_file.R==_file.L)gc=true;break;default:gc=true;break;}}if(!gc&&!f)return;var now=new Date(1987,1,19),j=0;// Track which names exist
	var fullPaths=Object.create?Object.create(null):{};var data/*:Array<[string, CFBEntry]>*/=[];for(i=0;i<cfb.FullPaths.length;++i){fullPaths[cfb.FullPaths[i]]=true;if(cfb.FileIndex[i].type===0)continue;data.push([cfb.FullPaths[i],cfb.FileIndex[i]]);}for(i=0;i<data.length;++i){var dad=dirname(data[i][0]);s=fullPaths[dad];if(!s){data.push([dad,{name:filename(dad).replace("/",""),type:1,clsid:HEADER_CLSID,ct:now,mt:now,content:null}/*:any*/]);// Add name to set
	fullPaths[dad]=true;}}data.sort(function(x,y){return namecmp(x[0],y[0]);});cfb.FullPaths=[];cfb.FileIndex=[];for(i=0;i<data.length;++i){cfb.FullPaths[i]=data[i][0];cfb.FileIndex[i]=data[i][1];}for(i=0;i<data.length;++i){var elt=cfb.FileIndex[i];var nm=cfb.FullPaths[i];elt.name=filename(nm).replace("/","");elt.L=elt.R=elt.C=-(elt.color=1);elt.size=elt.content?elt.content.length:0;elt.start=0;elt.clsid=elt.clsid||HEADER_CLSID;if(i===0){elt.C=data.length>1?1:-1;elt.size=0;elt.type=5;}else if(nm.slice(-1)=="/"){for(j=i+1;j<data.length;++j)if(dirname(cfb.FullPaths[j])==nm)break;elt.C=j>=data.length?-1:j;for(j=i+1;j<data.length;++j)if(dirname(cfb.FullPaths[j])==dirname(nm))break;elt.R=j>=data.length?-1:j;elt.type=1;}else {if(dirname(cfb.FullPaths[i+1]||"")==dirname(nm))elt.R=i+1;elt.type=2;}}}function _write(cfb/*:CFBContainer*/,options/*:CFBWriteOpts*/)/*:RawBytes|string*/{var _opts=options||{};/* MAD is order-sensitive, skip rebuild and sort */if(_opts.fileType=='mad')return write_mad(cfb,_opts);rebuild_cfb(cfb);switch(_opts.fileType){case'zip':return write_zip(cfb,_opts);//case 'mad': return write_mad(cfb, _opts);
	}var L=function(cfb/*:CFBContainer*/)/*:Array<number>*/{var mini_size=0,fat_size=0;for(var i=0;i<cfb.FileIndex.length;++i){var file=cfb.FileIndex[i];if(!file.content)continue;/*:: if(file.content == null) throw new Error("unreachable"); */var flen=file.content.length;if(flen>0){if(flen<0x1000)mini_size+=flen+0x3F>>6;else fat_size+=flen+0x01FF>>9;}}var dir_cnt=cfb.FullPaths.length+3>>2;var mini_cnt=mini_size+7>>3;var mfat_cnt=mini_size+0x7F>>7;var fat_base=mini_cnt+fat_size+dir_cnt+mfat_cnt;var fat_cnt=fat_base+0x7F>>7;var difat_cnt=fat_cnt<=109?0:Math.ceil((fat_cnt-109)/0x7F);while(fat_base+fat_cnt+difat_cnt+0x7F>>7>fat_cnt)difat_cnt=++fat_cnt<=109?0:Math.ceil((fat_cnt-109)/0x7F);var L=[1,difat_cnt,fat_cnt,mfat_cnt,dir_cnt,fat_size,mini_size,0];cfb.FileIndex[0].size=mini_size<<6;L[7]=(cfb.FileIndex[0].start=L[0]+L[1]+L[2]+L[3]+L[4]+L[5])+(L[6]+7>>3);return L;}(cfb);var o=new_buf(L[7]<<9);var i=0,T=0;{for(i=0;i<8;++i)o.write_shift(1,HEADER_SIG[i]);for(i=0;i<8;++i)o.write_shift(2,0);o.write_shift(2,0x003E);o.write_shift(2,0x0003);o.write_shift(2,0xFFFE);o.write_shift(2,0x0009);o.write_shift(2,0x0006);for(i=0;i<3;++i)o.write_shift(2,0);o.write_shift(4,0);o.write_shift(4,L[2]);o.write_shift(4,L[0]+L[1]+L[2]+L[3]-1);o.write_shift(4,0);o.write_shift(4,1<<12);o.write_shift(4,L[3]?L[0]+L[1]+L[2]-1:ENDOFCHAIN);o.write_shift(4,L[3]);o.write_shift(-4,L[1]?L[0]-1:ENDOFCHAIN);o.write_shift(4,L[1]);for(i=0;i<109;++i)o.write_shift(-4,i<L[2]?L[1]+i:-1);}if(L[1]){for(T=0;T<L[1];++T){for(;i<236+T*127;++i)o.write_shift(-4,i<L[2]?L[1]+i:-1);o.write_shift(-4,T===L[1]-1?ENDOFCHAIN:T+1);}}var chainit=function(w/*:number*/)/*:void*/{for(T+=w;i<T-1;++i)o.write_shift(-4,i+1);if(w){++i;o.write_shift(-4,ENDOFCHAIN);}};T=i=0;for(T+=L[1];i<T;++i)o.write_shift(-4,consts.DIFSECT);for(T+=L[2];i<T;++i)o.write_shift(-4,consts.FATSECT);chainit(L[3]);chainit(L[4]);var j/*:number*/=0,flen/*:number*/=0;var file/*:CFBEntry*/=cfb.FileIndex[0];for(;j<cfb.FileIndex.length;++j){file=cfb.FileIndex[j];if(!file.content)continue;/*:: if(file.content == null) throw new Error("unreachable"); */flen=file.content.length;if(flen<0x1000)continue;file.start=T;chainit(flen+0x01FF>>9);}chainit(L[6]+7>>3);while(o.l&0x1FF)o.write_shift(-4,consts.ENDOFCHAIN);T=i=0;for(j=0;j<cfb.FileIndex.length;++j){file=cfb.FileIndex[j];if(!file.content)continue;/*:: if(file.content == null) throw new Error("unreachable"); */flen=file.content.length;if(!flen||flen>=0x1000)continue;file.start=T;chainit(flen+0x3F>>6);}while(o.l&0x1FF)o.write_shift(-4,consts.ENDOFCHAIN);for(i=0;i<L[4]<<2;++i){var nm=cfb.FullPaths[i];if(!nm||nm.length===0){for(j=0;j<17;++j)o.write_shift(4,0);for(j=0;j<3;++j)o.write_shift(4,-1);for(j=0;j<12;++j)o.write_shift(4,0);continue;}file=cfb.FileIndex[i];if(i===0)file.start=file.size?file.start-1:ENDOFCHAIN;var _nm/*:string*/=i===0&&_opts.root||file.name;flen=2*(_nm.length+1);o.write_shift(64,_nm,"utf16le");o.write_shift(2,flen);o.write_shift(1,file.type);o.write_shift(1,file.color);o.write_shift(-4,file.L);o.write_shift(-4,file.R);o.write_shift(-4,file.C);if(!file.clsid)for(j=0;j<4;++j)o.write_shift(4,0);else o.write_shift(16,file.clsid,"hex");o.write_shift(4,file.state||0);o.write_shift(4,0);o.write_shift(4,0);o.write_shift(4,0);o.write_shift(4,0);o.write_shift(4,file.start);o.write_shift(4,file.size);o.write_shift(4,0);}for(i=1;i<cfb.FileIndex.length;++i){file=cfb.FileIndex[i];/*:: if(!file.content) throw new Error("unreachable"); */if(file.size>=0x1000){o.l=file.start+1<<9;if(has_buf&&Buffer.isBuffer(file.content)){file.content.copy(o,o.l,0,file.size);// o is a 0-filled Buffer so just set next offset
	o.l+=file.size+511&-512;}else {for(j=0;j<file.size;++j)o.write_shift(1,file.content[j]);for(;j&0x1FF;++j)o.write_shift(1,0);}}}for(i=1;i<cfb.FileIndex.length;++i){file=cfb.FileIndex[i];/*:: if(!file.content) throw new Error("unreachable"); */if(file.size>0&&file.size<0x1000){if(has_buf&&Buffer.isBuffer(file.content)){file.content.copy(o,o.l,0,file.size);// o is a 0-filled Buffer so just set next offset
	o.l+=file.size+63&-64;}else {for(j=0;j<file.size;++j)o.write_shift(1,file.content[j]);for(;j&0x3F;++j)o.write_shift(1,0);}}}if(has_buf){o.l=o.length;}else {// When using Buffer, already 0-filled
	while(o.l<o.length)o.write_shift(1,0);}return o;}/* [MS-CFB] 2.6.4 (Unicode 3.0.1 case conversion) */function find(cfb/*:CFBContainer*/,path/*:string*/)/*:?CFBEntry*/{var UCFullPaths/*:Array<string>*/=cfb.FullPaths.map(function(x){return x.toUpperCase();});var UCPaths/*:Array<string>*/=UCFullPaths.map(function(x){var y=x.split("/");return y[y.length-(x.slice(-1)=="/"?2:1)];});var k/*:boolean*/=false;if(path.charCodeAt(0)===47/* "/" */){k=true;path=UCFullPaths[0].slice(0,-1)+path;}else k=path.indexOf("/")!==-1;var UCPath/*:string*/=path.toUpperCase();var w/*:number*/=k===true?UCFullPaths.indexOf(UCPath):UCPaths.indexOf(UCPath);if(w!==-1)return cfb.FileIndex[w];var m=!UCPath.match(chr1);UCPath=UCPath.replace(chr0,'');if(m)UCPath=UCPath.replace(chr1,'!');for(w=0;w<UCFullPaths.length;++w){if((m?UCFullPaths[w].replace(chr1,'!'):UCFullPaths[w]).replace(chr0,'')==UCPath)return cfb.FileIndex[w];if((m?UCPaths[w].replace(chr1,'!'):UCPaths[w]).replace(chr0,'')==UCPath)return cfb.FileIndex[w];}return null;}/** CFB Constants */var MSSZ=64;/* Mini Sector Size = 1<<6 */ //var MSCSZ = 4096; /* Mini Stream Cutoff Size */
	/* 2.1 Compound File Sector Numbers and Types */var ENDOFCHAIN=-2;/* 2.2 Compound File Header */var HEADER_SIGNATURE='d0cf11e0a1b11ae1';var HEADER_SIG=[0xD0,0xCF,0x11,0xE0,0xA1,0xB1,0x1A,0xE1];var HEADER_CLSID='00000000000000000000000000000000';var consts={/* 2.1 Compund File Sector Numbers and Types */MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:ENDOFCHAIN,FREESECT:-1,/* 2.2 Compound File Header */HEADER_SIGNATURE:HEADER_SIGNATURE,HEADER_MINOR_VERSION:'3e00',MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:HEADER_CLSID,/* 2.6.1 Compound File Directory Entry */EntryTypes:['unknown','storage','stream','lockbytes','property','root']};function write_file(cfb/*:CFBContainer*/,filename/*:string*/,options/*:CFBWriteOpts*/)/*:void*/{get_fs();var o=_write(cfb,options);/*:: if(typeof Buffer == 'undefined' || !Buffer.isBuffer(o) || !(o instanceof Buffer)) throw new Error("unreachable"); */fs.writeFileSync(filename,o);}function a2s(o/*:RawBytes*/)/*:string*/{var out=new Array(o.length);for(var i=0;i<o.length;++i)out[i]=String.fromCharCode(o[i]);return out.join("");}function write(cfb/*:CFBContainer*/,options/*:CFBWriteOpts*/)/*:RawBytes|string*/{var o=_write(cfb,options);switch(options&&options.type||"buffer"){case"file":get_fs();fs.writeFileSync(options.filename,o/*:any*/);return o;case"binary":return typeof o=="string"?o:a2s(o);case"base64":return Base64_encode(typeof o=="string"?o:a2s(o));case"buffer":if(has_buf)return Buffer.isBuffer(o)?o:Buffer_from(o);/* falls through */case"array":return typeof o=="string"?s2a(o):o;}return o;}/* node < 8.1 zlib does not expose bytesRead, so default to pure JS */var _zlib;function use_zlib(zlib){try{var InflateRaw=zlib.InflateRaw;var InflRaw=new InflateRaw();InflRaw._processChunk(new Uint8Array([3,0]),InflRaw._finishFlushFlag);if(InflRaw.bytesRead)_zlib=zlib;else throw new Error("zlib does not expose bytesRead");}catch(e){console.error("cannot use native zlib: "+(e.message||e));}}function _inflateRawSync(payload,usz){if(!_zlib)return _inflate(payload,usz);var InflateRaw=_zlib.InflateRaw;var InflRaw=new InflateRaw();var out=InflRaw._processChunk(payload.slice(payload.l),InflRaw._finishFlushFlag);payload.l+=InflRaw.bytesRead;return out;}function _deflateRawSync(payload){return _zlib?_zlib.deflateRawSync(payload):_deflate(payload);}var CLEN_ORDER=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];/*  LEN_ID = [ 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285 ]; */var LEN_LN=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];/*  DST_ID = [  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,  14,  15,  16,  17,  18,  19,   20,   21,   22,   23,   24,   25,   26,    27,    28,    29 ]; */var DST_LN=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function bit_swap_8(n){var t=(n<<1|n<<11)&0x22110|(n<<5|n<<15)&0x88440;return (t>>16|t>>8|t)&0xFF;}var use_typed_arrays=typeof Uint8Array!=='undefined';var bitswap8=use_typed_arrays?new Uint8Array(1<<8):[];for(var q=0;q<1<<8;++q)bitswap8[q]=bit_swap_8(q);function bit_swap_n(n,b){var rev=bitswap8[n&0xFF];if(b<=8)return rev>>>8-b;rev=rev<<8|bitswap8[n>>8&0xFF];if(b<=16)return rev>>>16-b;rev=rev<<8|bitswap8[n>>16&0xFF];return rev>>>24-b;}/* helpers for unaligned bit reads */function read_bits_2(buf,bl){var w=bl&7,h=bl>>>3;return (buf[h]|(w<=6?0:buf[h+1]<<8))>>>w&0x03;}function read_bits_3(buf,bl){var w=bl&7,h=bl>>>3;return (buf[h]|(w<=5?0:buf[h+1]<<8))>>>w&0x07;}function read_bits_4(buf,bl){var w=bl&7,h=bl>>>3;return (buf[h]|(w<=4?0:buf[h+1]<<8))>>>w&0x0F;}function read_bits_5(buf,bl){var w=bl&7,h=bl>>>3;return (buf[h]|(w<=3?0:buf[h+1]<<8))>>>w&0x1F;}function read_bits_7(buf,bl){var w=bl&7,h=bl>>>3;return (buf[h]|(w<=1?0:buf[h+1]<<8))>>>w&0x7F;}/* works up to n = 3 * 8 + 1 = 25 */function read_bits_n(buf,bl,n){var w=bl&7,h=bl>>>3,f=(1<<n)-1;var v=buf[h]>>>w;if(n<8-w)return v&f;v|=buf[h+1]<<8-w;if(n<16-w)return v&f;v|=buf[h+2]<<16-w;if(n<24-w)return v&f;v|=buf[h+3]<<24-w;return v&f;}/* helpers for unaligned bit writes */function write_bits_3(buf,bl,v){var w=bl&7,h=bl>>>3;if(w<=5)buf[h]|=(v&7)<<w;else {buf[h]|=v<<w&0xFF;buf[h+1]=(v&7)>>8-w;}return bl+3;}function write_bits_1(buf,bl,v){var w=bl&7,h=bl>>>3;v=(v&1)<<w;buf[h]|=v;return bl+1;}function write_bits_8(buf,bl,v){var w=bl&7,h=bl>>>3;v<<=w;buf[h]|=v&0xFF;v>>>=8;buf[h+1]=v;return bl+8;}function write_bits_16(buf,bl,v){var w=bl&7,h=bl>>>3;v<<=w;buf[h]|=v&0xFF;v>>>=8;buf[h+1]=v&0xFF;buf[h+2]=v>>>8;return bl+16;}/* until ArrayBuffer#realloc is a thing, fake a realloc */function realloc(b,sz/*:number*/){var L=b.length,M=2*L>sz?2*L:sz+5,i=0;if(L>=sz)return b;if(has_buf){var o=new_unsafe_buf(M);// $FlowIgnore
	if(b.copy)b.copy(o);else for(;i<b.length;++i)o[i]=b[i];return o;}else if(use_typed_arrays){var a=new Uint8Array(M);if(a.set)a.set(b);else for(;i<L;++i)a[i]=b[i];return a;}b.length=M;return b;}/* zero-filled arrays for older browsers */function zero_fill_array(n){var o=new Array(n);for(var i=0;i<n;++i)o[i]=0;return o;}/* build tree (used for literals and lengths) */function build_tree(clens,cmap,MAX/*:number*/)/*:number*/{var maxlen=1,w=0,i=0,j=0,ccode=0,L=clens.length;var bl_count=use_typed_arrays?new Uint16Array(32):zero_fill_array(32);for(i=0;i<32;++i)bl_count[i]=0;for(i=L;i<MAX;++i)clens[i]=0;L=clens.length;var ctree=use_typed_arrays?new Uint16Array(L):zero_fill_array(L);// []
	/* build code tree */for(i=0;i<L;++i){bl_count[w=clens[i]]++;if(maxlen<w)maxlen=w;ctree[i]=0;}bl_count[0]=0;for(i=1;i<=maxlen;++i)bl_count[i+16]=ccode=ccode+bl_count[i-1]<<1;for(i=0;i<L;++i){ccode=clens[i];if(ccode!=0)ctree[i]=bl_count[ccode+16]++;}/* cmap[maxlen + 4 bits] = (off&15) + (lit<<4) reverse mapping */var cleni=0;for(i=0;i<L;++i){cleni=clens[i];if(cleni!=0){ccode=bit_swap_n(ctree[i],maxlen)>>maxlen-cleni;for(j=(1<<maxlen+4-cleni)-1;j>=0;--j)cmap[ccode|j<<cleni]=cleni&15|i<<4;}}return maxlen;}/* Fixed Huffman */var fix_lmap=use_typed_arrays?new Uint16Array(512):zero_fill_array(512);var fix_dmap=use_typed_arrays?new Uint16Array(32):zero_fill_array(32);if(!use_typed_arrays){for(var i=0;i<512;++i)fix_lmap[i]=0;for(i=0;i<32;++i)fix_dmap[i]=0;}(function(){var dlens/*:Array<number>*/=[];var i=0;for(;i<32;i++)dlens.push(5);build_tree(dlens,fix_dmap,32);var clens/*:Array<number>*/=[];i=0;for(;i<=143;i++)clens.push(8);for(;i<=255;i++)clens.push(9);for(;i<=279;i++)clens.push(7);for(;i<=287;i++)clens.push(8);build_tree(clens,fix_lmap,288);})();var _deflateRaw=/*#__PURE__*/function _deflateRawIIFE(){var DST_LN_RE=use_typed_arrays?new Uint8Array(0x8000):[];var j=0,k=0;for(;j<DST_LN.length-1;++j){for(;k<DST_LN[j+1];++k)DST_LN_RE[k]=j;}for(;k<32768;++k)DST_LN_RE[k]=29;var LEN_LN_RE=use_typed_arrays?new Uint8Array(0x103):[];for(j=0,k=0;j<LEN_LN.length-1;++j){for(;k<LEN_LN[j+1];++k)LEN_LN_RE[k]=j;}function write_stored(data,out){var boff=0;while(boff<data.length){var L=Math.min(0xFFFF,data.length-boff);var h=boff+L==data.length;out.write_shift(1,+h);out.write_shift(2,L);out.write_shift(2,~L&0xFFFF);while(L-->0)out[out.l++]=data[boff++];}return out.l;}/* Fixed Huffman */function write_huff_fixed(data,out){var bl=0;var boff=0;var addrs=use_typed_arrays?new Uint16Array(0x8000):[];while(boff<data.length){var L=/* data.length - boff; */Math.min(0xFFFF,data.length-boff);/* write a stored block for short data */if(L<10){bl=write_bits_3(out,bl,+!!(boff+L==data.length));// jshint ignore:line
	if(bl&7)bl+=8-(bl&7);out.l=bl/8|0;out.write_shift(2,L);out.write_shift(2,~L&0xFFFF);while(L-->0)out[out.l++]=data[boff++];bl=out.l*8;continue;}bl=write_bits_3(out,bl,+!!(boff+L==data.length)+2);// jshint ignore:line
	var hash=0;while(L-->0){var d=data[boff];hash=(hash<<5^d)&0x7FFF;var match=-1,mlen=0;if(match=addrs[hash]){match|=boff&~0x7FFF;if(match>boff)match-=0x8000;if(match<boff)while(data[match+mlen]==data[boff+mlen]&&mlen<250)++mlen;}if(mlen>2){/* Copy Token  */d=LEN_LN_RE[mlen];if(d<=22)bl=write_bits_8(out,bl,bitswap8[d+1]>>1)-1;else {write_bits_8(out,bl,3);bl+=5;write_bits_8(out,bl,bitswap8[d-23]>>5);bl+=3;}var len_eb=d<8?0:d-4>>2;if(len_eb>0){write_bits_16(out,bl,mlen-LEN_LN[d]);bl+=len_eb;}d=DST_LN_RE[boff-match];bl=write_bits_8(out,bl,bitswap8[d]>>3);bl-=3;var dst_eb=d<4?0:d-2>>1;if(dst_eb>0){write_bits_16(out,bl,boff-match-DST_LN[d]);bl+=dst_eb;}for(var q=0;q<mlen;++q){addrs[hash]=boff&0x7FFF;hash=(hash<<5^data[boff])&0x7FFF;++boff;}L-=mlen-1;}else {/* Literal Token */if(d<=143)d=d+48;else bl=write_bits_1(out,bl,1);bl=write_bits_8(out,bl,bitswap8[d]);addrs[hash]=boff&0x7FFF;++boff;}}bl=write_bits_8(out,bl,0)-1;}out.l=(bl+7)/8|0;return out.l;}return function _deflateRaw(data,out){if(data.length<8)return write_stored(data,out);return write_huff_fixed(data,out);};}();function _deflate(data){var buf=new_buf(50+Math.floor(data.length*1.1));var off=_deflateRaw(data,buf);return buf.slice(0,off);}/* modified inflate function also moves original read head */var dyn_lmap=use_typed_arrays?new Uint16Array(32768):zero_fill_array(32768);var dyn_dmap=use_typed_arrays?new Uint16Array(32768):zero_fill_array(32768);var dyn_cmap=use_typed_arrays?new Uint16Array(128):zero_fill_array(128);var dyn_len_1=1,dyn_len_2=1;/* 5.5.3 Expanding Huffman Codes */function dyn(data,boff/*:number*/){/* nomenclature from RFC1951 refers to bit values; these are offset by the implicit constant */var _HLIT=read_bits_5(data,boff)+257;boff+=5;var _HDIST=read_bits_5(data,boff)+1;boff+=5;var _HCLEN=read_bits_4(data,boff)+4;boff+=4;var w=0;/* grab and store code lengths */var clens=use_typed_arrays?new Uint8Array(19):zero_fill_array(19);var ctree=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var maxlen=1;var bl_count=use_typed_arrays?new Uint8Array(8):zero_fill_array(8);var next_code=use_typed_arrays?new Uint8Array(8):zero_fill_array(8);var L=clens.length;/* 19 */for(var i=0;i<_HCLEN;++i){clens[CLEN_ORDER[i]]=w=read_bits_3(data,boff);if(maxlen<w)maxlen=w;bl_count[w]++;boff+=3;}/* build code tree */var ccode=0;bl_count[0]=0;for(i=1;i<=maxlen;++i)next_code[i]=ccode=ccode+bl_count[i-1]<<1;for(i=0;i<L;++i)if((ccode=clens[i])!=0)ctree[i]=next_code[ccode]++;/* cmap[7 bits from stream] = (off&7) + (lit<<3) */var cleni=0;for(i=0;i<L;++i){cleni=clens[i];if(cleni!=0){ccode=bitswap8[ctree[i]]>>8-cleni;for(var j=(1<<7-cleni)-1;j>=0;--j)dyn_cmap[ccode|j<<cleni]=cleni&7|i<<3;}}/* read literal and dist codes at once */var hcodes/*:Array<number>*/=[];maxlen=1;for(;hcodes.length<_HLIT+_HDIST;){ccode=dyn_cmap[read_bits_7(data,boff)];boff+=ccode&7;switch(ccode>>>=3){case 16:w=3+read_bits_2(data,boff);boff+=2;ccode=hcodes[hcodes.length-1];while(w-->0)hcodes.push(ccode);break;case 17:w=3+read_bits_3(data,boff);boff+=3;while(w-->0)hcodes.push(0);break;case 18:w=11+read_bits_7(data,boff);boff+=7;while(w-->0)hcodes.push(0);break;default:hcodes.push(ccode);if(maxlen<ccode)maxlen=ccode;break;}}/* build literal / length trees */var h1=hcodes.slice(0,_HLIT),h2=hcodes.slice(_HLIT);for(i=_HLIT;i<286;++i)h1[i]=0;for(i=_HDIST;i<30;++i)h2[i]=0;dyn_len_1=build_tree(h1,dyn_lmap,286);dyn_len_2=build_tree(h2,dyn_dmap,30);return boff;}/* return [ data, bytesRead ] */function inflate(data,usz/*:number*/){/* shortcircuit for empty buffer [0x03, 0x00] */if(data[0]==3&&!(data[1]&0x3)){return [new_raw_buf(usz),2];}/* bit offset */var boff=0;/* header includes final bit and type bits */var header=0;var outbuf=new_unsafe_buf(usz?usz:1<<18);var woff=0;var OL=outbuf.length>>>0;var max_len_1=0,max_len_2=0;while((header&1)==0){header=read_bits_3(data,boff);boff+=3;if(header>>>1==0){/* Stored block */if(boff&7)boff+=8-(boff&7);/* 2 bytes sz, 2 bytes bit inverse */var sz=data[boff>>>3]|data[(boff>>>3)+1]<<8;boff+=32;/* push sz bytes */if(sz>0){if(!usz&&OL<woff+sz){outbuf=realloc(outbuf,woff+sz);OL=outbuf.length;}while(sz-->0){outbuf[woff++]=data[boff>>>3];boff+=8;}}continue;}else if(header>>1==1){/* Fixed Huffman */max_len_1=9;max_len_2=5;}else {/* Dynamic Huffman */boff=dyn(data,boff);max_len_1=dyn_len_1;max_len_2=dyn_len_2;}for(;;){// while(true) is apparently out of vogue in modern JS circles
	if(!usz&&OL<woff+32767){outbuf=realloc(outbuf,woff+32767);OL=outbuf.length;}/* ingest code and move read head */var bits=read_bits_n(data,boff,max_len_1);var code=header>>>1==1?fix_lmap[bits]:dyn_lmap[bits];boff+=code&15;code>>>=4;/* 0-255 are literals, 256 is end of block token, 257+ are copy tokens */if((code>>>8&0xFF)===0)outbuf[woff++]=code;else if(code==256)break;else {code-=257;var len_eb=code<8?0:code-4>>2;if(len_eb>5)len_eb=0;var tgt=woff+LEN_LN[code];/* length extra bits */if(len_eb>0){tgt+=read_bits_n(data,boff,len_eb);boff+=len_eb;}/* dist code */bits=read_bits_n(data,boff,max_len_2);code=header>>>1==1?fix_dmap[bits]:dyn_dmap[bits];boff+=code&15;code>>>=4;var dst_eb=code<4?0:code-2>>1;var dst=DST_LN[code];/* dist extra bits */if(dst_eb>0){dst+=read_bits_n(data,boff,dst_eb);boff+=dst_eb;}/* in the common case, manual byte copy is faster than TA set / Buffer copy */if(!usz&&OL<tgt){outbuf=realloc(outbuf,tgt+100);OL=outbuf.length;}while(woff<tgt){outbuf[woff]=outbuf[woff-dst];++woff;}}}}if(usz)return [outbuf,boff+7>>>3];return [outbuf.slice(0,woff),boff+7>>>3];}function _inflate(payload,usz){var data=payload.slice(payload.l||0);var out=inflate(data,usz);payload.l+=out[1];return out[0];}function warn_or_throw(wrn,msg){if(wrn){if(typeof console!=='undefined')console.error(msg);}else throw new Error(msg);}function parse_zip(file/*:RawBytes*/,options/*:CFBReadOpts*/)/*:CFBContainer*/{var blob/*:CFBlob*/=/*::(*/file/*:: :any)*/;prep_blob(blob,0);var FileIndex/*:CFBFileIndex*/=[],FullPaths/*:Array<string>*/=[];var o={FileIndex:FileIndex,FullPaths:FullPaths};init_cfb(o,{root:options.root});/* find end of central directory, start just after signature */var i=blob.length-4;while((blob[i]!=0x50||blob[i+1]!=0x4b||blob[i+2]!=0x05||blob[i+3]!=0x06)&&i>=0)--i;blob.l=i+4;/* parse end of central directory */blob.l+=4;var fcnt=blob.read_shift(2);blob.l+=6;var start_cd=blob.read_shift(4);/* parse central directory */blob.l=start_cd;for(i=0;i<fcnt;++i){/* trust local file header instead of CD entry */blob.l+=20;var csz=blob.read_shift(4);var usz=blob.read_shift(4);var namelen=blob.read_shift(2);var efsz=blob.read_shift(2);var fcsz=blob.read_shift(2);blob.l+=8;var offset=blob.read_shift(4);var EF=parse_extra_field(/*::(*/blob.slice(blob.l+namelen,blob.l+namelen+efsz)/*:: :any)*/);blob.l+=namelen+efsz+fcsz;var L=blob.l;blob.l=offset+4;parse_local_file(blob,csz,usz,o,EF);blob.l=L;}return o;}/* head starts just after local file header signature */function parse_local_file(blob/*:CFBlob*/,csz/*:number*/,usz/*:number*/,o/*:CFBContainer*/,EF){/* [local file header] */blob.l+=2;var flags=blob.read_shift(2);var meth=blob.read_shift(2);var date=parse_dos_date(blob);if(flags&0x2041)throw new Error("Unsupported ZIP encryption");var crc32=blob.read_shift(4);var _csz=blob.read_shift(4);var _usz=blob.read_shift(4);var namelen=blob.read_shift(2);var efsz=blob.read_shift(2);// TODO: flags & (1<<11) // UTF8
	var name="";for(var i=0;i<namelen;++i)name+=String.fromCharCode(blob[blob.l++]);if(efsz){var ef=parse_extra_field(/*::(*/blob.slice(blob.l,blob.l+efsz)/*:: :any)*/);if((ef[0x5455]||{}).mt)date=ef[0x5455].mt;if(((EF||{})[0x5455]||{}).mt)date=EF[0x5455].mt;}blob.l+=efsz;/* [encryption header] */ /* [file data] */var data=blob.slice(blob.l,blob.l+_csz);switch(meth){case 8:data=_inflateRawSync(blob,_usz);break;case 0:break;// TODO: scan for magic number
	default:throw new Error("Unsupported ZIP Compression method "+meth);}/* [data descriptor] */var wrn=false;if(flags&8){crc32=blob.read_shift(4);if(crc32==0x08074b50){crc32=blob.read_shift(4);wrn=true;}_csz=blob.read_shift(4);_usz=blob.read_shift(4);}if(_csz!=csz)warn_or_throw(wrn,"Bad compressed size: "+csz+" != "+_csz);if(_usz!=usz)warn_or_throw(wrn,"Bad uncompressed size: "+usz+" != "+_usz);//var _crc32 = CRC32.buf(data, 0);
	//if((crc32>>0) != (_crc32>>0)) warn_or_throw(wrn, "Bad CRC32 checksum: " + crc32 + " != " + _crc32);
	cfb_add(o,name,data,{unsafe:true,mt:date});}function write_zip(cfb/*:CFBContainer*/,options/*:CFBWriteOpts*/)/*:RawBytes*/{var _opts=options||{};var out=[],cdirs=[];var o/*:CFBlob*/=new_buf(1);var method=_opts.compression?8:0,flags=0;var i=0,j=0;var start_cd=0,fcnt=0;var root=cfb.FullPaths[0],fp=root,fi=cfb.FileIndex[0];var crcs=[];var sz_cd=0;for(i=1;i<cfb.FullPaths.length;++i){fp=cfb.FullPaths[i].slice(root.length);fi=cfb.FileIndex[i];if(!fi.size||!fi.content||fp=="\u0001Sh33tJ5")continue;var start=start_cd;/* TODO: CP437 filename */var namebuf=new_buf(fp.length);for(j=0;j<fp.length;++j)namebuf.write_shift(1,fp.charCodeAt(j)&0x7F);namebuf=namebuf.slice(0,namebuf.l);crcs[fcnt]=CRC32.buf(/*::((*/fi.content/*::||[]):any)*/,0);var outbuf=fi.content/*::||[]*/;if(method==8)outbuf=_deflateRawSync(outbuf);/* local file header */o=new_buf(30);o.write_shift(4,0x04034b50);o.write_shift(2,20);o.write_shift(2,flags);o.write_shift(2,method);/* TODO: last mod file time/date */if(fi.mt)write_dos_date(o,fi.mt);else o.write_shift(4,0);o.write_shift(-4,crcs[fcnt]);o.write_shift(4,outbuf.length);o.write_shift(4,/*::(*/fi.content/*::||[])*/.length);o.write_shift(2,namebuf.length);o.write_shift(2,0);start_cd+=o.length;out.push(o);start_cd+=namebuf.length;out.push(namebuf);/* TODO: extra fields? */ /* TODO: encryption header ? */start_cd+=outbuf.length;out.push(outbuf);/* central directory */o=new_buf(46);o.write_shift(4,0x02014b50);o.write_shift(2,0);o.write_shift(2,20);o.write_shift(2,flags);o.write_shift(2,method);o.write_shift(4,0);/* TODO: last mod file time/date */o.write_shift(-4,crcs[fcnt]);o.write_shift(4,outbuf.length);o.write_shift(4,/*::(*/fi.content/*::||[])*/.length);o.write_shift(2,namebuf.length);o.write_shift(2,0);o.write_shift(2,0);o.write_shift(2,0);o.write_shift(2,0);o.write_shift(4,0);o.write_shift(4,start);sz_cd+=o.l;cdirs.push(o);sz_cd+=namebuf.length;cdirs.push(namebuf);++fcnt;}/* end of central directory */o=new_buf(22);o.write_shift(4,0x06054b50);o.write_shift(2,0);o.write_shift(2,0);o.write_shift(2,fcnt);o.write_shift(2,fcnt);o.write_shift(4,sz_cd);o.write_shift(4,start_cd);o.write_shift(2,0);return bconcat([bconcat(out/*:any*/),bconcat(cdirs),o]/*:any*/);}var ContentTypeMap={"htm":"text/html","xml":"text/xml","gif":"image/gif","jpg":"image/jpeg","png":"image/png","mso":"application/x-mso","thmx":"application/vnd.ms-officetheme","sh33tj5":"application/octet-stream"}/*:any*/;function get_content_type(fi/*:CFBEntry*/,fp/*:string*/)/*:string*/{if(fi.ctype)return fi.ctype;var ext=fi.name||"",m=ext.match(/\.([^\.]+)$/);if(m&&ContentTypeMap[m[1]])return ContentTypeMap[m[1]];if(fp){m=(ext=fp).match(/[\.\\]([^\.\\])+$/);if(m&&ContentTypeMap[m[1]])return ContentTypeMap[m[1]];}return "application/octet-stream";}/* 76 character chunks TODO: intertwine encoding */function write_base64_76(bstr/*:string*/)/*:string*/{var data=Base64_encode(bstr);var o=[];for(var i=0;i<data.length;i+=76)o.push(data.slice(i,i+76));return o.join("\r\n")+"\r\n";}/*
	Rules for QP:
		- escape =## applies for all non-display characters and literal "="
		- space or tab at end of line must be encoded
		- \r\n newlines can be preserved, but bare \r and \n must be escaped
		- lines must not exceed 76 characters, use soft breaks =\r\n

	TODO: Some files from word appear to write line extensions with bare equals:

	```
	<table class=3DMsoTableGrid border=3D1 cellspacing=3D0 cellpadding=3D0 width=
	="70%"
	```
	*/function write_quoted_printable(text/*:string*/)/*:string*/{var encoded=text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(c){var w=c.charCodeAt(0).toString(16).toUpperCase();return "="+(w.length==1?"0"+w:w);});encoded=encoded.replace(/ $/mg,"=20").replace(/\t$/mg,"=09");if(encoded.charAt(0)=="\n")encoded="=0D"+encoded.slice(1);encoded=encoded.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,"\n=0A").replace(/([^\r\n])\n/mg,"$1=0A");var o/*:Array<string>*/=[],split=encoded.split("\r\n");for(var si=0;si<split.length;++si){var str=split[si];if(str.length==0){o.push("");continue;}for(var i=0;i<str.length;){var end=76;var tmp=str.slice(i,i+end);if(tmp.charAt(end-1)=="=")end--;else if(tmp.charAt(end-2)=="=")end-=2;else if(tmp.charAt(end-3)=="=")end-=3;tmp=str.slice(i,i+end);i+=end;if(i<str.length)tmp+="=";o.push(tmp);}}return o.join("\r\n");}function parse_quoted_printable(data/*:Array<string>*/)/*:RawBytes*/{var o=[];/* unify long lines */for(var di=0;di<data.length;++di){var line=data[di];while(di<=data.length&&line.charAt(line.length-1)=="=")line=line.slice(0,line.length-1)+data[++di];o.push(line);}/* decode */for(var oi=0;oi<o.length;++oi)o[oi]=o[oi].replace(/[=][0-9A-Fa-f]{2}/g,function($$){return String.fromCharCode(parseInt($$.slice(1),16));});return s2a(o.join("\r\n"));}function parse_mime(cfb/*:CFBContainer*/,data/*:Array<string>*/,root/*:string*/)/*:void*/{var fname="",cte="",ctype="",fdata;var di=0;for(;di<10;++di){var line=data[di];if(!line||line.match(/^\s*$/))break;var m=line.match(/^(.*?):\s*([^\s].*)$/);if(m)switch(m[1].toLowerCase()){case"content-location":fname=m[2].trim();break;case"content-type":ctype=m[2].trim();break;case"content-transfer-encoding":cte=m[2].trim();break;}}++di;switch(cte.toLowerCase()){case'base64':fdata=s2a(Base64_decode(data.slice(di).join("")));break;case'quoted-printable':fdata=parse_quoted_printable(data.slice(di));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+cte);}var file=cfb_add(cfb,fname.slice(root.length),fdata,{unsafe:true});if(ctype)file.ctype=ctype;}function parse_mad(file/*:RawBytes*/,options/*:CFBReadOpts*/)/*:CFBContainer*/{if(a2s(file.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var root=options&&options.root||"";// $FlowIgnore
	var data=(has_buf&&Buffer.isBuffer(file)?file.toString("binary"):a2s(file)).split("\r\n");var di=0,row="";/* if root is not specified, scan for the common prefix */for(di=0;di<data.length;++di){row=data[di];if(!/^Content-Location:/i.test(row))continue;row=row.slice(row.indexOf("file"));if(!root)root=row.slice(0,row.lastIndexOf("/")+1);if(row.slice(0,root.length)==root)continue;while(root.length>0){root=root.slice(0,root.length-1);root=root.slice(0,root.lastIndexOf("/")+1);if(row.slice(0,root.length)==root)break;}}var mboundary=(data[1]||"").match(/boundary="(.*?)"/);if(!mboundary)throw new Error("MAD cannot find boundary");var boundary="--"+(mboundary[1]||"");var FileIndex/*:CFBFileIndex*/=[],FullPaths/*:Array<string>*/=[];var o={FileIndex:FileIndex,FullPaths:FullPaths};init_cfb(o);var start_di,fcnt=0;for(di=0;di<data.length;++di){var line=data[di];if(line!==boundary&&line!==boundary+"--")continue;if(fcnt++)parse_mime(o,data.slice(start_di,di),root);start_di=di;}return o;}function write_mad(cfb/*:CFBContainer*/,options/*:CFBWriteOpts*/)/*:string*/{var opts=options||{};var boundary=opts.boundary||"SheetJS";boundary='------='+boundary;var out=['MIME-Version: 1.0','Content-Type: multipart/related; boundary="'+boundary.slice(2)+'"','','',''];var root=cfb.FullPaths[0],fp=root,fi=cfb.FileIndex[0];for(var i=1;i<cfb.FullPaths.length;++i){fp=cfb.FullPaths[i].slice(root.length);fi=cfb.FileIndex[i];if(!fi.size||!fi.content||fp=="\u0001Sh33tJ5")continue;/* Normalize filename */fp=fp.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(c){return "_x"+c.charCodeAt(0).toString(16)+"_";}).replace(/[\u0080-\uFFFF]/g,function(u){return "_u"+u.charCodeAt(0).toString(16)+"_";});/* Extract content as binary string */var ca=fi.content;// $FlowIgnore
	var cstr=has_buf&&Buffer.isBuffer(ca)?ca.toString("binary"):a2s(ca);/* 4/5 of first 1024 chars ascii -> quoted printable, else base64 */var dispcnt=0,L=Math.min(1024,cstr.length),cc=0;for(var csl=0;csl<=L;++csl)if((cc=cstr.charCodeAt(csl))>=0x20&&cc<0x80)++dispcnt;var qp=dispcnt>=L*4/5;out.push(boundary);out.push('Content-Location: '+(opts.root||'file:///C:/SheetJS/')+fp);out.push('Content-Transfer-Encoding: '+(qp?'quoted-printable':'base64'));out.push('Content-Type: '+get_content_type(fi,fp));out.push('');out.push(qp?write_quoted_printable(cstr):write_base64_76(cstr));}out.push(boundary+'--\r\n');return out.join("\r\n");}function cfb_new(opts/*:?any*/)/*:CFBContainer*/{var o/*:CFBContainer*/={}/*:any*/;init_cfb(o,opts);return o;}function cfb_add(cfb/*:CFBContainer*/,name/*:string*/,content/*:?RawBytes*/,opts/*:?any*/)/*:CFBEntry*/{var unsafe=opts&&opts.unsafe;if(!unsafe)init_cfb(cfb);var file=!unsafe&&CFB.find(cfb,name);if(!file){var fpath/*:string*/=cfb.FullPaths[0];if(name.slice(0,fpath.length)==fpath)fpath=name;else {if(fpath.slice(-1)!="/")fpath+="/";fpath=(fpath+name).replace("//","/");}file={name:filename(name),type:2}/*:any*/;cfb.FileIndex.push(file);cfb.FullPaths.push(fpath);if(!unsafe)CFB.utils.cfb_gc(cfb);}/*:: if(!file) throw new Error("unreachable"); */file.content=content/*:any*/;file.size=content?content.length:0;if(opts){if(opts.CLSID)file.clsid=opts.CLSID;if(opts.mt)file.mt=opts.mt;if(opts.ct)file.ct=opts.ct;}return file;}function cfb_del(cfb/*:CFBContainer*/,name/*:string*/)/*:boolean*/{init_cfb(cfb);var file=CFB.find(cfb,name);if(file)for(var j=0;j<cfb.FileIndex.length;++j)if(cfb.FileIndex[j]==file){cfb.FileIndex.splice(j,1);cfb.FullPaths.splice(j,1);return true;}return false;}function cfb_mov(cfb/*:CFBContainer*/,old_name/*:string*/,new_name/*:string*/)/*:boolean*/{init_cfb(cfb);var file=CFB.find(cfb,old_name);if(file)for(var j=0;j<cfb.FileIndex.length;++j)if(cfb.FileIndex[j]==file){cfb.FileIndex[j].name=filename(new_name);cfb.FullPaths[j]=new_name;return true;}return false;}function cfb_gc(cfb/*:CFBContainer*/)/*:void*/{rebuild_cfb(cfb,true);}exports.find=find;exports.read=read;exports.parse=parse;exports.write=write;exports.writeFile=write_file;exports.utils={cfb_new:cfb_new,cfb_add:cfb_add,cfb_del:cfb_del,cfb_mov:cfb_mov,cfb_gc:cfb_gc,ReadShift:ReadShift,CheckField:CheckField,prep_blob:prep_blob,bconcat:bconcat,use_zlib:use_zlib,_deflateRaw:_deflate,_inflateRaw:_inflate,consts:consts};return exports;}();/* read binary data from file */function read_binary(path/*:string*/){if(typeof Deno!=='undefined')return Deno.readFileSync(path);// $FlowIgnore
	if(typeof $!=='undefined'&&typeof File!=='undefined'&&typeof Folder!=='undefined')try{// extendscript
	// $FlowIgnore
	var infile=File(path);infile.open("r");infile.encoding="binary";var data=infile.read();infile.close();return data;}catch(e){if(!e.message||!e.message.match(/onstruct/))throw e;}throw new Error("Cannot access file "+path);}function keys(o/*:any*/)/*:Array<any>*/{var ks=Object.keys(o),o2=[];for(var i=0;i<ks.length;++i)if(Object.prototype.hasOwnProperty.call(o,ks[i]))o2.push(ks[i]);return o2;}function evert(obj/*:any*/)/*:EvertType*/{var o=[]/*:any*/,K=keys(obj);for(var i=0;i!==K.length;++i)o[obj[K[i]]]=K[i];return o;}var basedate=/*#__PURE__*/new Date(1899,11,30,0,0,0);// 2209161600000
	function datenum(v/*:Date*/,date1904/*:?boolean*/)/*:number*/{var epoch=/*#__PURE__*/v.getTime();if(date1904)epoch-=1462*24*60*60*1000;var dnthresh=/*#__PURE__*/basedate.getTime()+(/*#__PURE__*/v.getTimezoneOffset()-/*#__PURE__*/basedate.getTimezoneOffset())*60000;return (epoch-dnthresh)/(24*60*60*1000);}var refdate=/*#__PURE__*/new Date();var dnthresh=/*#__PURE__*/basedate.getTime()+(/*#__PURE__*/refdate.getTimezoneOffset()-/*#__PURE__*/basedate.getTimezoneOffset())*60000;var refoffset=/*#__PURE__*/refdate.getTimezoneOffset();function numdate(v/*:number*/)/*:Date*/{var out=new Date();out.setTime(v*24*60*60*1000+dnthresh);if(out.getTimezoneOffset()!==refoffset){out.setTime(out.getTime()+(out.getTimezoneOffset()-refoffset)*60000);}return out;}/* ISO 8601 Duration */function parse_isodur(s){var sec=0,mt=0,time=false;var m=s.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!m)throw new Error("|"+s+"| is not an ISO8601 Duration");for(var i=1;i!=m.length;++i){if(!m[i])continue;mt=1;if(i>3)time=true;switch(m[i].slice(m[i].length-1)){case'Y':throw new Error("Unsupported ISO Duration Field: "+m[i].slice(m[i].length-1));case'D':mt*=24;/* falls through */case'H':mt*=60;/* falls through */case'M':if(!time)throw new Error("Unsupported ISO Duration Field: M");else mt*=60;}sec+=mt*parseInt(m[i],10);}return sec;}var good_pd_date_1=/*#__PURE__*/new Date('2017-02-19T19:06:09.000Z');var good_pd_date=/*#__PURE__*/isNaN(/*#__PURE__*/good_pd_date_1.getFullYear())?/*#__PURE__*/new Date('2/19/17'):good_pd_date_1;var good_pd=/*#__PURE__*/good_pd_date.getFullYear()==2017;/* parses a date as a local date */function parseDate(str/*:string|Date*/,fixdate/*:?number*/)/*:Date*/{var d=new Date(str);if(good_pd){/*:: if(fixdate == null) fixdate = 0; */if(fixdate>0)d.setTime(d.getTime()+d.getTimezoneOffset()*60*1000);else if(fixdate<0)d.setTime(d.getTime()-d.getTimezoneOffset()*60*1000);return d;}if(str instanceof Date)return str;if(good_pd_date.getFullYear()==1917&&!isNaN(d.getFullYear())){var s=d.getFullYear();if(str.indexOf(""+s)>-1)return d;d.setFullYear(d.getFullYear()+100);return d;}var n=str.match(/\d+/g)||["2017","2","19","0","0","0"];var out=new Date(+n[0],+n[1]-1,+n[2],+n[3]||0,+n[4]||0,+n[5]||0);if(str.indexOf("Z")>-1)out=new Date(out.getTime()-out.getTimezoneOffset()*60*1000);return out;}function cc2str(arr/*:Array<number>*/,debomit)/*:string*/{if(has_buf&&Buffer.isBuffer(arr)){if(debomit){if(arr[0]==0xFF&&arr[1]==0xFE)return utf8write(arr.slice(2).toString("utf16le"));if(arr[1]==0xFE&&arr[2]==0xFF)return utf8write(utf16beread(arr.slice(2).toString("binary")));}return arr.toString("binary");}if(typeof TextDecoder!=="undefined")try{if(debomit){if(arr[0]==0xFF&&arr[1]==0xFE)return utf8write(new TextDecoder("utf-16le").decode(arr.slice(2)));if(arr[0]==0xFE&&arr[1]==0xFF)return utf8write(new TextDecoder("utf-16be").decode(arr.slice(2)));}var rev={"\u20ac":"\x80","\u201a":"\x82","\u0192":"\x83","\u201e":"\x84","\u2026":"\x85","\u2020":"\x86","\u2021":"\x87","\u02c6":"\x88","\u2030":"\x89","\u0160":"\x8a","\u2039":"\x8b","\u0152":"\x8c","\u017d":"\x8e","\u2018":"\x91","\u2019":"\x92","\u201c":"\x93","\u201d":"\x94","\u2022":"\x95","\u2013":"\x96","\u2014":"\x97","\u02dc":"\x98","\u2122":"\x99","\u0161":"\x9a","\u203a":"\x9b","\u0153":"\x9c","\u017e":"\x9e","\u0178":"\x9f"};if(Array.isArray(arr))arr=new Uint8Array(arr);return new TextDecoder("latin1").decode(arr).replace(/[???????????????????????????????????????????????????????????????????????]/g,function(c){return rev[c]||c;});}catch(e){}var o=[];for(var i=0;i!=arr.length;++i)o.push(String.fromCharCode(arr[i]));return o.join("");}function dup(o/*:any*/)/*:any*/{if(typeof JSON!='undefined'&&!Array.isArray(o))return JSON.parse(JSON.stringify(o));if(typeof o!='object'||o==null)return o;if(o instanceof Date)return new Date(o.getTime());var out={};for(var k in o)if(Object.prototype.hasOwnProperty.call(o,k))out[k]=dup(o[k]);return out;}function fill(c/*:string*/,l/*:number*/)/*:string*/{var o="";while(o.length<l)o+=c;return o;}/* TODO: stress test */function fuzzynum(s/*:string*/)/*:number*/{var v/*:number*/=Number(s);if(!isNaN(v))return isFinite(v)?v:NaN;if(!/\d/.test(s))return v;var wt=1;var ss=s.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){wt*=100;return "";});if(!isNaN(v=Number(ss)))return v/wt;ss=ss.replace(/[(](.*)[)]/,function($$,$1){wt=-wt;return $1;});if(!isNaN(v=Number(ss)))return v/wt;return v;}var lower_months=['january','february','march','april','may','june','july','august','september','october','november','december'];function fuzzydate(s/*:string*/)/*:Date*/{var o=new Date(s),n=new Date(NaN);var y=o.getYear(),m=o.getMonth(),d=o.getDate();if(isNaN(d))return n;var lower=s.toLowerCase();if(lower.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){lower=lower.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,"");if(lower.length>3&&lower_months.indexOf(lower)==-1)return n;}else if(lower.match(/[a-z]/))return n;if(y<0||y>8099)return n;if((m>0||d>1)&&y!=101)return o;if(s.match(/[^-0-9:,\/\\]/))return n;return o;}var split_regex=/*#__PURE__*/function(){var safe_split_regex="abacaba".split(/(:?b)/i).length==5;return function split_regex(str/*:string*/,re,def/*:string*/)/*:Array<string>*/{if(safe_split_regex||typeof re=="string")return str.split(re);var p=str.split(re),o=[p[0]];for(var i=1;i<p.length;++i){o.push(def);o.push(p[i]);}return o;};}();function getdatastr(data)/*:?string*/{if(!data)return null;if(data.content&&data.type)return cc2str(data.content,true);if(data.data)return debom(data.data);if(data.asNodeBuffer&&has_buf)return debom(data.asNodeBuffer().toString('binary'));if(data.asBinary)return debom(data.asBinary());if(data._data&&data._data.getContent)return debom(cc2str(Array.prototype.slice.call(data._data.getContent(),0)));return null;}function getdatabin(data){if(!data)return null;if(data.data)return char_codes(data.data);if(data.asNodeBuffer&&has_buf)return data.asNodeBuffer();if(data._data&&data._data.getContent){var o=data._data.getContent();if(typeof o=="string")return char_codes(o);return Array.prototype.slice.call(o);}if(data.content&&data.type)return data.content;return null;}function getdata(data){return data&&data.name.slice(-4)===".bin"?getdatabin(data):getdatastr(data);}/* Part 2 Section 10.1.2 "Mapping Content Types" Names are case-insensitive */ /* OASIS does not comment on filename case sensitivity */function safegetzipfile(zip,file/*:string*/){var k=zip.FullPaths||keys(zip.files);var f=file.toLowerCase().replace(/[\/]/g,'\\'),g=f.replace(/\\/g,'\/');for(var i=0;i<k.length;++i){var n=k[i].replace(/^Root Entry[\/]/,"").toLowerCase();if(f==n||g==n)return zip.files?zip.files[k[i]]:zip.FileIndex[i];}return null;}function getzipfile(zip,file/*:string*/){var o=safegetzipfile(zip,file);if(o==null)throw new Error("Cannot find file "+file+" in zip");return o;}function getzipdata(zip,file/*:string*/,safe/*:?boolean*/)/*:any*/{if(!safe)return getdata(getzipfile(zip,file));if(!file)return null;try{return getzipdata(zip,file);}catch(e){return null;}}function getzipstr(zip,file/*:string*/,safe/*:?boolean*/)/*:?string*/{if(!safe)return getdatastr(getzipfile(zip,file));if(!file)return null;try{return getzipstr(zip,file);}catch(e){return null;}}function getzipbin(zip,file/*:string*/,safe/*:?boolean*/)/*:any*/{if(!safe)return getdatabin(getzipfile(zip,file));if(!file)return null;try{return getzipbin(zip,file);}catch(e){return null;}}function zipentries(zip){var k=zip.FullPaths||keys(zip.files),o=[];for(var i=0;i<k.length;++i)if(k[i].slice(-1)!='/')o.push(k[i].replace(/^Root Entry[\/]/,""));return o.sort();}function zip_add_file(zip,path,content){if(zip.FullPaths){if(typeof content=="string"){var res;if(has_buf)res=Buffer_from(content);/* TODO: investigate performance in Edge 13 */ //else if(typeof TextEncoder !== "undefined") res = new TextEncoder().encode(content);
	else res=utf8decode(content);return CFB.utils.cfb_add(zip,path,res);}CFB.utils.cfb_add(zip,path,content);}else zip.file(path,content);}function zip_read(d,o){switch(o.type){case"base64":return CFB.read(d,{type:"base64"});case"binary":return CFB.read(d,{type:"binary"});case"buffer":case"array":return CFB.read(d,{type:"buffer"});}throw new Error("Unrecognized type "+o.type);}function resolve_path(path/*:string*/,base/*:string*/)/*:string*/{if(path.charAt(0)=="/")return path.slice(1);var result=base.split('/');if(base.slice(-1)!="/")result.pop();// folder path
	var target=path.split('/');while(target.length!==0){var step=target.shift();if(step==='..')result.pop();else if(step!=='.')result.push(step);}return result.join('/');}var XML_HEADER='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';var attregexg=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;var tagregex1=/<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg,tagregex2=/<[^>]*>/g;var tagregex=/*#__PURE__*/XML_HEADER.match(tagregex1)?tagregex1:tagregex2;var nsregex=/<\w*:/,nsregex2=/<(\/?)\w+:/;function parsexmltag(tag/*:string*/,skip_root/*:?boolean*/,skip_LC/*:?boolean*/)/*:any*/{var z={}/*:any*/;var eq=0,c=0;for(;eq!==tag.length;++eq)if((c=tag.charCodeAt(eq))===32||c===10||c===13)break;if(!skip_root)z[0]=tag.slice(0,eq);if(eq===tag.length)return z;var m=tag.match(attregexg),j=0,v="",i=0,q="",cc="",quot=1;if(m)for(i=0;i!=m.length;++i){cc=m[i];for(c=0;c!=cc.length;++c)if(cc.charCodeAt(c)===61)break;q=cc.slice(0,c).trim();while(cc.charCodeAt(c+1)==32)++c;quot=(eq=cc.charCodeAt(c+1))==34||eq==39?1:0;v=cc.slice(c+1+quot,cc.length-quot);for(j=0;j!=q.length;++j)if(q.charCodeAt(j)===58)break;if(j===q.length){if(q.indexOf("_")>0)q=q.slice(0,q.indexOf("_"));// from ods
	z[q]=v;if(!skip_LC)z[q.toLowerCase()]=v;}else {var k=(j===5&&q.slice(0,5)==="xmlns"?"xmlns":"")+q.slice(j+1);if(z[k]&&q.slice(j-3,j)=="ext")continue;// from ods
	z[k]=v;if(!skip_LC)z[k.toLowerCase()]=v;}}return z;}function strip_ns(x/*:string*/)/*:string*/{return x.replace(nsregex2,"<$1");}var encodings={'&quot;':'"','&apos;':"'",'&gt;':'>','&lt;':'<','&amp;':'&'};var rencoding=/*#__PURE__*/evert(encodings);//var rencstr = "&<>'\"".split("");
	// TODO: CP remap (need to read file version to determine OS)
	var unescapexml/*:StringConv*/=/*#__PURE__*/function(){/* 22.4.2.4 bstr (Basic String) */var encregex=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig,coderegex=/_x([\da-fA-F]{4})_/ig;return function unescapexml(text/*:string*/)/*:string*/{var s=text+'',i=s.indexOf("<![CDATA[");if(i==-1)return s.replace(encregex,function($$,$1){return encodings[$$]||String.fromCharCode(parseInt($1,$$.indexOf("x")>-1?16:10))||$$;}).replace(coderegex,function(m,c){return String.fromCharCode(parseInt(c,16));});var j=s.indexOf("]]>");return unescapexml(s.slice(0,i))+s.slice(i+9,j)+unescapexml(s.slice(j+3));};}();var decregex=/[&<>'"]/g;var htmlcharegex=/[\u0000-\u001f]/g;function escapehtml(text/*:string*/)/*:string*/{var s=text+'';return s.replace(decregex,function(y){return rencoding[y];}).replace(/\n/g,"<br/>").replace(htmlcharegex,function(s){return "&#x"+("000"+s.charCodeAt(0).toString(16)).slice(-4)+";";});}/* TODO: handle codepages */var xlml_fixstr/*:StringConv*/=/*#__PURE__*/function(){var entregex=/&#(\d+);/g;function entrepl($$/*:string*/,$1/*:string*/)/*:string*/{return String.fromCharCode(parseInt($1,10));}return function xlml_fixstr(str/*:string*/)/*:string*/{return str.replace(entregex,entrepl);};}();function parsexmlbool(value/*:any*/)/*:boolean*/{switch(value){case 1:case true:case'1':case'true':case'TRUE':return true;/* case '0': case 'false': case 'FALSE':*/default:return false;}}function utf8reada(orig/*:string*/)/*:string*/{var out="",i=0,c=0,d=0,e=0,f=0,w=0;while(i<orig.length){c=orig.charCodeAt(i++);if(c<128){out+=String.fromCharCode(c);continue;}d=orig.charCodeAt(i++);if(c>191&&c<224){f=(c&31)<<6;f|=d&63;out+=String.fromCharCode(f);continue;}e=orig.charCodeAt(i++);if(c<240){out+=String.fromCharCode((c&15)<<12|(d&63)<<6|e&63);continue;}f=orig.charCodeAt(i++);w=((c&7)<<18|(d&63)<<12|(e&63)<<6|f&63)-65536;out+=String.fromCharCode(0xD800+(w>>>10&1023));out+=String.fromCharCode(0xDC00+(w&1023));}return out;}function utf8readb(data){var out=new_raw_buf(2*data.length),w,i,j=1,k=0,ww=0,c;for(i=0;i<data.length;i+=j){j=1;if((c=data.charCodeAt(i))<128)w=c;else if(c<224){w=(c&31)*64+(data.charCodeAt(i+1)&63);j=2;}else if(c<240){w=(c&15)*4096+(data.charCodeAt(i+1)&63)*64+(data.charCodeAt(i+2)&63);j=3;}else {j=4;w=(c&7)*262144+(data.charCodeAt(i+1)&63)*4096+(data.charCodeAt(i+2)&63)*64+(data.charCodeAt(i+3)&63);w-=65536;ww=0xD800+(w>>>10&1023);w=0xDC00+(w&1023);}if(ww!==0){out[k++]=ww&255;out[k++]=ww>>>8;ww=0;}out[k++]=w%256;out[k++]=w>>>8;}return out.slice(0,k).toString('ucs2');}function utf8readc(data){return Buffer_from(data,'binary').toString('utf8');}var utf8corpus="foo bar baz\u00e2\u0098\u0083\u00f0\u009f\u008d\u00a3";var utf8read=has_buf&&(/*#__PURE__*/utf8readc(utf8corpus)==/*#__PURE__*/utf8reada(utf8corpus)&&utf8readc||/*#__PURE__*/utf8readb(utf8corpus)==/*#__PURE__*/utf8reada(utf8corpus)&&utf8readb)||utf8reada;var utf8write/*:StringConv*/=has_buf?function(data){return Buffer_from(data,'utf8').toString("binary");}:function(orig/*:string*/)/*:string*/{var out/*:Array<string>*/=[],i=0,c=0,d=0;while(i<orig.length){c=orig.charCodeAt(i++);switch(true){case c<128:out.push(String.fromCharCode(c));break;case c<2048:out.push(String.fromCharCode(192+(c>>6)));out.push(String.fromCharCode(128+(c&63)));break;case c>=55296&&c<57344:c-=55296;d=orig.charCodeAt(i++)-56320+(c<<10);out.push(String.fromCharCode(240+(d>>18&7)));out.push(String.fromCharCode(144+(d>>12&63)));out.push(String.fromCharCode(128+(d>>6&63)));out.push(String.fromCharCode(128+(d&63)));break;default:out.push(String.fromCharCode(224+(c>>12)));out.push(String.fromCharCode(128+(c>>6&63)));out.push(String.fromCharCode(128+(c&63)));}}return out.join("");};// matches <foo>...</foo> extracts content
	var matchtag=/*#__PURE__*/function(){var mtcache/*:{[k:string]:RegExp}*/={}/*:any*/;return function matchtag(f/*:string*/,g/*:?string*/)/*:RegExp*/{var t=f+"|"+(g||"");if(mtcache[t])return mtcache[t];return mtcache[t]=new RegExp('<(?:\\w+:)?'+f+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+f+'>',g||""/*:any*/);};}();var htmldecode/*:{(s:string):string}*/=/*#__PURE__*/function(){var entities/*:Array<[RegExp, string]>*/=[['nbsp',' '],['middot','??'],['quot','"'],['apos',"'"],['gt','>'],['lt','<'],['amp','&']].map(function(x/*:[string, string]*/){return [new RegExp('&'+x[0]+';',"ig"),x[1]];});return function htmldecode(str/*:string*/)/*:string*/{var o=str// Remove new lines and spaces from start of content
	.replace(/^[\t\n\r ]+/,"")// Remove new lines and spaces from end of content
	.replace(/[\t\n\r ]+$/,"")// Added line which removes any white space characters after and before html tags
	.replace(/>\s+/g,">").replace(/\s+</g,"<")// Replace remaining new lines and spaces with space
	.replace(/[\t\n\r ]+/g," ")// Replace <br> tags with new lines
	.replace(/<\s*[bB][rR]\s*\/?>/g,"\n")// Strip HTML elements
	.replace(/<[^>]*>/g,"");for(var i=0;i<entities.length;++i)o=o.replace(entities[i][0],entities[i][1]);return o;};}();var vtregex=/*#__PURE__*/function(){var vt_cache={};return function vt_regex(bt){if(vt_cache[bt]!==undefined)return vt_cache[bt];return vt_cache[bt]=new RegExp("<(?:vt:)?"+bt+">([\\s\\S]*?)</(?:vt:)?"+bt+">",'g');};}();var vtvregex=/<\/?(?:vt:)?variant>/g,vtmregex=/<(?:vt:)([^>]*)>([\s\S]*)</;function parseVector(data/*:string*/,opts)/*:Array<{v:string,t:string}>*/{var h=parsexmltag(data);var matches/*:Array<string>*/=data.match(vtregex(h.baseType))||[];var res/*:Array<any>*/=[];if(matches.length!=h.size){if(opts.WTF)throw new Error("unexpected vector length "+matches.length+" != "+h.size);return res;}matches.forEach(function(x/*:string*/){var v=x.replace(vtvregex,"").match(vtmregex);if(v)res.push({v:utf8read(v[2]),t:v[1]});});return res;}function xlml_normalize(d)/*:string*/{if(has_buf&&/*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/Buffer.isBuffer(d))return d.toString('utf8');if(typeof d==='string')return d;/* duktape */if(typeof Uint8Array!=='undefined'&&d instanceof Uint8Array)return utf8read(a2s(ab2a(d)));throw new Error("Bad input format: expected Buffer or string");}/* UOS uses CJK in tags */var xlmlregex=/<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg;//var xlmlregex = /<(\/?)([a-z0-9]*:|)(\w+)[^>]*>/mg;
	var XMLNS={CORE_PROPS:'http://schemas.openxmlformats.org/package/2006/metadata/core-properties',CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",CT:'http://schemas.openxmlformats.org/package/2006/content-types',RELS:'http://schemas.openxmlformats.org/package/2006/relationships',TCMNT:'http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments','dc':'http://purl.org/dc/elements/1.1/','dcterms':'http://purl.org/dc/terms/','dcmitype':'http://purl.org/dc/dcmitype/','mx':'http://schemas.microsoft.com/office/mac/excel/2008/main','r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships','sjs':'http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties','vt':'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes','xsi':'http://www.w3.org/2001/XMLSchema-instance','xsd':'http://www.w3.org/2001/XMLSchema'}/*:any*/;var XMLNS_main=['http://schemas.openxmlformats.org/spreadsheetml/2006/main','http://purl.oclc.org/ooxml/spreadsheetml/main','http://schemas.microsoft.com/office/excel/2006/main','http://schemas.microsoft.com/office/excel/2006/2'];function read_double_le(b/*:RawBytes|CFBlob*/,idx/*:number*/)/*:number*/{var s=1-2*(b[idx+7]>>>7);var e=((b[idx+7]&0x7f)<<4)+(b[idx+6]>>>4&0x0f);var m=b[idx+6]&0x0f;for(var i=5;i>=0;--i)m=m*256+b[idx+i];if(e==0x7ff)return m==0?s*Infinity:NaN;if(e==0)e=-1022;else {e-=1023;m+=Math.pow(2,52);}return s*Math.pow(2,e-52)*m;}function write_double_le(b/*:RawBytes|CFBlob*/,v/*:number*/,idx/*:number*/){var bs=(v<0||1/v==-Infinity?1:0)<<7,e=0,m=0;var av=bs?-v:v;if(!isFinite(av)){e=0x7ff;m=isNaN(v)?0x6969:0;}else if(av==0)e=m=0;else {e=Math.floor(Math.log(av)/Math.LN2);m=av*Math.pow(2,52-e);if(e<=-1023&&(!isFinite(m)||m<Math.pow(2,52))){e=-1022;}else {m-=Math.pow(2,52);e+=1023;}}for(var i=0;i<=5;++i,m/=256)b[idx+i]=m&0xff;b[idx+6]=(e&0x0f)<<4|m&0xf;b[idx+7]=e>>4|bs;}var ___toBuffer=function(bufs/*:Array<Array<RawBytes> >*/)/*:RawBytes*/{var x=[],w=10240;for(var i=0;i<bufs[0].length;++i)if(bufs[0][i])for(var j=0,L=bufs[0][i].length;j<L;j+=w)x.push.apply(x,bufs[0][i].slice(j,j+w));return x;};var __toBuffer=has_buf?function(bufs){return bufs[0].length>0&&Buffer.isBuffer(bufs[0][0])?Buffer.concat(bufs[0].map(function(x){return Buffer.isBuffer(x)?x:Buffer_from(x);})):___toBuffer(bufs);}:___toBuffer;var ___utf16le=function(b/*:RawBytes|CFBlob*/,s/*:number*/,e/*:number*/)/*:string*/{var ss/*:Array<string>*/=[];for(var i=s;i<e;i+=2)ss.push(String.fromCharCode(__readUInt16LE(b,i)));return ss.join("").replace(chr0,'');};var __utf16le=has_buf?function(b/*:RawBytes|CFBlob*/,s/*:number*/,e/*:number*/)/*:string*/{if(!Buffer.isBuffer(b)/*:: || !(b instanceof Buffer)*/)return ___utf16le(b,s,e);return b.toString('utf16le',s,e).replace(chr0,'')/*.replace(chr1,'!')*/;}:___utf16le;var ___hexlify=function(b/*:RawBytes|CFBlob*/,s/*:number*/,l/*:number*/)/*:string*/{var ss/*:Array<string>*/=[];for(var i=s;i<s+l;++i)ss.push(("0"+b[i].toString(16)).slice(-2));return ss.join("");};var __hexlify=has_buf?function(b/*:RawBytes|CFBlob*/,s/*:number*/,l/*:number*/)/*:string*/{return Buffer.isBuffer(b)/*:: && b instanceof Buffer*/?b.toString('hex',s,s+l):___hexlify(b,s,l);}:___hexlify;var ___utf8=function(b/*:RawBytes|CFBlob*/,s/*:number*/,e/*:number*/){var ss=[];for(var i=s;i<e;i++)ss.push(String.fromCharCode(__readUInt8(b,i)));return ss.join("");};var __utf8=has_buf?function utf8_b(b/*:RawBytes|CFBlob*/,s/*:number*/,e/*:number*/){return Buffer.isBuffer(b)/*:: && (b instanceof Buffer)*/?b.toString('utf8',s,e):___utf8(b,s,e);}:___utf8;var ___lpstr=function(b/*:RawBytes|CFBlob*/,i/*:number*/){var len=__readUInt32LE(b,i);return len>0?__utf8(b,i+4,i+4+len-1):"";};var __lpstr=___lpstr;var ___cpstr=function(b/*:RawBytes|CFBlob*/,i/*:number*/){var len=__readUInt32LE(b,i);return len>0?__utf8(b,i+4,i+4+len-1):"";};var __cpstr=___cpstr;var ___lpwstr=function(b/*:RawBytes|CFBlob*/,i/*:number*/){var len=2*__readUInt32LE(b,i);return len>0?__utf8(b,i+4,i+4+len-1):"";};var __lpwstr=___lpwstr;var ___lpp4=function lpp4_(b/*:RawBytes|CFBlob*/,i/*:number*/){var len=__readUInt32LE(b,i);return len>0?__utf16le(b,i+4,i+4+len):"";};var __lpp4=___lpp4;var ___8lpp4=function(b/*:RawBytes|CFBlob*/,i/*:number*/){var len=__readUInt32LE(b,i);return len>0?__utf8(b,i+4,i+4+len):"";};var __8lpp4=___8lpp4;var ___double=function(b/*:RawBytes|CFBlob*/,idx/*:number*/){return read_double_le(b,idx);};var __double=___double;var is_buf=function is_buf_a(a){return Array.isArray(a)||typeof Uint8Array!=="undefined"&&a instanceof Uint8Array;};if(has_buf/*:: && typeof Buffer !== 'undefined'*/){__lpstr=function lpstr_b(b/*:RawBytes|CFBlob*/,i/*:number*/){if(!Buffer.isBuffer(b)/*:: || !(b instanceof Buffer)*/)return ___lpstr(b,i);var len=b.readUInt32LE(i);return len>0?b.toString('utf8',i+4,i+4+len-1):"";};__cpstr=function cpstr_b(b/*:RawBytes|CFBlob*/,i/*:number*/){if(!Buffer.isBuffer(b)/*:: || !(b instanceof Buffer)*/)return ___cpstr(b,i);var len=b.readUInt32LE(i);return len>0?b.toString('utf8',i+4,i+4+len-1):"";};__lpwstr=function lpwstr_b(b/*:RawBytes|CFBlob*/,i/*:number*/){if(!Buffer.isBuffer(b)/*:: || !(b instanceof Buffer)*/)return ___lpwstr(b,i);var len=2*b.readUInt32LE(i);return b.toString('utf16le',i+4,i+4+len-1);};__lpp4=function lpp4_b(b/*:RawBytes|CFBlob*/,i/*:number*/){if(!Buffer.isBuffer(b)/*:: || !(b instanceof Buffer)*/)return ___lpp4(b,i);var len=b.readUInt32LE(i);return b.toString('utf16le',i+4,i+4+len);};__8lpp4=function lpp4_8b(b/*:RawBytes|CFBlob*/,i/*:number*/){if(!Buffer.isBuffer(b)/*:: || !(b instanceof Buffer)*/)return ___8lpp4(b,i);var len=b.readUInt32LE(i);return b.toString('utf8',i+4,i+4+len);};__double=function double_(b/*:RawBytes|CFBlob*/,i/*:number*/){if(Buffer.isBuffer(b)/*::&& b instanceof Buffer*/)return b.readDoubleLE(i);return ___double(b,i);};is_buf=function is_buf_b(a){return Buffer.isBuffer(a)||Array.isArray(a)||typeof Uint8Array!=="undefined"&&a instanceof Uint8Array;};}var __readUInt8=function(b/*:RawBytes|CFBlob*/,idx/*:number*/)/*:number*/{return b[idx];};var __readUInt16LE=function(b/*:RawBytes|CFBlob*/,idx/*:number*/)/*:number*/{return b[idx+1]*(1<<8)+b[idx];};var __readInt16LE=function(b/*:RawBytes|CFBlob*/,idx/*:number*/)/*:number*/{var u=b[idx+1]*(1<<8)+b[idx];return u<0x8000?u:(0xffff-u+1)*-1;};var __readUInt32LE=function(b/*:RawBytes|CFBlob*/,idx/*:number*/)/*:number*/{return b[idx+3]*(1<<24)+(b[idx+2]<<16)+(b[idx+1]<<8)+b[idx];};var __readInt32LE=function(b/*:RawBytes|CFBlob*/,idx/*:number*/)/*:number*/{return b[idx+3]<<24|b[idx+2]<<16|b[idx+1]<<8|b[idx];};var __readInt32BE=function(b/*:RawBytes|CFBlob*/,idx/*:number*/)/*:number*/{return b[idx]<<24|b[idx+1]<<16|b[idx+2]<<8|b[idx+3];};function ReadShift(size/*:number*/,t/*:?string*/)/*:number|string*/{var o="",oI/*:: :number = 0*/,oR,oo=[],w,vv,i,loc;switch(t){case'dbcs':loc=this.l;if(has_buf&&Buffer.isBuffer(this))o=this.slice(this.l,this.l+2*size).toString("utf16le");else for(i=0;i<size;++i){o+=String.fromCharCode(__readUInt16LE(this,loc));loc+=2;}size*=2;break;case'utf8':o=__utf8(this,this.l,this.l+size);break;case'utf16le':size*=2;o=__utf16le(this,this.l,this.l+size);break;case'wstr':return ReadShift.call(this,size,'dbcs');/* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */case'lpstr-ansi':o=__lpstr(this,this.l);size=4+__readUInt32LE(this,this.l);break;case'lpstr-cp':o=__cpstr(this,this.l);size=4+__readUInt32LE(this,this.l);break;/* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */case'lpwstr':o=__lpwstr(this,this.l);size=4+2*__readUInt32LE(this,this.l);break;/* [MS-OFFCRYPTO] 2.1.2 Length-Prefixed Padded Unicode String (UNICODE-LP-P4) */case'lpp4':size=4+__readUInt32LE(this,this.l);o=__lpp4(this,this.l);if(size&0x02)size+=2;break;/* [MS-OFFCRYPTO] 2.1.3 Length-Prefixed UTF-8 String (UTF-8-LP-P4) */case'8lpp4':size=4+__readUInt32LE(this,this.l);o=__8lpp4(this,this.l);if(size&0x03)size+=4-(size&0x03);break;case'cstr':size=0;o="";while((w=__readUInt8(this,this.l+size++))!==0)oo.push(_getchar(w));o=oo.join("");break;case'_wstr':size=0;o="";while((w=__readUInt16LE(this,this.l+size))!==0){oo.push(_getchar(w));size+=2;}size+=2;o=oo.join("");break;/* sbcs and dbcs support continue records in the SST way TODO codepages */case'dbcs-cont':o="";loc=this.l;for(i=0;i<size;++i){if(this.lens&&this.lens.indexOf(loc)!==-1){w=__readUInt8(this,loc);this.l=loc+1;vv=ReadShift.call(this,size-i,w?'dbcs-cont':'sbcs-cont');return oo.join("")+vv;}oo.push(_getchar(__readUInt16LE(this,loc)));loc+=2;}o=oo.join("");size*=2;break;case'cpstr':/* falls through */case'sbcs-cont':o="";loc=this.l;for(i=0;i!=size;++i){if(this.lens&&this.lens.indexOf(loc)!==-1){w=__readUInt8(this,loc);this.l=loc+1;vv=ReadShift.call(this,size-i,w?'dbcs-cont':'sbcs-cont');return oo.join("")+vv;}oo.push(_getchar(__readUInt8(this,loc)));loc+=1;}o=oo.join("");break;default:switch(size){case 1:oI=__readUInt8(this,this.l);this.l++;return oI;case 2:oI=(t==='i'?__readInt16LE:__readUInt16LE)(this,this.l);this.l+=2;return oI;case 4:case-4:if(t==='i'||(this[this.l+3]&0x80)===0){oI=(size>0?__readInt32LE:__readInt32BE)(this,this.l);this.l+=4;return oI;}else {oR=__readUInt32LE(this,this.l);this.l+=4;}return oR;case 8:case-8:if(t==='f'){if(size==8)oR=__double(this,this.l);else oR=__double([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0);this.l+=8;return oR;}else size=8;/* falls through */case 16:o=__hexlify(this,this.l,size);break;}}this.l+=size;return o;}var __writeUInt32LE=function(b/*:RawBytes|CFBlob*/,val/*:number*/,idx/*:number*/)/*:void*/{b[idx]=val&0xFF;b[idx+1]=val>>>8&0xFF;b[idx+2]=val>>>16&0xFF;b[idx+3]=val>>>24&0xFF;};var __writeInt32LE=function(b/*:RawBytes|CFBlob*/,val/*:number*/,idx/*:number*/)/*:void*/{b[idx]=val&0xFF;b[idx+1]=val>>8&0xFF;b[idx+2]=val>>16&0xFF;b[idx+3]=val>>24&0xFF;};var __writeUInt16LE=function(b/*:RawBytes|CFBlob*/,val/*:number*/,idx/*:number*/)/*:void*/{b[idx]=val&0xFF;b[idx+1]=val>>>8&0xFF;};function WriteShift(t/*:number*/,val/*:string|number*/,f/*:?string*/)/*:any*/{var size=0,i=0;if(f==='dbcs'){/*:: if(typeof val !== 'string') throw new Error("unreachable"); */for(i=0;i!=val.length;++i)__writeUInt16LE(this,val.charCodeAt(i),this.l+2*i);size=2*val.length;}else if(f==='sbcs'){{/*:: if(typeof val !== 'string') throw new Error("unreachable"); */val=val.replace(/[^\x00-\x7F]/g,"_");/*:: if(typeof val !== 'string') throw new Error("unreachable"); */for(i=0;i!=val.length;++i)this[this.l+i]=val.charCodeAt(i)&0xFF;}size=val.length;}else if(f==='hex'){for(;i<t;++i){/*:: if(typeof val !== "string") throw new Error("unreachable"); */this[this.l++]=parseInt(val.slice(2*i,2*i+2),16)||0;}return this;}else if(f==='utf16le'){/*:: if(typeof val !== "string") throw new Error("unreachable"); */var end/*:number*/=Math.min(this.l+t,this.length);for(i=0;i<Math.min(val.length,t);++i){var cc=val.charCodeAt(i);this[this.l++]=cc&0xff;this[this.l++]=cc>>8;}while(this.l<end)this[this.l++]=0;return this;}else/*:: if(typeof val === 'number') */switch(t){case 1:size=1;this[this.l]=val&0xFF;break;case 2:size=2;this[this.l]=val&0xFF;val>>>=8;this[this.l+1]=val&0xFF;break;case 3:size=3;this[this.l]=val&0xFF;val>>>=8;this[this.l+1]=val&0xFF;val>>>=8;this[this.l+2]=val&0xFF;break;case 4:size=4;__writeUInt32LE(this,val,this.l);break;case 8:size=8;if(f==='f'){write_double_le(this,val,this.l);break;}/* falls through */case 16:break;case-4:size=4;__writeInt32LE(this,val,this.l);break;}this.l+=size;return this;}function CheckField(hexstr/*:string*/,fld/*:string*/)/*:void*/{var m=__hexlify(this,this.l,hexstr.length>>1);if(m!==hexstr)throw new Error(fld+'Expected '+hexstr+' saw '+m);this.l+=hexstr.length>>1;}function prep_blob(blob,pos/*:number*/)/*:void*/{blob.l=pos;blob.read_shift=/*::(*/ReadShift/*:: :any)*/;blob.chk=CheckField;blob.write_shift=WriteShift;}function parsenoop(blob,length/*:: :number, opts?:any */){blob.l+=length;}function new_buf(sz/*:number*/)/*:Block*/{var o=new_raw_buf(sz);prep_blob(o,0);return o;}/* [MS-XLSB] 2.1.4 Record */function recordhopper(data,cb/*:RecordHopperCB*/,opts/*:?any*/){if(!data)return;var tmpbyte,cntbyte,length;prep_blob(data,data.l||0);var L=data.length,RT=0,tgt=0;while(data.l<L){RT=data.read_shift(1);if(RT&0x80)RT=(RT&0x7F)+((data.read_shift(1)&0x7F)<<7);var R=XLSBRecordEnum[RT]||XLSBRecordEnum[0xFFFF];tmpbyte=data.read_shift(1);length=tmpbyte&0x7F;for(cntbyte=1;cntbyte<4&&tmpbyte&0x80;++cntbyte)length+=((tmpbyte=data.read_shift(1))&0x7F)<<7*cntbyte;tgt=data.l+length;var d=R.f&&R.f(data,length,opts);data.l=tgt;if(cb(d,R,RT))return;}}/* control buffer usage for fixed-length buffers */function buf_array()/*:BufArray*/{var bufs/*:Array<Block>*/=[],blksz=has_buf?256:2048;var newblk=function ba_newblk(sz/*:number*/)/*:Block*/{var o/*:Block*/=new_buf(sz)/*:any*/;prep_blob(o,0);return o;};var curbuf/*:Block*/=newblk(blksz);var endbuf=function ba_endbuf(){if(!curbuf)return;if(curbuf.length>curbuf.l){curbuf=curbuf.slice(0,curbuf.l);curbuf.l=curbuf.length;}if(curbuf.length>0)bufs.push(curbuf);curbuf=null;};var next=function ba_next(sz/*:number*/)/*:Block*/{if(curbuf&&sz<curbuf.length-curbuf.l)return curbuf;endbuf();return curbuf=newblk(Math.max(sz+1,blksz));};var end=function ba_end(){endbuf();return bconcat(bufs);};var push=function ba_push(buf){endbuf();curbuf=buf;if(curbuf.l==null)curbuf.l=curbuf.length;next(blksz);};return {next:next,push:push,end:end,_bufs:bufs}/*:any*/;}/* XLS ranges enforced */function shift_cell_xls(cell/*:CellAddress*/,tgt/*:any*/,opts/*:?any*/)/*:CellAddress*/{var out=dup(cell);if(tgt.s){if(out.cRel)out.c+=tgt.s.c;if(out.rRel)out.r+=tgt.s.r;}else {if(out.cRel)out.c+=tgt.c;if(out.rRel)out.r+=tgt.r;}if(!opts||opts.biff<12){while(out.c>=0x100)out.c-=0x100;while(out.r>=0x10000)out.r-=0x10000;}return out;}function shift_range_xls(cell,range,opts){var out=dup(cell);out.s=shift_cell_xls(out.s,range.s,opts);out.e=shift_cell_xls(out.e,range.s,opts);return out;}function encode_cell_xls(c/*:CellAddress*/,biff/*:number*/)/*:string*/{if(c.cRel&&c.c<0){c=dup(c);while(c.c<0)c.c+=biff>8?0x4000:0x100;}if(c.rRel&&c.r<0){c=dup(c);while(c.r<0)c.r+=biff>8?0x100000:biff>5?0x10000:0x4000;}var s=encode_cell(c);if(!c.cRel&&c.cRel!=null)s=fix_col(s);if(!c.rRel&&c.rRel!=null)s=fix_row(s);return s;}function encode_range_xls(r,opts)/*:string*/{if(r.s.r==0&&!r.s.rRel){if(r.e.r==(opts.biff>=12?0xFFFFF:opts.biff>=8?0x10000:0x4000)&&!r.e.rRel){return (r.s.cRel?"":"$")+encode_col(r.s.c)+":"+(r.e.cRel?"":"$")+encode_col(r.e.c);}}if(r.s.c==0&&!r.s.cRel){if(r.e.c==(opts.biff>=12?0x3FFF:0xFF)&&!r.e.cRel){return (r.s.rRel?"":"$")+encode_row(r.s.r)+":"+(r.e.rRel?"":"$")+encode_row(r.e.r);}}return encode_cell_xls(r.s,opts.biff)+":"+encode_cell_xls(r.e,opts.biff);}function decode_row(rowstr/*:string*/)/*:number*/{return parseInt(unfix_row(rowstr),10)-1;}function encode_row(row/*:number*/)/*:string*/{return ""+(row+1);}function fix_row(cstr/*:string*/)/*:string*/{return cstr.replace(/([A-Z]|^)(\d+)$/,"$1$$$2");}function unfix_row(cstr/*:string*/)/*:string*/{return cstr.replace(/\$(\d+)$/,"$1");}function decode_col(colstr/*:string*/)/*:number*/{var c=unfix_col(colstr),d=0,i=0;for(;i!==c.length;++i)d=26*d+c.charCodeAt(i)-64;return d-1;}function encode_col(col/*:number*/)/*:string*/{if(col<0)throw new Error("invalid column "+col);var s="";for(++col;col;col=Math.floor((col-1)/26))s=String.fromCharCode((col-1)%26+65)+s;return s;}function fix_col(cstr/*:string*/)/*:string*/{return cstr.replace(/^([A-Z])/,"$$$1");}function unfix_col(cstr/*:string*/)/*:string*/{return cstr.replace(/^\$([A-Z])/,"$1");}function decode_cell(cstr/*:string*/)/*:CellAddress*/{var R=0,C=0;for(var i=0;i<cstr.length;++i){var cc=cstr.charCodeAt(i);if(cc>=48&&cc<=57)R=10*R+(cc-48);else if(cc>=65&&cc<=90)C=26*C+(cc-64);}return {c:C-1,r:R-1};}//function encode_cell(cell/*:CellAddress*/)/*:string*/ { return encode_col(cell.c) + encode_row(cell.r); }
	function encode_cell(cell/*:CellAddress*/)/*:string*/{var col=cell.c+1;var s="";for(;col;col=(col-1)/26|0)s=String.fromCharCode((col-1)%26+65)+s;return s+(cell.r+1);}function decode_range(range/*:string*/)/*:Range*/{var idx=range.indexOf(":");if(idx==-1)return {s:decode_cell(range),e:decode_cell(range)};return {s:decode_cell(range.slice(0,idx)),e:decode_cell(range.slice(idx+1))};}/*# if only one arg, it is assumed to be a Range.  If 2 args, both are cell addresses */function encode_range(cs/*:CellAddrSpec|Range*/,ce/*:?CellAddrSpec*/)/*:string*/{if(typeof ce==='undefined'||typeof ce==='number'){/*:: if(!(cs instanceof Range)) throw "unreachable"; */return encode_range(cs.s,cs.e);}/*:: if((cs instanceof Range)) throw "unreachable"; */if(typeof cs!=='string')cs=encode_cell(cs/*:any*/);if(typeof ce!=='string')ce=encode_cell(ce/*:any*/);/*:: if(typeof cs !== 'string') throw "unreachable"; */ /*:: if(typeof ce !== 'string') throw "unreachable"; */return cs==ce?cs:cs+":"+ce;}function safe_decode_range(range/*:string*/)/*:Range*/{var o={s:{c:0,r:0},e:{c:0,r:0}};var idx=0,i=0,cc=0;var len=range.length;for(idx=0;i<len;++i){if((cc=range.charCodeAt(i)-64)<1||cc>26)break;idx=26*idx+cc;}o.s.c=--idx;for(idx=0;i<len;++i){if((cc=range.charCodeAt(i)-48)<0||cc>9)break;idx=10*idx+cc;}o.s.r=--idx;if(i===len||cc!=10){o.e.c=o.s.c;o.e.r=o.s.r;return o;}++i;for(idx=0;i!=len;++i){if((cc=range.charCodeAt(i)-64)<1||cc>26)break;idx=26*idx+cc;}o.e.c=--idx;for(idx=0;i!=len;++i){if((cc=range.charCodeAt(i)-48)<0||cc>9)break;idx=10*idx+cc;}o.e.r=--idx;return o;}function safe_format_cell(cell/*:Cell*/,v/*:any*/){var q=cell.t=='d'&&v instanceof Date;if(cell.z!=null)try{return cell.w=SSF_format(cell.z,q?datenum(v):v);}catch(e){}try{return cell.w=SSF_format((cell.XF||{}).numFmtId||(q?14:0),q?datenum(v):v);}catch(e){return ''+v;}}function format_cell(cell/*:Cell*/,v/*:any*/,o/*:any*/){if(cell==null||cell.t==null||cell.t=='z')return "";if(cell.w!==undefined)return cell.w;if(cell.t=='d'&&!cell.z&&o&&o.dateNF)cell.z=o.dateNF;if(cell.t=="e")return BErr[cell.v]||cell.v;if(v==undefined)return safe_format_cell(cell,cell.v);return safe_format_cell(cell,v);}function sheet_to_workbook(sheet/*:Worksheet*/,opts)/*:Workbook*/{var n=opts&&opts.sheet?opts.sheet:"Sheet1";var sheets={};sheets[n]=sheet;return {SheetNames:[n],Sheets:sheets};}function sheet_add_aoa(_ws/*:?Worksheet*/,data/*:AOA*/,opts/*:?any*/)/*:Worksheet*/{var o=opts||{};var dense=_ws?Array.isArray(_ws):o.dense;var ws/*:Worksheet*/=_ws||(dense?[]/*:any*/:{}/*:any*/);var _R=0,_C=0;if(ws&&o.origin!=null){if(typeof o.origin=='number')_R=o.origin;else {var _origin/*:CellAddress*/=typeof o.origin=="string"?decode_cell(o.origin):o.origin;_R=_origin.r;_C=_origin.c;}if(!ws["!ref"])ws["!ref"]="A1:A1";}var range/*:Range*/={s:{c:10000000,r:10000000},e:{c:0,r:0}}/*:any*/;if(ws['!ref']){var _range=safe_decode_range(ws['!ref']);range.s.c=_range.s.c;range.s.r=_range.s.r;range.e.c=Math.max(range.e.c,_range.e.c);range.e.r=Math.max(range.e.r,_range.e.r);if(_R==-1)range.e.r=_R=_range.e.r+1;}for(var R=0;R!=data.length;++R){if(!data[R])continue;if(!Array.isArray(data[R]))throw new Error("aoa_to_sheet expects an array of arrays");for(var C=0;C!=data[R].length;++C){if(typeof data[R][C]==='undefined')continue;var cell/*:Cell*/={v:data[R][C]}/*:any*/;var __R=_R+R,__C=_C+C;if(range.s.r>__R)range.s.r=__R;if(range.s.c>__C)range.s.c=__C;if(range.e.r<__R)range.e.r=__R;if(range.e.c<__C)range.e.c=__C;if(data[R][C]&&typeof data[R][C]==='object'&&!Array.isArray(data[R][C])&&!(data[R][C]instanceof Date))cell=data[R][C];else {if(Array.isArray(cell.v)){cell.f=data[R][C][1];cell.v=cell.v[0];}if(cell.v===null){if(cell.f)cell.t='n';else if(o.nullError){cell.t='e';cell.v=0;}else if(!o.sheetStubs)continue;else cell.t='z';}else if(typeof cell.v==='number')cell.t='n';else if(typeof cell.v==='boolean')cell.t='b';else if(cell.v instanceof Date){cell.z=o.dateNF||table_fmt[14];if(o.cellDates){cell.t='d';cell.w=SSF_format(cell.z,datenum(cell.v));}else {cell.t='n';cell.v=datenum(cell.v);cell.w=SSF_format(cell.z,cell.v);}}else cell.t='s';}if(dense){if(!ws[__R])ws[__R]=[];if(ws[__R][__C]&&ws[__R][__C].z)cell.z=ws[__R][__C].z;ws[__R][__C]=cell;}else {var cell_ref=encode_cell({c:__C,r:__R}/*:any*/);if(ws[cell_ref]&&ws[cell_ref].z)cell.z=ws[cell_ref].z;ws[cell_ref]=cell;}}}if(range.s.c<10000000)ws['!ref']=encode_range(range);return ws;}function aoa_to_sheet(data/*:AOA*/,opts/*:?any*/)/*:Worksheet*/{return sheet_add_aoa(null,data,opts);}function parse_Int32LE(data){return data.read_shift(4,'i');}/* [MS-XLSB] 2.5.168 */function parse_XLWideString(data/*::, length*/)/*:string*/{var cchCharacters=data.read_shift(4);return cchCharacters===0?"":data.read_shift(cchCharacters,'dbcs');}//	var cchCharacters = data.read_shift(2);
	//	return cchCharacters === 0 ? "" : data.read_shift(cchCharacters, "utf16le");
	//}
	/* [MS-XLSB] 2.5.143 */function parse_StrRun(data){return {ich:data.read_shift(2),ifnt:data.read_shift(2)};}/* [MS-XLSB] 2.5.121 */function parse_RichStr(data,length/*:number*/)/*:XLString*/{var start=data.l;var flags=data.read_shift(1);var str=parse_XLWideString(data);var rgsStrRun=[];var z={t:str,h:str}/*:any*/;if((flags&1)!==0){/* fRichStr */ /* TODO: formatted string */var dwSizeStrRun=data.read_shift(4);for(var i=0;i!=dwSizeStrRun;++i)rgsStrRun.push(parse_StrRun(data));z.r=rgsStrRun;}else z.r=[{ich:0,ifnt:0}];//if((flags & 2) !== 0) { /* fExtStr */
	//	/* TODO: phonetic string */
	//}
	data.l=start+length;return z;}/* [MS-XLSB] 2.4.328 BrtCommentText (RichStr w/1 run) */var parse_BrtCommentText=parse_RichStr;/* [MS-XLSB] 2.5.9 */function parse_XLSBCell(data)/*:any*/{var col=data.read_shift(4);var iStyleRef=data.read_shift(2);iStyleRef+=data.read_shift(1)<<16;data.l++;//var fPhShow = data.read_shift(1);
	return {c:col,iStyleRef:iStyleRef};}/* Short XLSB Cell does not include column */function parse_XLSBShortCell(data)/*:any*/{var iStyleRef=data.read_shift(2);iStyleRef+=data.read_shift(1)<<16;data.l++;//var fPhShow = data.read_shift(1);
	return {c:-1,iStyleRef:iStyleRef};}/* [MS-XLSB] 2.5.21 */var parse_XLSBCodeName=parse_XLWideString;/* [MS-XLSB] 2.5.166 */function parse_XLNullableWideString(data/*::, length*/)/*:string*/{var cchCharacters=data.read_shift(4);return cchCharacters===0||cchCharacters===0xFFFFFFFF?"":data.read_shift(cchCharacters,'dbcs');}/* [MS-XLSB] 2.5.165 */var parse_XLNameWideString=parse_XLWideString;//var write_XLNameWideString = write_XLWideString;
	/* [MS-XLSB] 2.5.114 */var parse_RelID=parse_XLNullableWideString;/* [MS-XLS] 2.5.217 ; [MS-XLSB] 2.5.122 */function parse_RkNumber(data)/*:number*/{var b=data.slice(data.l,data.l+4);var fX100=b[0]&1,fInt=b[0]&2;data.l+=4;var RK=fInt===0?__double([0,0,0,0,b[0]&0xFC,b[1],b[2],b[3]],0):__readInt32LE(b,0)>>2;return fX100?RK/100:RK;}/* [MS-XLSB] 2.5.117 RfX */function parse_RfX(data/*::, length*/)/*:Range*/{var cell/*:Range*/={s:{},e:{}}/*:any*/;cell.s.r=data.read_shift(4);cell.e.r=data.read_shift(4);cell.s.c=data.read_shift(4);cell.e.c=data.read_shift(4);return cell;}/* [MS-XLSB] 2.5.153 UncheckedRfX */var parse_UncheckedRfX=parse_RfX;//	var cnt = data.read_shift(4);
	//	var out = [];
	//	for(var i = 0; i < cnt; ++i) {
	//		var rng = parse_UncheckedRfX(data);
	//		out.push(encode_range(rng));
	//	}
	//	return out.join(",");
	//}
	//function write_UncheckedSqRfX(sqrfx/*:string*/) {
	//	var parts = sqrfx.split(/\s*,\s*/);
	//	var o = new_buf(4); o.write_shift(4, parts.length);
	//	var out = [o];
	//	parts.forEach(function(rng) {
	//		out.push(write_UncheckedRfX(safe_decode_range(rng)));
	//	});
	//	return bconcat(out);
	//}
	/* [MS-XLS] 2.5.342 ; [MS-XLSB] 2.5.171 */ /* TODO: error checking, NaN and Infinity values are not valid Xnum */function parse_Xnum(data/*::, length*/){if(data.length-data.l<8)throw "XLS Xnum Buffer underflow";return data.read_shift(8,'f');}/* [MS-XLSB] 2.4.324 BrtColor */function parse_BrtColor(data/*::, length*/){var out={};var d=data.read_shift(1);//var fValidRGB = d & 1;
	var xColorType=d>>>1;var index=data.read_shift(1);var nTS=data.read_shift(2,'i');var bR=data.read_shift(1);var bG=data.read_shift(1);var bB=data.read_shift(1);data.l++;//var bAlpha = data.read_shift(1);
	switch(xColorType){case 0:out.auto=1;break;case 1:out.index=index;var icv=XLSIcv[index];/* automatic pseudo index 81 */if(icv)out.rgb=rgb2Hex(icv);break;case 2:/* if(!fValidRGB) throw new Error("invalid"); */out.rgb=rgb2Hex([bR,bG,bB]);break;case 3:out.theme=index;break;}if(nTS!=0)out.tint=nTS>0?nTS/32767:nTS/32768;return out;}/* [MS-XLSB] 2.5.52 */function parse_FontFlags(data/*::, length, opts*/){var d=data.read_shift(1);data.l++;var out={fBold:d&0x01,fItalic:d&0x02,fUnderline:d&0x04,fStrikeout:d&0x08,fOutline:d&0x10,fShadow:d&0x20,fCondense:d&0x40,fExtend:d&0x80};return out;}/* [MS-OLEDS] 2.3.1 and 2.3.2 */function parse_ClipboardFormatOrString(o,w/*:number*/)/*:string*/{// $FlowIgnore
	var ClipFmt={2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"};var m/*:number*/=o.read_shift(4);switch(m){case 0x00000000:return "";case 0xffffffff:case 0xfffffffe:return ClipFmt[o.read_shift(4)]||"";}if(m>0x190)throw new Error("Unsupported Clipboard: "+m.toString(16));o.l-=4;return o.read_shift(0,w==1?"lpstr":"lpwstr");}function parse_ClipboardFormatOrAnsiString(o){return parse_ClipboardFormatOrString(o,1);}function parse_ClipboardFormatOrUnicodeString(o){return parse_ClipboardFormatOrString(o,2);}/* [MS-OLEPS] 2.2 PropertyType */ // Note: some tree shakers cannot handle VT_VECTOR | $CONST, hence extra vars
	//var VT_EMPTY    = 0x0000;
	//var VT_NULL     = 0x0001;
	var VT_I2=0x0002;var VT_I4=0x0003;//var VT_R4       = 0x0004;
	//var VT_R8       = 0x0005;
	//var VT_CY       = 0x0006;
	//var VT_DATE     = 0x0007;
	//var VT_BSTR     = 0x0008;
	//var VT_ERROR    = 0x000A;
	var VT_BOOL=0x000B;var VT_VARIANT=0x000C;//var VT_DECIMAL  = 0x000E;
	//var VT_I1       = 0x0010;
	//var VT_UI1      = 0x0011;
	//var VT_UI2      = 0x0012;
	var VT_UI4=0x0013;//var VT_I8       = 0x0014;
	var VT_FILETIME=0x0040;var VT_BLOB=0x0041;//var VT_STREAM   = 0x0042;
	//var VT_STORAGE  = 0x0043;
	//var VT_STREAMED_Object  = 0x0044;
	//var VT_STORED_Object    = 0x0045;
	//var VT_BLOB_Object      = 0x0046;
	var VT_CF=0x0047;//var VT_CLSID    = 0x0048;
	var VT_VECTOR_VARIANT=0x100C;var VT_VECTOR_LPSTR=0x101E;//var VT_ARRAY    = 0x2000;
	var VT_STRING=0x0050;// 2.3.3.1.11 VtString
	var VT_USTR=0x0051;// 2.3.3.1.12 VtUnalignedString
	var VT_CUSTOM=[VT_STRING,VT_USTR];/* [MS-OSHARED] 2.3.3.2.2.1 Document Summary Information PIDDSI */var DocSummaryPIDDSI={/*::[*/0x01/*::]*/:{n:'CodePage',t:VT_I2},/*::[*/0x02/*::]*/:{n:'Category',t:VT_STRING},/*::[*/0x03/*::]*/:{n:'PresentationFormat',t:VT_STRING},/*::[*/0x04/*::]*/:{n:'ByteCount',t:VT_I4},/*::[*/0x05/*::]*/:{n:'LineCount',t:VT_I4},/*::[*/0x06/*::]*/:{n:'ParagraphCount',t:VT_I4},/*::[*/0x07/*::]*/:{n:'SlideCount',t:VT_I4},/*::[*/0x08/*::]*/:{n:'NoteCount',t:VT_I4},/*::[*/0x09/*::]*/:{n:'HiddenCount',t:VT_I4},/*::[*/0x0a/*::]*/:{n:'MultimediaClipCount',t:VT_I4},/*::[*/0x0b/*::]*/:{n:'ScaleCrop',t:VT_BOOL},/*::[*/0x0c/*::]*/:{n:'HeadingPairs',t:VT_VECTOR_VARIANT/* VT_VECTOR | VT_VARIANT */},/*::[*/0x0d/*::]*/:{n:'TitlesOfParts',t:VT_VECTOR_LPSTR/* VT_VECTOR | VT_LPSTR */},/*::[*/0x0e/*::]*/:{n:'Manager',t:VT_STRING},/*::[*/0x0f/*::]*/:{n:'Company',t:VT_STRING},/*::[*/0x10/*::]*/:{n:'LinksUpToDate',t:VT_BOOL},/*::[*/0x11/*::]*/:{n:'CharacterCount',t:VT_I4},/*::[*/0x13/*::]*/:{n:'SharedDoc',t:VT_BOOL},/*::[*/0x16/*::]*/:{n:'HyperlinksChanged',t:VT_BOOL},/*::[*/0x17/*::]*/:{n:'AppVersion',t:VT_I4,p:'version'},/*::[*/0x18/*::]*/:{n:'DigSig',t:VT_BLOB},/*::[*/0x1A/*::]*/:{n:'ContentType',t:VT_STRING},/*::[*/0x1B/*::]*/:{n:'ContentStatus',t:VT_STRING},/*::[*/0x1C/*::]*/:{n:'Language',t:VT_STRING},/*::[*/0x1D/*::]*/:{n:'Version',t:VT_STRING},/*::[*/0xFF/*::]*/:{},/* [MS-OLEPS] 2.18 */ /*::[*/0x80000000/*::]*/:{n:'Locale',t:VT_UI4},/*::[*/0x80000003/*::]*/:{n:'Behavior',t:VT_UI4},/*::[*/0x72627262/*::]*/:{}};/* [MS-OSHARED] 2.3.3.2.1.1 Summary Information Property Set PIDSI */var SummaryPIDSI={/*::[*/0x01/*::]*/:{n:'CodePage',t:VT_I2},/*::[*/0x02/*::]*/:{n:'Title',t:VT_STRING},/*::[*/0x03/*::]*/:{n:'Subject',t:VT_STRING},/*::[*/0x04/*::]*/:{n:'Author',t:VT_STRING},/*::[*/0x05/*::]*/:{n:'Keywords',t:VT_STRING},/*::[*/0x06/*::]*/:{n:'Comments',t:VT_STRING},/*::[*/0x07/*::]*/:{n:'Template',t:VT_STRING},/*::[*/0x08/*::]*/:{n:'LastAuthor',t:VT_STRING},/*::[*/0x09/*::]*/:{n:'RevNumber',t:VT_STRING},/*::[*/0x0A/*::]*/:{n:'EditTime',t:VT_FILETIME},/*::[*/0x0B/*::]*/:{n:'LastPrinted',t:VT_FILETIME},/*::[*/0x0C/*::]*/:{n:'CreatedDate',t:VT_FILETIME},/*::[*/0x0D/*::]*/:{n:'ModifiedDate',t:VT_FILETIME},/*::[*/0x0E/*::]*/:{n:'PageCount',t:VT_I4},/*::[*/0x0F/*::]*/:{n:'WordCount',t:VT_I4},/*::[*/0x10/*::]*/:{n:'CharCount',t:VT_I4},/*::[*/0x11/*::]*/:{n:'Thumbnail',t:VT_CF},/*::[*/0x12/*::]*/:{n:'Application',t:VT_STRING},/*::[*/0x13/*::]*/:{n:'DocSecurity',t:VT_I4},/*::[*/0xFF/*::]*/:{},/* [MS-OLEPS] 2.18 */ /*::[*/0x80000000/*::]*/:{n:'Locale',t:VT_UI4},/*::[*/0x80000003/*::]*/:{n:'Behavior',t:VT_UI4},/*::[*/0x72627262/*::]*/:{}};/* [MS-XLS] 2.4.63 Country/Region codes */var CountryEnum={/*::[*/0x0001/*::]*/:"US",// United States
	/*::[*/0x0002/*::]*/:"CA",// Canada
	/*::[*/0x0003/*::]*/:"",// Latin America (except Brazil)
	/*::[*/0x0007/*::]*/:"RU",// Russia
	/*::[*/0x0014/*::]*/:"EG",// Egypt
	/*::[*/0x001E/*::]*/:"GR",// Greece
	/*::[*/0x001F/*::]*/:"NL",// Netherlands
	/*::[*/0x0020/*::]*/:"BE",// Belgium
	/*::[*/0x0021/*::]*/:"FR",// France
	/*::[*/0x0022/*::]*/:"ES",// Spain
	/*::[*/0x0024/*::]*/:"HU",// Hungary
	/*::[*/0x0027/*::]*/:"IT",// Italy
	/*::[*/0x0029/*::]*/:"CH",// Switzerland
	/*::[*/0x002B/*::]*/:"AT",// Austria
	/*::[*/0x002C/*::]*/:"GB",// United Kingdom
	/*::[*/0x002D/*::]*/:"DK",// Denmark
	/*::[*/0x002E/*::]*/:"SE",// Sweden
	/*::[*/0x002F/*::]*/:"NO",// Norway
	/*::[*/0x0030/*::]*/:"PL",// Poland
	/*::[*/0x0031/*::]*/:"DE",// Germany
	/*::[*/0x0034/*::]*/:"MX",// Mexico
	/*::[*/0x0037/*::]*/:"BR",// Brazil
	/*::[*/0x003d/*::]*/:"AU",// Australia
	/*::[*/0x0040/*::]*/:"NZ",// New Zealand
	/*::[*/0x0042/*::]*/:"TH",// Thailand
	/*::[*/0x0051/*::]*/:"JP",// Japan
	/*::[*/0x0052/*::]*/:"KR",// Korea
	/*::[*/0x0054/*::]*/:"VN",// Viet Nam
	/*::[*/0x0056/*::]*/:"CN",// China
	/*::[*/0x005A/*::]*/:"TR",// Turkey
	/*::[*/0x0069/*::]*/:"JS",// Ramastan
	/*::[*/0x00D5/*::]*/:"DZ",// Algeria
	/*::[*/0x00D8/*::]*/:"MA",// Morocco
	/*::[*/0x00DA/*::]*/:"LY",// Libya
	/*::[*/0x015F/*::]*/:"PT",// Portugal
	/*::[*/0x0162/*::]*/:"IS",// Iceland
	/*::[*/0x0166/*::]*/:"FI",// Finland
	/*::[*/0x01A4/*::]*/:"CZ",// Czech Republic
	/*::[*/0x0376/*::]*/:"TW",// Taiwan
	/*::[*/0x03C1/*::]*/:"LB",// Lebanon
	/*::[*/0x03C2/*::]*/:"JO",// Jordan
	/*::[*/0x03C3/*::]*/:"SY",// Syria
	/*::[*/0x03C4/*::]*/:"IQ",// Iraq
	/*::[*/0x03C5/*::]*/:"KW",// Kuwait
	/*::[*/0x03C6/*::]*/:"SA",// Saudi Arabia
	/*::[*/0x03CB/*::]*/:"AE",// United Arab Emirates
	/*::[*/0x03CC/*::]*/:"IL",// Israel
	/*::[*/0x03CE/*::]*/:"QA",// Qatar
	/*::[*/0x03D5/*::]*/:"IR",// Iran
	/*::[*/0xFFFF/*::]*/:"US"// United States
	};/* [MS-XLS] 2.5.127 */var XLSFillPattern=[null,'solid','mediumGray','darkGray','lightGray','darkHorizontal','darkVertical','darkDown','darkUp','darkGrid','darkTrellis','lightHorizontal','lightVertical','lightDown','lightUp','lightGrid','lightTrellis','gray125','gray0625'];function rgbify(arr/*:Array<number>*/)/*:Array<[number, number, number]>*/{return arr.map(function(x){return [x>>16&255,x>>8&255,x&255];});}/* [MS-XLS] 2.5.161 */ /* [MS-XLSB] 2.5.75 Icv */var _XLSIcv=/*#__PURE__*/rgbify([/* Color Constants */0x000000,0xFFFFFF,0xFF0000,0x00FF00,0x0000FF,0xFFFF00,0xFF00FF,0x00FFFF,/* Overridable Defaults */0x000000,0xFFFFFF,0xFF0000,0x00FF00,0x0000FF,0xFFFF00,0xFF00FF,0x00FFFF,0x800000,0x008000,0x000080,0x808000,0x800080,0x008080,0xC0C0C0,0x808080,0x9999FF,0x993366,0xFFFFCC,0xCCFFFF,0x660066,0xFF8080,0x0066CC,0xCCCCFF,0x000080,0xFF00FF,0xFFFF00,0x00FFFF,0x800080,0x800000,0x008080,0x0000FF,0x00CCFF,0xCCFFFF,0xCCFFCC,0xFFFF99,0x99CCFF,0xFF99CC,0xCC99FF,0xFFCC99,0x3366FF,0x33CCCC,0x99CC00,0xFFCC00,0xFF9900,0xFF6600,0x666699,0x969696,0x003366,0x339966,0x003300,0x333300,0x993300,0x993366,0x333399,0x333333,/* Other entries to appease BIFF8/12 */0xFFFFFF,/* 0x40 icvForeground ?? */0x000000,/* 0x41 icvBackground ?? */0x000000,/* 0x42 icvFrame ?? */0x000000,/* 0x43 icv3D ?? */0x000000,/* 0x44 icv3DText ?? */0x000000,/* 0x45 icv3DHilite ?? */0x000000,/* 0x46 icv3DShadow ?? */0x000000,/* 0x47 icvHilite ?? */0x000000,/* 0x48 icvCtlText ?? */0x000000,/* 0x49 icvCtlScrl ?? */0x000000,/* 0x4A icvCtlInv ?? */0x000000,/* 0x4B icvCtlBody ?? */0x000000,/* 0x4C icvCtlFrame ?? */0x000000,/* 0x4D icvCtlFore ?? */0x000000,/* 0x4E icvCtlBack ?? */0x000000,/* 0x4F icvCtlNeutral */0x000000,/* 0x50 icvInfoBk ?? */0x000000/* 0x51 icvInfoText ?? */]);var XLSIcv=/*#__PURE__*/dup(_XLSIcv);/* [MS-XLSB] 2.5.97.2 */var BErr={/*::[*/0x00/*::]*/:"#NULL!",/*::[*/0x07/*::]*/:"#DIV/0!",/*::[*/0x0F/*::]*/:"#VALUE!",/*::[*/0x17/*::]*/:"#REF!",/*::[*/0x1D/*::]*/:"#NAME?",/*::[*/0x24/*::]*/:"#NUM!",/*::[*/0x2A/*::]*/:"#N/A",/*::[*/0x2B/*::]*/:"#GETTING_DATA",/*::[*/0xFF/*::]*/:"#WTF?"};//var RBErr = evert_num(BErr);
	var RBErr={"#NULL!":0x00,"#DIV/0!":0x07,"#VALUE!":0x0F,"#REF!":0x17,"#NAME?":0x1D,"#NUM!":0x24,"#N/A":0x2A,"#GETTING_DATA":0x2B,"#WTF?":0xFF};/* Parts enumerated in OPC spec, MS-XLSB and MS-XLSX */ /* 12.3 Part Summary <SpreadsheetML> */ /* 14.2 Part Summary <DrawingML> */ /* [MS-XLSX] 2.1 Part Enumerations ; [MS-XLSB] 2.1.7 Part Enumeration */var ct2type/*{[string]:string}*/={/* Workbook */"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks",/* Worksheet */"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO",/* Binary Index */ /* Chartsheet */"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts",/* Macrosheet */"application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO",/* Binary Index */ /* Dialogsheet */"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs",/* Shared Strings */"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs",/* Styles */"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles",/* File Properties */"application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops",/* Custom Data Properties */"application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO",/* Comments */"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people",/* Metadata (Stock/Geography and Dynamic Array) */"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata",/* PivotTable */"application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO",/* Chart Objects */"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO",/* Chart Colors */"application/vnd.ms-office.chartcolorstyle+xml":"TODO",/* Chart Style */"application/vnd.ms-office.chartstyle+xml":"TODO",/* Chart Advanced */"application/vnd.ms-office.chartex+xml":"TODO",/* Calculation Chain */"application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains",/* Printer Settings */"application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO",/* ActiveX */"application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO",/* Custom Toolbars */"application/vnd.ms-excel.attachedToolbars":"TODO",/* External Data Connections */"application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO",/* External Links */"application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links",/* PivotCache */"application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO",/* Query Table */"application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO",/* Shared Workbook */"application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO",/* Single Cell Table */"application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO",/* Slicer */"application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO",/* Sort Map */"application/vnd.ms-excel.wsSortMap":"TODO",/* Table */"application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO",/* Themes */"application/vnd.openxmlformats-officedocument.theme+xml":"themes",/* Theme Override */"application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO",/* Timeline */"application/vnd.ms-excel.Timeline+xml":"TODO",/* verify */"application/vnd.ms-excel.TimelineCache+xml":"TODO",/* verify */ /* VBA */"application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO",/* Volatile Dependencies */"application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO",/* Control Properties */"application/vnd.ms-excel.controlproperties+xml":"TODO",/* Data Model */"application/vnd.openxmlformats-officedocument.model+data":"TODO",/* Survey */"application/vnd.ms-excel.Survey+xml":"TODO",/* Drawing */"application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO",/* VML */"application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO",/* Image */"image/png":"TODO","sheet":"js"}/*:any*/;function new_ct()/*:any*/{return {workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}/*:any*/;}function parse_ct(data/*:?string*/){var ct=new_ct();if(!data||!data.match)return ct;var ctext={};(data.match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(y[0].replace(nsregex,"<")){case'<?xml':break;case'<Types':ct.xmlns=y['xmlns'+(y[0].match(/<(\w+):/)||["",""])[1]];break;case'<Default':ctext[y.Extension]=y.ContentType;break;case'<Override':if(ct[ct2type[y.ContentType]]!==undefined)ct[ct2type[y.ContentType]].push(y.PartName);break;}});if(ct.xmlns!==XMLNS.CT)throw new Error("Unknown Namespace: "+ct.xmlns);ct.calcchain=ct.calcchains.length>0?ct.calcchains[0]:"";ct.sst=ct.strs.length>0?ct.strs[0]:"";ct.style=ct.styles.length>0?ct.styles[0]:"";ct.defaults=ctext;delete ct.calcchains;return ct;}/* 9.3 Relationships */var RELS={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:'http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties',CUST_PROPS:'http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties',SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"}/*:any*/;/* 9.3.3 Representing Relationships */function get_rels_path(file/*:string*/)/*:string*/{var n=file.lastIndexOf("/");return file.slice(0,n+1)+'_rels/'+file.slice(n+1)+".rels";}function parse_rels(data/*:?string*/,currentFilePath/*:string*/){var rels={"!id":{}};if(!data)return rels;if(currentFilePath.charAt(0)!=='/'){currentFilePath='/'+currentFilePath;}var hash={};(data.match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);/* 9.3.2.2 OPC_Relationships */if(y[0]==='<Relationship'){var rel={};rel.Type=y.Type;rel.Target=y.Target;rel.Id=y.Id;if(y.TargetMode)rel.TargetMode=y.TargetMode;var canonictarget=y.TargetMode==='External'?y.Target:resolve_path(y.Target,currentFilePath);rels[canonictarget]=rel;hash[y.Id]=rel;}});rels["!id"]=hash;return rels;}/* Open Document Format for Office Applications (OpenDocument) Version 1.2 */ /* Part 3 Section 4 Manifest File */var CT_ODS="application/vnd.oasis.opendocument.spreadsheet";function parse_manifest(d,opts){var str=xlml_normalize(d);var Rn;var FEtag;while(Rn=xlmlregex.exec(str))switch(Rn[3]){case'manifest':break;// 4.2 <manifest:manifest>
	case'file-entry':// 4.3 <manifest:file-entry>
	FEtag=parsexmltag(Rn[0],false);if(FEtag.path=='/'&&FEtag.type!==CT_ODS)throw new Error("This OpenDocument is not a spreadsheet");break;case'encryption-data':// 4.4 <manifest:encryption-data>
	case'algorithm':// 4.5 <manifest:algorithm>
	case'start-key-generation':// 4.6 <manifest:start-key-generation>
	case'key-derivation':// 4.7 <manifest:key-derivation>
	throw new Error("Unsupported ODS Encryption");default:if(opts&&opts.WTF)throw Rn;}}/* ECMA-376 Part II 11.1 Core Properties Part */ /* [MS-OSHARED] 2.3.3.2.[1-2].1 (PIDSI/PIDDSI) */var CORE_PROPS/*:Array<Array<string> >*/=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate",'date'],["dcterms:modified","ModifiedDate",'date']];var CORE_PROPS_REGEX/*:Array<RegExp>*/=/*#__PURE__*/function(){var r=new Array(CORE_PROPS.length);for(var i=0;i<CORE_PROPS.length;++i){var f=CORE_PROPS[i];var g="(?:"+f[0].slice(0,f[0].indexOf(":"))+":)"+f[0].slice(f[0].indexOf(":")+1);r[i]=new RegExp("<"+g+"[^>]*>([\\s\\S]*?)<\/"+g+">");}return r;}();function parse_core_props(data){var p={};data=utf8read(data);for(var i=0;i<CORE_PROPS.length;++i){var f=CORE_PROPS[i],cur=data.match(CORE_PROPS_REGEX[i]);if(cur!=null&&cur.length>0)p[f[1]]=unescapexml(cur[1]);if(f[2]==='date'&&p[f[1]])p[f[1]]=parseDate(p[f[1]]);}return p;}/* 15.2.12.3 Extended File Properties Part */ /* [MS-OSHARED] 2.3.3.2.[1-2].1 (PIDSI/PIDDSI) */var EXT_PROPS/*:Array<Array<string> >*/=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function load_props_pairs(HP/*:string|Array<Array<any>>*/,TOP,props,opts){var v=[];if(typeof HP=="string")v=parseVector(HP,opts);else for(var j=0;j<HP.length;++j)v=v.concat(HP[j].map(function(hp){return {v:hp};}));var parts=typeof TOP=="string"?parseVector(TOP,opts).map(function(x){return x.v;}):TOP;var idx=0,len=0;if(parts.length>0)for(var i=0;i!==v.length;i+=2){len=+v[i+1].v;switch(v[i].v){case"Worksheets":case"?????????":case"??????????":case"?????????? ??????????":case"??????????????????":case"?????????????? ??????????":case"Arbeitsbl??tter":case"??al????ma Sayfalar??":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de c??lculo":case"Planilhas":case"Regneark":case"Hojas de c??lculo":case"Werkbladen":props.Worksheets=len;props.SheetNames=parts.slice(idx,idx+len);break;case"Named Ranges":case"Rangos con nombre":case"??????????????????":case"Benannte Bereiche":case"Navngivne omr??der":props.NamedRanges=len;props.DefinedNames=parts.slice(idx,idx+len);break;case"Charts":case"Diagramme":props.Chartsheets=len;props.ChartNames=parts.slice(idx,idx+len);break;}idx+=len;}}function parse_ext_props(data,p,opts){var q={};if(!p)p={};data=utf8read(data);EXT_PROPS.forEach(function(f){var xml=(data.match(matchtag(f[0]))||[])[1];switch(f[2]){case"string":if(xml)p[f[1]]=unescapexml(xml);break;case"bool":p[f[1]]=xml==="true";break;case"raw":var cur=data.match(new RegExp("<"+f[0]+"[^>]*>([\\s\\S]*?)<\/"+f[0]+">"));if(cur&&cur.length>0)q[f[1]]=cur[1];break;}});if(q.HeadingPairs&&q.TitlesOfParts)load_props_pairs(q.HeadingPairs,q.TitlesOfParts,p,opts);return p;}/* 15.2.12.2 Custom File Properties Part */var custregex=/<[^>]+>[^<]*/g;function parse_cust_props(data/*:string*/,opts){var p={},name="";var m=data.match(custregex);if(m)for(var i=0;i!=m.length;++i){var x=m[i],y=parsexmltag(x);switch(y[0]){case'<?xml':break;case'<Properties':break;case'<property':name=unescapexml(y.name);break;case'</property>':name=null;break;default:if(x.indexOf('<vt:')===0){var toks=x.split('>');var type=toks[0].slice(4),text=toks[1];/* 22.4.2.32 (CT_Variant). Omit the binary types from 22.4 (Variant Types) */switch(type){case'lpstr':case'bstr':case'lpwstr':p[name]=unescapexml(text);break;case'bool':p[name]=parsexmlbool(text);break;case'i1':case'i2':case'i4':case'i8':case'int':case'uint':p[name]=parseInt(text,10);break;case'r4':case'r8':case'decimal':p[name]=parseFloat(text);break;case'filetime':case'date':p[name]=parseDate(text);break;case'cy':case'error':p[name]=unescapexml(text);break;default:if(type.slice(-1)=='/')break;if(opts.WTF&&typeof console!=='undefined')console.warn('Unexpected',x,type,toks);}}else if(x.slice(0,2)==="</");else if(opts.WTF)throw new Error(x);}}return p;}/* Common Name -> XLML Name */var XLMLDocPropsMap={Title:'Title',Subject:'Subject',Author:'Author',Keywords:'Keywords',Comments:'Description',LastAuthor:'LastAuthor',RevNumber:'Revision',Application:'AppName',/* TotalTime: 'TotalTime', */LastPrinted:'LastPrinted',CreatedDate:'Created',ModifiedDate:'LastSaved',/* Pages */ /* Words */ /* Characters */Category:'Category',/* PresentationFormat */Manager:'Manager',Company:'Company',/* Guid */ /* HyperlinkBase */ /* Bytes */ /* Lines */ /* Paragraphs */ /* CharactersWithSpaces */AppVersion:'Version',ContentStatus:'ContentStatus',/* NOTE: missing from schema */Identifier:'Identifier',/* NOTE: missing from schema */Language:'Language'/* NOTE: missing from schema */};var evert_XLMLDPM;function xlml_set_prop(Props,tag/*:string*/,val){if(!evert_XLMLDPM)evert_XLMLDPM=evert(XLMLDocPropsMap);tag=evert_XLMLDPM[tag]||tag;Props[tag]=val;}/* [MS-DTYP] 2.3.3 FILETIME */ /* [MS-OLEDS] 2.1.3 FILETIME (Packet Version) */ /* [MS-OLEPS] 2.8 FILETIME (Packet Version) */function parse_FILETIME(blob){var dwLowDateTime=blob.read_shift(4),dwHighDateTime=blob.read_shift(4);return new Date((dwHighDateTime/1e7*Math.pow(2,32)+dwLowDateTime/1e7-11644473600)*1000).toISOString().replace(/\.000/,"");}/* [MS-OSHARED] 2.3.3.1.4 Lpstr */function parse_lpstr(blob,type,pad/*:?number*/){var start=blob.l;var str=blob.read_shift(0,'lpstr-cp');if(pad)while(blob.l-start&3)++blob.l;return str;}/* [MS-OSHARED] 2.3.3.1.6 Lpwstr */function parse_lpwstr(blob,type,pad){var str=blob.read_shift(0,'lpwstr');if(pad)blob.l+=4-(str.length+1&3)&3;return str;}/* [MS-OSHARED] 2.3.3.1.11 VtString */ /* [MS-OSHARED] 2.3.3.1.12 VtUnalignedString */function parse_VtStringBase(blob,stringType,pad){if(stringType===0x1F/*VT_LPWSTR*/)return parse_lpwstr(blob);return parse_lpstr(blob,stringType,pad);}function parse_VtString(blob,t/*:number*/,pad/*:?boolean*/){return parse_VtStringBase(blob,t,pad===false?0:4);}function parse_VtUnalignedString(blob,t/*:number*/){if(!t)throw new Error("VtUnalignedString must have positive length");return parse_VtStringBase(blob,t,0);}/* [MS-OSHARED] 2.3.3.1.7 VtVecLpwstrValue */function parse_VtVecLpwstrValue(blob)/*:Array<string>*/{var length=blob.read_shift(4);var ret/*:Array<string>*/=[];for(var i=0;i!=length;++i){var start=blob.l;ret[i]=blob.read_shift(0,'lpwstr').replace(chr0,'');if(blob.l-start&0x02)blob.l+=2;}return ret;}/* [MS-OSHARED] 2.3.3.1.9 VtVecUnalignedLpstrValue */function parse_VtVecUnalignedLpstrValue(blob)/*:Array<string>*/{var length=blob.read_shift(4);var ret/*:Array<string>*/=[];for(var i=0;i!=length;++i)ret[i]=blob.read_shift(0,'lpstr-cp').replace(chr0,'');return ret;}/* [MS-OSHARED] 2.3.3.1.13 VtHeadingPair */function parse_VtHeadingPair(blob){var start=blob.l;var headingString=parse_TypedPropertyValue(blob,VT_USTR);if(blob[blob.l]==0x00&&blob[blob.l+1]==0x00&&blob.l-start&0x02)blob.l+=2;var headerParts=parse_TypedPropertyValue(blob,VT_I4);return [headingString,headerParts];}/* [MS-OSHARED] 2.3.3.1.14 VtVecHeadingPairValue */function parse_VtVecHeadingPairValue(blob){var cElements=blob.read_shift(4);var out=[];for(var i=0;i<cElements/2;++i)out.push(parse_VtHeadingPair(blob));return out;}/* [MS-OLEPS] 2.18.1 Dictionary (uses 2.17, 2.16) */function parse_dictionary(blob,CodePage){var cnt=blob.read_shift(4);var dict/*:{[number]:string}*/={}/*:any*/;for(var j=0;j!=cnt;++j){var pid=blob.read_shift(4);var len=blob.read_shift(4);dict[pid]=blob.read_shift(len,CodePage===0x4B0?'utf16le':'utf8').replace(chr0,'').replace(chr1,'!');if(CodePage===0x4B0&&len%2)blob.l+=2;}if(blob.l&3)blob.l=blob.l>>2+1<<2;return dict;}/* [MS-OLEPS] 2.9 BLOB */function parse_BLOB(blob){var size=blob.read_shift(4);var bytes=blob.slice(blob.l,blob.l+size);blob.l+=size;if((size&3)>0)blob.l+=4-(size&3)&3;return bytes;}/* [MS-OLEPS] 2.11 ClipboardData */function parse_ClipboardData(blob){// TODO
	var o={};o.Size=blob.read_shift(4);//o.Format = blob.read_shift(4);
	blob.l+=o.Size+3-(o.Size-1)%4;return o;}/* [MS-OLEPS] 2.15 TypedPropertyValue */function parse_TypedPropertyValue(blob,type/*:number*/,_opts)/*:any*/{var t=blob.read_shift(2),ret,opts=_opts||{};blob.l+=2;if(type!==VT_VARIANT)if(t!==type&&VT_CUSTOM.indexOf(type)===-1&&!((type&0xFFFE)==0x101E&&(t&0xFFFE)==0x101E))throw new Error('Expected type '+type+' saw '+t);switch(type===VT_VARIANT?t:type){case 0x02/*VT_I2*/:ret=blob.read_shift(2,'i');if(!opts.raw)blob.l+=2;return ret;case 0x03/*VT_I4*/:ret=blob.read_shift(4,'i');return ret;case 0x0B/*VT_BOOL*/:return blob.read_shift(4)!==0x0;case 0x13/*VT_UI4*/:ret=blob.read_shift(4);return ret;case 0x1E/*VT_LPSTR*/:return parse_lpstr(blob,t,4).replace(chr0,'');case 0x1F/*VT_LPWSTR*/:return parse_lpwstr(blob);case 0x40/*VT_FILETIME*/:return parse_FILETIME(blob);case 0x41/*VT_BLOB*/:return parse_BLOB(blob);case 0x47/*VT_CF*/:return parse_ClipboardData(blob);case 0x50/*VT_STRING*/:return parse_VtString(blob,t,!opts.raw).replace(chr0,'');case 0x51/*VT_USTR*/:return parse_VtUnalignedString(blob,t/*, 4*/).replace(chr0,'');case 0x100C/*VT_VECTOR|VT_VARIANT*/:return parse_VtVecHeadingPairValue(blob);case 0x101E/*VT_VECTOR|VT_LPSTR*/:case 0x101F/*VT_VECTOR|VT_LPWSTR*/:return t==0x101F?parse_VtVecLpwstrValue(blob):parse_VtVecUnalignedLpstrValue(blob);default:throw new Error("TypedPropertyValue unrecognized type "+type+" "+t);}}/* [MS-OLEPS] 2.20 PropertySet */function parse_PropertySet(blob,PIDSI){var start_addr=blob.l;var size=blob.read_shift(4);var NumProps=blob.read_shift(4);var Props=[],i=0;var CodePage=0;var Dictionary=-1,DictObj/*:{[number]:string}*/={}/*:any*/;for(i=0;i!=NumProps;++i){var PropID=blob.read_shift(4);var Offset=blob.read_shift(4);Props[i]=[PropID,Offset+start_addr];}Props.sort(function(x,y){return x[1]-y[1];});var PropH={};for(i=0;i!=NumProps;++i){if(blob.l!==Props[i][1]){var fail=true;if(i>0&&PIDSI)switch(PIDSI[Props[i-1][0]].t){case 0x02/*VT_I2*/:if(blob.l+2===Props[i][1]){blob.l+=2;fail=false;}break;case 0x50/*VT_STRING*/:if(blob.l<=Props[i][1]){blob.l=Props[i][1];fail=false;}break;case 0x100C/*VT_VECTOR|VT_VARIANT*/:if(blob.l<=Props[i][1]){blob.l=Props[i][1];fail=false;}break;}if((!PIDSI||i==0)&&blob.l<=Props[i][1]){fail=false;blob.l=Props[i][1];}if(fail)throw new Error("Read Error: Expected address "+Props[i][1]+' at '+blob.l+' :'+i);}if(PIDSI){var piddsi=PIDSI[Props[i][0]];PropH[piddsi.n]=parse_TypedPropertyValue(blob,piddsi.t,{raw:true});if(piddsi.p==='version')PropH[piddsi.n]=String(PropH[piddsi.n]>>16)+"."+("0000"+String(PropH[piddsi.n]&0xFFFF)).slice(-4);if(piddsi.n=="CodePage")switch(PropH[piddsi.n]){case 0:PropH[piddsi.n]=1252;/* falls through */case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 10000:case 1200:case 1201:case 1252:case 65000:case-536:case 65001:case-535:set_cp(CodePage=PropH[piddsi.n]>>>0&0xFFFF);break;default:throw new Error("Unsupported CodePage: "+PropH[piddsi.n]);}}else {if(Props[i][0]===0x1){CodePage=PropH.CodePage=parse_TypedPropertyValue(blob,VT_I2)/*:number*/;set_cp(CodePage);if(Dictionary!==-1){var oldpos=blob.l;blob.l=Props[Dictionary][1];DictObj=parse_dictionary(blob,CodePage);blob.l=oldpos;}}else if(Props[i][0]===0){if(CodePage===0){Dictionary=i;blob.l=Props[i+1][1];continue;}DictObj=parse_dictionary(blob,CodePage);}else {var name=DictObj[Props[i][0]];var val;/* [MS-OSHARED] 2.3.3.2.3.1.2 + PROPVARIANT */switch(blob[blob.l]){case 0x41/*VT_BLOB*/:blob.l+=4;val=parse_BLOB(blob);break;case 0x1E/*VT_LPSTR*/:blob.l+=4;val=parse_VtString(blob,blob[blob.l-4]).replace(/\u0000+$/,"");break;case 0x1F/*VT_LPWSTR*/:blob.l+=4;val=parse_VtString(blob,blob[blob.l-4]).replace(/\u0000+$/,"");break;case 0x03/*VT_I4*/:blob.l+=4;val=blob.read_shift(4,'i');break;case 0x13/*VT_UI4*/:blob.l+=4;val=blob.read_shift(4);break;case 0x05/*VT_R8*/:blob.l+=4;val=blob.read_shift(8,'f');break;case 0x0B/*VT_BOOL*/:blob.l+=4;val=parsebool(blob,4);break;case 0x40/*VT_FILETIME*/:blob.l+=4;val=parseDate(parse_FILETIME(blob));break;default:throw new Error("unparsed value: "+blob[blob.l]);}PropH[name]=val;}}}blob.l=start_addr+size;/* step ahead to skip padding */return PropH;}/* [MS-OLEPS] 2.21 PropertySetStream */function parse_PropertySetStream(file,PIDSI,clsid){var blob=file.content;if(!blob)return {}/*:any*/;prep_blob(blob,0);var NumSets,FMTID0,FMTID1,Offset0,Offset1=0;blob.chk('feff','Byte Order: ');/*var vers = */blob.read_shift(2);// TODO: check version
	var SystemIdentifier=blob.read_shift(4);var CLSID=blob.read_shift(16);if(CLSID!==CFB.utils.consts.HEADER_CLSID&&CLSID!==clsid)throw new Error("Bad PropertySet CLSID "+CLSID);NumSets=blob.read_shift(4);if(NumSets!==1&&NumSets!==2)throw new Error("Unrecognized #Sets: "+NumSets);FMTID0=blob.read_shift(16);Offset0=blob.read_shift(4);if(NumSets===1&&Offset0!==blob.l)throw new Error("Length mismatch: "+Offset0+" !== "+blob.l);else if(NumSets===2){FMTID1=blob.read_shift(16);Offset1=blob.read_shift(4);}var PSet0=parse_PropertySet(blob,PIDSI);var rval={SystemIdentifier:SystemIdentifier}/*:any*/;for(var y in PSet0)rval[y]=PSet0[y];//rval.blob = blob;
	rval.FMTID=FMTID0;//rval.PSet0 = PSet0;
	if(NumSets===1)return rval;if(Offset1-blob.l==2)blob.l+=2;if(blob.l!==Offset1)throw new Error("Length mismatch 2: "+blob.l+" !== "+Offset1);var PSet1;try{PSet1=parse_PropertySet(blob,null);}catch(e){/* empty */}for(y in PSet1)rval[y]=PSet1[y];rval.FMTID=[FMTID0,FMTID1];// TODO: verify FMTID0/1
	return rval;}function parsenoop2(blob,length){blob.read_shift(length);return null;}function parslurp(blob,length,cb){var arr=[],target=blob.l+length;while(blob.l<target)arr.push(cb(blob,target-blob.l));if(target!==blob.l)throw new Error("Slurp error");return arr;}function parsebool(blob,length/*:number*/){return blob.read_shift(length)===0x1;}function parseuint16(blob/*::, length:?number, opts:?any*/){return blob.read_shift(2,'u');}function parseuint16a(blob,length/*:: :?number, opts:?any*/){return parslurp(blob,length,parseuint16);}/* --- 2.5 Structures --- */ /* [MS-XLS] 2.5.10 Bes (boolean or error) */function parse_Bes(blob/*::, length*/){var v=blob.read_shift(1),t=blob.read_shift(1);return t===0x01?v:v===0x01;}/* [MS-XLS] 2.5.240 ShortXLUnicodeString */function parse_ShortXLUnicodeString(blob,length,opts){var cch=blob.read_shift(opts&&opts.biff>=12?2:1);var encoding='sbcs-cont';if(opts&&opts.biff>=8);if(!opts||opts.biff==8){var fHighByte=blob.read_shift(1);if(fHighByte){encoding='dbcs-cont';}}else if(opts.biff==12){encoding='wstr';}if(opts.biff>=2&&opts.biff<=5)encoding='cpstr';var o=cch?blob.read_shift(cch,encoding):"";return o;}/* 2.5.293 XLUnicodeRichExtendedString */function parse_XLUnicodeRichExtendedString(blob){var cch=blob.read_shift(2),flags=blob.read_shift(1);var/*fHighByte = flags & 0x1,*/fExtSt=flags&0x4,fRichSt=flags&0x8;var width=1+(flags&0x1);// 0x0 -> utf8, 0x1 -> dbcs
	var cRun=0,cbExtRst;var z={};if(fRichSt)cRun=blob.read_shift(2);if(fExtSt)cbExtRst=blob.read_shift(4);var encoding=width==2?'dbcs-cont':'sbcs-cont';var msg=cch===0?"":blob.read_shift(cch,encoding);if(fRichSt)blob.l+=4*cRun;//TODO: parse this
	if(fExtSt)blob.l+=cbExtRst;//TODO: parse this
	z.t=msg;if(!fRichSt){z.raw="<t>"+z.t+"</t>";z.r=z.t;}return z;}/* 2.5.296 XLUnicodeStringNoCch */function parse_XLUnicodeStringNoCch(blob,cch,opts){var retval;if(opts){if(opts.biff>=2&&opts.biff<=5)return blob.read_shift(cch,'cpstr');if(opts.biff>=12)return blob.read_shift(cch,'dbcs-cont');}var fHighByte=blob.read_shift(1);if(fHighByte===0){retval=blob.read_shift(cch,'sbcs-cont');}else {retval=blob.read_shift(cch,'dbcs-cont');}return retval;}/* 2.5.294 XLUnicodeString */function parse_XLUnicodeString(blob,length,opts){var cch=blob.read_shift(opts&&opts.biff==2?1:2);if(cch===0){blob.l++;return "";}return parse_XLUnicodeStringNoCch(blob,cch,opts);}/* BIFF5 override */function parse_XLUnicodeString2(blob,length,opts){if(opts.biff>5)return parse_XLUnicodeString(blob,length,opts);var cch=blob.read_shift(1);if(cch===0){blob.l++;return "";}return blob.read_shift(cch,opts.biff<=4||!blob.lens?'cpstr':'sbcs-cont');}/* [MS-XLS] 2.5.61 ControlInfo */function parse_ControlInfo(blob/*::, length, opts*/){var flags=blob.read_shift(1);blob.l++;var accel=blob.read_shift(2);blob.l+=2;return [flags,accel];}/* [MS-OSHARED] 2.3.7.6 URLMoniker TODO: flags */function parse_URLMoniker(blob/*::, length, opts*/){var len=blob.read_shift(4),start=blob.l;var extra=false;if(len>24){/* look ahead */blob.l+=len-24;if(blob.read_shift(16)==="795881f43b1d7f48af2c825dc4852763")extra=true;blob.l=start;}var url=blob.read_shift((extra?len-24:len)>>1,'utf16le').replace(chr0,"");if(extra)blob.l+=24;return url;}/* [MS-OSHARED] 2.3.7.8 FileMoniker TODO: all fields */function parse_FileMoniker(blob/*::, length*/){var cAnti=blob.read_shift(2);var preamble="";while(cAnti-->0)preamble+="../";var ansiPath=blob.read_shift(0,'lpstr-ansi');blob.l+=2;//var endServer = blob.read_shift(2);
	if(blob.read_shift(2)!=0xDEAD)throw new Error("Bad FileMoniker");var sz=blob.read_shift(4);if(sz===0)return preamble+ansiPath.replace(/\\/g,"/");var bytes=blob.read_shift(4);if(blob.read_shift(2)!=3)throw new Error("Bad FileMoniker");var unicodePath=blob.read_shift(bytes>>1,'utf16le').replace(chr0,"");return preamble+unicodePath;}/* [MS-OSHARED] 2.3.7.2 HyperlinkMoniker TODO: all the monikers */function parse_HyperlinkMoniker(blob,length){var clsid=blob.read_shift(16);switch(clsid){case"e0c9ea79f9bace118c8200aa004ba90b":return parse_URLMoniker(blob);case"0303000000000000c000000000000046":return parse_FileMoniker(blob);default:throw new Error("Unsupported Moniker "+clsid);}}/* [MS-OSHARED] 2.3.7.9 HyperlinkString */function parse_HyperlinkString(blob/*::, length*/){var len=blob.read_shift(4);var o=len>0?blob.read_shift(len,'utf16le').replace(chr0,""):"";return o;}/* [MS-OSHARED] 2.3.7.1 Hyperlink Object */function parse_Hyperlink(blob,length)/*:Hyperlink*/{var end=blob.l+length;var sVer=blob.read_shift(4);if(sVer!==2)throw new Error("Unrecognized streamVersion: "+sVer);var flags=blob.read_shift(2);blob.l+=2;var displayName,targetFrameName,moniker,oleMoniker,Loc="",guid,fileTime;if(flags&0x0010)displayName=parse_HyperlinkString(blob,end-blob.l);if(flags&0x0080)targetFrameName=parse_HyperlinkString(blob,end-blob.l);if((flags&0x0101)===0x0101)moniker=parse_HyperlinkString(blob,end-blob.l);if((flags&0x0101)===0x0001)oleMoniker=parse_HyperlinkMoniker(blob,end-blob.l);if(flags&0x0008)Loc=parse_HyperlinkString(blob,end-blob.l);if(flags&0x0020)guid=blob.read_shift(16);if(flags&0x0040)fileTime=parse_FILETIME(blob/*, 8*/);blob.l=end;var target=targetFrameName||moniker||oleMoniker||"";if(target&&Loc)target+="#"+Loc;if(!target)target="#"+Loc;if(flags&0x0002&&target.charAt(0)=="/"&&target.charAt(1)!="/")target="file://"+target;var out={Target:target}/*:any*/;if(guid)out.guid=guid;if(fileTime)out.time=fileTime;if(displayName)out.Tooltip=displayName;return out;}/* 2.5.178 LongRGBA */function parse_LongRGBA(blob/*::, length*/){var r=blob.read_shift(1),g=blob.read_shift(1),b=blob.read_shift(1),a=blob.read_shift(1);return [r,g,b,a];}/* 2.5.177 LongRGB */function parse_LongRGB(blob,length){var x=parse_LongRGBA(blob);x[3]=0;return x;}/* [MS-XLS] 2.5.19 */function parse_XLSCell(blob/*::, length*/)/*:Cell*/{var rw=blob.read_shift(2);// 0-indexed
	var col=blob.read_shift(2);var ixfe=blob.read_shift(2);return {r:rw,c:col,ixfe:ixfe}/*:any*/;}/* [MS-XLS] 2.5.134 */function parse_frtHeader(blob){var rt=blob.read_shift(2);var flags=blob.read_shift(2);// TODO: parse these flags
	blob.l+=8;return {type:rt,flags:flags};}function parse_OptXLUnicodeString(blob,length,opts){return length===0?"":parse_XLUnicodeString2(blob,length,opts);}/* [MS-XLS] 2.5.344 */function parse_XTI(blob,length,opts){var w=opts.biff>8?4:2;var iSupBook=blob.read_shift(w),itabFirst=blob.read_shift(w,'i'),itabLast=blob.read_shift(w,'i');return [iSupBook,itabFirst,itabLast];}/* [MS-XLS] 2.5.218 */function parse_RkRec(blob){var ixfe=blob.read_shift(2);var RK=parse_RkNumber(blob);return [ixfe,RK];}/* [MS-XLS] 2.5.1 */function parse_AddinUdf(blob,length,opts){blob.l+=4;length-=4;var l=blob.l+length;var udfName=parse_ShortXLUnicodeString(blob,length,opts);var cb=blob.read_shift(2);l-=blob.l;if(cb!==l)throw new Error("Malformed AddinUdf: padding = "+l+" != "+cb);blob.l+=cb;return udfName;}/* [MS-XLS] 2.5.209 TODO: Check sizes */function parse_Ref8U(blob/*::, length*/){var rwFirst=blob.read_shift(2);var rwLast=blob.read_shift(2);var colFirst=blob.read_shift(2);var colLast=blob.read_shift(2);return {s:{c:colFirst,r:rwFirst},e:{c:colLast,r:rwLast}};}/* [MS-XLS] 2.5.211 */function parse_RefU(blob/*::, length*/){var rwFirst=blob.read_shift(2);var rwLast=blob.read_shift(2);var colFirst=blob.read_shift(1);var colLast=blob.read_shift(1);return {s:{c:colFirst,r:rwFirst},e:{c:colLast,r:rwLast}};}/* [MS-XLS] 2.5.207 */var parse_Ref=parse_RefU;/* [MS-XLS] 2.5.143 */function parse_FtCmo(blob/*::, length*/){blob.l+=4;var ot=blob.read_shift(2);var id=blob.read_shift(2);var flags=blob.read_shift(2);blob.l+=12;return [id,ot,flags];}/* [MS-XLS] 2.5.149 */function parse_FtNts(blob){var out={};blob.l+=4;blob.l+=16;// GUID TODO
	out.fSharedNote=blob.read_shift(2);blob.l+=4;return out;}/* [MS-XLS] 2.5.142 */function parse_FtCf(blob){var out={};blob.l+=4;blob.cf=blob.read_shift(2);return out;}/* [MS-XLS] 2.5.140 - 2.5.154 and friends */function parse_FtSkip(blob){blob.l+=2;blob.l+=blob.read_shift(2);}var FtTab={/*::[*/0x00/*::]*/:parse_FtSkip,/* FtEnd */ /*::[*/0x04/*::]*/:parse_FtSkip,/* FtMacro */ /*::[*/0x05/*::]*/:parse_FtSkip,/* FtButton */ /*::[*/0x06/*::]*/:parse_FtSkip,/* FtGmo */ /*::[*/0x07/*::]*/:parse_FtCf,/* FtCf */ /*::[*/0x08/*::]*/:parse_FtSkip,/* FtPioGrbit */ /*::[*/0x09/*::]*/:parse_FtSkip,/* FtPictFmla */ /*::[*/0x0A/*::]*/:parse_FtSkip,/* FtCbls */ /*::[*/0x0B/*::]*/:parse_FtSkip,/* FtRbo */ /*::[*/0x0C/*::]*/:parse_FtSkip,/* FtSbs */ /*::[*/0x0D/*::]*/:parse_FtNts,/* FtNts */ /*::[*/0x0E/*::]*/:parse_FtSkip,/* FtSbsFmla */ /*::[*/0x0F/*::]*/:parse_FtSkip,/* FtGboData */ /*::[*/0x10/*::]*/:parse_FtSkip,/* FtEdoData */ /*::[*/0x11/*::]*/:parse_FtSkip,/* FtRboData */ /*::[*/0x12/*::]*/:parse_FtSkip,/* FtCblsData */ /*::[*/0x13/*::]*/:parse_FtSkip,/* FtLbsData */ /*::[*/0x14/*::]*/:parse_FtSkip,/* FtCblsFmla */ /*::[*/0x15/*::]*/:parse_FtCmo};function parse_FtArray(blob,length/*::, ot*/){var tgt=blob.l+length;var fts=[];while(blob.l<tgt){var ft=blob.read_shift(2);blob.l-=2;try{fts.push(FtTab[ft](blob,tgt-blob.l));}catch(e){blob.l=tgt;return fts;}}if(blob.l!=tgt)blob.l=tgt;//throw new Error("bad Object Ft-sequence");
	return fts;}/* --- 2.4 Records --- */ /* [MS-XLS] 2.4.21 */function parse_BOF(blob,length){var o={BIFFVer:0,dt:0};o.BIFFVer=blob.read_shift(2);length-=2;if(length>=2){o.dt=blob.read_shift(2);blob.l-=2;}switch(o.BIFFVer){case 0x0600:/* BIFF8 */case 0x0500:/* BIFF5 */case 0x0400:/* BIFF4 */case 0x0300:/* BIFF3 */case 0x0200:/* BIFF2 */case 0x0002:case 0x0007:/* BIFF2 */break;default:if(length>6)throw new Error("Unexpected BIFF Ver "+o.BIFFVer);}blob.read_shift(length);return o;}/* [MS-XLS] 2.4.146 */function parse_InterfaceHdr(blob,length){if(length===0)return 0x04b0;if(blob.read_shift(2)!==0x04b0);return 0x04b0;}/* [MS-XLS] 2.4.349 */function parse_WriteAccess(blob,length,opts){if(opts.enc){blob.l+=length;return "";}var l=blob.l;// TODO: make sure XLUnicodeString doesnt overrun
	var UserName=parse_XLUnicodeString2(blob,0,opts);blob.read_shift(length+l-blob.l);return UserName;}/* [MS-XLS] 2.4.351 */function parse_WsBool(blob,length,opts){var flags=opts&&opts.biff==8||length==2?blob.read_shift(2):(blob.l+=length,0);return {fDialog:flags&0x10,fBelow:flags&0x40,fRight:flags&0x80};}/* [MS-XLS] 2.4.28 */function parse_BoundSheet8(blob,length,opts){var pos=blob.read_shift(4);var hidden=blob.read_shift(1)&0x03;var dt=blob.read_shift(1);switch(dt){case 0:dt='Worksheet';break;case 1:dt='Macrosheet';break;case 2:dt='Chartsheet';break;case 6:dt='VBAModule';break;}var name=parse_ShortXLUnicodeString(blob,0,opts);if(name.length===0)name="Sheet1";return {pos:pos,hs:hidden,dt:dt,name:name};}/* [MS-XLS] 2.4.265 TODO */function parse_SST(blob,length)/*:SST*/{var end=blob.l+length;var cnt=blob.read_shift(4);var ucnt=blob.read_shift(4);var strs/*:SST*/=[]/*:any*/;for(var i=0;i!=ucnt&&blob.l<end;++i){strs.push(parse_XLUnicodeRichExtendedString(blob));}strs.Count=cnt;strs.Unique=ucnt;return strs;}/* [MS-XLS] 2.4.107 */function parse_ExtSST(blob,length){var extsst={};extsst.dsst=blob.read_shift(2);blob.l+=length-2;return extsst;}/* [MS-XLS] 2.4.221 TODO: check BIFF2-4 */function parse_Row(blob){var z={}/*:any*/;z.r=blob.read_shift(2);z.c=blob.read_shift(2);z.cnt=blob.read_shift(2)-z.c;var miyRw=blob.read_shift(2);blob.l+=4;// reserved(2), unused(2)
	var flags=blob.read_shift(1);// various flags
	blob.l+=3;// reserved(8), ixfe(12), flags(4)
	if(flags&0x07)z.level=flags&0x07;// collapsed: flags & 0x10
	if(flags&0x20)z.hidden=true;if(flags&0x40)z.hpt=miyRw/20;return z;}/* [MS-XLS] 2.4.125 */function parse_ForceFullCalculation(blob){var header=parse_frtHeader(blob);if(header.type!=0x08A3)throw new Error("Invalid Future Record "+header.type);var fullcalc=blob.read_shift(4);return fullcalc!==0x0;}/* [MS-XLS] 2.4.215 rt */function parse_RecalcId(blob){blob.read_shift(2);return blob.read_shift(4);}/* [MS-XLS] 2.4.87 */function parse_DefaultRowHeight(blob,length,opts){var f=0;if(!(opts&&opts.biff==2)){f=blob.read_shift(2);}var miyRw=blob.read_shift(2);if(opts&&opts.biff==2){f=1-(miyRw>>15);miyRw&=0x7fff;}var fl={Unsynced:f&1,DyZero:(f&2)>>1,ExAsc:(f&4)>>2,ExDsc:(f&8)>>3};return [fl,miyRw];}/* [MS-XLS] 2.4.345 TODO */function parse_Window1(blob){var xWn=blob.read_shift(2),yWn=blob.read_shift(2),dxWn=blob.read_shift(2),dyWn=blob.read_shift(2);var flags=blob.read_shift(2),iTabCur=blob.read_shift(2),iTabFirst=blob.read_shift(2);var ctabSel=blob.read_shift(2),wTabRatio=blob.read_shift(2);return {Pos:[xWn,yWn],Dim:[dxWn,dyWn],Flags:flags,CurTab:iTabCur,FirstTab:iTabFirst,Selected:ctabSel,TabRatio:wTabRatio};}/* [MS-XLS] 2.4.346 TODO */function parse_Window2(blob,length,opts){if(opts&&opts.biff>=2&&opts.biff<5)return {};var f=blob.read_shift(2);return {RTL:f&0x40};}/* [MS-XLS] 2.4.189 TODO */function/*blob, length, opts*/parse_Pane(){}/* [MS-XLS] 2.4.122 TODO */function parse_Font(blob,length,opts){var o/*:any*/={dyHeight:blob.read_shift(2),fl:blob.read_shift(2)};switch(opts&&opts.biff||8){case 2:break;case 3:case 4:blob.l+=2;break;default:blob.l+=10;break;}o.name=parse_ShortXLUnicodeString(blob,0,opts);return o;}/* [MS-XLS] 2.4.149 */function parse_LabelSst(blob){var cell=parse_XLSCell(blob);cell.isst=blob.read_shift(4);return cell;}/* [MS-XLS] 2.4.148 */function parse_Label(blob,length,opts){if(opts.biffguess&&opts.biff==2)opts.biff=5;var target=blob.l+length;var cell=parse_XLSCell(blob);if(opts.biff==2)blob.l++;var str=parse_XLUnicodeString(blob,target-blob.l,opts);cell.val=str;return cell;}/* [MS-XLS] 2.4.126 Number Formats */function parse_Format(blob,length,opts){var numFmtId=blob.read_shift(2);var fmtstr=parse_XLUnicodeString2(blob,0,opts);return [numFmtId,fmtstr];}var parse_BIFF2Format=parse_XLUnicodeString2;/* [MS-XLS] 2.4.90 */function parse_Dimensions(blob,length,opts){var end=blob.l+length;var w=opts.biff==8||!opts.biff?4:2;var r=blob.read_shift(w),R=blob.read_shift(w);var c=blob.read_shift(2),C=blob.read_shift(2);blob.l=end;return {s:{r:r,c:c},e:{r:R,c:C}};}/* [MS-XLS] 2.4.220 */function parse_RK(blob){var rw=blob.read_shift(2),col=blob.read_shift(2);var rkrec=parse_RkRec(blob);return {r:rw,c:col,ixfe:rkrec[0],rknum:rkrec[1]};}/* [MS-XLS] 2.4.175 */function parse_MulRk(blob,length){var target=blob.l+length-2;var rw=blob.read_shift(2),col=blob.read_shift(2);var rkrecs=[];while(blob.l<target)rkrecs.push(parse_RkRec(blob));if(blob.l!==target)throw new Error("MulRK read error");var lastcol=blob.read_shift(2);if(rkrecs.length!=lastcol-col+1)throw new Error("MulRK length mismatch");return {r:rw,c:col,C:lastcol,rkrec:rkrecs};}/* [MS-XLS] 2.4.174 */function parse_MulBlank(blob,length){var target=blob.l+length-2;var rw=blob.read_shift(2),col=blob.read_shift(2);var ixfes=[];while(blob.l<target)ixfes.push(blob.read_shift(2));if(blob.l!==target)throw new Error("MulBlank read error");var lastcol=blob.read_shift(2);if(ixfes.length!=lastcol-col+1)throw new Error("MulBlank length mismatch");return {r:rw,c:col,C:lastcol,ixfe:ixfes};}/* [MS-XLS] 2.5.20 2.5.249 TODO: interpret values here */function parse_CellStyleXF(blob,length,style,opts){var o={};var a=blob.read_shift(4),b=blob.read_shift(4);var c=blob.read_shift(4),d=blob.read_shift(2);o.patternType=XLSFillPattern[c>>26];if(!opts.cellStyles)return o;o.alc=a&0x07;o.fWrap=a>>3&0x01;o.alcV=a>>4&0x07;o.fJustLast=a>>7&0x01;o.trot=a>>8&0xFF;o.cIndent=a>>16&0x0F;o.fShrinkToFit=a>>20&0x01;o.iReadOrder=a>>22&0x02;o.fAtrNum=a>>26&0x01;o.fAtrFnt=a>>27&0x01;o.fAtrAlc=a>>28&0x01;o.fAtrBdr=a>>29&0x01;o.fAtrPat=a>>30&0x01;o.fAtrProt=a>>31&0x01;o.dgLeft=b&0x0F;o.dgRight=b>>4&0x0F;o.dgTop=b>>8&0x0F;o.dgBottom=b>>12&0x0F;o.icvLeft=b>>16&0x7F;o.icvRight=b>>23&0x7F;o.grbitDiag=b>>30&0x03;o.icvTop=c&0x7F;o.icvBottom=c>>7&0x7F;o.icvDiag=c>>14&0x7F;o.dgDiag=c>>21&0x0F;o.icvFore=d&0x7F;o.icvBack=d>>7&0x7F;o.fsxButton=d>>14&0x01;return o;}//function parse_CellXF(blob, length, opts) {return parse_CellStyleXF(blob,length,0, opts);}
	//function parse_StyleXF(blob, length, opts) {return parse_CellStyleXF(blob,length,1, opts);}
	/* [MS-XLS] 2.4.353 TODO: actually do this right */function parse_XF(blob,length,opts){var o={};o.ifnt=blob.read_shift(2);o.numFmtId=blob.read_shift(2);o.flags=blob.read_shift(2);o.fStyle=o.flags>>2&0x01;length-=6;o.data=parse_CellStyleXF(blob,length,o.fStyle,opts);return o;}/* [MS-XLS] 2.4.134 */function parse_Guts(blob){blob.l+=4;var out=[blob.read_shift(2),blob.read_shift(2)];if(out[0]!==0)out[0]--;if(out[1]!==0)out[1]--;if(out[0]>7||out[1]>7)throw new Error("Bad Gutters: "+out.join("|"));return out;}/* [MS-XLS] 2.4.24 */function parse_BoolErr(blob,length,opts){var cell=parse_XLSCell(blob);if(opts.biff==2||length==9)++blob.l;var val=parse_Bes(blob);cell.val=val;cell.t=val===true||val===false?'b':'e';return cell;}/* [MS-XLS] 2.4.180 Number */function parse_Number(blob,length,opts){if(opts.biffguess&&opts.biff==2)opts.biff=5;var cell=parse_XLSCell(blob);var xnum=parse_Xnum(blob);cell.val=xnum;return cell;}var parse_XLHeaderFooter=parse_OptXLUnicodeString;// TODO: parse 2.4.136
	/* [MS-XLS] 2.4.271 */function parse_SupBook(blob,length,opts){var end=blob.l+length;var ctab=blob.read_shift(2);var cch=blob.read_shift(2);opts.sbcch=cch;if(cch==0x0401||cch==0x3A01)return [cch,ctab];if(cch<0x01||cch>0xff)throw new Error("Unexpected SupBook type: "+cch);var virtPath=parse_XLUnicodeStringNoCch(blob,cch);/* TODO: 2.5.277 Virtual Path */var rgst=[];while(end>blob.l)rgst.push(parse_XLUnicodeString(blob));return [cch,ctab,virtPath,rgst];}/* [MS-XLS] 2.4.105 TODO */function parse_ExternName(blob,length,opts){var flags=blob.read_shift(2);var body;var o={fBuiltIn:flags&0x01,fWantAdvise:flags>>>1&0x01,fWantPict:flags>>>2&0x01,fOle:flags>>>3&0x01,fOleLink:flags>>>4&0x01,cf:flags>>>5&0x3FF,fIcon:flags>>>15&0x01}/*:any*/;if(opts.sbcch===0x3A01)body=parse_AddinUdf(blob,length-2,opts);//else throw new Error("unsupported SupBook cch: " + opts.sbcch);
	o.body=body||blob.read_shift(length-2);if(typeof body==="string")o.Name=body;return o;}/* [MS-XLS] 2.4.150 TODO */var XLSLblBuiltIn=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"];function parse_Lbl(blob,length,opts){var target=blob.l+length;var flags=blob.read_shift(2);var chKey=blob.read_shift(1);var cch=blob.read_shift(1);var cce=blob.read_shift(opts&&opts.biff==2?1:2);var itab=0;if(!opts||opts.biff>=5){if(opts.biff!=5)blob.l+=2;itab=blob.read_shift(2);if(opts.biff==5)blob.l+=2;blob.l+=4;}var name=parse_XLUnicodeStringNoCch(blob,cch,opts);if(flags&0x20)name=XLSLblBuiltIn[name.charCodeAt(0)];var npflen=target-blob.l;if(opts&&opts.biff==2)--npflen;/*jshint -W018 */var rgce=target==blob.l||cce===0||!(npflen>0)?[]:parse_NameParsedFormula(blob,npflen,opts,cce);/*jshint +W018 */return {chKey:chKey,Name:name,itab:itab,rgce:rgce};}/* [MS-XLS] 2.4.106 TODO: verify filename encoding */function parse_ExternSheet(blob,length,opts){if(opts.biff<8)return parse_BIFF5ExternSheet(blob,length,opts);var o=[],target=blob.l+length,len=blob.read_shift(opts.biff>8?4:2);while(len--!==0)o.push(parse_XTI(blob,opts.biff>8?12:6,opts));// [iSupBook, itabFirst, itabLast];
	if(blob.l!=target)throw new Error("Bad ExternSheet: "+blob.l+" != "+target);return o;}function parse_BIFF5ExternSheet(blob,length,opts){if(blob[blob.l+1]==0x03)blob[blob.l]++;var o=parse_ShortXLUnicodeString(blob,length,opts);return o.charCodeAt(0)==0x03?o.slice(1):o;}/* [MS-XLS] 2.4.176 TODO: check older biff */function parse_NameCmt(blob,length,opts){if(opts.biff<8){blob.l+=length;return;}var cchName=blob.read_shift(2);var cchComment=blob.read_shift(2);var name=parse_XLUnicodeStringNoCch(blob,cchName,opts);var comment=parse_XLUnicodeStringNoCch(blob,cchComment,opts);return [name,comment];}/* [MS-XLS] 2.4.260 */function parse_ShrFmla(blob,length,opts){var ref=parse_RefU(blob);blob.l++;var cUse=blob.read_shift(1);length-=8;return [parse_SharedParsedFormula(blob,length,opts),cUse,ref];}/* [MS-XLS] 2.4.4 TODO */function parse_Array(blob,length,opts){var ref=parse_Ref(blob);/* TODO: fAlwaysCalc */switch(opts.biff){case 2:blob.l++;length-=7;break;case 3:case 4:blob.l+=2;length-=8;break;default:blob.l+=6;length-=12;}return [ref,parse_ArrayParsedFormula(blob,length,opts)];}/* [MS-XLS] 2.4.173 */function parse_MTRSettings(blob){var fMTREnabled=blob.read_shift(4)!==0x00;var fUserSetThreadCount=blob.read_shift(4)!==0x00;var cUserThreadCount=blob.read_shift(4);return [fMTREnabled,fUserSetThreadCount,cUserThreadCount];}/* [MS-XLS] 2.5.186 TODO: BIFF5 */function parse_NoteSh(blob,length,opts){if(opts.biff<8)return;var row=blob.read_shift(2),col=blob.read_shift(2);var flags=blob.read_shift(2),idObj=blob.read_shift(2);var stAuthor=parse_XLUnicodeString2(blob,0,opts);if(opts.biff<8)blob.read_shift(1);return [{r:row,c:col},stAuthor,idObj,flags];}/* [MS-XLS] 2.4.179 */function parse_Note(blob,length,opts){/* TODO: Support revisions */return parse_NoteSh(blob,length,opts);}/* [MS-XLS] 2.4.168 */function parse_MergeCells(blob,length)/*:Array<Range>*/{var merges/*:Array<Range>*/=[];var cmcs=blob.read_shift(2);while(cmcs--)merges.push(parse_Ref8U(blob));return merges;}/* [MS-XLS] 2.4.181 TODO: parse all the things! */function parse_Obj(blob,length,opts){if(opts&&opts.biff<8)return parse_BIFF5Obj(blob,length,opts);var cmo=parse_FtCmo(blob);// id, ot, flags
	var fts=parse_FtArray(blob,length-22,cmo[1]);return {cmo:cmo,ft:fts};}/* from older spec */var parse_BIFF5OT={0x08:function(blob,length){var tgt=blob.l+length;blob.l+=10;// todo
	var cf=blob.read_shift(2);blob.l+=4;blob.l+=2;//var cbPictFmla = blob.read_shift(2);
	blob.l+=2;blob.l+=2;//var grbit = blob.read_shift(2);
	blob.l+=4;var cchName=blob.read_shift(1);blob.l+=cchName;// TODO: stName
	blob.l=tgt;// TODO: fmla
	return {fmt:cf};}};function parse_BIFF5Obj(blob,length,opts){blob.l+=4;//var cnt = blob.read_shift(4);
	var ot=blob.read_shift(2);var id=blob.read_shift(2);var grbit=blob.read_shift(2);blob.l+=2;//var colL = blob.read_shift(2);
	blob.l+=2;//var dxL = blob.read_shift(2);
	blob.l+=2;//var rwT = blob.read_shift(2);
	blob.l+=2;//var dyT = blob.read_shift(2);
	blob.l+=2;//var colR = blob.read_shift(2);
	blob.l+=2;//var dxR = blob.read_shift(2);
	blob.l+=2;//var rwB = blob.read_shift(2);
	blob.l+=2;//var dyB = blob.read_shift(2);
	blob.l+=2;//var cbMacro = blob.read_shift(2);
	blob.l+=6;length-=36;var fts=[];fts.push((parse_BIFF5OT[ot]||parsenoop)(blob,length,opts));return {cmo:[id,ot,grbit],ft:fts};}/* [MS-XLS] 2.4.329 TODO: parse properly */function parse_TxO(blob,length,opts){var s=blob.l;var texts="";try{blob.l+=4;var ot=(opts.lastobj||{cmo:[0,0]}).cmo[1];var controlInfo;// eslint-disable-line no-unused-vars
	if([0,5,7,11,12,14].indexOf(ot)==-1)blob.l+=6;else controlInfo=parse_ControlInfo(blob,6,opts);// eslint-disable-line no-unused-vars
	var cchText=blob.read_shift(2);/*var cbRuns = */blob.read_shift(2);/*var ifntEmpty = */parseuint16(blob,2);var len=blob.read_shift(2);blob.l+=len;//var fmla = parse_ObjFmla(blob, s + length - blob.l);
	for(var i=1;i<blob.lens.length-1;++i){if(blob.l-s!=blob.lens[i])throw new Error("TxO: bad continue record");var hdr=blob[blob.l];var t=parse_XLUnicodeStringNoCch(blob,blob.lens[i+1]-blob.lens[i]-1);texts+=t;if(texts.length>=(hdr?cchText:2*cchText))break;}if(texts.length!==cchText&&texts.length!==cchText*2){throw new Error("cchText: "+cchText+" != "+texts.length);}blob.l=s+length;/* [MS-XLS] 2.5.272 TxORuns */ //	var rgTxoRuns = [];
	//	for(var j = 0; j != cbRuns/8-1; ++j) blob.l += 8;
	//	var cchText2 = blob.read_shift(2);
	//	if(cchText2 !== cchText) throw new Error("TxOLastRun mismatch: " + cchText2 + " " + cchText);
	//	blob.l += 6;
	//	if(s + length != blob.l) throw new Error("TxO " + (s + length) + ", at " + blob.l);
	return {t:texts};}catch(e){blob.l=s+length;return {t:texts};}}/* [MS-XLS] 2.4.140 */function parse_HLink(blob,length){var ref=parse_Ref8U(blob);blob.l+=16;/* CLSID */var hlink=parse_Hyperlink(blob,length-24);return [ref,hlink];}/* [MS-XLS] 2.4.141 */function parse_HLinkTooltip(blob,length){blob.read_shift(2);var ref=parse_Ref8U(blob);var wzTooltip=blob.read_shift((length-10)/2,'dbcs-cont');wzTooltip=wzTooltip.replace(chr0,"");return [ref,wzTooltip];}/* [MS-XLS] 2.4.63 */function parse_Country(blob)/*:[string|number, string|number]*/{var o=[0,0],d;d=blob.read_shift(2);o[0]=CountryEnum[d]||d;d=blob.read_shift(2);o[1]=CountryEnum[d]||d;return o;}/* [MS-XLS] 2.4.50 ClrtClient */function parse_ClrtClient(blob){var ccv=blob.read_shift(2);var o=[];while(ccv-->0)o.push(parse_LongRGB(blob));return o;}/* [MS-XLS] 2.4.188 */function parse_Palette(blob){var ccv=blob.read_shift(2);var o=[];while(ccv-->0)o.push(parse_LongRGB(blob));return o;}/* [MS-XLS] 2.4.354 */function parse_XFCRC(blob){blob.l+=2;var o={cxfs:0,crc:0};o.cxfs=blob.read_shift(2);o.crc=blob.read_shift(4);return o;}/* [MS-XLS] 2.4.53 TODO: parse flags */ /* [MS-XLSB] 2.4.323 TODO: parse flags */function parse_ColInfo(blob,length,opts){if(!opts.cellStyles)return parsenoop(blob,length);var w=opts&&opts.biff>=12?4:2;var colFirst=blob.read_shift(w);var colLast=blob.read_shift(w);var coldx=blob.read_shift(w);var ixfe=blob.read_shift(w);var flags=blob.read_shift(2);if(w==2)blob.l+=2;var o={s:colFirst,e:colLast,w:coldx,ixfe:ixfe,flags:flags}/*:any*/;if(opts.biff>=5||!opts.biff)o.level=flags>>8&0x7;return o;}/* [MS-XLS] 2.4.257 */function parse_Setup(blob,length){var o={};if(length<32)return o;blob.l+=16;o.header=parse_Xnum(blob);o.footer=parse_Xnum(blob);blob.l+=2;return o;}/* [MS-XLS] 2.4.261 */function parse_ShtProps(blob,length,opts){var def={area:false};if(opts.biff!=5){blob.l+=length;return def;}var d=blob.read_shift(1);blob.l+=3;if(d&0x10)def.area=true;return def;}var parse_Blank=parse_XLSCell;/* [MS-XLS] 2.4.20 Just the cell */var parse_Scl=parseuint16a;/* [MS-XLS] 2.4.247 num, den */var parse_String=parse_XLUnicodeString;/* [MS-XLS] 2.4.268 */ /* --- Specific to versions before BIFF8 --- */function parse_ImData(blob){var cf=blob.read_shift(2);var env=blob.read_shift(2);var lcb=blob.read_shift(4);var o={fmt:cf,env:env,len:lcb,data:blob.slice(blob.l,blob.l+lcb)};blob.l+=lcb;return o;}/* BIFF2_??? where ??? is the name from [XLS] */function parse_BIFF2STR(blob,length,opts){if(opts.biffguess&&opts.biff==5)opts.biff=2;var cell=parse_XLSCell(blob);++blob.l;var str=parse_XLUnicodeString2(blob,length-7,opts);cell.t='str';cell.val=str;return cell;}function parse_BIFF2NUM(blob/*::, length*/){var cell=parse_XLSCell(blob);++blob.l;var num=parse_Xnum(blob);cell.t='n';cell.val=num;return cell;}function parse_BIFF2INT(blob){var cell=parse_XLSCell(blob);++blob.l;var num=blob.read_shift(2);cell.t='n';cell.val=num;return cell;}function parse_BIFF2STRING(blob){var cch=blob.read_shift(1);if(cch===0){blob.l++;return "";}return blob.read_shift(cch,'sbcs-cont');}/* TODO: convert to BIFF8 font struct */function parse_BIFF2FONTXTRA(blob,length){blob.l+=6;// unknown
	blob.l+=2;// font weight "bls"
	blob.l+=1;// charset
	blob.l+=3;// unknown
	blob.l+=1;// font family
	blob.l+=length-13;}/* TODO: parse rich text runs */function parse_RString(blob,length,opts){var end=blob.l+length;var cell=parse_XLSCell(blob);var cch=blob.read_shift(2);var str=parse_XLUnicodeStringNoCch(blob,cch,opts);blob.l=end;cell.t='str';cell.val=str;return cell;}/* from js-harb (C) 2014-present  SheetJS */var DBF_SUPPORTED_VERSIONS=[0x02,0x03,0x30,0x31,0x83,0x8B,0x8C,0xF5];var DBF=/*#__PURE__*/function(){var dbf_codepage_map={/* Code Pages Supported by Visual FoxPro */ /*::[*/0x01/*::]*/:437,/*::[*/0x02/*::]*/:850,/*::[*/0x03/*::]*/:1252,/*::[*/0x04/*::]*/:10000,/*::[*/0x64/*::]*/:852,/*::[*/0x65/*::]*/:866,/*::[*/0x66/*::]*/:865,/*::[*/0x67/*::]*/:861,/*::[*/0x68/*::]*/:895,/*::[*/0x69/*::]*/:620,/*::[*/0x6A/*::]*/:737,/*::[*/0x6B/*::]*/:857,/*::[*/0x78/*::]*/:950,/*::[*/0x79/*::]*/:949,/*::[*/0x7A/*::]*/:936,/*::[*/0x7B/*::]*/:932,/*::[*/0x7C/*::]*/:874,/*::[*/0x7D/*::]*/:1255,/*::[*/0x7E/*::]*/:1256,/*::[*/0x96/*::]*/:10007,/*::[*/0x97/*::]*/:10029,/*::[*/0x98/*::]*/:10006,/*::[*/0xC8/*::]*/:1250,/*::[*/0xC9/*::]*/:1251,/*::[*/0xCA/*::]*/:1254,/*::[*/0xCB/*::]*/:1253,/* shapefile DBF extension */ /*::[*/0x00/*::]*/:20127,/*::[*/0x08/*::]*/:865,/*::[*/0x09/*::]*/:437,/*::[*/0x0A/*::]*/:850,/*::[*/0x0B/*::]*/:437,/*::[*/0x0D/*::]*/:437,/*::[*/0x0E/*::]*/:850,/*::[*/0x0F/*::]*/:437,/*::[*/0x10/*::]*/:850,/*::[*/0x11/*::]*/:437,/*::[*/0x12/*::]*/:850,/*::[*/0x13/*::]*/:932,/*::[*/0x14/*::]*/:850,/*::[*/0x15/*::]*/:437,/*::[*/0x16/*::]*/:850,/*::[*/0x17/*::]*/:865,/*::[*/0x18/*::]*/:437,/*::[*/0x19/*::]*/:437,/*::[*/0x1A/*::]*/:850,/*::[*/0x1B/*::]*/:437,/*::[*/0x1C/*::]*/:863,/*::[*/0x1D/*::]*/:850,/*::[*/0x1F/*::]*/:852,/*::[*/0x22/*::]*/:852,/*::[*/0x23/*::]*/:852,/*::[*/0x24/*::]*/:860,/*::[*/0x25/*::]*/:850,/*::[*/0x26/*::]*/:866,/*::[*/0x37/*::]*/:850,/*::[*/0x40/*::]*/:852,/*::[*/0x4D/*::]*/:936,/*::[*/0x4E/*::]*/:949,/*::[*/0x4F/*::]*/:950,/*::[*/0x50/*::]*/:874,/*::[*/0x57/*::]*/:1252,/*::[*/0x58/*::]*/:1252,/*::[*/0x59/*::]*/:1252,/*::[*/0x6C/*::]*/:863,/*::[*/0x86/*::]*/:737,/*::[*/0x87/*::]*/:852,/*::[*/0x88/*::]*/:857,/*::[*/0xCC/*::]*/:1257,/*::[*/0xFF/*::]*/:16969};var dbf_reverse_map=evert({/*::[*/0x01/*::]*/:437,/*::[*/0x02/*::]*/:850,/*::[*/0x03/*::]*/:1252,/*::[*/0x04/*::]*/:10000,/*::[*/0x64/*::]*/:852,/*::[*/0x65/*::]*/:866,/*::[*/0x66/*::]*/:865,/*::[*/0x67/*::]*/:861,/*::[*/0x68/*::]*/:895,/*::[*/0x69/*::]*/:620,/*::[*/0x6A/*::]*/:737,/*::[*/0x6B/*::]*/:857,/*::[*/0x78/*::]*/:950,/*::[*/0x79/*::]*/:949,/*::[*/0x7A/*::]*/:936,/*::[*/0x7B/*::]*/:932,/*::[*/0x7C/*::]*/:874,/*::[*/0x7D/*::]*/:1255,/*::[*/0x7E/*::]*/:1256,/*::[*/0x96/*::]*/:10007,/*::[*/0x97/*::]*/:10029,/*::[*/0x98/*::]*/:10006,/*::[*/0xC8/*::]*/:1250,/*::[*/0xC9/*::]*/:1251,/*::[*/0xCA/*::]*/:1254,/*::[*/0xCB/*::]*/:1253,/*::[*/0x00/*::]*/:20127});/* TODO: find an actual specification */function dbf_to_aoa(buf,opts)/*:AOA*/{var out/*:AOA*/=[];var d/*:Block*/=new_raw_buf(1)/*:any*/;switch(opts.type){case'base64':d=s2a(Base64_decode(buf));break;case'binary':d=s2a(buf);break;case'buffer':case'array':d=buf;break;}prep_blob(d,0);/* header */var ft=d.read_shift(1);var memo=!!(ft&0x88);var vfp=false,l7=false;switch(ft){case 0x02:break;// dBASE II
	case 0x03:break;// dBASE III
	case 0x30:vfp=true;memo=true;break;// VFP
	case 0x31:vfp=true;memo=true;break;// VFP with autoincrement
	// 0x43 dBASE IV SQL table files
	// 0x63 dBASE IV SQL system files
	case 0x83:break;// dBASE III with memo
	case 0x8B:break;// dBASE IV with memo
	case 0x8C:l7=true;break;// dBASE Level 7 with memo
	// case 0xCB dBASE IV SQL table files with memo
	case 0xF5:break;// FoxPro 2.x with memo
	// case 0xFB FoxBASE
	default:throw new Error("DBF Unsupported Version: "+ft.toString(16));}var nrow=0,fpos=0x0209;if(ft==0x02)nrow=d.read_shift(2);d.l+=3;// dBASE II stores DDMMYY date, others use YYMMDD
	if(ft!=0x02)nrow=d.read_shift(4);if(nrow>1048576)nrow=1e6;if(ft!=0x02)fpos=d.read_shift(2);// header length
	var rlen=d.read_shift(2);// record length
	var/*flags = 0,*/current_cp=opts.codepage||1252;if(ft!=0x02){// 20 reserved bytes
	d.l+=16;/*flags = */d.read_shift(1);//if(memo && ((flags & 0x02) === 0)) throw new Error("DBF Flags " + flags.toString(16) + " ft " + ft.toString(16));
	/* codepage present in FoxPro and dBASE Level 7 */if(d[d.l]!==0)current_cp=dbf_codepage_map[d[d.l]];d.l+=1;d.l+=2;}if(l7)d.l+=36;// Level 7: 32 byte "Language driver name", 4 byte reserved
	/*:: type DBFField = { name:string; len:number; type:string; } */var fields/*:Array<DBFField>*/=[],field/*:DBFField*/={}/*:any*/;var hend=Math.min(d.length,ft==0x02?0x209:fpos-10-(vfp?264:0));var ww=l7?32:11;while(d.l<hend&&d[d.l]!=0x0d){field={}/*:any*/;field.name=$cptable.utils.decode(current_cp,d.slice(d.l,d.l+ww)).replace(/[\u0000\r\n].*$/g,"");d.l+=ww;field.type=String.fromCharCode(d.read_shift(1));if(ft!=0x02&&!l7)field.offset=d.read_shift(4);field.len=d.read_shift(1);if(ft==0x02)field.offset=d.read_shift(2);field.dec=d.read_shift(1);if(field.name.length)fields.push(field);if(ft!=0x02)d.l+=l7?13:14;switch(field.type){case'B':// Double (VFP) / Binary (dBASE L7)
	if((!vfp||field.len!=8)&&opts.WTF)console.log('Skipping '+field.name+':'+field.type);break;case'G':// General (FoxPro and dBASE L7)
	case'P':// Picture (FoxPro and dBASE L7)
	if(opts.WTF)console.log('Skipping '+field.name+':'+field.type);break;case'+':// Autoincrement (dBASE L7 only)
	case'0':// _NullFlags (VFP only)
	case'@':// Timestamp (dBASE L7 only)
	case'C':// Character (dBASE II)
	case'D':// Date (dBASE III)
	case'F':// Float (dBASE IV)
	case'I':// Long (VFP and dBASE L7)
	case'L':// Logical (dBASE II)
	case'M':// Memo (dBASE III)
	case'N':// Number (dBASE II)
	case'O':// Double (dBASE L7 only)
	case'T':// Datetime (VFP only)
	case'Y':// Currency (VFP only)
	break;default:throw new Error('Unknown Field Type: '+field.type);}}if(d[d.l]!==0x0D)d.l=fpos-1;if(d.read_shift(1)!==0x0D)throw new Error("DBF Terminator not found "+d.l+" "+d[d.l]);d.l=fpos;/* data */var R=0,C=0;out[0]=[];for(C=0;C!=fields.length;++C)out[0][C]=fields[C].name;while(nrow-->0){if(d[d.l]===0x2A){// TODO: record marked as deleted -- create a hidden row?
	d.l+=rlen;continue;}++d.l;out[++R]=[];C=0;for(C=0;C!=fields.length;++C){var dd=d.slice(d.l,d.l+fields[C].len);d.l+=fields[C].len;prep_blob(dd,0);var s=$cptable.utils.decode(current_cp,dd);switch(fields[C].type){case'C':// NOTE: it is conventional to write '  /  /  ' for empty dates
	if(s.trim().length)out[R][C]=s.replace(/\s+$/,"");break;case'D':if(s.length===8)out[R][C]=new Date(+s.slice(0,4),+s.slice(4,6)-1,+s.slice(6,8));else out[R][C]=s;break;case'F':out[R][C]=parseFloat(s.trim());break;case'+':case'I':out[R][C]=l7?dd.read_shift(-4,'i')^0x80000000:dd.read_shift(4,'i');break;case'L':switch(s.trim().toUpperCase()){case'Y':case'T':out[R][C]=true;break;case'N':case'F':out[R][C]=false;break;case'':case'?':break;default:throw new Error("DBF Unrecognized L:|"+s+"|");}break;case'M':/* TODO: handle memo files */if(!memo)throw new Error("DBF Unexpected MEMO for type "+ft.toString(16));out[R][C]="##MEMO##"+(l7?parseInt(s.trim(),10):dd.read_shift(4));break;case'N':s=s.replace(/\u0000/g,"").trim();// NOTE: dBASE II interprets "  .  " as 0
	if(s&&s!=".")out[R][C]=+s||0;break;case'@':// NOTE: dBASE specs appear to be incorrect
	out[R][C]=new Date(dd.read_shift(-8,'f')-0x388317533400);break;case'T':out[R][C]=new Date((dd.read_shift(4)-0x253D8C)*0x5265C00+dd.read_shift(4));break;case'Y':out[R][C]=dd.read_shift(4,'i')/1e4+dd.read_shift(4,'i')/1e4*Math.pow(2,32);break;case'O':out[R][C]=-dd.read_shift(-8,'f');break;case'B':if(vfp&&fields[C].len==8){out[R][C]=dd.read_shift(8,'f');break;}/* falls through */case'G':case'P':dd.l+=fields[C].len;break;case'0':if(fields[C].name==='_NullFlags')break;/* falls through */default:throw new Error("DBF Unsupported data type "+fields[C].type);}}}if(ft!=0x02)if(d.l<d.length&&d[d.l++]!=0x1A)throw new Error("DBF EOF Marker missing "+(d.l-1)+" of "+d.length+" "+d[d.l-1].toString(16));if(opts&&opts.sheetRows)out=out.slice(0,opts.sheetRows);opts.DBF=fields;return out;}function dbf_to_sheet(buf,opts)/*:Worksheet*/{var o=opts||{};if(!o.dateNF)o.dateNF="yyyymmdd";var ws=aoa_to_sheet(dbf_to_aoa(buf,o),o);ws["!cols"]=o.DBF.map(function(field){return {wch:field.len,DBF:field};});delete o.DBF;return ws;}function dbf_to_workbook(buf,opts)/*:Workbook*/{try{return sheet_to_workbook(dbf_to_sheet(buf,opts),opts);}catch(e){if(opts&&opts.WTF)throw e;}return {SheetNames:[],Sheets:{}};}var _RLEN={'B':8,'C':250,'L':1,'D':8,'?':0,'':0};function sheet_to_dbf(ws/*:Worksheet*/,opts/*:WriteOpts*/){var o=opts||{};if(+o.codepage>=0)set_cp(+o.codepage);if(o.type=="string")throw new Error("Cannot write DBF to JS string");var ba=buf_array();var aoa/*:AOA*/=sheet_to_json(ws,{header:1,raw:true,cellDates:true});var headers=aoa[0],data=aoa.slice(1),cols=ws["!cols"]||[];var i=0,j=0,hcnt=0,rlen=1;for(i=0;i<headers.length;++i){if(((cols[i]||{}).DBF||{}).name){headers[i]=cols[i].DBF.name;++hcnt;continue;}if(headers[i]==null)continue;++hcnt;if(typeof headers[i]==='number')headers[i]=headers[i].toString(10);if(typeof headers[i]!=='string')throw new Error("DBF Invalid column name "+headers[i]+" |"+typeof headers[i]+"|");if(headers.indexOf(headers[i])!==i)for(j=0;j<1024;++j)if(headers.indexOf(headers[i]+"_"+j)==-1){headers[i]+="_"+j;break;}}var range=safe_decode_range(ws['!ref']);var coltypes/*:Array<string>*/=[];var colwidths/*:Array<number>*/=[];var coldecimals/*:Array<number>*/=[];for(i=0;i<=range.e.c-range.s.c;++i){var guess='',_guess='',maxlen=0;var col/*:Array<any>*/=[];for(j=0;j<data.length;++j){if(data[j][i]!=null)col.push(data[j][i]);}if(col.length==0||headers[i]==null){coltypes[i]='?';continue;}for(j=0;j<col.length;++j){switch(typeof col[j]){/* TODO: check if L2 compat is desired */case'number':_guess='B';break;case'string':_guess='C';break;case'boolean':_guess='L';break;case'object':_guess=col[j]instanceof Date?'D':'C';break;default:_guess='C';}maxlen=Math.max(maxlen,String(col[j]).length);guess=guess&&guess!=_guess?'C':_guess;//if(guess == 'C') break;
	}if(maxlen>250)maxlen=250;_guess=((cols[i]||{}).DBF||{}).type;/* TODO: more fine grained control over DBF type resolution */if(_guess=='C'){if(cols[i].DBF.len>maxlen)maxlen=cols[i].DBF.len;}if(guess=='B'&&_guess=='N'){guess='N';coldecimals[i]=cols[i].DBF.dec;maxlen=cols[i].DBF.len;}colwidths[i]=guess=='C'||_guess=='N'?maxlen:_RLEN[guess]||0;rlen+=colwidths[i];coltypes[i]=guess;}var h=ba.next(32);h.write_shift(4,0x13021130);h.write_shift(4,data.length);h.write_shift(2,296+32*hcnt);h.write_shift(2,rlen);for(i=0;i<4;++i)h.write_shift(4,0);h.write_shift(4,0x00000000|(+dbf_reverse_map[/*::String(*/current_ansi/*::)*/]||0x03)<<8);for(i=0,j=0;i<headers.length;++i){if(headers[i]==null)continue;var hf=ba.next(32);var _f=(headers[i].slice(-10)+"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00").slice(0,11);hf.write_shift(1,_f,"sbcs");hf.write_shift(1,coltypes[i]=='?'?'C':coltypes[i],"sbcs");hf.write_shift(4,j);hf.write_shift(1,colwidths[i]||_RLEN[coltypes[i]]||0);hf.write_shift(1,coldecimals[i]||0);hf.write_shift(1,0x02);hf.write_shift(4,0);hf.write_shift(1,0);hf.write_shift(4,0);hf.write_shift(4,0);j+=colwidths[i]||_RLEN[coltypes[i]]||0;}var hb=ba.next(264);hb.write_shift(4,0x0000000D);for(i=0;i<65;++i)hb.write_shift(4,0x00000000);for(i=0;i<data.length;++i){var rout=ba.next(rlen);rout.write_shift(1,0);for(j=0;j<headers.length;++j){if(headers[j]==null)continue;switch(coltypes[j]){case'L':rout.write_shift(1,data[i][j]==null?0x3F:data[i][j]?0x54:0x46);break;case'B':rout.write_shift(8,data[i][j]||0,'f');break;case'N':var _n="0";if(typeof data[i][j]=="number")_n=data[i][j].toFixed(coldecimals[j]||0);for(hcnt=0;hcnt<colwidths[j]-_n.length;++hcnt)rout.write_shift(1,0x20);rout.write_shift(1,_n,"sbcs");break;case'D':if(!data[i][j])rout.write_shift(8,"00000000","sbcs");else {rout.write_shift(4,("0000"+data[i][j].getFullYear()).slice(-4),"sbcs");rout.write_shift(2,("00"+(data[i][j].getMonth()+1)).slice(-2),"sbcs");rout.write_shift(2,("00"+data[i][j].getDate()).slice(-2),"sbcs");}break;case'C':var _s=String(data[i][j]!=null?data[i][j]:"").slice(0,colwidths[j]);rout.write_shift(1,_s,"sbcs");for(hcnt=0;hcnt<colwidths[j]-_s.length;++hcnt)rout.write_shift(1,0x20);break;}}// data
	}ba.next(1).write_shift(1,0x1A);return ba.end();}return {to_workbook:dbf_to_workbook,to_sheet:dbf_to_sheet,from_sheet:sheet_to_dbf};}();var SYLK=/*#__PURE__*/function(){/* TODO: stress test sequences */var sylk_escapes={AA:'??',BA:'??',CA:'??',DA:195,HA:'??',JA:197,AE:'??',BE:'??',CE:'??',HE:'??',AI:'??',BI:'??',CI:'??',HI:'??',AO:'??',BO:'??',CO:'??',DO:213,HO:'??',AU:'??',BU:'??',CU:'??',HU:'??',Aa:'??',Ba:'??',Ca:'??',Da:227,Ha:'??',Ja:229,Ae:'??',Be:'??',Ce:'??',He:'??',Ai:'??',Bi:'??',Ci:'??',Hi:'??',Ao:'??',Bo:'??',Co:'??',Do:245,Ho:'??',Au:'??',Bu:'??',Cu:'??',Hu:'??',KC:'??',Kc:'??',q:'??',z:'??',a:'??',j:'??',DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,/*::[*/0/*::]*/:176,/*::[*/1/*::]*/:177,/*::[*/2/*::]*/:178,/*::[*/3/*::]*/:179,/*::[*/5/*::]*/:181,/*::[*/6/*::]*/:182,/*::[*/7/*::]*/:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223}/*:any*/;var sylk_char_regex=new RegExp("\u001BN("+keys(sylk_escapes).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm");var sylk_char_fn=function(_,$1){var o=sylk_escapes[$1];return typeof o=="number"?_getansi(o):o;};var decode_sylk_char=function($$,$1,$2){var newcc=$1.charCodeAt(0)-0x20<<4|$2.charCodeAt(0)-0x30;return newcc==59?$$:_getansi(newcc);};sylk_escapes["|"]=254;/* TODO: find an actual specification */function sylk_to_aoa(d/*:RawData*/,opts)/*:[AOA, Worksheet]*/{switch(opts.type){case'base64':return sylk_to_aoa_str(Base64_decode(d),opts);case'binary':return sylk_to_aoa_str(d,opts);case'buffer':return sylk_to_aoa_str(has_buf&&Buffer.isBuffer(d)?d.toString('binary'):a2s(d),opts);case'array':return sylk_to_aoa_str(cc2str(d),opts);}throw new Error("Unrecognized type "+opts.type);}function sylk_to_aoa_str(str/*:string*/,opts)/*:[AOA, Worksheet]*/{var records=str.split(/[\n\r]+/),R=-1,C=-1,ri=0,rj=0,arr/*:AOA*/=[];var formats/*:Array<string>*/=[];var next_cell_format/*:string|null*/=null;var sht={},rowinfo/*:Array<RowInfo>*/=[],colinfo/*:Array<ColInfo>*/=[],cw/*:Array<string>*/=[];var Mval=0,j;if(+opts.codepage>=0)set_cp(+opts.codepage);for(;ri!==records.length;++ri){Mval=0;var rstr=records[ri].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,decode_sylk_char).replace(sylk_char_regex,sylk_char_fn);var record=rstr.replace(/;;/g,"\u0000").split(";").map(function(x){return x.replace(/\u0000/g,";");});var RT=record[0],val;if(rstr.length>0)switch(RT){case'ID':break;/* header */case'E':break;/* EOF */case'B':break;/* dimensions */case'O':break;/* options? */case'W':break;/* window? */case'P':if(record[1].charAt(0)=='P')formats.push(rstr.slice(3).replace(/;;/g,";"));break;case'C':var C_seen_K=false,C_seen_X=false,C_seen_S=false,C_seen_E=false,_R=-1,_C=-1;for(rj=1;rj<record.length;++rj)switch(record[rj].charAt(0)){case'A':break;// TODO: comment
	case'X':C=parseInt(record[rj].slice(1))-1;C_seen_X=true;break;case'Y':R=parseInt(record[rj].slice(1))-1;if(!C_seen_X)C=0;for(j=arr.length;j<=R;++j)arr[j]=[];break;case'K':val=record[rj].slice(1);if(val.charAt(0)==='"')val=val.slice(1,val.length-1);else if(val==='TRUE')val=true;else if(val==='FALSE')val=false;else if(!isNaN(fuzzynum(val))){val=fuzzynum(val);if(next_cell_format!==null&&fmt_is_date(next_cell_format))val=numdate(val);}else if(!isNaN(fuzzydate(val).getDate())){val=parseDate(val);}C_seen_K=true;break;case'E':C_seen_E=true;var formula=rc_to_a1(record[rj].slice(1),{r:R,c:C});arr[R][C]=[arr[R][C],formula];break;case'S':C_seen_S=true;arr[R][C]=[arr[R][C],"S5S"];break;case'G':break;// unknown
	case'R':_R=parseInt(record[rj].slice(1))-1;break;case'C':_C=parseInt(record[rj].slice(1))-1;break;default:if(opts&&opts.WTF)throw new Error("SYLK bad record "+rstr);}if(C_seen_K){if(arr[R][C]&&arr[R][C].length==2)arr[R][C][0]=val;else arr[R][C]=val;next_cell_format=null;}if(C_seen_S){if(C_seen_E)throw new Error("SYLK shared formula cannot have own formula");var shrbase=_R>-1&&arr[_R][_C];if(!shrbase||!shrbase[1])throw new Error("SYLK shared formula cannot find base");arr[R][C][1]=shift_formula_str(shrbase[1],{r:R-_R,c:C-_C});}break;case'F':var F_seen=0;for(rj=1;rj<record.length;++rj)switch(record[rj].charAt(0)){case'X':C=parseInt(record[rj].slice(1))-1;++F_seen;break;case'Y':R=parseInt(record[rj].slice(1))-1;/*C = 0;*/for(j=arr.length;j<=R;++j)arr[j]=[];break;case'M':Mval=parseInt(record[rj].slice(1))/20;break;case'F':break;/* ??? */case'G':break;/* hide grid */case'P':next_cell_format=formats[parseInt(record[rj].slice(1))];break;case'S':break;/* cell style */case'D':break;/* column */case'N':break;/* font */case'W':cw=record[rj].slice(1).split(" ");for(j=parseInt(cw[0],10);j<=parseInt(cw[1],10);++j){Mval=parseInt(cw[2],10);colinfo[j-1]=Mval===0?{hidden:true}:{wch:Mval};process_col(colinfo[j-1]);}break;case'C':/* default column format */C=parseInt(record[rj].slice(1))-1;if(!colinfo[C])colinfo[C]={};break;case'R':/* row properties */R=parseInt(record[rj].slice(1))-1;if(!rowinfo[R])rowinfo[R]={};if(Mval>0){rowinfo[R].hpt=Mval;rowinfo[R].hpx=pt2px(Mval);}else if(Mval===0)rowinfo[R].hidden=true;break;default:if(opts&&opts.WTF)throw new Error("SYLK bad record "+rstr);}if(F_seen<1)next_cell_format=null;break;default:if(opts&&opts.WTF)throw new Error("SYLK bad record "+rstr);}}if(rowinfo.length>0)sht['!rows']=rowinfo;if(colinfo.length>0)sht['!cols']=colinfo;if(opts&&opts.sheetRows)arr=arr.slice(0,opts.sheetRows);return [arr,sht];}function sylk_to_sheet(d/*:RawData*/,opts)/*:Worksheet*/{var aoasht=sylk_to_aoa(d,opts);var aoa=aoasht[0],ws=aoasht[1];var o=aoa_to_sheet(aoa,opts);keys(ws).forEach(function(k){o[k]=ws[k];});return o;}function sylk_to_workbook(d/*:RawData*/,opts)/*:Workbook*/{return sheet_to_workbook(sylk_to_sheet(d,opts),opts);}function write_ws_cell_sylk(cell/*:Cell*/,ws/*:Worksheet*/,R/*:number*/,C/*:number*/ /*::, opts*/)/*:string*/{var o="C;Y"+(R+1)+";X"+(C+1)+";K";switch(cell.t){case'n':o+=cell.v||0;if(cell.f&&!cell.F)o+=";E"+a1_to_rc(cell.f,{r:R,c:C});break;case'b':o+=cell.v?"TRUE":"FALSE";break;case'e':o+=cell.w||cell.v;break;case'd':o+='"'+(cell.w||cell.v)+'"';break;case's':o+='"'+cell.v.replace(/"/g,"").replace(/;/g,";;")+'"';break;}return o;}function write_ws_cols_sylk(out,cols){cols.forEach(function(col,i){var rec="F;W"+(i+1)+" "+(i+1)+" ";if(col.hidden)rec+="0";else {if(typeof col.width=='number'&&!col.wpx)col.wpx=width2px(col.width);if(typeof col.wpx=='number'&&!col.wch)col.wch=px2char(col.wpx);if(typeof col.wch=='number')rec+=Math.round(col.wch);}if(rec.charAt(rec.length-1)!=" ")out.push(rec);});}function write_ws_rows_sylk(out/*:Array<string>*/,rows/*:Array<RowInfo>*/){rows.forEach(function(row,i){var rec="F;";if(row.hidden)rec+="M0;";else if(row.hpt)rec+="M"+20*row.hpt+";";else if(row.hpx)rec+="M"+20*px2pt(row.hpx)+";";if(rec.length>2)out.push(rec+"R"+(i+1));});}function sheet_to_sylk(ws/*:Worksheet*/,opts/*:?any*/)/*:string*/{var preamble/*:Array<string>*/=["ID;PWXL;N;E"],o/*:Array<string>*/=[];var r=safe_decode_range(ws['!ref']),cell/*:Cell*/;var dense=Array.isArray(ws);var RS="\r\n";preamble.push("P;PGeneral");preamble.push("F;P0;DG0G8;M255");if(ws['!cols'])write_ws_cols_sylk(preamble,ws['!cols']);if(ws['!rows'])write_ws_rows_sylk(preamble,ws['!rows']);preamble.push("B;Y"+(r.e.r-r.s.r+1)+";X"+(r.e.c-r.s.c+1)+";D"+[r.s.c,r.s.r,r.e.c,r.e.r].join(" "));for(var R=r.s.r;R<=r.e.r;++R){for(var C=r.s.c;C<=r.e.c;++C){var coord=encode_cell({r:R,c:C});cell=dense?(ws[R]||[])[C]:ws[coord];if(!cell||cell.v==null&&(!cell.f||cell.F))continue;o.push(write_ws_cell_sylk(cell,ws,R,C));}}return preamble.join(RS)+RS+o.join(RS)+RS+"E"+RS;}return {to_workbook:sylk_to_workbook,to_sheet:sylk_to_sheet,from_sheet:sheet_to_sylk};}();var DIF=/*#__PURE__*/function(){function dif_to_aoa(d/*:RawData*/,opts)/*:AOA*/{switch(opts.type){case'base64':return dif_to_aoa_str(Base64_decode(d),opts);case'binary':return dif_to_aoa_str(d,opts);case'buffer':return dif_to_aoa_str(has_buf&&Buffer.isBuffer(d)?d.toString('binary'):a2s(d),opts);case'array':return dif_to_aoa_str(cc2str(d),opts);}throw new Error("Unrecognized type "+opts.type);}function dif_to_aoa_str(str/*:string*/,opts)/*:AOA*/{var records=str.split('\n'),R=-1,C=-1,ri=0,arr/*:AOA*/=[];for(;ri!==records.length;++ri){if(records[ri].trim()==='BOT'){arr[++R]=[];C=0;continue;}if(R<0)continue;var metadata=records[ri].trim().split(",");var type=metadata[0],value=metadata[1];++ri;var data=records[ri]||"";while((data.match(/["]/g)||[]).length&1&&ri<records.length-1)data+="\n"+records[++ri];data=data.trim();switch(+type){case-1:if(data==='BOT'){arr[++R]=[];C=0;continue;}else if(data!=='EOD')throw new Error("Unrecognized DIF special command "+data);break;case 0:if(data==='TRUE')arr[R][C]=true;else if(data==='FALSE')arr[R][C]=false;else if(!isNaN(fuzzynum(value)))arr[R][C]=fuzzynum(value);else if(!isNaN(fuzzydate(value).getDate()))arr[R][C]=parseDate(value);else arr[R][C]=value;++C;break;case 1:data=data.slice(1,data.length-1);data=data.replace(/""/g,'"');if(data&&data.match(/^=".*"$/))data=data.slice(2,-1);arr[R][C++]=data!==''?data:null;break;}if(data==='EOD')break;}if(opts&&opts.sheetRows)arr=arr.slice(0,opts.sheetRows);return arr;}function dif_to_sheet(str/*:string*/,opts)/*:Worksheet*/{return aoa_to_sheet(dif_to_aoa(str,opts),opts);}function dif_to_workbook(str/*:string*/,opts)/*:Workbook*/{return sheet_to_workbook(dif_to_sheet(str,opts),opts);}var sheet_to_dif=/*#__PURE__*/function(){var push_field=function pf(o/*:Array<string>*/,topic/*:string*/,v/*:number*/,n/*:number*/,s/*:string*/){o.push(topic);o.push(v+","+n);o.push('"'+s.replace(/"/g,'""')+'"');};var push_value=function po(o/*:Array<string>*/,type/*:number*/,v/*:any*/,s/*:string*/){o.push(type+","+v);o.push(type==1?'"'+s.replace(/"/g,'""')+'"':s);};return function sheet_to_dif(ws/*:Worksheet*/ /*::, opts:?any*/)/*:string*/{var o/*:Array<string>*/=[];var r=safe_decode_range(ws['!ref']),cell/*:Cell*/;var dense=Array.isArray(ws);push_field(o,"TABLE",0,1,"sheetjs");push_field(o,"VECTORS",0,r.e.r-r.s.r+1,"");push_field(o,"TUPLES",0,r.e.c-r.s.c+1,"");push_field(o,"DATA",0,0,"");for(var R=r.s.r;R<=r.e.r;++R){push_value(o,-1,0,"BOT");for(var C=r.s.c;C<=r.e.c;++C){var coord=encode_cell({r:R,c:C});cell=dense?(ws[R]||[])[C]:ws[coord];if(!cell){push_value(o,1,0,"");continue;}switch(cell.t){case'n':var val=cell.w;if(!val&&cell.v!=null)val=cell.v;if(val==null){if(cell.f&&!cell.F)push_value(o,1,0,"="+cell.f);else push_value(o,1,0,"");}else push_value(o,0,val,"V");break;case'b':push_value(o,0,cell.v?1:0,cell.v?"TRUE":"FALSE");break;case's':push_value(o,1,0,isNaN(cell.v)?cell.v:'="'+cell.v+'"');break;case'd':if(!cell.w)cell.w=SSF_format(cell.z||table_fmt[14],datenum(parseDate(cell.v)));push_value(o,0,cell.w,"V");break;default:push_value(o,1,0,"");}}}push_value(o,-1,0,"EOD");var RS="\r\n";var oo=o.join(RS);//while((oo.length & 0x7F) != 0) oo += "\0";
	return oo;};}();return {to_workbook:dif_to_workbook,to_sheet:dif_to_sheet,from_sheet:sheet_to_dif};}();var ETH=/*#__PURE__*/function(){function decode(s/*:string*/)/*:string*/{return s.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,"\n");}function encode(s/*:string*/)/*:string*/{return s.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n");}function eth_to_aoa(str/*:string*/,opts)/*:AOA*/{var records=str.split('\n'),R=-1,C=-1,ri=0,arr/*:AOA*/=[];for(;ri!==records.length;++ri){var record=records[ri].trim().split(":");if(record[0]!=='cell')continue;var addr=decode_cell(record[1]);if(arr.length<=addr.r)for(R=arr.length;R<=addr.r;++R)if(!arr[R])arr[R]=[];R=addr.r;C=addr.c;switch(record[2]){case't':arr[R][C]=decode(record[3]);break;case'v':arr[R][C]=+record[3];break;case'vtf':var _f=record[record.length-1];/* falls through */case'vtc':switch(record[3]){case'nl':arr[R][C]=+record[4]?true:false;break;default:arr[R][C]=+record[4];break;}if(record[2]=='vtf')arr[R][C]=[arr[R][C],_f];}}if(opts&&opts.sheetRows)arr=arr.slice(0,opts.sheetRows);return arr;}function eth_to_sheet(d/*:string*/,opts)/*:Worksheet*/{return aoa_to_sheet(eth_to_aoa(d,opts),opts);}function eth_to_workbook(d/*:string*/,opts)/*:Workbook*/{return sheet_to_workbook(eth_to_sheet(d,opts),opts);}var header=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n");var sep=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join("\n")+"\n";/* TODO: the other parts */var meta=["# SocialCalc Spreadsheet Control Save","part:sheet"].join("\n");var end="--SocialCalcSpreadsheetControlSave--";function sheet_to_eth_data(ws/*:Worksheet*/)/*:string*/{if(!ws||!ws['!ref'])return "";var o/*:Array<string>*/=[],oo/*:Array<string>*/=[],cell,coord="";var r=decode_range(ws['!ref']);var dense=Array.isArray(ws);for(var R=r.s.r;R<=r.e.r;++R){for(var C=r.s.c;C<=r.e.c;++C){coord=encode_cell({r:R,c:C});cell=dense?(ws[R]||[])[C]:ws[coord];if(!cell||cell.v==null||cell.t==='z')continue;oo=["cell",coord,'t'];switch(cell.t){case's':case'str':oo.push(encode(cell.v));break;case'n':if(!cell.f){oo[2]='v';oo[3]=cell.v;}else {oo[2]='vtf';oo[3]='n';oo[4]=cell.v;oo[5]=encode(cell.f);}break;case'b':oo[2]='vt'+(cell.f?'f':'c');oo[3]='nl';oo[4]=cell.v?"1":"0";oo[5]=encode(cell.f||(cell.v?'TRUE':'FALSE'));break;case'd':var t=datenum(parseDate(cell.v));oo[2]='vtc';oo[3]='nd';oo[4]=""+t;oo[5]=cell.w||SSF_format(cell.z||table_fmt[14],t);break;case'e':continue;}o.push(oo.join(":"));}}o.push("sheet:c:"+(r.e.c-r.s.c+1)+":r:"+(r.e.r-r.s.r+1)+":tvf:1");o.push("valueformat:1:text-wiki");//o.push("copiedfrom:" + ws['!ref']); // clipboard only
	return o.join("\n");}function sheet_to_eth(ws/*:Worksheet*/ /*::, opts:?any*/)/*:string*/{return [header,sep,meta,sep,sheet_to_eth_data(ws),end].join("\n");// return ["version:1.5", sheet_to_eth_data(ws)].join("\n"); // clipboard form
	}return {to_workbook:eth_to_workbook,to_sheet:eth_to_sheet,from_sheet:sheet_to_eth};}();var PRN=/*#__PURE__*/function(){function set_text_arr(data/*:string*/,arr/*:AOA*/,R/*:number*/,C/*:number*/,o/*:any*/){if(o.raw)arr[R][C]=data;else if(data==="");else if(data==='TRUE')arr[R][C]=true;else if(data==='FALSE')arr[R][C]=false;else if(!isNaN(fuzzynum(data)))arr[R][C]=fuzzynum(data);else if(!isNaN(fuzzydate(data).getDate()))arr[R][C]=parseDate(data);else arr[R][C]=data;}function prn_to_aoa_str(f/*:string*/,opts)/*:AOA*/{var o=opts||{};var arr/*:AOA*/=[]/*:any*/;if(!f||f.length===0)return arr;var lines=f.split(/[\r\n]/);var L=lines.length-1;while(L>=0&&lines[L].length===0)--L;var start=10,idx=0;var R=0;for(;R<=L;++R){idx=lines[R].indexOf(" ");if(idx==-1)idx=lines[R].length;else idx++;start=Math.max(start,idx);}for(R=0;R<=L;++R){arr[R]=[];/* TODO: confirm that widths are always 10 */var C=0;set_text_arr(lines[R].slice(0,start).trim(),arr,R,C,o);for(C=1;C<=(lines[R].length-start)/10+1;++C)set_text_arr(lines[R].slice(start+(C-1)*10,start+C*10).trim(),arr,R,C,o);}if(o.sheetRows)arr=arr.slice(0,o.sheetRows);return arr;}// List of accepted CSV separators
	var guess_seps={/*::[*/0x2C/*::]*/:',',/*::[*/0x09/*::]*/:"\t",/*::[*/0x3B/*::]*/:';',/*::[*/0x7C/*::]*/:'|'};// CSV separator weights to be used in case of equal numbers
	var guess_sep_weights={/*::[*/0x2C/*::]*/:3,/*::[*/0x09/*::]*/:2,/*::[*/0x3B/*::]*/:1,/*::[*/0x7C/*::]*/:0};function guess_sep(str){var cnt={},instr=false,end=0,cc=0;for(;end<str.length;++end){if((cc=str.charCodeAt(end))==0x22)instr=!instr;else if(!instr&&cc in guess_seps)cnt[cc]=(cnt[cc]||0)+1;}cc=[];for(end in cnt)if(Object.prototype.hasOwnProperty.call(cnt,end)){cc.push([cnt[end],end]);}if(!cc.length){cnt=guess_sep_weights;for(end in cnt)if(Object.prototype.hasOwnProperty.call(cnt,end)){cc.push([cnt[end],end]);}}cc.sort(function(a,b){return a[0]-b[0]||guess_sep_weights[a[1]]-guess_sep_weights[b[1]];});return guess_seps[cc.pop()[1]]||0x2C;}function dsv_to_sheet_str(str/*:string*/,opts)/*:Worksheet*/{var o=opts||{};var sep="";var ws/*:Worksheet*/=o.dense?[]/*:any*/:{}/*:any*/;var range/*:Range*/={s:{c:0,r:0},e:{c:0,r:0}}/*:any*/;if(str.slice(0,4)=="sep="){// If the line ends in \r\n
	if(str.charCodeAt(5)==13&&str.charCodeAt(6)==10){sep=str.charAt(4);str=str.slice(7);}// If line ends in \r OR \n
	else if(str.charCodeAt(5)==13||str.charCodeAt(5)==10){sep=str.charAt(4);str=str.slice(6);}else sep=guess_sep(str.slice(0,1024));}else if(o&&o.FS)sep=o.FS;else sep=guess_sep(str.slice(0,1024));var R=0,C=0,v=0;var start=0,end=0,sepcc=sep.charCodeAt(0),instr=false,cc=0,startcc=str.charCodeAt(0);str=str.replace(/\r\n/mg,"\n");var _re/*:?RegExp*/=o.dateNF!=null?dateNF_regex(o.dateNF):null;function finish_cell(){var s=str.slice(start,end);var cell={}/*:any*/;if(s.charAt(0)=='"'&&s.charAt(s.length-1)=='"')s=s.slice(1,-1).replace(/""/g,'"');if(s.length===0)cell.t='z';else if(o.raw){cell.t='s';cell.v=s;}else if(s.trim().length===0){cell.t='s';cell.v=s;}else if(s.charCodeAt(0)==0x3D){if(s.charCodeAt(1)==0x22&&s.charCodeAt(s.length-1)==0x22){cell.t='s';cell.v=s.slice(2,-1).replace(/""/g,'"');}else if(fuzzyfmla(s)){cell.t='n';cell.f=s.slice(1);}else {cell.t='s';cell.v=s;}}else if(s=="TRUE"){cell.t='b';cell.v=true;}else if(s=="FALSE"){cell.t='b';cell.v=false;}else if(!isNaN(v=fuzzynum(s))){cell.t='n';if(o.cellText!==false)cell.w=s;cell.v=v;}else if(!isNaN(fuzzydate(s).getDate())||_re&&s.match(_re)){cell.z=o.dateNF||table_fmt[14];var k=0;if(_re&&s.match(_re)){s=dateNF_fix(s,o.dateNF,s.match(_re)||[]);k=1;}if(o.cellDates){cell.t='d';cell.v=parseDate(s,k);}else {cell.t='n';cell.v=datenum(parseDate(s,k));}if(o.cellText!==false)cell.w=SSF_format(cell.z,cell.v instanceof Date?datenum(cell.v):cell.v);if(!o.cellNF)delete cell.z;}else {cell.t='s';cell.v=s;}if(cell.t=='z');else if(o.dense){if(!ws[R])ws[R]=[];ws[R][C]=cell;}else ws[encode_cell({c:C,r:R})]=cell;start=end+1;startcc=str.charCodeAt(start);if(range.e.c<C)range.e.c=C;if(range.e.r<R)range.e.r=R;if(cc==sepcc)++C;else {C=0;++R;if(o.sheetRows&&o.sheetRows<=R)return true;}}outer:for(;end<str.length;++end)switch(cc=str.charCodeAt(end)){case 0x22:if(startcc===0x22)instr=!instr;break;case sepcc:case 0x0a:case 0x0d:if(!instr&&finish_cell())break outer;break;}if(end-start>0)finish_cell();ws['!ref']=encode_range(range);return ws;}function prn_to_sheet_str(str/*:string*/,opts)/*:Worksheet*/{if(!(opts&&opts.PRN))return dsv_to_sheet_str(str,opts);if(opts.FS)return dsv_to_sheet_str(str,opts);if(str.slice(0,4)=="sep=")return dsv_to_sheet_str(str,opts);if(str.indexOf("\t")>=0||str.indexOf(",")>=0||str.indexOf(";")>=0)return dsv_to_sheet_str(str,opts);return aoa_to_sheet(prn_to_aoa_str(str,opts),opts);}function prn_to_sheet(d/*:RawData*/,opts)/*:Worksheet*/{var str="",bytes=opts.type=='string'?[0,0,0,0]:firstbyte(d,opts);switch(opts.type){case'base64':str=Base64_decode(d);break;case'binary':str=d;break;case'buffer':if(opts.codepage==65001)str=d.toString('utf8');// TODO: test if buf
	else if(opts.codepage&&typeof $cptable!=='undefined')str=$cptable.utils.decode(opts.codepage,d);else str=has_buf&&Buffer.isBuffer(d)?d.toString('binary'):a2s(d);break;case'array':str=cc2str(d);break;case'string':str=d;break;default:throw new Error("Unrecognized type "+opts.type);}if(bytes[0]==0xEF&&bytes[1]==0xBB&&bytes[2]==0xBF)str=utf8read(str.slice(3));else if(opts.type!='string'&&opts.type!='buffer'&&opts.codepage==65001)str=utf8read(str);else if(opts.type=='binary'&&typeof $cptable!=='undefined'&&opts.codepage)str=$cptable.utils.decode(opts.codepage,$cptable.utils.encode(28591,str));if(str.slice(0,19)=="socialcalc:version:")return ETH.to_sheet(opts.type=='string'?str:utf8read(str),opts);return prn_to_sheet_str(str,opts);}function prn_to_workbook(d/*:RawData*/,opts)/*:Workbook*/{return sheet_to_workbook(prn_to_sheet(d,opts),opts);}function sheet_to_prn(ws/*:Worksheet*/ /*::, opts:?any*/)/*:string*/{var o/*:Array<string>*/=[];var r=safe_decode_range(ws['!ref']),cell/*:Cell*/;var dense=Array.isArray(ws);for(var R=r.s.r;R<=r.e.r;++R){var oo/*:Array<string>*/=[];for(var C=r.s.c;C<=r.e.c;++C){var coord=encode_cell({r:R,c:C});cell=dense?(ws[R]||[])[C]:ws[coord];if(!cell||cell.v==null){oo.push("          ");continue;}var w=(cell.w||(format_cell(cell),cell.w)||"").slice(0,10);while(w.length<10)w+=" ";oo.push(w+(C===0?" ":""));}o.push(oo.join(""));}return o.join("\n");}return {to_workbook:prn_to_workbook,to_sheet:prn_to_sheet,from_sheet:sheet_to_prn};}();/* Excel defaults to SYLK but warns if data is not valid */function read_wb_ID(d,opts){var o=opts||{},OLD_WTF=!!o.WTF;o.WTF=true;try{var out=SYLK.to_workbook(d,o);o.WTF=OLD_WTF;return out;}catch(e){o.WTF=OLD_WTF;if(!e.message.match(/SYLK bad record ID/)&&OLD_WTF)throw e;return PRN.to_workbook(d,opts);}}var WK_=/*#__PURE__*/function(){function lotushopper(data,cb/*:RecordHopperCB*/,opts/*:any*/){if(!data)return;prep_blob(data,data.l||0);var Enum=opts.Enum||WK1Enum;while(data.l<data.length){var RT=data.read_shift(2);var R=Enum[RT]||Enum[0xFFFF];var length=data.read_shift(2);var tgt=data.l+length;var d=R.f&&R.f(data,length,opts);data.l=tgt;if(cb(d,R,RT))return;}}function lotus_to_workbook(d/*:RawData*/,opts){switch(opts.type){case'base64':return lotus_to_workbook_buf(s2a(Base64_decode(d)),opts);case'binary':return lotus_to_workbook_buf(s2a(d),opts);case'buffer':case'array':return lotus_to_workbook_buf(d,opts);}throw "Unsupported type "+opts.type;}function lotus_to_workbook_buf(d,opts)/*:Workbook*/{if(!d)return d;var o=opts||{};var s/*:Worksheet*/=o.dense?[]:{}/*:any*/,n="Sheet1",next_n="",sidx=0;var sheets={},snames=[],realnames=[];var refguess={s:{r:0,c:0},e:{r:0,c:0}};var sheetRows=o.sheetRows||0;if(d[2]==0x00){if(d[3]==0x08||d[3]==0x09){if(d.length>=16&&d[14]==0x05&&d[15]===0x6c)throw new Error("Unsupported Works 3 for Mac file");}}if(d[2]==0x02){o.Enum=WK1Enum;lotushopper(d,function(val,R,RT){switch(RT){case 0x00:/* BOF */o.vers=val;if(val>=0x1000)o.qpro=true;break;case 0x06:refguess=val;break;/* RANGE */case 0xCC:if(val)next_n=val;break;/* SHEETNAMECS */case 0xDE:next_n=val;break;/* SHEETNAMELP */case 0x0F:/* LABEL */case 0x33:/* STRING */if(!o.qpro)val[1].v=val[1].v.slice(1);/* falls through */case 0x0D:/* INTEGER */case 0x0E:/* NUMBER */case 0x10:/* FORMULA */ /* TODO: actual translation of the format code */if(RT==0x0E&&(val[2]&0x70)==0x70&&(val[2]&0x0F)>1&&(val[2]&0x0F)<15){val[1].z=o.dateNF||table_fmt[14];if(o.cellDates){val[1].t='d';val[1].v=numdate(val[1].v);}}if(o.qpro){if(val[3]>sidx){s["!ref"]=encode_range(refguess);sheets[n]=s;snames.push(n);s=o.dense?[]:{};refguess={s:{r:0,c:0},e:{r:0,c:0}};sidx=val[3];n=next_n||"Sheet"+(sidx+1);next_n="";}}var tmpcell=o.dense?(s[val[0].r]||[])[val[0].c]:s[encode_cell(val[0])];if(tmpcell){tmpcell.t=val[1].t;tmpcell.v=val[1].v;if(val[1].z!=null)tmpcell.z=val[1].z;if(val[1].f!=null)tmpcell.f=val[1].f;break;}if(o.dense){if(!s[val[0].r])s[val[0].r]=[];s[val[0].r][val[0].c]=val[1];}else s[encode_cell(val[0])]=val[1];break;}},o);}else if(d[2]==0x1A||d[2]==0x0E){o.Enum=WK3Enum;if(d[2]==0x0E){o.qpro=true;d.l=0;}lotushopper(d,function(val,R,RT){switch(RT){case 0xCC:n=val;break;/* SHEETNAMECS */case 0x16:/* LABEL16 */val[1].v=val[1].v.slice(1);/* falls through */case 0x17:/* NUMBER17 */case 0x18:/* NUMBER18 */case 0x19:/* FORMULA19 */case 0x25:/* NUMBER25 */case 0x27:/* NUMBER27 */case 0x28:/* FORMULA28 */if(val[3]>sidx){s["!ref"]=encode_range(refguess);sheets[n]=s;snames.push(n);s=o.dense?[]:{};refguess={s:{r:0,c:0},e:{r:0,c:0}};sidx=val[3];n="Sheet"+(sidx+1);}if(sheetRows>0&&val[0].r>=sheetRows)break;if(o.dense){if(!s[val[0].r])s[val[0].r]=[];s[val[0].r][val[0].c]=val[1];}else s[encode_cell(val[0])]=val[1];if(refguess.e.c<val[0].c)refguess.e.c=val[0].c;if(refguess.e.r<val[0].r)refguess.e.r=val[0].r;break;case 0x1B:/* XFORMAT */if(val[0x36b0])realnames[val[0x36b0][0]]=val[0x36b0][1];break;case 0x0601:/* SHEETINFOQP */realnames[val[0]]=val[1];if(val[0]==sidx)n=val[1];break;}},o);}else throw new Error("Unrecognized LOTUS BOF "+d[2]);s["!ref"]=encode_range(refguess);sheets[next_n||n]=s;snames.push(next_n||n);if(!realnames.length)return {SheetNames:snames,Sheets:sheets};var osheets={},rnames=[];/* TODO: verify no collisions */for(var i=0;i<realnames.length;++i)if(sheets[snames[i]]){rnames.push(realnames[i]||snames[i]);osheets[realnames[i]]=sheets[realnames[i]]||sheets[snames[i]];}else {rnames.push(realnames[i]);osheets[realnames[i]]={"!ref":"A1"};}return {SheetNames:rnames,Sheets:osheets};}function sheet_to_wk1(ws/*:Worksheet*/,opts/*:WriteOpts*/){var o=opts||{};if(+o.codepage>=0)set_cp(+o.codepage);if(o.type=="string")throw new Error("Cannot write WK1 to JS string");var ba=buf_array();var range=safe_decode_range(ws["!ref"]);var dense=Array.isArray(ws);var cols=[];write_biff_rec(ba,0x00,write_BOF_WK1(0x0406));write_biff_rec(ba,0x06,write_RANGE(range));var max_R=Math.min(range.e.r,8191);for(var R=range.s.r;R<=max_R;++R){var rr=encode_row(R);for(var C=range.s.c;C<=range.e.c;++C){if(R===range.s.r)cols[C]=encode_col(C);var ref=cols[C]+rr;var cell=dense?(ws[R]||[])[C]:ws[ref];if(!cell||cell.t=="z")continue;/* TODO: formula records */if(cell.t=="n"){if((cell.v|0)==cell.v&&cell.v>=-32768&&cell.v<=32767)write_biff_rec(ba,0x0d,write_INTEGER(R,C,cell.v));else write_biff_rec(ba,0x0e,write_NUMBER(R,C,cell.v));}else {var str=format_cell(cell);write_biff_rec(ba,0x0F,write_LABEL(R,C,str.slice(0,239)));}}}write_biff_rec(ba,0x01);return ba.end();}function book_to_wk3(wb/*:Workbook*/,opts/*:WriteOpts*/){var o=opts||{};if(+o.codepage>=0)set_cp(+o.codepage);if(o.type=="string")throw new Error("Cannot write WK3 to JS string");var ba=buf_array();write_biff_rec(ba,0x00,write_BOF_WK3(wb));for(var i=0,cnt=0;i<wb.SheetNames.length;++i)if((wb.Sheets[wb.SheetNames[i]]||{})["!ref"])write_biff_rec(ba,0x1b,write_XFORMAT_SHEETNAME(wb.SheetNames[i],cnt++));var wsidx=0;for(i=0;i<wb.SheetNames.length;++i){var ws=wb.Sheets[wb.SheetNames[i]];if(!ws||!ws["!ref"])continue;var range=safe_decode_range(ws["!ref"]);var dense=Array.isArray(ws);var cols=[];var max_R=Math.min(range.e.r,8191);for(var R=range.s.r;R<=max_R;++R){var rr=encode_row(R);for(var C=range.s.c;C<=range.e.c;++C){if(R===range.s.r)cols[C]=encode_col(C);var ref=cols[C]+rr;var cell=dense?(ws[R]||[])[C]:ws[ref];if(!cell||cell.t=="z")continue;/* TODO: FORMULA19 NUMBER18 records */if(cell.t=="n"){write_biff_rec(ba,0x17,write_NUMBER_17(R,C,wsidx,cell.v));}else {var str=format_cell(cell);/* TODO: max len? */write_biff_rec(ba,0x16,write_LABEL_16(R,C,wsidx,str.slice(0,239)));}}}++wsidx;}write_biff_rec(ba,0x01);return ba.end();}function write_BOF_WK1(v/*:number*/){var out=new_buf(2);out.write_shift(2,v);return out;}function write_BOF_WK3(wb/*:Workbook*/){var out=new_buf(26);out.write_shift(2,0x1000);out.write_shift(2,0x0004);out.write_shift(4,0x0000);var rows=0,cols=0,wscnt=0;for(var i=0;i<wb.SheetNames.length;++i){var name=wb.SheetNames[i];var ws=wb.Sheets[name];if(!ws||!ws["!ref"])continue;++wscnt;var range=decode_range(ws["!ref"]);if(rows<range.e.r)rows=range.e.r;if(cols<range.e.c)cols=range.e.c;}if(rows>8191)rows=8191;out.write_shift(2,rows);out.write_shift(1,wscnt);out.write_shift(1,cols);out.write_shift(2,0x00);out.write_shift(2,0x00);out.write_shift(1,0x01);out.write_shift(1,0x02);out.write_shift(4,0);out.write_shift(4,0);return out;}function parse_RANGE(blob,length,opts){var o={s:{c:0,r:0},e:{c:0,r:0}};if(length==8&&opts.qpro){o.s.c=blob.read_shift(1);blob.l++;o.s.r=blob.read_shift(2);o.e.c=blob.read_shift(1);blob.l++;o.e.r=blob.read_shift(2);return o;}o.s.c=blob.read_shift(2);o.s.r=blob.read_shift(2);if(length==12&&opts.qpro)blob.l+=2;o.e.c=blob.read_shift(2);o.e.r=blob.read_shift(2);if(length==12&&opts.qpro)blob.l+=2;if(o.s.c==0xFFFF)o.s.c=o.e.c=o.s.r=o.e.r=0;return o;}function write_RANGE(range){var out=new_buf(8);out.write_shift(2,range.s.c);out.write_shift(2,range.s.r);out.write_shift(2,range.e.c);out.write_shift(2,range.e.r);return out;}function parse_cell(blob,length,opts){var o=[{c:0,r:0},{t:'n',v:0},0,0];if(opts.qpro&&opts.vers!=0x5120){o[0].c=blob.read_shift(1);o[3]=blob.read_shift(1);o[0].r=blob.read_shift(2);blob.l+=2;}else {o[2]=blob.read_shift(1);o[0].c=blob.read_shift(2);o[0].r=blob.read_shift(2);}return o;}function parse_LABEL(blob,length,opts){var tgt=blob.l+length;var o=parse_cell(blob,length,opts);o[1].t='s';if(opts.vers==0x5120){blob.l++;var len=blob.read_shift(1);o[1].v=blob.read_shift(len,'utf8');return o;}if(opts.qpro)blob.l++;o[1].v=blob.read_shift(tgt-blob.l,'cstr');return o;}function write_LABEL(R,C,s){/* TODO: encoding */var o=new_buf(7+s.length);o.write_shift(1,0xFF);o.write_shift(2,C);o.write_shift(2,R);o.write_shift(1,0x27);// ??
	for(var i=0;i<o.length;++i){var cc=s.charCodeAt(i);o.write_shift(1,cc>=0x80?0x5F:cc);}o.write_shift(1,0);return o;}function parse_INTEGER(blob,length,opts){var o=parse_cell(blob,length,opts);o[1].v=blob.read_shift(2,'i');return o;}function write_INTEGER(R,C,v){var o=new_buf(7);o.write_shift(1,0xFF);o.write_shift(2,C);o.write_shift(2,R);o.write_shift(2,v,'i');return o;}function parse_NUMBER(blob,length,opts){var o=parse_cell(blob,length,opts);o[1].v=blob.read_shift(8,'f');return o;}function write_NUMBER(R,C,v){var o=new_buf(13);o.write_shift(1,0xFF);o.write_shift(2,C);o.write_shift(2,R);o.write_shift(8,v,'f');return o;}function parse_FORMULA(blob,length,opts){var tgt=blob.l+length;var o=parse_cell(blob,length,opts);/* TODO: formula */o[1].v=blob.read_shift(8,'f');if(opts.qpro)blob.l=tgt;else {var flen=blob.read_shift(2);wk1_fmla_to_csf(blob.slice(blob.l,blob.l+flen),o);blob.l+=flen;}return o;}function wk1_parse_rc(B,V,col){var rel=V&0x8000;V&=~0x8000;V=(rel?B:0)+(V>=0x2000?V-0x4000:V);return (rel?"":"$")+(col?encode_col(V):encode_row(V));}/* var oprec = [
			8, 8, 8, 8, 8, 8, 8, 8, 6, 4, 4, 5, 5, 7, 3, 3,
			3, 3, 3, 3, 1, 1, 2, 6, 8, 8, 8, 8, 8, 8, 8, 8
		]; */ /* TODO: flesh out */var FuncTab={0x33:["FALSE",0],0x34:["TRUE",0],0x46:["LEN",1],0x50:["SUM",69],0x51:["AVERAGEA",69],0x52:["COUNTA",69],0x53:["MINA",69],0x54:["MAXA",69],0x6F:["T",1]};var BinOpTab=["","","","","","","","",// eslint-disable-line no-mixed-spaces-and-tabs
	"","+","-","*","/","^","=","<>",// eslint-disable-line no-mixed-spaces-and-tabs
	"<=",">=","<",">","","","","",// eslint-disable-line no-mixed-spaces-and-tabs
	"&","","","","","","",""// eslint-disable-line no-mixed-spaces-and-tabs
	];function wk1_fmla_to_csf(blob,o){prep_blob(blob,0);var out=[],argc=0,R="",C="",argL="",argR="";while(blob.l<blob.length){var cc=blob[blob.l++];switch(cc){case 0x00:out.push(blob.read_shift(8,'f'));break;case 0x01:{C=wk1_parse_rc(o[0].c,blob.read_shift(2),true);R=wk1_parse_rc(o[0].r,blob.read_shift(2),false);out.push(C+R);}break;case 0x02:{var c=wk1_parse_rc(o[0].c,blob.read_shift(2),true);var r=wk1_parse_rc(o[0].r,blob.read_shift(2),false);C=wk1_parse_rc(o[0].c,blob.read_shift(2),true);R=wk1_parse_rc(o[0].r,blob.read_shift(2),false);out.push(c+r+":"+C+R);}break;case 0x03:if(blob.l<blob.length){console.error("WK1 premature formula end");return;}break;case 0x04:out.push("("+out.pop()+")");break;case 0x05:out.push(blob.read_shift(2));break;case 0x06:{/* TODO: text encoding */var Z="";while(cc=blob[blob.l++])Z+=String.fromCharCode(cc);out.push('"'+Z.replace(/"/g,'""')+'"');}break;case 0x08:out.push("-"+out.pop());break;case 0x17:out.push("+"+out.pop());break;case 0x16:out.push("NOT("+out.pop()+")");break;case 0x14:case 0x15:{argR=out.pop();argL=out.pop();out.push(["AND","OR"][cc-0x14]+"("+argL+","+argR+")");}break;default:if(cc<0x20&&BinOpTab[cc]){argR=out.pop();argL=out.pop();out.push(argL+BinOpTab[cc]+argR);}else if(FuncTab[cc]){argc=FuncTab[cc][1];if(argc==69)argc=blob[blob.l++];if(argc>out.length){console.error("WK1 bad formula parse 0x"+cc.toString(16)+":|"+out.join("|")+"|");return;}var args=out.slice(-argc);out.length-=argc;out.push(FuncTab[cc][0]+"("+args.join(",")+")");}else if(cc<=0x07)return console.error("WK1 invalid opcode "+cc.toString(16));else if(cc<=0x18)return console.error("WK1 unsupported op "+cc.toString(16));else if(cc<=0x1E)return console.error("WK1 invalid opcode "+cc.toString(16));else if(cc<=0x73)return console.error("WK1 unsupported function opcode "+cc.toString(16));// possible future functions ??
	else return console.error("WK1 unrecognized opcode "+cc.toString(16));}}if(out.length==1)o[1].f=""+out[0];else console.error("WK1 bad formula parse |"+out.join("|")+"|");}function parse_cell_3(blob/*::, length*/){var o=[{c:0,r:0},{t:'n',v:0},0];o[0].r=blob.read_shift(2);o[3]=blob[blob.l++];o[0].c=blob[blob.l++];return o;}function parse_LABEL_16(blob,length){var o=parse_cell_3(blob);o[1].t='s';o[1].v=blob.read_shift(length-4,'cstr');return o;}function write_LABEL_16(R,C,wsidx,s){/* TODO: encoding */var o=new_buf(6+s.length);o.write_shift(2,R);o.write_shift(1,wsidx);o.write_shift(1,C);o.write_shift(1,0x27);for(var i=0;i<s.length;++i){var cc=s.charCodeAt(i);o.write_shift(1,cc>=0x80?0x5F:cc);}o.write_shift(1,0);return o;}function parse_NUMBER_18(blob,length){var o=parse_cell_3(blob);o[1].v=blob.read_shift(2);var v=o[1].v>>1;if(o[1].v&0x1){switch(v&0x07){case 0:v=(v>>3)*5000;break;case 1:v=(v>>3)*500;break;case 2:v=(v>>3)/20;break;case 3:v=(v>>3)/200;break;case 4:v=(v>>3)/2000;break;case 5:v=(v>>3)/20000;break;case 6:v=(v>>3)/16;break;case 7:v=(v>>3)/64;break;}}o[1].v=v;return o;}function parse_NUMBER_17(blob,length){var o=parse_cell_3(blob);var v1=blob.read_shift(4);var v2=blob.read_shift(4);var e=blob.read_shift(2);if(e==0xFFFF){if(v1===0&&v2===0xC0000000){o[1].t="e";o[1].v=0x0F;}// ERR -> #VALUE!
	else if(v1===0&&v2===0xD0000000){o[1].t="e";o[1].v=0x2A;}// NA -> #N/A
	else o[1].v=0;return o;}var s=e&0x8000;e=(e&0x7FFF)-16446;o[1].v=(1-s*2)*(v2*Math.pow(2,e+32)+v1*Math.pow(2,e));return o;}function write_NUMBER_17(R,C,wsidx,v){var o=new_buf(14);o.write_shift(2,R);o.write_shift(1,wsidx);o.write_shift(1,C);if(v==0){o.write_shift(4,0);o.write_shift(4,0);o.write_shift(2,0xFFFF);return o;}var s=0,e=0,v1=0,v2=0;if(v<0){s=1;v=-v;}e=Math.log2(v)|0;v/=Math.pow(2,e-31);v2=v>>>0;if((v2&0x80000000)==0){v/=2;++e;v2=v>>>0;}v-=v2;v2|=0x80000000;v2>>>=0;v*=Math.pow(2,32);v1=v>>>0;o.write_shift(4,v1);o.write_shift(4,v2);e+=0x3FFF+(s?0x8000:0);o.write_shift(2,e);return o;}function parse_FORMULA_19(blob,length){var o=parse_NUMBER_17(blob);blob.l+=length-14;/* TODO: WK3 formula */return o;}function parse_NUMBER_25(blob,length){var o=parse_cell_3(blob);var v1=blob.read_shift(4);o[1].v=v1>>6;return o;}function parse_NUMBER_27(blob,length){var o=parse_cell_3(blob);var v1=blob.read_shift(8,'f');o[1].v=v1;return o;}function parse_FORMULA_28(blob,length){var o=parse_NUMBER_27(blob);blob.l+=length-10;/* TODO: formula */return o;}function parse_SHEETNAMECS(blob,length){return blob[blob.l+length-1]==0?blob.read_shift(length,'cstr'):"";}function parse_SHEETNAMELP(blob,length){var len=blob[blob.l++];if(len>length-1)len=length-1;var o="";while(o.length<len)o+=String.fromCharCode(blob[blob.l++]);return o;}function parse_SHEETINFOQP(blob,length,opts){if(!opts.qpro||length<21)return;var id=blob.read_shift(1);blob.l+=17;blob.l+=1;//var len = blob.read_shift(1);
	blob.l+=2;var nm=blob.read_shift(length-21,'cstr');return [id,nm];}function parse_XFORMAT(blob,length){var o={},tgt=blob.l+length;while(blob.l<tgt){var dt=blob.read_shift(2);if(dt==0x36b0){o[dt]=[0,""];o[dt][0]=blob.read_shift(2);while(blob[blob.l]){o[dt][1]+=String.fromCharCode(blob[blob.l]);blob.l++;}blob.l++;}// TODO: 0x3a99 ??
	}return o;}function write_XFORMAT_SHEETNAME(name,wsidx){var out=new_buf(5+name.length);out.write_shift(2,0x36b0);out.write_shift(2,wsidx);for(var i=0;i<name.length;++i){var cc=name.charCodeAt(i);out[out.l++]=cc>0x7F?0x5F:cc;}out[out.l++]=0;return out;}var WK1Enum={/*::[*/0x0000/*::]*/:{n:"BOF",f:parseuint16},/*::[*/0x0001/*::]*/:{n:"EOF"},/*::[*/0x0002/*::]*/:{n:"CALCMODE"},/*::[*/0x0003/*::]*/:{n:"CALCORDER"},/*::[*/0x0004/*::]*/:{n:"SPLIT"},/*::[*/0x0005/*::]*/:{n:"SYNC"},/*::[*/0x0006/*::]*/:{n:"RANGE",f:parse_RANGE},/*::[*/0x0007/*::]*/:{n:"WINDOW1"},/*::[*/0x0008/*::]*/:{n:"COLW1"},/*::[*/0x0009/*::]*/:{n:"WINTWO"},/*::[*/0x000A/*::]*/:{n:"COLW2"},/*::[*/0x000B/*::]*/:{n:"NAME"},/*::[*/0x000C/*::]*/:{n:"BLANK"},/*::[*/0x000D/*::]*/:{n:"INTEGER",f:parse_INTEGER},/*::[*/0x000E/*::]*/:{n:"NUMBER",f:parse_NUMBER},/*::[*/0x000F/*::]*/:{n:"LABEL",f:parse_LABEL},/*::[*/0x0010/*::]*/:{n:"FORMULA",f:parse_FORMULA},/*::[*/0x0018/*::]*/:{n:"TABLE"},/*::[*/0x0019/*::]*/:{n:"ORANGE"},/*::[*/0x001A/*::]*/:{n:"PRANGE"},/*::[*/0x001B/*::]*/:{n:"SRANGE"},/*::[*/0x001C/*::]*/:{n:"FRANGE"},/*::[*/0x001D/*::]*/:{n:"KRANGE1"},/*::[*/0x0020/*::]*/:{n:"HRANGE"},/*::[*/0x0023/*::]*/:{n:"KRANGE2"},/*::[*/0x0024/*::]*/:{n:"PROTEC"},/*::[*/0x0025/*::]*/:{n:"FOOTER"},/*::[*/0x0026/*::]*/:{n:"HEADER"},/*::[*/0x0027/*::]*/:{n:"SETUP"},/*::[*/0x0028/*::]*/:{n:"MARGINS"},/*::[*/0x0029/*::]*/:{n:"LABELFMT"},/*::[*/0x002A/*::]*/:{n:"TITLES"},/*::[*/0x002B/*::]*/:{n:"SHEETJS"},/*::[*/0x002D/*::]*/:{n:"GRAPH"},/*::[*/0x002E/*::]*/:{n:"NGRAPH"},/*::[*/0x002F/*::]*/:{n:"CALCCOUNT"},/*::[*/0x0030/*::]*/:{n:"UNFORMATTED"},/*::[*/0x0031/*::]*/:{n:"CURSORW12"},/*::[*/0x0032/*::]*/:{n:"WINDOW"},/*::[*/0x0033/*::]*/:{n:"STRING",f:parse_LABEL},/*::[*/0x0037/*::]*/:{n:"PASSWORD"},/*::[*/0x0038/*::]*/:{n:"LOCKED"},/*::[*/0x003C/*::]*/:{n:"QUERY"},/*::[*/0x003D/*::]*/:{n:"QUERYNAME"},/*::[*/0x003E/*::]*/:{n:"PRINT"},/*::[*/0x003F/*::]*/:{n:"PRINTNAME"},/*::[*/0x0040/*::]*/:{n:"GRAPH2"},/*::[*/0x0041/*::]*/:{n:"GRAPHNAME"},/*::[*/0x0042/*::]*/:{n:"ZOOM"},/*::[*/0x0043/*::]*/:{n:"SYMSPLIT"},/*::[*/0x0044/*::]*/:{n:"NSROWS"},/*::[*/0x0045/*::]*/:{n:"NSCOLS"},/*::[*/0x0046/*::]*/:{n:"RULER"},/*::[*/0x0047/*::]*/:{n:"NNAME"},/*::[*/0x0048/*::]*/:{n:"ACOMM"},/*::[*/0x0049/*::]*/:{n:"AMACRO"},/*::[*/0x004A/*::]*/:{n:"PARSE"},/*::[*/0x0066/*::]*/:{n:"PRANGES??"},/*::[*/0x0067/*::]*/:{n:"RRANGES??"},/*::[*/0x0068/*::]*/:{n:"FNAME??"},/*::[*/0x0069/*::]*/:{n:"MRANGES??"},/*::[*/0x00CC/*::]*/:{n:"SHEETNAMECS",f:parse_SHEETNAMECS},/*::[*/0x00DE/*::]*/:{n:"SHEETNAMELP",f:parse_SHEETNAMELP},/*::[*/0xFFFF/*::]*/:{n:""}};var WK3Enum={/*::[*/0x0000/*::]*/:{n:"BOF"},/*::[*/0x0001/*::]*/:{n:"EOF"},/*::[*/0x0002/*::]*/:{n:"PASSWORD"},/*::[*/0x0003/*::]*/:{n:"CALCSET"},/*::[*/0x0004/*::]*/:{n:"WINDOWSET"},/*::[*/0x0005/*::]*/:{n:"SHEETCELLPTR"},/*::[*/0x0006/*::]*/:{n:"SHEETLAYOUT"},/*::[*/0x0007/*::]*/:{n:"COLUMNWIDTH"},/*::[*/0x0008/*::]*/:{n:"HIDDENCOLUMN"},/*::[*/0x0009/*::]*/:{n:"USERRANGE"},/*::[*/0x000A/*::]*/:{n:"SYSTEMRANGE"},/*::[*/0x000B/*::]*/:{n:"ZEROFORCE"},/*::[*/0x000C/*::]*/:{n:"SORTKEYDIR"},/*::[*/0x000D/*::]*/:{n:"FILESEAL"},/*::[*/0x000E/*::]*/:{n:"DATAFILLNUMS"},/*::[*/0x000F/*::]*/:{n:"PRINTMAIN"},/*::[*/0x0010/*::]*/:{n:"PRINTSTRING"},/*::[*/0x0011/*::]*/:{n:"GRAPHMAIN"},/*::[*/0x0012/*::]*/:{n:"GRAPHSTRING"},/*::[*/0x0013/*::]*/:{n:"??"},/*::[*/0x0014/*::]*/:{n:"ERRCELL"},/*::[*/0x0015/*::]*/:{n:"NACELL"},/*::[*/0x0016/*::]*/:{n:"LABEL16",f:parse_LABEL_16},/*::[*/0x0017/*::]*/:{n:"NUMBER17",f:parse_NUMBER_17},/*::[*/0x0018/*::]*/:{n:"NUMBER18",f:parse_NUMBER_18},/*::[*/0x0019/*::]*/:{n:"FORMULA19",f:parse_FORMULA_19},/*::[*/0x001A/*::]*/:{n:"FORMULA1A"},/*::[*/0x001B/*::]*/:{n:"XFORMAT",f:parse_XFORMAT},/*::[*/0x001C/*::]*/:{n:"DTLABELMISC"},/*::[*/0x001D/*::]*/:{n:"DTLABELCELL"},/*::[*/0x001E/*::]*/:{n:"GRAPHWINDOW"},/*::[*/0x001F/*::]*/:{n:"CPA"},/*::[*/0x0020/*::]*/:{n:"LPLAUTO"},/*::[*/0x0021/*::]*/:{n:"QUERY"},/*::[*/0x0022/*::]*/:{n:"HIDDENSHEET"},/*::[*/0x0023/*::]*/:{n:"??"},/*::[*/0x0025/*::]*/:{n:"NUMBER25",f:parse_NUMBER_25},/*::[*/0x0026/*::]*/:{n:"??"},/*::[*/0x0027/*::]*/:{n:"NUMBER27",f:parse_NUMBER_27},/*::[*/0x0028/*::]*/:{n:"FORMULA28",f:parse_FORMULA_28},/*::[*/0x008E/*::]*/:{n:"??"},/*::[*/0x0093/*::]*/:{n:"??"},/*::[*/0x0096/*::]*/:{n:"??"},/*::[*/0x0097/*::]*/:{n:"??"},/*::[*/0x0098/*::]*/:{n:"??"},/*::[*/0x0099/*::]*/:{n:"??"},/*::[*/0x009A/*::]*/:{n:"??"},/*::[*/0x009B/*::]*/:{n:"??"},/*::[*/0x009C/*::]*/:{n:"??"},/*::[*/0x00A3/*::]*/:{n:"??"},/*::[*/0x00AE/*::]*/:{n:"??"},/*::[*/0x00AF/*::]*/:{n:"??"},/*::[*/0x00B0/*::]*/:{n:"??"},/*::[*/0x00B1/*::]*/:{n:"??"},/*::[*/0x00B8/*::]*/:{n:"??"},/*::[*/0x00B9/*::]*/:{n:"??"},/*::[*/0x00BA/*::]*/:{n:"??"},/*::[*/0x00BB/*::]*/:{n:"??"},/*::[*/0x00BC/*::]*/:{n:"??"},/*::[*/0x00C3/*::]*/:{n:"??"},/*::[*/0x00C9/*::]*/:{n:"??"},/*::[*/0x00CC/*::]*/:{n:"SHEETNAMECS",f:parse_SHEETNAMECS},/*::[*/0x00CD/*::]*/:{n:"??"},/*::[*/0x00CE/*::]*/:{n:"??"},/*::[*/0x00CF/*::]*/:{n:"??"},/*::[*/0x00D0/*::]*/:{n:"??"},/*::[*/0x0100/*::]*/:{n:"??"},/*::[*/0x0103/*::]*/:{n:"??"},/*::[*/0x0104/*::]*/:{n:"??"},/*::[*/0x0105/*::]*/:{n:"??"},/*::[*/0x0106/*::]*/:{n:"??"},/*::[*/0x0107/*::]*/:{n:"??"},/*::[*/0x0109/*::]*/:{n:"??"},/*::[*/0x010A/*::]*/:{n:"??"},/*::[*/0x010B/*::]*/:{n:"??"},/*::[*/0x010C/*::]*/:{n:"??"},/*::[*/0x010E/*::]*/:{n:"??"},/*::[*/0x010F/*::]*/:{n:"??"},/*::[*/0x0180/*::]*/:{n:"??"},/*::[*/0x0185/*::]*/:{n:"??"},/*::[*/0x0186/*::]*/:{n:"??"},/*::[*/0x0189/*::]*/:{n:"??"},/*::[*/0x018C/*::]*/:{n:"??"},/*::[*/0x0200/*::]*/:{n:"??"},/*::[*/0x0202/*::]*/:{n:"??"},/*::[*/0x0201/*::]*/:{n:"??"},/*::[*/0x0204/*::]*/:{n:"??"},/*::[*/0x0205/*::]*/:{n:"??"},/*::[*/0x0280/*::]*/:{n:"??"},/*::[*/0x0281/*::]*/:{n:"??"},/*::[*/0x0282/*::]*/:{n:"??"},/*::[*/0x0283/*::]*/:{n:"??"},/*::[*/0x0284/*::]*/:{n:"??"},/*::[*/0x0285/*::]*/:{n:"??"},/*::[*/0x0286/*::]*/:{n:"??"},/*::[*/0x0287/*::]*/:{n:"??"},/*::[*/0x0288/*::]*/:{n:"??"},/*::[*/0x0292/*::]*/:{n:"??"},/*::[*/0x0293/*::]*/:{n:"??"},/*::[*/0x0294/*::]*/:{n:"??"},/*::[*/0x0295/*::]*/:{n:"??"},/*::[*/0x0296/*::]*/:{n:"??"},/*::[*/0x0299/*::]*/:{n:"??"},/*::[*/0x029A/*::]*/:{n:"??"},/*::[*/0x0300/*::]*/:{n:"??"},/*::[*/0x0304/*::]*/:{n:"??"},/*::[*/0x0601/*::]*/:{n:"SHEETINFOQP",f:parse_SHEETINFOQP},/*::[*/0x0640/*::]*/:{n:"??"},/*::[*/0x0642/*::]*/:{n:"??"},/*::[*/0x0701/*::]*/:{n:"??"},/*::[*/0x0702/*::]*/:{n:"??"},/*::[*/0x0703/*::]*/:{n:"??"},/*::[*/0x0704/*::]*/:{n:"??"},/*::[*/0x0780/*::]*/:{n:"??"},/*::[*/0x0800/*::]*/:{n:"??"},/*::[*/0x0801/*::]*/:{n:"??"},/*::[*/0x0804/*::]*/:{n:"??"},/*::[*/0x0A80/*::]*/:{n:"??"},/*::[*/0x2AF6/*::]*/:{n:"??"},/*::[*/0x3231/*::]*/:{n:"??"},/*::[*/0x6E49/*::]*/:{n:"??"},/*::[*/0x6F44/*::]*/:{n:"??"},/*::[*/0xFFFF/*::]*/:{n:""}};return {sheet_to_wk1:sheet_to_wk1,book_to_wk3:book_to_wk3,to_workbook:lotus_to_workbook};}();/* 18.4.7 rPr CT_RPrElt */function parse_rpr(rpr){var font={},m=rpr.match(tagregex),i=0;var pass=false;if(m)for(;i!=m.length;++i){var y=parsexmltag(m[i]);switch(y[0].replace(/\w*:/g,"")){/* 18.8.12 condense CT_BooleanProperty */ /* ** not required . */case'<condense':break;/* 18.8.17 extend CT_BooleanProperty */ /* ** not required . */case'<extend':break;/* 18.8.36 shadow CT_BooleanProperty */ /* ** not required . */case'<shadow':if(!y.val)break;/* falls through */case'<shadow>':case'<shadow/>':font.shadow=1;break;case'</shadow>':break;/* 18.4.1 charset CT_IntProperty TODO */case'<charset':if(y.val=='1')break;font.cp=CS2CP[parseInt(y.val,10)];break;/* 18.4.2 outline CT_BooleanProperty TODO */case'<outline':if(!y.val)break;/* falls through */case'<outline>':case'<outline/>':font.outline=1;break;case'</outline>':break;/* 18.4.5 rFont CT_FontName */case'<rFont':font.name=y.val;break;/* 18.4.11 sz CT_FontSize */case'<sz':font.sz=y.val;break;/* 18.4.10 strike CT_BooleanProperty */case'<strike':if(!y.val)break;/* falls through */case'<strike>':case'<strike/>':font.strike=1;break;case'</strike>':break;/* 18.4.13 u CT_UnderlineProperty */case'<u':if(!y.val)break;switch(y.val){case'double':font.uval="double";break;case'singleAccounting':font.uval="single-accounting";break;case'doubleAccounting':font.uval="double-accounting";break;}/* falls through */case'<u>':case'<u/>':font.u=1;break;case'</u>':break;/* 18.8.2 b */case'<b':if(y.val=='0')break;/* falls through */case'<b>':case'<b/>':font.b=1;break;case'</b>':break;/* 18.8.26 i */case'<i':if(y.val=='0')break;/* falls through */case'<i>':case'<i/>':font.i=1;break;case'</i>':break;/* 18.3.1.15 color CT_Color TODO: tint, theme, auto, indexed */case'<color':if(y.rgb)font.color=y.rgb.slice(2,8);break;case'<color>':case'<color/>':case'</color>':break;/* 18.8.18 family ST_FontFamily */case'<family':font.family=y.val;break;case'<family>':case'<family/>':case'</family>':break;/* 18.4.14 vertAlign CT_VerticalAlignFontProperty TODO */case'<vertAlign':font.valign=y.val;break;case'<vertAlign>':case'<vertAlign/>':case'</vertAlign>':break;/* 18.8.35 scheme CT_FontScheme TODO */case'<scheme':break;case'<scheme>':case'<scheme/>':case'</scheme>':break;/* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':break;case'<ext':pass=true;break;case'</ext>':pass=false;break;default:if(y[0].charCodeAt(1)!==47&&!pass)throw new Error('Unrecognized rich format '+y[0]);}}return font;}var parse_rs=/*#__PURE__*/function(){var tregex=matchtag("t"),rpregex=matchtag("rPr");/* 18.4.4 r CT_RElt */function parse_r(r){/* 18.4.12 t ST_Xstring */var t=r.match(tregex)/*, cp = 65001*/;if(!t)return {t:"s",v:""};var o/*:Cell*/={t:'s',v:unescapexml(t[1])}/*:any*/;var rpr=r.match(rpregex);if(rpr)o.s=parse_rpr(rpr[1]);return o;}var rregex=/<(?:\w+:)?r>/g,rend=/<\/(?:\w+:)?r>/;return function parse_rs(rs){return rs.replace(rregex,"").split(rend).map(parse_r).filter(function(r){return r.v;});};}();/* Parse a list of <r> tags */var rs_to_html=/*#__PURE__*/function parse_rs_factory(){var nlregex=/(\r\n|\n)/g;function parse_rpr2(font,intro,outro){var style/*:Array<string>*/=[];if(font.u)style.push("text-decoration: underline;");if(font.uval)style.push("text-underline-style:"+font.uval+";");if(font.sz)style.push("font-size:"+font.sz+"pt;");if(font.outline)style.push("text-effect: outline;");if(font.shadow)style.push("text-shadow: auto;");intro.push('<span style="'+style.join("")+'">');if(font.b){intro.push("<b>");outro.push("</b>");}if(font.i){intro.push("<i>");outro.push("</i>");}if(font.strike){intro.push("<s>");outro.push("</s>");}var align=font.valign||"";if(align=="superscript"||align=="super")align="sup";else if(align=="subscript")align="sub";if(align!=""){intro.push("<"+align+">");outro.push("</"+align+">");}outro.push("</span>");return font;}/* 18.4.4 r CT_RElt */function r_to_html(r){var terms/*:[Array<string>, string, Array<string>]*/=[[],r.v,[]];if(!r.v)return "";if(r.s)parse_rpr2(r.s,terms[0],terms[2]);return terms[0].join("")+terms[1].replace(nlregex,'<br/>')+terms[2].join("");}return function parse_rs(rs){return rs.map(r_to_html).join("");};}();/* 18.4.8 si CT_Rst */var sitregex=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,sirregex=/<(?:\w+:)?r>/;var sirphregex=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;function parse_si(x,opts){var html=opts?opts.cellHTML:true;var z={};if(!x)return {t:""};//var y;
	/* 18.4.12 t ST_Xstring (Plaintext String) */ // TODO: is whitespace actually valid here?
	if(x.match(/^\s*<(?:\w+:)?t[^>]*>/)){z.t=unescapexml(utf8read(x.slice(x.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||""));z.r=utf8read(x);if(html)z.h=escapehtml(z.t);}/* 18.4.4 r CT_RElt (Rich Text Run) */else if(/*y = */x.match(sirregex)){z.r=utf8read(x);z.t=unescapexml(utf8read((x.replace(sirphregex,'').match(sitregex)||[]).join("").replace(tagregex,"")));if(html)z.h=rs_to_html(parse_rs(z.r));}/* 18.4.3 phoneticPr CT_PhoneticPr (TODO: needed for Asian support) */ /* 18.4.6 rPh CT_PhoneticRun (TODO: needed for Asian support) */return z;}/* 18.4 Shared String Table */var sstr0=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;var sstr1=/<(?:\w+:)?(?:si|sstItem)>/g;var sstr2=/<\/(?:\w+:)?(?:si|sstItem)>/;function parse_sst_xml(data/*:string*/,opts)/*:SST*/{var s/*:SST*/=[]/*:any*/,ss="";if(!data)return s;/* 18.4.9 sst CT_Sst */var sst=data.match(sstr0);if(sst){ss=sst[2].replace(sstr1,"").split(sstr2);for(var i=0;i!=ss.length;++i){var o=parse_si(ss[i].trim(),opts);if(o!=null)s[s.length]=o;}sst=parsexmltag(sst[1]);s.Count=sst.count;s.Unique=sst.uniqueCount;}return s;}/* [MS-XLSB] 2.4.221 BrtBeginSst */function parse_BrtBeginSst(data){return [data.read_shift(4),data.read_shift(4)];}/* [MS-XLSB] 2.1.7.45 Shared Strings */function parse_sst_bin(data,opts)/*:SST*/{var s/*:SST*/=[]/*:any*/;var pass=false;recordhopper(data,function hopper_sst(val,R,RT){switch(RT){case 0x009F:/* BrtBeginSst */s.Count=val[0];s.Unique=val[1];break;case 0x0013:/* BrtSSTItem */s.push(val);break;case 0x00A0:/* BrtEndSst */return true;case 0x0023:/* BrtFRTBegin */pass=true;break;case 0x0024:/* BrtFRTEnd */pass=false;break;default:if(R.T);if(!pass||opts.WTF)throw new Error("Unexpected record 0x"+RT.toString(16));}});return s;}function _JS2ANSI(str/*:string*/)/*:Array<number>*/{var o/*:Array<number>*/=[],oo=str.split("");for(var i=0;i<oo.length;++i)o[i]=oo[i].charCodeAt(0);return o;}/* [MS-OFFCRYPTO] 2.1.4 Version */function parse_CRYPTOVersion(blob,length/*:?number*/){var o/*:any*/={};o.Major=blob.read_shift(2);o.Minor=blob.read_shift(2);/*:: if(length == null) return o; */if(length>=4)blob.l+=length-4;return o;}/* [MS-OFFCRYPTO] 2.1.5 DataSpaceVersionInfo */function parse_DataSpaceVersionInfo(blob){var o={};o.id=blob.read_shift(0,'lpp4');o.R=parse_CRYPTOVersion(blob,4);o.U=parse_CRYPTOVersion(blob,4);o.W=parse_CRYPTOVersion(blob,4);return o;}/* [MS-OFFCRYPTO] 2.1.6.1 DataSpaceMapEntry Structure */function parse_DataSpaceMapEntry(blob){var len=blob.read_shift(4);var end=blob.l+len-4;var o={};var cnt=blob.read_shift(4);var comps/*:Array<{t:number, v:string}>*/=[];/* [MS-OFFCRYPTO] 2.1.6.2 DataSpaceReferenceComponent Structure */while(cnt-->0)comps.push({t:blob.read_shift(4),v:blob.read_shift(0,'lpp4')});o.name=blob.read_shift(0,'lpp4');o.comps=comps;if(blob.l!=end)throw new Error("Bad DataSpaceMapEntry: "+blob.l+" != "+end);return o;}/* [MS-OFFCRYPTO] 2.1.6 DataSpaceMap */function parse_DataSpaceMap(blob){var o=[];blob.l+=4;// must be 0x8
	var cnt=blob.read_shift(4);while(cnt-->0)o.push(parse_DataSpaceMapEntry(blob));return o;}/* [MS-OFFCRYPTO] 2.1.7 DataSpaceDefinition */function parse_DataSpaceDefinition(blob)/*:Array<string>*/{var o/*:Array<string>*/=[];blob.l+=4;// must be 0x8
	var cnt=blob.read_shift(4);while(cnt-->0)o.push(blob.read_shift(0,'lpp4'));return o;}/* [MS-OFFCRYPTO] 2.1.8 DataSpaceDefinition */function parse_TransformInfoHeader(blob){var o={};/*var len = */blob.read_shift(4);blob.l+=4;// must be 0x1
	o.id=blob.read_shift(0,'lpp4');o.name=blob.read_shift(0,'lpp4');o.R=parse_CRYPTOVersion(blob,4);o.U=parse_CRYPTOVersion(blob,4);o.W=parse_CRYPTOVersion(blob,4);return o;}function parse_Primary(blob){/* [MS-OFFCRYPTO] 2.2.6 IRMDSTransformInfo */var hdr=parse_TransformInfoHeader(blob);/* [MS-OFFCRYPTO] 2.1.9 EncryptionTransformInfo */hdr.ename=blob.read_shift(0,'8lpp4');hdr.blksz=blob.read_shift(4);hdr.cmode=blob.read_shift(4);if(blob.read_shift(4)!=0x04)throw new Error("Bad !Primary record");return hdr;}/* [MS-OFFCRYPTO] 2.3.2 Encryption Header */function parse_EncryptionHeader(blob,length/*:number*/){var tgt=blob.l+length;var o={};o.Flags=blob.read_shift(4)&0x3F;blob.l+=4;o.AlgID=blob.read_shift(4);var valid=false;switch(o.AlgID){case 0x660E:case 0x660F:case 0x6610:valid=o.Flags==0x24;break;case 0x6801:valid=o.Flags==0x04;break;case 0:valid=o.Flags==0x10||o.Flags==0x04||o.Flags==0x24;break;default:throw 'Unrecognized encryption algorithm: '+o.AlgID;}if(!valid)throw new Error("Encryption Flags/AlgID mismatch");o.AlgIDHash=blob.read_shift(4);o.KeySize=blob.read_shift(4);o.ProviderType=blob.read_shift(4);blob.l+=8;o.CSPName=blob.read_shift(tgt-blob.l>>1,'utf16le');blob.l=tgt;return o;}/* [MS-OFFCRYPTO] 2.3.3 Encryption Verifier */function parse_EncryptionVerifier(blob,length/*:number*/){var o={},tgt=blob.l+length;blob.l+=4;// SaltSize must be 0x10
	o.Salt=blob.slice(blob.l,blob.l+16);blob.l+=16;o.Verifier=blob.slice(blob.l,blob.l+16);blob.l+=16;/*var sz = */blob.read_shift(4);o.VerifierHash=blob.slice(blob.l,tgt);blob.l=tgt;return o;}/* [MS-OFFCRYPTO] 2.3.4.* EncryptionInfo Stream */function parse_EncryptionInfo(blob){var vers=parse_CRYPTOVersion(blob);switch(vers.Minor){case 0x02:return [vers.Minor,parse_EncInfoStd(blob)];case 0x03:return [vers.Minor,parse_EncInfoExt()];case 0x04:return [vers.Minor,parse_EncInfoAgl(blob)];}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+vers.Minor);}/* [MS-OFFCRYPTO] 2.3.4.5  EncryptionInfo Stream (Standard Encryption) */function parse_EncInfoStd(blob/*::, vers*/){var flags=blob.read_shift(4);if((flags&0x3F)!=0x24)throw new Error("EncryptionInfo mismatch");var sz=blob.read_shift(4);//var tgt = blob.l + sz;
	var hdr=parse_EncryptionHeader(blob,sz);var verifier=parse_EncryptionVerifier(blob,blob.length-blob.l);return {t:"Std",h:hdr,v:verifier};}/* [MS-OFFCRYPTO] 2.3.4.6  EncryptionInfo Stream (Extensible Encryption) */function/*::blob, vers*/parse_EncInfoExt(){throw new Error("File is password-protected: ECMA-376 Extensible");}/* [MS-OFFCRYPTO] 2.3.4.10 EncryptionInfo Stream (Agile Encryption) */function parse_EncInfoAgl(blob/*::, vers*/){var KeyData=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"];blob.l+=4;var xml=blob.read_shift(blob.length-blob.l,'utf8');var o={};xml.replace(tagregex,function xml_agile(x){var y/*:any*/=parsexmltag(x);switch(strip_ns(y[0])){case'<?xml':break;case'<encryption':case'</encryption>':break;case'<keyData':KeyData.forEach(function(k){o[k]=y[k];});break;case'<dataIntegrity':o.encryptedHmacKey=y.encryptedHmacKey;o.encryptedHmacValue=y.encryptedHmacValue;break;case'<keyEncryptors>':case'<keyEncryptors':o.encs=[];break;case'</keyEncryptors>':break;case'<keyEncryptor':o.uri=y.uri;break;case'</keyEncryptor>':break;case'<encryptedKey':o.encs.push(y);break;default:throw y[0];}});return o;}/* [MS-OFFCRYPTO] 2.3.5.1 RC4 CryptoAPI Encryption Header */function parse_RC4CryptoHeader(blob,length/*:number*/){var o={};var vers=o.EncryptionVersionInfo=parse_CRYPTOVersion(blob,4);length-=4;if(vers.Minor!=2)throw new Error('unrecognized minor version code: '+vers.Minor);if(vers.Major>4||vers.Major<2)throw new Error('unrecognized major version code: '+vers.Major);o.Flags=blob.read_shift(4);length-=4;var sz=blob.read_shift(4);length-=4;o.EncryptionHeader=parse_EncryptionHeader(blob,sz);length-=sz;o.EncryptionVerifier=parse_EncryptionVerifier(blob,length);return o;}/* [MS-OFFCRYPTO] 2.3.6.1 RC4 Encryption Header */function parse_RC4Header(blob/*::, length*/){var o={};var vers=o.EncryptionVersionInfo=parse_CRYPTOVersion(blob,4);if(vers.Major!=1||vers.Minor!=1)throw 'unrecognized version code '+vers.Major+' : '+vers.Minor;o.Salt=blob.read_shift(16);o.EncryptedVerifier=blob.read_shift(16);o.EncryptedVerifierHash=blob.read_shift(16);return o;}/* [MS-OFFCRYPTO] 2.3.7.1 Binary Document Password Verifier Derivation */function crypto_CreatePasswordVerifier_Method1(Password/*:string*/){var Verifier=0x0000,PasswordArray;var PasswordDecoded=_JS2ANSI(Password);var len=PasswordDecoded.length+1,i,PasswordByte;var Intermediate1,Intermediate2,Intermediate3;PasswordArray=new_raw_buf(len);PasswordArray[0]=PasswordDecoded.length;for(i=1;i!=len;++i)PasswordArray[i]=PasswordDecoded[i-1];for(i=len-1;i>=0;--i){PasswordByte=PasswordArray[i];Intermediate1=(Verifier&0x4000)===0x0000?0:1;Intermediate2=Verifier<<1&0x7FFF;Intermediate3=Intermediate1|Intermediate2;Verifier=Intermediate3^PasswordByte;}return Verifier^0xCE4B;}/* [MS-OFFCRYPTO] 2.3.7.2 Binary Document XOR Array Initialization */var crypto_CreateXorArray_Method1=/*#__PURE__*/function(){var PadArray=[0xBB,0xFF,0xFF,0xBA,0xFF,0xFF,0xB9,0x80,0x00,0xBE,0x0F,0x00,0xBF,0x0F,0x00];var InitialCode=[0xE1F0,0x1D0F,0xCC9C,0x84C0,0x110C,0x0E10,0xF1CE,0x313E,0x1872,0xE139,0xD40F,0x84F9,0x280C,0xA96A,0x4EC3];var XorMatrix=[0xAEFC,0x4DD9,0x9BB2,0x2745,0x4E8A,0x9D14,0x2A09,0x7B61,0xF6C2,0xFDA5,0xEB6B,0xC6F7,0x9DCF,0x2BBF,0x4563,0x8AC6,0x05AD,0x0B5A,0x16B4,0x2D68,0x5AD0,0x0375,0x06EA,0x0DD4,0x1BA8,0x3750,0x6EA0,0xDD40,0xD849,0xA0B3,0x5147,0xA28E,0x553D,0xAA7A,0x44D5,0x6F45,0xDE8A,0xAD35,0x4A4B,0x9496,0x390D,0x721A,0xEB23,0xC667,0x9CEF,0x29FF,0x53FE,0xA7FC,0x5FD9,0x47D3,0x8FA6,0x0F6D,0x1EDA,0x3DB4,0x7B68,0xF6D0,0xB861,0x60E3,0xC1C6,0x93AD,0x377B,0x6EF6,0xDDEC,0x45A0,0x8B40,0x06A1,0x0D42,0x1A84,0x3508,0x6A10,0xAA51,0x4483,0x8906,0x022D,0x045A,0x08B4,0x1168,0x76B4,0xED68,0xCAF1,0x85C3,0x1BA7,0x374E,0x6E9C,0x3730,0x6E60,0xDCC0,0xA9A1,0x4363,0x86C6,0x1DAD,0x3331,0x6662,0xCCC4,0x89A9,0x0373,0x06E6,0x0DCC,0x1021,0x2042,0x4084,0x8108,0x1231,0x2462,0x48C4];var Ror=function(Byte){return (Byte/2|Byte*128)&0xFF;};var XorRor=function(byte1,byte2){return Ror(byte1^byte2);};var CreateXorKey_Method1=function(Password){var XorKey=InitialCode[Password.length-1];var CurrentElement=0x68;for(var i=Password.length-1;i>=0;--i){var Char=Password[i];for(var j=0;j!=7;++j){if(Char&0x40)XorKey^=XorMatrix[CurrentElement];Char*=2;--CurrentElement;}}return XorKey;};return function(password/*:string*/){var Password=_JS2ANSI(password);var XorKey=CreateXorKey_Method1(Password);var Index=Password.length;var ObfuscationArray=new_raw_buf(16);for(var i=0;i!=16;++i)ObfuscationArray[i]=0x00;var Temp,PasswordLastChar,PadIndex;if((Index&1)===1){Temp=XorKey>>8;ObfuscationArray[Index]=XorRor(PadArray[0],Temp);--Index;Temp=XorKey&0xFF;PasswordLastChar=Password[Password.length-1];ObfuscationArray[Index]=XorRor(PasswordLastChar,Temp);}while(Index>0){--Index;Temp=XorKey>>8;ObfuscationArray[Index]=XorRor(Password[Index],Temp);--Index;Temp=XorKey&0xFF;ObfuscationArray[Index]=XorRor(Password[Index],Temp);}Index=15;PadIndex=15-Password.length;while(PadIndex>0){Temp=XorKey>>8;ObfuscationArray[Index]=XorRor(PadArray[PadIndex],Temp);--Index;--PadIndex;Temp=XorKey&0xFF;ObfuscationArray[Index]=XorRor(Password[Index],Temp);--Index;--PadIndex;}return ObfuscationArray;};}();/* [MS-OFFCRYPTO] 2.3.7.3 Binary Document XOR Data Transformation Method 1 */var crypto_DecryptData_Method1=function(password/*:string*/,Data,XorArrayIndex,XorArray,O){/* If XorArray is set, use it; if O is not set, make changes in-place */if(!O)O=Data;if(!XorArray)XorArray=crypto_CreateXorArray_Method1(password);var Index,Value;for(Index=0;Index!=Data.length;++Index){Value=Data[Index];Value^=XorArray[XorArrayIndex];Value=(Value>>5|Value<<3)&0xFF;O[Index]=Value;++XorArrayIndex;}return [O,XorArrayIndex,XorArray];};var crypto_MakeXorDecryptor=function(password/*:string*/){var XorArrayIndex=0,XorArray=crypto_CreateXorArray_Method1(password);return function(Data){var O=crypto_DecryptData_Method1("",Data,XorArrayIndex,XorArray);XorArrayIndex=O[1];return O[0];};};/* 2.5.343 */function parse_XORObfuscation(blob,length,opts,out){var o={key:parseuint16(blob),verificationBytes:parseuint16(blob)}/*:any*/;if(opts.password)o.verifier=crypto_CreatePasswordVerifier_Method1(opts.password);out.valid=o.verificationBytes===o.verifier;if(out.valid)out.insitu=crypto_MakeXorDecryptor(opts.password);return o;}/* 2.4.117 */function parse_FilePassHeader(blob,length/*:number*/,oo){var o=oo||{};o.Info=blob.read_shift(2);blob.l-=2;if(o.Info===1)o.Data=parse_RC4Header(blob);else o.Data=parse_RC4CryptoHeader(blob,length);return o;}function parse_FilePass(blob,length/*:number*/,opts){var o={Type:opts.biff>=8?blob.read_shift(2):0}/*:any*/;/* wEncryptionType */if(o.Type)parse_FilePassHeader(blob,length-2,o);else parse_XORObfuscation(blob,opts.biff>=8?length:length-2,opts,o);return o;}var RTF=/*#__PURE__*/function(){function rtf_to_sheet(d/*:RawData*/,opts)/*:Worksheet*/{switch(opts.type){case'base64':return rtf_to_sheet_str(Base64_decode(d),opts);case'binary':return rtf_to_sheet_str(d,opts);case'buffer':return rtf_to_sheet_str(has_buf&&Buffer.isBuffer(d)?d.toString('binary'):a2s(d),opts);case'array':return rtf_to_sheet_str(cc2str(d),opts);}throw new Error("Unrecognized type "+opts.type);}/* TODO: this is a stub */function rtf_to_sheet_str(str/*:string*/,opts)/*:Worksheet*/{var o=opts||{};var ws/*:Worksheet*/=o.dense?[]/*:any*/:{}/*:any*/;var rows=str.match(/\\trowd.*?\\row\b/g);if(!rows.length)throw new Error("RTF missing table");var range/*:Range*/={s:{c:0,r:0},e:{c:0,r:rows.length-1}}/*:any*/;rows.forEach(function(rowtf,R){if(Array.isArray(ws))ws[R]=[];var rtfre=/\\\w+\b/g;var last_index=0;var res;var C=-1;while(res=rtfre.exec(rowtf)){switch(res[0]){case"\\cell":var data=rowtf.slice(last_index,rtfre.lastIndex-res[0].length);if(data[0]==" ")data=data.slice(1);++C;if(data.length){// TODO: value parsing, including codepage adjustments
	var cell={v:data,t:"s"};if(Array.isArray(ws))ws[R][C]=cell;else ws[encode_cell({r:R,c:C})]=cell;}break;}last_index=rtfre.lastIndex;}if(C>range.e.c)range.e.c=C;});ws['!ref']=encode_range(range);return ws;}function rtf_to_workbook(d/*:RawData*/,opts)/*:Workbook*/{return sheet_to_workbook(rtf_to_sheet(d,opts),opts);}/* TODO: this is a stub */function sheet_to_rtf(ws/*:Worksheet*/ /*::, opts*/)/*:string*/{var o=["{\\rtf1\\ansi"];var r=safe_decode_range(ws['!ref']),cell/*:Cell*/;var dense=Array.isArray(ws);for(var R=r.s.r;R<=r.e.r;++R){o.push("\\trowd\\trautofit1");for(var C=r.s.c;C<=r.e.c;++C)o.push("\\cellx"+(C+1));o.push("\\pard\\intbl");for(C=r.s.c;C<=r.e.c;++C){var coord=encode_cell({r:R,c:C});cell=dense?(ws[R]||[])[C]:ws[coord];if(!cell||cell.v==null&&(!cell.f||cell.F))continue;o.push(" "+(cell.w||(format_cell(cell),cell.w)));o.push("\\cell");}o.push("\\pard\\intbl\\row");}return o.join("")+"}";}return {to_workbook:rtf_to_workbook,to_sheet:rtf_to_sheet,from_sheet:sheet_to_rtf};}();function hex2RGB(h){var o=h.slice(h[0]==="#"?1:0).slice(0,6);return [parseInt(o.slice(0,2),16),parseInt(o.slice(2,4),16),parseInt(o.slice(4,6),16)];}function rgb2Hex(rgb){for(var i=0,o=1;i!=3;++i)o=o*256+(rgb[i]>255?255:rgb[i]<0?0:rgb[i]);return o.toString(16).toUpperCase().slice(1);}function rgb2HSL(rgb){var R=rgb[0]/255,G=rgb[1]/255,B=rgb[2]/255;var M=Math.max(R,G,B),m=Math.min(R,G,B),C=M-m;if(C===0)return [0,0,R];var H6=0,S=0,L2=M+m;S=C/(L2>1?2-L2:L2);switch(M){case R:H6=((G-B)/C+6)%6;break;case G:H6=(B-R)/C+2;break;case B:H6=(R-G)/C+4;break;}return [H6/6,S,L2/2];}function hsl2RGB(hsl){var H=hsl[0],S=hsl[1],L=hsl[2];var C=S*2*(L<0.5?L:1-L),m=L-C/2;var rgb=[m,m,m],h6=6*H;var X;if(S!==0)switch(h6|0){case 0:case 6:X=C*h6;rgb[0]+=C;rgb[1]+=X;break;case 1:X=C*(2-h6);rgb[0]+=X;rgb[1]+=C;break;case 2:X=C*(h6-2);rgb[1]+=C;rgb[2]+=X;break;case 3:X=C*(4-h6);rgb[1]+=X;rgb[2]+=C;break;case 4:X=C*(h6-4);rgb[2]+=C;rgb[0]+=X;break;case 5:X=C*(6-h6);rgb[2]+=X;rgb[0]+=C;break;}for(var i=0;i!=3;++i)rgb[i]=Math.round(rgb[i]*255);return rgb;}/* 18.8.3 bgColor tint algorithm */function rgb_tint(hex,tint){if(tint===0)return hex;var hsl=rgb2HSL(hex2RGB(hex));if(tint<0)hsl[2]=hsl[2]*(1+tint);else hsl[2]=1-(1-hsl[2])*(1-tint);return rgb2Hex(hsl2RGB(hsl));}/* 18.3.1.13 width calculations */ /* [MS-OI29500] 2.1.595 Column Width & Formatting */var DEF_MDW=6,MAX_MDW=15,MIN_MDW=1,MDW=DEF_MDW;function width2px(width){return Math.floor((width+Math.round(128/MDW)/256)*MDW);}function px2char(px){return Math.floor((px-5)/MDW*100+0.5)/100;}function char2width(chr){return Math.round((chr*MDW+5)/MDW*256)/256;}//function px2char_(px) { return (((px - 5)/MDW * 100 + 0.5))/100; }
	//function char2width_(chr) { return (((chr * MDW + 5)/MDW*256))/256; }
	function cycle_width(collw){return char2width(px2char(width2px(collw)));}/* XLSX/XLSB/XLS specify width in units of MDW */function find_mdw_colw(collw){var delta=Math.abs(collw-cycle_width(collw)),_MDW=MDW;if(delta>0.005)for(MDW=MIN_MDW;MDW<MAX_MDW;++MDW)if(Math.abs(collw-cycle_width(collw))<=delta){delta=Math.abs(collw-cycle_width(collw));_MDW=MDW;}MDW=_MDW;}/* XLML specifies width in terms of pixels */ /*function find_mdw_wpx(wpx) {
		var delta = Infinity, guess = 0, _MDW = MIN_MDW;
		for(MDW=MIN_MDW; MDW<MAX_MDW; ++MDW) {
			guess = char2width_(px2char_(wpx))*256;
			guess = (guess) % 1;
			if(guess > 0.5) guess--;
			if(Math.abs(guess) < delta) { delta = Math.abs(guess); _MDW = MDW; }
		}
		MDW = _MDW;
	}*/function process_col(coll/*:ColInfo*/){if(coll.width){coll.wpx=width2px(coll.width);coll.wch=px2char(coll.wpx);coll.MDW=MDW;}else if(coll.wpx){coll.wch=px2char(coll.wpx);coll.width=char2width(coll.wch);coll.MDW=MDW;}else if(typeof coll.wch=='number'){coll.width=char2width(coll.wch);coll.wpx=width2px(coll.width);coll.MDW=MDW;}if(coll.customWidth)delete coll.customWidth;}var DEF_PPI=96,PPI=DEF_PPI;function px2pt(px){return px*96/PPI;}function pt2px(pt){return pt*PPI/96;}/* [MS-EXSPXML3] 2.4.54 ST_enmPattern */var XLMLPatternTypeMap={"None":"none","Solid":"solid","Gray50":"mediumGray","Gray75":"darkGray","Gray25":"lightGray","HorzStripe":"darkHorizontal","VertStripe":"darkVertical","ReverseDiagStripe":"darkDown","DiagStripe":"darkUp","DiagCross":"darkGrid","ThickDiagCross":"darkTrellis","ThinHorzStripe":"lightHorizontal","ThinVertStripe":"lightVertical","ThinReverseDiagStripe":"lightDown","ThinHorzCross":"lightGrid"};/* 18.8.5 borders CT_Borders */function parse_borders(t,styles,themes,opts){styles.Borders=[];var border={};var pass=false;(t[0].match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(strip_ns(y[0])){case'<borders':case'<borders>':case'</borders>':break;/* 18.8.4 border CT_Border */case'<border':case'<border>':case'<border/>':border=/*::(*/{}/*:: :any)*/;if(y.diagonalUp)border.diagonalUp=parsexmlbool(y.diagonalUp);if(y.diagonalDown)border.diagonalDown=parsexmlbool(y.diagonalDown);styles.Borders.push(border);break;case'</border>':break;/* note: not in spec, appears to be CT_BorderPr */case'<left/>':break;case'<left':case'<left>':break;case'</left>':break;/* note: not in spec, appears to be CT_BorderPr */case'<right/>':break;case'<right':case'<right>':break;case'</right>':break;/* 18.8.43 top CT_BorderPr */case'<top/>':break;case'<top':case'<top>':break;case'</top>':break;/* 18.8.6 bottom CT_BorderPr */case'<bottom/>':break;case'<bottom':case'<bottom>':break;case'</bottom>':break;/* 18.8.13 diagonal CT_BorderPr */case'<diagonal':case'<diagonal>':case'<diagonal/>':break;case'</diagonal>':break;/* 18.8.25 horizontal CT_BorderPr */case'<horizontal':case'<horizontal>':case'<horizontal/>':break;case'</horizontal>':break;/* 18.8.44 vertical CT_BorderPr */case'<vertical':case'<vertical>':case'<vertical/>':break;case'</vertical>':break;/* 18.8.37 start CT_BorderPr */case'<start':case'<start>':case'<start/>':break;case'</start>':break;/* 18.8.16 end CT_BorderPr */case'<end':case'<end>':case'<end/>':break;case'</end>':break;/* 18.8.? color CT_Color */case'<color':case'<color>':break;case'<color/>':case'</color>':break;/* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':break;case'<ext':pass=true;break;case'</ext>':pass=false;break;default:if(opts&&opts.WTF){if(!pass)throw new Error('unrecognized '+y[0]+' in borders');}}});}/* 18.8.21 fills CT_Fills */function parse_fills(t,styles,themes,opts){styles.Fills=[];var fill={};var pass=false;(t[0].match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(strip_ns(y[0])){case'<fills':case'<fills>':case'</fills>':break;/* 18.8.20 fill CT_Fill */case'<fill>':case'<fill':case'<fill/>':fill={};styles.Fills.push(fill);break;case'</fill>':break;/* 18.8.24 gradientFill CT_GradientFill */case'<gradientFill>':break;case'<gradientFill':case'</gradientFill>':styles.Fills.push(fill);fill={};break;/* 18.8.32 patternFill CT_PatternFill */case'<patternFill':case'<patternFill>':if(y.patternType)fill.patternType=y.patternType;break;case'<patternFill/>':case'</patternFill>':break;/* 18.8.3 bgColor CT_Color */case'<bgColor':if(!fill.bgColor)fill.bgColor={};if(y.indexed)fill.bgColor.indexed=parseInt(y.indexed,10);if(y.theme)fill.bgColor.theme=parseInt(y.theme,10);if(y.tint)fill.bgColor.tint=parseFloat(y.tint);/* Excel uses ARGB strings */if(y.rgb)fill.bgColor.rgb=y.rgb.slice(-6);break;case'<bgColor/>':case'</bgColor>':break;/* 18.8.19 fgColor CT_Color */case'<fgColor':if(!fill.fgColor)fill.fgColor={};if(y.theme)fill.fgColor.theme=parseInt(y.theme,10);if(y.tint)fill.fgColor.tint=parseFloat(y.tint);/* Excel uses ARGB strings */if(y.rgb!=null)fill.fgColor.rgb=y.rgb.slice(-6);break;case'<fgColor/>':case'</fgColor>':break;/* 18.8.38 stop CT_GradientStop */case'<stop':case'<stop/>':break;case'</stop>':break;/* 18.8.? color CT_Color */case'<color':case'<color/>':break;case'</color>':break;/* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':break;case'<ext':pass=true;break;case'</ext>':pass=false;break;default:if(opts&&opts.WTF){if(!pass)throw new Error('unrecognized '+y[0]+' in fills');}}});}/* 18.8.23 fonts CT_Fonts */function parse_fonts(t,styles,themes,opts){styles.Fonts=[];var font={};var pass=false;(t[0].match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(strip_ns(y[0])){case'<fonts':case'<fonts>':case'</fonts>':break;/* 18.8.22 font CT_Font */case'<font':case'<font>':break;case'</font>':case'<font/>':styles.Fonts.push(font);font={};break;/* 18.8.29 name CT_FontName */case'<name':if(y.val)font.name=utf8read(y.val);break;case'<name/>':case'</name>':break;/* 18.8.2  b CT_BooleanProperty */case'<b':font.bold=y.val?parsexmlbool(y.val):1;break;case'<b/>':font.bold=1;break;/* 18.8.26 i CT_BooleanProperty */case'<i':font.italic=y.val?parsexmlbool(y.val):1;break;case'<i/>':font.italic=1;break;/* 18.4.13 u CT_UnderlineProperty */case'<u':switch(y.val){case"none":font.underline=0x00;break;case"single":font.underline=0x01;break;case"double":font.underline=0x02;break;case"singleAccounting":font.underline=0x21;break;case"doubleAccounting":font.underline=0x22;break;}break;case'<u/>':font.underline=1;break;/* 18.4.10 strike CT_BooleanProperty */case'<strike':font.strike=y.val?parsexmlbool(y.val):1;break;case'<strike/>':font.strike=1;break;/* 18.4.2  outline CT_BooleanProperty */case'<outline':font.outline=y.val?parsexmlbool(y.val):1;break;case'<outline/>':font.outline=1;break;/* 18.8.36 shadow CT_BooleanProperty */case'<shadow':font.shadow=y.val?parsexmlbool(y.val):1;break;case'<shadow/>':font.shadow=1;break;/* 18.8.12 condense CT_BooleanProperty */case'<condense':font.condense=y.val?parsexmlbool(y.val):1;break;case'<condense/>':font.condense=1;break;/* 18.8.17 extend CT_BooleanProperty */case'<extend':font.extend=y.val?parsexmlbool(y.val):1;break;case'<extend/>':font.extend=1;break;/* 18.4.11 sz CT_FontSize */case'<sz':if(y.val)font.sz=+y.val;break;case'<sz/>':case'</sz>':break;/* 18.4.14 vertAlign CT_VerticalAlignFontProperty */case'<vertAlign':if(y.val)font.vertAlign=y.val;break;case'<vertAlign/>':case'</vertAlign>':break;/* 18.8.18 family CT_FontFamily */case'<family':if(y.val)font.family=parseInt(y.val,10);break;case'<family/>':case'</family>':break;/* 18.8.35 scheme CT_FontScheme */case'<scheme':if(y.val)font.scheme=y.val;break;case'<scheme/>':case'</scheme>':break;/* 18.4.1 charset CT_IntProperty */case'<charset':if(y.val=='1')break;y.codepage=CS2CP[parseInt(y.val,10)];break;/* 18.?.? color CT_Color */case'<color':if(!font.color)font.color={};if(y.auto)font.color.auto=parsexmlbool(y.auto);if(y.rgb)font.color.rgb=y.rgb.slice(-6);else if(y.indexed){font.color.index=parseInt(y.indexed,10);var icv=XLSIcv[font.color.index];if(font.color.index==81)icv=XLSIcv[1];if(!icv)icv=XLSIcv[1];//throw new Error(x); // note: 206 is valid
	font.color.rgb=icv[0].toString(16)+icv[1].toString(16)+icv[2].toString(16);}else if(y.theme){font.color.theme=parseInt(y.theme,10);if(y.tint)font.color.tint=parseFloat(y.tint);if(y.theme&&themes.themeElements&&themes.themeElements.clrScheme){font.color.rgb=rgb_tint(themes.themeElements.clrScheme[font.color.theme].rgb,font.color.tint||0);}}break;case'<color/>':case'</color>':break;/* note: sometimes mc:AlternateContent appears bare */case'<AlternateContent':pass=true;break;case'</AlternateContent>':pass=false;break;/* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':break;case'<ext':pass=true;break;case'</ext>':pass=false;break;default:if(opts&&opts.WTF){if(!pass)throw new Error('unrecognized '+y[0]+' in fonts');}}});}/* 18.8.31 numFmts CT_NumFmts */function parse_numFmts(t,styles,opts){styles.NumberFmt=[];var k/*Array<number>*/=keys(table_fmt)/*:any*/;for(var i=0;i<k.length;++i)styles.NumberFmt[k[i]]=table_fmt[k[i]];var m=t[0].match(tagregex);if(!m)return;for(i=0;i<m.length;++i){var y=parsexmltag(m[i]);switch(strip_ns(y[0])){case'<numFmts':case'</numFmts>':case'<numFmts/>':case'<numFmts>':break;case'<numFmt':{var f=unescapexml(utf8read(y.formatCode)),j=parseInt(y.numFmtId,10);styles.NumberFmt[j]=f;if(j>0){if(j>0x188){for(j=0x188;j>0x3c;--j)if(styles.NumberFmt[j]==null)break;styles.NumberFmt[j]=f;}SSF_load(f,j);}}break;case'</numFmt>':break;default:if(opts.WTF)throw new Error('unrecognized '+y[0]+' in numFmts');}}}/* 18.8.10 cellXfs CT_CellXfs */var cellXF_uint=["numFmtId","fillId","fontId","borderId","xfId"];var cellXF_bool=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"];function parse_cellXfs(t,styles,opts){styles.CellXf=[];var xf;var pass=false;(t[0].match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x),i=0;switch(strip_ns(y[0])){case'<cellXfs':case'<cellXfs>':case'<cellXfs/>':case'</cellXfs>':break;/* 18.8.45 xf CT_Xf */case'<xf':case'<xf/>':xf=y;delete xf[0];for(i=0;i<cellXF_uint.length;++i)if(xf[cellXF_uint[i]])xf[cellXF_uint[i]]=parseInt(xf[cellXF_uint[i]],10);for(i=0;i<cellXF_bool.length;++i)if(xf[cellXF_bool[i]])xf[cellXF_bool[i]]=parsexmlbool(xf[cellXF_bool[i]]);if(styles.NumberFmt&&xf.numFmtId>0x188){for(i=0x188;i>0x3c;--i)if(styles.NumberFmt[xf.numFmtId]==styles.NumberFmt[i]){xf.numFmtId=i;break;}}styles.CellXf.push(xf);break;case'</xf>':break;/* 18.8.1 alignment CT_CellAlignment */case'<alignment':case'<alignment/>':var alignment={};if(y.vertical)alignment.vertical=y.vertical;if(y.horizontal)alignment.horizontal=y.horizontal;if(y.textRotation!=null)alignment.textRotation=y.textRotation;if(y.indent)alignment.indent=y.indent;if(y.wrapText)alignment.wrapText=parsexmlbool(y.wrapText);xf.alignment=alignment;break;case'</alignment>':break;/* 18.8.33 protection CT_CellProtection */case'<protection':break;case'</protection>':case'<protection/>':break;/* note: sometimes mc:AlternateContent appears bare */case'<AlternateContent':pass=true;break;case'</AlternateContent>':pass=false;break;/* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':break;case'<ext':pass=true;break;case'</ext>':pass=false;break;default:if(opts&&opts.WTF){if(!pass)throw new Error('unrecognized '+y[0]+' in cellXfs');}}});}/* 18.8 Styles CT_Stylesheet*/var parse_sty_xml=/*#__PURE__*/function make_pstyx(){var numFmtRegex=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;var cellXfRegex=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;var fillsRegex=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;var fontsRegex=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;var bordersRegex=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;return function parse_sty_xml(data,themes,opts){var styles={};if(!data)return styles;data=data.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");/* 18.8.39 styleSheet CT_Stylesheet */var t;/* 18.8.31 numFmts CT_NumFmts ? */if(t=data.match(numFmtRegex))parse_numFmts(t,styles,opts);/* 18.8.23 fonts CT_Fonts ? */if(t=data.match(fontsRegex))parse_fonts(t,styles,themes,opts);/* 18.8.21 fills CT_Fills ? */if(t=data.match(fillsRegex))parse_fills(t,styles,themes,opts);/* 18.8.5  borders CT_Borders ? */if(t=data.match(bordersRegex))parse_borders(t,styles,themes,opts);/* 18.8.9  cellStyleXfs CT_CellStyleXfs ? */ /* 18.8.8  cellStyles CT_CellStyles ? */ /* 18.8.10 cellXfs CT_CellXfs ? */if(t=data.match(cellXfRegex))parse_cellXfs(t,styles,opts);/* 18.8.15 dxfs CT_Dxfs ? */ /* 18.8.42 tableStyles CT_TableStyles ? */ /* 18.8.11 colors CT_Colors ? */ /* 18.2.10 extLst CT_ExtensionList ? */return styles;};}();/* [MS-XLSB] 2.4.657 BrtFmt */function parse_BrtFmt(data,length/*:number*/){var numFmtId=data.read_shift(2);var stFmtCode=parse_XLWideString(data);return [numFmtId,stFmtCode];}/* [MS-XLSB] 2.4.659 BrtFont TODO */function parse_BrtFont(data,length/*:number*/,opts){var out={}/*:any*/;out.sz=data.read_shift(2)/20;var grbit=parse_FontFlags(data);if(grbit.fItalic)out.italic=1;if(grbit.fCondense)out.condense=1;if(grbit.fExtend)out.extend=1;if(grbit.fShadow)out.shadow=1;if(grbit.fOutline)out.outline=1;if(grbit.fStrikeout)out.strike=1;var bls=data.read_shift(2);if(bls===0x02BC)out.bold=1;switch(data.read_shift(2)){/* case 0: out.vertAlign = "baseline"; break; */case 1:out.vertAlign="superscript";break;case 2:out.vertAlign="subscript";break;}var underline=data.read_shift(1);if(underline!=0)out.underline=underline;var family=data.read_shift(1);if(family>0)out.family=family;var bCharSet=data.read_shift(1);if(bCharSet>0)out.charset=bCharSet;data.l++;out.color=parse_BrtColor(data);switch(data.read_shift(1)){/* case 0: out.scheme = "none": break; */case 1:out.scheme="major";break;case 2:out.scheme="minor";break;}out.name=parse_XLWideString(data);return out;}/* TODO: gradient fill representation */var parse_BrtFill=parsenoop;/* [MS-XLSB] 2.4.824 BrtXF */function parse_BrtXF(data,length/*:number*/){var tgt=data.l+length;var ixfeParent=data.read_shift(2);var ifmt=data.read_shift(2);data.l=tgt;return {ixfe:ixfeParent,numFmtId:ifmt};}/* [MS-XLSB] 2.4.302 BrtBorder TODO */var parse_BrtBorder=parsenoop;/* [MS-XLSB] 2.1.7.50 Styles */function parse_sty_bin(data,themes,opts){var styles={};styles.NumberFmt=[]/*:any*/;for(var y in table_fmt)styles.NumberFmt[y]=table_fmt[y];styles.CellXf=[];styles.Fonts=[];var state/*:Array<string>*/=[];var pass=false;recordhopper(data,function hopper_sty(val,R,RT){switch(RT){case 0x002C:/* BrtFmt */styles.NumberFmt[val[0]]=val[1];SSF_load(val[1],val[0]);break;case 0x002B:/* BrtFont */styles.Fonts.push(val);if(val.color.theme!=null&&themes&&themes.themeElements&&themes.themeElements.clrScheme){val.color.rgb=rgb_tint(themes.themeElements.clrScheme[val.color.theme].rgb,val.color.tint||0);}break;case 0x0401:/* BrtKnownFonts */break;case 0x002D:/* BrtFill */break;case 0x002E:/* BrtBorder */break;case 0x002F:/* BrtXF */if(state[state.length-1]==0x0269/* BrtBeginCellXFs */){styles.CellXf.push(val);}break;case 0x0030:/* BrtStyle */case 0x01FB:/* BrtDXF */case 0x023C:/* BrtMRUColor */case 0x01DB:/* BrtIndexedColor */break;case 0x0493:/* BrtDXF14 */case 0x0836:/* BrtDXF15 */case 0x046A:/* BrtSlicerStyleElement */case 0x0200:/* BrtTableStyleElement */case 0x082F:/* BrtTimelineStyleElement */case 0x0C00:/* BrtUid */break;case 0x0023:/* BrtFRTBegin */pass=true;break;case 0x0024:/* BrtFRTEnd */pass=false;break;case 0x0025:/* BrtACBegin */state.push(RT);pass=true;break;case 0x0026:/* BrtACEnd */state.pop();pass=false;break;default:if(R.T>0)state.push(RT);else if(R.T<0)state.pop();else if(!pass||opts.WTF&&state[state.length-1]!=0x0025/* BrtACBegin */)throw new Error("Unexpected record 0x"+RT.toString(16));}});return styles;}/* Even though theme layout is dk1 lt1 dk2 lt2, true order is lt1 dk1 lt2 dk2 */var XLSXThemeClrScheme=['</a:lt1>','</a:dk1>','</a:lt2>','</a:dk2>','</a:accent1>','</a:accent2>','</a:accent3>','</a:accent4>','</a:accent5>','</a:accent6>','</a:hlink>','</a:folHlink>'];/* 20.1.6.2 clrScheme CT_ColorScheme */function parse_clrScheme(t,themes,opts){themes.themeElements.clrScheme=[];var color={};(t[0].match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(y[0]){/* 20.1.6.2 clrScheme (Color Scheme) CT_ColorScheme */case'<a:clrScheme':case'</a:clrScheme>':break;/* 20.1.2.3.32 srgbClr CT_SRgbColor */case'<a:srgbClr':color.rgb=y.val;break;/* 20.1.2.3.33 sysClr CT_SystemColor */case'<a:sysClr':color.rgb=y.lastClr;break;/* 20.1.4.1.1 accent1 (Accent 1) */ /* 20.1.4.1.2 accent2 (Accent 2) */ /* 20.1.4.1.3 accent3 (Accent 3) */ /* 20.1.4.1.4 accent4 (Accent 4) */ /* 20.1.4.1.5 accent5 (Accent 5) */ /* 20.1.4.1.6 accent6 (Accent 6) */ /* 20.1.4.1.9 dk1 (Dark 1) */ /* 20.1.4.1.10 dk2 (Dark 2) */ /* 20.1.4.1.15 folHlink (Followed Hyperlink) */ /* 20.1.4.1.19 hlink (Hyperlink) */ /* 20.1.4.1.22 lt1 (Light 1) */ /* 20.1.4.1.23 lt2 (Light 2) */case'<a:dk1>':case'</a:dk1>':case'<a:lt1>':case'</a:lt1>':case'<a:dk2>':case'</a:dk2>':case'<a:lt2>':case'</a:lt2>':case'<a:accent1>':case'</a:accent1>':case'<a:accent2>':case'</a:accent2>':case'<a:accent3>':case'</a:accent3>':case'<a:accent4>':case'</a:accent4>':case'<a:accent5>':case'</a:accent5>':case'<a:accent6>':case'</a:accent6>':case'<a:hlink>':case'</a:hlink>':case'<a:folHlink>':case'</a:folHlink>':if(y[0].charAt(1)==='/'){themes.themeElements.clrScheme[XLSXThemeClrScheme.indexOf(y[0])]=color;color={};}else {color.name=y[0].slice(3,y[0].length-1);}break;default:if(opts&&opts.WTF)throw new Error('Unrecognized '+y[0]+' in clrScheme');}});}/* 20.1.4.1.18 fontScheme CT_FontScheme */function/*::t, themes, opts*/parse_fontScheme(){}/* 20.1.4.1.15 fmtScheme CT_StyleMatrix */function/*::t, themes, opts*/parse_fmtScheme(){}var clrsregex=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;var fntsregex=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;var fmtsregex=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;/* 20.1.6.10 themeElements CT_BaseStyles */function parse_themeElements(data,themes,opts){themes.themeElements={};var t;[/* clrScheme CT_ColorScheme */['clrScheme',clrsregex,parse_clrScheme],/* fontScheme CT_FontScheme */['fontScheme',fntsregex,parse_fontScheme],/* fmtScheme CT_StyleMatrix */['fmtScheme',fmtsregex,parse_fmtScheme]].forEach(function(m){if(!(t=data.match(m[1])))throw new Error(m[0]+' not found in themeElements');m[2](t,themes,opts);});}var themeltregex=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;/* 14.2.7 Theme Part */function parse_theme_xml(data/*:string*/,opts){/* 20.1.6.9 theme CT_OfficeStyleSheet */if(!data||data.length===0)data=write_theme();var t;var themes={};/* themeElements CT_BaseStyles */if(!(t=data.match(themeltregex)))throw new Error('themeElements not found in theme');parse_themeElements(t[0],themes,opts);themes.raw=data;return themes;}function write_theme(Themes,opts)/*:string*/{if(opts&&opts.themeXLSX)return opts.themeXLSX;if(Themes&&typeof Themes.raw=="string")return Themes.raw;var o=[XML_HEADER];o[o.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';o[o.length]='<a:themeElements>';o[o.length]='<a:clrScheme name="Office">';o[o.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';o[o.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';o[o.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';o[o.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';o[o.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';o[o.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';o[o.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';o[o.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';o[o.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';o[o.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>';o[o.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';o[o.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';o[o.length]='</a:clrScheme>';o[o.length]='<a:fontScheme name="Office">';o[o.length]='<a:majorFont>';o[o.length]='<a:latin typeface="Cambria"/>';o[o.length]='<a:ea typeface=""/>';o[o.length]='<a:cs typeface=""/>';o[o.length]='<a:font script="Jpan" typeface="?????? ???????????????"/>';o[o.length]='<a:font script="Hang" typeface="?????? ??????"/>';o[o.length]='<a:font script="Hans" typeface="??????"/>';o[o.length]='<a:font script="Hant" typeface="????????????"/>';o[o.length]='<a:font script="Arab" typeface="Times New Roman"/>';o[o.length]='<a:font script="Hebr" typeface="Times New Roman"/>';o[o.length]='<a:font script="Thai" typeface="Tahoma"/>';o[o.length]='<a:font script="Ethi" typeface="Nyala"/>';o[o.length]='<a:font script="Beng" typeface="Vrinda"/>';o[o.length]='<a:font script="Gujr" typeface="Shruti"/>';o[o.length]='<a:font script="Khmr" typeface="MoolBoran"/>';o[o.length]='<a:font script="Knda" typeface="Tunga"/>';o[o.length]='<a:font script="Guru" typeface="Raavi"/>';o[o.length]='<a:font script="Cans" typeface="Euphemia"/>';o[o.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>';o[o.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';o[o.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>';o[o.length]='<a:font script="Thaa" typeface="MV Boli"/>';o[o.length]='<a:font script="Deva" typeface="Mangal"/>';o[o.length]='<a:font script="Telu" typeface="Gautami"/>';o[o.length]='<a:font script="Taml" typeface="Latha"/>';o[o.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>';o[o.length]='<a:font script="Orya" typeface="Kalinga"/>';o[o.length]='<a:font script="Mlym" typeface="Kartika"/>';o[o.length]='<a:font script="Laoo" typeface="DokChampa"/>';o[o.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>';o[o.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>';o[o.length]='<a:font script="Viet" typeface="Times New Roman"/>';o[o.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>';o[o.length]='<a:font script="Geor" typeface="Sylfaen"/>';o[o.length]='</a:majorFont>';o[o.length]='<a:minorFont>';o[o.length]='<a:latin typeface="Calibri"/>';o[o.length]='<a:ea typeface=""/>';o[o.length]='<a:cs typeface=""/>';o[o.length]='<a:font script="Jpan" typeface="?????? ???????????????"/>';o[o.length]='<a:font script="Hang" typeface="?????? ??????"/>';o[o.length]='<a:font script="Hans" typeface="??????"/>';o[o.length]='<a:font script="Hant" typeface="????????????"/>';o[o.length]='<a:font script="Arab" typeface="Arial"/>';o[o.length]='<a:font script="Hebr" typeface="Arial"/>';o[o.length]='<a:font script="Thai" typeface="Tahoma"/>';o[o.length]='<a:font script="Ethi" typeface="Nyala"/>';o[o.length]='<a:font script="Beng" typeface="Vrinda"/>';o[o.length]='<a:font script="Gujr" typeface="Shruti"/>';o[o.length]='<a:font script="Khmr" typeface="DaunPenh"/>';o[o.length]='<a:font script="Knda" typeface="Tunga"/>';o[o.length]='<a:font script="Guru" typeface="Raavi"/>';o[o.length]='<a:font script="Cans" typeface="Euphemia"/>';o[o.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>';o[o.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';o[o.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>';o[o.length]='<a:font script="Thaa" typeface="MV Boli"/>';o[o.length]='<a:font script="Deva" typeface="Mangal"/>';o[o.length]='<a:font script="Telu" typeface="Gautami"/>';o[o.length]='<a:font script="Taml" typeface="Latha"/>';o[o.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>';o[o.length]='<a:font script="Orya" typeface="Kalinga"/>';o[o.length]='<a:font script="Mlym" typeface="Kartika"/>';o[o.length]='<a:font script="Laoo" typeface="DokChampa"/>';o[o.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>';o[o.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>';o[o.length]='<a:font script="Viet" typeface="Arial"/>';o[o.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>';o[o.length]='<a:font script="Geor" typeface="Sylfaen"/>';o[o.length]='</a:minorFont>';o[o.length]='</a:fontScheme>';o[o.length]='<a:fmtScheme name="Office">';o[o.length]='<a:fillStyleLst>';o[o.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';o[o.length]='<a:gradFill rotWithShape="1">';o[o.length]='<a:gsLst>';o[o.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';o[o.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';o[o.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';o[o.length]='</a:gsLst>';o[o.length]='<a:lin ang="16200000" scaled="1"/>';o[o.length]='</a:gradFill>';o[o.length]='<a:gradFill rotWithShape="1">';o[o.length]='<a:gsLst>';o[o.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';o[o.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';o[o.length]='</a:gsLst>';o[o.length]='<a:lin ang="16200000" scaled="0"/>';o[o.length]='</a:gradFill>';o[o.length]='</a:fillStyleLst>';o[o.length]='<a:lnStyleLst>';o[o.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';o[o.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';o[o.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';o[o.length]='</a:lnStyleLst>';o[o.length]='<a:effectStyleLst>';o[o.length]='<a:effectStyle>';o[o.length]='<a:effectLst>';o[o.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';o[o.length]='</a:effectLst>';o[o.length]='</a:effectStyle>';o[o.length]='<a:effectStyle>';o[o.length]='<a:effectLst>';o[o.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';o[o.length]='</a:effectLst>';o[o.length]='</a:effectStyle>';o[o.length]='<a:effectStyle>';o[o.length]='<a:effectLst>';o[o.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';o[o.length]='</a:effectLst>';o[o.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';o[o.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';o[o.length]='</a:effectStyle>';o[o.length]='</a:effectStyleLst>';o[o.length]='<a:bgFillStyleLst>';o[o.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';o[o.length]='<a:gradFill rotWithShape="1">';o[o.length]='<a:gsLst>';o[o.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';o[o.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';o[o.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';o[o.length]='</a:gsLst>';o[o.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';o[o.length]='</a:gradFill>';o[o.length]='<a:gradFill rotWithShape="1">';o[o.length]='<a:gsLst>';o[o.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';o[o.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';o[o.length]='</a:gsLst>';o[o.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';o[o.length]='</a:gradFill>';o[o.length]='</a:bgFillStyleLst>';o[o.length]='</a:fmtScheme>';o[o.length]='</a:themeElements>';o[o.length]='<a:objectDefaults>';o[o.length]='<a:spDef>';o[o.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';o[o.length]='</a:spDef>';o[o.length]='<a:lnDef>';o[o.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';o[o.length]='</a:lnDef>';o[o.length]='</a:objectDefaults>';o[o.length]='<a:extraClrSchemeLst/>';o[o.length]='</a:theme>';return o.join("");}/* [MS-XLS] 2.4.326 TODO: payload is a zip file */function parse_Theme(blob,length,opts){var end=blob.l+length;var dwThemeVersion=blob.read_shift(4);if(dwThemeVersion===124226)return;if(!opts.cellStyles){blob.l=end;return;}var data=blob.slice(blob.l);blob.l=end;var zip;try{zip=zip_read(data,{type:"array"});}catch(e){return;}var themeXML=getzipstr(zip,"theme/theme/theme1.xml",true);if(!themeXML)return;return parse_theme_xml(themeXML,opts);}/* 2.5.49 */function parse_ColorTheme(blob/*::, length*/){return blob.read_shift(4);}/* 2.5.155 */function parse_FullColorExt(blob/*::, length*/){var o={};o.xclrType=blob.read_shift(2);o.nTintShade=blob.read_shift(2);switch(o.xclrType){case 0:blob.l+=4;break;case 1:o.xclrValue=parse_IcvXF(blob,4);break;case 2:o.xclrValue=parse_LongRGBA(blob);break;case 3:o.xclrValue=parse_ColorTheme(blob);break;case 4:blob.l+=4;break;}blob.l+=8;return o;}/* 2.5.164 TODO: read 7 bits*/function parse_IcvXF(blob,length){return parsenoop(blob,length);}/* 2.5.280 */function parse_XFExtGradient(blob,length){return parsenoop(blob,length);}/* [MS-XLS] 2.5.108 */function parse_ExtProp(blob/*::, length*/)/*:Array<any>*/{var extType=blob.read_shift(2);var cb=blob.read_shift(2)-4;var o=[extType];switch(extType){case 0x04:case 0x05:case 0x07:case 0x08:case 0x09:case 0x0A:case 0x0B:case 0x0D:o[1]=parse_FullColorExt(blob);break;case 0x06:o[1]=parse_XFExtGradient(blob,cb);break;case 0x0E:case 0x0F:o[1]=blob.read_shift(cb===1?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+extType+" "+cb);}return o;}/* 2.4.355 */function parse_XFExt(blob,length){var end=blob.l+length;blob.l+=2;var ixfe=blob.read_shift(2);blob.l+=2;var cexts=blob.read_shift(2);var ext/*:AOA*/=[];while(cexts-->0)ext.push(parse_ExtProp(blob,end-blob.l));return {ixfe:ixfe,ext:ext};}/* xf is an XF, see parse_XFExt for xfext */function update_xfext(xf,xfext){xfext.forEach(function(xfe){switch(xfe[0]){/* 2.5.108 extPropData *//* indentation level */}});}function parse_BrtMdtinfo(data,length){return {flags:data.read_shift(4),version:data.read_shift(4),name:parse_XLWideString(data)};}function parse_BrtMdb(data){var out=[];var cnt=data.read_shift(4);while(cnt-->0)out.push([data.read_shift(4),data.read_shift(4)]);return out;}function parse_BrtBeginEsmdb(data){data.l+=4;return data.read_shift(4)!=0;}function parse_xlmeta_bin(data,name,_opts){var out={Types:[],Cell:[],Value:[]};var opts=_opts||{};var state=[];var pass=false;var metatype=2;recordhopper(data,function(val,R,RT){switch(RT){case 335:out.Types.push({name:val.name});break;case 51:val.forEach(function(r){if(metatype==1)out.Cell.push({type:out.Types[r[0]-1].name,index:r[1]});else if(metatype==0)out.Value.push({type:out.Types[r[0]-1].name,index:r[1]});});break;case 337:metatype=val?1:0;break;case 338:metatype=2;break;case 35:state.push(RT);pass=true;break;case 36:state.pop();pass=false;break;default:if(R.T);else if(!pass||opts.WTF&&state[state.length-1]!=35)throw new Error("Unexpected record 0x"+RT.toString(16));}});return out;}function parse_xlmeta_xml(data,name,opts){var out={Types:[],Cell:[],Value:[]};if(!data)return out;var pass=false;var metatype=2;var lastmeta;data.replace(tagregex,function(x){var y=parsexmltag(x);switch(strip_ns(y[0])){case"<?xml":break;case"<metadata":case"</metadata>":break;case"<metadataTypes":case"</metadataTypes>":break;case"<metadataType":out.Types.push({name:y.name});break;case"</metadataType>":break;case"<futureMetadata":for(var j=0;j<out.Types.length;++j)if(out.Types[j].name==y.name)lastmeta=out.Types[j];break;case"</futureMetadata>":break;case"<bk>":break;case"</bk>":break;case"<rc":if(metatype==1)out.Cell.push({type:out.Types[y.t-1].name,index:+y.v});else if(metatype==0)out.Value.push({type:out.Types[y.t-1].name,index:+y.v});break;case"</rc>":break;case"<cellMetadata":metatype=1;break;case"</cellMetadata>":metatype=2;break;case"<valueMetadata":metatype=0;break;case"</valueMetadata>":metatype=2;break;case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break;case"<ext":pass=true;break;case"</ext>":pass=false;break;case"<rvb":if(!lastmeta)break;if(!lastmeta.offsets)lastmeta.offsets=[];lastmeta.offsets.push(+y.i);break;default:if(!pass&&opts.WTF)throw new Error("unrecognized "+y[0]+" in metadata");}return x;});return out;}/* 18.6 Calculation Chain */function parse_cc_xml(data/*::, name, opts*/)/*:Array<any>*/{var d=[];if(!data)return d;var i=1;(data.match(tagregex)||[]).forEach(function(x){var y=parsexmltag(x);switch(y[0]){case'<?xml':break;/* 18.6.2  calcChain CT_CalcChain 1 */case'<calcChain':case'<calcChain>':case'</calcChain>':break;/* 18.6.1  c CT_CalcCell 1 */case'<c':delete y[0];if(y.i)i=y.i;else y.i=i;d.push(y);break;}});return d;}//function write_cc_xml(data, opts) { }
	/* [MS-XLSB] 2.6.4.1 */function parse_BrtCalcChainItem$(data){var out={};out.i=data.read_shift(4);var cell={};cell.r=data.read_shift(4);cell.c=data.read_shift(4);out.r=encode_cell(cell);var flags=data.read_shift(1);if(flags&0x2)out.l='1';if(flags&0x8)out.a='1';return out;}/* 18.6 Calculation Chain */function parse_cc_bin(data,name,opts){var out=[];recordhopper(data,function hopper_cc(val,R,RT){switch(RT){case 0x003F:/* 'BrtCalcChainItem$' */out.push(val);break;default:if(R.T);else throw new Error("Unexpected record 0x"+RT.toString(16));}});return out;}//function write_cc_bin(data, opts) { }
	/* 18.14 Supplementary Workbook Data */function/*::data, rel, name:string, _opts*/parse_xlink_xml(){//var opts = _opts || {};
	//if(opts.WTF) throw "XLSX External Link";
	}/* [MS-XLSB] 2.1.7.25 External Link */function parse_xlink_bin(data,rel,name/*:string*/,_opts){if(!data)return data;var opts=_opts||{};var pass=false;recordhopper(data,function xlink_parse(val,R,RT){switch(RT){case 0x0167:/* 'BrtSupTabs' */case 0x016B:/* 'BrtExternTableStart' */case 0x016C:/* 'BrtExternTableEnd' */case 0x016E:/* 'BrtExternRowHdr' */case 0x016F:/* 'BrtExternCellBlank' */case 0x0170:/* 'BrtExternCellReal' */case 0x0171:/* 'BrtExternCellBool' */case 0x0172:/* 'BrtExternCellError' */case 0x0173:/* 'BrtExternCellString' */case 0x01D8:/* 'BrtExternValueMeta' */case 0x0241:/* 'BrtSupNameStart' */case 0x0242:/* 'BrtSupNameValueStart' */case 0x0243:/* 'BrtSupNameValueEnd' */case 0x0244:/* 'BrtSupNameNum' */case 0x0245:/* 'BrtSupNameErr' */case 0x0246:/* 'BrtSupNameSt' */case 0x0247:/* 'BrtSupNameNil' */case 0x0248:/* 'BrtSupNameBool' */case 0x0249:/* 'BrtSupNameFmla' */case 0x024A:/* 'BrtSupNameBits' */case 0x024B:/* 'BrtSupNameEnd' */break;case 0x0023:/* 'BrtFRTBegin' */pass=true;break;case 0x0024:/* 'BrtFRTEnd' */pass=false;break;default:if(R.T);else if(!pass||opts.WTF)throw new Error("Unexpected record 0x"+RT.toString(16));}},opts);}/* 20.5 DrawingML - SpreadsheetML Drawing */ /* 20.5.2.35 wsDr CT_Drawing */function parse_drawing(data,rels/*:any*/){if(!data)return "??";/*
		  Chartsheet Drawing:
		   - 20.5.2.35 wsDr CT_Drawing
		    - 20.5.2.1  absoluteAnchor CT_AbsoluteAnchor
		     - 20.5.2.16 graphicFrame CT_GraphicalObjectFrame
		      - 20.1.2.2.16 graphic CT_GraphicalObject
		       - 20.1.2.2.17 graphicData CT_GraphicalObjectData
	          - chart reference
		   the actual type is based on the URI of the graphicData
			TODO: handle embedded charts and other types of graphics
		*/var id=(data.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1];return rels['!id'][id].Target;}function sheet_insert_comments(sheet,comments/*:Array<RawComment>*/,threaded/*:boolean*/,people/*:?Array<any>*/){var dense=Array.isArray(sheet);var cell/*:Cell*/;comments.forEach(function(comment){var r=decode_cell(comment.ref);if(dense){if(!sheet[r.r])sheet[r.r]=[];cell=sheet[r.r][r.c];}else cell=sheet[comment.ref];if(!cell){cell={t:"z"}/*:any*/;if(dense)sheet[r.r][r.c]=cell;else sheet[comment.ref]=cell;var range=safe_decode_range(sheet["!ref"]||"BDWGO1000001:A1");if(range.s.r>r.r)range.s.r=r.r;if(range.e.r<r.r)range.e.r=r.r;if(range.s.c>r.c)range.s.c=r.c;if(range.e.c<r.c)range.e.c=r.c;var encoded=encode_range(range);if(encoded!==sheet["!ref"])sheet["!ref"]=encoded;}if(!cell.c)cell.c=[];var o/*:Comment*/={a:comment.author,t:comment.t,r:comment.r,T:threaded};if(comment.h)o.h=comment.h;/* threaded comments always override */for(var i=cell.c.length-1;i>=0;--i){if(!threaded&&cell.c[i].T)return;if(threaded&&!cell.c[i].T)cell.c.splice(i,1);}if(threaded&&people)for(i=0;i<people.length;++i){if(o.a==people[i].id){o.a=people[i].name||o.a;break;}}cell.c.push(o);});}/* 18.7 Comments */function parse_comments_xml(data/*:string*/,opts)/*:Array<RawComment>*/{/* 18.7.6 CT_Comments */if(data.match(/<(?:\w+:)?comments *\/>/))return [];var authors/*:Array<string>*/=[];var commentList/*:Array<RawComment>*/=[];var authtag=data.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);if(authtag&&authtag[1])authtag[1].split(/<\/\w*:?author>/).forEach(function(x){if(x===""||x.trim()==="")return;var a=x.match(/<(?:\w+:)?author[^>]*>(.*)/);if(a)authors.push(a[1]);});var cmnttag=data.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);if(cmnttag&&cmnttag[1])cmnttag[1].split(/<\/\w*:?comment>/).forEach(function(x){if(x===""||x.trim()==="")return;var cm=x.match(/<(?:\w+:)?comment[^>]*>/);if(!cm)return;var y=parsexmltag(cm[0]);var comment/*:RawComment*/={author:y.authorId&&authors[y.authorId]||"sheetjsghost",ref:y.ref,guid:y.guid}/*:any*/;var cell=decode_cell(y.ref);if(opts.sheetRows&&opts.sheetRows<=cell.r)return;var textMatch=x.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);var rt=!!textMatch&&!!textMatch[1]&&parse_si(textMatch[1])||{r:"",t:"",h:""};comment.r=rt.r;if(rt.r=="<t></t>")rt.t=rt.h="";comment.t=(rt.t||"").replace(/\r\n/g,"\n").replace(/\r/g,"\n");if(opts.cellHTML)comment.h=rt.h;commentList.push(comment);});return commentList;}/* [MS-XLSX] 2.1.17 */function parse_tcmnt_xml(data/*:string*/,opts)/*:Array<RawComment>*/{var out=[];var pass=false,comment={},tidx=0;data.replace(tagregex,function xml_tcmnt(x,idx){var y/*:any*/=parsexmltag(x);switch(strip_ns(y[0])){case'<?xml':break;/* 2.6.207 ThreadedComments CT_ThreadedComments */case'<ThreadedComments':break;case'</ThreadedComments>':break;/* 2.6.205 threadedComment CT_ThreadedComment */case'<threadedComment':comment={author:y.personId,guid:y.id,ref:y.ref,T:1};break;case'</threadedComment>':if(comment.t!=null)out.push(comment);break;case'<text>':case'<text':tidx=idx+x.length;break;case'</text>':comment.t=data.slice(tidx,idx).replace(/\r\n/g,"\n").replace(/\r/g,"\n");break;/* 2.6.206 mentions CT_ThreadedCommentMentions TODO */case'<mentions':case'<mentions>':pass=true;break;case'</mentions>':pass=false;break;/* 2.6.202 mention CT_Mention TODO */ /* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':case'<extLst/>':break;/* 18.2.7  ext CT_Extension + */case'<ext':pass=true;break;case'</ext>':pass=false;break;default:if(!pass&&opts.WTF)throw new Error('unrecognized '+y[0]+' in threaded comments');}return x;});return out;}/* [MS-XLSX] 2.1.18 */function parse_people_xml(data/*:string*/,opts){var out=[];var pass=false;data.replace(tagregex,function xml_tcmnt(x){var y/*:any*/=parsexmltag(x);switch(strip_ns(y[0])){case'<?xml':break;/* 2.4.85 personList CT_PersonList */case'<personList':break;case'</personList>':break;/* 2.6.203 person CT_Person TODO: providers */case'<person':out.push({name:y.displayname,id:y.id});break;case'</person>':break;/* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':case'<extLst/>':break;/* 18.2.7  ext CT_Extension + */case'<ext':pass=true;break;case'</ext>':pass=false;break;default:if(!pass&&opts.WTF)throw new Error('unrecognized '+y[0]+' in threaded comments');}return x;});return out;}/* [MS-XLSB] 2.4.28 BrtBeginComment */function parse_BrtBeginComment(data){var out={};out.iauthor=data.read_shift(4);var rfx=parse_UncheckedRfX(data);out.rfx=rfx.s;out.ref=encode_cell(rfx.s);data.l+=16;/*var guid = parse_GUID(data); */return out;}/* [MS-XLSB] 2.4.327 BrtCommentAuthor */var parse_BrtCommentAuthor=parse_XLWideString;/* [MS-XLSB] 2.1.7.8 Comments */function parse_comments_bin(data,opts)/*:Array<RawComment>*/{var out/*:Array<RawComment>*/=[];var authors/*:Array<string>*/=[];var c={};var pass=false;recordhopper(data,function hopper_cmnt(val,R,RT){switch(RT){case 0x0278:/* 'BrtCommentAuthor' */authors.push(val);break;case 0x027B:/* 'BrtBeginComment' */c=val;break;case 0x027D:/* 'BrtCommentText' */c.t=val.t;c.h=val.h;c.r=val.r;break;case 0x027C:/* 'BrtEndComment' */c.author=authors[c.iauthor];delete c/*:any*/.iauthor;if(opts.sheetRows&&c.rfx&&opts.sheetRows<=c.rfx.r)break;if(!c.t)c.t="";delete c.rfx;out.push(c);break;case 0x0C00:/* 'BrtUid' */break;case 0x0023:/* 'BrtFRTBegin' */pass=true;break;case 0x0024:/* 'BrtFRTEnd' */pass=false;break;case 0x0025:/* 'BrtACBegin' */break;case 0x0026:/* 'BrtACEnd' */break;default:if(R.T);else if(!pass||opts.WTF)throw new Error("Unexpected record 0x"+RT.toString(16));}});return out;}var CT_VBA="application/vnd.ms-office.vbaProject";function make_vba_xls(cfb){var newcfb=CFB.utils.cfb_new({root:"R"});cfb.FullPaths.forEach(function(p,i){if(p.slice(-1)==="/"||!p.match(/_VBA_PROJECT_CUR/))return;var newpath=p.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"");CFB.utils.cfb_add(newcfb,newpath,cfb.FileIndex[i].content);});return CFB.write(newcfb);}/* macro and dialog sheet stubs */function/*::data:any, opts, idx:number, rels, wb, themes, styles*/parse_ds_bin()/*:Worksheet*/{return {'!type':'dialog'};}function/*::data:any, opts, idx:number, rels, wb, themes, styles*/parse_ds_xml()/*:Worksheet*/{return {'!type':'dialog'};}function/*::data:any, opts, idx:number, rels, wb, themes, styles*/parse_ms_bin()/*:Worksheet*/{return {'!type':'macro'};}function/*::data:any, opts, idx:number, rels, wb, themes, styles*/parse_ms_xml()/*:Worksheet*/{return {'!type':'macro'};}/* TODO: it will be useful to parse the function str */var rc_to_a1=/*#__PURE__*/function(){var rcregex=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;var rcbase/*:Cell*/={r:0,c:0}/*:any*/;function rcfunc($$,$1,$2,$3){var cRel=false,rRel=false;if($2.length==0)rRel=true;else if($2.charAt(0)=="["){rRel=true;$2=$2.slice(1,-1);}if($3.length==0)cRel=true;else if($3.charAt(0)=="["){cRel=true;$3=$3.slice(1,-1);}var R=$2.length>0?parseInt($2,10)|0:0,C=$3.length>0?parseInt($3,10)|0:0;if(cRel)C+=rcbase.c;else --C;if(rRel)R+=rcbase.r;else --R;return $1+(cRel?"":"$")+encode_col(C)+(rRel?"":"$")+encode_row(R);}return function rc_to_a1(fstr/*:string*/,base/*:Cell*/)/*:string*/{rcbase=base;return fstr.replace(rcregex,rcfunc);};}();var crefregex=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;var a1_to_rc=/*#__PURE__*/function(){return function a1_to_rc(fstr/*:string*/,base/*:CellAddress*/){return fstr.replace(crefregex,function($0,$1,$2,$3,$4,$5){var c=decode_col($3)-($2?0:base.c);var r=decode_row($5)-($4?0:base.r);var R=r==0?"":!$4?"["+r+"]":r+1;var C=c==0?"":!$2?"["+c+"]":c+1;return $1+"R"+R+"C"+C;});};}();/* no defined name can collide with a valid cell address A1:XFD1048576 ... except LOG10! */function shift_formula_str(f/*:string*/,delta/*:Cell*/)/*:string*/{return f.replace(crefregex,function($0,$1,$2,$3,$4,$5){return $1+($2=="$"?$2+$3:encode_col(decode_col($3)+delta.c))+($4=="$"?$4+$5:encode_row(decode_row($5)+delta.r));});}function shift_formula_xlsx(f/*:string*/,range/*:string*/,cell/*:string*/)/*:string*/{var r=decode_range(range),s=r.s,c=decode_cell(cell);var delta={r:c.r-s.r,c:c.c-s.c};return shift_formula_str(f,delta);}/* TODO: parse formula */function fuzzyfmla(f/*:string*/)/*:boolean*/{if(f.length==1)return false;return true;}function _xlfn(f/*:string*/)/*:string*/{return f.replace(/_xlfn\./g,"");}function parseread1(blob){blob.l+=1;return;}/* [MS-XLS] 2.5.51 */function parse_ColRelU(blob,length){var c=blob.read_shift(length==1?1:2);return [c&0x3FFF,c>>14&1,c>>15&1];}/* [MS-XLS] 2.5.198.105 ; [MS-XLSB] 2.5.97.89 */function parse_RgceArea(blob,length,opts){var w=2;if(opts){if(opts.biff>=2&&opts.biff<=5)return parse_RgceArea_BIFF2(blob);else if(opts.biff==12)w=4;}var r=blob.read_shift(w),R=blob.read_shift(w);var c=parse_ColRelU(blob,2);var C=parse_ColRelU(blob,2);return {s:{r:r,c:c[0],cRel:c[1],rRel:c[2]},e:{r:R,c:C[0],cRel:C[1],rRel:C[2]}};}/* BIFF 2-5 encodes flags in the row field */function parse_RgceArea_BIFF2(blob/*::, length, opts*/){var r=parse_ColRelU(blob,2),R=parse_ColRelU(blob,2);var c=blob.read_shift(1);var C=blob.read_shift(1);return {s:{r:r[0],c:c,cRel:r[1],rRel:r[2]},e:{r:R[0],c:C,cRel:R[1],rRel:R[2]}};}/* [MS-XLS] 2.5.198.105 ; [MS-XLSB] 2.5.97.90 */function parse_RgceAreaRel(blob,length,opts){if(opts.biff<8)return parse_RgceArea_BIFF2(blob);var r=blob.read_shift(opts.biff==12?4:2),R=blob.read_shift(opts.biff==12?4:2);var c=parse_ColRelU(blob,2);var C=parse_ColRelU(blob,2);return {s:{r:r,c:c[0],cRel:c[1],rRel:c[2]},e:{r:R,c:C[0],cRel:C[1],rRel:C[2]}};}/* [MS-XLS] 2.5.198.109 ; [MS-XLSB] 2.5.97.91 */function parse_RgceLoc(blob,length,opts){if(opts&&opts.biff>=2&&opts.biff<=5)return parse_RgceLoc_BIFF2(blob);var r=blob.read_shift(opts&&opts.biff==12?4:2);var c=parse_ColRelU(blob,2);return {r:r,c:c[0],cRel:c[1],rRel:c[2]};}function parse_RgceLoc_BIFF2(blob/*::, length, opts*/){var r=parse_ColRelU(blob,2);var c=blob.read_shift(1);return {r:r[0],c:c,cRel:r[1],rRel:r[2]};}/* [MS-XLS] 2.5.198.107, 2.5.47 */function parse_RgceElfLoc(blob/*::, length, opts*/){var r=blob.read_shift(2);var c=blob.read_shift(2);return {r:r,c:c&0xFF,fQuoted:!!(c&0x4000),cRel:c>>15,rRel:c>>15};}/* [MS-XLS] 2.5.198.111 ; [MS-XLSB] 2.5.97.92 TODO */function parse_RgceLocRel(blob,length,opts){var biff=opts&&opts.biff?opts.biff:8;if(biff>=2&&biff<=5)return parse_RgceLocRel_BIFF2(blob);var r=blob.read_shift(biff>=12?4:2);var cl=blob.read_shift(2);var cRel=(cl&0x4000)>>14,rRel=(cl&0x8000)>>15;cl&=0x3FFF;if(rRel==1)while(r>0x7FFFF)r-=0x100000;if(cRel==1)while(cl>0x1FFF)cl=cl-0x4000;return {r:r,c:cl,cRel:cRel,rRel:rRel};}function parse_RgceLocRel_BIFF2(blob/*::, length:number, opts*/){var rl=blob.read_shift(2);var c=blob.read_shift(1);var rRel=(rl&0x8000)>>15,cRel=(rl&0x4000)>>14;rl&=0x3FFF;if(rRel==1&&rl>=0x2000)rl=rl-0x4000;if(cRel==1&&c>=0x80)c=c-0x100;return {r:rl,c:c,cRel:cRel,rRel:rRel};}/* [MS-XLS] 2.5.198.27 ; [MS-XLSB] 2.5.97.18 */function parse_PtgArea(blob,length,opts){var type=(blob[blob.l++]&0x60)>>5;var area=parse_RgceArea(blob,opts.biff>=2&&opts.biff<=5?6:8,opts);return [type,area];}/* [MS-XLS] 2.5.198.28 ; [MS-XLSB] 2.5.97.19 */function parse_PtgArea3d(blob,length,opts){var type=(blob[blob.l++]&0x60)>>5;var ixti=blob.read_shift(2,'i');var w=8;if(opts)switch(opts.biff){case 5:blob.l+=12;w=6;break;case 12:w=12;break;}var area=parse_RgceArea(blob,w,opts);return [type,ixti,area];}/* [MS-XLS] 2.5.198.29 ; [MS-XLSB] 2.5.97.20 */function parse_PtgAreaErr(blob,length,opts){var type=(blob[blob.l++]&0x60)>>5;blob.l+=opts&&opts.biff>8?12:opts.biff<8?6:8;return [type];}/* [MS-XLS] 2.5.198.30 ; [MS-XLSB] 2.5.97.21 */function parse_PtgAreaErr3d(blob,length,opts){var type=(blob[blob.l++]&0x60)>>5;var ixti=blob.read_shift(2);var w=8;if(opts)switch(opts.biff){case 5:blob.l+=12;w=6;break;case 12:w=12;break;}blob.l+=w;return [type,ixti];}/* [MS-XLS] 2.5.198.31 ; [MS-XLSB] 2.5.97.22 */function parse_PtgAreaN(blob,length,opts){var type=(blob[blob.l++]&0x60)>>5;var area=parse_RgceAreaRel(blob,length-1,opts);return [type,area];}/* [MS-XLS] 2.5.198.32 ; [MS-XLSB] 2.5.97.23 */function parse_PtgArray(blob,length,opts){var type=(blob[blob.l++]&0x60)>>5;blob.l+=opts.biff==2?6:opts.biff==12?14:7;return [type];}/* [MS-XLS] 2.5.198.33 ; [MS-XLSB] 2.5.97.24 */function parse_PtgAttrBaxcel(blob){var bitSemi=blob[blob.l+1]&0x01;/* 1 = volatile */var bitBaxcel=1;blob.l+=4;return [bitSemi,bitBaxcel];}/* [MS-XLS] 2.5.198.34 ; [MS-XLSB] 2.5.97.25 */function parse_PtgAttrChoose(blob,length,opts)/*:Array<number>*/{blob.l+=2;var offset=blob.read_shift(opts&&opts.biff==2?1:2);var o/*:Array<number>*/=[];/* offset is 1 less than the number of elements */for(var i=0;i<=offset;++i)o.push(blob.read_shift(opts&&opts.biff==2?1:2));return o;}/* [MS-XLS] 2.5.198.35 ; [MS-XLSB] 2.5.97.26 */function parse_PtgAttrGoto(blob,length,opts){var bitGoto=blob[blob.l+1]&0xFF?1:0;blob.l+=2;return [bitGoto,blob.read_shift(opts&&opts.biff==2?1:2)];}/* [MS-XLS] 2.5.198.36 ; [MS-XLSB] 2.5.97.27 */function parse_PtgAttrIf(blob,length,opts){var bitIf=blob[blob.l+1]&0xFF?1:0;blob.l+=2;return [bitIf,blob.read_shift(opts&&opts.biff==2?1:2)];}/* [MS-XLSB] 2.5.97.28 */function parse_PtgAttrIfError(blob){var bitIf=blob[blob.l+1]&0xFF?1:0;blob.l+=2;return [bitIf,blob.read_shift(2)];}/* [MS-XLS] 2.5.198.37 ; [MS-XLSB] 2.5.97.29 */function parse_PtgAttrSemi(blob,length,opts){var bitSemi=blob[blob.l+1]&0xFF?1:0;blob.l+=opts&&opts.biff==2?3:4;return [bitSemi];}/* [MS-XLS] 2.5.198.40 ; [MS-XLSB] 2.5.97.32 */function parse_PtgAttrSpaceType(blob/*::, length*/){var type=blob.read_shift(1),cch=blob.read_shift(1);return [type,cch];}/* [MS-XLS] 2.5.198.38 ; [MS-XLSB] 2.5.97.30 */function parse_PtgAttrSpace(blob){blob.read_shift(2);return parse_PtgAttrSpaceType(blob);}/* [MS-XLS] 2.5.198.39 ; [MS-XLSB] 2.5.97.31 */function parse_PtgAttrSpaceSemi(blob){blob.read_shift(2);return parse_PtgAttrSpaceType(blob);}/* [MS-XLS] 2.5.198.84 ; [MS-XLSB] 2.5.97.68 TODO */function parse_PtgRef(blob,length,opts){//var ptg = blob[blob.l] & 0x1F;
	var type=(blob[blob.l]&0x60)>>5;blob.l+=1;var loc=parse_RgceLoc(blob,0,opts);return [type,loc];}/* [MS-XLS] 2.5.198.88 ; [MS-XLSB] 2.5.97.72 TODO */function parse_PtgRefN(blob,length,opts){var type=(blob[blob.l]&0x60)>>5;blob.l+=1;var loc=parse_RgceLocRel(blob,0,opts);return [type,loc];}/* [MS-XLS] 2.5.198.85 ; [MS-XLSB] 2.5.97.69 TODO */function parse_PtgRef3d(blob,length,opts){var type=(blob[blob.l]&0x60)>>5;blob.l+=1;var ixti=blob.read_shift(2);// XtiIndex
	if(opts&&opts.biff==5)blob.l+=12;var loc=parse_RgceLoc(blob,0,opts);// TODO: or RgceLocRel
	return [type,ixti,loc];}/* [MS-XLS] 2.5.198.62 ; [MS-XLSB] 2.5.97.45 TODO */function parse_PtgFunc(blob,length,opts){//var ptg = blob[blob.l] & 0x1F;
	var type=(blob[blob.l]&0x60)>>5;blob.l+=1;var iftab=blob.read_shift(opts&&opts.biff<=3?1:2);return [FtabArgc[iftab],Ftab[iftab],type];}/* [MS-XLS] 2.5.198.63 ; [MS-XLSB] 2.5.97.46 TODO */function parse_PtgFuncVar(blob,length,opts){var type=blob[blob.l++];var cparams=blob.read_shift(1),tab=opts&&opts.biff<=3?[type==0x58?-1:0,blob.read_shift(1)]:parsetab(blob);return [cparams,(tab[0]===0?Ftab:Cetab)[tab[1]]];}function parsetab(blob){return [blob[blob.l+1]>>7,blob.read_shift(2)&0x7FFF];}/* [MS-XLS] 2.5.198.41 ; [MS-XLSB] 2.5.97.33 */function parse_PtgAttrSum(blob,length,opts){blob.l+=opts&&opts.biff==2?3:4;return;}/* [MS-XLS] 2.5.198.58 ; [MS-XLSB] 2.5.97.40 */function parse_PtgExp(blob,length,opts){blob.l++;if(opts&&opts.biff==12)return [blob.read_shift(4,'i'),0];var row=blob.read_shift(2);var col=blob.read_shift(opts&&opts.biff==2?1:2);return [row,col];}/* [MS-XLS] 2.5.198.57 ; [MS-XLSB] 2.5.97.39 */function parse_PtgErr(blob){blob.l++;return BErr[blob.read_shift(1)];}/* [MS-XLS] 2.5.198.66 ; [MS-XLSB] 2.5.97.49 */function parse_PtgInt(blob){blob.l++;return blob.read_shift(2);}/* [MS-XLS] 2.5.198.42 ; [MS-XLSB] 2.5.97.34 */function parse_PtgBool(blob){blob.l++;return blob.read_shift(1)!==0;}/* [MS-XLS] 2.5.198.79 ; [MS-XLSB] 2.5.97.63 */function parse_PtgNum(blob){blob.l++;return parse_Xnum(blob);}/* [MS-XLS] 2.5.198.89 ; [MS-XLSB] 2.5.97.74 */function parse_PtgStr(blob,length,opts){blob.l++;return parse_ShortXLUnicodeString(blob,length-1,opts);}/* [MS-XLS] 2.5.192.112 + 2.5.192.11{3,4,5,6,7} */ /* [MS-XLSB] 2.5.97.93 + 2.5.97.9{4,5,6,7} */function parse_SerAr(blob,biff/*:number*/){var val=[blob.read_shift(1)];if(biff==12)switch(val[0]){case 0x02:val[0]=0x04;break;/* SerBool */case 0x04:val[0]=0x10;break;/* SerErr */case 0x00:val[0]=0x01;break;/* SerNum */case 0x01:val[0]=0x02;break;/* SerStr */}switch(val[0]){case 0x04:/* SerBool -- boolean */val[1]=parsebool(blob,1)?'TRUE':'FALSE';if(biff!=12)blob.l+=7;break;case 0x25:/* appears to be an alias */case 0x10:/* SerErr -- error */val[1]=BErr[blob[blob.l]];blob.l+=biff==12?4:8;break;case 0x00:/* SerNil -- honestly, I'm not sure how to reproduce this */blob.l+=8;break;case 0x01:/* SerNum -- Xnum */val[1]=parse_Xnum(blob);break;case 0x02:/* SerStr -- XLUnicodeString (<256 chars) */val[1]=parse_XLUnicodeString2(blob,0,{biff:biff>0&&biff<8?2:biff});break;default:throw new Error("Bad SerAr: "+val[0]);/* Unreachable */}return val;}/* [MS-XLS] 2.5.198.61 ; [MS-XLSB] 2.5.97.44 */function parse_PtgExtraMem(blob,cce,opts){var count=blob.read_shift(opts.biff==12?4:2);var out/*:Array<Range>*/=[];for(var i=0;i!=count;++i)out.push((opts.biff==12?parse_UncheckedRfX:parse_Ref8U)(blob));return out;}/* [MS-XLS] 2.5.198.59 ; [MS-XLSB] 2.5.97.41 */function parse_PtgExtraArray(blob,length,opts){var rows=0,cols=0;if(opts.biff==12){rows=blob.read_shift(4);// DRw
	cols=blob.read_shift(4);// DCol
	}else {cols=1+blob.read_shift(1);//DColByteU
	rows=1+blob.read_shift(2);//DRw
	}if(opts.biff>=2&&opts.biff<8){--rows;if(--cols==0)cols=0x100;}// $FlowIgnore
	for(var i=0,o/*:Array<Array<any>>*/=[];i!=rows&&(o[i]=[]);++i)for(var j=0;j!=cols;++j)o[i][j]=parse_SerAr(blob,opts.biff);return o;}/* [MS-XLS] 2.5.198.76 ; [MS-XLSB] 2.5.97.60 */function parse_PtgName(blob,length,opts){var type=blob.read_shift(1)>>>5&0x03;var w=!opts||opts.biff>=8?4:2;var nameindex=blob.read_shift(w);switch(opts.biff){case 2:blob.l+=5;break;case 3:case 4:blob.l+=8;break;case 5:blob.l+=12;break;}return [type,0,nameindex];}/* [MS-XLS] 2.5.198.77 ; [MS-XLSB] 2.5.97.61 */function parse_PtgNameX(blob,length,opts){if(opts.biff==5)return parse_PtgNameX_BIFF5(blob);var type=blob.read_shift(1)>>>5&0x03;var ixti=blob.read_shift(2);// XtiIndex
	var nameindex=blob.read_shift(4);return [type,ixti,nameindex];}function parse_PtgNameX_BIFF5(blob/*::, length, opts*/){var type=blob.read_shift(1)>>>5&0x03;var ixti=blob.read_shift(2,'i');// XtiIndex
	blob.l+=8;var nameindex=blob.read_shift(2);blob.l+=12;return [type,ixti,nameindex];}/* [MS-XLS] 2.5.198.70 ; [MS-XLSB] 2.5.97.54 */function parse_PtgMemArea(blob,length,opts){var type=blob.read_shift(1)>>>5&0x03;blob.l+=opts&&opts.biff==2?3:4;var cce=blob.read_shift(opts&&opts.biff==2?1:2);return [type,cce];}/* [MS-XLS] 2.5.198.72 ; [MS-XLSB] 2.5.97.56 */function parse_PtgMemFunc(blob,length,opts){var type=blob.read_shift(1)>>>5&0x03;var cce=blob.read_shift(opts&&opts.biff==2?1:2);return [type,cce];}/* [MS-XLS] 2.5.198.86 ; [MS-XLSB] 2.5.97.69 */function parse_PtgRefErr(blob,length,opts){var type=blob.read_shift(1)>>>5&0x03;blob.l+=4;if(opts.biff<8)blob.l--;if(opts.biff==12)blob.l+=2;return [type];}/* [MS-XLS] 2.5.198.87 ; [MS-XLSB] 2.5.97.71 */function parse_PtgRefErr3d(blob,length,opts){var type=(blob[blob.l++]&0x60)>>5;var ixti=blob.read_shift(2);var w=4;if(opts)switch(opts.biff){case 5:w=15;break;case 12:w=6;break;}blob.l+=w;return [type,ixti];}/* [MS-XLS] 2.5.198.71 ; [MS-XLSB] 2.5.97.55 */var parse_PtgMemErr=parsenoop;/* [MS-XLS] 2.5.198.73  ; [MS-XLSB] 2.5.97.57 */var parse_PtgMemNoMem=parsenoop;/* [MS-XLS] 2.5.198.92 */var parse_PtgTbl=parsenoop;function parse_PtgElfLoc(blob,length,opts){blob.l+=2;return [parse_RgceElfLoc(blob)];}function parse_PtgElfNoop(blob/*::, length, opts*/){blob.l+=6;return [];}/* [MS-XLS] 2.5.198.46 */var parse_PtgElfCol=parse_PtgElfLoc;/* [MS-XLS] 2.5.198.47 */var parse_PtgElfColS=parse_PtgElfNoop;/* [MS-XLS] 2.5.198.48 */var parse_PtgElfColSV=parse_PtgElfNoop;/* [MS-XLS] 2.5.198.49 */var parse_PtgElfColV=parse_PtgElfLoc;/* [MS-XLS] 2.5.198.50 */function parse_PtgElfLel(blob/*::, length, opts*/){blob.l+=2;return [parseuint16(blob),blob.read_shift(2)&0x01];}/* [MS-XLS] 2.5.198.51 */var parse_PtgElfRadical=parse_PtgElfLoc;/* [MS-XLS] 2.5.198.52 */var parse_PtgElfRadicalLel=parse_PtgElfLel;/* [MS-XLS] 2.5.198.53 */var parse_PtgElfRadicalS=parse_PtgElfNoop;/* [MS-XLS] 2.5.198.54 */var parse_PtgElfRw=parse_PtgElfLoc;/* [MS-XLS] 2.5.198.55 */var parse_PtgElfRwV=parse_PtgElfLoc;/* [MS-XLSB] 2.5.97.52 TODO */var PtgListRT=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function parse_PtgList(blob/*::, length, opts*/){blob.l+=2;var ixti=blob.read_shift(2);var flags=blob.read_shift(2);var idx=blob.read_shift(4);var c=blob.read_shift(2);var C=blob.read_shift(2);var rt=PtgListRT[flags>>2&0x1F];return {ixti:ixti,coltype:flags&0x3,rt:rt,idx:idx,c:c,C:C};}/* [MS-XLS] 2.5.198.91 ; [MS-XLSB] 2.5.97.76 */function parse_PtgSxName(blob/*::, length, opts*/){blob.l+=2;return [blob.read_shift(4)];}/* [XLS] old spec */function parse_PtgSheet(blob,length,opts){blob.l+=5;blob.l+=2;blob.l+=opts.biff==2?1:4;return ["PTGSHEET"];}function parse_PtgEndSheet(blob,length,opts){blob.l+=opts.biff==2?4:5;return ["PTGENDSHEET"];}function parse_PtgMemAreaN(blob/*::, length, opts*/){var type=blob.read_shift(1)>>>5&0x03;var cce=blob.read_shift(2);return [type,cce];}function parse_PtgMemNoMemN(blob/*::, length, opts*/){var type=blob.read_shift(1)>>>5&0x03;var cce=blob.read_shift(2);return [type,cce];}function parse_PtgAttrNoop(blob/*::, length, opts*/){blob.l+=4;return [0,0];}/* [MS-XLS] 2.5.198.25 ; [MS-XLSB] 2.5.97.16 */var PtgTypes={/*::[*/0x01/*::]*/:{n:'PtgExp',f:parse_PtgExp},/*::[*/0x02/*::]*/:{n:'PtgTbl',f:parse_PtgTbl},/*::[*/0x03/*::]*/:{n:'PtgAdd',f:parseread1},/*::[*/0x04/*::]*/:{n:'PtgSub',f:parseread1},/*::[*/0x05/*::]*/:{n:'PtgMul',f:parseread1},/*::[*/0x06/*::]*/:{n:'PtgDiv',f:parseread1},/*::[*/0x07/*::]*/:{n:'PtgPower',f:parseread1},/*::[*/0x08/*::]*/:{n:'PtgConcat',f:parseread1},/*::[*/0x09/*::]*/:{n:'PtgLt',f:parseread1},/*::[*/0x0A/*::]*/:{n:'PtgLe',f:parseread1},/*::[*/0x0B/*::]*/:{n:'PtgEq',f:parseread1},/*::[*/0x0C/*::]*/:{n:'PtgGe',f:parseread1},/*::[*/0x0D/*::]*/:{n:'PtgGt',f:parseread1},/*::[*/0x0E/*::]*/:{n:'PtgNe',f:parseread1},/*::[*/0x0F/*::]*/:{n:'PtgIsect',f:parseread1},/*::[*/0x10/*::]*/:{n:'PtgUnion',f:parseread1},/*::[*/0x11/*::]*/:{n:'PtgRange',f:parseread1},/*::[*/0x12/*::]*/:{n:'PtgUplus',f:parseread1},/*::[*/0x13/*::]*/:{n:'PtgUminus',f:parseread1},/*::[*/0x14/*::]*/:{n:'PtgPercent',f:parseread1},/*::[*/0x15/*::]*/:{n:'PtgParen',f:parseread1},/*::[*/0x16/*::]*/:{n:'PtgMissArg',f:parseread1},/*::[*/0x17/*::]*/:{n:'PtgStr',f:parse_PtgStr},/*::[*/0x1A/*::]*/:{n:'PtgSheet',f:parse_PtgSheet},/*::[*/0x1B/*::]*/:{n:'PtgEndSheet',f:parse_PtgEndSheet},/*::[*/0x1C/*::]*/:{n:'PtgErr',f:parse_PtgErr},/*::[*/0x1D/*::]*/:{n:'PtgBool',f:parse_PtgBool},/*::[*/0x1E/*::]*/:{n:'PtgInt',f:parse_PtgInt},/*::[*/0x1F/*::]*/:{n:'PtgNum',f:parse_PtgNum},/*::[*/0x20/*::]*/:{n:'PtgArray',f:parse_PtgArray},/*::[*/0x21/*::]*/:{n:'PtgFunc',f:parse_PtgFunc},/*::[*/0x22/*::]*/:{n:'PtgFuncVar',f:parse_PtgFuncVar},/*::[*/0x23/*::]*/:{n:'PtgName',f:parse_PtgName},/*::[*/0x24/*::]*/:{n:'PtgRef',f:parse_PtgRef},/*::[*/0x25/*::]*/:{n:'PtgArea',f:parse_PtgArea},/*::[*/0x26/*::]*/:{n:'PtgMemArea',f:parse_PtgMemArea},/*::[*/0x27/*::]*/:{n:'PtgMemErr',f:parse_PtgMemErr},/*::[*/0x28/*::]*/:{n:'PtgMemNoMem',f:parse_PtgMemNoMem},/*::[*/0x29/*::]*/:{n:'PtgMemFunc',f:parse_PtgMemFunc},/*::[*/0x2A/*::]*/:{n:'PtgRefErr',f:parse_PtgRefErr},/*::[*/0x2B/*::]*/:{n:'PtgAreaErr',f:parse_PtgAreaErr},/*::[*/0x2C/*::]*/:{n:'PtgRefN',f:parse_PtgRefN},/*::[*/0x2D/*::]*/:{n:'PtgAreaN',f:parse_PtgAreaN},/*::[*/0x2E/*::]*/:{n:'PtgMemAreaN',f:parse_PtgMemAreaN},/*::[*/0x2F/*::]*/:{n:'PtgMemNoMemN',f:parse_PtgMemNoMemN},/*::[*/0x39/*::]*/:{n:'PtgNameX',f:parse_PtgNameX},/*::[*/0x3A/*::]*/:{n:'PtgRef3d',f:parse_PtgRef3d},/*::[*/0x3B/*::]*/:{n:'PtgArea3d',f:parse_PtgArea3d},/*::[*/0x3C/*::]*/:{n:'PtgRefErr3d',f:parse_PtgRefErr3d},/*::[*/0x3D/*::]*/:{n:'PtgAreaErr3d',f:parse_PtgAreaErr3d},/*::[*/0xFF/*::]*/:{}};/* These are duplicated in the PtgTypes table */var PtgDupes={/*::[*/0x40/*::]*/:0x20,/*::[*/0x60/*::]*/:0x20,/*::[*/0x41/*::]*/:0x21,/*::[*/0x61/*::]*/:0x21,/*::[*/0x42/*::]*/:0x22,/*::[*/0x62/*::]*/:0x22,/*::[*/0x43/*::]*/:0x23,/*::[*/0x63/*::]*/:0x23,/*::[*/0x44/*::]*/:0x24,/*::[*/0x64/*::]*/:0x24,/*::[*/0x45/*::]*/:0x25,/*::[*/0x65/*::]*/:0x25,/*::[*/0x46/*::]*/:0x26,/*::[*/0x66/*::]*/:0x26,/*::[*/0x47/*::]*/:0x27,/*::[*/0x67/*::]*/:0x27,/*::[*/0x48/*::]*/:0x28,/*::[*/0x68/*::]*/:0x28,/*::[*/0x49/*::]*/:0x29,/*::[*/0x69/*::]*/:0x29,/*::[*/0x4A/*::]*/:0x2A,/*::[*/0x6A/*::]*/:0x2A,/*::[*/0x4B/*::]*/:0x2B,/*::[*/0x6B/*::]*/:0x2B,/*::[*/0x4C/*::]*/:0x2C,/*::[*/0x6C/*::]*/:0x2C,/*::[*/0x4D/*::]*/:0x2D,/*::[*/0x6D/*::]*/:0x2D,/*::[*/0x4E/*::]*/:0x2E,/*::[*/0x6E/*::]*/:0x2E,/*::[*/0x4F/*::]*/:0x2F,/*::[*/0x6F/*::]*/:0x2F,/*::[*/0x58/*::]*/:0x22,/*::[*/0x78/*::]*/:0x22,/*::[*/0x59/*::]*/:0x39,/*::[*/0x79/*::]*/:0x39,/*::[*/0x5A/*::]*/:0x3A,/*::[*/0x7A/*::]*/:0x3A,/*::[*/0x5B/*::]*/:0x3B,/*::[*/0x7B/*::]*/:0x3B,/*::[*/0x5C/*::]*/:0x3C,/*::[*/0x7C/*::]*/:0x3C,/*::[*/0x5D/*::]*/:0x3D,/*::[*/0x7D/*::]*/:0x3D};var Ptg18={/*::[*/0x01/*::]*/:{n:'PtgElfLel',f:parse_PtgElfLel},/*::[*/0x02/*::]*/:{n:'PtgElfRw',f:parse_PtgElfRw},/*::[*/0x03/*::]*/:{n:'PtgElfCol',f:parse_PtgElfCol},/*::[*/0x06/*::]*/:{n:'PtgElfRwV',f:parse_PtgElfRwV},/*::[*/0x07/*::]*/:{n:'PtgElfColV',f:parse_PtgElfColV},/*::[*/0x0A/*::]*/:{n:'PtgElfRadical',f:parse_PtgElfRadical},/*::[*/0x0B/*::]*/:{n:'PtgElfRadicalS',f:parse_PtgElfRadicalS},/*::[*/0x0D/*::]*/:{n:'PtgElfColS',f:parse_PtgElfColS},/*::[*/0x0F/*::]*/:{n:'PtgElfColSV',f:parse_PtgElfColSV},/*::[*/0x10/*::]*/:{n:'PtgElfRadicalLel',f:parse_PtgElfRadicalLel},/*::[*/0x19/*::]*/:{n:'PtgList',f:parse_PtgList},/*::[*/0x1D/*::]*/:{n:'PtgSxName',f:parse_PtgSxName},/*::[*/0xFF/*::]*/:{}};var Ptg19={/*::[*/0x00/*::]*/:{n:'PtgAttrNoop',f:parse_PtgAttrNoop},/*::[*/0x01/*::]*/:{n:'PtgAttrSemi',f:parse_PtgAttrSemi},/*::[*/0x02/*::]*/:{n:'PtgAttrIf',f:parse_PtgAttrIf},/*::[*/0x04/*::]*/:{n:'PtgAttrChoose',f:parse_PtgAttrChoose},/*::[*/0x08/*::]*/:{n:'PtgAttrGoto',f:parse_PtgAttrGoto},/*::[*/0x10/*::]*/:{n:'PtgAttrSum',f:parse_PtgAttrSum},/*::[*/0x20/*::]*/:{n:'PtgAttrBaxcel',f:parse_PtgAttrBaxcel},/*::[*/0x21/*::]*/:{n:'PtgAttrBaxcel',f:parse_PtgAttrBaxcel},/*::[*/0x40/*::]*/:{n:'PtgAttrSpace',f:parse_PtgAttrSpace},/*::[*/0x41/*::]*/:{n:'PtgAttrSpaceSemi',f:parse_PtgAttrSpaceSemi},/*::[*/0x80/*::]*/:{n:'PtgAttrIfError',f:parse_PtgAttrIfError},/*::[*/0xFF/*::]*/:{}};/* [MS-XLS] 2.5.198.103 ; [MS-XLSB] 2.5.97.87 */function parse_RgbExtra(blob,length,rgce,opts){if(opts.biff<8)return parsenoop(blob,length);var target=blob.l+length;var o=[];for(var i=0;i!==rgce.length;++i){switch(rgce[i][0]){case'PtgArray':/* PtgArray -> PtgExtraArray */rgce[i][1]=parse_PtgExtraArray(blob,0,opts);o.push(rgce[i][1]);break;case'PtgMemArea':/* PtgMemArea -> PtgExtraMem */rgce[i][2]=parse_PtgExtraMem(blob,rgce[i][1],opts);o.push(rgce[i][2]);break;case'PtgExp':/* PtgExp -> PtgExtraCol */if(opts&&opts.biff==12){rgce[i][1][1]=blob.read_shift(4);o.push(rgce[i][1]);}break;case'PtgList':/* TODO: PtgList -> PtgExtraList */case'PtgElfRadicalS':/* TODO: PtgElfRadicalS -> PtgExtraElf */case'PtgElfColS':/* TODO: PtgElfColS -> PtgExtraElf */case'PtgElfColSV':/* TODO: PtgElfColSV -> PtgExtraElf */throw "Unsupported "+rgce[i][0];}}length=target-blob.l;/* note: this is technically an error but Excel disregards */ //if(target !== blob.l && blob.l !== target - length) throw new Error(target + " != " + blob.l);
	if(length!==0)o.push(parsenoop(blob,length));return o;}/* [MS-XLS] 2.5.198.104 ; [MS-XLSB] 2.5.97.88 */function parse_Rgce(blob,length,opts){var target=blob.l+length;var R,id,ptgs=[];while(target!=blob.l){length=target-blob.l;id=blob[blob.l];R=PtgTypes[id]||PtgTypes[PtgDupes[id]];if(id===0x18||id===0x19)R=(id===0x18?Ptg18:Ptg19)[blob[blob.l+1]];if(!R||!R.f){/*ptgs.push*/parsenoop(blob,length);}else {ptgs.push([R.n,R.f(blob,length,opts)]);}}return ptgs;}function stringify_array(f/*:Array<Array<string>>*/)/*:string*/{var o/*:Array<string>*/=[];for(var i=0;i<f.length;++i){var x=f[i],r/*:Array<string>*/=[];for(var j=0;j<x.length;++j){var y=x[j];if(y)switch(y[0]){// TODO: handle embedded quotes
	case 0x02:/*:: if(typeof y[1] != 'string') throw "unreachable"; */r.push('"'+y[1].replace(/"/g,'""')+'"');break;default:r.push(y[1]);}else r.push("");}o.push(r.join(","));}return o.join(";");}/* [MS-XLS] 2.2.2 ; [MS-XLSB] 2.2.2 TODO */var PtgBinOp={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};// List of invalid characters needs to be tested further
	function formula_quote_sheet_name(sname/*:string*/,opts)/*:string*/{if(!sname&&!(opts&&opts.biff<=5&&opts.biff>=2))throw new Error("empty sheet name");if(/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(sname))return "'"+sname+"'";return sname;}function get_ixti_raw(supbooks,ixti/*:number*/,opts)/*:string*/{if(!supbooks)return "SH33TJSERR0";if(opts.biff>8&&(!supbooks.XTI||!supbooks.XTI[ixti]))return supbooks.SheetNames[ixti];if(!supbooks.XTI)return "SH33TJSERR6";var XTI=supbooks.XTI[ixti];if(opts.biff<8){if(ixti>10000)ixti-=65536;if(ixti<0)ixti=-ixti;return ixti==0?"":supbooks.XTI[ixti-1];}if(!XTI)return "SH33TJSERR1";var o="";if(opts.biff>8)switch(supbooks[XTI[0]][0]){case 0x0165:/* 'BrtSupSelf' */o=XTI[1]==-1?"#REF":supbooks.SheetNames[XTI[1]];return XTI[1]==XTI[2]?o:o+":"+supbooks.SheetNames[XTI[2]];case 0x0166:/* 'BrtSupSame' */if(opts.SID!=null)return supbooks.SheetNames[opts.SID];return "SH33TJSSAME"+supbooks[XTI[0]][0];case 0x0163:/* 'BrtSupBookSrc' */ /* falls through */default:return "SH33TJSSRC"+supbooks[XTI[0]][0];}switch(supbooks[XTI[0]][0][0]){case 0x0401:o=XTI[1]==-1?"#REF":supbooks.SheetNames[XTI[1]]||"SH33TJSERR3";return XTI[1]==XTI[2]?o:o+":"+supbooks.SheetNames[XTI[2]];case 0x3A01:return supbooks[XTI[0]].slice(1).map(function(name){return name.Name;}).join(";;");//return "SH33TJSERR8";
	default:if(!supbooks[XTI[0]][0][3])return "SH33TJSERR2";o=XTI[1]==-1?"#REF":supbooks[XTI[0]][0][3][XTI[1]]||"SH33TJSERR4";return XTI[1]==XTI[2]?o:o+":"+supbooks[XTI[0]][0][3][XTI[2]];}}function get_ixti(supbooks,ixti/*:number*/,opts)/*:string*/{var ixtiraw=get_ixti_raw(supbooks,ixti,opts);return ixtiraw=="#REF"?ixtiraw:formula_quote_sheet_name(ixtiraw,opts);}function stringify_formula(formula/*Array<any>*/,range,cell/*:any*/,supbooks,opts)/*:string*/{var biff=opts&&opts.biff||8;var _range=/*range != null ? range :*/{s:{c:0,r:0},e:{c:0,r:0}};var stack/*:Array<string>*/=[],e1,e2,/*::type,*/c/*:CellAddress*/,ixti=0,nameidx=0,r,sname="";if(!formula[0]||!formula[0][0])return "";var last_sp=-1,sp="";for(var ff=0,fflen=formula[0].length;ff<fflen;++ff){var f=formula[0][ff];switch(f[0]){case'PtgUminus':/* [MS-XLS] 2.5.198.93 */stack.push("-"+stack.pop());break;case'PtgUplus':/* [MS-XLS] 2.5.198.95 */stack.push("+"+stack.pop());break;case'PtgPercent':/* [MS-XLS] 2.5.198.81 */stack.push(stack.pop()+"%");break;case'PtgAdd':/* [MS-XLS] 2.5.198.26 */case'PtgConcat':/* [MS-XLS] 2.5.198.43 */case'PtgDiv':/* [MS-XLS] 2.5.198.45 */case'PtgEq':/* [MS-XLS] 2.5.198.56 */case'PtgGe':/* [MS-XLS] 2.5.198.64 */case'PtgGt':/* [MS-XLS] 2.5.198.65 */case'PtgLe':/* [MS-XLS] 2.5.198.68 */case'PtgLt':/* [MS-XLS] 2.5.198.69 */case'PtgMul':/* [MS-XLS] 2.5.198.75 */case'PtgNe':/* [MS-XLS] 2.5.198.78 */case'PtgPower':/* [MS-XLS] 2.5.198.82 */case'PtgSub':/* [MS-XLS] 2.5.198.90 */e1=stack.pop();e2=stack.pop();if(last_sp>=0){switch(formula[0][last_sp][1][0]){case 0:// $FlowIgnore
	sp=fill(" ",formula[0][last_sp][1][1]);break;case 1:// $FlowIgnore
	sp=fill("\r",formula[0][last_sp][1][1]);break;default:sp="";// $FlowIgnore
	if(opts.WTF)throw new Error("Unexpected PtgAttrSpaceType "+formula[0][last_sp][1][0]);}e2=e2+sp;last_sp=-1;}stack.push(e2+PtgBinOp[f[0]]+e1);break;case'PtgIsect':/* [MS-XLS] 2.5.198.67 */e1=stack.pop();e2=stack.pop();stack.push(e2+" "+e1);break;case'PtgUnion':/* [MS-XLS] 2.5.198.94 */e1=stack.pop();e2=stack.pop();stack.push(e2+","+e1);break;case'PtgRange':/* [MS-XLS] 2.5.198.83 */e1=stack.pop();e2=stack.pop();stack.push(e2+":"+e1);break;case'PtgAttrChoose':/* [MS-XLS] 2.5.198.34 */break;case'PtgAttrGoto':/* [MS-XLS] 2.5.198.35 */break;case'PtgAttrIf':/* [MS-XLS] 2.5.198.36 */break;case'PtgAttrIfError':/* [MS-XLSB] 2.5.97.28 */break;case'PtgRef':/* [MS-XLS] 2.5.198.84 */ /*::type = f[1][0]; */c=shift_cell_xls(f[1][1]/*:any*/,_range,opts);stack.push(encode_cell_xls(c,biff));break;case'PtgRefN':/* [MS-XLS] 2.5.198.88 */ /*::type = f[1][0]; */c=cell?shift_cell_xls(f[1][1]/*:any*/,cell,opts):f[1][1]/*:any*/;stack.push(encode_cell_xls(c,biff));break;case'PtgRef3d':/* [MS-XLS] 2.5.198.85 */ /*::type = f[1][0]; */ixti=/*::Number(*/f[1][1]/*::)*/;c=shift_cell_xls(f[1][2]/*:any*/,_range,opts);sname=get_ixti(supbooks,ixti,opts);stack.push(sname+"!"+encode_cell_xls(c,biff));break;case'PtgFunc':/* [MS-XLS] 2.5.198.62 */case'PtgFuncVar':/* [MS-XLS] 2.5.198.63 */ /* f[1] = [argc, func, type] */var argc/*:number*/=f[1][0]/*:any*/,func/*:string*/=f[1][1]/*:any*/;if(!argc)argc=0;argc&=0x7F;var args=argc==0?[]:stack.slice(-argc);stack.length-=argc;if(func==='User')func=args.shift();stack.push(func+"("+args.join(",")+")");break;case'PtgBool':/* [MS-XLS] 2.5.198.42 */stack.push(f[1]?"TRUE":"FALSE");break;case'PtgInt':/* [MS-XLS] 2.5.198.66 */stack.push(/*::String(*/f[1]/*::)*/);break;case'PtgNum':/* [MS-XLS] 2.5.198.79 TODO: precision? */stack.push(String(f[1]));break;case'PtgStr':/* [MS-XLS] 2.5.198.89 */ // $FlowIgnore
	stack.push('"'+f[1].replace(/"/g,'""')+'"');break;case'PtgErr':/* [MS-XLS] 2.5.198.57 */stack.push(/*::String(*/f[1]/*::)*/);break;case'PtgAreaN':/* [MS-XLS] 2.5.198.31 TODO */ /*::type = f[1][0]; */r=shift_range_xls(f[1][1],cell?{s:cell}:_range,opts);stack.push(encode_range_xls(r/*:any*/,opts));break;case'PtgArea':/* [MS-XLS] 2.5.198.27 TODO: fixed points */ /*::type = f[1][0]; */r=shift_range_xls(f[1][1],_range,opts);stack.push(encode_range_xls(r/*:any*/,opts));break;case'PtgArea3d':/* [MS-XLS] 2.5.198.28 TODO */ /*::type = f[1][0]; */ixti=/*::Number(*/f[1][1]/*::)*/;r=f[1][2];sname=get_ixti(supbooks,ixti,opts);stack.push(sname+"!"+encode_range_xls(r/*:any*/,opts));break;case'PtgAttrSum':/* [MS-XLS] 2.5.198.41 */stack.push("SUM("+stack.pop()+")");break;case'PtgAttrBaxcel':/* [MS-XLS] 2.5.198.33 */case'PtgAttrSemi':/* [MS-XLS] 2.5.198.37 */break;case'PtgName':/* [MS-XLS] 2.5.198.76 ; [MS-XLSB] 2.5.97.60 TODO: revisions */ /* f[1] = type, 0, nameindex */nameidx=f[1][2]/*:any*/;var lbl=(supbooks.names||[])[nameidx-1]||(supbooks[0]||[])[nameidx];var name=lbl?lbl.Name:"SH33TJSNAME"+String(nameidx);/* [MS-XLSB] 2.5.97.10 Ftab -- last verified 20220204 */if(name&&name.slice(0,6)=="_xlfn."&&!opts.xlfn)name=name.slice(6);stack.push(name);break;case'PtgNameX':/* [MS-XLS] 2.5.198.77 ; [MS-XLSB] 2.5.97.61 TODO: revisions */ /* f[1] = type, ixti, nameindex */var bookidx/*:number*/=f[1][1]/*:any*/;nameidx=f[1][2]/*:any*/;var externbook;/* TODO: Properly handle missing values -- this should be using get_ixti_raw primarily */if(opts.biff<=5){if(bookidx<0)bookidx=-bookidx;if(supbooks[bookidx])externbook=supbooks[bookidx][nameidx];}else {var o="";if(((supbooks[bookidx]||[])[0]||[])[0]==0x3A01);else if(((supbooks[bookidx]||[])[0]||[])[0]==0x0401){if(supbooks[bookidx][nameidx]&&supbooks[bookidx][nameidx].itab>0){o=supbooks.SheetNames[supbooks[bookidx][nameidx].itab-1]+"!";}}else o=supbooks.SheetNames[nameidx-1]+"!";if(supbooks[bookidx]&&supbooks[bookidx][nameidx])o+=supbooks[bookidx][nameidx].Name;else if(supbooks[0]&&supbooks[0][nameidx])o+=supbooks[0][nameidx].Name;else {var ixtidata=(get_ixti_raw(supbooks,bookidx,opts)||"").split(";;");if(ixtidata[nameidx-1])o=ixtidata[nameidx-1];// TODO: confirm this is correct
	else o+="SH33TJSERRX";}stack.push(o);break;}if(!externbook)externbook={Name:"SH33TJSERRY"};stack.push(externbook.Name);break;case'PtgParen':/* [MS-XLS] 2.5.198.80 */var lp='(',rp=')';if(last_sp>=0){sp="";switch(formula[0][last_sp][1][0]){// $FlowIgnore
	case 2:lp=fill(" ",formula[0][last_sp][1][1])+lp;break;// $FlowIgnore
	case 3:lp=fill("\r",formula[0][last_sp][1][1])+lp;break;// $FlowIgnore
	case 4:rp=fill(" ",formula[0][last_sp][1][1])+rp;break;// $FlowIgnore
	case 5:rp=fill("\r",formula[0][last_sp][1][1])+rp;break;default:// $FlowIgnore
	if(opts.WTF)throw new Error("Unexpected PtgAttrSpaceType "+formula[0][last_sp][1][0]);}last_sp=-1;}stack.push(lp+stack.pop()+rp);break;case'PtgRefErr':/* [MS-XLS] 2.5.198.86 */stack.push('#REF!');break;case'PtgRefErr3d':/* [MS-XLS] 2.5.198.87 */stack.push('#REF!');break;case'PtgExp':/* [MS-XLS] 2.5.198.58 TODO */c={c:f[1][1]/*:any*/,r:f[1][0]/*:any*/};var q={c:cell.c,r:cell.r}/*:any*/;if(supbooks.sharedf[encode_cell(c)]){var parsedf=supbooks.sharedf[encode_cell(c)];stack.push(stringify_formula(parsedf,_range,q,supbooks,opts));}else {var fnd=false;for(e1=0;e1!=supbooks.arrayf.length;++e1){/* TODO: should be something like range_has */e2=supbooks.arrayf[e1];if(c.c<e2[0].s.c||c.c>e2[0].e.c)continue;if(c.r<e2[0].s.r||c.r>e2[0].e.r)continue;stack.push(stringify_formula(e2[1],_range,q,supbooks,opts));fnd=true;break;}if(!fnd)stack.push(/*::String(*/f[1]/*::)*/);}break;case'PtgArray':/* [MS-XLS] 2.5.198.32 TODO */stack.push("{"+stringify_array(/*::(*/f[1]/*:: :any)*/)+"}");break;case'PtgMemArea':/* [MS-XLS] 2.5.198.70 TODO: confirm this is a non-display */ //stack.push("(" + f[2].map(encode_range).join(",") + ")");
	break;case'PtgAttrSpace':/* [MS-XLS] 2.5.198.38 */case'PtgAttrSpaceSemi':/* [MS-XLS] 2.5.198.39 */last_sp=ff;break;case'PtgTbl':/* [MS-XLS] 2.5.198.92 TODO */break;case'PtgMemErr':/* [MS-XLS] 2.5.198.71 */break;case'PtgMissArg':/* [MS-XLS] 2.5.198.74 */stack.push("");break;case'PtgAreaErr':/* [MS-XLS] 2.5.198.29 */stack.push("#REF!");break;case'PtgAreaErr3d':/* [MS-XLS] 2.5.198.30 */stack.push("#REF!");break;case'PtgList':/* [MS-XLSB] 2.5.97.52 */ // $FlowIgnore
	stack.push("Table"+f[1].idx+"[#"+f[1].rt+"]");break;case'PtgMemAreaN':case'PtgMemNoMemN':case'PtgAttrNoop':case'PtgSheet':case'PtgEndSheet':break;case'PtgMemFunc':/* [MS-XLS] 2.5.198.72 TODO */break;case'PtgMemNoMem':/* [MS-XLS] 2.5.198.73 TODO */break;case'PtgElfCol':/* [MS-XLS] 2.5.198.46 */case'PtgElfColS':/* [MS-XLS] 2.5.198.47 */case'PtgElfColSV':/* [MS-XLS] 2.5.198.48 */case'PtgElfColV':/* [MS-XLS] 2.5.198.49 */case'PtgElfLel':/* [MS-XLS] 2.5.198.50 */case'PtgElfRadical':/* [MS-XLS] 2.5.198.51 */case'PtgElfRadicalLel':/* [MS-XLS] 2.5.198.52 */case'PtgElfRadicalS':/* [MS-XLS] 2.5.198.53 */case'PtgElfRw':/* [MS-XLS] 2.5.198.54 */case'PtgElfRwV':/* [MS-XLS] 2.5.198.55 */throw new Error("Unsupported ELFs");case'PtgSxName':/* [MS-XLS] 2.5.198.91 TODO -- find a test case */throw new Error('Unrecognized Formula Token: '+String(f));default:throw new Error('Unrecognized Formula Token: '+String(f));}var PtgNonDisp=['PtgAttrSpace','PtgAttrSpaceSemi','PtgAttrGoto'];if(opts.biff!=3)if(last_sp>=0&&PtgNonDisp.indexOf(formula[0][ff][0])==-1){f=formula[0][last_sp];var _left=true;switch(f[1][0]){/* note: some bad XLSB files omit the PtgParen */case 4:_left=false;/* falls through */case 0:// $FlowIgnore
	sp=fill(" ",f[1][1]);break;case 5:_left=false;/* falls through */case 1:// $FlowIgnore
	sp=fill("\r",f[1][1]);break;default:sp="";// $FlowIgnore
	if(opts.WTF)throw new Error("Unexpected PtgAttrSpaceType "+f[1][0]);}stack.push((_left?sp:"")+stack.pop()+(_left?"":sp));last_sp=-1;}}if(stack.length>1&&opts.WTF)throw new Error("bad formula stack");return stack[0];}/* [MS-XLS] 2.5.198.1 TODO */function parse_ArrayParsedFormula(blob,length,opts/*::, ref*/){var target=blob.l+length,len=opts.biff==2?1:2;var rgcb,cce=blob.read_shift(len);// length of rgce
	if(cce==0xFFFF)return [[],parsenoop(blob,length-2)];var rgce=parse_Rgce(blob,cce,opts);if(length!==cce+len)rgcb=parse_RgbExtra(blob,length-cce-len,rgce,opts);blob.l=target;return [rgce,rgcb];}/* [MS-XLS] 2.5.198.3 TODO */function parse_XLSCellParsedFormula(blob,length,opts){var target=blob.l+length,len=opts.biff==2?1:2;var rgcb,cce=blob.read_shift(len);// length of rgce
	if(cce==0xFFFF)return [[],parsenoop(blob,length-2)];var rgce=parse_Rgce(blob,cce,opts);if(length!==cce+len)rgcb=parse_RgbExtra(blob,length-cce-len,rgce,opts);blob.l=target;return [rgce,rgcb];}/* [MS-XLS] 2.5.198.21 */function parse_NameParsedFormula(blob,length,opts,cce){var target=blob.l+length;var rgce=parse_Rgce(blob,cce,opts);var rgcb;if(target!==blob.l)rgcb=parse_RgbExtra(blob,target-blob.l,rgce,opts);return [rgce,rgcb];}/* [MS-XLS] 2.5.198.118 TODO */function parse_SharedParsedFormula(blob,length,opts){var target=blob.l+length;var rgcb,cce=blob.read_shift(2);// length of rgce
	var rgce=parse_Rgce(blob,cce,opts);if(cce==0xFFFF)return [[],parsenoop(blob,length-2)];if(length!==cce+2)rgcb=parse_RgbExtra(blob,target-cce-2,rgce,opts);return [rgce,rgcb];}/* [MS-XLS] 2.5.133 TODO: how to emit empty strings? */function parse_FormulaValue(blob/*::, length*/){var b;if(__readUInt16LE(blob,blob.l+6)!==0xFFFF)return [parse_Xnum(blob),'n'];switch(blob[blob.l]){case 0x00:blob.l+=8;return ["String",'s'];case 0x01:b=blob[blob.l+2]===0x1;blob.l+=8;return [b,'b'];case 0x02:b=blob[blob.l+2];blob.l+=8;return [b,'e'];case 0x03:blob.l+=8;return ["",'s'];}return [];}/* [MS-XLS] 2.4.127 TODO */function parse_Formula(blob,length,opts){var end=blob.l+length;var cell=parse_XLSCell(blob);if(opts.biff==2)++blob.l;var val=parse_FormulaValue(blob);var flags=blob.read_shift(1);if(opts.biff!=2){blob.read_shift(1);if(opts.biff>=5){/*var chn = */blob.read_shift(4);}}var cbf=parse_XLSCellParsedFormula(blob,end-blob.l,opts);return {cell:cell,val:val[0],formula:cbf,shared:flags>>3&1,tt:val[1]};}/* XLSB Parsed Formula records have the same shape */function parse_XLSBParsedFormula(data,length,opts){var cce=data.read_shift(4);var rgce=parse_Rgce(data,cce,opts);var cb=data.read_shift(4);var rgcb=cb>0?parse_RgbExtra(data,cb,rgce,opts):null;return [rgce,rgcb];}/* [MS-XLSB] 2.5.97.1 ArrayParsedFormula */var parse_XLSBArrayParsedFormula=parse_XLSBParsedFormula;/* [MS-XLSB] 2.5.97.4 CellParsedFormula */var parse_XLSBCellParsedFormula=parse_XLSBParsedFormula;/* [MS-XLSB] 2.5.97.8 DVParsedFormula */ //var parse_XLSBDVParsedFormula = parse_XLSBParsedFormula;
	/* [MS-XLSB] 2.5.97.9 FRTParsedFormula */ //var parse_XLSBFRTParsedFormula = parse_XLSBParsedFormula2;
	/* [MS-XLSB] 2.5.97.12 NameParsedFormula */var parse_XLSBNameParsedFormula=parse_XLSBParsedFormula;/* [MS-XLSB] 2.5.97.98 SharedParsedFormula */var parse_XLSBSharedParsedFormula=parse_XLSBParsedFormula;var Cetab={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"};var Ftab={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"};var FtabArgc={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};/* Part 3 TODO: actually parse formulae */function ods_to_csf_formula(f/*:string*/)/*:string*/{if(f.slice(0,3)=="of:")f=f.slice(3);/* 5.2 Basic Expressions */if(f.charCodeAt(0)==61){f=f.slice(1);if(f.charCodeAt(0)==61)f=f.slice(1);}f=f.replace(/COM\.MICROSOFT\./g,"");/* Part 3 Section 5.8 References */f=f.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function($$,$1){return $1.replace(/\./g,"");});/* TODO: something other than this */f=f.replace(/\[.(#[A-Z]*[?!])\]/g,"$1");return f.replace(/[;~]/g,",").replace(/\|/g,";");}function ods_to_csf_3D(r/*:string*/)/*:[string, string]*/{var a=r.split(":");var s=a[0].split(".")[0];return [s,a[0].split(".")[1]+(a.length>1?":"+(a[1].split(".")[1]||a[1].split(".")[0]):"")];}var strs={};// shared strings
	var _ssfopts={};// spreadsheet formatting options
	function default_margins(margins/*:Margins*/,mode/*:?string*/){if(!margins)return;var defs=[0.7,0.7,0.75,0.75,0.3,0.3];if(mode=='xlml')defs=[1,1,1,1,0.5,0.5];if(margins.left==null)margins.left=defs[0];if(margins.right==null)margins.right=defs[1];if(margins.top==null)margins.top=defs[2];if(margins.bottom==null)margins.bottom=defs[3];if(margins.header==null)margins.header=defs[4];if(margins.footer==null)margins.footer=defs[5];}function safe_format(p/*:Cell*/,fmtid/*:number*/,fillid/*:?number*/,opts,themes,styles){try{if(opts.cellNF)p.z=table_fmt[fmtid];}catch(e){if(opts.WTF)throw e;}if(p.t==='z'&&!opts.cellStyles)return;if(p.t==='d'&&typeof p.v==='string')p.v=parseDate(p.v);if((!opts||opts.cellText!==false)&&p.t!=='z')try{if(table_fmt[fmtid]==null)SSF_load(SSFImplicit[fmtid]||"General",fmtid);if(p.t==='e')p.w=p.w||BErr[p.v];else if(fmtid===0){if(p.t==='n'){if((p.v|0)===p.v)p.w=p.v.toString(10);else p.w=SSF_general_num(p.v);}else if(p.t==='d'){var dd=datenum(p.v);if((dd|0)===dd)p.w=dd.toString(10);else p.w=SSF_general_num(dd);}else if(p.v===undefined)return "";else p.w=SSF_general(p.v,_ssfopts);}else if(p.t==='d')p.w=SSF_format(fmtid,datenum(p.v),_ssfopts);else p.w=SSF_format(fmtid,p.v,_ssfopts);}catch(e){if(opts.WTF)throw e;}if(!opts.cellStyles)return;if(fillid!=null)try{p.s=styles.Fills[fillid];if(p.s.fgColor&&p.s.fgColor.theme&&!p.s.fgColor.rgb){p.s.fgColor.rgb=rgb_tint(themes.themeElements.clrScheme[p.s.fgColor.theme].rgb,p.s.fgColor.tint||0);if(opts.WTF)p.s.fgColor.raw_rgb=themes.themeElements.clrScheme[p.s.fgColor.theme].rgb;}if(p.s.bgColor&&p.s.bgColor.theme){p.s.bgColor.rgb=rgb_tint(themes.themeElements.clrScheme[p.s.bgColor.theme].rgb,p.s.bgColor.tint||0);if(opts.WTF)p.s.bgColor.raw_rgb=themes.themeElements.clrScheme[p.s.bgColor.theme].rgb;}}catch(e){if(opts.WTF&&styles.Fills)throw e;}}function parse_ws_xml_dim(ws/*:Worksheet*/,s/*:string*/){var d=safe_decode_range(s);if(d.s.r<=d.e.r&&d.s.c<=d.e.c&&d.s.r>=0&&d.s.c>=0)ws["!ref"]=encode_range(d);}var mergecregex=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;var sheetdataregex=/<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;var hlinkregex=/<(?:\w:)?hyperlink [^>]*>/mg;var dimregex=/"(\w*:\w*)"/;var colregex=/<(?:\w:)?col\b[^>]*[\/]?>/g;var afregex=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;var marginregex=/<(?:\w:)?pageMargins[^>]*\/>/g;var sheetprregex=/<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;var sheetprregex2=/<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/;var svsregex=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;/* 18.3 Worksheets */function parse_ws_xml(data/*:?string*/,opts,idx/*:number*/,rels,wb/*:WBWBProps*/,themes,styles)/*:Worksheet*/{if(!data)return data;if(!rels)rels={'!id':{}};/* 18.3.1.99 worksheet CT_Worksheet */var s=opts.dense?[]/*:any*/:{}/*:any*/;var refguess/*:Range*/={s:{r:2000000,c:2000000},e:{r:0,c:0}}/*:any*/;var data1="",data2="";var mtch/*:?any*/=data.match(sheetdataregex);if(mtch){data1=data.slice(0,mtch.index);data2=data.slice(mtch.index+mtch[0].length);}else data1=data2=data;/* 18.3.1.82 sheetPr CT_SheetPr */var sheetPr=data1.match(sheetprregex);if(sheetPr)parse_ws_xml_sheetpr(sheetPr[0],s,wb,idx);else if(sheetPr=data1.match(sheetprregex2))parse_ws_xml_sheetpr2(sheetPr[0],sheetPr[1]||"",s,wb,idx);/* 18.3.1.35 dimension CT_SheetDimension */var ridx=(data1.match(/<(?:\w*:)?dimension/)||{index:-1}).index;if(ridx>0){var ref=data1.slice(ridx,ridx+50).match(dimregex);if(ref)parse_ws_xml_dim(s,ref[1]);}/* 18.3.1.88 sheetViews CT_SheetViews */var svs=data1.match(svsregex);if(svs&&svs[1])parse_ws_xml_sheetviews(svs[1],wb);/* 18.3.1.17 cols CT_Cols */var columns/*:Array<ColInfo>*/=[];if(opts.cellStyles){/* 18.3.1.13 col CT_Col */var cols=data1.match(colregex);if(cols)parse_ws_xml_cols(columns,cols);}/* 18.3.1.80 sheetData CT_SheetData ? */if(mtch)parse_ws_xml_data(mtch[1],s,opts,refguess,themes,styles);/* 18.3.1.2  autoFilter CT_AutoFilter */var afilter=data2.match(afregex);if(afilter)s['!autofilter']=parse_ws_xml_autofilter(afilter[0]);/* 18.3.1.55 mergeCells CT_MergeCells */var merges/*:Array<Range>*/=[];var _merge=data2.match(mergecregex);if(_merge)for(ridx=0;ridx!=_merge.length;++ridx)merges[ridx]=safe_decode_range(_merge[ridx].slice(_merge[ridx].indexOf("\"")+1));/* 18.3.1.48 hyperlinks CT_Hyperlinks */var hlink=data2.match(hlinkregex);if(hlink)parse_ws_xml_hlinks(s,hlink,rels);/* 18.3.1.62 pageMargins CT_PageMargins */var margins=data2.match(marginregex);if(margins)s['!margins']=parse_ws_xml_margins(parsexmltag(margins[0]));if(!s["!ref"]&&refguess.e.c>=refguess.s.c&&refguess.e.r>=refguess.s.r)s["!ref"]=encode_range(refguess);if(opts.sheetRows>0&&s["!ref"]){var tmpref=safe_decode_range(s["!ref"]);if(opts.sheetRows<=+tmpref.e.r){tmpref.e.r=opts.sheetRows-1;if(tmpref.e.r>refguess.e.r)tmpref.e.r=refguess.e.r;if(tmpref.e.r<tmpref.s.r)tmpref.s.r=tmpref.e.r;if(tmpref.e.c>refguess.e.c)tmpref.e.c=refguess.e.c;if(tmpref.e.c<tmpref.s.c)tmpref.s.c=tmpref.e.c;s["!fullref"]=s["!ref"];s["!ref"]=encode_range(tmpref);}}if(columns.length>0)s["!cols"]=columns;if(merges.length>0)s["!merges"]=merges;return s;}/* 18.3.1.82-3 sheetPr CT_ChartsheetPr / CT_SheetPr */function parse_ws_xml_sheetpr(sheetPr/*:string*/,s,wb/*:WBWBProps*/,idx/*:number*/){var data=parsexmltag(sheetPr);if(!wb.Sheets[idx])wb.Sheets[idx]={};if(data.codeName)wb.Sheets[idx].CodeName=unescapexml(utf8read(data.codeName));}function parse_ws_xml_sheetpr2(sheetPr/*:string*/,body/*:string*/,s,wb/*:WBWBProps*/,idx/*:number*/){parse_ws_xml_sheetpr(sheetPr.slice(0,sheetPr.indexOf(">")),s,wb,idx);}function parse_ws_xml_hlinks(s,data/*:Array<string>*/,rels){var dense=Array.isArray(s);for(var i=0;i!=data.length;++i){var val=parsexmltag(utf8read(data[i]),true);if(!val.ref)return;var rel=((rels||{})['!id']||[])[val.id];if(rel){val.Target=rel.Target;if(val.location)val.Target+="#"+unescapexml(val.location);}else {val.Target="#"+unescapexml(val.location);rel={Target:val.Target,TargetMode:'Internal'};}val.Rel=rel;if(val.tooltip){val.Tooltip=val.tooltip;delete val.tooltip;}var rng=safe_decode_range(val.ref);for(var R=rng.s.r;R<=rng.e.r;++R)for(var C=rng.s.c;C<=rng.e.c;++C){var addr=encode_cell({c:C,r:R});if(dense){if(!s[R])s[R]=[];if(!s[R][C])s[R][C]={t:"z",v:undefined};s[R][C].l=val;}else {if(!s[addr])s[addr]={t:"z",v:undefined};s[addr].l=val;}}}}function parse_ws_xml_margins(margin){var o={};["left","right","top","bottom","header","footer"].forEach(function(k){if(margin[k])o[k]=parseFloat(margin[k]);});return o;}function parse_ws_xml_cols(columns,cols){var seencol=false;for(var coli=0;coli!=cols.length;++coli){var coll=parsexmltag(cols[coli],true);if(coll.hidden)coll.hidden=parsexmlbool(coll.hidden);var colm=parseInt(coll.min,10)-1,colM=parseInt(coll.max,10)-1;if(coll.outlineLevel)coll.level=+coll.outlineLevel||0;delete coll.min;delete coll.max;coll.width=+coll.width;if(!seencol&&coll.width){seencol=true;find_mdw_colw(coll.width);}process_col(coll);while(colm<=colM)columns[colm++]=dup(coll);}}function parse_ws_xml_autofilter(data/*:string*/){var o={ref:(data.match(/ref="([^"]*)"/)||[])[1]};return o;}/* 18.3.1.88 sheetViews CT_SheetViews */ /* 18.3.1.87 sheetView CT_SheetView */var sviewregex=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;function parse_ws_xml_sheetviews(data,wb/*:WBWBProps*/){if(!wb.Views)wb.Views=[{}];(data.match(sviewregex)||[]).forEach(function(r/*:string*/,i/*:number*/){var tag=parsexmltag(r);// $FlowIgnore
	if(!wb.Views[i])wb.Views[i]={};// $FlowIgnore
	if(+tag.zoomScale)wb.Views[i].zoom=+tag.zoomScale;// $FlowIgnore
	if(parsexmlbool(tag.rightToLeft))wb.Views[i].RTL=true;});}var parse_ws_xml_data=/*#__PURE__*/function(){var cellregex=/<(?:\w+:)?c[ \/>]/,rowregex=/<\/(?:\w+:)?row>/;var rregex=/r=["']([^"']*)["']/,isregex=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;var refregex=/ref=["']([^"']*)["']/;var match_v=matchtag("v"),match_f=matchtag("f");return function parse_ws_xml_data(sdata/*:string*/,s,opts,guess/*:Range*/,themes,styles){var ri=0,x="",cells/*:Array<string>*/=[],cref/*:?Array<string>*/=[],idx=0,i=0,cc=0,d="",p/*:any*/;var tag,tagr=0,tagc=0;var sstr,ftag;var fmtid=0,fillid=0;var do_format=Array.isArray(styles.CellXf),cf;var arrayf/*:Array<[Range, string]>*/=[];var sharedf=[];var dense=Array.isArray(s);var rows/*:Array<RowInfo>*/=[],rowobj={},rowrite=false;var sheetStubs=!!opts.sheetStubs;for(var marr=sdata.split(rowregex),mt=0,marrlen=marr.length;mt!=marrlen;++mt){x=marr[mt].trim();var xlen=x.length;if(xlen===0)continue;/* 18.3.1.73 row CT_Row */var rstarti=0;outa:for(ri=0;ri<xlen;++ri)switch(/*x.charCodeAt(ri)*/x[ri]){case">"/*62*/:if(/*x.charCodeAt(ri-1) != 47*/x[ri-1]!="/"){++ri;break outa;}if(opts&&opts.cellStyles){// TODO: avoid duplication
	tag=parsexmltag(x.slice(rstarti,ri),true);tagr=tag.r!=null?parseInt(tag.r,10):tagr+1;tagc=-1;if(opts.sheetRows&&opts.sheetRows<tagr)continue;rowobj={};rowrite=false;if(tag.ht){rowrite=true;rowobj.hpt=parseFloat(tag.ht);rowobj.hpx=pt2px(rowobj.hpt);}if(tag.hidden=="1"){rowrite=true;rowobj.hidden=true;}if(tag.outlineLevel!=null){rowrite=true;rowobj.level=+tag.outlineLevel;}if(rowrite)rows[tagr-1]=rowobj;}break;case"<"/*60*/:rstarti=ri;break;}if(rstarti>=ri)break;tag=parsexmltag(x.slice(rstarti,ri),true);tagr=tag.r!=null?parseInt(tag.r,10):tagr+1;tagc=-1;if(opts.sheetRows&&opts.sheetRows<tagr)continue;if(guess.s.r>tagr-1)guess.s.r=tagr-1;if(guess.e.r<tagr-1)guess.e.r=tagr-1;if(opts&&opts.cellStyles){rowobj={};rowrite=false;if(tag.ht){rowrite=true;rowobj.hpt=parseFloat(tag.ht);rowobj.hpx=pt2px(rowobj.hpt);}if(tag.hidden=="1"){rowrite=true;rowobj.hidden=true;}if(tag.outlineLevel!=null){rowrite=true;rowobj.level=+tag.outlineLevel;}if(rowrite)rows[tagr-1]=rowobj;}/* 18.3.1.4 c CT_Cell */cells=x.slice(ri).split(cellregex);for(var rslice=0;rslice!=cells.length;++rslice)if(cells[rslice].trim().charAt(0)!="<")break;cells=cells.slice(rslice);for(ri=0;ri!=cells.length;++ri){x=cells[ri].trim();if(x.length===0)continue;cref=x.match(rregex);idx=ri;i=0;cc=0;x="<c "+(x.slice(0,1)=="<"?">":"")+x;if(cref!=null&&cref.length===2){idx=0;d=cref[1];for(i=0;i!=d.length;++i){if((cc=d.charCodeAt(i)-64)<1||cc>26)break;idx=26*idx+cc;}--idx;tagc=idx;}else ++tagc;for(i=0;i!=x.length;++i)if(x.charCodeAt(i)===62)break;++i;tag=parsexmltag(x.slice(0,i),true);if(!tag.r)tag.r=encode_cell({r:tagr-1,c:tagc});d=x.slice(i);p={t:""}/*:any*/;if((cref=d.match(match_v))!=null&&/*::cref != null && */cref[1]!=='')p.v=unescapexml(cref[1]);if(opts.cellFormula){if((cref=d.match(match_f))!=null&&/*::cref != null && */cref[1]!==''){/* TODO: match against XLSXFutureFunctions */p.f=unescapexml(utf8read(cref[1])).replace(/\r\n/g,"\n");if(!opts.xlfn)p.f=_xlfn(p.f);if(/*::cref != null && cref[0] != null && */cref[0].indexOf('t="array"')>-1){p.F=(d.match(refregex)||[])[1];if(p.F.indexOf(":")>-1)arrayf.push([safe_decode_range(p.F),p.F]);}else if(/*::cref != null && cref[0] != null && */cref[0].indexOf('t="shared"')>-1){// TODO: parse formula
	ftag=parsexmltag(cref[0]);var ___f=unescapexml(utf8read(cref[1]));if(!opts.xlfn)___f=_xlfn(___f);sharedf[parseInt(ftag.si,10)]=[ftag,___f,tag.r];}}else if(cref=d.match(/<f[^>]*\/>/)){ftag=parsexmltag(cref[0]);if(sharedf[ftag.si])p.f=shift_formula_xlsx(sharedf[ftag.si][1],sharedf[ftag.si][2]/*[0].ref*/,tag.r);}/* TODO: factor out contains logic */var _tag=decode_cell(tag.r);for(i=0;i<arrayf.length;++i)if(_tag.r>=arrayf[i][0].s.r&&_tag.r<=arrayf[i][0].e.r)if(_tag.c>=arrayf[i][0].s.c&&_tag.c<=arrayf[i][0].e.c)p.F=arrayf[i][1];}if(tag.t==null&&p.v===undefined){if(p.f||p.F){p.v=0;p.t="n";}else if(!sheetStubs)continue;else p.t="z";}else p.t=tag.t||"n";if(guess.s.c>tagc)guess.s.c=tagc;if(guess.e.c<tagc)guess.e.c=tagc;/* 18.18.11 t ST_CellType */switch(p.t){case'n':if(p.v==""||p.v==null){if(!sheetStubs)continue;p.t='z';}else p.v=parseFloat(p.v);break;case's':if(typeof p.v=='undefined'){if(!sheetStubs)continue;p.t='z';}else {sstr=strs[parseInt(p.v,10)];p.v=sstr.t;p.r=sstr.r;if(opts.cellHTML)p.h=sstr.h;}break;case'str':p.t="s";p.v=p.v!=null?utf8read(p.v):'';if(opts.cellHTML)p.h=escapehtml(p.v);break;case'inlineStr':cref=d.match(isregex);p.t='s';if(cref!=null&&(sstr=parse_si(cref[1]))){p.v=sstr.t;if(opts.cellHTML)p.h=sstr.h;}else p.v="";break;case'b':p.v=parsexmlbool(p.v);break;case'd':if(opts.cellDates)p.v=parseDate(p.v,1);else {p.v=datenum(parseDate(p.v,1));p.t='n';}break;/* error string in .w, number in .v */case'e':if(!opts||opts.cellText!==false)p.w=p.v;p.v=RBErr[p.v];break;}/* formatting */fmtid=fillid=0;cf=null;if(do_format&&tag.s!==undefined){cf=styles.CellXf[tag.s];if(cf!=null){if(cf.numFmtId!=null)fmtid=cf.numFmtId;if(opts.cellStyles){if(cf.fillId!=null)fillid=cf.fillId;}}}safe_format(p,fmtid,fillid,opts,themes,styles);if(opts.cellDates&&do_format&&p.t=='n'&&fmt_is_date(table_fmt[fmtid])){p.t='d';p.v=numdate(p.v);}if(tag.cm&&opts.xlmeta){var cm=(opts.xlmeta.Cell||[])[+tag.cm-1];if(cm&&cm.type=='XLDAPR')p.D=true;}if(dense){var _r=decode_cell(tag.r);if(!s[_r.r])s[_r.r]=[];s[_r.r][_r.c]=p;}else s[tag.r]=p;}}if(rows.length>0)s['!rows']=rows;};}();/* [MS-XLSB] 2.4.726 BrtRowHdr */function parse_BrtRowHdr(data,length){var z={}/*:any*/;var tgt=data.l+length;z.r=data.read_shift(4);data.l+=4;// TODO: ixfe
	var miyRw=data.read_shift(2);data.l+=1;// TODO: top/bot padding
	var flags=data.read_shift(1);data.l=tgt;if(flags&0x07)z.level=flags&0x07;if(flags&0x10)z.hidden=true;if(flags&0x20)z.hpt=miyRw/20;return z;}/* [MS-XLSB] 2.4.820 BrtWsDim */var parse_BrtWsDim=parse_UncheckedRfX;/* [MS-XLSB] 2.4.821 BrtWsFmtInfo */function/*::data, length*/parse_BrtWsFmtInfo(){}//function write_BrtWsFmtInfo(ws, o) { }
	/* [MS-XLSB] 2.4.823 BrtWsProp */function parse_BrtWsProp(data,length){var z={};var f=data[data.l];++data.l;z.above=!(f&0x40);z.left=!(f&0x80);/* TODO: pull flags */data.l+=18;z.name=parse_XLSBCodeName(data);return z;}/* [MS-XLSB] 2.4.306 BrtCellBlank */function parse_BrtCellBlank(data){var cell=parse_XLSBCell(data);return [cell];}function parse_BrtShortBlank(data){var cell=parse_XLSBShortCell(data);return [cell];}/* [MS-XLSB] 2.4.307 BrtCellBool */function parse_BrtCellBool(data){var cell=parse_XLSBCell(data);var fBool=data.read_shift(1);return [cell,fBool,'b'];}function parse_BrtShortBool(data){var cell=parse_XLSBShortCell(data);var fBool=data.read_shift(1);return [cell,fBool,'b'];}/* [MS-XLSB] 2.4.308 BrtCellError */function parse_BrtCellError(data){var cell=parse_XLSBCell(data);var bError=data.read_shift(1);return [cell,bError,'e'];}function parse_BrtShortError(data){var cell=parse_XLSBShortCell(data);var bError=data.read_shift(1);return [cell,bError,'e'];}/* [MS-XLSB] 2.4.311 BrtCellIsst */function parse_BrtCellIsst(data){var cell=parse_XLSBCell(data);var isst=data.read_shift(4);return [cell,isst,'s'];}function parse_BrtShortIsst(data){var cell=parse_XLSBShortCell(data);var isst=data.read_shift(4);return [cell,isst,'s'];}/* [MS-XLSB] 2.4.313 BrtCellReal */function parse_BrtCellReal(data){var cell=parse_XLSBCell(data);var value=parse_Xnum(data);return [cell,value,'n'];}function parse_BrtShortReal(data){var cell=parse_XLSBShortCell(data);var value=parse_Xnum(data);return [cell,value,'n'];}/* [MS-XLSB] 2.4.314 BrtCellRk */function parse_BrtCellRk(data){var cell=parse_XLSBCell(data);var value=parse_RkNumber(data);return [cell,value,'n'];}function parse_BrtShortRk(data){var cell=parse_XLSBShortCell(data);var value=parse_RkNumber(data);return [cell,value,'n'];}/* [MS-XLSB] 2.4.323 BrtCellRString */function parse_BrtCellRString(data){var cell=parse_XLSBCell(data);var value=parse_RichStr(data);return [cell,value,'is'];}/* [MS-XLSB] 2.4.317 BrtCellSt */function parse_BrtCellSt(data){var cell=parse_XLSBCell(data);var value=parse_XLWideString(data);return [cell,value,'str'];}function parse_BrtShortSt(data){var cell=parse_XLSBShortCell(data);var value=parse_XLWideString(data);return [cell,value,'str'];}/* [MS-XLSB] 2.4.653 BrtFmlaBool */function parse_BrtFmlaBool(data,length,opts){var end=data.l+length;var cell=parse_XLSBCell(data);cell.r=opts['!row'];var value=data.read_shift(1);var o=[cell,value,'b'];if(opts.cellFormula){data.l+=2;var formula=parse_XLSBCellParsedFormula(data,end-data.l,opts);o[3]=stringify_formula(formula,null/*range*/,cell,opts.supbooks,opts);/* TODO */}else data.l=end;return o;}/* [MS-XLSB] 2.4.654 BrtFmlaError */function parse_BrtFmlaError(data,length,opts){var end=data.l+length;var cell=parse_XLSBCell(data);cell.r=opts['!row'];var value=data.read_shift(1);var o=[cell,value,'e'];if(opts.cellFormula){data.l+=2;var formula=parse_XLSBCellParsedFormula(data,end-data.l,opts);o[3]=stringify_formula(formula,null/*range*/,cell,opts.supbooks,opts);/* TODO */}else data.l=end;return o;}/* [MS-XLSB] 2.4.655 BrtFmlaNum */function parse_BrtFmlaNum(data,length,opts){var end=data.l+length;var cell=parse_XLSBCell(data);cell.r=opts['!row'];var value=parse_Xnum(data);var o=[cell,value,'n'];if(opts.cellFormula){data.l+=2;var formula=parse_XLSBCellParsedFormula(data,end-data.l,opts);o[3]=stringify_formula(formula,null/*range*/,cell,opts.supbooks,opts);/* TODO */}else data.l=end;return o;}/* [MS-XLSB] 2.4.656 BrtFmlaString */function parse_BrtFmlaString(data,length,opts){var end=data.l+length;var cell=parse_XLSBCell(data);cell.r=opts['!row'];var value=parse_XLWideString(data);var o=[cell,value,'str'];if(opts.cellFormula){data.l+=2;var formula=parse_XLSBCellParsedFormula(data,end-data.l,opts);o[3]=stringify_formula(formula,null/*range*/,cell,opts.supbooks,opts);/* TODO */}else data.l=end;return o;}/* [MS-XLSB] 2.4.682 BrtMergeCell */var parse_BrtMergeCell=parse_UncheckedRfX;/* [MS-XLSB] 2.4.662 BrtHLink */function parse_BrtHLink(data,length/*::, opts*/){var end=data.l+length;var rfx=parse_UncheckedRfX(data);var relId=parse_XLNullableWideString(data);var loc=parse_XLWideString(data);var tooltip=parse_XLWideString(data);var display=parse_XLWideString(data);data.l=end;var o={rfx:rfx,relId:relId,loc:loc,display:display}/*:any*/;if(tooltip)o.Tooltip=tooltip;return o;}/* [MS-XLSB] 2.4.692 BrtPane */function/*data, length, opts*/parse_BrtPane(){}/* [MS-XLSB] 2.4.6 BrtArrFmla */function parse_BrtArrFmla(data,length,opts){var end=data.l+length;var rfx=parse_RfX(data);var fAlwaysCalc=data.read_shift(1);var o=[rfx];o[2]=fAlwaysCalc;if(opts.cellFormula){var formula=parse_XLSBArrayParsedFormula(data,end-data.l,opts);o[1]=formula;}else data.l=end;return o;}/* [MS-XLSB] 2.4.750 BrtShrFmla */function parse_BrtShrFmla(data,length,opts){var end=data.l+length;var rfx=parse_UncheckedRfX(data);var o=[rfx];if(opts.cellFormula){var formula=parse_XLSBSharedParsedFormula(data,end-data.l,opts);o[1]=formula;data.l=end;}else data.l=end;return o;}/* [MS-XLSB] 2.4.678 BrtMargins */var BrtMarginKeys=["left","right","top","bottom","header","footer"];function parse_BrtMargins(data/*::, length, opts*/)/*:Margins*/{var margins={}/*:any*/;BrtMarginKeys.forEach(function(k){margins[k]=parse_Xnum(data);});return margins;}/* [MS-XLSB] 2.4.299 BrtBeginWsView */function parse_BrtBeginWsView(data/*::, length, opts*/){var f=data.read_shift(2);data.l+=28;return {RTL:f&0x20};}function/*data, length, opts*/parse_BrtDVal(){}function/*data, length, opts*/parse_BrtDVal14(){}/* [MS-XLSB] 2.1.7.61 Worksheet */function parse_ws_bin(data,_opts,idx,rels,wb/*:WBWBProps*/,themes,styles)/*:Worksheet*/{if(!data)return data;var opts=_opts||{};if(!rels)rels={'!id':{}};var s/*:Worksheet*/=opts.dense?[]:{};var ref;var refguess={s:{r:2000000,c:2000000},e:{r:0,c:0}};var pass=false,end=false;var row,p,cf,R,C,addr,sstr,rr,cell/*:Cell*/;var merges/*:Array<Range>*/=[];opts.biff=12;opts['!row']=0;var ai=0,af=false;var arrayf/*:Array<[Range, string]>*/=[];var sharedf={};var supbooks=opts.supbooks||/*::(*/wb/*:: :any)*/.supbooks||[[]]/*:any*/;supbooks.sharedf=sharedf;supbooks.arrayf=arrayf;supbooks.SheetNames=wb.SheetNames||wb.Sheets.map(function(x){return x.name;});if(!opts.supbooks){opts.supbooks=supbooks;if(wb.Names)for(var i=0;i<wb.Names.length;++i)supbooks[0][i+1]=wb.Names[i];}var colinfo/*:Array<ColInfo>*/=[],rowinfo/*:Array<RowInfo>*/=[];var seencol=false;XLSBRecordEnum[0x0010]={n:"BrtShortReal",f:parse_BrtShortReal};var cm;recordhopper(data,function ws_parse(val,RR,RT){if(end)return;switch(RT){case 0x0094:/* 'BrtWsDim' */ref=val;break;case 0x0000:/* 'BrtRowHdr' */row=val;if(opts.sheetRows&&opts.sheetRows<=row.r)end=true;rr=encode_row(R=row.r);opts['!row']=row.r;if(val.hidden||val.hpt||val.level!=null){if(val.hpt)val.hpx=pt2px(val.hpt);rowinfo[val.r]=val;}break;case 0x0002:/* 'BrtCellRk' */case 0x0003:/* 'BrtCellError' */case 0x0004:/* 'BrtCellBool' */case 0x0005:/* 'BrtCellReal' */case 0x0006:/* 'BrtCellSt' */case 0x0007:/* 'BrtCellIsst' */case 0x0008:/* 'BrtFmlaString' */case 0x0009:/* 'BrtFmlaNum' */case 0x000A:/* 'BrtFmlaBool' */case 0x000B:/* 'BrtFmlaError' */case 0x000D:/* 'BrtShortRk' */case 0x000E:/* 'BrtShortError' */case 0x000F:/* 'BrtShortBool' */case 0x0010:/* 'BrtShortReal' */case 0x0011:/* 'BrtShortSt' */case 0x0012:/* 'BrtShortIsst' */case 0x003E:/* 'BrtCellRString' */p={t:val[2]}/*:any*/;switch(val[2]){case'n':p.v=val[1];break;case's':sstr=strs[val[1]];p.v=sstr.t;p.r=sstr.r;break;case'b':p.v=val[1]?true:false;break;case'e':p.v=val[1];if(opts.cellText!==false)p.w=BErr[p.v];break;case'str':p.t='s';p.v=val[1];break;case'is':p.t='s';p.v=val[1].t;break;}if(cf=styles.CellXf[val[0].iStyleRef])safe_format(p,cf.numFmtId,null,opts,themes,styles);C=val[0].c==-1?C+1:val[0].c;if(opts.dense){if(!s[R])s[R]=[];s[R][C]=p;}else s[encode_col(C)+rr]=p;if(opts.cellFormula){af=false;for(ai=0;ai<arrayf.length;++ai){var aii=arrayf[ai];if(row.r>=aii[0].s.r&&row.r<=aii[0].e.r)if(C>=aii[0].s.c&&C<=aii[0].e.c){p.F=encode_range(aii[0]);af=true;}}if(!af&&val.length>3)p.f=val[3];}if(refguess.s.r>row.r)refguess.s.r=row.r;if(refguess.s.c>C)refguess.s.c=C;if(refguess.e.r<row.r)refguess.e.r=row.r;if(refguess.e.c<C)refguess.e.c=C;if(opts.cellDates&&cf&&p.t=='n'&&fmt_is_date(table_fmt[cf.numFmtId])){var _d=SSF_parse_date_code(p.v);if(_d){p.t='d';p.v=new Date(_d.y,_d.m-1,_d.d,_d.H,_d.M,_d.S,_d.u);}}if(cm){if(cm.type=='XLDAPR')p.D=true;cm=void 0;}break;case 0x0001:/* 'BrtCellBlank' */case 0x000C:/* 'BrtShortBlank' */if(!opts.sheetStubs||pass)break;p={t:'z',v:void 0}/*:any*/;C=val[0].c==-1?C+1:val[0].c;if(opts.dense){if(!s[R])s[R]=[];s[R][C]=p;}else s[encode_col(C)+rr]=p;if(refguess.s.r>row.r)refguess.s.r=row.r;if(refguess.s.c>C)refguess.s.c=C;if(refguess.e.r<row.r)refguess.e.r=row.r;if(refguess.e.c<C)refguess.e.c=C;if(cm){if(cm.type=='XLDAPR')p.D=true;cm=void 0;}break;case 0x00B0:/* 'BrtMergeCell' */merges.push(val);break;case 0x0031:{/* 'BrtCellMeta' */cm=((opts.xlmeta||{}).Cell||[])[val-1];}break;case 0x01EE:/* 'BrtHLink' */var rel=rels['!id'][val.relId];if(rel){val.Target=rel.Target;if(val.loc)val.Target+="#"+val.loc;val.Rel=rel;}else if(val.relId==''){val.Target="#"+val.loc;}for(R=val.rfx.s.r;R<=val.rfx.e.r;++R)for(C=val.rfx.s.c;C<=val.rfx.e.c;++C){if(opts.dense){if(!s[R])s[R]=[];if(!s[R][C])s[R][C]={t:'z',v:undefined};s[R][C].l=val;}else {addr=encode_cell({c:C,r:R});if(!s[addr])s[addr]={t:'z',v:undefined};s[addr].l=val;}}break;case 0x01AA:/* 'BrtArrFmla' */if(!opts.cellFormula)break;arrayf.push(val);cell=opts.dense?s[R][C]:s[encode_col(C)+rr]/*:any*/;cell.f=stringify_formula(val[1],refguess,{r:row.r,c:C},supbooks,opts);cell.F=encode_range(val[0]);break;case 0x01AB:/* 'BrtShrFmla' */if(!opts.cellFormula)break;sharedf[encode_cell(val[0].s)]=val[1];cell=opts.dense?s[R][C]:s[encode_col(C)+rr];cell.f=stringify_formula(val[1],refguess,{r:row.r,c:C},supbooks,opts);break;/* identical to 'ColInfo' in XLS */case 0x003C:/* 'BrtColInfo' */if(!opts.cellStyles)break;while(val.e>=val.s){colinfo[val.e--]={width:val.w/256,hidden:!!(val.flags&0x01),level:val.level};if(!seencol){seencol=true;find_mdw_colw(val.w/256);}process_col(colinfo[val.e+1]);}break;case 0x00A1:/* 'BrtBeginAFilter' */s['!autofilter']={ref:encode_range(val)};break;case 0x01DC:/* 'BrtMargins' */s['!margins']=val;break;case 0x0093:/* 'BrtWsProp' */if(!wb.Sheets[idx])wb.Sheets[idx]={};if(val.name)wb.Sheets[idx].CodeName=val.name;if(val.above||val.left)s['!outline']={above:val.above,left:val.left};break;case 0x0089:/* 'BrtBeginWsView' */if(!wb.Views)wb.Views=[{}];if(!wb.Views[0])wb.Views[0]={};if(val.RTL)wb.Views[0].RTL=true;break;case 0x01E5:/* 'BrtWsFmtInfo' */break;case 0x0040:/* 'BrtDVal' */case 0x041D:/* 'BrtDVal14' */break;case 0x0097:/* 'BrtPane' */break;case 0x0098:/* 'BrtSel' */case 0x00AF:/* 'BrtAFilterDateGroupItem' */case 0x0284:/* 'BrtActiveX' */case 0x0271:/* 'BrtBigName' */case 0x0232:/* 'BrtBkHim' */case 0x018C:/* 'BrtBrk' */case 0x0458:/* 'BrtCFIcon' */case 0x047A:/* 'BrtCFRuleExt' */case 0x01D7:/* 'BrtCFVO' */case 0x041A:/* 'BrtCFVO14' */case 0x0289:/* 'BrtCellIgnoreEC' */case 0x0451:/* 'BrtCellIgnoreEC14' */case 0x024D:/* 'BrtCellSmartTagProperty' */case 0x025F:/* 'BrtCellWatch' */case 0x0234:/* 'BrtColor' */case 0x041F:/* 'BrtColor14' */case 0x00A8:/* 'BrtColorFilter' */case 0x00AE:/* 'BrtCustomFilter' */case 0x049C:/* 'BrtCustomFilter14' */case 0x01F3:/* 'BrtDRef' */case 0x01FB:/* 'BrtDXF' */case 0x0226:/* 'BrtDrawing' */case 0x00AB:/* 'BrtDynamicFilter' */case 0x00A7:/* 'BrtFilter' */case 0x0499:/* 'BrtFilter14' */case 0x00A9:/* 'BrtIconFilter' */case 0x049D:/* 'BrtIconFilter14' */case 0x0227:/* 'BrtLegacyDrawing' */case 0x0228:/* 'BrtLegacyDrawingHF' */case 0x0295:/* 'BrtListPart' */case 0x027F:/* 'BrtOleObject' */case 0x01DE:/* 'BrtPageSetup' */case 0x0219:/* 'BrtPhoneticInfo' */case 0x01DD:/* 'BrtPrintOptions' */case 0x0218:/* 'BrtRangeProtection' */case 0x044F:/* 'BrtRangeProtection14' */case 0x02A8:/* 'BrtRangeProtectionIso' */case 0x0450:/* 'BrtRangeProtectionIso14' */case 0x0400:/* 'BrtRwDescent' */case 0x0297:/* 'BrtSheetCalcProp' */case 0x0217:/* 'BrtSheetProtection' */case 0x02A6:/* 'BrtSheetProtectionIso' */case 0x01F8:/* 'BrtSlc' */case 0x0413:/* 'BrtSparkline' */case 0x01AC:/* 'BrtTable' */case 0x00AA:/* 'BrtTop10Filter' */case 0x0C00:/* 'BrtUid' */case 0x0032:/* 'BrtValueMeta' */case 0x0816:/* 'BrtWebExtension' */case 0x0415:/* 'BrtWsFmtInfoEx14' */break;case 0x0023:/* 'BrtFRTBegin' */pass=true;break;case 0x0024:/* 'BrtFRTEnd' */pass=false;break;case 0x0025:pass=true;break;case 0x0026:pass=false;break;default:if(RR.T);else if(!pass||opts.WTF)throw new Error("Unexpected record 0x"+RT.toString(16));}},opts);delete opts.supbooks;delete opts['!row'];if(!s["!ref"]&&(refguess.s.r<2000000||ref&&(ref.e.r>0||ref.e.c>0||ref.s.r>0||ref.s.c>0)))s["!ref"]=encode_range(ref||refguess);if(opts.sheetRows&&s["!ref"]){var tmpref=safe_decode_range(s["!ref"]);if(opts.sheetRows<=+tmpref.e.r){tmpref.e.r=opts.sheetRows-1;if(tmpref.e.r>refguess.e.r)tmpref.e.r=refguess.e.r;if(tmpref.e.r<tmpref.s.r)tmpref.s.r=tmpref.e.r;if(tmpref.e.c>refguess.e.c)tmpref.e.c=refguess.e.c;if(tmpref.e.c<tmpref.s.c)tmpref.s.c=tmpref.e.c;s["!fullref"]=s["!ref"];s["!ref"]=encode_range(tmpref);}}if(merges.length>0)s["!merges"]=merges;if(colinfo.length>0)s["!cols"]=colinfo;if(rowinfo.length>0)s["!rows"]=rowinfo;return s;}function parse_Cache(data/*:string*/)/*:[Array<number|string>, string, ?string]*/{var col/*:Array<number|string>*/=[];var num=data.match(/^<c:numCache>/);var f;/* 21.2.2.150 pt CT_NumVal */(data.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg)||[]).forEach(function(pt){var q=pt.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);if(!q)return;col[+q[1]]=num?+q[2]:q[2];});/* 21.2.2.71 formatCode CT_Xstring */var nf=unescapexml((data.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1]);(data.match(/<c:f>(.*?)<\/c:f>/mg)||[]).forEach(function(F){f=F.replace(/<.*?>/g,"");});return [col,nf,f];}/* 21.2 DrawingML - Charts */function parse_chart(data/*:?string*/,name/*:string*/,opts,rels,wb,csheet){var cs/*:Worksheet*/=csheet||{"!type":"chart"}/*:any*/;if(!data)return csheet;/* 21.2.2.27 chart CT_Chart */var C=0,R=0,col="A";var refguess={s:{r:2000000,c:2000000},e:{r:0,c:0}};/* 21.2.2.120 numCache CT_NumData */(data.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(nc){var cache=parse_Cache(nc);refguess.s.r=refguess.s.c=0;refguess.e.c=C;col=encode_col(C);cache[0].forEach(function(n,i){cs[col+encode_row(i)]={t:'n',v:n,z:cache[1]};R=i;});if(refguess.e.r<R)refguess.e.r=R;++C;});if(C>0)cs["!ref"]=encode_range(refguess);return cs;}/* 18.3 Worksheets also covers Chartsheets */function parse_cs_xml(data/*:?string*/,opts,idx/*:number*/,rels,wb/*::, themes, styles*/)/*:Worksheet*/{if(!data)return data;/* 18.3.1.12 chartsheet CT_ChartSheet */if(!rels)rels={'!id':{}};var s={'!type':"chart",'!drawel':null,'!rel':""}/*:any*/;var m;/* 18.3.1.83 sheetPr CT_ChartsheetPr */var sheetPr=data.match(sheetprregex);if(sheetPr)parse_ws_xml_sheetpr(sheetPr[0],s,wb,idx);/* 18.3.1.36 drawing CT_Drawing */if(m=data.match(/drawing r:id="(.*?)"/))s['!rel']=m[1];if(rels['!id'][s['!rel']])s['!drawel']=rels['!id'][s['!rel']];return s;}/* [MS-XLSB] 2.4.331 BrtCsProp */function parse_BrtCsProp(data,length/*:number*/){data.l+=10;var name=parse_XLWideString(data);return {name:name};}/* [MS-XLSB] 2.1.7.7 Chart Sheet */function parse_cs_bin(data,opts,idx/*:number*/,rels,wb/*::, themes, styles*/)/*:Worksheet*/{if(!data)return data;if(!rels)rels={'!id':{}};var s={'!type':"chart",'!drawel':null,'!rel':""};var pass=false;recordhopper(data,function cs_parse(val,R,RT){switch(RT){case 0x0226:/* 'BrtDrawing' */s['!rel']=val;break;case 0x028B:/* 'BrtCsProp' */if(!wb.Sheets[idx])wb.Sheets[idx]={};if(val.name)wb.Sheets[idx].CodeName=val.name;break;case 0x0232:/* 'BrtBkHim' */case 0x028C:/* 'BrtCsPageSetup' */case 0x029D:/* 'BrtCsProtection' */case 0x02A7:/* 'BrtCsProtectionIso' */case 0x0227:/* 'BrtLegacyDrawing' */case 0x0228:/* 'BrtLegacyDrawingHF' */case 0x01DC:/* 'BrtMargins' */case 0x0C00:/* 'BrtUid' */break;case 0x0023:/* 'BrtFRTBegin' */pass=true;break;case 0x0024:/* 'BrtFRTEnd' */pass=false;break;case 0x0025:break;case 0x0026:break;default:if(R.T>0);else if(R.T<0);else if(!pass||opts.WTF)throw new Error("Unexpected record 0x"+RT.toString(16));}},opts);if(rels['!id'][s['!rel']])s['!drawel']=rels['!id'][s['!rel']];return s;}/* 18.2.28 (CT_WorkbookProtection) Defaults */var WBPropsDef=[['allowRefreshQuery',false,"bool"],['autoCompressPictures',true,"bool"],['backupFile',false,"bool"],['checkCompatibility',false,"bool"],['CodeName',''],['date1904',false,"bool"],['defaultThemeVersion',0,"int"],['filterPrivacy',false,"bool"],['hidePivotFieldList',false,"bool"],['promptedSolutions',false,"bool"],['publishItems',false,"bool"],['refreshAllConnections',false,"bool"],['saveExternalLinkValues',true,"bool"],['showBorderUnselectedTables',true,"bool"],['showInkAnnotation',true,"bool"],['showObjects','all'],['showPivotChartFilter',false,"bool"],['updateLinks','userSet']];/* 18.2.30 (CT_BookView) Defaults */var WBViewDef=[['activeTab',0,"int"],['autoFilterDateGrouping',true,"bool"],['firstSheet',0,"int"],['minimized',false,"bool"],['showHorizontalScroll',true,"bool"],['showSheetTabs',true,"bool"],['showVerticalScroll',true,"bool"],['tabRatio',600,"int"],['visibility','visible']//window{Height,Width}, {x,y}Window
	];/* 18.2.19 (CT_Sheet) Defaults */var SheetDef=[//['state', 'visible']
	];/* 18.2.2  (CT_CalcPr) Defaults */var CalcPrDef=[['calcCompleted','true'],['calcMode','auto'],['calcOnSave','true'],['concurrentCalc','true'],['fullCalcOnLoad','false'],['fullPrecision','true'],['iterate','false'],['iterateCount','100'],['iterateDelta','0.001'],['refMode','A1']];/* 18.2.3 (CT_CustomWorkbookView) Defaults */ /*var CustomWBViewDef = [
		['autoUpdate', 'false'],
		['changesSavedWin', 'false'],
		['includeHiddenRowCol', 'true'],
		['includePrintSettings', 'true'],
		['maximized', 'false'],
		['minimized', 'false'],
		['onlySync', 'false'],
		['personalView', 'false'],
		['showComments', 'commIndicator'],
		['showFormulaBar', 'true'],
		['showHorizontalScroll', 'true'],
		['showObjects', 'all'],
		['showSheetTabs', 'true'],
		['showStatusbar', 'true'],
		['showVerticalScroll', 'true'],
		['tabRatio', '600'],
		['xWindow', '0'],
		['yWindow', '0']
	];*/function push_defaults_array(target,defaults){for(var j=0;j!=target.length;++j){var w=target[j];for(var i=0;i!=defaults.length;++i){var z=defaults[i];if(w[z[0]]==null)w[z[0]]=z[1];else switch(z[2]){case"bool":if(typeof w[z[0]]=="string")w[z[0]]=parsexmlbool(w[z[0]]);break;case"int":if(typeof w[z[0]]=="string")w[z[0]]=parseInt(w[z[0]],10);break;}}}}function push_defaults(target,defaults){for(var i=0;i!=defaults.length;++i){var z=defaults[i];if(target[z[0]]==null)target[z[0]]=z[1];else switch(z[2]){case"bool":if(typeof target[z[0]]=="string")target[z[0]]=parsexmlbool(target[z[0]]);break;case"int":if(typeof target[z[0]]=="string")target[z[0]]=parseInt(target[z[0]],10);break;}}}function parse_wb_defaults(wb){push_defaults(wb.WBProps,WBPropsDef);push_defaults(wb.CalcPr,CalcPrDef);push_defaults_array(wb.WBView,WBViewDef);push_defaults_array(wb.Sheets,SheetDef);_ssfopts.date1904=parsexmlbool(wb.WBProps.date1904);}var badchars=/*#__PURE__*/"][*?\/\\".split("");function check_ws_name(n/*:string*/,safe/*:?boolean*/)/*:boolean*/{if(n.length>31){if(safe)return false;throw new Error("Sheet names cannot exceed 31 chars");}var _good=true;badchars.forEach(function(c){if(n.indexOf(c)==-1)return;if(!safe)throw new Error("Sheet name cannot contain : \\ / ? * [ ]");_good=false;});return _good;}/* 18.2 Workbook */var wbnsregex=/<\w+:workbook/;function parse_wb_xml(data,opts)/*:WorkbookFile*/{if(!data)throw new Error("Could not find file");var wb=/*::(*/{AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""}/*::)*/;var pass=false,xmlns="xmlns";var dname={},dnstart=0;data.replace(tagregex,function xml_wb(x,idx){var y/*:any*/=parsexmltag(x);switch(strip_ns(y[0])){case'<?xml':break;/* 18.2.27 workbook CT_Workbook 1 */case'<workbook':if(x.match(wbnsregex))xmlns="xmlns"+x.match(/<(\w+):/)[1];wb.xmlns=y[xmlns];break;case'</workbook>':break;/* 18.2.13 fileVersion CT_FileVersion ? */case'<fileVersion':delete y[0];wb.AppVersion=y;break;case'<fileVersion/>':case'</fileVersion>':break;/* 18.2.12 fileSharing CT_FileSharing ? */case'<fileSharing':break;case'<fileSharing/>':break;/* 18.2.28 workbookPr CT_WorkbookPr ? */case'<workbookPr':case'<workbookPr/>':WBPropsDef.forEach(function(w){if(y[w[0]]==null)return;switch(w[2]){case"bool":wb.WBProps[w[0]]=parsexmlbool(y[w[0]]);break;case"int":wb.WBProps[w[0]]=parseInt(y[w[0]],10);break;default:wb.WBProps[w[0]]=y[w[0]];}});if(y.codeName)wb.WBProps.CodeName=utf8read(y.codeName);break;case'</workbookPr>':break;/* 18.2.29 workbookProtection CT_WorkbookProtection ? */case'<workbookProtection':break;case'<workbookProtection/>':break;/* 18.2.1  bookViews CT_BookViews ? */case'<bookViews':case'<bookViews>':case'</bookViews>':break;/* 18.2.30   workbookView CT_BookView + */case'<workbookView':case'<workbookView/>':delete y[0];wb.WBView.push(y);break;case'</workbookView>':break;/* 18.2.20 sheets CT_Sheets 1 */case'<sheets':case'<sheets>':case'</sheets>':break;// aggregate sheet
	/* 18.2.19   sheet CT_Sheet + */case'<sheet':switch(y.state){case"hidden":y.Hidden=1;break;case"veryHidden":y.Hidden=2;break;default:y.Hidden=0;}delete y.state;y.name=unescapexml(utf8read(y.name));delete y[0];wb.Sheets.push(y);break;case'</sheet>':break;/* 18.2.15 functionGroups CT_FunctionGroups ? */case'<functionGroups':case'<functionGroups/>':break;/* 18.2.14   functionGroup CT_FunctionGroup + */case'<functionGroup':break;/* 18.2.9  externalReferences CT_ExternalReferences ? */case'<externalReferences':case'</externalReferences>':case'<externalReferences>':break;/* 18.2.8    externalReference CT_ExternalReference + */case'<externalReference':break;/* 18.2.6  definedNames CT_DefinedNames ? */case'<definedNames/>':break;case'<definedNames>':case'<definedNames':pass=true;break;case'</definedNames>':pass=false;break;/* 18.2.5    definedName CT_DefinedName + */case'<definedName':{dname={};dname.Name=utf8read(y.name);if(y.comment)dname.Comment=y.comment;if(y.localSheetId)dname.Sheet=+y.localSheetId;if(parsexmlbool(y.hidden||"0"))dname.Hidden=true;dnstart=idx+x.length;}break;case'</definedName>':{dname.Ref=unescapexml(utf8read(data.slice(dnstart,idx)));wb.Names.push(dname);}break;case'<definedName/>':break;/* 18.2.2  calcPr CT_CalcPr ? */case'<calcPr':delete y[0];wb.CalcPr=y;break;case'<calcPr/>':delete y[0];wb.CalcPr=y;break;case'</calcPr>':break;/* 18.2.16 oleSize CT_OleSize ? (ref required) */case'<oleSize':break;/* 18.2.4  customWorkbookViews CT_CustomWorkbookViews ? */case'<customWorkbookViews>':case'</customWorkbookViews>':case'<customWorkbookViews':break;/* 18.2.3  customWorkbookView CT_CustomWorkbookView + */case'<customWorkbookView':case'</customWorkbookView>':break;/* 18.2.18 pivotCaches CT_PivotCaches ? */case'<pivotCaches>':case'</pivotCaches>':case'<pivotCaches':break;/* 18.2.17 pivotCache CT_PivotCache ? */case'<pivotCache':break;/* 18.2.21 smartTagPr CT_SmartTagPr ? */case'<smartTagPr':case'<smartTagPr/>':break;/* 18.2.23 smartTagTypes CT_SmartTagTypes ? */case'<smartTagTypes':case'<smartTagTypes>':case'</smartTagTypes>':break;/* 18.2.22 smartTagType CT_SmartTagType ? */case'<smartTagType':break;/* 18.2.24 webPublishing CT_WebPublishing ? */case'<webPublishing':case'<webPublishing/>':break;/* 18.2.11 fileRecoveryPr CT_FileRecoveryPr ? */case'<fileRecoveryPr':case'<fileRecoveryPr/>':break;/* 18.2.26 webPublishObjects CT_WebPublishObjects ? */case'<webPublishObjects>':case'<webPublishObjects':case'</webPublishObjects>':break;/* 18.2.25 webPublishObject CT_WebPublishObject ? */case'<webPublishObject':break;/* 18.2.10 extLst CT_ExtensionList ? */case'<extLst':case'<extLst>':case'</extLst>':case'<extLst/>':break;/* 18.2.7  ext CT_Extension + */case'<ext':pass=true;break;//TODO: check with versions of excel
	case'</ext>':pass=false;break;/* Others */case'<ArchID':break;case'<AlternateContent':case'<AlternateContent>':pass=true;break;case'</AlternateContent>':pass=false;break;/* TODO */case'<revisionPtr':break;default:if(!pass&&opts.WTF)throw new Error('unrecognized '+y[0]+' in workbook');}return x;});if(XMLNS_main.indexOf(wb.xmlns)===-1)throw new Error("Unknown Namespace: "+wb.xmlns);parse_wb_defaults(wb);return wb;}/* [MS-XLSB] 2.4.304 BrtBundleSh */function parse_BrtBundleSh(data,length/*:number*/){var z={};z.Hidden=data.read_shift(4);//hsState ST_SheetState
	z.iTabID=data.read_shift(4);z.strRelID=parse_RelID(data);z.name=parse_XLWideString(data);return z;}/* [MS-XLSB] 2.4.815 BrtWbProp */function parse_BrtWbProp(data,length)/*:WBProps*/{var o/*:WBProps*/={}/*:any*/;var flags=data.read_shift(4);o.defaultThemeVersion=data.read_shift(4);var strName=length>8?parse_XLWideString(data):"";if(strName.length>0)o.CodeName=strName;o.autoCompressPictures=!!(flags&0x10000);o.backupFile=!!(flags&0x40);o.checkCompatibility=!!(flags&0x1000);o.date1904=!!(flags&0x01);o.filterPrivacy=!!(flags&0x08);o.hidePivotFieldList=!!(flags&0x400);o.promptedSolutions=!!(flags&0x10);o.publishItems=!!(flags&0x800);o.refreshAllConnections=!!(flags&0x40000);o.saveExternalLinkValues=!!(flags&0x80);o.showBorderUnselectedTables=!!(flags&0x04);o.showInkAnnotation=!!(flags&0x20);o.showObjects=["all","placeholders","none"][flags>>13&0x03];o.showPivotChartFilter=!!(flags&0x8000);o.updateLinks=["userSet","never","always"][flags>>8&0x03];return o;}function parse_BrtFRTArchID$(data,length){var o={};data.read_shift(4);o.ArchID=data.read_shift(4);data.l+=length-8;return o;}/* [MS-XLSB] 2.4.687 BrtName */function parse_BrtName(data,length,opts){var end=data.l+length;data.l+=4;//var flags = data.read_shift(4);
	data.l+=1;//var chKey = data.read_shift(1);
	var itab=data.read_shift(4);var name=parse_XLNameWideString(data);var formula=parse_XLSBNameParsedFormula(data,0,opts);var comment=parse_XLNullableWideString(data);//if(0 /* fProc */) {
	// unusedstring1: XLNullableWideString
	// description: XLNullableWideString
	// helpTopic: XLNullableWideString
	// unusedstring2: XLNullableWideString
	//}
	data.l=end;var out={Name:name,Ptg:formula}/*:any*/;if(itab<0xFFFFFFF)out.Sheet=itab;if(comment)out.Comment=comment;return out;}/* [MS-XLSB] 2.1.7.61 Workbook */function parse_wb_bin(data,opts)/*:WorkbookFile*/{var wb={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""};var state/*:Array<string>*/=[];var pass=false;if(!opts)opts={};opts.biff=12;var Names=[];var supbooks=[[]]/*:any*/;supbooks.SheetNames=[];supbooks.XTI=[];XLSBRecordEnum[0x0010]={n:"BrtFRTArchID$",f:parse_BrtFRTArchID$};recordhopper(data,function hopper_wb(val,R,RT){switch(RT){case 0x009C:/* 'BrtBundleSh' */supbooks.SheetNames.push(val.name);wb.Sheets.push(val);break;case 0x0099:/* 'BrtWbProp' */wb.WBProps=val;break;case 0x0027:/* 'BrtName' */if(val.Sheet!=null)opts.SID=val.Sheet;val.Ref=stringify_formula(val.Ptg,null,null,supbooks,opts);delete opts.SID;delete val.Ptg;Names.push(val);break;case 0x040C:/* 'BrtNameExt' */break;case 0x0165:/* 'BrtSupSelf' */case 0x0166:/* 'BrtSupSame' */case 0x0163:/* 'BrtSupBookSrc' */case 0x029B:/* 'BrtSupAddin' */if(!supbooks[0].length)supbooks[0]=[RT,val];else supbooks.push([RT,val]);supbooks[supbooks.length-1].XTI=[];break;case 0x016A:/* 'BrtExternSheet' */if(supbooks.length===0){supbooks[0]=[];supbooks[0].XTI=[];}supbooks[supbooks.length-1].XTI=supbooks[supbooks.length-1].XTI.concat(val);supbooks.XTI=supbooks.XTI.concat(val);break;case 0x0169:/* 'BrtPlaceholderName' */break;case 0x0817:/* 'BrtAbsPath15' */case 0x009E:/* 'BrtBookView' */case 0x008F:/* 'BrtBeginBundleShs' */case 0x0298:/* 'BrtBeginFnGroup' */case 0x0161:/* 'BrtBeginExternals' */break;/* case 'BrtModelTimeGroupingCalcCol' */case 0x0C00:/* 'BrtUid' */case 0x0C01:/* 'BrtRevisionPtr' */case 0x0216:/* 'BrtBookProtection' */case 0x02A5:/* 'BrtBookProtectionIso' */case 0x009D:/* 'BrtCalcProp' */case 0x0262:/* 'BrtCrashRecErr' */case 0x0802:/* 'BrtDecoupledPivotCacheID' */case 0x009B:/* 'BrtFileRecover' */case 0x0224:/* 'BrtFileSharing' */case 0x02A4:/* 'BrtFileSharingIso' */case 0x0080:/* 'BrtFileVersion' */case 0x0299:/* 'BrtFnGroup' */case 0x0850:/* 'BrtModelRelationship' */case 0x084D:/* 'BrtModelTable' */case 0x0225:/* 'BrtOleSize' */case 0x0805:/* 'BrtPivotTableRef' */case 0x0254:/* 'BrtSmartTagType' */case 0x081C:/* 'BrtTableSlicerCacheID' */case 0x081B:/* 'BrtTableSlicerCacheIDs' */case 0x0822:/* 'BrtTimelineCachePivotCacheID' */case 0x018D:/* 'BrtUserBookView' */case 0x009A:/* 'BrtWbFactoid' */case 0x045D:/* 'BrtWbProp14' */case 0x0229:/* 'BrtWebOpt' */case 0x082B:/* 'BrtWorkBookPr15' */break;case 0x0023:/* 'BrtFRTBegin' */state.push(RT);pass=true;break;case 0x0024:/* 'BrtFRTEnd' */state.pop();pass=false;break;case 0x0025:/* 'BrtACBegin' */state.push(RT);pass=true;break;case 0x0026:/* 'BrtACEnd' */state.pop();pass=false;break;case 0x0010:/* 'BrtFRTArchID$' */break;default:if(R.T);else if(!pass||opts.WTF&&state[state.length-1]!=0x0025/* BrtACBegin */&&state[state.length-1]!=0x0023/* BrtFRTBegin */)throw new Error("Unexpected record 0x"+RT.toString(16));}},opts);parse_wb_defaults(wb);// $FlowIgnore
	wb.Names=Names;wb/*:any*/.supbooks=supbooks;return wb;}function parse_wb(data,name/*:string*/,opts)/*:WorkbookFile*/{if(name.slice(-4)===".bin")return parse_wb_bin(data/*:any*/,opts);return parse_wb_xml(data/*:any*/,opts);}function parse_ws(data,name/*:string*/,idx/*:number*/,opts,rels,wb,themes,styles)/*:Worksheet*/{if(name.slice(-4)===".bin")return parse_ws_bin(data/*:any*/,opts,idx,rels,wb,themes,styles);return parse_ws_xml(data/*:any*/,opts,idx,rels,wb,themes,styles);}function parse_cs(data,name/*:string*/,idx/*:number*/,opts,rels,wb,themes,styles)/*:Worksheet*/{if(name.slice(-4)===".bin")return parse_cs_bin(data/*:any*/,opts,idx,rels,wb);return parse_cs_xml(data/*:any*/,opts,idx,rels,wb);}function parse_ms(data,name/*:string*/,idx/*:number*/,opts,rels,wb,themes,styles)/*:Worksheet*/{if(name.slice(-4)===".bin")return parse_ms_bin();return parse_ms_xml();}function parse_ds(data,name/*:string*/,idx/*:number*/,opts,rels,wb,themes,styles)/*:Worksheet*/{if(name.slice(-4)===".bin")return parse_ds_bin();return parse_ds_xml();}function parse_sty(data,name/*:string*/,themes,opts){if(name.slice(-4)===".bin")return parse_sty_bin(data/*:any*/,themes,opts);return parse_sty_xml(data/*:any*/,themes,opts);}function parse_theme(data/*:string*/,name/*:string*/,opts){return parse_theme_xml(data,opts);}function parse_sst(data,name/*:string*/,opts)/*:SST*/{if(name.slice(-4)===".bin")return parse_sst_bin(data/*:any*/,opts);return parse_sst_xml(data/*:any*/,opts);}function parse_cmnt(data,name/*:string*/,opts)/*:Array<RawComment>*/{if(name.slice(-4)===".bin")return parse_comments_bin(data/*:any*/,opts);return parse_comments_xml(data/*:any*/,opts);}function parse_cc(data,name/*:string*/,opts){if(name.slice(-4)===".bin")return parse_cc_bin(data/*:any*/);return parse_cc_xml(data/*:any*/);}function parse_xlink(data,rel,name/*:string*/,opts){if(name.slice(-4)===".bin")return parse_xlink_bin(data/*:any*/,rel,name,opts);return parse_xlink_xml();}function parse_xlmeta(data,name/*:string*/,opts){if(name.slice(-4)===".bin")return parse_xlmeta_bin(data/*:any*/,name,opts);return parse_xlmeta_xml(data/*:any*/,name,opts);}var attregexg2=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;var attregex2=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;function xlml_parsexmltag(tag/*:string*/,skip_root/*:?boolean*/){var words=tag.split(/\s+/);var z/*:any*/=[]/*:any*/;if(!skip_root)z[0]=words[0];if(words.length===1)return z;var m=tag.match(attregexg2),y,j,w,i;if(m)for(i=0;i!=m.length;++i){y=m[i].match(attregex2);/*:: if(!y || !y[2]) continue; */if((j=y[1].indexOf(":"))===-1)z[y[1]]=y[2].slice(1,y[2].length-1);else {if(y[1].slice(0,6)==="xmlns:")w="xmlns"+y[1].slice(6);else w=y[1].slice(j+1);z[w]=y[2].slice(1,y[2].length-1);}}return z;}function xlml_parsexmltagobj(tag/*:string*/){var words=tag.split(/\s+/);var z={};if(words.length===1)return z;var m=tag.match(attregexg2),y,j,w,i;if(m)for(i=0;i!=m.length;++i){y=m[i].match(attregex2);/*:: if(!y || !y[2]) continue; */if((j=y[1].indexOf(":"))===-1)z[y[1]]=y[2].slice(1,y[2].length-1);else {if(y[1].slice(0,6)==="xmlns:")w="xmlns"+y[1].slice(6);else w=y[1].slice(j+1);z[w]=y[2].slice(1,y[2].length-1);}}return z;}// ----
	/* map from xlml named formats to SSF TODO: localize */var XLMLFormatMap/*: {[string]:string}*/;function xlml_format(format,value)/*:string*/{var fmt=XLMLFormatMap[format]||unescapexml(format);if(fmt==="General")return SSF_general(value);return SSF_format(fmt,value);}function xlml_set_custprop(Custprops,key,cp,val/*:string*/){var oval/*:any*/=val;switch((cp[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":oval=parsexmlbool(val);break;case"i2":case"int":oval=parseInt(val,10);break;case"r4":case"float":oval=parseFloat(val);break;case"date":case"dateTime.tz":oval=parseDate(val);break;case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break;default:throw new Error("bad custprop:"+cp[0]);}Custprops[unescapexml(key)]=oval;}function safe_format_xlml(cell/*:Cell*/,nf,o){if(cell.t==='z')return;if(!o||o.cellText!==false)try{if(cell.t==='e'){cell.w=cell.w||BErr[cell.v];}else if(nf==="General"){if(cell.t==='n'){if((cell.v|0)===cell.v)cell.w=cell.v.toString(10);else cell.w=SSF_general_num(cell.v);}else cell.w=SSF_general(cell.v);}else cell.w=xlml_format(nf||"General",cell.v);}catch(e){if(o.WTF)throw e;}try{var z=XLMLFormatMap[nf]||nf||"General";if(o.cellNF)cell.z=z;if(o.cellDates&&cell.t=='n'&&fmt_is_date(z)){var _d=SSF_parse_date_code(cell.v);if(_d){cell.t='d';cell.v=new Date(_d.y,_d.m-1,_d.d,_d.H,_d.M,_d.S,_d.u);}}}catch(e){if(o.WTF)throw e;}}function process_style_xlml(styles,stag,opts){if(opts.cellStyles){if(stag.Interior){var I=stag.Interior;if(I.Pattern)I.patternType=XLMLPatternTypeMap[I.Pattern]||I.Pattern;}}styles[stag.ID]=stag;}/* TODO: there must exist some form of OSP-blessed spec */function parse_xlml_data(xml,ss,data,cell/*:any*/,base,styles,csty,row,arrayf,o){var nf="General",sid=cell.StyleID,S={};o=o||{};var interiors=[];var i=0;if(sid===undefined&&row)sid=row.StyleID;if(sid===undefined&&csty)sid=csty.StyleID;while(styles[sid]!==undefined){if(styles[sid].nf)nf=styles[sid].nf;if(styles[sid].Interior)interiors.push(styles[sid].Interior);if(!styles[sid].Parent)break;sid=styles[sid].Parent;}switch(data.Type){case'Boolean':cell.t='b';cell.v=parsexmlbool(xml);break;case'String':cell.t='s';cell.r=xlml_fixstr(unescapexml(xml));cell.v=xml.indexOf("<")>-1?unescapexml(ss||xml).replace(/<.*?>/g,""):cell.r;// todo: BR etc
	break;case'DateTime':if(xml.slice(-1)!="Z")xml+="Z";cell.v=(parseDate(xml)-new Date(Date.UTC(1899,11,30)))/(24*60*60*1000);if(cell.v!==cell.v)cell.v=unescapexml(xml);else if(cell.v<60)cell.v=cell.v-1;if(!nf||nf=="General")nf="yyyy-mm-dd";/* falls through */case'Number':if(cell.v===undefined)cell.v=+xml;if(!cell.t)cell.t='n';break;case'Error':cell.t='e';cell.v=RBErr[xml];if(o.cellText!==false)cell.w=xml;break;default:if(xml==""&&ss==""){cell.t='z';}else {cell.t='s';cell.v=xlml_fixstr(ss||xml);}break;}safe_format_xlml(cell,nf,o);if(o.cellFormula!==false){if(cell.Formula){var fstr=unescapexml(cell.Formula);/* strictly speaking, the leading = is required but some writers omit */if(fstr.charCodeAt(0)==61/* = */)fstr=fstr.slice(1);cell.f=rc_to_a1(fstr,base);delete cell.Formula;if(cell.ArrayRange=="RC")cell.F=rc_to_a1("RC:RC",base);else if(cell.ArrayRange){cell.F=rc_to_a1(cell.ArrayRange,base);arrayf.push([safe_decode_range(cell.F),cell.F]);}}else {for(i=0;i<arrayf.length;++i)if(base.r>=arrayf[i][0].s.r&&base.r<=arrayf[i][0].e.r)if(base.c>=arrayf[i][0].s.c&&base.c<=arrayf[i][0].e.c)cell.F=arrayf[i][1];}}if(o.cellStyles){interiors.forEach(function(x){if(!S.patternType&&x.patternType)S.patternType=x.patternType;});cell.s=S;}if(cell.StyleID!==undefined)cell.ixfe=cell.StyleID;}function xlml_clean_comment(comment/*:any*/){comment.t=comment.v||"";comment.t=comment.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n");comment.v=comment.w=comment.ixfe=undefined;}/* TODO: Everything */function parse_xlml_xml(d,_opts)/*:Workbook*/{var opts=_opts||{};make_ssf();var str=debom(xlml_normalize(d));if(opts.type=='binary'||opts.type=='array'||opts.type=='base64'){str=utf8read(str);}var opening=str.slice(0,1024).toLowerCase(),ishtml=false;opening=opening.replace(/".*?"/g,"");if((opening.indexOf(">")&1023)>Math.min(opening.indexOf(",")&1023,opening.indexOf(";")&1023)){var _o=dup(opts);_o.type="string";return PRN.to_workbook(str,_o);}if(opening.indexOf("<?xml")==-1)["html","table","head","meta","script","style","div"].forEach(function(tag){if(opening.indexOf("<"+tag)>=0)ishtml=true;});if(ishtml)return html_to_workbook(str,opts);XLMLFormatMap={"General Number":"General","General Date":table_fmt[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":table_fmt[15],"Short Date":table_fmt[14],"Long Time":table_fmt[19],"Medium Time":table_fmt[18],"Short Time":table_fmt[20],"Currency":'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',"Fixed":table_fmt[2],"Standard":table_fmt[4],"Percent":table_fmt[10],"Scientific":table_fmt[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'}/*:any*/;var Rn;var state=[],tmp;var sheets={},sheetnames/*:Array<string>*/=[],cursheet/*:Worksheet*/=opts.dense?[]:{},sheetname="";var cell={}/*:any*/,row={};// eslint-disable-line no-unused-vars
	var dtag=xlml_parsexmltag('<Data ss:Type="String">'),didx=0;var c=0,r=0;var refguess/*:Range*/={s:{r:2000000,c:2000000},e:{r:0,c:0}};var styles={},stag={};var ss="",fidx=0;var merges/*:Array<Range>*/=[];var Props={},Custprops={},pidx=0,cp=[];var comments/*:Array<Comment>*/=[],comment/*:Comment*/={}/*:any*/;var cstys=[],csty,seencol=false;var arrayf/*:Array<[Range, string]>*/=[];var rowinfo/*:Array<RowInfo>*/=[],rowobj={},cc=0,rr=0;var Workbook/*:WBWBProps*/={Sheets:[],WBProps:{date1904:false}}/*:any*/,wsprops={};xlmlregex.lastIndex=0;str=str.replace(/<!--([\s\S]*?)-->/mg,"");var raw_Rn3="";while(Rn=xlmlregex.exec(str))switch(Rn[3]=(raw_Rn3=Rn[3]).toLowerCase()){case'data'/*case 'Data'*/:if(raw_Rn3=="data"){if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));}else if(Rn[0].charAt(Rn[0].length-2)!=='/')state.push([Rn[3],true]);break;}if(state[state.length-1][1])break;if(Rn[1]==='/')parse_xlml_data(str.slice(didx,Rn.index),ss,dtag,state[state.length-1][0]==/*"Comment"*/"comment"?comment:cell,{c:c,r:r},styles,cstys[c],row,arrayf,opts);else {ss="";dtag=xlml_parsexmltag(Rn[0]);didx=Rn.index+Rn[0].length;}break;case'cell'/*case 'Cell'*/:if(Rn[1]==='/'){if(comments.length>0)cell.c=comments;if((!opts.sheetRows||opts.sheetRows>r)&&cell.v!==undefined){if(opts.dense){if(!cursheet[r])cursheet[r]=[];cursheet[r][c]=cell;}else cursheet[encode_col(c)+encode_row(r)]=cell;}if(cell.HRef){cell.l={Target:unescapexml(cell.HRef)}/*:any*/;if(cell.HRefScreenTip)cell.l.Tooltip=cell.HRefScreenTip;delete cell.HRef;delete cell.HRefScreenTip;}if(cell.MergeAcross||cell.MergeDown){cc=c+(parseInt(cell.MergeAcross,10)|0);rr=r+(parseInt(cell.MergeDown,10)|0);merges.push({s:{c:c,r:r},e:{c:cc,r:rr}});}if(!opts.sheetStubs){if(cell.MergeAcross)c=cc+1;else ++c;}else if(cell.MergeAcross||cell.MergeDown){/*:: if(!cc) cc = 0; if(!rr) rr = 0; */for(var cma=c;cma<=cc;++cma){for(var cmd=r;cmd<=rr;++cmd){if(cma>c||cmd>r){if(opts.dense){if(!cursheet[cmd])cursheet[cmd]=[];cursheet[cmd][cma]={t:'z'};}else cursheet[encode_col(cma)+encode_row(cmd)]={t:'z'};}}}c=cc+1;}else ++c;}else {cell=xlml_parsexmltagobj(Rn[0]);if(cell.Index)c=+cell.Index-1;if(c<refguess.s.c)refguess.s.c=c;if(c>refguess.e.c)refguess.e.c=c;if(Rn[0].slice(-2)==="/>")++c;comments=[];}break;case'row'/*case 'Row'*/:if(Rn[1]==='/'||Rn[0].slice(-2)==="/>"){if(r<refguess.s.r)refguess.s.r=r;if(r>refguess.e.r)refguess.e.r=r;if(Rn[0].slice(-2)==="/>"){row=xlml_parsexmltag(Rn[0]);if(row.Index)r=+row.Index-1;}c=0;++r;}else {row=xlml_parsexmltag(Rn[0]);if(row.Index)r=+row.Index-1;rowobj={};if(row.AutoFitHeight=="0"||row.Height){rowobj.hpx=parseInt(row.Height,10);rowobj.hpt=px2pt(rowobj.hpx);rowinfo[r]=rowobj;}if(row.Hidden=="1"){rowobj.hidden=true;rowinfo[r]=rowobj;}}break;case'worksheet'/*case 'Worksheet'*/:/* TODO: read range from FullRows/FullColumns */if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));sheetnames.push(sheetname);if(refguess.s.r<=refguess.e.r&&refguess.s.c<=refguess.e.c){cursheet["!ref"]=encode_range(refguess);if(opts.sheetRows&&opts.sheetRows<=refguess.e.r){cursheet["!fullref"]=cursheet["!ref"];refguess.e.r=opts.sheetRows-1;cursheet["!ref"]=encode_range(refguess);}}if(merges.length)cursheet["!merges"]=merges;if(cstys.length>0)cursheet["!cols"]=cstys;if(rowinfo.length>0)cursheet["!rows"]=rowinfo;sheets[sheetname]=cursheet;}else {refguess={s:{r:2000000,c:2000000},e:{r:0,c:0}};r=c=0;state.push([Rn[3],false]);tmp=xlml_parsexmltag(Rn[0]);sheetname=unescapexml(tmp.Name);cursheet=opts.dense?[]:{};merges=[];arrayf=[];rowinfo=[];wsprops={name:sheetname,Hidden:0};Workbook.Sheets.push(wsprops);}break;case'table'/*case 'Table'*/:if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));}else if(Rn[0].slice(-2)=="/>")break;else {state.push([Rn[3],false]);cstys=[];seencol=false;}break;case'style'/*case 'Style'*/:if(Rn[1]==='/')process_style_xlml(styles,stag,opts);else stag=xlml_parsexmltag(Rn[0]);break;case'numberformat'/*case 'NumberFormat'*/:stag.nf=unescapexml(xlml_parsexmltag(Rn[0]).Format||"General");if(XLMLFormatMap[stag.nf])stag.nf=XLMLFormatMap[stag.nf];for(var ssfidx=0;ssfidx!=0x188;++ssfidx)if(table_fmt[ssfidx]==stag.nf)break;if(ssfidx==0x188)for(ssfidx=0x39;ssfidx!=0x188;++ssfidx)if(table_fmt[ssfidx]==null){SSF_load(stag.nf,ssfidx);break;}break;case'column'/*case 'Column'*/:if(state[state.length-1][0]!==/*'Table'*/'table')break;csty=xlml_parsexmltag(Rn[0]);if(csty.Hidden){csty.hidden=true;delete csty.Hidden;}if(csty.Width)csty.wpx=parseInt(csty.Width,10);if(!seencol&&csty.wpx>10){seencol=true;MDW=DEF_MDW;//find_mdw_wpx(csty.wpx);
	for(var _col=0;_col<cstys.length;++_col)if(cstys[_col])process_col(cstys[_col]);}if(seencol)process_col(csty);cstys[csty.Index-1||cstys.length]=csty;for(var i=0;i<+csty.Span;++i)cstys[cstys.length]=dup(csty);break;case'namedrange'/*case 'NamedRange'*/:if(Rn[1]==='/')break;if(!Workbook.Names)Workbook.Names=[];var _NamedRange=parsexmltag(Rn[0]);var _DefinedName/*:DefinedName*/={Name:_NamedRange.Name,Ref:rc_to_a1(_NamedRange.RefersTo.slice(1),{r:0,c:0})}/*:any*/;if(Workbook.Sheets.length>0)_DefinedName.Sheet=Workbook.Sheets.length-1;/*:: if(Workbook.Names) */Workbook.Names.push(_DefinedName);break;case'namedcell'/*case 'NamedCell'*/:break;case'b'/*case 'B'*/:break;case'i'/*case 'I'*/:break;case'u'/*case 'U'*/:break;case's'/*case 'S'*/:break;case'em'/*case 'EM'*/:break;case'h2'/*case 'H2'*/:break;case'h3'/*case 'H3'*/:break;case'sub'/*case 'Sub'*/:break;case'sup'/*case 'Sup'*/:break;case'span'/*case 'Span'*/:break;case'alignment'/*case 'Alignment'*/:break;case'borders'/*case 'Borders'*/:break;case'border'/*case 'Border'*/:break;case'font'/*case 'Font'*/:if(Rn[0].slice(-2)==="/>")break;else if(Rn[1]==="/")ss+=str.slice(fidx,Rn.index);else fidx=Rn.index+Rn[0].length;break;case'interior'/*case 'Interior'*/:if(!opts.cellStyles)break;stag.Interior=xlml_parsexmltag(Rn[0]);break;case'protection'/*case 'Protection'*/:break;case'author'/*case 'Author'*/:case'title'/*case 'Title'*/:case'description'/*case 'Description'*/:case'created'/*case 'Created'*/:case'keywords'/*case 'Keywords'*/:case'subject'/*case 'Subject'*/:case'category'/*case 'Category'*/:case'company'/*case 'Company'*/:case'lastauthor'/*case 'LastAuthor'*/:case'lastsaved'/*case 'LastSaved'*/:case'lastprinted'/*case 'LastPrinted'*/:case'version'/*case 'Version'*/:case'revision'/*case 'Revision'*/:case'totaltime'/*case 'TotalTime'*/:case'hyperlinkbase'/*case 'HyperlinkBase'*/:case'manager'/*case 'Manager'*/:case'contentstatus'/*case 'ContentStatus'*/:case'identifier'/*case 'Identifier'*/:case'language'/*case 'Language'*/:case'appname'/*case 'AppName'*/:if(Rn[0].slice(-2)==="/>")break;else if(Rn[1]==="/")xlml_set_prop(Props,raw_Rn3,str.slice(pidx,Rn.index));else pidx=Rn.index+Rn[0].length;break;case'paragraphs'/*case 'Paragraphs'*/:break;case'styles'/*case 'Styles'*/:case'workbook'/*case 'Workbook'*/:if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));}else state.push([Rn[3],false]);break;case'comment'/*case 'Comment'*/:if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));xlml_clean_comment(comment);comments.push(comment);}else {state.push([Rn[3],false]);tmp=xlml_parsexmltag(Rn[0]);comment={a:tmp.Author}/*:any*/;}break;case'autofilter'/*case 'AutoFilter'*/:if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));}else if(Rn[0].charAt(Rn[0].length-2)!=='/'){var AutoFilter=xlml_parsexmltag(Rn[0]);cursheet['!autofilter']={ref:rc_to_a1(AutoFilter.Range).replace(/\$/g,"")};state.push([Rn[3],true]);}break;case'name'/*case 'Name'*/:break;case'datavalidation'/*case 'DataValidation'*/:if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));}else {if(Rn[0].charAt(Rn[0].length-2)!=='/')state.push([Rn[3],true]);}break;case'pixelsperinch'/*case 'PixelsPerInch'*/:break;case'componentoptions'/*case 'ComponentOptions'*/:case'documentproperties'/*case 'DocumentProperties'*/:case'customdocumentproperties'/*case 'CustomDocumentProperties'*/:case'officedocumentsettings'/*case 'OfficeDocumentSettings'*/:case'pivottable'/*case 'PivotTable'*/:case'pivotcache'/*case 'PivotCache'*/:case'names'/*case 'Names'*/:case'mapinfo'/*case 'MapInfo'*/:case'pagebreaks'/*case 'PageBreaks'*/:case'querytable'/*case 'QueryTable'*/:case'sorting'/*case 'Sorting'*/:case'schema'/*case 'Schema'*/://case 'data' /*case 'data'*/:
	case'conditionalformatting'/*case 'ConditionalFormatting'*/:case'smarttagtype'/*case 'SmartTagType'*/:case'smarttags'/*case 'SmartTags'*/:case'excelworkbook'/*case 'ExcelWorkbook'*/:case'workbookoptions'/*case 'WorkbookOptions'*/:case'worksheetoptions'/*case 'WorksheetOptions'*/:if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw new Error("Bad state: "+tmp.join("|"));}else if(Rn[0].charAt(Rn[0].length-2)!=='/')state.push([Rn[3],true]);break;case'null'/*case 'Null'*/:break;default:/* FODS file root is <office:document> */if(state.length==0&&Rn[3]=="document")return parse_fods(str,opts);/* UOS file root is <uof:UOF> */if(state.length==0&&Rn[3]=="uof"/*"UOF"*/)return parse_fods(str,opts);var seen=true;switch(state[state.length-1][0]){/* OfficeDocumentSettings */case'officedocumentsettings'/*case 'OfficeDocumentSettings'*/:switch(Rn[3]){case'allowpng'/*case 'AllowPNG'*/:break;case'removepersonalinformation'/*case 'RemovePersonalInformation'*/:break;case'downloadcomponents'/*case 'DownloadComponents'*/:break;case'locationofcomponents'/*case 'LocationOfComponents'*/:break;case'colors'/*case 'Colors'*/:break;case'color'/*case 'Color'*/:break;case'index'/*case 'Index'*/:break;case'rgb'/*case 'RGB'*/:break;case'targetscreensize'/*case 'TargetScreenSize'*/:break;case'readonlyrecommended'/*case 'ReadOnlyRecommended'*/:break;default:seen=false;}break;/* ComponentOptions */case'componentoptions'/*case 'ComponentOptions'*/:switch(Rn[3]){case'toolbar'/*case 'Toolbar'*/:break;case'hideofficelogo'/*case 'HideOfficeLogo'*/:break;case'spreadsheetautofit'/*case 'SpreadsheetAutoFit'*/:break;case'label'/*case 'Label'*/:break;case'caption'/*case 'Caption'*/:break;case'maxheight'/*case 'MaxHeight'*/:break;case'maxwidth'/*case 'MaxWidth'*/:break;case'nextsheetnumber'/*case 'NextSheetNumber'*/:break;default:seen=false;}break;/* ExcelWorkbook */case'excelworkbook'/*case 'ExcelWorkbook'*/:switch(Rn[3]){case'date1904'/*case 'Date1904'*/:/*:: if(!Workbook.WBProps) Workbook.WBProps = {}; */Workbook.WBProps.date1904=true;break;case'windowheight'/*case 'WindowHeight'*/:break;case'windowwidth'/*case 'WindowWidth'*/:break;case'windowtopx'/*case 'WindowTopX'*/:break;case'windowtopy'/*case 'WindowTopY'*/:break;case'tabratio'/*case 'TabRatio'*/:break;case'protectstructure'/*case 'ProtectStructure'*/:break;case'protectwindow'/*case 'ProtectWindow'*/:break;case'protectwindows'/*case 'ProtectWindows'*/:break;case'activesheet'/*case 'ActiveSheet'*/:break;case'displayinknotes'/*case 'DisplayInkNotes'*/:break;case'firstvisiblesheet'/*case 'FirstVisibleSheet'*/:break;case'supbook'/*case 'SupBook'*/:break;case'sheetname'/*case 'SheetName'*/:break;case'sheetindex'/*case 'SheetIndex'*/:break;case'sheetindexfirst'/*case 'SheetIndexFirst'*/:break;case'sheetindexlast'/*case 'SheetIndexLast'*/:break;case'dll'/*case 'Dll'*/:break;case'acceptlabelsinformulas'/*case 'AcceptLabelsInFormulas'*/:break;case'donotsavelinkvalues'/*case 'DoNotSaveLinkValues'*/:break;case'iteration'/*case 'Iteration'*/:break;case'maxiterations'/*case 'MaxIterations'*/:break;case'maxchange'/*case 'MaxChange'*/:break;case'path'/*case 'Path'*/:break;case'xct'/*case 'Xct'*/:break;case'count'/*case 'Count'*/:break;case'selectedsheets'/*case 'SelectedSheets'*/:break;case'calculation'/*case 'Calculation'*/:break;case'uncalced'/*case 'Uncalced'*/:break;case'startupprompt'/*case 'StartupPrompt'*/:break;case'crn'/*case 'Crn'*/:break;case'externname'/*case 'ExternName'*/:break;case'formula'/*case 'Formula'*/:break;case'colfirst'/*case 'ColFirst'*/:break;case'collast'/*case 'ColLast'*/:break;case'wantadvise'/*case 'WantAdvise'*/:break;case'boolean'/*case 'Boolean'*/:break;case'error'/*case 'Error'*/:break;case'text'/*case 'Text'*/:break;case'ole'/*case 'OLE'*/:break;case'noautorecover'/*case 'NoAutoRecover'*/:break;case'publishobjects'/*case 'PublishObjects'*/:break;case'donotcalculatebeforesave'/*case 'DoNotCalculateBeforeSave'*/:break;case'number'/*case 'Number'*/:break;case'refmoder1c1'/*case 'RefModeR1C1'*/:break;case'embedsavesmarttags'/*case 'EmbedSaveSmartTags'*/:break;default:seen=false;}break;/* WorkbookOptions */case'workbookoptions'/*case 'WorkbookOptions'*/:switch(Rn[3]){case'owcversion'/*case 'OWCVersion'*/:break;case'height'/*case 'Height'*/:break;case'width'/*case 'Width'*/:break;default:seen=false;}break;/* WorksheetOptions */case'worksheetoptions'/*case 'WorksheetOptions'*/:switch(Rn[3]){case'visible'/*case 'Visible'*/:if(Rn[0].slice(-2)==="/>");else if(Rn[1]==="/")switch(str.slice(pidx,Rn.index)){case"SheetHidden":wsprops.Hidden=1;break;case"SheetVeryHidden":wsprops.Hidden=2;break;}else pidx=Rn.index+Rn[0].length;break;case'header'/*case 'Header'*/:if(!cursheet['!margins'])default_margins(cursheet['!margins']={},'xlml');if(!isNaN(+parsexmltag(Rn[0]).Margin))cursheet['!margins'].header=+parsexmltag(Rn[0]).Margin;break;case'footer'/*case 'Footer'*/:if(!cursheet['!margins'])default_margins(cursheet['!margins']={},'xlml');if(!isNaN(+parsexmltag(Rn[0]).Margin))cursheet['!margins'].footer=+parsexmltag(Rn[0]).Margin;break;case'pagemargins'/*case 'PageMargins'*/:var pagemargins=parsexmltag(Rn[0]);if(!cursheet['!margins'])default_margins(cursheet['!margins']={},'xlml');if(!isNaN(+pagemargins.Top))cursheet['!margins'].top=+pagemargins.Top;if(!isNaN(+pagemargins.Left))cursheet['!margins'].left=+pagemargins.Left;if(!isNaN(+pagemargins.Right))cursheet['!margins'].right=+pagemargins.Right;if(!isNaN(+pagemargins.Bottom))cursheet['!margins'].bottom=+pagemargins.Bottom;break;case'displayrighttoleft'/*case 'DisplayRightToLeft'*/:if(!Workbook.Views)Workbook.Views=[];if(!Workbook.Views[0])Workbook.Views[0]={};Workbook.Views[0].RTL=true;break;case'freezepanes'/*case 'FreezePanes'*/:break;case'frozennosplit'/*case 'FrozenNoSplit'*/:break;case'splithorizontal'/*case 'SplitHorizontal'*/:case'splitvertical'/*case 'SplitVertical'*/:break;case'donotdisplaygridlines'/*case 'DoNotDisplayGridlines'*/:break;case'activerow'/*case 'ActiveRow'*/:break;case'activecol'/*case 'ActiveCol'*/:break;case'toprowbottompane'/*case 'TopRowBottomPane'*/:break;case'leftcolumnrightpane'/*case 'LeftColumnRightPane'*/:break;case'unsynced'/*case 'Unsynced'*/:break;case'print'/*case 'Print'*/:break;case'printerrors'/*case 'PrintErrors'*/:break;case'panes'/*case 'Panes'*/:break;case'scale'/*case 'Scale'*/:break;case'pane'/*case 'Pane'*/:break;case'number'/*case 'Number'*/:break;case'layout'/*case 'Layout'*/:break;case'pagesetup'/*case 'PageSetup'*/:break;case'selected'/*case 'Selected'*/:break;case'protectobjects'/*case 'ProtectObjects'*/:break;case'enableselection'/*case 'EnableSelection'*/:break;case'protectscenarios'/*case 'ProtectScenarios'*/:break;case'validprinterinfo'/*case 'ValidPrinterInfo'*/:break;case'horizontalresolution'/*case 'HorizontalResolution'*/:break;case'verticalresolution'/*case 'VerticalResolution'*/:break;case'numberofcopies'/*case 'NumberofCopies'*/:break;case'activepane'/*case 'ActivePane'*/:break;case'toprowvisible'/*case 'TopRowVisible'*/:break;case'leftcolumnvisible'/*case 'LeftColumnVisible'*/:break;case'fittopage'/*case 'FitToPage'*/:break;case'rangeselection'/*case 'RangeSelection'*/:break;case'papersizeindex'/*case 'PaperSizeIndex'*/:break;case'pagelayoutzoom'/*case 'PageLayoutZoom'*/:break;case'pagebreakzoom'/*case 'PageBreakZoom'*/:break;case'filteron'/*case 'FilterOn'*/:break;case'fitwidth'/*case 'FitWidth'*/:break;case'fitheight'/*case 'FitHeight'*/:break;case'commentslayout'/*case 'CommentsLayout'*/:break;case'zoom'/*case 'Zoom'*/:break;case'lefttoright'/*case 'LeftToRight'*/:break;case'gridlines'/*case 'Gridlines'*/:break;case'allowsort'/*case 'AllowSort'*/:break;case'allowfilter'/*case 'AllowFilter'*/:break;case'allowinsertrows'/*case 'AllowInsertRows'*/:break;case'allowdeleterows'/*case 'AllowDeleteRows'*/:break;case'allowinsertcols'/*case 'AllowInsertCols'*/:break;case'allowdeletecols'/*case 'AllowDeleteCols'*/:break;case'allowinserthyperlinks'/*case 'AllowInsertHyperlinks'*/:break;case'allowformatcells'/*case 'AllowFormatCells'*/:break;case'allowsizecols'/*case 'AllowSizeCols'*/:break;case'allowsizerows'/*case 'AllowSizeRows'*/:break;case'nosummaryrowsbelowdetail'/*case 'NoSummaryRowsBelowDetail'*/:if(!cursheet["!outline"])cursheet["!outline"]={};cursheet["!outline"].above=true;break;case'tabcolorindex'/*case 'TabColorIndex'*/:break;case'donotdisplayheadings'/*case 'DoNotDisplayHeadings'*/:break;case'showpagelayoutzoom'/*case 'ShowPageLayoutZoom'*/:break;case'nosummarycolumnsrightdetail'/*case 'NoSummaryColumnsRightDetail'*/:if(!cursheet["!outline"])cursheet["!outline"]={};cursheet["!outline"].left=true;break;case'blackandwhite'/*case 'BlackAndWhite'*/:break;case'donotdisplayzeros'/*case 'DoNotDisplayZeros'*/:break;case'displaypagebreak'/*case 'DisplayPageBreak'*/:break;case'rowcolheadings'/*case 'RowColHeadings'*/:break;case'donotdisplayoutline'/*case 'DoNotDisplayOutline'*/:break;case'noorientation'/*case 'NoOrientation'*/:break;case'allowusepivottables'/*case 'AllowUsePivotTables'*/:break;case'zeroheight'/*case 'ZeroHeight'*/:break;case'viewablerange'/*case 'ViewableRange'*/:break;case'selection'/*case 'Selection'*/:break;case'protectcontents'/*case 'ProtectContents'*/:break;default:seen=false;}break;/* PivotTable */case'pivottable'/*case 'PivotTable'*/:case'pivotcache'/*case 'PivotCache'*/:switch(Rn[3]){case'immediateitemsondrop'/*case 'ImmediateItemsOnDrop'*/:break;case'showpagemultipleitemlabel'/*case 'ShowPageMultipleItemLabel'*/:break;case'compactrowindent'/*case 'CompactRowIndent'*/:break;case'location'/*case 'Location'*/:break;case'pivotfield'/*case 'PivotField'*/:break;case'orientation'/*case 'Orientation'*/:break;case'layoutform'/*case 'LayoutForm'*/:break;case'layoutsubtotallocation'/*case 'LayoutSubtotalLocation'*/:break;case'layoutcompactrow'/*case 'LayoutCompactRow'*/:break;case'position'/*case 'Position'*/:break;case'pivotitem'/*case 'PivotItem'*/:break;case'datatype'/*case 'DataType'*/:break;case'datafield'/*case 'DataField'*/:break;case'sourcename'/*case 'SourceName'*/:break;case'parentfield'/*case 'ParentField'*/:break;case'ptlineitems'/*case 'PTLineItems'*/:break;case'ptlineitem'/*case 'PTLineItem'*/:break;case'countofsameitems'/*case 'CountOfSameItems'*/:break;case'item'/*case 'Item'*/:break;case'itemtype'/*case 'ItemType'*/:break;case'ptsource'/*case 'PTSource'*/:break;case'cacheindex'/*case 'CacheIndex'*/:break;case'consolidationreference'/*case 'ConsolidationReference'*/:break;case'filename'/*case 'FileName'*/:break;case'reference'/*case 'Reference'*/:break;case'nocolumngrand'/*case 'NoColumnGrand'*/:break;case'norowgrand'/*case 'NoRowGrand'*/:break;case'blanklineafteritems'/*case 'BlankLineAfterItems'*/:break;case'hidden'/*case 'Hidden'*/:break;case'subtotal'/*case 'Subtotal'*/:break;case'basefield'/*case 'BaseField'*/:break;case'mapchilditems'/*case 'MapChildItems'*/:break;case'function'/*case 'Function'*/:break;case'refreshonfileopen'/*case 'RefreshOnFileOpen'*/:break;case'printsettitles'/*case 'PrintSetTitles'*/:break;case'mergelabels'/*case 'MergeLabels'*/:break;case'defaultversion'/*case 'DefaultVersion'*/:break;case'refreshname'/*case 'RefreshName'*/:break;case'refreshdate'/*case 'RefreshDate'*/:break;case'refreshdatecopy'/*case 'RefreshDateCopy'*/:break;case'versionlastrefresh'/*case 'VersionLastRefresh'*/:break;case'versionlastupdate'/*case 'VersionLastUpdate'*/:break;case'versionupdateablemin'/*case 'VersionUpdateableMin'*/:break;case'versionrefreshablemin'/*case 'VersionRefreshableMin'*/:break;case'calculation'/*case 'Calculation'*/:break;default:seen=false;}break;/* PageBreaks */case'pagebreaks'/*case 'PageBreaks'*/:switch(Rn[3]){case'colbreaks'/*case 'ColBreaks'*/:break;case'colbreak'/*case 'ColBreak'*/:break;case'rowbreaks'/*case 'RowBreaks'*/:break;case'rowbreak'/*case 'RowBreak'*/:break;case'colstart'/*case 'ColStart'*/:break;case'colend'/*case 'ColEnd'*/:break;case'rowend'/*case 'RowEnd'*/:break;default:seen=false;}break;/* AutoFilter */case'autofilter'/*case 'AutoFilter'*/:switch(Rn[3]){case'autofiltercolumn'/*case 'AutoFilterColumn'*/:break;case'autofiltercondition'/*case 'AutoFilterCondition'*/:break;case'autofilterand'/*case 'AutoFilterAnd'*/:break;case'autofilteror'/*case 'AutoFilterOr'*/:break;default:seen=false;}break;/* QueryTable */case'querytable'/*case 'QueryTable'*/:switch(Rn[3]){case'id'/*case 'Id'*/:break;case'autoformatfont'/*case 'AutoFormatFont'*/:break;case'autoformatpattern'/*case 'AutoFormatPattern'*/:break;case'querysource'/*case 'QuerySource'*/:break;case'querytype'/*case 'QueryType'*/:break;case'enableredirections'/*case 'EnableRedirections'*/:break;case'refreshedinxl9'/*case 'RefreshedInXl9'*/:break;case'urlstring'/*case 'URLString'*/:break;case'htmltables'/*case 'HTMLTables'*/:break;case'connection'/*case 'Connection'*/:break;case'commandtext'/*case 'CommandText'*/:break;case'refreshinfo'/*case 'RefreshInfo'*/:break;case'notitles'/*case 'NoTitles'*/:break;case'nextid'/*case 'NextId'*/:break;case'columninfo'/*case 'ColumnInfo'*/:break;case'overwritecells'/*case 'OverwriteCells'*/:break;case'donotpromptforfile'/*case 'DoNotPromptForFile'*/:break;case'textwizardsettings'/*case 'TextWizardSettings'*/:break;case'source'/*case 'Source'*/:break;case'number'/*case 'Number'*/:break;case'decimal'/*case 'Decimal'*/:break;case'thousandseparator'/*case 'ThousandSeparator'*/:break;case'trailingminusnumbers'/*case 'TrailingMinusNumbers'*/:break;case'formatsettings'/*case 'FormatSettings'*/:break;case'fieldtype'/*case 'FieldType'*/:break;case'delimiters'/*case 'Delimiters'*/:break;case'tab'/*case 'Tab'*/:break;case'comma'/*case 'Comma'*/:break;case'autoformatname'/*case 'AutoFormatName'*/:break;case'versionlastedit'/*case 'VersionLastEdit'*/:break;case'versionlastrefresh'/*case 'VersionLastRefresh'*/:break;default:seen=false;}break;case'datavalidation'/*case 'DataValidation'*/:switch(Rn[3]){case'range'/*case 'Range'*/:break;case'type'/*case 'Type'*/:break;case'min'/*case 'Min'*/:break;case'max'/*case 'Max'*/:break;case'sort'/*case 'Sort'*/:break;case'descending'/*case 'Descending'*/:break;case'order'/*case 'Order'*/:break;case'casesensitive'/*case 'CaseSensitive'*/:break;case'value'/*case 'Value'*/:break;case'errorstyle'/*case 'ErrorStyle'*/:break;case'errormessage'/*case 'ErrorMessage'*/:break;case'errortitle'/*case 'ErrorTitle'*/:break;case'inputmessage'/*case 'InputMessage'*/:break;case'inputtitle'/*case 'InputTitle'*/:break;case'combohide'/*case 'ComboHide'*/:break;case'inputhide'/*case 'InputHide'*/:break;case'condition'/*case 'Condition'*/:break;case'qualifier'/*case 'Qualifier'*/:break;case'useblank'/*case 'UseBlank'*/:break;case'value1'/*case 'Value1'*/:break;case'value2'/*case 'Value2'*/:break;case'format'/*case 'Format'*/:break;case'cellrangelist'/*case 'CellRangeList'*/:break;default:seen=false;}break;case'sorting'/*case 'Sorting'*/:case'conditionalformatting'/*case 'ConditionalFormatting'*/:switch(Rn[3]){case'range'/*case 'Range'*/:break;case'type'/*case 'Type'*/:break;case'min'/*case 'Min'*/:break;case'max'/*case 'Max'*/:break;case'sort'/*case 'Sort'*/:break;case'descending'/*case 'Descending'*/:break;case'order'/*case 'Order'*/:break;case'casesensitive'/*case 'CaseSensitive'*/:break;case'value'/*case 'Value'*/:break;case'errorstyle'/*case 'ErrorStyle'*/:break;case'errormessage'/*case 'ErrorMessage'*/:break;case'errortitle'/*case 'ErrorTitle'*/:break;case'cellrangelist'/*case 'CellRangeList'*/:break;case'inputmessage'/*case 'InputMessage'*/:break;case'inputtitle'/*case 'InputTitle'*/:break;case'combohide'/*case 'ComboHide'*/:break;case'inputhide'/*case 'InputHide'*/:break;case'condition'/*case 'Condition'*/:break;case'qualifier'/*case 'Qualifier'*/:break;case'useblank'/*case 'UseBlank'*/:break;case'value1'/*case 'Value1'*/:break;case'value2'/*case 'Value2'*/:break;case'format'/*case 'Format'*/:break;default:seen=false;}break;/* MapInfo (schema) */case'mapinfo'/*case 'MapInfo'*/:case'schema'/*case 'Schema'*/:case'data'/*case 'data'*/:switch(Rn[3]){case'map'/*case 'Map'*/:break;case'entry'/*case 'Entry'*/:break;case'range'/*case 'Range'*/:break;case'xpath'/*case 'XPath'*/:break;case'field'/*case 'Field'*/:break;case'xsdtype'/*case 'XSDType'*/:break;case'filteron'/*case 'FilterOn'*/:break;case'aggregate'/*case 'Aggregate'*/:break;case'elementtype'/*case 'ElementType'*/:break;case'attributetype'/*case 'AttributeType'*/:break;/* These are from xsd (XML Schema Definition) */case'schema'/*case 'schema'*/:case'element'/*case 'element'*/:case'complextype'/*case 'complexType'*/:case'datatype'/*case 'datatype'*/:case'all'/*case 'all'*/:case'attribute'/*case 'attribute'*/:case'extends'/*case 'extends'*/:break;case'row'/*case 'row'*/:break;default:seen=false;}break;/* SmartTags (can be anything) */case'smarttags'/*case 'SmartTags'*/:break;default:seen=false;break;}if(seen)break;/* CustomDocumentProperties */if(Rn[3].match(/!\[CDATA/))break;if(!state[state.length-1][1])throw 'Unrecognized tag: '+Rn[3]+"|"+state.join("|");if(state[state.length-1][0]===/*'CustomDocumentProperties'*/'customdocumentproperties'){if(Rn[0].slice(-2)==="/>")break;else if(Rn[1]==="/")xlml_set_custprop(Custprops,raw_Rn3,cp,str.slice(pidx,Rn.index));else {cp=Rn;pidx=Rn.index+Rn[0].length;}break;}if(opts.WTF)throw 'Unrecognized tag: '+Rn[3]+"|"+state.join("|");}var out={}/*:any*/;if(!opts.bookSheets&&!opts.bookProps)out.Sheets=sheets;out.SheetNames=sheetnames;out.Workbook=Workbook;out.SSF=dup(table_fmt);out.Props=Props;out.Custprops=Custprops;return out;}function parse_xlml(data/*:RawBytes|string*/,opts)/*:Workbook*/{fix_read_opts(opts=opts||{});switch(opts.type||"base64"){case"base64":return parse_xlml_xml(Base64_decode(data),opts);case"binary":case"buffer":case"file":return parse_xlml_xml(data,opts);case"array":return parse_xlml_xml(a2s(data),opts);}/*:: throw new Error("unsupported type " + opts.type); */}/* [MS-OLEDS] 2.3.8 CompObjStream */function parse_compobj(obj/*:CFBEntry*/){var v={};var o=obj.content;/*:: if(o == null) return; */ /* [MS-OLEDS] 2.3.7 CompObjHeader -- All fields MUST be ignored */o.l=28;v.AnsiUserType=o.read_shift(0,"lpstr-ansi");v.AnsiClipboardFormat=parse_ClipboardFormatOrAnsiString(o);if(o.length-o.l<=4)return v;var m/*:number*/=o.read_shift(4);if(m==0||m>40)return v;o.l-=4;v.Reserved1=o.read_shift(0,"lpstr-ansi");if(o.length-o.l<=4)return v;m=o.read_shift(4);if(m!==0x71b239f4)return v;v.UnicodeClipboardFormat=parse_ClipboardFormatOrUnicodeString(o);m=o.read_shift(4);if(m==0||m>40)return v;o.l-=4;v.Reserved2=o.read_shift(0,"lpwstr");}/*
		Continue logic for:
		- 2.4.58 Continue          0x003c
		- 2.4.59 ContinueBigName   0x043c
		- 2.4.60 ContinueFrt       0x0812
		- 2.4.61 ContinueFrt11     0x0875
		- 2.4.62 ContinueFrt12     0x087f
	*/var CONTINUE_RT=[0x003c,0x043c,0x0812,0x0875,0x087f];function slurp(RecordType,R,blob,length/*:number*/,opts)/*:any*/{var l=length;var bufs=[];var d=blob.slice(blob.l,blob.l+l);if(opts&&opts.enc&&opts.enc.insitu&&d.length>0)switch(RecordType){case 0x0009:case 0x0209:case 0x0409:case 0x0809/* BOF */:case 0x002f/* FilePass */:case 0x0195/* FileLock */:case 0x00e1/* InterfaceHdr */:case 0x0196/* RRDInfo */:case 0x0138/* RRDHead */:case 0x0194/* UsrExcl */:case 0x000a/* EOF */:break;case 0x0085/* BoundSheet8 */:break;default:opts.enc.insitu(d);}bufs.push(d);blob.l+=l;var nextrt=__readUInt16LE(blob,blob.l),next=XLSRecordEnum[nextrt];var start=0;while(next!=null&&CONTINUE_RT.indexOf(nextrt)>-1){l=__readUInt16LE(blob,blob.l+2);start=blob.l+4;if(nextrt==0x0812/* ContinueFrt */)start+=4;else if(nextrt==0x0875||nextrt==0x087f){start+=12;}d=blob.slice(start,blob.l+4+l);bufs.push(d);blob.l+=4+l;next=XLSRecordEnum[nextrt=__readUInt16LE(blob,blob.l)];}var b=bconcat(bufs)/*:any*/;prep_blob(b,0);var ll=0;b.lens=[];for(var j=0;j<bufs.length;++j){b.lens.push(ll);ll+=bufs[j].length;}if(b.length<length)throw "XLS Record 0x"+RecordType.toString(16)+" Truncated: "+b.length+" < "+length;return R.f(b,b.length,opts);}function safe_format_xf(p/*:any*/,opts/*:ParseOpts*/,date1904/*:?boolean*/){if(p.t==='z')return;if(!p.XF)return;var fmtid=0;try{fmtid=p.z||p.XF.numFmtId||0;if(opts.cellNF)p.z=table_fmt[fmtid];}catch(e){if(opts.WTF)throw e;}if(!opts||opts.cellText!==false)try{if(p.t==='e'){p.w=p.w||BErr[p.v];}else if(fmtid===0||fmtid=="General"){if(p.t==='n'){if((p.v|0)===p.v)p.w=p.v.toString(10);else p.w=SSF_general_num(p.v);}else p.w=SSF_general(p.v);}else p.w=SSF_format(fmtid,p.v,{date1904:!!date1904,dateNF:opts&&opts.dateNF});}catch(e){if(opts.WTF)throw e;}if(opts.cellDates&&fmtid&&p.t=='n'&&fmt_is_date(table_fmt[fmtid]||String(fmtid))){var _d=SSF_parse_date_code(p.v);if(_d){p.t='d';p.v=new Date(_d.y,_d.m-1,_d.d,_d.H,_d.M,_d.S,_d.u);}}}function make_cell(val,ixfe,t)/*:Cell*/{return {v:val,ixfe:ixfe,t:t}/*:any*/;}// 2.3.2
	function parse_workbook(blob,options/*:ParseOpts*/)/*:Workbook*/{var wb={opts:{}}/*:any*/;var Sheets={};var out/*:Worksheet*/=options.dense?[]:{}/*:any*/;var Directory={};var range/*:Range*/={}/*:any*/;var last_formula=null;var sst/*:SST*/=[]/*:any*/;var cur_sheet="";var Preamble={};var lastcell,last_cell="",cc/*:Cell*/,cmnt,rngC,rngR;var sharedf={};var arrayf/*:Array<[Range, string]>*/=[];var temp_val/*:Cell*/;var country;var XFs=[];/* XF records */var palette/*:Array<[number, number, number]>*/=[];var Workbook/*:WBWBProps*/={Sheets:[],WBProps:{date1904:false},Views:[{}]}/*:any*/,wsprops={};var get_rgb=function getrgb(icv/*:number*/)/*:[number, number, number]*/{if(icv<8)return XLSIcv[icv];if(icv<64)return palette[icv-8]||XLSIcv[icv];return XLSIcv[icv];};var process_cell_style=function pcs(cell,line/*:any*/,options){var xfd=line.XF.data;if(!xfd||!xfd.patternType||!options||!options.cellStyles)return;line.s={}/*:any*/;line.s.patternType=xfd.patternType;var t;if(t=rgb2Hex(get_rgb(xfd.icvFore))){line.s.fgColor={rgb:t};}if(t=rgb2Hex(get_rgb(xfd.icvBack))){line.s.bgColor={rgb:t};}};var addcell=function addcell(cell/*:any*/,line/*:any*/,options/*:any*/){if(file_depth>1)return;if(options.sheetRows&&cell.r>=options.sheetRows)return;if(options.cellStyles&&line.XF&&line.XF.data)process_cell_style(cell,line,options);delete line.ixfe;delete line.XF;lastcell=cell;last_cell=encode_cell(cell);if(!range||!range.s||!range.e)range={s:{r:0,c:0},e:{r:0,c:0}};if(cell.r<range.s.r)range.s.r=cell.r;if(cell.c<range.s.c)range.s.c=cell.c;if(cell.r+1>range.e.r)range.e.r=cell.r+1;if(cell.c+1>range.e.c)range.e.c=cell.c+1;if(options.cellFormula&&line.f){for(var afi=0;afi<arrayf.length;++afi){if(arrayf[afi][0].s.c>cell.c||arrayf[afi][0].s.r>cell.r)continue;if(arrayf[afi][0].e.c<cell.c||arrayf[afi][0].e.r<cell.r)continue;line.F=encode_range(arrayf[afi][0]);if(arrayf[afi][0].s.c!=cell.c||arrayf[afi][0].s.r!=cell.r)delete line.f;if(line.f)line.f=""+stringify_formula(arrayf[afi][1],range,cell,supbooks,opts);break;}}{if(options.dense){if(!out[cell.r])out[cell.r]=[];out[cell.r][cell.c]=line;}else out[last_cell]=line;}};var opts={enc:false,// encrypted
	sbcch:0,// cch in the preceding SupBook
	snames:[],// sheetnames
	sharedf:sharedf,// shared formulae by address
	arrayf:arrayf,// array formulae array
	rrtabid:[],// RRTabId
	lastuser:"",// Last User from WriteAccess
	biff:8,// BIFF version
	codepage:0,// CP from CodePage record
	winlocked:0,// fLockWn from WinProtect
	cellStyles:!!options&&!!options.cellStyles,WTF:!!options&&!!options.wtf}/*:any*/;if(options.password)opts.password=options.password;var themes;var merges/*:Array<Range>*/=[];var objects=[];var colinfo/*:Array<ColInfo>*/=[],rowinfo/*:Array<RowInfo>*/=[];var seencol=false;var supbooks=[]/*:any*/;// 1-indexed, will hold extern names
	supbooks.SheetNames=opts.snames;supbooks.sharedf=opts.sharedf;supbooks.arrayf=opts.arrayf;supbooks.names=[];supbooks.XTI=[];var last_RT=0;var file_depth=0;/* TODO: make a real stack */var BIFF2Fmt=0,BIFF2FmtTable/*:Array<string>*/=[];var FilterDatabases=[];/* TODO: sort out supbooks and process elsewhere */var last_lbl/*:?DefinedName*/;/* explicit override for some broken writers */opts.codepage=1200;set_cp(1200);var seen_codepage=false;while(blob.l<blob.length-1){var s=blob.l;var RecordType=blob.read_shift(2);if(RecordType===0&&last_RT===0x000a/* EOF */)break;var length=blob.l===blob.length?0:blob.read_shift(2);var R=XLSRecordEnum[RecordType];//console.log(RecordType.toString(16), RecordType, R, blob.l, length, blob.length);
	//if(!R) console.log(blob.slice(blob.l, blob.l + length));
	if(R&&R.f){if(options.bookSheets){if(last_RT===0x0085/* BoundSheet8 */&&RecordType!==0x0085/* R.n !== 'BoundSheet8' */)break;}last_RT=RecordType;if(R.r===2||R.r==12){var rt=blob.read_shift(2);length-=2;if(!opts.enc&&rt!==RecordType&&((rt&0xFF)<<8|rt>>8)!==RecordType)throw new Error("rt mismatch: "+rt+"!="+RecordType);if(R.r==12){blob.l+=10;length-=10;}// skip FRT
	}//console.error(R,blob.l,length,blob.length);
	var val/*:any*/={}/*:any*/;if(RecordType===0x000a/* EOF */)val=/*::(*/R.f(blob,length,opts)/*:: :any)*/;else val=/*::(*/slurp(RecordType,R,blob,length,opts)/*:: :any)*/;/*:: val = (val:any); */if(file_depth==0&&[0x0009,0x0209,0x0409,0x0809].indexOf(last_RT)===-1/* 'BOF' */)continue;switch(RecordType){case 0x0022/* Date1904 */:/*:: if(!Workbook.WBProps) Workbook.WBProps = {}; */wb.opts.Date1904=Workbook.WBProps.date1904=val;break;case 0x0086/* WriteProtect */:wb.opts.WriteProtect=true;break;case 0x002f/* FilePass */:if(!opts.enc)blob.l=0;opts.enc=val;if(!options.password)throw new Error("File is password-protected");if(val.valid==null)throw new Error("Encryption scheme unsupported");if(!val.valid)throw new Error("Password is incorrect");break;case 0x005c/* WriteAccess */:opts.lastuser=val;break;case 0x0042/* CodePage */:var cpval=Number(val);/* overrides based on test cases */switch(cpval){case 0x5212:cpval=1200;break;case 0x8000:cpval=10000;break;case 0x8001:cpval=1252;break;}set_cp(opts.codepage=cpval);seen_codepage=true;break;case 0x013d/* RRTabId */:opts.rrtabid=val;break;case 0x0019/* WinProtect */:opts.winlocked=val;break;case 0x01b7/* RefreshAll */:wb.opts["RefreshAll"]=val;break;case 0x000c/* CalcCount */:wb.opts["CalcCount"]=val;break;case 0x0010/* CalcDelta */:wb.opts["CalcDelta"]=val;break;case 0x0011/* CalcIter */:wb.opts["CalcIter"]=val;break;case 0x000d/* CalcMode */:wb.opts["CalcMode"]=val;break;case 0x000e/* CalcPrecision */:wb.opts["CalcPrecision"]=val;break;case 0x005f/* CalcSaveRecalc */:wb.opts["CalcSaveRecalc"]=val;break;case 0x000f/* CalcRefMode */:opts.CalcRefMode=val;break;// TODO: implement R1C1
	case 0x08a3/* ForceFullCalculation */:wb.opts.FullCalc=val;break;case 0x0081/* WsBool */:if(val.fDialog)out["!type"]="dialog";if(!val.fBelow)(out["!outline"]||(out["!outline"]={})).above=true;if(!val.fRight)(out["!outline"]||(out["!outline"]={})).left=true;break;// TODO
	case 0x00e0/* XF */:XFs.push(val);break;case 0x01ae/* SupBook */:supbooks.push([val]);supbooks[supbooks.length-1].XTI=[];break;case 0x0023:case 0x0223/* ExternName */:supbooks[supbooks.length-1].push(val);break;case 0x0018:case 0x0218/* Lbl */:last_lbl={Name:val.Name,Ref:stringify_formula(val.rgce,range,null,supbooks,opts)}/*:DefinedName*/;if(val.itab>0)last_lbl.Sheet=val.itab-1;supbooks.names.push(last_lbl);if(!supbooks[0]){supbooks[0]=[];supbooks[0].XTI=[];}supbooks[supbooks.length-1].push(val);if(val.Name=="_xlnm._FilterDatabase"&&val.itab>0)if(val.rgce&&val.rgce[0]&&val.rgce[0][0]&&val.rgce[0][0][0]=='PtgArea3d')FilterDatabases[val.itab-1]={ref:encode_range(val.rgce[0][0][1][2])};break;case 0x0016/* ExternCount */:opts.ExternCount=val;break;case 0x0017/* ExternSheet */:if(supbooks.length==0){supbooks[0]=[];supbooks[0].XTI=[];}supbooks[supbooks.length-1].XTI=supbooks[supbooks.length-1].XTI.concat(val);supbooks.XTI=supbooks.XTI.concat(val);break;case 0x0894/* NameCmt */:/* TODO: search for correct name */if(opts.biff<8)break;if(last_lbl!=null)last_lbl.Comment=val[1];break;case 0x0012/* Protect */:out["!protect"]=val;break;/* for sheet or book */case 0x0013/* Password */:if(val!==0&&opts.WTF)console.error("Password verifier: "+val);break;case 0x0085/* BoundSheet8 */:{Directory[val.pos]=val;opts.snames.push(val.name);}break;case 0x000a/* EOF */:{if(--file_depth)break;if(range.e){if(range.e.r>0&&range.e.c>0){range.e.r--;range.e.c--;out["!ref"]=encode_range(range);if(options.sheetRows&&options.sheetRows<=range.e.r){var tmpri=range.e.r;range.e.r=options.sheetRows-1;out["!fullref"]=out["!ref"];out["!ref"]=encode_range(range);range.e.r=tmpri;}range.e.r++;range.e.c++;}if(merges.length>0)out["!merges"]=merges;if(objects.length>0)out["!objects"]=objects;if(colinfo.length>0)out["!cols"]=colinfo;if(rowinfo.length>0)out["!rows"]=rowinfo;Workbook.Sheets.push(wsprops);}if(cur_sheet==="")Preamble=out;else Sheets[cur_sheet]=out;out=options.dense?[]:{}/*:any*/;}break;case 0x0009:case 0x0209:case 0x0409:case 0x0809/* BOF */:{if(opts.biff===8)opts.biff={/*::[*/0x0009/*::]*/:2,/*::[*/0x0209/*::]*/:3,/*::[*/0x0409/*::]*/:4}[RecordType]||{/*::[*/0x0200/*::]*/:2,/*::[*/0x0300/*::]*/:3,/*::[*/0x0400/*::]*/:4,/*::[*/0x0500/*::]*/:5,/*::[*/0x0600/*::]*/:8,/*::[*/0x0002/*::]*/:2,/*::[*/0x0007/*::]*/:2}[val.BIFFVer]||8;opts.biffguess=val.BIFFVer==0;if(val.BIFFVer==0&&val.dt==0x1000){opts.biff=5;seen_codepage=true;set_cp(opts.codepage=28591);}if(opts.biff==8&&val.BIFFVer==0&&val.dt==16)opts.biff=2;if(file_depth++)break;out=options.dense?[]:{}/*:any*/;if(opts.biff<8&&!seen_codepage){seen_codepage=true;set_cp(opts.codepage=options.codepage||1252);}if(opts.biff<5||val.BIFFVer==0&&val.dt==0x1000){if(cur_sheet==="")cur_sheet="Sheet1";range={s:{r:0,c:0},e:{r:0,c:0}};/* fake BoundSheet8 */var fakebs8={pos:blob.l-length,name:cur_sheet};Directory[fakebs8.pos]=fakebs8;opts.snames.push(cur_sheet);}else cur_sheet=(Directory[s]||{name:""}).name;if(val.dt==0x20)out["!type"]="chart";if(val.dt==0x40)out["!type"]="macro";merges=[];objects=[];opts.arrayf=arrayf=[];colinfo=[];rowinfo=[];seencol=false;wsprops={Hidden:(Directory[s]||{hs:0}).hs,name:cur_sheet};}break;case 0x0203/* Number */:case 0x0003/* BIFF2NUM */:case 0x0002/* BIFF2INT */:{if(out["!type"]=="chart")if(options.dense?(out[val.r]||[])[val.c]:out[encode_cell({c:val.c,r:val.r})])++val.c;temp_val={ixfe:val.ixfe,XF:XFs[val.ixfe]||{},v:val.val,t:'n'}/*:any*/;if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);}break;case 0x0005:case 0x0205/* BoolErr */:{temp_val={ixfe:val.ixfe,XF:XFs[val.ixfe],v:val.val,t:val.t}/*:any*/;if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);}break;case 0x027e/* RK */:{temp_val={ixfe:val.ixfe,XF:XFs[val.ixfe],v:val.rknum,t:'n'}/*:any*/;if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);}break;case 0x00bd/* MulRk */:{for(var j=val.c;j<=val.C;++j){var ixfe=val.rkrec[j-val.c][0];temp_val={ixfe:ixfe,XF:XFs[ixfe],v:val.rkrec[j-val.c][1],t:'n'}/*:any*/;if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:j,r:val.r},temp_val,options);}}break;case 0x0006:case 0x0206:case 0x0406/* Formula */:{if(val.val=='String'){last_formula=val;break;}temp_val=make_cell(val.val,val.cell.ixfe,val.tt);temp_val.XF=XFs[temp_val.ixfe];if(options.cellFormula){var _f=val.formula;if(_f&&_f[0]&&_f[0][0]&&_f[0][0][0]=='PtgExp'){var _fr=_f[0][0][1][0],_fc=_f[0][0][1][1];var _fe=encode_cell({r:_fr,c:_fc});if(sharedf[_fe])temp_val.f=""+stringify_formula(val.formula,range,val.cell,supbooks,opts);else temp_val.F=((options.dense?(out[_fr]||[])[_fc]:out[_fe])||{}).F;}else temp_val.f=""+stringify_formula(val.formula,range,val.cell,supbooks,opts);}if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell(val.cell,temp_val,options);last_formula=val;}break;case 0x0007:case 0x0207/* String */:{if(last_formula){/* technically always true */last_formula.val=val;temp_val=make_cell(val,last_formula.cell.ixfe,'s');temp_val.XF=XFs[temp_val.ixfe];if(options.cellFormula){temp_val.f=""+stringify_formula(last_formula.formula,range,last_formula.cell,supbooks,opts);}if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell(last_formula.cell,temp_val,options);last_formula=null;}else throw new Error("String record expects Formula");}break;case 0x0021:case 0x0221/* Array */:{arrayf.push(val);var _arraystart=encode_cell(val[0].s);cc=options.dense?(out[val[0].s.r]||[])[val[0].s.c]:out[_arraystart];if(options.cellFormula&&cc){if(!last_formula)break;/* technically unreachable */if(!_arraystart||!cc)break;cc.f=""+stringify_formula(val[1],range,val[0],supbooks,opts);cc.F=encode_range(val[0]);}}break;case 0x04bc/* ShrFmla */:{if(!options.cellFormula)break;if(last_cell){/* TODO: capture range */if(!last_formula)break;/* technically unreachable */sharedf[encode_cell(last_formula.cell)]=val[0];cc=options.dense?(out[last_formula.cell.r]||[])[last_formula.cell.c]:out[encode_cell(last_formula.cell)];(cc||{}).f=""+stringify_formula(val[0],range,lastcell,supbooks,opts);}}break;case 0x00fd/* LabelSst */:temp_val=make_cell(sst[val.isst].t,val.ixfe,'s');if(sst[val.isst].h)temp_val.h=sst[val.isst].h;temp_val.XF=XFs[temp_val.ixfe];if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);break;case 0x0201/* Blank */:if(options.sheetStubs){temp_val={ixfe:val.ixfe,XF:XFs[val.ixfe],t:'z'}/*:any*/;if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);}break;case 0x00be/* MulBlank */:if(options.sheetStubs){for(var _j=val.c;_j<=val.C;++_j){var _ixfe=val.ixfe[_j-val.c];temp_val={ixfe:_ixfe,XF:XFs[_ixfe],t:'z'}/*:any*/;if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:_j,r:val.r},temp_val,options);}}break;case 0x00d6/* RString */:case 0x0204/* Label */:case 0x0004/* BIFF2STR */:temp_val=make_cell(val.val,val.ixfe,'s');temp_val.XF=XFs[temp_val.ixfe];if(BIFF2Fmt>0)temp_val.z=BIFF2FmtTable[temp_val.ixfe>>8&0x3F];safe_format_xf(temp_val,options,wb.opts.Date1904);addcell({c:val.c,r:val.r},temp_val,options);break;case 0x0000:case 0x0200/* Dimensions */:{if(file_depth===1)range=val;/* TODO: stack */}break;case 0x00fc/* SST */:{sst=val;}break;case 0x041e/* Format */:{/* val = [id, fmt] */if(opts.biff==4){BIFF2FmtTable[BIFF2Fmt++]=val[1];for(var b4idx=0;b4idx<BIFF2Fmt+163;++b4idx)if(table_fmt[b4idx]==val[1])break;if(b4idx>=163)SSF_load(val[1],BIFF2Fmt+163);}else SSF_load(val[1],val[0]);}break;case 0x001e/* BIFF2FORMAT */:{BIFF2FmtTable[BIFF2Fmt++]=val;for(var b2idx=0;b2idx<BIFF2Fmt+163;++b2idx)if(table_fmt[b2idx]==val)break;if(b2idx>=163)SSF_load(val,BIFF2Fmt+163);}break;case 0x00e5/* MergeCells */:merges=merges.concat(val);break;case 0x005d/* Obj */:objects[val.cmo[0]]=opts.lastobj=val;break;case 0x01b6/* TxO */:opts.lastobj.TxO=val;break;case 0x007f/* ImData */:opts.lastobj.ImData=val;break;case 0x01b8/* HLink */:{for(rngR=val[0].s.r;rngR<=val[0].e.r;++rngR)for(rngC=val[0].s.c;rngC<=val[0].e.c;++rngC){cc=options.dense?(out[rngR]||[])[rngC]:out[encode_cell({c:rngC,r:rngR})];if(cc)cc.l=val[1];}}break;case 0x0800/* HLinkTooltip */:{for(rngR=val[0].s.r;rngR<=val[0].e.r;++rngR)for(rngC=val[0].s.c;rngC<=val[0].e.c;++rngC){cc=options.dense?(out[rngR]||[])[rngC]:out[encode_cell({c:rngC,r:rngR})];if(cc&&cc.l)cc.l.Tooltip=val[1];}}break;case 0x001c/* Note */:{if(opts.biff<=5&&opts.biff>=2)break;/* TODO: BIFF5 */cc=options.dense?(out[val[0].r]||[])[val[0].c]:out[encode_cell(val[0])];var noteobj=objects[val[2]];if(!cc){if(options.dense){if(!out[val[0].r])out[val[0].r]=[];cc=out[val[0].r][val[0].c]={t:"z"}/*:any*/;}else {cc=out[encode_cell(val[0])]={t:"z"}/*:any*/;}range.e.r=Math.max(range.e.r,val[0].r);range.s.r=Math.min(range.s.r,val[0].r);range.e.c=Math.max(range.e.c,val[0].c);range.s.c=Math.min(range.s.c,val[0].c);}if(!cc.c)cc.c=[];cmnt={a:val[1],t:noteobj.TxO.t};cc.c.push(cmnt);}break;case 0x087d/* XFExt */:update_xfext(XFs[val.ixfe],val.ext);break;case 0x007d/* ColInfo */:{if(!opts.cellStyles)break;while(val.e>=val.s){colinfo[val.e--]={width:val.w/256,level:val.level||0,hidden:!!(val.flags&1)};if(!seencol){seencol=true;find_mdw_colw(val.w/256);}process_col(colinfo[val.e+1]);}}break;case 0x0208/* Row */:{var rowobj={};if(val.level!=null){rowinfo[val.r]=rowobj;rowobj.level=val.level;}if(val.hidden){rowinfo[val.r]=rowobj;rowobj.hidden=true;}if(val.hpt){rowinfo[val.r]=rowobj;rowobj.hpt=val.hpt;rowobj.hpx=pt2px(val.hpt);}}break;case 0x0026/* LeftMargin */:case 0x0027/* RightMargin */:case 0x0028/* TopMargin */:case 0x0029/* BottomMargin */:if(!out['!margins'])default_margins(out['!margins']={});out['!margins'][{0x26:"left",0x27:"right",0x28:"top",0x29:"bottom"}[RecordType]]=val;break;case 0x00a1/* Setup */:// TODO
	if(!out['!margins'])default_margins(out['!margins']={});out['!margins'].header=val.header;out['!margins'].footer=val.footer;break;case 0x023e/* Window2 */:// TODO
	// $FlowIgnore
	if(val.RTL)Workbook.Views[0].RTL=true;break;case 0x0092/* Palette */:palette=val;break;case 0x0896/* Theme */:themes=val;break;case 0x008c/* Country */:country=val;break;case 0x01ba/* CodeName */:{/*:: if(!Workbook.WBProps) Workbook.WBProps = {}; */if(!cur_sheet)Workbook.WBProps.CodeName=val||"ThisWorkbook";else wsprops.CodeName=val||wsprops.name;}break;}}else {if(!R)console.error("Missing Info for XLS Record 0x"+RecordType.toString(16));blob.l+=length;}}wb.SheetNames=keys(Directory).sort(function(a,b){return Number(a)-Number(b);}).map(function(x){return Directory[x].name;});if(!options.bookSheets)wb.Sheets=Sheets;if(!wb.SheetNames.length&&Preamble["!ref"]){wb.SheetNames.push("Sheet1");/*jshint -W069 */if(wb.Sheets)wb.Sheets["Sheet1"]=Preamble;/*jshint +W069 */}else wb.Preamble=Preamble;if(wb.Sheets)FilterDatabases.forEach(function(r,i){wb.Sheets[wb.SheetNames[i]]['!autofilter']=r;});wb.Strings=sst;wb.SSF=dup(table_fmt);if(opts.enc)wb.Encryption=opts.enc;if(themes)wb.Themes=themes;wb.Metadata={};if(country!==undefined)wb.Metadata.Country=country;if(supbooks.names.length>0)Workbook.Names=supbooks.names;wb.Workbook=Workbook;return wb;}/* TODO: split props*/var PSCLSID={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function parse_xls_props(cfb/*:CFBContainer*/,props,o){/* [MS-OSHARED] 2.3.3.2.2 Document Summary Information Property Set */var DSI=CFB.find(cfb,'/!DocumentSummaryInformation');if(DSI&&DSI.size>0)try{var DocSummary=parse_PropertySetStream(DSI,DocSummaryPIDDSI,PSCLSID.DSI);for(var d in DocSummary)props[d]=DocSummary[d];}catch(e){if(o.WTF)throw e;/* empty */}/* [MS-OSHARED] 2.3.3.2.1 Summary Information Property Set*/var SI=CFB.find(cfb,'/!SummaryInformation');if(SI&&SI.size>0)try{var Summary=parse_PropertySetStream(SI,SummaryPIDSI,PSCLSID.SI);for(var s in Summary)if(props[s]==null)props[s]=Summary[s];}catch(e){if(o.WTF)throw e;/* empty */}if(props.HeadingPairs&&props.TitlesOfParts){load_props_pairs(props.HeadingPairs,props.TitlesOfParts,props,o);delete props.HeadingPairs;delete props.TitlesOfParts;}}function parse_xlscfb(cfb/*:any*/,options/*:?ParseOpts*/)/*:Workbook*/{if(!options)options={};fix_read_opts(options);reset_cp();if(options.codepage)set_ansi(options.codepage);var CompObj/*:?CFBEntry*/,WB/*:?any*/;if(cfb.FullPaths){if(CFB.find(cfb,'/encryption'))throw new Error("File is password-protected");CompObj=CFB.find(cfb,'!CompObj');WB=CFB.find(cfb,'/Workbook')||CFB.find(cfb,'/Book');}else {switch(options.type){case'base64':cfb=s2a(Base64_decode(cfb));break;case'binary':cfb=s2a(cfb);break;case'buffer':break;case'array':if(!Array.isArray(cfb))cfb=Array.prototype.slice.call(cfb);break;}prep_blob(cfb,0);WB={content:cfb}/*:any*/;}var/*::CompObjP, */WorkbookP/*:: :Workbook = XLSX.utils.book_new(); */;var _data/*:?any*/;if(CompObj)/*::CompObjP = */parse_compobj(CompObj);if(options.bookProps&&!options.bookSheets)WorkbookP={}/*:any*/;else/*:: if(cfb instanceof CFBContainer) */{var T=has_buf?'buffer':'array';if(WB&&WB.content)WorkbookP=parse_workbook(WB.content,options);/* Quattro Pro 7-8 */else if((_data=CFB.find(cfb,'PerfectOffice_MAIN'))&&_data.content)WorkbookP=WK_.to_workbook(_data.content,(options.type=T,options));/* Quattro Pro 9 */else if((_data=CFB.find(cfb,'NativeContent_MAIN'))&&_data.content)WorkbookP=WK_.to_workbook(_data.content,(options.type=T,options));/* Works 4 for Mac */else if((_data=CFB.find(cfb,'MN0'))&&_data.content)throw new Error("Unsupported Works 4 for Mac file");else throw new Error("Cannot find Workbook stream");if(options.bookVBA&&cfb.FullPaths&&CFB.find(cfb,'/_VBA_PROJECT_CUR/VBA/dir'))WorkbookP.vbaraw=make_vba_xls(cfb);}var props={};if(cfb.FullPaths)parse_xls_props(/*::((*/cfb/*:: :any):CFBContainer)*/,props,options);WorkbookP.Props=WorkbookP.Custprops=props;/* TODO: split up properties */if(options.bookFiles)WorkbookP.cfb=cfb;/*WorkbookP.CompObjP = CompObjP; // TODO: storage? */return WorkbookP;}/* [MS-XLSB] 2.3 Record Enumeration */var XLSBRecordEnum={/*::[*/0x0000/*::]*/:{/* n:"BrtRowHdr", */f:parse_BrtRowHdr},/*::[*/0x0001/*::]*/:{/* n:"BrtCellBlank", */f:parse_BrtCellBlank},/*::[*/0x0002/*::]*/:{/* n:"BrtCellRk", */f:parse_BrtCellRk},/*::[*/0x0003/*::]*/:{/* n:"BrtCellError", */f:parse_BrtCellError},/*::[*/0x0004/*::]*/:{/* n:"BrtCellBool", */f:parse_BrtCellBool},/*::[*/0x0005/*::]*/:{/* n:"BrtCellReal", */f:parse_BrtCellReal},/*::[*/0x0006/*::]*/:{/* n:"BrtCellSt", */f:parse_BrtCellSt},/*::[*/0x0007/*::]*/:{/* n:"BrtCellIsst", */f:parse_BrtCellIsst},/*::[*/0x0008/*::]*/:{/* n:"BrtFmlaString", */f:parse_BrtFmlaString},/*::[*/0x0009/*::]*/:{/* n:"BrtFmlaNum", */f:parse_BrtFmlaNum},/*::[*/0x000A/*::]*/:{/* n:"BrtFmlaBool", */f:parse_BrtFmlaBool},/*::[*/0x000B/*::]*/:{/* n:"BrtFmlaError", */f:parse_BrtFmlaError},/*::[*/0x000C/*::]*/:{/* n:"BrtShortBlank", */f:parse_BrtShortBlank},/*::[*/0x000D/*::]*/:{/* n:"BrtShortRk", */f:parse_BrtShortRk},/*::[*/0x000E/*::]*/:{/* n:"BrtShortError", */f:parse_BrtShortError},/*::[*/0x000F/*::]*/:{/* n:"BrtShortBool", */f:parse_BrtShortBool},/*::[*/0x0010/*::]*/:{/* n:"BrtShortReal", */f:parse_BrtShortReal},/*::[*/0x0011/*::]*/:{/* n:"BrtShortSt", */f:parse_BrtShortSt},/*::[*/0x0012/*::]*/:{/* n:"BrtShortIsst", */f:parse_BrtShortIsst},/*::[*/0x0013/*::]*/:{/* n:"BrtSSTItem", */f:parse_RichStr},/*::[*/0x0014/*::]*/:{/* n:"BrtPCDIMissing" */},/*::[*/0x0015/*::]*/:{/* n:"BrtPCDINumber" */},/*::[*/0x0016/*::]*/:{/* n:"BrtPCDIBoolean" */},/*::[*/0x0017/*::]*/:{/* n:"BrtPCDIError" */},/*::[*/0x0018/*::]*/:{/* n:"BrtPCDIString" */},/*::[*/0x0019/*::]*/:{/* n:"BrtPCDIDatetime" */},/*::[*/0x001A/*::]*/:{/* n:"BrtPCDIIndex" */},/*::[*/0x001B/*::]*/:{/* n:"BrtPCDIAMissing" */},/*::[*/0x001C/*::]*/:{/* n:"BrtPCDIANumber" */},/*::[*/0x001D/*::]*/:{/* n:"BrtPCDIABoolean" */},/*::[*/0x001E/*::]*/:{/* n:"BrtPCDIAError" */},/*::[*/0x001F/*::]*/:{/* n:"BrtPCDIAString" */},/*::[*/0x0020/*::]*/:{/* n:"BrtPCDIADatetime" */},/*::[*/0x0021/*::]*/:{/* n:"BrtPCRRecord" */},/*::[*/0x0022/*::]*/:{/* n:"BrtPCRRecordDt" */},/*::[*/0x0023/*::]*/:{/* n:"BrtFRTBegin", */T:1},/*::[*/0x0024/*::]*/:{/* n:"BrtFRTEnd", */T:-1},/*::[*/0x0025/*::]*/:{/* n:"BrtACBegin", */T:1},/*::[*/0x0026/*::]*/:{/* n:"BrtACEnd", */T:-1},/*::[*/0x0027/*::]*/:{/* n:"BrtName", */f:parse_BrtName},/*::[*/0x0028/*::]*/:{/* n:"BrtIndexRowBlock" */},/*::[*/0x002A/*::]*/:{/* n:"BrtIndexBlock" */},/*::[*/0x002B/*::]*/:{/* n:"BrtFont", */f:parse_BrtFont},/*::[*/0x002C/*::]*/:{/* n:"BrtFmt", */f:parse_BrtFmt},/*::[*/0x002D/*::]*/:{/* n:"BrtFill", */f:parse_BrtFill},/*::[*/0x002E/*::]*/:{/* n:"BrtBorder", */f:parse_BrtBorder},/*::[*/0x002F/*::]*/:{/* n:"BrtXF", */f:parse_BrtXF},/*::[*/0x0030/*::]*/:{/* n:"BrtStyle" */},/*::[*/0x0031/*::]*/:{/* n:"BrtCellMeta", */f:parse_Int32LE},/*::[*/0x0032/*::]*/:{/* n:"BrtValueMeta" */},/*::[*/0x0033/*::]*/:{/* n:"BrtMdb" */f:parse_BrtMdb},/*::[*/0x0034/*::]*/:{/* n:"BrtBeginFmd", */T:1},/*::[*/0x0035/*::]*/:{/* n:"BrtEndFmd", */T:-1},/*::[*/0x0036/*::]*/:{/* n:"BrtBeginMdx", */T:1},/*::[*/0x0037/*::]*/:{/* n:"BrtEndMdx", */T:-1},/*::[*/0x0038/*::]*/:{/* n:"BrtBeginMdxTuple", */T:1},/*::[*/0x0039/*::]*/:{/* n:"BrtEndMdxTuple", */T:-1},/*::[*/0x003A/*::]*/:{/* n:"BrtMdxMbrIstr" */},/*::[*/0x003B/*::]*/:{/* n:"BrtStr" */},/*::[*/0x003C/*::]*/:{/* n:"BrtColInfo", */f:parse_ColInfo},/*::[*/0x003E/*::]*/:{/* n:"BrtCellRString", */f:parse_BrtCellRString},/*::[*/0x003F/*::]*/:{/* n:"BrtCalcChainItem$", */f:parse_BrtCalcChainItem$},/*::[*/0x0040/*::]*/:{/* n:"BrtDVal", */f:parse_BrtDVal},/*::[*/0x0041/*::]*/:{/* n:"BrtSxvcellNum" */},/*::[*/0x0042/*::]*/:{/* n:"BrtSxvcellStr" */},/*::[*/0x0043/*::]*/:{/* n:"BrtSxvcellBool" */},/*::[*/0x0044/*::]*/:{/* n:"BrtSxvcellErr" */},/*::[*/0x0045/*::]*/:{/* n:"BrtSxvcellDate" */},/*::[*/0x0046/*::]*/:{/* n:"BrtSxvcellNil" */},/*::[*/0x0080/*::]*/:{/* n:"BrtFileVersion" */},/*::[*/0x0081/*::]*/:{/* n:"BrtBeginSheet", */T:1},/*::[*/0x0082/*::]*/:{/* n:"BrtEndSheet", */T:-1},/*::[*/0x0083/*::]*/:{/* n:"BrtBeginBook", */T:1,f:parsenoop,p:0},/*::[*/0x0084/*::]*/:{/* n:"BrtEndBook", */T:-1},/*::[*/0x0085/*::]*/:{/* n:"BrtBeginWsViews", */T:1},/*::[*/0x0086/*::]*/:{/* n:"BrtEndWsViews", */T:-1},/*::[*/0x0087/*::]*/:{/* n:"BrtBeginBookViews", */T:1},/*::[*/0x0088/*::]*/:{/* n:"BrtEndBookViews", */T:-1},/*::[*/0x0089/*::]*/:{/* n:"BrtBeginWsView", */T:1,f:parse_BrtBeginWsView},/*::[*/0x008A/*::]*/:{/* n:"BrtEndWsView", */T:-1},/*::[*/0x008B/*::]*/:{/* n:"BrtBeginCsViews", */T:1},/*::[*/0x008C/*::]*/:{/* n:"BrtEndCsViews", */T:-1},/*::[*/0x008D/*::]*/:{/* n:"BrtBeginCsView", */T:1},/*::[*/0x008E/*::]*/:{/* n:"BrtEndCsView", */T:-1},/*::[*/0x008F/*::]*/:{/* n:"BrtBeginBundleShs", */T:1},/*::[*/0x0090/*::]*/:{/* n:"BrtEndBundleShs", */T:-1},/*::[*/0x0091/*::]*/:{/* n:"BrtBeginSheetData", */T:1},/*::[*/0x0092/*::]*/:{/* n:"BrtEndSheetData", */T:-1},/*::[*/0x0093/*::]*/:{/* n:"BrtWsProp", */f:parse_BrtWsProp},/*::[*/0x0094/*::]*/:{/* n:"BrtWsDim", */f:parse_BrtWsDim,p:16},/*::[*/0x0097/*::]*/:{/* n:"BrtPane", */f:parse_BrtPane},/*::[*/0x0098/*::]*/:{/* n:"BrtSel" */},/*::[*/0x0099/*::]*/:{/* n:"BrtWbProp", */f:parse_BrtWbProp},/*::[*/0x009A/*::]*/:{/* n:"BrtWbFactoid" */},/*::[*/0x009B/*::]*/:{/* n:"BrtFileRecover" */},/*::[*/0x009C/*::]*/:{/* n:"BrtBundleSh", */f:parse_BrtBundleSh},/*::[*/0x009D/*::]*/:{/* n:"BrtCalcProp" */},/*::[*/0x009E/*::]*/:{/* n:"BrtBookView" */},/*::[*/0x009F/*::]*/:{/* n:"BrtBeginSst", */T:1,f:parse_BrtBeginSst},/*::[*/0x00A0/*::]*/:{/* n:"BrtEndSst", */T:-1},/*::[*/0x00A1/*::]*/:{/* n:"BrtBeginAFilter", */T:1,f:parse_UncheckedRfX},/*::[*/0x00A2/*::]*/:{/* n:"BrtEndAFilter", */T:-1},/*::[*/0x00A3/*::]*/:{/* n:"BrtBeginFilterColumn", */T:1},/*::[*/0x00A4/*::]*/:{/* n:"BrtEndFilterColumn", */T:-1},/*::[*/0x00A5/*::]*/:{/* n:"BrtBeginFilters", */T:1},/*::[*/0x00A6/*::]*/:{/* n:"BrtEndFilters", */T:-1},/*::[*/0x00A7/*::]*/:{/* n:"BrtFilter" */},/*::[*/0x00A8/*::]*/:{/* n:"BrtColorFilter" */},/*::[*/0x00A9/*::]*/:{/* n:"BrtIconFilter" */},/*::[*/0x00AA/*::]*/:{/* n:"BrtTop10Filter" */},/*::[*/0x00AB/*::]*/:{/* n:"BrtDynamicFilter" */},/*::[*/0x00AC/*::]*/:{/* n:"BrtBeginCustomFilters", */T:1},/*::[*/0x00AD/*::]*/:{/* n:"BrtEndCustomFilters", */T:-1},/*::[*/0x00AE/*::]*/:{/* n:"BrtCustomFilter" */},/*::[*/0x00AF/*::]*/:{/* n:"BrtAFilterDateGroupItem" */},/*::[*/0x00B0/*::]*/:{/* n:"BrtMergeCell", */f:parse_BrtMergeCell},/*::[*/0x00B1/*::]*/:{/* n:"BrtBeginMergeCells", */T:1},/*::[*/0x00B2/*::]*/:{/* n:"BrtEndMergeCells", */T:-1},/*::[*/0x00B3/*::]*/:{/* n:"BrtBeginPivotCacheDef", */T:1},/*::[*/0x00B4/*::]*/:{/* n:"BrtEndPivotCacheDef", */T:-1},/*::[*/0x00B5/*::]*/:{/* n:"BrtBeginPCDFields", */T:1},/*::[*/0x00B6/*::]*/:{/* n:"BrtEndPCDFields", */T:-1},/*::[*/0x00B7/*::]*/:{/* n:"BrtBeginPCDField", */T:1},/*::[*/0x00B8/*::]*/:{/* n:"BrtEndPCDField", */T:-1},/*::[*/0x00B9/*::]*/:{/* n:"BrtBeginPCDSource", */T:1},/*::[*/0x00BA/*::]*/:{/* n:"BrtEndPCDSource", */T:-1},/*::[*/0x00BB/*::]*/:{/* n:"BrtBeginPCDSRange", */T:1},/*::[*/0x00BC/*::]*/:{/* n:"BrtEndPCDSRange", */T:-1},/*::[*/0x00BD/*::]*/:{/* n:"BrtBeginPCDFAtbl", */T:1},/*::[*/0x00BE/*::]*/:{/* n:"BrtEndPCDFAtbl", */T:-1},/*::[*/0x00BF/*::]*/:{/* n:"BrtBeginPCDIRun", */T:1},/*::[*/0x00C0/*::]*/:{/* n:"BrtEndPCDIRun", */T:-1},/*::[*/0x00C1/*::]*/:{/* n:"BrtBeginPivotCacheRecords", */T:1},/*::[*/0x00C2/*::]*/:{/* n:"BrtEndPivotCacheRecords", */T:-1},/*::[*/0x00C3/*::]*/:{/* n:"BrtBeginPCDHierarchies", */T:1},/*::[*/0x00C4/*::]*/:{/* n:"BrtEndPCDHierarchies", */T:-1},/*::[*/0x00C5/*::]*/:{/* n:"BrtBeginPCDHierarchy", */T:1},/*::[*/0x00C6/*::]*/:{/* n:"BrtEndPCDHierarchy", */T:-1},/*::[*/0x00C7/*::]*/:{/* n:"BrtBeginPCDHFieldsUsage", */T:1},/*::[*/0x00C8/*::]*/:{/* n:"BrtEndPCDHFieldsUsage", */T:-1},/*::[*/0x00C9/*::]*/:{/* n:"BrtBeginExtConnection", */T:1},/*::[*/0x00CA/*::]*/:{/* n:"BrtEndExtConnection", */T:-1},/*::[*/0x00CB/*::]*/:{/* n:"BrtBeginECDbProps", */T:1},/*::[*/0x00CC/*::]*/:{/* n:"BrtEndECDbProps", */T:-1},/*::[*/0x00CD/*::]*/:{/* n:"BrtBeginECOlapProps", */T:1},/*::[*/0x00CE/*::]*/:{/* n:"BrtEndECOlapProps", */T:-1},/*::[*/0x00CF/*::]*/:{/* n:"BrtBeginPCDSConsol", */T:1},/*::[*/0x00D0/*::]*/:{/* n:"BrtEndPCDSConsol", */T:-1},/*::[*/0x00D1/*::]*/:{/* n:"BrtBeginPCDSCPages", */T:1},/*::[*/0x00D2/*::]*/:{/* n:"BrtEndPCDSCPages", */T:-1},/*::[*/0x00D3/*::]*/:{/* n:"BrtBeginPCDSCPage", */T:1},/*::[*/0x00D4/*::]*/:{/* n:"BrtEndPCDSCPage", */T:-1},/*::[*/0x00D5/*::]*/:{/* n:"BrtBeginPCDSCPItem", */T:1},/*::[*/0x00D6/*::]*/:{/* n:"BrtEndPCDSCPItem", */T:-1},/*::[*/0x00D7/*::]*/:{/* n:"BrtBeginPCDSCSets", */T:1},/*::[*/0x00D8/*::]*/:{/* n:"BrtEndPCDSCSets", */T:-1},/*::[*/0x00D9/*::]*/:{/* n:"BrtBeginPCDSCSet", */T:1},/*::[*/0x00DA/*::]*/:{/* n:"BrtEndPCDSCSet", */T:-1},/*::[*/0x00DB/*::]*/:{/* n:"BrtBeginPCDFGroup", */T:1},/*::[*/0x00DC/*::]*/:{/* n:"BrtEndPCDFGroup", */T:-1},/*::[*/0x00DD/*::]*/:{/* n:"BrtBeginPCDFGItems", */T:1},/*::[*/0x00DE/*::]*/:{/* n:"BrtEndPCDFGItems", */T:-1},/*::[*/0x00DF/*::]*/:{/* n:"BrtBeginPCDFGRange", */T:1},/*::[*/0x00E0/*::]*/:{/* n:"BrtEndPCDFGRange", */T:-1},/*::[*/0x00E1/*::]*/:{/* n:"BrtBeginPCDFGDiscrete", */T:1},/*::[*/0x00E2/*::]*/:{/* n:"BrtEndPCDFGDiscrete", */T:-1},/*::[*/0x00E3/*::]*/:{/* n:"BrtBeginPCDSDTupleCache", */T:1},/*::[*/0x00E4/*::]*/:{/* n:"BrtEndPCDSDTupleCache", */T:-1},/*::[*/0x00E5/*::]*/:{/* n:"BrtBeginPCDSDTCEntries", */T:1},/*::[*/0x00E6/*::]*/:{/* n:"BrtEndPCDSDTCEntries", */T:-1},/*::[*/0x00E7/*::]*/:{/* n:"BrtBeginPCDSDTCEMembers", */T:1},/*::[*/0x00E8/*::]*/:{/* n:"BrtEndPCDSDTCEMembers", */T:-1},/*::[*/0x00E9/*::]*/:{/* n:"BrtBeginPCDSDTCEMember", */T:1},/*::[*/0x00EA/*::]*/:{/* n:"BrtEndPCDSDTCEMember", */T:-1},/*::[*/0x00EB/*::]*/:{/* n:"BrtBeginPCDSDTCQueries", */T:1},/*::[*/0x00EC/*::]*/:{/* n:"BrtEndPCDSDTCQueries", */T:-1},/*::[*/0x00ED/*::]*/:{/* n:"BrtBeginPCDSDTCQuery", */T:1},/*::[*/0x00EE/*::]*/:{/* n:"BrtEndPCDSDTCQuery", */T:-1},/*::[*/0x00EF/*::]*/:{/* n:"BrtBeginPCDSDTCSets", */T:1},/*::[*/0x00F0/*::]*/:{/* n:"BrtEndPCDSDTCSets", */T:-1},/*::[*/0x00F1/*::]*/:{/* n:"BrtBeginPCDSDTCSet", */T:1},/*::[*/0x00F2/*::]*/:{/* n:"BrtEndPCDSDTCSet", */T:-1},/*::[*/0x00F3/*::]*/:{/* n:"BrtBeginPCDCalcItems", */T:1},/*::[*/0x00F4/*::]*/:{/* n:"BrtEndPCDCalcItems", */T:-1},/*::[*/0x00F5/*::]*/:{/* n:"BrtBeginPCDCalcItem", */T:1},/*::[*/0x00F6/*::]*/:{/* n:"BrtEndPCDCalcItem", */T:-1},/*::[*/0x00F7/*::]*/:{/* n:"BrtBeginPRule", */T:1},/*::[*/0x00F8/*::]*/:{/* n:"BrtEndPRule", */T:-1},/*::[*/0x00F9/*::]*/:{/* n:"BrtBeginPRFilters", */T:1},/*::[*/0x00FA/*::]*/:{/* n:"BrtEndPRFilters", */T:-1},/*::[*/0x00FB/*::]*/:{/* n:"BrtBeginPRFilter", */T:1},/*::[*/0x00FC/*::]*/:{/* n:"BrtEndPRFilter", */T:-1},/*::[*/0x00FD/*::]*/:{/* n:"BrtBeginPNames", */T:1},/*::[*/0x00FE/*::]*/:{/* n:"BrtEndPNames", */T:-1},/*::[*/0x00FF/*::]*/:{/* n:"BrtBeginPName", */T:1},/*::[*/0x0100/*::]*/:{/* n:"BrtEndPName", */T:-1},/*::[*/0x0101/*::]*/:{/* n:"BrtBeginPNPairs", */T:1},/*::[*/0x0102/*::]*/:{/* n:"BrtEndPNPairs", */T:-1},/*::[*/0x0103/*::]*/:{/* n:"BrtBeginPNPair", */T:1},/*::[*/0x0104/*::]*/:{/* n:"BrtEndPNPair", */T:-1},/*::[*/0x0105/*::]*/:{/* n:"BrtBeginECWebProps", */T:1},/*::[*/0x0106/*::]*/:{/* n:"BrtEndECWebProps", */T:-1},/*::[*/0x0107/*::]*/:{/* n:"BrtBeginEcWpTables", */T:1},/*::[*/0x0108/*::]*/:{/* n:"BrtEndECWPTables", */T:-1},/*::[*/0x0109/*::]*/:{/* n:"BrtBeginECParams", */T:1},/*::[*/0x010A/*::]*/:{/* n:"BrtEndECParams", */T:-1},/*::[*/0x010B/*::]*/:{/* n:"BrtBeginECParam", */T:1},/*::[*/0x010C/*::]*/:{/* n:"BrtEndECParam", */T:-1},/*::[*/0x010D/*::]*/:{/* n:"BrtBeginPCDKPIs", */T:1},/*::[*/0x010E/*::]*/:{/* n:"BrtEndPCDKPIs", */T:-1},/*::[*/0x010F/*::]*/:{/* n:"BrtBeginPCDKPI", */T:1},/*::[*/0x0110/*::]*/:{/* n:"BrtEndPCDKPI", */T:-1},/*::[*/0x0111/*::]*/:{/* n:"BrtBeginDims", */T:1},/*::[*/0x0112/*::]*/:{/* n:"BrtEndDims", */T:-1},/*::[*/0x0113/*::]*/:{/* n:"BrtBeginDim", */T:1},/*::[*/0x0114/*::]*/:{/* n:"BrtEndDim", */T:-1},/*::[*/0x0115/*::]*/:{/* n:"BrtIndexPartEnd" */},/*::[*/0x0116/*::]*/:{/* n:"BrtBeginStyleSheet", */T:1},/*::[*/0x0117/*::]*/:{/* n:"BrtEndStyleSheet", */T:-1},/*::[*/0x0118/*::]*/:{/* n:"BrtBeginSXView", */T:1},/*::[*/0x0119/*::]*/:{/* n:"BrtEndSXVI", */T:-1},/*::[*/0x011A/*::]*/:{/* n:"BrtBeginSXVI", */T:1},/*::[*/0x011B/*::]*/:{/* n:"BrtBeginSXVIs", */T:1},/*::[*/0x011C/*::]*/:{/* n:"BrtEndSXVIs", */T:-1},/*::[*/0x011D/*::]*/:{/* n:"BrtBeginSXVD", */T:1},/*::[*/0x011E/*::]*/:{/* n:"BrtEndSXVD", */T:-1},/*::[*/0x011F/*::]*/:{/* n:"BrtBeginSXVDs", */T:1},/*::[*/0x0120/*::]*/:{/* n:"BrtEndSXVDs", */T:-1},/*::[*/0x0121/*::]*/:{/* n:"BrtBeginSXPI", */T:1},/*::[*/0x0122/*::]*/:{/* n:"BrtEndSXPI", */T:-1},/*::[*/0x0123/*::]*/:{/* n:"BrtBeginSXPIs", */T:1},/*::[*/0x0124/*::]*/:{/* n:"BrtEndSXPIs", */T:-1},/*::[*/0x0125/*::]*/:{/* n:"BrtBeginSXDI", */T:1},/*::[*/0x0126/*::]*/:{/* n:"BrtEndSXDI", */T:-1},/*::[*/0x0127/*::]*/:{/* n:"BrtBeginSXDIs", */T:1},/*::[*/0x0128/*::]*/:{/* n:"BrtEndSXDIs", */T:-1},/*::[*/0x0129/*::]*/:{/* n:"BrtBeginSXLI", */T:1},/*::[*/0x012A/*::]*/:{/* n:"BrtEndSXLI", */T:-1},/*::[*/0x012B/*::]*/:{/* n:"BrtBeginSXLIRws", */T:1},/*::[*/0x012C/*::]*/:{/* n:"BrtEndSXLIRws", */T:-1},/*::[*/0x012D/*::]*/:{/* n:"BrtBeginSXLICols", */T:1},/*::[*/0x012E/*::]*/:{/* n:"BrtEndSXLICols", */T:-1},/*::[*/0x012F/*::]*/:{/* n:"BrtBeginSXFormat", */T:1},/*::[*/0x0130/*::]*/:{/* n:"BrtEndSXFormat", */T:-1},/*::[*/0x0131/*::]*/:{/* n:"BrtBeginSXFormats", */T:1},/*::[*/0x0132/*::]*/:{/* n:"BrtEndSxFormats", */T:-1},/*::[*/0x0133/*::]*/:{/* n:"BrtBeginSxSelect", */T:1},/*::[*/0x0134/*::]*/:{/* n:"BrtEndSxSelect", */T:-1},/*::[*/0x0135/*::]*/:{/* n:"BrtBeginISXVDRws", */T:1},/*::[*/0x0136/*::]*/:{/* n:"BrtEndISXVDRws", */T:-1},/*::[*/0x0137/*::]*/:{/* n:"BrtBeginISXVDCols", */T:1},/*::[*/0x0138/*::]*/:{/* n:"BrtEndISXVDCols", */T:-1},/*::[*/0x0139/*::]*/:{/* n:"BrtEndSXLocation", */T:-1},/*::[*/0x013A/*::]*/:{/* n:"BrtBeginSXLocation", */T:1},/*::[*/0x013B/*::]*/:{/* n:"BrtEndSXView", */T:-1},/*::[*/0x013C/*::]*/:{/* n:"BrtBeginSXTHs", */T:1},/*::[*/0x013D/*::]*/:{/* n:"BrtEndSXTHs", */T:-1},/*::[*/0x013E/*::]*/:{/* n:"BrtBeginSXTH", */T:1},/*::[*/0x013F/*::]*/:{/* n:"BrtEndSXTH", */T:-1},/*::[*/0x0140/*::]*/:{/* n:"BrtBeginISXTHRws", */T:1},/*::[*/0x0141/*::]*/:{/* n:"BrtEndISXTHRws", */T:-1},/*::[*/0x0142/*::]*/:{/* n:"BrtBeginISXTHCols", */T:1},/*::[*/0x0143/*::]*/:{/* n:"BrtEndISXTHCols", */T:-1},/*::[*/0x0144/*::]*/:{/* n:"BrtBeginSXTDMPS", */T:1},/*::[*/0x0145/*::]*/:{/* n:"BrtEndSXTDMPs", */T:-1},/*::[*/0x0146/*::]*/:{/* n:"BrtBeginSXTDMP", */T:1},/*::[*/0x0147/*::]*/:{/* n:"BrtEndSXTDMP", */T:-1},/*::[*/0x0148/*::]*/:{/* n:"BrtBeginSXTHItems", */T:1},/*::[*/0x0149/*::]*/:{/* n:"BrtEndSXTHItems", */T:-1},/*::[*/0x014A/*::]*/:{/* n:"BrtBeginSXTHItem", */T:1},/*::[*/0x014B/*::]*/:{/* n:"BrtEndSXTHItem", */T:-1},/*::[*/0x014C/*::]*/:{/* n:"BrtBeginMetadata", */T:1},/*::[*/0x014D/*::]*/:{/* n:"BrtEndMetadata", */T:-1},/*::[*/0x014E/*::]*/:{/* n:"BrtBeginEsmdtinfo", */T:1},/*::[*/0x014F/*::]*/:{/* n:"BrtMdtinfo", */f:parse_BrtMdtinfo},/*::[*/0x0150/*::]*/:{/* n:"BrtEndEsmdtinfo", */T:-1},/*::[*/0x0151/*::]*/:{/* n:"BrtBeginEsmdb", */f:parse_BrtBeginEsmdb,T:1},/*::[*/0x0152/*::]*/:{/* n:"BrtEndEsmdb", */T:-1},/*::[*/0x0153/*::]*/:{/* n:"BrtBeginEsfmd", */T:1},/*::[*/0x0154/*::]*/:{/* n:"BrtEndEsfmd", */T:-1},/*::[*/0x0155/*::]*/:{/* n:"BrtBeginSingleCells", */T:1},/*::[*/0x0156/*::]*/:{/* n:"BrtEndSingleCells", */T:-1},/*::[*/0x0157/*::]*/:{/* n:"BrtBeginList", */T:1},/*::[*/0x0158/*::]*/:{/* n:"BrtEndList", */T:-1},/*::[*/0x0159/*::]*/:{/* n:"BrtBeginListCols", */T:1},/*::[*/0x015A/*::]*/:{/* n:"BrtEndListCols", */T:-1},/*::[*/0x015B/*::]*/:{/* n:"BrtBeginListCol", */T:1},/*::[*/0x015C/*::]*/:{/* n:"BrtEndListCol", */T:-1},/*::[*/0x015D/*::]*/:{/* n:"BrtBeginListXmlCPr", */T:1},/*::[*/0x015E/*::]*/:{/* n:"BrtEndListXmlCPr", */T:-1},/*::[*/0x015F/*::]*/:{/* n:"BrtListCCFmla" */},/*::[*/0x0160/*::]*/:{/* n:"BrtListTrFmla" */},/*::[*/0x0161/*::]*/:{/* n:"BrtBeginExternals", */T:1},/*::[*/0x0162/*::]*/:{/* n:"BrtEndExternals", */T:-1},/*::[*/0x0163/*::]*/:{/* n:"BrtSupBookSrc", */f:parse_RelID},/*::[*/0x0165/*::]*/:{/* n:"BrtSupSelf" */},/*::[*/0x0166/*::]*/:{/* n:"BrtSupSame" */},/*::[*/0x0167/*::]*/:{/* n:"BrtSupTabs" */},/*::[*/0x0168/*::]*/:{/* n:"BrtBeginSupBook", */T:1},/*::[*/0x0169/*::]*/:{/* n:"BrtPlaceholderName" */},/*::[*/0x016A/*::]*/:{/* n:"BrtExternSheet", */f:parse_ExternSheet},/*::[*/0x016B/*::]*/:{/* n:"BrtExternTableStart" */},/*::[*/0x016C/*::]*/:{/* n:"BrtExternTableEnd" */},/*::[*/0x016E/*::]*/:{/* n:"BrtExternRowHdr" */},/*::[*/0x016F/*::]*/:{/* n:"BrtExternCellBlank" */},/*::[*/0x0170/*::]*/:{/* n:"BrtExternCellReal" */},/*::[*/0x0171/*::]*/:{/* n:"BrtExternCellBool" */},/*::[*/0x0172/*::]*/:{/* n:"BrtExternCellError" */},/*::[*/0x0173/*::]*/:{/* n:"BrtExternCellString" */},/*::[*/0x0174/*::]*/:{/* n:"BrtBeginEsmdx", */T:1},/*::[*/0x0175/*::]*/:{/* n:"BrtEndEsmdx", */T:-1},/*::[*/0x0176/*::]*/:{/* n:"BrtBeginMdxSet", */T:1},/*::[*/0x0177/*::]*/:{/* n:"BrtEndMdxSet", */T:-1},/*::[*/0x0178/*::]*/:{/* n:"BrtBeginMdxMbrProp", */T:1},/*::[*/0x0179/*::]*/:{/* n:"BrtEndMdxMbrProp", */T:-1},/*::[*/0x017A/*::]*/:{/* n:"BrtBeginMdxKPI", */T:1},/*::[*/0x017B/*::]*/:{/* n:"BrtEndMdxKPI", */T:-1},/*::[*/0x017C/*::]*/:{/* n:"BrtBeginEsstr", */T:1},/*::[*/0x017D/*::]*/:{/* n:"BrtEndEsstr", */T:-1},/*::[*/0x017E/*::]*/:{/* n:"BrtBeginPRFItem", */T:1},/*::[*/0x017F/*::]*/:{/* n:"BrtEndPRFItem", */T:-1},/*::[*/0x0180/*::]*/:{/* n:"BrtBeginPivotCacheIDs", */T:1},/*::[*/0x0181/*::]*/:{/* n:"BrtEndPivotCacheIDs", */T:-1},/*::[*/0x0182/*::]*/:{/* n:"BrtBeginPivotCacheID", */T:1},/*::[*/0x0183/*::]*/:{/* n:"BrtEndPivotCacheID", */T:-1},/*::[*/0x0184/*::]*/:{/* n:"BrtBeginISXVIs", */T:1},/*::[*/0x0185/*::]*/:{/* n:"BrtEndISXVIs", */T:-1},/*::[*/0x0186/*::]*/:{/* n:"BrtBeginColInfos", */T:1},/*::[*/0x0187/*::]*/:{/* n:"BrtEndColInfos", */T:-1},/*::[*/0x0188/*::]*/:{/* n:"BrtBeginRwBrk", */T:1},/*::[*/0x0189/*::]*/:{/* n:"BrtEndRwBrk", */T:-1},/*::[*/0x018A/*::]*/:{/* n:"BrtBeginColBrk", */T:1},/*::[*/0x018B/*::]*/:{/* n:"BrtEndColBrk", */T:-1},/*::[*/0x018C/*::]*/:{/* n:"BrtBrk" */},/*::[*/0x018D/*::]*/:{/* n:"BrtUserBookView" */},/*::[*/0x018E/*::]*/:{/* n:"BrtInfo" */},/*::[*/0x018F/*::]*/:{/* n:"BrtCUsr" */},/*::[*/0x0190/*::]*/:{/* n:"BrtUsr" */},/*::[*/0x0191/*::]*/:{/* n:"BrtBeginUsers", */T:1},/*::[*/0x0193/*::]*/:{/* n:"BrtEOF" */},/*::[*/0x0194/*::]*/:{/* n:"BrtUCR" */},/*::[*/0x0195/*::]*/:{/* n:"BrtRRInsDel" */},/*::[*/0x0196/*::]*/:{/* n:"BrtRREndInsDel" */},/*::[*/0x0197/*::]*/:{/* n:"BrtRRMove" */},/*::[*/0x0198/*::]*/:{/* n:"BrtRREndMove" */},/*::[*/0x0199/*::]*/:{/* n:"BrtRRChgCell" */},/*::[*/0x019A/*::]*/:{/* n:"BrtRREndChgCell" */},/*::[*/0x019B/*::]*/:{/* n:"BrtRRHeader" */},/*::[*/0x019C/*::]*/:{/* n:"BrtRRUserView" */},/*::[*/0x019D/*::]*/:{/* n:"BrtRRRenSheet" */},/*::[*/0x019E/*::]*/:{/* n:"BrtRRInsertSh" */},/*::[*/0x019F/*::]*/:{/* n:"BrtRRDefName" */},/*::[*/0x01A0/*::]*/:{/* n:"BrtRRNote" */},/*::[*/0x01A1/*::]*/:{/* n:"BrtRRConflict" */},/*::[*/0x01A2/*::]*/:{/* n:"BrtRRTQSIF" */},/*::[*/0x01A3/*::]*/:{/* n:"BrtRRFormat" */},/*::[*/0x01A4/*::]*/:{/* n:"BrtRREndFormat" */},/*::[*/0x01A5/*::]*/:{/* n:"BrtRRAutoFmt" */},/*::[*/0x01A6/*::]*/:{/* n:"BrtBeginUserShViews", */T:1},/*::[*/0x01A7/*::]*/:{/* n:"BrtBeginUserShView", */T:1},/*::[*/0x01A8/*::]*/:{/* n:"BrtEndUserShView", */T:-1},/*::[*/0x01A9/*::]*/:{/* n:"BrtEndUserShViews", */T:-1},/*::[*/0x01AA/*::]*/:{/* n:"BrtArrFmla", */f:parse_BrtArrFmla},/*::[*/0x01AB/*::]*/:{/* n:"BrtShrFmla", */f:parse_BrtShrFmla},/*::[*/0x01AC/*::]*/:{/* n:"BrtTable" */},/*::[*/0x01AD/*::]*/:{/* n:"BrtBeginExtConnections", */T:1},/*::[*/0x01AE/*::]*/:{/* n:"BrtEndExtConnections", */T:-1},/*::[*/0x01AF/*::]*/:{/* n:"BrtBeginPCDCalcMems", */T:1},/*::[*/0x01B0/*::]*/:{/* n:"BrtEndPCDCalcMems", */T:-1},/*::[*/0x01B1/*::]*/:{/* n:"BrtBeginPCDCalcMem", */T:1},/*::[*/0x01B2/*::]*/:{/* n:"BrtEndPCDCalcMem", */T:-1},/*::[*/0x01B3/*::]*/:{/* n:"BrtBeginPCDHGLevels", */T:1},/*::[*/0x01B4/*::]*/:{/* n:"BrtEndPCDHGLevels", */T:-1},/*::[*/0x01B5/*::]*/:{/* n:"BrtBeginPCDHGLevel", */T:1},/*::[*/0x01B6/*::]*/:{/* n:"BrtEndPCDHGLevel", */T:-1},/*::[*/0x01B7/*::]*/:{/* n:"BrtBeginPCDHGLGroups", */T:1},/*::[*/0x01B8/*::]*/:{/* n:"BrtEndPCDHGLGroups", */T:-1},/*::[*/0x01B9/*::]*/:{/* n:"BrtBeginPCDHGLGroup", */T:1},/*::[*/0x01BA/*::]*/:{/* n:"BrtEndPCDHGLGroup", */T:-1},/*::[*/0x01BB/*::]*/:{/* n:"BrtBeginPCDHGLGMembers", */T:1},/*::[*/0x01BC/*::]*/:{/* n:"BrtEndPCDHGLGMembers", */T:-1},/*::[*/0x01BD/*::]*/:{/* n:"BrtBeginPCDHGLGMember", */T:1},/*::[*/0x01BE/*::]*/:{/* n:"BrtEndPCDHGLGMember", */T:-1},/*::[*/0x01BF/*::]*/:{/* n:"BrtBeginQSI", */T:1},/*::[*/0x01C0/*::]*/:{/* n:"BrtEndQSI", */T:-1},/*::[*/0x01C1/*::]*/:{/* n:"BrtBeginQSIR", */T:1},/*::[*/0x01C2/*::]*/:{/* n:"BrtEndQSIR", */T:-1},/*::[*/0x01C3/*::]*/:{/* n:"BrtBeginDeletedNames", */T:1},/*::[*/0x01C4/*::]*/:{/* n:"BrtEndDeletedNames", */T:-1},/*::[*/0x01C5/*::]*/:{/* n:"BrtBeginDeletedName", */T:1},/*::[*/0x01C6/*::]*/:{/* n:"BrtEndDeletedName", */T:-1},/*::[*/0x01C7/*::]*/:{/* n:"BrtBeginQSIFs", */T:1},/*::[*/0x01C8/*::]*/:{/* n:"BrtEndQSIFs", */T:-1},/*::[*/0x01C9/*::]*/:{/* n:"BrtBeginQSIF", */T:1},/*::[*/0x01CA/*::]*/:{/* n:"BrtEndQSIF", */T:-1},/*::[*/0x01CB/*::]*/:{/* n:"BrtBeginAutoSortScope", */T:1},/*::[*/0x01CC/*::]*/:{/* n:"BrtEndAutoSortScope", */T:-1},/*::[*/0x01CD/*::]*/:{/* n:"BrtBeginConditionalFormatting", */T:1},/*::[*/0x01CE/*::]*/:{/* n:"BrtEndConditionalFormatting", */T:-1},/*::[*/0x01CF/*::]*/:{/* n:"BrtBeginCFRule", */T:1},/*::[*/0x01D0/*::]*/:{/* n:"BrtEndCFRule", */T:-1},/*::[*/0x01D1/*::]*/:{/* n:"BrtBeginIconSet", */T:1},/*::[*/0x01D2/*::]*/:{/* n:"BrtEndIconSet", */T:-1},/*::[*/0x01D3/*::]*/:{/* n:"BrtBeginDatabar", */T:1},/*::[*/0x01D4/*::]*/:{/* n:"BrtEndDatabar", */T:-1},/*::[*/0x01D5/*::]*/:{/* n:"BrtBeginColorScale", */T:1},/*::[*/0x01D6/*::]*/:{/* n:"BrtEndColorScale", */T:-1},/*::[*/0x01D7/*::]*/:{/* n:"BrtCFVO" */},/*::[*/0x01D8/*::]*/:{/* n:"BrtExternValueMeta" */},/*::[*/0x01D9/*::]*/:{/* n:"BrtBeginColorPalette", */T:1},/*::[*/0x01DA/*::]*/:{/* n:"BrtEndColorPalette", */T:-1},/*::[*/0x01DB/*::]*/:{/* n:"BrtIndexedColor" */},/*::[*/0x01DC/*::]*/:{/* n:"BrtMargins", */f:parse_BrtMargins},/*::[*/0x01DD/*::]*/:{/* n:"BrtPrintOptions" */},/*::[*/0x01DE/*::]*/:{/* n:"BrtPageSetup" */},/*::[*/0x01DF/*::]*/:{/* n:"BrtBeginHeaderFooter", */T:1},/*::[*/0x01E0/*::]*/:{/* n:"BrtEndHeaderFooter", */T:-1},/*::[*/0x01E1/*::]*/:{/* n:"BrtBeginSXCrtFormat", */T:1},/*::[*/0x01E2/*::]*/:{/* n:"BrtEndSXCrtFormat", */T:-1},/*::[*/0x01E3/*::]*/:{/* n:"BrtBeginSXCrtFormats", */T:1},/*::[*/0x01E4/*::]*/:{/* n:"BrtEndSXCrtFormats", */T:-1},/*::[*/0x01E5/*::]*/:{/* n:"BrtWsFmtInfo", */f:parse_BrtWsFmtInfo},/*::[*/0x01E6/*::]*/:{/* n:"BrtBeginMgs", */T:1},/*::[*/0x01E7/*::]*/:{/* n:"BrtEndMGs", */T:-1},/*::[*/0x01E8/*::]*/:{/* n:"BrtBeginMGMaps", */T:1},/*::[*/0x01E9/*::]*/:{/* n:"BrtEndMGMaps", */T:-1},/*::[*/0x01EA/*::]*/:{/* n:"BrtBeginMG", */T:1},/*::[*/0x01EB/*::]*/:{/* n:"BrtEndMG", */T:-1},/*::[*/0x01EC/*::]*/:{/* n:"BrtBeginMap", */T:1},/*::[*/0x01ED/*::]*/:{/* n:"BrtEndMap", */T:-1},/*::[*/0x01EE/*::]*/:{/* n:"BrtHLink", */f:parse_BrtHLink},/*::[*/0x01EF/*::]*/:{/* n:"BrtBeginDCon", */T:1},/*::[*/0x01F0/*::]*/:{/* n:"BrtEndDCon", */T:-1},/*::[*/0x01F1/*::]*/:{/* n:"BrtBeginDRefs", */T:1},/*::[*/0x01F2/*::]*/:{/* n:"BrtEndDRefs", */T:-1},/*::[*/0x01F3/*::]*/:{/* n:"BrtDRef" */},/*::[*/0x01F4/*::]*/:{/* n:"BrtBeginScenMan", */T:1},/*::[*/0x01F5/*::]*/:{/* n:"BrtEndScenMan", */T:-1},/*::[*/0x01F6/*::]*/:{/* n:"BrtBeginSct", */T:1},/*::[*/0x01F7/*::]*/:{/* n:"BrtEndSct", */T:-1},/*::[*/0x01F8/*::]*/:{/* n:"BrtSlc" */},/*::[*/0x01F9/*::]*/:{/* n:"BrtBeginDXFs", */T:1},/*::[*/0x01FA/*::]*/:{/* n:"BrtEndDXFs", */T:-1},/*::[*/0x01FB/*::]*/:{/* n:"BrtDXF" */},/*::[*/0x01FC/*::]*/:{/* n:"BrtBeginTableStyles", */T:1},/*::[*/0x01FD/*::]*/:{/* n:"BrtEndTableStyles", */T:-1},/*::[*/0x01FE/*::]*/:{/* n:"BrtBeginTableStyle", */T:1},/*::[*/0x01FF/*::]*/:{/* n:"BrtEndTableStyle", */T:-1},/*::[*/0x0200/*::]*/:{/* n:"BrtTableStyleElement" */},/*::[*/0x0201/*::]*/:{/* n:"BrtTableStyleClient" */},/*::[*/0x0202/*::]*/:{/* n:"BrtBeginVolDeps", */T:1},/*::[*/0x0203/*::]*/:{/* n:"BrtEndVolDeps", */T:-1},/*::[*/0x0204/*::]*/:{/* n:"BrtBeginVolType", */T:1},/*::[*/0x0205/*::]*/:{/* n:"BrtEndVolType", */T:-1},/*::[*/0x0206/*::]*/:{/* n:"BrtBeginVolMain", */T:1},/*::[*/0x0207/*::]*/:{/* n:"BrtEndVolMain", */T:-1},/*::[*/0x0208/*::]*/:{/* n:"BrtBeginVolTopic", */T:1},/*::[*/0x0209/*::]*/:{/* n:"BrtEndVolTopic", */T:-1},/*::[*/0x020A/*::]*/:{/* n:"BrtVolSubtopic" */},/*::[*/0x020B/*::]*/:{/* n:"BrtVolRef" */},/*::[*/0x020C/*::]*/:{/* n:"BrtVolNum" */},/*::[*/0x020D/*::]*/:{/* n:"BrtVolErr" */},/*::[*/0x020E/*::]*/:{/* n:"BrtVolStr" */},/*::[*/0x020F/*::]*/:{/* n:"BrtVolBool" */},/*::[*/0x0210/*::]*/:{/* n:"BrtBeginCalcChain$", */T:1},/*::[*/0x0211/*::]*/:{/* n:"BrtEndCalcChain$", */T:-1},/*::[*/0x0212/*::]*/:{/* n:"BrtBeginSortState", */T:1},/*::[*/0x0213/*::]*/:{/* n:"BrtEndSortState", */T:-1},/*::[*/0x0214/*::]*/:{/* n:"BrtBeginSortCond", */T:1},/*::[*/0x0215/*::]*/:{/* n:"BrtEndSortCond", */T:-1},/*::[*/0x0216/*::]*/:{/* n:"BrtBookProtection" */},/*::[*/0x0217/*::]*/:{/* n:"BrtSheetProtection" */},/*::[*/0x0218/*::]*/:{/* n:"BrtRangeProtection" */},/*::[*/0x0219/*::]*/:{/* n:"BrtPhoneticInfo" */},/*::[*/0x021A/*::]*/:{/* n:"BrtBeginECTxtWiz", */T:1},/*::[*/0x021B/*::]*/:{/* n:"BrtEndECTxtWiz", */T:-1},/*::[*/0x021C/*::]*/:{/* n:"BrtBeginECTWFldInfoLst", */T:1},/*::[*/0x021D/*::]*/:{/* n:"BrtEndECTWFldInfoLst", */T:-1},/*::[*/0x021E/*::]*/:{/* n:"BrtBeginECTwFldInfo", */T:1},/*::[*/0x0224/*::]*/:{/* n:"BrtFileSharing" */},/*::[*/0x0225/*::]*/:{/* n:"BrtOleSize" */},/*::[*/0x0226/*::]*/:{/* n:"BrtDrawing", */f:parse_RelID},/*::[*/0x0227/*::]*/:{/* n:"BrtLegacyDrawing" */},/*::[*/0x0228/*::]*/:{/* n:"BrtLegacyDrawingHF" */},/*::[*/0x0229/*::]*/:{/* n:"BrtWebOpt" */},/*::[*/0x022A/*::]*/:{/* n:"BrtBeginWebPubItems", */T:1},/*::[*/0x022B/*::]*/:{/* n:"BrtEndWebPubItems", */T:-1},/*::[*/0x022C/*::]*/:{/* n:"BrtBeginWebPubItem", */T:1},/*::[*/0x022D/*::]*/:{/* n:"BrtEndWebPubItem", */T:-1},/*::[*/0x022E/*::]*/:{/* n:"BrtBeginSXCondFmt", */T:1},/*::[*/0x022F/*::]*/:{/* n:"BrtEndSXCondFmt", */T:-1},/*::[*/0x0230/*::]*/:{/* n:"BrtBeginSXCondFmts", */T:1},/*::[*/0x0231/*::]*/:{/* n:"BrtEndSXCondFmts", */T:-1},/*::[*/0x0232/*::]*/:{/* n:"BrtBkHim" */},/*::[*/0x0234/*::]*/:{/* n:"BrtColor" */},/*::[*/0x0235/*::]*/:{/* n:"BrtBeginIndexedColors", */T:1},/*::[*/0x0236/*::]*/:{/* n:"BrtEndIndexedColors", */T:-1},/*::[*/0x0239/*::]*/:{/* n:"BrtBeginMRUColors", */T:1},/*::[*/0x023A/*::]*/:{/* n:"BrtEndMRUColors", */T:-1},/*::[*/0x023C/*::]*/:{/* n:"BrtMRUColor" */},/*::[*/0x023D/*::]*/:{/* n:"BrtBeginDVals", */T:1},/*::[*/0x023E/*::]*/:{/* n:"BrtEndDVals", */T:-1},/*::[*/0x0241/*::]*/:{/* n:"BrtSupNameStart" */},/*::[*/0x0242/*::]*/:{/* n:"BrtSupNameValueStart" */},/*::[*/0x0243/*::]*/:{/* n:"BrtSupNameValueEnd" */},/*::[*/0x0244/*::]*/:{/* n:"BrtSupNameNum" */},/*::[*/0x0245/*::]*/:{/* n:"BrtSupNameErr" */},/*::[*/0x0246/*::]*/:{/* n:"BrtSupNameSt" */},/*::[*/0x0247/*::]*/:{/* n:"BrtSupNameNil" */},/*::[*/0x0248/*::]*/:{/* n:"BrtSupNameBool" */},/*::[*/0x0249/*::]*/:{/* n:"BrtSupNameFmla" */},/*::[*/0x024A/*::]*/:{/* n:"BrtSupNameBits" */},/*::[*/0x024B/*::]*/:{/* n:"BrtSupNameEnd" */},/*::[*/0x024C/*::]*/:{/* n:"BrtEndSupBook", */T:-1},/*::[*/0x024D/*::]*/:{/* n:"BrtCellSmartTagProperty" */},/*::[*/0x024E/*::]*/:{/* n:"BrtBeginCellSmartTag", */T:1},/*::[*/0x024F/*::]*/:{/* n:"BrtEndCellSmartTag", */T:-1},/*::[*/0x0250/*::]*/:{/* n:"BrtBeginCellSmartTags", */T:1},/*::[*/0x0251/*::]*/:{/* n:"BrtEndCellSmartTags", */T:-1},/*::[*/0x0252/*::]*/:{/* n:"BrtBeginSmartTags", */T:1},/*::[*/0x0253/*::]*/:{/* n:"BrtEndSmartTags", */T:-1},/*::[*/0x0254/*::]*/:{/* n:"BrtSmartTagType" */},/*::[*/0x0255/*::]*/:{/* n:"BrtBeginSmartTagTypes", */T:1},/*::[*/0x0256/*::]*/:{/* n:"BrtEndSmartTagTypes", */T:-1},/*::[*/0x0257/*::]*/:{/* n:"BrtBeginSXFilters", */T:1},/*::[*/0x0258/*::]*/:{/* n:"BrtEndSXFilters", */T:-1},/*::[*/0x0259/*::]*/:{/* n:"BrtBeginSXFILTER", */T:1},/*::[*/0x025A/*::]*/:{/* n:"BrtEndSXFilter", */T:-1},/*::[*/0x025B/*::]*/:{/* n:"BrtBeginFills", */T:1},/*::[*/0x025C/*::]*/:{/* n:"BrtEndFills", */T:-1},/*::[*/0x025D/*::]*/:{/* n:"BrtBeginCellWatches", */T:1},/*::[*/0x025E/*::]*/:{/* n:"BrtEndCellWatches", */T:-1},/*::[*/0x025F/*::]*/:{/* n:"BrtCellWatch" */},/*::[*/0x0260/*::]*/:{/* n:"BrtBeginCRErrs", */T:1},/*::[*/0x0261/*::]*/:{/* n:"BrtEndCRErrs", */T:-1},/*::[*/0x0262/*::]*/:{/* n:"BrtCrashRecErr" */},/*::[*/0x0263/*::]*/:{/* n:"BrtBeginFonts", */T:1},/*::[*/0x0264/*::]*/:{/* n:"BrtEndFonts", */T:-1},/*::[*/0x0265/*::]*/:{/* n:"BrtBeginBorders", */T:1},/*::[*/0x0266/*::]*/:{/* n:"BrtEndBorders", */T:-1},/*::[*/0x0267/*::]*/:{/* n:"BrtBeginFmts", */T:1},/*::[*/0x0268/*::]*/:{/* n:"BrtEndFmts", */T:-1},/*::[*/0x0269/*::]*/:{/* n:"BrtBeginCellXFs", */T:1},/*::[*/0x026A/*::]*/:{/* n:"BrtEndCellXFs", */T:-1},/*::[*/0x026B/*::]*/:{/* n:"BrtBeginStyles", */T:1},/*::[*/0x026C/*::]*/:{/* n:"BrtEndStyles", */T:-1},/*::[*/0x0271/*::]*/:{/* n:"BrtBigName" */},/*::[*/0x0272/*::]*/:{/* n:"BrtBeginCellStyleXFs", */T:1},/*::[*/0x0273/*::]*/:{/* n:"BrtEndCellStyleXFs", */T:-1},/*::[*/0x0274/*::]*/:{/* n:"BrtBeginComments", */T:1},/*::[*/0x0275/*::]*/:{/* n:"BrtEndComments", */T:-1},/*::[*/0x0276/*::]*/:{/* n:"BrtBeginCommentAuthors", */T:1},/*::[*/0x0277/*::]*/:{/* n:"BrtEndCommentAuthors", */T:-1},/*::[*/0x0278/*::]*/:{/* n:"BrtCommentAuthor", */f:parse_BrtCommentAuthor},/*::[*/0x0279/*::]*/:{/* n:"BrtBeginCommentList", */T:1},/*::[*/0x027A/*::]*/:{/* n:"BrtEndCommentList", */T:-1},/*::[*/0x027B/*::]*/:{/* n:"BrtBeginComment", */T:1,f:parse_BrtBeginComment},/*::[*/0x027C/*::]*/:{/* n:"BrtEndComment", */T:-1},/*::[*/0x027D/*::]*/:{/* n:"BrtCommentText", */f:parse_BrtCommentText},/*::[*/0x027E/*::]*/:{/* n:"BrtBeginOleObjects", */T:1},/*::[*/0x027F/*::]*/:{/* n:"BrtOleObject" */},/*::[*/0x0280/*::]*/:{/* n:"BrtEndOleObjects", */T:-1},/*::[*/0x0281/*::]*/:{/* n:"BrtBeginSxrules", */T:1},/*::[*/0x0282/*::]*/:{/* n:"BrtEndSxRules", */T:-1},/*::[*/0x0283/*::]*/:{/* n:"BrtBeginActiveXControls", */T:1},/*::[*/0x0284/*::]*/:{/* n:"BrtActiveX" */},/*::[*/0x0285/*::]*/:{/* n:"BrtEndActiveXControls", */T:-1},/*::[*/0x0286/*::]*/:{/* n:"BrtBeginPCDSDTCEMembersSortBy", */T:1},/*::[*/0x0288/*::]*/:{/* n:"BrtBeginCellIgnoreECs", */T:1},/*::[*/0x0289/*::]*/:{/* n:"BrtCellIgnoreEC" */},/*::[*/0x028A/*::]*/:{/* n:"BrtEndCellIgnoreECs", */T:-1},/*::[*/0x028B/*::]*/:{/* n:"BrtCsProp", */f:parse_BrtCsProp},/*::[*/0x028C/*::]*/:{/* n:"BrtCsPageSetup" */},/*::[*/0x028D/*::]*/:{/* n:"BrtBeginUserCsViews", */T:1},/*::[*/0x028E/*::]*/:{/* n:"BrtEndUserCsViews", */T:-1},/*::[*/0x028F/*::]*/:{/* n:"BrtBeginUserCsView", */T:1},/*::[*/0x0290/*::]*/:{/* n:"BrtEndUserCsView", */T:-1},/*::[*/0x0291/*::]*/:{/* n:"BrtBeginPcdSFCIEntries", */T:1},/*::[*/0x0292/*::]*/:{/* n:"BrtEndPCDSFCIEntries", */T:-1},/*::[*/0x0293/*::]*/:{/* n:"BrtPCDSFCIEntry" */},/*::[*/0x0294/*::]*/:{/* n:"BrtBeginListParts", */T:1},/*::[*/0x0295/*::]*/:{/* n:"BrtListPart" */},/*::[*/0x0296/*::]*/:{/* n:"BrtEndListParts", */T:-1},/*::[*/0x0297/*::]*/:{/* n:"BrtSheetCalcProp" */},/*::[*/0x0298/*::]*/:{/* n:"BrtBeginFnGroup", */T:1},/*::[*/0x0299/*::]*/:{/* n:"BrtFnGroup" */},/*::[*/0x029A/*::]*/:{/* n:"BrtEndFnGroup", */T:-1},/*::[*/0x029B/*::]*/:{/* n:"BrtSupAddin" */},/*::[*/0x029C/*::]*/:{/* n:"BrtSXTDMPOrder" */},/*::[*/0x029D/*::]*/:{/* n:"BrtCsProtection" */},/*::[*/0x029F/*::]*/:{/* n:"BrtBeginWsSortMap", */T:1},/*::[*/0x02A0/*::]*/:{/* n:"BrtEndWsSortMap", */T:-1},/*::[*/0x02A1/*::]*/:{/* n:"BrtBeginRRSort", */T:1},/*::[*/0x02A2/*::]*/:{/* n:"BrtEndRRSort", */T:-1},/*::[*/0x02A3/*::]*/:{/* n:"BrtRRSortItem" */},/*::[*/0x02A4/*::]*/:{/* n:"BrtFileSharingIso" */},/*::[*/0x02A5/*::]*/:{/* n:"BrtBookProtectionIso" */},/*::[*/0x02A6/*::]*/:{/* n:"BrtSheetProtectionIso" */},/*::[*/0x02A7/*::]*/:{/* n:"BrtCsProtectionIso" */},/*::[*/0x02A8/*::]*/:{/* n:"BrtRangeProtectionIso" */},/*::[*/0x02A9/*::]*/:{/* n:"BrtDValList" */},/*::[*/0x0400/*::]*/:{/* n:"BrtRwDescent" */},/*::[*/0x0401/*::]*/:{/* n:"BrtKnownFonts" */},/*::[*/0x0402/*::]*/:{/* n:"BrtBeginSXTupleSet", */T:1},/*::[*/0x0403/*::]*/:{/* n:"BrtEndSXTupleSet", */T:-1},/*::[*/0x0404/*::]*/:{/* n:"BrtBeginSXTupleSetHeader", */T:1},/*::[*/0x0405/*::]*/:{/* n:"BrtEndSXTupleSetHeader", */T:-1},/*::[*/0x0406/*::]*/:{/* n:"BrtSXTupleSetHeaderItem" */},/*::[*/0x0407/*::]*/:{/* n:"BrtBeginSXTupleSetData", */T:1},/*::[*/0x0408/*::]*/:{/* n:"BrtEndSXTupleSetData", */T:-1},/*::[*/0x0409/*::]*/:{/* n:"BrtBeginSXTupleSetRow", */T:1},/*::[*/0x040A/*::]*/:{/* n:"BrtEndSXTupleSetRow", */T:-1},/*::[*/0x040B/*::]*/:{/* n:"BrtSXTupleSetRowItem" */},/*::[*/0x040C/*::]*/:{/* n:"BrtNameExt" */},/*::[*/0x040D/*::]*/:{/* n:"BrtPCDH14" */},/*::[*/0x040E/*::]*/:{/* n:"BrtBeginPCDCalcMem14", */T:1},/*::[*/0x040F/*::]*/:{/* n:"BrtEndPCDCalcMem14", */T:-1},/*::[*/0x0410/*::]*/:{/* n:"BrtSXTH14" */},/*::[*/0x0411/*::]*/:{/* n:"BrtBeginSparklineGroup", */T:1},/*::[*/0x0412/*::]*/:{/* n:"BrtEndSparklineGroup", */T:-1},/*::[*/0x0413/*::]*/:{/* n:"BrtSparkline" */},/*::[*/0x0414/*::]*/:{/* n:"BrtSXDI14" */},/*::[*/0x0415/*::]*/:{/* n:"BrtWsFmtInfoEx14" */},/*::[*/0x0416/*::]*/:{/* n:"BrtBeginConditionalFormatting14", */T:1},/*::[*/0x0417/*::]*/:{/* n:"BrtEndConditionalFormatting14", */T:-1},/*::[*/0x0418/*::]*/:{/* n:"BrtBeginCFRule14", */T:1},/*::[*/0x0419/*::]*/:{/* n:"BrtEndCFRule14", */T:-1},/*::[*/0x041A/*::]*/:{/* n:"BrtCFVO14" */},/*::[*/0x041B/*::]*/:{/* n:"BrtBeginDatabar14", */T:1},/*::[*/0x041C/*::]*/:{/* n:"BrtBeginIconSet14", */T:1},/*::[*/0x041D/*::]*/:{/* n:"BrtDVal14", */f:parse_BrtDVal14},/*::[*/0x041E/*::]*/:{/* n:"BrtBeginDVals14", */T:1},/*::[*/0x041F/*::]*/:{/* n:"BrtColor14" */},/*::[*/0x0420/*::]*/:{/* n:"BrtBeginSparklines", */T:1},/*::[*/0x0421/*::]*/:{/* n:"BrtEndSparklines", */T:-1},/*::[*/0x0422/*::]*/:{/* n:"BrtBeginSparklineGroups", */T:1},/*::[*/0x0423/*::]*/:{/* n:"BrtEndSparklineGroups", */T:-1},/*::[*/0x0425/*::]*/:{/* n:"BrtSXVD14" */},/*::[*/0x0426/*::]*/:{/* n:"BrtBeginSXView14", */T:1},/*::[*/0x0427/*::]*/:{/* n:"BrtEndSXView14", */T:-1},/*::[*/0x0428/*::]*/:{/* n:"BrtBeginSXView16", */T:1},/*::[*/0x0429/*::]*/:{/* n:"BrtEndSXView16", */T:-1},/*::[*/0x042A/*::]*/:{/* n:"BrtBeginPCD14", */T:1},/*::[*/0x042B/*::]*/:{/* n:"BrtEndPCD14", */T:-1},/*::[*/0x042C/*::]*/:{/* n:"BrtBeginExtConn14", */T:1},/*::[*/0x042D/*::]*/:{/* n:"BrtEndExtConn14", */T:-1},/*::[*/0x042E/*::]*/:{/* n:"BrtBeginSlicerCacheIDs", */T:1},/*::[*/0x042F/*::]*/:{/* n:"BrtEndSlicerCacheIDs", */T:-1},/*::[*/0x0430/*::]*/:{/* n:"BrtBeginSlicerCacheID", */T:1},/*::[*/0x0431/*::]*/:{/* n:"BrtEndSlicerCacheID", */T:-1},/*::[*/0x0433/*::]*/:{/* n:"BrtBeginSlicerCache", */T:1},/*::[*/0x0434/*::]*/:{/* n:"BrtEndSlicerCache", */T:-1},/*::[*/0x0435/*::]*/:{/* n:"BrtBeginSlicerCacheDef", */T:1},/*::[*/0x0436/*::]*/:{/* n:"BrtEndSlicerCacheDef", */T:-1},/*::[*/0x0437/*::]*/:{/* n:"BrtBeginSlicersEx", */T:1},/*::[*/0x0438/*::]*/:{/* n:"BrtEndSlicersEx", */T:-1},/*::[*/0x0439/*::]*/:{/* n:"BrtBeginSlicerEx", */T:1},/*::[*/0x043A/*::]*/:{/* n:"BrtEndSlicerEx", */T:-1},/*::[*/0x043B/*::]*/:{/* n:"BrtBeginSlicer", */T:1},/*::[*/0x043C/*::]*/:{/* n:"BrtEndSlicer", */T:-1},/*::[*/0x043D/*::]*/:{/* n:"BrtSlicerCachePivotTables" */},/*::[*/0x043E/*::]*/:{/* n:"BrtBeginSlicerCacheOlapImpl", */T:1},/*::[*/0x043F/*::]*/:{/* n:"BrtEndSlicerCacheOlapImpl", */T:-1},/*::[*/0x0440/*::]*/:{/* n:"BrtBeginSlicerCacheLevelsData", */T:1},/*::[*/0x0441/*::]*/:{/* n:"BrtEndSlicerCacheLevelsData", */T:-1},/*::[*/0x0442/*::]*/:{/* n:"BrtBeginSlicerCacheLevelData", */T:1},/*::[*/0x0443/*::]*/:{/* n:"BrtEndSlicerCacheLevelData", */T:-1},/*::[*/0x0444/*::]*/:{/* n:"BrtBeginSlicerCacheSiRanges", */T:1},/*::[*/0x0445/*::]*/:{/* n:"BrtEndSlicerCacheSiRanges", */T:-1},/*::[*/0x0446/*::]*/:{/* n:"BrtBeginSlicerCacheSiRange", */T:1},/*::[*/0x0447/*::]*/:{/* n:"BrtEndSlicerCacheSiRange", */T:-1},/*::[*/0x0448/*::]*/:{/* n:"BrtSlicerCacheOlapItem" */},/*::[*/0x0449/*::]*/:{/* n:"BrtBeginSlicerCacheSelections", */T:1},/*::[*/0x044A/*::]*/:{/* n:"BrtSlicerCacheSelection" */},/*::[*/0x044B/*::]*/:{/* n:"BrtEndSlicerCacheSelections", */T:-1},/*::[*/0x044C/*::]*/:{/* n:"BrtBeginSlicerCacheNative", */T:1},/*::[*/0x044D/*::]*/:{/* n:"BrtEndSlicerCacheNative", */T:-1},/*::[*/0x044E/*::]*/:{/* n:"BrtSlicerCacheNativeItem" */},/*::[*/0x044F/*::]*/:{/* n:"BrtRangeProtection14" */},/*::[*/0x0450/*::]*/:{/* n:"BrtRangeProtectionIso14" */},/*::[*/0x0451/*::]*/:{/* n:"BrtCellIgnoreEC14" */},/*::[*/0x0457/*::]*/:{/* n:"BrtList14" */},/*::[*/0x0458/*::]*/:{/* n:"BrtCFIcon" */},/*::[*/0x0459/*::]*/:{/* n:"BrtBeginSlicerCachesPivotCacheIDs", */T:1},/*::[*/0x045A/*::]*/:{/* n:"BrtEndSlicerCachesPivotCacheIDs", */T:-1},/*::[*/0x045B/*::]*/:{/* n:"BrtBeginSlicers", */T:1},/*::[*/0x045C/*::]*/:{/* n:"BrtEndSlicers", */T:-1},/*::[*/0x045D/*::]*/:{/* n:"BrtWbProp14" */},/*::[*/0x045E/*::]*/:{/* n:"BrtBeginSXEdit", */T:1},/*::[*/0x045F/*::]*/:{/* n:"BrtEndSXEdit", */T:-1},/*::[*/0x0460/*::]*/:{/* n:"BrtBeginSXEdits", */T:1},/*::[*/0x0461/*::]*/:{/* n:"BrtEndSXEdits", */T:-1},/*::[*/0x0462/*::]*/:{/* n:"BrtBeginSXChange", */T:1},/*::[*/0x0463/*::]*/:{/* n:"BrtEndSXChange", */T:-1},/*::[*/0x0464/*::]*/:{/* n:"BrtBeginSXChanges", */T:1},/*::[*/0x0465/*::]*/:{/* n:"BrtEndSXChanges", */T:-1},/*::[*/0x0466/*::]*/:{/* n:"BrtSXTupleItems" */},/*::[*/0x0468/*::]*/:{/* n:"BrtBeginSlicerStyle", */T:1},/*::[*/0x0469/*::]*/:{/* n:"BrtEndSlicerStyle", */T:-1},/*::[*/0x046A/*::]*/:{/* n:"BrtSlicerStyleElement" */},/*::[*/0x046B/*::]*/:{/* n:"BrtBeginStyleSheetExt14", */T:1},/*::[*/0x046C/*::]*/:{/* n:"BrtEndStyleSheetExt14", */T:-1},/*::[*/0x046D/*::]*/:{/* n:"BrtBeginSlicerCachesPivotCacheID", */T:1},/*::[*/0x046E/*::]*/:{/* n:"BrtEndSlicerCachesPivotCacheID", */T:-1},/*::[*/0x046F/*::]*/:{/* n:"BrtBeginConditionalFormattings", */T:1},/*::[*/0x0470/*::]*/:{/* n:"BrtEndConditionalFormattings", */T:-1},/*::[*/0x0471/*::]*/:{/* n:"BrtBeginPCDCalcMemExt", */T:1},/*::[*/0x0472/*::]*/:{/* n:"BrtEndPCDCalcMemExt", */T:-1},/*::[*/0x0473/*::]*/:{/* n:"BrtBeginPCDCalcMemsExt", */T:1},/*::[*/0x0474/*::]*/:{/* n:"BrtEndPCDCalcMemsExt", */T:-1},/*::[*/0x0475/*::]*/:{/* n:"BrtPCDField14" */},/*::[*/0x0476/*::]*/:{/* n:"BrtBeginSlicerStyles", */T:1},/*::[*/0x0477/*::]*/:{/* n:"BrtEndSlicerStyles", */T:-1},/*::[*/0x0478/*::]*/:{/* n:"BrtBeginSlicerStyleElements", */T:1},/*::[*/0x0479/*::]*/:{/* n:"BrtEndSlicerStyleElements", */T:-1},/*::[*/0x047A/*::]*/:{/* n:"BrtCFRuleExt" */},/*::[*/0x047B/*::]*/:{/* n:"BrtBeginSXCondFmt14", */T:1},/*::[*/0x047C/*::]*/:{/* n:"BrtEndSXCondFmt14", */T:-1},/*::[*/0x047D/*::]*/:{/* n:"BrtBeginSXCondFmts14", */T:1},/*::[*/0x047E/*::]*/:{/* n:"BrtEndSXCondFmts14", */T:-1},/*::[*/0x0480/*::]*/:{/* n:"BrtBeginSortCond14", */T:1},/*::[*/0x0481/*::]*/:{/* n:"BrtEndSortCond14", */T:-1},/*::[*/0x0482/*::]*/:{/* n:"BrtEndDVals14", */T:-1},/*::[*/0x0483/*::]*/:{/* n:"BrtEndIconSet14", */T:-1},/*::[*/0x0484/*::]*/:{/* n:"BrtEndDatabar14", */T:-1},/*::[*/0x0485/*::]*/:{/* n:"BrtBeginColorScale14", */T:1},/*::[*/0x0486/*::]*/:{/* n:"BrtEndColorScale14", */T:-1},/*::[*/0x0487/*::]*/:{/* n:"BrtBeginSxrules14", */T:1},/*::[*/0x0488/*::]*/:{/* n:"BrtEndSxrules14", */T:-1},/*::[*/0x0489/*::]*/:{/* n:"BrtBeginPRule14", */T:1},/*::[*/0x048A/*::]*/:{/* n:"BrtEndPRule14", */T:-1},/*::[*/0x048B/*::]*/:{/* n:"BrtBeginPRFilters14", */T:1},/*::[*/0x048C/*::]*/:{/* n:"BrtEndPRFilters14", */T:-1},/*::[*/0x048D/*::]*/:{/* n:"BrtBeginPRFilter14", */T:1},/*::[*/0x048E/*::]*/:{/* n:"BrtEndPRFilter14", */T:-1},/*::[*/0x048F/*::]*/:{/* n:"BrtBeginPRFItem14", */T:1},/*::[*/0x0490/*::]*/:{/* n:"BrtEndPRFItem14", */T:-1},/*::[*/0x0491/*::]*/:{/* n:"BrtBeginCellIgnoreECs14", */T:1},/*::[*/0x0492/*::]*/:{/* n:"BrtEndCellIgnoreECs14", */T:-1},/*::[*/0x0493/*::]*/:{/* n:"BrtDxf14" */},/*::[*/0x0494/*::]*/:{/* n:"BrtBeginDxF14s", */T:1},/*::[*/0x0495/*::]*/:{/* n:"BrtEndDxf14s", */T:-1},/*::[*/0x0499/*::]*/:{/* n:"BrtFilter14" */},/*::[*/0x049A/*::]*/:{/* n:"BrtBeginCustomFilters14", */T:1},/*::[*/0x049C/*::]*/:{/* n:"BrtCustomFilter14" */},/*::[*/0x049D/*::]*/:{/* n:"BrtIconFilter14" */},/*::[*/0x049E/*::]*/:{/* n:"BrtPivotCacheConnectionName" */},/*::[*/0x0800/*::]*/:{/* n:"BrtBeginDecoupledPivotCacheIDs", */T:1},/*::[*/0x0801/*::]*/:{/* n:"BrtEndDecoupledPivotCacheIDs", */T:-1},/*::[*/0x0802/*::]*/:{/* n:"BrtDecoupledPivotCacheID" */},/*::[*/0x0803/*::]*/:{/* n:"BrtBeginPivotTableRefs", */T:1},/*::[*/0x0804/*::]*/:{/* n:"BrtEndPivotTableRefs", */T:-1},/*::[*/0x0805/*::]*/:{/* n:"BrtPivotTableRef" */},/*::[*/0x0806/*::]*/:{/* n:"BrtSlicerCacheBookPivotTables" */},/*::[*/0x0807/*::]*/:{/* n:"BrtBeginSxvcells", */T:1},/*::[*/0x0808/*::]*/:{/* n:"BrtEndSxvcells", */T:-1},/*::[*/0x0809/*::]*/:{/* n:"BrtBeginSxRow", */T:1},/*::[*/0x080A/*::]*/:{/* n:"BrtEndSxRow", */T:-1},/*::[*/0x080C/*::]*/:{/* n:"BrtPcdCalcMem15" */},/*::[*/0x0813/*::]*/:{/* n:"BrtQsi15" */},/*::[*/0x0814/*::]*/:{/* n:"BrtBeginWebExtensions", */T:1},/*::[*/0x0815/*::]*/:{/* n:"BrtEndWebExtensions", */T:-1},/*::[*/0x0816/*::]*/:{/* n:"BrtWebExtension" */},/*::[*/0x0817/*::]*/:{/* n:"BrtAbsPath15" */},/*::[*/0x0818/*::]*/:{/* n:"BrtBeginPivotTableUISettings", */T:1},/*::[*/0x0819/*::]*/:{/* n:"BrtEndPivotTableUISettings", */T:-1},/*::[*/0x081B/*::]*/:{/* n:"BrtTableSlicerCacheIDs" */},/*::[*/0x081C/*::]*/:{/* n:"BrtTableSlicerCacheID" */},/*::[*/0x081D/*::]*/:{/* n:"BrtBeginTableSlicerCache", */T:1},/*::[*/0x081E/*::]*/:{/* n:"BrtEndTableSlicerCache", */T:-1},/*::[*/0x081F/*::]*/:{/* n:"BrtSxFilter15" */},/*::[*/0x0820/*::]*/:{/* n:"BrtBeginTimelineCachePivotCacheIDs", */T:1},/*::[*/0x0821/*::]*/:{/* n:"BrtEndTimelineCachePivotCacheIDs", */T:-1},/*::[*/0x0822/*::]*/:{/* n:"BrtTimelineCachePivotCacheID" */},/*::[*/0x0823/*::]*/:{/* n:"BrtBeginTimelineCacheIDs", */T:1},/*::[*/0x0824/*::]*/:{/* n:"BrtEndTimelineCacheIDs", */T:-1},/*::[*/0x0825/*::]*/:{/* n:"BrtBeginTimelineCacheID", */T:1},/*::[*/0x0826/*::]*/:{/* n:"BrtEndTimelineCacheID", */T:-1},/*::[*/0x0827/*::]*/:{/* n:"BrtBeginTimelinesEx", */T:1},/*::[*/0x0828/*::]*/:{/* n:"BrtEndTimelinesEx", */T:-1},/*::[*/0x0829/*::]*/:{/* n:"BrtBeginTimelineEx", */T:1},/*::[*/0x082A/*::]*/:{/* n:"BrtEndTimelineEx", */T:-1},/*::[*/0x082B/*::]*/:{/* n:"BrtWorkBookPr15" */},/*::[*/0x082C/*::]*/:{/* n:"BrtPCDH15" */},/*::[*/0x082D/*::]*/:{/* n:"BrtBeginTimelineStyle", */T:1},/*::[*/0x082E/*::]*/:{/* n:"BrtEndTimelineStyle", */T:-1},/*::[*/0x082F/*::]*/:{/* n:"BrtTimelineStyleElement" */},/*::[*/0x0830/*::]*/:{/* n:"BrtBeginTimelineStylesheetExt15", */T:1},/*::[*/0x0831/*::]*/:{/* n:"BrtEndTimelineStylesheetExt15", */T:-1},/*::[*/0x0832/*::]*/:{/* n:"BrtBeginTimelineStyles", */T:1},/*::[*/0x0833/*::]*/:{/* n:"BrtEndTimelineStyles", */T:-1},/*::[*/0x0834/*::]*/:{/* n:"BrtBeginTimelineStyleElements", */T:1},/*::[*/0x0835/*::]*/:{/* n:"BrtEndTimelineStyleElements", */T:-1},/*::[*/0x0836/*::]*/:{/* n:"BrtDxf15" */},/*::[*/0x0837/*::]*/:{/* n:"BrtBeginDxfs15", */T:1},/*::[*/0x0838/*::]*/:{/* n:"BrtEndDxfs15", */T:-1},/*::[*/0x0839/*::]*/:{/* n:"BrtSlicerCacheHideItemsWithNoData" */},/*::[*/0x083A/*::]*/:{/* n:"BrtBeginItemUniqueNames", */T:1},/*::[*/0x083B/*::]*/:{/* n:"BrtEndItemUniqueNames", */T:-1},/*::[*/0x083C/*::]*/:{/* n:"BrtItemUniqueName" */},/*::[*/0x083D/*::]*/:{/* n:"BrtBeginExtConn15", */T:1},/*::[*/0x083E/*::]*/:{/* n:"BrtEndExtConn15", */T:-1},/*::[*/0x083F/*::]*/:{/* n:"BrtBeginOledbPr15", */T:1},/*::[*/0x0840/*::]*/:{/* n:"BrtEndOledbPr15", */T:-1},/*::[*/0x0841/*::]*/:{/* n:"BrtBeginDataFeedPr15", */T:1},/*::[*/0x0842/*::]*/:{/* n:"BrtEndDataFeedPr15", */T:-1},/*::[*/0x0843/*::]*/:{/* n:"BrtTextPr15" */},/*::[*/0x0844/*::]*/:{/* n:"BrtRangePr15" */},/*::[*/0x0845/*::]*/:{/* n:"BrtDbCommand15" */},/*::[*/0x0846/*::]*/:{/* n:"BrtBeginDbTables15", */T:1},/*::[*/0x0847/*::]*/:{/* n:"BrtEndDbTables15", */T:-1},/*::[*/0x0848/*::]*/:{/* n:"BrtDbTable15" */},/*::[*/0x0849/*::]*/:{/* n:"BrtBeginDataModel", */T:1},/*::[*/0x084A/*::]*/:{/* n:"BrtEndDataModel", */T:-1},/*::[*/0x084B/*::]*/:{/* n:"BrtBeginModelTables", */T:1},/*::[*/0x084C/*::]*/:{/* n:"BrtEndModelTables", */T:-1},/*::[*/0x084D/*::]*/:{/* n:"BrtModelTable" */},/*::[*/0x084E/*::]*/:{/* n:"BrtBeginModelRelationships", */T:1},/*::[*/0x084F/*::]*/:{/* n:"BrtEndModelRelationships", */T:-1},/*::[*/0x0850/*::]*/:{/* n:"BrtModelRelationship" */},/*::[*/0x0851/*::]*/:{/* n:"BrtBeginECTxtWiz15", */T:1},/*::[*/0x0852/*::]*/:{/* n:"BrtEndECTxtWiz15", */T:-1},/*::[*/0x0853/*::]*/:{/* n:"BrtBeginECTWFldInfoLst15", */T:1},/*::[*/0x0854/*::]*/:{/* n:"BrtEndECTWFldInfoLst15", */T:-1},/*::[*/0x0855/*::]*/:{/* n:"BrtBeginECTWFldInfo15", */T:1},/*::[*/0x0856/*::]*/:{/* n:"BrtFieldListActiveItem" */},/*::[*/0x0857/*::]*/:{/* n:"BrtPivotCacheIdVersion" */},/*::[*/0x0858/*::]*/:{/* n:"BrtSXDI15" */},/*::[*/0x0859/*::]*/:{/* n:"BrtBeginModelTimeGroupings", */T:1},/*::[*/0x085A/*::]*/:{/* n:"BrtEndModelTimeGroupings", */T:-1},/*::[*/0x085B/*::]*/:{/* n:"BrtBeginModelTimeGrouping", */T:1},/*::[*/0x085C/*::]*/:{/* n:"BrtEndModelTimeGrouping", */T:-1},/*::[*/0x085D/*::]*/:{/* n:"BrtModelTimeGroupingCalcCol" */},/*::[*/0x0C00/*::]*/:{/* n:"BrtUid" */},/*::[*/0x0C01/*::]*/:{/* n:"BrtRevisionPtr" */},/*::[*/0x1000/*::]*/:{/* n:"BrtBeginDynamicArrayPr", */T:1},/*::[*/0x1001/*::]*/:{/* n:"BrtEndDynamicArrayPr", */T:-1},/*::[*/0x138A/*::]*/:{/* n:"BrtBeginRichValueBlock", */T:1},/*::[*/0x138B/*::]*/:{/* n:"BrtEndRichValueBlock", */T:-1},/*::[*/0x13D9/*::]*/:{/* n:"BrtBeginRichFilters", */T:1},/*::[*/0x13DA/*::]*/:{/* n:"BrtEndRichFilters", */T:-1},/*::[*/0x13DB/*::]*/:{/* n:"BrtRichFilter" */},/*::[*/0x13DC/*::]*/:{/* n:"BrtBeginRichFilterColumn", */T:1},/*::[*/0x13DD/*::]*/:{/* n:"BrtEndRichFilterColumn", */T:-1},/*::[*/0x13DE/*::]*/:{/* n:"BrtBeginCustomRichFilters", */T:1},/*::[*/0x13DF/*::]*/:{/* n:"BrtEndCustomRichFilters", */T:-1},/*::[*/0x13E0/*::]*/:{/* n:"BrtCustomRichFilter" */},/*::[*/0x13E1/*::]*/:{/* n:"BrtTop10RichFilter" */},/*::[*/0x13E2/*::]*/:{/* n:"BrtDynamicRichFilter" */},/*::[*/0x13E4/*::]*/:{/* n:"BrtBeginRichSortCondition", */T:1},/*::[*/0x13E5/*::]*/:{/* n:"BrtEndRichSortCondition", */T:-1},/*::[*/0x13E6/*::]*/:{/* n:"BrtRichFilterDateGroupItem" */},/*::[*/0x13E7/*::]*/:{/* n:"BrtBeginCalcFeatures", */T:1},/*::[*/0x13E8/*::]*/:{/* n:"BrtEndCalcFeatures", */T:-1},/*::[*/0x13E9/*::]*/:{/* n:"BrtCalcFeature" */},/*::[*/0x13EB/*::]*/:{/* n:"BrtExternalLinksPr" */},/*::[*/0xFFFF/*::]*/:{n:""}};/* [MS-XLS] 2.3 Record Enumeration (and other sources) */var XLSRecordEnum={/* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */ /*::[*/0x0006/*::]*/:{/* n:"Formula", */f:parse_Formula},/*::[*/0x000a/*::]*/:{/* n:"EOF", */f:parsenoop2},/*::[*/0x000c/*::]*/:{/* n:"CalcCount", */f:parseuint16},//
	/*::[*/0x000d/*::]*/:{/* n:"CalcMode", */f:parseuint16},//
	/*::[*/0x000e/*::]*/:{/* n:"CalcPrecision", */f:parsebool},//
	/*::[*/0x000f/*::]*/:{/* n:"CalcRefMode", */f:parsebool},//
	/*::[*/0x0010/*::]*/:{/* n:"CalcDelta", */f:parse_Xnum},//
	/*::[*/0x0011/*::]*/:{/* n:"CalcIter", */f:parsebool},//
	/*::[*/0x0012/*::]*/:{/* n:"Protect", */f:parsebool},/*::[*/0x0013/*::]*/:{/* n:"Password", */f:parseuint16},/*::[*/0x0014/*::]*/:{/* n:"Header", */f:parse_XLHeaderFooter},/*::[*/0x0015/*::]*/:{/* n:"Footer", */f:parse_XLHeaderFooter},/*::[*/0x0017/*::]*/:{/* n:"ExternSheet", */f:parse_ExternSheet},/*::[*/0x0018/*::]*/:{/* n:"Lbl", */f:parse_Lbl},/*::[*/0x0019/*::]*/:{/* n:"WinProtect", */f:parsebool},/*::[*/0x001a/*::]*/:{/* n:"VerticalPageBreaks", */},/*::[*/0x001b/*::]*/:{/* n:"HorizontalPageBreaks", */},/*::[*/0x001c/*::]*/:{/* n:"Note", */f:parse_Note},/*::[*/0x001d/*::]*/:{/* n:"Selection", */},/*::[*/0x0022/*::]*/:{/* n:"Date1904", */f:parsebool},/*::[*/0x0023/*::]*/:{/* n:"ExternName", */f:parse_ExternName},/*::[*/0x0026/*::]*/:{/* n:"LeftMargin", */f:parse_Xnum},// *
	/*::[*/0x0027/*::]*/:{/* n:"RightMargin", */f:parse_Xnum},// *
	/*::[*/0x0028/*::]*/:{/* n:"TopMargin", */f:parse_Xnum},// *
	/*::[*/0x0029/*::]*/:{/* n:"BottomMargin", */f:parse_Xnum},// *
	/*::[*/0x002a/*::]*/:{/* n:"PrintRowCol", */f:parsebool},/*::[*/0x002b/*::]*/:{/* n:"PrintGrid", */f:parsebool},/*::[*/0x002f/*::]*/:{/* n:"FilePass", */f:parse_FilePass},/*::[*/0x0031/*::]*/:{/* n:"Font", */f:parse_Font},/*::[*/0x0033/*::]*/:{/* n:"PrintSize", */f:parseuint16},/*::[*/0x003c/*::]*/:{/* n:"Continue", */},/*::[*/0x003d/*::]*/:{/* n:"Window1", */f:parse_Window1},/*::[*/0x0040/*::]*/:{/* n:"Backup", */f:parsebool},/*::[*/0x0041/*::]*/:{/* n:"Pane", */f:parse_Pane},/*::[*/0x0042/*::]*/:{/* n:"CodePage", */f:parseuint16},/*::[*/0x004d/*::]*/:{/* n:"Pls", */},/*::[*/0x0050/*::]*/:{/* n:"DCon", */},/*::[*/0x0051/*::]*/:{/* n:"DConRef", */},/*::[*/0x0052/*::]*/:{/* n:"DConName", */},/*::[*/0x0055/*::]*/:{/* n:"DefColWidth", */f:parseuint16},/*::[*/0x0059/*::]*/:{/* n:"XCT", */},/*::[*/0x005a/*::]*/:{/* n:"CRN", */},/*::[*/0x005b/*::]*/:{/* n:"FileSharing", */},/*::[*/0x005c/*::]*/:{/* n:"WriteAccess", */f:parse_WriteAccess},/*::[*/0x005d/*::]*/:{/* n:"Obj", */f:parse_Obj},/*::[*/0x005e/*::]*/:{/* n:"Uncalced", */},/*::[*/0x005f/*::]*/:{/* n:"CalcSaveRecalc", */f:parsebool},//
	/*::[*/0x0060/*::]*/:{/* n:"Template", */},/*::[*/0x0061/*::]*/:{/* n:"Intl", */},/*::[*/0x0063/*::]*/:{/* n:"ObjProtect", */f:parsebool},/*::[*/0x007d/*::]*/:{/* n:"ColInfo", */f:parse_ColInfo},/*::[*/0x0080/*::]*/:{/* n:"Guts", */f:parse_Guts},/*::[*/0x0081/*::]*/:{/* n:"WsBool", */f:parse_WsBool},/*::[*/0x0082/*::]*/:{/* n:"GridSet", */f:parseuint16},/*::[*/0x0083/*::]*/:{/* n:"HCenter", */f:parsebool},/*::[*/0x0084/*::]*/:{/* n:"VCenter", */f:parsebool},/*::[*/0x0085/*::]*/:{/* n:"BoundSheet8", */f:parse_BoundSheet8},/*::[*/0x0086/*::]*/:{/* n:"WriteProtect", */},/*::[*/0x008c/*::]*/:{/* n:"Country", */f:parse_Country},/*::[*/0x008d/*::]*/:{/* n:"HideObj", */f:parseuint16},/*::[*/0x0090/*::]*/:{/* n:"Sort", */},/*::[*/0x0092/*::]*/:{/* n:"Palette", */f:parse_Palette},/*::[*/0x0097/*::]*/:{/* n:"Sync", */},/*::[*/0x0098/*::]*/:{/* n:"LPr", */},/*::[*/0x0099/*::]*/:{/* n:"DxGCol", */},/*::[*/0x009a/*::]*/:{/* n:"FnGroupName", */},/*::[*/0x009b/*::]*/:{/* n:"FilterMode", */},/*::[*/0x009c/*::]*/:{/* n:"BuiltInFnGroupCount", */f:parseuint16},/*::[*/0x009d/*::]*/:{/* n:"AutoFilterInfo", */},/*::[*/0x009e/*::]*/:{/* n:"AutoFilter", */},/*::[*/0x00a0/*::]*/:{/* n:"Scl", */f:parse_Scl},/*::[*/0x00a1/*::]*/:{/* n:"Setup", */f:parse_Setup},/*::[*/0x00ae/*::]*/:{/* n:"ScenMan", */},/*::[*/0x00af/*::]*/:{/* n:"SCENARIO", */},/*::[*/0x00b0/*::]*/:{/* n:"SxView", */},/*::[*/0x00b1/*::]*/:{/* n:"Sxvd", */},/*::[*/0x00b2/*::]*/:{/* n:"SXVI", */},/*::[*/0x00b4/*::]*/:{/* n:"SxIvd", */},/*::[*/0x00b5/*::]*/:{/* n:"SXLI", */},/*::[*/0x00b6/*::]*/:{/* n:"SXPI", */},/*::[*/0x00b8/*::]*/:{/* n:"DocRoute", */},/*::[*/0x00b9/*::]*/:{/* n:"RecipName", */},/*::[*/0x00bd/*::]*/:{/* n:"MulRk", */f:parse_MulRk},/*::[*/0x00be/*::]*/:{/* n:"MulBlank", */f:parse_MulBlank},/*::[*/0x00c1/*::]*/:{/* n:"Mms", */f:parsenoop2},/*::[*/0x00c5/*::]*/:{/* n:"SXDI", */},/*::[*/0x00c6/*::]*/:{/* n:"SXDB", */},/*::[*/0x00c7/*::]*/:{/* n:"SXFDB", */},/*::[*/0x00c8/*::]*/:{/* n:"SXDBB", */},/*::[*/0x00c9/*::]*/:{/* n:"SXNum", */},/*::[*/0x00ca/*::]*/:{/* n:"SxBool", */f:parsebool},/*::[*/0x00cb/*::]*/:{/* n:"SxErr", */},/*::[*/0x00cc/*::]*/:{/* n:"SXInt", */},/*::[*/0x00cd/*::]*/:{/* n:"SXString", */},/*::[*/0x00ce/*::]*/:{/* n:"SXDtr", */},/*::[*/0x00cf/*::]*/:{/* n:"SxNil", */},/*::[*/0x00d0/*::]*/:{/* n:"SXTbl", */},/*::[*/0x00d1/*::]*/:{/* n:"SXTBRGIITM", */},/*::[*/0x00d2/*::]*/:{/* n:"SxTbpg", */},/*::[*/0x00d3/*::]*/:{/* n:"ObProj", */},/*::[*/0x00d5/*::]*/:{/* n:"SXStreamID", */},/*::[*/0x00d7/*::]*/:{/* n:"DBCell", */},/*::[*/0x00d8/*::]*/:{/* n:"SXRng", */},/*::[*/0x00d9/*::]*/:{/* n:"SxIsxoper", */},/*::[*/0x00da/*::]*/:{/* n:"BookBool", */f:parseuint16},/*::[*/0x00dc/*::]*/:{/* n:"DbOrParamQry", */},/*::[*/0x00dd/*::]*/:{/* n:"ScenarioProtect", */f:parsebool},/*::[*/0x00de/*::]*/:{/* n:"OleObjectSize", */},/*::[*/0x00e0/*::]*/:{/* n:"XF", */f:parse_XF},/*::[*/0x00e1/*::]*/:{/* n:"InterfaceHdr", */f:parse_InterfaceHdr},/*::[*/0x00e2/*::]*/:{/* n:"InterfaceEnd", */f:parsenoop2},/*::[*/0x00e3/*::]*/:{/* n:"SXVS", */},/*::[*/0x00e5/*::]*/:{/* n:"MergeCells", */f:parse_MergeCells},/*::[*/0x00e9/*::]*/:{/* n:"BkHim", */},/*::[*/0x00eb/*::]*/:{/* n:"MsoDrawingGroup", */},/*::[*/0x00ec/*::]*/:{/* n:"MsoDrawing", */},/*::[*/0x00ed/*::]*/:{/* n:"MsoDrawingSelection", */},/*::[*/0x00ef/*::]*/:{/* n:"PhoneticInfo", */},/*::[*/0x00f0/*::]*/:{/* n:"SxRule", */},/*::[*/0x00f1/*::]*/:{/* n:"SXEx", */},/*::[*/0x00f2/*::]*/:{/* n:"SxFilt", */},/*::[*/0x00f4/*::]*/:{/* n:"SxDXF", */},/*::[*/0x00f5/*::]*/:{/* n:"SxItm", */},/*::[*/0x00f6/*::]*/:{/* n:"SxName", */},/*::[*/0x00f7/*::]*/:{/* n:"SxSelect", */},/*::[*/0x00f8/*::]*/:{/* n:"SXPair", */},/*::[*/0x00f9/*::]*/:{/* n:"SxFmla", */},/*::[*/0x00fb/*::]*/:{/* n:"SxFormat", */},/*::[*/0x00fc/*::]*/:{/* n:"SST", */f:parse_SST},/*::[*/0x00fd/*::]*/:{/* n:"LabelSst", */f:parse_LabelSst},/*::[*/0x00ff/*::]*/:{/* n:"ExtSST", */f:parse_ExtSST},/*::[*/0x0100/*::]*/:{/* n:"SXVDEx", */},/*::[*/0x0103/*::]*/:{/* n:"SXFormula", */},/*::[*/0x0122/*::]*/:{/* n:"SXDBEx", */},/*::[*/0x0137/*::]*/:{/* n:"RRDInsDel", */},/*::[*/0x0138/*::]*/:{/* n:"RRDHead", */},/*::[*/0x013b/*::]*/:{/* n:"RRDChgCell", */},/*::[*/0x013d/*::]*/:{/* n:"RRTabId", */f:parseuint16a},/*::[*/0x013e/*::]*/:{/* n:"RRDRenSheet", */},/*::[*/0x013f/*::]*/:{/* n:"RRSort", */},/*::[*/0x0140/*::]*/:{/* n:"RRDMove", */},/*::[*/0x014a/*::]*/:{/* n:"RRFormat", */},/*::[*/0x014b/*::]*/:{/* n:"RRAutoFmt", */},/*::[*/0x014d/*::]*/:{/* n:"RRInsertSh", */},/*::[*/0x014e/*::]*/:{/* n:"RRDMoveBegin", */},/*::[*/0x014f/*::]*/:{/* n:"RRDMoveEnd", */},/*::[*/0x0150/*::]*/:{/* n:"RRDInsDelBegin", */},/*::[*/0x0151/*::]*/:{/* n:"RRDInsDelEnd", */},/*::[*/0x0152/*::]*/:{/* n:"RRDConflict", */},/*::[*/0x0153/*::]*/:{/* n:"RRDDefName", */},/*::[*/0x0154/*::]*/:{/* n:"RRDRstEtxp", */},/*::[*/0x015f/*::]*/:{/* n:"LRng", */},/*::[*/0x0160/*::]*/:{/* n:"UsesELFs", */f:parsebool},/*::[*/0x0161/*::]*/:{/* n:"DSF", */f:parsenoop2},/*::[*/0x0191/*::]*/:{/* n:"CUsr", */},/*::[*/0x0192/*::]*/:{/* n:"CbUsr", */},/*::[*/0x0193/*::]*/:{/* n:"UsrInfo", */},/*::[*/0x0194/*::]*/:{/* n:"UsrExcl", */},/*::[*/0x0195/*::]*/:{/* n:"FileLock", */},/*::[*/0x0196/*::]*/:{/* n:"RRDInfo", */},/*::[*/0x0197/*::]*/:{/* n:"BCUsrs", */},/*::[*/0x0198/*::]*/:{/* n:"UsrChk", */},/*::[*/0x01a9/*::]*/:{/* n:"UserBView", */},/*::[*/0x01aa/*::]*/:{/* n:"UserSViewBegin", */},/*::[*/0x01ab/*::]*/:{/* n:"UserSViewEnd", */},/*::[*/0x01ac/*::]*/:{/* n:"RRDUserView", */},/*::[*/0x01ad/*::]*/:{/* n:"Qsi", */},/*::[*/0x01ae/*::]*/:{/* n:"SupBook", */f:parse_SupBook},/*::[*/0x01af/*::]*/:{/* n:"Prot4Rev", */f:parsebool},/*::[*/0x01b0/*::]*/:{/* n:"CondFmt", */},/*::[*/0x01b1/*::]*/:{/* n:"CF", */},/*::[*/0x01b2/*::]*/:{/* n:"DVal", */},/*::[*/0x01b5/*::]*/:{/* n:"DConBin", */},/*::[*/0x01b6/*::]*/:{/* n:"TxO", */f:parse_TxO},/*::[*/0x01b7/*::]*/:{/* n:"RefreshAll", */f:parsebool},//
	/*::[*/0x01b8/*::]*/:{/* n:"HLink", */f:parse_HLink},/*::[*/0x01b9/*::]*/:{/* n:"Lel", */},/*::[*/0x01ba/*::]*/:{/* n:"CodeName", */f:parse_XLUnicodeString},/*::[*/0x01bb/*::]*/:{/* n:"SXFDBType", */},/*::[*/0x01bc/*::]*/:{/* n:"Prot4RevPass", */f:parseuint16},/*::[*/0x01bd/*::]*/:{/* n:"ObNoMacros", */},/*::[*/0x01be/*::]*/:{/* n:"Dv", */},/*::[*/0x01c0/*::]*/:{/* n:"Excel9File", */f:parsenoop2},/*::[*/0x01c1/*::]*/:{/* n:"RecalcId", */f:parse_RecalcId,r:2},/*::[*/0x01c2/*::]*/:{/* n:"EntExU2", */f:parsenoop2},/*::[*/0x0200/*::]*/:{/* n:"Dimensions", */f:parse_Dimensions},/*::[*/0x0201/*::]*/:{/* n:"Blank", */f:parse_Blank},/*::[*/0x0203/*::]*/:{/* n:"Number", */f:parse_Number},/*::[*/0x0204/*::]*/:{/* n:"Label", */f:parse_Label},/*::[*/0x0205/*::]*/:{/* n:"BoolErr", */f:parse_BoolErr},/*::[*/0x0207/*::]*/:{/* n:"String", */f:parse_String},/*::[*/0x0208/*::]*/:{/* n:"Row", */f:parse_Row},/*::[*/0x020b/*::]*/:{/* n:"Index", */},/*::[*/0x0221/*::]*/:{/* n:"Array", */f:parse_Array},/*::[*/0x0225/*::]*/:{/* n:"DefaultRowHeight", */f:parse_DefaultRowHeight},/*::[*/0x0236/*::]*/:{/* n:"Table", */},/*::[*/0x023e/*::]*/:{/* n:"Window2", */f:parse_Window2},/*::[*/0x027e/*::]*/:{/* n:"RK", */f:parse_RK},/*::[*/0x0293/*::]*/:{/* n:"Style", */},/*::[*/0x0418/*::]*/:{/* n:"BigName", */},/*::[*/0x041e/*::]*/:{/* n:"Format", */f:parse_Format},/*::[*/0x043c/*::]*/:{/* n:"ContinueBigName", */},/*::[*/0x04bc/*::]*/:{/* n:"ShrFmla", */f:parse_ShrFmla},/*::[*/0x0800/*::]*/:{/* n:"HLinkTooltip", */f:parse_HLinkTooltip},/*::[*/0x0801/*::]*/:{/* n:"WebPub", */},/*::[*/0x0802/*::]*/:{/* n:"QsiSXTag", */},/*::[*/0x0803/*::]*/:{/* n:"DBQueryExt", */},/*::[*/0x0804/*::]*/:{/* n:"ExtString", */},/*::[*/0x0805/*::]*/:{/* n:"TxtQry", */},/*::[*/0x0806/*::]*/:{/* n:"Qsir", */},/*::[*/0x0807/*::]*/:{/* n:"Qsif", */},/*::[*/0x0808/*::]*/:{/* n:"RRDTQSIF", */},/*::[*/0x0809/*::]*/:{/* n:"BOF", */f:parse_BOF},/*::[*/0x080a/*::]*/:{/* n:"OleDbConn", */},/*::[*/0x080b/*::]*/:{/* n:"WOpt", */},/*::[*/0x080c/*::]*/:{/* n:"SXViewEx", */},/*::[*/0x080d/*::]*/:{/* n:"SXTH", */},/*::[*/0x080e/*::]*/:{/* n:"SXPIEx", */},/*::[*/0x080f/*::]*/:{/* n:"SXVDTEx", */},/*::[*/0x0810/*::]*/:{/* n:"SXViewEx9", */},/*::[*/0x0812/*::]*/:{/* n:"ContinueFrt", */},/*::[*/0x0813/*::]*/:{/* n:"RealTimeData", */},/*::[*/0x0850/*::]*/:{/* n:"ChartFrtInfo", */},/*::[*/0x0851/*::]*/:{/* n:"FrtWrapper", */},/*::[*/0x0852/*::]*/:{/* n:"StartBlock", */},/*::[*/0x0853/*::]*/:{/* n:"EndBlock", */},/*::[*/0x0854/*::]*/:{/* n:"StartObject", */},/*::[*/0x0855/*::]*/:{/* n:"EndObject", */},/*::[*/0x0856/*::]*/:{/* n:"CatLab", */},/*::[*/0x0857/*::]*/:{/* n:"YMult", */},/*::[*/0x0858/*::]*/:{/* n:"SXViewLink", */},/*::[*/0x0859/*::]*/:{/* n:"PivotChartBits", */},/*::[*/0x085a/*::]*/:{/* n:"FrtFontList", */},/*::[*/0x0862/*::]*/:{/* n:"SheetExt", */},/*::[*/0x0863/*::]*/:{/* n:"BookExt", */r:12},/*::[*/0x0864/*::]*/:{/* n:"SXAddl", */},/*::[*/0x0865/*::]*/:{/* n:"CrErr", */},/*::[*/0x0866/*::]*/:{/* n:"HFPicture", */},/*::[*/0x0867/*::]*/:{/* n:"FeatHdr", */f:parsenoop2},/*::[*/0x0868/*::]*/:{/* n:"Feat", */},/*::[*/0x086a/*::]*/:{/* n:"DataLabExt", */},/*::[*/0x086b/*::]*/:{/* n:"DataLabExtContents", */},/*::[*/0x086c/*::]*/:{/* n:"CellWatch", */},/*::[*/0x0871/*::]*/:{/* n:"FeatHdr11", */},/*::[*/0x0872/*::]*/:{/* n:"Feature11", */},/*::[*/0x0874/*::]*/:{/* n:"DropDownObjIds", */},/*::[*/0x0875/*::]*/:{/* n:"ContinueFrt11", */},/*::[*/0x0876/*::]*/:{/* n:"DConn", */},/*::[*/0x0877/*::]*/:{/* n:"List12", */},/*::[*/0x0878/*::]*/:{/* n:"Feature12", */},/*::[*/0x0879/*::]*/:{/* n:"CondFmt12", */},/*::[*/0x087a/*::]*/:{/* n:"CF12", */},/*::[*/0x087b/*::]*/:{/* n:"CFEx", */},/*::[*/0x087c/*::]*/:{/* n:"XFCRC", */f:parse_XFCRC,r:12},/*::[*/0x087d/*::]*/:{/* n:"XFExt", */f:parse_XFExt,r:12},/*::[*/0x087e/*::]*/:{/* n:"AutoFilter12", */},/*::[*/0x087f/*::]*/:{/* n:"ContinueFrt12", */},/*::[*/0x0884/*::]*/:{/* n:"MDTInfo", */},/*::[*/0x0885/*::]*/:{/* n:"MDXStr", */},/*::[*/0x0886/*::]*/:{/* n:"MDXTuple", */},/*::[*/0x0887/*::]*/:{/* n:"MDXSet", */},/*::[*/0x0888/*::]*/:{/* n:"MDXProp", */},/*::[*/0x0889/*::]*/:{/* n:"MDXKPI", */},/*::[*/0x088a/*::]*/:{/* n:"MDB", */},/*::[*/0x088b/*::]*/:{/* n:"PLV", */},/*::[*/0x088c/*::]*/:{/* n:"Compat12", */f:parsebool,r:12},/*::[*/0x088d/*::]*/:{/* n:"DXF", */},/*::[*/0x088e/*::]*/:{/* n:"TableStyles", */r:12},/*::[*/0x088f/*::]*/:{/* n:"TableStyle", */},/*::[*/0x0890/*::]*/:{/* n:"TableStyleElement", */},/*::[*/0x0892/*::]*/:{/* n:"StyleExt", */},/*::[*/0x0893/*::]*/:{/* n:"NamePublish", */},/*::[*/0x0894/*::]*/:{/* n:"NameCmt", */f:parse_NameCmt,r:12},/*::[*/0x0895/*::]*/:{/* n:"SortData", */},/*::[*/0x0896/*::]*/:{/* n:"Theme", */f:parse_Theme,r:12},/*::[*/0x0897/*::]*/:{/* n:"GUIDTypeLib", */},/*::[*/0x0898/*::]*/:{/* n:"FnGrp12", */},/*::[*/0x0899/*::]*/:{/* n:"NameFnGrp12", */},/*::[*/0x089a/*::]*/:{/* n:"MTRSettings", */f:parse_MTRSettings,r:12},/*::[*/0x089b/*::]*/:{/* n:"CompressPictures", */f:parsenoop2},/*::[*/0x089c/*::]*/:{/* n:"HeaderFooter", */},/*::[*/0x089d/*::]*/:{/* n:"CrtLayout12", */},/*::[*/0x089e/*::]*/:{/* n:"CrtMlFrt", */},/*::[*/0x089f/*::]*/:{/* n:"CrtMlFrtContinue", */},/*::[*/0x08a3/*::]*/:{/* n:"ForceFullCalculation", */f:parse_ForceFullCalculation},/*::[*/0x08a4/*::]*/:{/* n:"ShapePropsStream", */},/*::[*/0x08a5/*::]*/:{/* n:"TextPropsStream", */},/*::[*/0x08a6/*::]*/:{/* n:"RichTextStream", */},/*::[*/0x08a7/*::]*/:{/* n:"CrtLayout12A", */},/*::[*/0x1001/*::]*/:{/* n:"Units", */},/*::[*/0x1002/*::]*/:{/* n:"Chart", */},/*::[*/0x1003/*::]*/:{/* n:"Series", */},/*::[*/0x1006/*::]*/:{/* n:"DataFormat", */},/*::[*/0x1007/*::]*/:{/* n:"LineFormat", */},/*::[*/0x1009/*::]*/:{/* n:"MarkerFormat", */},/*::[*/0x100a/*::]*/:{/* n:"AreaFormat", */},/*::[*/0x100b/*::]*/:{/* n:"PieFormat", */},/*::[*/0x100c/*::]*/:{/* n:"AttachedLabel", */},/*::[*/0x100d/*::]*/:{/* n:"SeriesText", */},/*::[*/0x1014/*::]*/:{/* n:"ChartFormat", */},/*::[*/0x1015/*::]*/:{/* n:"Legend", */},/*::[*/0x1016/*::]*/:{/* n:"SeriesList", */},/*::[*/0x1017/*::]*/:{/* n:"Bar", */},/*::[*/0x1018/*::]*/:{/* n:"Line", */},/*::[*/0x1019/*::]*/:{/* n:"Pie", */},/*::[*/0x101a/*::]*/:{/* n:"Area", */},/*::[*/0x101b/*::]*/:{/* n:"Scatter", */},/*::[*/0x101c/*::]*/:{/* n:"CrtLine", */},/*::[*/0x101d/*::]*/:{/* n:"Axis", */},/*::[*/0x101e/*::]*/:{/* n:"Tick", */},/*::[*/0x101f/*::]*/:{/* n:"ValueRange", */},/*::[*/0x1020/*::]*/:{/* n:"CatSerRange", */},/*::[*/0x1021/*::]*/:{/* n:"AxisLine", */},/*::[*/0x1022/*::]*/:{/* n:"CrtLink", */},/*::[*/0x1024/*::]*/:{/* n:"DefaultText", */},/*::[*/0x1025/*::]*/:{/* n:"Text", */},/*::[*/0x1026/*::]*/:{/* n:"FontX", */f:parseuint16},/*::[*/0x1027/*::]*/:{/* n:"ObjectLink", */},/*::[*/0x1032/*::]*/:{/* n:"Frame", */},/*::[*/0x1033/*::]*/:{/* n:"Begin", */},/*::[*/0x1034/*::]*/:{/* n:"End", */},/*::[*/0x1035/*::]*/:{/* n:"PlotArea", */},/*::[*/0x103a/*::]*/:{/* n:"Chart3d", */},/*::[*/0x103c/*::]*/:{/* n:"PicF", */},/*::[*/0x103d/*::]*/:{/* n:"DropBar", */},/*::[*/0x103e/*::]*/:{/* n:"Radar", */},/*::[*/0x103f/*::]*/:{/* n:"Surf", */},/*::[*/0x1040/*::]*/:{/* n:"RadarArea", */},/*::[*/0x1041/*::]*/:{/* n:"AxisParent", */},/*::[*/0x1043/*::]*/:{/* n:"LegendException", */},/*::[*/0x1044/*::]*/:{/* n:"ShtProps", */f:parse_ShtProps},/*::[*/0x1045/*::]*/:{/* n:"SerToCrt", */},/*::[*/0x1046/*::]*/:{/* n:"AxesUsed", */},/*::[*/0x1048/*::]*/:{/* n:"SBaseRef", */},/*::[*/0x104a/*::]*/:{/* n:"SerParent", */},/*::[*/0x104b/*::]*/:{/* n:"SerAuxTrend", */},/*::[*/0x104e/*::]*/:{/* n:"IFmtRecord", */},/*::[*/0x104f/*::]*/:{/* n:"Pos", */},/*::[*/0x1050/*::]*/:{/* n:"AlRuns", */},/*::[*/0x1051/*::]*/:{/* n:"BRAI", */},/*::[*/0x105b/*::]*/:{/* n:"SerAuxErrBar", */},/*::[*/0x105c/*::]*/:{/* n:"ClrtClient", */f:parse_ClrtClient},/*::[*/0x105d/*::]*/:{/* n:"SerFmt", */},/*::[*/0x105f/*::]*/:{/* n:"Chart3DBarShape", */},/*::[*/0x1060/*::]*/:{/* n:"Fbi", */},/*::[*/0x1061/*::]*/:{/* n:"BopPop", */},/*::[*/0x1062/*::]*/:{/* n:"AxcExt", */},/*::[*/0x1063/*::]*/:{/* n:"Dat", */},/*::[*/0x1064/*::]*/:{/* n:"PlotGrowth", */},/*::[*/0x1065/*::]*/:{/* n:"SIIndex", */},/*::[*/0x1066/*::]*/:{/* n:"GelFrame", */},/*::[*/0x1067/*::]*/:{/* n:"BopPopCustom", */},/*::[*/0x1068/*::]*/:{/* n:"Fbi2", */},/*::[*/0x0000/*::]*/:{/* n:"Dimensions", */f:parse_Dimensions},/*::[*/0x0001/*::]*/:{/* n:"BIFF2BLANK", */},/*::[*/0x0002/*::]*/:{/* n:"BIFF2INT", */f:parse_BIFF2INT},/*::[*/0x0003/*::]*/:{/* n:"BIFF2NUM", */f:parse_BIFF2NUM},/*::[*/0x0004/*::]*/:{/* n:"BIFF2STR", */f:parse_BIFF2STR},/*::[*/0x0005/*::]*/:{/* n:"BoolErr", */f:parse_BoolErr},/*::[*/0x0007/*::]*/:{/* n:"String", */f:parse_BIFF2STRING},/*::[*/0x0008/*::]*/:{/* n:"BIFF2ROW", */},/*::[*/0x0009/*::]*/:{/* n:"BOF", */f:parse_BOF},/*::[*/0x000b/*::]*/:{/* n:"Index", */},/*::[*/0x0016/*::]*/:{/* n:"ExternCount", */f:parseuint16},/*::[*/0x001e/*::]*/:{/* n:"BIFF2FORMAT", */f:parse_BIFF2Format},/*::[*/0x001f/*::]*/:{/* n:"BIFF2FMTCNT", */},/* 16-bit cnt of BIFF2FORMAT records */ /*::[*/0x0020/*::]*/:{/* n:"BIFF2COLINFO", */},/*::[*/0x0021/*::]*/:{/* n:"Array", */f:parse_Array},/*::[*/0x0024/*::]*/:{/* n:"COLWIDTH", */},/*::[*/0x0025/*::]*/:{/* n:"DefaultRowHeight", */f:parse_DefaultRowHeight},// 0x2c ??
	// 0x2d ??
	// 0x2e ??
	// 0x30 FONTCOUNT: number of fonts
	/*::[*/0x0032/*::]*/:{/* n:"BIFF2FONTXTRA", */f:parse_BIFF2FONTXTRA},// 0x35: INFOOPTS
	// 0x36: TABLE (BIFF2 only)
	// 0x37: TABLE2 (BIFF2 only)
	// 0x38: WNDESK
	// 0x39 ??
	// 0x3a: BEGINPREF
	// 0x3b: ENDPREF
	/*::[*/0x003e/*::]*/:{/* n:"BIFF2WINDOW2", */},// 0x3f ??
	// 0x46: SHOWSCROLL
	// 0x47: SHOWFORMULA
	// 0x48: STATUSBAR
	// 0x49: SHORTMENUS
	// 0x4A:
	// 0x4B:
	// 0x4C:
	// 0x4E:
	// 0x4F:
	// 0x58: TOOLBAR (BIFF3)
	/* - - - */ /*::[*/0x0034/*::]*/:{/* n:"DDEObjName", */},/*::[*/0x0043/*::]*/:{/* n:"BIFF2XF", */},/*::[*/0x0044/*::]*/:{/* n:"BIFF2XFINDEX", */f:parseuint16},/*::[*/0x0045/*::]*/:{/* n:"BIFF2FONTCLR", */},/*::[*/0x0056/*::]*/:{/* n:"BIFF4FMTCNT", */},/* 16-bit cnt, similar to BIFF2 */ /*::[*/0x007e/*::]*/:{/* n:"RK", */},/* Not necessarily same as 0x027e */ /*::[*/0x007f/*::]*/:{/* n:"ImData", */f:parse_ImData},/*::[*/0x0087/*::]*/:{/* n:"Addin", */},/*::[*/0x0088/*::]*/:{/* n:"Edg", */},/*::[*/0x0089/*::]*/:{/* n:"Pub", */},// 0x8A
	// 0x8B LH: alternate menu key flag (BIFF3/4)
	// 0x8E
	// 0x8F
	/*::[*/0x0091/*::]*/:{/* n:"Sub", */},// 0x93 STYLE
	/*::[*/0x0094/*::]*/:{/* n:"LHRecord", */},/*::[*/0x0095/*::]*/:{/* n:"LHNGraph", */},/*::[*/0x0096/*::]*/:{/* n:"Sound", */},// 0xA2 FNPROTO: function prototypes (BIFF4)
	// 0xA3
	// 0xA8
	/*::[*/0x00a9/*::]*/:{/* n:"CoordList", */},/*::[*/0x00ab/*::]*/:{/* n:"GCW", */},/*::[*/0x00bc/*::]*/:{/* n:"ShrFmla", */},/* Not necessarily same as 0x04bc */ /*::[*/0x00bf/*::]*/:{/* n:"ToolbarHdr", */},/*::[*/0x00c0/*::]*/:{/* n:"ToolbarEnd", */},/*::[*/0x00c2/*::]*/:{/* n:"AddMenu", */},/*::[*/0x00c3/*::]*/:{/* n:"DelMenu", */},/*::[*/0x00d6/*::]*/:{/* n:"RString", */f:parse_RString},/*::[*/0x00df/*::]*/:{/* n:"UDDesc", */},/*::[*/0x00ea/*::]*/:{/* n:"TabIdConf", */},/*::[*/0x0162/*::]*/:{/* n:"XL5Modify", */},/*::[*/0x01a5/*::]*/:{/* n:"FileSharing2", */},/*::[*/0x0206/*::]*/:{/* n:"Formula", */f:parse_Formula},/*::[*/0x0209/*::]*/:{/* n:"BOF", */f:parse_BOF},/*::[*/0x0218/*::]*/:{/* n:"Lbl", */f:parse_Lbl},/*::[*/0x0223/*::]*/:{/* n:"ExternName", */f:parse_ExternName},/*::[*/0x0231/*::]*/:{/* n:"Font", */},/*::[*/0x0243/*::]*/:{/* n:"BIFF3XF", */},/*::[*/0x0406/*::]*/:{/* n:"Formula", */f:parse_Formula},/*::[*/0x0409/*::]*/:{/* n:"BOF", */f:parse_BOF},/*::[*/0x0443/*::]*/:{/* n:"BIFF4XF", */},/*::[*/0x086d/*::]*/:{/* n:"FeatInfo", */},/*::[*/0x0873/*::]*/:{/* n:"FeatInfo11", */},/*::[*/0x0881/*::]*/:{/* n:"SXAddl12", */},/*::[*/0x08c0/*::]*/:{/* n:"AutoWebPub", */},/*::[*/0x08c1/*::]*/:{/* n:"ListObj", */},/*::[*/0x08c2/*::]*/:{/* n:"ListField", */},/*::[*/0x08c3/*::]*/:{/* n:"ListDV", */},/*::[*/0x08c4/*::]*/:{/* n:"ListCondFmt", */},/*::[*/0x08c5/*::]*/:{/* n:"ListCF", */},/*::[*/0x08c6/*::]*/:{/* n:"FMQry", */},/*::[*/0x08c7/*::]*/:{/* n:"FMSQry", */},/*::[*/0x08c8/*::]*/:{/* n:"PLV", */},/*::[*/0x08c9/*::]*/:{/* n:"LnExt", */},/*::[*/0x08ca/*::]*/:{/* n:"MkrExt", */},/*::[*/0x08cb/*::]*/:{/* n:"CrtCoopt", */},/*::[*/0x08d6/*::]*/:{/* n:"FRTArchId$", */r:12},/*::[*/0x7262/*::]*/:{}};function write_biff_rec(ba/*:BufArray*/,type/*:number*/,payload,length/*:?number*/)/*:void*/{var t/*:number*/=type;if(isNaN(t))return;var len=length||(payload||[]).length||0;var o=ba.next(4);o.write_shift(2,t);o.write_shift(2,len);if(/*:: len != null &&*/len>0&&is_buf(payload))ba.push(payload);}/* note: browser DOM element cannot see mso- style attrs, must parse */function html_to_sheet(str/*:string*/,_opts)/*:Workbook*/{var opts=_opts||{};var ws/*:Worksheet*/=opts.dense?[]/*:any*/:{}/*:any*/;str=str.replace(/<!--.*?-->/g,"");var mtch/*:any*/=str.match(/<table/i);if(!mtch)throw new Error("Invalid HTML: could not find <table>");var mtch2/*:any*/=str.match(/<\/table/i);var i/*:number*/=mtch.index,j/*:number*/=mtch2&&mtch2.index||str.length;var rows=split_regex(str.slice(i,j),/(:?<tr[^>]*>)/i,"<tr>");var R=-1,C=0,RS=0,CS=0;var range/*:Range*/={s:{r:10000000,c:10000000},e:{r:0,c:0}};var merges/*:Array<Range>*/=[];for(i=0;i<rows.length;++i){var row=rows[i].trim();var hd=row.slice(0,3).toLowerCase();if(hd=="<tr"){++R;if(opts.sheetRows&&opts.sheetRows<=R){--R;break;}C=0;continue;}if(hd!="<td"&&hd!="<th")continue;var cells=row.split(/<\/t[dh]>/i);for(j=0;j<cells.length;++j){var cell=cells[j].trim();if(!cell.match(/<t[dh]/i))continue;var m=cell,cc=0;/* TODO: parse styles etc */while(m.charAt(0)=="<"&&(cc=m.indexOf(">"))>-1)m=m.slice(cc+1);for(var midx=0;midx<merges.length;++midx){var _merge/*:Range*/=merges[midx];if(_merge.s.c==C&&_merge.s.r<R&&R<=_merge.e.r){C=_merge.e.c+1;midx=-1;}}var tag=parsexmltag(cell.slice(0,cell.indexOf(">")));CS=tag.colspan?+tag.colspan:1;if((RS=+tag.rowspan)>1||CS>1)merges.push({s:{r:R,c:C},e:{r:R+(RS||1)-1,c:C+CS-1}});var _t/*:string*/=tag.t||tag["data-t"]||"";/* TODO: generate stub cells */if(!m.length){C+=CS;continue;}m=htmldecode(m);if(range.s.r>R)range.s.r=R;if(range.e.r<R)range.e.r=R;if(range.s.c>C)range.s.c=C;if(range.e.c<C)range.e.c=C;if(!m.length){C+=CS;continue;}var o/*:Cell*/={t:'s',v:m};if(opts.raw||!m.trim().length||_t=='s');else if(m==='TRUE')o={t:'b',v:true};else if(m==='FALSE')o={t:'b',v:false};else if(!isNaN(fuzzynum(m)))o={t:'n',v:fuzzynum(m)};else if(!isNaN(fuzzydate(m).getDate())){o={t:'d',v:parseDate(m)}/*:any*/;if(!opts.cellDates)o={t:'n',v:datenum(o.v)}/*:any*/;o.z=opts.dateNF||table_fmt[14];}if(opts.dense){if(!ws[R])ws[R]=[];ws[R][C]=o;}else ws[encode_cell({r:R,c:C})]=o;C+=CS;}}ws['!ref']=encode_range(range);if(merges.length)ws["!merges"]=merges;return ws;}function html_to_workbook(str/*:string*/,opts)/*:Workbook*/{var mtch=str.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);if(!mtch||mtch.length==0)throw new Error("Invalid HTML: could not find <table>");if(mtch.length==1)return sheet_to_workbook(html_to_sheet(mtch[0],opts),opts);var wb=book_new();mtch.forEach(function(s,idx){book_append_sheet(wb,html_to_sheet(s,opts),"Sheet"+(idx+1));});return wb;}/* OpenDocument */function parse_text_p(text/*:string*/ /*::, tag*/)/*:Array<any>*/{/* 6.1.2 White Space Characters */var fixed=text.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function($$,$1){return Array(parseInt($1,10)+1).join(" ");}).replace(/<text:tab[^>]*\/>/g,"\t").replace(/<text:line-break\/>/g,"\n");var v=unescapexml(fixed.replace(/<[^>]*>/g,""));return [v];}var number_formats_ods={/* ods name: [short ssf fmt, long ssf fmt] */day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],/* there is no native representation of LO "Q" format */quarter:["\\Qm","m\\\"th quarter\""]};function parse_content_xml(d/*:string*/,_opts)/*:Workbook*/{var opts=_opts||{};var str=xlml_normalize(d);var state/*:Array<any>*/=[],tmp;var tag/*:: = {}*/;var NFtag={name:""},NF="",pidx=0;var sheetag/*:: = {name:"", '??????':""}*/;var rowtag/*:: = {'??????':""}*/;var Sheets={},SheetNames/*:Array<string>*/=[];var ws=opts.dense?[]/*:any*/:{}/*:any*/;var Rn,q/*:: :any = ({t:"", v:null, z:null, w:"",c:[],}:any)*/;var ctag={value:""}/*:any*/;var textp="",textpidx=0;var textR=[];var R=-1,C=-1,range={s:{r:1000000,c:10000000},e:{r:0,c:0}};var row_ol=0;var number_format_map={};var merges/*:Array<Range>*/=[],mrange={},mR=0,mC=0;var rowinfo/*:Array<RowInfo>*/=[],rowpeat=1,colpeat=1;var arrayf/*:Array<[Range, string]>*/=[];var WB={Names:[]};var atag={}/*:any*/;var _Ref/*:[string, string]*/=["",""];var comments/*:Array<Comment>*/=[],comment/*:Comment*/={}/*:any*/;var creator="",creatoridx=0;var isstub=false,intable=false;var i=0;xlmlregex.lastIndex=0;str=str.replace(/<!--([\s\S]*?)-->/mg,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");while(Rn=xlmlregex.exec(str))switch(Rn[3]=Rn[3].replace(/_.*$/,"")){case'table':case'?????????':// 9.1.2 <table:table>
	if(Rn[1]==='/'){if(range.e.c>=range.s.c&&range.e.r>=range.s.r)ws['!ref']=encode_range(range);else ws['!ref']="A1:A1";if(opts.sheetRows>0&&opts.sheetRows<=range.e.r){ws['!fullref']=ws['!ref'];range.e.r=opts.sheetRows-1;ws['!ref']=encode_range(range);}if(merges.length)ws['!merges']=merges;if(rowinfo.length)ws["!rows"]=rowinfo;sheetag.name=sheetag['??????']||sheetag.name;if(typeof JSON!=='undefined')JSON.stringify(sheetag);SheetNames.push(sheetag.name);Sheets[sheetag.name]=ws;intable=false;}else if(Rn[0].charAt(Rn[0].length-2)!=='/'){sheetag=parsexmltag(Rn[0],false);R=C=-1;range.s.r=range.s.c=10000000;range.e.r=range.e.c=0;ws=opts.dense?[]/*:any*/:{}/*:any*/;merges=[];rowinfo=[];intable=true;}break;case'table-row-group':// 9.1.9 <table:table-row-group>
	if(Rn[1]==="/")--row_ol;else ++row_ol;break;case'table-row':case'???':// 9.1.3 <table:table-row>
	if(Rn[1]==='/'){R+=rowpeat;rowpeat=1;break;}rowtag=parsexmltag(Rn[0],false);if(rowtag['??????'])R=rowtag['??????']-1;else if(R==-1)R=0;rowpeat=+rowtag['number-rows-repeated']||1;/* TODO: remove magic */if(rowpeat<10)for(i=0;i<rowpeat;++i)if(row_ol>0)rowinfo[R+i]={level:row_ol};C=-1;break;case'covered-table-cell':// 9.1.5 <table:covered-table-cell>
	if(Rn[1]!=='/')++C;if(opts.sheetStubs){if(opts.dense){if(!ws[R])ws[R]=[];ws[R][C]={t:'z'};}else ws[encode_cell({r:R,c:C})]={t:'z'};}textp="";textR=[];break;/* stub */case'table-cell':case'??????':if(Rn[0].charAt(Rn[0].length-2)==='/'){++C;ctag=parsexmltag(Rn[0],false);colpeat=parseInt(ctag['number-columns-repeated']||"1",10);q={t:'z',v:null/*:: , z:null, w:"",c:[]*/}/*:any*/;if(ctag.formula&&opts.cellFormula!=false)q.f=ods_to_csf_formula(unescapexml(ctag.formula));if((ctag['????????????']||ctag['value-type'])=="string"){q.t="s";q.v=unescapexml(ctag['string-value']||"");if(opts.dense){if(!ws[R])ws[R]=[];ws[R][C]=q;}else {ws[encode_cell({r:R,c:C})]=q;}}C+=colpeat-1;}else if(Rn[1]!=='/'){++C;textp="";textpidx=0;textR=[];colpeat=1;var rptR=rowpeat?R+rowpeat-1:R;if(C>range.e.c)range.e.c=C;if(C<range.s.c)range.s.c=C;if(R<range.s.r)range.s.r=R;if(rptR>range.e.r)range.e.r=rptR;ctag=parsexmltag(Rn[0],false);comments=[];comment={}/*:any*/;q={t:ctag['????????????']||ctag['value-type'],v:null/*:: , z:null, w:"",c:[]*/}/*:any*/;if(opts.cellFormula){if(ctag.formula)ctag.formula=unescapexml(ctag.formula);if(ctag['number-matrix-columns-spanned']&&ctag['number-matrix-rows-spanned']){mR=parseInt(ctag['number-matrix-rows-spanned'],10)||0;mC=parseInt(ctag['number-matrix-columns-spanned'],10)||0;mrange={s:{r:R,c:C},e:{r:R+mR-1,c:C+mC-1}};q.F=encode_range(mrange);arrayf.push([mrange,q.F]);}if(ctag.formula)q.f=ods_to_csf_formula(ctag.formula);else for(i=0;i<arrayf.length;++i)if(R>=arrayf[i][0].s.r&&R<=arrayf[i][0].e.r)if(C>=arrayf[i][0].s.c&&C<=arrayf[i][0].e.c)q.F=arrayf[i][1];}if(ctag['number-columns-spanned']||ctag['number-rows-spanned']){mR=parseInt(ctag['number-rows-spanned'],10)||0;mC=parseInt(ctag['number-columns-spanned'],10)||0;mrange={s:{r:R,c:C},e:{r:R+mR-1,c:C+mC-1}};merges.push(mrange);}/* 19.675.2 table:number-columns-repeated */if(ctag['number-columns-repeated'])colpeat=parseInt(ctag['number-columns-repeated'],10);/* 19.385 office:value-type */switch(q.t){case'boolean':q.t='b';q.v=parsexmlbool(ctag['boolean-value']);break;case'float':q.t='n';q.v=parseFloat(ctag.value);break;case'percentage':q.t='n';q.v=parseFloat(ctag.value);break;case'currency':q.t='n';q.v=parseFloat(ctag.value);break;case'date':q.t='d';q.v=parseDate(ctag['date-value']);if(!opts.cellDates){q.t='n';q.v=datenum(q.v);}q.z='m/d/yy';break;case'time':q.t='n';q.v=parse_isodur(ctag['time-value'])/86400;if(opts.cellDates){q.t='d';q.v=numdate(q.v);}q.z='HH:MM:SS';break;case'number':q.t='n';q.v=parseFloat(ctag['????????????']);break;default:if(q.t==='string'||q.t==='text'||!q.t){q.t='s';if(ctag['string-value']!=null){textp=unescapexml(ctag['string-value']);textR=[];}}else throw new Error('Unsupported value type '+q.t);}}else {isstub=false;if(q.t==='s'){q.v=textp||'';if(textR.length)q.R=textR;isstub=textpidx==0;}if(atag.Target)q.l=atag;if(comments.length>0){q.c=comments;comments=[];}if(textp&&opts.cellText!==false)q.w=textp;if(isstub){q.t="z";delete q.v;}if(!isstub||opts.sheetStubs){if(!(opts.sheetRows&&opts.sheetRows<=R)){for(var rpt=0;rpt<rowpeat;++rpt){colpeat=parseInt(ctag['number-columns-repeated']||"1",10);if(opts.dense){if(!ws[R+rpt])ws[R+rpt]=[];ws[R+rpt][C]=rpt==0?q:dup(q);while(--colpeat>0)ws[R+rpt][C+colpeat]=dup(q);}else {ws[encode_cell({r:R+rpt,c:C})]=q;while(--colpeat>0)ws[encode_cell({r:R+rpt,c:C+colpeat})]=dup(q);}if(range.e.c<=C)range.e.c=C;}}}colpeat=parseInt(ctag['number-columns-repeated']||"1",10);C+=colpeat-1;colpeat=0;q={/*:: t:"", v:null, z:null, w:"",c:[]*/};textp="";textR=[];}atag={}/*:any*/;break;// 9.1.4 <table:table-cell>
	/* pure state */case'document':// TODO: <office:document> is the root for FODS
	case'document-content':case'??????????????????':// 3.1.3.2 <office:document-content>
	case'spreadsheet':case'??????':// 3.7 <office:spreadsheet>
	case'scripts':// 3.12 <office:scripts>
	case'styles':// TODO <office:styles>
	case'font-face-decls':// 3.14 <office:font-face-decls>
	case'master-styles':// 3.15.4 <office:master-styles> -- relevant for FODS
	if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw "Bad state: "+tmp;}else if(Rn[0].charAt(Rn[0].length-2)!=='/')state.push([Rn[3],true]);break;case'annotation':// 14.1 <office:annotation>
	if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw "Bad state: "+tmp;comment.t=textp;if(textR.length)/*::(*/comment/*:: :any)*/.R=textR;comment.a=creator;comments.push(comment);}else if(Rn[0].charAt(Rn[0].length-2)!=='/'){state.push([Rn[3],false]);}creator="";creatoridx=0;textp="";textpidx=0;textR=[];break;case'creator':// 4.3.2.7 <dc:creator>
	if(Rn[1]==='/'){creator=str.slice(creatoridx,Rn.index);}else creatoridx=Rn.index+Rn[0].length;break;/* ignore state */case'meta':case'?????????':// TODO: <office:meta> <uof:?????????> FODS/UOF
	case'settings':// TODO: <office:settings>
	case'config-item-set':// TODO: <office:config-item-set>
	case'config-item-map-indexed':// TODO: <office:config-item-map-indexed>
	case'config-item-map-entry':// TODO: <office:config-item-map-entry>
	case'config-item-map-named':// TODO: <office:config-item-map-entry>
	case'shapes':// 9.2.8 <table:shapes>
	case'frame':// 10.4.2 <draw:frame>
	case'text-box':// 10.4.3 <draw:text-box>
	case'image':// 10.4.4 <draw:image>
	case'data-pilot-tables':// 9.6.2 <table:data-pilot-tables>
	case'list-style':// 16.30 <text:list-style>
	case'form':// 13.13 <form:form>
	case'dde-links':// 9.8 <table:dde-links>
	case'event-listeners':// TODO
	case'chart':// TODO
	if(Rn[1]==='/'){if((tmp=state.pop())[0]!==Rn[3])throw "Bad state: "+tmp;}else if(Rn[0].charAt(Rn[0].length-2)!=='/')state.push([Rn[3],false]);textp="";textpidx=0;textR=[];break;case'scientific-number':// TODO: <number:scientific-number>
	break;case'currency-symbol':// TODO: <number:currency-symbol>
	break;case'currency-style':// TODO: <number:currency-style>
	break;case'number-style':// 16.27.2 <number:number-style>
	case'percentage-style':// 16.27.9 <number:percentage-style>
	case'date-style':// 16.27.10 <number:date-style>
	case'time-style':// 16.27.18 <number:time-style>
	if(Rn[1]==='/'){number_format_map[NFtag.name]=NF;if((tmp=state.pop())[0]!==Rn[3])throw "Bad state: "+tmp;}else if(Rn[0].charAt(Rn[0].length-2)!=='/'){NF="";NFtag=parsexmltag(Rn[0],false);state.push([Rn[3],true]);}break;case'script':break;// 3.13 <office:script>
	case'libraries':break;// TODO: <ooo:libraries>
	case'automatic-styles':break;// 3.15.3 <office:automatic-styles>
	case'default-style':// TODO: <style:default-style>
	case'page-layout':break;// TODO: <style:page-layout>
	case'style':// 16.2 <style:style>
	break;case'map':break;// 16.3 <style:map>
	case'font-face':break;// 16.21 <style:font-face>
	case'paragraph-properties':break;// 17.6 <style:paragraph-properties>
	case'table-properties':break;// 17.15 <style:table-properties>
	case'table-column-properties':break;// 17.16 <style:table-column-properties>
	case'table-row-properties':break;// 17.17 <style:table-row-properties>
	case'table-cell-properties':break;// 17.18 <style:table-cell-properties>
	case'number':// 16.27.3 <number:number>
	switch(state[state.length-1][0]){case'time-style':case'date-style':tag=parsexmltag(Rn[0],false);NF+=number_formats_ods[Rn[3]][tag.style==='long'?1:0];break;}break;case'fraction':break;// TODO 16.27.6 <number:fraction>
	case'day':// 16.27.11 <number:day>
	case'month':// 16.27.12 <number:month>
	case'year':// 16.27.13 <number:year>
	case'era':// 16.27.14 <number:era>
	case'day-of-week':// 16.27.15 <number:day-of-week>
	case'week-of-year':// 16.27.16 <number:week-of-year>
	case'quarter':// 16.27.17 <number:quarter>
	case'hours':// 16.27.19 <number:hours>
	case'minutes':// 16.27.20 <number:minutes>
	case'seconds':// 16.27.21 <number:seconds>
	case'am-pm':// 16.27.22 <number:am-pm>
	switch(state[state.length-1][0]){case'time-style':case'date-style':tag=parsexmltag(Rn[0],false);NF+=number_formats_ods[Rn[3]][tag.style==='long'?1:0];break;}break;case'boolean-style':break;// 16.27.23 <number:boolean-style>
	case'boolean':break;// 16.27.24 <number:boolean>
	case'text-style':break;// 16.27.25 <number:text-style>
	case'text':// 16.27.26 <number:text>
	if(Rn[0].slice(-2)==="/>")break;else if(Rn[1]==="/")switch(state[state.length-1][0]){case'number-style':case'date-style':case'time-style':NF+=str.slice(pidx,Rn.index);break;}else pidx=Rn.index+Rn[0].length;break;case'named-range':// 9.4.12 <table:named-range>
	tag=parsexmltag(Rn[0],false);_Ref=ods_to_csf_3D(tag['cell-range-address']);var nrange={Name:tag.name,Ref:_Ref[0]+'!'+_Ref[1]}/*:any*/;if(intable)nrange.Sheet=SheetNames.length;WB.Names.push(nrange);break;case'text-content':break;// 16.27.27 <number:text-content>
	case'text-properties':break;// 16.27.27 <style:text-properties>
	case'embedded-text':break;// 16.27.4 <number:embedded-text>
	case'body':case'????????????':break;// 3.3 16.9.6 19.726.3
	case'forms':break;// 12.25.2 13.2
	case'table-column':break;// 9.1.6 <table:table-column>
	case'table-header-rows':break;// 9.1.7 <table:table-header-rows>
	case'table-rows':break;// 9.1.12 <table:table-rows>
	/* TODO: outline levels */case'table-column-group':break;// 9.1.10 <table:table-column-group>
	case'table-header-columns':break;// 9.1.11 <table:table-header-columns>
	case'table-columns':break;// 9.1.12 <table:table-columns>
	case'null-date':break;// 9.4.2 <table:null-date> TODO: date1904
	case'graphic-properties':break;// 17.21 <style:graphic-properties>
	case'calculation-settings':break;// 9.4.1 <table:calculation-settings>
	case'named-expressions':break;// 9.4.11 <table:named-expressions>
	case'label-range':break;// 9.4.9 <table:label-range>
	case'label-ranges':break;// 9.4.10 <table:label-ranges>
	case'named-expression':break;// 9.4.13 <table:named-expression>
	case'sort':break;// 9.4.19 <table:sort>
	case'sort-by':break;// 9.4.20 <table:sort-by>
	case'sort-groups':break;// 9.4.22 <table:sort-groups>
	case'tab':break;// 6.1.4 <text:tab>
	case'line-break':break;// 6.1.5 <text:line-break>
	case'span':break;// 6.1.7 <text:span>
	case'p':case'?????????':// 5.1.3 <text:p>
	if(['master-styles'].indexOf(state[state.length-1][0])>-1)break;if(Rn[1]==='/'&&(!ctag||!ctag['string-value'])){var ptp=parse_text_p(str.slice(textpidx,Rn.index));textp=(textp.length>0?textp+"\n":"")+ptp[0];}else {parsexmltag(Rn[0],false);textpidx=Rn.index+Rn[0].length;}break;// <text:p>
	case's':break;// <text:s>
	case'database-range':// 9.4.15 <table:database-range>
	if(Rn[1]==='/')break;try{_Ref=ods_to_csf_3D(parsexmltag(Rn[0])['target-range-address']);Sheets[_Ref[0]]['!autofilter']={ref:_Ref[1]};}catch(e){/* empty */}break;case'date':break;// <*:date>
	case'object':break;// 10.4.6.2 <draw:object>
	case'title':case'??????':break;// <*:title> OR <uof:??????>
	case'desc':break;// <*:desc>
	case'binary-data':break;// 10.4.5 TODO: b64 blob
	/* 9.2 Advanced Tables */case'table-source':break;// 9.2.6
	case'scenario':break;// 9.2.6
	case'iteration':break;// 9.4.3 <table:iteration>
	case'content-validations':break;// 9.4.4 <table:
	case'content-validation':break;// 9.4.5 <table:
	case'help-message':break;// 9.4.6 <table:
	case'error-message':break;// 9.4.7 <table:
	case'database-ranges':break;// 9.4.14 <table:database-ranges>
	case'filter':break;// 9.5.2 <table:filter>
	case'filter-and':break;// 9.5.3 <table:filter-and>
	case'filter-or':break;// 9.5.4 <table:filter-or>
	case'filter-condition':break;// 9.5.5 <table:filter-condition>
	case'list-level-style-bullet':break;// 16.31 <text:
	case'list-level-style-number':break;// 16.32 <text:
	case'list-level-properties':break;// 17.19 <style:
	/* 7.3 Document Fields */case'sender-firstname':// 7.3.6.2
	case'sender-lastname':// 7.3.6.3
	case'sender-initials':// 7.3.6.4
	case'sender-title':// 7.3.6.5
	case'sender-position':// 7.3.6.6
	case'sender-email':// 7.3.6.7
	case'sender-phone-private':// 7.3.6.8
	case'sender-fax':// 7.3.6.9
	case'sender-company':// 7.3.6.10
	case'sender-phone-work':// 7.3.6.11
	case'sender-street':// 7.3.6.12
	case'sender-city':// 7.3.6.13
	case'sender-postal-code':// 7.3.6.14
	case'sender-country':// 7.3.6.15
	case'sender-state-or-province':// 7.3.6.16
	case'author-name':// 7.3.7.1
	case'author-initials':// 7.3.7.2
	case'chapter':// 7.3.8
	case'file-name':// 7.3.9
	case'template-name':// 7.3.9
	case'sheet-name':// 7.3.9
	break;case'event-listener':break;/* TODO: FODS Properties */case'initial-creator':case'creation-date':case'print-date':case'generator':case'document-statistic':case'user-defined':case'editing-duration':case'editing-cycles':break;/* TODO: FODS Config */case'config-item':break;/* TODO: style tokens */case'page-number':break;// TODO <text:page-number>
	case'page-count':break;// TODO <text:page-count>
	case'time':break;// TODO <text:time>
	/* 9.3 Advanced Table Cells */case'cell-range-source':break;// 9.3.1 <table:
	case'detective':break;// 9.3.2 <table:
	case'operation':break;// 9.3.3 <table:
	case'highlighted-range':break;// 9.3.4 <table:
	/* 9.6 Data Pilot Tables <table: */case'data-pilot-table':// 9.6.3
	case'source-cell-range':// 9.6.5
	case'source-service':// 9.6.6
	case'data-pilot-field':// 9.6.7
	case'data-pilot-level':// 9.6.8
	case'data-pilot-subtotals':// 9.6.9
	case'data-pilot-subtotal':// 9.6.10
	case'data-pilot-members':// 9.6.11
	case'data-pilot-member':// 9.6.12
	case'data-pilot-display-info':// 9.6.13
	case'data-pilot-sort-info':// 9.6.14
	case'data-pilot-layout-info':// 9.6.15
	case'data-pilot-field-reference':// 9.6.16
	case'data-pilot-groups':// 9.6.17
	case'data-pilot-group':// 9.6.18
	case'data-pilot-group-member':// 9.6.19
	break;/* 10.3 Drawing Shapes */case'rect':// 10.3.2
	break;/* 14.6 DDE Connections */case'dde-connection-decls':// 14.6.2 <text:
	case'dde-connection-decl':// 14.6.3 <text:
	case'dde-link':// 14.6.4 <table:
	case'dde-source':// 14.6.5 <office:
	break;case'properties':break;// 13.7 <form:properties>
	case'property':break;// 13.8 <form:property>
	case'a':// 6.1.8 hyperlink
	if(Rn[1]!=='/'){atag=parsexmltag(Rn[0],false);if(!atag.href)break;atag.Target=unescapexml(atag.href);delete atag.href;if(atag.Target.charAt(0)=="#"&&atag.Target.indexOf(".")>-1){_Ref=ods_to_csf_3D(atag.Target.slice(1));atag.Target="#"+_Ref[0]+"!"+_Ref[1];}else if(atag.Target.match(/^\.\.[\\\/]/))atag.Target=atag.Target.slice(3);}break;/* non-standard */case'table-protection':break;case'data-pilot-grand-total':break;// <table:
	case'office-document-common-attrs':break;// bare
	default:switch(Rn[2]){case'dc:':// TODO: properties
	case'calcext:':// ignore undocumented extensions
	case'loext:':// ignore undocumented extensions
	case'ooo:':// ignore undocumented extensions
	case'chartooo:':// ignore undocumented extensions
	case'draw:':// TODO: drawing
	case'style:':// TODO: styles
	case'chart:':// TODO: charts
	case'form:':// TODO: forms
	case'uof:':// TODO: uof
	case'???:':// TODO: uof
	case'???:':// TODO: uof
	break;default:if(opts.WTF)throw new Error(Rn);}}var out/*:Workbook*/={Sheets:Sheets,SheetNames:SheetNames,Workbook:WB}/*:any*/;if(opts.bookSheets)delete/*::(*/out/*:: :any)*/.Sheets;return out;}function parse_ods(zip/*:ZIPFile*/,opts/*:?ParseOpts*/)/*:Workbook*/{opts=opts||{}/*:any*/;if(safegetzipfile(zip,'META-INF/manifest.xml'))parse_manifest(getzipdata(zip,'META-INF/manifest.xml'),opts);var content=getzipstr(zip,'content.xml');if(!content)throw new Error("Missing content.xml in ODS / UOF file");var wb=parse_content_xml(utf8read(content),opts);if(safegetzipfile(zip,'meta.xml'))wb.Props=parse_core_props(getzipdata(zip,'meta.xml'));return wb;}function parse_fods(data/*:string*/,opts/*:?ParseOpts*/)/*:Workbook*/{return parse_content_xml(data,opts);}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */function u8_to_dataview(array){return new DataView(array.buffer,array.byteOffset,array.byteLength);}function u8str(u8){return typeof TextDecoder!="undefined"?new TextDecoder().decode(u8):utf8read(a2s(u8));}function u8concat(u8a){var len=u8a.reduce(function(acc,x){return acc+x.length;},0);var out=new Uint8Array(len);var off=0;u8a.forEach(function(u8){out.set(u8,off);off+=u8.length;});return out;}function popcnt(x){x-=x>>1&1431655765;x=(x&858993459)+(x>>2&858993459);return (x+(x>>4)&252645135)*16843009>>>24;}function readDecimal128LE(buf,offset){var exp=(buf[offset+15]&127)<<7|buf[offset+14]>>1;var mantissa=buf[offset+14]&1;for(var j=offset+13;j>=offset;--j)mantissa=mantissa*256+buf[j];return (buf[offset+15]&128?-mantissa:mantissa)*Math.pow(10,exp-6176);}function parse_varint49(buf,ptr){var l=ptr?ptr[0]:0;var usz=buf[l]&127;varint:if(buf[l++]>=128){usz|=(buf[l]&127)<<7;if(buf[l++]<128)break varint;usz|=(buf[l]&127)<<14;if(buf[l++]<128)break varint;usz|=(buf[l]&127)<<21;if(buf[l++]<128)break varint;usz+=(buf[l]&127)*Math.pow(2,28);++l;if(buf[l++]<128)break varint;usz+=(buf[l]&127)*Math.pow(2,35);++l;if(buf[l++]<128)break varint;usz+=(buf[l]&127)*Math.pow(2,42);++l;if(buf[l++]<128)break varint;}if(ptr)ptr[0]=l;return usz;}function varint_to_i32(buf){var l=0,i32=buf[l]&127;varint:if(buf[l++]>=128){i32|=(buf[l]&127)<<7;if(buf[l++]<128)break varint;i32|=(buf[l]&127)<<14;if(buf[l++]<128)break varint;i32|=(buf[l]&127)<<21;if(buf[l++]<128)break varint;i32|=(buf[l]&127)<<28;}return i32;}function parse_shallow(buf){var out=[],ptr=[0];while(ptr[0]<buf.length){var off=ptr[0];var num=parse_varint49(buf,ptr);var type=num&7;num=Math.floor(num/8);var len=0;var res;if(num==0)break;switch(type){case 0:{var l=ptr[0];while(buf[ptr[0]++]>=128);res=buf.slice(l,ptr[0]);}break;case 5:len=4;res=buf.slice(ptr[0],ptr[0]+len);ptr[0]+=len;break;case 1:len=8;res=buf.slice(ptr[0],ptr[0]+len);ptr[0]+=len;break;case 2:len=parse_varint49(buf,ptr);res=buf.slice(ptr[0],ptr[0]+len);ptr[0]+=len;break;case 3:case 4:default:throw new Error("PB Type ".concat(type," for Field ").concat(num," at offset ").concat(off));}var v={data:res,type:type};if(out[num]==null)out[num]=[v];else out[num].push(v);}return out;}function mappa(data,cb){return (data==null?void 0:data.map(function(d){return cb(d.data);}))||[];}function parse_iwa_file(buf){var _a;var out=[],ptr=[0];while(ptr[0]<buf.length){var len=parse_varint49(buf,ptr);var ai=parse_shallow(buf.slice(ptr[0],ptr[0]+len));ptr[0]+=len;var res={id:varint_to_i32(ai[1][0].data),messages:[]};ai[2].forEach(function(b){var mi=parse_shallow(b.data);var fl=varint_to_i32(mi[3][0].data);res.messages.push({meta:mi,data:buf.slice(ptr[0],ptr[0]+fl)});ptr[0]+=fl;});if((_a=ai[3])==null?void 0:_a[0])res.merge=varint_to_i32(ai[3][0].data)>>>0>0;out.push(res);}return out;}function parse_snappy_chunk(type,buf){if(type!=0)throw new Error("Unexpected Snappy chunk type ".concat(type));var ptr=[0];var usz=parse_varint49(buf,ptr);var chunks=[];while(ptr[0]<buf.length){var tag=buf[ptr[0]]&3;if(tag==0){var len=buf[ptr[0]++]>>2;if(len<60)++len;else {var c=len-59;len=buf[ptr[0]];if(c>1)len|=buf[ptr[0]+1]<<8;if(c>2)len|=buf[ptr[0]+2]<<16;if(c>3)len|=buf[ptr[0]+3]<<24;len>>>=0;len++;ptr[0]+=c;}chunks.push(buf.slice(ptr[0],ptr[0]+len));ptr[0]+=len;continue;}else {var offset=0,length=0;if(tag==1){length=(buf[ptr[0]]>>2&7)+4;offset=(buf[ptr[0]++]&224)<<3;offset|=buf[ptr[0]++];}else {length=(buf[ptr[0]++]>>2)+1;if(tag==2){offset=buf[ptr[0]]|buf[ptr[0]+1]<<8;ptr[0]+=2;}else {offset=(buf[ptr[0]]|buf[ptr[0]+1]<<8|buf[ptr[0]+2]<<16|buf[ptr[0]+3]<<24)>>>0;ptr[0]+=4;}}chunks=[u8concat(chunks)];if(offset==0)throw new Error("Invalid offset 0");if(offset>chunks[0].length)throw new Error("Invalid offset beyond length");if(length>=offset){chunks.push(chunks[0].slice(-offset));length-=offset;while(length>=chunks[chunks.length-1].length){chunks.push(chunks[chunks.length-1]);length-=chunks[chunks.length-1].length;}}chunks.push(chunks[0].slice(-offset,-offset+length));}}var o=u8concat(chunks);if(o.length!=usz)throw new Error("Unexpected length: ".concat(o.length," != ").concat(usz));return o;}function decompress_iwa_file(buf){var out=[];var l=0;while(l<buf.length){var t=buf[l++];var len=buf[l]|buf[l+1]<<8|buf[l+2]<<16;l+=3;out.push(parse_snappy_chunk(t,buf.slice(l,l+len)));l+=len;}if(l!==buf.length)throw new Error("data is not a valid framed stream!");return u8concat(out);}function parse_old_storage(buf,sst,rsst,v){var dv=u8_to_dataview(buf);var flags=dv.getUint32(4,true);var data_offset=(v>1?12:8)+popcnt(flags&(v>1?3470:398))*4;var ridx=-1,sidx=-1,ieee=NaN,dt=new Date(2001,0,1);if(flags&512){ridx=dv.getUint32(data_offset,true);data_offset+=4;}data_offset+=popcnt(flags&(v>1?12288:4096))*4;if(flags&16){sidx=dv.getUint32(data_offset,true);data_offset+=4;}if(flags&32){ieee=dv.getFloat64(data_offset,true);data_offset+=8;}if(flags&64){dt.setTime(dt.getTime()+dv.getFloat64(data_offset,true)*1e3);data_offset+=8;}var ret;switch(buf[2]){case 0:break;case 2:ret={t:"n",v:ieee};break;case 3:ret={t:"s",v:sst[sidx]};break;case 5:ret={t:"d",v:dt};break;case 6:ret={t:"b",v:ieee>0};break;case 7:ret={t:"n",v:ieee/86400};break;case 8:ret={t:"e",v:0};break;case 9:{if(ridx>-1)ret={t:"s",v:rsst[ridx]};else if(sidx>-1)ret={t:"s",v:sst[sidx]};else if(!isNaN(ieee))ret={t:"n",v:ieee};else throw new Error("Unsupported cell type ".concat(buf.slice(0,4)));}break;default:throw new Error("Unsupported cell type ".concat(buf.slice(0,4)));}return ret;}function parse_new_storage(buf,sst,rsst){var dv=u8_to_dataview(buf);var flags=dv.getUint32(8,true);var data_offset=12;var ridx=-1,sidx=-1,d128=NaN,ieee=NaN,dt=new Date(2001,0,1);if(flags&1){d128=readDecimal128LE(buf,data_offset);data_offset+=16;}if(flags&2){ieee=dv.getFloat64(data_offset,true);data_offset+=8;}if(flags&4){dt.setTime(dt.getTime()+dv.getFloat64(data_offset,true)*1e3);data_offset+=8;}if(flags&8){sidx=dv.getUint32(data_offset,true);data_offset+=4;}if(flags&16){ridx=dv.getUint32(data_offset,true);data_offset+=4;}var ret;switch(buf[1]){case 0:break;case 2:ret={t:"n",v:d128};break;case 3:ret={t:"s",v:sst[sidx]};break;case 5:ret={t:"d",v:dt};break;case 6:ret={t:"b",v:ieee>0};break;case 7:ret={t:"n",v:ieee/86400};break;case 8:ret={t:"e",v:0};break;case 9:{if(ridx>-1)ret={t:"s",v:rsst[ridx]};else throw new Error("Unsupported cell type ".concat(buf[1]," : ").concat(flags&31," : ").concat(buf.slice(0,4)));}break;case 10:ret={t:"n",v:d128};break;default:throw new Error("Unsupported cell type ".concat(buf[1]," : ").concat(flags&31," : ").concat(buf.slice(0,4)));}return ret;}function parse_cell_storage(buf,sst,rsst){switch(buf[0]){case 0:case 1:case 2:case 3:return parse_old_storage(buf,sst,rsst,buf[0]);case 5:return parse_new_storage(buf,sst,rsst);default:throw new Error("Unsupported payload version ".concat(buf[0]));}}function parse_TSP_Reference(buf){var pb=parse_shallow(buf);return parse_varint49(pb[1][0].data);}function parse_TST_TableDataList(M,root){var pb=parse_shallow(root.data);var type=varint_to_i32(pb[1][0].data);var entries=pb[3];var data=[];(entries||[]).forEach(function(entry){var le=parse_shallow(entry.data);var key=varint_to_i32(le[1][0].data)>>>0;switch(type){case 1:data[key]=u8str(le[3][0].data);break;case 8:{var rt=M[parse_TSP_Reference(le[9][0].data)][0];var rtp=parse_shallow(rt.data);var rtpref=M[parse_TSP_Reference(rtp[1][0].data)][0];var mtype=varint_to_i32(rtpref.meta[1][0].data);if(mtype!=2001)throw new Error("2000 unexpected reference to ".concat(mtype));var tswpsa=parse_shallow(rtpref.data);data[key]=tswpsa[3].map(function(x){return u8str(x.data);}).join("");}break;}});return data;}function parse_TST_TileRowInfo(u8,type){var _a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l,_m,_n;var pb=parse_shallow(u8);var R=varint_to_i32(pb[1][0].data)>>>0;var cnt=varint_to_i32(pb[2][0].data)>>>0;var wide_offsets=((_b=(_a=pb[8])==null?void 0:_a[0])==null?void 0:_b.data)&&varint_to_i32(pb[8][0].data)>0||false;var used_storage_u8,used_storage;if(((_d=(_c=pb[7])==null?void 0:_c[0])==null?void 0:_d.data)&&type!=0){used_storage_u8=(_f=(_e=pb[7])==null?void 0:_e[0])==null?void 0:_f.data;used_storage=(_h=(_g=pb[6])==null?void 0:_g[0])==null?void 0:_h.data;}else if(((_j=(_i=pb[4])==null?void 0:_i[0])==null?void 0:_j.data)&&type!=1){used_storage_u8=(_l=(_k=pb[4])==null?void 0:_k[0])==null?void 0:_l.data;used_storage=(_n=(_m=pb[3])==null?void 0:_m[0])==null?void 0:_n.data;}else throw "NUMBERS Tile missing ".concat(type," cell storage");var width=wide_offsets?4:1;var used_storage_offsets=u8_to_dataview(used_storage_u8);var offsets=[];for(var C=0;C<used_storage_u8.length/2;++C){var off=used_storage_offsets.getUint16(C*2,true);if(off<65535)offsets.push([C,off]);}if(offsets.length!=cnt)throw "Expected ".concat(cnt," cells, found ").concat(offsets.length);var cells=[];for(C=0;C<offsets.length-1;++C)cells[offsets[C][0]]=used_storage.subarray(offsets[C][1]*width,offsets[C+1][1]*width);if(offsets.length>=1)cells[offsets[offsets.length-1][0]]=used_storage.subarray(offsets[offsets.length-1][1]*width);return {R:R,cells:cells};}function parse_TST_Tile(M,root){var _a;var pb=parse_shallow(root.data);var storage=((_a=pb==null?void 0:pb[7])==null?void 0:_a[0])?varint_to_i32(pb[7][0].data)>>>0>0?1:0:-1;var ri=mappa(pb[5],function(u8){return parse_TST_TileRowInfo(u8,storage);});return {nrows:varint_to_i32(pb[4][0].data)>>>0,data:ri.reduce(function(acc,x){if(!acc[x.R])acc[x.R]=[];x.cells.forEach(function(cell,C){if(acc[x.R][C])throw new Error("Duplicate cell r=".concat(x.R," c=").concat(C));acc[x.R][C]=cell;});return acc;},[])};}function parse_TST_TableModelArchive(M,root,ws){var _a;var pb=parse_shallow(root.data);var range={s:{r:0,c:0},e:{r:0,c:0}};range.e.r=(varint_to_i32(pb[6][0].data)>>>0)-1;if(range.e.r<0)throw new Error("Invalid row varint ".concat(pb[6][0].data));range.e.c=(varint_to_i32(pb[7][0].data)>>>0)-1;if(range.e.c<0)throw new Error("Invalid col varint ".concat(pb[7][0].data));ws["!ref"]=encode_range(range);var store=parse_shallow(pb[4][0].data);var sst=parse_TST_TableDataList(M,M[parse_TSP_Reference(store[4][0].data)][0]);var rsst=((_a=store[17])==null?void 0:_a[0])?parse_TST_TableDataList(M,M[parse_TSP_Reference(store[17][0].data)][0]):[];var tile=parse_shallow(store[3][0].data);var _R=0;tile[1].forEach(function(t){var tl=parse_shallow(t.data);var ref=M[parse_TSP_Reference(tl[2][0].data)][0];var mtype=varint_to_i32(ref.meta[1][0].data);if(mtype!=6002)throw new Error("6001 unexpected reference to ".concat(mtype));var _tile=parse_TST_Tile(M,ref);_tile.data.forEach(function(row,R){row.forEach(function(buf,C){var addr=encode_cell({r:_R+R,c:C});var res=parse_cell_storage(buf,sst,rsst);if(res)ws[addr]=res;});});_R+=_tile.nrows;});}function parse_TST_TableInfoArchive(M,root){var pb=parse_shallow(root.data);var out={"!ref":"A1"};var tableref=M[parse_TSP_Reference(pb[2][0].data)];var mtype=varint_to_i32(tableref[0].meta[1][0].data);if(mtype!=6001)throw new Error("6000 unexpected reference to ".concat(mtype));parse_TST_TableModelArchive(M,tableref[0],out);return out;}function parse_TN_SheetArchive(M,root){var _a;var pb=parse_shallow(root.data);var out={name:((_a=pb[1])==null?void 0:_a[0])?u8str(pb[1][0].data):"",sheets:[]};var shapeoffs=mappa(pb[2],parse_TSP_Reference);shapeoffs.forEach(function(off){M[off].forEach(function(m){var mtype=varint_to_i32(m.meta[1][0].data);if(mtype==6e3)out.sheets.push(parse_TST_TableInfoArchive(M,m));});});return out;}function parse_TN_DocumentArchive(M,root){var out=book_new();var pb=parse_shallow(root.data);var sheetoffs=mappa(pb[1],parse_TSP_Reference);sheetoffs.forEach(function(off){M[off].forEach(function(m){var mtype=varint_to_i32(m.meta[1][0].data);if(mtype==2){var root2=parse_TN_SheetArchive(M,m);root2.sheets.forEach(function(sheet,idx){book_append_sheet(out,sheet,idx==0?root2.name:root2.name+"_"+idx,true);});}});});if(out.SheetNames.length==0)throw new Error("Empty NUMBERS file");return out;}function parse_numbers_iwa(cfb){var _a,_b,_c,_d;var M={},indices=[];cfb.FullPaths.forEach(function(p){if(p.match(/\.iwpv2/))throw new Error("Unsupported password protection");});cfb.FileIndex.forEach(function(s){if(!s.name.match(/\.iwa$/))return;var o;try{o=decompress_iwa_file(s.content);}catch(e){return console.log("?? "+s.content.length+" "+(e.message||e));}var packets;try{packets=parse_iwa_file(o);}catch(e){return console.log("## "+(e.message||e));}packets.forEach(function(packet){M[packet.id]=packet.messages;indices.push(packet.id);});});if(!indices.length)throw new Error("File has no messages");var docroot=((_d=(_c=(_b=(_a=M==null?void 0:M[1])==null?void 0:_a[0])==null?void 0:_b.meta)==null?void 0:_c[1])==null?void 0:_d[0].data)&&varint_to_i32(M[1][0].meta[1][0].data)==1&&M[1][0];if(!docroot)indices.forEach(function(idx){M[idx].forEach(function(iwam){var mtype=varint_to_i32(iwam.meta[1][0].data)>>>0;if(mtype==1){if(!docroot)docroot=iwam;else throw new Error("Document has multiple roots");}});});if(!docroot)throw new Error("Cannot find Document root");return parse_TN_DocumentArchive(M,docroot);}function fix_opts_func(defaults/*:Array<Array<any> >*/)/*:{(o:any):void}*/{return function fix_opts(opts){for(var i=0;i!=defaults.length;++i){var d=defaults[i];if(opts[d[0]]===undefined)opts[d[0]]=d[1];if(d[2]==='n')opts[d[0]]=Number(opts[d[0]]);}};}function fix_read_opts(opts){fix_opts_func([['cellNF',false],/* emit cell number format string as .z */['cellHTML',true],/* emit html string as .h */['cellFormula',true],/* emit formulae as .f */['cellStyles',false],/* emits style/theme as .s */['cellText',true],/* emit formatted text as .w */['cellDates',false],/* emit date cells with type `d` */['sheetStubs',false],/* emit empty cells */['sheetRows',0,'n'],/* read n rows (0 = read all rows) */['bookDeps',false],/* parse calculation chains */['bookSheets',false],/* only try to get sheet names (no Sheets) */['bookProps',false],/* only try to get properties (no Sheets) */['bookFiles',false],/* include raw file structure (keys, files, cfb) */['bookVBA',false],/* include vba raw data (vbaraw) */['password',''],/* password */['WTF',false]/* WTF mode (throws errors) */])(opts);}function get_sheet_type(n/*:string*/)/*:string*/{if(RELS.WS.indexOf(n)>-1)return "sheet";if(n==RELS.CS)return "chart";if(n==RELS.DS)return "dialog";if(n==RELS.MS)return "macro";return n&&n.length?n:"sheet";}function safe_parse_wbrels(wbrels,sheets){if(!wbrels)return 0;try{wbrels=sheets.map(function pwbr(w){if(!w.id)w.id=w.strRelID;return [w.name,wbrels['!id'][w.id].Target,get_sheet_type(wbrels['!id'][w.id].Type)];});}catch(e){return null;}return !wbrels||wbrels.length===0?null:wbrels;}function safe_parse_sheet(zip,path/*:string*/,relsPath/*:string*/,sheet,idx/*:number*/,sheetRels,sheets,stype/*:string*/,opts,wb,themes,styles){try{sheetRels[sheet]=parse_rels(getzipstr(zip,relsPath,true),path);var data=getzipdata(zip,path);var _ws;switch(stype){case'sheet':_ws=parse_ws(data,path,idx,opts,sheetRels[sheet],wb,themes,styles);break;case'chart':_ws=parse_cs(data,path,idx,opts,sheetRels[sheet],wb,themes,styles);if(!_ws||!_ws['!drawel'])break;var dfile=resolve_path(_ws['!drawel'].Target,path);var drelsp=get_rels_path(dfile);var draw=parse_drawing(getzipstr(zip,dfile,true),parse_rels(getzipstr(zip,drelsp,true),dfile));var chartp=resolve_path(draw,dfile);var crelsp=get_rels_path(chartp);_ws=parse_chart(getzipstr(zip,chartp,true),chartp,opts,parse_rels(getzipstr(zip,crelsp,true),chartp),wb,_ws);break;case'macro':_ws=parse_ms(data,path,idx,opts,sheetRels[sheet],wb,themes,styles);break;case'dialog':_ws=parse_ds(data,path,idx,opts,sheetRels[sheet],wb,themes,styles);break;default:throw new Error("Unrecognized sheet type "+stype);}sheets[sheet]=_ws;/* scan rels for comments and threaded comments */var tcomments=[];if(sheetRels&&sheetRels[sheet])keys(sheetRels[sheet]).forEach(function(n){var dfile="";if(sheetRels[sheet][n].Type==RELS.CMNT){dfile=resolve_path(sheetRels[sheet][n].Target,path);var comments=parse_cmnt(getzipdata(zip,dfile,true),dfile,opts);if(!comments||!comments.length)return;sheet_insert_comments(_ws,comments,false);}if(sheetRels[sheet][n].Type==RELS.TCMNT){dfile=resolve_path(sheetRels[sheet][n].Target,path);tcomments=tcomments.concat(parse_tcmnt_xml(getzipdata(zip,dfile,true),opts));}});if(tcomments&&tcomments.length)sheet_insert_comments(_ws,tcomments,true,opts.people||[]);}catch(e){if(opts.WTF)throw e;}}function strip_front_slash(x/*:string*/)/*:string*/{return x.charAt(0)=='/'?x.slice(1):x;}function parse_zip(zip/*:ZIP*/,opts/*:?ParseOpts*/)/*:Workbook*/{make_ssf();opts=opts||{};fix_read_opts(opts);/* OpenDocument Part 3 Section 2.2.1 OpenDocument Package */if(safegetzipfile(zip,'META-INF/manifest.xml'))return parse_ods(zip,opts);/* UOC */if(safegetzipfile(zip,'objectdata.xml'))return parse_ods(zip,opts);/* Numbers */if(safegetzipfile(zip,'Index/Document.iwa')){if(typeof Uint8Array=="undefined")throw new Error('NUMBERS file parsing requires Uint8Array support');if(typeof parse_numbers_iwa!="undefined"){if(zip.FileIndex)return parse_numbers_iwa(zip);var _zip=CFB.utils.cfb_new();zipentries(zip).forEach(function(e){zip_add_file(_zip,e,getzipbin(zip,e));});return parse_numbers_iwa(_zip);}throw new Error('Unsupported NUMBERS file');}if(!safegetzipfile(zip,'[Content_Types].xml')){if(safegetzipfile(zip,'index.xml.gz'))throw new Error('Unsupported NUMBERS 08 file');if(safegetzipfile(zip,'index.xml'))throw new Error('Unsupported NUMBERS 09 file');throw new Error('Unsupported ZIP file');}var entries=zipentries(zip);var dir=parse_ct(getzipstr(zip,'[Content_Types].xml')/*:?any*/);var xlsb=false;var sheets,binname;if(dir.workbooks.length===0){binname="xl/workbook.xml";if(getzipdata(zip,binname,true))dir.workbooks.push(binname);}if(dir.workbooks.length===0){binname="xl/workbook.bin";if(!getzipdata(zip,binname,true))throw new Error("Could not find workbook");dir.workbooks.push(binname);xlsb=true;}if(dir.workbooks[0].slice(-3)=="bin")xlsb=true;var themes={}/*:any*/;var styles={}/*:any*/;if(!opts.bookSheets&&!opts.bookProps){strs=[];if(dir.sst)try{strs=parse_sst(getzipdata(zip,strip_front_slash(dir.sst)),dir.sst,opts);}catch(e){if(opts.WTF)throw e;}if(opts.cellStyles&&dir.themes.length)themes=parse_theme(getzipstr(zip,dir.themes[0].replace(/^\//,''),true)||"",dir.themes[0],opts);if(dir.style)styles=parse_sty(getzipdata(zip,strip_front_slash(dir.style)),dir.style,themes,opts);}/*var externbooks = */dir.links.map(function(link){try{var rels=parse_rels(getzipstr(zip,get_rels_path(strip_front_slash(link))),link);return parse_xlink(getzipdata(zip,strip_front_slash(link)),rels,link,opts);}catch(e){}});var wb=parse_wb(getzipdata(zip,strip_front_slash(dir.workbooks[0])),dir.workbooks[0],opts);var props={},propdata="";if(dir.coreprops.length){propdata=getzipdata(zip,strip_front_slash(dir.coreprops[0]),true);if(propdata)props=parse_core_props(propdata);if(dir.extprops.length!==0){propdata=getzipdata(zip,strip_front_slash(dir.extprops[0]),true);if(propdata)parse_ext_props(propdata,props,opts);}}var custprops={};if(!opts.bookSheets||opts.bookProps){if(dir.custprops.length!==0){propdata=getzipstr(zip,strip_front_slash(dir.custprops[0]),true);if(propdata)custprops=parse_cust_props(propdata,opts);}}var out={}/*:any*/;if(opts.bookSheets||opts.bookProps){if(wb.Sheets)sheets=wb.Sheets.map(function pluck(x){return x.name;});else if(props.Worksheets&&props.SheetNames.length>0)sheets=props.SheetNames;if(opts.bookProps){out.Props=props;out.Custprops=custprops;}if(opts.bookSheets&&typeof sheets!=='undefined')out.SheetNames=sheets;if(opts.bookSheets?out.SheetNames:opts.bookProps)return out;}sheets={};var deps={};if(opts.bookDeps&&dir.calcchain)deps=parse_cc(getzipdata(zip,strip_front_slash(dir.calcchain)),dir.calcchain);var i=0;var sheetRels={}/*:any*/;var path,relsPath;{var wbsheets=wb.Sheets;props.Worksheets=wbsheets.length;props.SheetNames=[];for(var j=0;j!=wbsheets.length;++j){props.SheetNames[j]=wbsheets[j].name;}}var wbext=xlsb?"bin":"xml";var wbrelsi=dir.workbooks[0].lastIndexOf("/");var wbrelsfile=(dir.workbooks[0].slice(0,wbrelsi+1)+"_rels/"+dir.workbooks[0].slice(wbrelsi+1)+".rels").replace(/^\//,"");if(!safegetzipfile(zip,wbrelsfile))wbrelsfile='xl/_rels/workbook.'+wbext+'.rels';var wbrels=parse_rels(getzipstr(zip,wbrelsfile,true),wbrelsfile.replace(/_rels.*/,"s5s"));if((dir.metadata||[]).length>=1){/* TODO: MDX and other types of metadata */opts.xlmeta=parse_xlmeta(getzipdata(zip,strip_front_slash(dir.metadata[0])),dir.metadata[0],opts);}if((dir.people||[]).length>=1){opts.people=parse_people_xml(getzipdata(zip,strip_front_slash(dir.people[0])),opts);}if(wbrels)wbrels=safe_parse_wbrels(wbrels,wb.Sheets);/* Numbers iOS hack */var nmode=getzipdata(zip,"xl/worksheets/sheet.xml",true)?1:0;wsloop:for(i=0;i!=props.Worksheets;++i){var stype="sheet";if(wbrels&&wbrels[i]){path='xl/'+wbrels[i][1].replace(/[\/]?xl\//,"");if(!safegetzipfile(zip,path))path=wbrels[i][1];if(!safegetzipfile(zip,path))path=wbrelsfile.replace(/_rels\/.*$/,"")+wbrels[i][1];stype=wbrels[i][2];}else {path='xl/worksheets/sheet'+(i+1-nmode)+"."+wbext;path=path.replace(/sheet0\./,"sheet.");}relsPath=path.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels");if(opts&&opts.sheets!=null)switch(typeof opts.sheets){case"number":if(i!=opts.sheets)continue wsloop;break;case"string":if(props.SheetNames[i].toLowerCase()!=opts.sheets.toLowerCase())continue wsloop;break;default:if(Array.isArray&&Array.isArray(opts.sheets)){var snjseen=false;for(var snj=0;snj!=opts.sheets.length;++snj){if(typeof opts.sheets[snj]=="number"&&opts.sheets[snj]==i)snjseen=1;if(typeof opts.sheets[snj]=="string"&&opts.sheets[snj].toLowerCase()==props.SheetNames[i].toLowerCase())snjseen=1;}if(!snjseen)continue wsloop;}}safe_parse_sheet(zip,path,relsPath,props.SheetNames[i],i,sheetRels,sheets,stype,opts,wb,themes,styles);}out={Directory:dir,Workbook:wb,Props:props,Custprops:custprops,Deps:deps,Sheets:sheets,SheetNames:props.SheetNames,Strings:strs,Styles:styles,Themes:themes,SSF:dup(table_fmt)}/*:any*/;if(opts&&opts.bookFiles){if(zip.files){out.keys=entries;out.files=zip.files;}else {out.keys=[];out.files={};zip.FullPaths.forEach(function(p,idx){p=p.replace(/^Root Entry[\/]/,"");out.keys.push(p);out.files[p]=zip.FileIndex[idx];});}}if(opts&&opts.bookVBA){if(dir.vba.length>0)out.vbaraw=getzipdata(zip,strip_front_slash(dir.vba[0]),true);else if(dir.defaults&&dir.defaults.bin===CT_VBA)out.vbaraw=getzipdata(zip,'xl/vbaProject.bin',true);}return out;}/* [MS-OFFCRYPTO] 2.1.1 */function parse_xlsxcfb(cfb,_opts/*:?ParseOpts*/)/*:Workbook*/{var opts=_opts||{};var f='Workbook',data=CFB.find(cfb,f);try{f='/!DataSpaces/Version';data=CFB.find(cfb,f);if(!data||!data.content)throw new Error("ECMA-376 Encrypted file missing "+f);/*var version = */parse_DataSpaceVersionInfo(data.content);/* 2.3.4.1 */f='/!DataSpaces/DataSpaceMap';data=CFB.find(cfb,f);if(!data||!data.content)throw new Error("ECMA-376 Encrypted file missing "+f);var dsm=parse_DataSpaceMap(data.content);if(dsm.length!==1||dsm[0].comps.length!==1||dsm[0].comps[0].t!==0||dsm[0].name!=="StrongEncryptionDataSpace"||dsm[0].comps[0].v!=="EncryptedPackage")throw new Error("ECMA-376 Encrypted file bad "+f);/* 2.3.4.2 */f='/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace';data=CFB.find(cfb,f);if(!data||!data.content)throw new Error("ECMA-376 Encrypted file missing "+f);var seds=parse_DataSpaceDefinition(data.content);if(seds.length!=1||seds[0]!="StrongEncryptionTransform")throw new Error("ECMA-376 Encrypted file bad "+f);/* 2.3.4.3 */f='/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary';data=CFB.find(cfb,f);if(!data||!data.content)throw new Error("ECMA-376 Encrypted file missing "+f);/*var hdr = */parse_Primary(data.content);}catch(e){}f='/EncryptionInfo';data=CFB.find(cfb,f);if(!data||!data.content)throw new Error("ECMA-376 Encrypted file missing "+f);var einfo=parse_EncryptionInfo(data.content);/* 2.3.4.4 */f='/EncryptedPackage';data=CFB.find(cfb,f);if(!data||!data.content)throw new Error("ECMA-376 Encrypted file missing "+f);/*global decrypt_agile */ /*:: declare var decrypt_agile:any; */if(einfo[0]==0x04&&typeof decrypt_agile!=='undefined')return decrypt_agile(einfo[1],data.content,opts.password||"",opts);/*global decrypt_std76 */ /*:: declare var decrypt_std76:any; */if(einfo[0]==0x02&&typeof decrypt_std76!=='undefined')return decrypt_std76(einfo[1],data.content,opts.password||"",opts);throw new Error("File is password-protected");}function firstbyte(f/*:RawData*/,o/*:?TypeOpts*/)/*:Array<number>*/{var x="";switch((o||{}).type||"base64"){case'buffer':return [f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]];case'base64':x=Base64_decode(f.slice(0,12));break;case'binary':x=f;break;case'array':return [f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7]];default:throw new Error("Unrecognized type "+(o&&o.type||"undefined"));}return [x.charCodeAt(0),x.charCodeAt(1),x.charCodeAt(2),x.charCodeAt(3),x.charCodeAt(4),x.charCodeAt(5),x.charCodeAt(6),x.charCodeAt(7)];}function read_cfb(cfb/*:CFBContainer*/,opts/*:?ParseOpts*/)/*:Workbook*/{if(CFB.find(cfb,"EncryptedPackage"))return parse_xlsxcfb(cfb,opts);return parse_xlscfb(cfb,opts);}function read_zip(data/*:RawData*/,opts/*:?ParseOpts*/)/*:Workbook*/{var zip,d=data;var o=opts||{};if(!o.type)o.type=has_buf&&Buffer.isBuffer(data)?"buffer":"base64";zip=zip_read(d,o);return parse_zip(zip,o);}function read_plaintext(data/*:string*/,o/*:ParseOpts*/)/*:Workbook*/{var i=0;main:while(i<data.length)switch(data.charCodeAt(i)){case 0x0A:case 0x0D:case 0x20:++i;break;case 0x3C:return parse_xlml(data.slice(i),o);default:break main;}return PRN.to_workbook(data,o);}function read_plaintext_raw(data/*:RawData*/,o/*:ParseOpts*/)/*:Workbook*/{var str="",bytes=firstbyte(data,o);switch(o.type){case'base64':str=Base64_decode(data);break;case'binary':str=data;break;case'buffer':str=data.toString('binary');break;case'array':str=cc2str(data);break;default:throw new Error("Unrecognized type "+o.type);}if(bytes[0]==0xEF&&bytes[1]==0xBB&&bytes[2]==0xBF)str=utf8read(str);o.type="binary";return read_plaintext(str,o);}function read_utf16(data/*:RawData*/,o/*:ParseOpts*/)/*:Workbook*/{var d=data;if(o.type=='base64')d=Base64_decode(d);d=$cptable.utils.decode(1200,d.slice(2),'str');o.type="binary";return read_plaintext(d,o);}function bstrify(data/*:string*/)/*:string*/{return !data.match(/[^\x00-\x7F]/)?data:utf8write(data);}function read_prn(data,d,o,str){if(str){o.type="string";return PRN.to_workbook(data,o);}return PRN.to_workbook(d,o);}function readSync(data/*:RawData*/,opts/*:?ParseOpts*/)/*:Workbook*/{reset_cp();var o=opts||{};if(typeof ArrayBuffer!=='undefined'&&data instanceof ArrayBuffer)return readSync(new Uint8Array(data),(o=dup(o),o.type="array",o));if(typeof Uint8Array!=='undefined'&&data instanceof Uint8Array&&!o.type)o.type=typeof Deno!=="undefined"?"buffer":"array";var d=data,n=[0,0,0,0],str=false;if(o.cellStyles){o.cellNF=true;o.sheetStubs=true;}_ssfopts={};if(o.dateNF)_ssfopts.dateNF=o.dateNF;if(!o.type)o.type=has_buf&&Buffer.isBuffer(data)?"buffer":"base64";if(o.type=="file"){o.type=has_buf?"buffer":"binary";d=read_binary(data);if(typeof Uint8Array!=='undefined'&&!has_buf)o.type="array";}if(o.type=="string"){str=true;o.type="binary";o.codepage=65001;d=bstrify(data);}if(o.type=='array'&&typeof Uint8Array!=='undefined'&&data instanceof Uint8Array&&typeof ArrayBuffer!=='undefined'){// $FlowIgnore
	var ab=new ArrayBuffer(3),vu=new Uint8Array(ab);vu.foo="bar";// $FlowIgnore
	if(!vu.foo){o=dup(o);o.type='array';return readSync(ab2a(d),o);}}switch((n=firstbyte(d,o))[0]){case 0xD0:if(n[1]===0xCF&&n[2]===0x11&&n[3]===0xE0&&n[4]===0xA1&&n[5]===0xB1&&n[6]===0x1A&&n[7]===0xE1)return read_cfb(CFB.read(d,o),o);break;case 0x09:if(n[1]<=0x08)return parse_xlscfb(d,o);break;case 0x3C:return parse_xlml(d,o);case 0x49:if(n[1]===0x49&&n[2]===0x2a&&n[3]===0x00)throw new Error("TIFF Image File is not a spreadsheet");if(n[1]===0x44)return read_wb_ID(d,o);break;case 0x54:if(n[1]===0x41&&n[2]===0x42&&n[3]===0x4C)return DIF.to_workbook(d,o);break;case 0x50:return n[1]===0x4B&&n[2]<0x09&&n[3]<0x09?read_zip(d,o):read_prn(data,d,o,str);case 0xEF:return n[3]===0x3C?parse_xlml(d,o):read_prn(data,d,o,str);case 0xFF:if(n[1]===0xFE){return read_utf16(d,o);}else if(n[1]===0x00&&n[2]===0x02&&n[3]===0x00)return WK_.to_workbook(d,o);break;case 0x00:if(n[1]===0x00){if(n[2]>=0x02&&n[3]===0x00)return WK_.to_workbook(d,o);if(n[2]===0x00&&(n[3]===0x08||n[3]===0x09))return WK_.to_workbook(d,o);}break;case 0x03:case 0x83:case 0x8B:case 0x8C:return DBF.to_workbook(d,o);case 0x7B:if(n[1]===0x5C&&n[2]===0x72&&n[3]===0x74)return RTF.to_workbook(d,o);break;case 0x0A:case 0x0D:case 0x20:return read_plaintext_raw(d,o);case 0x89:if(n[1]===0x50&&n[2]===0x4E&&n[3]===0x47)throw new Error("PNG Image File is not a spreadsheet");break;}if(DBF_SUPPORTED_VERSIONS.indexOf(n[0])>-1&&n[2]<=12&&n[3]<=31)return DBF.to_workbook(d,o);return read_prn(data,d,o,str);}/*::
	type MJRObject = {
		row: any;
		isempty: boolean;
	};
	*/function make_json_row(sheet/*:Worksheet*/,r/*:Range*/,R/*:number*/,cols/*:Array<string>*/,header/*:number*/,hdr/*:Array<any>*/,dense/*:boolean*/,o/*:Sheet2JSONOpts*/)/*:MJRObject*/{var rr=encode_row(R);var defval=o.defval,raw=o.raw||!Object.prototype.hasOwnProperty.call(o,"raw");var isempty=true;var row/*:any*/=header===1?[]:{};if(header!==1){if(Object.defineProperty)try{Object.defineProperty(row,'__rowNum__',{value:R,enumerable:false});}catch(e){row.__rowNum__=R;}else row.__rowNum__=R;}if(!dense||sheet[R])for(var C=r.s.c;C<=r.e.c;++C){var val=dense?sheet[R][C]:sheet[cols[C]+rr];if(val===undefined||val.t===undefined){if(defval===undefined)continue;if(hdr[C]!=null){row[hdr[C]]=defval;}continue;}var v=val.v;switch(val.t){case'z':if(v==null)break;continue;case'e':v=v==0?null:void 0;break;case's':case'd':case'b':case'n':break;default:throw new Error('unrecognized type '+val.t);}if(hdr[C]!=null){if(v==null){if(val.t=="e"&&v===null)row[hdr[C]]=null;else if(defval!==undefined)row[hdr[C]]=defval;else if(raw&&v===null)row[hdr[C]]=null;else continue;}else {row[hdr[C]]=raw&&(val.t!=="n"||val.t==="n"&&o.rawNumbers!==false)?v:format_cell(val,v,o);}if(v!=null)isempty=false;}}return {row:row,isempty:isempty};}function sheet_to_json(sheet/*:Worksheet*/,opts/*:?Sheet2JSONOpts*/){if(sheet==null||sheet["!ref"]==null)return [];var val={t:'n',v:0},header=0,offset=1,hdr/*:Array<any>*/=[],v=0,vv="";var r={s:{r:0,c:0},e:{r:0,c:0}};var o=opts||{};var range=o.range!=null?o.range:sheet["!ref"];if(o.header===1)header=1;else if(o.header==="A")header=2;else if(Array.isArray(o.header))header=3;else if(o.header==null)header=0;switch(typeof range){case'string':r=safe_decode_range(range);break;case'number':r=safe_decode_range(sheet["!ref"]);r.s.r=range;break;default:r=range;}if(header>0)offset=0;var rr=encode_row(r.s.r);var cols/*:Array<string>*/=[];var out/*:Array<any>*/=[];var outi=0,counter=0;var dense=Array.isArray(sheet);var R=r.s.r,C=0;var header_cnt={};if(dense&&!sheet[R])sheet[R]=[];var colinfo/*:Array<ColInfo>*/=o.skipHidden&&sheet["!cols"]||[];var rowinfo/*:Array<ColInfo>*/=o.skipHidden&&sheet["!rows"]||[];for(C=r.s.c;C<=r.e.c;++C){if((colinfo[C]||{}).hidden)continue;cols[C]=encode_col(C);val=dense?sheet[R][C]:sheet[cols[C]+rr];switch(header){case 1:hdr[C]=C-r.s.c;break;case 2:hdr[C]=cols[C];break;case 3:hdr[C]=o.header[C-r.s.c];break;default:if(val==null)val={w:"__EMPTY",t:"s"};vv=v=format_cell(val,null,o);counter=header_cnt[v]||0;if(!counter)header_cnt[v]=1;else {do{vv=v+"_"+counter++;}while(header_cnt[vv]);header_cnt[v]=counter;header_cnt[vv]=1;}hdr[C]=vv;}}for(R=r.s.r+offset;R<=r.e.r;++R){if((rowinfo[R]||{}).hidden)continue;var row=make_json_row(sheet,r,R,cols,header,hdr,dense,o);if(row.isempty===false||(header===1?o.blankrows!==false:!!o.blankrows))out[outi++]=row.row;}out.length=outi;return out;}/* simple blank workbook object */function book_new()/*:Workbook*/{return {SheetNames:[],Sheets:{}};}/* add a worksheet to the end of a given workbook */function book_append_sheet(wb/*:Workbook*/,ws/*:Worksheet*/,name/*:?string*/,roll/*:?boolean*/)/*:string*/{var i=1;if(!name)for(;i<=0xFFFF;++i,name=undefined)if(wb.SheetNames.indexOf(name="Sheet"+i)==-1)break;if(!name||wb.SheetNames.length>=0xFFFF)throw new Error("Too many worksheets");if(roll&&wb.SheetNames.indexOf(name)>=0){var m=name.match(/(^.*?)(\d+)$/);i=m&&+m[2]||0;var root=m&&m[1]||name;for(++i;i<=0xFFFF;++i)if(wb.SheetNames.indexOf(name=root+i)==-1)break;}check_ws_name(name);if(wb.SheetNames.indexOf(name)>=0)throw new Error("Worksheet with name |"+name+"| already exists!");wb.SheetNames.push(name);wb.Sheets[name]=ws;return name;}

	var sax$1 = {};

	(function (exports) {

		(function (sax) {
		  // wrapper for non-node envs
		  sax.parser = function (strict, opt) {
		    return new SAXParser(strict, opt);
		  };

		  sax.SAXParser = SAXParser;
		  sax.SAXStream = SAXStream;
		  sax.createStream = createStream; // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
		  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
		  // since that's the earliest that a buffer overrun could occur.  This way, checks are
		  // as rare as required, but as often as necessary to ensure never crossing this bound.
		  // Furthermore, buffers are only tested at most once per write(), so passing a very
		  // large string into write() might have undesirable effects, but this is manageable by
		  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
		  // edge case, result in creating at most one complete copy of the string passed in.
		  // Set to Infinity to have unlimited buffers.

		  sax.MAX_BUFFER_LENGTH = 64 * 1024;
		  var buffers = ['comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype', 'procInstName', 'procInstBody', 'entity', 'attribName', 'attribValue', 'cdata', 'script'];
		  sax.EVENTS = ['text', 'processinginstruction', 'sgmldeclaration', 'doctype', 'comment', 'opentagstart', 'attribute', 'opentag', 'closetag', 'opencdata', 'cdata', 'closecdata', 'error', 'end', 'ready', 'script', 'opennamespace', 'closenamespace'];

		  function SAXParser(strict, opt) {
		    if (!(this instanceof SAXParser)) {
		      return new SAXParser(strict, opt);
		    }

		    var parser = this;
		    clearBuffers(parser);
		    parser.q = parser.c = '';
		    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
		    parser.opt = opt || {};
		    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
		    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';
		    parser.tags = [];
		    parser.closed = parser.closedRoot = parser.sawRoot = false;
		    parser.tag = parser.error = null;
		    parser.strict = !!strict;
		    parser.noscript = !!(strict || parser.opt.noscript);
		    parser.state = S.BEGIN;
		    parser.strictEntities = parser.opt.strictEntities;
		    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
		    parser.attribList = []; // namespaces form a prototype chain.
		    // it always points at the current tag,
		    // which protos to its parent tag.

		    if (parser.opt.xmlns) {
		      parser.ns = Object.create(rootNS);
		    } // mostly just for error reporting


		    parser.trackPosition = parser.opt.position !== false;

		    if (parser.trackPosition) {
		      parser.position = parser.line = parser.column = 0;
		    }

		    emit(parser, 'onready');
		  }

		  if (!Object.create) {
		    Object.create = function (o) {
		      function F() {}

		      F.prototype = o;
		      var newf = new F();
		      return newf;
		    };
		  }

		  if (!Object.keys) {
		    Object.keys = function (o) {
		      var a = [];

		      for (var i in o) if (o.hasOwnProperty(i)) a.push(i);

		      return a;
		    };
		  }

		  function checkBufferLength(parser) {
		    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
		    var maxActual = 0;

		    for (var i = 0, l = buffers.length; i < l; i++) {
		      var len = parser[buffers[i]].length;

		      if (len > maxAllowed) {
		        // Text/cdata nodes can get big, and since they're buffered,
		        // we can get here under normal conditions.
		        // Avoid issues by emitting the text node now,
		        // so at least it won't get any bigger.
		        switch (buffers[i]) {
		          case 'textNode':
		            closeText(parser);
		            break;

		          case 'cdata':
		            emitNode(parser, 'oncdata', parser.cdata);
		            parser.cdata = '';
		            break;

		          case 'script':
		            emitNode(parser, 'onscript', parser.script);
		            parser.script = '';
		            break;

		          default:
		            error(parser, 'Max buffer length exceeded: ' + buffers[i]);
		        }
		      }

		      maxActual = Math.max(maxActual, len);
		    } // schedule the next check for the earliest possible buffer overrun.


		    var m = sax.MAX_BUFFER_LENGTH - maxActual;
		    parser.bufferCheckPosition = m + parser.position;
		  }

		  function clearBuffers(parser) {
		    for (var i = 0, l = buffers.length; i < l; i++) {
		      parser[buffers[i]] = '';
		    }
		  }

		  function flushBuffers(parser) {
		    closeText(parser);

		    if (parser.cdata !== '') {
		      emitNode(parser, 'oncdata', parser.cdata);
		      parser.cdata = '';
		    }

		    if (parser.script !== '') {
		      emitNode(parser, 'onscript', parser.script);
		      parser.script = '';
		    }
		  }

		  SAXParser.prototype = {
		    end: function () {
		      end(this);
		    },
		    write: write,
		    resume: function () {
		      this.error = null;
		      return this;
		    },
		    close: function () {
		      return this.write(null);
		    },
		    flush: function () {
		      flushBuffers(this);
		    }
		  };
		  var Stream;

		  try {
		    Stream = require$$0.Stream;
		  } catch (ex) {
		    Stream = function () {};
		  }

		  var streamWraps = sax.EVENTS.filter(function (ev) {
		    return ev !== 'error' && ev !== 'end';
		  });

		  function createStream(strict, opt) {
		    return new SAXStream(strict, opt);
		  }

		  function SAXStream(strict, opt) {
		    if (!(this instanceof SAXStream)) {
		      return new SAXStream(strict, opt);
		    }

		    Stream.apply(this);
		    this._parser = new SAXParser(strict, opt);
		    this.writable = true;
		    this.readable = true;
		    var me = this;

		    this._parser.onend = function () {
		      me.emit('end');
		    };

		    this._parser.onerror = function (er) {
		      me.emit('error', er); // if didn't throw, then means error was handled.
		      // go ahead and clear error, so we can write again.

		      me._parser.error = null;
		    };

		    this._decoder = null;
		    streamWraps.forEach(function (ev) {
		      Object.defineProperty(me, 'on' + ev, {
		        get: function () {
		          return me._parser['on' + ev];
		        },
		        set: function (h) {
		          if (!h) {
		            me.removeAllListeners(ev);
		            me._parser['on' + ev] = h;
		            return h;
		          }

		          me.on(ev, h);
		        },
		        enumerable: true,
		        configurable: false
		      });
		    });
		  }

		  SAXStream.prototype = Object.create(Stream.prototype, {
		    constructor: {
		      value: SAXStream
		    }
		  });

		  SAXStream.prototype.write = function (data) {
		    if (typeof Buffer$2 === 'function' && typeof Buffer$2.isBuffer === 'function' && Buffer$2.isBuffer(data)) {
		      if (!this._decoder) {
		        var SD = string_decoder.StringDecoder;

		        this._decoder = new SD('utf8');
		      }

		      data = this._decoder.write(data);
		    }

		    this._parser.write(data.toString());

		    this.emit('data', data);
		    return true;
		  };

		  SAXStream.prototype.end = function (chunk) {
		    if (chunk && chunk.length) {
		      this.write(chunk);
		    }

		    this._parser.end();

		    return true;
		  };

		  SAXStream.prototype.on = function (ev, handler) {
		    var me = this;

		    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
		      me._parser['on' + ev] = function () {
		        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
		        args.splice(0, 0, ev);
		        me.emit.apply(me, args);
		      };
		    }

		    return Stream.prototype.on.call(me, ev, handler);
		  }; // this really needs to be replaced with character classes.
		  // XML allows all manner of ridiculous numbers and digits.


		  var CDATA = '[CDATA[';
		  var DOCTYPE = 'DOCTYPE';
		  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
		  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
		  var rootNS = {
		    xml: XML_NAMESPACE,
		    xmlns: XMLNS_NAMESPACE
		  }; // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
		  // This implementation works on strings, a single character at a time
		  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
		  // without a significant breaking change to either this  parser, or the
		  // JavaScript language.  Implementation of an emoji-capable xml parser
		  // is left as an exercise for the reader.

		  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
		  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
		  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
		  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

		  function isWhitespace(c) {
		    return c === ' ' || c === '\n' || c === '\r' || c === '\t';
		  }

		  function isQuote(c) {
		    return c === '"' || c === '\'';
		  }

		  function isAttribEnd(c) {
		    return c === '>' || isWhitespace(c);
		  }

		  function isMatch(regex, c) {
		    return regex.test(c);
		  }

		  function notMatch(regex, c) {
		    return !isMatch(regex, c);
		  }

		  var S = 0;
		  sax.STATE = {
		    BEGIN: S++,
		    // leading byte order mark or whitespace
		    BEGIN_WHITESPACE: S++,
		    // leading whitespace
		    TEXT: S++,
		    // general stuff
		    TEXT_ENTITY: S++,
		    // &amp and such.
		    OPEN_WAKA: S++,
		    // <
		    SGML_DECL: S++,
		    // <!BLARG
		    SGML_DECL_QUOTED: S++,
		    // <!BLARG foo "bar
		    DOCTYPE: S++,
		    // <!DOCTYPE
		    DOCTYPE_QUOTED: S++,
		    // <!DOCTYPE "//blah
		    DOCTYPE_DTD: S++,
		    // <!DOCTYPE "//blah" [ ...
		    DOCTYPE_DTD_QUOTED: S++,
		    // <!DOCTYPE "//blah" [ "foo
		    COMMENT_STARTING: S++,
		    // <!-
		    COMMENT: S++,
		    // <!--
		    COMMENT_ENDING: S++,
		    // <!-- blah -
		    COMMENT_ENDED: S++,
		    // <!-- blah --
		    CDATA: S++,
		    // <![CDATA[ something
		    CDATA_ENDING: S++,
		    // ]
		    CDATA_ENDING_2: S++,
		    // ]]
		    PROC_INST: S++,
		    // <?hi
		    PROC_INST_BODY: S++,
		    // <?hi there
		    PROC_INST_ENDING: S++,
		    // <?hi "there" ?
		    OPEN_TAG: S++,
		    // <strong
		    OPEN_TAG_SLASH: S++,
		    // <strong /
		    ATTRIB: S++,
		    // <a
		    ATTRIB_NAME: S++,
		    // <a foo
		    ATTRIB_NAME_SAW_WHITE: S++,
		    // <a foo _
		    ATTRIB_VALUE: S++,
		    // <a foo=
		    ATTRIB_VALUE_QUOTED: S++,
		    // <a foo="bar
		    ATTRIB_VALUE_CLOSED: S++,
		    // <a foo="bar"
		    ATTRIB_VALUE_UNQUOTED: S++,
		    // <a foo=bar
		    ATTRIB_VALUE_ENTITY_Q: S++,
		    // <foo bar="&quot;"
		    ATTRIB_VALUE_ENTITY_U: S++,
		    // <foo bar=&quot
		    CLOSE_TAG: S++,
		    // </a
		    CLOSE_TAG_SAW_WHITE: S++,
		    // </a   >
		    SCRIPT: S++,
		    // <script> ...
		    SCRIPT_ENDING: S++ // <script> ... <

		  };
		  sax.XML_ENTITIES = {
		    'amp': '&',
		    'gt': '>',
		    'lt': '<',
		    'quot': '"',
		    'apos': "'"
		  };
		  sax.ENTITIES = {
		    'amp': '&',
		    'gt': '>',
		    'lt': '<',
		    'quot': '"',
		    'apos': "'",
		    'AElig': 198,
		    'Aacute': 193,
		    'Acirc': 194,
		    'Agrave': 192,
		    'Aring': 197,
		    'Atilde': 195,
		    'Auml': 196,
		    'Ccedil': 199,
		    'ETH': 208,
		    'Eacute': 201,
		    'Ecirc': 202,
		    'Egrave': 200,
		    'Euml': 203,
		    'Iacute': 205,
		    'Icirc': 206,
		    'Igrave': 204,
		    'Iuml': 207,
		    'Ntilde': 209,
		    'Oacute': 211,
		    'Ocirc': 212,
		    'Ograve': 210,
		    'Oslash': 216,
		    'Otilde': 213,
		    'Ouml': 214,
		    'THORN': 222,
		    'Uacute': 218,
		    'Ucirc': 219,
		    'Ugrave': 217,
		    'Uuml': 220,
		    'Yacute': 221,
		    'aacute': 225,
		    'acirc': 226,
		    'aelig': 230,
		    'agrave': 224,
		    'aring': 229,
		    'atilde': 227,
		    'auml': 228,
		    'ccedil': 231,
		    'eacute': 233,
		    'ecirc': 234,
		    'egrave': 232,
		    'eth': 240,
		    'euml': 235,
		    'iacute': 237,
		    'icirc': 238,
		    'igrave': 236,
		    'iuml': 239,
		    'ntilde': 241,
		    'oacute': 243,
		    'ocirc': 244,
		    'ograve': 242,
		    'oslash': 248,
		    'otilde': 245,
		    'ouml': 246,
		    'szlig': 223,
		    'thorn': 254,
		    'uacute': 250,
		    'ucirc': 251,
		    'ugrave': 249,
		    'uuml': 252,
		    'yacute': 253,
		    'yuml': 255,
		    'copy': 169,
		    'reg': 174,
		    'nbsp': 160,
		    'iexcl': 161,
		    'cent': 162,
		    'pound': 163,
		    'curren': 164,
		    'yen': 165,
		    'brvbar': 166,
		    'sect': 167,
		    'uml': 168,
		    'ordf': 170,
		    'laquo': 171,
		    'not': 172,
		    'shy': 173,
		    'macr': 175,
		    'deg': 176,
		    'plusmn': 177,
		    'sup1': 185,
		    'sup2': 178,
		    'sup3': 179,
		    'acute': 180,
		    'micro': 181,
		    'para': 182,
		    'middot': 183,
		    'cedil': 184,
		    'ordm': 186,
		    'raquo': 187,
		    'frac14': 188,
		    'frac12': 189,
		    'frac34': 190,
		    'iquest': 191,
		    'times': 215,
		    'divide': 247,
		    'OElig': 338,
		    'oelig': 339,
		    'Scaron': 352,
		    'scaron': 353,
		    'Yuml': 376,
		    'fnof': 402,
		    'circ': 710,
		    'tilde': 732,
		    'Alpha': 913,
		    'Beta': 914,
		    'Gamma': 915,
		    'Delta': 916,
		    'Epsilon': 917,
		    'Zeta': 918,
		    'Eta': 919,
		    'Theta': 920,
		    'Iota': 921,
		    'Kappa': 922,
		    'Lambda': 923,
		    'Mu': 924,
		    'Nu': 925,
		    'Xi': 926,
		    'Omicron': 927,
		    'Pi': 928,
		    'Rho': 929,
		    'Sigma': 931,
		    'Tau': 932,
		    'Upsilon': 933,
		    'Phi': 934,
		    'Chi': 935,
		    'Psi': 936,
		    'Omega': 937,
		    'alpha': 945,
		    'beta': 946,
		    'gamma': 947,
		    'delta': 948,
		    'epsilon': 949,
		    'zeta': 950,
		    'eta': 951,
		    'theta': 952,
		    'iota': 953,
		    'kappa': 954,
		    'lambda': 955,
		    'mu': 956,
		    'nu': 957,
		    'xi': 958,
		    'omicron': 959,
		    'pi': 960,
		    'rho': 961,
		    'sigmaf': 962,
		    'sigma': 963,
		    'tau': 964,
		    'upsilon': 965,
		    'phi': 966,
		    'chi': 967,
		    'psi': 968,
		    'omega': 969,
		    'thetasym': 977,
		    'upsih': 978,
		    'piv': 982,
		    'ensp': 8194,
		    'emsp': 8195,
		    'thinsp': 8201,
		    'zwnj': 8204,
		    'zwj': 8205,
		    'lrm': 8206,
		    'rlm': 8207,
		    'ndash': 8211,
		    'mdash': 8212,
		    'lsquo': 8216,
		    'rsquo': 8217,
		    'sbquo': 8218,
		    'ldquo': 8220,
		    'rdquo': 8221,
		    'bdquo': 8222,
		    'dagger': 8224,
		    'Dagger': 8225,
		    'bull': 8226,
		    'hellip': 8230,
		    'permil': 8240,
		    'prime': 8242,
		    'Prime': 8243,
		    'lsaquo': 8249,
		    'rsaquo': 8250,
		    'oline': 8254,
		    'frasl': 8260,
		    'euro': 8364,
		    'image': 8465,
		    'weierp': 8472,
		    'real': 8476,
		    'trade': 8482,
		    'alefsym': 8501,
		    'larr': 8592,
		    'uarr': 8593,
		    'rarr': 8594,
		    'darr': 8595,
		    'harr': 8596,
		    'crarr': 8629,
		    'lArr': 8656,
		    'uArr': 8657,
		    'rArr': 8658,
		    'dArr': 8659,
		    'hArr': 8660,
		    'forall': 8704,
		    'part': 8706,
		    'exist': 8707,
		    'empty': 8709,
		    'nabla': 8711,
		    'isin': 8712,
		    'notin': 8713,
		    'ni': 8715,
		    'prod': 8719,
		    'sum': 8721,
		    'minus': 8722,
		    'lowast': 8727,
		    'radic': 8730,
		    'prop': 8733,
		    'infin': 8734,
		    'ang': 8736,
		    'and': 8743,
		    'or': 8744,
		    'cap': 8745,
		    'cup': 8746,
		    'int': 8747,
		    'there4': 8756,
		    'sim': 8764,
		    'cong': 8773,
		    'asymp': 8776,
		    'ne': 8800,
		    'equiv': 8801,
		    'le': 8804,
		    'ge': 8805,
		    'sub': 8834,
		    'sup': 8835,
		    'nsub': 8836,
		    'sube': 8838,
		    'supe': 8839,
		    'oplus': 8853,
		    'otimes': 8855,
		    'perp': 8869,
		    'sdot': 8901,
		    'lceil': 8968,
		    'rceil': 8969,
		    'lfloor': 8970,
		    'rfloor': 8971,
		    'lang': 9001,
		    'rang': 9002,
		    'loz': 9674,
		    'spades': 9824,
		    'clubs': 9827,
		    'hearts': 9829,
		    'diams': 9830
		  };
		  Object.keys(sax.ENTITIES).forEach(function (key) {
		    var e = sax.ENTITIES[key];
		    var s = typeof e === 'number' ? String.fromCharCode(e) : e;
		    sax.ENTITIES[key] = s;
		  });

		  for (var s in sax.STATE) {
		    sax.STATE[sax.STATE[s]] = s;
		  } // shorthand


		  S = sax.STATE;

		  function emit(parser, event, data) {
		    parser[event] && parser[event](data);
		  }

		  function emitNode(parser, nodeType, data) {
		    if (parser.textNode) closeText(parser);
		    emit(parser, nodeType, data);
		  }

		  function closeText(parser) {
		    parser.textNode = textopts(parser.opt, parser.textNode);
		    if (parser.textNode) emit(parser, 'ontext', parser.textNode);
		    parser.textNode = '';
		  }

		  function textopts(opt, text) {
		    if (opt.trim) text = text.trim();
		    if (opt.normalize) text = text.replace(/\s+/g, ' ');
		    return text;
		  }

		  function error(parser, er) {
		    closeText(parser);

		    if (parser.trackPosition) {
		      er += '\nLine: ' + parser.line + '\nColumn: ' + parser.column + '\nChar: ' + parser.c;
		    }

		    er = new Error(er);
		    parser.error = er;
		    emit(parser, 'onerror', er);
		    return parser;
		  }

		  function end(parser) {
		    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');

		    if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
		      error(parser, 'Unexpected end');
		    }

		    closeText(parser);
		    parser.c = '';
		    parser.closed = true;
		    emit(parser, 'onend');
		    SAXParser.call(parser, parser.strict, parser.opt);
		    return parser;
		  }

		  function strictFail(parser, message) {
		    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
		      throw new Error('bad call to strictFail');
		    }

		    if (parser.strict) {
		      error(parser, message);
		    }
		  }

		  function newTag(parser) {
		    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
		    var parent = parser.tags[parser.tags.length - 1] || parser;
		    var tag = parser.tag = {
		      name: parser.tagName,
		      attributes: {}
		    }; // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"

		    if (parser.opt.xmlns) {
		      tag.ns = parent.ns;
		    }

		    parser.attribList.length = 0;
		    emitNode(parser, 'onopentagstart', tag);
		  }

		  function qname(name, attribute) {
		    var i = name.indexOf(':');
		    var qualName = i < 0 ? ['', name] : name.split(':');
		    var prefix = qualName[0];
		    var local = qualName[1]; // <x "xmlns"="http://foo">

		    if (attribute && name === 'xmlns') {
		      prefix = 'xmlns';
		      local = '';
		    }

		    return {
		      prefix: prefix,
		      local: local
		    };
		  }

		  function attrib(parser) {
		    if (!parser.strict) {
		      parser.attribName = parser.attribName[parser.looseCase]();
		    }

		    if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
		      parser.attribName = parser.attribValue = '';
		      return;
		    }

		    if (parser.opt.xmlns) {
		      var qn = qname(parser.attribName, true);
		      var prefix = qn.prefix;
		      var local = qn.local;

		      if (prefix === 'xmlns') {
		        // namespace binding attribute. push the binding into scope
		        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
		          strictFail(parser, 'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
		        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
		          strictFail(parser, 'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
		        } else {
		          var tag = parser.tag;
		          var parent = parser.tags[parser.tags.length - 1] || parser;

		          if (tag.ns === parent.ns) {
		            tag.ns = Object.create(parent.ns);
		          }

		          tag.ns[local] = parser.attribValue;
		        }
		      } // defer onattribute events until all attributes have been seen
		      // so any new bindings can take effect. preserve attribute order
		      // so deferred events can be emitted in document order


		      parser.attribList.push([parser.attribName, parser.attribValue]);
		    } else {
		      // in non-xmlns mode, we can emit the event right away
		      parser.tag.attributes[parser.attribName] = parser.attribValue;
		      emitNode(parser, 'onattribute', {
		        name: parser.attribName,
		        value: parser.attribValue
		      });
		    }

		    parser.attribName = parser.attribValue = '';
		  }

		  function openTag(parser, selfClosing) {
		    if (parser.opt.xmlns) {
		      // emit namespace binding events
		      var tag = parser.tag; // add namespace info to tag

		      var qn = qname(parser.tagName);
		      tag.prefix = qn.prefix;
		      tag.local = qn.local;
		      tag.uri = tag.ns[qn.prefix] || '';

		      if (tag.prefix && !tag.uri) {
		        strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(parser.tagName));
		        tag.uri = qn.prefix;
		      }

		      var parent = parser.tags[parser.tags.length - 1] || parser;

		      if (tag.ns && parent.ns !== tag.ns) {
		        Object.keys(tag.ns).forEach(function (p) {
		          emitNode(parser, 'onopennamespace', {
		            prefix: p,
		            uri: tag.ns[p]
		          });
		        });
		      } // handle deferred onattribute events
		      // Note: do not apply default ns to attributes:
		      //   http://www.w3.org/TR/REC-xml-names/#defaulting


		      for (var i = 0, l = parser.attribList.length; i < l; i++) {
		        var nv = parser.attribList[i];
		        var name = nv[0];
		        var value = nv[1];
		        var qualName = qname(name, true);
		        var prefix = qualName.prefix;
		        var local = qualName.local;
		        var uri = prefix === '' ? '' : tag.ns[prefix] || '';
		        var a = {
		          name: name,
		          value: value,
		          prefix: prefix,
		          local: local,
		          uri: uri
		        }; // if there's any attributes with an undefined namespace,
		        // then fail on them now.

		        if (prefix && prefix !== 'xmlns' && !uri) {
		          strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(prefix));
		          a.uri = prefix;
		        }

		        parser.tag.attributes[name] = a;
		        emitNode(parser, 'onattribute', a);
		      }

		      parser.attribList.length = 0;
		    }

		    parser.tag.isSelfClosing = !!selfClosing; // process the tag

		    parser.sawRoot = true;
		    parser.tags.push(parser.tag);
		    emitNode(parser, 'onopentag', parser.tag);

		    if (!selfClosing) {
		      // special case for <script> in non-strict mode.
		      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
		        parser.state = S.SCRIPT;
		      } else {
		        parser.state = S.TEXT;
		      }

		      parser.tag = null;
		      parser.tagName = '';
		    }

		    parser.attribName = parser.attribValue = '';
		    parser.attribList.length = 0;
		  }

		  function closeTag(parser) {
		    if (!parser.tagName) {
		      strictFail(parser, 'Weird empty close tag.');
		      parser.textNode += '</>';
		      parser.state = S.TEXT;
		      return;
		    }

		    if (parser.script) {
		      if (parser.tagName !== 'script') {
		        parser.script += '</' + parser.tagName + '>';
		        parser.tagName = '';
		        parser.state = S.SCRIPT;
		        return;
		      }

		      emitNode(parser, 'onscript', parser.script);
		      parser.script = '';
		    } // first make sure that the closing tag actually exists.
		    // <a><b></c></b></a> will close everything, otherwise.


		    var t = parser.tags.length;
		    var tagName = parser.tagName;

		    if (!parser.strict) {
		      tagName = tagName[parser.looseCase]();
		    }

		    var closeTo = tagName;

		    while (t--) {
		      var close = parser.tags[t];

		      if (close.name !== closeTo) {
		        // fail the first time in strict mode
		        strictFail(parser, 'Unexpected close tag');
		      } else {
		        break;
		      }
		    } // didn't find it.  we already failed for strict, so just abort.


		    if (t < 0) {
		      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);
		      parser.textNode += '</' + parser.tagName + '>';
		      parser.state = S.TEXT;
		      return;
		    }

		    parser.tagName = tagName;
		    var s = parser.tags.length;

		    while (s-- > t) {
		      var tag = parser.tag = parser.tags.pop();
		      parser.tagName = parser.tag.name;
		      emitNode(parser, 'onclosetag', parser.tagName);
		      var x = {};

		      for (var i in tag.ns) {
		        x[i] = tag.ns[i];
		      }

		      var parent = parser.tags[parser.tags.length - 1] || parser;

		      if (parser.opt.xmlns && tag.ns !== parent.ns) {
		        // remove namespace bindings introduced by tag
		        Object.keys(tag.ns).forEach(function (p) {
		          var n = tag.ns[p];
		          emitNode(parser, 'onclosenamespace', {
		            prefix: p,
		            uri: n
		          });
		        });
		      }
		    }

		    if (t === 0) parser.closedRoot = true;
		    parser.tagName = parser.attribValue = parser.attribName = '';
		    parser.attribList.length = 0;
		    parser.state = S.TEXT;
		  }

		  function parseEntity(parser) {
		    var entity = parser.entity;
		    var entityLC = entity.toLowerCase();
		    var num;
		    var numStr = '';

		    if (parser.ENTITIES[entity]) {
		      return parser.ENTITIES[entity];
		    }

		    if (parser.ENTITIES[entityLC]) {
		      return parser.ENTITIES[entityLC];
		    }

		    entity = entityLC;

		    if (entity.charAt(0) === '#') {
		      if (entity.charAt(1) === 'x') {
		        entity = entity.slice(2);
		        num = parseInt(entity, 16);
		        numStr = num.toString(16);
		      } else {
		        entity = entity.slice(1);
		        num = parseInt(entity, 10);
		        numStr = num.toString(10);
		      }
		    }

		    entity = entity.replace(/^0+/, '');

		    if (isNaN(num) || numStr.toLowerCase() !== entity) {
		      strictFail(parser, 'Invalid character entity');
		      return '&' + parser.entity + ';';
		    }

		    return String.fromCodePoint(num);
		  }

		  function beginWhiteSpace(parser, c) {
		    if (c === '<') {
		      parser.state = S.OPEN_WAKA;
		      parser.startTagPosition = parser.position;
		    } else if (!isWhitespace(c)) {
		      // have to process this as a text node.
		      // weird, but happens.
		      strictFail(parser, 'Non-whitespace before first tag.');
		      parser.textNode = c;
		      parser.state = S.TEXT;
		    }
		  }

		  function charAt(chunk, i) {
		    var result = '';

		    if (i < chunk.length) {
		      result = chunk.charAt(i);
		    }

		    return result;
		  }

		  function write(chunk) {
		    var parser = this;

		    if (this.error) {
		      throw this.error;
		    }

		    if (parser.closed) {
		      return error(parser, 'Cannot write after close. Assign an onready handler.');
		    }

		    if (chunk === null) {
		      return end(parser);
		    }

		    if (typeof chunk === 'object') {
		      chunk = chunk.toString();
		    }

		    var i = 0;
		    var c = '';

		    while (true) {
		      c = charAt(chunk, i++);
		      parser.c = c;

		      if (!c) {
		        break;
		      }

		      if (parser.trackPosition) {
		        parser.position++;

		        if (c === '\n') {
		          parser.line++;
		          parser.column = 0;
		        } else {
		          parser.column++;
		        }
		      }

		      switch (parser.state) {
		        case S.BEGIN:
		          parser.state = S.BEGIN_WHITESPACE;

		          if (c === '\uFEFF') {
		            continue;
		          }

		          beginWhiteSpace(parser, c);
		          continue;

		        case S.BEGIN_WHITESPACE:
		          beginWhiteSpace(parser, c);
		          continue;

		        case S.TEXT:
		          if (parser.sawRoot && !parser.closedRoot) {
		            var starti = i - 1;

		            while (c && c !== '<' && c !== '&') {
		              c = charAt(chunk, i++);

		              if (c && parser.trackPosition) {
		                parser.position++;

		                if (c === '\n') {
		                  parser.line++;
		                  parser.column = 0;
		                } else {
		                  parser.column++;
		                }
		              }
		            }

		            parser.textNode += chunk.substring(starti, i - 1);
		          }

		          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
		            parser.state = S.OPEN_WAKA;
		            parser.startTagPosition = parser.position;
		          } else {
		            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
		              strictFail(parser, 'Text data outside of root node.');
		            }

		            if (c === '&') {
		              parser.state = S.TEXT_ENTITY;
		            } else {
		              parser.textNode += c;
		            }
		          }

		          continue;

		        case S.SCRIPT:
		          // only non-strict
		          if (c === '<') {
		            parser.state = S.SCRIPT_ENDING;
		          } else {
		            parser.script += c;
		          }

		          continue;

		        case S.SCRIPT_ENDING:
		          if (c === '/') {
		            parser.state = S.CLOSE_TAG;
		          } else {
		            parser.script += '<' + c;
		            parser.state = S.SCRIPT;
		          }

		          continue;

		        case S.OPEN_WAKA:
		          // either a /, ?, !, or text is coming next.
		          if (c === '!') {
		            parser.state = S.SGML_DECL;
		            parser.sgmlDecl = '';
		          } else if (isWhitespace(c)) ; else if (isMatch(nameStart, c)) {
		            parser.state = S.OPEN_TAG;
		            parser.tagName = c;
		          } else if (c === '/') {
		            parser.state = S.CLOSE_TAG;
		            parser.tagName = '';
		          } else if (c === '?') {
		            parser.state = S.PROC_INST;
		            parser.procInstName = parser.procInstBody = '';
		          } else {
		            strictFail(parser, 'Unencoded <'); // if there was some whitespace, then add that in.

		            if (parser.startTagPosition + 1 < parser.position) {
		              var pad = parser.position - parser.startTagPosition;
		              c = new Array(pad).join(' ') + c;
		            }

		            parser.textNode += '<' + c;
		            parser.state = S.TEXT;
		          }

		          continue;

		        case S.SGML_DECL:
		          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
		            emitNode(parser, 'onopencdata');
		            parser.state = S.CDATA;
		            parser.sgmlDecl = '';
		            parser.cdata = '';
		          } else if (parser.sgmlDecl + c === '--') {
		            parser.state = S.COMMENT;
		            parser.comment = '';
		            parser.sgmlDecl = '';
		          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
		            parser.state = S.DOCTYPE;

		            if (parser.doctype || parser.sawRoot) {
		              strictFail(parser, 'Inappropriately located doctype declaration');
		            }

		            parser.doctype = '';
		            parser.sgmlDecl = '';
		          } else if (c === '>') {
		            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);
		            parser.sgmlDecl = '';
		            parser.state = S.TEXT;
		          } else if (isQuote(c)) {
		            parser.state = S.SGML_DECL_QUOTED;
		            parser.sgmlDecl += c;
		          } else {
		            parser.sgmlDecl += c;
		          }

		          continue;

		        case S.SGML_DECL_QUOTED:
		          if (c === parser.q) {
		            parser.state = S.SGML_DECL;
		            parser.q = '';
		          }

		          parser.sgmlDecl += c;
		          continue;

		        case S.DOCTYPE:
		          if (c === '>') {
		            parser.state = S.TEXT;
		            emitNode(parser, 'ondoctype', parser.doctype);
		            parser.doctype = true; // just remember that we saw it.
		          } else {
		            parser.doctype += c;

		            if (c === '[') {
		              parser.state = S.DOCTYPE_DTD;
		            } else if (isQuote(c)) {
		              parser.state = S.DOCTYPE_QUOTED;
		              parser.q = c;
		            }
		          }

		          continue;

		        case S.DOCTYPE_QUOTED:
		          parser.doctype += c;

		          if (c === parser.q) {
		            parser.q = '';
		            parser.state = S.DOCTYPE;
		          }

		          continue;

		        case S.DOCTYPE_DTD:
		          parser.doctype += c;

		          if (c === ']') {
		            parser.state = S.DOCTYPE;
		          } else if (isQuote(c)) {
		            parser.state = S.DOCTYPE_DTD_QUOTED;
		            parser.q = c;
		          }

		          continue;

		        case S.DOCTYPE_DTD_QUOTED:
		          parser.doctype += c;

		          if (c === parser.q) {
		            parser.state = S.DOCTYPE_DTD;
		            parser.q = '';
		          }

		          continue;

		        case S.COMMENT:
		          if (c === '-') {
		            parser.state = S.COMMENT_ENDING;
		          } else {
		            parser.comment += c;
		          }

		          continue;

		        case S.COMMENT_ENDING:
		          if (c === '-') {
		            parser.state = S.COMMENT_ENDED;
		            parser.comment = textopts(parser.opt, parser.comment);

		            if (parser.comment) {
		              emitNode(parser, 'oncomment', parser.comment);
		            }

		            parser.comment = '';
		          } else {
		            parser.comment += '-' + c;
		            parser.state = S.COMMENT;
		          }

		          continue;

		        case S.COMMENT_ENDED:
		          if (c !== '>') {
		            strictFail(parser, 'Malformed comment'); // allow <!-- blah -- bloo --> in non-strict mode,
		            // which is a comment of " blah -- bloo "

		            parser.comment += '--' + c;
		            parser.state = S.COMMENT;
		          } else {
		            parser.state = S.TEXT;
		          }

		          continue;

		        case S.CDATA:
		          if (c === ']') {
		            parser.state = S.CDATA_ENDING;
		          } else {
		            parser.cdata += c;
		          }

		          continue;

		        case S.CDATA_ENDING:
		          if (c === ']') {
		            parser.state = S.CDATA_ENDING_2;
		          } else {
		            parser.cdata += ']' + c;
		            parser.state = S.CDATA;
		          }

		          continue;

		        case S.CDATA_ENDING_2:
		          if (c === '>') {
		            if (parser.cdata) {
		              emitNode(parser, 'oncdata', parser.cdata);
		            }

		            emitNode(parser, 'onclosecdata');
		            parser.cdata = '';
		            parser.state = S.TEXT;
		          } else if (c === ']') {
		            parser.cdata += ']';
		          } else {
		            parser.cdata += ']]' + c;
		            parser.state = S.CDATA;
		          }

		          continue;

		        case S.PROC_INST:
		          if (c === '?') {
		            parser.state = S.PROC_INST_ENDING;
		          } else if (isWhitespace(c)) {
		            parser.state = S.PROC_INST_BODY;
		          } else {
		            parser.procInstName += c;
		          }

		          continue;

		        case S.PROC_INST_BODY:
		          if (!parser.procInstBody && isWhitespace(c)) {
		            continue;
		          } else if (c === '?') {
		            parser.state = S.PROC_INST_ENDING;
		          } else {
		            parser.procInstBody += c;
		          }

		          continue;

		        case S.PROC_INST_ENDING:
		          if (c === '>') {
		            emitNode(parser, 'onprocessinginstruction', {
		              name: parser.procInstName,
		              body: parser.procInstBody
		            });
		            parser.procInstName = parser.procInstBody = '';
		            parser.state = S.TEXT;
		          } else {
		            parser.procInstBody += '?' + c;
		            parser.state = S.PROC_INST_BODY;
		          }

		          continue;

		        case S.OPEN_TAG:
		          if (isMatch(nameBody, c)) {
		            parser.tagName += c;
		          } else {
		            newTag(parser);

		            if (c === '>') {
		              openTag(parser);
		            } else if (c === '/') {
		              parser.state = S.OPEN_TAG_SLASH;
		            } else {
		              if (!isWhitespace(c)) {
		                strictFail(parser, 'Invalid character in tag name');
		              }

		              parser.state = S.ATTRIB;
		            }
		          }

		          continue;

		        case S.OPEN_TAG_SLASH:
		          if (c === '>') {
		            openTag(parser, true);
		            closeTag(parser);
		          } else {
		            strictFail(parser, 'Forward-slash in opening tag not followed by >');
		            parser.state = S.ATTRIB;
		          }

		          continue;

		        case S.ATTRIB:
		          // haven't read the attribute name yet.
		          if (isWhitespace(c)) {
		            continue;
		          } else if (c === '>') {
		            openTag(parser);
		          } else if (c === '/') {
		            parser.state = S.OPEN_TAG_SLASH;
		          } else if (isMatch(nameStart, c)) {
		            parser.attribName = c;
		            parser.attribValue = '';
		            parser.state = S.ATTRIB_NAME;
		          } else {
		            strictFail(parser, 'Invalid attribute name');
		          }

		          continue;

		        case S.ATTRIB_NAME:
		          if (c === '=') {
		            parser.state = S.ATTRIB_VALUE;
		          } else if (c === '>') {
		            strictFail(parser, 'Attribute without value');
		            parser.attribValue = parser.attribName;
		            attrib(parser);
		            openTag(parser);
		          } else if (isWhitespace(c)) {
		            parser.state = S.ATTRIB_NAME_SAW_WHITE;
		          } else if (isMatch(nameBody, c)) {
		            parser.attribName += c;
		          } else {
		            strictFail(parser, 'Invalid attribute name');
		          }

		          continue;

		        case S.ATTRIB_NAME_SAW_WHITE:
		          if (c === '=') {
		            parser.state = S.ATTRIB_VALUE;
		          } else if (isWhitespace(c)) {
		            continue;
		          } else {
		            strictFail(parser, 'Attribute without value');
		            parser.tag.attributes[parser.attribName] = '';
		            parser.attribValue = '';
		            emitNode(parser, 'onattribute', {
		              name: parser.attribName,
		              value: ''
		            });
		            parser.attribName = '';

		            if (c === '>') {
		              openTag(parser);
		            } else if (isMatch(nameStart, c)) {
		              parser.attribName = c;
		              parser.state = S.ATTRIB_NAME;
		            } else {
		              strictFail(parser, 'Invalid attribute name');
		              parser.state = S.ATTRIB;
		            }
		          }

		          continue;

		        case S.ATTRIB_VALUE:
		          if (isWhitespace(c)) {
		            continue;
		          } else if (isQuote(c)) {
		            parser.q = c;
		            parser.state = S.ATTRIB_VALUE_QUOTED;
		          } else {
		            strictFail(parser, 'Unquoted attribute value');
		            parser.state = S.ATTRIB_VALUE_UNQUOTED;
		            parser.attribValue = c;
		          }

		          continue;

		        case S.ATTRIB_VALUE_QUOTED:
		          if (c !== parser.q) {
		            if (c === '&') {
		              parser.state = S.ATTRIB_VALUE_ENTITY_Q;
		            } else {
		              parser.attribValue += c;
		            }

		            continue;
		          }

		          attrib(parser);
		          parser.q = '';
		          parser.state = S.ATTRIB_VALUE_CLOSED;
		          continue;

		        case S.ATTRIB_VALUE_CLOSED:
		          if (isWhitespace(c)) {
		            parser.state = S.ATTRIB;
		          } else if (c === '>') {
		            openTag(parser);
		          } else if (c === '/') {
		            parser.state = S.OPEN_TAG_SLASH;
		          } else if (isMatch(nameStart, c)) {
		            strictFail(parser, 'No whitespace between attributes');
		            parser.attribName = c;
		            parser.attribValue = '';
		            parser.state = S.ATTRIB_NAME;
		          } else {
		            strictFail(parser, 'Invalid attribute name');
		          }

		          continue;

		        case S.ATTRIB_VALUE_UNQUOTED:
		          if (!isAttribEnd(c)) {
		            if (c === '&') {
		              parser.state = S.ATTRIB_VALUE_ENTITY_U;
		            } else {
		              parser.attribValue += c;
		            }

		            continue;
		          }

		          attrib(parser);

		          if (c === '>') {
		            openTag(parser);
		          } else {
		            parser.state = S.ATTRIB;
		          }

		          continue;

		        case S.CLOSE_TAG:
		          if (!parser.tagName) {
		            if (isWhitespace(c)) {
		              continue;
		            } else if (notMatch(nameStart, c)) {
		              if (parser.script) {
		                parser.script += '</' + c;
		                parser.state = S.SCRIPT;
		              } else {
		                strictFail(parser, 'Invalid tagname in closing tag.');
		              }
		            } else {
		              parser.tagName = c;
		            }
		          } else if (c === '>') {
		            closeTag(parser);
		          } else if (isMatch(nameBody, c)) {
		            parser.tagName += c;
		          } else if (parser.script) {
		            parser.script += '</' + parser.tagName;
		            parser.tagName = '';
		            parser.state = S.SCRIPT;
		          } else {
		            if (!isWhitespace(c)) {
		              strictFail(parser, 'Invalid tagname in closing tag');
		            }

		            parser.state = S.CLOSE_TAG_SAW_WHITE;
		          }

		          continue;

		        case S.CLOSE_TAG_SAW_WHITE:
		          if (isWhitespace(c)) {
		            continue;
		          }

		          if (c === '>') {
		            closeTag(parser);
		          } else {
		            strictFail(parser, 'Invalid characters in closing tag');
		          }

		          continue;

		        case S.TEXT_ENTITY:
		        case S.ATTRIB_VALUE_ENTITY_Q:
		        case S.ATTRIB_VALUE_ENTITY_U:
		          var returnState;
		          var buffer;

		          switch (parser.state) {
		            case S.TEXT_ENTITY:
		              returnState = S.TEXT;
		              buffer = 'textNode';
		              break;

		            case S.ATTRIB_VALUE_ENTITY_Q:
		              returnState = S.ATTRIB_VALUE_QUOTED;
		              buffer = 'attribValue';
		              break;

		            case S.ATTRIB_VALUE_ENTITY_U:
		              returnState = S.ATTRIB_VALUE_UNQUOTED;
		              buffer = 'attribValue';
		              break;
		          }

		          if (c === ';') {
		            parser[buffer] += parseEntity(parser);
		            parser.entity = '';
		            parser.state = returnState;
		          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
		            parser.entity += c;
		          } else {
		            strictFail(parser, 'Invalid character in entity name');
		            parser[buffer] += '&' + parser.entity + c;
		            parser.entity = '';
		            parser.state = returnState;
		          }

		          continue;

		        default:
		          throw new Error(parser, 'Unknown state: ' + parser.state);
		      }
		    } // while


		    if (parser.position >= parser.bufferCheckPosition) {
		      checkBufferLength(parser);
		    }

		    return parser;
		  }
		  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */

		  /* istanbul ignore next */


		  if (!String.fromCodePoint) {
		    (function () {
		      var stringFromCharCode = String.fromCharCode;
		      var floor = Math.floor;

		      var fromCodePoint = function () {
		        var MAX_SIZE = 0x4000;
		        var codeUnits = [];
		        var highSurrogate;
		        var lowSurrogate;
		        var index = -1;
		        var length = arguments.length;

		        if (!length) {
		          return '';
		        }

		        var result = '';

		        while (++index < length) {
		          var codePoint = Number(arguments[index]);

		          if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
		          codePoint < 0 || // not a valid Unicode code point
		          codePoint > 0x10FFFF || // not a valid Unicode code point
		          floor(codePoint) !== codePoint // not an integer
		          ) {
		            throw RangeError('Invalid code point: ' + codePoint);
		          }

		          if (codePoint <= 0xFFFF) {
		            // BMP code point
		            codeUnits.push(codePoint);
		          } else {
		            // Astral code point; split in surrogate halves
		            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
		            codePoint -= 0x10000;
		            highSurrogate = (codePoint >> 10) + 0xD800;
		            lowSurrogate = codePoint % 0x400 + 0xDC00;
		            codeUnits.push(highSurrogate, lowSurrogate);
		          }

		          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
		            result += stringFromCharCode.apply(null, codeUnits);
		            codeUnits.length = 0;
		          }
		        }

		        return result;
		      };
		      /* istanbul ignore next */


		      if (Object.defineProperty) {
		        Object.defineProperty(String, 'fromCodePoint', {
		          value: fromCodePoint,
		          configurable: true,
		          writable: true
		        });
		      } else {
		        String.fromCodePoint = fromCodePoint;
		      }
		    })();
		  }
		})(exports);
	} (sax$1));

	var arrayHelper = {
	  isArray: function (value) {
	    if (Array.isArray) {
	      return Array.isArray(value);
	    } // fallback for older browsers like  IE 8


	    return Object.prototype.toString.call(value) === '[object Array]';
	  }
	};

	var isArray$2 = arrayHelper.isArray;

	var optionsHelper = {
	  copyOptions: function (options) {
	    var key,
	        copy = {};

	    for (key in options) {
	      if (options.hasOwnProperty(key)) {
	        copy[key] = options[key];
	      }
	    }

	    return copy;
	  },
	  ensureFlagExists: function (item, options) {
	    if (!(item in options) || typeof options[item] !== 'boolean') {
	      options[item] = false;
	    }
	  },
	  ensureSpacesExists: function (options) {
	    if (!('spaces' in options) || typeof options.spaces !== 'number' && typeof options.spaces !== 'string') {
	      options.spaces = 0;
	    }
	  },
	  ensureAlwaysArrayExists: function (options) {
	    if (!('alwaysArray' in options) || typeof options.alwaysArray !== 'boolean' && !isArray$2(options.alwaysArray)) {
	      options.alwaysArray = false;
	    }
	  },
	  ensureKeyExists: function (key, options) {
	    if (!(key + 'Key' in options) || typeof options[key + 'Key'] !== 'string') {
	      options[key + 'Key'] = options.compact ? '_' + key : key;
	    }
	  },
	  checkFnExists: function (key, options) {
	    return key + 'Fn' in options;
	  }
	};

	var sax = sax$1;

	var helper$2 = optionsHelper;

	var isArray$1 = arrayHelper.isArray;

	var options;
	var currentElement$1;

	function validateOptions$2(userOptions) {
	  options = helper$2.copyOptions(userOptions);
	  helper$2.ensureFlagExists('ignoreDeclaration', options);
	  helper$2.ensureFlagExists('ignoreInstruction', options);
	  helper$2.ensureFlagExists('ignoreAttributes', options);
	  helper$2.ensureFlagExists('ignoreText', options);
	  helper$2.ensureFlagExists('ignoreComment', options);
	  helper$2.ensureFlagExists('ignoreCdata', options);
	  helper$2.ensureFlagExists('ignoreDoctype', options);
	  helper$2.ensureFlagExists('compact', options);
	  helper$2.ensureFlagExists('alwaysChildren', options);
	  helper$2.ensureFlagExists('addParent', options);
	  helper$2.ensureFlagExists('trim', options);
	  helper$2.ensureFlagExists('nativeType', options);
	  helper$2.ensureFlagExists('nativeTypeAttributes', options);
	  helper$2.ensureFlagExists('sanitize', options);
	  helper$2.ensureFlagExists('instructionHasAttributes', options);
	  helper$2.ensureFlagExists('captureSpacesBetweenElements', options);
	  helper$2.ensureAlwaysArrayExists(options);
	  helper$2.ensureKeyExists('declaration', options);
	  helper$2.ensureKeyExists('instruction', options);
	  helper$2.ensureKeyExists('attributes', options);
	  helper$2.ensureKeyExists('text', options);
	  helper$2.ensureKeyExists('comment', options);
	  helper$2.ensureKeyExists('cdata', options);
	  helper$2.ensureKeyExists('doctype', options);
	  helper$2.ensureKeyExists('type', options);
	  helper$2.ensureKeyExists('name', options);
	  helper$2.ensureKeyExists('elements', options);
	  helper$2.ensureKeyExists('parent', options);
	  return options;
	}

	function nativeType(value) {
	  var nValue = Number(value);

	  if (!isNaN(nValue)) {
	    return nValue;
	  }

	  var bValue = value.toLowerCase();

	  if (bValue === 'true') {
	    return true;
	  } else if (bValue === 'false') {
	    return false;
	  }

	  return value;
	}

	function addField(type, value) {
	  var key;

	  if (options.compact) {
	    if (!currentElement$1[options[type + 'Key']] && (isArray$1(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + 'Key']) !== -1 : options.alwaysArray)) {
	      currentElement$1[options[type + 'Key']] = [];
	    }

	    if (currentElement$1[options[type + 'Key']] && !isArray$1(currentElement$1[options[type + 'Key']])) {
	      currentElement$1[options[type + 'Key']] = [currentElement$1[options[type + 'Key']]];
	    }

	    if (type + 'Fn' in options && typeof value === 'string') {
	      value = options[type + 'Fn'](value, currentElement$1);
	    }

	    if (type === 'instruction' && ('instructionFn' in options || 'instructionNameFn' in options)) {
	      for (key in value) {
	        if (value.hasOwnProperty(key)) {
	          if ('instructionFn' in options) {
	            value[key] = options.instructionFn(value[key], key, currentElement$1);
	          } else {
	            var temp = value[key];
	            delete value[key];
	            value[options.instructionNameFn(key, temp, currentElement$1)] = temp;
	          }
	        }
	      }
	    }

	    if (isArray$1(currentElement$1[options[type + 'Key']])) {
	      currentElement$1[options[type + 'Key']].push(value);
	    } else {
	      currentElement$1[options[type + 'Key']] = value;
	    }
	  } else {
	    if (!currentElement$1[options.elementsKey]) {
	      currentElement$1[options.elementsKey] = [];
	    }

	    var element = {};
	    element[options.typeKey] = type;

	    if (type === 'instruction') {
	      for (key in value) {
	        if (value.hasOwnProperty(key)) {
	          break;
	        }
	      }

	      element[options.nameKey] = 'instructionNameFn' in options ? options.instructionNameFn(key, value, currentElement$1) : key;

	      if (options.instructionHasAttributes) {
	        element[options.attributesKey] = value[key][options.attributesKey];

	        if ('instructionFn' in options) {
	          element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement$1);
	        }
	      } else {
	        if ('instructionFn' in options) {
	          value[key] = options.instructionFn(value[key], key, currentElement$1);
	        }

	        element[options.instructionKey] = value[key];
	      }
	    } else {
	      if (type + 'Fn' in options) {
	        value = options[type + 'Fn'](value, currentElement$1);
	      }

	      element[options[type + 'Key']] = value;
	    }

	    if (options.addParent) {
	      element[options.parentKey] = currentElement$1;
	    }

	    currentElement$1[options.elementsKey].push(element);
	  }
	}

	function manipulateAttributes(attributes) {
	  if ('attributesFn' in options && attributes) {
	    attributes = options.attributesFn(attributes, currentElement$1);
	  }

	  if ((options.trim || 'attributeValueFn' in options || 'attributeNameFn' in options || options.nativeTypeAttributes) && attributes) {
	    var key;

	    for (key in attributes) {
	      if (attributes.hasOwnProperty(key)) {
	        if (options.trim) attributes[key] = attributes[key].trim();

	        if (options.nativeTypeAttributes) {
	          attributes[key] = nativeType(attributes[key]);
	        }

	        if ('attributeValueFn' in options) attributes[key] = options.attributeValueFn(attributes[key], key, currentElement$1);

	        if ('attributeNameFn' in options) {
	          var temp = attributes[key];
	          delete attributes[key];
	          attributes[options.attributeNameFn(key, attributes[key], currentElement$1)] = temp;
	        }
	      }
	    }
	  }

	  return attributes;
	}

	function onInstruction(instruction) {
	  var attributes = {};

	  if (instruction.body && (instruction.name.toLowerCase() === 'xml' || options.instructionHasAttributes)) {
	    var attrsRegExp = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g;
	    var match;

	    while ((match = attrsRegExp.exec(instruction.body)) !== null) {
	      attributes[match[1]] = match[2] || match[3] || match[4];
	    }

	    attributes = manipulateAttributes(attributes);
	  }

	  if (instruction.name.toLowerCase() === 'xml') {
	    if (options.ignoreDeclaration) {
	      return;
	    }

	    currentElement$1[options.declarationKey] = {};

	    if (Object.keys(attributes).length) {
	      currentElement$1[options.declarationKey][options.attributesKey] = attributes;
	    }

	    if (options.addParent) {
	      currentElement$1[options.declarationKey][options.parentKey] = currentElement$1;
	    }
	  } else {
	    if (options.ignoreInstruction) {
	      return;
	    }

	    if (options.trim) {
	      instruction.body = instruction.body.trim();
	    }

	    var value = {};

	    if (options.instructionHasAttributes && Object.keys(attributes).length) {
	      value[instruction.name] = {};
	      value[instruction.name][options.attributesKey] = attributes;
	    } else {
	      value[instruction.name] = instruction.body;
	    }

	    addField('instruction', value);
	  }
	}

	function onStartElement(name, attributes) {
	  var element;

	  if (typeof name === 'object') {
	    attributes = name.attributes;
	    name = name.name;
	  }

	  attributes = manipulateAttributes(attributes);

	  if ('elementNameFn' in options) {
	    name = options.elementNameFn(name, currentElement$1);
	  }

	  if (options.compact) {
	    element = {};

	    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
	      element[options.attributesKey] = {};
	      var key;

	      for (key in attributes) {
	        if (attributes.hasOwnProperty(key)) {
	          element[options.attributesKey][key] = attributes[key];
	        }
	      }
	    }

	    if (!(name in currentElement$1) && (isArray$1(options.alwaysArray) ? options.alwaysArray.indexOf(name) !== -1 : options.alwaysArray)) {
	      currentElement$1[name] = [];
	    }

	    if (currentElement$1[name] && !isArray$1(currentElement$1[name])) {
	      currentElement$1[name] = [currentElement$1[name]];
	    }

	    if (isArray$1(currentElement$1[name])) {
	      currentElement$1[name].push(element);
	    } else {
	      currentElement$1[name] = element;
	    }
	  } else {
	    if (!currentElement$1[options.elementsKey]) {
	      currentElement$1[options.elementsKey] = [];
	    }

	    element = {};
	    element[options.typeKey] = 'element';
	    element[options.nameKey] = name;

	    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {
	      element[options.attributesKey] = attributes;
	    }

	    if (options.alwaysChildren) {
	      element[options.elementsKey] = [];
	    }

	    currentElement$1[options.elementsKey].push(element);
	  }

	  element[options.parentKey] = currentElement$1; // will be deleted in onEndElement() if !options.addParent

	  currentElement$1 = element;
	}

	function onText(text) {
	  if (options.ignoreText) {
	    return;
	  }

	  if (!text.trim() && !options.captureSpacesBetweenElements) {
	    return;
	  }

	  if (options.trim) {
	    text = text.trim();
	  }

	  if (options.nativeType) {
	    text = nativeType(text);
	  }

	  if (options.sanitize) {
	    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	  }

	  addField('text', text);
	}

	function onComment(comment) {
	  if (options.ignoreComment) {
	    return;
	  }

	  if (options.trim) {
	    comment = comment.trim();
	  }

	  addField('comment', comment);
	}

	function onEndElement(name) {
	  var parentElement = currentElement$1[options.parentKey];

	  if (!options.addParent) {
	    delete currentElement$1[options.parentKey];
	  }

	  currentElement$1 = parentElement;
	}

	function onCdata(cdata) {
	  if (options.ignoreCdata) {
	    return;
	  }

	  if (options.trim) {
	    cdata = cdata.trim();
	  }

	  addField('cdata', cdata);
	}

	function onDoctype(doctype) {
	  if (options.ignoreDoctype) {
	    return;
	  }

	  doctype = doctype.replace(/^ /, '');

	  if (options.trim) {
	    doctype = doctype.trim();
	  }

	  addField('doctype', doctype);
	}

	function onError(error) {
	  error.note = error; //console.error(error);
	}

	var xml2js$2 = function (xml, userOptions) {
	  var parser = sax.parser(true, {}) ;
	  var result = {};
	  currentElement$1 = result;
	  options = validateOptions$2(userOptions);

	  {
	    parser.opt = {
	      strictEntities: true
	    };
	    parser.onopentag = onStartElement;
	    parser.ontext = onText;
	    parser.oncomment = onComment;
	    parser.onclosetag = onEndElement;
	    parser.onerror = onError;
	    parser.oncdata = onCdata;
	    parser.ondoctype = onDoctype;
	    parser.onprocessinginstruction = onInstruction;
	  }

	  {
	    parser.write(xml).close();
	  }

	  if (result[options.elementsKey]) {
	    var temp = result[options.elementsKey];
	    delete result[options.elementsKey];
	    result[options.elementsKey] = temp;
	    delete result.text;
	  }

	  return result;
	};

	var helper$1 = optionsHelper;

	var xml2js$1 = xml2js$2;

	function validateOptions$1(userOptions) {
	  var options = helper$1.copyOptions(userOptions);
	  helper$1.ensureSpacesExists(options);
	  return options;
	}

	var xml2json$1 = function (xml, userOptions) {
	  var options, js, json, parentKey;
	  options = validateOptions$1(userOptions);
	  js = xml2js$1(xml, options);
	  parentKey = 'compact' in options && options.compact ? '_parent' : 'parent'; // parentKey = ptions.compact ? '_parent' : 'parent'; // consider this

	  if ('addParent' in options && options.addParent) {
	    json = JSON.stringify(js, function (k, v) {
	      return k === parentKey ? '_' : v;
	    }, options.spaces);
	  } else {
	    json = JSON.stringify(js, null, options.spaces);
	  }

	  return json.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
	};

	var helper = optionsHelper;

	var isArray = arrayHelper.isArray;

	var currentElement, currentElementName;

	function validateOptions(userOptions) {
	  var options = helper.copyOptions(userOptions);
	  helper.ensureFlagExists('ignoreDeclaration', options);
	  helper.ensureFlagExists('ignoreInstruction', options);
	  helper.ensureFlagExists('ignoreAttributes', options);
	  helper.ensureFlagExists('ignoreText', options);
	  helper.ensureFlagExists('ignoreComment', options);
	  helper.ensureFlagExists('ignoreCdata', options);
	  helper.ensureFlagExists('ignoreDoctype', options);
	  helper.ensureFlagExists('compact', options);
	  helper.ensureFlagExists('indentText', options);
	  helper.ensureFlagExists('indentCdata', options);
	  helper.ensureFlagExists('indentAttributes', options);
	  helper.ensureFlagExists('indentInstruction', options);
	  helper.ensureFlagExists('fullTagEmptyElement', options);
	  helper.ensureFlagExists('noQuotesForNativeAttributes', options);
	  helper.ensureSpacesExists(options);

	  if (typeof options.spaces === 'number') {
	    options.spaces = Array(options.spaces + 1).join(' ');
	  }

	  helper.ensureKeyExists('declaration', options);
	  helper.ensureKeyExists('instruction', options);
	  helper.ensureKeyExists('attributes', options);
	  helper.ensureKeyExists('text', options);
	  helper.ensureKeyExists('comment', options);
	  helper.ensureKeyExists('cdata', options);
	  helper.ensureKeyExists('doctype', options);
	  helper.ensureKeyExists('type', options);
	  helper.ensureKeyExists('name', options);
	  helper.ensureKeyExists('elements', options);
	  return options;
	}

	function writeIndentation(options, depth, firstLine) {
	  return (!firstLine && options.spaces ? '\n' : '') + Array(depth + 1).join(options.spaces);
	}

	function writeAttributes(attributes, options, depth) {
	  if (options.ignoreAttributes) {
	    return '';
	  }

	  if ('attributesFn' in options) {
	    attributes = options.attributesFn(attributes, currentElementName, currentElement);
	  }

	  var key,
	      attr,
	      attrName,
	      quote,
	      result = [];

	  for (key in attributes) {
	    if (attributes.hasOwnProperty(key) && attributes[key] !== null && attributes[key] !== undefined) {
	      quote = options.noQuotesForNativeAttributes && typeof attributes[key] !== 'string' ? '' : '"';
	      attr = '' + attributes[key]; // ensure number and boolean are converted to String

	      attr = attr.replace(/"/g, '&quot;');
	      attrName = 'attributeNameFn' in options ? options.attributeNameFn(key, attr, currentElementName, currentElement) : key;
	      result.push(options.spaces && options.indentAttributes ? writeIndentation(options, depth + 1, false) : ' ');
	      result.push(attrName + '=' + quote + ('attributeValueFn' in options ? options.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote);
	    }
	  }

	  if (attributes && Object.keys(attributes).length && options.spaces && options.indentAttributes) {
	    result.push(writeIndentation(options, depth, false));
	  }

	  return result.join('');
	}

	function writeDeclaration(declaration, options, depth) {
	  currentElement = declaration;
	  currentElementName = 'xml';
	  return options.ignoreDeclaration ? '' : '<?' + 'xml' + writeAttributes(declaration[options.attributesKey], options, depth) + '?>';
	}

	function writeInstruction(instruction, options, depth) {
	  if (options.ignoreInstruction) {
	    return '';
	  }

	  var key;

	  for (key in instruction) {
	    if (instruction.hasOwnProperty(key)) {
	      break;
	    }
	  }

	  var instructionName = 'instructionNameFn' in options ? options.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;

	  if (typeof instruction[key] === 'object') {
	    currentElement = instruction;
	    currentElementName = instructionName;
	    return '<?' + instructionName + writeAttributes(instruction[key][options.attributesKey], options, depth) + '?>';
	  } else {
	    var instructionValue = instruction[key] ? instruction[key] : '';
	    if ('instructionFn' in options) instructionValue = options.instructionFn(instructionValue, key, currentElementName, currentElement);
	    return '<?' + instructionName + (instructionValue ? ' ' + instructionValue : '') + '?>';
	  }
	}

	function writeComment(comment, options) {
	  return options.ignoreComment ? '' : '<!--' + ('commentFn' in options ? options.commentFn(comment, currentElementName, currentElement) : comment) + '-->';
	}

	function writeCdata(cdata, options) {
	  return options.ignoreCdata ? '' : '<![CDATA[' + ('cdataFn' in options ? options.cdataFn(cdata, currentElementName, currentElement) : cdata.replace(']]>', ']]]]><![CDATA[>')) + ']]>';
	}

	function writeDoctype(doctype, options) {
	  return options.ignoreDoctype ? '' : '<!DOCTYPE ' + ('doctypeFn' in options ? options.doctypeFn(doctype, currentElementName, currentElement) : doctype) + '>';
	}

	function writeText(text, options) {
	  if (options.ignoreText) return '';
	  text = '' + text; // ensure Number and Boolean are converted to String

	  text = text.replace(/&amp;/g, '&'); // desanitize to avoid double sanitization

	  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	  return 'textFn' in options ? options.textFn(text, currentElementName, currentElement) : text;
	}

	function hasContent(element, options) {
	  var i;

	  if (element.elements && element.elements.length) {
	    for (i = 0; i < element.elements.length; ++i) {
	      switch (element.elements[i][options.typeKey]) {
	        case 'text':
	          if (options.indentText) {
	            return true;
	          }

	          break;
	        // skip to next key

	        case 'cdata':
	          if (options.indentCdata) {
	            return true;
	          }

	          break;
	        // skip to next key

	        case 'instruction':
	          if (options.indentInstruction) {
	            return true;
	          }

	          break;
	        // skip to next key

	        case 'doctype':
	        case 'comment':
	        case 'element':
	          return true;

	        default:
	          return true;
	      }
	    }
	  }

	  return false;
	}

	function writeElement(element, options, depth) {
	  currentElement = element;
	  currentElementName = element.name;
	  var xml = [],
	      elementName = 'elementNameFn' in options ? options.elementNameFn(element.name, element) : element.name;
	  xml.push('<' + elementName);

	  if (element[options.attributesKey]) {
	    xml.push(writeAttributes(element[options.attributesKey], options, depth));
	  }

	  var withClosingTag = element[options.elementsKey] && element[options.elementsKey].length || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';

	  if (!withClosingTag) {
	    if ('fullTagEmptyElementFn' in options) {
	      withClosingTag = options.fullTagEmptyElementFn(element.name, element);
	    } else {
	      withClosingTag = options.fullTagEmptyElement;
	    }
	  }

	  if (withClosingTag) {
	    xml.push('>');

	    if (element[options.elementsKey] && element[options.elementsKey].length) {
	      xml.push(writeElements(element[options.elementsKey], options, depth + 1));
	      currentElement = element;
	      currentElementName = element.name;
	    }

	    xml.push(options.spaces && hasContent(element, options) ? '\n' + Array(depth + 1).join(options.spaces) : '');
	    xml.push('</' + elementName + '>');
	  } else {
	    xml.push('/>');
	  }

	  return xml.join('');
	}

	function writeElements(elements, options, depth, firstLine) {
	  return elements.reduce(function (xml, element) {
	    var indent = writeIndentation(options, depth, firstLine && !xml);

	    switch (element.type) {
	      case 'element':
	        return xml + indent + writeElement(element, options, depth);

	      case 'comment':
	        return xml + indent + writeComment(element[options.commentKey], options);

	      case 'doctype':
	        return xml + indent + writeDoctype(element[options.doctypeKey], options);

	      case 'cdata':
	        return xml + (options.indentCdata ? indent : '') + writeCdata(element[options.cdataKey], options);

	      case 'text':
	        return xml + (options.indentText ? indent : '') + writeText(element[options.textKey], options);

	      case 'instruction':
	        var instruction = {};
	        instruction[element[options.nameKey]] = element[options.attributesKey] ? element : element[options.instructionKey];
	        return xml + (options.indentInstruction ? indent : '') + writeInstruction(instruction, options, depth);
	    }
	  }, '');
	}

	function hasContentCompact(element, options, anyContent) {
	  var key;

	  for (key in element) {
	    if (element.hasOwnProperty(key)) {
	      switch (key) {
	        case options.parentKey:
	        case options.attributesKey:
	          break;
	        // skip to next key

	        case options.textKey:
	          if (options.indentText || anyContent) {
	            return true;
	          }

	          break;
	        // skip to next key

	        case options.cdataKey:
	          if (options.indentCdata || anyContent) {
	            return true;
	          }

	          break;
	        // skip to next key

	        case options.instructionKey:
	          if (options.indentInstruction || anyContent) {
	            return true;
	          }

	          break;
	        // skip to next key

	        case options.doctypeKey:
	        case options.commentKey:
	          return true;

	        default:
	          return true;
	      }
	    }
	  }

	  return false;
	}

	function writeElementCompact(element, name, options, depth, indent) {
	  currentElement = element;
	  currentElementName = name;
	  var elementName = 'elementNameFn' in options ? options.elementNameFn(name, element) : name;

	  if (typeof element === 'undefined' || element === null || element === '') {
	    return 'fullTagEmptyElementFn' in options && options.fullTagEmptyElementFn(name, element) || options.fullTagEmptyElement ? '<' + elementName + '></' + elementName + '>' : '<' + elementName + '/>';
	  }

	  var xml = [];

	  if (name) {
	    xml.push('<' + elementName);

	    if (typeof element !== 'object') {
	      xml.push('>' + writeText(element, options) + '</' + elementName + '>');
	      return xml.join('');
	    }

	    if (element[options.attributesKey]) {
	      xml.push(writeAttributes(element[options.attributesKey], options, depth));
	    }

	    var withClosingTag = hasContentCompact(element, options, true) || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';

	    if (!withClosingTag) {
	      if ('fullTagEmptyElementFn' in options) {
	        withClosingTag = options.fullTagEmptyElementFn(name, element);
	      } else {
	        withClosingTag = options.fullTagEmptyElement;
	      }
	    }

	    if (withClosingTag) {
	      xml.push('>');
	    } else {
	      xml.push('/>');
	      return xml.join('');
	    }
	  }

	  xml.push(writeElementsCompact(element, options, depth + 1, false));
	  currentElement = element;
	  currentElementName = name;

	  if (name) {
	    xml.push((indent ? writeIndentation(options, depth, false) : '') + '</' + elementName + '>');
	  }

	  return xml.join('');
	}

	function writeElementsCompact(element, options, depth, firstLine) {
	  var i,
	      key,
	      nodes,
	      xml = [];

	  for (key in element) {
	    if (element.hasOwnProperty(key)) {
	      nodes = isArray(element[key]) ? element[key] : [element[key]];

	      for (i = 0; i < nodes.length; ++i) {
	        switch (key) {
	          case options.declarationKey:
	            xml.push(writeDeclaration(nodes[i], options, depth));
	            break;

	          case options.instructionKey:
	            xml.push((options.indentInstruction ? writeIndentation(options, depth, firstLine) : '') + writeInstruction(nodes[i], options, depth));
	            break;

	          case options.attributesKey:
	          case options.parentKey:
	            break;
	          // skip

	          case options.textKey:
	            xml.push((options.indentText ? writeIndentation(options, depth, firstLine) : '') + writeText(nodes[i], options));
	            break;

	          case options.cdataKey:
	            xml.push((options.indentCdata ? writeIndentation(options, depth, firstLine) : '') + writeCdata(nodes[i], options));
	            break;

	          case options.doctypeKey:
	            xml.push(writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i], options));
	            break;

	          case options.commentKey:
	            xml.push(writeIndentation(options, depth, firstLine) + writeComment(nodes[i], options));
	            break;

	          default:
	            xml.push(writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i], key, options, depth, hasContentCompact(nodes[i], options)));
	        }

	        firstLine = firstLine && !xml.length;
	      }
	    }
	  }

	  return xml.join('');
	}

	var js2xml$2 = function (js, options) {
	  options = validateOptions(options);
	  var xml = [];
	  currentElement = js;
	  currentElementName = '_root_';

	  if (options.compact) {
	    xml.push(writeElementsCompact(js, options, 0, true));
	  } else {
	    if (js[options.declarationKey]) {
	      xml.push(writeDeclaration(js[options.declarationKey], options, 0));
	    }

	    if (js[options.elementsKey] && js[options.elementsKey].length) {
	      xml.push(writeElements(js[options.elementsKey], options, 0, !xml.length));
	    }
	  }

	  return xml.join('');
	};

	var js2xml$1 = js2xml$2;

	var json2xml$1 = function (json, options) {
	  if (json instanceof Buffer$2) {
	    json = json.toString();
	  }

	  var js = null;

	  if (typeof json === 'string') {
	    try {
	      js = JSON.parse(json);
	    } catch (e) {
	      throw new Error('The JSON structure is invalid');
	    }
	  } else {
	    js = json;
	  }

	  return js2xml$1(js, options);
	};

	/*jslint node:true */

	var xml2js = xml2js$2;

	var xml2json = xml2json$1;

	var js2xml = js2xml$2;

	var json2xml = json2xml$1;

	var lib = {
	  xml2js: xml2js,
	  xml2json: xml2json,
	  js2xml: js2xml,
	  json2xml: json2xml
	};

	console.log(xml$1.exports);
	const form = document.querySelector("#file-form");
	const fileInput = document.querySelector("#file-input");
	form.addEventListener("submit", e => {
	  e.preventDefault();
	  const file = fileInput.files[0];
	  const country = {
	    sender: "820",
	    uz: "860"
	  };
	  const coInn = "303360698";
	  /* Date init start*/

	  let date = new Date();
	  let dd = date.getDate();
	  if (dd < 10) dd = "0" + dd;
	  var mm = date.getMonth() + 1;
	  if (mm < 10) mm = "0" + mm;
	  var yy = date.getFullYear();
	  const now = `${yy}-${mm}-${dd}`;
	  /* Date init end */

	  /* Beauty Passport start */

	  const beautyPassport = str => {
	    let passportStr = str.trim().replace(/\s/g, "");
	    let passport;

	    if (passportStr.length == 9) {
	      passport = {
	        ser: passportStr.slice(0, 2),
	        num: passportStr.slice(2)
	      };

	      if (passport.ser == "????" || passport.ser == "A??" || passport.ser == "??A") {
	        passport.ser = "AA";
	      }

	      if (passport.ser == "????" || passport.ser == "A??" || passport.ser == "??B") {
	        passport.ser = "AB";
	      }

	      if (passport.ser == "????" || passport.ser == "A??" || passport.ser == "??C") {
	        passport.ser = "AC";
	      }
	    } else {
	      passport = {
	        ser: "Passport length !== 9",
	        num: "Passport length !== 9"
	      };
	    }

	    return passport;
	  };
	  /* Beauty Passport end */


	  if (!file) return;
	  const zip = new zipBrowser(file);
	  const declList = {
	    main_data
	  };
	  zip.getEntries((error, entries) => {
	    if (error) return console.error(error);
	    const fileNames = entries.map(entry => entry.filename);
	    zip.getBuffer(fileNames, {}, (error, buffers) => {
	      if (error) return console.error(error);
	      Object.keys(buffers).forEach(key => {
	        const buffer = buffers[key];
	        const workbook = readSync(buffer);
	        const mySheet = workbook.Sheets["Sheet1"];
	        const offsets = {
	          declInfo: {
	            name: mySheet["A1"].w.trim(),
	            sum: mySheet["N10"].w.trim(),
	            weight: mySheet["N11"].w.trim()
	          },
	          person: {
	            secondname: mySheet["E4"].w.trim(),
	            firstname: mySheet["E5"].w.trim(),
	            address: mySheet["E6"].w.trim(),
	            district: mySheet["E7"].w.trim().replace(/[^+\d]/g, ""),
	            region: mySheet["E8"].w.trim().replace(/[^+\d]/g, ""),
	            telephone: mySheet["E10"].w.trim(),
	            passport: beautyPassport(mySheet["E11"].w),
	            pnfl: mySheet["E12"].w.trim()
	          },
	          declItems: {
	            row_name: "G",
	            row_quantity: "I",
	            row_cost: "J",
	            row_start: 4,
	            total_rows: 20
	          }
	        };

	        let getAllInfo = offset => {
	          if (!offset) return "Check offset";
	          let ConsignmentItems = [];
	          let itemsLength = 0;

	          for (let i = offset.declItems.row_start; i < offset.declItems.total_rows + offset.declItems.row_start; i++) {
	            if (!!mySheet[offset.declItems.row_name + i]) {
	              itemsLength++;
	            }
	          }

	          for (let i = [offset.declItems.row_start, 1]; i[0] < offset.declItems.total_rows + offset.declItems.row_start; i[0]++, i[1]++) {
	            let currentItem = {
	              name: mySheet[offset.declItems.row_name + i[0]],
	              quantity: mySheet[offset.declItems.row_quantity + i[0]],
	              cost: mySheet[offset.declItems.row_cost + i[0]],
	              weight: (offset.declInfo.weight / itemsLength).toFixed(2)
	            };

	            if (!!currentItem.name && !!currentItem.quantity && !!currentItem.cost) {
	              ConsignmentItems.push({
	                number: i[1],
	                name: currentItem.name.w,
	                unit: 796,
	                tiftn: {},
	                quantity: currentItem.quantity.w,
	                netto: currentItem.weight,
	                currency: 840,
	                cost: currentItem.cost.w
	              });
	            }
	          }

	          let currentDecl = {
	            Declaration: [{
	              decl_type: 1,
	              ident_num: offset.declInfo.name,
	              ident_data: now,
	              sending_country: country.sender,
	              receiving_country: country.uz,
	              total_cost: offset.declInfo.sum,
	              brutto: offset.declInfo.weight,
	              company_inn: coInn,
	              type_firma: 1,
	              nakl_num: {},
	              kkdg: {},
	              pnfl: offset.person.pnfl,
	              last_name: offset.person.secondname,
	              first_name: offset.person.firstname,
	              father_name: {},
	              citizen: "860",
	              pass_ser: offset.person.passport.ser,
	              pass_num: offset.person.passport.num,
	              region: offset.person.region,
	              district: offset.person.district,
	              address: offset.person.address,
	              internet: 0,
	              ConsignmentItems
	            }]
	          };
	          declList.main_data.push(currentDecl);
	        };

	        getAllInfo(offsets);
	      });
	      var options = {
	        compact: true,
	        ignoreComment: true,
	        spaces: 2,
	        fullTagEmptyElement: true
	      }; // console.log(declList);

	      console.log(lib.js2xml(declList, options));
	    });
	  });
	});

})();
