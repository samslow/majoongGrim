(this["webpackJsonpmajoong-grimor"]=this["webpackJsonpmajoong-grimor"]||[]).push([[0],{39:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},42:function(e,n,t){e.exports=t(57)},47:function(e,n,t){},55:function(e,n,t){},57:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),i=t(13),c=t.n(i),o=(t(47),t(4)),l=t(2),u=t(3),d=t(9),f=t(5),s=t(20),g=t(24),m=function(e,n){var t=document.getElementById("artboard");if(null===t)return[0,0];var r=t.getBoundingClientRect().width,a=null===t||void 0===t?void 0:t.getBoundingClientRect().height;return[t.getBoundingClientRect().x+r/2-e/2,(null===t||void 0===t?void 0:t.getBoundingClientRect().y)+a/2-n/2]},E=t(19),v=t(25),h="#60D072",b="#444",O="#666",y="#888",p="#999",j="#AAA",x="#fff";function T(){var e=Object(l.a)(["\n  font-weight: bold;\n  margin-right: 5px;\n  color: #fff;\n  vertical-align: text-bottom;\n"]);return T=function(){return e},e}function S(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return S=function(){return e},e}var A,w=u.a.div(S()),D=u.a.span(T()),I=function(e){var n=e.onClickShape,t=Object(o.c)((function(e){return e.layerReducer.layers})),r=Object(o.c)((function(e){return e.headerReducer.nowShape}));return a.a.createElement(w,null,a.a.createElement(s.a,{style:{zIndex:1001,marginRight:"1em"}},a.a.createElement(s.a.Toggle,{variant:"outline-dark",id:"dropdown-basic",style:{background:h}},a.a.createElement(D,null,a.a.createElement(v.b,{style:{marginRight:"5px"}}),"New")),a.a.createElement(s.a.Menu,null,a.a.createElement(s.a.Item,{onClick:function(){return n("VERTICAL_SHAPE")}},"\uc138\ub85c\ud615"),a.a.createElement(s.a.Item,{onClick:function(){return n("HORIZONTAL_SHAPE")}},"\uac00\ub85c\ud615"))),a.a.createElement(g.a,{variant:"outline-dark",style:{background:h}},a.a.createElement("a",{onClick:function(e){var n=document.createElement("canvas");"VERTICAL_SHAPE"===r?(n.width=280,n.height=400):(n.width=480,n.height=280);var a=n.getContext("2d"),i=n.width,c=n.height,o=m(i,c),l=Object(f.a)(o,2),u=l[0],s=l[1];a.fillStyle="white",a.fillRect(0,0,i,c);for(var g=Object(d.a)(t).sort((function(e,n){return e.zIndex-n.zIndex})),E=0;E<g.length;E++){var v=g[E],h=v.x-u+v.width/2,b=v.y-s+v.height/2;a.translate(h,b),a.rotate(v.angleDegree*Math.PI/180),a.translate(-h,-b),v.draw(a,u,s),a.translate(h,b),a.rotate(-v.angleDegree*Math.PI/180),a.translate(-h,-b)}e.currentTarget.href=n.toDataURL()},href:"/",download:"Majoong_Thumbnail.png"},a.a.createElement(D,{style:{margin:"auto"}},a.a.createElement(E.b,null)))))},C=t(8);!function(e){e.CHANGE_SHAPE="CHANGE_SHAPE"}(A||(A={}));var _={nowShape:"HORIZONTAL_SHAPE"},k=t(39);function R(){var e=Object(l.a)(["\n  color: ",";\n  margin: 0;\n  margin-left: 1em;\n  font-size: 10px;\n"]);return R=function(){return e},e}function L(){var e=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return L=function(){return e},e}function N(){var e=Object(l.a)(["\n  height: 70%;\n"]);return N=function(){return e},e}function z(){var e=Object(l.a)(["\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1em;\n  z-index: 1000;\n  background-color: ",";\n"]);return z=function(){return e},e}var F=u.a.div(z(),b),H=u.a.img(N()),U=u.a.div(L()),Y=u.a.p(R(),x),J=function(){var e=Object(o.b)();return a.a.createElement(F,null,a.a.createElement(U,null,a.a.createElement(H,{src:"logo.png"}),a.a.createElement(Y,null,"v ",k.a)),a.a.createElement(I,{onClickShape:function(n){!function(n){e({type:A.CHANGE_SHAPE,nowShape:n})}(n)}}))},G=t(16),B=t(17),P=t(27),M=t(28),X=function(){function e(n,t,r,a,i,c,o){Object(G.a)(this,e),this.id=void 0,this.x=void 0,this.y=void 0,this.width=void 0,this.height=void 0,this.angleDegree=void 0,this.zIndex=void 0,this.id=n,this.x=t,this.y=r,this.width=a,this.height=i,this.angleDegree=c,this.zIndex=o}return Object(B.a)(e,[{key:"move",value:function(e,n){this.x=e,this.y=n}},{key:"rotate",value:function(e){this.angleDegree=e}},{key:"draw",value:function(e,n,t){}}]),e}(),Z=function(e){Object(M.a)(t,e);var n=Object(P.a)(t);function t(e,r,a,i,c,o,l,u){var d;return Object(G.a)(this,t),(d=n.call(this,e,r,a,i,c,o,l)).image=void 0,d.image=u,d}return Object(B.a)(t,[{key:"draw",value:function(e,n,t){e.drawImage(this.image,0,0,this.image.width,this.image.height,this.x-n,this.y-t,this.width,this.height)}}]),t}(X),V=function(e){Object(M.a)(t,e);var n=Object(P.a)(t);function t(e,r,a,i,c,o,l,u,d,f,s,g){var m;return Object(G.a)(this,t),(m=n.call(this,e,r,a,i,c,o,l)).fontFamily=void 0,m.fontType=void 0,m.fontSize=void 0,m.color=void 0,m.content=void 0,m.fontFamily=u,m.fontType=d,m.fontSize=f,m.color=s,m.content=g,m}return Object(B.a)(t,[{key:"draw",value:function(e,n,t){e.fillStyle="black",e.textBaseline="top",e.font="".concat(this.fontType.isBold?"bold":""," ").concat(this.fontType.isItalic?"italic":""," ").concat(this.fontSize,"px ").concat(this.fontFamily),this.fontType.isUnderline&&e.fillRect(this.x-n,this.y-t+this.height,function(e){var n=document.getElementById("text".concat(e));return null!==n?n.getBoundingClientRect().width:0}(this.id),1),e.fillText(this.content,this.x-n,this.y-t)}}]),t}(X);function Q(){var e=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: ",";\n  height: ",";\n  background: white;\n"]);return Q=function(){return e},e}var W,$=u.a.div(Q(),(function(e){return"HORIZONTAL_SHAPE"===e.shapeType?"480px":"280px"}),(function(e){return"HORIZONTAL_SHAPE"===e.shapeType?"280px":"400px"})),q=function(e){var n=e.nowShape;return a.a.createElement($,{id:"artboard",shapeType:n})},K=function(e,n,t){console.log("l1, l2",n,t);var r=e[n].zIndex,a=Object(d.a)(e);return a[n].zIndex=a[t].zIndex,a[t].zIndex=r,a};!function(e){e.CHANGE_LAYER_LOCATION="CHANGE_LAYER_LOCATION",e.SET_ZINDEX="SET_ZINDEX",e.REMOVE_LAYER="REMOVE_LAYER",e.ADD_LAYER="ADD_LAYER",e.GET_SORTED_LAYERS="GET_SORTED_LAYERS",e.SET_SELECTED="SET_SELECTED",e[e.DESELECT=-1]="DESELECT",e.ADJUST_FONTTYPE="ADJUST_FONTTYPE",e.ADJUST_FONTSIZE="ADJUST_FONTSIZE",e.ADJUST_FONTCONTENT="ADJUST_FONTCONTENT",e.ADJUST_FONTFAMILY="ADJUST_FONTFAMILY",e.ADJUST_ANGLE="ADJUST_ANGLE",e.ADJUST_SIZE="ADJUST_SIZE"}(W||(W={}));var ee={layers:[],selectedId:null},ne=function(e,n){var t=Object(o.b)(),a=e.id,i=e.x,c=e.y,l=e.width,u=e.height,d=e.angleDegree,s=Object(r.useState)(i),g=Object(f.a)(s,2),m=g[0],E=g[1],v=Object(r.useState)(c),h=Object(f.a)(v,2),b=h[0],O=h[1],y=Object(r.useState)(0),p=Object(f.a)(y,2),j=p[0],x=p[1],T=Object(r.useState)(0),S=Object(f.a)(T,2),A=S[0],w=S[1],D=Object(r.useState)(0),I=Object(f.a)(D,2),C=I[0],_=I[1],k=Object(r.useState)(0),R=Object(f.a)(k,2),L=R[0],N=R[1],z=Object(r.useState)(null),F=Object(f.a)(z,2),H=F[0],U=F[1];Object(r.useEffect)((function(){var e=new Image;e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",e.onload=function(){U(e)}}),[]);var Y=Object(r.useCallback)((function(e){H&&e.dataTransfer.setDragImage(H,0,0),n(a,m,b,l,u,d,!1),_(e.clientX),N(e.clientY),x(m),w(b)}),[m,b,H]),J=Object(r.useCallback)((function(e){H&&e.dataTransfer.setDragImage(H,0,0);var n=e.clientX-C,t=e.clientY-L;E(j+n),O(A+t)}),[C,L,j,A]),G=Object(r.useCallback)((function(e){e.preventDefault()}),[]),B=Object(r.useCallback)((function(){t({type:W.CHANGE_LAYER_LOCATION,id:a,x:m,y:b})}),[m,b]);return{imgX:m,imgY:b,onClick:n,onDragStartImageHandler:Y,onDragImageHandler:J,onDragOverImageHandler:G,onDragEndImageHandler:B}};function te(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  src: ",";\n"]);return te=function(){return e},e}var re=u.a.img(te(),(function(e){return e.src})),ae=function(e){var n=e.layer,t=e.onClick,r=ne(n,t),i=r.imgX,c=r.imgY,o=r.onDragStartImageHandler,l=r.onDragImageHandler,u=r.onDragOverImageHandler,d=r.onDragEndImageHandler,f=n.id,s=n.width,g=n.height,m=n.angleDegree,E=n.zIndex,v=n.image;return a.a.createElement("div",{draggable:"true",onDrag:l,onDragStart:o,onDragOver:u,onDragEnd:d,onClick:function(e){e.stopPropagation(),t(f,i,c,s,g,m,!0,"image")},style:{position:"fixed",width:s,height:g,left:i,top:c,zIndex:E,transform:"rotate(".concat(m,"deg)")}},a.a.createElement(re,{src:v.src}))};function ie(){var e=Object(l.a)(["\n  position: absolute;\n  font-family: ",";\n  font-style: ",";\n  font-weight: ",";\n  text-decoration: ",";\n  font-size: ","px;\n  color: ",";\n  margin: 0;\n  top: 0;\n"]);return ie=function(){return e},e}var ce,oe=u.a.p(ie(),(function(e){return e.fontFamily}),(function(e){return e.fontType.isItalic?"italic":"normal"}),(function(e){return e.fontType.isBold?"bold":"normal"}),(function(e){return e.fontType.isUnderline?"underline":"none"}),(function(e){return e.fontSize}),(function(e){return e.color})),le=function(e){var n=e.layer,t=e.onClick,r=ne(n,t),i=r.imgX,c=r.imgY,o=r.onDragStartImageHandler,l=r.onDragImageHandler,u=r.onDragOverImageHandler,d=r.onDragEndImageHandler,f=n.id,s=n.width,g=n.height,m=n.angleDegree,E=n.zIndex,v=n.fontFamily,h=n.fontSize,b=n.fontType,O=n.content,y=n.color;return a.a.createElement("div",{draggable:"true",onDrag:l,onDragStart:o,onDragOver:u,onDragEnd:d,onClick:function(e){e.stopPropagation(),t(f,i,c,s,g,m,!0,"text")},style:{position:"fixed",width:s,height:g,left:i,top:c,zIndex:E,display:"flex",alignItems:"center",transform:"rotate(".concat(m,"deg)")}},a.a.createElement(oe,{id:"text".concat(f),fontFamily:v,fontType:b,fontSize:h,color:y},O))};!function(e){e.CHANGE_SELECTED_TOOL="CHANGE_SELECTED_TOOL"}(ce||(ce={}));var ue={selectedTool:""};function de(){var e=Object(l.a)(["\n  position: relative;\n  background: ",";\n  flex: 3;\n"]);return de=function(){return e},e}var fe={x:0,y:0,width:0,height:0,angleDegree:0},se=u.a.div(de(),O),ge=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.layerReducer.selectedId})),t=Object(o.c)((function(e){return e.headerReducer.nowShape})),i=Object(o.c)((function(e){return e.layerReducer.layers})),c=Object(o.c)((function(e){return e.toolboxReducer.selectedTool}));Object(r.useEffect)((function(){if(null!=n){var e=i[n],t={x:e.x,y:e.y,width:e.width,height:e.height,angleDegree:e.angleDegree};s(!0),v(t)}else s(!1),v(fe)}),[n,i]);var l=Object(r.useState)(!1),u=Object(f.a)(l,2),d=u[0],s=u[1],g=Object(r.useState)(fe),m=Object(f.a)(g,2),E=m[0],v=m[1],h=Object(r.useCallback)((function(t,r,a,i,o,l,u,d){if(s(u),v({x:r,y:a,width:i,height:o,angleDegree:l}),n!=t&&e({type:W.SET_SELECTED,id:t}),d&&c!=d){var f="text"==d?"\ud14d\uc2a4\ud2b8 \uc0bd\uc785":"\uc774\ubbf8\uc9c0 \uc0bd\uc785";e({type:ce.CHANGE_SELECTED_TOOL,name:f})}}),[n]),b=Object(r.useCallback)((function(){s(!1),e({type:W.SET_SELECTED,id:W.DESELECT}),e({type:ce.CHANGE_SELECTED_TOOL,name:""})}),[]);return a.a.createElement(se,{onClick:b},i.length>0&&i.map((function(e,n){return e instanceof Z?a.a.createElement(ae,{key:n,layer:e,onClick:h}):e instanceof V?a.a.createElement(le,{key:n,layer:e,onClick:h}):null})),d&&a.a.createElement("div",{style:{position:"fixed",border:"2px dashed red",boxSizing:"border-box",width:E.width+8,height:E.height+8,left:E.x-4,top:E.y-4,zIndex:9,transform:"rotate(".concat(E.angleDegree,"deg)")}}),a.a.createElement(q,{nowShape:t}))},me=t(26),Ee=t(40);function ve(){var e=Object(l.a)(["\n  font-size: 12px;\n  color: ",";\n"]);return ve=function(){return e},e}function he(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return he=function(){return e},e}function be(){var e=Object(l.a)(["\n  position: relative;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid;\n  border: 0;\n  background-color: transparent;\n\n  &:hover {\n    background: #bbb;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return be=function(){return e},e}var Oe=u.a.button(be()),ye=u.a.div(he()),pe=u.a.div(ve(),y),je=function(e){var n=e.name,t=void 0===n?"":n,r=e.icon,i=void 0===r?a.a.createElement(Ee.a,{size:"60%",color:j}):r,c=e.onClickTool;return a.a.createElement(Oe,{onClick:function(){return t.length&&c&&c(t)}},a.a.createElement(ye,null,i),t.length>0&&a.a.createElement(pe,null,t))};function xe(){var e=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return xe=function(){return e},e}function Te(){var e=Object(l.a)(["\n  font-size: 12px;\n  color: ",";\n"]);return Te=function(){return e},e}function Se(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Se=function(){return e},e}function Ae(){var e=Object(l.a)(["\n  position: relative;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid;\n  border: 0;\n  background-color: transparent;\n\n  &:hover {\n    background: #bbb;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return Ae=function(){return e},e}var we,De=u.a.button(Ae()),Ie=u.a.div(Se()),Ce=u.a.div(Te(),y),_e=u.a.label(xe()),ke=function(e){var n=e.name,t=void 0===n?"":n,r=e.icon,i=e.onClickTool;return a.a.createElement(De,null,a.a.createElement(_e,{htmlFor:"imageLoader"}),a.a.createElement(Ie,null,r),a.a.createElement(Ce,null,t),a.a.createElement("input",{type:"file",id:"imageLoader",name:"imageLoader",accept:"image/png,image/jpg,image/jpeg",hidden:!0,onChange:function(e){i(t,e),e.target.value=""}}))};function Re(){var e=Object(l.a)(['\n  display: flex;\n  width: "100%";\n  height: 100px;\n']);return Re=function(){return e},e}function Le(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  background: ",";\n  z-index: 1000;\n  border-bottom: 1px solid ",";\n"]);return Le=function(){return e},e}!function(e){e.IMAGE="\uc774\ubbf8\uc9c0 \uc0bd\uc785",e.TEXT="\ud14d\uc2a4\ud2b8 \uc0bd\uc785"}(we||(we={}));var Ne=u.a.aside(Le(),b,p),ze=u.a.div(Re()),Fe=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.layerReducer.layers})),t=Object(o.c)((function(e){return e.headerReducer.nowShape})),r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e({type:ce.CHANGE_SELECTED_TOOL,name:n}),n==we.TEXT?c():n==we.IMAGE&&i(t)},i=function(r){var a=new FileReader;a.onload=function(r){var a=new Image;a.src=r.target.result,a.onload=function(){var r=function(e,n){var t,r,a=e.width,i=e.height;return"HORIZONTAL_SHAPE"===n?(t=480,r=280):"VERTICAL_SHAPE"===n?(t=280,r=400):(t=280,r=280),a<t&&i<r||(t/r>a/i?(a*=r/i,i=r):(i*=t/a,a=t)),[a,i]}(a,t),i=Object(f.a)(r,2),c=i[0],o=i[1],l=m(c,o),u=Object(f.a)(l,2),d=u[0],s=u[1],g=new Z(n.length,d,s,c,o,0,n.length+10,a);e({type:W.ADD_LAYER,layer:g})}},a.readAsDataURL(r.target.files[0])},c=function(){var t=m(120,12),r=Object(f.a)(t,2),a=r[0],i=r[1],c=new V(n.length,a,i,120,12,0,n.length+10,"\ub098\ub214\ubc14\ub978\uace0\ub515",{isBold:!1,isItalic:!1,isUnderline:!1},12,"#000","\ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud558\uc138\uc694");e({type:W.ADD_LAYER,layer:c,id:c.id})};return a.a.createElement(Ne,null,a.a.createElement(ze,null,a.a.createElement(ke,{name:we.IMAGE,icon:a.a.createElement(v.a,{size:"60%",color:j}),onClickTool:r}),a.a.createElement(je,{name:we.TEXT,icon:a.a.createElement(me.b,{size:"60%",color:j}),onClickTool:r}),a.a.createElement(je,null)))};function He(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  color: #888;\n"]);return He=function(){return e},e}function Ue(){var e=Object(l.a)(["\n  height: 150px;\n  align-items: center;\n"]);return Ue=function(){return e},e}function Ye(){var e=Object(l.a)(["\n  margin: auto 0;\n  padding: 0 1em;\n  flex: 1;\n"]);return Ye=function(){return e},e}var Je=u.a.section(Ye()),Ge=u.a.div(Ue()),Be=u.a.div(He()),Pe=function(e){var n=e.children,t=e.subject;return a.a.createElement(Je,null,a.a.createElement(Ge,null,n),a.a.createElement(Be,null,t))};function Me(){var e=Object(l.a)(["\n  margin: auto;\n"]);return Me=function(){return e},e}function Xe(){var e=Object(l.a)(["\n  outline: none;\n  margin: 0 0.5em 0 0;\n  width: 30px;\n  height: 30px;\n  padding: 1px;\n  background-color: ",";\n  border: 2px solid ",";\n"]);return Xe=function(){return e},e}var Ze=u.a.button(Xe(),b,p),Ve=u.a.div(Me()),Qe=function(e){var n=e.icon,t=e.label,r=e.onClick;return a.a.createElement(Ze,{onClick:function(){return r(t)}},a.a.createElement(Ve,null,n))};function We(){var e=Object(l.a)(["\n  color: #888;\n"]);return We=function(){return e},e}function $e(){var e=Object(l.a)([""]);return $e=function(){return e},e}function qe(){var e=Object(l.a)(["\n  width: 52%;\n  background-color: ",";\n  color: #fff;\n"]);return qe=function(){return e},e}function Ke(){var e=Object(l.a)(["\n  width: 50%;\n  padding: 3px;\n  background-color: ",";\n  color: #fff;\n  border: 1px solid ",";\n  font-size: 12px;\n"]);return Ke=function(){return e},e}function en(){var e=Object(l.a)(["\n  width: 52%;\n"]);return en=function(){return e},e}function nn(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 7px 0;\n  height: 20px;\n"]);return nn=function(){return e},e}function tn(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return tn=function(){return e},e}var rn=u.a.div(tn()),an=u.a.div(nn()),cn=u.a.div(en()),on=u.a.input(Ke(),b,p),ln=u.a.select(qe(),b),un=u.a.option($e()),dn=u.a.label(We()),fn=function(e){var n=e.input,t=e.fontSize,i=e.fonts,c=e.nowFontFamily,l=e.onChangeSize,u=e.onChangeContent,d=e.onChangeFontFamily,s=Object(o.b)(),g=Object(r.useState)(t),m=Object(f.a)(g,2),v=m[0],h=m[1],b=Object(r.useState)(n),O=Object(f.a)(b,2),y=O[0],p=O[1],j=Object(r.useState)(c),x=Object(f.a)(j,2),T=x[0],S=x[1];Object(r.useEffect)((function(){h(t),p(n),S(c)}),[t,n,c]);var A=Object(o.c)((function(e){return e.layerReducer.selectedId})),w=function(){var e=i.map((function(e,n){return a.a.createElement(un,{key:n,value:e,selected:T===e},e)}));return a.a.createElement(a.a.Fragment,null,e)},D=function(e){s({type:W.ADJUST_FONTTYPE,id:A,fontType:e})};return a.a.createElement(rn,null,a.a.createElement(an,null,a.a.createElement(dn,null,"Size"),a.a.createElement(on,{type:"number",value:v,onChange:function(e){var n=parseInt(e.target.value)?parseInt(e.target.value):5;h(n),l(n)},min:5})),a.a.createElement(an,null,a.a.createElement(dn,null,"Text"),a.a.createElement(on,{value:y,onChange:function(e){p(e.target.value),u(e.target.value)}})),a.a.createElement(an,null,a.a.createElement(dn,null,"Font"),a.a.createElement(ln,{onChange:function(e){S(e.target.value),d(e.target.value)}},a.a.createElement(w,null))),a.a.createElement(an,null,a.a.createElement(dn,null,"Style"),a.a.createElement(cn,null,a.a.createElement(Qe,{icon:a.a.createElement(E.a,{color:"white"}),label:"Bold",onClick:D}),a.a.createElement(Qe,{icon:a.a.createElement(E.c,{color:"white"}),label:"Italic",onClick:D}),a.a.createElement(Qe,{icon:a.a.createElement(E.d,{color:"white"}),label:"Underline",onClick:D}))))};function sn(){var e=Object(l.a)(["\n  width: 90%;\n"]);return sn=function(){return e},e}function gn(){var e=Object(l.a)(["\n  width: 100%;\n"]);return gn=function(){return e},e}var mn=u.a.div(gn()),En=u.a.input(sn()),vn=function(e){var n=e.value,t=e.onChange,r=function(e){var n=parseInt(e.target.value);t(n)};return a.a.createElement(mn,null,a.a.createElement(En,{type:"range",value:n,onChange:function(e){return r(e)},max:1e3}))};function hn(){var e=Object(l.a)(["\n  width: 90%;\n"]);return hn=function(){return e},e}function bn(){var e=Object(l.a)(["\n  width: 100%;\n"]);return bn=function(){return e},e}var On=u.a.div(bn()),yn=u.a.input(hn()),pn=function(e){var n=e.value,t=e.onChange,r=function(e){var n=parseInt(e.target.value);t(n)};return a.a.createElement(On,null,a.a.createElement(yn,{type:"range",value:n,onChange:function(e){return r(e)},max:360}))};function jn(){var e=Object(l.a)(["\n  width: 70%;\n  display: inline-block;\n"]);return jn=function(){return e},e}function xn(){var e=Object(l.a)(["\n  width: 30%;\n  text-align: center;\n  color: #888;\n"]);return xn=function(){return e},e}function Tn(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n  height: 20px;\n"]);return Tn=function(){return e},e}function Sn(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n"]);return Sn=function(){return e},e}var An=u.a.div(Sn()),wn=u.a.div(Tn()),Dn=u.a.label(xn()),In=u.a.div(jn()),Cn=function(e){var n=e.size,t=e.rotation,r=Object(o.b)(),i=Object(o.c)((function(e){return e.layerReducer.selectedId})),c=Object(o.c)((function(e){return e.layerReducer.layers}))[i];return a.a.createElement(An,null,n&&a.a.createElement(wn,null,a.a.createElement(Dn,null,"Size"),a.a.createElement(In,null,a.a.createElement(vn,{value:c.width,onChange:function(e){r({type:W.ADJUST_SIZE,id:i,size:e})}}))),t&&a.a.createElement(wn,null,a.a.createElement(Dn,null,"Rotation"),a.a.createElement(In,null,a.a.createElement(pn,{value:c.angleDegree,onChange:function(e){r({type:W.ADJUST_ANGLE,id:i,angle:e})}}))))};function _n(){var e=Object(l.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  padding: 0 1em;\n  flex: 1;\n  display: flex;\n"]);return _n=function(){return e},e}var kn=u.a.div(_n(),O,p),Rn=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.layerReducer.selectedId})),t=Object(o.c)((function(e){return e.layerReducer.layers}))[n];return a.a.createElement(kn,null,a.a.createElement(Pe,{subject:"Content"},a.a.createElement(fn,{fontSize:t.fontSize,input:t.content,fonts:["\ub098\ub214\ubc14\ub978\uace0\ub515","\uc870\uc120\uad81\uc11c\uccb4","TT\ud22c\uac8c\ub354"],nowFontFamily:t.fontFamily,onChangeSize:function(t){e({type:W.ADJUST_FONTSIZE,id:n,fontSize:t})},onChangeContent:function(t){e({type:W.ADJUST_FONTCONTENT,id:n,content:t})},onChangeFontFamily:function(t){e({type:W.ADJUST_FONTFAMILY,id:n,fontFamily:t})}})),a.a.createElement(Pe,{subject:"Adjust"},a.a.createElement(Cn,{rotation:!0})))};function Ln(){var e=Object(l.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #888;\n"]);return Ln=function(){return e},e}var Nn=u.a.div(Ln(),O,p),zn=function(){return a.a.createElement(Nn,null,a.a.createElement(Pe,{subject:"Adjust"},a.a.createElement(Cn,{size:!0,rotation:!0})))};function Fn(){var e=Object(l.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n"]);return Fn=function(){return e},e}var Hn=u.a.div(Fn(),O,p,y),Un=function(){return a.a.createElement(Hn,null,"Select tool from top right corner")};function Yn(){var e=Object(l.a)(["\n  background: ",";\n  flex: 1;\n  display: flex;\n  padding: 1em;\n  z-index: 1000;\n"]);return Yn=function(){return e},e}var Jn=u.a.div(Yn(),b),Gn=function(){var e=Object(o.c)((function(e){return e.toolboxReducer.selectedTool})),n=Object(o.c)((function(e){return e.layerReducer.layers.length})),t=function(e){var t,r=e.type;if(n<1)return t=a.a.createElement(Un,null);switch(r){case we.TEXT:t=a.a.createElement(Rn,null);break;case we.IMAGE:t=a.a.createElement(zn,null);break;default:t=a.a.createElement(Un,null)}return t};return a.a.createElement(Jn,null,a.a.createElement(t,{type:e}))},Bn=t(41);function Pn(){var e=Object(l.a)(["\n  flex: 1;\n  background-color: transparent;\n  outline: none;\n  border: transparent;\n\n  &:focus {\n    outline: none;\n  }\n"]);return Pn=function(){return e},e}function Mn(){var e=Object(l.a)(["\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Mn=function(){return e},e}function Xn(){var e=Object(l.a)(["\n  background-color: transparent;\n  border: 0;\n  visibility: hidden;\n  outline: none;\n\n  ",":hover & {\n    visibility: visible;\n  }\n"]);return Xn=function(){return e},e}function Zn(){var e=Object(l.a)(["\n  margin: 0;\n  font-size: 20px;\n  color: ",";\n"]);return Zn=function(){return e},e}function Vn(){var e=Object(l.a)(["\n  flex: 9;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 0 1em;\n"]);return Vn=function(){return e},e}function Qn(){var e=Object(l.a)(["\n  flex: 1;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  box-shadow: inset 1px 3px 2px #999, inset -1px -3px 2px #666;\n\n  &:nth-child(2n + 1) {\n    background-color: #888;\n  }\n  &:nth-child(2n) {\n    background-color: #777;\n  }\n"]);return Qn=function(){return e},e}var Wn=u.a.div(Qn()),$n=u.a.div(Vn()),qn=u.a.p(Zn(),x),Kn=u.a.button(Xn(),$n),et=u.a.div(Mn()),nt=u.a.button(Pn()),tt=function(e){var n=e.name,t=e.onMove,r=e.onRemove;return a.a.createElement(Wn,null,a.a.createElement($n,null,a.a.createElement(qn,null,n),a.a.createElement(Kn,{onClick:function(){return r()}},a.a.createElement(Bn.a,{size:15,color:"#aaa"}))),a.a.createElement(et,null,a.a.createElement(nt,{onClick:function(){return t("up")}},"\u2b06"),a.a.createElement(nt,{onClick:function(){return t("down")}},"\u2b07")))};function rt(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: ",";\n  height: 100%;\n"]);return rt=function(){return e},e}var at=u.a.div(rt(),y),it=function(e){var n=e.layers,t=Object(o.b)(),i=Object(r.useState)([]),c=Object(f.a)(i,2),l=c[0],u=c[1],d=Object(o.c)((function(e){return e.layerReducer.selectedId}));Object(r.useEffect)((function(){if(n.length>0){var e=n.slice().sort((function(e,n){return n.zIndex-e.zIndex}));u(e)}else u([])}),[n]);var s=l.length>0?l.map((function(e){var n=e instanceof Z===!0?"Image ":"Text ";return a.a.createElement(tt,{key:e.id,name:n+e.id,onMove:function(n){return function(e,n){t({type:W.SET_ZINDEX,id:e,_type:n})}(e.id,n)},onRemove:function(){return n=e.id,console.log("".concat(n," layer removed!")),t({type:W.REMOVE_LAYER,id:n}),void(d==n&&t({type:W.SET_SELECTED}));var n}})})):null;return a.a.createElement(a.a.Fragment,null,s?a.a.createElement(a.a.Fragment,null,s):a.a.createElement(at,null,a.a.createElement(me.a,{size:"50%",color:j}),"Try adding layers from above"))};function ct(){var e=Object(l.a)(["\n  background-color: ",";\n  border: 1px solid #999;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"]);return ct=function(){return e},e}function ot(){var e=Object(l.a)(["\n  margin: 0;\n  padding: 0.5em;\n  color: ",";\n  text-align: center;\n"]);return ot=function(){return e},e}function lt(){var e=Object(l.a)(["\n  flex: 2;\n  height: 80%;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0 1em 1em 1em;\n  background-color: ",";\n"]);return lt=function(){return e},e}var ut=u.a.div(lt(),b),dt=u.a.h3(ot(),y),ft=u.a.div(ct(),O),st=function(){var e=Object(o.c)((function(e){return e.layerReducer.layers}));return a.a.createElement(ut,null,a.a.createElement(dt,null,"Layers"),a.a.createElement(ft,null,a.a.createElement(it,{layers:e})))};function gt(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px; /* \ud234\ubc15\uc2a4\ub294 \uace0\uc815 \ud06c\uae30 */\n  border-left: 1px solid ",";\n  border-top: 1px solid ",";\n"]);return gt=function(){return e},e}function mt(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 3;\n"]);return mt=function(){return e},e}function Et(){var e=Object(l.a)(["\n  display: flex;\n  width: 100vw;\n  height: calc(100vh - 60px);\n"]);return Et=function(){return e},e}function vt(){var e=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n"]);return vt=function(){return e},e}var ht=u.a.div(vt(),b),bt=u.a.div(Et()),Ot=u.a.div(mt()),yt=u.a.div(gt(),p,p),pt=function(){return a.a.createElement(ht,null,a.a.createElement(J,null),a.a.createElement(bt,null,a.a.createElement(Ot,null,a.a.createElement(ge,null),a.a.createElement(Gn,null)),a.a.createElement(yt,null,a.a.createElement(Fe,null),a.a.createElement(st,null))))},jt=t(15),xt=Object(jt.b)({headerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A.CHANGE_SHAPE:return Object(C.a)({},e,{nowShape:n.nowShape});default:return Object(C.a)({},e)}},layerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W.CHANGE_LAYER_LOCATION:console.log(n.id,n.x,n.y);var t=e.layers.map((function(e){return e.id})).indexOf(n.id),r=e.layers[t];return r.move(n.x,n.y),e.layers[t]=r,Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.SET_ZINDEX:var a=e.layers.filter((function(e){return e.id===n.id}))[0],i=e.layers.filter((function(n){return n.zIndex===e.layers[a.id].zIndex+1}))[0],c=e.layers.filter((function(n){return n.zIndex===e.layers[a.id].zIndex-1}))[0];return"up"==n._type&&i?e.layers=K(e.layers,a.id,i.id):"down"==n._type&&c?e.layers=K(e.layers,a.id,c.id):console.log("".concat(n.id," layer have reach ").concat(n._type," zIndex limit")),Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.REMOVE_LAYER:var o=e.layers.map((function(e){return e.id})).indexOf(n.id);return e.layers.splice(o,1),Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.ADD_LAYER:return Object(C.a)({},e,{layers:[].concat(Object(d.a)(e.layers),[n.layer]),selectedId:n.layer.id});case W.SET_SELECTED:var l;return l=n.id==W.DESELECT?null:null!=n.id?n.id:e.layers.length>0?e.layers[e.layers.length-1].id:null,Object(C.a)({},e,{selectedId:l});case W.ADJUST_FONTTYPE:var u=e.layers.map((function(e){return e.id})).indexOf(n.id),f=e.layers[u],s=f.fontType,g=n.fontType;return"Bold"==g?f.fontType.isBold=!s.isBold:"Italic"==g?f.fontType.isItalic=!s.isItalic:"Underline"==g&&(f.fontType.isUnderline=!s.isUnderline),e.layers[u]=f,Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.ADJUST_FONTSIZE:var m=e.layers.map((function(e){return e.id})).indexOf(n.id),E=e.layers[m],v=n.fontSize;return E.fontSize=v,E.height=n.fontSize,E.width=E.content.length*v,Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.ADJUST_FONTCONTENT:var h=e.layers.map((function(e){return e.id})).indexOf(n.id),b=e.layers[h],O=b.fontSize;return b.content=n.content,b.width=n.content.length*O,Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.ADJUST_FONTFAMILY:var y=e.layers.map((function(e){return e.id})).indexOf(n.id),p=e.layers[y];return p.fontFamily=n.fontFamily,Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.ADJUST_ANGLE:var j=e.layers.map((function(e){return e.id})).indexOf(n.id),x=e.layers[j];return x.rotate(n.angle),Object(C.a)({},e,{layers:Object(d.a)(e.layers)});case W.ADJUST_SIZE:var T=e.layers.map((function(e){return e.id})).indexOf(n.id),S=e.layers[T];return S.height=S.height+n.size-S.width,S.width=n.size,Object(C.a)({},e,{layers:Object(d.a)(e.layers)});default:return Object(C.a)({},e)}},toolboxReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ce.CHANGE_SELECTED_TOOL:return{selectedTool:n.name};default:return Object(C.a)({},e)}}});t(55);var Tt=Object(jt.c)(xt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),St=function(){return a.a.createElement(o.a,{store:Tt},a.a.createElement(pt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(56);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(St,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e98fa72b.chunk.js.map