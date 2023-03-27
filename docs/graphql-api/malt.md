---
title: Malt or Mashing terms
description: Get Malt and Mashing terms
tags:
  - api
---

Malt or Mashing terms used by BJCP

## Query

```graphql
query getMaltOrMashingTerms {
  maltOrMashingTerms {
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
        "maltOrMashingTerms": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "name": "Biscuity",
                        "description": "Dry, toasted grain, flour, or dough flavor reminiscent of English digestive biscuits or cookies; in brewing, a flavor commonly associated with Biscuit malt and some traditional English malts."
                    }
                },
                ...
            ],
        },
    },
}
```