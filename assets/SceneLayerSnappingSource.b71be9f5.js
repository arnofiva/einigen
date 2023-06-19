import{e as i,y as s,a as y,k as _,gU as f,gO as m,aA as S,aR as k,ff as C,uD as b,kN as g,dm as L,fh as H,m as E,al as O,a6 as I}from"./index.da161cf1.js";import{r as R,l as V}from"./DimensionAnalysisView3D.6fd62f7c.js";import{r as $}from"./VertexSnappingCandidate.9b872bd0.js";import"./LineVisualElement.0ee7ffd4.js";import"./LengthDimension.4b10a477.js";import"./Segment.b33fc9b3.js";import"./unitFormatUtils.42a6eb3a.js";import"./elevationInfoUtils.d710f6c5.js";import"./analysisViewUtils.8aae6db1.js";import"./ImageMaterial.1905961e.js";import"./Factory.312f3b3e.js";import"./RightAngleQuadVisualElement.408eff27.js";import"./VisualElementResources.f6c3d94a.js";import"./PointVisualElement.eb5b4fbb.js";import"./EditGeometryOperations.3139b272.js";import"./dehydratedFeatureComparison.d41240fc.js";let d=class extends _{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new x(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:o}=e,n=P;this.renderCoordsHelper.toRenderCoords(o,r.spatialReference,n);const p=e.distance,c=typeof p=="number"?p:p.distance,h=await this._workerHandle.invoke({bounds:f(n[0],n[1],n[2],c),returnEdge:e.returnEdge,returnVertex:e.returnVertex},t);return h.candidates.sort((u,v)=>u.distance-v.distance),h.candidates.map(u=>this._convertCandidate(r,u))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new R({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new $({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=S();return this.renderCoordsHelper.fromRenderCoords(t,r,e),V(r)}async _fetchAllEdgeLocations(e,t){const r=[],o=[];for(const{id:n,uid:p}of e.components)this._ids.has(n)&&r.push((async()=>{const c=await this.fetchEdgeLocations(n,t.signal),h=c.locations.buffer;return o.push(h),{id:n,uid:p,objectIds:c.objectIds,locations:h,origin:c.origin,type:c.type}})());return{result:{components:(await Promise.all(r)).filter(({id:n})=>this._ids.has(n))},transferList:o}}};i([s({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),i([s({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),i([s({constructOnly:!0})],d.prototype,"schedule",void 0),i([s({readOnly:!0})],d.prototype,"availability",void 0),d=i([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],d);class x extends m{constructor(t,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:r})}}const P=S();let a=class extends _{get updating(){return this.updatingHandles.updating}constructor(e){super(e),this.availability=1,this._abortController=new AbortController}destroy(){this._tracker=k(this._tracker),this._abortController=C(this._abortController)}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new b(w(t)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:w(t),fetchEdgeLocations:async(r,o)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(r,this._edgeWorker,o)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([g(this._workerHandle),g(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const e=L(this._abortController,r=>r.signal),t=await this.getLayerView();t==null||H(e)||(this._tracker=t.trackSnappingSources({add:(r,o)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:r,bounds:o},e))},remove:r=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:r},e))}}))}};function w(e){return t=>e.immediate.schedule(t)}i([s({constructOnly:!0})],a.prototype,"getLayerView",void 0),i([s({constructOnly:!0})],a.prototype,"view",void 0),i([s({readOnly:!0})],a.prototype,"updating",null),i([s({readOnly:!0})],a.prototype,"availability",void 0),a=i([y("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],a);let l=class extends E{get updating(){return this._i3sSources.some(e=>e.updating)}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources=t.type==="building-scene"?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map(o=>o.fetchCandidates(e,t)));return O(t),r.flat()}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>r.type==="building-component"?new a({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null).filter(I)}_getSceneLayerI3SSource(e,t){return new a({getLayerView:async()=>{const r=await e.whenLayerView(t);return r.type==="scene-layer-graphics-3d"?void 0:r},view:e})}};i([s({constructOnly:!0})],l.prototype,"layerSource",void 0),i([s({constructOnly:!0})],l.prototype,"view",void 0),i([s({readOnly:!0})],l.prototype,"updating",null),i([s({readOnly:!0})],l.prototype,"availability",void 0),l=i([y("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],l);export{l as SceneLayerSnappingSource};