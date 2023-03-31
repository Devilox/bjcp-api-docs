---
title: Discover API
description: Welcome
sidebar_position: 2
---

# Discover the GraphQL API

## Root GraphQL API Endpoint

```
https://www.api-bjcp.com/graphql
```

## Language support

To use a graphQL API, you need a language support for your favorites languages.

For exemple, you need an Appolo Client or Relay for Javascript language.

You can find all informations about languages support on [offical documentation](https://graphql.org/code/)


## Security

API is free for now and have a public access without authentication but all GraphQL mutation like *create*, *delete* and *update* are disabled to public access.


## Queries availabled

|  Query |  Description  |  More detail |
|---|---|---|
| Beer styles categories  | All categories of parents that regroup all bjcp beer styles |  [doc here](../graphql-api/beer-styles-categories) | 
|  Beer styles | Get all beer styles with many informations, it's the most important API  |  [doc here](../graphql-api/beer-styles) | 
|  Colors | Colors terms used by BJCP  | [doc here](../graphql-api/colors)  |
| Hops  | Hops terms used by BJCP  |  [doc here](../graphql-api/hops) |
|  Malt | Malt or Mashing terms used by BJCP  | [doc here](../graphql-api/malt.md)  |
|  Mix fermentation | Mix fermentation terms used by BJCP | [doc here](../graphql-api/mix-fermentations)  |
|  Yeast or Fermentation Terms | Yeast or Fermentation Terms used by BJCP  |  [doc here](../graphql-api/yeast-terms)  |
|  Quality or Off-Flavor terms | Quality or Off-Flavor terms used by BJCP  |  [doc here](../graphql-api/quality-of-flavor-terms)  |


### Filter, Sort, Pagination, Internationalization

All informations to manage your graphQL queries are available in strapi website [here](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html#filters)