import{ba as o,a3 as a,e as r,y as l,a as p}from"./index.da161cf1.js";import{n}from"./LayerView3D.a0f4cfd4.js";import{o as h}from"./TiledLayerView3D.a907660c.js";import{d as u}from"./LayerView.948860d4.js";import{a as m}from"./RefreshableLayerView.93fee593.js";import{S as f,U as y}from"./MapServiceLayerViewHelper.8a01bf5c.js";import{r as d}from"./drapedUtils.603ce2e5.js";import"./floorFilterUtils.2fa4f3da.js";import"./normalizeUtils.54c24a4d.js";import"./normalizeUtilsCommon.87227ae2.js";import"./sql.414b1952.js";import"./sublayerUtils.e7f91234.js";import"./popupUtils.5174221c.js";let e=class extends m(h(n(u))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get tileInfo(){return this.layer.tileInfo}initialize(){if(this.layer.type==="web-tile"){const t=this.layer.get("fullExtent.spatialReference"),i=this.layer.get("tileInfo.spatialReference");if(t==null||i==null||!o(t,i)){const s=this.layer.originOf("fullExtent")==="defaults"||this.layer.fullExtent==null?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new a("layerview:incompatible-fullextent",s)))}}f(this,this.layer)&&(this._popupHighlightHelper=new y({createFetchPopupFeaturesQueryGeometry:(t,i)=>d(t,i,this.view),layerView:this,updatingHandles:this.updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){this._popupHighlightHelper?.destroy()}async fetchPopupFeatures(t,i){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,i):[]}async doRefresh(){this.suspended||this.emit("data-changed")}};r([l()],e.prototype,"imageFormatIsOpaque",null),r([l()],e.prototype,"hasMixedImageFormats",null),r([l()],e.prototype,"layer",void 0),r([l()],e.prototype,"tileInfo",null),e=r([p("esri.views.3d.layers.TileLayerView3D")],e);const R=e;export{R as default};
