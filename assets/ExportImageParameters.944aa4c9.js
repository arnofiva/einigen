var g=Object.defineProperty,f=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(e,s,r)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,c=(e,s)=>{for(var r in s||(s={}))v.call(s,r)&&h(e,r,s[r]);if(m)for(var r of m(s))D.call(s,r)&&h(e,r,s[r]);return e},u=(e,s)=>f(e,S(s));import{bQ as L,y as x,hu as O,r as E,a,d as n,gg as P,n as N}from"./vendor.fd144a9e.js";import{n as p}from"./floorFilterUtils.69500d62.js";import{i as V}from"./sublayerUtils.36182229.js";const I={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let i=class extends L(x){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const r=p(this.floors,s);return s.toExportImageJSON(r)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&V(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(I[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var r;const e=!!((r=this.floors)==null?void 0:r.length),s=this.visibleSublayers.filter(l=>l.definitionExpression!=null||e&&l.floorInfo!=null);return s.length?JSON.stringify(s.reduce((l,t)=>{const o=p(this.floors,t),y=O(o,t.definitionExpression);return E(y)&&(l[t.id]=y),l},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,r=t=>{const o=this.scale,y=o===0,b=t.minScale===0||o<=t.minScale,d=t.maxScale===0||o>=t.maxScale;t.visible&&(y||b&&d)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};s&&s.forEach(r);const l=this._get("visibleSublayers");return!l||l.length!==e.length||l.some((t,o)=>e[o]!==t)?e:l}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s=u(c({},s),{layers:this.layers,layerDefs:this.layerDefs}),s}};a([n({readOnly:!0})],i.prototype,"dynamicLayers",null),a([n()],i.prototype,"floors",void 0),a([n({readOnly:!0})],i.prototype,"hasDynamicLayers",null),a([n()],i.prototype,"layer",null),a([n({readOnly:!0})],i.prototype,"layers",null),a([n({readOnly:!0})],i.prototype,"layerDefs",null),a([n({type:Number})],i.prototype,"scale",void 0),a([n(P)],i.prototype,"timeExtent",void 0),a([n({readOnly:!0})],i.prototype,"version",null),a([n({readOnly:!0})],i.prototype,"visibleSublayers",null),i=a([N("esri.layers.mixins.ExportImageParameters")],i);export{i as c};
