import{Q as i,au as s,bW as r}from"./index.da161cf1.js";import{r as n}from"./FieldsIndex.09813895.js";function o(){return{fields:{type:[i],value:null},fieldsIndex:{readOnly:!0,get(){return new n(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e)this.fieldsIndex?.has(t)||s.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e});return r(this.fieldsIndex,e)}}}}export{o as s};
