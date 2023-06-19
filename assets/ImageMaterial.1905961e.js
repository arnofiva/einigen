import{fs as P,ft as m,fu as v,fa as f,fv as u,fw as y,fx as O,fy as A,fz as $,cf as i,fA as g,fB as S,fC as p,fD as C,cd as E,fE as x,fF as _,e as o,fG as n,fH as d,fI as w,fJ as b,fK as N,fL as D,fM as M,fN as R,fO as I,fP as F,fQ as L,fR as U,fS as W,fT as B,fU as G,fV as z,fW as H,fX as j,fY as Q,cg as c,fZ as V,f_ as q,f$ as J,g0 as K}from"./index.da161cf1.js";function X(a){const e=new P,{vertex:t,fragment:s}=e;return m(t,a),e.include(v,a),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(O,a),s.uniforms.add(new A("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===i.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(g)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(S),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(g)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===p.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const Y=Object.freeze(Object.defineProperty({__proto__:null,build:X},Symbol.toStringTag,{value:"Module"}));class h extends w{initializeProgram(e){return new b(e.rctx,h.shader.get().build(this.configuration),N)}_setPipelineState(e,t){const s=this.configuration,l=e===p.NONE,T=e===p.FrontFace;return D({blending:s.output!==i.Color&&s.output!==i.Alpha||!s.transparent?null:l?Z:M(e),culling:R(s.cullFace),depthTest:{func:I(e)},depthWrite:l?s.writeDepth?F:null:L(e),colorWrite:U,stencilWrite:s.hasOccludees?W:null,stencilTest:s.hasOccludees?t?B:G:null,polygonOffset:l||T?null:z(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new C(Y,()=>E(()=>import("./ImageMaterial.glsl.f66ce23c.js"),["assets/ImageMaterial.glsl.f66ce23c.js","assets/index.da161cf1.js","assets/index.8db76e31.css"]));const Z=x(_.ONE,_.ONE_MINUS_SRC_ALPHA);class r extends H{constructor(){super(...arguments),this.output=i.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:i.COUNT})],r.prototype,"output",void 0),o([n({count:d.COUNT})],r.prototype,"cullFace",void 0),o([n()],r.prototype,"hasSlicePlane",void 0),o([n()],r.prototype,"transparent",void 0),o([n()],r.prototype,"enableOffset",void 0),o([n()],r.prototype,"writeDepth",void 0),o([n()],r.prototype,"hasOccludees",void 0),o([n({count:p.COUNT})],r.prototype,"transparencyPassType",void 0),o([n()],r.prototype,"hasMultipassTerrain",void 0),o([n()],r.prototype,"cullAboveGround",void 0);class ae extends j{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Q,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===i.Color||t===i.Alpha||t===i.Highlight?e===c.DRAPED_MATERIAL?!0:t===i.Highlight?e===c.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?c.TRANSPARENT_MATERIAL:c.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:c.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new k(e)}createBufferWriter(){return new V(q)}}class k extends J{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==i.Color&&this._output!==i.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends K{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,X as v};
