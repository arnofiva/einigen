var h=Object.defineProperty;var p=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))c.call(t,o)&&u(e,o,t[o]);if(p)for(var o of p(t))m.call(t,o)&&u(e,o,t[o]);return e};import{r8 as S,ra as v,mx as g,my as f,r9 as b,mz as C,E as G,mP as w,r as x,mB as P,bs as _,rs as R,oq as k,a as s,d as i,d6 as E,ap as F,rg as $,rt as j,mE as M,n as L,g8 as n,ru as O,rv as T,rw as D,S as U}from"./vendor.fd144a9e.js";const q=["atom","xml"],z={base:n,key:"type",typeMap:{"simple-line":O},errorContext:"symbol"},A={base:n,key:"type",typeMap:{"picture-marker":T,"simple-marker":D},errorContext:"symbol"},B={base:n,key:"type",typeMap:{"simple-fill":U},errorContext:"symbol"};let r=class extends S(v(g(f(b(C(G)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return typeof e=="string"?d({url:e},t):e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach(o=>{var a;const l=o.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)==null?void 0:a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?w(this.url,q)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=x(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(P).then(()=>this._fetchService(t)).then(o=>{this.read(o,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var l;const t=this.spatialReference,{data:o}=await _(k.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:R(t)?void 0:(l=t.wkid)!=null?l:JSON.stringify(t)},signal:e});return o}_hasGeometry(e){var t,o;return(o=(t=this.featureCollections)==null?void 0:t.some(l=>{var a,y;return((a=l.featureSet)==null?void 0:a.geometryType)===e&&((y=l.featureSet.features)==null?void 0:y.length)>0}))!=null?o:!1}};s([i()],r.prototype,"description",void 0),s([i()],r.prototype,"featureCollections",void 0),s([E("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),s([i({type:F,json:{name:"lookAtExtent"}})],r.prototype,"fullExtent",void 0),s([i($)],r.prototype,"id",void 0),s([i(j)],r.prototype,"legendEnabled",void 0),s([i({types:z,json:{write:!0}})],r.prototype,"lineSymbol",void 0),s([i({type:["show","hide"]})],r.prototype,"listMode",void 0),s([i({types:A,json:{write:!0}})],r.prototype,"pointSymbol",void 0),s([i({types:B,json:{write:!0}})],r.prototype,"polygonSymbol",void 0),s([i({type:["GeoRSS"]})],r.prototype,"operationalLayerType",void 0),s([i(M)],r.prototype,"url",void 0),s([i({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],r.prototype,"title",null),s([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),r=s([L("esri.layers.GeoRSSLayer")],r);const N=r;export{N as default};
