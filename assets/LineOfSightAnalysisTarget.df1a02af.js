import{t as d,m8 as y,iy as j,y as v,lW as s,a as t,d as o,aQ as f,dd as p,n as c,kO as h}from"./vendor.fd144a9e.js";import{w as a}from"./persistable.594db77c.js";function I(e,r){return u(e)===u(r)}function u(e){if(d(e))return null;const r=e.layer!=null?e.layer.id:"";let l=null;return l=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,l==null?null:`o-${r}-${l}`}const b={json:{write:{writer:$,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:g}}}};function $(e,r){var l;d(e)||((l=e.layer)==null?void 0:l.objectIdField)==null||e.attributes==null||(r.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function g(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let i=class extends y(j(v)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};t([o({type:f}),a()],i.prototype,"position",void 0),t([o({type:p}),a()],i.prototype,"elevationInfo",void 0),t([o(b)],i.prototype,"feature",void 0),i=t([c("esri.analysis.LineOfSightAnalysisObserver")],i);const F=i;let n=class extends y(h){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};t([o({type:f}),a()],n.prototype,"position",void 0),t([o({type:p}),a()],n.prototype,"elevationInfo",void 0),t([o(b)],n.prototype,"feature",void 0),n=t([c("esri.analysis.LineOfSightAnalysisTarget")],n);const O=n;export{O as f,u as l,F as u};