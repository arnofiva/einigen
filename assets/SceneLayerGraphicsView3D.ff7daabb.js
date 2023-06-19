import{gO as $,ad as j,aU as q,l as y,h as w,q as H,cd as U,fe as N,C as z,eO as Q,w as T,au as E,bk as C,gn as k,a$ as B,f7 as D,hm as W,a_ as Z,ly as K,lz as Y,b as F,gN as J,iq as X,ls as ee,dz as te,gh as re,aQ as ie,e as p,y as g,eV as se,a as oe,aA as ae,fb as ne}from"./index.da161cf1.js";import{D as G,b as le}from"./I3SOverrides.43bac39f.js";import{d as de}from"./FeatureFilter.97dd33dd.js";import{b as A}from"./Query.e586665e.js";import{n as he}from"./LayerView3D.a0f4cfd4.js";import{_ as ue,c as ce}from"./FeatureLikeLayerView3D.2804d5c7.js";import{p as pe,r as ge,l as me,i as _e,j as fe}from"./SceneLayerView.6afab672.js";import{y as ye,g as be,Z as ve,n as xe,f as L}from"./I3SUtil.1e24f8d3.js";import{t as Ee}from"./DefinitionExpressionSceneLayerView.017e13a9.js";import{i as Ie}from"./PopupSceneLayerView.fa35fe28.js";import{t as we}from"./popupUtils.5174221c.js";import"./I3SNode.8380a4f6.js";import"./I3SBinaryReader.f09861ac.js";import"./meshFeatureSet.54057ed0.js";import"./MeshGeoreferencedRelativeVertexSpace.a44e5587.js";import"./MeshLocalVertexSpace.33b046fb.js";import"./georeference.20930ae2.js";import"./External.3b5c14d5.js";import"./FeatureSet.97dc0f24.js";import"./FeatureLayerView3D.69570ebc.js";import"./FeatureLayerViewBase3D.d9ff8f8b.js";import"./query.22cd43bf.js";import"./normalizeUtils.54c24a4d.js";import"./normalizeUtilsCommon.87227ae2.js";import"./pbfQueryUtils.c4418ce7.js";import"./pbf.82c57b62.js";import"./queryZScale.2643e684.js";import"./EventedSet.2b4d6c27.js";import"./FeatureEffect.ee83c7e0.js";import"./jsonUtils.1c231e28.js";import"./floorFilterUtils.2fa4f3da.js";import"./LayerView.948860d4.js";import"./RefreshableLayerView.93fee593.js";import"./dehydratedFeatureComparison.d41240fc.js";import"./queryForSymbologySnapping.b7a5beb4.js";import"./elevationInfoUtils.d710f6c5.js";import"./hash.25af2a28.js";import"./diffUtils.f0876598.js";import"./UniqueValueRenderer.0143139a.js";import"./ColorStop.f762bde8.js";import"./colorRamps.80cb140e.js";import"./Graphics3DObjectStates.1983c1d0.js";import"./jsonUtils.4745b876.js";import"./DictionaryLoader.90c8c47c.js";import"./FieldsIndex.09813895.js";import"./heatmapUtils.32e9a30b.js";import"./defaults.83793da7.js";import"./defaultsJSON.a416f32c.js";import"./optimizedFeatureQueryEngineAdapter.b17e3ee2.js";import"./centroid.66ea1f85.js";import"./PooledRBush.b9188fbe.js";import"./quickselect.b8e0afc3.js";import"./QueryEngine.f42b4b13.js";import"./WhereClause.c0b1e923.js";import"./executionError.10e29c03.js";import"./json.7bed7e43.js";import"./QueryEngineCapabilities.a6a6a20b.js";import"./utils.8873e24e.js";import"./generateRendererUtils.e8dfecdf.js";import"./FeatureStore.e774d369.js";import"./BoundsStore.13c0920f.js";import"./projectExtentUtils.4a1e869d.js";class S extends ${constructor(e){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:r=>[r.geometryBuffer]},e,{hasInitialize:!0})}}class Ne extends j{constructor(e,r){super(),this._updateAndCompare=e,this._notifyUpdated=r,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const e=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:e})}this._nodes.clear()}get length(){return this._graphics.size}get(e){return this._graphics.get(e)}getNode(e){return this._nodes.get(e)}hasNode(e){return this._nodes.has(e)}nodes(){return this._nodes.values()}addNode(e,r){this._nodes.set(e,r);const i=r.graphics;if(i.length===0)return;const s=new Set;for(let a=0;a<i.length;a++){const n=i[a],l=n.objectId,u=this._graphics.get(l);if(u){s.add(l),n!==u&&(i[a]=u);const h=this._duplicates.get(l);h?h.push(e):this._duplicates.set(l,[u.nodeIndex,e])}else n.nodeIndex=e,this._graphics.set(l,n)}s.size&&this._updateForeignGraphics(r);const o=s.size>0?i.filter(a=>!s.has(a.objectId)):i;o.length>0&&this.emit("change",{added:o,removed:[]})}removeNode(e){const r=this._nodes.get(e);if(!r)return void console.error("Removing unknown node");this._nodes.delete(e);const i=new Set,s=[];for(const o of r.graphics){const a=o.objectId,n=this._graphics.get(a);if(!n)continue;const l=this._duplicates.get(a);if(l){const u=l.indexOf(e);if(u===-1){console.error("error: removing graphic from node that should not reference it.");continue}if(l.splice(u,1),n.nodeIndex===e){let h=this.getNode(l[0]);for(let d=1;d<l.length;d++){const f=this.getNode(l[d]);(h==null||f!=null&&f.node.level>h.node.level)&&(h=f)}h!=null&&i.add(h)}l.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),s.push(o)}s.length>0&&this.emit("change",{added:[],removed:s}),i.forEach(o=>this._updateForeignGraphics(o))}_updateForeignGraphics(e){const r=[],i=e.node.index,s=e.node.level;let o=0;for(;o<e.graphics.length;){const a=e.graphics[o].nodeIndex;if(a===i){o++;continue}let n=1;for(;o+n<e.graphics.length&&e.graphics[o+n].nodeIndex===a;)n++;const l=this.getNode(a);if(l!=null&&l.node.level>s)o+=n;else{for(let u=o;u<o+n;u++){const h=e.graphics[u];h.nodeIndex=i,this._updateAndCompare(h,e,u)&&r.push(h)}o+=n}}this._notifyUpdated(r)}toArray(){return Array.from(this._graphics.values())}find(e){let r;return q(this._graphics,i=>!!e(i)&&(r=i,!0)),r}forEach(e){this._graphics.forEach(r=>e(r))}forEachNode(e){this._nodes.forEach((r,i)=>e(r,i))}get nodeCount(){return this._nodes.size}_checkInvariants(){const e=new Map;this._nodes.forEach((i,s)=>{s!==i.node.index&&console.error("Mismatched node index"),i.graphics.forEach(o=>{e.set(o.objectId,1+(e.get(o.objectId)??0));const a=this._duplicates.get(o.objectId);a&&!a.includes(s)&&console.error("Node not listed in duplicate list"),a||o.nodeIndex===s||console.error("Unique graphic does not reference owning node index")})}),this._graphics.size!==e.size&&console.error("Mismatch between actual and expected number of graphics");let r=0;e.forEach((i,s)=>{r+=i>1?1:0;const o=this._graphics.get(s);if(!o)return void console.error("Missing graphic entry");const a=this._nodes.get(o.nodeIndex);if(!a)return void console.error("Graphic references unkown node");const n=this._duplicates.get(s);n?(n.length!==i&&console.error("Wrong number of entries in duplicate list"),n.forEach(l=>{const u=this._nodes.get(l);u?u.node.level>a.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")})):i>1&&console.error("Missing duplicates entry")}),this._duplicates.size!==r&&console.error("Mismatch between expected and actual number of duplicate entries")}}const M=_e();class Oe{constructor(e,r,i,s){this.graphics=e,this.featureIds=r,this.attributeInfo=i,this.node=s}}let c=class extends Ee(Ie(he(fe))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new Ne((t,e,r)=>De(t,e,r),t=>this.processor.graphicsCore.recreateGraphics(t)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(t,e){return t.url===this.layer.url&&this._i3sOverrides.isEmpty?t.load(e).then(()=>{ye(this.layer,t,this._i3sOverrides),this.layer=t,this._i3sOverrides.destroy();const r=this.view.resourceController?.memoryController;this._i3sOverrides=new G({view:this.view,layer:t,memoryController:r}),y(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){this.addResolvingPromise(this.layer.indexInfo);const t=this.view.resourceController?.memoryController;this._i3sOverrides=new G({view:this.view,layer:this.layer,memoryController:t}),be(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new pe({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,e=>this._rangeInfosChanged(e),w),this.updatingHandles.add(()=>this.layer.renderer,(e,r)=>this._rendererChange(e,r)),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.handles.add(H(()=>N.I3S_TREE_SHOW_TILES,e=>{if(e&&!this._treeDebugger){const r=this._controller.crsIndex;U(()=>import("./I3STreeDebugger.7b2ff1b7.js"),["assets/I3STreeDebugger.7b2ff1b7.js","assets/index.da161cf1.js","assets/index.8db76e31.css","assets/TileTreeDebugger.f46f3b0e.js"]).then(({I3STreeDebugger:i})=>{!this._treeDebugger&&N.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new i({lv:this,view:this.view,nodeSR:r}))})}else e||!this._treeDebugger||N.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},w)),this._set("processor",new ue({owner:this,preferredUpdatePolicy:z.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:e=>this._updateClippingExtent(e)})),this.processor.elevationAlignment?.events.on("invalidate-elevation",e=>this._controller.updateElevationChanged(e.extent,e.spatialReference)),this.supportsHeightUnitConversion&&(this._verticalScale=Q("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(`psl-${this.uid}`),this._controller=new le({layerView:this,scaleVisibilityEnabled:!1}),ve(this.layer.geometryDefinitions)&&(this._worker=new S(e=>this.view.resourceController.immediate.schedule(e))),this.handles.add(this.layer.on("apply-edits",e=>this.updatingHandles.addPromise(e.result))),this.handles.add(this.layer.on("edits",e=>this._handleEdits(e))),this.when(()=>{this._setupQueryEngine(),this.updatingHandles.add(()=>this.maximumNumberOfFeatures,e=>this._controller.featureTarget=e,w),this.updatingHandles.add(()=>this.suspended,e=>{e&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._i3sOverrides=y(this._i3sOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=y(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){return this._controller?.updatingProgress??1}get requiredFields(){return this._fieldsHelper?.requiredFields??[]}get maximumNumberOfFeatures(){return this.processor?.graphicsCore?.displayFeatureLimit?.maximumNumberOfFeatures??0}set maximumNumberOfFeatures(t){t!=null?(this._override("maximumNumberOfFeatures",t),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){return!this.suspended&&!!this._controller?.useMaximumNumberOfFeatures&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const t=this.layer.excludeObjectIds;return t.length?t.toArray().sort((e,r)=>e-r):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){return!this.suspended&&!!this._controller?.rootNodeVisible}get legendEnabled(){return this.contentVisible&&this.i3slayer?.legendEnabled===!0}async whenGraphicAttributes(t,e){return xe(this.layer,t,this._getObjectIdField(),e,()=>[...this.loadedGraphics.nodes()])}getHit(t){if(!this.loadedGraphics)return null;const e=T(this.loadedGraphics.find(i=>i.uid===t),this.layer),r=this._getObjectIdField();return e&&e.attributes&&e.attributes[r]?(e.layer=this.layer,e.sourceLayer=this.layer,{type:"graphic",graphic:e,layer:e.layer}):null}whenGraphicBounds(t,e){return this.processor.whenGraphicBounds(t,e)}computeAttachmentOrigin(t,e){return this.processor.computeAttachmentOrigin(t,e)}isUpdating(){return!!(this._controller?.updating||this.processor?.updating||this._fieldsHelper?.updating||this.layerFilterUpdating)}highlight(t){return this.processor.highlight(t,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(t){return ge(this._attributeEditingContext,t)}async _decompressBinaryPointData(t,e){const r={geometryBuffer:t.geometryBuffer};this._worker==null&&(this._worker=new S(s=>this.view.resourceController.immediate.schedule(s)));const i=await this._worker.invoke(r,e);if(i==null)throw new Error("Failed to decompress Draco point data");return{positionData:i.positions,featureIds:i.featureIds}}async addNode(t,e,r){if(!O(e)&&!Ce(e))throw new Error;if(this.loadedGraphics.hasNode(t.index))return void E.getLogger(this).error("I3S node "+t.id+" already added");const i=this.layer.fullExtent!=null?Fe(this.layer.fullExtent.clone(),.5):null,s=[],{featureIds:o,pointPositions:a}=O(e)?await this._extractBinaryPointPositions(t,e,r):this._extractLegacyPointPositions(e);this._validatePositions(t,o,a,i,s);const n=this._controller.crsVertex,l=this.view.spatialReference;C(a,n,0,a,l,0,o.length);const u=O(e)?t.level:0,h=this._createGraphics(o,a,t.index,u),d=new Oe(h,o,e.attributeDataInfo,t);if(await this._i3sOverrides.applyAttributeOverrides(d.featureIds,e.attributeDataInfo,r),t.numFeatures=d.graphics.length,this._updateNodeMemory(t),P(d),s.length>0&&(this._computeObb(t,s,n),this._controller.updateVisibility(t.index)),!this._controller.isGeometryVisible(t))return void this._cacheNodeData(d);if(this._verticalScale!=null)for(const m of d.graphics)this._verticalScale(m.geometry);const f=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(f!=null)for(let m=0;m<d.featureIds.length;m++){const v=d.featureIds[m];f.setUidToObjectAndLayerId(v,d.graphics[m].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&we(this.layer,this.view.popup?.defaultPopupTemplateEnabled),d.node.resources.attributes,m)}this.loadedGraphics.addNode(t.index,d),this._controller.updateLoadStatus(t.index,!0),this._filterNode(d),this._treeDebugger&&this._treeDebugger.update()}_computeObb(t,e,r){const i=this._controller.crsIndex,s=i.isGeographic?this.view.renderSpatialReference:i;C(e,r,0,e,s,0,e.length/3),t.serviceObb=k(new ne(e,3)),i.isGeographic&&B(t.serviceObb.center,s,t.serviceObb.center,i)}isNodeLoaded(t){return this.loadedGraphics.hasNode(t)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(t,e,r){const i=await this._decompressBinaryPointData(e,r),s=i.positionData,o=3,a=s.length/o,n=D(3*a),l=t.serviceObb!=null?t.serviceObb.center:[0,0,0],u=Math.abs(l[2])*2**-20;for(let h=0;h<a;h++){const d=h*o;n[d]=s[d]+l[0],n[d+1]=s[d+1]+l[1],n[d+2]=s[d+2]+l[2],Math.abs(n[d+2])<u&&(n[d+2]=0)}return{featureIds:i.featureIds?W(i.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(t){const e=t.pointData.length,r=D(3*e),i=new Array;for(let s=0;s<e;s++){const o=t.pointData[s],a=o.featureDataPosition,n=a.length,l=o.geometries?.[0]??Ge[n],u=o.featureIds[0];if(l.type!=="Embedded"||l.params.type!=="points"||n<2||n>3)continue;const h=l.params.vertexAttributes?.position??[0,0,0],d=3*i.length;r[d]=a[0]+h[0],r[d+1]=a[1]+h[1],r[d+2]=n===3?a[2]+h[2]:NaN,i.push(u)}return{featureIds:i,pointPositions:r}}_validatePositions(t,e,r,i,s){if(i==null&&t.serviceObb)return;const o=e.length,a=3;for(let n=0;n<o;n++){const l=n*a;Z(x,r[l],r[l+1],r[l+2]);const u=!Number.isNaN(r[2]);i==null||(u?K(i,x):Y(i,x))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&E.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),t.serviceObb||s.push(x[0],x[1],x[2])}}_createGraphics(t,e,r,i){const s=t.length,o=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,l=new Array,u=this.view.spatialReference;for(let h=0;h<s;h++){const d=t[h],f={};d!=null&&(f[a]=d);const m=d??F.generateUID(),v=h*o,V=isNaN(e[v+2])?void 0:e[v+2],I=J(e[v],e[v+1],V,u),b=this.loadedGraphics.get(m);if(b!=null)(b.level==null||b.level<i)&&(_.property="geometry",_.graphic=b,_.oldValue=b.geometry,_.newValue=I,b.geometry=I,b.level=i,n.graphicUpdateHandler(_)),l.push(b);else{const R=F.generateUID();l.push({objectId:m,uid:R,geometry:I,attributes:f,visible:!0,nodeIndex:r,level:i})}}return l}_updateNodeMemory(t){t.memory=4096+(t.numFeatures!=null?t.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(t){const e=t.graphics.reduce((r,i)=>X(i)+r,ee(t.featureIds)+1024);this._memCache.put(this._getMemCacheKey(t.node),t,e)}_getMemCacheKey(t){return`${t.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((t,e)=>{if(t){const r=t.node;this._updateNodeMemory(r),this._cacheNodeData(t)}this._controller.updateLoadStatus(e,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(t){const e=this._removeNodeStageData(t);e&&(this._updateNodeMemory(e.node),this._cacheNodeData(e))}_removeNodeStageData(t){const e=this.loadedGraphics.getNode(t);return e==null?null:(this._controller.updateLoadStatus(t,!1),this.loadedGraphics.removeNode(t),this._treeDebugger&&this._treeDebugger.update(),e)}async loadCachedNodeData(t){return this._memCache?.pop(this._getMemCacheKey(t))}async addCachedNodeData(t,e,r,i){this.loadedGraphics.hasNode(t.index)?E.getLogger(this).error("I3S node "+t.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(e.featureIds,r,i),this.loadedGraphics.addNode(t.index,e),this._controller.updateLoadStatus(t.index,!0),this._updateNodeMemory(t),e.attributeInfo=r,this._attributeValuesChanged(e),this._filterNode(e),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const t=[];return this.loadedGraphics.forEachNode(e=>t.push(e.node.id)),t.sort()}getVisibleNodes(){const t=new Array;return this.loadedGraphics.forEachNode(e=>t.push(e.node)),t}getLoadedNodeIndices(t){this.loadedGraphics.forEachNode((e,r)=>t.push(r))}getLoadedAttributes(t){const e=this.loadedGraphics.getNode(t);if(e!=null&&e.attributeInfo!=null)return e.attributeInfo.loadedAttributes}getAttributeData(t){const e=this.loadedGraphics.getNode(t);if(e!=null&&e.attributeInfo!=null)return e.attributeInfo.attributeData}_setAttributeData(t,e){const r=this.loadedGraphics.getNode(t);r!=null&&r.attributeInfo!=null&&(r.attributeInfo.attributeData=e,this._attributeValuesChanged(r))}async updateAttributes(t,e,r){const i=this.loadedGraphics.getNode(t);i!=null&&(await this._i3sOverrides.applyAttributeOverrides(i.featureIds,e,r),i.attributeInfo=e,this._attributeValuesChanged(i))}_attributeValuesChanged(t){if(P(t),this._filterNode(t),this.processor.graphicsCore.labelsEnabled){const e=t.graphics.map(r=>r.uid);this.processor.graphicsCore.updateLabelingInfo(e)}}_updateClippingExtent(t){return this._controller&&this._controller.updateClippingArea(t),!1}_getObjectIdField(){return this.layer.objectIdField||te}_getGlobalIdField(){return this.layer.associatedLayer?.globalIdField}async _rendererChange(t,e){const{layer:{fieldsIndex:r}}=this,i=new Set;let s,o;t?(await t.collectRequiredFields(i,r),s=Array.from(i).sort()):s=[],i.clear(),e?(await e.collectRequiredFields(i,r),o=Array.from(i).sort()):o=[],s.length===o.length&&s.every((a,n)=>s[n]===o[n])||this._reloadAllNodes()}_rangeInfosChanged(t){t!=null&&t.length>0&&E.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(t=>this._filterNode(t))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(t){const e=this.parsedDefinitionExpression,r=this._excludeObjectIdsSorted,i=this._getObjectIdField();for(const s of t.graphics){const o=s.visible,a=!e||this._evaluateClause(e,s),n=r==null||re(r,s.attributes[i])<0;s.visible=a&&n,o!==s.visible&&(_.graphic=s,_.property="visible",_.oldValue=o,_.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(_))}}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(t):new A(t)}queryFeatures(t,e){return this._queryEngine.executeQuery(this._ensureQuery(t),e?.signal)}queryObjectIds(t,e){return this._queryEngine.executeQueryForIds(this._ensureQuery(t),e?.signal)}queryFeatureCount(t,e){return this._queryEngine.executeQueryForCount(this._ensureQuery(t),e?.signal)}queryExtent(t,e){return this._queryEngine.executeQueryForExtent(this._ensureQuery(t),e?.signal)}_ensureQuery(t){return this._addDefinitionExpressionToQuery(t==null?this.createQuery():A.from(t))}_setupQueryEngine(){const t=()=>this.processor.featureStore;this._queryEngine=new ce({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return t()},hasZ:this.hasZ,hasM:this.hasM},priority:ie.FEATURE_QUERY_ENGINE})}get usedMemory(){return this.processor?.graphicsCore?.usedMemory??0}get unloadedMemory(){return .8*((this._controller?.unloadedMemoryEstimate??0)+(this.processor?.graphicsCore?.unprocessedMemoryEstimate??0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(t){me(this._attributeEditingContext,t)}get _attributeEditingContext(){const t=this._getObjectIdField(),e=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:t,globalIdField:e,forEachNode:r=>this.loadedGraphics.forEachNode(i=>r(i.node,i.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:r=>this.getAttributeData(r),setAttributeData:(r,i,s)=>{this._setAttributeData(r,i);const o=this.loadedGraphics.getNode(r);if(s!=null){const a=this.loadedGraphics.get(s.attributes[t]);a!=null&&this.processor.graphicsCore.recreateGraphics([a])}else o!=null&&this.processor.graphicsCore.recreateGraphics(o.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const t={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this.loadedGraphics.nodeCount,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(t),t}get test(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}};p([g()],c.prototype,"processor",void 0),p([g({type:de})],c.prototype,"filter",void 0),p([g()],c.prototype,"loadedGraphics",void 0),p([g()],c.prototype,"i3slayer",null),p([g()],c.prototype,"_controller",void 0),p([g()],c.prototype,"updating",void 0),p([g()],c.prototype,"suspended",void 0),p([g()],c.prototype,"holeFilling",void 0),p([g(se)],c.prototype,"updatingProgress",void 0),p([g()],c.prototype,"updatingProgressValue",null),p([g(M.requiredFields)],c.prototype,"requiredFields",null),p([g(M.availableFields)],c.prototype,"availableFields",void 0),p([g()],c.prototype,"_fieldsHelper",void 0),p([g({type:Number})],c.prototype,"maximumNumberOfFeatures",null),p([g({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null),p([g()],c.prototype,"_excludeObjectIdsSorted",null),p([g({readOnly:!0})],c.prototype,"lodFactor",null),p([g({readOnly:!0})],c.prototype,"hasM",null),p([g({readOnly:!0})],c.prototype,"hasZ",null),p([g()],c.prototype,"contentVisible",null),p([g({readOnly:!0})],c.prototype,"legendEnabled",null),c=p([oe("esri.views.3d.layers.SceneLayerGraphicsView3D")],c);const jt=c;function Ce(t){return"pointData"in t}function O(t){return"geometryBuffer"in t&&t.geometryBuffer!==null}function De(t,e,r){const i=e.attributeInfo;if(i==null||i.loadedAttributes==null||i.attributeData==null)return!1;let s=!1;for(const{name:o}of i.loadedAttributes)if(i.attributeData[o]){const a=L(i.attributeData[o],r);a!==t.attributes[o]&&(t.attributes[o]=a,s=!0)}return s}function P(t){const e=t.attributeInfo,r=t.node.index;if(e!=null&&e.loadedAttributes!=null&&e.attributeData!=null)for(let i=0;i<t.graphics.length;i++){const s=t.graphics[i];if(s.nodeIndex===r){s.attributes||(s.attributes={});for(const{name:o}of e.loadedAttributes)e.attributeData[o]&&(s.attributes[o]=L(e.attributeData[o],i))}}}function Fe(t,e){return t.xmin-=e,t.ymin-=e,t.xmax+=e,t.ymax+=e,t.zmin!=null&&t.zmax!=null&&(t.zmin-=e,t.zmax+=e),t.mmin!=null&&t.mmax!=null&&(t.mmin-=e,t.mmax+=e),t}const Ge={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},x=ae(),_={graphic:null,property:null,oldValue:null,newValue:null};export{jt as default};
