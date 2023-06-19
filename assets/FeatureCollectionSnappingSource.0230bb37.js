import{m as f,q as u,h as c,aO as b,al as s,e as r,y as a,a as E,d5 as F}from"./index.da161cf1.js";import{m as V}from"./elevationInfoUtils.d710f6c5.js";import{E as C,b as D}from"./DimensionAnalysisView3D.6fd62f7c.js";import{i as A,o as I}from"./queryEngineUtils.847a1e82.js";import{i as h,r as $,n as m}from"./symbologySnappingCandidates.f2dfaf9f.js";import"./LineVisualElement.0ee7ffd4.js";import"./LengthDimension.4b10a477.js";import"./Segment.b33fc9b3.js";import"./unitFormatUtils.42a6eb3a.js";import"./analysisViewUtils.8aae6db1.js";import"./ImageMaterial.1905961e.js";import"./Factory.312f3b3e.js";import"./RightAngleQuadVisualElement.408eff27.js";import"./VisualElementResources.f6c3d94a.js";import"./PointVisualElement.eb5b4fbb.js";import"./EditGeometryOperations.3139b272.js";import"./dehydratedFeatureComparison.d41240fc.js";import"./VertexSnappingCandidate.9b872bd0.js";let n=class extends f{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return h();const o=async(p,l)=>(await F(e.whenLayerView(t),l)).elevationAlignPointsInFeatures(p,l);return h(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:o,spatialReference:e.spatialReference})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return $(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?m(this._symbologySnappingSupported,async(i,o)=>{const p=await e.whenLayerView(t);return s(o),p.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},o)}):m()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(i=>this._layerView3D=i),this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:o}=t;V(i,o)&&this._snappingElevationAligner.notifyElevationSourceChange()}),u(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),c),u(()=>this._layerView3D!=null?this._layerView3D.processor?.renderer:null,()=>this._symbologySnappingFetcher.notifySymbologyChange(),c),b(()=>this._layerView3D?.layer,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null}refresh(){}async fetchCandidates(e,t){const{layer:i}=this.layerSource,o=i.source;if(!o?.querySnapping)return[];const p=C(i),l=D(e,this.view?.type??"2d",p),v=await o.querySnapping(l,{signal:t});s(t);const y=await this._snappingElevationAligner.alignCandidates(v.candidates,t);s(t);const g=await this._symbologySnappingFetcher.fetch(y,t);s(t);const d=g.length===0?y:[...y,...g],S=this._snappingElevationFilter.filter(l,d),w=this._getGroundElevation;return S.map(_=>A(_,w))}get _getGroundElevation(){return I(this.view)}};r([a({constructOnly:!0})],n.prototype,"layerSource",void 0),r([a({constructOnly:!0})],n.prototype,"view",void 0),r([a()],n.prototype,"_snappingElevationAligner",null),r([a()],n.prototype,"_snappingElevationFilter",null),r([a()],n.prototype,"_symbologySnappingFetcher",null),r([a()],n.prototype,"_layerView3D",void 0),r([a()],n.prototype,"_symbologySnappingSupported",null),r([a()],n.prototype,"_getGroundElevation",null),n=r([E("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],n);export{n as FeatureCollectionSnappingSource};