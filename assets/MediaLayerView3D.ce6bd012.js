import{a as s,d,n as f,y as x,t as o,gu as g,aZ as T,hD as z,v as G,r as h,w as M,x as O,bZ as S,K as b,az as C,gz as H,c4 as p,d2 as A,hE as I,ez as P,bX as L,bY as l,c8 as V,hf as u,c5 as $,c6 as D,hF as B}from"./vendor.fd144a9e.js";import{p as F}from"./normalizeUtilsSync.bf529b1a.js";import{n as N}from"./LayerView3D.30164421.js";import{m as U}from"./ImageMaterial.743804df.js";import{u as W}from"./LayerView.f49eec02.js";let i=class extends x{constructor(e){super(e)}get bounds(){const e=this.coords;return o(e)?null:g(e.extent)}get coords(){var t;const e=(t=T(this.element.georeference))==null?void 0:t.coords;return z(e,this.spatialReference).geometry}get normalizedCoords(){return G.fromJSON(F(this.coords))}get normalizedBounds(){return h(this.normalizedCoords)?g(this.normalizedCoords.extent):null}};s([d()],i.prototype,"spatialReference",void 0),s([d()],i.prototype,"element",void 0),s([d()],i.prototype,"bounds",null),s([d()],i.prototype,"coords",null),s([d()],i.prototype,"normalizedCoords",null),s([d()],i.prototype,"normalizedBounds",null),i=s([f("esri.layers.support.media.MediaElementView")],i);let m=class extends N(W){constructor(){super(...arguments),this.type="media-3d",this.drapeSourceType=M.RasterImage,this.updatePolicy=O.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=S(async(e,t,r)=>{const a=await this._collectMediaElements(e,t,r);this._synchronizeRenderElements(a)},0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add([b(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),C(()=>this.layer.source,"refresh",()=>this._updateWithLastDrapingExtent())]),this.updatingHandles.add(()=>this.suspended,()=>this._updateWithLastDrapingExtent())}setDrapingExtent(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}getHit(e){const t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(o(this._lastDrapingExtent)||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:e,spatialReference:t}=this._lastDrapingExtent;this.updatingHandles.addPromise(this._update(e,t).catch(()=>{}))}async _collectMediaElements(e,t,r){const a=this.layer.source;return o(a)?new Set:new Set((await Promise.all(e.map(n=>a.queryElements(H(n.extent,t),{signal:r})))).flat())}_synchronizeRenderElements(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}_synchronizeRenderElementsRemove(e){const t=new Set,r=[];this._renderedElements.forEach((a,n)=>{e.has(n)||(t.add(n),h(a.renderData)&&r.push(a.renderData.renderGeometry),this._removeElement(n,a))}),this._renderer.removeGeometries(r,p.Geometry.REMOVE)}_synchronizeRenderElementsAdd(e){for(const t of e)this._renderedElements.has(t)||this._createRenderElement(t)}_removeElement(e,{renderData:t,handle:r}){this._destroyRenderData(t),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),r.remove()}async _createRenderElement(e){const t=new i({spatialReference:this.view.spatialReference,element:e}),r={renderData:null,handle:A([this.updatingHandles.add(()=>e.opacity,a=>{h(r.renderData)&&r.renderData.material.setParameters({opacity:a})}),this.updatingHandles.add(()=>t.coords,a=>{h(r.renderData)?this._updateGeometry(r,r.renderData,a):this._initializeRenderData(t,r)}),this.updatingHandles.add(()=>e.content,()=>this._initializeRenderData(t,r)),I(t)])};this._renderedElements.set(e,r),this._uidToElement.set(e.uid,e),this.updatingHandles.addPromise(e.load().catch(()=>{})),this._initializeRenderData(t,r)}_initializeRenderData(e,t){const{coords:r,element:a}=e;if(o(r)||o(a.content))return void(t.renderData=this._destroyRenderData(t.renderData));if(h(t.renderData))return;const n=this._createTexture(a.content);this.view._stage.add(n);const c=this.view._stage.loadImmediate(n);P(c)&&this.updatingHandles.addPromise(c);const y=new U({initTextureTransparent:!0,textureId:n.id,opacity:a.opacity,transparent:!0}),v=this._positionVertexBufferFromCoordinates(r),w=[0,0,1,0,1,1,0,1],_=new Uint16Array([0,1,2,0,2,3]),R=new L([[l.POSITION,{data:v,size:3,exclusive:!0}],[l.UV0,{data:w,size:2,exclusive:!0}]],[[l.POSITION,_],[l.UV0,_]]),E=new V(R,y,{layerUid:this.layer.uid,graphicUid:a.uid});this._renderer.addGeometries([E],p.Geometry.ADD),t.renderData={renderGeometry:E,texture:n,material:y}}_updateGeometry(e,t,r){if(o(r))return void(e.renderData=this._destroyRenderData(e.renderData));const a=this._positionVertexBufferFromCoordinates(r);t.renderGeometry.vertexAttributes.get(l.POSITION).data=a,this._renderer.modifyGeometries([t.renderGeometry],p.State.VERTEXATTRS)}_positionVertexBufferFromCoordinates(e){const[t,r,a,n]=e.rings[0];return new Float64Array([t[0],t[1],u,n[0],n[1],u,a[0],a[1],u,r[0],r[1],u])}_destroyRenderData(e){return o(e)||(this.view._stage.remove(e.texture),this._renderer.removeGeometries([e.renderGeometry],p.Geometry.REMOVE),e.material.dispose()),null}_createTexture(e){const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,r=e instanceof HTMLImageElement?e.naturalHeight:e.height;return new $(e,{wrap:{s:D.CLAMP_TO_EDGE,t:D.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:t,height:r,mipmap:!0,powerOfTwoResizeMode:B.STRETCH,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const e=this;return{get numberOfElements(){return e._renderedElements.size}}}};s([d({readOnly:!0})],m.prototype,"type",void 0),s([d()],m.prototype,"layer",void 0),m=s([f("esri.views.3d.layers.MediaLayerView3D")],m);const q=m;export{q as default};