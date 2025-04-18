import{m as A}from"./WGLContainer-djDmAKWH.js";import{x as f,h as v}from"./Program-4_EQxIcM.js";import{D as g,L as l,F as X,_ as I,E as Q,G as R,U as S}from"./enums-CYMvjYBC.js";import{e as p,m as U}from"./Texture-CfffoWZ9.js";import{o as x}from"./ProgramTemplate--sLNQTyE.js";import{gn as M}from"./index-D51AduEB.js";class d{constructor(s,e,r,n,u,a,o,_,T){this.createQuery=s,this.deleteQuery=e,this.resultAvailable=r,this.getResult=n,this.disjoint=u,this.beginTimeElapsed=a,this.endTimeElapsed=o,this.createTimestamp=_,this.timestampBits=T}}let i=!1;function F(t,s){if(s.disjointTimerQuery)return null;let e=t.getExtension("EXT_disjoint_timer_query_webgl2");return e?new d(()=>t.createQuery(),r=>{t.deleteQuery(r),i=!1},r=>t.getQueryParameter(r,t.QUERY_RESULT_AVAILABLE),r=>t.getQueryParameter(r,t.QUERY_RESULT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,t.beginQuery(e.TIME_ELAPSED_EXT,r))},()=>{t.endQuery(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>t.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):(e=t.getExtension("EXT_disjoint_timer_query"),e?new d(()=>e.createQueryEXT(),r=>{e.deleteQueryEXT(r),i=!1},r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_AVAILABLE_EXT),r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_EXT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,r))},()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):null)}class P{constructor(){this._result=!1}dispose(){this._program=M(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}class N extends P{constructor(s){super(),this._rctx=s;const e=`
    precision highp float;

    attribute vec2 a_pos;
    varying vec2 v_uv;

    void main() {
      v_uv = a_pos;
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,r=`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `;this._program=s.programCache.acquire(e,r,new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(s){const e=this._rctx;if(!e.gl)return s.dispose(),!0;const r=new p(1);r.wrapMode=g.CLAMP_TO_EDGE,r.samplingMode=l.NEAREST;const n=new f(e,r),u=v.createVertex(e,X.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),a=new x(e,new Map([["a_pos",0]]),A,{geometry:u}),o=new p;o.samplingMode=l.LINEAR,o.wrapMode=g.CLAMP_TO_EDGE;const _=new U(e,o,E);e.useProgram(s),e.bindTexture(_,0),s.setUniform1i("u_texture",0);const T=e.getBoundFramebufferObject(),{x:c,y:h,width:y,height:w}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clearSafe(I.COLOR_BUFFER_BIT),e.bindVAO(a),e.drawArrays(Q.TRIANGLE_STRIP,0,4);const m=new Uint8Array(4);return n.readPixels(0,0,1,1,R.RGBA,S.UNSIGNED_BYTE,m),a.dispose(),n.dispose(),_.dispose(),e.setViewport(c,h,y,w),e.bindFramebuffer(T),m[0]!==255}}const E=new Image;E.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",E.width=5,E.height=5,E.decode();export{F as a,N as f,P as t};
