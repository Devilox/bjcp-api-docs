---
title: Colors
description: Get all colors of beer styles
tags:
  - api
---

Colors terms used by BJCP

## Query

```graphql
query getColors {
  colors {
    data{
      id,
      attributes {
        reference
        type
        hex
        name
        min
        max
      }
    }
  }
}
```


## JSON Response

```json
{
    "data": {
        "colors": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "reference": "2-3",
                        "type": "SRM",
                        "hex": "#f0eebc",
                        "name": "Straw",
                        "min": 2,
                        "max": 3
                    }
                },
                {
                    "id": "2",
                    "attributes": {
                        "reference": "3-4",
                        "type": "SRM",
                        "hex": "#e9d67d",
                        "name": "Yellow",
                        "min": 3,
                        "max": 4
                    }
                },
                ...
            ],
        },
    },
}
```