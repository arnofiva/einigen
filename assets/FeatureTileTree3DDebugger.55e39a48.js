import{c as d,t as l,h,l as g,e as r,y as s,j as p,a as c}from"./index.da161cf1.js";import{y as u}from"./TileTreeDebugger.f46f3b0e.js";let i=class extends u{get updating(){return this._watchUpdatingTracking?.updating??!1}constructor(t){super(t),this._watchUpdatingTracking=new d,this._handles=new l}initialize(){const{featureTiles:t}=this.view;this._handles.add(t.addClient()),this._watchUpdatingTracking.addOnCollectionChange(()=>t?.tiles,()=>this.update(),h)}destroy(){this._handles=g(this._handles),this._watchUpdatingTracking.destroy()}getTiles(){const t=e=>{const[a,n,o]=e.lij;return p.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(a,n,o))};return this.view.featureTiles.tiles.toArray().sort((e,a)=>e.loadPriority-a.loadPriority).map(e=>({...e,geometry:t(e)}))}};r([s()],i.prototype,"_watchUpdatingTracking",void 0),r([s()],i.prototype,"updating",null),r([s()],i.prototype,"view",void 0),i=r([c("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],i);export{i as FeatureTileTree3DDebugger};
