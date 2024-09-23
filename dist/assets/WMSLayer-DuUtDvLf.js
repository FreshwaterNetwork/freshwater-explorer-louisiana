import{dl as Le,aZ as V,ez as E,Z as H,fK as Ae,V as Z,k as o,y as u,M as R,t as O,e9 as Me,q as ge,d as Ue,s as Te,a7 as T,f as I,I as be,c5 as je,bn as _e,dM as Ce,dm as qe,bo as Ve,dn as Be,dp as We,dq as ke,bi as De,aT as Ge,bc as ne,dT as se,C as D,hy as Xe,G as He,eo as Je,a2 as ze,a6 as Ze,fO as Ke,E as Qe,bb as Ye,u as G,ds as et,dZ as tt,dt as rt,br as nt,hz as st}from"./index-D51AduEB.js";import{o as J}from"./crsUtils-DAndLU68.js";import{a as ie}from"./ExportWMSImageParameters-BWClEuOK.js";import{t as it}from"./imageBitmapUtils-Dt48A4Gj.js";var _;let at=0,h=_=class extends Le(Ue){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([V(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},E),V(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},E),H(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},E),H(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},E)])}get id(){return this._get("id")??at++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return Ae(Z.ofType(_),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,r,n;const e=new _;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=((t=this.fullExtents)==null?void 0:t.map(s=>s.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=(r=this.sublayers)==null?void 0:r.map(s=>s.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(n=this.spatialReferences)==null?void 0:n.map(s=>s)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};o([u()],h.prototype,"description",void 0),o([u({readOnly:!0})],h.prototype,"dimensions",void 0),o([u({type:R,json:{name:"extent"}})],h.prototype,"fullExtent",void 0),o([u()],h.prototype,"fullExtents",void 0),o([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),o([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),o([O("legendUrl",["legendUrl","legendURL"])],h.prototype,"readLegendUrl",null),o([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),o([u()],h.prototype,"layer",void 0),o([u()],h.prototype,"maxScale",void 0),o([u()],h.prototype,"minScale",void 0),o([u({readOnly:!0})],h.prototype,"effectiveScaleRange",null),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"name",void 0),o([u()],h.prototype,"parent",void 0),o([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),o([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),o([u()],h.prototype,"sublayers",void 0),o([Me("sublayers")],h.prototype,"castSublayers",null),o([u({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",void 0),o([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=_=o([ge("esri.layers.support.WMSSublayer")],h);const z=h,ae={84:4326,83:4269,27:4267};function ot(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const b=Array.prototype.slice.call(r.childNodes).map(L=>L.textContent).join(`\r
`);throw new Te("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",b)}const n=x("Capability",r),s=x("Service",r),l=n&&x("Request",n);if(!n||!s||!l)return null;const a=x("Layer",n);if(!a)return null;const m=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",i=v("Title",s,"")||v("Name",s,""),y=v("AccessConstraints",s,""),p=/^none$/i.test(y)?"":y,f=v("Abstract",s,""),d=parseInt(v("MaxWidth",s,"5000"),10),w=parseInt(v("MaxHeight",s,"5000"),10),S=le(l,"GetMap"),P=oe(l,"GetMap"),g=U(a,m,t);if(!g)return null;let K,B=0;const Ee=Array.prototype.slice.call(n.childNodes),Ie=g.sublayers??[],W=b=>{b!=null&&Ie.push(b)};Ee.forEach(b=>{b.nodeName==="Layer"&&(B===0?K=b:(B===1&&g.name&&(g.name="",W(U(K,m,t))),W(U(b,m,t))),B++)});let N=g.sublayers,k=g.extent;const Ne=g.fullExtents??[];if(N||(N=[]),N.length===0&&N.push(g),!k){const b=new R(N[0].extent);g.extent=b.toJSON(),k=g.extent}const Fe=g.spatialReferences.length>0?g.spatialReferences:xe(g),Q=oe(l,"GetFeatureInfo"),$e=Q?le(l,"GetFeatureInfo"):null,Y=we(N),Oe=g.minScale||0,Re=g.maxScale||0,ee=g.dimensions??[],Pe=Y.reduce((b,L)=>b.concat(L.dimensions??[]),[]),te=ee.concat(Pe).filter(Se);let re=null;if(te.length){const b=te.map(L=>{const{extent:A}=L;return pt(A)?A.map(j=>j.getTime()):A==null?void 0:A.map(j=>[j.min.getTime(),j.max.getTime()])}).flat(2).filter(T);re={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...b),Math.max(...b)]}}return{copyright:p,description:f,dimensions:ee,extent:k,fullExtents:Ne,featureInfoFormats:$e,featureInfoUrl:Q,mapUrl:P,maxWidth:d,maxHeight:w,maxScale:Re,minScale:Oe,layers:Y,spatialReferences:Fe,supportedImageFormatTypes:S,timeInfo:re,title:i,version:m}}function lt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function xe(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=xe(t);if(r.length>0)return r}return[]}function we(e){var r;let t=[];for(const n of e)t.push(n),(r=n.sublayers)!=null&&r.length&&(t=t.concat(we(n.sublayers)),delete n.sublayers);return t}function C(e,t,r){return t.getAttribute(e)??r}function ut(e,t,r,n){const s=x(e,r);return s?C(t,s,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ve(n)&&n.nodeName===e)return n}return null}function q(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];ve(s)&&s.nodeName===e&&r.push(s)}return r}function v(e,t,r){var n;return((n=x(e,t))==null?void 0:n.textContent)??r}function M(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let m,i,y,p;r?(m=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(n)?-Number.MAX_VALUE:n,y=isNaN(a)?Number.MAX_VALUE:a,p=isNaN(l)?Number.MAX_VALUE:l):(m=isNaN(n)?-Number.MAX_VALUE:n,i=isNaN(s)?-Number.MAX_VALUE:s,y=isNaN(l)?Number.MAX_VALUE:l,p=isNaN(a)?Number.MAX_VALUE:a);const f=new I({wkid:t});return new R({xmin:m,ymin:i,xmax:y,ymax:p,spatialReference:f})}function oe(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const s=x("HTTP",n);if(s){const l=x("Get",s);if(l){let a=ut("OnlineResource","xlink:href",l,null);if(a)return a.indexOf("&")===a.length-1&&(a=a.substring(0,a.length-1)),dt(a,["service","request"])}}}}return null}function le(e,t){const r=q("Operation",e);if(!r.length)return q("Format",x(t,e)).map(({textContent:s})=>s).filter(T);const n=[];for(const s of r)if(s.getAttribute("name")===t){const l=q("Format",s);for(const{textContent:a}of l)a!=null&&n.push(a)}return n}function ue(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const l=Number(s);return isNaN(l)?r:l}function U(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=x("LatLonBoundingBox",e),l=x("EX_GeographicBoundingBox",e);let a=null;s&&(a=M(s,4326)),l&&(a=new R(0,0,0,0,new I({wkid:4326})),a.xmin=parseFloat(v("westBoundLongitude",l,"0")),a.ymin=parseFloat(v("southBoundLatitude",l,"0")),a.xmax=parseFloat(v("eastBoundLongitude",l,"0")),a.ymax=parseFloat(v("northBoundLatitude",l,"0"))),s||l||(a=new R(-180,-90,180,90,new I({wkid:4326}))),n.minScale=ue(e,"MaxScaleDenominator",0),n.maxScale=ue(e,"MinScaleDenominator",0);const m=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(i=>{var y;if(i.nodeName==="Name")n.name=i.textContent||"";else if(i.nodeName==="Title")n.title=i.textContent||"";else if(i.nodeName==="Abstract")n.description=i.textContent||"";else if(i.nodeName==="BoundingBox"){const p=i.getAttribute(m);if(p&&p.indexOf("EPSG:")===0){const d=parseInt(p.substring(5),10);d===0||isNaN(d)||a||(a=t==="1.3.0"?M(i,d,J(d)):M(i,d))}const f=p&&p.indexOf(":");if(f&&f>-1){let d=parseInt(p.substring(f+1,p.length),10);d===0||isNaN(d)||(d=ae[d]??d);const w=t==="1.3.0"?M(i,d,J(d)):M(i,d);w&&n.fullExtents&&n.fullExtents.push(w)}}else if(i.nodeName===m)(((y=i.textContent)==null?void 0:y.split(" "))??[]).forEach(p=>{const f=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(f!==0&&!isNaN(f)){const d=ae[f]??f;n.spatialReferences.includes(d)||n.spatialReferences.push(d)}});else if(i.nodeName!=="Style"||n.legendUrl){if(i.nodeName==="Layer"){const p=U(i,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=x("LegendURL",i);if(p){const f=x("OnlineResource",p);f&&(n.legendUrl=f.getAttribute("xlink:href"))}}}),n.extent=a==null?void 0:a.toJSON(),n.dimensions=q("Dimension",e).filter(i=>i.getAttribute("name")&&i.getAttribute("units")&&i.textContent).map(i=>{const y=i.getAttribute("name"),p=i.getAttribute("units"),f=i.textContent,d=i.getAttribute("unitSymbol")??void 0,w=i.getAttribute("default")??void 0,S=C("default",i,"0")!=="0",P=C("nearestValue",i,"0")!=="0",g=C("current",i,"0")!=="0";return Se({name:y,units:p})?{name:"time",units:"ISO8601",extent:de(f),default:de(w),multipleValues:S,nearestValue:P,current:g}:ct({name:y,units:p})?{name:"elevation",units:p,extent:pe(f),unitSymbol:d,default:pe(w),multipleValues:S,nearestValue:P}:{name:y,units:p,extent:ce(f),unitSymbol:d,default:ce(w),multipleValues:S,nearestValue:P}}),n}function pt(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function ve(e){return e.nodeType===Node.ELEMENT_NODE}function ct(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Se(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function dt(e,t){const r=[],n=be(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}function pe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(T):r.map(n=>parseFloat(n))}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(T):r}function de(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&s[2]!=="0"?mt(s[2]):void 0}}).filter(T):r.map(n=>new Date(n))}function mt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:F(r[1]),months:F(r[2]),days:F(r[3]),hours:F(r[4]),minutes:F(r[5]),seconds:F(r[6])}:null}function F(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function $(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const me=new Set([102100,3857,102113,900913]),ft=new Set([3395,54004]);function yt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&me.has(r)?t.find(n=>me.has(n))||t.find(n=>ft.has(n))||102100:r)}const X=new je({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function fe(e){return e==="text/html"}function ye(e){return e==="text/plain"}let c=class extends _e(Ce(qe(Ve(Be(We(ke(nt))))))){constructor(...e){super(...e),this.allSublayers=new De({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([V(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},E),V(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},E),H(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},E)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ge).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new R({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(fe)??this.featureInfoFormats.find(ye)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(fe(e)||ye(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new I(t.spatialReferences[0])}writeSpatialReferences(e,t){var n;const r=(n=this.spatialReference)==null?void 0:n.wkid;e&&r?(t.spatialReferences=e.filter(s=>s!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return he(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return he(t.layers,r)}writeSublayers(e,t,r,n){var a,m;t.layers=[];const s=new Map,l=e.flatten(({sublayers:i})=>i??[]);for(const i of l)if(typeof((a=i.parent)==null?void 0:a.id)=="number"){const y=s.get(i.parent.id);y!=null?y.push(i.id):s.set(i.parent.id,[i.id])}for(const i of l){const y={sublayer:i,...n},p=i.write({parentLayerId:typeof((m=i.parent)==null?void 0:m.id)=="number"?i.parent.id:-1},y);if(s.has(i.id)&&(p.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const f=i.write({},y);delete f.id,t.layers.push(f)}}t.visibleLayers=l.filter(({visible:i,sublayers:y})=>i&&!y).map(({name:i})=>i).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=be(e);for(const s in r)/^(request|service)$/i.test(s)&&delete r[s];const n=ne(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=(n==null?void 0:n.pixelRatio)??1,l=se({extent:e,width:t})*s,a=new ie({layer:this,scale:l}),{xmin:m,ymin:i,xmax:y,ymax:p,spatialReference:f}=e,d=yt(f,this.spatialReferences),w=this.version==="1.3.0"&&J(d)?`${i},${m},${p},${y}`:`${m},${i},${y},${p}`,S=a.toJSON();return{bbox:w,[this.version==="1.3.0"?"crs":"srs"]:d==null||isNaN(d)?void 0:"EPSG:"+d,...S}}async fetchImage(e,t,r,n){var p,f;const s=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const d=document.createElement("canvas");return d.width=t,d.height=r,d}const a=(p=n==null?void 0:n.timeExtent)==null?void 0:p.start,m=(f=n==null?void 0:n.timeExtent)==null?void 0:f.end,i=a!=null&&m!=null?a.getTime()===m.getTime()?$(a):`${$(a)}/${$(m)}`:void 0,y={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:i,...this.refreshParameters}),signal:n==null?void 0:n.signal};return D(s??"",y).then(d=>d.data)}async fetchImageBitmap(e,t,r,n){var f,d;const s=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const w=document.createElement("canvas");return w.width=t,w.height=r,w}const a=(f=n==null?void 0:n.timeExtent)==null?void 0:f.start,m=(d=n==null?void 0:n.timeExtent)==null?void 0:d.end,i=a!=null&&m!=null?a.getTime()===m.getTime()?$(a):`${$(a)}/${$(m)}`:void 0,y={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:i,...this.refreshParameters}),signal:n==null?void 0:n.signal},{data:p}=await D(s,y);return it(p,s,n==null?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,s){const l=se({extent:e,width:t}),a=new ie({layer:this,scale:l}),m=lt(a.visibleSublayers);if(this.featureInfoUrl==null||m==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const i=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},y={query_layers:m,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...i},p={...this.createExportImageParameters(e,t,r),...y},f=this._mixCustomParameters(p);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(f):this._defaultFetchFeatureInfoFunction(ne(this.featureInfoUrl,f))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return Xe(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?I.WebMercator:new I({wkid:t});return He(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=Je(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new ze({title:this.title,content:t}),n=new Ze({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&((t=this.parsedUrl)!=null&&t.path)){const{path:r,query:n}=this.parsedUrl,{data:s}=await D(r,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...n,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=ot(s)}if(this.parsedUrl){const r=new Ke(this.parsedUrl.path),{httpsDomains:n}=Qe.request;r.scheme!=="https"||r.port&&r.port!=="443"||!r.host||n.includes(r.host)||n.push(r.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function ht(e,t){return e.some(r=>{for(const n in r)if(st(r,n,null,t))return!0;return!1})}function he(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=Ye(e)).forEach((l,a)=>l.id=a);for(const l of e){const a=new z;a.read(l,t),r&&!r.includes(a.name)&&(a.visible=!1),n.set(a.id,a)}const s=[];for(const l of e){const a=l.id!=null?n.get(l.id):null;if(a)if(l.parentLayerId!=null&&l.parentLayerId>=0){const m=n.get(l.parentLayerId);if(!m)continue;m.sublayers||(m.sublayers=new Z),m.sublayers.push(a)}else s.push(a)}return s}o([u({readOnly:!0})],c.prototype,"allSublayers",void 0),o([u({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),o([u({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),o([u({type:String,json:{write:!0}})],c.prototype,"copyright",void 0),o([u()],c.prototype,"description",void 0),o([u({readOnly:!0})],c.prototype,"dimensions",void 0),o([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],c.prototype,"fullExtent",void 0),o([O(["web-document","portal-item"],"fullExtent",["extent"])],c.prototype,"readFullExtentFromItemOrMap",null),o([G(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],c.prototype,"writeFullExtent",null),o([u()],c.prototype,"fullExtents",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoFormat",null),o([u({type:[String],readOnly:!0})],c.prototype,"featureInfoFormats",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoUrl",void 0),o([u()],c.prototype,"fetchFeatureInfoFunction",void 0),o([u({type:String,json:{origins:{"web-document":{default:"image/png",type:X.jsonValues,read:{reader:X.read,source:"format"},write:{writer:X.write,target:"format"}}}}})],c.prototype,"imageFormat",void 0),o([O("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null),o([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],c.prototype,"imageMaxHeight",void 0),o([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],c.prototype,"imageMaxWidth",void 0),o([u()],c.prototype,"imageTransparency",void 0),o([u(et)],c.prototype,"legendEnabled",void 0),o([u({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"mapUrl",void 0),o([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),o([u({type:["WMS"]})],c.prototype,"operationalLayerType",void 0),o([u()],c.prototype,"resourceInfo",void 0),o([u({type:I,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],c.prototype,"spatialReference",void 0),o([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],c.prototype,"readSpatialReferenceFromItemOrDocument",null),o([u({type:[tt],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],c.prototype,"spatialReferences",void 0),o([G(["web-document","portal-item"],"spatialReferences")],c.prototype,"writeSpatialReferences",null),o([u({type:Z.ofType(z),json:{write:{target:"layers",overridePolicy(e,t,r){if(ht(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],c.prototype,"sublayers",void 0),o([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrMap",null),o([O("service","sublayers",["layers"])],c.prototype,"readSublayers",null),o([G("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],c.prototype,"writeSublayers",null),o([u({json:{read:!1},readOnly:!0,value:"wms"})],c.prototype,"type",void 0),o([u(rt)],c.prototype,"url",null),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"version",void 0),c=o([ge("esri.layers.WMSLayer")],c);const vt=c;export{vt as default};
