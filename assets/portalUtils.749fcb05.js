import{bN as a,eu as l,bZ as o}from"./index.da161cf1.js";function c(r,e){return r===null?e:new a({url:r.field("url")})}async function d(r,e,u){if(!l?.findCredential(r.restUrl))return null;if(r.loadStatus==="loaded"&&e===""&&r.user&&r.user.sourceJSON&&u===!1)return r.user.sourceJSON;if(e===""){const n=await o(r.restUrl+"/community/self",{responseType:"json",query:{f:"json",...u===!1?{}:{returnUserLicenseTypeExtensions:!0}}});if(n.data){const s=n.data;if(s&&s.username)return s}return null}const t=await o(r.restUrl+"/community/users/"+e,{responseType:"json",query:{f:"json"}});if(t.data){const n=t.data;return n.error?null:n}return null}export{d as s,c as t};