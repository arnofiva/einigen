function P(n,r){return n?r?4:3:r?3:2}function M(n,r,u,N,o){if(r==null||!r.lengths.length)return null;const s=o?.originPosition==="upperLeft"?-1:1;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const I=n.coords,l=[],t=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:T,coords:g}=r,F=P(u,N);let m=0;for(const e of T){const c=O(t,g,m,e,u,N,s);c&&l.push(c),m+=e*F}if(l.sort((e,c)=>{let i=s*e[2]-s*c[2];return i===0&&u&&(i=e[4]-c[4]),i}),l.length){let e=6*l[0][2];I[0]=l[0][0]/e,I[1]=l[0][1]/e,u&&(e=6*l[0][4],I[2]=e!==0?l[0][3]/e:0),(I[0]<t[0]||I[0]>t[1]||I[1]<t[2]||I[1]>t[3]||u&&(I[2]<t[4]||I[2]>t[5]))&&(I.length=0)}if(!I.length){const e=r.lengths[0]?S(g,0,T[0],u,N):null;if(!e)return null;I[0]=e[0],I[1]=e[1],u&&e.length>2&&(I[2]=e[2])}return n}function O(n,r,u,N,o,s,I=1){const l=P(o,s);let t=u,T=u+l,g=0,F=0,m=0,e=0,c=0;for(let _=0,V=N-1;_<V;_++,t+=l,T+=l){const h=r[t],b=r[t+1],f=r[t+2],E=r[T],A=r[T+1],G=r[T+2];let Y=h*A-E*b;e+=Y,g+=(h+E)*Y,F+=(b+A)*Y,o&&(Y=h*G-E*f,m+=(f+G)*Y,c+=Y),h<n[0]&&(n[0]=h),h>n[1]&&(n[1]=h),b<n[2]&&(n[2]=b),b>n[3]&&(n[3]=b),o&&(f<n[4]&&(n[4]=f),f>n[5]&&(n[5]=f))}if(e*I>0&&(e*=-1),c*I>0&&(c*=-1),!e)return null;const i=[g,F,.5*e];return o&&(i[3]=m,i[4]=.5*c),i}function S(n,r,u,N,o){const s=P(N,o);let I=r,l=r+s,t=0,T=0,g=0,F=0;for(let m=0,e=u-1;m<e;m++,I+=s,l+=s){const c=n[I],i=n[I+1],_=n[I+2],V=n[l],h=n[l+1],b=n[l+2],f=N?p(c,i,_,V,h,b):d(c,i,V,h);if(f)if(t+=f,N){const E=q(c,i,_,V,h,b);T+=f*E[0],g+=f*E[1],F+=f*E[2]}else{const E=a(c,i,V,h);T+=f*E[0],g+=f*E[1]}}return t>0?N?[T/t,g/t,F/t]:[T/t,g/t]:u>0?N?[n[r],n[r+1],n[r+2]]:[n[r],n[r+1]]:null}function d(n,r,u,N){const o=u-n,s=N-r;return Math.sqrt(o*o+s*s)}function p(n,r,u,N,o,s){const I=N-n,l=o-r,t=s-u;return Math.sqrt(I*I+l*l+t*t)}function a(n,r,u,N){return[n+.5*(u-n),r+.5*(N-r)]}function q(n,r,u,N,o,s){return[n+.5*(N-n),r+.5*(o-r),u+.5*(s-u)]}export{M as t};