---
title: Employee Off-boarding Policy
description: Data Migrators' data protection policy
keywords: 'ibm,carbon,gatsby,mdx,markdown'
---

<PageDescription>

This page describes Data Migrators' employee off-boarding policy.

</PageDescription>

<AnchorLinks>
  <AnchorLink>Purpose</AnchorLink>
  <AnchorLink>Scope</AnchorLink>
  <AnchorLink>Policy Elements</AnchorLink>
  <AnchorLink>Exceptions</AnchorLink>
  <AnchorLink>Disciplinary Consequences</AnchorLink>
</AnchorLinks>

## Purpose

Our employees systems and data 

It is in Data Migrators' interest to effectively manage the departure of employees when their employment ends. This off-boarding process can help to ensure the:
- Security of property and information
- Completion of required exit tasks
- Business continuity upon the employee’s departure
- Transition with staff and clients
- Collection of information and insights about the Data Migrators employment experience

## Scope

This policy affects all employees, including board members, investors, contractors and volunteers, who may have access to confidential information.

## Policy Steps

When a letter of resignation is received and/or Data Migrators initiates a final separation action (Termination/Dismissal, Medical Separation, Layoff, Job Abandonment, etc.) then Data Migrators informs the employee that all Company property and electronic resources, access, and documents must be returned/secured upon separation.  We will discuss a transition plan and the transfer of information.  Data Migrators completes the Supervisor Checklist for Off-boarding Employees.

## Supervisor Checklist for Off-boarding Employees

### Summary 

A suitably-qualified administrator appointed by a Data Migrators Director will take take the following actions:

- Check employee rights in their jurisdiction and implications for off-boarding.
- Notify the employee of termination, including
  - any factors that have triggered it
  - the process they’ve been through (e.g. performance management) leading up to termination
  - the process they will go through as part of termination (e.g. post-employment placement support)
- Removal of infrastructure access
- Notify office accommodation suppliers to remove access.
- Return of equipment
- Remote wipe where possible
- Revoke SaaS tool access (See below)
- Address IBM-related access
  - Remove IBM PartnerWorld entry and access
  - Notify IBM to remove user's W3 access (IBM account, IBM Slack, etc.)
- Access to Data Migrators premises is rescinded

### Infrastructure and SaaS Services

Remove the user's access to the following platforms and services:

- Suspend 1Password account
- Remove AWS access from All AWS accounts (assign owned objects to trusted administrator)
  - Remove all API keys (which will suspend access via Transmit, Dash, etc.)
  - Remote all used-related Security Group entries
  - Remove all IAM accounts
- Suspend access to Google Workspace account
  - Delete pending review
- Suspend Office365 account
  - Verify AzureDevOps is suspended
  - Remove user’s Azure API keys
  - Delete pending review
- Archive Atlassian account
  - This covers Jira, Confluence and Bitbucket
  - Delete account pending review
- Delete accounts from SaaS ALM systems
  - GitHub
  - Azure DevOps (covered previously)
- Delete accounts from self-hosted ALM systems (dm-demo-alm.*)
  - Azure Server (if relevant)
  - GitHub Server :question_mark:
  - GitLab
  - Jenkins
- Verify then remove user’s objects on the AWS dm-sandbox account
- Remove any user-specific accounts on dm-demo-alm and dm-demo-datastage environments
- Do whatever we have to do in Xero :question_mark:
- Do whatever we have to do in Harvest :question_mark:
Remove any relevant account from the following services: 
- Bitdefender
- Box
- Slack
- Zoom
