import{ad as R,a3 as a,e as d,y as _,a as m,eO as b,lA as k,au as c,dk as O,aX as v,bZ as L,a0 as N,cd as x,I as E}from"./index.da161cf1.js";import{m as S}from"./query.22cd43bf.js";import{b as P}from"./Query.e586665e.js";import"./normalizeUtils.54c24a4d.js";import"./normalizeUtilsCommon.87227ae2.js";import"./pbfQueryUtils.c4418ce7.js";import"./pbf.82c57b62.js";import"./queryZScale.2643e684.js";let p=class extends R.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new a("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};d([_({readOnly:!0})],p.prototype,"connectionError",null),p=d([m("esri.layers.support.StreamConnection")],p);const F=p;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends F{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=b(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(e){this._websocket!=null?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;const s=k(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(s),this.notifyChange("connectionStatus")}catch(s){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(c.getLogger(this).error(new a("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(c.getLogger(this).error(new a("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,s)),await O(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const r=JSON.parse(t.data);this._onMessage(r)}catch(r){return void c.getLogger(this).error(new a("websocket-connection","Failed to parse message, invalid JSON",{error:r}))}}}_createWebSocket(e){return new Promise((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=o=>this._onClose(o),s.onerror=o=>this._onError(o),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=o=>{s.onopen=s.onclose=null,r(o)}})}async _handshake(e=1e4){const t=this._websocket;if(t==null)return;const r=v(),s=t.onmessage,{filter:o,outFields:n,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=h=>{let u=null;try{u=JSON.parse(h.data)}catch{}u&&typeof u=="object"||(c.getLogger(this).error(new a("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),r.reject(),this.destroy()),u.spatialReference?.wkid!==l?.wkid&&(c.getLogger(this).error(new a("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,h.data)),r.reject(),this.destroy()),u.format!=="json"&&(c.getLogger(this).error(new a("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),r.reject(),this.destroy()),o&&u.filter!==o&&c.getLogger(this).error(new a("websocket-connection","Tried to set filter, but server doesn't support it")),n&&u.outFields!==n&&c.getLogger(this).error(new a("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const i of this._outstandingMessages)t.send(JSON.stringify(i));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:o,outFields:n,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),c.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&c.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};d([_()],f.prototype,"connectionStatus",null),d([_()],f.prototype,"errorString",void 0),f=d([m("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const M=1e4,W={maxQueryDepth:5,maxRecordCountFactor:3};let w=class extends f{constructor(e){super({...W,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||c.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void c.getLogger(this).error(new a("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=L(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return k(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return c.getLogger(this).error(new a("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=v(),l=()=>{o||(this.destroyed||this._websocket!==r||c.getLogger(this).error(new a("geoevent-connection","Server timed out when setting filter")),n.reject())},h=u=>{const i=JSON.parse(u.data);i.filter&&(i.error&&(c.getLogger(this).error(new a("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),o=!0,n.resolve())};return r.onmessage=h,r.send(s),setTimeout(l,M),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e!=null&&e.geometry)try{const s=N(e.geometry);if(s.type!=="extent")throw new a(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){c.getLogger(this).error(new a("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e!=null&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return c.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=s;for(const l in o)e.attributes[l]=o[l];return n&&(e.geometry=n),e.geometry||e.centroid||c.getLogger(this).error(new a("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){c.getLogger(this).error(new a("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await x(()=>import("./FeatureLayer.6ea98f03.js"),["assets/FeatureLayer.6ea98f03.js","assets/index.da161cf1.js","assets/index.8db76e31.css","assets/UniqueValueRenderer.0143139a.js","assets/ColorStop.f762bde8.js","assets/diffUtils.f0876598.js","assets/colorRamps.80cb140e.js","assets/jsonUtils.4745b876.js","assets/DictionaryLoader.90c8c47c.js","assets/FieldsIndex.09813895.js","assets/heatmapUtils.32e9a30b.js","assets/sql.414b1952.js","assets/FeatureLayerBase.07ef7e55.js","assets/featureLayerUtils.0566dc37.js","assets/AttachmentQuery.c430db32.js","assets/Query.e586665e.js","assets/RelationshipQuery.60e2b826.js","assets/serviceCapabilitiesUtils.c358c66d.js","assets/editsZScale.58b9a03e.js","assets/queryZScale.2643e684.js","assets/FeatureSet.97dc0f24.js","assets/APIKeyMixin.605900a3.js","assets/ArcGISService.116191b2.js","assets/BlendLayer.eacc4944.js","assets/jsonUtils.1c231e28.js","assets/CustomParametersMixin.244652a9.js","assets/EditBusLayer.3831f0f2.js","assets/FeatureEffectLayer.a9b039ed.js","assets/FeatureEffect.ee83c7e0.js","assets/FeatureFilter.97dd33dd.js","assets/FeatureReductionLayer.9f7296a1.js","assets/LabelClass.1c6b8047.js","assets/defaults.83793da7.js","assets/defaultsJSON.a416f32c.js","assets/OrderedLayer.bbc75e49.js","assets/PortalLayer.9c2e677f.js","assets/portalItemUtils.ea6f2bf4.js","assets/ScaleRangeLayer.1a5bb9a6.js","assets/TemporalLayer.5874b62b.js","assets/FeatureTemplate.c7eaa370.js","assets/FeatureType.4659b5f1.js","assets/fieldProperties.174d0f24.js","assets/labelingInfo.990e68e3.js","assets/versionUtils.05c8a355.js","assets/styleUtils.a985c9a8.js","assets/TopFeaturesQuery.165d1927.js","assets/popupUtils.f5ffced0.js"])).default({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,l=this._config.maxRecordCountFactor,h=t.capabilities.query.maxRecordCount,u=s?h*l:h,i=new P;if(i.outFields=this._config.outFields??["*"],i.where=this._config.filter?.where??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=E.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),s&&(i.maxRecordCountFactor=l),o)return i.num=u,t.destroy(),this._queryPages(e,i);const C=await S(e,i,this._config.sourceSpatialReference);return t.destroy(),C.data}async _queryPages(e,t,r=[],s=0){t.start=t.num!=null?s*t.num:null;const{data:o}=await S(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,s+1)):(r.forEach(n=>o.features.push(n)),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const n=o.attributes[s];t.set(n,o)}this._relatedFeatures=t}};w=d([m("esri.layers.graphics.sources.connections.GeoEventConnection")],w);const T=w;let y=class extends F{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=b(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};d([_()],y.prototype,"connectionStatus",void 0),d([_()],y.prototype,"errorString",void 0),y=d([m("esri.layers.support.ClientSideConnection")],y);function Z(e,t,r,s,o,n,l,h){const u={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:l,customParameters:h};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(u):new T(u):new y(u)}export{Z as createConnection};