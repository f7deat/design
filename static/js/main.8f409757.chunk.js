(this.webpackJsonpdesign=this.webpackJsonpdesign||[]).push([[0],{21:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),i=s.n(a),n=s(6),r=s.n(n),l=(s(21),s(2)),d=[{id:1,pageIndex:1},{id:2,pageIndex:2}];function j(e){return Object(c.jsxs)("div",{className:e.togglePageBar?"page-bar p-2":"d-none",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[Object(c.jsx)("div",{className:"flex-grow-1",children:"Pages \u2022 1"}),Object(c.jsx)("i",{className:"fas fa-angle-double-right text-black-50 cursor-pointer",onClick:function(){return e.setTogglePageBar(!e.togglePageBar)}})]}),d.map((function(e){return Object(c.jsx)(o,{pageIndex:e.pageIndex},e.id)})),Object(c.jsxs)("button",{onClick:function(){return function(){var e=d[d.length-1].id+1;d.push({id:e,pageIndex:e})}()},className:"btn-light btn btn-block",style:{bottom:0,right:0},children:[Object(c.jsx)("i",{className:"fas fa-plus"})," New page"]})]})}function o(e){return Object(c.jsxs)("div",{className:"mb-1 p-2 d-flex align-items-center justify-content-center cursor-pointerpage-item",children:[Object(c.jsx)("div",{className:"mr-1",children:e.pageIndex}),Object(c.jsx)("div",{className:"flex-grow-1 border rounded",style:{height:70}})]})}var m=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"page shadow-sm",children:Object(c.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(c.jsxs)("button",{className:"btn",onClick:function(){return i(!s)},children:[Object(c.jsx)("i",{className:"fas fa-columns mr-2"}),"Pages"]})})}),Object(c.jsx)(j,{togglePageBar:s,setTogglePageBar:i})]})};var b=function(){var e=Object(a.useState)(50),t=Object(l.a)(e,2),s=t[0],i=t[1];return Object(c.jsx)("div",{className:"zoom shadow-sm",children:Object(c.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(c.jsx)("button",{className:"btn",onClick:function(){return i(s-10)},children:Object(c.jsx)("i",{className:"fas fa-search-minus"})}),Object(c.jsxs)("div",{className:"pointer hover:bg-gray-200 rounded px-2 py-1 fw-500",children:[s,"%"]}),Object(c.jsx)("button",{className:"btn",onClick:function(){return i(s+10)},children:Object(c.jsx)("i",{className:"fas fa-search-plus"})})]})})},u=s(11),x=s(12),h=s(15),p=s(14);var O=function(){return Object(c.jsxs)("div",{className:"p-2 bg-white w-100 shadow-sm d-flex",style:{marginTop:1},children:[Object(c.jsx)("div",{className:"pointer py-1 px-2 rounded cursor-pointer hover:bg-gray-200 mr-1",children:Object(c.jsx)("i",{className:"fas fa-ban"})}),Object(c.jsx)("div",{className:"pointer py-1 px-2 rounded cursor-pointer hover:bg-gray-200 mr-1",children:Object(c.jsx)("i",{className:"fas fa-border-style"})}),Object(c.jsx)("div",{className:"pointer py-1 px-2 cursor-pointer rounded hover:bg-gray-200 mr-1 font-weight-bold",children:"Animate"})]})},f=s(3);var v=Object(f.b)((function(e){return{width:e.canvasReducer.width,height:e.canvasReducer.height}}))((function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e,s=null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.getContext("2d");s&&(s.font="40px Arial",s.fillText("Hello world",40,60))}),[]),Object(c.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"calc(100% - 50px)"},children:Object(c.jsx)("canvas",{ref:t,width:e.width,height:e.height,onClick:function(e){return function(e){console.log(e)}(e)}})})})),g=function(e){Object(h.a)(s,e);var t=Object(p.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(x.a)(s,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"h-100",children:[Object(c.jsx)(O,{}),Object(c.jsx)(v,{})]})}}]),s}(i.a.Component);var N=Object(f.b)((function(e){return{width:e.canvasReducer.width,height:e.canvasReducer.height}}))((function(e){var t=Object(a.useState)(e.width),s=Object(l.a)(t,2),i=s[0],n=s[1],r=Object(a.useState)(e.height),d=Object(l.a)(r,2),j=d[0],o=d[1],m=Object(a.useState)("https://placehold.jp/".concat(i,"x").concat(j,".png")),b=Object(l.a)(m,2),u=b[0],x=b[1];return Object(a.useEffect)((function(){x("https://placehold.jp/003366/c3d7eb/".concat(i,"x").concat(j,".png"))}),[j,i,x]),Object(c.jsx)("div",{className:e.showNewDesign?"":"d-none",children:Object(c.jsx)("div",{style:{backgroundColor:"rgba(18,19,22,.64)",zIndex:1},className:"h-screen w-screen position-fixed top-0",children:Object(c.jsx)("div",{className:"rounded bg-white p-4 shadow",style:{width:790,height:560,position:"fixed",top:"20%",left:"30%"},children:Object(c.jsxs)("div",{className:"position-relative",children:[Object(c.jsxs)("div",{className:"mb-4",children:[Object(c.jsx)("button",{onClick:function(){return e.setShowNewDesign(!e.showNewDesign)},className:"btn text-muted float-right",children:Object(c.jsx)("i",{className:"fas fa-times"})}),Object(c.jsx)("h5",{className:"text-center",children:" Choose Format and Start Design"})]}),Object(c.jsxs)("div",{className:"d-flex justify-content-center mb-4",children:[Object(c.jsx)("div",{className:"py-2 px-4 text-muted cursor-pointer",children:"Popular Formats"}),Object(c.jsx)("div",{className:"py-2 px-4 cursor-default border-bottom border-primary",children:"Custom Size"})]}),Object(c.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(c.jsx)("div",{style:{maxHeight:250,maxWidth:250},children:Object(c.jsx)("img",{className:"img-thumbnail",src:u,alt:"tandc"})})}),Object(c.jsxs)("div",{className:"mt-4 d-flex mx-4 px-4 align-items-center",children:[Object(c.jsx)("input",{type:"number",className:"form-control mr-3",onChange:function(e){return n(e.currentTarget.value)}}),Object(c.jsx)("i",{className:"fas fa-unlock mr-3 text-gray-400"}),Object(c.jsx)("input",{type:"number",className:"form-control mr-3",onChange:function(e){return o(e.currentTarget.value)}}),Object(c.jsxs)("select",{className:"form-control",children:[Object(c.jsx)("option",{children:"px"}),Object(c.jsx)("option",{children:"cm"}),Object(c.jsx)("option",{children:"in"})]})]}),Object(c.jsx)("div",{className:"mt-3 mx-4 px-4",children:Object(c.jsx)("button",{className:"btn btn-block btn-primary",type:"button",children:"Create Design"})})]})})})})}));var y=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),s=t[0],i=t[1],n=Object(a.useState)(!1),r=Object(l.a)(n,2),d=r[0],j=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"shadow-sm bg-white p-2 d-flex justify-content-between align-items-center",children:[Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("div",{className:"py-1 px-3 font-weight-bold text-primary",children:"Design"}),Object(c.jsx)("div",{onClick:function(){return j(!d)},className:"py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded",style:{fontWeight:500,fontSize:"0.875rem"},children:"New design"}),Object(c.jsx)("div",{className:"py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded",style:{fontWeight:500,fontSize:"0.875rem"},children:"New project"}),Object(c.jsx)("div",{className:"py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded",style:{fontWeight:500,fontSize:"0.875rem"},children:Object(c.jsx)("i",{className:"fas fa-reply cursor-pointer"})}),Object(c.jsx)("div",{className:"py-1 px-3 text-dark hover:bg-gray-200 cursor-pointer rounded",style:{fontWeight:500,fontSize:"0.875rem"},children:Object(c.jsx)("i",{className:"fas fa-share cursor-pointer"})})]}),Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)("input",{onDoubleClick:function(){return i(!1)},disabled:s,type:"text",className:"hover:bg-gray-200 py-1 px-2 rounded",value:"Instagram Post 1080x1080 px",style:{outline:"none",border:"none",minWidth:"200px"}}),Object(c.jsx)("i",{className:"fas fa-cloud-upload-alt text-success ml-2 p-2 rounded hover:bg-gray-200 cursor-pointerpointer"})]}),Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)("div",{className:"px-2 py-1 mr-2 rounded cursor-pointerhover:bg-gray-200",children:Object(c.jsx)("i",{className:"fas fa-share-alt"})}),Object(c.jsx)("div",{className:"px-2 py-1 mr-3 rounded cursor-pointerhover:bg-gray-200",children:Object(c.jsx)("i",{className:"fas fa-external-link-alt"})}),Object(c.jsxs)("div",{className:"mr-4 cursor-pointer",style:{color:"rgb(33, 83, 204)",borderRadius:8,boxShadow:"rgb(33, 83, 204) 0px 0px 0px 2px inset",padding:"10px 16px",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(c.jsx)("i",{className:"fas fa-download mr-2"}),"Download"]})]})]}),Object(c.jsx)(N,{showNewDesign:d,setShowNewDesign:j})]})};var w=function(){return Object(c.jsxs)("div",{className:"text-wrapper",children:[Object(c.jsxs)("div",{className:"text-group",children:[Object(c.jsx)("div",{className:"panel-item text-white",children:Object(c.jsx)("h2",{children:"Heading"})}),Object(c.jsx)("div",{className:"panel-item text-white",children:Object(c.jsx)("h6",{children:"Subheading"})}),Object(c.jsx)("div",{className:"panel-item text-white",children:"Body text"})]}),Object(c.jsxs)("div",{className:"text-group",children:[Object(c.jsx)("label",{className:"font-weight-bold text-white",children:"Text Styles"}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{src:"https://static.crello.com/api/templates/5f967e13a637ee11e36955cd/thumbnails/0?size=360",alt:"",className:"img-fluid"})})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{src:"https://static.crello.com/api/templates/5f967e12a637ee11e3695464/thumbnails/0?size=360",alt:"",className:"img-fluid"})})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{src:"https://static.crello.com/api/templates/5f967e12a637ee11e36953d9/thumbnails/0?size=360",alt:"",className:"img-fluid"})})})]})]})]})};var k=function(){return Object(c.jsx)("div",{})};var C=function(){return Object(c.jsxs)("div",{className:"row mt-3 no-gutters",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{className:"img-fluid",src:"https://static.crello.com/api/templates/5a0343cfd8141396fe98986a/thumbnails/0?size=360",alt:""})})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{className:"img-fluid",src:"https://static.crello.com/api/templates/59d74b7e1350e83293018279/thumbnails/0?size=360",alt:""})})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{className:"img-fluid",src:"https://static.crello.com/api/templates/5a0343cfd8141396fe98986a/thumbnails/0?size=360",alt:""})})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{className:"img-fluid",src:"https://static.crello.com/api/templates/59d74b7e1350e83293018279/thumbnails/0?size=360",alt:""})})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{className:"img-fluid",src:"https://static.crello.com/api/templates/5a0343cfd8141396fe98986a/thumbnails/0?size=360",alt:""})})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)("div",{className:"panel-item",children:Object(c.jsx)("img",{className:"img-fluid",src:"https://static.crello.com/api/templates/59d74b7e1350e83293018279/thumbnails/0?size=360",alt:""})})})]})};function S(e){switch(e){case"Videos":return Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)("div",{className:"tab-item active w-100",children:"Video"}),Object(c.jsx)("div",{className:"tab-item w-100",children:"Background"})]});case"Text":return Object(c.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(c.jsx)("div",{className:"tab-item active w-100",children:"Styles"}),Object(c.jsx)("div",{className:"tab-item w-100",children:"My Fonts"})]});default:return Object(c.jsx)("div",{})}}var T=function(e){return Object(c.jsx)("div",{className:e.menu.hasTab?"tab":"d-none",children:S(e.menu.name)})};function z(e){switch(e){case"Text":return Object(c.jsx)(w,{});case"Photo":return Object(c.jsx)(k,{});case"Template":return Object(c.jsx)(C,{});default:return Object(c.jsx)("div",{})}}var A=Object(f.b)((function(e){return{menu:e.menuReducer.menu.find((function(e){return!0===e.isActive}))}}))((function(e){return Object(c.jsxs)("div",{className:"panel",children:[Object(c.jsx)(T,{menu:e.menu}),Object(c.jsx)("input",{type:"search",className:"search",placeholder:"Search template..."}),z(e.menu.name)]})}));var I=Object(f.b)((function(e){return{menu:e.menuReducer.menu}}),(function(e){return{activeMenu:function(t){e({type:"ACTIVE_MENU",payload:t})}}}))((function(e){return Object(c.jsx)("div",{className:"sidebarMenu",children:e.menu.map((function(t){return Object(c.jsxs)("div",{className:t.isActive?"p-3 text-white cursor-default":"p-3 cursor-pointer hover:text-white text-gray-600",onClick:function(){return e.activeMenu(t.id)},children:[Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)("i",{className:t.icon,style:{fontSize:24}})}),Object(c.jsx)("div",{className:"text-muted",style:{fontSize:8},children:t.name})]},t.id)}))})}));var P=function(){return Object(c.jsx)("div",{className:"sidebar",children:Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("div",{className:"text-center",style:{width:72},children:Object(c.jsx)(I,{})}),Object(c.jsxs)("div",{className:"w-100",children:[Object(c.jsx)("div",{className:"font-weight-bold text-white px-2",style:{fontSize:20,padding:"16px 0"},children:"Template"}),Object(c.jsx)(A,{})]})]})})};var D=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(y,{}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("div",{style:{width:408},children:Object(c.jsx)(P,{})}),Object(c.jsxs)("div",{style:{width:"calc(100vw - 408px)"},children:[Object(c.jsx)(g,{}),Object(c.jsx)(b,{}),Object(c.jsx)(m,{})]})]})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))},B=s(4),E=s(5),F={width:"500",height:"500"},M={menu:[{id:1,name:"Template",hasTab:!1,icon:"fas fa-inbox",isActive:!0},{id:2,name:"Photo",hasTab:!0,icon:"fas fa-image",isActive:!1},{id:3,name:"Videos",hasTab:!0,icon:"fas fa-video",isActive:!1},{id:4,name:"Music",hasTab:!0,icon:"fas fa-music",isActive:!1},{id:5,name:"Animations",hasTab:!1,icon:"fas fa-paw",isActive:!1},{id:6,name:"Text",hasTab:!0,icon:"fas fa-text-width",isActive:!1}]},W=Object(B.b)({canvasReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return Object(E.a)({},e)},menuReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTIVE_MENU":return e.menu.forEach((function(e){e.id===t.payload?e.isActive=!0:e.isActive=!1})),Object(E.a)({},e);default:return Object(E.a)({},e)}}}),V=Object(B.c)(W);r.a.render(Object(c.jsx)(f.a,{store:V,children:Object(c.jsx)(D,{})}),document.getElementById("root")),R()}},[[28,1,2]]]);
//# sourceMappingURL=main.8f409757.chunk.js.map