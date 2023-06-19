import{e as t,y as e,a as o,a3 as a}from"./index.da161cf1.js";import{_ as s}from"./FeatureLayerViewBase3D.d9ff8f8b.js";import"./FeatureLikeLayerView3D.2804d5c7.js";import"./Query.e586665e.js";import"./dehydratedFeatureComparison.d41240fc.js";import"./queryForSymbologySnapping.b7a5beb4.js";import"./elevationInfoUtils.d710f6c5.js";import"./hash.25af2a28.js";import"./diffUtils.f0876598.js";import"./UniqueValueRenderer.0143139a.js";import"./ColorStop.f762bde8.js";import"./colorRamps.80cb140e.js";import"./Graphics3DObjectStates.1983c1d0.js";import"./jsonUtils.4745b876.js";import"./DictionaryLoader.90c8c47c.js";import"./FieldsIndex.09813895.js";import"./heatmapUtils.32e9a30b.js";import"./defaults.83793da7.js";import"./defaultsJSON.a416f32c.js";import"./optimizedFeatureQueryEngineAdapter.b17e3ee2.js";import"./centroid.66ea1f85.js";import"./PooledRBush.b9188fbe.js";import"./quickselect.b8e0afc3.js";import"./popupUtils.5174221c.js";import"./FeatureFilter.97dd33dd.js";import"./floorFilterUtils.2fa4f3da.js";import"./QueryEngine.f42b4b13.js";import"./normalizeUtils.54c24a4d.js";import"./normalizeUtilsCommon.87227ae2.js";import"./WhereClause.c0b1e923.js";import"./executionError.10e29c03.js";import"./json.7bed7e43.js";import"./QueryEngineCapabilities.a6a6a20b.js";import"./utils.8873e24e.js";import"./generateRendererUtils.e8dfecdf.js";import"./FeatureSet.97dc0f24.js";import"./FeatureStore.e774d369.js";import"./BoundsStore.13c0920f.js";import"./projectExtentUtils.4a1e869d.js";import"./LayerView3D.a0f4cfd4.js";import"./query.22cd43bf.js";import"./pbfQueryUtils.c4418ce7.js";import"./pbf.82c57b62.js";import"./queryZScale.2643e684.js";import"./EventedSet.2b4d6c27.js";import"./FeatureEffect.ee83c7e0.js";import"./jsonUtils.1c231e28.js";import"./LayerView.948860d4.js";import"./RefreshableLayerView.93fee593.js";const l=p=>{let r=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([e()],r.prototype,"layer",void 0),t([e({readOnly:!0})],r.prototype,"availableFields",null),r=t([o("esri.views.layers.OGCFeatureLayerView")],r),r};let i=class extends l(s){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new a("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};t([e()],i.prototype,"layer",void 0),i=t([o("esri.views.3d.layers.OGCFeatureLayerView3D")],i);const pr=i;export{pr as default};
