(this["webpackJsonpreact-ts-learning"]=this["webpackJsonpreact-ts-learning"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var s=n(5),c=n(0),a=n.n(c),r=n(14),i=n.n(r),o=(n(55),n(56),n(99)),u=n(103),j=n(100),l=n(27),d=n.n(l),b=n(36),h=n(25),v=n(96),f=n(97),p=n(105),O=n(98),x=n(102),g=n(37),m=n(38),y=n.n(m),k=new function e(t){Object(g.a)(this,e),this.instance=void 0,this.instance=y.a.create(t)}({baseURL:"https://jsonplaceholder.typicode.com",headers:{Accept:"application/json"}}).instance,w=function(){var e=c.useState(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=c.useState(!0),i=Object(h.a)(r,2),o=i[0],j=i[1],l=c.useState(),g=Object(h.a)(l,2),m=g[0],y=g[1],w=function(e){switch(e){case 500:y({severity:"error",message:"Erro interno"});break;case 404:y({severity:"warning",message:"O post informado n\xe3o foi encontrado"});break;default:y({severity:"error",message:"Erro Inesperado"})}},F=c.useCallback(Object(b.a)(d.a.mark((function e(){var t,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("/posts/1");case 3:t=e.sent,n=t.data,a(n),y({severity:"success",message:"Post encontrado"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.request&&(s=e.t0.request.status,w(s));case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]);return c.useEffect((function(){F().finally((function(){j(!1)}))}),[F]),Object(s.jsxs)(s.Fragment,{children:[m&&Object(s.jsx)(u.a,{mb:2,clone:!0,children:Object(s.jsx)(x.a,{severity:m.severity,children:m.message})}),o&&Object(s.jsx)(v.a,{color:"inherit"}),!o&&"success"===(null===m||void 0===m?void 0:m.severity)&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Seu post"}),Object(s.jsxs)(f.a,{variant:"outlined",children:[Object(s.jsx)(p.a,{title:null===n||void 0===n?void 0:n.title}),Object(s.jsx)(O.a,{children:null===n||void 0===n?void 0:n.body})]})]})]})},F=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o.a,{}),Object(s.jsx)(u.a,{mt:2,clone:!0,children:Object(s.jsx)(j.a,{fixed:!0,children:Object(s.jsx)(w,{})})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root")),S()}},[[80,1,2]]]);
//# sourceMappingURL=main.574d813a.chunk.js.map