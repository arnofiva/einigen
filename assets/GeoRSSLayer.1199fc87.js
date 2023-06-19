import{dO as n,dP as y,dQ as p,pi as u,dR as d,bZ as h,hr as c,e9 as m,e as o,y as s,L as S,Y as f,dZ as v,e0 as g,en as b,a as C,bJ as a,bS as G,sH as P,bT as R,S as _,v as w}from"./index.da161cf1.js";import{a as x}from"./BlendLayer.eacc4944.js";import{j}from"./PortalLayer.9c2e677f.js";import{t as k}from"./ScaleRangeLayer.1a5bb9a6.js";import"./jsonUtils.1c231e28.js";import"./portalItemUtils.ea6f2bf4.js";const F=["atom","xml"],$={base:a,key:"type",typeMap:{"simple-line":G},errorContext:"symbol"},E={base:a,key:"type",typeMap:{"picture-marker":P,"simple-marker":R},errorContext:"symbol"},L={base:a,key:"type",typeMap:{"simple-fill":_},errorContext:"symbol"};let t=class extends x(n(y(j(k(p(w)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&l.outline?.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?u(this.url,F)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(d).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await h(m.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:c(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){return this.featureCollections?.some(r=>r.featureSet?.geometryType===e&&r.featureSet.features?.length>0)??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([S("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:f,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(v)],t.prototype,"id",void 0),o([s(g)],t.prototype,"legendEnabled",void 0),o([s({types:$,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:L,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(b)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([C("esri.layers.GeoRSSLayer")],t);const Z=t;export{Z as default};
