var Q=Object.defineProperty,P=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var O=(p,e,t)=>e in p?Q(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t,F=(p,e)=>{for(var t in e||(e={}))G.call(e,t)&&O(p,t,e[t]);if(S)for(var t of S(e))Z.call(e,t)&&O(p,t,e[t]);return p},R=(p,e)=>P(p,A(e));import{f_ as _,N as I,nl as v,mO as M,da as N,hr as z,A as B,ab as L,fw as U,r as b,fz as W,nm as J,bs as V,fs as k,nn as Y,no as H,np as K}from"./vendor.fd144a9e.js";import{u as X}from"./FeatureStore.bb3d0d01.js";import{f as w,g as T}from"./QueryEngineResult.ec64a57b.js";import{Y as ee}from"./QueryEngine.1b5f211e.js";import{T as te,L as se,O as ie}from"./geojson.2508f0d3.js";import{u as ne,l as re,a as ae}from"./clientSideDefaults.a3ca70e0.js";import{w as oe,m as j,f as q,a as E,g as $}from"./sourceUtils.acfe65ba.js";import"./PooledRBush.791e352c.js";import"./quickselect.03306040.js";import"./optimizedFeatureQueryEngineAdapter.1fe0efec.js";import"./centroid.c5b18aa1.js";import"./WhereClause.6eb5053b.js";import"./utils.e2968790.js";import"./ClassBreaksDefinition.e6a81499.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";const le={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class qe{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=await this._fetch(t==null?void 0:t.signal));const a=te(n,{geometryType:e.geometryType}),o=e.fields||a.fields||[],u=e.hasZ!=null?e.hasZ:a.hasZ,d=a.geometryType,h=e.objectIdField||a.objectIdFieldName||"__OBJECTID",y=e.spatialReference||_;let s=e.timeInfo;o===a.fields&&a.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:a.unknownFields}});let l=o.find(r=>r.name===h);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1):(l={alias:h,name:h,type:a.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(l));const c={};for(const r of o){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:r});if(!v.jsonValues.includes(r.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});if(r.name!==l.name){const g=M(r);g!==void 0&&(c[r.name]=g)}}this._fieldsIndex=new N(o);const m=this._fieldsIndex.requiredFields.indexOf(l);if(m>-1&&this._fieldsIndex.requiredFields.splice(m,1),s){if(s.startTimeField){const r=this._fieldsIndex.get(s.startTimeField);r?(s.startTimeField=r.name,r.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const r=this._fieldsIndex.get(s.endTimeField);r?(s.endTimeField=r.name,r.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const r=this._fieldsIndex.get(s.trackIdField);r?s.trackIdField=r.name:(s.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const C=d?ne(d):null,f={warnings:i,featureErrors:[],layerDefinition:R(F({},le),{drawingInfo:C,templates:re(c),extent:null,geometryType:d,objectIdField:h,fields:o,hasZ:!!u,timeInfo:s})};this._queryEngine=new ee({fields:o,geometryType:d,hasM:!1,hasZ:u,objectIdField:h,spatialReference:y,timeInfo:s,featureStore:new X({geometryType:d,hasM:!1,hasZ:u}),cacheSpatialQueries:!0}),this._createDefaultAttributes=ae(c,h);const x=await this._createFeatures(n);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const D=this._normalizeFeatures(x,f.warnings,f.featureErrors);if(this._queryEngine.featureStore.addMany(D),f.layerDefinition.extent=this._queryEngine.fullExtent,f.layerDefinition.timeInfo){const{start:r,end:g}=this._queryEngine.timeExtent;f.layerDefinition.timeInfo.timeExtent=[r,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([oe(t,i),w(e.adds,t),w(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=z(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const n=this._normalizeFeatures(i);n&&this._queryEngine.featureStore.addMany(n)},i=>{this._queryEngine.featureStore.clear(),B(i)||L.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:i,objectIdField:n}=this._queryEngine,a=se(e,{geometryType:t,hasZ:i,objectIdField:n});if(!U(this._queryEngine.spatialReference,_))for(const o of a)b(o.geometry)&&(o.geometry=W(T(J(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return a}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this.loadOptions,n=(await V(t,{responseType:"json",query:F({},i),signal:e})).data;return await ie(n),n}_normalizeFeatures(e,t,i){const{objectIdField:n}=this._queryEngine,a=[];for(const o of e){const u=this._createDefaultAttributes(),d=j(this._fieldsIndex,u,o.attributes,!0,t);d?i==null||i.push(d):(this._assignObjectId(u,o.attributes,!0),o.attributes=u,o.objectId=u[n],a.push(o))}return a}_applyEdits(e){const{adds:t,updates:i,deletes:n}=e,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),i&&i.length&&this._applyUpdateEdits(a,i),n&&n.length){for(const o of n)a.deleteResults.push(q(o));this._queryEngine.featureStore.removeManyById(n)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:a,hasZ:o,objectIdField:u,spatialReference:d,featureStore:h}=this._queryEngine,y=[];for(const s of t){if(s.geometry&&n!==k(s.geometry)){i.push(E("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),c=j(this._fieldsIndex,l,s.attributes);if(c)i.push(c);else{if(this._assignObjectId(l,s.attributes),s.attributes=l,s.uid!=null){const m=s.attributes[u];e.uidToObjectId[s.uid]=m}b(s.geometry)&&(s.geometry=T($(s.geometry,d),s.geometry.spatialReference,d)),y.push(s),i.push(q(s.attributes[u]))}}h.addMany(Y([],y,n,o,a,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:o,spatialReference:u,featureStore:d}=this._queryEngine;for(const h of t){const{attributes:y,geometry:s}=h,l=y&&y[o];if(l==null){e.push(E(`Identifier field ${o} missing`));continue}if(!d.has(l)){e.push(E(`Feature with object id ${l} missing`));continue}const c=H(d.getFeature(l),i,a,n);if(b(s)){if(i!==k(s)){e.push(E("Incorrect geometry type."));continue}c.geometry=T($(s,u),s.spatialReference,u)}if(y){const m=j(this._fieldsIndex,c.attributes,y);if(m){e.push(m);continue}}d.add(K(c,i,a,n,o)),e.push(q(l))}}_createObjectIdGenerator(e,t){const i=e.fieldsIndex.get(e.objectIdField);if(i.type==="esriFieldTypeString")return()=>i.name+"-"+Date.now().toString(16);let n=Number.NEGATIVE_INFINITY;for(const a of t)a.objectId&&(n=Math.max(n,a.objectId));return n=Math.max(0,n)+1,()=>n++}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;e[n]=i&&n in t?t[n]:this._objectIdGenerator()}async _checkProjection(e){try{await w(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{qe as default};
