(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0ipb":function(e,t,a){"use strict";a.r(t);var n=a("xweI"),r=a.n(n),c=a("q1tI"),o=a.n(c),l=a("vOnD"),s=a("DGZL"),i=a("k4Da"),d=a.n(i),p=a("Wbzz"),u=a("cr+I"),m=a.n(u),f=a("ntAx"),w=a("PyCY"),g=a("/G75"),b=a("PZY4"),E=(a("mpmw"),a("C4nX")),k=a("XUsr");const x=l.default.div.withConfig({displayName:"categories__CategoryListWrapper",componentId:"sc-1fyru9a-0"})(["margin-top:20px;@media (max-width:768px){padding:0 15px;}"]);t.default=e=>{let{data:t}=e;const a=r()(t.allMarkdownRemark.group,["totalCount"]).reverse(),n=t.allMarkdownRemark.nodes,{0:l,1:i}=Object(c.useState)(),{0:u,1:y}=Object(c.useState)([]);let O=null;return"undefined"!=typeof document&&(O=document.location.search),Object(c.useEffect)(()=>{y(l?d()(n,e=>-1!==e.frontmatter.category.indexOf(l)):n)},[l]),Object(c.useEffect)(()=>{const e=m.a.parse(O).q;i(e)},[O]),o.a.createElement(f.a,null,o.a.createElement(s.a,{title:E.title,description:E.description,url:E.siteUrl}),o.a.createElement(x,null,o.a.createElement(w.a,{size:"sm"}),o.a.createElement(g.a,{count:!0,categoryList:a,selected:l,onClick:e=>{console.log(e,l),e===l?(Object(p.navigate)("/categories"),alert("zz")):i(e)}})),o.a.createElement(k.a,null),o.a.createElement(b.a,{postList:u}))}}}]);
//# sourceMappingURL=component---src-pages-categories-jsx-e12b8140a943ea9121fc.js.map