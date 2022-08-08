"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9016],{3624:function(e,t,a){a.d(t,{Z:function(){return N}});var i=a(7294),n=a(8650),o=a.n(n),r=a(1597),l=a(4799),s=a(7275),m=a(5900),c=a.n(m),p=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return i.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,n=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,l=o.baseUrl,s=o.subDirectory,m=l+"/edit/"+o.branch+s+"/src/pages"+t;return l?i.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"bx--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4703),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===l,m=new RegExp(l+"/?(#.*)?$"),p=n.replace(m,a);return i.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},i.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(i.Component),k=g,b=a(7296),f=a(5387),y=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?i.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(y.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,n=e.location,m=e.Title,c=t.frontmatter,h=void 0===c?{}:c,g=t.relativePagePath,y=t.titleType,N=h.tabs,D=h.title,E=h.theme,w=h.description,x=h.keywords,M=h.date,T=(0,f.Z)().interiorTheme,P=(0,r.useStaticQuery)("2456312558").site.pathPrefix,L=P?n.pathname.replace(P,""):n.pathname,A=N?L.split("/").filter(Boolean).slice(-1)[0]||o()(N[0],{lower:!0}):"",C=E||T;return i.createElement(s.Z,{tabs:N,homepage:!1,theme:C,pageTitle:D,pageDescription:w,pageKeywords:x,titleType:y},i.createElement(p,{title:m?i.createElement(m,null):D,label:"label",tabs:N,theme:C}),N&&i.createElement(k,{title:D,slug:L,tabs:N,currentTab:A}),i.createElement(b.Z,{padded:!0},a,i.createElement(d,{relativePagePath:g}),i.createElement(v,{date:M})),i.createElement(u.Z,{pageContext:t,location:n,slug:L,tabs:N,currentTab:A}),i.createElement(l.Z,null))}},6159:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return h}});var i=a(3366),n=(a(7294),a(4983)),o=a(3624),r=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)}},m=s("PageDescription"),c=s("AnchorLinks"),p=s("AnchorLink"),d={_frontmatter:l},u=o.Z;function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)(u,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(m,{mdxType:"PageDescription"},(0,n.kt)("p",null,"This page describes Data Migrators’ policy around the use of email.")),(0,n.kt)(c,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"Overview"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Purpose"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Scope"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Policy"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Policy Compliance"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Exceptions"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Non-compliance"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Related Documents"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Definitions and Terms")),(0,n.kt)("h2",null,"Overview"),(0,n.kt)("p",null,"Electronic email is pervasively used in almost all industry verticals and is often the primary communication and awareness method within an organization. At the same time, misuse of email can post many legal, privacy and security risks, thus it’s important for users to understand the appropriate use of electronic communications."),(0,n.kt)("h2",null,"Purpose"),(0,n.kt)("p",null,"The purpose of this email policy is to ensure the proper use of Data Migrators email system and make users aware of what Data Migrators deems as acceptable and unacceptable use of its email system. This policy outlines the minimum requirements for use of email within Data Migrators’ Network."),(0,n.kt)("h2",null,"Scope"),(0,n.kt)("p",null,"This policy covers appropriate use of any email sent from a Data Migrators email address and applies to all employees, vendors, and agents operating on behalf of Data Migrators."),(0,n.kt)("h2",null,"Policy"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"All use of email must be consistent with Data Migrators policies and procedures of ethical conduct, safety, compliance with applicable laws and proper business practices. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Data Migrators email account should be used primarily for Data Migrators business-related purposes; personal communication is permitted on a limited basis, but non-Data Migrators related commercial uses are prohibited.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"All Data Migrators data contained within an email message or an attachment must be secured according to the ",(0,n.kt)("em",{parentName:"p"},"Data Protection Standard"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Email should be retained only if it qualifies as a Data Migrators\nbusiness record. Email is a Data Migrators business record if\nthere exists a legitimate and ongoing business reason to preserve\nthe information contained in the email.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Email that is identified as a Data Migrators business record shall\nbe retained according to Data Migrators Record Retention\nSchedule.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The Data Migrators email system shall not to be used for the creation or distribution of any disruptive or offensive messages, including offensive comments about race, gender, hair color, disabilities, age, sexual orientation, pornography, religious beliefs and practice, political beliefs, or national origin. Employees who receive any emails with this content from any Data Migrators employee should report the matter to their supervisor immediately.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Users are prohibited from automatically forwarding Data Migrators email to a third party email system (noted in 4.8 below). Individual messages which are forwarded by the user must not contain Data Migrators confidential or above information. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Users are prohibited from using third-party email systems and storage servers such as Google, Yahoo, and MSN Hotmail etc. to conduct Data Migrators business, to create or memorialize any binding transactions, or to store or retain email on behalf of Data Migrators.  Such communications and transactions should be conducted through proper channels using Data Migrators-approved documentation. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using a reasonable amount of Data Migrators resources for personal emails is acceptable, but non-work related email shall be saved in a separate folder from work related email. Sending chain letters or joke emails from a Data Migrators email account is prohibited. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Data Migrators employees shall have no expectation of privacy in anything they store, send or receive on the company’s email system. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Data Migrators may monitor messages without prior notice. Data Migrators is not obliged to monitor email messages."))),(0,n.kt)("h2",null,"Policy Compliance"),(0,n.kt)("h3",null,"Compliance Measurement"),(0,n.kt)("p",null,"The Infosec team will verify compliance to this policy through various\nmethods, including but not limited to, periodic walk-thrus, video\nmonitoring, business tool reports, internal and external audits, and\nfeedback to the policy owner."),(0,n.kt)("h2",null,"Exceptions"),(0,n.kt)("p",null,"Any exception to the policy must be approved by the Infosec team in\nadvance."),(0,n.kt)("h2",null,"Non-Compliance"),(0,n.kt)("p",null,"An employee found to have violated this policy may be subject to\ndisciplinary action, up to and including termination of employment."),(0,n.kt)("h2",null,"Related Documents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Protection Standard")),(0,n.kt)("h2",null,"Definitions and Terms"),(0,n.kt)("p",null,"None."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-policies-email-policy-md-a9df9b096dd9def91f3b.js.map