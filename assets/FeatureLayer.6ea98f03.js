import{au as J,dJ as z,dK as U,c_ as K,V as M,a3 as f,Y as B,j as X,dL as Y,ao as H,dM as q,e as s,dN as ee,b as C,N as te,y as a,a as T,m as re,dO as ie,dP as se,dQ as oe,R as ae,v as ne,t as le,I as ue,l as pe,dR as de,dS as F,cC as ye,dT as R,dU as L,dV as ce,dW as he,dX as me,d5 as fe,cd as I,bZ as ge,dY as be,L as d,bK as we,Z as E,dZ as ve,d_ as _e,X as $,d$ as Fe,bw as Te,e0 as Se,e1 as Ie,e2 as Ee,e3 as $e,e4 as De,M as je}from"./index.da161cf1.js";import"./UniqueValueRenderer.0143139a.js";import{o as Oe,p as Me,n as qe}from"./jsonUtils.4745b876.js";import{n as Ce}from"./sql.414b1952.js";import{w as Re,y as Le}from"./FeatureLayerBase.07ef7e55.js";import{i as Pe}from"./editsZScale.58b9a03e.js";import{t as P}from"./queryZScale.2643e684.js";import{d as A}from"./FeatureSet.97dc0f24.js";import{i as xe}from"./APIKeyMixin.605900a3.js";import{l as Ge}from"./ArcGISService.116191b2.js";import{a as Ne}from"./BlendLayer.eacc4944.js";import{o as Je}from"./CustomParametersMixin.244652a9.js";import{c as Ae}from"./EditBusLayer.3831f0f2.js";import{p as ke}from"./FeatureEffectLayer.a9b039ed.js";import{n as Ve}from"./FeatureReductionLayer.9f7296a1.js";import{c as Qe}from"./OrderedLayer.bbc75e49.js";import{j as We}from"./PortalLayer.9c2e677f.js";import{t as Ze}from"./ScaleRangeLayer.1a5bb9a6.js";import{a as ze,d as Ue}from"./TemporalLayer.5874b62b.js";import{M as Ke,Q as Be,S as Xe,R as Ye,v as He,y as et,m as tt,h as rt,w as it,E as st,b as ot,g as at,j as nt,q as lt,F as ut,I as pt,P as dt,A as yt,O as ct,d as x}from"./featureLayerUtils.0566dc37.js";import{p as k}from"./FeatureTemplate.c7eaa370.js";import{n as V}from"./FeatureType.4659b5f1.js";import{s as ht}from"./fieldProperties.174d0f24.js";import{C as mt}from"./LabelClass.1c6b8047.js";import{i as G}from"./labelingInfo.990e68e3.js";import{n as ft}from"./serviceCapabilitiesUtils.c358c66d.js";import{e as gt}from"./versionUtils.05c8a355.js";import{b as bt,K as wt}from"./Query.e586665e.js";import{t as vt}from"./styleUtils.a985c9a8.js";import{S as v}from"./TopFeaturesQuery.165d1927.js";import{p as _t}from"./popupUtils.f5ffced0.js";import"./ColorStop.f762bde8.js";import"./diffUtils.f0876598.js";import"./colorRamps.80cb140e.js";import"./DictionaryLoader.90c8c47c.js";import"./FieldsIndex.09813895.js";import"./heatmapUtils.32e9a30b.js";import"./jsonUtils.1c231e28.js";import"./FeatureEffect.ee83c7e0.js";import"./FeatureFilter.97dd33dd.js";import"./portalItemUtils.ea6f2bf4.js";import"./AttachmentQuery.c430db32.js";import"./RelationshipQuery.60e2b826.js";import"./defaults.83793da7.js";import"./defaultsJSON.a416f32c.js";let Ft=0;const Q="esri.layers.graphics.sources.MemorySource",D=J.getLogger(Q);let g=class extends z.LoadableMixin(U(K(M))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get _workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);P(e,this.layer.spatialReference,r);const i=A.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const n=this.layer.objectIdField;for(const l of i.features){const u=l.attributes[n],h=this._idToClientGraphic.get(u);h&&(l.geometry=h.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new f("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return P(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:B.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new f("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],n=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=p=>"objectId"in p&&p.objectId!=null?p.objectId:"attributes"in p&&p.attributes[t]!=null?p.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const p of e.deleteFeatures){const y=l(p);y!=null&&i.push(y)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const p of e.updateFeatures)if(n.push(this._serializeFeature(p)),u){const y=l(p);y!=null&&u.set(y,p)}}Pe(r?r.features:null,n,this.layer.spatialReference);const{fullExtent:h,featureEditResults:c}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:n,deletes:i});return this.fullExtent=h,r&&r.finish(c.uidToObjectId),this._updateClientGraphicIds(u,c),this._createEditsResult(c)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const r=[];for(const{geometry:i}of e)i==null||i.type!=="mesh"||i.hasExtent||i.loaded||r.push(i.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let l=0;l<e.length;l++){const u=e[l],h=this._serializeFeature(u);i||u.geometry==null||(i=u.geometry.type),r[l]=h,t.set(`${h.uid}`,u)}const n=this;return{features:r,inferredGeometryType:i,finish(l){const u=n.sourceJSON.objectIdField;for(const h in l){const c=l[h],p=t.get(h);p&&(p.attributes||(p.attributes={}),c===-1?delete p.attributes[u]:p.attributes[u]=c,n._addIdToClientGraphic(p))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes&&e.attributes[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(Ft++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?X.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await Y("MemorySourceWorker",{strategy:H("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,objectIdField:i,hasM:n,hasZ:l,timeInfo:u}=this.layer,h=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const c=this._prepareAddFeatures(this.items);this.handles.add(this.on("before-changes",b=>{D.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),b.preventDefault()}));const p={features:c.features,fields:t&&t.map(b=>b.toJSON()),geometryType:q.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&n,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:i,spatialReference:h?null:r&&r.toJSON(),timeInfo:u?u.toJSON():null},y=await this._connection.invoke("load",p,{signal:e});for(const b of y.warnings)D.warn(b.message,{layer:this.layer,warning:b});y.featureErrors.length&&D.warn(`Encountered ${y.featureErrors.length} validation errors while loading features`,y.featureErrors);const S=y.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(c.inferredGeometryType)&&(S.geometryType=q.toJSON(c.inferredGeometryType)),this.sourceJSON=S,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),c.finish(y.assignedObjectIds)}};s([ee({Type:C,ensureType:te(C)})],g.prototype,"itemType",void 0),s([a()],g.prototype,"type",void 0),s([a({constructOnly:!0})],g.prototype,"layer",void 0),s([a({readOnly:!0})],g.prototype,"_workerGeometryType",null),s([a()],g.prototype,"sourceJSON",void 0),g=s([T(Q)],g);let w=class extends re{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};s([a()],w.prototype,"updating",void 0),s([a()],w.prototype,"status",void 0),w=s([T("esri.layers.support.PublishingInfo")],w);const Tt=w,W="esri.layers.mixins.PublishableLayer",St=Symbol(W),It=e=>{var t;let r=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const n=new Tt;return this._checkPublishingStatus(n),n}_checkPublishingStatus(i){let u=0;const h=async p=>{let y;i.updating=!0;try{y=await this.fetchPublishingStatus()}catch{y="unavailable"}y!=="published"&&y!=="unavailable"||(i.status==="publishing"&&this.refresh(),c.remove()),i.status=y,i.updating=!1,c.removed||(u=setTimeout(h,p,p+125))},c={removed:!1,remove(){this.removed=!0,clearTimeout(u)}};this.when().catch(()=>c.remove()),h(250),this.own(c)}};return t=St,s([a({readOnly:!0,clonable:!1})],r.prototype,"publishingInfo",null),r=s([T(W)],r),r},m="FeatureLayer",Z="esri.layers.FeatureLayer",Et=J.getLogger(Z);function _(e,t){return new f("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function N(e){return e&&e instanceof M}const j=ht();function O(e,t,r){const i=!!r?.writeLayerSchema;return{enabled:i,ignoreOrigin:i}}let o=class extends Re(Ve(ke(It(Ae(Ne(Qe(ze(Ze(ie(Ge(se(We(oe(Je(xe(ae(ne))))))))))))))))){constructor(...e){super(...e),this._handles=new le,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=ue.WGS84,this.subtypeCode=null,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0}destroy(){this.source?.destroy(),this._handles=pe(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(i=>this.initLayerProperties(i))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},e).catch(de).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const i=await this._fetchFirstLayerId(t);i!=null&&(this.layerId=i)}if(!this.url&&!this._hasMemorySource())throw new f("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>Ke(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}readCapabilities(e,t){return t=t.layerDefinition||t,ft(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return!(this.loaded&&!this.capabilities?.operations.supportsEditing)&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return Be(this)}readIsTable(e,t){return(t=t?.layerDefinition??t).type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i?.writeLayerSchema&&F(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return Xe(t.layerDefinition||t)}readObjectIdField(e,t){return Ye(t.layerDefinition||t)}get parsedUrl(){const e=ye(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=R(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=R(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){L(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){t=t.layerDefinition||t;const i=t.drawingInfo?.renderer;if(i){const n=Oe(i,t,r)??void 0;return n||Et.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),n}return He(t,r)}set source(e){const t=this._get("source");t!==e&&(N(t)&&this._resetMemorySource(t),N(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof M?new g({layer:this,items:e}):e:null}readSource(e,t){const r=A.fromJSON(t.featureSet);return new g({layer:this,items:r?.features??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r&&r.creatorField,n=r&&r.editorField;return e=e&&e.map(l=>k.fromJSON(l)),this._fixTemplates(e,i),this._fixTemplates(e,n),e}readTitle(e,t){const r=t.layerDefinition?.name??t.name,i=t.title||t.layerDefinition&&t.layerDefinition.title;if(r){const n=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return this.url?ce(this.url,r):r;let l=r;if(!l&&this.url){const u=he(this.url);u!=null&&(l=u.title)}return l?(this.sublayerTitleMode==="item-title-and-service-name"&&n&&n!==l&&(l=n+" - "+l),me(l)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){return t.title||t.layerDefinition&&t.layerDefinition.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(n=>n.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r&&r.creatorField,n=r&&r.editorField;return e&&e.map(l=>(l=V.fromJSON(l),this._fixTemplates(l.templates,i),this._fixTemplates(l.templates,n),l))}readVisible(e,t){return t.layerDefinition&&t.layerDefinition.defaultVisibility!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){return et(this,e,t,m)}async updateAttachment(e,t,r){return tt(this,e,t,r,m)}async applyEdits(e,t){return rt(this,e,t)}async uploadAssets(e,t){return it(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return _t(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await fe(I(()=>import("./FeatureLayerSource.f5c9c8fe.js"),["assets/FeatureLayerSource.f5c9c8fe.js","assets/index.da161cf1.js","assets/index.8db76e31.css","assets/MeshGeoreferencedRelativeVertexSpace.a44e5587.js","assets/External.3b5c14d5.js","assets/editingSupport.22fdf483.js","assets/normalizeUtils.54c24a4d.js","assets/normalizeUtilsCommon.87227ae2.js","assets/EditBusLayer.3831f0f2.js","assets/clientSideDefaults.f7f5ffde.js","assets/QueryEngineCapabilities.a6a6a20b.js","assets/defaultsJSON.a416f32c.js","assets/QueryTask.3d449f5b.js","assets/Query.e586665e.js","assets/executeForIds.28afd71c.js","assets/query.22cd43bf.js","assets/pbfQueryUtils.c4418ce7.js","assets/pbf.82c57b62.js","assets/queryZScale.2643e684.js","assets/executeQueryJSON.640d70ab.js","assets/FeatureSet.97dc0f24.js","assets/executeQueryPBF.d6edfec1.js","assets/editsZScale.58b9a03e.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=st(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=Ce(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){return ot(this,e,t,m)}async fetchRecomputedExtents(e){return at(this,e,m)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(i==null)return null;let n=null;return r?.some(l=>{const{id:u}=l;return u!=null&&(u.toString()===i.toString()&&(n=l),!!n)}),n}getFieldDomain(e,t){const r=t?.feature,i=this.getFeatureType(r);if(i){const n=i.domains&&i.domains[e];if(n&&n.type!=="inherited")return n}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return nt(this,e,t,m)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(bt.from(e)??r.createQuery(),t);if(i?.features)for(const n of i.features)n.layer=n.sourceLayer=r;return i}async queryObjectIds(e,t){return lt(this,e,t,m)}async queryFeatureCount(e,t){return ut(this,e,t,m)}async queryExtent(e,t){return pt(this,e,t,m)}async queryRelatedFeatures(e,t){return dt(this,e,t,m)}async queryRelatedFeaturesCount(e,t){return yt(this,e,t,m)}async queryTopFeatures(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!i?.query?.supportsTopFeaturesQuery)throw new f(m,"Layer source does not support queryTopFeatures capability");const n=await r.queryTopFeatures(v.from(e),t);if(n?.features)for(const l of n.features)l.layer=l.sourceLayer=this;return n}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!i?.query.supportsTopFeaturesQuery)throw new f(m,"Layer source does not support queryTopObjectIds capability");return r.queryTopObjectIds(v.from(e),t)}async queryTopFeaturesExtent(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!i?.query?.supportsTopFeaturesQuery)throw new f(m,"Layer source does not support queryTopExtents capability");return r.queryTopExtents(v.from(e),t)}async queryTopFeatureCount(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!i?.query?.supportsTopFeaturesQuery)throw new f(m,"Layer source does not support queryFeatureCount capability");return r.queryTopCount(v.from(e),t)}read(e,t){const r=e.featureCollection;if(r){const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:t?.origin??void 0,writeLayerSchema:t?.writeLayerSchema??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:n}=t;if(this.dynamicDataSource)return n?.push(_(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(r==="web-scene"||r==="web-map"&&i!=="tables")return n?.push(_(this,"using a table source cannot be written to web scenes and web maps")),null;if(this._hasMemorySource())return n?.push(_(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&i==="tables")return n?.push(_(this,"using a non-table source cannot be written to tables in web maps")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new f(m,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){return!!this.loaded&&(this.source?.type==="memory"||gt(this,e))}async save(e){const{save:t}=await I(()=>import("./featureLayerUtils.2269c30b.js"),["assets/featureLayerUtils.2269c30b.js","assets/index.da161cf1.js","assets/index.8db76e31.css","assets/fetchService.1153b1df.js","assets/jsonContext.d19fd1ca.js","assets/portalItemUtils.ea6f2bf4.js","assets/UniqueValueRenderer.0143139a.js","assets/ColorStop.f762bde8.js","assets/diffUtils.f0876598.js","assets/colorRamps.80cb140e.js","assets/jsonUtils.4745b876.js","assets/DictionaryLoader.90c8c47c.js","assets/FieldsIndex.09813895.js","assets/heatmapUtils.32e9a30b.js","assets/sql.414b1952.js","assets/FeatureLayerBase.07ef7e55.js","assets/featureLayerUtils.0566dc37.js","assets/AttachmentQuery.c430db32.js","assets/Query.e586665e.js","assets/RelationshipQuery.60e2b826.js","assets/serviceCapabilitiesUtils.c358c66d.js","assets/editsZScale.58b9a03e.js","assets/queryZScale.2643e684.js","assets/FeatureSet.97dc0f24.js","assets/APIKeyMixin.605900a3.js","assets/ArcGISService.116191b2.js","assets/BlendLayer.eacc4944.js","assets/jsonUtils.1c231e28.js","assets/CustomParametersMixin.244652a9.js","assets/EditBusLayer.3831f0f2.js","assets/FeatureEffectLayer.a9b039ed.js","assets/FeatureEffect.ee83c7e0.js","assets/FeatureFilter.97dd33dd.js","assets/FeatureReductionLayer.9f7296a1.js","assets/LabelClass.1c6b8047.js","assets/defaults.83793da7.js","assets/defaultsJSON.a416f32c.js","assets/OrderedLayer.bbc75e49.js","assets/PortalLayer.9c2e677f.js","assets/ScaleRangeLayer.1a5bb9a6.js","assets/TemporalLayer.5874b62b.js","assets/FeatureTemplate.c7eaa370.js","assets/FeatureType.4659b5f1.js","assets/fieldProperties.174d0f24.js","assets/labelingInfo.990e68e3.js","assets/versionUtils.05c8a355.js","assets/styleUtils.a985c9a8.js","assets/TopFeaturesQuery.165d1927.js","assets/popupUtils.f5ffced0.js"]);return t(this,e)}async saveAs(e,t){const{saveAs:r}=await I(()=>import("./featureLayerUtils.2269c30b.js"),["assets/featureLayerUtils.2269c30b.js","assets/index.da161cf1.js","assets/index.8db76e31.css","assets/fetchService.1153b1df.js","assets/jsonContext.d19fd1ca.js","assets/portalItemUtils.ea6f2bf4.js","assets/UniqueValueRenderer.0143139a.js","assets/ColorStop.f762bde8.js","assets/diffUtils.f0876598.js","assets/colorRamps.80cb140e.js","assets/jsonUtils.4745b876.js","assets/DictionaryLoader.90c8c47c.js","assets/FieldsIndex.09813895.js","assets/heatmapUtils.32e9a30b.js","assets/sql.414b1952.js","assets/FeatureLayerBase.07ef7e55.js","assets/featureLayerUtils.0566dc37.js","assets/AttachmentQuery.c430db32.js","assets/Query.e586665e.js","assets/RelationshipQuery.60e2b826.js","assets/serviceCapabilitiesUtils.c358c66d.js","assets/editsZScale.58b9a03e.js","assets/queryZScale.2643e684.js","assets/FeatureSet.97dc0f24.js","assets/APIKeyMixin.605900a3.js","assets/ArcGISService.116191b2.js","assets/BlendLayer.eacc4944.js","assets/jsonUtils.1c231e28.js","assets/CustomParametersMixin.244652a9.js","assets/EditBusLayer.3831f0f2.js","assets/FeatureEffectLayer.a9b039ed.js","assets/FeatureEffect.ee83c7e0.js","assets/FeatureFilter.97dd33dd.js","assets/FeatureReductionLayer.9f7296a1.js","assets/LabelClass.1c6b8047.js","assets/defaults.83793da7.js","assets/defaultsJSON.a416f32c.js","assets/OrderedLayer.bbc75e49.js","assets/PortalLayer.9c2e677f.js","assets/ScaleRangeLayer.1a5bb9a6.js","assets/TemporalLayer.5874b62b.js","assets/FeatureTemplate.c7eaa370.js","assets/FeatureType.4659b5f1.js","assets/fieldProperties.174d0f24.js","assets/labelingInfo.990e68e3.js","assets/versionUtils.05c8a355.js","assets/styleUtils.a985c9a8.js","assets/TopFeaturesQuery.165d1927.js","assets/popupUtils.f5ffced0.js"]);return r(this,e,t)}_readEditingEnabled(e,t,r){let i=e.layerDefinition?.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&r?.origin==="web-map"&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){if(!e){const n=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query";F("layerDefinition.capabilities",n,t),r&&!i?.writeLayerSchema&&(t.capabilities=n)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstLayerId(e){return ge(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r)return Array.isArray(r.layers)&&r.layers.length>0?r.layers[0].id:Array.isArray(r.tables)&&r.tables.length>0?r.tables[0].id:void 0})}async initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),L(this.renderer,this.fieldsIndex),be(this.timeInfo,this.fieldsIndex),vt(this,{origin:"service"})}async hasDataChanged(){return ct(this)}async fetchPublishingStatus(){const e=this.source;return e?.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{const i=r.prototype&&r.prototype.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new f("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new f("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this._handles.add([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this._handles.remove("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}};s([d("service","capabilities")],o.prototype,"readCapabilities",null),s([a({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],o.prototype,"charts",void 0),s([a({readOnly:!0})],o.prototype,"createQueryVersion",null),s([a({json:{read:{source:"layerDefinition.copyrightText"}}})],o.prototype,"copyright",void 0),s([a({json:{read:{source:"layerDefinition.displayField"}}})],o.prototype,"displayField",void 0),s([a({types:we,readOnly:!0})],o.prototype,"defaultSymbol",void 0),s([a({type:wt})],o.prototype,"dynamicDataSource",void 0),s([a({type:Boolean})],o.prototype,"editingEnabled",null),s([d(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],o.prototype,"readEditingEnabled",null),s([d("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],o.prototype,"readEditingEnabledFromWebMap",null),s([E(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],o.prototype,"writeEditingEnabled",null),s([E("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],o.prototype,"writeEditingEnabledToWebMap",null),s([a({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),s([a({...j.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:O}}}}})],o.prototype,"fields",void 0),s([a(j.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([a({type:Le,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),s([a({json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),s([a({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:O,writer(e,t,r){const i=e?x.toJSON(e):null;i&&F(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:x.read}}})],o.prototype,"geometryType",void 0),s([a({json:{read:{source:"layerDefinition.hasM"}}})],o.prototype,"hasM",void 0),s([a({json:{read:{source:"layerDefinition.hasZ"}}})],o.prototype,"hasZ",void 0),s([a(ve)],o.prototype,"id",void 0),s([a({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],o.prototype,"infoFor3D",void 0),s([a({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],o.prototype,"isTable",void 0),s([d("service","isTable",["type","geometryType"]),d("isTable",["layerDefinition.type","layerDefinition.geometryType"])],o.prototype,"readIsTable",null),s([E("web-map","isTable")],o.prototype,"writeIsTable",null),s([a(_e)],o.prototype,"labelsVisible",void 0),s([a({type:[mt],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:G},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:G},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],o.prototype,"labelingInfo",void 0),s([a((()=>{const e=$(Fe);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,r,i){F(i,Te(t),r)}}},e})())],o.prototype,"opacity",void 0),s([a(Se)],o.prototype,"legendEnabled",void 0),s([a({type:["show","hide"],json:(()=>{const e=$(Ie.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],o.prototype,"listMode",void 0),s([d("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdField",null),s([a({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:O}}}}})],o.prototype,"objectIdField",void 0),s([d("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdField",null),s([a({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),s([a(j.outFields)],o.prototype,"outFields",void 0),s([a({readOnly:!0})],o.prototype,"parsedUrl",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([a(Ee)],o.prototype,"popupEnabled",void 0),s([a({type:$e,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([a({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([a({types:Me,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:qe,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema})}}})],o.prototype,"renderer",null),s([d("service","renderer",["drawingInfo.renderer","defaultSymbol"]),d("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],o.prototype,"readRenderer",null),s([a((()=>{const e=$(De);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],o.prototype,"screenSizePerspectiveEnabled",void 0),s([a({clonable:!1})],o.prototype,"source",null),s([je("source")],o.prototype,"castSource",null),s([d("portal-item","source",["featureSet"]),d("web-map","source",["featureSet"])],o.prototype,"readSource",null),s([a({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],o.prototype,"spatialReference",void 0),s([a({type:Number})],o.prototype,"subtypeCode",void 0),s([a({type:[k]})],o.prototype,"templates",void 0),s([d("templates",["editFieldsInfo","creatorField","editorField","templates"])],o.prototype,"readTemplates",null),s([a({type:Ue})],o.prototype,"timeInfo",void 0),s([a()],o.prototype,"title",void 0),s([d("service","title",["name"]),d("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],o.prototype,"readTitle",null),s([d("web-map","title",["layerDefinition.name","title"])],o.prototype,"readTitleFromWebMap",null),s([a({type:String})],o.prototype,"sublayerTitleMode",void 0),s([a({json:{read:!1}})],o.prototype,"type",void 0),s([a({type:String})],o.prototype,"typeIdField",void 0),s([d("service","typeIdField"),d("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),s([a({type:[V]})],o.prototype,"types",void 0),s([d("service","types",["types"]),d("types",["layerDefinition.types"])],o.prototype,"readTypes",null),s([a({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],o.prototype,"visible",void 0),s([d("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],o.prototype,"readVisible",null),o=s([T(Z)],o);const br=o;export{br as default};
