---
title: Hops
description: Get information about Hop terms
tags:
  - api
---

Hops terms used by BJCP	

## Query

```graphql
query getHopTerms {
  hopTerms {
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
        "hopTerms": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "name": "American hops",
                        "description": "American brewing hops from the craft beer era, typically having citrusy, resiny, evergreen, or ..."
                    }
                },
                ...
            ],
        },
    },
}
```