---
title: Remote Access Tools Policy
description: Remote Access Tools Policy
keywords: 'ibm,carbon,gatsby,mdx,markdown'
---

<PageDescription>

This page describes Data Migrators' policy on remote access tools.

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

Remote desktop software, also known as remote access tools, provide a
way for computer users and support staff alike to share screens, access
work computer systems from home, and vice versa. Examples of such
software include LogMeIn, GoToMyPC, VNC (Virtual Network Computing), and
Windows Remote Desktop (RDP).  While these tools can save significant
time and money by eliminating travel and enabling collaboration, they
also provide a back door into the Data Migrators network that can be
used for theft of, unauthorized access to, or destruction of assets. As
a result, only approved, monitored, and properly controlled remote
access tools may be used on Data Migrators computer systems.

## Purpose

This policy defines the requirements for remote access tools used at Data Migrators.

## Scope

This policy applies to all remote access where either end of the
communication terminates at a Data Migrators computer asset

## Policy

All remote access tools used to communicate between Data Migrators
assets and other systems must comply with the following policy
requirements.

### Remote Access Tools

Data Migrators provides mechanisms to collaborate between internal
users, with external partners, and from non-Data Migrators systems.
The approved software list can be obtained from
Data Migrators Consultant Handbook. Because proper
configuration is important for secure use of these tools, mandatory
configuration procedures are provided for each of the approved tools.

The approved software list may change at any time, but the following
requirements will be used for selecting approved products:

1. All remote access tools or systems that allow communication to
Data Migrators resources from the Internet or external partner
systems must require multi-factor authentication. Examples include
authentication tokens and smart cards that require an additional PIN
or password.

1. The authentication database source must be Active Directory or LDAP,
and the authentication protocol must involve a challenge-response
protocol that is not susceptible to replay attacks. The remote
access tool must mutually authenticate both ends of the session.

1. Remote access tools must support the Data Migrators application
layer proxy rather than direct connections through the perimeter
firewall(s).

1. Remote access tools must support strong, end-to-end encryption of
the remote access communication channels as specified in the
Data Migrators network encryption protocols policy.

1. All Data Migrators antivirus, data loss prevention, and other
security systems must not be disabled, interfered with, or
circumvented in any way.

All remote access tools must be purchased through the standard Data Migrators
procurement process, and the information technology group must
approve the purchase.

## Policy Compliance

### Compliance Measurement

The Infosec team will verify compliance to this policy through various
methods, including but not limited to, periodic walk-thrus, video
monitoring, business tool reports, internal and external audits, and
feedback to the policy owner.

## Exceptions

Any exception to the policy must be approved by the Infosec Team in
advance.

## Non-Compliance

An employee found to have violated this policy may be subject to
disciplinary action, up to and including termination of employment.

## Related Documents

[Data migrators consultant handbook](https://datamigrators.atlassian.net/wiki/spaces/DCH/overview)

## Definitions and Terms

The following definition and terms can be found in the SANS Glossary
located at: https://www.sans.org/security-resources/glossary-of-terms/

- Application layer proxy

