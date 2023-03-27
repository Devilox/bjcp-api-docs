---
title: Beer styles
description: Get all beer styles
tags:
  - api
---

Get all beer styles with many information, it's the most important API

## Query

```graphql
query getAllBeerStyles {
  beerStyles(sort: "id") {
    data {
      id
      attributes {
        reference
        name,
        overallImpression,
        aroma,
        appearance,
        flavor,
        mouthfeel,
        comments,
        entryInstructions,
        history,
        characteristicIngredients,
        styleComparison,
        vitalStatistics
        shortDescription
        ibuMin
        ibuMax
        fgMin
        fgMax
        ogMin
        ogMax
        srmMin
        srmMax
        abvMin
        abvMax
        style_tag_references { 
         data {
           id
           attributes {
            tag
            description
           }
          }
        }
    }
  }
}
}
```


## JSON Response

```json

{
    "data": {
        "beerStyles": {
            "data": [
                {
                    "id": "1",
                    "attributes": {
                        "beerStyleCategory": {
                            "data": {
                                "id": "1"
                            }
                        },
                        "reference": "1A",
                        "name": "American Light Lager",
                        "overallImpression": "A highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst-quenching.",
                        "aroma": "Low malt aroma optional, but may be perceived as grainy, sweet, or corn-like, if present...",
                        "appearance": "Very pale straw to pale yellow color. White, frothy head seldom persists. Very clear.",
                        "flavor": "Relatively neutral palate with a crisp, dry finish and a low to very low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Low floral,...",
                        "mouthfeel": "Very light, sometimes watery, body. Very highly carbonated with slight carbonic bite on the tongue.",
                        "comments": "Designed to appeal to as broad ....",
                        "entryInstructions": null,
                        "history": "Coors briefly made a light lager in the early 1940s. Modern versions were first produced by Rheingold in ...",
                        "characteristicIngredients": "Two- or six-row barley ...",
                        "styleComparison": "A lighter-bodied, lower-alcohol, lower calorie version of an American Lager. Less hop character and bitterness than a German Leichtbier. ",
                        "vitalStatistics": null,
                        "shortDescription": null,
                        "ibuMin": 8,
                        "ibuMax": 12,
                        "fgMin": 0.998,
                        "fgMax": 1.008,
                        "ogMin": 1.028,
                        "ogMax": 1.04,
                        "srmMin": 2,
                        "srmMax": 3,
                        "abvMin": 2.8,
                        "abvMax": 4.2,
                        "style_tag_references": {
                            "data": [
                                {
                                    "id": "1",
                                    "attributes": {
                                        "tag": "session-strength",
                                        "description": "< 4% ABV"
                                    }
                                },
                                {
                                    "id": "5",
                                    "attributes": {
                                        "tag": "pale-color",
                                        "description": "straw to gold"
                                    }
                                },
                                ...
                            ]
                        }
                    }
                },
                ...
            ],
        },
    },
```