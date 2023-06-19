import{I as $,gO as B,Q as z,b as J,gD as S,e as a,y as n,a as g,m as v,al as U,fi as H,kx as G,l as M,au as Y,ky as W,q as C,A as I,aO as D,bW as N,g4 as T,be as K,aT as A,kz as V,kA as X,kB as Q,kC as ee,kD as te,f1 as q,bE as R,a3 as _,cI as re,C as b,h as j,aN as se,kE as ie,eV as ae}from"./index.da161cf1.js";import{A as oe,E as ne,I as le}from"./FeatureLikeLayerView3D.2804d5c7.js";import{n as ue}from"./LayerView3D.a0f4cfd4.js";import{x as ce,m as pe}from"./query.22cd43bf.js";import{r as de}from"./EventedSet.2b4d6c27.js";import{w as he}from"./FeatureEffect.ee83c7e0.js";import{d as ye}from"./FeatureFilter.97dd33dd.js";import{o as Z}from"./floorFilterUtils.2fa4f3da.js";import{b as k}from"./Query.e586665e.js";import{p as E,n as me}from"./popupUtils.5174221c.js";import{d as fe}from"./LayerView.948860d4.js";import{a as ge}from"./RefreshableLayerView.93fee593.js";class Fe{constructor(r){this._controller=r,this._handle=new be(e=>r.schedule(e))}destroy(){this._handle.destroy()}invoke(r,e){return r.buffer&&r.buffer.byteLength!==0?(r.options.sourceSpatialReference&&r.options.sourceSpatialReference instanceof $&&(r.options={...r.options,sourceSpatialReference:r.options.sourceSpatialReference.toJSON()}),this._handle.invoke(r,e).then(s=>{let i=0,u=0;const c=async l=>{if(s.spatialReference=$.fromJSON(s.spatialReference),s.fields){for(;i<s.fields.length;)if(s.fields[i]=z.fromJSON(s.fields[i]),i++,l.madeProgress())return this._controller.reschedule(o=>c(o))}const p=s.spatialReference;for(;u<s.features.length;){const o=s.features[u];if(++u,o.uid=J.generateUID(),o.geometry!=null&&(o.geometry.spatialReference=p,we(o.geometry),l.madeProgress()))return this._controller.reschedule(h=>c(h))}return s};return this._controller.schedule(l=>c(l))})):Promise.resolve(null)}}function we(t){switch(t.type){case"polyline":t.paths.reduce((r,e)=>r+e.length,0)<S&&(t.paths=t.hasZ||t.hasM?t.paths.map(r=>r.map(e=>[e[0],e[1],e[2]])):t.paths.map(r=>r.map(e=>[e[0],e[1]])));break;case"polygon":t.rings.reduce((r,e)=>r+e.length,0)<S&&(t.rings=t.hasZ||t.hasM?t.rings.map(r=>r.map(e=>[e[0],e[1],e[2]])):t.rings.map(r=>r.map(e=>[e[0],e[1]])))}}class be extends B{constructor(r){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},r)}}let f=class extends v{constructor(t){super(t)}get queryFeaturesDehydrated(){const t=this.layer.capabilities,r=t&&t.query,e=r&&r.supportsFormatPBF,s=this.layer.parsedUrl;if(e){this._decoder==null&&(this._decoder=new Fe(this.controller));const i={sourceSpatialReference:this.layer.spatialReference?.toJSON()??null,applyTransform:!0,maxStringAttributeLength:1024};return(u,c)=>ce(s,u,"pbf",this._createRequestOptions(c)).then(l=>(U(c),this._decoder!=null?this._decoder.invoke({buffer:l.data,options:i},c.signal):Promise.reject(H())))}return(i,u)=>pe(s,i,this.layer.spatialReference,this._createRequestOptions(u)).then(c=>G(c.data))}queryFeatureCount(t,r){return this.layer.queryFeatureCount(t,r)}destroy(){this._decoder=M(this._decoder)}_createRequestOptions(t){return{...t,query:{...this.layer.customParameters,token:this.layer.apiKey,...t?.query}}}};a([n({constructOnly:!0})],f.prototype,"layer",void 0),a([n({constructOnly:!0})],f.prototype,"controller",void 0),a([n({readOnly:!0})],f.prototype,"queryFeaturesDehydrated",null),f=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],f);let F=class extends v{constructor(t){super(t)}queryFeaturesDehydrated(t,r){return this.layer.queryFeatures(t,r)}queryFeatureCount(t,r){return this.layer.queryFeatureCount(t,r)}};a([n({constructOnly:!0})],F.prototype,"layer",void 0),a([n({readOnly:!0})],F.prototype,"queryFeaturesDehydrated",null),F=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],F);let x=class extends v{constructor(t){super(t)}queryFeaturesDehydrated(t,r){return this.layer.queryFeatures(t,r)}};a([n({constructOnly:!0})],x.prototype,"layer",void 0),x=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],x);let w=class extends v{constructor(t){super(t)}queryFeaturesDehydrated(t,r){return this.source.queryFeaturesJSON(t,r).then(G,e=>{if(e&&e.name==="query-features-json:unsupported")return this.layer.queryFeatures(t,r);throw e})}queryFeatureCount(t,r){return this.layer.queryFeatureCount(t,r)}};function _e(t,r){return t.type==="feature"&&t.source.type==="feature-layer"?t.infoFor3D!=null?new F({layer:t}):new f({layer:t,controller:r}):t.type==="feature"&&t.source.type==="memory"||t.type==="csv"||t.type==="geojson"||t.type==="oriented-imagery"||t.type==="wfs"?new w({layer:t,source:t.source}):t.type==="ogc-feature"?new x({layer:t}):null}a([n({constructOnly:!0})],w.prototype,"layer",void 0),a([n({constructOnly:!0})],w.prototype,"source",void 0),w=a([g("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],w);class xe{constructor(r){this._memoryCache=null,this._capabilities=null;const e=r.layerView.layer;this._layerView=r.layerView,this.objectIdField=e.objectIdField,this.globalIdField="globalIdField"in e?e.globalIdField:null,this._returnZ=r.returnZ,this._returnM=r.returnM;const s=this._layerView.view.resourceController;this.query=_e(e,s.normal),s&&this._memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(`fl-${e.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=M(this._memoryCache),this.query.destroy()}createQuery(){const r=this._layerView.layer.createQuery();return r.outFields=this._layerView.availableFields,r.returnZ=this._returnZ,r.returnM=this._returnM,r.outSpatialReference=this.tilingScheme.spatialReference,r}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const r=this._layerView.view.resourceController;return r?r.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return this._capabilities!=null||(this._capabilities=oe(this._layerView.layer)),this._capabilities}logFetchError(r,e){r.error("#fetchTile()",this._layerView.layer,e&&e.message?e.message:e)}}const L="esri.views.layers.FeatureLayerView",O=Y.getLogger(L),ve=t=>{let r=class extends t{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.handles.add([C(()=>{const e=this.layer;return[e?.elevationInfo?.featureExpressionInfo,e&&"displayField"in e?e.displayField:null,e&&"timeInfo"in e&&e.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),I),D(()=>this.view?.floors,"change",()=>this._handleRequiredFieldsChange()),D(()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){const{layer:e,layer:{fieldsIndex:s},requiredFields:i}=this;return"outFields"in e&&e.outFields?N(s,[...T(s,e.outFields),...i]):N(s,i)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){O.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},s=this.filter!=null?this.filter.createQuery(e):new k(e);if(this.layer.type==="feature"){const i=Z(this);i!=null&&(s.where=s.where?`(${s.where}) AND (${i})`:i)}return this.timeExtent!=null&&(s.timeExtent=s.timeExtent!=null?s.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),s}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new k(e)}queryFeatures(e,s){throw new Error("missing implementation")}queryObjectIds(e,s){throw new Error("missing implementation")}queryFeatureCount(e,s){throw new Error("missing implementation")}queryExtent(e,s){throw new Error("missing implementation")}async fetchPopupFeatures(e,s){const i=this.validateFetchPopupFeatures(s);if(i)throw i;return this.fetchClientPopupFeatures(s)}_loadArcadeModules(e){return e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some(s=>s.type==="expression")?K():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e=this.view.type==="3d",{layer:s,layer:{fieldsIndex:i,objectIdField:u}}=this,c="renderer"in s&&s.renderer,l="orderBy"in s&&s.orderBy,p="featureReduction"in s?s.featureReduction:null,o=new Set,h=await A([c?c.collectRequiredFields(o,i):null,V(o,s),e?X(o,s):null,this.filter!=null?Q(o,s,this.filter):null,this.featureEffect!=null?Q(o,s,this.featureEffect.filter):null,p?ee(o,s,p):null,l?te(o,s,l):null]);if("timeInfo"in s&&s.timeInfo&&this.timeExtent&&q(o,s.fieldsIndex,[s.timeInfo.startField,s.timeInfo.endField]),s.type==="feature"&&(s.floorInfo&&q(o,s.fieldsIndex,[s.floorInfo.floorField]),e&&s.infoFor3D!=null&&(s.globalIdField==null&&O.error("globalIdField missing on 3DObjectFeatureLayer"),q(o,s.fieldsIndex,[s.globalIdField]))),s.type==="subtype-group"){R(o,i,s.subtypeField);const y=s.sublayers.map(P=>Promise.all([P.renderer?.collectRequiredFields(o,i),V(o,P)]));await A(y)}for(const y of h)y.error&&O.error(y.error);R(o,i,u),e&&"displayField"in s&&s.displayField&&R(o,i,s.displayField);const m=Array.from(o).sort();this._set("requiredFields",m)}validateFetchPopupFeatures(e){if(e==null)return null;for(const s of e.clientGraphics??[]){const i=s.layer;if("popupEnabled"in i&&!i.popupEnabled)return new _("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i});if(s.isAggregate){const u="featureReduction"in i?i.featureReduction:null;if(!(u&&"popupTemplate"in u&&u.popupEnabled&&u.popupTemplate))return new _("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:i})}else if("popupTemplate"in i&&!E(i,e))return new _("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:i})}}async fetchClientPopupFeatures(e){const s=e!=null?e.clientGraphics:null;if(!s||s.length===0)return[];const i=new Array(s.length),u=new Map,c=await this.createPopupQuery(e);for(let l=0;l<s.length;l++){const p=s[l];if(p.isAggregate){i[l]=p;continue}const o=p.layer;if(!("popupEnabled"in o))continue;const h=T(this.layer.fieldsIndex,c.outFields),m=E(o,e);if(m==null)continue;const y=await this._loadArcadeModules(m);y&&y.arcadeUtils.hasGeometryOperations(m)||!re(h,p)?u.set(p.getObjectId(),{graphic:p,index:l}):i[l]=p}if(this.layer.type==="stream"||u.size===0)return i.filter(Boolean);c.objectIds=Array.from(u.keys());try{const l=await this.layer.queryFeatures(c);for(const p of l.features){const{graphic:{geometry:o},index:h}=u.get(p.getObjectId());p.geometry||(p.geometry=o),i[h]=p}}catch{}return i.filter(Boolean)}async createPopupQuery(e){const s=this.layer.createQuery(),i=new Set;let u=!1;const c=e!=null&&e.clientGraphics?e.clientGraphics.map(l=>l.layer):[this.layer];for(const l of c){if(!("popupEnabled"in l))continue;const p=E(l,e);if(p==null)continue;const o=await this._loadArcadeModules(p),h=o&&o.arcadeUtils.hasGeometryOperations(p);u=!(this.layer.geometryType!=="point"&&!h);const m=await me(this.layer,p);for(const y of m)i.add(y)}if(s.returnGeometry=u,s.returnZ=u,s.returnM=u,s.outFields=Array.from(i),s.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const l=Z(this);l!=null&&(s.where=s.where?`(${s.where}) AND (${l})`:l)}return s}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}};return a([n()],r.prototype,"_updatingRequiredFieldsPromise",void 0),a([n({readOnly:!0})],r.prototype,"availableFields",null),a([n({type:he})],r.prototype,"featureEffect",null),a([n({type:ye})],r.prototype,"filter",void 0),a([n(W)],r.prototype,"timeExtent",void 0),a([n()],r.prototype,"layer",void 0),a([n({type:Number})],r.prototype,"maximumNumberOfFeatures",null),a([n({readOnly:!0,type:Boolean})],r.prototype,"maximumNumberOfFeaturesExceeded",null),a([n({readOnly:!0})],r.prototype,"requiredFields",void 0),a([n()],r.prototype,"suspended",void 0),a([n()],r.prototype,"view",void 0),r=a([g(L)],r),r};let d=class extends ge(ne(ve(ue(fe)))){constructor(t){super(t),this._controllerTotal=0,this._processorTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.handles.add(C(()=>this._updatingRequiredFieldsPromise,t=>this.updatingHandles.addPromise(t),I))}destroy(){this.updatingHandles.removeAll(),this.handles.removeAll(),this._fetcherContext=M(this._fetcherContext)}get maximumNumberOfFeatures(){return this.controller?.maximumNumberOfFeatures??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(t){this._set("maximumNumberOfFeatures",t),this.controller&&(this.controller.maximumNumberOfFeatures=t)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){let t=0;if(this.controller?.updating){const e=this.controller.updatingRemaining,s=Math.max(this.controller.updatingTotal,this._controllerTotal);s>0&&(t=(s-e)/s,this._controllerTotal=s)}let r=0;if(this.processor?.updating){const e=this.processor.updatingRemaining,s=Math.max(e,this._processorTotal);s>0&&(r=(s-e)/s,this._processorTotal=s)}return .5*(t+r)}get updatePolicy(){if(!this.controller)return b.ASYNC;switch(this.controller.mode){case"snapshot":{const t=qe.get(this.layer.geometryType);return t==null||this.controller.serviceDataCount>t?b.ASYNC:b.SYNC}case"tiles":return b.ASYNC}}get hasZ(){const t=this.layer,r=t.capabilities&&t.capabilities.data;return!(!r||!r.supportsZ)&&("returnZ"in t&&t.returnZ!=null?t.returnZ:r.supportsZ)}get hasM(){const t=this.layer,r=t.capabilities&&t.capabilities.data;return!(!r||!r.supportsM)&&"returnM"in t&&t.returnM!=null&&t.returnM}setVisibility(t,r){this.processor?.setObjectIdVisibility(t,r)}createQuery(){return super.createQuery()}queryFeatures(t,r){const e=()=>super.queryFeatures(t,r);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(t),e):e()}beforeSetController(t){t.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new xe({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const t=new le({layerView:this,context:this._fetcherContext,graphics:new de,extent:this.clippingExtent});return this.updatingHandles.add(()=>t.serviceDataExtent,r=>{this.processor&&(this.processor.dataExtent=r)},j),this.handles.add(C(()=>this.suspended,r=>{r?t.suspend():t.resume()},I)),this.updatingHandles.add(()=>this.processor?.displayFeatureLimit,r=>t.displayFeatureLimit=r,j),this.handles.add(se(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),t}async doRefresh(t){t&&!this.suspended&&this.controller&&this.controller.refetch(),this.processor.refreshFilter()}get usedMemory(){return(this.processor?.usedMemory??0)+(this.controller?.memoryForUnusedFeatures??0)}get unloadedMemory(){const t=this.processor?.unprocessedMemoryEstimate??0,r=this.controller?.expectedFeatureDiff??0,e=this.processor?.loadedFeatures??0,s=e/(e+r);return t+r*(this.processor?.usedMemoryPerFeature??0)*s}get ignoresMemoryFactor(){return this.controller?.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(t,r){await this._validateQueryFeaturesMesh(t);const e=await r();if(t&&t.outStatistics||this.graphics3DProcessor==null)return e;const s=this.layer.objectIdField,i=this.graphics3DProcessor.graphics3DGraphicsByObjectID,u=[];for(const c of e.features)if(c.geometry){const l=i.get(c.attributes[s]);l&&(c.geometry=ie(l.graphic.geometry),u.push(c))}else u.push(c);return e.features=u,e}async _validateQueryFeaturesMesh(t){if(!t)return;const r=s=>{throw new _("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},e=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of e)t[s]!=null&&r(s);"returnM"in t&&t.returnM&&r("returnM"),"returnCentroid"in t&&t.returnCentroid&&r("returnCentroid"),t.outSpatialReference==null||t.outSpatialReference.equals(this.view.spatialReference)||r("outSpatialReference")}get performanceInfo(){const t=this.controller?.displayFeatureLimit,r=t?.averageSymbolComplexity,e=r!=null?`f:${r.primitivesPerFeature},v:${r.primitivesPerCoordinate}`:"n/a";return{...this._getResourceInfo(),partial:this.maximumNumberOfFeaturesExceeded,mode:this.controller?.mode??"n/a",symbolComplexity:e,nodes:this.controller?.tileDescriptors.length??0,...this.controller?.debug??{storedFeatures:0,totalVertices:0}}}get test(){return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:this.controller?.graphics}}};a([n()],d.prototype,"layer",void 0),a([n()],d.prototype,"controller",void 0),a([n()],d.prototype,"_controllerTotal",void 0),a([n()],d.prototype,"_processorTotal",void 0),a([n()],d.prototype,"maximumNumberOfFeatures",null),a([n()],d.prototype,"maximumNumberOfFeaturesExceeded",null),a([n(ae)],d.prototype,"updatingProgress",void 0),a([n({readOnly:!0})],d.prototype,"updatingProgressValue",null),a([n({readOnly:!0})],d.prototype,"updatePolicy",null),a([n({readOnly:!0})],d.prototype,"hasZ",null),a([n({readOnly:!0})],d.prototype,"hasM",null),a([n()],d.prototype,"suspendResumeExtentMode",void 0),d=a([g("esri.views.3d.layers.FeatureLayerViewBase3D")],d);const qe=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),Ae=d;export{Ae as _};