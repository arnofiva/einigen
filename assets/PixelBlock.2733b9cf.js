import{ab as b,a as x,d as A,jf as v,n as B,eu as T,N as U,t as P,eJ as G}from"./vendor.fd144a9e.js";var y;const k=b.getLogger("esri.layers.support.PixelBlock");let u=y=class extends T{constructor(e){super(e),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.pixels=null,this.statistics=null}static createEmptyBand(e,t){return new(y.getPixelArrayConstructor(e))(t)}static getPixelArrayConstructor(e){let t;switch(e){case"u1":case"u2":case"u4":case"u8":t=Uint8Array;break;case"u16":t=Uint16Array;break;case"u32":t=Uint32Array;break;case"s8":t=Int8Array;break;case"s16":t=Int16Array;break;case"s32":t=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":t=Float32Array;break;case"f64":t=Float64Array}return t}castPixelType(e){if(!e)return"f32";let t=e.toLowerCase();return["u1","u2","u4"].includes(t)?t="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(t)||(t="f32"),t}getPlaneCount(){return this.pixels&&this.pixels.length}addData(e){if(!e.pixels||e.pixels.length!==this.width*this.height)throw new U("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(e.pixels),this.statistics.push(e.statistics||{minValue:null,maxValue:null})}getAsRGBA(){const e=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(e);break;default:this._fillFrom8Bit(e)}return new Uint8ClampedArray(e)}getAsRGBAFloat(){const e=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(e),e}updateStatistics(){this.statistics=this.pixels.map(a=>this._calculateBandStatistics(a,this.mask));const e=this.mask;let t=0;if(e)for(let a=0;a<e.length;a++)e[a]&&t++;else t=this.width*this.height;this.validPixelCount=t}clamp(e){if(!e||e==="f64"||e==="f32")return;let t;switch(e){case"u8":t=[0,255];break;case"u16":t=[0,65535];break;case"u32":t=[0,4294967295];break;case"s8":t=[-128,127];break;case"s16":t=[-32768,32767];break;case"s32":t=[-2147483648,2147483647];break;default:t=[-34e38,34e38]}const[a,h]=t,r=this.pixels,i=this.width*this.height,s=r.length;let l,o,p;const f=[];for(let d=0;d<s;d++){p=y.createEmptyBand(e,i),l=r[d];for(let g=0;g<i;g++)o=l[g],p[g]=o>h?h:o<a?a:o;f.push(p)}this.pixels=f,this.pixelType=e}extractBands(e){if(P(e)||e.length===0||this.pixels==null||this.pixels.length===0)return this;const t=this.pixels.length,a=e.some(r=>r>=this.pixels.length),h=t===e.length&&!e.some((r,i)=>r!==i);return a||h?this:new y({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:e.map(r=>this.pixels[r]),statistics:this.statistics&&e.map(r=>this.statistics[r])})}clone(){const e=new y({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let t;this.mask&&(this.mask instanceof Uint8Array?e.mask=new Uint8Array(this.mask):e.mask=this.mask.slice(0));const a=y.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){e.pixels=[];const h=this.pixels[0].slice;for(t=0;t<this.pixels.length;t++)e.pixels[t]=h?this.pixels[t].slice(0,this.pixels[t].length):new a(this.pixels[t])}if(this.statistics)for(e.statistics=[],t=0;t<this.statistics.length;t++)e.statistics[t]=G(this.statistics[t]);return e}_fillFrom8Bit(e){const{mask:t,maskIsAlpha:a,pixels:h}=this;if(!e||!h||!h.length)return void k.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let r,i,s,l;r=i=s=h[0],h.length>=3?(i=h[1],s=h[2]):h.length===2&&(i=h[1]);const o=new Uint32Array(e),p=this.width*this.height;if(r.length===p)if(t&&t.length===p)if(a)for(l=0;l<p;l++)t[l]&&(o[l]=t[l]<<24|s[l]<<16|i[l]<<8|r[l]);else for(l=0;l<p;l++)t[l]&&(o[l]=255<<24|s[l]<<16|i[l]<<8|r[l]);else for(l=0;l<p;l++)o[l]=255<<24|s[l]<<16|i[l]<<8|r[l];else k.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(e){const{pixels:t,mask:a,statistics:h}=this;if(!e||!t||!t.length)return void k.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const r=this.pixelType;let i=1,s=0,l=1;if(h&&h.length>0)s=h.map(c=>c.minValue).reduce((c,w)=>Math.min(c,w)),l=h.map(c=>c.maxValue-c.minValue).reduce((c,w)=>Math.max(c,w)),i=255/l;else{let c=255;r==="s8"?(s=-128,c=127):r==="u16"?c=65535:r==="s16"?(s=-32768,c=32767):r==="u32"?c=4294967295:r==="s32"?(s=-2147483648,c=2147483647):r==="f32"?(s=-34e38,c=34e38):r==="f64"&&(s=-Number.MAX_VALUE,c=Number.MAX_VALUE),i=255/(c-s)}const o=new Uint32Array(e),p=this.width*this.height;let f,d,g,n,m;if(f=d=g=t[0],f.length!==p)return k.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(t.length>=2)if(d=t[1],t.length>=3&&(g=t[2]),a&&a.length===p)for(n=0;n<p;n++)a[n]&&(o[n]=255<<24|(g[n]-s)*i<<16|(d[n]-s)*i<<8|(f[n]-s)*i);else for(n=0;n<p;n++)o[n]=255<<24|(g[n]-s)*i<<16|(d[n]-s)*i<<8|(f[n]-s)*i;else if(a&&a.length===p)for(n=0;n<p;n++)m=(f[n]-s)*i,a[n]&&(o[n]=255<<24|m<<16|m<<8|m);else for(n=0;n<p;n++)m=(f[n]-s)*i,o[n]=255<<24|m<<16|m<<8|m}_fillFrom32Bit(e){const{pixels:t,mask:a}=this;if(!e||!t||!t.length)return k.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let h,r,i,s;h=r=i=t[0],t.length>=3?(r=t[1],i=t[2]):t.length===2&&(r=t[1]);const l=this.width*this.height;if(h.length!==l)return k.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let o=0;if(a&&a.length===l)for(s=0;s<l;s++)e[o++]=h[s],e[o++]=r[s],e[o++]=i[s],e[o++]=1&a[s];else for(s=0;s<l;s++)e[o++]=h[s],e[o++]=r[s],e[o++]=i[s],e[o++]=1}_calculateBandStatistics(e,t){let a=1/0,h=-1/0;const r=e.length;let i,s=0;if(t)for(i=0;i<r;i++)t[i]&&(s=e[i],a=s<a?s:a,h=s>h?s:h);else for(i=0;i<r;i++)s=e[i],a=s<a?s:a,h=s>h?s:h;return{minValue:a,maxValue:h}}};x([A({json:{write:!0}})],u.prototype,"width",void 0),x([A({json:{write:!0}})],u.prototype,"height",void 0),x([A({json:{write:!0}})],u.prototype,"pixelType",void 0),x([v("pixelType")],u.prototype,"castPixelType",null),x([A({json:{write:!0}})],u.prototype,"validPixelCount",void 0),x([A({json:{write:!0}})],u.prototype,"mask",void 0),x([A({json:{write:!0}})],u.prototype,"maskIsAlpha",void 0),x([A({json:{write:!0}})],u.prototype,"pixels",void 0),x([A({json:{write:!0}})],u.prototype,"statistics",void 0),u=y=x([B("esri.layers.support.PixelBlock")],u);const C=u;export{C as u};
