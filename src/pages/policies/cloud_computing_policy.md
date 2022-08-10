---
title: Cloud Computing Policy
description: Data Migrators' Cloud Computing Policy 
keywords: 'cloud,infrastructure,security,saas,paas'
---

<PageDescription>

This page describes Data Migrators' policy on cloud computing.

</PageDescription>

<AnchorLinks>
  <AnchorLink>Overview</AnchorLink>
  <AnchorLink>Purpose</AnchorLink>
  <AnchorLink>Scope</AnchorLink>
  <AnchorLink>Policy</AnchorLink>
  <AnchorLink>Policy Compliance</AnchorLink>
  <AnchorLink>Exceptions</AnchorLink>
  <AnchorLink>Non-compliance</AnchorLink>
  <AnchorLink>Related Documents</AnchorLink>
  <AnchorLink>Definitions and Terms</AnchorLink>
</AnchorLinks>

## Overview

See Purpose.

## Purpose

The Ministry needs to meet its responsibilities by ensuring the security, privacy and ownership rights of information held with outsourced or cloud service providers is appropriate, clearly specified and built into the contractual arrangements for that service. 

## Scope

Key considerations for cloud computing are:

- business risk 
- information security
- information management 
- privacy
- business continuity 
- disaster recovery
- legislative obligations
- service level and key performance indicators
- commercial constructs
- IS architectural fit.

## Policy	

Cloud computing solutions will be considered alongside traditional in-house solutions as an appropriate response to business needs.  In compliance with Data Migrators' cloud-first directive, where a cloud-based solution meets business needs, it will be preferred to a traditional in-house solution.

Regardless of the cloud computing solution chosen, Data Migrators must be able to demonstrate compliance with all relevant legislation.

As part of the process of evaluating a cloud computing solution, the following principles must be applied:

- Cloud computing solutions, usually offered by a cloud service provider, will be evaluated on a case-by-case basis against Data Migrators' policies, principles and guidelines, and organisational/sector standards. 
- Cloud computing solutions must safeguard the security and privacy of Data Migrators’ data, and comply with all appropriate security and privacy requirements. 
- Impacts on the operational stability or performance of Data Migrators’ core systems need to be considered when choosing a cloud computing solution. 
- Cloud computing solutions will be delivered using the same processes and controls as any other technology solution at Data Migrators.
  
For a summary of what cloud computing is, the models available and how cloud computing is typically implemented, refer to the paper by the National Institute of Science and Technology in the US in the Definitions and Terms’ section.  
	
### General

- Check whether the cloud service being considered is already being used by Data Migrators to prevent potential duplication of effort or unnecessary cost/effort.
- For Data Migrators, cloud risk assessments must be completed for ALL projects that may use one or more cloud computing services.
- Hosting cloud solutions, that will store personally-identifiable data (client or staff information), in a public cloud facility in a geography appropriate to the data being hosted.
- If data stored with a cloud service provider is to be encrypted (the default scenario) this should be done using cryptographic keys owned and managed by Data Migrators. 
- In all cases, a cloud computing solution will only be considered after a thorough risk evaluation has been completed, reviewed and accepted by Data Migrators' leadership team.

### Sourcing

* Data Migrators’ non-functional requirements must be incorporated in all procurement activity, including for cloud-based services.
* Contracting with cloud-solution providers is similar to contracting with other outsourcing vendors.  Similar rigour and data governance considerations should be included in all contracts with cloud service providers.  Things to incorporate include:
  - a Non-Disclosure Agreement  (recommended before provisioning any service)
  - data ownership (Data Migrators retains exclusive ownership of ALL data held in a cloud provider’s solution which was entered by Data Migrators staff, systems or affiliates in all media forms e.g. online, backup and archive etc.)
  - any other standard intellectual property clauses (as are relevant to the service)
  - data location (the countries where Data Migrators data can be held should be explicitly stated in contracts – this should be based on the outcome of the cloud risk assessment and any associated privacy impact assessment)
  - privacy legislation compliance
  - Service Level Agreements (to meet availability, performance, and recovery requirements)
  - service management processes
  - the application of appropriate retention policies to stored data based on its classification (see ‘Data governance’ below) - this means the cloud service provider’s solution must not hinder compliance with relative legislative obligations
  - a clear process documenting the responsibilities of each party with respect to extracting Data Migrators data and destroying data at the end of the contract
  - provision for a cloud service provider being taken over/bought-out by another organisation (this should include ensuring the ownership, access rights and protection of any data Data Migrators owns cannot be lost when there is a change of cloud service provider ownership) 
* copies of potential cloud service providers’ most recent standards-based security assessment/assurance as early in the procurement cycle as possible e.g. SOC2 Type 2 (operational effectiveness) audit report etc.

### Data governance

- All personally-identifiable information must be encrypted at rest and in transit (see the requirement regarding encryption in ‘General’ above) when stored in a data centre.  This includes transactional, backup and archival data on all electronic media types.
- The cloud service provider should provide an easy mechanism to report on all people who have information stored in its solution/service.
- All data to be stored in a cloud service must be classified and appropriate retention period controls implemented.

## Policy Compliance

This policy applies to all Data Migrators staff involved in:
- procuring new IT based solutions
- migrating existing IT systems to an outsourced or cloud service provider
- hosting newly developed IT sector solutions.

## Non-compliance

Any Data Migrators personnel found in violation of this policy may be subject to disciplinary action, up to and including termination
of employment. Any third party partner company found in violation may have their network connection terminated.

## Exceptions

None.

## Related Documents

- [Information Security Policy](information_lifecycle_management_policy)

Example of how scope and responsibility change by type of cloud service:

+-----------------------------------------------------------------------------------+----------+----------+----------+
| Area of responsibility                                                            | IaaS     | PaaS     | SaaS     |
+===================================================================================+==========+==========+==========+
| Data                                                                              | DM       | DM       | DM       |
+-----------------------------------------------------------------------------------+----------+----------+----------+
| Software, user applications                                                       | DM       | DM       | Provider |
+-----------------------------------------------------------------------------------+----------+----------+----------+
| Operating systems, databases etc                                                  | DM       | Provider | Provider |
+-----------------------------------------------------------------------------------+----------+----------+----------+
| Virtual infrastructure (hypervisor, virtual appliance, VMs, virtual networks etc) | DM       | Provider | Provider |
+-----------------------------------------------------------------------------------+----------+----------+----------+
| Computer and network hardware (processors, memory, storage, cabling etc)          | Provider | Provider | Provider |
+-----------------------------------------------------------------------------------+----------+----------+----------+
| Data Centre (physical facility)                                                   | Provider | Provider | Provider |
+-----------------------------------------------------------------------------------+----------+----------+----------+


## Definitions and Terms

[This paper](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) from the National Institute of Science and Technology in the US provides an excellent overview of cloud computing including a definition, essential characteristics, and typical deployment models.

