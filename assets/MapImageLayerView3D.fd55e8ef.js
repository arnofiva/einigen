import{e as t,y as r,ky as p,a as s}from"./index.da161cf1.js";import{z as a}from"./DynamicLayerView3D.50afe590.js";import{m}from"./ExportImageParameters.2bba9d02.js";import{U as n}from"./MapServiceLayerViewHelper.8a01bf5c.js";import{r as l}from"./drapedUtils.603ce2e5.js";import"./LayerView3D.a0f4cfd4.js";import"./projectExtentUtils.4a1e869d.js";import"./ImageMaterial.1905961e.js";import"./LayerView.948860d4.js";import"./RefreshableLayerView.93fee593.js";import"./sql.414b1952.js";import"./floorFilterUtils.2fa4f3da.js";import"./sublayerUtils.e7f91234.js";import"./normalizeUtils.54c24a4d.js";import"./normalizeUtilsCommon.87227ae2.js";import"./popupUtils.5174221c.js";const h=i=>{let e=class extends i{initialize(){this.exportImageParameters=new m({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return t([r()],e.prototype,"exportImageParameters",void 0),t([r({readOnly:!0})],e.prototype,"floors",null),t([r({readOnly:!0})],e.prototype,"exportImageVersion",null),t([r()],e.prototype,"layer",void 0),t([r()],e.prototype,"suspended",void 0),t([r(p)],e.prototype,"timeExtent",void 0),e=t([s("esri.views.layers.MapImageLayerView")],e),e};let o=class extends h(a){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new n({createFetchPopupFeaturesQueryGeometry:(i,e)=>l(i,e,this.view),layerView:this,updatingHandles:this.updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeatures(i,e){return this._popupHighlightHelper.fetchPopupFeatures(i,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};o=t([s("esri.views.3d.layers.MapImageLayerView3D")],o);const z=o;export{z as default};