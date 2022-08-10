"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8876],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(7294),n=a(8650),l=a.n(n),o=a(1597),p=a(4799),s=a(7275),m=a(5900),d=a.n(m),i=function(e){var t,a=e.title,n=e.theme,l=e.tabs,o=void 0===l?[]:l;return r.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12"},r.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},c=function(e){var t=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,p=l.baseUrl,s=l.subDirectory,m=p+"/edit/"+l.branch+s+"/src/pages"+t;return p?r.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},r.createElement("div",{className:"bx--col"},r.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4703),N=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,N.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,p=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===p,m=new RegExp(p+"/?(#.*)?$"),i=n.replace(m,a);return r.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},r.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+i},e))}));return r.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},r.createElement("div",{className:"bx--grid"},r.createElement("div",{className:"bx--row"},r.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},r.createElement("nav",{"aria-label":t},r.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(r.Component),b=k,g=a(7296),h=a(5387),w=a(3732),E=function(e){var t=e.date,a=new Date(t);return t?r.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},r.createElement(w.sg,null,r.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,n=e.location,m=e.Title,d=t.frontmatter,N=void 0===d?{}:d,k=t.relativePagePath,w=t.titleType,y=N.tabs,f=N.title,v=N.theme,x=N.description,P=N.keywords,T=N.date,C=(0,h.Z)().interiorTheme,D=(0,o.useStaticQuery)("2456312558").site.pathPrefix,L=D?n.pathname.replace(D,""):n.pathname,Z=y?L.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",B=v||C;return r.createElement(s.Z,{tabs:y,homepage:!1,theme:B,pageTitle:f,pageDescription:x,pageKeywords:P,titleType:w},r.createElement(i,{title:m?r.createElement(m,null):f,label:"label",tabs:y,theme:B}),y&&r.createElement(b,{title:f,slug:L,tabs:y,currentTab:Z}),r.createElement(g.Z,{padded:!0},a,r.createElement(c,{relativePagePath:k}),r.createElement(E,{date:T})),r.createElement(u.Z,{pageContext:t,location:n,slug:L,tabs:y,currentTab:Z}),r.createElement(p.Z,null))}},9136:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return c}});var r,n=a(3366),l=(a(7294),a(4983)),o=a(3624),p=["components"],s={},m=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={_frontmatter:s},i=o.Z;function c(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)(i,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(m,{mdxType:"PageDescription"},(0,l.kt)("p",null,"Information about Data Migrators")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"th"},"Attribute")),(0,l.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"th"},"Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"Legal name")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"Data Migrators Pty Ltd"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"Registered address")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"c/o Rubiix, L10, 50 Queen Street, Melbourne VIC 3000, Australia"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"Australian Proprietary Company, Limited By Shares"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"ASIC Registration Date")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"02 Sep 2011"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"ABN")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"44 153 028 829"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"ACN")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"153 028 829"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"Telephone")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"+61 1300 328264"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"Fax")),(0,l.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,l.kt)("p",{parentName:"td"},"+61 1300 867579"))))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-introduction-company-information-md-75397bfc954bd5f70f7c.js.map