"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5805],{27161:function(e,t,n){var r=n(85893),o=n(67294),i=n(11163);t.Z=function(e){var t=e.path,n=void 0===t?"/":t,a=(0,o.useState)(3),l=a[0],u=a[1],c=(0,i.useRouter)();return(0,o.useEffect)((function(){var e=setInterval((function(){u(l-1)}),1e3);return 0===l&&(clearInterval(e),c.push(n)),function(){return clearInterval(e)}}),[l]),(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,r.jsxs)("p",{children:["Redirecting in ",l," seconds"]})})}},47665:function(e,t,n){var r=n(34051),o=n.n(r),i=n(85893),a=n(67294),l=n(84551),u=n(16536),c=n(63922),s=n(67691),d=n(34146),f=n(64082),p=n(18429),v=n(76329),m=n(9669),g=n.n(m),h=n(74931);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void n(c)}l.done?t(u):Promise.resolve(u).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){y(i,r,o,a,l,"next",e)}function l(e){y(i,r,o,a,l,"throw",e)}a(void 0)}))}}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function S(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=l.Z.Dragger;t.Z=function(e){var t,n=e.page,r=void 0===n?"admin":n,l=(0,a.useContext)(d.V),m=l[0],x=(l[1],(0,a.useContext)(v.Y)),y=x[0],j=x[1],Z=(0,a.useState)(!1),A=Z[0];Z[1];(0,a.useEffect)((function(){var e=function(){var e=b(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().get("/media");case 3:t=e.sent.data,j((function(e){return w({},e,{images:t})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var C={name:"file",multiple:!0,action:"".concat("http://localhost:8000/api","/upload-image-file"),headers:{Authorization:"Bearer ".concat(m.token)},onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?(u.ZP.success("".concat(e.file.name," file uploaded successfully")),j({images:S(y.images).concat([e.file.response]),selected:e.file.response,showMediaModal:!1})):"error"===e.file.status&&u.ZP.error("".concat(e.file.name," file upload failed."))},onDrop:function(e){console.log("Dropped files",e.dataTransfer.files)}},k=function(){var e=b(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g().delete("/media/".concat(t));case 3:e.sent.data.ok&&(j(w({},y,{images:y.images.filter((function(e){return e._id!==t})),selected:null})),h.Am.error("Image deleted successfully")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(O,w({},C,{accept:"image/*",children:[(0,i.jsx)("p",{className:"ant-upload-drag-icon",children:(0,i.jsx)(f.Z,{})}),(0,i.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"})]})),(0,i.jsx)("div",{style:{textAlign:"center"},children:null===y||void 0===y||null===(t=y.images)||void 0===t?void 0:t.map((function(e){var t,n;return(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(s.Z,{onClick:function(){return j(w({},y,{selected:e}))},preview:A,src:e.url,style:{paddingTop:5,paddingRight:10,height:"100px",width:"100px",objectFit:"cover",cursor:"pointer"}}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"author"===r&&(null===e||void 0===e||null===(t=e.postedBy)||void 0===t?void 0:t._id)==(null===m||void 0===m||null===(n=m.user)||void 0===n?void 0:n._id)||"admin"===r?(0,i.jsx)(p.Z,{onClick:function(){return k(e._id)},style:{marginTop:"5px",color:"#f5222d"}}):""]})}))})]})}},34808:function(e,t,n){var r=n(85893),o=n(67294),i=n(16536),a=n(84551),l=n(71577),u=n(34146),c=n(88484),s=n(76329),d=n(11163);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.Z=function(e){var t=e.redirectToLibrary,n=void 0!==t&&t,f=e.page,m=void 0===f?"admin":f,g=(0,o.useContext)(u.V),h=g[0],x=(g[1],(0,o.useContext)(s.Y)),y=x[0],b=x[1],j=(0,d.useRouter)(),w={name:"file",action:"".concat("http://localhost:8000/api","/upload-image-file"),headers:{Authorization:"Bearer ".concat(h.token)},onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?(i.ZP.success("".concat(e.file.name," file uploaded successfully")),b({images:v(y.images).concat([e.file.response]),selected:e.file.response,showMediaModal:!1}),n&&j.push("/".concat(m,"/media/library"))):"error"===e.file.status&&i.ZP.error("".concat(e.file.name," file upload failed."))}};return(0,r.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},w,{maxCount:1,children:(0,r.jsx)(l.Z,{icon:(0,r.jsx)(c.Z,{}),children:"Click to Upload"})}))}},16853:function(e,t,n){var r=n(85893),o=(n(67294),n(34808)),i=n(47665),a=n(74687),l=a.Z.TabPane;t.Z=function(e){e.page;return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l,{tab:"Upload File",children:(0,r.jsx)(o.Z,{})},"1"),(0,r.jsx)(l,{tab:"Media Library",children:(0,r.jsx)(i.Z,{})},"2")]})}},43650:function(e,t,n){var r=n(34051),o=n.n(r),i=n(85893),a=n(67294),l=n(71230),u=n(15746),c=n(86871),s=n(79531),d=n(9835),f=n(71577),p=n(9669),v=n.n(p),m=n(74931),g=n(11163),h=n(34146),x=n(76329),y=n(16853);function b(e,t,n,r,o,i,a){try{var l=e[i](a),u=l.value}catch(c){return void n(c)}l.done?t(u):Promise.resolve(u).then(r,o)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){b(i,r,o,a,l,"next",e)}function l(e){b(i,r,o,a,l,"throw",e)}a(void 0)}))}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}t.Z=function(e){var t,n,r=e.page,p=void 0===r?"admin":r,b=(0,a.useContext)(h.V),w=b[0],O=b[1],Z=(0,a.useContext)(x.Y),A=Z[0],C=(Z[1],(0,a.useState)("")),k=C[0],P=C[1],_=(0,a.useState)(""),I=_[0],E=_[1],z=(0,a.useState)(""),T=z[0],B=z[1],D=(0,a.useState)(""),M=D[0],F=D[1],N=(0,a.useState)(),U=N[0],R=N[1],L=(0,a.useState)(""),V=L[0],Y=L[1],q=(0,a.useState)({}),J=q[0],$=q[1],W=(0,a.useState)(!1),G=W[0],H=W[1],K=(0,g.useRouter)();(0,a.useEffect)((function(){var e=function(){var e=j(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,v().get("/user/".concat(null===K||void 0===K||null===(t=K.query)||void 0===t?void 0:t.id));case 4:n=e.sent.data,P(n._id),E(n.name),B(n.email),F(n.website),Y(n.role),$(n.image),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();(null===w||void 0===w?void 0:w.token)&&e()}),[w,null===K||void 0===K||null===(t=K.query)||void 0===t?void 0:t.id]);var Q=function(){var e=j(o().mark((function e(t){var n,r,i,a,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=5,v().put("/update-user-by-".concat(p),{id:k,name:I,email:T,password:U,website:M,role:V,image:(null===A||void 0===A||null===(n=A.selected)||void 0===n?void 0:n._id)?null===A||void 0===A||null===(r=A.selected)||void 0===r?void 0:r._id:(null===J||void 0===J?void 0:J._id)?null===J||void 0===J?void 0:J._id:void 0});case 5:(null===(i=e.sent.data)||void 0===i?void 0:i.error)?m.Am.error(i.error):((null===w||void 0===w||null===(a=w.user)||void 0===a?void 0:a._id)===i._id&&(O(S({},w,{user:i})),(l=JSON.parse(localStorage.getItem("auth"))).user=i,localStorage.setItem("auth",JSON.stringify(l))),m.Am.success("User updated successfully")),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),m.Am.error("User update failed. Try again."),H(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.jsx)(l.Z,{children:(0,i.jsxs)(u.Z,{span:12,offset:6,children:[(0,i.jsx)("h4",{style:{marginBottom:"-10px"},children:"Profile update"}),(0,i.jsx)("div",{style:{marginBottom:20,textAlign:"center"},children:A.selected?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{marginBottom:15}}),(0,i.jsx)(c.C,{src:A.selected.url,size:100})]}):J?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{marginBottom:15}}),(0,i.jsx)(c.C,{src:J.url,size:100})]}):""}),"Subscriber"!==(null===w||void 0===w||null===(n=w.user)||void 0===n?void 0:n.role)&&(0,i.jsx)(y.Z,{}),(0,i.jsx)(s.Z,{style:{margin:"20px 0px 10px 0px"},size:"large",placeholder:"Full name",value:I,onChange:function(e){return E(e.target.value)}}),(0,i.jsx)(s.Z,{style:{margin:"10px 0px 10px 0px"},size:"large",placeholder:"Email",value:T,onChange:function(e){return B(e.target.value)}}),(0,i.jsx)(s.Z,{style:{margin:"10px 0px 10px 0px"},size:"large",placeholder:"Website",value:M,onChange:function(e){return F(e.target.value)}}),(0,i.jsx)(s.Z.Password,{style:{margin:"10px 0px 10px 0px"},size:"large",placeholder:"Password",value:U,onChange:function(e){return R(e.target.value)}}),"admin"===p&&(0,i.jsxs)(d.Z,{value:V,style:{margin:"10px 0px 10px 0px",width:"100%"},onChange:function(e){return Y(e)},children:[(0,i.jsx)(d.Z.Option,{value:"Subscriber",children:"Subscriber"}),(0,i.jsx)(d.Z.Option,{value:"Author",children:"Author"}),(0,i.jsx)(d.Z.Option,{value:"Admin",children:"Admin"})]}),(0,i.jsx)(f.Z,{onClick:Q,type:"default",style:{margin:"10px 0px 10px 0px"},loading:G,block:!0,children:"Submit"})]})})}}}]);