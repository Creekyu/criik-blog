"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[915],{8340:function(e,t,n){n.d(t,{Z:function(){return L}});var o=n(1413),r=n(9439),i=n(5987),a=n(4655),u=n(1694),s=n.n(u),c=n(8829),l=n(4304),f=n(3739),d=n(509),h=n(1605),p=n(3786),v=(n(632),n(2791)),m=v.createContext(null);function g(e){return e?Array.isArray(e)?e:[e]:[]}var b=n(2386);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>2?arguments[2]:void 0)?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function w(e,t,n,o){return t||(n?{motionName:"".concat(e,"-").concat(n)}:o?{motionName:o}:null)}function _(e){return e.ownerDocument.defaultView}function E(e){for(var t=[],n=null===e||void 0===e?void 0:e.parentElement,o=["hidden","scroll","auto"];n;){var r=_(n).getComputedStyle(n),i=r.overflowX,a=r.overflowY;(o.includes(i)||o.includes(a))&&t.push(n),n=n.parentElement}return t}function k(e){return Number.isNaN(e)?1:e}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[e[0],e[1]]}function Z(e,t){var n,o=t[0],r=t[1];return n="t"===o?e.y:"b"===o?e.y+e.height:e.y+e.height/2,{x:"l"===r?e.x:"r"===r?e.x+e.width:e.x+e.width/2,y:n}}function M(e,t){var n={t:"b",b:"t",l:"r",r:"l"};return e.map((function(e,o){return o===t?n[e]||"c":e})).join("")}function C(e,t,n,i,a,u,s){var c=v.useState({ready:!1,offsetX:0,offsetY:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[i]||{}}),d=(0,r.Z)(c,2),p=d[0],m=d[1],g=v.useRef(0),y=v.useMemo((function(){return t?E(t):[]}),[t]),w=v.useRef({});e||(w.current={});var C=(0,f.Z)((function(){if(t&&n&&e){var c,f=function(e,t){var n=A.x+e,o=A.y+t,r=n+W,i=o+V,a=Math.max(n,B.left),u=Math.max(o,B.top),s=Math.min(r,B.right),c=Math.min(i,B.bottom);return Math.max(0,(s-a)*(c-u))},d=function(){ue=A.y+we,se=ue+V,ce=A.x+ye,le=ce+W},h=t,p=h.style.left,v=h.style.top,g=h.ownerDocument,E=_(h),C=(0,o.Z)((0,o.Z)({},a[i]),u);if(h.style.left="0",h.style.top="0",Array.isArray(n))c={x:n[0],y:n[1],width:0,height:0};else{var R=n.getBoundingClientRect();c={x:R.x,y:R.y,width:R.width,height:R.height}}var A=h.getBoundingClientRect(),O=E.getComputedStyle(h),P=O.width,S=O.height,z=g.documentElement,N=z.clientWidth,D=z.clientHeight,T=z.scrollWidth,L=z.scrollHeight,H=z.scrollTop,Y=z.scrollLeft,V=A.height,W=A.width,X=c.height,j=c.width,B="scroll"===C.htmlRegion?{left:-Y,top:-H,right:T-Y,bottom:L-H}:{left:0,top:0,right:N,bottom:D};B=function(e,t){var n=(0,o.Z)({},e);return(t||[]).forEach((function(e){if(!(e instanceof HTMLBodyElement)&&"static"!==_(e).getComputedStyle(e).position){var t=e.getBoundingClientRect(),o=e.offsetHeight,r=e.clientHeight,i=e.offsetWidth,a=(i-e.clientWidth)*k(Math.round(t.width/i*1e3)/1e3),u=(o-r)*k(Math.round(t.height/o*1e3)/1e3),s=t.x+t.width-a,c=t.y+t.height-u;n.left=Math.max(n.left,t.x),n.top=Math.max(n.top,t.y),n.right=Math.min(n.right,s),n.bottom=Math.min(n.bottom,c)}})),n}(B,y),h.style.left=p,h.style.top=v;var I=k(Math.round(W/parseFloat(P)*1e3)/1e3),F=k(Math.round(V/parseFloat(S)*1e3)/1e3);if(0===I||0===F||(0,l.S)(n)&&!(0,b.Z)(n))return;var q=C.offset,G=C.targetOffset,Q=q||[],J=(0,r.Z)(Q,2),K=J[0],U=void 0===K?0:K,$=J[1],ee=void 0===$?0:$,te=G||[],ne=(0,r.Z)(te,2),oe=ne[0],re=void 0===oe?0:oe,ie=ne[1],ae=void 0===ie?0:ie;c.x+=re,c.y+=ae;var ue,se,ce,le,fe=C.points||[],de=(0,r.Z)(fe,2),he=de[0],pe=x(de[1]),ve=x(he),me=Z(c,pe),ge=Z(A,ve),be=(0,o.Z)({},C),ye=me.x-ge.x+U,we=me.y-ge.y+ee,_e=f(ye,we),Ee=Z(c,["t","l"]),ke=Z(A,["t","l"]),xe=Z(c,["b","r"]),Ze=Z(A,["b","r"]),Me=C.overflow||{},Ce=Me.adjustX,Re=Me.adjustY,Ae=Me.shiftX,Oe=Me.shiftY,Pe=function(e){return"boolean"===typeof e?e:e>=0};d();var Se=Pe(Re),ze=ve[0]===pe[0];if(Se&&"t"===ve[0]&&(se>B.bottom||w.current.bt)){var Ne=we;ze?Ne-=V-X:Ne=Ee.y-Ze.y-ee,f(ye,Ne)>=_e?(w.current.bt=!0,we=Ne,be.points=[M(ve,0),M(pe,0)]):w.current.bt=!1}if(Se&&"b"===ve[0]&&(ue<B.top||w.current.tb)){var De=we;ze?De+=V-X:De=xe.y-ke.y-ee,f(ye,De)>=_e?(w.current.tb=!0,we=De,be.points=[M(ve,0),M(pe,0)]):w.current.tb=!1}var Te=Pe(Ce),Le=ve[1]===pe[1];if(Te&&"l"===ve[1]&&(le>B.right||w.current.rl)){var He=ye;Le?He-=W-j:He=Ee.x-Ze.x-U,f(He,we)>=_e?(w.current.rl=!0,ye=He,be.points=[M(ve,1),M(pe,1)]):w.current.rl=!1}if(Te&&"r"===ve[1]&&(ce<B.left||w.current.lr)){var Ye=ye;Le?Ye+=W-j:Ye=xe.x-ke.x-U,f(Ye,we)>=_e?(w.current.lr=!0,ye=Ye,be.points=[M(ve,1),M(pe,1)]):w.current.lr=!1}d();var Ve=!0===Ae?0:Ae;"number"===typeof Ve&&(ce<B.left&&(ye-=ce-B.left,c.x+j<B.left+Ve&&(ye+=c.x-B.left+j-Ve)),le>B.right&&(ye-=le-B.right,c.x>B.right-Ve&&(ye+=c.x-B.right+Ve)));var We=!0===Oe?0:Oe;"number"===typeof We&&(ue<B.top&&(we-=ue-B.top,c.y+X<B.top+We&&(we+=c.y-B.top+X-We)),se>B.bottom&&(we-=se-B.bottom,c.y>B.bottom-We&&(we+=c.y-B.bottom+We)));var Xe=A.x+ye,je=Xe+W,Be=A.y+we,Ie=Be+V,Fe=c.x,qe=Fe+j,Ge=c.y,Qe=Ge+X,Je=(Math.max(Xe,Fe)+Math.min(je,qe))/2-Xe,Ke=(Math.max(Be,Ge)+Math.min(Ie,Qe))/2-Be;null===s||void 0===s||s(t,be),m({ready:!0,offsetX:ye/I,offsetY:we/F,arrowX:Je/I,arrowY:Ke/F,scaleX:I,scaleY:F,align:be})}})),R=function(){m((function(e){return(0,o.Z)((0,o.Z)({},e),{},{ready:!1})}))};return(0,h.Z)(R,[i]),(0,h.Z)((function(){e||R()}),[e]),[p.ready,p.offsetX,p.offsetY,p.arrowX,p.arrowY,p.scaleX,p.scaleY,p.align,function(){g.current+=1;var e=g.current;Promise.resolve().then((function(){g.current===e&&C()}))}]}var R=n(3433);var A=n(7462),O=n(5207),P=n(8834);function S(e){var t=e.prefixCls,n=e.align,o=e.arrowX,r=void 0===o?0:o,i=e.arrowY,a=void 0===i?0:i,u=v.useRef();if(!n||!n.points)return null;var s={position:"absolute"};if(!1!==n.autoArrow){var c=n.points[0],l=n.points[1],f=c[0],d=c[1],h=l[0],p=l[1];f!==h&&["t","b"].includes(f)?"t"===f?s.top=0:s.bottom=0:s.top=a,d!==p&&["l","r"].includes(d)?"l"===d?s.left=0:s.right=0:s.left=r}return v.createElement("div",{ref:u,className:"".concat(t,"-arrow"),style:s})}function z(e){var t=e.prefixCls,n=e.open,o=e.zIndex,r=e.mask,i=e.motion;return r?React.createElement(O.Z,(0,A.Z)({},i,{motionAppear:!0,visible:n,removeOnLeave:!0}),(function(e){var n=e.className;return React.createElement("div",{style:{zIndex:o},className:s()("".concat(t,"-mask"),n)})})):null}var N=v.forwardRef((function(e,t){var n=e.popup,i=e.className,a=e.prefixCls,u=e.style,l=e.target,f=e.onVisibleChanged,d=e.open,p=e.keepDom,m=e.onClick,g=e.mask,b=e.arrow,y=e.align,w=e.arrowX,_=e.arrowY,E=e.motion,k=e.maskMotion,x=e.forceRender,Z=e.getPopupContainer,M=e.autoDestroy,C=e.portal,R=e.zIndex,N=e.onMouseEnter,D=e.onMouseLeave,T=e.ready,L=e.offsetX,H=e.offsetY,Y=e.onAlign,V=e.onPrepare,W=e.stretch,X=e.targetWidth,j=e.targetHeight,B="function"===typeof n?n():n,I=d||p,F=(null===Z||void 0===Z?void 0:Z.length)>0,q=v.useState(!Z||!F),G=(0,r.Z)(q,2),Q=G[0],J=G[1];if((0,h.Z)((function(){!Q&&F&&l&&J(!0)}),[Q,F,l]),!Q)return null;var K=T||!d?{left:L,top:H}:{left:"-1000vw",top:"-1000vh"},U={};return W&&(W.includes("height")&&j?U.height=j:W.includes("minHeight")&&j&&(U.minHeight=j),W.includes("width")&&X?U.width=X:W.includes("minWidth")&&X&&(U.minWidth=X)),d||(U.pointerEvents="none"),v.createElement(C,{open:x||I,getContainer:Z&&function(){return Z(l)},autoDestroy:M},v.createElement(z,{prefixCls:a,open:d,zIndex:R,mask:g,motion:k}),v.createElement(c.Z,{onResize:Y,disabled:!d},(function(e){return v.createElement(O.Z,(0,A.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:x,leavedClassName:"".concat(a,"-hidden")},E,{onAppearPrepare:V,onEnterPrepare:V,visible:d,onVisibleChanged:function(e){var t;null===E||void 0===E||null===(t=E.onVisibleChanged)||void 0===t||t.call(E,e),f(e)}}),(function(n,r){var c=n.className,l=n.style,f=s()(a,c,i);return v.createElement("div",{ref:(0,P.sQ)(e,t,r),className:f,style:(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},K),U),l),{},{boxSizing:"border-box",zIndex:R},u),onMouseEnter:N,onMouseLeave:D,onClick:m},b&&v.createElement(S,{prefixCls:a,align:y,arrowX:w,arrowY:_}),B)}))})))}));var D=v.forwardRef((function(e,t){var n=e.children,o=e.getTriggerDOMNode,r=(0,P.Yr)(n),i=v.useCallback((function(e){(0,P.mH)(t,o?o(e):e)}),[o]),a=(0,P.x1)(i,n.ref);return r?v.cloneElement(n,{ref:a}):n})),T=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.Z,t=v.forwardRef((function(t,n){var a=t.prefixCls,u=void 0===a?"rc-trigger-popup":a,b=t.children,k=t.action,x=void 0===k?"hover":k,Z=t.showAction,M=t.hideAction,A=t.popupVisible,O=t.defaultPopupVisible,P=t.onPopupVisibleChange,S=t.afterPopupVisibleChange,z=t.mouseEnterDelay,L=t.mouseLeaveDelay,H=void 0===L?.1:L,Y=t.focusDelay,V=t.blurDelay,W=t.mask,X=t.maskClosable,j=void 0===X||X,B=t.getPopupContainer,I=t.forceRender,F=t.autoDestroy,q=t.destroyPopupOnHide,G=t.popup,Q=t.popupClassName,J=t.popupStyle,K=t.popupPlacement,U=t.builtinPlacements,$=void 0===U?{}:U,ee=t.popupAlign,te=t.zIndex,ne=t.stretch,oe=t.getPopupClassNameFromAlign,re=t.alignPoint,ie=t.onPopupClick,ae=t.onPopupAlign,ue=t.arrow,se=t.popupMotion,ce=t.maskMotion,le=t.popupTransitionName,fe=t.popupAnimation,de=t.maskTransitionName,he=t.maskAnimation,pe=t.className,ve=t.getTriggerDOMNode,me=(0,i.Z)(t,T),ge=F||q||!1,be=v.useState(!1),ye=(0,r.Z)(be,2),we=ye[0],_e=ye[1];(0,h.Z)((function(){_e((0,p.Z)())}),[]);var Ee=v.useRef({}),ke=v.useContext(m),xe=v.useMemo((function(){return{registerSubPopup:function(e,t){Ee.current[e]=t,null===ke||void 0===ke||ke.registerSubPopup(e,t)}}}),[ke]),Ze=(0,d.Z)(),Me=v.useState(null),Ce=(0,r.Z)(Me,2),Re=Ce[0],Ae=Ce[1],Oe=(0,f.Z)((function(e){(0,l.S)(e)&&Re!==e&&Ae(e),null===ke||void 0===ke||ke.registerSubPopup(Ze,e)})),Pe=v.useState(null),Se=(0,r.Z)(Pe,2),ze=Se[0],Ne=Se[1],De=(0,f.Z)((function(e){(0,l.S)(e)&&ze!==e&&Ne(e)})),Te=v.Children.only(b),Le=(null===Te||void 0===Te?void 0:Te.props)||{},He={},Ye=(0,f.Z)((function(e){var t,n,o=ze;return(null===o||void 0===o?void 0:o.contains(e))||(null===o||void 0===o||null===(t=o.getRootNode())||void 0===t?void 0:t.host)===e||e===o||(null===Re||void 0===Re?void 0:Re.contains(e))||(null===Re||void 0===Re||null===(n=Re.getRootNode())||void 0===n?void 0:n.host)===e||e===Re||Object.values(Ee.current).some((function(t){return(null===t||void 0===t?void 0:t.contains(e))||e===t}))})),Ve=w(u,se,fe,le),We=w(u,ce,he,de),Xe=v.useState(O||!1),je=(0,r.Z)(Xe,2),Be=je[0],Ie=je[1],Fe=null!==A&&void 0!==A?A:Be,qe=(0,f.Z)((function(e){void 0===A&&Ie(e)}));(0,h.Z)((function(){Ie(A||!1)}),[A]);var Ge=v.useRef(Fe);Ge.current=Fe;var Qe=(0,f.Z)((function(e){Fe!==e&&(qe(e),null===P||void 0===P||P(e))})),Je=v.useRef(),Ke=function(){clearTimeout(Je.current)},Ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Ke(),0===t?Qe(e):Je.current=setTimeout((function(){Qe(e)}),1e3*t)};v.useEffect((function(){return Ke}),[]);var $e=v.useState(!1),et=(0,r.Z)($e,2),tt=et[0],nt=et[1],ot=v.useRef(!0);(0,h.Z)((function(){ot.current&&!Fe||nt(!0),ot.current=!0}),[Fe]);var rt=v.useState(null),it=(0,r.Z)(rt,2),at=it[0],ut=it[1],st=v.useState([0,0]),ct=(0,r.Z)(st,2),lt=ct[0],ft=ct[1],dt=function(e){ft([e.clientX,e.clientY])},ht=C(Fe,Re,re?lt:ze,K,$,ee,ae),pt=(0,r.Z)(ht,9),vt=pt[0],mt=pt[1],gt=pt[2],bt=pt[3],yt=pt[4],wt=pt[5],_t=pt[6],Et=pt[7],kt=pt[8],xt=(0,f.Z)((function(){tt||kt()}));!function(e,t,n,o){(0,h.Z)((function(){if(e&&t&&n){var r=function(){o()},i=n,a=E(t),u=E(i),s=_(i),c=new Set([s].concat((0,R.Z)(a),(0,R.Z)(u)));return c.forEach((function(e){e.addEventListener("scroll",r,{passive:!0})})),s.addEventListener("resize",r,{passive:!0}),o(),function(){c.forEach((function(e){e.removeEventListener("scroll",r),s.removeEventListener("resize",r)}))}}}),[e,t,n])}(Fe,ze,Re,xt),(0,h.Z)((function(){xt()}),[lt]),(0,h.Z)((function(){!Fe||null!==$&&void 0!==$&&$[K]||xt()}),[JSON.stringify(ee)]);var Zt=v.useMemo((function(){var e=function(e,t,n,o){for(var r=n.points,i=Object.keys(e),a=0;a<i.length;a+=1){var u,s=i[a];if(y(null===(u=e[s])||void 0===u?void 0:u.points,r,o))return"".concat(t,"-placement-").concat(s)}return""}($,u,Et,re);return s()(e,null===oe||void 0===oe?void 0:oe(Et))}),[Et,oe,$,u,re]);v.useImperativeHandle(n,(function(){return{forceAlign:xt}}));(0,h.Z)((function(){at&&(kt(),at(),ut(null))}),[at]);var Mt=v.useState(0),Ct=(0,r.Z)(Mt,2),Rt=Ct[0],At=Ct[1],Ot=v.useState(0),Pt=(0,r.Z)(Ot,2),St=Pt[0],zt=Pt[1],Nt=function(e,t,n,o){return v.useMemo((function(){var r=g(null!==n&&void 0!==n?n:t),i=g(null!==o&&void 0!==o?o:t),a=new Set(r),u=new Set(i);return e&&(a.has("hover")&&(a.delete("hover"),a.add("click")),u.has("hover")&&(u.delete("hover"),u.add("click"))),[a,u]}),[e,t,n,o])}(we,x,Z,M),Dt=(0,r.Z)(Nt,2),Tt=Dt[0],Lt=Dt[1],Ht=function(e,t,n,o){He[e]=function(r){var i;null===o||void 0===o||o(r),Ue(t,n);for(var a=arguments.length,u=new Array(a>1?a-1:0),s=1;s<a;s++)u[s-1]=arguments[s];null===(i=Le[e])||void 0===i||i.call.apply(i,[Le,r].concat(u))}},Yt=Tt.has("click"),Vt=Lt.has("click")||Lt.has("contextMenu");(Yt||Vt)&&(He.onClick=function(e){var t;Ge.current&&Vt?Ue(!1):!Ge.current&&Yt&&(dt(e),Ue(!0));for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=Le.onClick)||void 0===t||t.call.apply(t,[Le,e].concat(o))}),v.useEffect((function(){if(Vt&&Re&&(!W||j)){var e=function(e){var t=e.target;Ge.current&&!Ye(t)&&Ue(!1)},t=_(Re),n=null===ze||void 0===ze?void 0:ze.getRootNode();t.addEventListener("click",e);var o=n&&n!==ze.ownerDocument;return o&&n.addEventListener("click",e),function(){t.removeEventListener("click",e),o&&n.removeEventListener("click",e)}}}),[Vt,ze,Re,W,j]);var Wt,Xt,jt=Tt.has("hover"),Bt=Lt.has("hover");jt&&(Ht("onMouseEnter",!0,z,(function(e){dt(e)})),Wt=function(){Ue(!0,z)},re&&(He.onMouseMove=function(e){var t;null===(t=Le.onMouseMove)||void 0===t||t.call(Le,e)})),Bt&&(Ht("onMouseLeave",!1,H),Xt=function(){Ue(!1,H)}),Tt.has("focus")&&Ht("onFocus",!0,Y),Lt.has("focus")&&Ht("onBlur",!1,V),Tt.has("contextMenu")&&(He.onContextMenu=function(e){var t;dt(e),Ue(!0),e.preventDefault();for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=Le.onContextMenu)||void 0===t||t.call.apply(t,[Le,e].concat(o))}),pe&&(He.className=s()(Le.className,pe));var It=(0,o.Z)((0,o.Z)({},Le),He),Ft={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach((function(e){me[e]&&(Ft[e]=function(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null===(t=It[e])||void 0===t||t.call.apply(t,[It].concat(o)),me[e].apply(me,o)})}));var qt=v.cloneElement(Te,(0,o.Z)((0,o.Z)({},It),Ft));return v.createElement(v.Fragment,null,v.createElement(c.Z,{disabled:!Fe,ref:De,onResize:function(e,t){if(xt(),ne){var n=t.getBoundingClientRect();At(n.width),zt(n.height)}}},v.createElement(D,{getTriggerDOMNode:ve},qt)),v.createElement(m.Provider,{value:xe},v.createElement(N,{portal:e,ref:Oe,prefixCls:u,popup:G,className:s()(Q,Zt),style:J,target:ze,onMouseEnter:Wt,onMouseLeave:Xt,zIndex:te,open:Fe,keepDom:tt,onClick:ie,mask:W,motion:Ve,maskMotion:We,onVisibleChanged:function(e){nt(!1),kt(),null===S||void 0===S||S(e)},onPrepare:function(){return new Promise((function(e){ut((function(){return e}))}))},forceRender:I,autoDestroy:ge,getPopupContainer:B,align:Et,arrow:ue,ready:vt,offsetX:mt,offsetY:gt,arrowX:bt,arrowY:yt,onAlign:xt,stretch:ne,targetWidth:Rt/wt,targetHeight:St/_t})))}));return t}(a.Z)},8829:function(e,t,n){n.d(t,{Z:function(){return E}});var o=n(7462),r=n(2791),i=n(5501),a=(n(632),n(1413)),u=n(8834),s=n(4304),c=n(474),l=new Map;var f=new c.Z((function(e){e.forEach((function(e){var t,n=e.target;null===(t=l.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))}));var d=n(5671),h=n(3144),p=n(136),v=n(7277),m=function(e){(0,p.Z)(n,e);var t=(0,v.Z)(n);function n(){return(0,d.Z)(this,n),t.apply(this,arguments)}return(0,h.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(r.Component),g=r.createContext(null);function b(e,t){var n=e.children,o=e.disabled,i=r.useRef(null),c=r.useRef(null),d=r.useContext(g),h="function"===typeof n,p=h?n(i):n,v=r.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),b=!h&&r.isValidElement(p)&&(0,u.Yr)(p),y=b?p.ref:null,w=r.useMemo((function(){return(0,u.sQ)(y,i)}),[y,i]),_=function(){return(0,s.Z)(i.current)||(0,s.Z)(c.current)};r.useImperativeHandle(t,(function(){return _()}));var E=r.useRef(e);E.current=e;var k=r.useCallback((function(e){var t=E.current,n=t.onResize,o=t.data,r=e.getBoundingClientRect(),i=r.width,u=r.height,s=e.offsetWidth,c=e.offsetHeight,l=Math.floor(i),f=Math.floor(u);if(v.current.width!==l||v.current.height!==f||v.current.offsetWidth!==s||v.current.offsetHeight!==c){var h={width:l,height:f,offsetWidth:s,offsetHeight:c};v.current=h;var p=s===Math.round(i)?i:s,m=c===Math.round(u)?u:c,g=(0,a.Z)((0,a.Z)({},h),{},{offsetWidth:p,offsetHeight:m});null===d||void 0===d||d(g,e,o),n&&Promise.resolve().then((function(){n(g,e)}))}}),[]);return r.useEffect((function(){var e,t,n=_();return n&&!o&&(e=n,t=k,l.has(e)||(l.set(e,new Set),f.observe(e)),l.get(e).add(t)),function(){return function(e,t){l.has(e)&&(l.get(e).delete(t),l.get(e).size||(f.unobserve(e),l.delete(e)))}(n,k)}}),[i.current,o]),r.createElement(m,{ref:c},b?r.cloneElement(p,{ref:w}):p)}var y=r.forwardRef(b);function w(e,t){var n=e.children;return("function"===typeof n?[n]:(0,i.Z)(n)).map((function(n,i){var a=(null===n||void 0===n?void 0:n.key)||"".concat("rc-observer-key","-").concat(i);return r.createElement(y,(0,o.Z)({},e,{key:a,ref:0===i?t:void 0}),n)}))}var _=r.forwardRef(w);_.Collection=function(e){var t=e.children,n=e.onBatchResize,o=r.useRef(0),i=r.useRef([]),a=r.useContext(g),u=r.useCallback((function(e,t,r){o.current+=1;var u=o.current;i.current.push({size:e,element:t,data:r}),Promise.resolve().then((function(){u===o.current&&(null===n||void 0===n||n(i.current),i.current=[])})),null===a||void 0===a||a(e,t,r)}),[n,a]);return r.createElement(g.Provider,{value:u},t)};var E=_},3739:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(2791);function r(e){var t=o.useRef();t.current=e;var n=o.useCallback((function(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(o))}),[]);return n}},5179:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(9439),r=n(3739),i=n(1605),a=n(8368);function u(e){return void 0!==e}function s(e,t){var n=t||{},s=n.defaultValue,c=n.value,l=n.onChange,f=n.postState,d=(0,a.Z)((function(){return u(c)?c:u(s)?"function"===typeof s?s():s:"function"===typeof e?e():e})),h=(0,o.Z)(d,2),p=h[0],v=h[1],m=void 0!==c?c:p,g=f?f(m):m,b=(0,r.Z)(l),y=(0,a.Z)([m]),w=(0,o.Z)(y,2),_=w[0],E=w[1];return(0,i.o)((function(){var e=_[0];p!==e&&b(p,e)}),[_]),(0,i.o)((function(){u(c)||v(c)}),[c]),[g,(0,r.Z)((function(e,t){v(e,t),E([m],t)}))]}},3786:function(e,t){t.Z=function(){if("undefined"===typeof navigator||"undefined"===typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null===e||void 0===e?void 0:e.substr(0,4))}},474:function(e,t,n){var o=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,o){return e[0]===t&&(n=o,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),o=this.__entries__[n];return o&&o[1]},t.prototype.set=function(t,n){var o=e(this.__entries__,t);~o?this.__entries__[o][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,o=e(n,t);~o&&n.splice(o,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,o=this.__entries__;n<o.length;n++){var r=o[n];e.call(t,r[1],r[0])}},t}()}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),a="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var u=["top","right","bottom","left","width","height","size","weight"],s="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,o=!1,r=0;function i(){n&&(n=!1,e()),o&&s()}function u(){a(i)}function s(){var e=Date.now();if(n){if(e-r<2)return;o=!0}else n=!0,o=!1,setTimeout(u,t);r=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;u.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),l=function(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var r=o[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},f=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},d=b(0,0,0,0);function h(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+h(e["border-"+n+"-width"])}),0)}function v(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return d;var o=f(e).getComputedStyle(e),r=function(e){for(var t={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var r=o[n],i=e["padding-"+r];t[r]=h(i)}return t}(o),i=r.left+r.right,a=r.top+r.bottom,u=h(o.width),s=h(o.height);if("border-box"===o.boxSizing&&(Math.round(u+i)!==t&&(u-=p(o,"left","right")+i),Math.round(s+a)!==n&&(s-=p(o,"top","bottom")+a)),!function(e){return e===f(e).document.documentElement}(e)){var c=Math.round(u+i)-t,l=Math.round(s+a)-n;1!==Math.abs(c)&&(u-=c),1!==Math.abs(l)&&(s-=l)}return b(r.left,r.top,u,s)}var m="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof f(e).SVGGraphicsElement}:function(e){return e instanceof f(e).SVGElement&&"function"===typeof e.getBBox};function g(e){return r?m(e)?function(e){var t=e.getBBox();return b(0,0,t.width,t.height)}(e):v(e):d}function b(e,t,n,o){return{x:e,y:t,width:n,height:o}}var y=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=g(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),w=function(e,t){var n=function(e){var t=e.x,n=e.y,o=e.width,r=e.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return l(a,{x:t,y:n,width:o,height:r,top:n,right:t+o,bottom:r+n,left:t}),a}(t);l(this,{target:e,contentRect:n})},_=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new o,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new y(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof f(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new w(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),E="undefined"!==typeof WeakMap?new WeakMap:new o,k=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),o=new _(t,n,this);E.set(this,o)};["observe","unobserve","disconnect"].forEach((function(e){k.prototype[e]=function(){var t;return(t=E.get(this))[e].apply(t,arguments)}}));var x="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:k;t.Z=x}}]);
//# sourceMappingURL=915.08f8bd37.chunk.js.map