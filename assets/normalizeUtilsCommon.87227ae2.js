import{cD as t,I as r,ec as o}from"./index.da161cf1.js";const p={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new t({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:r.WebMercator}),minus180Line:new t({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:r.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new t({paths:[[[180,-180],[180,180]]],spatialReference:r.WGS84}),minus180Line:new t({paths:[[[-180,-180],[-180,180]]],spatialReference:r.WGS84})}};function u(e,n){return Math.ceil((e-n)/(2*n))}function m(e,n){const s=c(e);for(const a of s)for(const i of a)i[0]+=n;return e}function c(e){return o(e)?e.rings:e.paths}export{u as i,c as o,p as r,m as s};