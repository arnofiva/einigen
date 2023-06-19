var C=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var O=(e,a,r)=>a in e?C(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,f=(e,a)=>{for(var r in a||(a={}))J.call(a,r)&&O(e,r,a[r]);if(v)for(var r of v(a))U.call(a,r)&&O(e,r,a[r]);return e},d=(e,a)=>F(e,N(a));import{r as m,pP as V,t as L,N as x,pQ as M,mP as j,bI as k,bs as E}from"./vendor.fd144a9e.js";import{a as A}from"./lazyLayerLoader.a407b7a5.js";async function W(e){var l;const a=(l=e.properties)==null?void 0:l.customParameters,r=await R(e.url,a),t=d(f({},e.properties),{url:e.url});if(!r.sublayerIds)return r.layerOrTableId!=null&&(t.layerId=r.layerOrTableId,t.sourceJSON=r.sourceJSON),new r.Constructor(t);const s=new(await import("./GroupLayer.291b5696.js")).default({title:r.parsedUrl.title});return B(s,r,t),s}function P(e,a){return e?e.find(r=>r.id===a):null}function B(e,a,r){function t(s,l){const o=d(f({},r),{layerId:s,sublayerTitleMode:"service-name"});return m(l)&&(o.sourceJSON=l),new a.Constructor(o)}a.sublayerIds.forEach(s=>{const l=t(s,P(a.sublayerInfos,s));e.add(l)}),a.tableIds.forEach(s=>{const l=t(s,P(a.tableInfos,s));e.tables.add(l)})}async function R(e,a){var b,S;let r=V(e);if(L(r)&&(r=await q(e,a)),L(r))throw new x("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:t,sublayer:s}=r;let l;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(t){case"MapServer":l=s!=null?"FeatureLayer":K(e,a).then(n=>n?"TileLayer":"MapImageLayer");break;case"ImageServer":l=i(e,{customParameters:a}).then(n=>{const c=n.tileInfo&&n.tileInfo.format;return n.tileInfo?(c==null?void 0:c.toUpperCase())!=="LERC"||n.cacheType&&n.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":l=i(r.url.path,{customParameters:a}).then(n=>{var c;if(n){if((n==null?void 0:n.layerType)==="Voxel")return"VoxelLayer";if((n==null?void 0:n.layers)&&Array.isArray(n.layers)&&n.layers.length>0){const w={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},h=(c=n.layers[0])==null?void 0:c.layerType;if(w[h]!=null)return w[h]}}return"SceneLayer"});break;default:l=o[t]}const u={FeatureLayer:!0,SceneLayer:!0},p=t==="FeatureServer",y={parsedUrl:r,Constructor:null,layerOrTableId:p?s:null,sublayerIds:null,tableIds:null},I=await l;if(u[I]&&s==null){const n=await z(e,t,a);p&&(y.sublayerInfos=n.layerInfos,y.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(y.sublayerIds=n.layerIds,y.tableIds=n.tableIds):p&&(y.layerOrTableId=(b=n.layerIds[0])!=null?b:n.tableIds[0],y.sourceJSON=(S=n.layerInfos[0])!=null?S:n.tableInfos[0])}return y.Constructor=await G(I),y}async function q(e,a){var u;const r=await i(e,{customParameters:a});let t=null,s=null;const l=r.type;if(l==="Feature Layer"||l==="Table"?(t="FeatureServer",s=r.id):l==="indexedVector"?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":T(r)?(t="SceneServer",s=r.id):r.hasOwnProperty("layers")&&T((u=r.layers)==null?void 0:u[0])&&(t="SceneServer"),!t)return null;const o=s!=null?M(e):null;return{title:m(o)&&r.name||j(e),serverType:t,sublayer:s,url:{path:m(o)?o.serviceUrl:k(e).path}}}function T(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function z(e,a,r){let t,s=!1;if(a==="FeatureServer"){const u=await D(e,{customParameters:r});s=!!u.layersJSON,t=u.layersJSON||u.serviceJSON}else t=await i(e,{customParameters:r});const l=t==null?void 0:t.layers,o=t==null?void 0:t.tables;return{layerIds:(l==null?void 0:l.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:s?l:[],tableInfos:s?o:[]}}function g(e){return!e.type||e.type==="Feature Layer"}async function D(e,a){var l,o;let r=await i(e,a);r=r||{},r.layers=((l=r.layers)==null?void 0:l.filter(g))||[];const t={serviceJSON:r};if(r.currentVersion<10.5)return t;const s=await i(e+"/layers",a);return t.layersJSON={layers:((o=s==null?void 0:s.layers)==null?void 0:o.filter(g))||[],tables:(s==null?void 0:s.tables)||[]},t}async function G(e){return(0,A[e])()}async function K(e,a){return(await i(e,{customParameters:a})).tileInfo}async function i(e,a){return(await E(e,{responseType:"json",query:d(f({f:"json"},a==null?void 0:a.customParameters),{token:a==null?void 0:a.apiKey})})).data}export{D as fetchFeatureService,W as fromUrl};