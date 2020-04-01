"use strict";
use(function () {

    var controller = {
        pdFormType: properties.get("formType", ""),
        spacing: properties.get('spacing', 'mb-responsive'),
        formValues: {}
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




    } else if (controller.pdFormType == "newHomes") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_newHome_step1_title", "");
        controller.formValues.step2Title = properties.get("form_newHome_step2_title", "");
        controller.formValues.step3Title = properties.get("form_newHome_step3_title", "");

        controller.formValues.C1S1title = properties.get("form_newHome_step1_col1_title", "");
        controller.formValues.C2S1title = properties.get("form_newHome_step1_col2_title", "");
        controller.formValues.C3S1title = properties.get("form_newHome_step1_col3_title", "");
        controller.formValues.C4S1title = properties.get("form_newHome_step1_col4_title", "");


        // for (var i = 1; i < 5; i++) {
        //     controller.formValues.nestedObj.feeType[i] = properties.get("form_newHome_step1_row[i]_constType", "");
        //     controller.formValues.nestedObj.rateValue[i] = properties.get("form_newHome_step1_row[i]_inputDesc", "");
        // }

        // controller.formValues.nestedObj.R4consType = properties.get("form_newHome_step1_row4_constType", "");
        // controller.formValues.nestedObj.R4quantDesc = properties.get("form_newHome_step1_row4_quantyDesc", "");
        // controller.formValues.nestedObj.R4rateDesc = properties.get("form_newHome_step1_row4_inputDesc", "");


        // controller.formValues.nestedObj.R5consType = properties.get("form_newHome_step1_row5_constType", "");
        // controller.formValues.nestedObj.R5quantDesc = properties.get("form_newHome_step1_row5_quantyDesc", "");
        // controller.formValues.nestedObj.R5rateDesc = properties.get("form_newHome_step1_row5_inputDesc", "");


        // for (var i = 6; i < 11; i++) {
        //     controller.formValues.nestedObj.feeType[i] = properties.get("form_newHome_step1_row[i]_constType", "");
        //     controller.formValues.nestedObj.rateValue[i] = properties.get("form_newHome_step1_row[i]_inputDesc", "");
        // }

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




    } else if (controller.pdFormType == "multiFammilyLowRise") {


        formValues = {};


        controller.formValues.step1Title = properties.get("form_multifamilylowriseForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_multifamilylowriseForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_multifamilylowriseForm_step3_title", "");
        //step 1 remaining
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





    } else if (controller.pdFormType == "multiFammilyHigHRise") {

        formValues = {};

        controller.formValues.step1Title = properties.get("form_multifamilyhighriseForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_multifamilyhighriseForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_multifamilyhighriseForm_step3_title", "");
        //step 1 remaining
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




    } else if (controller.pdFormType == "demolition") {

        formValues = {};

        controller.formValues.step1Title = properties.get("form_demolition_step1_title", "");
        controller.formValues.step3Title = properties.get("form_demolition_step2_title", "");

        //step 2 remaining
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

        //step3
        controller.formValues.addC1Title = properties.get("form_demolition_step2_col1_title", "");
        controller.formValues.addC2Title = properties.get("form_demolition_step2_col2_title", "");
        controller.formValues.addC3Title = properties.get("form_demolition_step2_col3_title", "");

        controller.formValues.addR1typeDesc = properties.get("form_demolition_step2_row1_typeDesc", "");
        controller.formValues.addR1inputDesc = properties.get("form_demolition_step2_row1_inputDesc", "");
        controller.formValues.addR1rateDesc = properties.get("form_demolition_step2_row1_rateDesc", "");
        controller.formValues.addR1minVal = properties.get("form_demolition_step2_row1_minVal", "");
        controller.formValues.addR1maxVal = properties.get("form_demolition_step2_row1_maxVal", "");
        controller.formValues.addR4totalText = properties.get("form_demolition_step2_row4_totalText", "");



    } else if (controller.pdFormType == "wareHouses") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_warehousesForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_warehousesForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_warehousesForm_step3_title", "");

        //step 1 remaining
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




    } else if (controller.pdFormType == "careFacilities") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_careFacilitiesForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_careFacilitiesForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_careFacilitiesForm_step3_title", "");

        //step 1 remaining
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




    } else if (controller.pdFormType == "hotels") {

        formValues = {};


        controller.formValues.step1Title = properties.get("form_hotelsForm_step1_title", "");
        controller.formValues.step2Title = properties.get("form_hotelsForm_step2_title", "");
        controller.formValues.step3Title = properties.get("form_hotelsForm_step3_title", "");

        //step 1 remaining
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
    }

    return controller;

});