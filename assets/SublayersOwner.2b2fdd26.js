var ie=Object.defineProperty,se=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var W=(r,e,t)=>e in r?ie(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,w=(r,e)=>{for(var t in e||(e={}))le.call(e,t)&&W(r,t,e[t]);if(Q)for(var t of Q(e))oe.call(e,t)&&W(r,t,e[t]);return r},T=(r,e)=>se(r,ae(e));import{a,d as o,d6 as S,ap as Y,rg as ne,df as ye,bF as pe,n as U,s9 as ue,bs as Z,bI as de,a7 as ce,ab as ee,bQ as fe,mz as he,k as be,d9 as ge,N as L,hC as y,pP as me,r as G,da as Se,sa as Ie,oE as ve,sb as R,s5 as we,I as k,mC as Ee,rr as F,dc as Le,H as K,eJ as _,hu as xe,gb as Oe,sc as De,d7 as j,rF as Te,fg as E,dg as _e,rI as Pe,de as Fe,qT as H,hx as X,jf as Me,rL as Ae,fH as A,ix as je,B as Ce,U as Ve,sd as Ne}from"./vendor.fd144a9e.js";import{t as $e}from"./sublayerUtils.36182229.js";const Qe=r=>{let e=class extends r{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(t,i){var J,q;const s=i.capabilities&&i.capabilities.split(",").map(te=>te.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const n=this.type,p=s.includes("data"),d=s.includes("query"),h=s.includes("map"),I=!!i.exportTilesAllowed,b=s.includes("tilemap"),m=n!=="tile"&&!!i.supportsDynamicLayers,g=n!=="tile"&&(!i.tileInfo||m),x=n!=="tile"&&(!i.tileInfo||m),u=n!=="tile",c=i.cimVersion&&ue.parse(i.cimVersion),O=(J=c==null?void 0:c.since(1,4))!=null?J:!1,D=(q=c==null?void 0:c.since(2,0))!=null?q:!1;return{operations:{supportsExportMap:h,supportsExportTiles:I,supportsIdentify:d,supportsQuery:p,supportsTileMap:b},exportMap:h?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:u,supportsDynamicLayers:m,supportsSublayerVisibility:g,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:D}:null,exportTiles:I?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(t,i){return await this.fetchAllLayersAndTables(i),this._allLayersAndTablesMap.get(t)}async fetchAllLayersAndTables(t){await this.load(t),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Z(de(this.url).path+"/layers",{responseType:"json",query:T(w({f:"json"},this.customParameters),{token:this.apiKey})}).then(s=>{this._allLayersAndTablesMap=new Map;for(const n of s.data.layers)this._allLayersAndTablesMap.set(n.id,n);return{result:s.data}},s=>({error:s})));const i=await this._allLayersAndTablesPromise;if(ce(t),"result"in i)return i.result;throw i.error}};return a([o({readOnly:!0})],e.prototype,"capabilities",void 0),a([S("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),a([o({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),a([o({type:Y})],e.prototype,"fullExtent",void 0),a([o(ne)],e.prototype,"id",void 0),a([o({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),a([o(ye)],e.prototype,"popupEnabled",void 0),a([o({type:pe})],e.prototype,"spatialReference",void 0),a([o({readOnly:!0})],e.prototype,"version",void 0),a([S("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=a([U("esri.layers.mixins.ArcGISMapService")],e),e};var M;function C(r){return r&&r.type==="esriSMS"}function V(r,e,t){var s;const i=this.originIdOf(e)>=A(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&((s=t.layer)==null?void 0:s.type)==="map-image"&&(t.writeSublayerStructure||i)}}function z(r,e,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&this._isOverridden(e)}}function f(r,e,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function P(r,e,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(e)>=A(t.origin))}}const N=ee.getLogger("esri.layers.support.Sublayer");let Re=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let l=M=class extends fe(he(be(ge))){constructor(r){super(r),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(r){return this.addResolvingPromise((async()=>{var t,i;if(!this.layer&&!this.url)throw new L("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let e=null;if(!this.layer||this.originIdOf("url")>y.SERVICE||((t=this.source)==null?void 0:t.type)==="data-layer")e=(await Z(this.url,w({responseType:"json",query:{f:"json"}},r))).data;else{let s=this.id;((i=this.source)==null?void 0:i.type)==="map-layer"&&(s=this.source.mapLayerId),e=await this.layer.fetchSublayerInfo(s,r)}e&&(this.sourceJSON=e,this.read({layerDefinition:e},{origin:"service"}))})()),this}readCapabilities(r,e){const t=(r=(e=e.layerDefinition||e).capabilities||r)?r.toLowerCase().split(",").map(n=>n.trim()):[],i=this.url?me(this.url):null,s=t.includes(G(i)&&i.serverType==="MapServer"?"data":"query");return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:s}}}set definitionExpression(r){this._setAndNotifyLayer("definitionExpression",r)}get fieldsIndex(){return new Se(this.fields||[])}set floorInfo(r){this._setAndNotifyLayer("floorInfo",r)}readGlobalIdFieldFromService(r,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){const r=this._get("id");return r==null?Re++:r}set id(r){this._get("id")!==r&&(this.get("layer.capabilities.exportMap.supportsDynamicLayers")!==!1?this._set("id",r):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(r){this._setAndNotifyLayer("labelingInfo",r)}writeLabelingInfo(r,e,t,i){r&&r.length&&(e.layerDefinition={drawingInfo:{labelingInfo:r.map(s=>s.write({},i))}})}set labelsVisible(r){this._setAndNotifyLayer("labelsVisible",r)}set layer(r){this._set("layer",r),this.sublayers&&this.sublayers.forEach(e=>e.layer=r)}set listMode(r){this._set("listMode",r)}set minScale(r){this._setAndNotifyLayer("minScale",r)}readMinScale(r,e){return e.minScale||e.layerDefinition&&e.layerDefinition.minScale||0}set maxScale(r){this._setAndNotifyLayer("maxScale",r)}readMaxScale(r,e){return e.maxScale||e.layerDefinition&&e.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:r,maxScale:e}=this;return{minScale:r,maxScale:e}}readObjectIdFieldFromService(r,e){if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(r){this._setAndNotifyLayer("opacity",r)}readOpacity(r,e){const t=e.layerDefinition;return 1-.01*(t.transparency!=null?t.transparency:t.drawingInfo.transparency)}writeOpacity(r,e,t,i){e.layerDefinition={drawingInfo:{transparency:100-100*r}}}writeParent(r,e){this.parent&&this.parent!==this.layer?e.parentLayerId=Ie(this.parent.id):e.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){if(r){for(const e of r.getSymbols())if(ve(e)){N.warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",r)}get source(){return this._get("source")||new R({mapLayerId:this.id})}set source(r){this._setAndNotifyLayer("source",r)}set sublayers(r){this._handleSublayersChange(r,this._get("sublayers")),this._set("sublayers",r)}castSublayers(r){return we(k.ofType(M),r)}writeSublayers(r,e,t){this.get("sublayers.length")&&(e[t]=this.sublayers.map(i=>i.id).toArray().reverse())}readTypeIdField(r,e){let t=(e=e.layerDefinition||e).typeIdField;if(t&&e.fields){t=t.toLowerCase();const i=e.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return null}get url(){var i,s;const r=(s=(i=this.layer)==null?void 0:i.parsedUrl)!=null?s:this._lastParsedUrl,e=this.source;if(!r)return null;if(this._lastParsedUrl=r,(e==null?void 0:e.type)==="map-layer")return`${r.path}/${e.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${Ee(t)}`}set url(r){r?this._override("url",r):this._clearOverride("url")}set visible(r){this._setAndNotifyLayer("visible",r)}writeVisible(r,e,t,i){e[t]=this.getAtOrigin("defaultVisibility","service")||r}clone(){const{store:r}=F(this),e=new M;return F(e).store=r.clone(v),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(r){return Le(this,r)}createQuery(){return new K({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var t,i;if(this.hasOwnProperty("sublayers"))return null;const r=(t=this.layer)==null?void 0:t.parsedUrl,e=new(await import("./vendor.fd144a9e.js").then(function(s){return s.tX})).default({url:r.path});return r&&this.source&&(this.source.type==="map-layer"?e.layerId=this.source.mapLayerId:e.dynamicDataSource=this.source),this.layer.refreshInterval!=null&&(e.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(e.definitionExpression=this.definitionExpression),this.floorInfo&&(e.floorInfo=_(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(e.labelingInfo=_(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(e.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(e.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(e.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(e.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(e.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(e.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(e.popupTemplate=_(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(e.renderer=_(this.renderer)),((i=this.source)==null?void 0:i.type)==="data-layer"&&(e.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(e.title=this.title),this.layer.type==="map-image"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(e.customParameters=this.layer.customParameters),this.layer.type==="tile"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(e.customParameters=this.layer.customParameters),e}getField(r){return this.fieldsIndex.get(r)}getFeatureType(r){const{typeIdField:e,types:t}=this;if(!e||!r)return null;const i=r.attributes?r.attributes[e]:void 0;if(i==null)return null;let s=null;return t.some(n=>{const{id:p}=n;return p!=null&&(p.toString()===i.toString()&&(s=n),!!s)}),s}getFieldDomain(r,e){const t=e&&e.feature,i=this.getFeatureType(t);if(i){const s=i.domains&&i.domains[r];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(r)}async queryFeatures(r=this.createQuery(),e){var p,d,h,I,b,m;if(await this.load(),!((d=(p=this.capabilities)==null?void 0:p.operations)==null?void 0:d.supportsQuery))throw new L("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:t},{default:i}]=await Promise.all([import("./vendor.fd144a9e.js").then(function(g){return g.tU}),import("./vendor.fd144a9e.js").then(function(g){return g.tV})]),s=await t(this.url,K.from(r),(I=(h=this.layer)==null?void 0:h.spatialReference)!=null?I:null,T(w({},e),{query:T(w({},(b=this.layer)==null?void 0:b.customParameters),{token:(m=this.layer)==null?void 0:m.apiKey})})),n=i.fromJSON(s.data);if(n==null?void 0:n.features)for(const g of n.features)g.sourceLayer=this;return n}toExportImageJSON(r){var n;const e={id:this.id,source:((n=this.source)==null?void 0:n.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},t=xe(r,this.definitionExpression);G(t)&&(e.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((p,d)=>(p[d]=this.originIdOf(d),p),{});if(Object.keys(i).some(p=>i[p]>y.SERVICE)){const p=e.drawingInfo={};i.renderer>y.SERVICE&&(p.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(p.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE&&(p.labelingInfo=this.labelingInfo?this.labelingInfo.map(d=>d.write({},{origin:"service",layer:this.layer})):null,p.showLabels=!0),i.opacity>y.SERVICE&&(p.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(p.renderer)}return e}_assignDefaultSymbolColors(r){this._forEachSimpleMarkerSymbols(r,e=>{e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(r,e){if(r){const t="uniqueValueInfos"in r?r.uniqueValueInfos:"classBreakInfos"in r?r.classBreakInfos:[];for(const i of t)C(i.symbol)&&e(i.symbol);"symbol"in r&&C(r.symbol)&&e(r.symbol),"defaultSymbol"in r&&C(r.defaultSymbol)&&e(r.defaultSymbol)}}_setAndNotifyLayer(r,e){const t=this.layer,i=this._get(r);let s,n;switch(r){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",n="supportsModification"}const p=F(this).getDefaultOrigin();if(p!=="service"){if(s&&this.get(`layer.capabilities.exportMap.${s}`)===!1)return void this._logLockedError(r,`capability not available 'layer.capabilities.exportMap.${s}'`);if(n&&this.get(`capabilities.exportMap.${n}`)===!1)return void this._logLockedError(r,`capability not available 'capabilities.exportMap.${n}'`)}r!=="source"||this.loadStatus==="not-loaded"?(this._set(r,e),p!=="service"&&i!==e&&t&&t.emit&&t.emit("sublayer-update",{propertyName:r,target:this})):this._logLockedError(r,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(r,e){e&&(e.forEach(t=>{t.parent=null,t.layer=null}),this.handles.removeAll()),r&&(r.forEach(t=>{t.parent=this,t.layer=this.layer}),this.handles.add([r.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),r.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),r.on("before-changes",t=>{const i=this.get("layer.capabilities.exportMap.supportsSublayersChanges");i==null||i||(N.error(new L("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(r,e){N.error(new L("sublayer:locked",`Property '${String(r)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:e,sublayer:this,layer:this.layer}))}_getLayerDomain(r){const e=this.fieldsIndex.get(r);return e?e.domain:null}};l.test={isMapImageLayerOverridePolicy:r=>r===f||r===V,isTileImageLayerOverridePolicy:r=>r===z},a([o({readOnly:!0})],l.prototype,"capabilities",void 0),a([S("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],l.prototype,"readCapabilities",null),a([o({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:V}}})],l.prototype,"definitionExpression",null),a([o({type:[Oe],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],l.prototype,"fields",void 0),a([o({readOnly:!0})],l.prototype,"fieldsIndex",null),a([o({type:De,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:V},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"floorInfo",null),a([o({type:Y,json:{read:{source:"layerDefinition.extent"}}})],l.prototype,"fullExtent",void 0),a([o({type:String})],l.prototype,"globalIdField",void 0),a([S("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],l.prototype,"readGlobalIdFieldFromService",null),a([o({type:j,json:{write:{ignoreOrigin:!0}}})],l.prototype,"id",null),a([o({value:null,type:[Te],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:f}}})],l.prototype,"labelingInfo",null),a([E("labelingInfo")],l.prototype,"writeLabelingInfo",null),a([o({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:f}}})],l.prototype,"labelsVisible",null),a([o({value:null})],l.prototype,"layer",null),a([o({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:P}}})],l.prototype,"legendEnabled",void 0),a([o({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],l.prototype,"listMode",null),a([o({type:Number,value:0,json:{write:{overridePolicy:f}}})],l.prototype,"minScale",null),a([S("minScale",["minScale","layerDefinition.minScale"])],l.prototype,"readMinScale",null),a([o({type:Number,value:0,json:{write:{overridePolicy:f}}})],l.prototype,"maxScale",null),a([S("maxScale",["maxScale","layerDefinition.maxScale"])],l.prototype,"readMaxScale",null),a([o({readOnly:!0})],l.prototype,"effectiveScaleRange",null),a([o({type:String})],l.prototype,"objectIdField",void 0),a([S("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],l.prototype,"readObjectIdFieldFromService",null),a([o({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:f}}})],l.prototype,"opacity",null),a([S("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],l.prototype,"readOpacity",null),a([E("opacity")],l.prototype,"writeOpacity",null),a([o({json:{type:j,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:f}}})],l.prototype,"parent",void 0),a([E("parent")],l.prototype,"writeParent",null),a([o({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(r,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:P,writer(r,e,t){e[t]=!r}}}})],l.prototype,"popupEnabled",void 0),a([o({type:_e,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:P}}})],l.prototype,"popupTemplate",void 0),a([o({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),a([o({types:Pe,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:f},origins:{"web-scene":{types:Fe,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:f}}}}})],l.prototype,"renderer",null),a([o({types:{key:"type",base:null,typeMap:{"data-layer":H,"map-layer":R}},cast(r){if(r){if("mapLayerId"in r)return X(R,r);if("dataSource"in r)return X(H,r)}return r},json:{name:"layerDefinition.source",write:{overridePolicy:f}}})],l.prototype,"source",null),a([o()],l.prototype,"sourceJSON",void 0),a([o({value:null,json:{type:[j],write:{target:"subLayerIds",allowNull:!0,overridePolicy:f}}})],l.prototype,"sublayers",null),a([Me("sublayers")],l.prototype,"castSublayers",null),a([E("sublayers")],l.prototype,"writeSublayers",null),a([o({type:String,json:{name:"name",write:{overridePolicy:P}}})],l.prototype,"title",void 0),a([o({type:String})],l.prototype,"typeIdField",void 0),a([S("typeIdField",["layerDefinition.typeIdField"])],l.prototype,"readTypeIdField",null),a([o({type:[Ae],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],l.prototype,"types",void 0),a([o({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:z}}})],l.prototype,"url",null),a([o({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:f}}})],l.prototype,"visible",null),a([E("visible")],l.prototype,"writeVisible",null),l=M=a([U("esri.layers.support.Sublayer")],l);const B=l,Ue=ee.getLogger("esri.layers.TileLayer");function ke(r,e){const t=[],i={};return r&&r.forEach(s=>{const n=new B;if(n.read(s,e),i[n.id]=n,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(n)}else t.unshift(n)}),t}const $=k.ofType(B);function re(r,e){r&&r.forEach(t=>{e(t),t.sublayers&&t.sublayers.length&&re(t.sublayers,e)})}const We=r=>{let e=class extends r{constructor(...t){super(...t),this.allSublayers=new je({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{}},this.own(Ce(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),Ve))}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:s}=this,n=A(i.origin);if(n<y.SERVICE||(s[n]={context:i,visibleLayers:t.visibleLayers||s[n].visibleLayers,layers:t.layers||s[n].layers},n>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:d}=this.createSublayersForOrigin("web-document"),h=F(this);h.setDefaultOrigin(d),this._set("sublayers",new $(p)),h.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=A(t==="web-document"?"web-map":t);let s=y.SERVICE,n=this.sublayersSourceJSON[y.SERVICE].layers,p=this.sublayersSourceJSON[y.SERVICE].context,d=null;const h=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(u=>u<=i);for(const u of h){const c=this.sublayersSourceJSON[u];$e(c.layers)&&(s=u,n=c.layers,p=c.context,c.visibleLayers&&(d={visibleLayers:c.visibleLayers,context:c.context}))}const I=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(u=>u>s&&u<=i);let b=null;for(const u of I){const{layers:c,visibleLayers:O,context:D}=this.sublayersSourceJSON[u];c&&(b={layers:c,context:D}),O&&(d={visibleLayers:O,context:D})}const m=ke(n,p),g=new Map,x=new Set;if(b)for(const u of b.layers)g.set(u.id,u);if(d)for(const u of d.visibleLayers)x.add(u);return re(m,u=>{b&&u.read(g.get(u.id),b.context),d&&u.read({defaultVisibility:x.has(u.id)},d.context)}),{origin:Ne(s),sublayers:new $({items:m})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.handles.remove("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.handles.add([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.handles.add(t.on("before-changes",s=>{Ue.error(new L("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([o({readOnly:!0})],e.prototype,"allSublayers",void 0),a([o({readOnly:!0,type:k.ofType(B)})],e.prototype,"serviceSublayers",void 0),a([o({value:null,type:$,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),a([o({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),e=a([U("esri.layers.mixins.SublayersOwner")],e),e};export{We as E,B as X,Qe as y};
