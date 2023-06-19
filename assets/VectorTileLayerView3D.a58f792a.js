import{iJ as Le,i$ as He,fl as Ue,iN as Ae,bZ as We,ff as ze,lA as ue,dL as Ge,dq as Be,dR as Je,lJ as Q,p as Ke,aT as he,lK as ke,lL as Ye,lM as je,lN as re,lO as L,lP as K,lQ as le,lR as de,lS as Xe,lT as Oe,lU as Qe,lV as Ze,al as et,bh as tt,lW as it,hD as nt,lX as at,lY as ot,lZ as st,i_ as Y,l_ as fe,cj as W,iG as N,lk as rt,ll as lt,l$ as ct,lb as q,m0 as ut,m1 as ht,m2 as A,b6 as $e,fF as ae,m3 as ee,ao as _e,a3 as dt,m4 as ft,m5 as _t,aZ as mt,q as pt,A as gt,fh as vt,l as me,e as F,y as G,a as yt}from"./index.da161cf1.js";import{t as $}from"./Rect.5473b346.js";import{n as xt}from"./pbf.82c57b62.js";import{e as wt}from"./rasterizingUtils.53560362.js";import{h as bt,T as H}from"./TileInfoView.86066260.js";import{e as k,t as Ne,r as pe}from"./definitions.c3f2bf92.js";import{M as ie}from"./number.bbe84298.js";import{c as ge}from"./GeometryUtils.020b8d8a.js";import{l as ve}from"./StyleRepository.06b2d88d.js";import{n as St}from"./LayerView3D.a0f4cfd4.js";import{o as Tt}from"./TiledLayerView3D.a907660c.js";import{d as Pt}from"./LayerView.948860d4.js";import"./colorUtils.307b1728.js";import"./TileClipper.f7503fb7.js";class It{constructor(e,i,t){this._scale=e,this._shift=i,this._levelShift=t}getLevelRowColumn(e){const i=this.getLevelShift(e[0]),t=this._shift+i;return t?[e[0]-i,e[1]>>t,e[2]>>t]:e}getLevelShift(e){return Math.min(e,this._levelShift)}getOffset(e,i){let t=0,n=0;const a=this._shift+this.getLevelShift(e[0]);if(a){const o=(1<<a)-1,s=i/(this._scale*(1<<a-1));t=(e[2]&o)*s,n=(e[1]&o)*s}return[t,n]}getScale(e){return this._scale*(1<<this._shift+this.getLevelShift(e))}}class te{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new $(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new $;let t=null,n=-1;for(let a=0;a<this._free.length;++a){const o=this._free[a];e<=o.width&&i<=o.height&&(t===null||o.y<=t.y&&o.x<=t.x)&&(t=o,n=a)}return t===null?new $:(this._free.splice(n,1),t.width<t.height?(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new $(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new $(t.x,t.y+i,e,t.height-i))),new $(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}}class ye{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new te(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],n=this._glyphSource,a=new Set,o=1/256;for(const r of i){const l=Math.floor(r*o);a.add(l)}const s=[];return a.forEach(r=>{const l=e+r;if(this._rangePromises.has(l))s.push(this._rangePromises.get(l));else{const h=n.getRange(e,r).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,h),s.push(h)}}),Promise.all(s).then(()=>{let r=this._glyphIndex[e];r||(r={},this._glyphIndex[e]=r);for(const l of i){const h=r[l];if(h){t[l]={sdf:!0,rect:h.rect,metrics:h.metrics,page:h.page,code:l};continue}const d=n.getGlyph(e,l);if(!d||!d.metrics)continue;const f=d.metrics;let c;if(f.width===0)c=new $(0,0,0,0);else{const m=f.width+6,_=f.height+2*3;let p=m%4?4-m%4:4,v=_%4?4-_%4:4;p===1&&(p=5),v===1&&(v=5),c=this._binPack.allocate(m+p,_+v),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new te(this.width-4,this.height-4),c=this._binPack.allocate(m+p,_+v));const P=this._glyphData[this._currentPage],I=d.bitmap;let y,S;if(I)for(let x=0;x<_;x++){y=m*x,S=this.width*(c.y+x+1)+c.x;for(let w=0;w<m;w++)P[S+w+1]=I[y+w]}}r[l]={rect:c,metrics:f,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:c,metrics:f,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let n;for(const a in t)if(n=t[a],n.tileIDs.delete(e),n.tileIDs.size===0){const o=this._glyphData[n.page],s=n.rect;let r,l;for(let h=0;h<s.height;h++)for(r=this.width*(s.y+h)+s.x,l=0;l<s.width;l++)o[r+l]=0;delete t[a],this._dirties[n.page]=!0}}}bind(e,i,t,n=0){if(!this._textures[t]){const o=new Le;o.pixelFormat=He.ALPHA,o.wrapMode=Ue.CLAMP_TO_EDGE,o.width=this.width,o.height=this.height,this._textures[t]=new Ae(e,o,new Uint8Array(this.width*this.height))}const a=this._textures[t];a.setSamplingMode(i),this._dirties[t]&&a.setData(this._glyphData[t]),e.bindTexture(a,n),this._dirties[t]=!1}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}}class se{constructor(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const i=e.getMessage();for(;i.next();)switch(i.tag()){case 3:{const t=i.getMessage();let n,a,o,s,r,l,h;for(;t.next();)switch(t.tag()){case 1:n=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:o=t.getUInt32();break;case 4:s=t.getUInt32();break;case 5:r=t.getSInt32();break;case 6:l=t.getSInt32();break;case 7:h=t.getUInt32();break;default:t.skip()}t.release(),n&&(this._metrics[n]={width:o,height:s,left:r,top:l,advance:h},this._bitmaps[n]=a);break}default:i.skip()}i.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}}class Mt{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}}class xe{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const n=256*i,a=n+255;if(this._baseURL){const o=this._baseURL.replace("{fontstack}",e).replace("{range}",n+"-"+a);return We(o,{responseType:"array-buffer"}).then(s=>{t.addRange(i,new se(new xt(new Uint8Array(s.data),new DataView(s.data))))}).catch(()=>{t.addRange(i,new se)})}return t.addRange(i,new se),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const n=Math.floor(i/256),a=t.getRange(n);return a?{metrics:a.getMetrics(i),bitmap:a.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new Mt),i}}const Rt="dasharray-";class oe{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new te(e-4,i-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new te(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),n=new Uint32Array(i*t);this._mosaicsData[0]=n,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,n,a=this._mosaicRects[e];if(a)return a;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(Rt)?([t,n]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!t||!t.width||!t.height||t.width<0||t.height<0))return null;const o=t.width,s=t.height,[r,l,h]=this._allocateImage(o,s);return r.width<=0?null:(this._copy(r,t,l,h,i,n),a={rect:r,width:o,height:s,sdf:t.sdf,simplePattern:!1,pixelRatio:t.pixelRatio,page:l},this._mosaicRects[e]=a,a)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),n=t&&t.rect;if(!n)return null;n.width=t.width,n.height=t.height;const a=t.width,o=t.height,s=2;return{tl:[n.x+s,n.y+s],br:[n.x+s+a,n.y+s+o],page:t.page}}bind(e,i,t=0,n=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;if(!this._textures[t]){const o=new Le;o.wrapMode=Ue.CLAMP_TO_EDGE,o.width=this._size[t][0],o.height=this._size[t][1],this._textures[t]=new Ae(e,o,new Uint8Array(this._mosaicsData[t].buffer))}const a=this._textures[t];a.setSamplingMode(i),this._dirties[t]&&a.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(a,n),this._dirties[t]=!1}static _copyBits(e,i,t,n,a,o,s,r,l,h,d){let f=n*i+t,c=r*o+s;if(d){c-=o;for(let g=-1;g<=h;g++,f=((g+h)%h+n)*i+t,c+=o)for(let m=-1;m<=l;m++)a[c+m]=e[f+(m+l)%l]}else for(let g=0;g<h;g++){for(let m=0;m<l;m++)a[c+m]=e[f+m];f+=i,c+=o}}_copy(e,i,t,n,a,o){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const s=new Uint32Array(o?o.buffer:this._sprites.image.buffer),r=this._mosaicsData[t];r&&s||console.error("Source or target images are uninitialized!");const l=2,h=o?i.width:this._sprites.width;oe._copyBits(s,h,i.x,i.y,r,n[0],e.x+l,e.y+l,i.width,i.height,a),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const s=new $(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[s,this._mosaicsData.length-1,[e,i]]}let n=e%4?4-e%4:4,a=i%4?4-i%4:4;n===1&&(n=5),a===1&&(a=5);const o=this._binPack.allocate(e+n,i+a);return o.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new te(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[o,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const n=t[1].split(",").map(Number),a=e.slice(e.lastIndexOf("-")+1),[o,s,r]=wt(n,a);return[{x:0,y:0,width:s,height:r,sdf:!0,pixelRatio:1},new Uint8Array(o.buffer)]}}class Dt{constructor(e,i,t){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){this._connection?.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=ze(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._requestSprite(e);const i=this._layer.currentStyleInfo.glyphsUrl,t=new xe(i?ue(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new ye(1024,1024,t),this._broadcastPromise=Ge("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(n=>{if(this._layer&&(this._connection?.close(),this._connection=n,this._layer&&!this._connection.closed)){const a=n.broadcast("setStyle",this._layer.currentStyleInfo.style,e);Promise.all(a).catch(o=>Be(o))}})}_requestSprite(e){this._spriteSourceAbortController?.abort();const i=new AbortController;this._spriteSourceAbortController=i;const t=e?.signal;this._inputSignalEventListener&&this._startOptionsInputSignal?.removeEventListener("abort",this._inputSignalEventListener),this._startOptionsInputSignal=null,t&&(this._inputSignalEventListener=Ct(i),t.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:n}=i,a={...e,signal:n};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,a),this._spriteSourcePromise.then(o=>{Je(n),this._spriteMosaic=new oe(1024,1024,250),this._spriteMosaic.setSpriteSource(o)})}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const i=new oe(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),this._spriteSourceAbortController=null,i}async setStyle(e,i){await this._broadcastPromise,this._styleRepository=e,this._requestSprite();const t=new xe(this._layer.currentStyleInfo.glyphsUrl?ue(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new ye(1024,1024,t),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",i)),this._broadcastPromise}fetchTileData(e,i){return this._getRefKeys(e,i).then(t=>{const n=this._layer.sourceNameToSource,a=[];for(const o in n)a.push(o);return this._getSourcesData(a,t,i)})}parseTileData(e,i){const t=e&&e.data;if(!t)return Promise.resolve(null);const{sourceName2DataAndRefKey:n,transferList:a}=t;return Object.keys(n).length===0?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:n,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:a}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const n=Q.pool.acquire(e.id),a=this._layer.sourceNameToSource[i],{level:o,row:s,col:r}=n;Q.pool.release(n);try{return{protobuff:await a.requestTile(o,s,r,t),sourceName:i}}catch(l){if(Ke(l))throw l;return{protobuff:null,sourceName:i}}}_getRefKeys(e,i){const t=this._layer.sourceNameToSource,n=new Array;for(const a in t){const o=t[a].getRefKey(e,i);n.push(o)}return he(n)}_getSourcesData(e,i,t){const n=[];for(let a=0;a<i.length;a++)if(i[a].value==null||e[a]==null)n.push(null);else{const o=this._getTilePayload(i[a].value,e[a],t);n.push(o)}return he(n).then(a=>{const o={},s=[];for(let r=0;r<a.length;r++){const l=a[r].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const h=i[r].value.id;o[l.sourceName]={refKey:h,protobuff:l.protobuff},s.push(l.protobuff)}}return{sourceName2DataAndRefKey:o,transferList:s}})}}function Ct(u){return()=>u.abort()}function Et(u,e,i,t,n,a){const{iconRotationAlignment:o,textRotationAlignment:s,iconTranslate:r,iconTranslateAnchor:l,textTranslate:h,textTranslateAnchor:d}=t;let f=0;for(const c of u.colliders){const[g,m]=c.partIndex===0?r:h,_=c.partIndex===0?l:d,p=c.minLod<=a&&a<=c.maxLod;f+=p?0:1,c.enabled=p,c.xScreen=c.xTile*n[0]+c.yTile*n[3]+n[6],c.yScreen=c.xTile*n[1]+c.yTile*n[4]+n[7],_===K.MAP?(c.xScreen+=i*g-e*m,c.yScreen+=e*g+i*m):(c.xScreen+=g,c.yScreen+=m),L.VIEWPORT===(c.partIndex===0?o:s)?(c.dxScreen=c.dxPixels,c.dyScreen=c.dyPixels):(c.dxScreen=i*(c.dxPixels+c.width/2)-e*(c.dyPixels+c.height/2)-c.width/2,c.dyScreen=e*(c.dxPixels+c.width/2)+i*(c.dyPixels+c.height/2)-c.height/2)}u.colliders.length>0&&f===u.colliders.length&&(u.unique.show=!1)}class Lt{constructor(e,i,t,n,a,o){this._symbols=e,this._styleRepository=n,this._zoom=a,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new ke(i,t,Ye),this._si=Math.sin(Math.PI*o/180),this._co=Math.cos(Math.PI*o/180);for(const s of e)for(const r of s.symbols)this._allNeededMatrices.has(r.tile)||this._allNeededMatrices.set(r.tile,je(r.tile.transforms.tileUnitsToPixels))}work(e){const i=this._gridIndex;function t(a){const o=a.xScreen+a.dxScreen,s=a.yScreen+a.dyScreen,r=o+a.width,l=s+a.height,[h,d,f,c]=i.getCellSpan(o,s,r,l);for(let g=d;g<=c;g++)for(let m=h;m<=f;m++){const _=i.cells[g][m];for(const p of _){const v=p.xScreen+p.dxScreen,P=p.yScreen+p.dyScreen,I=v+p.width,y=P+p.height;if(!(r<v||o>I||l<P||s>y))return!0}}return!1}const n=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const a=this._symbols[this._currentLayerCursor],o=this._getProperties(a.styleLayerUID);for(;this._currentSymbolCursor<a.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-n>e)return!1;const s=a.symbols[this._currentSymbolCursor];if(!s.unique.show)continue;Et(s,this._si,this._co,o,this._allNeededMatrices.get(s.tile),this._zoom);const r=s.unique;if(!r.show)continue;const{iconAllowOverlap:l,iconIgnorePlacement:h,textAllowOverlap:d,textIgnorePlacement:f}=o;for(const c of s.colliders){if(!c.enabled)continue;const g=r.parts[c.partIndex];!g.show||!(c.partIndex?d:l)&&t(c)&&(c.hard?r.show=!1:g.show=!1)}if(r.show)for(const c of s.colliders){if(!c.enabled||(c.partIndex?f:h)||!r.parts[c.partIndex].show)continue;const g=c.xScreen+c.dxScreen,m=c.yScreen+c.dyScreen,_=g+c.width,p=m+c.height,[v,P,I,y]=this._gridIndex.getCellSpan(g,m,_,p);for(let S=P;S<=y;S++)for(let x=v;x<=I;x++)this._gridIndex.cells[S][x].push(c)}}}return!0}_getProperties(e){const i=this._styleProps.get(e);if(i)return i;const t=this._zoom,n=this._styleRepository.getStyleLayerByUID(e),a=n.getLayoutValue("symbol-placement",t)!==re.POINT;let o=n.getLayoutValue("icon-rotation-alignment",t);o===L.AUTO&&(o=a?L.MAP:L.VIEWPORT);let s=n.getLayoutValue("text-rotation-alignment",t);s===L.AUTO&&(s=a?L.MAP:L.VIEWPORT);const r=n.getPaintValue("icon-translate",t),l=n.getPaintValue("icon-translate-anchor",t),h=n.getPaintValue("text-translate",t),d=n.getPaintValue("text-translate-anchor",t),f={iconAllowOverlap:n.getLayoutValue("icon-allow-overlap",t),iconIgnorePlacement:n.getLayoutValue("icon-ignore-placement",t),textAllowOverlap:n.getLayoutValue("text-allow-overlap",t),textIgnorePlacement:n.getLayoutValue("text-ignore-placement",t),iconRotationAlignment:o,textRotationAlignment:s,iconTranslateAnchor:l,iconTranslate:r,textTranslateAnchor:d,textTranslate:h};return this._styleProps.set(e,f),f}}function Ut(u,e){if(u.priority-e.priority)return u.priority-e.priority;const i=u.tile.key,t=e.tile.key;return i.world-t.world?i.world-t.world:i.level-t.level?i.level-t.level:i.row-t.row?i.row-t.row:i.col-t.col?i.col-t.col:u.xTile-e.xTile?u.xTile-e.xTile:u.yTile-e.yTile}class At{get running(){return this._running}constructor(e,i,t,n,a,o){this._visibleTiles=e,this._symbolRepository=i,this._createCollisionJob=t,this._assignTileSymbolsOpacity=n,this._symbolLayerSorter=a,this._isLayerVisible=o,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(e,i){this._screenWidth===e&&this._screenHeight===i||this.restart(),this._screenWidth=e,this._screenHeight=i}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const i=performance.now();if(!this._selectionJob.work(e)||(this._selectionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const i=performance.now();if(!this._collisionJob.work(e)||(this._collisionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const i=performance.now();if(!this._opacityJob.work(e)||(this._opacityJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let r=0;r<e.length;r++){const l=e[r];for(let h=0;h<l.uniqueSymbols.length;h++){const d=l.uniqueSymbols[h];for(const f of d.tileSymbols)f.selectedForRendering=!1}}const i=[];let t=0,n=0;const a=this._isLayerVisible;function o(r){let l;const h=performance.now();for(;n<e.length;n++,t=0){const d=e[n],f=d.styleLayerUID;if(!a(f)){i[n]||(i[n]={styleLayerUID:f,symbols:[]});continue}i[n]=i[n]||{styleLayerUID:f,symbols:[]};const c=i[n];for(;t<d.uniqueSymbols.length;t++){if(l=d.uniqueSymbols[t],t%100==99&&performance.now()-h>r)return!1;let g=null,m=!1,_=!1;for(const p of l.tileSymbols)if(!_||!m){const v=p.tile;(!g||v.isCoverage||v.neededForCoverage&&!m)&&(g=p,(v.neededForCoverage||v.isCoverage)&&(_=!0),v.isCoverage&&(m=!0))}if(g.selectedForRendering=!0,_){c.symbols.push(g),l.show=!0;for(const p of l.parts)p.show=!0}else l.show=!1}}for(const d of i)d.symbols.sort(Ut);return!0}const s=this._symbolLayerSorter;return{work:o,get sortedSymbols(){return i.sort(s)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,i=this._visibleTiles;let t=0;function n(a,o){const s=a.symbols;for(const[r,l]of s)zt(l,o);e(a,o);for(const r of a.childrenTiles)n(r,o)}return{work(a){const o=performance.now();for(;t<i.length;t++){if(performance.now()-o>a)return!1;const s=i[t];s.parentTile==null&&n(s,performance.now())}return!0}}}}function zt(u,e){for(const i of u){const t=i.unique;for(const n of t.parts){const a=n.targetOpacity>.5?1:-1;n.startOpacity+=a*((e-n.startTime)/le),n.startOpacity=Math.min(Math.max(n.startOpacity,0),1),n.startTime=e,n.targetOpacity=t.show&&n.show?1:0}}}const kt=32,Ot=8,$t=64;class Nt{constructor(e,i,t){this.tileCoordRange=e,this._visibleTiles=i,this._createUnique=t,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return this._uniqueSymbolLayerArray==null&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,i){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const n=new Map;if(i)for(const s of i)t.symbols.has(s)&&(n.set(s,t.symbols.get(s)),t.symbols.delete(s));else for(const[s,r]of e.layerData)t.symbols.has(s)&&(n.set(s,t.symbols.get(s)),t.symbols.delete(s));this._removeSymbols(n);const a=e.symbols,o=new Map;for(const[s,r]of a){let l=r.length;if(l>=kt){let h=this.tileCoordRange;do h/=2,l/=4;while(l>Ot&&h>$t);const d=new ke(this.tileCoordRange,this.tileCoordRange,h);o.set(s,{flat:r,index:d}),t.symbols.set(s,{flat:r,index:d});for(const f of r)d.getCell(f.xTile,f.yTile).push(f)}else o.set(s,{flat:r}),t.symbols.set(s,{flat:r})}this._addSymbols(e.key,a)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[i,t]of this._tiles){const n=new Map;for(const a of e)t.symbols.has(a)&&(n.set(a,t.symbols.get(a)),t.symbols.delete(a));this._removeSymbols(n),t.symbols.size===0&&this._tiles.delete(i)}}removeTile(e){this._uniqueSymbolLayerArray=null;const i=this._tiles.get(e.id);if(!i)return;const t=new Map;for(const[n,a]of e.symbols)i.symbols.has(n)&&(t.set(n,i.symbols.get(n)),i.symbols.delete(n));this._removeSymbols(t),i.symbols.size===0&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[i,{flat:t}]of e)for(const n of t){const a=n.unique,o=a.tileSymbols,s=o.length-1;for(let r=0;r<s;r++)if(o[r]===n){o[r]=o[s];break}if(o.length=s,s===0){const r=this._uniqueSymbolsReferences.get(i);r.delete(a),r.size===0&&this._uniqueSymbolsReferences.delete(i)}n.unique=null}}_addSymbols(e,i){if(i.size===0)return;const t=this._visibleTiles;for(const n of t)n.parentTile||n.key.world!==e.world||n.key.level===e.level&&!n.key.equals(e)||this._matchSymbols(n,e,i);for(const[n,a]of i)for(const o of a)if(o.unique==null){const s=this._createUnique();o.unique=s,s.tileSymbols.push(o);let r=this._uniqueSymbolsReferences.get(n);r||(r=new Set,this._uniqueSymbolsReferences.set(n,r)),r.add(s)}}_matchSymbols(e,i,t){if(e.key.level>i.level){const a=e.key.level-i.level;if(e.key.row>>a!==i.row||e.key.col>>a!==i.col)return}if(i.level>e.key.level){const a=i.level-e.key.level;if(i.row>>a!==e.key.row||i.col>>a!==e.key.col)return}if(i.equals(e.key)){for(const a of e.childrenTiles)this._matchSymbols(a,i,t);return}const n=new Map;for(const[a,o]of t){const s=[];for(const d of o){const f=de(this.tileCoordRange,d.xTile,i.level,i.col,e.key.level,e.key.col),c=de(this.tileCoordRange,d.yTile,i.level,i.row,e.key.level,e.key.row);f>=0&&f<this.tileCoordRange&&c>=0&&c<this.tileCoordRange&&s.push({symbol:d,xTransformed:f,yTransformed:c})}const r=[],l=e.key.level<i.level?1:1<<e.key.level-i.level,h=this._tiles.get(e.id).symbols.get(a);if(h){const d=h.flat;for(const f of s){let c,g=!1;const m=f.xTransformed,_=f.yTransformed;c=h.index!=null?h.index.getCell(m,_):d;const p=f.symbol,v=p.hash;for(const P of c)if(v===P.hash&&Math.abs(m-P.xTile)<=l&&Math.abs(_-P.yTile)<=l){const I=P.unique;p.unique=I,I.tileSymbols.push(p),g=!0;break}g||r.push(p)}}r.length>0&&n.set(a,r)}for(const a of e.childrenTiles)this._matchSymbols(a,i,n)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,i=new Array(e.size);let t,n=0;for(const[a,o]of e){const s=new Array(o.size);t=0;for(const r of o)s[t++]=r;i[n]={styleLayerUID:a,uniqueSymbols:s},n++}return i}}function Vt(u){const e=[],i=new Nt(4096,e,()=>{const n=new Qe;return n.show=!1,n.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),n.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),n}),t=new At(e,i,(n,a,o)=>new Lt(n,a,o,u.styleRepository,u.key.level,0),(n,a)=>{Xe(n,a,!1)},()=>0,n=>{const a=u.styleRepository.getStyleLayerByUID(n).getLayoutProperty("visibility");return!a||a.getValue()!==Oe.NONE});e.push(u),i.add(u),t.setScreenSize(512,512),t.continue(1/0)}class Ft extends bt{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=Q.pool.acquire(e),t=i.level===0?null:Q.getId(i.level-1,i.row>>1,i.col>>1,i.world);return Q.pool.release(i),t}getTileCoverage(e,i,t=!0,n){const a=super.getTileCoverage(e,i,t,n);if(!a)return a;const o=1<<a.lodInfo.level;return a.spans=a.spans.filter(s=>s.row>=0&&s.row<o),a}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,n;for(let a=0;a<i.length-1;a++)if(n=i[a+1],e>n.scale)return t=i[a],t.level+(t.scale-e)/(t.scale-n.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],n=this.tileInfo.spatialReference;i=Ze.create({size:t,spatialReference:n}).lods.map(a=>({level:a.level,resolution:a.resolution,scale:a.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}}class we extends Dt{constructor(e,i,t,n){super(e,i,t),this._memCache=n,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new Ft(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i,t,n){const a=new Q(e,i,t,0);let o=this._memCache.get(a.id);if(o!=null)return o.retain(),o;const s=await this._getVectorTileData(a);if(et(n),!this._layer)return null;if(o=this._memCache.get(a.id),o!=null)return o.retain(),o;const r=this._layer.tileInfo.getTileBounds(tt(),a),l=this._tileInfoView.getTileResolution(e);return o=new it(a,l,r[0],r[3],512,512,this._styleRepository,this._memCache),s?(o.setData(s),o.retain(),this._memCache.put(a.id,o,o.memoryUsed,nt)):o.setData(null),o.neededForCoverage=!0,o.transforms.tileUnitsToPixels=at(1/8,0,0,0,1/8,0,0,0,1),Vt(o),o}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,n={signal:t.signal},a=this._getParsedVectorTileData(e,n).then(o=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),o)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,a),this._ongoingRequestToController.set(i,t),a}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}}class ne{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const n of i)n.visible&&this.draw(e,n,t)}}class qt extends ne{constructor(){super(...arguments),this._color=ot(1,0,0,1),this._patternMatrix=st(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:n,styleLayerUID:a,requestRender:o,allowDelayedRender:s}=e;this._loadWGLResources(e);const r=e.displayLevel,l=e.styleLayer,h=l.backgroundMaterial,d=n.vectorTilesMaterialManager,f=l.getPaintValue("background-color",r),c=l.getPaintValue("background-opacity",r),g=l.getPaintValue("background-pattern",r),m=g!==void 0,_=f[3]*c,p=1|window.devicePixelRatio,v=e.spriteMosaic;let P,I;const y=p>Ne?2:1,S=e.drawPhase===H.HITTEST,x=this._programOptions;x.id=S,x.pattern=m;const w=d.getMaterialProgram(t,h,x);if(!s||o==null||w.compiled){if(t.bindVAO(this._vao),t.useProgram(w),m){const T=v.getMosaicItemPosition(g,!0);if(T!=null){const{tl:M,br:b,page:D}=T;P=b[0]-M[0],I=b[1]-M[1];const R=v.getPageSize(D);R!=null&&(v.bind(t,Y.LINEAR,D,k),w.setUniform4f("u_tlbr",M[0],M[1],b[0],b[1]),w.setUniform2fv("u_mosaicSize",R),w.setUniform1i("u_texture",k))}w.setUniform1f("u_opacity",c)}else this._color[0]=_*f[0],this._color[1]=_*f[1],this._color[2]=_*f[2],this._color[3]=_,w.setUniform4fv("u_color",this._color);if(w.setUniform1f("u_depth",l.z||0),S){const T=ie(a+1);w.setUniform4fv("u_id",T)}for(const T of i){if(w.setUniform1f("u_coord_range",T.rangeX),w.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),m){const M=Math.max(2**(Math.round(r)-T.key.level),1),b=y*T.width*M,D=b/fe(P),R=b/fe(I);this._patternMatrix[0]=D,this._patternMatrix[4]=R,w.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(W.EQUAL,0,255),t.drawArrays(N.TRIANGLE_STRIP,0,4)}}else o()}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,n=t.backgroundMaterial,a=new Int8Array([0,0,1,0,0,1,1,1]),o=rt.createVertex(i,lt.STATIC_DRAW,a),s=new ct(i,n.getAttributeLocations(),n.getLayoutInfo(),{geometry:o});this._vao=s}}class Ht extends ne{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,requiredLevel:a,state:o,drawPhase:s,painter:r,spriteMosaic:l,styleLayerUID:h,requestRender:d,allowDelayedRender:f}=e;if(!i.some(x=>x.layerData.get(h)?.circleIndexCount??!1))return;const c=e.styleLayer,g=c.circleMaterial,m=r.vectorTilesMaterialManager,_=1.2,p=c.getPaintValue("circle-translate",n),v=c.getPaintValue("circle-translate-anchor",n),P=s===H.HITTEST,I=this._programOptions;I.id=P;const y=m.getMaterialProgram(t,g,I);if(f&&d!=null&&!y.compiled)return void d();t.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",v===K.VIEWPORT?o.displayMat3:o.displayViewMat3),y.setUniform2fv("u_circleTranslation",p),y.setUniform1f("u_depth",c.z),y.setUniform1f("u_antialiasingWidth",_);let S=-1;if(P){const x=ie(h+1);y.setUniform4fv("u_id",x)}for(const x of i){if(!x.layerData.has(h))continue;x.key.level!==S&&(S=x.key.level,g.setDataUniforms(y,n,c,S,l));const w=x.layerData.get(h);if(!w.circleIndexCount)continue;w.prepareForRendering(t);const T=w.vao;T!=null&&(t.bindVAO(T),y.setUniformMatrix3fv("u_dvsMat3",x.transforms.dvs),a!==x.key.level?t.setStencilFunction(W.EQUAL,x.stencilRef,255):t.setStencilFunction(W.GREATER,255,255),t.drawElements(N.TRIANGLES,w.circleIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*w.circleIndexStart),x.triangleCount+=w.circleIndexCount/3)}}}const be=1/65536;class Wt extends ne{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,drawPhase:n,renderPass:a,spriteMosaic:o,styleLayerUID:s}=e;let r=!1;for(const y of i)if(y.layerData.has(s)){const S=y.layerData.get(s);if(S.fillIndexCount>0||S.outlineIndexCount>0){r=!0;break}}if(!r)return;const l=e.styleLayer,h=l.getPaintProperty("fill-pattern"),d=h!==void 0,f=d&&h.isDataDriven;let c;if(d&&!f){const y=h.getValue(t);c=o.getMosaicItemPosition(y,!0)}const g=!d&&l.getPaintValue("fill-antialias",t);let m=!0,_=1;if(!d){const y=l.getPaintProperty("fill-color"),S=l.getPaintProperty("fill-opacity");if(!y?.isDataDriven&&!S?.isDataDriven){const x=l.getPaintValue("fill-color",t);_=l.getPaintValue("fill-opacity",t)*x[3],_>=1&&(m=!1)}}if(m&&a==="opaque")return;let p;n===H.HITTEST&&(p=ie(s+1));const v=l.getPaintValue("fill-translate",t),P=l.getPaintValue("fill-translate-anchor",t);(m||a!=="translucent")&&this._drawFill(e,s,l,i,v,P,d,c,f,p);const I=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&_<1;g&&a!=="opaque"&&!I&&this._drawOutline(e,s,l,i,v,P,p)}_drawFill(e,i,t,n,a,o,s,r,l,h){if(s&&!l&&r==null)return;const{context:d,displayLevel:f,state:c,drawPhase:g,painter:m,pixelRatio:_,spriteMosaic:p,requestRender:v,allowDelayedRender:P}=e,I=t.fillMaterial,y=m.vectorTilesMaterialManager,S=_>Ne?2:1,x=g===H.HITTEST,w=this._fillProgramOptions;w.id=x,w.pattern=s;const T=y.getMaterialProgram(d,I,w);if(P&&v!=null&&!T.compiled)return void v();if(d.useProgram(T),r!=null){const{page:b}=r,D=p.getPageSize(b);D!=null&&(p.bind(d,Y.LINEAR,b,k),T.setUniform2fv("u_mosaicSize",D),T.setUniform1i("u_texture",k))}T.setUniformMatrix3fv("u_displayMat3",o===K.VIEWPORT?c.displayMat3:c.displayViewMat3),T.setUniform2fv("u_fillTranslation",a),T.setUniform1f("u_depth",t.z+be),x&&T.setUniform4fv("u_id",h);let M=-1;for(const b of n){if(!b.layerData.has(i))continue;b.key.level!==M&&(M=b.key.level,I.setDataUniforms(T,f,t,M,p));const D=b.layerData.get(i);if(!D.fillIndexCount)continue;D.prepareForRendering(d);const R=D.fillVAO;if(R!=null){if(d.bindVAO(R),T.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),d.setStencilFunction(W.EQUAL,b.stencilRef,255),s){const U=Math.max(2**(Math.round(f)-b.key.level),1),E=b.rangeX/(S*b.width*U);T.setUniform1f("u_patternFactor",E)}if(l){const U=D.patternMap;if(!U)continue;for(const[E,B]of U){const J=p.getPageSize(E);J!=null&&(p.bind(d,Y.LINEAR,E,k),T.setUniform2fv("u_mosaicSize",J),T.setUniform1i("u_texture",k),d.drawElements(N.TRIANGLES,B[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*B[0]))}}else d.drawElements(N.TRIANGLES,D.fillIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.fillIndexStart);b.triangleCount+=D.fillIndexCount/3}}}_drawOutline(e,i,t,n,a,o,s){const{context:r,displayLevel:l,state:h,drawPhase:d,painter:f,pixelRatio:c,spriteMosaic:g,requestRender:m,allowDelayedRender:_}=e,p=t.outlineMaterial,v=f.vectorTilesMaterialManager,P=.75/c,I=d===H.HITTEST,y=this._outlineProgramOptions;y.id=I;const S=v.getMaterialProgram(r,p,y);if(_&&m!=null&&!S.compiled)return void m();r.useProgram(S),S.setUniformMatrix3fv("u_displayMat3",o===K.VIEWPORT?h.displayMat3:h.displayViewMat3),S.setUniform2fv("u_fillTranslation",a),S.setUniform1f("u_depth",t.z+be),S.setUniform1f("u_outline_width",P),I&&S.setUniform4fv("u_id",s);let x=-1;for(const w of n){if(!w.layerData.has(i))continue;w.key.level!==x&&(x=w.key.level,p.setDataUniforms(S,l,t,x,g));const T=w.layerData.get(i);if(T.prepareForRendering(r),!T.outlineIndexCount)continue;const M=T.outlineVAO;M!=null&&(r.bindVAO(M),S.setUniformMatrix3fv("u_dvsMat3",w.transforms.dvs),r.setStencilFunction(W.EQUAL,w.stencilRef,255),r.drawElements(N.TRIANGLES,T.outlineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*T.outlineIndexStart),w.triangleCount+=T.outlineIndexCount/3)}}}class Gt extends ne{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,state:a,drawPhase:o,painter:s,pixelRatio:r,spriteMosaic:l,styleLayerUID:h,requestRender:d,allowDelayedRender:f}=e;if(!i.some(R=>R.layerData.get(h)?.lineIndexCount??!1))return;const c=e.styleLayer,g=c.lineMaterial,m=s.vectorTilesMaterialManager,_=c.getPaintValue("line-translate",n),p=c.getPaintValue("line-translate-anchor",n),v=c.getPaintProperty("line-pattern"),P=v!==void 0,I=P&&v.isDataDriven;let y,S;if(P&&!I){const R=v.getValue(n);y=l.getMosaicItemPosition(R)}let x=!1;if(!P){const R=c.getPaintProperty("line-dasharray");if(S=R!==void 0,x=S&&R.isDataDriven,S&&!x){const U=R.getValue(n),E=c.getDashKey(U,c.getLayoutValue("line-cap",n));y=l.getMosaicItemPosition(E)}}const w=1/r,T=o===H.HITTEST,M=this._programOptions;M.id=T,M.pattern=P,M.sdf=S;const b=m.getMaterialProgram(t,g,M);if(f&&d!=null&&!b.compiled)return void d();if(t.useProgram(b),b.setUniformMatrix3fv("u_displayViewMat3",a.displayViewMat3),b.setUniformMatrix3fv("u_displayMat3",p===K.VIEWPORT?a.displayMat3:a.displayViewMat3),b.setUniform2fv("u_lineTranslation",_),b.setUniform1f("u_depth",c.z),b.setUniform1f("u_antialiasing",w),T){const R=ie(h+1);b.setUniform4fv("u_id",R)}if(y&&y!=null){const{page:R}=y,U=l.getPageSize(R);U!=null&&(l.bind(t,Y.LINEAR,R,k),b.setUniform2fv("u_mosaicSize",U),b.setUniform1i("u_texture",k))}let D=-1;for(const R of i){if(!R.layerData.has(h))continue;R.key.level!==D&&(D=R.key.level,g.setDataUniforms(b,n,c,D,l));const U=2**(n-D)/r;b.setUniform1f("u_zoomFactor",U);const E=R.layerData.get(h);if(!E.lineIndexCount)continue;E.prepareForRendering(t);const B=E.vao;if(B!=null){if(t.bindVAO(B),b.setUniformMatrix3fv("u_dvsMat3",R.transforms.dvs),t.setStencilFunction(W.EQUAL,R.stencilRef,255),I||x){const J=E.patternMap;if(!J)continue;for(const[Z,C]of J){const X=l.getPageSize(Z);X!=null&&(l.bind(t,Y.LINEAR,Z,k),b.setUniform2fv("u_mosaicSize",X),b.setUniform1i("u_texture",k),t.drawElements(N.TRIANGLES,C[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*C[0]))}}else t.drawElements(N.TRIANGLES,E.lineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*E.lineIndexStart);R.triangleCount+=E.lineIndexCount/3}}}}const Bt=1/65536;class Jt extends ne{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=ut()}dispose(){}drawMany(e,i){const{drawPhase:t,styleLayerUID:n}=e,a=e.styleLayer;let o;t===H.HITTEST&&(o=ie(n+1)),this._drawIcons(e,a,i,o),this._drawText(e,a,i,o)}_drawIcons(e,i,t,n){const{context:a,displayLevel:o,drawPhase:s,painter:r,spriteMosaic:l,state:h,styleLayerUID:d,requestRender:f,allowDelayedRender:c}=e,g=i.iconMaterial,m=r.vectorTilesMaterialManager;let _,p=!1;for(const D of t)if(D.layerData.has(d)&&(_=D.layerData.get(d),_.iconPerPageElementsMap.size>0)){p=!0;break}if(!p)return;const v=i.getPaintValue("icon-translate",o),P=i.getPaintValue("icon-translate-anchor",o);let I=i.getLayoutValue("icon-rotation-alignment",o);I===L.AUTO&&(I=i.getLayoutValue("symbol-placement",o)===re.POINT?L.VIEWPORT:L.MAP);const y=I===L.MAP,S=i.getLayoutValue("icon-keep-upright",o)&&y,x=_.isIconSDF,w=s===H.HITTEST,T=this._iconProgramOptions;T.id=w,T.sdf=x;const M=m.getMaterialProgram(a,g,T);if(c&&f!=null&&!M.compiled)return void f();a.useProgram(M),M.setUniformMatrix3fv("u_displayViewMat3",I===L.MAP?h.displayViewMat3:h.displayMat3),M.setUniformMatrix3fv("u_displayMat3",P===K.VIEWPORT?h.displayMat3:h.displayViewMat3),M.setUniform2fv("u_iconTranslation",v),M.setUniform1f("u_depth",i.z),M.setUniform1f("u_mapRotation",ge(h.rotation)),M.setUniform1f("u_keepUpright",S?1:0),M.setUniform1f("u_level",10*o),M.setUniform1i("u_texture",k),M.setUniform1f("u_fadeDuration",le/1e3),w&&M.setUniform4fv("u_id",n);let b=-1;for(const D of t){if(!D.layerData.has(d)||(D.key.level!==b&&(b=D.key.level,g.setDataUniforms(M,o,i,b,l)),_=D.layerData.get(d),_.iconPerPageElementsMap.size===0))continue;_.prepareForRendering(a),_.updateOpacityInfo();const R=_.iconVAO;if(R!=null){a.bindVAO(R),M.setUniformMatrix3fv("u_dvsMat3",D.transforms.dvs),M.setUniform1f("u_time",(performance.now()-_.lastOpacityUpdate)/1e3);for(const[U,E]of _.iconPerPageElementsMap)this._renderIconRange(e,M,E,U,D)}}}_renderIconRange(e,i,t,n,a){const{context:o,spriteMosaic:s}=e;this._spritesTextureSize[0]=s.getWidth(n)/4,this._spritesTextureSize[1]=s.getHeight(n)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),s.bind(o,Y.LINEAR,n,k),o.setStencilTestEnabled(!0),o.setStencilFunction(W.GREATER,255,255),o.setStencilWriteMask(0),o.drawElements(N.TRIANGLES,t[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),a.triangleCount+=t[1]/3}_drawText(e,i,t,n){const{context:a,displayLevel:o,drawPhase:s,glyphMosaic:r,painter:l,pixelRatio:h,spriteMosaic:d,state:f,styleLayerUID:c,requestRender:g,allowDelayedRender:m}=e,_=i.textMaterial,p=l.vectorTilesMaterialManager;let v,P=!1;for(const V of t)if(V.layerData.has(c)&&(v=V.layerData.get(c),v.glyphPerPageElementsMap.size>0)){P=!0;break}if(!P)return;const I=i.getPaintProperty("text-opacity");if(I&&!I.isDataDriven&&I.getValue(o)===0)return;const y=i.getPaintProperty("text-color"),S=!y||y.isDataDriven||y.getValue(o)[3]>0,x=i.getPaintProperty("text-halo-width"),w=i.getPaintProperty("text-halo-color"),T=(!x||x.isDataDriven||x.getValue(o)>0)&&(!w||w.isDataDriven||w.getValue(o)[3]>0);if(!S&&!T)return;const M=24/8;let b=i.getLayoutValue("text-rotation-alignment",o);b===L.AUTO&&(b=i.getLayoutValue("symbol-placement",o)===re.POINT?L.VIEWPORT:L.MAP);const D=b===L.MAP,R=i.getLayoutValue("text-keep-upright",o)&&D,U=s===H.HITTEST,E=.8*M/h;this._glyphTextureSize||(this._glyphTextureSize=ht(r.width/4,r.height/4));const B=i.getPaintValue("text-translate",o),J=i.getPaintValue("text-translate-anchor",o),Z=this._sdfProgramOptions;Z.id=U;const C=p.getMaterialProgram(a,_,Z);if(m&&g!=null&&!C.compiled)return void g();a.useProgram(C),C.setUniformMatrix3fv("u_displayViewMat3",b===L.MAP?f.displayViewMat3:f.displayMat3),C.setUniformMatrix3fv("u_displayMat3",J===K.VIEWPORT?f.displayMat3:f.displayViewMat3),C.setUniform2fv("u_textTranslation",B),C.setUniform1f("u_depth",i.z+Bt),C.setUniform2fv("u_mosaicSize",this._glyphTextureSize),C.setUniform1f("u_mapRotation",ge(f.rotation)),C.setUniform1f("u_keepUpright",R?1:0),C.setUniform1f("u_level",10*o),C.setUniform1i("u_texture",pe),C.setUniform1f("u_antialiasingWidth",E),C.setUniform1f("u_fadeDuration",le/1e3),U&&C.setUniform4fv("u_id",n);let X=-1;for(const V of t){if(!V.layerData.has(c)||(V.key.level!==X&&(X=V.key.level,_.setDataUniforms(C,o,i,X,d)),v=V.layerData.get(c),v.glyphPerPageElementsMap.size===0))continue;v.prepareForRendering(a),v.updateOpacityInfo();const ce=v.textVAO;if(ce==null)continue;a.bindVAO(ce),C.setUniformMatrix3fv("u_dvsMat3",V.transforms.dvs),a.setStencilTestEnabled(!0),a.setStencilFunction(W.GREATER,255,255),a.setStencilWriteMask(0);const Ve=(performance.now()-v.lastOpacityUpdate)/1e3;C.setUniform1f("u_time",Ve),v.glyphPerPageElementsMap.forEach((Fe,qe)=>{this._renderGlyphRange(a,Fe,qe,r,C,T,S,V)})}}_renderGlyphRange(e,i,t,n,a,o,s,r){n.bind(e,Y.LINEAR,t,pe),o&&(a.setUniform1f("u_halo",1),e.drawElements(N.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),r.triangleCount+=i[1]/3),s&&(a.setUniform1f("u_halo",0),e.drawElements(N.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),r.triangleCount+=i[1]/3)}}const Kt={vtlBackground:qt,vtlFill:Wt,vtlLine:Gt,vtlCircle:Ht,vtlSymbol:Jt},Yt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};class jt{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let a=n.exec(t);const o=[];for(;a!=null;)o.push({path:a[1],start:a.index,length:a[0].length}),a=n.exec(t);let s=0,r="";return o.forEach(l=>{r+=t.slice(s,l.start),r+=i.has(l.path)?"":this._resolve(l.path,i),s=l.start+l.length}),r+=t.slice(s),i.set(e,r),r}_read(e){return this._readFile(e)}}function Xt(u){let e=Yt;return u.split("/").forEach(i=>{e&&(e=e[i])}),e}const Qt=new jt(Xt);function z(u){return Qt.resolveIncludes(u)}function Zt(u){const{options:e,value:i}=u;return typeof e[i]=="number"}function j(u){let e="";for(const i in u){const t=u[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(Zt(t)){const{value:n,options:a,namespace:o}=t,s=o?`${o}_`:"";for(const r in a)e+=`#define ${s}${r} ${a[r].toFixed()}
`;e+=`#define ${i} ${s}${n}
`}else{const n=t.options;let a=0;for(const o in n)e+=`#define ${n[o]} ${(a++).toFixed()}
`;e+=`#define ${i} ${n[t.value]}
`}}return e}const Se=u=>j({ID:u.id,PATTERN:u.pattern}),ei={shaders:u=>({vertexShader:Se(u)+z("background/background.vert"),fragmentShader:Se(u)+z("background/background.frag")})},Te=u=>j({ID:u.id}),ti={shaders:u=>({vertexShader:Te(u)+z("circle/circle.vert"),fragmentShader:Te(u)+z("circle/circle.frag")})},Pe=u=>j({ID:u.id,PATTERN:u.pattern}),ii={shaders:u=>({vertexShader:Pe(u)+z("fill/fill.vert"),fragmentShader:Pe(u)+z("fill/fill.frag")})},Ie=u=>j({ID:u.id}),ni={shaders:u=>({vertexShader:Ie(u)+z("outline/outline.vert"),fragmentShader:Ie(u)+z("outline/outline.frag")})},Me=u=>j({ID:u.id,SDF:u.sdf}),ai={shaders:u=>({vertexShader:Me(u)+z("icon/icon.vert"),fragmentShader:Me(u)+z("icon/icon.frag")})},Re=u=>j({ID:u.id,PATTERN:u.pattern,SDF:u.sdf}),oi={shaders:u=>({vertexShader:Re(u)+z("line/line.vert"),fragmentShader:Re(u)+z("line/line.frag")})},De=u=>j({ID:u.id}),si={shaders:u=>({vertexShader:De(u)+z("text/text.vert"),fragmentShader:De(u)+z("text/text.frag")})};class ri{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const n=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(n))return this._programByKey.get(n);const a=this._getProgramTemplate(i.type),{shaders:o}=a,{vertexShader:s,fragmentShader:r}=o(t),l=i.getShaderHeader(),h=i.getShaderMain(),d=s.replace("#pragma header",l).replace("#pragma main",h),f=e.programCache.acquire(d,r,i.getAttributeLocations());return this._programByKey.set(n,f),f}_getMaterialOptionsValue(e,i){switch(e){case A.BACKGROUND:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case A.FILL:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case A.OUTLINE:return i.id?1:0;case A.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1|(t.id?1:0)}case A.ICON:{const t=i;return(t.sdf?1:0)<<1|(t.id?1:0)}case A.CIRCLE:return i.id?1:0;case A.TEXT:return i.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case A.BACKGROUND:return ei;case A.CIRCLE:return ti;case A.FILL:return ii;case A.ICON:return ai;case A.LINE:return oi;case A.OUTLINE:return ni;case A.TEXT:return si;default:return null}}}const Ce=1e-6;class Ee{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache=new Map,this._vtlMaterialManager=new ri}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=$e(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,i,t,n){const{context:a}=e,o=t.layers;t.backgroundBucketIds.length>0&&(e.renderPass="background",t.backgroundBucketIds.forEach(s=>{const r=t.getLayerById(s);n!=null&&n!==r.type||this._renderStyleLayer(r,e,i,!0)})),a.setBlendingEnabled(!1),a.setDepthTestEnabled(!0),a.setDepthWriteEnabled(!0),a.setDepthFunction(W.LEQUAL),e.renderPass="opaque";for(let s=o.length-1;s>=0;s--){const r=o[s];n!=null&&n!==r.type||this._renderStyleLayer(r,e,i,!1)}a.setDepthWriteEnabled(!1),a.setBlendingEnabled(!0),a.setBlendFunctionSeparate(ae.ONE,ae.ONE_MINUS_SRC_ALPHA,ae.ONE,ae.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let s=0;s<o.length;s++){const r=o[s];n!=null&&n!==r.type||this._renderStyleLayer(r,e,i,!1)}a.setDepthTestEnabled(!1),a.bindVAO()}_renderStyleLayer(e,i,t,n){if(!(n||e&&t.layerData.has(e.uid)))return;const a=e.getLayoutProperty("visibility");if(a&&a.getValue()===Oe.NONE)return;const{renderPass:o}=i;let s;switch(e.type){case ee.BACKGROUND:if(o!=="background")return;s="vtlBackground";break;case ee.FILL:if(o!=="opaque"&&i.renderPass!=="translucent")return;s="vtlFill";break;case ee.LINE:if(o!=="translucent")return;s="vtlLine";break;case ee.CIRCLE:if(o!=="translucent")return;s="vtlCircle";break;case ee.SYMBOL:if(o!=="translucent")return;s="vtlSymbol"}const r=i.displayLevel;e.minzoom!==void 0&&e.minzoom>r+Ce||e.maxzoom!==void 0&&e.maxzoom<=r-Ce||(i.styleLayerUID=e.uid,i.styleLayer=e,this._drawWithBrush(i,t,s))}_drawWithBrush(e,i,t){if(!this._brushCache.has(t)){const n=Kt[t];this._brushCache.set(t,new n)}this._brushCache.get(t).drawMany(e,[i])}}let O=class extends Tt(St(Pt)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d",this.levelShift=_e("disable-feature:vtl-level-shift")?0:1,this.contentZoom=_e("disable-feature:vtl-level-shift")?1:1.5}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new dt("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:u,spatialReference:e,state:i,viewingMode:t}=this.view,n=t==="local"&&!ft(e)||_t.force512VTL,a=this.layer.tileInfo.spatialReference.isGeographic,o=n?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,a?1:2),s=this._getTileInfoSupportError(o,this.layer.fullExtent);if(s!=null)return this.addResolvingPromise(Promise.reject(s));const r=mt(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const _=u.tilingScheme,p=_.pixelSize,v=p===256?1:2,P=u.spatialReference?.isGeographic&&p===256?1:0,I=u.spatialReference?.isGeographic||p!==256?0:1;let y;if(this.schemaHelper=new It(v,P,this.levelShift+I),p===256){const x=this.layer.tileInfo.spatialReference.isGeographic;y=this.layer.tileInfo.getOrCreateCompatible(256,x?1:2)}else y=this.view.spatialReference?.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const S=this._getTileInfoCompatibilityError(y,_);if(S)throw S;this.tileInfo=y});this._tileHandlerController=new AbortController;const l=this.view.resourceController;this._memCache=l.memoryController.newCache(`vtl-${this.layer.uid}`,_=>{_.release()}),this.handles.add(pt(()=>this.view.qualitySettings.memoryLimit,_=>this._memCache.maxSize=Math.ceil(_/10*1048576),gt));const h=new ve(this.layer.currentStyleInfo.style);this._tileHandler=new we(this.layer,h,i.contentPixelRatio,this._memCache);const d=this._tileHandlerController.signal,f=li(l),c=this._tileHandler.start({signal:d,schedule:f}),g=this._tileHandler.spriteMosaic;g.then(_=>{!vt(d)&&this._tileHandler&&(this.painter=new Ee(_,this._tileHandler.glyphMosaic))}),c.then(()=>this._tileHandlerController=null),this.updatingHandles.add(()=>({style:this.layer.currentStyleInfo.style,pixelRatio:this.view.state?.contentPixelRatio}),({style:_,pixelRatio:p})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const v=new ve(_),P=new we(this.layer,v,p,this._memCache),I=P.start({signal:this._tileHandlerController.signal,schedule:f}),y=P.spriteMosaic;I.then(()=>this._tileHandlerController=null),this.updatingHandles.addPromise(Promise.all([I,y]).then(([,S])=>{const x=this._tileHandler,w=this.painter;this.painter=new Ee(S,P.glyphMosaic),this._tileHandler=P,this.emit("data-changed"),x.destroy(),w&&w.dispose()}))});const m=Promise.all([r,c,g]);this.addResolvingPromise(m)}destroy(){this.painter=$e(this.painter),this._tileHandlerController=ze(this._tileHandlerController),this._tileHandler=me(this._tileHandler),this._memCache=me(this._memCache)}get displayLevelRange(){const u=this.tileInfo.lods,e=this.layer.minScale||u[0].scale,i=this.layer.maxScale||u[u.length-1].scale,t=this.levelRangeFromScaleRange(e,i);return this.layer.maxScale?t.maxLevel++:t.maxLevel+=this.levelShift,t}get dataScaleRange(){const u=this.tileInfo.lods;return{minScale:u[0].scale,maxScale:u[u.length-1].scale}}get dataLevelRange(){const{minScale:u,maxScale:e}=this.dataScaleRange,i=this.levelRangeFromScaleRange(u,e);return i.minLevel===1&&this.tileInfo.size[0]===256&&(i.minLevel=0),i.maxLevel+=this.levelShift,i}async fetchTile(u,e,i,t){return this._tileHandler.getVectorTile(u,e,i,t)}};F([G()],O.prototype,"layer",void 0),F([G()],O.prototype,"levelShift",void 0),F([G()],O.prototype,"contentZoom",void 0),F([G()],O.prototype,"displayLevelRange",null),F([G()],O.prototype,"tileInfo",void 0),F([G()],O.prototype,"dataScaleRange",null),F([G()],O.prototype,"dataLevelRange",null),F([G()],O.prototype,"updatingProgressValue",void 0),O=F([yt("esri.views.3d.layers.VectorTileLayerView3D")],O);const Si=O;function li(u){return e=>u.immediate.schedule(e)}export{Si as default};