import{e as t,y as s,a as n,H as u,X as p,V as O,G as Q,sz as W,hC as Z,dJ as D,dK as Y,au as v,bZ as ee,dP as te,dQ as re,lu as se,a3 as P,dT as ie,dR as oe,sA as le,L as K,sB as ne,e0 as ae,gy as pe,ej as ye,I as ue,v as de}from"./index.da161cf1.js";import{C as V}from"./BuildingComponentSublayer.2fceafa3.js";import{d}from"./BuildingGroupSublayer.d2b758b8.js";import{i as ce}from"./APIKeyMixin.605900a3.js";import{l as me}from"./ArcGISService.116191b2.js";import{j as he}from"./PortalLayer.9c2e677f.js";import{t as fe}from"./ScaleRangeLayer.1a5bb9a6.js";import{N as ge,K as q}from"./SceneService.40f5c1fa.js";import{i as ve}from"./FetchAssociatedFeatureLayer.f41666d0.js";import"./UniqueValueRenderer.0143139a.js";import"./ColorStop.f762bde8.js";import"./diffUtils.f0876598.js";import"./colorRamps.80cb140e.js";import"./jsonUtils.4745b876.js";import"./DictionaryLoader.90c8c47c.js";import"./FieldsIndex.09813895.js";import"./heatmapUtils.32e9a30b.js";import"./FeatureLayer.6ea98f03.js";import"./sql.414b1952.js";import"./FeatureLayerBase.07ef7e55.js";import"./featureLayerUtils.0566dc37.js";import"./AttachmentQuery.c430db32.js";import"./Query.e586665e.js";import"./RelationshipQuery.60e2b826.js";import"./serviceCapabilitiesUtils.c358c66d.js";import"./editsZScale.58b9a03e.js";import"./queryZScale.2643e684.js";import"./FeatureSet.97dc0f24.js";import"./BlendLayer.eacc4944.js";import"./jsonUtils.1c231e28.js";import"./CustomParametersMixin.244652a9.js";import"./EditBusLayer.3831f0f2.js";import"./FeatureEffectLayer.a9b039ed.js";import"./FeatureEffect.ee83c7e0.js";import"./FeatureFilter.97dd33dd.js";import"./FeatureReductionLayer.9f7296a1.js";import"./LabelClass.1c6b8047.js";import"./defaults.83793da7.js";import"./defaultsJSON.a416f32c.js";import"./OrderedLayer.bbc75e49.js";import"./TemporalLayer.5874b62b.js";import"./FeatureTemplate.c7eaa370.js";import"./FeatureType.4659b5f1.js";import"./fieldProperties.174d0f24.js";import"./labelingInfo.990e68e3.js";import"./versionUtils.05c8a355.js";import"./styleUtils.a985c9a8.js";import"./TopFeaturesQuery.165d1927.js";import"./popupUtils.f5ffced0.js";import"./portalItemUtils.ea6f2bf4.js";import"./capabilities.e8ada26d.js";import"./I3SIndexInfo.9cdb77bc.js";import"./I3SLayerDefinitions.0628cd13.js";import"./I3SUtil.1e24f8d3.js";import"./I3SBinaryReader.f09861ac.js";import"./popupUtils.5174221c.js";let b=class extends u{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],b.prototype,"type",void 0),b=t([n("esri.layers.support.BuildingFilterAuthoringInfo")],b);const U=b;var T;let m=T=class extends u{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new T({filterType:this.filterType,filterValues:p(this.filterValues)})}};t([s({type:String,json:{write:!0}})],m.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],m.prototype,"filterValues",void 0),m=T=t([n("esri.layers.support.BuildingFilterAuthoringInfoType")],m);const be=m;var F;const Se=O.ofType(be);let S=F=class extends u{clone(){return new F({filterTypes:p(this.filterTypes)})}};t([s({type:Se,json:{write:!0}})],S.prototype,"filterTypes",void 0),S=F=t([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],S);const we=S;var _;const $e=O.ofType(we);let h=_=class extends U{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _({filterBlocks:p(this.filterBlocks)})}};t([s({type:["checkbox"]})],h.prototype,"type",void 0),t([s({type:$e,json:{write:!0}})],h.prototype,"filterBlocks",void 0),h=_=t([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],h);const C=h;let w=class extends u{};t([s({readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),w=t([n("esri.layers.support.BuildingFilterMode")],w);const j=w;var A;let $=A=class extends j{constructor(){super(...arguments),this.type="solid"}clone(){return new A}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],$.prototype,"type",void 0),$=A=t([n("esri.layers.support.BuildingFilterModeSolid")],$);const E=$;var k;let f=k=class extends j{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new k({edges:p(this.edges)})}};t([Q({wireFrame:"wire-frame"})],f.prototype,"type",void 0),t([s(W)],f.prototype,"edges",void 0),f=k=t([n("esri.layers.support.BuildingFilterModeWireFrame")],f);const J=f;var L;let x=L=class extends j{constructor(){super(...arguments),this.type="x-ray"}clone(){return new L}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),x=L=t([n("esri.layers.support.BuildingFilterModeXRay")],x);const H=x;var N;const xe={nonNullable:!0,types:{key:"type",base:j,typeMap:{solid:E,"wire-frame":J,"x-ray":H}},json:{read:e=>{switch(e&&e.type){case"solid":return E.fromJSON(e);case"wireFrame":return J.fromJSON(e);case"x-ray":return H.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let c=N=class extends u{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new E,this.title=""}clone(){return new N({filterExpression:this.filterExpression,filterMode:p(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"filterExpression",void 0),t([s(xe)],c.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"title",void 0),c=N=t([n("esri.layers.support.BuildingFilterBlock")],c);const Oe=c;var R;const je=O.ofType(Oe);let y=R=class extends u{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Z(),this.name=null}clone(){return new R({description:this.description,filterBlocks:p(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:p(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],y.prototype,"description",void 0),t([s({type:je,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:U,typeMap:{checkbox:C}},json:{read:e=>(e&&e.type)==="checkbox"?C.fromJSON(e):null,write:!0}})],y.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"name",void 0),y=R=t([n("esri.layers.support.BuildingFilter")],y);const Be=y;let a=class extends u{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],a.prototype,"fieldName",void 0),t([s({type:String})],a.prototype,"modelName",void 0),t([s({type:String})],a.prototype,"label",void 0),t([s({type:Number})],a.prototype,"min",void 0),t([s({type:Number})],a.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],a.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],a.prototype,"subLayerIds",void 0),a=t([n("esri.layers.support.BuildingFieldStatistics")],a);let g=class extends D.LoadableMixin(Y(u)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(v.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await ee(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],g.prototype,"url",void 0),t([s({readOnly:!0,type:[a],json:{read:{source:"summary"}}})],g.prototype,"fields",null),g=t([n("esri.layers.support.BuildingSummaryStatistics")],g);const z=g,X=O.ofType(Be),G=p(d.sublayersProperty),I=G.json?.origins;I&&(I["web-scene"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},I["portal-item"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let o=class extends ge(me(te(he(fe(re(ce(de))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new se({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new X,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,i){const l=d.readSublayers(e,r,i);return d.forEachSublayer(l,B=>B.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(l,this._sublayerOverrides),this._sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:i}){d.forEachSublayer(e,l=>l.read(r.get(l.id),i))}readSublayerOverrides(e,r){const i=new Map;for(const l of e)l!=null&&typeof l=="object"&&typeof l.id=="number"?i.set(l.id,l):r.messages?.push(new P("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:l}));return{overrides:i,context:r}}writeSublayerOverrides(e,r,i){const l=[];d.forEachSublayer(this.sublayers,B=>{const M=B.write({},i);Object.keys(M).length>1&&l.push(M)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(i=>{r.sublayers.push(p(i))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this._sublayerOverrides=i}}readSummaryStatistics(e,r){if(typeof r.statisticsHRef=="string"){const i=ie(this.parsedUrl?.path,r.statisticsHRef);return new z({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(oe).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return le(this,e=>{d.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(q.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(q.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new P("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&v.getLogger(this).warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&v.getLogger(this).warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const r=new ve(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await r.fetchPortalItem()}catch(i){v.getLogger(this).warn("Associated feature service item could not be loaded",i)}}};t([s({type:["BuildingSceneLayer"]})],o.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],o.prototype,"allSublayers",void 0),t([s(G)],o.prototype,"sublayers",void 0),t([K("service","sublayers")],o.prototype,"readSublayers",null),t([s({type:X,nonNullable:!0,json:{write:!0}})],o.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],o.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:z})],o.prototype,"summaryStatistics",void 0),t([K("summaryStatistics",["statisticsHRef"])],o.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],o.prototype,"outFields",void 0),t([s(ne)],o.prototype,"fullExtent",void 0),t([s(ae)],o.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),t([s(pe(ue))],o.prototype,"spatialReference",void 0),t([s(ye)],o.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([s()],o.prototype,"associatedFeatureServiceItem",void 0),o=t([n("esri.layers.BuildingSceneLayer")],o);const Ft=o;export{Ft as default};