"use strict";
use(function () {
 
    var controller = {
        pdFormType: properties.get("formType", ""),
        spacing: properties.get('spacing', 'mb-responsive'),
        formValues: {
            pmvArr: []
        }
    };

    if (controller.pdFormType == "commercial") {

        formValues = {};

        controller.formValues.step1Title = properties.get("form_commercial_step1_title", "");
        controller.formValues.step3Title = properties.get("form_commercial_step2_title", "");
        //for step 1 title
        controller.formValues.C1title = properties.get("form_commercial_step1_col1_title", "");
        controller.formValues.C2title = properties.get("form_commercial_step1_col2_title", "");
        controller.formValues.C3title = properties.get("form_commercial_step1_col3_title", "");


        controller.formValues.feeTypeDesc = properties.get("form_commercial_step1_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_commercial_step1_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_commercial_step1_row1_ratePerc", "");
        controller.formValues.ratePerPrice = properties.get("form_commercial_step1_row1_ratePerPrice", "");
        controller.formValues.totalDesc = properties.get("form_commercial_step1_row1_totalDesc", "");

        controller.formValues.R2feeTypeDesc = properties.get("form_commercial_step1_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_commercial_step1_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_commercial_step1_baseFeeTotal", "");
        //for step 2 title
        controller.formValues.addC1Title = properties.get("form_commercial_step2_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_commercial_step2_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_commercial_step2_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_commercial_step2_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_commercial_step2_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_commercial_step2_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_commercial_step2_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_commercial_step2_row1_maxVal", "");

        controller.formValues.addR2typeDesc = properties.get("form_commercial_step2_row2_typeDesc", "");
        controller.formValues.addR2subDesc = properties.get("form_commercial_step2_row2_subDesc", "");
        controller.formValues.addR2inputDesc = properties.get("form_commercial_step2_row2_inputDesc", "");
        controller.formValues.addR2rateDesc = properties.get("form_commercial_step2_row2_rateDesc", "");
        controller.formValues.addR2minVal = properties.get("form_commercial_step2_row2_minVal", "");
        controller.formValues.addR2maxVal = properties.get("form_commercial_step2_row2_maxVal", "");

        controller.formValues.addR3typeDesc = properties.get("form_commercial_step2_row3_typeDesc", "");
        controller.formValues.addR3subDesc = properties.get("form_commercial_step2_row3_subDesc", "");
        controller.formValues.addR3inputDesc = properties.get("form_commercial_step2_row3_inputDesc", "");
        controller.formValues.addR3rateDesc = properties.get("form_commercial_step2_row3_rateDesc", "");
        controller.formValues.addR3minVal = properties.get("form_commercial_step2_row3_minVal", "");
        controller.formValues.addR3maxVal = properties.get("form_commercial_step2_row3_maxVal", "");

        controller.formValues.addR4typeDesc = properties.get("form_commercial_step2_row4_typeDesc", "");
        controller.formValues.addR4subDesc = properties.get("form_commercial_step2_row4_subDesc", "");
        controller.formValues.addR4inputDesc = properties.get("form_commercial_step2_row4_inputDesc", "");
        controller.formValues.addR4rateDesc = properties.get("form_commercial_step2_row4_rateDesc", "");
        controller.formValues.addR4totalText = properties.get("form_commercial_step2_row4_totalText", "");

        return controller;


    } else if (controller.pdFormType == "newHomes") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_newHome_step1_title", "");
        controller.formValues.step2Title = properties.get("form_newHome_step2_title", "");
        controller.formValues.step3Title = properties.get("form_newHome_step3_title", "");

        //step 1
        controller.formValues.C1S1title = properties.get("form_newHome_step1_col1_title", "");
        controller.formValues.C2S1title = properties.get("form_newHome_step1_col2_title", "");
        controller.formValues.C3S1title = properties.get("form_newHome_step1_col3_title", "");
        controller.formValues.C4S1title = properties.get("form_newHome_step1_col4_title", "");


        for (var i = 1; i < 11; i++) {

            controller.formValues.pmvArr.push({
                Subhead: properties.get("form_newHome_step1_row" + [i] + "_rowTitle", ""),
                feeType: properties.get("form_newHome_step1_row" + [i] + "_constType", ""),
                rate: properties.get("form_newHome_step1_row" + [i] + "_inputDesc", ""),
                quantityDesc: properties.get("form_newHome_step1_row+" + [i] + "_quantyDesc", ""),
                borderval: "Yes",
                otherstitle: properties.get("form_newHome_step1_row" + [i] + "_otherstitle", ""),
                othersDesc: properties.get("form_newHome_step1_row" + [i] + "_othersDesc", "")

            });



        }

        controller.formValues.PMValue = properties.get("form_newHome_step1_totalValue", "");

        //for step 2
        controller.formValues.C1title = properties.get("form_newHome_step2_col1_title", "");
        controller.formValues.C2title = properties.get("form_newHome_step2_col2_title", "");
        controller.formValues.C3title = properties.get("form_newHome_step2_col3_title", "");


        controller.formValues.feeTypeDesc = properties.get("form_newHome_step2_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_newHome_step2_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_newHome_step2_row1_ratePerc", "");
        controller.formValues.ratePerPrice = properties.get("form_newHome_step2_row1_ratePerPrice", "");
        controller.formValues.totalDesc = properties.get("form_newHome_step2_row1_totalDesc", "");

        controller.formValues.typeDesc1 = properties.get("form_newHome_step2_row2_typeDesc", "");
        controller.formValues.rateDesc1 = properties.get("form_newHome_step2_row2_rateDesc", "");

        controller.formValues.typeDesc2 = properties.get("form_newHome_step2_row3_typeDesc", "");
        controller.formValues.rateDesc2 = properties.get("form_newHome_step2_row3_rateDesc", "");

        controller.formValues.typeDesc3 = properties.get("form_newHome_step2_row4_typeDesc", "");
        controller.formValues.rateDesc3 = properties.get("form_newHome_step2_row4_rateDesc", "");


        controller.formValues.R2feeTypeDesc = properties.get("form_newHome_step2_row5_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_newHome_step2_row5_rateDesc", "");

        controller.formValues.msgDesc = properties.get("form_newHome_step2_row6_messageDesc", "");

        controller.formValues.baseFee = properties.get("form_newHome_step2_baseFeeTotal", "");
        controller.formValues.baseFeeDesc = properties.get("form_newHome_step2_baseFeeTotal_desc", "");

        // step 3 

        controller.formValues.addC1Title = properties.get("form_newHome_step3_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_newHome_step3_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_newHome_step3_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_newHome_step3_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_newHome_step3_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_newHome_step3_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_newHome_step3_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_newHome_step3_row1_maxVal", "");

        controller.formValues.addpartialtitle = properties.get("form_newHome_step3_row2_typeDesc", "");
        controller.formValues.addpartialdesc = properties.get("form_newHome_step2_row1_subDesc", "");
        controller.formValues.addR1partialrateDesc = properties.get("form_newHome_step3_row2_rateDesc", "");

        controller.formValues.feeTypeTitle = properties.get("form_newHome_step3_row3_typeDesc", "");
        controller.formValues.feeTypeDesc = properties.get("form_newHome_step2_row3_subDesc", "");
        controller.formValues.inputDesc = properties.get("form_newHome_step3_row3_inputDesc", "");
        controller.formValues.ratePerPrice = properties.get("form_newHome_step3_row3_rateDesc", "");

        controller.formValues.s3typeDesc = properties.get("form_newHome_step3_row4_typeDesc", "");
        controller.formValues.s3rateDesc = properties.get("form_newHome_step3_row4_rateDesc", "");

        controller.formValues.addR4totalText = properties.get("form_newHome_step3_totalPermitFee", "");
        controller.formValues.totalGstFee = properties.get("form_newHome_step3_totalGstFee", "");
        controller.formValues.totalPermitGstFee = properties.get("form_newHome_step3_totalPermitGstFee", "");

        return controller;


    } else if (controller.pdFormType == "multiFammilyLowRise") {

        formValues = {};

        controller.formValues.step1Title = properties.get("form_multifamilylowriseForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_multifamilylowriseForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_multifamilylowriseForm_step3_title", "");

        //step 1 
        controller.formValues.C1S1title = properties.get("form_multifamilylowriseForm_step1_col1_title", "");
        controller.formValues.C2S1title = properties.get("form_multifamilylowriseForm_step1_col2_title", "");
        controller.formValues.C3S1title = properties.get("form_multifamilylowriseForm_step1_col3_title", "");
        controller.formValues.C4S1title = properties.get("form_multifamilylowriseForm_step1_col4_title", "");

        for (var i = 1; i < 12; i++) {
            if (i < 4) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

                });
            } else if ((i > 4) && (i < 9)) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else if (i == 9) {

                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else if (i == 10) {

                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_multifamilylowriseForm_step1_row+" [i] + "_quantyDesc", ""),
                    borderval: "Yes",
                    otherstitle: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_multifamilylowriseForm_step1_row" + [i] + "_othersDesc", "")

                });

            }



        }

        controller.formValues.PMValue = properties.get("form_multifamilylowriseForm_step1_totalValue", "");



        //for step 2 

        controller.formValues.C1title = properties.get("form_multifamilylowriseForm_step2_col1_title", "");
        controller.formValues.C2title = properties.get("form_multifamilylowriseForm_step2_col2_title", "");
        controller.formValues.C3title = properties.get("form_multifamilylowriseForm_step2_col3_title", "");

        controller.formValues.feeTypeDesc = properties.get("form_multifamilylowriseForm_step2_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_multifamilylowriseForm_step2_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_multifamilylowriseForm_step2_row1_ratePerc", "");
        controller.formValues.ratePerPrice = properties.get("form_multifamilylowriseForm_step2_row1_ratePerPrice", "");
        controller.formValues.totalDesc = properties.get("form_multifamilylowriseForm_step2_row1_totalDesc", "");


        controller.formValues.R2feeTypeDesc = properties.get("form_multifamilylowriseForm_step2_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_multifamilylowriseForm_step2_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_multifamilylowriseForm_step2_baseFeeTotal", "");


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

        controller.formValues.step1Title = properties.get("form_demolition_step1_title", "");
        controller.formValues.step3Title = properties.get("form_demolition_step2_title", "");

        //for step 1 

        controller.formValues.C1title = properties.get("form_demolition_step1_col1_title", "");
        controller.formValues.C2title = properties.get("form_demolition_step1_col2_title", "");
        controller.formValues.C3title = properties.get("form_demolition_step1_col3_title", "");

        controller.formValues.feeTypeDesc = properties.get("form_demolition_step1_row1_typeDesc", "");
        controller.formValues.feeInputDesc = properties.get("form_demolition_step1_row1_inputDesc", "");
        controller.formValues.ratePercent = properties.get("form_demolition_step1_row1_rateDesc", "");
        controller.formValues.totalDesc = properties.get("form_demolition_step1_row1_totalDesc", "");


        controller.formValues.R2feeTypeDesc = properties.get("form_demolition_step1_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_demolition_step1_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_demolition_step1_baseFeeTotal", "");

        //step2
        controller.formValues.addC1Title = properties.get("form_demolition_step2_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_demolition_step2_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_demolition_step2_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_demolition_step2_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_demolition_step2_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_demolition_step2_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_demolition_step2_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_demolition_step2_row1_maxVal", "");
        controller.formValues.addR4totalText = properties.get("form_demolition_step2_row4_totalText", "");

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


            } else if (i == 2) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_warehousesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_warehousesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_warehousesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_warehousesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_warehousesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_warehousesForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else if ((i == 3) || (i == 4)) {
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


            } else if ((i == 2) || (i == 3)) {
                controller.formValues.pmvArr.push({
                    Subhead: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_rowTitle", ""),
                    feeType: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_constType", ""),
                    rate: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_inputDesc", ""),
                    quantityDesc: properties.get("form_careFacilitiesForm_step1_row+" + [i] + "_quantyDesc", ""),
                    borderval: "",
                    otherstitle: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_otherstitle", ""),
                    othersDesc: properties.get("form_careFacilitiesForm_step1_row" + [i] + "_othersDesc", "")

                });

            } else if ((i == 4) || (i == 5)) {
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

    } else if (controller.pdFormType == "planningApp") {

        controller.formValues.resDevheadingtext = properties.get("form_planningAppForm_resDev_headingtext", "");
        controller.formValues.additionsubHeadingText = properties.get("form_planningAppForm_resDev_addition_subHeadingText", "");

        controller.formValues.residentialR1 = properties.get("form_planningAppForm_resDev_row1_addition_inputDesc", "");
        controller.formValues.residentialR2 = properties.get("form_planningAppForm_resDev_row2_addition_inputDesc", "");


        controller.formValues.residentialSubheading2 = properties.get("form_planningAppForm_resDev_newPermit_subHeadingText", "");

        controller.formValues.newPermitR1TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row1_textLabel", "");
        controller.formValues.newPermitR1baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row1_baseFee_numLabel", "");
        controller.formValues.newPermitR1baseFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row1_baseFeeLabel", "");
        controller.formValues.newPermitR1dcpnumLabel = properties.get("form_planningAppForm_resDev_newPermit_row1_dcpFee_numLabel", "");
        controller.formValues.newPermitR1dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row1_dcpFeeLabel", "");
        controller.formValues.newPermitR1adnumLabel = properties.get("form_planningAppForm_resDev_newPermit_row1_adFee_numLabel", "");
        controller.formValues.newPermitR1adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row1_adFeeLabel", "");

        controller.formValues.newPermitR2TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_textLabel", "");
        controller.formValues.newPermitR2baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_baseFee_numLabel", "");
        controller.formValues.newPermitR2baseFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_baseFeeLabel", "");
        controller.formValues.newPermitR2gradesFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_gradesFee_numLabel", "");
        controller.formValues.newPermitR2gradesFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_gradesFeeLabel", "");
        controller.formValues.newPermitR2gradesFeeDesc = properties.get("form_planningAppForm_resDev_newPermit_row2_gradesFeeDesc", "");
        controller.formValues.newPermitR2dcpFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_dcpFee_numLabel", "");
        controller.formValues.newPermitR2dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_dcpFeeLabel", "");
        controller.formValues.newPermitR2adFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_adFee_numLabel", "");
        controller.formValues.newPermitR2adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row2_adFeeLabel", "");

        controller.formValues.newPermitR3TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row3_textLabel", "");
        controller.formValues.newPermitR3baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row3_baseFee_numLabel", "");
        controller.formValues.newPermitR3baseFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row3_baseFeeLabel", "");
        controller.formValues.newPermitR3dcpFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row3_dcpFee_numLabel", "");
        controller.formValues.newPermitR3dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row3_dcpFeeLabel", "");
        controller.formValues.newPermitR3adFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row3_adFee_numLabel", "");
        controller.formValues.newPermitR3adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row3_adFeeLabel", "");

        controller.formValues.newPermitR4TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row4_textLabel", "");
        controller.formValues.newPermitR4baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row4_baseFee_numLabel", "");
        controller.formValues.newPermitR4baseFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row4_baseFeeLabel", "");
        controller.formValues.newPermitR4dcpFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row4_dcpFee_numLabel", "");
        controller.formValues.newPermitR4dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row4_dcpFeeLabel", "");
        controller.formValues.newPermitR4adFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row4_adFee_numLabel", "");
        controller.formValues.newPermitR4adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row4_adFeeLabel", "");

        controller.formValues.newPermitR5TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row5_textLabel", "");
        controller.formValues.newPermitR5baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row5_baseFee_numLabel", "");
        controller.formValues.newPermitR5baseFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row5_baseFeeLabel", "");
        controller.formValues.newPermitR5dcpFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row5_dcpFee_numLabel", "");
        controller.formValues.newPermitR5dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row5_dcpFeeLabel", "");
        controller.formValues.newPermitR5adFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row5_adFee_numLabel", "");
        controller.formValues.newPermitR5adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row5_adFeeLabel", "");

        controller.formValues.newPermitR6TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_textLabel", "");
        controller.formValues.newPermitR6baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_baseFee_numLabel", "");
        controller.formValues.newPermitR6unitFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_baseFeeLabel", "");
        controller.formValues.newPermitR6unitFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_gradesFee_numLabel", "");
        controller.formValues.newPermitR6gradesFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_gradesFeeLabel", "");
        controller.formValues.newPermitR6dcpFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_dcpFee_numLabel", "");
        controller.formValues.newPermitR6dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_dcpFeeLabel", "");
        controller.formValues.newPermitR6adFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_adFee_numLabel", "");
        controller.formValues.newPermitR6adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row6_adFeeLabel", "");

        controller.formValues.newPermitR7TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_textLabel", "");
        controller.formValues.newPermitR7baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_baseFee_numLabel", "");
        controller.formValues.newPermitR7baseFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_baseFeeLabel", "");
        controller.formValues.newPermitR7gradesFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_gradesFee_numLabel", "");
        controller.formValues.newPermitR7gradesFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_gradesFeeLabel", "");
        controller.formValues.newPermitR7dcpFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_dcpFee_numLabel", "");
        controller.formValues.newPermitR7dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_dcpFeeLabel", "");
        controller.formValues.newPermitR7adFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_adFee_numLabel", "");
        controller.formValues.newPermitR7adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row7_adFeeLabel", "");

        controller.formValues.newPermitR8TextLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_textLabel", "");
        controller.formValues.newPermitR8baseFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_baseFee_numLabel", "");
        controller.formValues.newPermitR8baseFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_baseFeeLabel", "");
        controller.formValues.newPermitR8gradesFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_gradesFee_numLabel", "");
        controller.formValues.newPermitR8gradesFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_gradesFeeLabel", "");
        controller.formValues.newPermitR8gradesFeeMessage = properties.get("form_planningAppForm_resDev_newPermit_row8_gradesFeeMessage", "");
        controller.formValues.newPermitR8dcpFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_dcpFee_numLabel", "");
        controller.formValues.newPermitR8dcpFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_dcpFeeLabel", "");
        controller.formValues.newPermitR8adFeenumLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_adFee_numLabel", "");
        controller.formValues.newPermitR8adFeeLabel = properties.get("form_planningAppForm_resDev_newPermit_row8_adFeeLabel", "");

        controller.formValues.relaxationsSubHeadingText = properties.get("form_planningAppForm_resDev_relaxations_subHeadingText", "");

        controller.formValues.relaxationsR1TextLabel = properties.get("form_planningAppForm_resDev_relaxations_row1_textLabel", "");
        controller.formValues.relaxationsR1baseFeenumLabel = properties.get("form_planningAppForm_resDev_relaxations_row1_baseFee_numLabel", "");
        controller.formValues.relaxationsR1baseFeeLabel = properties.get("form_planningAppForm_resDev_relaxations_row1_baseFeeLabel", "");
        controller.formValues.relaxationsR1dcpFeenumLabel = properties.get("form_planningAppForm_resDev_relaxations_row1_dcpFee_numLabel", "");
        controller.formValues.relaxationsR1dcpFeeLabel = properties.get("form_planningAppForm_resDev_relaxations_row1_dcpFeeLabel", "");
        controller.formValues.relaxationsR1adFeenumLabel = properties.get("form_planningAppForm_resDev_relaxations_row1_adFee_numLabel", "");
        controller.formValues.relaxationsR1adFeeLabel = properties.get("form_planningAppForm_resDev_relaxations_row1_adFeeLabel", "");

        controller.formValues.relaxationsR2TextLabel = properties.get("form_planningAppForm_resDev_relaxations_row2_textLabel", "");
        controller.formValues.relaxationsR2baseFeenumLabel = properties.get("form_planningAppForm_resDev_relaxations_row2_baseFee_numLabel", "");
        controller.formValues.relaxationsR2baseFeeLabel = properties.get("form_planningAppForm_resDev_relaxations_row2_baseFeeLabel", "");
        controller.formValues.relaxationsR2dcpFeenumLabel = properties.get("form_planningAppForm_resDev_relaxations_row2_dcpFee_numLabel", "");
        controller.formValues.relaxationsR2dcpFeeLabel = properties.get("form_planningAppForm_resDev_relaxations_row2_dcpFeeLabel", "");
        controller.formValues.relaxationsR2adFeenumLabel = properties.get("form_planningAppForm_resDev_relaxations_row2_adFee_numLabel", "");
        controller.formValues.relaxationsR2adFeeLabel = properties.get("form_planningAppForm_resDev_relaxations_row2_adFeeLabel", "");

        controller.formValues.renovationsSubHeadingText = properties.get("form_planningAppForm_resDev_renovations_subHeadingText", "");

        controller.formValues.renovationsR1TextLabel = properties.get("form_planningAppForm_resDev_renovations_row1_textLabel", "");
        controller.formValues.renovationsR1baseFeenumLabel = properties.get("form_planningAppForm_resDev_renovations_row1_baseFee_numLabel", "");
        controller.formValues.renovationsR1baseFeeLabel = properties.get("form_planningAppForm_resDev_renovations_row1_baseFeeLabel", "");
        controller.formValues.renovationsR1dcpFeenumLabel = properties.get("form_planningAppForm_resDev_renovations_row1_dcpFee_numLabel", "");
        controller.formValues.renovationsR1dcpFeeLabel = properties.get("form_planningAppForm_resDev_renovations_row1_dcpFeeLabel", "");
        controller.formValues.renovationsR1adFeenumLabel = properties.get("form_planningAppForm_resDev_renovations_row1_adFee_numLabel", "");
        controller.formValues.renovationsR1adFeeLabel = properties.get("form_planningAppForm_resDev_renovations_row1_adFeeLabel", "");

        controller.formValues.renovationsR2TextLabel = properties.get("form_planningAppForm_resDev_renovations_row2_textLabel", "");
        controller.formValues.renovationsR2baseFeenumLabel = properties.get("form_planningAppForm_resDev_renovations_row2_baseFee_numLabel", "");
        controller.formValues.renovationsR2baseFeeLabel = properties.get("form_planningAppForm_resDev_renovations_row2_baseFeeLabel", "");
        controller.formValues.renovationsR2dcpFeenumLabel = properties.get("form_planningAppForm_resDev_renovations_row2_dcpFee_numLabel", "");
        controller.formValues.renovationsR2dcpFeeLabel = properties.get("form_planningAppForm_resDev_renovations_row2_dcpFeeLabel", "");
        controller.formValues.renovationsR2adFeenumLabel = properties.get("form_planningAppForm_resDev_renovations_row2_adFee_numLabel", "");
        controller.formValues.renovationsR2adFeeLabel = properties.get("form_planningAppForm_resDev_renovations_row2_adFeeLabel", "");

        controller.formValues.commercialDevheadingtext = properties.get("form_planningAppForm_commercialDev_headingtext", "");
        controller.formValues.commercialDevsubheadingtext = properties.get("form_planningAppForm_commercialDev_addNewPermit_subHeadingLabel", "");

        controller.formValues.commercialDevR1TextLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_textLabel", "");
        controller.formValues.commercialDevR1gfaFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_gfaFee_numLabel", "");
        controller.formValues.commercialDevR1gfaFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_gfaFeeLabel", "");
        controller.formValues.commercialDevR1MinNumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_gfaFee_minLabel", "");
        controller.formValues.commercialDevR1dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_dcpFee_numLabel", "");
        controller.formValues.commercialDevR1dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_dcpFeeLabel", "");
        controller.formValues.commercialDevR1adFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_adFee_numLabel", "");
        controller.formValues.commercialDevR1adFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_adFeeLabel", "");

        controller.formValues.commercialDevR2TextLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_textLabel", "");
        controller.formValues.commercialDevR2inputDesc = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_inputDesc", "");
        controller.formValues.commercialDevR2gfaFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_gfaFee_numLabel", "");
        controller.formValues.commercialDevR2gfaFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_gfaFeeLabel", "");
        controller.formValues.commercialDevR2MinNumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_gfaFee_minLabel", "");
        controller.formValues.commercialDevR2baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_baseFee_numLabel", "");
        controller.formValues.commercialDevR2baseFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_baseFeeLabel", "");
        controller.formValues.commercialDevR2dwellingumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_dwelling_numLabel", "");
        controller.formValues.commercialDevR2dwellingFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_dwellingFeeLabel", "");
        controller.formValues.commercialDevR2dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_dcpFee_numLabel", "");
        controller.formValues.commercialDevR2dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_dcpFeeLabel", "");
        controller.formValues.commercialDevR2adFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row1_adFee_numLabel", "");
        controller.formValues.commercialDevR2adFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row2_adFeeLabel", "");

        controller.formValues.commercialDevR3TextLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row3_textLabel", "");
        controller.formValues.commercialDevR3baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row3_baseFee_numLabel", "");
        controller.formValues.commercialDevR3baseFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row3_baseFeeLabel", "");
        controller.formValues.commercialDevR3dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row3_dcpFee_numLabel", "");
        controller.formValues.commercialDevR3dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row3_dcpFeeLabel", "");
        controller.formValues.commercialDevR3adFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row3_adFee_numLabel", "");
        controller.formValues.commercialDevR3adFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row3_adFeeLabel", "");

        controller.formValues.commercialDevR4TextLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row4_textLabel", "");
        controller.formValues.commercialDevR4baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row4_baseFee_numLabel", "");
        controller.formValues.commercialDevR4baseFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row4_baseFeeLabel", "");
        controller.formValues.commercialDevR4dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row4_dcpFee_numLabel", "");
        controller.formValues.commercialDevR4dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row4_dcpFeeLabel", "");
        controller.formValues.commercialDevR4adFeenumLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row4_adFee_numLabel", "");
        controller.formValues.commercialDevR4adFeeLabel = properties.get("form_planningAppForm_commercialDev_addNewPermit_row4_adFeeLabel", "");

        controller.formValues.changeUsesubHeadingTitle = properties.get("form_planningAppForm_commercialDev_changeUse_subHeadingTitle", "");

        controller.formValues.changeUseR1TextLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row1_textLabel", "");
        controller.formValues.changeUseR1baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row1_baseFee_numLabel", "");
        controller.formValues.changeUseR1baseFeeLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row1_baseFeeLabel", "");
        controller.formValues.changeUseR1dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row1_dcpFee_numLabel", "");
        controller.formValues.changeUseR1dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row1_dcpFeeLabel", "");
        controller.formValues.changeUseR1adFeenumLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row1_adFee_numLabel", "");
        controller.formValues.changeUseR1adFeeLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row1_adFeeLabel", "");

        controller.formValues.changeUseR2TextLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row2_textLabel", "");
        controller.formValues.changeUseR2baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row2_baseFee_numLabel", "");
        controller.formValues.changeUseR2baseFeeLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row2_baseFeeLabel", "");
        controller.formValues.changeUseR2dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row2_dcpFee_numLabel", "");
        controller.formValues.changeUseR2dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row2_dcpFeeLabel", "");
        controller.formValues.changeUseR2adFeenumLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row2_adFee_numLabel", "");
        controller.formValues.changeUseR2adFeeLabel = properties.get("form_planningAppForm_commercialDev_changeUse_row2_adFeeLabel", "");

        controller.formValues.generalFeesubHeadingTitle = properties.get("form_planningAppForm_commercialDev_generalFee_subHeadingTitle", "");

        controller.formValues.generalFeeR1TextLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row1_textLabel", "");
        controller.formValues.generalFeeR1baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row1_baseFee_numLabel", "");
        controller.formValues.generalFeeR1baseFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row1_baseFeeLabel", "");
        controller.formValues.generalFeeR1dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row1_dcpFee_numLabel", "");
        controller.formValues.generalFeeR1dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row1_dcpFeeLabel", "");
        controller.formValues.generalFeeR1adFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row1_adFee_numLabel", "");
        controller.formValues.generalFeeR1adFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row1_adFeeLabel", "");

        controller.formValues.generalFeeR2TextLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row2_textLabel", "");
        controller.formValues.generalFeeR2baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row2_baseFee_numLabel", "");
        controller.formValues.generalFeeR2baseFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row2_baseFeeLabel", "");
        controller.formValues.generalFeeR2dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row2_dcpFee_numLabel", "");
        controller.formValues.generalFeeR2dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row2_dcpFeeLabel", "");
        controller.formValues.generalFeeR2adFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row2_adFee_numLabel", "");
        controller.formValues.generalFeeR2adFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row2_adFeeLabel", "");

        controller.formValues.generalFeeR3TextLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row3_textLabel", "");
        controller.formValues.generalFeeR3baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row3_baseFee_numLabel", "");
        controller.formValues.generalFeeR3baseFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row3_baseFeeLabel", "");
        controller.formValues.generalFeeR3dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row3_dcpFee_numLabel", "");
        controller.formValues.generalFeeR3dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row3_dcpFeeLabel", "");
        controller.formValues.generalFeeR3adFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row3_adFee_numLabel", "");
        controller.formValues.generalFeeR3adFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row3_adFeeLabel", "");

        controller.formValues.generalFeeR4TextLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row4_textLabel", "");
        controller.formValues.generalFeeR4baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row4_baseFee_numLabel", "");
        controller.formValues.generalFeeR4baseFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row4_baseFeeLabel", "");
        controller.formValues.generalFeeR4dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row4_dcpFee_numLabel", "");
        controller.formValues.generalFeeR4dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row4_dcpFeeLabel", "");
        controller.formValues.generalFeeR4adFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row4_adFee_numLabel", "");
        controller.formValues.generalFeeR4adFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row4_adFeeLabel", "");

        controller.formValues.generalFeeR5TextLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row5_textLabel", "");
        controller.formValues.generalFeeR5baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row5_baseFee_numLabel", "");
        controller.formValues.generalFeeR5baseFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row5_baseFeeLabel", "");
        controller.formValues.generalFeeR5dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row5_dcpFee_numLabel", "");
        controller.formValues.generalFeeR5dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row5_dcpFeeLabel", "");
        controller.formValues.generalFeeR5adFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row5_adFee_numLabel", "");
        controller.formValues.generalFeeR5adFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row5_adFeeLabel", "");

        controller.formValues.generalFeeR6TextLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row6_textLabel", "");
        controller.formValues.generalFeeR6baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row6_baseFee_numLabel", "");
        controller.formValues.generalFeeR6baseFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row6_baseFeeLabel", "");
        controller.formValues.generalFeeR6dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row6_dcpFee_numLabel", "");
        controller.formValues.generalFeeR6dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row6_dcpFeeLabel", "");
        controller.formValues.generalFeeR6adFeenumLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row6_adFee_numLabel", "");
        controller.formValues.generalFeeR6adFeeLabel = properties.get("form_planningAppForm_commercialDev_generalFee_row6_adFeeLabel", "");

        controller.formValues.renovationsSubHeadingTitle = properties.get("form_planningAppForm_commercialDev_renovations_subHeadingTitle", "");

        controller.formValues.renovationsR1TextLabel = properties.get("form_planningAppForm_commercialDev_renovations_row1_textLabel", "");
        controller.formValues.renovationsR1baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_renovations_row1_baseFee_numLabel", "");
        controller.formValues.renovationsR1baseFeeLabel = properties.get("form_planningAppForm_commercialDev_renovations_row1_baseFeeLabel", "");
        controller.formValues.renovationsR1dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_renovations_row1_dcpFee_numLabel", "");
        controller.formValues.renovationsR1dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_renovations_row1_dcpFeeLabel", "");
        controller.formValues.renovationsR1adFeenumLabel = properties.get("form_planningAppForm_commercialDev_renovations_row1_adFee_numLabel", "");
        controller.formValues.renovationsR1adFeeLabel = properties.get("form_planningAppForm_commercialDev_renovations_row1_adFeeLabel", "");

        controller.formValues.renovationsR2TextLabel = properties.get("form_planningAppForm_commercialDev_renovations_row2_textLabel", "");
        controller.formValues.renovationsR2baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_renovations_row2_baseFee_numLabel", "");
        controller.formValues.renovationsR2baseFeeLabel = properties.get("form_planningAppForm_commercialDev_renovations_row2_baseFeeLabel", "");
        controller.formValues.renovationsR2dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_renovations_row2_dcpFee_numLabel", "");
        controller.formValues.renovationsR2dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_renovations_row2_dcpFeeLabel", "");
        controller.formValues.renovationsR2adFeenumLabel = properties.get("form_planningAppForm_commercialDev_renovations_row2_adFee_numLabel", "");
        controller.formValues.renovationsR2adFeeLabel = properties.get("form_planningAppForm_commercialDev_renovations_row2_adFeeLabel", "");

        controller.formValues.commercialSignSubHeadingTitle = properties.get("form_planningAppForm_commercialDev_commercialSign_subHeadingTitle", "");

        controller.formValues.commercialSignR1TextLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row1_textLabel", "");
        controller.formValues.commercialSignR1baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row1_baseFee_numLabel", "");
        controller.formValues.commercialSignR1baseFeeLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row1_baseFeeLabel", "");
        controller.formValues.commercialSignR1dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row1_dcpFee_numLabel", "");
        controller.formValues.commercialSignR1dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row1_dcpFeeLabel", "");
        controller.formValues.commercialSignR1adFeenumLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row1_adFee_numLabel", "");
        controller.formValues.commercialSignR1adFeeLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row1_adFeeLabel", "");

        controller.formValues.commercialSignR2TextLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row2_textLabel", "");
        controller.formValues.commercialSignR2baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row2_baseFee_numLabel", "");
        controller.formValues.commercialSignR2baseFeeLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row2_baseFeeLabel", "");
        controller.formValues.commercialSignR2dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row2_dcpFee_numLabel", "");
        controller.formValues.commercialSignR2dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row2_dcpFeeLabel", "");
        controller.formValues.commercialSignR2adFeenumLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row2_adFee_numLabel", "");
        controller.formValues.commercialSignR2adFeeLabel = properties.get("form_planningAppForm_commercialDev_commercialSign_row2_adFeeLabel", "");

        controller.formValues.additionalFeesheadingtext = properties.get("form_planningAppForm_additionalFees_headingtext", "");
        controller.formValues.additionalFeesSubheadingtext = properties.get("form_planningAppForm_additionalFees_addNewPermit_subHeadingLabel", "");

        controller.formValues.additionalFeesR1TextLabel = properties.get("form_planningAppForm_commercialDev_additionalFees_row1_textLabel", "");
        controller.formValues.additionalFeesR1descLabel = properties.get("form_planningAppForm_additionalFees_addNewPermit_row1_descLabel");
        controller.formValues.additionalFeesR1baseFeenumLabel = properties.get("form_planningAppForm_commercialDev_additionalFees_row1_baseFee_numLabel", "");
        controller.formValues.additionalFeesR1baseFeeLabel = properties.get("form_planningAppForm_commercialDev_additionalFees_row1_baseFeeLabel", "");
        controller.formValues.additionalFeesR1dcpFeenumLabel = properties.get("form_planningAppForm_commercialDev_additionalFees_row1_dcpFee_numLabel", "");
        controller.formValues.additionalFeesR1dcpFeeLabel = properties.get("form_planningAppForm_commercialDev_additionalFees_row1_dcpFeeLabel", "");
        controller.formValues.additionalFeesR1adFeenumLabel = properties.get("form_planningAppForm_commercialDev_additionalFees_row1_adFee_numLabel", "");
        controller.formValues.additionalFeesR1adFeeLabel = properties.get("form_planningAppForm_commercialDev_additionalFees_row1_adFeeLabel", "");

        controller.formValues.antennasheadingtext = properties.get("form_planningAppForm_otherApplication_headingtext", "");
        controller.formValues.antennasSubheadingtext = properties.get("form_planningAppForm_otherApplication_antennas_subHeadingLabel", "");

        controller.formValues.antennasR1TextLabel = properties.get("form_planningAppForm_otherApplication_antennas_row1_textLabel", "");
        controller.formValues.antennasR1baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_antennas_row1_baseFee_numLabel", "");
        controller.formValues.antennasR1baseFeeLabel = properties.get("form_planningAppForm_otherApplication_antennas_row1_baseFeeLabel", "");

        controller.formValues.antennasR2TextLabel = properties.get("form_planningAppForm_otherApplication_antennas_row2_textLabel", "");
        controller.formValues.antennasR2baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_antennas_row2_baseFee_numLabel", "");
        controller.formValues.antennasR2baseFeeLabel = properties.get("form_planningAppForm_otherApplication_antennas_row2_baseFeeLabel", "");

        controller.formValues.antennasR3TextLabel = properties.get("form_planningAppForm_otherApplication_antennas_row3_textLabel", "");
        controller.formValues.antennasR3baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_antennas_row3_baseFee_numLabel", "");
        controller.formValues.antennasR3baseFeeLabel = properties.get("form_planningAppForm_otherApplication_antennas_row3_baseFeeLabel", "");

        controller.formValues.antennasR4TextLabel = properties.get("form_planningAppForm_otherApplication_antennas_row4_textLabel", "");
        controller.formValues.antennasR4baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_antennas_row4_baseFee_numLabel", "");
        controller.formValues.antennasR4baseFeeLabel = properties.get("form_planningAppForm_otherApplication_antennas_row4_baseFeeLabel", "");

        controller.formValues.certificatesSubheadingtext = properties.get("form_planningAppForm_otherApplication_certificates_subHeadingLabel", "");

        controller.formValues.certificatesR1TextLabel = properties.get("form_planningAppForm_otherApplication_certificates_row1_textLabel", "");
        controller.formValues.certificatesR1baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_certificates_row1_baseFee_numLabel", "");
        controller.formValues.certificatesR1baseFeeLabel = properties.get("form_planningAppForm_otherApplication_certificates_row1_baseFeeLabel", "");

        controller.formValues.certificatesR2TextLabel = properties.get("form_planningAppForm_otherApplication_certificates_row2_textLabel", "");
        controller.formValues.certificatesR2baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_certificates_row2_baseFee_numLabel", "");
        controller.formValues.certificatesR2baseFeeLabel = properties.get("form_planningAppForm_otherApplication_certificates_row2_baseFeeLabel", "");

        controller.formValues.certificatesR3TextLabel = properties.get("form_planningAppForm_otherApplication_certificates_row3_textLabel", "");
        controller.formValues.certificatesR3baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_certificates_row3_baseFee_numLabel", "");
        controller.formValues.certificatesR3baseFeeLabel = properties.get("form_planningAppForm_otherApplication_certificates_row3_baseFeeLabel", "");

        controller.formValues.generalFeesOASubheadingtext = properties.get("form_planningAppForm_otherApplication_generalFees_subHeadingLabel", "");

        controller.formValues.generalFeesOAR1TextLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row1_textLabel", "");
        controller.formValues.generalFeesOAR1baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row1_baseFee_numLabel", "");
        controller.formValues.generalFeesOAR1baseFeeLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row1_baseFeeLabel", "");

        controller.formValues.generalFeesOAR2TextLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row2_textLabel", "");
        controller.formValues.generalFeesOAR2baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row2_baseFee_numLabel", "");
        controller.formValues.generalFeesOAR2baseFeeLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row2_baseFeeLabel", "");

        controller.formValues.generalFeesOAR4TextLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row4_textLabel", "");
        controller.formValues.generalFeesOAR4baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row4_baseFee_numLabel", "");
        controller.formValues.generalFeesOAR4baseFeeLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row4_baseFeeLabel", "");

        controller.formValues.generalFeesOAR5TextLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row5_textLabel", "");
        controller.formValues.generalFeesOAR5baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row5_baseFee_numLabel", "");
        controller.formValues.generalFeesOAR5baseFeeLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row5_baseFeeLabel", "");

        controller.formValues.generalFeesOAR6TextLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row6_textLabel", "");
        controller.formValues.generalFeesOAR6baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row6_baseFee_numLabel", "");
        controller.formValues.generalFeesOAR6baseFeeLabel = properties.get("form_planningAppForm_otherApplication_generalFees_row6_baseFeeLabel", "");

        controller.formValues.pushcartsFeesSubheadingtext = properties.get("form_planningAppForm_otherApplication_pushcartsFees_subHeadingLabel", "");

        controller.formValues.pushcartsFeesR1TextLabel = properties.get("form_planningAppForm_otherApplication_pushcartsFees_row1_textLabel", "");
        controller.formValues.pushcartsFeesR1baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_pushcartsFees_row1_baseFee_numLabel", "");
        controller.formValues.pushcartsFeesR1baseFeeLabel = properties.get("form_planningAppForm_otherApplication_pushcartsFees_row1_baseFeeLabel", "");

        controller.formValues.pushcartsFeesR2TextLabel = properties.get("form_planningAppForm_otherApplication_pushcartsFees_row2_textLabel", "");
        controller.formValues.pushcartsFeesR2baseFeenumLabel = properties.get("form_planningAppForm_otherApplication_pushcartsFees_row2_baseFee_numLabel", "");
        controller.formValues.pushcartsFeesR2baseFeeLabel = properties.get("form_planningAppForm_otherApplication_pushcartsFees_row2_baseFeeLabel", "");

        controller.formValues.totalFeesText = properties.get("form_planningAppForm_totalText", "");

        return controller;
    }


});