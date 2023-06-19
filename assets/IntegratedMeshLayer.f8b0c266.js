var O=Object.defineProperty,$=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var f=(e,t,i)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,a=(e,t)=>{for(var i in t||(t={}))I.call(t,i)&&f(e,i,t[i]);if(u)for(var i of u(t))A.call(t,i)&&f(e,i,t[i]);return e},p=(e,t)=>$(e,x(t));import{m8 as L,I as N,bI as b,bs as M,aK as g,a as s,d as r,n as S,mw as U,mx as j,my as K,r9 as D,mz as J,rc as V,E as P,u as z,az as E,U as R,oA as B,mB as C,r as F,t as k,N as l,d6 as q,rf as G}from"./vendor.fd144a9e.js";import{w as H}from"./persistable.594db77c.js";import{A as Q,K as v}from"./SceneService.71ff7b38.js";import{s as W,l as X,u as Y,m as Z}from"./I3SLayerDefinitions.db7355f9.js";import{f as c}from"./SceneModification.80278208.js";import"./I3SIndexInfo.ba498bb1.js";var n;let d=n=class extends L(N.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new n({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(t=>!!t.geometry)}static fromJSON(e,t){const i=new n;for(const y of e)i.add(c.fromJSON(y,t));return i}static async fromUrl(e,t,i){const y={url:b(e),origin:"service"},T=await M(e,{responseType:"json",signal:g(i,"signal")}),_=t.toJSON(),h=[];for(const m of T.data)h.push(c.fromJSON(p(a({},m),{geometry:p(a({},m.geometry),{spatialReference:_})}),y));return new n({url:e,items:h})}};s([r({type:String})],d.prototype,"url",void 0),d=n=s([S("esri.layers.support.SceneModifications")],d);const w=d;let o=class extends Q(U(j(K(D(J(V(P))))))){constructor(...e){super(...e),this._handles=new z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(E(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,R))}normalizeCtorArgs(e,t){return typeof e=="string"?a({url:e},t):e}readModifications(e,t,i){this._modificationsSource={url:B(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=g(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(i){C(i)}if(await this._fetchService(t),F(this._modificationsSource)){const i=await w.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",i,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!k(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(v.SAVE_AS,p(a({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new l("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};s([r({type:String,readOnly:!0})],o.prototype,"geometryType",void 0),s([r({type:["show","hide"]})],o.prototype,"listMode",void 0),s([r({type:["IntegratedMeshLayer"]})],o.prototype,"operationalLayerType",void 0),s([r({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([r({type:W,readOnly:!0})],o.prototype,"nodePages",void 0),s([r({type:[X],readOnly:!0})],o.prototype,"materialDefinitions",void 0),s([r({type:[Y],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),s([r({type:[Z],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),s([r({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),s([r({type:w}),H({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],o.prototype,"modifications",void 0),s([q(["web-scene","portal-item"],"modifications")],o.prototype,"readModifications",null),s([r(G)],o.prototype,"elevationInfo",void 0),s([r({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),o=s([S("esri.layers.IntegratedMeshLayer")],o);const ne=o;export{ne as default};