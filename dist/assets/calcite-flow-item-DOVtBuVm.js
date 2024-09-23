import{aO as w,aP as S,ej as m,aM as t,aQ as V}from"./index-D51AduEB.js";import{s as p,o as X,m as Y,t as x,g as Z}from"./dom-DPsTWDAQ.js";import{c as E,u as A,d as H,I as F}from"./interactive-DuuXC7PK.js";import{s as B,a as z,c as L}from"./loadable-BTgbo9lE.js";import{c as P,a as I,s as M,d as O,b as T,u as D}from"./t9n-BlGH8PmK.js";import{c as N}from"./observers--10hCE7d.js";import{d as $,a as R,S as ee,H as te}from"./action-menu-B4hkuuSy.js";import{d as _}from"./action-Ce25C75C.js";import{d as W}from"./icon-JstQpOoa.js";import{d as j}from"./loader-Byzhpenl.js";import{d as K}from"./scrim-Df_PsSAW.js";import"./guid-DQtJl1SZ.js";import"./debounce-CYvLhpWS.js";import"./focusTrapComponent-C_xT3REh.js";import"./openCloseComponent-Bu49Ek0R.js";import"./component-WqEOSVCt.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const a={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},v={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},s={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},oe=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",ne=w(class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=m(this,"calcitePanelClose",6),this.calcitePanelToggle=m(this,"calcitePanelToggle",6),this.calcitePanelScroll=m(this,"calcitePanelScroll",6),this.resizeObserver=N("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=p(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=p(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=p(e)},this.handleActionBarSlotChange=e=>{const o=X(e).filter(n=>n==null?void 0:n.matches("calcite-action-bar"));o.forEach(n=>n.layout="horizontal"),this.hasActionBar=!!o.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=p(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=p(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=p(e)},this.handleFabSlotChange=e=>{this.hasFab=p(e)},this.setPanelScrollEl=e=>{var o,n;this.panelScrollEl=e,(o=this.resizeObserver)==null||o.disconnect(),e&&((n=this.resizeObserver)==null||n.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){E(this),P(this),I(this)}async componentWillLoad(){B(this),await M(this)}componentDidLoad(){z(this)}componentDidRender(){A(this)}disconnectedCallback(){var e;H(this),O(this),T(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){D(this,this.effectiveLocale)}async setFocus(){await L(this),Y(this.containerEl)}async scrollContentTo(e){var o;(o=this.panelScrollEl)==null||o.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:o,description:n,hasHeaderContent:c}=this,l=e?t(te,{class:a.heading,level:o},e):null,i=n?t("span",{class:a.description},n):null;return!c&&(l||i)?t("div",{class:a.headerContent,key:"header-content"},l,i):null}renderActionBar(){return t("div",{class:a.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:s.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:a.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:s.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return t("div",{class:{[a.headerActionsStart]:!0,[a.headerActions]:!0},hidden:!e,key:"header-actions-start"},t("slot",{name:s.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:o,closable:n,collapsed:c,collapseDirection:l,collapsible:i,hasMenuItems:r}=this,{collapse:d,expand:f,close:u}=o,g=[v.expand,v.collapse];l==="up"&&g.reverse();const b=i?t("calcite-action",{"aria-expanded":x(!c),"aria-label":d,"data-test":"collapse",icon:c?g[0]:g[1],onClick:this.collapse,text:d,title:c?f:d}):null,C=n?t("calcite-action",{"aria-label":u,"data-test":"close",icon:v.close,onClick:this.close,text:u,title:u}):null,q=t("slot",{name:s.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),J=e||b||C||r;return t("div",{class:{[a.headerActionsEnd]:!0,[a.headerActions]:!0},hidden:!J,key:"header-actions-end"},q,this.renderMenu(),b,C)}renderMenu(){const{hasMenuItems:e,messages:o,menuOpen:n}=this;return t("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:o.options,open:n,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},t("calcite-action",{icon:v.menu,slot:ee.trigger,text:o.options}),t("slot",{name:s.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:o,hasEndActions:n,closable:c,collapsible:l,hasMenuItems:i,hasActionBar:r}=this,d=this.renderHeaderContent(),f=e||!!d||o||n||l||c||i;return this.showHeaderContent=f,t("header",{class:a.header,hidden:!(f||r)},t("div",{class:{[a.headerContainer]:!0,[a.headerContainerBorderEnd]:r},hidden:!f},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:o}=this,n=e||o;return t("footer",{class:a.footer,hidden:!n},t("slot",{key:"footer-slot",name:s.footer,onSlotchange:this.handleFooterSlotChange}),t("slot",{key:"footer-actions-slot",name:s.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return t("div",{class:a.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderFab(){return t("div",{class:a.fabContainer,hidden:!this.hasFab},t("slot",{name:s.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:o,panelKeyDownHandler:n,closed:c,closable:l}=this,i=t("article",{"aria-busy":x(o),class:a.container,hidden:c,onKeyDown:n,tabIndex:l?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return t(F,{disabled:e},o?t("calcite-scrim",{loading:o}):null,i)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return oe}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function U(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,ne);break;case"calcite-action":customElements.get(e)||_();break;case"calcite-action-menu":customElements.get(e)||R();break;case"calcite-icon":customElements.get(e)||W();break;case"calcite-loader":customElements.get(e)||j();break;case"calcite-popover":customElements.get(e)||$();break;case"calcite-scrim":customElements.get(e)||K();break}})}U();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.1
 */const ae={backButton:"back-button"},y={backLeft:"chevron-left",backRight:"chevron-right"},h={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},se=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",G=w(class extends S{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=m(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=m(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=m(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=m(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){E(this),P(this),I(this)}async componentWillLoad(){await M(this),B(this)}componentDidRender(){A(this)}disconnectedCallback(){H(this),O(this),T(this)}componentDidLoad(){z(this)}effectiveLocaleChange(){D(this,this.effectiveLocale)}async setFocus(){await L(this);const{backButtonEl:e,containerEl:o}=this;if(e)return e.setFocus();if(o)return o.setFocus()}async scrollContentTo(e){var o;await((o=this.containerEl)==null?void 0:o.scrollContentTo(e))}renderBackButton(){const{el:e}=this,o=Z(e)==="rtl",{showBackButton:n,backButtonClick:c,messages:l}=this,i=l.back,r=o?y.backRight:y.backLeft;return n?t("calcite-action",{"aria-label":i,class:ae.backButton,icon:r,key:"flow-back-button",onClick:c,scale:"s",slot:"header-actions-start",text:i,title:i,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:o,collapsible:n,closable:c,closed:l,description:i,disabled:r,heading:d,headingLevel:f,loading:u,menuOpen:g,messages:b,overlayPositioning:C}=this;return t(V,null,t(F,{disabled:r},t("calcite-panel",{closable:c,closed:l,collapseDirection:o,collapsed:e,collapsible:n,description:i,disabled:r,heading:d,headingLevel:f,loading:u,menuOpen:g,messageOverrides:b,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:C,ref:this.setContainerRef},this.renderBackButton(),t("slot",{name:h.actionBar,slot:s.actionBar}),t("slot",{name:h.headerActionsStart,slot:s.headerActionsStart}),t("slot",{name:h.headerActionsEnd,slot:s.headerActionsEnd}),t("slot",{name:h.headerContent,slot:s.headerContent}),t("slot",{name:h.headerMenuActions,slot:s.headerMenuActions}),t("slot",{name:h.fab,slot:s.fab}),t("slot",{name:h.footerActions,slot:s.footerActions}),t("slot",{name:h.footer,slot:s.footer}),t("slot",null))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return se}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function Q(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,G);break;case"calcite-action":customElements.get(e)||_();break;case"calcite-action-menu":customElements.get(e)||R();break;case"calcite-icon":customElements.get(e)||W();break;case"calcite-loader":customElements.get(e)||j();break;case"calcite-panel":customElements.get(e)||U();break;case"calcite-popover":customElements.get(e)||$();break;case"calcite-scrim":customElements.get(e)||K();break}})}Q();const Se=G,Ee=Q;export{Se as CalciteFlowItem,Ee as defineCustomElement};
