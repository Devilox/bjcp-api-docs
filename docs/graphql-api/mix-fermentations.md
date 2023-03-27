---
title: Mix fermentation terms
description: Get Mix fermentation terms
tags:
  - api
---

Mix fermentation terms used by BJCP	

## Query

```graphql
query mixFermentations { 
  mixedFermentationTerms { 
  	data {
      id
      attributes {
        name,
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
        "mixedFermentationTerms": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "name": "Acetic character",
                        "description": "vinegar-like, sharp, not a clean sourness."
                    }
                },
                {
                    "id": "4",
                    "attributes": {
                        "name": "Clean sourness",
                        "description": "A quality descriptor for sourness ..."
                    }
                },
                ...
            ],
        },
    },
}
```