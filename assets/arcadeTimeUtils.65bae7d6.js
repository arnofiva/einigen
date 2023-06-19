import{i as N}from"./executionError.10e29c03.js";import{pT as g,gC as m,pU as k,pV as S,pW as p}from"./index.da161cf1.js";import{r as Z}from"./FieldsIndex.09813895.js";class l{}var y;l.instance=new g("Etc/UTC"),function(a){a.TimeZoneNotRecognised="TimeZoneNotRecognised"}(y||(y={}));const A={[y.TimeZoneNotRecognised]:"Timezone identifier has not been recognised."};class _ extends Error{constructor(e,t){super(N(A[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,_)}}class i{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,n=1,c=0,s=0,r=0,o=0,F){if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(c)||isNaN(s)||isNaN(r)||isNaN(o))return null;let f=0;const R=m.local(e,t).daysInMonth;n<1&&(f=n-1,n=1),n>R&&(f=n-R,n=R);let u=0;t>12?(u=t-12,t=12):t<1&&(u=t-1,t=1);let h=0;s>59?(h=s-59,s=59):s<0&&(h=s,s=0);let T=0;r>59?(T=r-59,r=59):r<0&&(T=r,r=0);let w=0;o>999?(w=o-999,o=999):o<0&&(w=o,o=0);let d=m.fromObject({day:n,year:e,month:t,hour:c,minute:s,second:r,millisecond:o},{zone:I(F)});return u!==0&&(d=d.plus({months:u})),f!==0&&(d=d.plus({days:f})),h!==0&&(d=d.plus({minutes:h})),T!==0&&(d=d.plus({seconds:T})),w!==0&&(d=d.plus({milliseconds:w})),new i(d)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const n=I(t);return e.isUnknownTimeZone||n===l.instance?i.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,n):new i(e._date.setZone(t))}static dateJSToArcadeDate(e){return new i(m.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){return new i(m.fromJSDate(e,{zone:t}))}static unknownEpochToArcadeDate(e){return new i(m.fromMillis(e,{zone:l.instance}))}static unknownDateJSToArcadeDate(e){return new i(m.fromMillis(e.getTime(),{zone:l.instance}))}static epochToArcadeDate(e,t="system"){return new i(m.fromMillis(e,{zone:t}))}static dateTimeToArcadeDate(e){return new i(e)}clone(){return new i(this._date)}changeTimeZone(e){const t=I(e);return i.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const n=I(t);return e.zone===l.instance||n===l.instance?i.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,n):new i(e.setZone(n))}static nowToArcadeDate(e){return new i(m.fromJSDate(new Date,{zone:e}))}static nowUTCToArcadeDate(){return new i(m.utc())}get isSystem(){return this.timeZone==="system"||this.timeZone===i.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===l.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if(this._date.zone.type==="system")return"system";const e=this.zone;return e.type==="fixed"?e.fixed===0?"utc":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new i(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toFormat(e,t){return this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLString(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new i(this._date.toUTC())}toLocal(){return new i(this._date.toLocal())}toString(){return this.toISOString(!0)}}function I(a){if(a instanceof k)return a;if(a.toLowerCase()==="system")return"system";if(a.toLowerCase()==="utc")return"utc";if(a.toLowerCase()==="unknown")return l.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(a)){const t=S.parseSpecifier("UTC"+(a.startsWith("+")||a.startsWith("-")?"":"+")+a);if(t)return t}const e=g.create(a);if(!e.isValid)throw new _(y.TimeZoneNotRecognised);return e}function M(a){return a?.timeZoneIANA?a?.timeZoneIANA:a?.timeZone?p(a,""):""}class D{constructor(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}static create(e,t){const n=new D;return n.dateTimeReferenceMetaData=t,n._fieldIndex=e instanceof Z?e:new Z(e),n}static createFromLayer(e){if(!e)return null;if(!e.fieldsIndex)return!e.declaredClass&&e.fields?D.create(e.fields,e):null;const t=new D;return t._fieldIndex=e.fieldsIndex,t.dateTimeReferenceMetaData={timeInfo:e?.timeInfo?.toJSON()??null,editFieldsInfo:e?.editFieldsInfo?.toJSON()??null,dateFieldsTimeReference:e?.dateFieldsTimeReference?.toJSON()??null,preferredTimeReference:e?.preferredTimeReference?.toJSON()??null,datesInUnknownTimezone:e?.datesInUnknownTimezone===!0},t}fieldTimeZone(e){const t=this._fieldIndex?.get(e);if(!t||t.type!=="date"&&t.type!=="esriFieldTypeDate")return null;const n=this._fieldTimeZoneIndex[t.name];if(n!==void 0)return n;const c=[{field:this.dateTimeReferenceMetaData?.editFieldsInfo?.creationDateField,timeReference:this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference,isunknown:this.dateTimeReferenceMetaData?.datesInUnknownTimezone===!0},{field:this.dateTimeReferenceMetaData?.editFieldsInfo?.editDateField,timeReference:this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference,isunknown:this.dateTimeReferenceMetaData?.datesInUnknownTimezone===!0},{field:this.dateTimeReferenceMetaData?.timeInfo?.startTimeField,timeReference:this.dateTimeReferenceMetaData?.timeInfo?.timeReference,isunknown:this.dateTimeReferenceMetaData?.datesInUnknownTimezone===!0},{field:this.dateTimeReferenceMetaData?.timeInfo?.endTimeField,timeReference:this.dateTimeReferenceMetaData?.timeInfo?.timeReference,isunknown:this.dateTimeReferenceMetaData?.datesInUnknownTimezone===!0}];for(const r of c)if(r.field===t.name){const o=this.convertToIANA(r.timeReference,r.isunknown);return this._fieldTimeZoneIndex[t.name]=o,o}const s=this.convertToIANA(this.dateTimeReferenceMetaData?.dateFieldsTimeReference,this.dateTimeReferenceMetaData?.datesInUnknownTimezone);return this._fieldTimeZoneIndex[t.name]=s,s}convertToIANA(e,t){return t?"unknown":M(e)}get layerPreferredTimeZone(){if(this._ianaPreferred!==null)return this._ianaPreferred;this._ianaPreferred="";const e=this.dateTimeReferenceMetaData?.preferredTimeReference;return this._ianaPreferred=this.convertToIANA(e,this.dateTimeReferenceMetaData?.datesInUnknownTimezone===!0),this._ianaPreferred}get layerTimeInfoTimeZone(){if(this._ianaTimeInfo!==null)return this._ianaTimeInfo;this._ianaTimeInfo="";const e=this.dateTimeReferenceMetaData?.timeInfo?.timeReference;return this._ianaTimeInfo=this.convertToIANA(e,!1),this._ianaTimeInfo}get layerEditFieldsTimeZone(){if(this._ianaEditFields!==null)return this._ianaEditFields;this._ianaEditFields="";const e=this.dateTimeReferenceMetaData?.editFieldsInfo?.dateFieldsTimeReference;return this._ianaEditFields=this.convertToIANA(e,this.dateTimeReferenceMetaData?.datesInUnknownTimezone),this._ianaEditFields}get layerDateFieldsTimeZone(){if(this._ianaLayerDateFields!==null)return this._ianaLayerDateFields;this._ianaLayerDateFields="";const e=this.dateTimeReferenceMetaData?.dateFieldsTimeReference;return this._ianaLayerDateFields=this.convertToIANA(e,this.dateTimeReferenceMetaData?.datesInUnknownTimezone===!0),this._ianaLayerDateFields}}export{D as T,i as c,I as u};
