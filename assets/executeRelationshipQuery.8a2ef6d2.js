import{bZ as m,e5 as l}from"./index.da161cf1.js";import{t as p}from"./query.22cd43bf.js";import{d as j}from"./FeatureSet.97dc0f24.js";import f from"./RelationshipQuery.60e2b826.js";import"./normalizeUtils.54c24a4d.js";import"./normalizeUtilsCommon.87227ae2.js";import"./pbfQueryUtils.c4418ce7.js";import"./pbf.82c57b62.js";import"./queryZScale.2643e684.js";import"./Query.e586665e.js";function R(r,t){const e=r.toJSON();return e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.orderByFields&&(e.orderByFields=e.orderByFields.join(",")),e.outFields&&!t?.returnCountOnly?e.outFields.includes("*")?e.outFields="*":e.outFields=e.outFields.join(","):delete e.outFields,e.outSpatialReference&&(e.outSR=e.outSR.wkid||JSON.stringify(e.outSR.toJSON()),delete e.outSpatialReference),e.dynamicDataSource&&(e.layer=JSON.stringify({source:e.dynamicDataSource}),delete e.dynamicDataSource),e}async function S(r,t,e){const n=await y(r,t,e),o=n.data,s=o.geometryType,a=o.spatialReference,c={};for(const d of o.relatedRecordGroups){const i={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:d.relatedRecords};if(d.objectId!=null)c[d.objectId]=i;else for(const u of Object.keys(d))u!=="relatedRecords"&&(c[d[u]]=i)}return{...n,data:c}}async function b(r,t,e){const n=await y(r,t,e,{returnCountOnly:!0}),o=n.data,s={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(s[a.objectId]=a.count);return{...n,data:s}}async function y(r,t,e={},n){const o=p({...r.query,f:"json",...n,...R(t,n)});return m(r.path+"/queryRelatedRecords",{...e,query:{...e.query,...o}})}async function x(r,t,e){t=f.from(t);const n=l(r);return S(n,t,e).then(o=>{const s=o.data,a={};return Object.keys(s).forEach(c=>a[c]=j.fromJSON(s[c])),a})}async function B(r,t,e){t=f.from(t);const n=l(r);return b(n,t,{...e}).then(o=>o.data)}export{x as executeRelationshipQuery,B as executeRelationshipQueryForCount};
