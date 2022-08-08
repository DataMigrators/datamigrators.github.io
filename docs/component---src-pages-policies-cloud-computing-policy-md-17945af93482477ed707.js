"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4981],{3624:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(8650),o=a.n(r),i=a(1597),l=a(4799),s=a(7275),p=a(5900),c=a.n(p),d=function(e){var t,a=e.title,r=e.theme,o=e.tabs,i=void 0===o?[]:o;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||r,l=o.baseUrl,s=o.subDirectory,p=l+"/edit/"+o.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},u=a(4703),k=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===l,p=new RegExp(l+"/?(#.*)?$"),d=r.replace(p,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),g=h,y=a(7296),v=a(5387),N=a(3732),b=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},f=function(e){var t=e.pageContext,a=e.children,r=e.location,p=e.Title,c=t.frontmatter,k=void 0===c?{}:c,h=t.relativePagePath,N=t.titleType,f=k.tabs,w=k.title,D=k.theme,P=k.description,x=k.keywords,T=k.date,E=(0,v.Z)().interiorTheme,M=(0,i.useStaticQuery)("2456312558").site.pathPrefix,L=M?r.pathname.replace(M,""):r.pathname,S=f?L.split("/").filter(Boolean).slice(-1)[0]||o()(f[0],{lower:!0}):"",A=D||E;return n.createElement(s.Z,{tabs:f,homepage:!1,theme:A,pageTitle:w,pageDescription:P,pageKeywords:x,titleType:N},n.createElement(d,{title:p?n.createElement(p,null):w,label:"label",tabs:f,theme:A}),f&&n.createElement(g,{title:w,slug:L,tabs:f,currentTab:S}),n.createElement(y.Z,{padded:!0},a,n.createElement(m,{relativePagePath:h}),n.createElement(b,{date:T})),n.createElement(u.Z,{pageContext:t,location:r,slug:L,tabs:f,currentTab:S}),n.createElement(l.Z,null))}},6585:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return k}});var n=a(3366),r=(a(7294),a(4983)),o=a(3624),i=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},p=s("PageDescription"),c=s("AnchorLinks"),d=s("AnchorLink"),m={_frontmatter:l},u=o.Z;function k(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(p,{mdxType:"PageDescription"},(0,r.kt)("p",null,"This page describes Data Migrators’ policy on cloud computing.")),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(d,{mdxType:"AnchorLink"},"Overview"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Purpose"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Scope"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Policy"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Policy Compliance"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Exceptions"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Non-compliance"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Related Documents"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Definitions and Terms")),(0,r.kt)("h2",null,"Overview"),(0,r.kt)("p",null,"See Purpose."),(0,r.kt)("h2",null,"Purpose"),(0,r.kt)("p",null,"The Ministry needs to meet its responsibilities by ensuring the security, privacy and ownership rights of information held with outsourced or cloud service providers is appropriate, clearly specified and built into the contractual arrangements for that service. "),(0,r.kt)("h2",null,"Scope"),(0,r.kt)("p",null,"Key considerations for cloud computing are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"business risk "),(0,r.kt)("li",{parentName:"ul"},"information security"),(0,r.kt)("li",{parentName:"ul"},"information management "),(0,r.kt)("li",{parentName:"ul"},"privacy"),(0,r.kt)("li",{parentName:"ul"},"business continuity "),(0,r.kt)("li",{parentName:"ul"},"disaster recovery"),(0,r.kt)("li",{parentName:"ul"},"legislative obligations"),(0,r.kt)("li",{parentName:"ul"},"service level and key performance indicators"),(0,r.kt)("li",{parentName:"ul"},"commercial constructs"),(0,r.kt)("li",{parentName:"ul"},"IS architectural fit.")),(0,r.kt)("h2",null,"Policy"),(0,r.kt)("p",null,"Cloud computing solutions will be considered alongside traditional in-house solutions as an appropriate response to business needs.  In compliance with Data Migrators’ cloud-first directive, where a cloud-based solution meets business needs, it will be preferred to a traditional in-house solution."),(0,r.kt)("p",null,"Regardless of the cloud computing solution chosen, Data Migrators must be able to demonstrate compliance with all relevant legislation."),(0,r.kt)("p",null,"As part of the process of evaluating a cloud computing solution, the following principles must be applied:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloud computing solutions, usually offered by a cloud service provider, will be evaluated on a case-by-case basis against Data Migrators’ policies, principles and guidelines, and organisational/sector standards. "),(0,r.kt)("li",{parentName:"ul"},"Cloud computing solutions must safeguard the security and privacy of Data Migrators’ data, and comply with all appropriate security and privacy requirements. "),(0,r.kt)("li",{parentName:"ul"},"Impacts on the operational stability or performance of Data Migrators’ core systems need to be considered when choosing a cloud computing solution. "),(0,r.kt)("li",{parentName:"ul"},"Cloud computing solutions will be delivered using the same processes and controls as any other technology solution at Data Migrators.")),(0,r.kt)("p",null,"For a summary of what cloud computing is, the models available and how cloud computing is typically implemented, refer to the paper by the National Institute of Science and Technology in the US in the Definitions and Terms’ section.  "),(0,r.kt)("h3",null,"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check whether the cloud service being considered is already being used by Data Migrators to prevent potential duplication of effort or unnecessary cost/effort."),(0,r.kt)("li",{parentName:"ul"},"For Data Migrators, cloud risk assessments must be completed for ALL projects that may use one or more cloud computing services."),(0,r.kt)("li",{parentName:"ul"},"Hosting cloud solutions, that will store personally-identifiable data (client or staff information), in a public cloud facility in a geography appropriate to the data being hosted."),(0,r.kt)("li",{parentName:"ul"},"If data stored with a cloud service provider is to be encrypted (the default scenario) this should be done using cryptographic keys owned and managed by Data Migrators. "),(0,r.kt)("li",{parentName:"ul"},"In all cases, a cloud computing solution will only be considered after a thorough risk evaluation has been completed, reviewed and accepted by Data Migrators’ leadership team.")),(0,r.kt)("h3",null,"Sourcing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data Migrators’ non-functional requirements must be incorporated in all procurement activity, including for cloud-based services."),(0,r.kt)("li",{parentName:"ul"},"Contracting with cloud-solution providers is similar to contracting with other outsourcing vendors.  Similar rigour and data governance considerations should be included in all contracts with cloud service providers.  Things to incorporate include:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a Non-Disclosure Agreement  (recommended before provisioning any service)"),(0,r.kt)("li",{parentName:"ul"},"data ownership (Data Migrators retains exclusive ownership of ALL data held in a cloud provider’s solution which was entered by Data Migrators staff, systems or affiliates in all media forms e.g. online, backup and archive etc.)"),(0,r.kt)("li",{parentName:"ul"},"any other standard intellectual property clauses (as are relevant to the service)"),(0,r.kt)("li",{parentName:"ul"},"data location (the countries where Data Migrators data can be held should be explicitly stated in contracts – this should be based on the outcome of the cloud risk assessment and any associated privacy impact assessment)"),(0,r.kt)("li",{parentName:"ul"},"privacy legislation compliance"),(0,r.kt)("li",{parentName:"ul"},"Service Level Agreements (to meet availability, performance, and recovery requirements)"),(0,r.kt)("li",{parentName:"ul"},"service management processes"),(0,r.kt)("li",{parentName:"ul"},"the application of appropriate retention policies to stored data based on its classification (see ‘Data governance’ below) - this means the cloud service provider’s solution must not hinder compliance with relative legislative obligations"),(0,r.kt)("li",{parentName:"ul"},"a clear process documenting the responsibilities of each party with respect to extracting Data Migrators data and destroying data at the end of the contract"),(0,r.kt)("li",{parentName:"ul"},"provision for a cloud service provider being taken over/bought-out by another organisation (this should include ensuring the ownership, access rights and protection of any data Data Migrators owns cannot be lost when there is a change of cloud service provider ownership) "))),(0,r.kt)("li",{parentName:"ul"},"copies of potential cloud service providers’ most recent standards-based security assessment/assurance as early in the procurement cycle as possible e.g. SOC2 Type 2 (operational effectiveness) audit report etc.")),(0,r.kt)("h3",null,"Data governance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All personally-identifiable information must be encrypted at rest and in transit (see the requirement regarding encryption in ‘General’ above) when stored in a data centre.  This includes transactional, backup and archival data on all electronic media types."),(0,r.kt)("li",{parentName:"ul"},"The cloud service provider should provide an easy mechanism to report on all people who have information stored in its solution/service."),(0,r.kt)("li",{parentName:"ul"},"All data to be stored in a cloud service must be classified and appropriate retention period controls implemented.")),(0,r.kt)("h2",null,"Policy Compliance"),(0,r.kt)("p",null,"This policy applies to all Data Migrators staff involved in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"procuring new IT based solutions"),(0,r.kt)("li",{parentName:"ul"},"migrating existing IT systems to an outsourced or cloud service provider"),(0,r.kt)("li",{parentName:"ul"},"hosting newly developed IT sector solutions.")),(0,r.kt)("h2",null,"Non-compliance"),(0,r.kt)("p",null,"Any Data Migrators personnel found in violation of this policy may be subject to disciplinary action, up to and including termination\nof employment. Any third party partner company found in violation may have their network connection terminated."),(0,r.kt)("h2",null,"Exceptions"),(0,r.kt)("p",null,"None."),(0,r.kt)("h2",null,"Related Documents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"information_lifecycle_mangement_policy"},"Information Security Policy"))),(0,r.kt)("p",null,"Example of how scope and responsibility change by type of cloud service:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"th"},"Area of responsibility")),(0,r.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"th"},"IaaS")),(0,r.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"th"},"PaaS")),(0,r.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"th"},"SaaS")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Data")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"DM")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"DM")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"DM"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Software, user applications")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"DM")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"DM")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Operating systems, databases etc")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"DM")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Virtual infrastructure (hypervisor, virtual appliance, VMs, virtual networks etc)")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"DM")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Computer and network hardware (processors, memory, storage, cabling etc)")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Data Centre (physical facility)")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider")),(0,r.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,r.kt)("p",{parentName:"td"},"Provider"))))),(0,r.kt)("h2",null,"Definitions and Terms"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf"},"This paper")," from the National Institute of Science and Technology in the US provides an excellent overview of cloud computing including a definition, essential characteristics, and typical deployment models."))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-policies-cloud-computing-policy-md-17945af93482477ed707.js.map