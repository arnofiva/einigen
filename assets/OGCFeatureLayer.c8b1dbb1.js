import{e as t,y as o,a as O,dJ as B,I as g,dM as L,a3 as w,dP as J,dO as N,dQ as H,dU as x,dY as U,ej as Z,Q as k,Y as z,J as b,d_ as V,e0 as W,e2 as K,e3 as Y,e4 as X,en as ee,v as te}from"./index.da161cf1.js";import"./UniqueValueRenderer.0143139a.js";import{p as re,n as oe}from"./jsonUtils.4745b876.js";import{x as ie,b as R,k as I,I as se,F as pe,j as ne,T as ae,h as le,w as ue}from"./ogcFeatureUtils.c15e0a84.js";import{d as de}from"./FeatureSet.97dc0f24.js";import{i as ce}from"./APIKeyMixin.605900a3.js";import{a as ye}from"./BlendLayer.eacc4944.js";import{o as me}from"./CustomParametersMixin.244652a9.js";import{p as fe}from"./FeatureEffectLayer.a9b039ed.js";import{n as he}from"./FeatureReductionLayer.9f7296a1.js";import{c as ge}from"./OrderedLayer.bbc75e49.js";import{j as ve}from"./PortalLayer.9c2e677f.js";import{t as Se}from"./ScaleRangeLayer.1a5bb9a6.js";import{a as Ce}from"./TemporalLayer.5874b62b.js";import{n as we}from"./FeatureType.4659b5f1.js";import{s as xe}from"./fieldProperties.174d0f24.js";import{C as be}from"./LabelClass.1c6b8047.js";import{i as Re}from"./labelingInfo.990e68e3.js";import{b as F}from"./Query.e586665e.js";import{p as Ie}from"./popupUtils.f5ffced0.js";import"./ColorStop.f762bde8.js";import"./diffUtils.f0876598.js";import"./colorRamps.80cb140e.js";import"./DictionaryLoader.90c8c47c.js";import"./FieldsIndex.09813895.js";import"./heatmapUtils.32e9a30b.js";import"./geojson.91d0658d.js";import"./clientSideDefaults.f7f5ffde.js";import"./QueryEngineCapabilities.a6a6a20b.js";import"./defaultsJSON.a416f32c.js";import"./jsonUtils.1c231e28.js";import"./FeatureEffect.ee83c7e0.js";import"./FeatureFilter.97dd33dd.js";import"./featureLayerUtils.0566dc37.js";import"./sql.414b1952.js";import"./AttachmentQuery.c430db32.js";import"./RelationshipQuery.60e2b826.js";import"./portalItemUtils.ea6f2bf4.js";import"./FeatureTemplate.c7eaa370.js";import"./defaults.83793da7.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:i,spatialReference:s,supportedCrs:p},layer:{apiKey:l,customParameters:a,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:i,maxRecordCount:n,queryParameters:{apiKey:l,customParameters:a},spatialReference:s,supportedCrs:p}}queryExtent(e,i={}){return null}queryFeatureCount(e,i={}){return null}queryFeatures(e,i={}){return this.queryFeaturesJSON(e,i).then(s=>de.fromJSON(s))}queryFeaturesJSON(e,i={}){const s=this.getSource();return this.load(i).then(()=>ie(s,e,i))}queryObjectIds(e,i={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,i){const s=new RegExp(`^${i}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,i){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:i,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1}}}_getMaxRecordCount(e){const i=e?.components?.parameters;return i?.limit?.schema?.maximum??i?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const i=e.storageCrs??R,s=I(i);return s==null?g.WGS84:new g({wkid:s})}_getSupportedSpatialReferences(e,i){const s="#/crs",p=e.crs??[R],l=p.includes(s)?p.filter(n=>n!==s).concat(i.crs??[]):p,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(n=>!a.test(n))}async _loadOGCServices(e,i){const s=i!=null?i.signal:null,{apiKey:p,collectionId:l,customParameters:a,fields:n,geometryType:T,hasZ:$,objectIdField:D,timeInfo:j,url:P}=e,E={fields:n?.map(u=>u.toJSON()),geometryType:L.toJSON(T),hasZ:$??!1,objectIdField:D,timeInfo:j?.toJSON()},c={apiKey:p,customParameters:a,signal:s},m=await se(P,c),[v,S]=await Promise.all([pe(m,c),ne(m,c)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new w("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=S.collections.find(u=>u.id===l);if(!y)throw new w("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await ae(m,c):null,C=await le(y,E,c),q=this._getMaxRecordCount(_),M=this._getCapabilities(C.hasZ,q),A=this._getStorageSpatialReference(y).toJSON(),G=this._getSupportedSpatialReferences(y,S),Q=new RegExp(`^${ue}`,"i"),f={};for(const u of G){const h=I(u);h!=null&&(f[h]||(f[h]=u.replace(Q,"")))}this.featureDefinition={capabilities:M,collection:y,layerDefinition:C,spatialReference:A,supportedCrs:f}}};t([o()],d.prototype,"featureDefinition",void 0),t([o({constructOnly:!0})],d.prototype,"layer",void 0),t([o()],d.prototype,"type",void 0),d=t([O("esri.layers.graphics.sources.OGCFeatureSource")],d);const Fe=xe();let r=class extends ce(me(he(fe(ye(ge(Ce(Se(J(ve(N(H(te)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}on(e,i){return super.on(e,i)}createPopupTemplate(e){return Ie(this,e)}createQuery(){return new F}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,i){let s,p=!1;const l=i?.feature?.attributes,a=this.typeIdField&&l?.[this.typeIdField];return a!=null&&this.types&&(p=this.types.some(n=>n.id==a&&(s=n.domains?.[e],s?.type==="inherited"&&(s=this._getLayerDomain(e)),!0))),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,i){return this.load().then(()=>this.source.queryFeatures(F.from(e)||this.createQuery(),i)).then(s=>(s?.features?.forEach(p=>{p.layer=p.sourceLayer=this}),s))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),x(this.renderer,this.fieldsIndex),U(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const i of this.fields)if(i.name===e&&i.domain)return i.domain;return null}};t([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),t([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),t([o({type:String})],r.prototype,"copyright",void 0),t([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),t([o({type:String})],r.prototype,"definitionExpression",void 0),t([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),t([o({type:String})],r.prototype,"displayField",void 0),t([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),t([o(Z)],r.prototype,"elevationInfo",void 0),t([o({type:[k],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),t([o(Fe.fieldsIndex)],r.prototype,"fieldsIndex",void 0),t([o({readOnly:!0,type:z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),t([o({type:b.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:b.read}}}}})],r.prototype,"geometryType",void 0),t([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),t([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),t([o({type:[be],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Re},write:!0}}}})],r.prototype,"labelingInfo",void 0),t([o(V)],r.prototype,"labelsVisible",void 0),t([o(W)],r.prototype,"legendEnabled",void 0),t([o({type:Number})],r.prototype,"maxRecordCount",void 0),t([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),t([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),t([o(K)],r.prototype,"popupEnabled",void 0),t([o({type:Y,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),t([o({types:re,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:oe,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),t([o(X)],r.prototype,"screenSizePerspectiveEnabled",void 0),t([o({readOnly:!0})],r.prototype,"source",void 0),t([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),t([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),t([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),t([o({type:[we]})],r.prototype,"types",void 0),t([o(ee)],r.prototype,"url",void 0),r=t([O("esri.layers.OGCFeatureLayer")],r);const yt=r;export{yt as default};
