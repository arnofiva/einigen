import{ol as n,e as o,y as i,a1 as s,M as a,nr as l,bM as p,a as u,jV as y}from"./index.da161cf1.js";var r;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(r||(r={}));const d=[r.Horizontal,r.Vertical,r.Direct];let t=class extends n(y){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=r.Direct,this.offset=0,this.orientation=0}};o([i({type:["length"],json:{write:{isRequired:!0}}})],t.prototype,"type",void 0),o([i({type:s,json:{write:!0}})],t.prototype,"startPoint",void 0),o([i({type:s,json:{write:!0}})],t.prototype,"endPoint",void 0),o([i({type:d,nonNullable:!0,json:{write:{isRequired:!0}}})],t.prototype,"measureType",void 0),o([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],t.prototype,"offset",void 0),o([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),a(e=>l.normalize(p(e),0,!0))],t.prototype,"orientation",void 0),t=o([u("esri.analysis.LengthDimension")],t);const h=t;export{d as r,r as t,h as u};
