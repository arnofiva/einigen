import{y as we,O as he,N as de,P as Ee,o as ge,r as me,f as ye,S as Ne,p as ve,u as Ie,I as Te,m as Se,b as p,d as v,e as be,s as Re,a as ie}from"./arcadeUtils.ad069cdf.js";import{p3 as Y,oQ as T,pa as A,bF as Oe,pI as S,pJ as _,p9 as D,p7 as u,pm as j,oS as g,p2 as U,p6 as x,pv as C,pC as se,oR as O,oZ as w,pL as L,pK as m,oT as $,o$ as b,pE as Ae,p8 as B,pF as Ce,p0 as Ue,aQ as xe,v as Fe,bJ as Me,bK as Pe,ap as De,pD as Le,pj as ke,ph as _e,pG as ee}from"./vendor.fd144a9e.js";import{registerFunctions as je}from"./geomasync.c22fae2b.js";import"./geometryEngineAsync.3bf69bae.js";function ne(n){return n&&typeof n.then=="function"}const V=100;async function J(n,e){const r=[];for(let t=0;t<e.arguments.length;t++)r.push(await c(n,e.arguments[t]));return r}async function N(n,e,r){return e.preparsed===!0?r(n,null,e.arguments):r(n,e,await J(n,e))}async function M(n,e,r){if(e.preparsed===!0){const o=r(n,null,e.arguments);return ne(o),o}const t=r(n,e,await J(n,e));return ne(t),t}async function c(n,e,r){if(e.breakpoint&&r!==!0)return await e.breakpoint(),c(n,e,!0);switch(e.type){case"VariableDeclarator":return en(n,e);case"VariableDeclaration":return le(n,e,0);case"BlockStatement":return We(n,e);case"FunctionDeclaration":return $e(n,e);case"ReturnStatement":return Xe(n,e);case"IfStatement":return Ke(n,e);case"ExpressionStatement":return Qe(n,e);case"UpdateExpression":return qe(n,e);case"AssignmentExpression":return Je(n,e);case"ForStatement":return Ge(n,e);case"ForInStatement":return Ze(n,e);case"BreakStatement":return S;case"EmptyStatement":return u;case"ContinueStatement":return _;case"TemplateElement":return cn(n,e);case"TemplateLiteral":return ln(n,e);case"Identifier":return Q(n,e);case"MemberExpression":return nn(n,e);case"Literal":return e.value;case"CallExpression":return sn(n,e);case"UnaryExpression":return rn(n,e);case"BinaryExpression":return on(n,e);case"LogicalExpression":return an(n,e);case"ArrayExpression":return tn(n,e);case"ObjectExpression":return Ve(n,e);case"Property":return Ye(n,e);default:throw new Error(p(e,"RUNTIME","UNREOGNISED"))}}async function Ve(n,e){const r=[];for(let a=0;a<e.properties.length;a++)r[a]=await c(n,e.properties[a]);const t={};for(let a=0;a<r.length;a++){const i=r[a];if(j(i.value))throw new Error("Illegal Argument");if(g(i.key)===!1)throw new Error("Illegal Argument");i.value===u?t[i.key.toString()]=null:t[i.key.toString()]=i.value}const o=new v(t);return o.immutable=!1,o}async function Ye(n,e){const r=await c(n,e.value);return e.key.type==="Identifier"?{key:e.key.name,value:r}:{key:await c(n,e.key),value:r}}async function re(n,e,r){const t=await c(n,e.body);return r.lastAction=t,r.lastAction===S||r.lastAction instanceof m?(r.testResult=!1,r):(e.update!==null&&await c(n,e.update),r)}async function Be(n,e,r){if(e.test!==null){const t=await c(n,e.test);if(n.abortSignal.aborted===!0)throw new Error("Cancelled");if(r.testResult=t,r.testResult===!1)return r;if(r.testResult!==!0)throw new Error(p(e,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));return re(n,e,r)}return re(n,e,r)}function k(n,e,r,t,o,a){try{Be(n,e,r).then(()=>{try{r.testResult===!0?++a>V?(a=0,setTimeout(()=>{k(n,e,r,t,o,a)},0)):k(n,e,r,t,o,a):r.lastAction instanceof m?t(r.lastAction):t(u)}catch(i){o(i)}},i=>{o(i)})}catch(i){o(i)}}function Ge(n,e){try{return e.init!==null?c(n,e.init).then(()=>new Promise((r,t)=>{k(n,e,{testResult:!0,lastAction:u},o=>{r(o)},o=>{t(o)},0)})):new Promise((r,t)=>{k(n,e,{testResult:!0,lastAction:u},o=>{r(o)},o=>{t(o)},0)})}catch(r){return Promise.reject(r)}}function G(n,e,r,t,o,a,i,s,l,f){try{if(t<=a)return void s(u);o.value=i==="k"?r[a]:a,c(n,e.body).then(h=>{try{h instanceof m?s(h):h===S?s(u):++f>V?(f=0,setTimeout(()=>{G(n,e,r,t,o,a+1,i,s,l,f)},0)):G(n,e,r,t,o,a+1,i,s,l,f)}catch(d){l(d)}},h=>{l(h)})}catch(h){l(h)}}function z(n,e,r,t,o,a,i,s,l){try{if(r.length()<=o)return void i(u);t.value=a==="k"?r.get(o):o,c(n,e.body).then(f=>{f instanceof m?i(f):f===S?i(u):++l>V?(l=0,setTimeout(()=>{z(n,e,r,t,o+1,a,i,s,l)},0)):z(n,e,r,t,o+1,a,i,s,l)},f=>{s(f)})}catch(f){s(f)}}function H(n,e,r,t,o,a){try{if(a===void 0&&(a="i"),r.length===0)return void t.resolve(u);G(n,e,r,r.length,o,0,a,i=>{t.resolve(i)},i=>{t.reject(i)},0)}catch(i){t.reject(i)}}function ze(n,e,r,t,o,a){try{if(a===void 0&&(a="i"),r.length===0)return void t.resolve(u);z(n,e,r,o,0,a,i=>{t.resolve(i)},i=>{t.reject(i)},0)}catch(i){t.reject(i)}}function He(n,e,r,t,o){try{H(n,e,r.keys(),t,o,"k")}catch(a){t.reject(a)}}function Z(n,e,r,t,o,a,i,s){try{n.next().then(l=>{try{if(l===null)a(u);else{const f=ie.createFromGraphicLikeObject(l.geometry,l.attributes,t);f._underlyingGraphic=l,o.value=f,c(e,r.body).then(h=>{try{h===S?a(u):h instanceof m?a(h):++s>V?(s=0,setTimeout(()=>{Z(n,e,r,t,o,a,i,s)},0)):Z(n,e,r,t,o,a,i,s)}catch(d){i(d)}},h=>{i(h)})}}catch(f){i(f)}},l=>{i(l)})}catch(l){i(l)}}async function Ze(n,e){return new Promise((r,t)=>{c(n,e.right).then(o=>{try{let a=null;a=e.left.type==="VariableDeclaration"?c(n,e.left):Promise.resolve(),a.then(()=>{try{let i="";if(e.left.type==="VariableDeclaration"){const l=e.left.declarations[0].id;l.type==="Identifier"&&(i=l.name)}else e.left.type==="Identifier"&&(i=e.left.name);if(!i)throw new Error(p(e,"RUNTIME","INVALIDVARIABLE"));i=i.toLowerCase();let s=null;if(n.localScope!==null&&n.localScope[i]!==void 0&&(s=n.localScope[i]),s===null&&n.globalScope[i]!==void 0&&(s=n.globalScope[i]),s===null)return void t(new Error(p(e,"RUNTIME","VARIABLENOTDECLARED")));U(o)||g(o)?H(n,e,o,{reject:t,resolve:r},s):x(o)?ze(n,e,o,{reject:t,resolve:r},s):o instanceof v||C(o)?He(n,e,o,{reject:t,resolve:r},s):se(o)?Z(o.iterator(n.abortSignal),n,e,o,s,l=>{r(l)},l=>{t(l)},0):H(n,e,[],{reject:t,resolve:r},s)}catch(i){t(i)}},t)}catch(a){t(a)}},t)})}async function qe(n,e){const r=e.argument;if(r.type==="MemberExpression"){const a={t:null},i=await c(n,r.object);let s=null;a.t=i,r.computed===!0?s=await c(n,r.property):r.property.type==="Identifier"&&(s=r.property.name);const l=a.t;let f;if(U(l)){if(!O(s))throw new Error("Invalid Parameter");if(s<0&&(s=l.length+s),s<0||s>=l.length)throw new Error("Assignment outside of array bounds");f=w(l[s]),l[s]=e.operator==="++"?f+1:f-1}else if(l instanceof v){if(g(s)===!1)throw new Error("Dictionary accessor must be a string");if(l.hasField(s)!==!0)throw new Error("Invalid Parameter");f=w(l.field(s)),l.setField(s,e.operator==="++"?f+1:f-1)}else{if(!C(l))throw x(l)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(g(s)===!1)throw new Error("Feature accessor must be a string");if(l.hasField(s)!==!0)throw new Error("Invalid Parameter");f=w(l.field(s)),l.setField(s,e.operator==="++"?f+1:f-1)}return e.prefix===!1?f:e.operator==="++"?f+1:f-1}const t=e.argument.type==="Identifier"?e.argument.name.toLowerCase():"";if(!t)throw new Error("Invalid identifier");let o;if(n.localScope!==null&&n.localScope[t]!==void 0)return o=w(n.localScope[t].value),n.localScope[t]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(n.globalScope[t]!==void 0)return o=w(n.globalScope[t].value),n.globalScope[t]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new Error("Variable not recognised")}function I(n,e,r,t){switch(e){case"=":return n===u?null:n;case"/=":return w(r)/w(n);case"*=":return w(r)*w(n);case"-=":return w(r)-w(n);case"+=":return g(r)||g(n)?b(r)+b(n):w(r)+w(n);case"%=":return w(r)%w(n);default:throw new Error(p(t,"RUNTIME","OPERATORNOTRECOGNISED"))}}async function Je(n,e){const r=e.left;if(r.type==="MemberExpression"){const o=await c(n,e.right),a=await c(n,r.object);let i=null;if(r.computed===!0)i=await c(n,r.property);else{if(r.property.type!=="Identifier")throw new Error("Expected computed or identifier for assignemnt target");i=r.property.name}if(U(a)){if(!O(i))throw new Error("Invalid Parameter");if(i<0&&(i=a.length+i),i<0||i>a.length)throw new Error("Assignment outside of array bounds");if(i===a.length){if(e.operator!=="=")throw new Error("Invalid Parameter");a[i]=I(o,e.operator,a[i],e)}else a[i]=I(o,e.operator,a[i],e)}else if(a instanceof v){if(g(i)===!1)throw new Error("Dictionary accessor must be a string");if(a.hasField(i)===!0)a.setField(i,I(o,e.operator,a.field(i),e));else{if(e.operator!=="=")throw new Error("Invalid Parameter");a.setField(i,I(o,e.operator,null,e))}}else{if(!C(a))throw x(a)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(g(i)===!1)throw new Error("Feature accessor must be a string");if(a.hasField(i)===!0)a.setField(i,I(o,e.operator,a.field(i),e));else{if(e.operator!=="=")throw new Error("Invalid Parameter");a.setField(i,I(o,e.operator,null,e))}}return u}const t=r.name.toLowerCase();if(n.localScope!==null&&n.localScope[t]!==void 0){const o=await c(n,e.right);return n.localScope[t]={value:I(o,e.operator,n.localScope[t].value,e),valueset:!0,node:e.right},u}if(n.globalScope[t]!==void 0){const o=await c(n,e.right);return n.globalScope[t]={value:I(o,e.operator,n.globalScope[t].value,e),valueset:!0,node:e.right},u}throw new Error("Cannot assign undeclared variable")}async function Qe(n,e){if(e.expression.type==="AssignmentExpression")return c(n,e.expression);if(e.expression.type==="CallExpression"){const t=await c(n,e.expression);return t===u?u:new L(t)}const r=await c(n,e.expression);return r===u?u:new L(r)}async function Ke(n,e){if(e.test.type==="AssignmentExpression"||e.test.type==="UpdateExpression")throw new Error(p(e.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const r=await c(n,e.test);if(r===!0)return c(n,e.consequent);if(r===!1)return e.alternate!==null?c(n,e.alternate):u;throw new Error(p(e.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))}async function We(n,e){return ce(n,e,0)}async function ce(n,e,r){if(r>=e.body.length)return u;const t=await c(n,e.body[r]);return t instanceof m||t===S||t===_||r===e.body.length-1?t:ce(n,e,r+1)}async function Xe(n,e){if(e.argument===null)return new m(u);const r=await c(n,e.argument);return new m(r)}async function $e(n,e){const r=e.id.name.toLowerCase();return n.globalScope[r]={valueset:!0,node:null,value:new D(e,n)},u}async function le(n,e,r){return r>=e.declarations.length?u:(await c(n,e.declarations[r]),r===e.declarations.length-1||await le(n,e,r+1),u)}async function en(n,e){let r=null;if(r=e.init===null?null:await c(n,e.init),n.localScope!==null){if(r===u&&(r=null),e.id.type!=="Identifier")throw new Error("Can only assign a regular variable");const o=e.id.name.toLowerCase();return n.localScope[o]={value:r,valueset:!0,node:e.init},u}if(e.id.type!=="Identifier")throw new Error("Can only assign a regular variable");const t=e.id.name.toLowerCase();return r===u&&(r=null),n.globalScope[t]={value:r,valueset:!0,node:e.init},u}let y=0;function te(n,e,r,t){let o;switch(e=e.toLowerCase()){case"hasz":{const a=n.hasZ;return a!==void 0&&a}case"hasm":{const a=n.hasM;return a!==void 0&&a}case"spatialreference":{let a=n.spatialReference._arcadeCacheId;if(a===void 0){let s=!0;Object.freeze&&Object.isFrozen(n.spatialReference)&&(s=!1),s&&(y++,n.spatialReference._arcadeCacheId=y,a=y)}const i=new v({wkt:n.spatialReference.wkt,wkid:n.spatialReference.wkid});return a!==void 0&&(i._arcadeCacheId="SPREF"+a.toString()),i}}switch(n.type){case"extent":switch(e){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":{const a=n[e];return a!==void 0?a:null}case"type":return"Extent"}break;case"polygon":switch(e){case"rings":return o=n.cache._arcadeCacheId,o===void 0&&(y++,o=y,n.cache._arcadeCacheId=o),new ee(n.rings,n.spatialReference,n.hasZ===!0,n.hasM===!0,o);case"type":return"Polygon"}break;case"point":switch(e){case"x":case"y":case"z":case"m":return n[e]!==void 0?n[e]:null;case"type":return"Point"}break;case"polyline":switch(e){case"paths":return o=n.cache._arcadeCacheId,o===void 0&&(y++,o=y,n.cache._arcadeCacheId=o),new ee(n.paths,n.spatialReference,n.hasZ===!0,n.hasM===!0,o);case"type":return"Polyline"}break;case"multipoint":switch(e){case"points":return o=n.cache._arcadeCacheId,o===void 0&&(y++,o=y,n.cache._arcadeCacheId=o),new _e(n.points,n.spatialReference,n.hasZ===!0,n.hasM===!0,o,1);case"type":return"Multipoint"}}throw new Error(p(t,"RUNTIME","PROPERTYNOTFOUND"))}async function nn(n,e){const r=await c(n,e.object);if(r===null)throw new Error(p(e,"RUNTIME","NOTFOUND"));if(e.computed===!1){if(e.property.type==="Identifier"){if(r instanceof v||C(r))return r.field(e.property.name);if(r instanceof $)return te(r,e.property.name,n,e);throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}let t=await c(n,e.property);if(r instanceof v||C(r)){if(g(t))return r.field(t);throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(r instanceof $){if(g(t))return te(r,t,n,e);throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(U(r)){if(O(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new Error(p(e,"RUNTIME","OUTOFBOUNDS"));return r[t]}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(x(r)){if(O(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length()+t),t>=r.length()||t<0)throw new Error(p(e,"RUNTIME","OUTOFBOUNDS"));return r.get(t)}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}if(g(r)){if(O(t)&&isFinite(t)&&Math.floor(t)===t){if(t<0&&(t=r.length+t),t>=r.length||t<0)throw new Error(p(e,"RUNTIME","OUTOFBOUNDS"));return r[t]}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}throw new Error(p(e,"RUNTIME","INVALIDTYPE"))}async function rn(n,e){const r=await c(n,e.argument);if(T(r)){if(e.operator==="!")return!r;if(e.operator==="-")return-1*w(r);if(e.operator==="+")return 1*w(r);if(e.operator==="~")return~w(r);throw new Error(p(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if(e.operator==="-")return-1*w(r);if(e.operator==="+")return 1*w(r);if(e.operator==="~")return~w(r);throw new Error(p(e,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}async function tn(n,e){const r=[];for(let t=0;t<e.elements.length;t++)r.push(await c(n,e.elements[t]));for(let t=0;t<r.length;t++){if(j(r[t]))throw new Error(p(e,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));r[t]===u&&(r[t]=null)}return r}async function on(n,e){const r=[];r[0]=await c(n,e.left),r[1]=await c(n,e.right);const t=r[0],o=r[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return Ce(w(t),w(o),e.operator);case"==":return B(t,o);case"!=":return!B(t,o);case"<":case">":case"<=":case">=":return Ae(t,o,e.operator);case"+":return g(t)||g(o)?b(t)+b(o):w(t)+w(o);case"-":return w(t)-w(o);case"*":return w(t)*w(o);case"/":return w(t)/w(o);case"%":return w(t)%w(o);default:throw new Error(p(e,"RUNTIME","OPERATORNOTRECOGNISED"))}}async function an(n,e){if(e.left.type==="AssignmentExpression"||e.left.type==="UpdateExpression")throw new Error(p(e.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if(e.right.type==="AssignmentExpression"||e.right.type==="UpdateExpression")throw new Error(p(e.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));const r=await c(n,e.left);let t=null;if(!T(r))throw new Error(p(e,"RUNTIME","ONLYBOOLEAN"));switch(e.operator){case"||":if(r===!0)return r;if(t=await c(n,e.right),T(t))return t;throw new Error(p(e,"RUNTIME","ONLYORORAND"));case"&&":if(r===!1)return r;if(t=await c(n,e.right),T(t))return t;throw new Error(p(e,"RUNTIME","ONLYORORAND"));default:throw new Error(p(e,"RUNTIME","ONLYORORAND"))}}async function Q(n,e){const r=e.name.toLowerCase();if(n.localScope!==null&&n.localScope[r]!==void 0){const t=n.localScope[r];if(t.valueset===!0)return t.value;if(t.d!==null)return t.d;t.d=c(n,t.node);const o=await t.d;return t.value=o,t.valueset=!0,o}if(n.globalScope[r]!==void 0){const t=n.globalScope[r];if(t.valueset===!0)return t.value;if(t.d!==null)return t.d;t.d=c(n,t.node);const o=await t.d;return t.value=o,t.valueset=!0,o}throw new Error(p(e,"RUNTIME","VARIABLENOTFOUND"))}async function sn(n,e){if(e.callee.type!=="Identifier")throw new Error(p(e,"RUNTIME","ONLYNODESSUPPORTED"));if(n.localScope!==null&&n.localScope[e.callee.name.toLowerCase()]!==void 0){const r=n.localScope[e.callee.name.toLowerCase()];if(r.value instanceof A)return r.value.fn(n,e);if(r.value instanceof D)return ae(n,e,r.value.definition);throw new Error(p(e,"RUNTIME","NOTAFUNCTION"))}if(n.globalScope[e.callee.name.toLowerCase()]!==void 0){const r=n.globalScope[e.callee.name.toLowerCase()];if(r.value instanceof A)return r.value.fn(n,e);if(r.value instanceof D)return ae(n,e,r.value.definition);throw new Error(p(e,"RUNTIME","NOTAFUNCTION"))}throw new Error(p(e,"RUNTIME","NOTFOUND"))}async function cn(n,e){return e.value?e.value.cooked:""}async function ln(n,e){const r=[];for(let a=0;a<e.expressions.length;a++){const i=await c(n,e.expressions[a]);r[a]=b(i)}let t="",o=0;for(const a of e.quasis)t+=a.value?a.value.cooked:"",a.tail===!1&&(t+=r[o]?r[o]:"",o++);return t}const E={};function oe(n){return n===null?"":U(n)||x(n)?"Array":Ue(n)?"Date":g(n)?"String":T(n)?"Boolean":O(n)?"Number":n instanceof be?"Attachment":n instanceof Re?"Portal":n instanceof v?"Dictionary":C(n)?"Feature":n instanceof xe?"Point":n instanceof Fe?"Polygon":n instanceof Me?"Polyline":n instanceof Pe?"Multipoint":n instanceof De?"Extent":j(n)?"Function":se(n)?"FeatureSet":Le(n)?"FeatureSetCollection":n===u?"":typeof n=="number"&&isNaN(n)?"Number":"Unrecognised Type"}async function ue(n,e,r,t){const o=await c(n,e.arguments[r]);if(B(o,t))return c(n,e.arguments[r+1]);const a=e.arguments.length-r;return a===1?c(n,e.arguments[r]):a===2?null:a===3?c(n,e.arguments[r+2]):ue(n,e,r+2,t)}async function fe(n,e,r,t){if(t===!0)return c(n,e.arguments[r+1]);if(e.arguments.length-r===3)return c(n,e.arguments[r+2]);const o=await c(n,e.arguments[r+2]);if(T(o)===!1)throw new Error("WHEN needs boolean test conditions");return fe(n,e,r+2,o)}async function q(n,e){const r=n.length,t=Math.floor(r/2);if(r===0)return[];if(r===1)return[n[0]];const o=[q(n.slice(0,t),e),q(n.slice(t,r),e)],a=await Promise.all(o);return P(a[0],a[1],e,[])}async function P(n,e,r,t){const o=t;if(!(n.length>0||e.length>0))return t;if(n.length>0&&e.length>0){let a=await r(n[0],e[0]);return isNaN(a)&&(a=1),a<=0?(o.push(n[0]),n=n.slice(1)):(o.push(e[0]),e=e.slice(1)),P(n,e,r,t)}return n.length>0?(o.push(n[0]),P(n=n.slice(1),e,r,t)):e.length>0?(o.push(e[0]),P(n,e=e.slice(1),r,t)):void 0}function R(n,e){const r=n.length,t=Math.floor(r/2);return e||(e=function(o,a){return o<a?-1:o===a?0:1}),r===0?[]:r===1?[n[0]]:un(R(n.slice(0,t),e),R(n.slice(t,r),e),e)}function un(n,e,r){const t=[];for(;n.length>0||e.length>0;)if(n.length>0&&e.length>0){let o=r(n[0],e[0]);isNaN(o)&&(o=1),o<=0?(t.push(n[0]),n=n.slice(1)):(t.push(e[0]),e=e.slice(1))}else n.length>0?(t.push(n[0]),n=n.slice(1)):e.length>0&&(t.push(e[0]),e=e.slice(1));return t}async function pe(n,e,r){const t=n.body;if(r.length!==n.params.length)throw new Error("Invalid Parameter calls to function.");for(let a=0;a<r.length;a++){const i=n.params[a];i.type==="Identifier"&&(e.localScope[i.name.toLowerCase()]={d:null,value:r[a],valueset:!0,node:null})}const o=await c(e,t);if(o instanceof m)return o.value;if(o===S)throw new Error("Cannot Break from a Function");if(o===_)throw new Error("Cannot Continue from a Function");return o instanceof L?o.value:o}function ae(n,e,r){return M(n,e,function(t,o,a){const i={spatialReference:n.spatialReference,services:n.services,console:n.console,lrucache:n.lrucache,interceptor:n.interceptor,localScope:{},abortSignal:n.abortSignal,globalScope:n.globalScope,depthCounter:n.depthCounter+1};if(i.depthCounter>64)throw new Error("Exceeded maximum function depth");return pe(r,i,a)})}function K(n){return function(){const r={abortSignal:n.context.abortSignal,spatialReference:n.context.spatialReference,console:n.context.console,lrucache:n.context.lrucache,interceptor:n.context.interceptor,services:n.context.services,localScope:{},globalScope:n.context.globalScope,depthCounter:n.context.depthCounter+1};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return pe(n.definition,r,arguments)}}we(E,N),he(E,N),de(E,N),Ee(E,N),ge(E,N),je({functions:E,compiled:!1,signatures:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:N,standardFunctionAsync:M}),E.typeof=function(n,e){return N(n,e,function(r,t,o){Y(o,1,1);const a=oe(o[0]);if(a==="Unrecognised Type")throw new Error("Unrecognised Type");return a})},E.iif=async function(n,e){Y(e.arguments===null?[]:e.arguments,3,3);const r=await c(n,e.arguments[0]);if(T(r)===!1)throw new Error("IF Function must have a boolean test condition");const t=[];return t[0]=await c(n,e.arguments[1]),t[1]=await c(n,e.arguments[2]),r?t[0]:t[1]},E.decode=async function(n,e){if(e.arguments.length<2)throw new Error("Missing Parameters");if(e.arguments.length===2)return c(n,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new Error("Must have a default value result.");return ue(n,e,1,await c(n,e.arguments[0]))},E.when=async function(n,e){if(e.arguments.length<3)throw new Error("Missing Parameters");if(e.arguments.length%2==0)throw new Error("Must have a default value result.");const r=await c(n,e.arguments[0]);if(T(r)===!1)throw new Error("WHEN needs boolean test conditions");return fe(n,e,0,r)},E.sort=function(n,e){return M(n,e,async function(r,t,o){Y(o,1,2);let a=o[0];if(x(a)&&(a=a.toArray()),U(a)===!1)throw new Error("Illegal Argument");if(o.length>1){if(j(o[1])===!1)throw new Error("Illegal Argument");return q(a,K(o[1]))}let i=a;if(i.length===0)return[];const s={};for(let h=0;h<i.length;h++){const d=oe(i[h]);d!==""&&(s[d]=!0)}if(s.Array===!0||s.Dictionary===!0||s.Feature===!0||s.Point===!0||s.Polygon===!0||s.Polyline===!0||s.Multipoint===!0||s.Extent===!0||s.Function===!0)return i.slice(0);let l=0,f="";for(const h in s)l++,f=h;return l>1||f==="String"?i=R(i,function(h,d){if(h==null||h===u)return d==null||d===u?0:1;if(d==null||d===u)return-1;const W=b(h),X=b(d);return W<X?-1:W===X?0:1}):f==="Number"?i=R(i,function(h,d){return h-d}):f==="Boolean"?i=R(i,function(h,d){return h===d?0:d?-1:1}):f==="Date"&&(i=R(i,function(h,d){return d-h})),i})};const fn={fixSpatialReference:ke,parseArguments:J,standardFunction:N,standardFunctionAsync:M,evaluateIdentifier:Q,arcadeCustomFunction:K};for(const n in E)E[n]={value:new A(E[n]),valueset:!0,node:null};const F=function(){};function pn(n,e){const r=new F;n==null&&(n={}),e==null&&(e={});const t=new v({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});t.immutable=!1,r.textformatting={value:t,valueset:!0,node:null};for(const o in e)r[o]={value:new A(e[o]),native:!0,valueset:!0,node:null};for(const o in n)n[o]&&n[o].declaredClass==="esri.Graphic"?r[o]={value:ie.createFromGraphic(n[o]),valueset:!0,node:null}:r[o]={value:n[o],valueset:!0,node:null};return r}function wn(n){console.log(n)}F.prototype=E,F.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},F.prototype.pi={value:Math.PI,valueset:!0,node:null};const yn=fn;function hn(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:N,standardFunctionAsync:M,evaluateIdentifier:Q,arcadeCustomFunctionHandler:K};for(let r=0;r<n.length;r++)n[r].registerFunctions(e);for(const r in e.functions)E[r]={value:new A(e.functions[r]),valueset:!0,node:null},F.prototype[r]=E[r];for(let r=0;r<e.signatures.length;r++)me(e.signatures[r],"async")}async function Nn(n,e){let r=e.spatialReference;r==null&&(r=new Oe({wkid:102100}));const t=pn(e.vars,e.customfunctions),o={spatialReference:r,services:e.services,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:t,console:e.console?e.console:wn,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:1};let a=await c(o,n.body[0].body);if(a instanceof m&&(a=a.value),a instanceof L&&(a=a.value),a===u&&(a=null),a===S)throw new Error("Cannot return BREAK");if(a===_)throw new Error("Cannot return CONTINUE");if(a instanceof A)throw new Error("Cannot return FUNCTION");if(a instanceof D)throw new Error("Cannot return FUNCTION");return a}function vn(n,e){return ye(n)}function In(n,e){return Ne(n,e,"full")}function Tn(n,e){return ve(n,e)}function Sn(n,e){return Ie(n,e)}function bn(n){return Te(n)}hn([Se]);export{Nn as executeScript,hn as extend,vn as extractFieldLiterals,bn as findFunctionCalls,yn as functionHelper,Sn as referencesFunction,Tn as referencesMember,In as validateScript};
