"use strict";
use(["main.js"], function (json) {
    // log.info("The structural object is ::" + json.step2[0].id);
    var controller = {
        pdFormType: properties.get("formType", ""),
        spacing: properties.get('spacing', 'mb-responsive'),
        showButton : json.config.showButton,
        buttonText : json.config.buttonText,
        formValues: {}
    };
    function numberWithCommas (x) {
        if(x != undefined )
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        else return x;
    }
    if (controller.pdFormType == "commercial") {

        formValues = {};

        controller.formValues.step2Title = json.config.step2_title;
        controller.formValues.step3Title = json.config.step3_title;
        //for step 1 title
        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";


        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice2 = json.step2[0].per;
        controller.formValues.round = json.step2[0].round;
        controller.formValues.totalDesc = "N/A if PMV is $1000 or less.";

        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";
        //for step 2 title
        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate"
        controller.formValues.addC3Title = "Total"

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;

        controller.formValues.addR2typeDesc = json.step3[1].title;
        controller.formValues.addR2subDesc = "optional";
        controller.formValues.addR2inputDesc = json.step3[1].label;
        controller.formValues.addR2rateDesc = json.step3[1].value;
        controller.formValues.addR2minVal = json.step3[1].min;
        controller.formValues.addR2maxVal = json.step3[1].max;

        controller.formValues.addR3typeDesc = json.step3[2].title;
        controller.formValues.addR3subDesc = json.step3[2].description;
        controller.formValues.addR3inputDesc = json.step3[2].label;
        controller.formValues.addR3rateDesc = json.step3[2].value;
        controller.formValues.addR3minVal = json.step3[2].min;
        controller.formValues.addR3maxVal = json.step3[2].max;

        controller.formValues.addR4typeDesc = json.step3[3].title;
        controller.formValues.addR4subDesc = json.step3[3].description;
        controller.formValues.addR4inputDesc = json.step3[3].label;
        controller.formValues.addR4rateDesc = json.step3[3].value;
        controller.formValues.addR4totalText = json.step3[3].total;

        return controller;


    } else if (controller.pdFormType == "new_home") {
        log.debug("inside new homes")
        formValues = {};


        controller.formValues.step1Title = json.config.step1_title;
        controller.formValues.step2Title = json.config.step2_title;
        controller.formValues.step3Title = json.config.step3_title;

        //step 1
        controller.formValues.C1S1title = "Construction Type";
        controller.formValues.C2S1title = "Area / Quantity";
        controller.formValues.C3S1title = "Rate";
        controller.formValues.C4S1title = "Total";

        var pmvArr = [];
        for (var i = 0; i < json.step1.length; i++) {
            pmvArr.push({
                Subhead: json.step1[i].header,
                feeType: json.step1[i].title,
                rate: numberWithCommas(json.step1[i].value),
                quantityDesc: json.step1[i].label,
                borderval: "Yes",
                otherstitle: json.step1[i].customDescription
            });
        }

        controller.formValues.pmvArr = pmvArr;

        controller.formValues.PMValue = "PREVAILING MARKET VALUE";

        //for step 2
        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total"


        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice2 = json.step2[0].per;
        log.debug("the value of per here is :: "+controller.formValues.ratePerPrice);
        controller.formValues.totalDesc = "N/A if PMV is $1000 or less.";
        controller.formValues.round = json.step2[0].round;

        controller.formValues.typeDesc1 = json.step2[1].title;
        controller.formValues.rateDesc1 = json.step2[1].value;

        controller.formValues.typeDesc2 = json.step2[2].title;
        controller.formValues.rateDesc2 = json.step2[2].value;

        controller.formValues.typeDesc3 = json.step2[3].title;
        controller.formValues.rateDesc3 = json.step2[3].value;


        controller.formValues.R2feeTypeDesc = json.step2[4].title;
        controller.formValues.R2Rate = json.step2[4].value;

        controller.formValues.baseFee = "BASE PERMIT FEE";
        controller.formValues.baseFeeDesc = 112;

        // step 3 

        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate";
        controller.formValues.addC3Title = "Total";

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;

        controller.formValues.addpartialtitle = json.step3[1].title;
        controller.formValues.addpartialdesc = json.step3[1].label;
        controller.formValues.addR1partialrateDesc = json.step3[1].value;

        controller.formValues.feeTypeTitle = json.step3[2].title;
        controller.formValues.inputDesc = json.step3[2].label;
        controller.formValues.ratePerPrice3 = json.step3[2].value;

        controller.formValues.s3typeDesc = json.step3[3].title;
        controller.formValues.s3rateDesc = json.step3[3].value;

        controller.formValues.addR4totalText = "TOTAL PERMIT FEE";
        controller.formValues.totalGstFee = "GST";
        controller.formValues.totalPermitGstFee = "TOTAL PERMIT FEE"

        return controller;


    } else if (controller.pdFormType == "low_rise") {

        formValues = {};

        controller.formValues.step1Title = json.config.step1_title,
        controller.formValues.step2Title = json.config.step2_title,
        controller.formValues.step3Title = json.config.step3_title,

            //step 1 
        controller.formValues.C1S1title = "Construction Type";
        controller.formValues.C2S1title = "Area / Quantity";
        controller.formValues.C3S1title = "Rate";
        controller.formValues.C4S1title = "Total";
        

        var pmvArr = [];
        for (var i = 0; i < json.step1.length; i++) {

            if (i < 4) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if ((i >= 4) && (i < 9)) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "Yes",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if ((i == 9) || (i == 10)) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if (i == 11) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "Yes",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });
            }
        }
        controller.formValues.pmvArr = pmvArr;
        controller.formValues.PMValue = "PREVAILING MARKET VALUE";

        //for step 2 

        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";

        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice2 = json.step2[0].per;
        controller.formValues.round = json.step2[0].round;


        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";


        //step 3 
        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate";
        controller.formValues.addC3Title = "Total";

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;

        controller.formValues.addR2typeDesc = json.step3[1].title;
        controller.formValues.addR2subDesc = "(optional)";
        controller.formValues.addR2inputDesc = json.step3[1].label;
        controller.formValues.addR2rateDesc = json.step3[1].value;
        controller.formValues.addR2minVal = json.step3[1].min;
        controller.formValues.addR2maxVal = json.step3[1].max;

        controller.formValues.addR3typeDesc = json.step3[2].title;
        controller.formValues.addR3subDesc = "(added if partial permit rate is requested)";
        controller.formValues.addR3inputDesc = json.step3[2].label;
        controller.formValues.addR3rateDesc = json.step3[2].value;
        controller.formValues.addR3minVal = json.step3[2].min;
        controller.formValues.addR3maxVal = json.step3[2].max;

        controller.formValues.addR4subHead = json.step3[3].header;

        controller.formValues.addR4typeDesc1 = json.step3[4].title;
        controller.formValues.addR4inputDesc1 = json.step3[4].label;
        controller.formValues.addR4rateDesc1 = json.step3[4].value;

        controller.formValues.addR4typeDesc2 = json.step3[5].title;
        controller.formValues.addR4inputDesc2 = json.step3[5].label;
        controller.formValues.addR4rateDesc2 = json.step3[5].value;
        controller.formValues.addR2addedRate = json.step3[5].extra;

        controller.formValues.addR4typeDesc3 = json.step3[6].title;
        controller.formValues.addR4inputDesc3 = json.step3[6].label;
        controller.formValues.addR4rateDesc3 = json.step3[6].value;

        controller.formValues.addR4totalText = "TOTAL PERMIT FEE";


        return controller;


    } else if (controller.pdFormType == "high_rise") {

        formValues = {};
        controller.formValues.unit = json.config.units;
        controller.formValues.step1Title = json.config.step1_title;
        controller.formValues.step2Title = json.config.step2_title;
        controller.formValues.step3Title = json.config.step3_title;

        //step 1
        controller.formValues.C1S1title = "Construction Type";
        controller.formValues.C2S1title = "Area / Quantity";
        controller.formValues.C3S1title = "Rate";
        controller.formValues.C4S1title = "Total";

        var pmvArr = [];
        for (var i = 0; i < json.step1.length; i++) {

            if (i < 4) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "Yes",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if ((i >= 4) && (i < 6)) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            }
        }

        controller.formValues.pmvArr = pmvArr;

        controller.formValues.PMValue = "PREVAILING MARKET VALUE";

        //for step 2 

        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";

        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice2 = json.step2[0].per;
        controller.formValues.round = json.step2[0].round;

        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";

        //step 3
        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate";
        controller.formValues.addC3Title = "Total";

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;

        controller.formValues.addR2typeDesc = json.step3[1].title;
        controller.formValues.addR2subDesc = "(optional)"
        controller.formValues.addR2inputDesc = json.step3[1].label;
        controller.formValues.addR2rateDesc = json.step3[1].value;
        controller.formValues.addR2minVal = json.step3[1].min;
        controller.formValues.addR2maxVal = json.step3[1].max;

        controller.formValues.addR3typeDesc = json.step3[2].title;
        controller.formValues.addR3subDesc = json.step3[2].description;
        controller.formValues.addR3inputDesc = json.step3[2].label;
        controller.formValues.addR3rateDesc = json.step3[2].value;
        controller.formValues.addR3minVal = json.step3[2].min;
        controller.formValues.addR3maxVal = json.step3[2].max;

        controller.formValues.addR4typeDesc = json.step3[3].title;
        controller.formValues.addR4subDesc = json.step3[3].description;
        controller.formValues.addR4inputDesc = json.step3[3].label;
        controller.formValues.addR4rateDesc = json.step3[3].value;
        controller.formValues.addR4totalText = "TOTAL PERMIT FEE";


        return controller;

    } else if (controller.pdFormType == "demolition") {

        formValues = {};

        controller.formValues.step2Title = json.config.step2_title;
        controller.formValues.step3Title = json.config.step3_title;

        //for step 1 

        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";

        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;

        controller.formValues.demoS1minVal = json.step2[0].min;
        controller.formValues.demoS1maxVal = json.step2[0].max;


        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";

        //step2
        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate";
        controller.formValues.addC3Title = "Total";

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;
        controller.formValues.addR4totalText = "TOTAL PERMIT FEE";

        return controller;

    } else if (controller.pdFormType == "warehouses") {

        formValues = {};


        controller.formValues.step1Title = json.config.step1_title;
        controller.formValues.step2Title = json.config.step2_title
        controller.formValues.step3Title = json.config.step3_title;


        //step 1
        controller.formValues.C1S1title = "Construction Type";
        controller.formValues.C2S1title = "Area / Quantity";
        controller.formValues.C3S1title = "Rate";
        controller.formValues.C4S1title = "Total";

        var pmvArr = [];
        for (var i = 0; i < json.step1.length; i++) {

            if (i < 4) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if ((i >= 4) && (i < 6)) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "Yes",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            }


        }

        controller.formValues.pmvArr = pmvArr;

        controller.formValues.PMValue = "PREVAILING MARKET VALUE";

        //for step 2 

        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";

        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice2 = json.step2[0].per;
        controller.formValues.round = json.step2[0].round;


        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";

        //step 3 
        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate";
        controller.formValues.addC3Title = "Total";

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;

        controller.formValues.addR2typeDesc = json.step3[1].title;
        controller.formValues.addR2subDesc = "(optional)";
        controller.formValues.addR2inputDesc = json.step3[1].label;
        controller.formValues.addR2rateDesc = json.step3[1].value;
        controller.formValues.addR2minVal = json.step3[1].min;
        controller.formValues.addR2maxVal = json.step3[1].max;

        controller.formValues.addR3typeDesc = json.step3[2].title;
        controller.formValues.addR3subDesc = json.step3[2].description;
        controller.formValues.addR3inputDesc = json.step3[2].label;
        controller.formValues.addR3rateDesc = json.step3[2].value;
        controller.formValues.addR3minVal = json.step3[2].min;
        controller.formValues.addR3maxVal = json.step3[2].max;

        controller.formValues.addR4typeDesc = json.step3[3].title;
        controller.formValues.addR4subDesc = json.step3[3].description;
        controller.formValues.addR4inputDesc = json.step3[3].label;
        controller.formValues.addR4rateDesc = json.step3[3].value;
        controller.formValues.addR4totalText = "TOTAL PERMIT FEE";

        return controller;


    } else if (controller.pdFormType == "care_homes") {

        formValues = {};


        controller.formValues.step1Title = json.config.step1_title;
        controller.formValues.step2Title = json.config.step2_title;
        controller.formValues.step3Title = json.config.step3_title;

        //step 1
        controller.formValues.C1S1title = "Construction Type";
        controller.formValues.C2S1title = "Area / Quantity";
        controller.formValues.C3S1title = "Rate";
        controller.formValues.C4S1title = "Total";

        var pmvArr = [];
        for (var i = 0; i < json.step1.length; i++) {

            if (i < 3) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if (i == 3) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "Yes",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if ((i >= 4) && (i < 7)) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            }
        }

        controller.formValues.pmvArr = pmvArr;

        controller.formValues.PMValue = "PREVAILING MARKET VALUE";

        //for step 2 

        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";

        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice2 = json.step2[0].per;
        controller.formValues.round = json.step2[0].round;

        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";

        //step 3
        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate";
        controller.formValues.addC3Title = "Total";

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;

        controller.formValues.addR2typeDesc = json.step3[1].title;
        controller.formValues.addR2subDesc = "(optional)";
        controller.formValues.addR2inputDesc = json.step3[1].label;
        controller.formValues.addR2rateDesc = json.step3[1].value;
        controller.formValues.addR2minVal = json.step3[1].min;
        controller.formValues.addR2maxVal = json.step3[1].max;

        controller.formValues.addR3typeDesc = json.step3[2].title;
        controller.formValues.addR3subDesc = json.step3[2].description;
        controller.formValues.addR3inputDesc = json.step3[2].label;
        controller.formValues.addR3rateDesc = json.step3[2].value;
        controller.formValues.addR3minVal = json.step3[2].min;
        controller.formValues.addR3maxVal = json.step3[2].max;

        controller.formValues.addR4typeDesc = json.step3[3].title;
        controller.formValues.addR4subDesc = json.step3[3].description;
        controller.formValues.addR4inputDesc = json.step3[3].label;
        controller.formValues.addR4rateDesc = json.step3[3].value;
        controller.formValues.addR4totalText = "TOTAL PERMIT FEE";

        return controller;


    } else if (controller.pdFormType == "hotels") {

        formValues = {};


        controller.formValues.step1Title = json.config.step1_title;
        controller.formValues.step2Title = json.config.step2_title;
        controller.formValues.step3Title = json.config.step3_title;
        //step 1
        controller.formValues.C1S1title = "Construction Type";
        controller.formValues.C2S1title = "Area / Quantity";
        controller.formValues.C3S1title = "Rate";
        controller.formValues.C4S1title = "Total";

        var pmvArr = [];
        for (var i = 0; i < json.step1.length; i++) {

            if (i < 3) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if (i == 3) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "Yes",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });

            } else if ((i >= 4) && (i < 7)) {
                pmvArr.push({
                    Subhead: json.step1[i].header,
                    feeType: json.step1[i].title,
                    rate: numberWithCommas(json.step1[i].value),
                    quantityDesc: json.step1[i].label,
                    borderval: "",
                    otherstitle: json.step1[i].customDescription,
                    subRow: json.subRow
                });
            }

        }

        controller.formValues.pmvArr = pmvArr;

        controller.formValues.PMValue = "PREVAILING MARKET VALUE";

        //for step 2 

        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";

        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice2 = json.step2[0].per;
        controller.formValues.round = json.step2[0].round;


        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";

        //step 3
        controller.formValues.addC1Title = "Fee type";
        controller.formValues.addC2Title = "Rate";
        controller.formValues.addC3Title = "Total";

        controller.formValues.addR1typeDesc = json.step3[0].title;
        controller.formValues.addR1inputDesc = json.step3[0].label;
        controller.formValues.addR1rateDesc = json.step3[0].value;
        controller.formValues.addR1minVal = json.step3[0].min;
        controller.formValues.addR1maxVal = json.step3[0].max;

        controller.formValues.addR2typeDesc = json.step3[1].title;
        controller.formValues.addR2subDesc = "(optional)";
        controller.formValues.addR2inputDesc = json.step3[1].label;
        controller.formValues.addR2rateDesc = json.step3[1].value;
        controller.formValues.addR2minVal = json.step3[1].min;
        controller.formValues.addR2maxVal = json.step3[1].max;

        controller.formValues.addR3typeDesc = json.step3[2].title;
        controller.formValues.addR3subDesc = json.step3[2].description;
        controller.formValues.addR3inputDesc = json.step3[2].label;
        controller.formValues.addR3rateDesc = json.step3[2].value;
        controller.formValues.addR3minVal = json.step3[2].min;
        controller.formValues.addR3maxVal = json.step3[2].max;

        controller.formValues.addR4typeDesc = json.step3[3].title;
        controller.formValues.addR4inputDesc = json.step3[3].label;
        controller.formValues.addR4rateDesc = json.step3[3].value;
        controller.formValues.addR4totalText = "TOTAL PERMIT FEE";

        return controller;
    } else if (controller.pdFormType == "planningApp") {
        controller.formValues = json.fees;
        return controller;
    }
});