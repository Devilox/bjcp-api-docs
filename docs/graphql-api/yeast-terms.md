---
title: Yeast or Fermentation Terms
description: Get all yeast or fermentation terms
tags:
  - api
---

Yeast or Fermentation Terms used by BJCP

## Query

```graphql
query getYeastTerms {
  yeastTerms(sort: "id") {
    data {
      id
      attributes {
        name
        description
      }
    }
  }
}
```

## JSON Response
```json
{
    "data": {
        "yeastTerms": {
            "data": [
                {
                    "id": "7",
                    "attributes": {
                        "name": "Clean fermentation profile",
                        "description": "The quality of having very low to no yeast-derived fermentation byproducts in the finished beer, typically implying that there are no esters, diacetyl, acetaldehyde, ..."
                    }
                },
            ],
        },
    },
}
```