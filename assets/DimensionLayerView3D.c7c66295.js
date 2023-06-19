import{e as a,y as t,a as y,V as h,fi as w,q as u,A as d,a3 as c,iz as V,l as p,ff as _,fh as m,cd as v}from"./index.da161cf1.js";import{n as A}from"./LayerView3D.a0f4cfd4.js";import{d as f}from"./LayerView.948860d4.js";const D=e=>{let s=class extends e{constructor(...i){super(...i),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(i){this.analysisView!=null&&(this.analysisView.interactive=i)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(i){this.analysisView!=null&&(this.analysisView.selectedDimension=i)}async createLengthDimensions(i){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(i)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),a([t()],s.prototype,"analysisView",void 0),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends A(D(f)){constructor(e){super(e),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(u(()=>this.layer.source,e=>{this._destroyAnalysisView(),e!=null&&this._createAnalysisView(e)},d),o)}destroy(){this.handles.remove(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new c("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(e){const s=V(async i=>(this.analysisView=await this._createAnalysisViewPromise(e,i),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(e,s){let i=this._analysisModule;if(i==null){const r=await this._loadAnalysisModule();this._analysisModule=r,i=r}const l=new i.default({analysis:e,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D.6fd62f7c.js").then(function(e){return e.D}),["assets/DimensionAnalysisView3D.6fd62f7c.js","assets/index.da161cf1.js","assets/index.8db76e31.css","assets/LineVisualElement.0ee7ffd4.js","assets/LengthDimension.4b10a477.js","assets/Segment.b33fc9b3.js","assets/unitFormatUtils.42a6eb3a.js","assets/elevationInfoUtils.d710f6c5.js","assets/analysisViewUtils.8aae6db1.js","assets/ImageMaterial.1905961e.js","assets/Factory.312f3b3e.js","assets/RightAngleQuadVisualElement.408eff27.js","assets/VisualElementResources.f6c3d94a.js","assets/PointVisualElement.eb5b4fbb.js","assets/EditGeometryOperations.3139b272.js","assets/dehydratedFeatureComparison.d41240fc.js"])}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const $=n;export{$ as default};