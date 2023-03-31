---
sidebar_position: 1
---

# BJCP  - Beer Judge Certification Program

Welcome developer and beer lovers. You are in right place if you want discover and use some data from BJCP Style Guidelines 2021.

## What is BJCP ?

*The Beer Judge Certification Program, Inc. (BJCP) is a world-wide certifying organization for judges of beer and related fermented products. Founded in 1985, we now have a presence in over 60 countries and have more than 7500 active judges in the program. Judges are certified through an examination covering technical aspects of brewing, world beer styles, the purpose of the BJCP, and judging procedures, and by demonstrating practical judging skills. Judges are ranked based on their examination scores and accumulation of practical judging experience.*

Source: [BJCP about page](https://www.bjcp.org/about/introduction-bjcp/)

*The last version of the Beer Style Guidelines has been release in December 2021.*

**[Discover bjcp style guidelines docs](https://www.bjcp.org/bjcp-style-guidelines/)**

## Why an API for developer to discover beer styles from BJCP ?

If you are familiar with BJCP website, it's not easy to read and discover each beer style and we only have access to a big document (.pdf or .docx) with 100 pages that reference all styles of beer.

**Conclusion**:
- These are not usable formats for web or mobile application.
- The documentation is exclusively in English so it's not very exploitable for other countries.

So i decided to:
- Build a web administration to manage data for all beer styles easily with internationalization (only english for now)
- Build a GraphQL API that can be used by developers.

## Discover API

This API is an open-source project.

[Discover API](../docs/discover)


## GraphQL API with Strapi

This GraphQL API is builed with [Strapi](https://strapi.io/) a open-source headless CMS.
This CMS can manage easily all content-type, content and generate a great GraphQL API.
