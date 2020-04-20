"use strict";
use(function () {
    var calculators =  {
      "alterations": {
        "config": {
          "dates": {
            "draft_available": "2020-11-29",
            "draft_effective": "2018-11-29"
          },
          "units": "imperial"
        },
        "live": {
          "step1": [{
            "id": "addition",
            "title": "Addition area",
            "value": 150.35
          }, {
            "id": "basement",
            "title": "Basement development",
            "value": 34.36
          }, {
            "id": "fireplace",
            "title": "Fireplace",
            "value": 4678.12,
            "label": "<small>Number of fireplaces</small>"
          }, {
            "id": "garages",
            "title": "Garage - attached and detached",
            "value": 47.43
          }, {
            "id": "carport",
            "title": "Carport",
            "value": 34.36
          }, {
            "id": "deck",
            "title": "Raised deck or balcony",
            "value": 23.32
          }, {
            "id": "portch",
            "title": "Porch or covered balcony",
            "value": 34.36
          }, {
            "id": "suites",
            "title": "Secondary Suite / Backyard Suite",
            "customValue": true
          }, {
            "id": "other",
            "title": "Other",
            "customDescription": true,
            "customTotal": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.31,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee",
            "title": "Safety Codes Council Fee - all buildings",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "value": 103.5,
            "checkbox": true,
            "title": "Partial permit?",
            "description": "($99.00 and minimum Safety Codes Council Fee of $4.50)",
            "tooltip": "Optional permission to begin foundation construction prior to full permit issuance. Permit-holder assumes liability for Bylaw and Building Code discrepancies that may arise during review."
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Less than 10 units)",
            "value": 20,
            "textInput": true,
            "maxLength": 1,
            "label": "<small>Number of ground floor dwelling units</small>"
          }]
        },
        "draft": {
          "step1": [{
            "id": "addition",
            "title": "Addition area",
            "value": 150.35
          }, {
            "id": "basement",
            "title": "Basement development",
            "value": 34.36
          }, {
            "id": "fireplace",
            "title": "Fireplace",
            "value": 4678.12,
            "label": "<small>Number of fireplaces</small>"
          }, {
            "id": "garages",
            "title": "Garage - attached and detached",
            "value": 47.43
          }, {
            "id": "carport",
            "title": "Carport",
            "value": 34.36
          }, {
            "id": "deck",
            "title": "Raised deck or balcony",
            "value": 23.32
          }, {
            "id": "portch",
            "title": "Porch or covered balcony",
            "value": 34.36
          }, {
            "id": "suites",
            "title": "Secondary Suite / Backyard Suite",
            "customValue": true
          }, {
            "id": "other",
            "title": "Other",
            "customDescription": true,
            "customTotal": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.31,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee",
            "title": "Safety Codes Council Fee - all buildings",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "value": 103.5,
            "checkbox": true,
            "title": "Partial permit?",
            "description": "($99.00 and minimum Safety Codes Council Fee of $4.50)",
            "tooltip": "Optional permission to begin foundation construction prior to full permit issuance. Permit-holder assumes liability for Bylaw and Building Code discrepancies that may arise during review."
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Less than 10 units)",
            "value": 20,
            "textInput": true,
            "maxLength": 1,
            "label": "<small>Number of ground floor dwelling units</small>"
          }]
        }
      },
      "new_home": {
        "config": {
          "dates": {
            "draft_available": "2018-12-01",
            "draft_effective": "2019-01-01"
          },
          "step1_title": "Step 1: calculate prevailing market value",
          "step2_title": "Step 2: calculate base permit fee",
          "step3_title": "Step 3: add additional fees and surcharges",
          "gst": true,
          "units": "imperial",
          "minBaseFee": 112
        },
        "live": {
          "step1": [{
            "id": "living_area1",
            "title": "Living area - single detached",
            "value": 150.35
          }, {
            "id": "living_area2",
            "title": "Living area - semi-detached or duplex",
            "value": 110.28
          }, {
            "id": "basement",
            "title": "Basement development",
            "value": 34.36
          }, {
            "id": "fireplace_gas",
            "title": "Fireplace - gas",
            "value": 4678.12,
            "label": "<small>Number of fireplaces</small>"
          }, {
            "id": "fireplace_wood",
            "title": "Fireplace - wood burning",
            "value": 4678.12,
            "label": "<small>Number of fireplaces</small>"
          }, {
            "id": "garages",
            "title": "Garage - attached",
            "value": 47.43
          }, {
            "id": "carport",
            "title": "Carport",
            "value": 34.36
          }, {
            "id": "deck",
            "title": "Raised deck or balcony",
            "value": 23.32
          }, {
            "id": "portch",
            "title": "Porch or covered balcony",
            "value": 34.36
          }, {
            "id": "other",
            "title": "Other",
            "customDescription": true,
            "customTotal": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $1000",
            "round": 1000,
            "per": 1000
          }, {
            "id": "ground_work",
            "title": "Ground Work Inspection",
            "value": 125,
            "checkbox": true,
            "gst": true
          }, {
            "id": "temp_heat",
            "title": "Temporary Heat Inspection",
            "value": 125,
            "checkbox": true,
            "gst": true
          }, {
            "id": "hydronic_heat",
            "title": "Hydronic Heat Inspection",
            "value": 125,
            "checkbox": true,
            "gst": true
          }, {
            "id": "admin_fee",
            "title": "Administration Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee",
            "title": "Safety Codes Council Fee",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "value": 103.5,
            "checkbox": true,
            "title": "Partial permit?",
            "description": "($99.00 and minimum Safety Codes Council Fee of $4.50)",
            "tooltip": "Optional permission to begin foundation construction prior to full permit issuance. Permit-holder assumes liability for Bylaw and Building Code discrepancies that may arise during review."
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Less than 10 units)",
            "value": 20,
            "unit": "unit",
            "textInput": true,
            "label": "<small>Number of ground floor dwelling units</small>"
          }, {
            "id": "water_fee",
            "title": "Water fee",
            "value": 26.15,
            "autoAdd": true
          }]
        },
        "draft": {
          "step1": [{
            "id": "living_area1",
            "title": "Living area - single detached",
            "value": 150.35
          }, {
            "id": "living_area2",
            "title": "Living area - semi-detached or duplex",
            "value": 110.28
          }, {
            "id": "basement",
            "title": "Basement development",
            "value": 34.36
          }, {
            "id": "fireplace_gas",
            "title": "Fireplace - gas",
            "value": 4678.12,
            "label": "<small>Number of fireplaces</small>"
          }, {
            "id": "fireplace_wood",
            "title": "Fireplace - wood burning",
            "value": 4678.12,
            "label": "<small>Number of fireplaces</small>"
          }, {
            "id": "garages",
            "title": "Garage - attached",
            "value": 47.43
          }, {
            "id": "carport",
            "title": "Carport",
            "value": 34.36
          }, {
            "id": "deck",
            "title": "Raised deck or balcony",
            "value": 23.32
          }, {
            "id": "portch",
            "title": "Porch or covered balcony",
            "value": 34.36
          }, {
            "id": "other",
            "title": "Other",
            "customDescription": true,
            "customTotal": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $1000",
            "round": 1000,
            "per": 1000
          }, {
            "id": "ground_work",
            "title": "Ground Work Inspection",
            "value": 125,
            "checkbox": true,
            "gst": true
          }, {
            "id": "temp_heat",
            "title": "Temporary Heat Inspection",
            "value": 125,
            "checkbox": true,
            "gst": true
          }, {
            "id": "hydronic_heat",
            "title": "Hydronic Heat Inspection",
            "value": 125,
            "checkbox": true,
            "gst": true
          }, {
            "id": "admin_fee",
            "title": "Administration Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee",
            "title": "Safety Codes Council Fee",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "value": 103.5,
            "checkbox": true,
            "title": "Partial permit?",
            "description": "($99.00 and minimum Safety Codes Council Fee of $4.50)",
            "tooltip": "Optional permission to begin foundation construction prior to full permit issuance. Permit-holder assumes liability for Bylaw and Building Code discrepancies that may arise during review."
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Less than 10 units)",
            "value": 20,
            "unit": "unit",
            "textInput": true,
            "maxLength": 1,
            "label": "<small>Number of ground floor dwelling units</small>"
          }, {
            "id": "water_fee",
            "title": "Water fee",
            "value": 26.23,
            "autoAdd": true
          }]
        }
      },
      "commercial": {
        "config": {
          "dates": {
            "draft_available": "2020-01-01",
            "draft_effective": "2021-01-01"
          },
          "step2_title": "Step 1: calculate base permit fee",
          "step3_title": "Step 2: add additional fees and surcharges"
        },
        "live": {
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 12.11,
            "customValue": true,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "per": 1000,
            "round": 100
          }, {  
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee - Commercial/Industrial",
            "description": "(required on all new buildings)",
            "value": 80,
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "noDecimal": true,
            "textInput": true
          }]
        },
        "draft": {
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "customValue": true,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "per": 1000,
            "round": 100
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee - Commercial/Industrial",
            "description": "(required on all new buildings)",
            "value": 80,
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "noDecimal": true,
            "textInput": true
          }]
        }
      },
      "demolition": {
        "config": {
          "dates": {
            "draft_available": "2018-12-01",
            "draft_effective": "2019-01-01"
          },
          "step2_title": "Step 1: calculate base permit fee",
          "step3_title": "Step 2: add additional fees and surcharges",
        },
        "live": {
          "step2": [{
            "id": "bldg_demo",
            "title": "Demolition or Relocation of Building",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true
          }, {
            "id": "admin_fee",
            "title": "Administration Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee",
            "title": "Safety Codes Council Fee",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }]
        },
        "draft": {
          "step2": [{
            "id": "bldg_demo",
            "title": "Demolition or Relocation of Building",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true
          }, {
            "id": "admin_fee",
            "title": "Administration Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee",
            "title": "Safety Codes Council Fee",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }]
        }
      },
      "low_rise": {
        "config": {
          "dates": {
            "draft_available": "2018-12-01",
            "draft_effective": "2019-01-01"
          },
          "units": "metric",
          "step1_title" : "Step 1: calculate prevailing market value",
          "step2_title" : "Step 2: calculate base permit fee",
          "step3_title" : "Step 3: add additional fees and surcharges"
        },
        "live": {
          "step1": [{ 
            "header": "Living Area and Mixed Uses"
          }, {
            "id": "living_area1",
            "title": "Stacked townhouses",
            "value": 1524.01,
            "subRow": true
          }, {
            "id": "living_area2",
            "title": "Row townhouses",
            "value": 1321.41,
            "subRow": true
          }, {
            "id": "living_area3",
            "title": "Low rise apartments",
            "value": 1163.41,
            "subRow": true
          }, {
            "id": "basement",
            "title": "Basement development - townhouses",
            "value": 369.85
          }, {
            "id": "porch",
            "title": "Porches",
            "value": 369.85
          }, {
            "id": "deck",
            "title": "Decks / Balconies",
            "value": 251.02
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }, {
            "id": "accessory",
            "title": "Accessory Buildings",
            "description": "(wood framed, including detached garages)",
            "value": 510.56
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 11.11,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "header": "Lot Grading Fee"
          }, {
            "id": "lot_grading",
            "title": "Less than 10 units",
            "value": 20,
            "unit": "unit",
            "label": "<small>Number of ground floor dwelling units (9 maximum)</small>",
            "textInput": true,
            "maxLength": 1,
            "disable": ["lot_grading2", "lot_grading3"],
            "subRow": true
          }, {
            "id": "lot_grading2",
            "title": "10 or more units",
            "value": 10,
            "unit": "unit",
            "extra": 100,
            "label": "<small>Number of ground floor dwelling units (10 minimum)</small>",
            "textInput": true,
            "minInputValue": 10,
            "disable": ["lot_grading", "lot_grading3"],
            "subRow": true
          }, {
            "id": "lot_grading3",
            "title": "Greater than 3 storeys",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true,
            "disable": ["lot_grading", "lot_grading2"],
            "subRow": true
          }]
        },
        "draft": {
          "step1": [{
            "header": "Living Area and Mixed Uses"
          }, {
            "id": "living_area1",
            "title": "Stacked townhouses",
            "value": 1524.01,
            "subRow": true
          }, {
            "id": "living_area2",
            "title": "Row townhouses",
            "value": 1321.41,
            "subRow": true
          }, {
            "id": "living_area3",
            "title": "Low rise apartments",
            "value": 1163.41,
            "subRow": true
          }, {
            "id": "basement",
            "title": "Basement development - townhouses",
            "value": 369.85
          }, {
            "id": "porch",
            "title": "Porches",
            "value": 369.85
          }, {
            "id": "deck",
            "title": "Decks / Balconies",
            "value": 251.02
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }, {
            "id": "accessory",
            "title": "Accessory Buildings",
            "description": "(wood framed, including detached garages)",
            "value": 510.56
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "header": "Lot Grading Fee"
          }, {
            "id": "lot_grading",
            "title": "Less than 10 units",
            "value": 20,
            "unit": "unit",
            "label": "<small>Number of ground floor dwelling units (9 maximum)</small>",
            "textInput": true,
            "maxLength": 1,
            "disable": ["lot_grading2", "lot_grading3"],
            "subRow": true
          }, {
            "id": "lot_grading2",
            "title": "10 or more units",
            "value": 10,
            "unit": "unit",
            "extra": 100,
            "label": "<small>Number of ground floor dwelling units (10 minimum)</small>",
            "textInput": true,
            "minInputValue": 10,
            "disable": ["lot_grading", "lot_grading3"],
            "subRow": true
          }, {
            "id": "lot_grading3",
            "title": "Greater than 3 storeys",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true,
            "disable": ["lot_grading", "lot_grading2"],
            "subRow": true
          }]
        }
      },
      "high_rise": {
        "config": {
          "dates": {
            "draft_available": "2018-12-01",
            "draft_effective": "2019-01-01"
          },
          "units": "metric",
          "step1_title" : "Step 1: calculate prevailing market value",
          "step2_title" : "Step 2: calculate base permit fee",
          "step3_title" : "Step 3: add additional fees and surcharges"
        },
        "live": {
          "step1": [{
            "id": "living_area",
            "title": "Living Area and Mixed Uses",
            "value": 2273.24
          }, {
            "id": "balconies",
            "title": "Balconies",
            "value": 39.59
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 11.11,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Buidling greater than 3 storeys)",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        },
        "draft": {
          "step1": [{
            "id": "living_area",
            "title": "Living Area and Mixed Uses",
            "value": 2273.24
          }, {
            "id": "balconies",
            "title": "Balconies",
            "value": 39.59
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Buidling greater than 3 storeys)",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        }
      },
      "hotels": {
        "config": {
          "dates": {
            "draft_available": "2018-12-01",
            "draft_effective": "2019-01-01"
          },
          "units": "metric",
          "step1_title" : "Step 1: calculate prevailing market value",
          "step2_title" : "Step 2: calculate base permit fee",
          "step3_title" : "Step 3: add additional fees and surcharges"
        },
        "live": {
          "step1": [{
            "header": "Hotel / Motel"
          }, {
            "id": "wood",
            "title": "Wood frame",
            "value": 1731.32,
            "subRow": true
          }, {
            "id": "non_combust",
            "title": "Non-combustible",
            "value": 3701.7,
            "subRow": true
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 11.11,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        },
        "draft": {
          "step1": [{
            "header": "Hotel / Motel"
          }, {
            "id": "wood",
            "title": "Wood frame",
            "value": 1731.32,
            "subRow": true
          }, {
            "id": "non_combust",
            "title": "Non-combustible",
            "value": 3701.7,
            "subRow": true
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        }
      },
      "care_homes": {
        "config": {
          "dates": {
            "draft_available": "2018-12-01",
            "draft_effective": "2019-01-01"
          },
          "units": "metric",
          "step1_title" : "Step 1: calculate prevailing market value",
          "step2_title" : "Step 2: calculate base permit fee",
          "step3_title" : "Step 3: add additional fees and surcharges"
        },
        "live": {
          "step1": [{
            "header": "Care Facility"
          }, {
            "id": "combustible",
            "title": "Combustible or combustible/non-combustible",
            "value": 2275.3,
            "subRow": true
          }, {
            "id": "non_combust",
            "title": "Non-combustible",
            "value": 2642.09,
            "subRow": true
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 11.11,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Buidling greater than 3 storeys)",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        },
        "draft": {
          "step1": [{
            "header": "Care Facility"
          }, {
            "id": "combustible",
            "title": "Combustible or combustible/non-combustible",
            "value": 2275.3,
            "subRow": true
          }, {
            "id": "non_combust",
            "title": "Non-combustible",
            "value": 2642.09,
            "subRow": true
          }, {
            "id": "parkade",
            "title": "Parkade (above grade)",
            "value": 814.15
          }, {
            "header": "Parkade (partially above or below grade)"
          }, {
            "id": "parkade2",
            "title": "Multi-level",
            "value": 1817.84,
            "subRow": true
          }, {
            "id": "parkade3",
            "title": "Single level",
            "value": 2134.28,
            "subRow": true
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Buidling greater than 3 storeys)",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        }
      },
      "warehouses": {
        "config": {
          "dates": {
            "draft_available": "2018-12-01",
            "draft_effective": "2019-01-01"
          },
          "step1_title" : "Step 1: calculate prevailing market value",
          "step2_title" : "Step 2: calculate base permit fee",
          "step3_title" : "Step 3: add additional fees and surcharges",
          "units": "metric"
        },
        "live": {
          "step1": [{
            "header": "Warehouse (shell building)"
          }, {
            "id": "pre_enginered",
            "title": "Pre-engineered building",
            "value": 1063.5,
            "subRow": true
          }, {
            "id": "pre_cast",
            "title": "Pre-cast concrete building",
            "value": 1202.41,
            "subRow": true
          }, {
            "id": "steel",
            "title": "Warehouse - steel structure",
            "value": 1278.71,
            "subRow": true
          }, {
            "id": "office_shell",
            "title": "Office (shell)",
            "value": 1591.66
          }, {
            "id": "office_improve",
            "title": "Office (tenant improvements)",
            "value": 614.18
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 11.11,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Buidling greater than 3 storeys)",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        },
        "draft": {
          "step1": [{
            "header": "Warehouse (shell building)"
          }, {
            "id": "pre_enginered",
            "title": "Pre-engineered building",
            "value": 1063.5,
            "subRow": true
          }, {
            "id": "pre_cast",
            "title": "Pre-cast concrete building",
            "value": 1202.41,
            "subRow": true
          }, {
            "id": "steel",
            "title": "Warehouse - steel structure",
            "value": 1278.71,
            "subRow": true
          }, {
            "id": "office_shell",
            "title": "Office (shell)",
            "value": 1591.66
          }, {
            "id": "office_improve",
            "title": "Office (tenant improvements)",
            "value": 614.18
          }],
          "step2": [{
            "id": "permit_rate",
            "title": "Permit Rate",
            "value": 10.67,
            "previousTotal": true,
            "label": "Prevailing market value (PMV) rounded up to the next $100",
            "round": 100,
            "per": 1000
          }, {
            "id": "min_processing_fee",
            "title": "Minimum Processing Fee",
            "value": 112,
            "autoAdd": true
          }],
          "step3": [{
            "id": "safety_fee_base",
            "title": "Safety Codes Council Fee - Base Permit",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Base permit fee",
            "previousTotal": true
          }, {
            "id": "partial_permit",
            "title": "Partial permit rate",
            "value": 1.52,
            "min": 112,
            "max": 4665,
            "label": "m<sup>2</sup><br> <small>Building area (as defined by Alberta Building Code)</small>",
            "textInput": true,
            "optional": true
          }, {
            "id": "safety_fee_partial",
            "title": "Safety Codes Council Fee - partial permit",
            "description": "(added if partial permit rate is requested)",
            "value": "4",
            "min": 4.5,
            "max": 560,
            "label": "Partial permit rate",
            "previousTotal": true,
            "bindTo": "partial_permit"
          }, {
            "id": "lot_grading",
            "title": "Lot Grading Fee",
            "description": "(Buidling greater than 3 storeys)",
            "value": 80,
            "unit": "ha",
            "label": "<small>Number of hectares (rounded up to the next whole hectare)</small>",
            "textInput": true,
            "noDecimal": true
          }]
        }
      }
    }
     return calculators;
})