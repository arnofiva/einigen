import{dP as p,sI as b,sJ as v,dQ as u,lu as c,sK as f,q as d,sL as m,sA as g,E as L,e as s,y as r,Z as _,A as O,aO as w,sM as M,U as h,a as V,v as $,au as x}from"./index.da161cf1.js";import{a as C}from"./BlendLayer.eacc4944.js";import{j as T}from"./PortalLayer.9c2e677f.js";import{t as A}from"./ScaleRangeLayer.1a5bb9a6.js";import{a as E}from"./lazyLayerLoader.65116701.js";import"./jsonUtils.1c231e28.js";import"./portalItemUtils.ea6f2bf4.js";let t=class extends C(A(p(T(b(v(u($))))))){constructor(e){super(e),this.allLayers=new c({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=f(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([d(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&M in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(w(()=>this.tables,"before-add",a=>{a.preventDefault(),x.getLogger(this).errorOnce("tables","Tables are not yet supported in a WebScene so they can't be added.")}),i))},O),d(()=>this.visible,this._onVisibilityChange.bind(this),h)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}_writeLayers(e,i,a,l){const o=[];if(!e)return o;e.forEach(y=>{const n=m(y,l.webmap?l.webmap.getLayerJSONFromResourceInfo(y):null,l);n!=null&&n.layerType&&o.push(n)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:E},e)),Promise.resolve(this)}async loadAll(){return g(this,e=>{e(this.layers,this.tables)})}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer readded to Grouplayer: uid=${e.uid}`):this.addHandles(d(()=>e.visible,i=>this._onChildVisibilityChange(e,i),h),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!L(this).initialized)return;const a=this.layers;let l=a.find(o=>o.visible);switch(e){case"exclusive":a.length&&!l&&(l=a.at(0),l.visible=!0),this._turnOffOtherLayers(l);break;case"inherited":a.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};s([r({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),s([r({readOnly:!0})],t.prototype,"allTables",void 0),s([r()],t.prototype,"fullExtent",void 0),s([r({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),s([r({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),s([_("layers")],t.prototype,"_writeLayers",null),s([r({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),s([r({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),s([r()],t.prototype,"spatialReference",void 0),s([r({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),s([r({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,a)=>{e!=="inherited"&&(i[a]=e)}}}}})],t.prototype,"visibilityMode",null),t=s([V("esri.layers.GroupLayer")],t);const P=t;export{P as default};