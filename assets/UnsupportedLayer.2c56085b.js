import{dQ as n,bg as a,e as s,y as i,a as d,v as l,a3 as u}from"./index.da161cf1.js";import{j as y}from"./PortalLayer.9c2e677f.js";import"./portalItemUtils.ea6f2bf4.js";let r=class extends y(n(l)){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{a(()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let p="Unsupported layer type";t&&(p+=" "+t),o(new u("layer:unsupported-layer-type",p,{layerType:t}))})}))}read(e,o){const t={resourceInfo:e};e.id!=null&&(t.id=e.id),e.title!=null&&(t.title=e.title),super.read(t,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};s([i({readOnly:!0})],r.prototype,"resourceInfo",void 0),s([i({type:["show","hide"]})],r.prototype,"listMode",void 0),s([i({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=s([d("esri.layers.UnsupportedLayer")],r);const m=r;export{m as default};
