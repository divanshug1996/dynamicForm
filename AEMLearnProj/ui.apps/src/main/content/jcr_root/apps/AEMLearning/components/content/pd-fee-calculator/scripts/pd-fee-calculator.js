"use strict";
use(["main.js"], function (json) {
    // log.info("The structural object is ::" + json.step2[0].id);
    var controller = {
        pdFormType: properties.get("formType", ""),
        spacing: properties.get('spacing', 'mb-responsive'),
        formValues: json
    };
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
        controller.formValues.ratePerPrice = json.step2[0].per; 
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

        formValues = {};


        controller.formValues.step1Title = json.config.step1_title;
        controller.formValues.step2Title = json.config.step2_title;
        controller.formValues.step3Title = json.config.step3_title;

        //step 1
        controller.formValues.C1S1title = "Construction Type";
        controller.formValues.C2S1title = "Area / Quantity";
        controller.formValues.C3S1title = "Rate";
        controller.formValues.C4S1title = "Total";


        // for (var i = 1; i < 11; i++) {

        //     controller.formValues.pmvArr.push({
        //         Subhead: properties.get("form_newHome_step1_row" + [i] + "_rowTitle", ""),
        //         feeType: properties.get("form_newHome_step1_row" + [i] + "_constType", ""),
        //         rate: properties.get("form_newHome_step1_row" + [i] + "_inputDesc", ""),
        //         quantityDesc: properties.get("form_newHome_step1_row" + [i] + "_quantyDesc", ""),
        //         borderval: "Yes",
        //         otherstitle: properties.get("form_newHome_step1_row" + [i] + "_otherstitle", ""),
        //         othersDesc: properties.get("form_newHome_step1_row" + [i] + "_othersDesc", "")

        //     });
        // }

        controller.formValues.PMValue = properties.get("form_newHome_step1_totalValue", "");

        //for step 2
        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total"


        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice = json.step2[0].per;
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
        controller.formValues.ratePerPrice = json.step3[2].value;

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

        // for (var i = 1; i < 12; i++) {
        //     if (i < 4) {
        //         controller.formValues.pmvArr.push({
        //             Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
        //             feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
        //             rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
        //             quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
        //             borderval: "",
        //             otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
        //             othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

        //         });


                
        //     }else if ((i >= 4) && (i < 9)) {
        //         controller.formValues.pmvArr.push({
        //             Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
        //             feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
        //             rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
        //             quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
        //             borderval: "Yes",
        //             otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
        //             othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

        //         });

        //     } else if (i == 9) {

        //         controller.formValues.pmvArr.push({
        //             Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
        //             feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
        //             rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
        //             quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
        //             borderval: "",
        //             otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
        //             othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

        //         });

        //     } else if (i == 10) {

        //         controller.formValues.pmvArr.push({
        //             Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
        //             feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
        //             rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
        //             quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
        //             borderval: "Yes",
        //             otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
        //             othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

        //         });

        //     }



        // }

        controller.formValues.PMValue = "PREVAILING MARKET VALUE";



        //for step 2 

        controller.formValues.C1title = "Fee type";
        controller.formValues.C2title = "Rate";
        controller.formValues.C3title = "Total";

        controller.formValues.feeTypeDesc = json.step2[0].title;
        controller.formValues.feeInputDesc = json.step2[0].label;
        controller.formValues.ratePercent = json.step2[0].value;
        controller.formValues.ratePerPrice = json.step2[0].per;


        controller.formValues.R2feeTypeDesc = json.step2[1].title;
        controller.formValues.R2Rate = json.step2[1].value;
        controller.formValues.baseFee = "BASE PERMIT FEE";


        //step 3 
        controller.formValues.addC1Title = properties.get("form_multifamilylowriseForm_step3_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_multifamilylowriseForm_step3_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_multifamilylowriseForm_step3_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_multifamilylowriseForm_step3_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_multifamilylowriseForm_step3_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_multifamilylowriseForm_step3_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_multifamilylowriseForm_step3_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_multifamilylowriseForm_step3_row1_maxVal", "");

        controller.formValues.addR2typeDesc = properties.get("form_multifamilylowriseForm_step3_row2_typeDesc", "");
        controller.formValues.addR2subDesc = properties.get("form_multifamilylowriseForm_step3_row2_subDesc", "");
        controller.formValues.addR2inputDesc = properties.get("form_multifamilylowriseForm_step3_row2_inputDesc", "");
        controller.formValues.addR2rateDesc = properties.get("form_multifamilylowriseForm_step3_row2_rateDesc", "");
        controller.formValues.addR2minVal = properties.get("form_multifamilylowriseForm_step3_row2_minVal", "");
        controller.formValues.addR2maxVal = properties.get("form_multifamilylowriseForm_step3_row2_maxVal", "");

        controller.formValues.addR3typeDesc = properties.get("form_multifamilylowriseForm_step3_row3_typeDesc", "");
        controller.formValues.addR3subDesc = properties.get("form_multifamilylowriseForm_step3_row3_subDesc", "");
        controller.formValues.addR3inputDesc = properties.get("form_multifamilylowriseForm_step3_row3_inputDesc", "");
        controller.formValues.addR3rateDesc = properties.get("form_multifamilylowriseForm_step3_row3_rateDesc", "");
        controller.formValues.addR3minVal = properties.get("form_multifamilylowriseForm_step3_row3_minVal", "");
        controller.formValues.addR3maxVal = properties.get("form_multifamilylowriseForm_step3_row3_maxVal", "");

        controller.formValues.addR4subHead = properties.get("form_multifamilylowriseForm_step3_row4_subHeading", "");

        controller.formValues.addR4typeDesc1 = properties.get("form_multifamilylowriseForm_step3_row4_typeDesc1", "");
        controller.formValues.addR4inputDesc1 = properties.get("form_multifamilylowriseForm_step3_row4_inputDesc1", "");
        controller.formValues.addR4rateDesc1 = properties.get("form_multifamilylowriseForm_step3_row4_rateDesc1", "");

        controller.formValues.addR4typeDesc2 = properties.get("form_multifamilylowriseForm_step3_row4_typeDesc2", "");
        controller.formValues.addR4inputDesc2 = properties.get("form_multifamilylowriseForm_step3_row4_inputDesc2", "");
        controller.formValues.addR4rateDesc2 = properties.get("form_multifamilylowriseForm_step3_row4_rateDesc2", "");
        controller.formValues.addR2addedRate = properties.get("form_multifamilylowriseForm_step3_row4_addedRate", "");

        controller.formValues.addR4typeDesc3 = properties.get("form_multifamilylowriseForm_step3_row4_typeDesc3", "");
        controller.formValues.addR4inputDesc3 = properties.get("form_multifamilylowriseForm_step3_row4_inputDesc3", "");
        controller.formValues.addR4rateDesc3 = properties.get("form_multifamilylowriseForm_step3_row4_rateDesc3", "");

        controller.formValues.addR4totalText = properties.get("form_multifamilylowriseForm_step3_row4_totalText", "");


        return controller;


    } else if (controller.pdFormType == "multiFammilyHigHRise") {

        formValues = {};

        controller.formValues.step1Title = properties.get("form_multifamilyhighriseForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_multifamilyhighriseForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_multifamilyhighriseForm_step3_title", "");

        //step 1
        controller.formValues.C1S1title = properties.get("form_multifamilyhighriseForm_step1_col1_title", "");
        controller.formValues.C2S1title = properties.get("form_multifamilyhighriseForm_step1_col2_title", "");
        controller.formValues.C3S1title = properties.get("form_multifamilyhighriseForm_step1_col3_title", "");
        controller.formValues.C4S1title = properties.get("form_multifamilyhighriseForm_step1_col4_title", "");


        for (var i = 1; i < 6; i++) {
            if (i < 5) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_multifamilyhighriseForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_othersDesc", "")

                });


            } else {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_multifamilyhighriseForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_multifamilyhighriseForm_step1_row" + [i] + "_othersDesc", "")

                });


            }



        }

        controller.formValues.PMValue = properties.get("form_multifamilyhighriseForm_step1_totalValue", "");

        //for step 2 

        controller.formValues.C1title = properties.get("form_multifamilyhighriseForm_step2_col1_title", "");
        controller.formValues.C2title = properties.get("form_multifamilyhighriseForm_step2_col2_title", "");
        controller.formValues.C3title = properties.get("form_multifamilyhighriseForm_step2_col3_title", "");

        controller.formValues.feeTypeDesc = properties.get("form_multifamilyhighriseForm_step2_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_multifamilyhighriseForm_step2_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_multifamilyhighriseForm_step2_row1_ratePerc", "");
        controller.formValues.ratePerPrice = properties.get("form_multifamilyhighriseForm_step2_row1_ratePerPrice", "");
        controller.formValues.totalDesc = properties.get("form_multifamilyhighriseForm_step2_row1_totalDesc", "");

        controller.formValues.R2feeTypeDesc = properties.get("form_multifamilyhighriseForm_step2_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_multifamilyhighriseForm_step2_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_multifamilyhighriseForm_step2_baseFeeTotal", "");

        //step 3
        controller.formValues.addC1Title = properties.get("form_multifamilyhighriseForm_step3_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_multifamilyhighriseForm_step3_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_multifamilyhighriseForm_step3_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_multifamilyhighriseForm_step3_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_multifamilyhighriseForm_step3_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_multifamilyhighriseForm_step3_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_multifamilyhighriseForm_step3_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_multifamilyhighriseForm_step3_row1_maxVal", "");

        controller.formValues.addR2typeDesc = properties.get("form_multifamilyhighriseForm_step3_row2_typeDesc", "");
        controller.formValues.addR2subDesc = properties.get("form_multifamilyhighriseForm_step3_row2_subDesc", "");
        controller.formValues.addR2inputDesc = properties.get("form_multifamilyhighriseForm_step3_row2_inputDesc", "");
        controller.formValues.addR2rateDesc = properties.get("form_multifamilyhighriseForm_step3_row2_rateDesc", "");
        controller.formValues.addR2minVal = properties.get("form_multifamilyhighriseForm_step3_row2_minVal", "");
        controller.formValues.addR2maxVal = properties.get("form_multifamilyhighriseForm_step3_row2_maxVal", "");

        controller.formValues.addR3typeDesc = properties.get("form_multifamilyhighriseForm_step3_row3_typeDesc", "");
        controller.formValues.addR3subDesc = properties.get("form_multifamilyhighriseForm_step3_row3_subDesc", "");
        controller.formValues.addR3inputDesc = properties.get("form_multifamilyhighriseForm_step3_row3_inputDesc", "");
        controller.formValues.addR3rateDesc = properties.get("form_multifamilyhighriseForm_step3_row3_rateDesc", "");
        controller.formValues.addR3minVal = properties.get("form_multifamilyhighriseForm_step3_row3_minVal", "");
        controller.formValues.addR3maxVal = properties.get("form_multifamilyhighriseForm_step3_row3_maxVal", "");

        controller.formValues.addR4typeDesc = properties.get("form_multifamilyhighriseForm_step3_row4_typeDesc", "");
        controller.formValues.addR4subDesc = properties.get("form_multifamilyhighriseForm_step3_row4_subDesc", "");
        controller.formValues.addR4inputDesc = properties.get("form_multifamilyhighriseForm_step3_row4_inputDesc", "");
        controller.formValues.addR4rateDesc = properties.get("form_multifamilyhighriseForm_step3_row4_rateDesc", "");
        controller.formValues.addR4totalText = properties.get("form_multifamilyhighriseForm_step3_row4_totalText", "");


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

    } else if (controller.pdFormType == "wareHouses") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_warehousesForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_warehousesForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_warehousesForm_step3_title", "");


        //step 1
        controller.formValues.C1S1title = properties.get("form_warehousesForm_step1_col1_title", "");
        controller.formValues.C2S1title = properties.get("form_warehousesForm_step1_col2_title", "");
        controller.formValues.C3S1title = properties.get("form_warehousesForm_step1_col3_title", "");
        controller.formValues.C4S1title = properties.get("form_warehousesForm_step1_col4_title", "");


        for (var i = 1; i < 6; i++) {
            if (i == 1) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_warehousesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_warehousesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_warehousesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_warehousesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_warehousesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_warehousesForm_step1_row" + [i] + "_othersDesc", "")

                });


            } else if ((i == 2)||(i == 3)) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_warehousesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_warehousesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_warehousesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_warehousesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_warehousesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_warehousesForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else if ((i == 4)||(i == 5)) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_warehousesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_warehousesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_warehousesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_warehousesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_warehousesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_warehousesForm_step1_row" + [i] + "_othersDesc", "")

                });

            }

        }

        controller.formValues.PMValue = properties.get("form_warehousesForm_step1_totalValue", "");


        //for step 2 

        controller.formValues.C1title = properties.get("form_warehousesForm_step2_col1_title", "");
        controller.formValues.C2title = properties.get("form_warehousesForm_step2_col2_title", "");
        controller.formValues.C3title = properties.get("form_warehousesForm_step2_col3_title", "");

        controller.formValues.feeTypeDesc = properties.get("form_warehousesForm_step2_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_warehousesForm_step2_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_warehousesForm_step2_row1_ratePerc", "");
        controller.formValues.ratePerPrice = properties.get("form_warehousesForm_step2_row1_ratePerPrice", "");
        controller.formValues.totalDesc = properties.get("form_warehousesForm_step2_row1_totalDesc", "");


        controller.formValues.R2feeTypeDesc = properties.get("form_warehousesForm_step2_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_warehousesForm_step2_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_warehousesForm_step2_baseFeeTotal", "");

        //step 3 
        controller.formValues.addC1Title = properties.get("form_warehousesForm_step3_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_warehousesForm_step3_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_warehousesForm_step3_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_warehousesForm_step3_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_warehousesForm_step3_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_warehousesForm_step3_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_warehousesForm_step3_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_warehousesForm_step3_row1_maxVal", "");

        controller.formValues.addR2typeDesc = properties.get("form_warehousesForm_step3_row2_typeDesc", "");
        controller.formValues.addR2subDesc = properties.get("form_warehousesForm_step3_row2_subDesc", "");
        controller.formValues.addR2inputDesc = properties.get("form_warehousesForm_step3_row2_inputDesc", "");
        controller.formValues.addR2rateDesc = properties.get("form_warehousesForm_step3_row2_rateDesc", "");
        controller.formValues.addR2minVal = properties.get("form_warehousesForm_step3_row2_minVal", "");
        controller.formValues.addR2maxVal = properties.get("form_warehousesForm_step3_row2_maxVal", "");

        controller.formValues.addR3typeDesc = properties.get("form_warehousesForm_step3_row3_typeDesc", "");
        controller.formValues.addR3subDesc = properties.get("form_warehousesForm_step3_row3_subDesc", "");
        controller.formValues.addR3inputDesc = properties.get("form_warehousesForm_step3_row3_inputDesc", "");
        controller.formValues.addR3rateDesc = properties.get("form_warehousesForm_step3_row3_rateDesc", "");
        controller.formValues.addR3minVal = properties.get("form_warehousesForm_step3_row3_minVal", "");
        controller.formValues.addR3maxVal = properties.get("form_warehousesForm_step3_row3_maxVal", "");

        controller.formValues.addR4typeDesc = properties.get("form_warehousesForm_step3_row4_typeDesc", "");
        controller.formValues.addR4subDesc = properties.get("form_warehousesForm_step3_row4_subDesc", "");
        controller.formValues.addR4inputDesc = properties.get("form_warehousesForm_step3_row4_inputDesc", "");
        controller.formValues.addR4rateDesc = properties.get("form_warehousesForm_step3_row4_rateDesc", "");
        controller.formValues.addR4totalText = properties.get("form_warehousesForm_step3_row4_totalText", "");

        return controller;


    } else if (controller.pdFormType == "careFacilities") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_careFacilitiesForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_careFacilitiesForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_careFacilitiesForm_step3_title", "");

        //step 1
        controller.formValues.C1S1title = properties.get("form_careFacilitiesForm_step1_col1_title", "");
        controller.formValues.C2S1title = properties.get("form_careFacilitiesForm_step1_col2_title", "");
        controller.formValues.C3S1title = properties.get("form_careFacilitiesForm_step1_col3_title", "");
        controller.formValues.C4S1title = properties.get("form_careFacilitiesForm_step1_col4_title", "");


        for (var i = 1; i < 6; i++) {
            if (i == 1) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_careFacilitiesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_othersDesc", "")

                });


            } else if (i == 2) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_careFacilitiesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_othersDesc", "")

                });

            }else if (i == 3) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_careFacilitiesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else if (i == 4) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_careFacilitiesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_othersDesc", "")

                });

            }
            else if (i == 5) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_careFacilitiesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_othersDesc", "")

                });

            }

        }

        controller.formValues.PMValue = properties.get("form_careFacilitiesForm_step1_totalValue", "");

        //for step 2 

        controller.formValues.C1title = properties.get("form_careFacilitiesForm_step2_col1_title", "");
        controller.formValues.C2title = properties.get("form_careFacilitiesForm_step2_col2_title", "");
        controller.formValues.C3title = properties.get("form_careFacilitiesForm_step2_col3_title", "");

        controller.formValues.feeTypeDesc = properties.get("form_careFacilitiesForm_step2_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_careFacilitiesForm_step2_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_careFacilitiesForm_step2_row1_ratePerc", "");
        controller.formValues.ratePerPrice = properties.get("form_careFacilitiesForm_step2_row1_ratePerPrice", "");
        controller.formValues.totalDesc = properties.get("form_careFacilitiesForm_step2_row1_totalDesc", "");


        controller.formValues.R2feeTypeDesc = properties.get("form_careFacilitiesForm_step2_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_careFacilitiesForm_step2_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_careFacilitiesForm_step2_baseFeeTotal", "");

        //step 3
        controller.formValues.addC1Title = properties.get("form_careFacilitiesForm_step3_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_careFacilitiesForm_step3_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_careFacilitiesForm_step3_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_careFacilitiesForm_step3_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_careFacilitiesForm_step3_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_careFacilitiesForm_step3_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_careFacilitiesForm_step3_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_careFacilitiesForm_step3_row1_maxVal", "");

        controller.formValues.addR2typeDesc = properties.get("form_careFacilitiesForm_step3_row2_typeDesc", "");
        controller.formValues.addR2subDesc = properties.get("form_careFacilitiesForm_step3_row2_subDesc", "");
        controller.formValues.addR2inputDesc = properties.get("form_careFacilitiesForm_step3_row2_inputDesc", "");
        controller.formValues.addR2rateDesc = properties.get("form_careFacilitiesForm_step3_row2_rateDesc", "");
        controller.formValues.addR2minVal = properties.get("form_careFacilitiesForm_step3_row2_minVal", "");
        controller.formValues.addR2maxVal = properties.get("form_careFacilitiesForm_step3_row2_maxVal", "");

        controller.formValues.addR3typeDesc = properties.get("form_careFacilitiesForm_step3_row3_typeDesc", "");
        controller.formValues.addR3subDesc = properties.get("form_careFacilitiesForm_step3_row3_subDesc", "");
        controller.formValues.addR3inputDesc = properties.get("form_careFacilitiesForm_step3_row3_inputDesc", "");
        controller.formValues.addR3rateDesc = properties.get("form_careFacilitiesForm_step3_row3_rateDesc", "");
        controller.formValues.addR3minVal = properties.get("form_careFacilitiesForm_step3_row3_minVal", "");
        controller.formValues.addR3maxVal = properties.get("form_careFacilitiesForm_step3_row3_maxVal", "");

        controller.formValues.addR4typeDesc = properties.get("form_careFacilitiesForm_step3_row4_typeDesc", "");
        controller.formValues.addR4subDesc = properties.get("form_careFacilitiesForm_step3_row4_subDesc", "");
        controller.formValues.addR4inputDesc = properties.get("form_careFacilitiesForm_step3_row4_inputDesc", "");
        controller.formValues.addR4rateDesc = properties.get("form_careFacilitiesForm_step3_row4_rateDesc", "");
        controller.formValues.addR4totalText = properties.get("form_careFacilitiesForm_step3_row4_totalText", "");

        return controller;


    } else if (controller.pdFormType == "hotels") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_hotelsForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_hotelsForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_hotelsForm_step3_title", "");

        //step 1
        controller.formValues.C1S1title = properties.get("form_hotelsForm_step1_col1_title", "");
        controller.formValues.C2S1title = properties.get("form_hotelsForm_step1_col2_title", "");
        controller.formValues.C3S1title = properties.get("form_hotelsForm_step1_col3_title", "");
        controller.formValues.C4S1title = properties.get("form_hotelsForm_step1_col4_title", "");


        for (var i = 1; i < 6; i++) {
            if (i == 1) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_hotelsForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_hotelsForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_hotelsForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_hotelsForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_hotelsForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_hotelsForm_step1_row" + [i] + "_othersDesc", "")

                });


            } else if (i == 2) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_hotelsForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_hotelsForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_hotelsForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_hotelsForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_hotelsForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_hotelsForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else if ((i == 3) || (i == 4)) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_hotelsForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_hotelsForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_hotelsForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_hotelsForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_hotelsForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_hotelsForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_hotelsForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_hotelsForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_hotelsForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_hotelsForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_hotelsForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_hotelsForm_step1_row" + [i] + "_othersDesc", "")

                });

            }

        }

        controller.formValues.PMValue = properties.get("form_hotelsForm_step1_totalValue", "");

        //for step 2 

        controller.formValues.C1title = properties.get("form_hotelsForm_step2_col1_title", "");
        controller.formValues.C2title = properties.get("form_hotelsForm_step2_col2_title", "");
        controller.formValues.C3title = properties.get("form_hotelsForm_step2_col3_title", "");

        controller.formValues.feeTypeDesc = properties.get("form_hotelsForm_step2_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_hotelsForm_step2_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_hotelsForm_step2_row1_ratePerc", "");
        controller.formValues.ratePerPrice = properties.get("form_hotelsForm_step2_row1_ratePerPrice", "");
        controller.formValues.totalDesc = properties.get("form_hotelsForm_step2_row1_totalDesc", "");


        controller.formValues.R2feeTypeDesc = properties.get("form_hotelsForm_step2_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_hotelsForm_step2_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_hotelsForm_step2_baseFeeTotal", "");

        //step 3

        controller.formValues.addC1Title = properties.get("form_hotelsForm_step3_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_hotelsForm_step3_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_hotelsForm_step3_col2_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_hotelsForm_step3_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_hotelsForm_step3_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_hotelsForm_step3_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_hotelsForm_step3_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_hotelsForm_step3_row1_maxVal", "");

        controller.formValues.addR2typeDesc = properties.get("form_hotelsForm_step3_row2_typeDesc", "");
        controller.formValues.addR2subDesc = properties.get("form_hotelsForm_step3_row2_subDesc", "");
        controller.formValues.addR2inputDesc = properties.get("form_hotelsForm_step3_row2_inputDesc", "");
        controller.formValues.addR2rateDesc = properties.get("form_hotelsForm_step3_row2_rateDesc", "");
        controller.formValues.addR2minVal = properties.get("form_hotelsForm_step3_row2_minVal", "");
        controller.formValues.addR2maxVal = properties.get("form_hotelsForm_step3_row2_maxVal", "");

        controller.formValues.addR3typeDesc = properties.get("form_hotelsForm_step3_row3_typeDesc", "");
        controller.formValues.addR3subDesc = properties.get("form_hotelsForm_step3_row3_subDesc", "");
        controller.formValues.addR3inputDesc = properties.get("form_hotelsForm_step3_row3_inputDesc", "");
        controller.formValues.addR3rateDesc = properties.get("form_hotelsForm_step3_row3_rateDesc", "");
        controller.formValues.addR3minVal = properties.get("form_hotelsForm_step3_row3_minVal", "");
        controller.formValues.addR3maxVal = properties.get("form_hotelsForm_step3_row3_maxVal", "");

        controller.formValues.addR4typeDesc = properties.get("form_hotelsForm_step3_row4_typeDesc", "");
        controller.formValues.addR4inputDesc = properties.get("form_hotelsForm_step3_row4_inputDesc", "");
        controller.formValues.addR4rateDesc = properties.get("form_hotelsForm_step3_row4_rateDesc", "");
        controller.formValues.addR4totalText = properties.get("form_hotelsForm_step3_row4_totalText", "");

        return controller;
    }
});