import{ak as o,al as i,bD as c}from"./index.da161cf1.js";async function l(r,e,a){const s=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(s&&s.type==="unique-value"&&s.styleOrigin){const n=await o(s.populateFromStyle());if(i(a),n.ok===!1){const t=n.error;e&&e.messages&&e.messages.push(new c("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:e})),r.clear("renderer",e?.origin)}}}export{l as t};