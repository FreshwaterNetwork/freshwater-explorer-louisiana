function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D51AduEB.js","assets/index-CIZ34OJ5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{cE as Y,dU as ee,dT as te,iH as re,iI as G,$ as se,k as l,y as c,iJ as ie,ek as ne,u as B,M as O,f as oe,dV as ae,q as T,r as D,v as le,a6 as A,t as ue,fM as pe,z as ye,bH as ce,B as he,A as fe,C as de,bs as me,X as ge,aZ as be,s as H,N as j,V as we,a7 as z,dx as q,_ as xe,en as ve,b3 as _,aH as $e,iK as Se,ad as J,iL as Fe,c2 as Ee}from"./index-D51AduEB.js";import{n as Re,p as Me}from"./popupUtils-LnzIgk1t.js";function N(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function Ie(t){let e=0,s=0;for(let n=0;n<t.length;n++){const r=t[n].size;typeof r=="number"&&(e+=r,s++)}return e/s}function Q(t,e){var s;return typeof t=="number"?t:(s=t==null?void 0:t.stops)!=null&&s.length?Ie(t.stops):e}function Oe(t,e){if(!e)return t;const s=e.filter(i=>i.type==="size").map(i=>{const{maxSize:u,minSize:p}=i;return(Q(u,t)+Q(p,t))/2});let n=0;const r=s.length;if(r===0)return t;for(let i=0;i<r;i++)n+=s[i];const o=Math.floor(n/r);return Math.max(o,t)}function k(t){var o;const e=t==null?void 0:t.renderer,s=t==null?void 0:t.pointerType,n=s==="touch"?9:6;if(!e)return n;const r="visualVariables"in e?Oe(n,e.visualVariables):n;if(e.type==="simple")return N(r,e.symbol);if(e.type==="unique-value"){let i=r;return(o=e.uniqueValueInfos)==null||o.forEach(u=>{i=N(i,u.symbol)}),i}if(e.type==="class-breaks"){let i=r;return e.classBreakInfos.forEach(u=>{i=N(i,u.symbol)}),i}return e.type==="dot-density"||e.type,r}function je(t,e){const{dpi:s,gdbVersion:n,geometry:r,geometryPrecision:o,height:i,historicMoment:u,layerOption:p,mapExtent:a,maxAllowableOffset:y,returnFieldName:h,returnGeometry:m,returnUnformattedValues:v,returnZ:$,spatialReference:E,timeExtent:d,tolerance:S,width:w}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:I}=Ne(t),L=(e==null?void 0:e.geometry)!=null?e.geometry:null,x={historicMoment:u,geometryPrecision:o,maxAllowableOffset:y,returnFieldName:h,returnGeometry:m,returnUnformattedValues:v,returnZ:$,tolerance:S},R=L&&L.toJSON()||r;x.imageDisplay=`${w},${i},${s}`,n&&(x.gdbVersion=n),R&&(delete R.spatialReference,x.geometry=JSON.stringify(R),x.geometryType=Y(R));const U=E??(R==null?void 0:R.spatialReference)??(a==null?void 0:a.spatialReference);if(U&&(x.sr=ee(U)),x.time=d?[d.start,d.end].join(","):null,a){const{xmin:C,ymin:W,xmax:K,ymax:X}=a;x.mapExtent=`${C},${W},${K},${X}`}return b&&(x.layerDefs=b),g&&!b&&(x.dynamicLayers=g),x.layers=p==="popup"?"visible":p,I&&!g&&(x.layers+=`:${I.join(",")}`),x}function Ne(t){var $,E;const{mapExtent:e,floors:s,width:n,sublayers:r,layerIds:o,layerOption:i,gdbVersion:u}=t,p=(E=($=r==null?void 0:r.find(d=>d.layer!=null))==null?void 0:$.layer)==null?void 0:E.serviceSublayers,a=i==="popup",y={},h=te({extent:e,width:n,spatialReference:e==null?void 0:e.spatialReference}),m=[],v=d=>{const S=h===0,w=d.minScale===0||h<=d.minScale,g=d.maxScale===0||h>=d.maxScale;if(d.visible&&(S||w&&g))if(d.sublayers)d.sublayers.forEach(v);else{if((o==null?void 0:o.includes(d.id))===!1||a&&(!d.popupTemplate||!d.popupEnabled))return;m.unshift(d)}};if(r==null||r.forEach(v),r&&!m.length)y.layerIds=[];else{const d=re(m,p,u),S=m.map(w=>{const g=G(s,w);return w.toExportImageJSON(g)});if(d)y.dynamicLayers=JSON.stringify(S);else{if(r){let g=m.map(({id:b})=>b);o&&(g=g.filter(b=>o.includes(b))),y.layerIds=g}else o!=null&&o.length&&(y.layerIds=o);const w=Pe(s,m);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(y.layerDefs=JSON.stringify(g))}}}return y}function Pe(t,e){const s=!!(t!=null&&t.length),n=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return n.length?n.map(r=>{const o=G(t,r),i=se(o,r.definitionExpression);return{id:r.id,definitionExpression:i??void 0}}):null}var V;let f=V=class extends D{static from(t){return le(V,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};l([c({type:Number,json:{write:!0}})],f.prototype,"dpi",void 0),l([c()],f.prototype,"floors",void 0),l([c({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),l([c({types:ie,json:{read:ne,write:!0}})],f.prototype,"geometry",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"height",void 0),l([c({type:Date})],f.prototype,"historicMoment",void 0),l([B("historicMoment")],f.prototype,"writeHistoricMoment",null),l([c({type:[Number],json:{write:!0}})],f.prototype,"layerIds",void 0),l([c({type:["top","visible","all","popup"],json:{write:!0}})],f.prototype,"layerOption",void 0),l([c({type:O,json:{write:!0}})],f.prototype,"mapExtent",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnFieldName",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnGeometry",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnM",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnUnformattedValues",void 0),l([c({type:Boolean,json:{write:!0}})],f.prototype,"returnZ",void 0),l([c({type:oe,json:{write:!0}})],f.prototype,"spatialReference",void 0),l([c()],f.prototype,"sublayers",void 0),l([c({type:ae,json:{write:!0}})],f.prototype,"timeExtent",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"tolerance",void 0),l([c({type:Number,json:{write:!0}})],f.prototype,"width",void 0),f=V=l([T("esri.rest.support.IdentifyParameters")],f);const Z=f;let F=class extends D{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return A.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:n}=t;s&&(e.attributes={...s}),n!=null&&(e.geometry=n.toJSON(),e.geometryType=pe.toJSON(n.type))}};l([c({type:String,json:{write:!0}})],F.prototype,"displayFieldName",void 0),l([c({type:A})],F.prototype,"feature",void 0),l([ue("feature",["attributes","geometry"])],F.prototype,"readFeature",null),l([B("feature")],F.prototype,"writeFeature",null),l([c({type:Number,json:{write:!0}})],F.prototype,"layerId",void 0),l([c({type:String,json:{write:!0}})],F.prototype,"layerName",void 0),F=l([T("esri.rest.support.IdentifyResult")],F);const _e=F;async function Ve(t,e,s){const n=(e=Te(e)).geometry?[e.geometry]:[],r=ye(t);return r.path+="/identify",ce(n).then(o=>{const i=je(e,{geometry:o==null?void 0:o[0]}),u=he({...r.query,f:"json",...i}),p=fe(u,s);return de(r.path,p).then(Ge).then(a=>Ae(a,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>_e.fromJSON(s)),e}function Te(t){return t=Z.from(t)}function Ae(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function n(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(n)}e.forEach(n);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let P=null;function Qe(t,e){return e.type==="tile"||e.type==="map-image"}let M=class extends me{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ge(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([be(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var i,u;const{layerView:{layer:s,view:{scale:n}}}=this;if(!t)throw new H("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Le(s.sublayers,n,e);if(!r.length)return[];const o=await He(s,r);if(!((((u=(i=s.capabilities)==null?void 0:i.operations)==null?void 0:u.supportsIdentify)??!0)&&s.version>=10.5)&&!o)throw new H("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return o?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return j();let s=null;if(t instanceof A?s=[t]:we.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(z),!(s!=null&&s.length))return j();for(const n of s){const r=n.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(n.visible=!1)}return e.addMany(s),j(()=>e.removeMany(s??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:n}=this;if(s&&n)for(const r of t){const o=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&o&&"getSymbolAsync"in o&&o.getSymbolAsync(r).then(async i=>{var a;i||(i=new q);let u=null;const p="visualVariables"in o?(a=o.visualVariables)==null?void 0:a.find(y=>y.type==="size"):void 0;p&&(P||(P=(await xe(()=>import("./index-D51AduEB.js").then(y=>y.ng),__vite__mapDeps([0,1]))).getSize),u=P(p,r,{view:e.type,scale:e.scale,shape:i.type==="simple-marker"?i.style:null})),u||(u="width"in i&&"height"in i&&i.width!=null&&i.height!=null?Math.max(i.width,i.height):"size"in i?i.size:16),s.includes(r)&&(r.symbol=new q({style:"square",size:u,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),n(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:n,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(n!=null&&n.length)||!e.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(t),i=new Map;for(const a of n)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>o){const y=a.sourceLayer;ve(i,y,()=>new Map).set(a.getObjectId(),a)}const u=Array.from(i,([a,y])=>{const h=a.createQuery();return h.objectIds=[...y.keys()],h.outFields=[a.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=o,h.outSpatialReference=s.spatialReference,a.queryFeatures(h)}),p=await Promise.all(u);if(!this.destroyed)for(const{features:a}of p)for(const y of a){const h=y.sourceLayer,m=i.get(h).get(y.getObjectId());m&&n.includes(m)&&(m.geometry=y.geometry,r(m,"geometry"),this._featuresResolutions.set(m,o))}}_getTargetResolution(t){const e=t*_(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const n=await this._createIdentifyParameters(t,e,s);if(n==null)return[];const{results:r}=await Ve(this.layerView.layer.parsedUrl,n,s);return r.map(o=>o.feature)}async _createIdentifyParameters(t,e,s){const{floors:n,layer:r,timeExtent:o,view:{spatialReference:i,scale:u}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:v})=>v.load(s).catch(()=>{})));const p=Math.min($e("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((v,$)=>$.renderer?k({renderer:$.renderer,pointerType:s==null?void 0:s.pointerType}):v,2)),a=this.createFetchPopupFeaturesQueryGeometry(t,p),y=Se(u,i),h=Math.round(a.width/y),m=new O({xmin:a.center.x-y*h,ymin:a.center.y-y*h,xmax:a.center.x+y*h,ymax:a.center.y+y*h,spatialReference:a.spatialReference});return new Z({floors:n,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:i,sublayers:r.sublayers,timeExtent:o,tolerance:p,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:n,timeExtent:r}}=this,o=e.map(async({sublayer:i,popupTemplate:u})=>{var g;if(await i.load(s).catch(()=>{}),i.capabilities&&!i.capabilities.operations.supportsQuery)return[];const p=i.createQuery(),a=k({renderer:i.renderer,pointerType:s==null?void 0:s.pointerType}),y=this.createFetchPopupFeaturesQueryGeometry(t,a),h=new Set,[m]=await Promise.all([Re(i,u),(g=i.renderer)==null?void 0:g.collectRequiredFields(h,i.fieldsIndex)]);J(s),Fe(h,i.fieldsIndex,m);const v=Array.from(h).sort();if(p.geometry=y,p.outFields=v,p.timeExtent=r,n){const b=n.clone(),I=G(b,i);I!=null&&(p.where=p.where?`(${p.where}) AND (${I})`:I)}const $=this._getTargetResolution(y.width/a),E=await Ue(u);J(s);const d=i.geometryType==="point"||E&&E.arcadeUtils.hasGeometryOperations(u);d||(p.maxAllowableOffset=$);let{features:S}=await i.queryFeatures(p,s);const w=d?0:$;S=await ze(i,S,s);for(const b of S)this._featuresResolutions.set(b,w);return S});return(await Promise.allSettled(o)).reduce((i,u)=>u.status==="fulfilled"?[...i,...u.value]:i,[]).filter(z)}};function Le(t,e,s){const n=[];if(!t)return n;const r=o=>{const i=o.minScale===0||e<=o.minScale,u=o.maxScale===0||e>=o.maxScale;if(o.visible&&i&&u){if(o.sublayers)o.sublayers.forEach(r);else if(o.popupEnabled){const p=Me(o,{...s,defaultPopupTemplateEnabled:!1});p!=null&&n.unshift({sublayer:o,popupTemplate:p})}}};return t.map(r),n}function Ue(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?Ee():Promise.resolve()}async function He(t,e){var s,n;if((n=(s=t.capabilities)==null?void 0:s.operations)!=null&&n.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function ze(t,e,s){const n=t.renderer;return n&&"defaultSymbol"in n&&!n.defaultSymbol&&(e=n.valueExpression?await Promise.all(e.map(r=>n.getSymbolAsync(r,s).then(o=>o?r:null))).then(r=>r.filter(o=>o!=null)):e.filter(r=>n.getSymbol(r)!=null)),e}l([c({constructOnly:!0})],M.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([c({constructOnly:!0})],M.prototype,"layerView",void 0),l([c({constructOnly:!0})],M.prototype,"highlightGraphics",void 0),l([c({constructOnly:!0})],M.prototype,"highlightGraphicUpdated",void 0),l([c({constructOnly:!0})],M.prototype,"updatingHandles",void 0),M=l([T("esri.views.layers.support.MapService")],M);function ke(t,e,s,n=new O){let r=0;if(s.type==="2d")r=e*(s.resolution??0);else if(s.type==="3d"){const y=s.overlayPixelSizeInMapUnits(t),h=s.basemapSpatialReference;r=h==null||h.equals(s.spatialReference)?e*y:_(h)/_(s.spatialReference)}const o=t.x-r,i=t.y-r,u=t.x+r,p=t.y+r,{spatialReference:a}=s;return n.xmin=Math.min(o,u),n.ymin=Math.min(i,p),n.xmax=Math.max(o,u),n.ymax=Math.max(i,p),n.spatialReference=a,n}new O;export{Qe as S,M as U,ke as r};
