import{cc as b}from"./index.da161cf1.js";var g,d,q,m={exports:{}};m.exports,g=m,d=function(){function s(t,r,n,o,h){p(t,r,n||0,o||t.length-1,h||$)}function p(t,r,n,o,h){for(;o>n;){if(o-n>600){var i=o-n+1,l=r-n+1,u=Math.log(i),v=.5*Math.exp(2*u/3),x=.5*Math.sqrt(u*v*(i-v)/i)*(l-i/2<0?-1:1);p(t,r,Math.max(n,Math.floor(r-l*v/i+x)),Math.min(o,Math.floor(r+(i-l)*v/i+x)),h)}var a=t[r],e=n,c=o;for(f(t,n,r),h(t[o],a)>0&&f(t,n,o);e<c;){for(f(t,e,c),e++,c--;h(t[e],a)<0;)e++;for(;h(t[c],a)>0;)c--}h(t[n],a)===0?f(t,n,c):f(t,++c,o),c<=r&&(n=c+1),r<=c&&(o=c-1)}}function f(t,r,n){var o=t[r];t[r]=t[n],t[n]=o}function $(t,r){return t<r?-1:t>r?1:0}return s},(q=d())!==void 0&&(g.exports=q);const k=b(m.exports);export{k as f};
