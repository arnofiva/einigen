import{c_ as p,e as i,y as l,ky as u,a as b,m as d}from"./index.da161cf1.js";import{n as f}from"./sql.414b1952.js";import{n as y}from"./floorFilterUtils.2fa4f3da.js";import{n as g}from"./sublayerUtils.e7f91234.js";const S={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let t=class extends p(d){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const a=y(this.floors,s);return s.toExportImageJSON(a)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&g(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(S[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,s=this.visibleSublayers.filter(a=>a.definitionExpression!=null||e&&a.floorInfo!=null);return s.length?JSON.stringify(s.reduce((a,n)=>{const r=y(this.floors,n),o=f(r,n.definitionExpression);return o!=null&&(a[n.id]=o),a},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,a=r=>{const o=this.scale,m=o===0,h=r.minScale===0||o<=r.minScale,c=r.maxScale===0||o>=r.maxScale;r.visible&&(m||h&&c)&&(r.sublayers?r.sublayers.forEach(a):e.unshift(r))};s&&s.forEach(a);const n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some((r,o)=>e[o]!==r)?e:n}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};i([l({readOnly:!0})],t.prototype,"dynamicLayers",null),i([l()],t.prototype,"floors",void 0),i([l({readOnly:!0})],t.prototype,"hasDynamicLayers",null),i([l()],t.prototype,"layer",null),i([l({readOnly:!0})],t.prototype,"layers",null),i([l({readOnly:!0})],t.prototype,"layerDefs",null),i([l({type:Number})],t.prototype,"scale",void 0),i([l(u)],t.prototype,"timeExtent",void 0),i([l({readOnly:!0})],t.prototype,"version",null),i([l({readOnly:!0})],t.prototype,"visibleSublayers",null),t=i([b("esri.layers.mixins.ExportImageParameters")],t);export{t as m};