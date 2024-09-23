import{dN as V,dn as z,dp as j,bo as k,dq as q,dP as O,dO as P,f as b,M as w,cO as A,cv as x,cV as W,cY as p,ea as I,cU as S,eb as $,ec as E,ed as T,ee as N,ef as m,s as F,aT as D,C as G,T as R,k as f,y as u,eg as K,dt as X,q as C,br as Y,bS as g}from"./index-D51AduEB.js";import{I as U,x as Z,Z as B}from"./elevationInfoUtils-CY5iklfc.js";let y=class extends V(z(j(k(q(O(P(Y))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){this._set("elevationInfo",a),this._validateElevationInfo()}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var L,M;const i=(L=a.root)==null?void 0:L.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(M=a.root)==null?void 0:M.transform,c=g();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=A(t[0]),n=A(t[1]),r=t[4],s=A(t[2]),e=A(t[3]),d=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:r,xmax:s,ymax:e,zmax:d,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=x(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),r=g();W(r,l,x(-n,-n,-n));const s=g();if(p(s,l,x(n,n,n)),o&&this._verifyArray(o,16)){const v=o;I(c,r,v),S(r,c),I(c,s,v),S(s,c)}$(r,E,0,r,b.WGS84,0,1),$(s,E,0,s,b.WGS84,0,1);const e=g(),d=g();T(e,r,s),N(d,r,s),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:d[0],ymax:d[1],zmax:d[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=x(t[0],t[1],t[2]),n=x(t[3],t[4],t[5]),r=x(t[6],t[7],t[8]),s=x(t[9],t[10],t[11]),e=[];for(let h=0;h<8;++h)e.push(g());if(p(e[0],l,n),p(e[0],e[0],r),p(e[0],e[0],s),m(e[1],l,n),p(e[1],e[1],r),p(e[1],e[1],s),p(e[2],l,n),m(e[2],e[2],r),p(e[2],e[2],s),m(e[3],l,n),m(e[3],e[3],r),p(e[3],e[3],s),p(e[4],l,n),p(e[4],e[4],r),m(e[4],e[4],s),m(e[5],l,n),p(e[5],e[5],r),m(e[5],e[5],s),p(e[6],l,n),m(e[6],e[6],r),m(e[6],e[6],s),m(e[7],l,n),m(e[7],e[7],r),m(e[7],e[7],s),o&&this._verifyArray(o,16)){const h=o;for(let _=0;_<8;++_)I(e[_],e[_],h)}const d=x(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE),v=x(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let h=0;h<8;++h)$(e[h],E,0,e[h],b.WGS84,0,1),T(v,v,e[h]),N(d,d,e[h]);this.fullExtent=new w({xmin:v[0],ymin:v[1],zmin:v[2],xmax:d[0],ymax:d[1],zmax:d[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var c;if((c=o.typeKeywords)!=null&&c.includes("IntegratedMesh"))return!0;throw new F("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){D(o)}this.url&&await G(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(c=>{this._initFullExtent(c.data)},c=>{D(c)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const a=this.elevationInfo,i="Integrated mesh 3d tiles layers";U(R.getLogger(this),Z(i,"absolute-height",a)),U(R.getLogger(this),B(i,a))}};f([u({type:["IntegratedMesh3DTilesLayer"]})],y.prototype,"operationalLayerType",void 0),f([u({type:b})],y.prototype,"spatialReference",void 0),f([u({type:w})],y.prototype,"fullExtent",void 0),f([u(K)],y.prototype,"elevationInfo",null),f([u({type:["show","hide"]})],y.prototype,"listMode",void 0),f([u(X)],y.prototype,"url",void 0),f([u({readOnly:!0})],y.prototype,"type",void 0),f([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),f([u({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.minScale",write:()=>{},read:()=>{}}}}})],y.prototype,"minScale",void 0),f([u({type:Number,json:{origins:{"web-scene":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}},"portal-item":{name:"layerDefinition.maxScale",write:()=>{},read:()=>{}}}}})],y.prototype,"maxScale",void 0),y=f([C("esri.layers.IntegratedMesh3DTilesLayer")],y);const Q=y;export{Q as default};
