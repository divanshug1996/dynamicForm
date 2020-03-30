"use strict";
use(function () {

    var controller = {
        pdFormType: properties.get("formType", ""),
        spacing: properties.get('spacing', 'mb-responsive'),
        formValues: {}
    };

    if (controller.pdFormType == "commercial") {

        controller.formValues.step1Title = properties.get("form_commercial_step1_title", "");
        controller.formValues.step2Title = properties.get("form_commercial_step2_title", "");

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

        controller.formValues.C1S2Title = properties.get("form_commercial_step2_col1_title", "");
        controller.formValues.C2S2Title = properties.get("form_commercial_step2_col2_title", "");
        controller.formValues.C3S2Title = properties.get("form_commercial_step2_col3_title", "");

        controller.formValues.R1S2typeDesc = properties.get("form_commercial_step2_row1_typeDesc", "");
        controller.formValues.R1S2inputDesc = properties.get("form_commercial_step2_row1_inputDesc", "");
        controller.formValues.R1S2rateDesc = properties.get("form_commercial_step2_row1_rateDesc", "");
        controller.formValues.R1S2totalDesc = properties.get("form_commercial_step2_row1_totalDesc", "");


        controller.formValues.R2S2typeDesc = properties.get("form_commercial_step2_row2_typeDesc", "");
        controller.formValues.R2S2inputDesc = properties.get("form_commercial_step2_row2_inputDesc", "");
        controller.formValues.R2S2rateDesc = properties.get("form_commercial_step2_row2_rateDesc", "");
        controller.formValues.R2S2totalDesc = properties.get("form_commercial_step2_row2_totalDesc", "");

        controller.formValues.R3S2typeDesc = properties.get("form_commercial_step2_row3_typeDesc", "");
        controller.formValues.R3S2inputDesc = properties.get("form_commercial_step2_row3_inputDesc", "");
        controller.formValues.R3S2rateDesc = properties.get("form_commercial_step2_row3_rateDesc", "");
        controller.formValues.R3S2totalDesc = properties.get("form_commercial_step2_row3_totalDesc", "");

        controller.formValues.R4S2typeDesc = properties.get("form_commercial_step2_row4_typeDesc", "");
        controller.formValues.R4S2inputDesc = properties.get("form_commercial_step2_row4_inputDesc", "");
        controller.formValues.R4S2rateDesc = properties.get("form_commercial_step2_row4_rateDesc", "");
        controller.formValues.R4S2totalDesc = properties.get("form_commercial_step2_row4_totalDesc", "");

        return controller;


    } else if (controller.pdFormType == "newHomes") {

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

        // step 3 remaining


        return controller;


    } else if (controller.pdFormType == "multiFammilyLowRise") {


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

        return controller;
        //step 3 remaining

    } else if (controller.pdFormType == "multiFammilyHigHRise") {


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


        controller.formValues.R2feeTypeDesc= properties.get("form_multifamilyhighriseForm_step2_row2_typeDesc", "");
        controller.formValues.R2Rate = properties.get("form_multifamilyhighriseForm_step2_row2_rateDesc", "");
        controller.formValues.baseFee = properties.get("form_multifamilyhighriseForm_step2_baseFeeTotal", "");

        return controller;
        //step 3 remaining

    } else if (controller.pdFormType == "demolition") {


        controller.formValues.step1Title = properties.get("form_demolition_step1_title", "");
        controller.formValues.step2Title = properties.get("form_demolition_step2_title", "");

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

        return controller;

    } else if (controller.pdFormType == "wareHouses") {


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

        return controller;
        //step 3 remaining

    } else if (controller.pdFormType == "careFacilities") {


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
        return controller;

        //step 3 remaining

    } else if (controller.pdFormType == "hotels") {


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
        return controller;

        //step 3 remaining

    }


});