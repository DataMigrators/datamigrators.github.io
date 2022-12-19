"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3003],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),i=a(8650),r=a.n(i),s=a(1597),o=a(4799),l=a(7275),m=a(5900),p=a.n(m),c=function(e){var t,a=e.title,i=e.theme,r=e.tabs,s=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=s.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,i=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,o=r.baseUrl,l=r.subDirectory,m=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4703),g=a(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),l=a===o,m=new RegExp(o+"/?(#.*)?$"),c=i.replace(m,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),h=k,f=a(7296),y=a(5387),b=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,i=e.location,m=e.Title,p=t.frontmatter,g=void 0===p?{}:p,k=t.relativePagePath,b=t.titleType,w=g.tabs,N=g.title,D=g.theme,x=g.description,M=g.keywords,T=g.date,E=(0,y.Z)().interiorTheme,P=(0,s.useStaticQuery)("2456312558").site.pathPrefix,C=P?i.pathname.replace(P,""):i.pathname,R=w?C.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",A=D||E;return n.createElement(l.Z,{tabs:w,homepage:!1,theme:A,pageTitle:N,pageDescription:x,pageKeywords:M,titleType:b},n.createElement(c,{title:m?n.createElement(m,null):N,label:"label",tabs:w,theme:A}),w&&n.createElement(h,{title:N,slug:C,tabs:w,currentTab:R}),n.createElement(f.Z,{padded:!0},a,n.createElement(d,{relativePagePath:k}),n.createElement(v,{date:T})),n.createElement(u.Z,{pageContext:t,location:i,slug:C,tabs:w,currentTab:R}),n.createElement(o.Z,null))}},8237:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return g}});var n=a(3366),i=(a(7294),a(4983)),r=a(3624),s=["components"],o={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=l("PageDescription"),p=l("AnchorLinks"),c=l("AnchorLink"),d={_frontmatter:o},u=r.Z;function g(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)(u,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{mdxType:"PageDescription"},(0,i.kt)("p",null,"This page describes Data Migrators’ policy and procedures around risk management.")),(0,i.kt)(p,{mdxType:"AnchorLinks"},(0,i.kt)(c,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Purpose"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Scope"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Policy"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Policy Compliance"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Exceptions"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Non-compliance"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Related Documents"),(0,i.kt)(c,{mdxType:"AnchorLink"},"Definitions and Terms")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"See Purpose."),(0,i.kt)("h2",null,"Purpose"),(0,i.kt)("p",null,"To clarify Data Migrators’ policy on Risk Management, and the processes that support\nthat policy."),(0,i.kt)("h2",null,"Scope"),(0,i.kt)("p",null,"This Policy applies to all Company officers, employees, partners, and\ncontractors to facilities and systems controlled by the Company. The\npolicy extends to all current and future activities, and new opportunities."),(0,i.kt)("p",null,"Where necessary, more detailed risk management policies and procedures will\nbe developed to cover specific areas of the Company’s operations, such as\nfinancial management and business management."),(0,i.kt)("h2",null,"Policy"),(0,i.kt)("h3",null,"Recognition of the need for risk management"),(0,i.kt)("p",null,"Data Migrators recognises the need for risk management to feature as a\nconsideration in strategic and operational planning, day-to-day management\nand decision making at all levels in the organisation."),(0,i.kt)("h3",null,"A commitment to implement risk management effectively"),(0,i.kt)("p",null,"Data Migrators is committed to managing and minimising risk by identifying,\nanalysing, evaluating and treating exposures that may impact on the Company\nachieving its objectives and/or the continued efficiency and effectiveness of\nits operations. Data Migrators will incorporate risk management into its\norganisational planning and decision-making processes. Risk management must\nalso be included as a consideration in sectional and operational planning as\na delegated line management responsibility. Data Migrators staff must implement\nrisk management according to relevant legislative requirements and appropriate\nrisk management standards."),(0,i.kt)("h3",null,"A commitment to training and knowledge development in the area of risk management"),(0,i.kt)("p",null,"Data Migrators is committed to ensuring that all staff, particularly those with\nmanagement, advisory, and decision making responsibilities, obtain a sound understanding\nof the principles of risk management and the requisite skills to implement risk\nmanagement effectively."),(0,i.kt)("h3",null,"A commitment to monitor performance and review progress in risk management"),(0,i.kt)("p",null,"Data Migrators will regularly monitor and review the progress being made in\ndeveloping an appropriate culture of risk management and the effective\nimplementation of risk management strategies throughout the organisation as\na basis for continuous improvement."),(0,i.kt)("h2",null,"Principles"),(0,i.kt)("h3",null,"Responsibility for Risk Management"),(0,i.kt)("p",null,"Risk must first and foremost be managed at the corporate level as part of the Company’s\ngood governance and corporate management processes. Risk management is considered an\nintegral part of all management and decision-making functions within Data Migrators.\nThe responsibility for the identification of risk and the implementation of control\nstrategies and follow up remains a delegated line management responsibility. All\nstakeholders have a significant role in the management of risk. This role may range\nfrom initially identifying and reporting risks associated with their own jobs to\nparticipation in the risk management process. Data Migrators Directors will facilitate\nthe introduction and monitoring of risk management into key areas of Data Migrators’\nactivities"),(0,i.kt)("h3",null,"Objectives of and Rationale for Risk Management"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Data Migrators, in its need for risk management, aims to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"facilitate and review risk management activities across the institution through Data Migrators Directors;"),(0,i.kt)("li",{parentName:"ul"},"integrate risk management into the management culture of the Company; and"),(0,i.kt)("li",{parentName:"ul"},"foster an environment where staff assume responsibility for managing risks."))),(0,i.kt)("li",{parentName:"ol"},"To secure its commitment to implement risk management effectively, Data Migrators aims to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"implement risk management across all aspects of the Company in accordance with best practice guidelines."))),(0,i.kt)("li",{parentName:"ol"},"To secure its commitment to training and knowledge development in the area of risk management, Data Migrators aims to:\nensure that performance in risk management is a consideration in the Company’s performance management systems; and\nensure that staff and other stakeholders have access to appropriate information, training and other development opportunities in the area of risk management."),(0,i.kt)("li",{parentName:"ol"},"To secure its commitment to monitoring performance and reviewing progress, Data Migrators aims to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ensure that appropriate monitoring, review and reporting processes are in place in the area of risk management."))),(0,i.kt)("li",{parentName:"ol"},"The objectives of risk management are to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"provide a structured basis for strategic, tactical and operational planning across Data Migrators;"),(0,i.kt)("li",{parentName:"ul"},"enhance Data Migrators’ governance and corporate management processes;"),(0,i.kt)("li",{parentName:"ul"},"enable Data Migrators to effectively discharge its statutory and legislative financial management responsibilities;"),(0,i.kt)("li",{parentName:"ul"},"provide a practical framework for managers to assess risks inherent in the decisions they take;"),(0,i.kt)("li",{parentName:"ul"},"assist and motivate decision makers, at all levels, to make good and proactive management decisions that do not expose Data Migrators to unacceptable levels of risk of unfavourable events occurring which adversely impact on the attainment of organisational goals; encourage and commit decision makers to identify sound business opportunities that will benefit Data Migrators without exposing the Company to unacceptable levels of risk;"),(0,i.kt)("li",{parentName:"ul"},"minimise the risks of not identifying sound business opportunities;"),(0,i.kt)("li",{parentName:"ul"},"protect Data Migrators from unacceptable costs or losses associated with its operations;"),(0,i.kt)("li",{parentName:"ul"},"safeguarding of Data Migrators’ resources - its people, finance, property and reputation;"),(0,i.kt)("li",{parentName:"ul"},"assist Data Migrators in achieving its strategic objectives; and"),(0,i.kt)("li",{parentName:"ul"},"create an environment where all staff assume responsibility for risk management")))),(0,i.kt)("h2",null,"Procedures"),(0,i.kt)("h3",null,"Whole of Company Risk Management Process"),(0,i.kt)("p",null,"Risk must first and foremost be managed at the corporate level as part of Data Migrators’\ngood governance and corporate management processes. This process, coordinated and\nfacilitated by Data Migrators Directors, will involve the following key steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"an annual risk identification exercise undertaken by Data Migrators Directors,\nwhich involves assessment of the consequence and likelihood of risk, the development\nand/or review of individual risk management plans for the risks identified which\nexceed the Organisation’s defined acceptable risks;"),(0,i.kt)("li",{parentName:"ol"},"wherever practicable the inclusion of a Risk Management Assessment for all\nbusiness activities;"),(0,i.kt)("li",{parentName:"ol"},"the incorporation of risk management into Company strategic planning, and\noperational and resource management planning processes;"),(0,i.kt)("li",{parentName:"ol"},"annual review of the risk management activities by Data Migrators Directors;"),(0,i.kt)("li",{parentName:"ol"},"at least annual assessment by Data Migrators Directors of action taken in\nrespect of risk management;"),(0,i.kt)("li",{parentName:"ol"},"ensure risk management processes are incorporated into the quality assurance\nand improvement systems of the Company;"),(0,i.kt)("li",{parentName:"ol"},"clearly define and document escalation procedures for risk management;"),(0,i.kt)("li",{parentName:"ol"},"ensure a consistency in approach of responses to the same risk by different\nsections of the Company;"),(0,i.kt)("li",{parentName:"ol"},"document all risks with a potentially high impact, as assessed on the basis\nof their likely occurrence or impact; and"),(0,i.kt)("li",{parentName:"ol"},"test documented risk management procedures at appropriate intervals.")),(0,i.kt)("h4",null,"Risk Management as a Delegated Line Management Responsibility"),(0,i.kt)("p",null,"Risk management is a delegated line management responsibility. It is the\nresponsibility of all line managers to continually monitor their areas of\nresponsibility to ensure that risks are identified and managed. Line managers\nshould ensure that a contribution is made to the whole-of-Company risk\nmanagement process, on behalf of their areas of responsibility, that identifies\nrisks at all levels."),(0,i.kt)("p",null,"The sharing of documented responses to risks and knowledge of risk management\nprinciples and procedures will be fostered between line managers to ensure\nconsistency across the Company."),(0,i.kt)("p",null,"On an annual basis, line managers should review all activities to ensure that\nany unacceptable risk exposures are identified and managed at an appropriate\nlevel. All operational sections will be required to report on risk management\nas part of the institution’s annual operational and resource management process."),(0,i.kt)("h4",null,"Individual"),(0,i.kt)("p",null,"Each employee or other stakeholder throughout the Company has a role in the\nrisk management process and is responsible for actively participating in the\nrisk management process as appropriate to their position within the Company."),(0,i.kt)("h4",null,"Management of Risks Associated with New Opportunities"),(0,i.kt)("p",null,"In addition to the risks that already exist, the Company is continually\nexposed to new risks particularly from the introduction of new activities. The\nnew risks should be incorporated into the initial planning and assessment\nprocesses conducted prior to undertaking the activity and, subsequently, into the\nannual risk management assessment at the appropriate level(s) of activity and\nmanagement."),(0,i.kt)("h3",null,"Principles to be Applied"),(0,i.kt)("p",null,"The principles of risk management shall be applied to all areas of risk exposure,\ninsurable and non-insurable, and shall include, but not be limited to the following\nareas:"),(0,i.kt)("p",null,"+----------------------------------------------------------------------+----------------------------------------------------------------------+\n| Insurable Risks                                                      | Non-Insurable Risks                                                  |\n+======================================================================+======================================================================+\n| ",(0,i.kt)("em",{parentName:"p"}," Insurable workplace health and safety risks                        | ")," Non-insurable workplace health and safety risks\n| ",(0,i.kt)("em",{parentName:"p"}," Insurable fraud and corruption prevention activities               | ")," Non-insurable fraud and corruption prevention activities\n| ",(0,i.kt)("em",{parentName:"p"}," Unauthorised use of resources which represent an insurable risk    | ")," Unauthorised use of resources which represent a non-insurable risk\n| ",(0,i.kt)("em",{parentName:"p"}," Reputation and image as an insurable risk                          | ")," Reputation and image as a non-insurable risk\n| ",(0,i.kt)("em",{parentName:"p"}," Fire prevention measures and security precautions                  | ")," Crisis contingency planning and disaster recovery\n| ",(0,i.kt)("em",{parentName:"p"}," Property loss and damage                                           | ")," Accounting controls that are not cost effective\n| ",(0,i.kt)("em",{parentName:"p"}," Computer security                                                  | ")," Loss of key staff and intellectual property\n| ",(0,i.kt)("em",{parentName:"p"}," Vehicle fleet management                                           | ")," The impact of globalisation on risk exposures\n| ",(0,i.kt)("em",{parentName:"p"}," Professional negligence                                            | ")," Management system inadequacies and poor work quality\n| ",(0,i.kt)("em",{parentName:"p"}," Other liability exposures                                          | ")," Failure or disruption of a major income source or investment\n| * Legal liability                                                    |",(0,i.kt)("br",{parentName:"p"}),"\n","+----------------------------------------------------------------------+----------------------------------------+"),(0,i.kt)("h3",null,"Review"),(0,i.kt)("p",null,"Data Migrators Directors will regularly monitor and review the  progress being\nmade in developing an appropriate culture of risk management and the effective\nimplementation of risk management strategies throughout the organisation."),(0,i.kt)("h3",null,"Guidance on Acceptable Risk"),(0,i.kt)("p",null,"Through its monitoring, review and reporting functions, Data Migrators’ Directors\nwill ensure that the Company maintains a consistent approach to its assessment\nof acceptable risk."),(0,i.kt)("h3",null,"Documentation"),(0,i.kt)("p",null,"Each stage of the risk management process shall be appropriately documented. The\nextent of documentation required is dependent on the nature of the risk.\nDocumentation will be controlled so as to inform part of an auditable quality\nmanagement process."),(0,i.kt)("h3",null,"Compliance"),(0,i.kt)("p",null,"A representation and compliance statement should be provided by each project manager\nas formal acknowledgement of their responsibility to comply with risk management\npolicies and procedures. Each employee should have included in their Position\nDescription a responsibility for risk management, and Annual Performance Appraisals\nshould include an appropriate assessment thereof."),(0,i.kt)("h3",null,"Staff Development"),(0,i.kt)("p",null,"Management shall ensure that staff have available to them appropriate information and\ntraining opportunities in risk management as appropriate to their position and role\nwithin Data Migrators."),(0,i.kt)("h2",null,"References"),(0,i.kt)("p",null,"None."),(0,i.kt)("h2",null,"Related Documents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"risk_assessment_policy"},"Risk Assessment Process"))),(0,i.kt)("h2",null,"Definitions and Terms"),(0,i.kt)("p",null,"None."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-policies-risk-management-policy-md-42555072680553b32ffa.js.map