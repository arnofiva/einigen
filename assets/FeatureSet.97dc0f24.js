import{W as N,e as h,y as d,b as T,L as G,Q as S,Z as z,$ as F,I as R,a as P,H as j,a0 as q,X as J,ec as x}from"./index.da161cf1.js";var v;const w=new N({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let c=v=class extends j{constructor(n){super(n),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(n,a){const s=R.fromJSON(a.spatialReference),e=[];for(let o=0;o<n.length;o++){const t=n[o],i=T.fromJSON(t),m=t.geometry&&t.geometry.spatialReference;i.geometry==null||m||(i.geometry.spatialReference=s);const f=t.aggregateGeometries,r=i.aggregateGeometries;if(f&&r!=null)for(const y in r){const l=r[y],p=f[y],g=p?.spatialReference;l==null||g||(l.spatialReference=s)}e.push(i)}return e}writeGeometryType(n,a,s,e){if(n)return void w.write(n,a,s,e);const{features:o}=this;if(o){for(const t of o)if(t&&t.geometry!=null)return void w.write(t.geometry.type,a,s,e)}}readQueryGeometry(n,a){if(!n)return null;const s=!!n.spatialReference,e=q(n);return e&&!s&&a.spatialReference&&(e.spatialReference=R.fromJSON(a.spatialReference)),e}writeSpatialReference(n,a){if(n)return void(a.spatialReference=n.toJSON());const{features:s}=this;if(s){for(const e of s)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(a.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new v(this.cloneProperties())}cloneProperties(){return J({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(n){const a=this.write();if(a.features&&Array.isArray(n)&&n.length>0)for(let s=0;s<a.features.length;s++){const e=a.features[s];if(e.geometry){const o=n&&n[s];e.geometry=o&&o.toJSON()||e.geometry}}return a}quantize(n){const{scale:[a,s],translate:[e,o]}=n,t=r=>Math.round((r-e)/a),i=r=>Math.round((o-r)/s),m=this.features,f=this._getQuantizationFunction(this.geometryType,t,i);for(let r=0,y=m.length;r<y;r++)f?.(m[r].geometry)||(m.splice(r,1),r--,y--);return this.transform=n,this}unquantize(){const{geometryType:n,features:a,transform:s}=this;if(!s)return this;const{translate:[e,o],scale:[t,i]}=s,m=p=>p*t+e,f=p=>o-p*i;let r=null,y=null;if(this.hasZ&&s?.scale?.[2]!=null){const{translate:[,,p],scale:[,,g]}=s;r=u=>u*g+p}if(this.hasM&&s?.scale?.[3]!=null){const{translate:[,,,p],scale:[,,,g]}=s;y=u=>u==null?u:u*g+p}const l=this._getHydrationFunction(n,m,f,r,y);for(const{geometry:p}of a)p!=null&&l&&l(p);return this.transform=null,this}_quantizePoints(n,a,s){let e,o;const t=[];for(let i=0,m=n.length;i<m;i++){const f=n[i];if(i>0){const r=a(f[0]),y=s(f[1]);r===e&&y===o||(t.push([r-e,y-o]),e=r,o=y)}else e=a(f[0]),o=s(f[1]),t.push([e,o])}return t.length>0?t:null}_getQuantizationFunction(n,a,s){return n==="point"?e=>(e.x=a(e.x),e.y=s(e.y),e):n==="polyline"||n==="polygon"?e=>{const o=x(e)?e.rings:e.paths,t=[];for(let i=0,m=o.length;i<m;i++){const f=o[i],r=this._quantizePoints(f,a,s);r&&t.push(r)}return t.length>0?(x(e)?e.rings=t:e.paths=t,e):null}:n==="multipoint"?e=>{const o=this._quantizePoints(e.points,a,s);return o&&o.length>0?(e.points=o,e):null}:n==="extent"?e=>e:null}_getHydrationFunction(n,a,s,e,o){return n==="point"?t=>{t.x=a(t.x),t.y=s(t.y),e&&(t.z=e(t.z))}:n==="polyline"||n==="polygon"?t=>{const i=x(t)?t.rings:t.paths;let m,f;for(let r=0,y=i.length;r<y;r++){const l=i[r];for(let p=0,g=l.length;p<g;p++){const u=l[p];p>0?(m+=u[0],f+=u[1]):(m=u[0],f=u[1]),u[0]=a(m),u[1]=s(f)}}if(e&&o)for(let r=0,y=i.length;r<y;r++){const l=i[r];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=e(u[2]),u[3]=o(u[3])}}else if(e)for(let r=0,y=i.length;r<y;r++){const l=i[r];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=e(u[2])}}else if(o)for(let r=0,y=i.length;r<y;r++){const l=i[r];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=o(u[2])}}}:n==="extent"?t=>{t.xmin=a(t.xmin),t.ymin=s(t.ymin),t.xmax=a(t.xmax),t.ymax=s(t.ymax),e&&t.zmax!=null&&t.zmin!=null&&(t.zmax=e(t.zmax),t.zmin=e(t.zmin)),o&&t.mmax!=null&&t.mmin!=null&&(t.mmax=o(t.mmax),t.mmin=o(t.mmin))}:n==="multipoint"?t=>{const i=t.points;let m,f;for(let r=0,y=i.length;r<y;r++){const l=i[r];r>0?(m+=l[0],f+=l[1]):(m=l[0],f=l[1]),l[0]=a(m),l[1]=s(f)}if(e&&o)for(let r=0,y=i.length;r<y;r++){const l=i[r];l[2]=e(l[2]),l[3]=o(l[3])}else if(e)for(let r=0,y=i.length;r<y;r++){const l=i[r];l[2]=e(l[2])}else if(o)for(let r=0,y=i.length;r<y;r++){const l=i[r];l[2]=o(l[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[T],json:{write:!0}})],c.prototype,"features",void 0),h([G("features")],c.prototype,"readFeatures",null),h([d({type:[S],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],c.prototype,"geometryType",void 0),h([z("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasZ",void 0),h([d({types:F,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([G("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:R,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([z("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=v=h([P("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;const M=c;export{M as d};