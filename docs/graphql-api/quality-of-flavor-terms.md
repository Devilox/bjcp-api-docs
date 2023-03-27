---
title: Quality or Off-Flavor terms
description: Get all quality or off-flavor terms
tags:
  - api
---

Quality or Off-Flavor terms used by BJCP

## Query

```graphql
query getQualityOrOffFlavorTerms {
  qualityOrOffFlavorTerms {
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
        "qualityOrOffFlavorTerms": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "name": "Adjunct quality",
                        "description": "A characteristic of beer aroma, flavor, and mouthfeel that reflects the use of higher ..."
                    }
                },
                {
                    "id": "2",
                    "attributes": {
                        "name": "Balanced",
                        "description": "relative to a style, balanced implies a pleasant, harmonious, agreeable, complementary mix ..."
                    }
                },
                ...
            ]
        }
    }
}
```