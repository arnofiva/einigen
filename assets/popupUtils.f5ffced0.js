import{e3 as u,d1 as f,eK as m,cN as p,cO as n,de as w,eL as g,eM as F,eN as b}from"./index.da161cf1.js";function j({displayField:e,editFieldsInfo:a,fields:i,objectIdField:t,title:r},o){if(!i)return null;const s=C({editFieldsInfo:a,fields:i,objectIdField:t},o);if(!s.length)return null;const d=v({titleBase:r,fields:i,displayField:e}),c=h();return new u({title:d,content:c,fieldInfos:s})}const y=(e,a)=>a.visibleFieldNames?a.visibleFieldNames.has(e.name):b(e,a);function L(e,a){const i=e;return a&&(e=e.filter(t=>!a.includes(t.type))),e===i&&(e=e.slice()),e.sort(N),e}function N(e,a){return e.type==="oid"?-1:a.type==="oid"?1:l(e)?-1:l(a)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((a.alias||a.name).toLocaleLowerCase())}function C(e,a){const i=a?.visibleFieldNames;return L(e.fields??[],a?.ignoreFieldTypes||$).map(t=>new f({fieldName:t.name,isEditable:m(t,e),label:t.alias,format:I(t),visible:y(t,{...e,visibleFieldNames:i})}))}function I(e){switch(e.type){case"small-integer":case"integer":case"single":return new n({digitSeparator:!0,places:0});case"double":return new n({digitSeparator:!0,places:2});case"date":return new n({dateFormat:"long-month-day-year"});default:return e.type==="string"&&p(e.name)?new n({digitSeparator:!0,places:0}):null}}function h(){return[new w,new g]}function v(e){const a=F(e),{titleBase:i}=e;return a?`${i}: {${a.trim()}}`:i??""}function l(e){return(e.name&&e.name.toLowerCase())==="name"?!0:(e.alias&&e.alias.toLowerCase())==="name"}const $=["geometry","blob","raster","guid","xml"];export{j as p};