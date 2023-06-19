import{dP as m,dQ as g,p7 as w,hK as f,a3 as T,dR as S,bZ as n,p8 as b,p9 as _,cd as d,al as c,e as o,y as s,L as h,ek as $,en as I,a as O,v as E}from"./index.da161cf1.js";import{p as L}from"./ArcGISCachedService.92b623b2.js";import{l as j}from"./ArcGISService.116191b2.js";import{j as D}from"./PortalLayer.9c2e677f.js";import"./TileInfoTilemapCache.01f05855.js";import"./TilemapCache.dd73177a.js";import"./portalItemUtils.ea6f2bf4.js";let i=class extends L(j(m(D(g(E))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=w()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=f(this._lercDecoder)}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map(a=>a.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let a=0;a<t.typeKeywords.length;a++)if(t.typeKeywords[a].toLowerCase()==="elevation 3d layer")return!0;throw new T("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(S).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,a){const l=(a=a||{signal:null}).signal!=null?a.signal:a.signal=new AbortController().signal,u={responseType:"array-buffer",signal:l},v={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,a)).then(()=>n(this.getTileUrl(e,r,t),u)).then(p=>this._lercDecoder.decode(p.data,v,l)).then(p=>new b(p))}getTileUrl(e,r,t){const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=_({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${l?"?"+l:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery.e9c2bde7.js"),["assets/ElevationQuery.e9c2bde7.js","assets/index.da161cf1.js","assets/index.8db76e31.css"]);return c(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery.e9c2bde7.js"),["assets/ElevationQuery.e9c2bde7.js","assets/index.da161cf1.js","assets/index.8db76e31.css"]);return c(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await n(this.parsedUrl.path,r);t.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[y]}};o([s({readOnly:!0})],i.prototype,"capabilities",void 0),o([h("service","capabilities",["capabilities"])],i.prototype,"readCapabilities",null),o([s({json:{read:{source:"copyrightText"}}})],i.prototype,"copyright",void 0),o([s({readOnly:!0,type:$})],i.prototype,"heightModelInfo",void 0),o([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),o([s({type:["show","hide"]})],i.prototype,"listMode",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"minScale",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"maxScale",void 0),o([s({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),o([s({type:["ArcGISTiledElevationServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([s()],i.prototype,"sourceJSON",void 0),o([s({json:{read:!1},value:"elevation",readOnly:!0})],i.prototype,"type",void 0),o([s(I)],i.prototype,"url",void 0),o([s()],i.prototype,"version",void 0),o([h("version",["currentVersion"])],i.prototype,"readVersion",null),i=o([O("esri.layers.ElevationLayer")],i);const y=Symbol("default-fetch-tile");i.prototype.fetchTile[y]=!0;const q=i;export{q as default};