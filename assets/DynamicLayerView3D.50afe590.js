import{f3 as S,f4 as E,f5 as q,f6 as F,f7 as k,f8 as W,f9 as B,fa as p,fb as $,n as Y,C as Z,dj as J,p as b,au as x,B as K,fc as Q,bh as D,aT as X,Y as G,fd as ee,fe as te,ff as N,fg as ae,fh as ie,fi as H,bn as O,fj as C,fk as se,fl as j,ak as re,fm as R,al as z,fn as ne,fo as oe,fp as le,aZ as he,e as _,y as v,a as de}from"./index.da161cf1.js";import{n as ce}from"./LayerView3D.a0f4cfd4.js";import{l as ge}from"./projectExtentUtils.4a1e869d.js";import{c as ue}from"./ImageMaterial.1905961e.js";import{d as me}from"./LayerView.948860d4.js";import{a as fe}from"./RefreshableLayerView.93fee593.js";function pe(a,e,t){const s=S(a)/E(a),i={width:t,height:t};return s>1.0001?i.height=t/s:s<.9999&&(i.width=t*s),i.width=Math.round(i.width/(S(a)/S(e))),i.height=Math.round(i.height/(E(a)/E(e))),i}function U(a,e){return q(a,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function ye(a,e,t){if(!F(e,t))return U(a,t);const s=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],i=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],l=t[2]-t[0],n=t[3]-t[1],r=i[0]>0&&i[2]>0?3:2,o=s[0]>0&&s[2]>0?3:2,h=(o+1)*(r+1),c=k(3*h),g=W(2*h),d=new Array(6*(o*r-1));let I=0,A=0,L=0,u=0,f=0;for(let y=0;y<4;y++){const T=s[y];if(T<=0)continue;let M=0;for(let w=0;w<4;w++){const P=i[w];P<=0||(c[A++]=t[0]+M,c[A++]=t[1]+I,c[A++]=-1,g[L++]=M/l,g[L++]=I/n,w<3&&y<3&&(w!==1||y!==1)&&(d[f++]=u,d[f++]=u+1,d[f++]=u+r+1,d[f++]=u+1,d[f++]=u+r+2,d[f++]=u+r+1),u++,M+=P)}I+=T}const V=new Array(d.length);return new B(a,[[p.POSITION,new $(c,3,!0)],[p.NORMAL,new $(we,3,!0)],[p.UV0,new $(g,2,!0)]],[[p.POSITION,d],[p.NORMAL,V],[p.UV0,d]])}const we=[0,0,1];let m=class extends fe(ce(me)){constructor(){super(...arguments),this.drapeSourceType=Y.RasterImage,this.updatePolicy=Z.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=J(async a=>{this.destroyed||await this._doRefresh(a).catch(e=>{b(e)||x.getLogger(this).error(e)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add(K(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ge(this).then(a=>this._set("fullExtentInLocalViewSpatialReference",a))),this.updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this.updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(a,e){this._spatialReference=e,a.forEach(t=>{this._overlays[t.index]=t,this._updateImageExtent(t)})}_updateImageExtent(a){const e=this._clippedExtent(a.extent,_e);if(e==null)return;const t=pe(a.extent,e,a.resolution);let s=a.pixelRatio*this.view.state.pixelRatio;const{layer:i}=this;if("imageMaxWidth"in i&&i.imageMaxWidth!=null||"imageMaxHeight"in i&&i.imageMaxHeight!=null){const n=i.imageMaxWidth,r=i.imageMaxHeight;if(t.width>n){const o=n/t.width;t.height=Math.floor(t.height*o),t.width=n,s*=o}if(t.height>r){const o=r/t.height;t.width=Math.floor(t.width*o),t.height=r,s*=o}}const l=this._extents[a.index];l&&Q(l.extent,e)&&this._imageSizeEquals(e,l.imageSize,t)||(this._extents[a.index]={extent:D(e),imageSize:t,pixelRatio:s},this.suspended||this._fetch(a.index).catch(n=>{b(n)||x.getLogger(this).error(n)}))}clear(){for(let a=0;a<this._images.length;a++)this._clearImage(a)}async doRefresh(){return this._doRefresh()}async _doRefresh(a){if(this.suspended)return;const e=[];for(let t=0;t<this._extents.length;t++)this._extents[t]&&e.push(this._fetch(t,a));await X(e)}canResume(){if(!super.canResume())return!1;const a=this.layer;if(this._isScaleRangeActive()){const{minScale:e,maxScale:t}=a.effectiveScaleRange,s=this.view.scale;if(s<t||e>0&&s>e)return!1}return!0}isUpdating(){return this._images.some(a=>!!a.loadingPromise)}async processResult(a,e,t){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(a.image=e)}findExtentInfoAt(a){for(const e of this._extents){const t=e.extent;if(new G(t[0],t[1],t[2],t[3],this._spatialReference).contains(a))return e}return null}getFetchOptions(){}async redraw(a,e){await ee(this._images,async(t,s)=>{t&&(await a(t,e),await this._createStageObjects(s,t.image,e))})}_imageSizeEquals(a,e,t){if(!this.maximumDataResolution)return!1;const s=S(a)/this.maximumDataResolution.x,i=E(a)/this.maximumDataResolution.y,l=s/e.width,n=i/e.height,r=s/t.width,o=i/t.height,h=Math.abs(l-r),c=Math.abs(n-o),g=te.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return h<=g&&c<=g}async _fetch(a,e){if(this.suspended)return;const t=this._extents[a],s=t.extent;this._images[a]||(this._images[a]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:D(s)});const i=this._images[a];i.loadingAbortController=N(i.loadingAbortController);const l=new G(s[0],s[1],s[2],s[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(a);const n=new AbortController;i.loadingAbortController=n,ae(e,()=>n.abort());const r=n.signal,o=this._waitFetchReady(r).then(async()=>{const h={requestAsImageElement:!0,pixelRatio:this._overlays[a].pixelRatio,...this.getFetchOptions(),signal:r},{height:c,width:g}=t.imageSize;return this.layer.fetchImage(l,g,c,h)}).then(h=>{if(ie(r))throw x.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),H();return this.processResult(i,h)}).then(()=>{O(i.renderExtent,s)}).finally(()=>{o===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)});i.loadingPromise=o,this.notifyChange("updating"),await o.then(async()=>{if(r.aborted)throw H();await this._createStageObjects(a,i.image,r),this.notifyChange("updating")}).catch(h=>{throw h&&!b(h)&&x.getLogger(this).error(h),this.notifyChange("updating"),h})}_clearImage(a){const e=this._images[a];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],C.UPDATE),e.renderGeometry=null);const t=this.view._stage;t.remove(e.texture),e.texture=null,t.remove(e.material),e.material=null,e.loadingAbortController=N(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(a,e,t){const s=this.view._stage,i=this._images[a],l=()=>{s.remove(i.texture),i.texture=null,i.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],C.UPDATE),i.renderGeometry=null)};if(e){const n=new se(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:j.CLAMP_TO_EDGE,t:j.CLAMP_TO_EDGE}});let r;if(await re(this._images[a===R.INNER?R.OUTER:R.INNER].loadingPromise),z(t),l(),s.add(n),await s.loadImmediate(n),i.texture=n,i.material==null?(i.material=new ue({transparent:!0,textureId:n.id}),s.add(i.material)):i.material.setParameters({textureId:n.id}),a===R.INNER)r=U(i.material,i.renderExtent);else{const o=this._images[0].renderExtent;if(!o)return void l();r=ye(i.material,o,i.renderExtent)}i.renderGeometry=new ne(r),i.renderGeometry.localOrigin=this._overlays[a].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],C.UPDATE)}else l(),s.remove(i.material),i.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const a=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:e,maxScale:t}=a.effectiveScaleRange;return oe(e,t)}_clippedExtent(a,e){if(this.view.viewingMode!=="local")return O(e,a);const t=this.view.basemapTerrain;return t.ready?le(a,t.extent,e):O(e,a)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(a){await he(()=>this.view.stationary,a),z(a)}};_([v()],m.prototype,"layer",void 0),_([v()],m.prototype,"suspended",void 0),_([v({readOnly:!0})],m.prototype,"fullExtentInLocalViewSpatialReference",void 0),_([v()],m.prototype,"updating",void 0),m=_([de("esri.views.3d.layers.DynamicLayerView3D")],m);const Ae=m,_e=D();export{Ae as z};
