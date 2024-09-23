import{k as a,y as o,q as v,bs as R,O as b,T as _,a6 as P,X as z,M as B,Z as f,fJ as A,C as I,dU as U,eE as C,s as V,ad as M,aY as L,aV as $,F as O,ez as E,V as S,N as q,aH as H}from"./index-D51AduEB.js";import{d as N,f as j,a as J}from"./RasterVFDisplayObject-CMRpy5oq.js";import{m as G,u as W}from"./LayerView-BTNGnBI0.js";import{$ as X}from"./GraphicsView2D-BkzxLojD.js";import{h as Y}from"./HighlightGraphicContainer-BMelD3du.js";import{M as Z,m as K,f as Q}from"./dataUtils-CR281KFh.js";import{a as ee}from"./BitmapContainer-BGKkUdZ1.js";import{h as te,E as D}from"./Container-CK_aUK2u.js";import{l as ie}from"./Bitmap-D95uD41g.js";import{v as re}from"./ExportStrategy-CHJILqJK.js";import{J as se}from"./rasterProjectionHelper-o5uKY5g8.js";import{n as ae}from"./WGLContainer-djDmAKWH.js";import{p as oe}from"./popupUtils-LnzIgk1t.js";import{i as ne}from"./RefreshableLayerView-AulJIxtU.js";import"./Program-4_EQxIcM.js";import"./Texture-CfffoWZ9.js";import"./enums-CYMvjYBC.js";import"./ProgramTemplate--sLNQTyE.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./LabelMetric-5BimbXZd.js";import"./enums-BRqP_wXA.js";import"./BoundingBox-FvlPfwBS.js";import"./CIMSymbolHelper-BO8Cy4uu.js";import"./BidiEngine-DL33fnW5.js";import"./fontUtils-tNac7dFu.js";import"./OptimizedGeometry-DLPswkPy.js";import"./GeometryUtils-Cxpdzr7N.js";import"./definitions-ChNTV7Fi.js";import"./Rect-CUzevAry.js";import"./AttributeStore-Dqaj07dg.js";import"./UpdateTracking2D-hu0aaCNy.js";import"./TurboLine-CnyILW1M.js";import"./earcut-Ckt7cHJY.js";import"./BindType-BmZEZMMh.js";import"./Util-BQCtGvST.js";import"./highlightReasons-C2l8UMPg.js";import"./constants-D5zmR9t2.js";import"./TimeOnly-CyJI4oOO.js";import"./timeSupport-BXXkKmrB.js";import"./featureConversionUtils-DKlHm2Hy.js";import"./OptimizedFeature-CXeSoBCN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-CieFG0g1.js";import"./normalizeUtilsSync-CV8fbClE.js";import"./AGraphicContainer-Bbeak704.js";import"./TechniqueInstance-DExVcUY2.js";import"./TileContainer-k3aUM3az.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-pu9RBNlY.js";import"./config-MDUrh2eL.js";let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new te,this.updateRequested=!1,this.type="imagery",this._bitmapView=new ee}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{b(t)||_.getLogger(this).error(t)})}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new re({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:t.extent}}).catch(e=>{b(e)||_.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(t)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),r=Z(i,t);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){var c;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,t,i,r);if(s.imageBitmap)return s.imageBitmap;const n=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),l=new ie(n.pixelBlock,(c=n.extent)==null?void 0:c.clone(),s.pixelData.pixelBlock);return l.filter=p=>this.layer.applyFilter(p),l}};a([o()],h.prototype,"attached",void 0),a([o()],h.prototype,"container",void 0),a([o()],h.prototype,"layer",void 0),a([o()],h.prototype,"strategy",void 0),a([o()],h.prototype,"timeExtent",void 0),a([o()],h.prototype,"view",void 0),a([o()],h.prototype,"updateRequested",void 0),a([o()],h.prototype,"updating",null),a([o()],h.prototype,"type",void 0),h=a([v("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h;class he extends ae{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[N],target:()=>this.children,drawPhase:D.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===D.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=z((t,i)=>this._update(t,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,n=new B({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,c]=e.state.size;this._loading=this.fetchPixels(n,l,c,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,n=new j(s);n.offset=[0,0],n.symbolizerParameters=t,n.rawPixelData=e,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=s.width*t.symbolTileSize,n.height=s.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};a([o()],y.prototype,"fetchPixels",void 0),a([o()],y.prototype,"container",void 0),a([o()],y.prototype,"_loading",void 0),a([o()],y.prototype,"updating",null),y=a([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pe=y;let d=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:c,height:p}=K(e,t,i,n,s);if(s!=null&&!s.intersects(e))return{extent:l,pixelBlock:null};const m={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(m)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===m.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,c,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=m;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Q(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pe({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),A),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const e=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{b(t)||_.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return se(this.layer.fullExtent,e)}catch{try{const i=(await I(this.layer.url,{query:{option:"footprints",outSR:U(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?B.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([o()],d.prototype,"attached",void 0),a([o()],d.prototype,"container",void 0),a([o()],d.prototype,"layer",void 0),a([o()],d.prototype,"timeExtent",void 0),a([o()],d.prototype,"type",void 0),a([o()],d.prototype,"view",void 0),a([o()],d.prototype,"updating",null),d=a([v("esri.views.2d.layers.imagery.VectorFieldView2D")],d);const de=d,ce=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeaturesAtLocation(i,r){const{layer:s}=this;if(!i)throw new V("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:n}=s,l=oe(s,r);if(!n||l==null)throw new V("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const c=await l.getRequiredFields();M(r);const p=new L;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=c,p.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:g}=this.view,x=this.view.type==="2d"?new $(m,m,g):new $(.5*m,.5*m,g),{returnTopmostRaster:u,showNoDataRecords:k}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},T={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:k,signal:r==null?void 0:r.signal};return s.queryVisibleRasters(p,T).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return a([o()],t.prototype,"layer",void 0),a([o()],t.prototype,"suspended",void 0),a([o(C)],t.prototype,"timeExtent",void 0),a([o()],t.prototype,"view",void 0),t=a([v("esri.views.layers.ImageryLayerView")],t),t};let w=class extends ce(ne(G(W))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new O,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new X({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Y(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},E),f(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},E),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:S.isCollection(e)?e.at(0):e)instanceof P))return q();let i=[];return Array.isArray(e)||S.isCollection(e)?i=e.map(r=>r.clone()):e instanceof P&&(i=[e.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var t,i;const e=!this.subview||this.subview.updating||!!((t=this._highlightView)!=null&&t.updating);return H("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),e}_setSubView(){var i,r;if(!this.view)return;const e=(i=this.layer.renderer)==null?void 0:i.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:s}=this.subview;if(s===t)return this._attachSubview(this.subview),void(s==="flow"?this.subview.redrawOrRefetch():s==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new de({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new J({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};a([o()],w.prototype,"pixelData",null),a([o()],w.prototype,"subview",void 0),w=a([v("esri.views.2d.layers.ImageryLayerView2D")],w);const pt=w;export{pt as default};
