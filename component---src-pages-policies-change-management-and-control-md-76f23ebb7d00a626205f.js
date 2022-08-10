"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3287],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),o=a(8650),r=a.n(o),i=a(1597),s=a(4799),l=a(7275),c=a(5900),d=a.n(c),p=function(e){var t,a=e.title,o=e.theme,r=e.tabs,i=void 0===r?[]:r;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,o=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||o,s=r.baseUrl,l=r.subDirectory,c=s+"/edit/"+r.branch+l+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(4703),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,s=o.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),l=a===s,c=new RegExp(s+"/?(#.*)?$"),p=o.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(n.Component),f=g,k=a(7296),y=a(5387),b=a(3732),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,o=e.location,c=e.Title,d=t.frontmatter,h=void 0===d?{}:d,g=t.relativePagePath,b=t.titleType,w=h.tabs,N=h.title,P=h.theme,E=h.description,A=h.keywords,T=h.date,x=(0,y.Z)().interiorTheme,C=(0,i.useStaticQuery)("2456312558").site.pathPrefix,S=C?o.pathname.replace(C,""):o.pathname,I=w?S.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",L=P||x;return n.createElement(l.Z,{tabs:w,homepage:!1,theme:L,pageTitle:N,pageDescription:E,pageKeywords:A,titleType:b},n.createElement(p,{title:c?n.createElement(c,null):N,label:"label",tabs:w,theme:L}),w&&n.createElement(f,{title:N,slug:S,tabs:w,currentTab:I}),n.createElement(k.Z,{padded:!0},a,n.createElement(m,{relativePagePath:g}),n.createElement(v,{date:T})),n.createElement(u.Z,{pageContext:t,location:o,slug:S,tabs:w,currentTab:I}),n.createElement(s.Z,null))}},5727:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return h}});var n=a(3366),o=(a(7294),a(4983)),r=a(3624),i=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},c=l("PageDescription"),d=l("AnchorLinks"),p=l("AnchorLink"),m={_frontmatter:s},u=r.Z;function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"This page describes Data Migrators’ policy on change management and control.")),(0,o.kt)(d,{mdxType:"AnchorLinks"},(0,o.kt)(p,{mdxType:"AnchorLink"},"Overview"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Purpose"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Scope"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Policy"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Roles And Responsibilities"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Policy Compliance"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Exceptions"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Non-compliance"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Related Documents"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Definitions and Terms")),(0,o.kt)("h2",null,"Overview"),(0,o.kt)("p",null,"Operational change management brings discipline and quality control to IS. Attention to governance and formal policies and procedures will ensure its success. Adopting formalised governance and policies for operational change management delivers a more disciplined and efficient infrastructure. This formalisation requires communication; the documentation of important process workflows and personnel roles; and the alignment of automation tools, where appropriate. Where change management is non-existent, it is incumbent on IS’s senior management to provide the leadership and vision to jump-start the process. By defining processes and policies, IS organisations can demonstrate increased agility in responding predictably and reliably to new business demands."),(0,o.kt)("p",null,"Data Migrators’ management has recognised the importance of change management and control and the associated risks with ineffective change management and control and have therefore formulated this Change Management and Control Policy in order to address the opportunities and associated risks."),(0,o.kt)("h2",null,"Purpose"),(0,o.kt)("p",null,"The purpose of this policy is to establish management direction and high-level objectives for change management and control. This policy will ensure the implementation of change management and control strategies to mitigate associated risks such as:\n•\tInformation being corrupted and/or destroyed;",(0,o.kt)("br",{parentName:"p"}),"\n","•\tComputer performance being disrupted and/or degraded;\n•\tProductivity losses being incurred; and\n•\tExposure to reputational risk."),(0,o.kt)("h2",null,"Scope"),(0,o.kt)("p",null,"This policy applies to all parties operating within the company’s network environment or utilising Information Resources.  It covers the data networks, LAN servers and personal computers (stand-alone or network-enabled), located at company offices and company production related locations, where these systems are under the jurisdiction and/or ownership of the company or subsidiaries, and any personal computers, laptops, mobile device and or servers authorised to access the company’s  data networks. No employee is exempt from this policy. "),(0,o.kt)("h2",null,"Policy"),(0,o.kt)("p",null,"Changes to information resources shall be managed and executed according to a formal change control process.  The control process will ensure that changes proposed are reviewed, authorised, tested, implemented, and released in a controlled manner; and that the status of each proposed change is monitored."),(0,o.kt)("p",null,"In order to fulfil this policy, the following statements shall be adhered to:"),(0,o.kt)("h3",null,"Operational Procedures"),(0,o.kt)("p",null,"The change control process shall be formally defined and documented. A change control process shall be in place to control changes to all critical company information resources (such as hardware, software, system documentation and operating procedures).  This documented process shall include management responsibilities and procedures.  Wherever practicable, operational and application change control procedures should be integrated."),(0,o.kt)("p",null,"At a minimum the change control process should include the following phases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logged Change Requests;"),(0,o.kt)("li",{parentName:"ul"},"Identification, prioritisation and initiation of change;"),(0,o.kt)("li",{parentName:"ul"},"Proper authorisation of change;"),(0,o.kt)("li",{parentName:"ul"},"Requirements analysis;"),(0,o.kt)("li",{parentName:"ul"},"Inter-dependency and compliance analysis;"),(0,o.kt)("li",{parentName:"ul"},"Impact Assessment;"),(0,o.kt)("li",{parentName:"ul"},"Change approach;"),(0,o.kt)("li",{parentName:"ul"},"Change testing;"),(0,o.kt)("li",{parentName:"ul"},"User acceptance testing and approval;"),(0,o.kt)("li",{parentName:"ul"},"Implementation and release planning;"),(0,o.kt)("li",{parentName:"ul"},"Documentation;"),(0,o.kt)("li",{parentName:"ul"},"Change monitoring;"),(0,o.kt)("li",{parentName:"ul"},"Defined responsibilities and authorities of all users and IT personnel;"),(0,o.kt)("li",{parentName:"ul"},"Emergency change classification parameters.")),(0,o.kt)("h3",null,"Documented Change"),(0,o.kt)("p",null,"All change requests shall be logged whether approved or rejected on a standardised and central system. The approval of all change requests and the results thereof shall be documented.\nA documented audit trail, maintained at a Business Unit Level, containing relevant information shall be maintained at all times.  This should include change request documentation, change authorisation and the outcome of the change.  No single person should be able to effect changes to production information systems without the approval of other authorised personnel."),(0,o.kt)("h3",null,"Risk Management"),(0,o.kt)("p",null,"A risk assessment shall be performed for all changes and dependant on the outcome, an impact assessment should be performed.\nThe impact assessment shall include the potential effect on other information resources and potential cost implications. The impact assessment should, where applicable consider compliance with legislative requirements and standards. "),(0,o.kt)("h3",null,"Change Classification"),(0,o.kt)("p",null,"All change requests shall be prioritised in terms of benefits, urgency, effort required and potential impact on operations. "),(0,o.kt)("h3",null,"Testing"),(0,o.kt)("p",null,"Changes shall be tested in an isolated, controlled, and representative environment (where such an environment is feasible) prior to implementation to minimise the effect on the relevant business process, to assess its impact on operations and security and to verify that only intended and approved changes were made. "),(0,o.kt)("h3",null,"Changes Affecting Sla‘s"),(0,o.kt)("p",null,"The impact of change on existing SLA’s shall be considered. Where applicable, changes to the SLA shall be controlled through a formal change process which includes contractual amendments. "),(0,o.kt)("h3",null,"Version Control"),(0,o.kt)("p",null,"Any software change and/or update shall be controlled with version control using the Git versioning system. Older versions shall be retained in accordance with corporate retention and storage management policies. "),(0,o.kt)("h3",null,"Approval"),(0,o.kt)("p",null,"All changes shall be approved prior to implementation. Approval of changes shall be based on formal acceptance criteria i.e. the change request was done by an authorised user, the impact assessment was performed, and proposed changes were tested. "),(0,o.kt)("h3",null,"Communicating Changes"),(0,o.kt)("p",null,"All users, significantly affected by a change, shall be notified of the change.  The user representative shall sign-off on the change. Users shall be required to make submissions and comment prior to the acceptance of the change."),(0,o.kt)("h3",null,"Implementation"),(0,o.kt)("p",null,"Implementation will only be undertaken after appropriate testing and approval by stakeholders. All major changes shall be treated as new system implementation and shall be established as a project. Major changes will be classified according to effort required to develop and implement said changes."),(0,o.kt)("h3",null,"Fall Back"),(0,o.kt)("p",null,"Procedures for aborting and recovering from unsuccessful changes shall be documented. Should the outcome of a change be different to the expected result (as identified in the testing of the change), procedures and responsibilities shall be noted for the recovery and continuity of the affected areas. Fall back procedures will be in place to ensure systems can revert back to what they were prior to implementation of changes."),(0,o.kt)("h3",null,"Documentation"),(0,o.kt)("p",null,"Information resources documentation shall be updated on the completion of each change and old documentation shall be archived or disposed of as per the documentation and data retention policies.\nInformation resources documentation is used for reference purposes in various scenarios i.e. further development of existing information resources as well as ensuring adequate knowledge transfer in the event of the original developer and/or development house being unavailable.  It is therefore imperative that information resources documentation is complete, accurate and kept up to date with the latest changes. Policies and procedures, affected by software changes, shall be updated on completion of each change. "),(0,o.kt)("h3",null,"Business Continuity Plans (Bcp)"),(0,o.kt)("p",null,"Business continuity plans shall be updated with relevant changes, managed through the change control process. Business continuity plans rely on the completeness, accuracy and availability of BCP documentation.  BCP documentation is the road map used to minimise disruption to critical business processes where possible, and to facilitate their rapid recovery in the event of disasters.  "),(0,o.kt)("h3",null,"Change Monitoring"),(0,o.kt)("p",null,"All changes will be monitored once they have been rolled-out to the production environment. Deviations from design specifications and test results will be documented and escalated to the solution owner for ratification.  "),(0,o.kt)("h2",null,"Roles And Responsibilities"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("p",{parentName:"th"},"Role")),(0,o.kt)("th",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("p",{parentName:"th"},"Functional Responsibilities")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("p",{parentName:"td"},"Members of the Board")),(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("ul",{parentName:"td"},(0,o.kt)("li",{parentName:"ul"},"Members of the Board shall ensure that the necessary information security controls are implemented and complied with as per this policy.")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("p",{parentName:"td"},"Information Security Manager")),(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("ul",{parentName:"td"},(0,o.kt)("li",{parentName:"ul"},"Establish and revise the information security strategy, policy and standards for change management and control with input from interest groups and subsidiaries;"),(0,o.kt)("li",{parentName:"ul"},"Facilitate and co-ordinate the necessary counter measures to change management and control initiatives and evaluate such policies and standards;"),(0,o.kt)("li",{parentName:"ul"},"Establish the security requirements for change management and control directives and approval of the change management and control standards and change control/ version control products;"),(0,o.kt)("li",{parentName:"ul"},"Co-ordinate the overall communication and awareness strategy for change management;"),(0,o.kt)("li",{parentName:"ul"},"Acts as the management champion for change management and control;"),(0,o.kt)("li",{parentName:"ul"},"Provide technical input to the service requirements and co-ordinate affected changes to SLA’s where applicable."),(0,o.kt)("li",{parentName:"ul"},"Establish and co-ordinate appropriate interest group forums to represent, feedback, implement and monitor change management and control initiatives; and"),(0,o.kt)("li",{parentName:"ul"},"Co-ordinate the implementation of new or additional security controls for change management.")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("p",{parentName:"td"},"Operations Manager")),(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("ul",{parentName:"td"},(0,o.kt)("li",{parentName:"ul"},"Implement, maintain and update the change management and control strategy, baselines, standards, policies and procedures with input from all stakeholders;"),(0,o.kt)("li",{parentName:"ul"},"Approve and authorise change management and control measures on behalf of the Data Migrators;"),(0,o.kt)("li",{parentName:"ul"},"Ensure that all application owners are aware of the applicable policies, standards, procedures and guidelines for change management and control;"),(0,o.kt)("li",{parentName:"ul"},"Ensure that policy, standards and procedural changes are communicated to applicable owners and management forums;"),(0,o.kt)("li",{parentName:"ul"},"Appoint the necessary representation to the interest groups and other forums created by each company for Information Security Management relating to change management and control;"),(0,o.kt)("li",{parentName:"ul"},"Establish and revise the information security strategy, policy and standards for change management and control;"),(0,o.kt)("li",{parentName:"ul"},"Facilitate and co-ordinate the necessary change management and control initiatives within each company;"),(0,o.kt)("li",{parentName:"ul"},"Report and evaluate changes to change management and control policies and standards;"),(0,o.kt)("li",{parentName:"ul"},"Co-ordinate the overall communication and awareness strategy for change management and control;"),(0,o.kt)("li",{parentName:"ul"},"Co-ordinate the implementation of new or additional security controls for change management and control"),(0,o.kt)("li",{parentName:"ul"},"Review the effectiveness of  change management and control strategy and implement remedial controls where deficits are identified;"),(0,o.kt)("li",{parentName:"ul"},"Provide regular updates on change management and control initiatives and the suitable application;"),(0,o.kt)("li",{parentName:"ul"},"Evaluate and recommend changes to change management/ version control solutions; and"),(0,o.kt)("li",{parentName:"ul"},"Co-ordinate awareness strategies and rollouts to effectively communicate change management and control mitigation solutions in each company."),(0,o.kt)("li",{parentName:"ul"},"Establish and implement the necessary standards and procedures that conform to the Information Security policy;"),(0,o.kt)("li",{parentName:"ul"},"Responsible for approving, authorising, monitoring and enforcing change management initiatives and related security controls within all Data Migrators companies and divisions;"),(0,o.kt)("li",{parentName:"ul"},"Ensure that all solution owners are aware of policies, standards, procedures and guidelines for change management and control."),(0,o.kt)("li",{parentName:"ul"},"Ensure the compliance of this policy and report deviations to the Information Manager")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("p",{parentName:"td"},"IT Service Providers")),(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("ul",{parentName:"td"},(0,o.kt)("li",{parentName:"ul"},"Shall provide support for all change management and control statements of this policy.")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("p",{parentName:"td"},"Solution Owners")),(0,o.kt)("td",{parentName:"tr",colspan:1,rowspan:1},(0,o.kt)("ul",{parentName:"td"},(0,o.kt)("li",{parentName:"ul"},"Shall comply with all information security policies, standards and procedures for change management and control; and"),(0,o.kt)("li",{parentName:"ul"},"Report all deviations.")))))),(0,o.kt)("h2",null,"Policy Compliance"),(0,o.kt)("p",null,"See Policy."),(0,o.kt)("h2",null,"Exceptions"),(0,o.kt)("p",null,"Specific procedures to ensure the proper control, authorisation, and documentation of emergency changes shall be in place. Specific parameters will be defined as a standard for classifying changes as Emergency changes."),(0,o.kt)("h2",null,"Non-compliance"),(0,o.kt)("p",null,"Any person, subject to this policy, who fails to comply with the provisions as set out above or any amendment thereto, shall be subjected to appropriate disciplinary or legal action in accordance with the Data Migrators Disciplinary Code and Procedures. Company Information Security policies, standards, procedures and guidelines shall comply with legal, regulatory and statutory requirements."),(0,o.kt)("h2",null,"Related Documents"),(0,o.kt)("p",null,"The following documents contain provisions that, through reference in the text, constitute requirements of this policy.  At the time of publication, the editions indicated were valid.  All standards and specifications are subject to revision, and parties to agreements based on this policy are encouraged to investigate the possibility of applying the most recent editions of the documents listed below.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"disaster_recovery_plan_policy"},"Disaster Recovery Plan Policy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"information_lifecycle_management_policy"},"Information Lifecycle Management Policy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"server_security_policy"},"Server Security Poplicy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"software_installation_policy"},"Software Installation Policy"))),(0,o.kt)("h2",null,"Definitions and Terms"),(0,o.kt)("h4",null,"Audit Trail"),(0,o.kt)("p",null,"A record or series of records which allows the processing carried out by a computer system to be accurately identified, as well as verifying the authenticity of such amendments."),(0,o.kt)("h4",null,"Information Resources"),(0,o.kt)("p",null,"All data, information as well as the hardware, software, personnel and processes involved with the storage, processing and output of such information.  This includes data networks, servers, PC’s, storage media, printer, photo copiers, fax machines, supporting equipment, fall-back equipment and back-up media."),(0,o.kt)("h4",null,"Abbreviations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PC:  Personal Computer"),(0,o.kt)("li",{parentName:"ul"},"BCP: Business Continuity Plan"),(0,o.kt)("li",{parentName:"ul"},"SLA: Service Level Agreement")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-policies-change-management-and-control-md-76f23ebb7d00a626205f.js.map