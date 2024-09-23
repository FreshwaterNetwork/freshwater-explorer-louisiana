import{k as a,y as h,eE as F,q as S,a5 as E,s as f,ad as $,O as C,T as q,Z as R,M as U}from"./index-D51AduEB.js";import{a as M}from"./BitmapContainer-BGKkUdZ1.js";import{m as V,u as L}from"./LayerView-BTNGnBI0.js";import{v as W}from"./ExportStrategy-CHJILqJK.js";import{i as A}from"./RefreshableLayerView-AulJIxtU.js";import{a as H}from"./ExportWMSImageParameters-BWClEuOK.js";import"./WGLContainer-djDmAKWH.js";import"./definitions-ChNTV7Fi.js";import"./LabelMetric-5BimbXZd.js";import"./enums-CYMvjYBC.js";import"./enums-BRqP_wXA.js";import"./Texture-CfffoWZ9.js";import"./Program-4_EQxIcM.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-FvlPfwBS.js";import"./ProgramTemplate--sLNQTyE.js";import"./Container-CK_aUK2u.js";import"./highlightReasons-C2l8UMPg.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";import"./earcut-Ckt7cHJY.js";import"./featureConversionUtils-DKlHm2Hy.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./OptimizedGeometry-DLPswkPy.js";import"./Bitmap-D95uD41g.js";const z=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=E(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeaturesAtLocation(r,o){const{layer:s}=this;if(!r)throw new f("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:d}=s;if(!d)throw new f("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const i=this.createFetchPopupFeaturesQuery(r);if(!i)return[];const{extent:p,width:n,height:m,x:c,y}=i;if(!(p&&n&&m))throw new f("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:n,height:m});const g=await s.fetchFeatureInfo(p,n,m,c,y);return $(o),g}};return a([h()],t.prototype,"exportImageParameters",void 0),a([h({readOnly:!0})],t.prototype,"exportImageVersion",null),a([h()],t.prototype,"layer",void 0),a([h(F)],t.prototype,"timeExtent",void 0),t=a([S("esri.layers.mixins.WMSLayerView")],t),t};let u=class extends z(A(V(L))){constructor(){super(...arguments),this.bitmapContainer=new M}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||q.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new M,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=E(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:o,y:s}=e,{spatialReference:d}=t;let i,p=0,n=0;if(r.children.some(g=>{const{width:w,height:v,resolution:I,x:l,y:x}=g,P=l+I*w,b=x-I*v;return o>=l&&o<=P&&s<=x&&s>=b&&(i=new U({xmin:l,ymin:b,xmax:P,ymax:x,spatialReference:d}),p=w,n=v,!0)}),!i)return null;const m=i.width/p,c=Math.round((o-i.xmin)/m),y=Math.round((i.ymax-s)/m);return{extent:i,width:p,height:n,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,o){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...o})}};a([h()],u.prototype,"strategy",void 0),a([h()],u.prototype,"updating",void 0),u=a([S("esri.views.2d.layers.WMSLayerView2D")],u);const ut=u;export{ut as default};
