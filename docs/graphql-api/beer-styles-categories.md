---
title: Beer styles categories
description: Get beer styles categories
tags:
  - api
---

All parent categories that regroup all bjcp beer styles

## Query

```graphql
query getBeerStyleCategories {
  beerStyleCategories {
    data { 
      id
      attributes {
        name
        description
        referenceNumber
      }
    }
  }
}
```

## JSON Response

```json
{
    "data": {
        "beerStyleCategories": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "name": " Standard American Beer",
                        "description": "This category describes everyday American beers that have a wide public appeal. Containing both ales and lagers, ...",
                        "referenceNumber": 1
                    }
                },
                ...
            ],
        },
    },
}
```