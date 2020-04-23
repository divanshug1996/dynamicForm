var input_ele, rate_ele, pf_ele, pfTotal_ele, baseFee_ele, PMVTotal_ele, Ftype, PartialP_ele, ground_checkbox = 0, temp_checkbox = 0, hydronic_heat = 0, other = 0, round = 0, gst = 0;
var PD_CALC = {};
PD_CALC.constants = {};
PD_CALC.constants.nodePath = "/root/pd_fee_calculator";
PD_CALC.glob = {};
PD_CALC.methods = {};
PD_CALC.events = {};
PD_CALC.methods.logics = {};
PD_CALC.methods.utils = {};
PD_CALC.glob.formName = "";
PD_CALC.constants.CLASS_getFormType = '.pd-formType';
PD_CALC.constants.ATTR_getFormType = "data-form-name";
PD_CALC.methods.callajax = function(path,view){
    $.ajax({
        url : path,
        type: 'POST',
        data : {
            switchView : view
        },
        success: function(doc){
            console.log("in success");
            console.log(doc);
            window.location.reload();
        },
        failure: function(err){
            console.log(err)
        }
    })
}
PD_CALC.methods.changeUnits = function (val, changeVal) {
    if (val == "metric") {
        $('.pmv').each(function () {
            if ($(this).attr("id") != "other_input") {
                var dataFee = $(this).attr('data-feetype'),
                    dataRate = PD_CALC.methods.getNum($(this).attr('data-rate')),
                    ele = document.getElementById(dataFee);

                if (dataFee.search("Fireplace") == -1 && changeVal == true) {
                    var convRate = PD_CALC.methods.numberWithCommas(PD_CALC.methods.fTom(dataRate));
                    $(this).attr('data-rate', convRate);
                    $(ele).html('');
                    $(ele).html(convRate);
                }
            }

        })
        $('.feet').each(function () {
            $(this).hide();
        })
        $('.metres').each(function () {
            $(this).show();
        })
    } else {
        $('.pmv').each(function () {
            if ($(this).attr("id") != "other_input") {
                var dataFee = $(this).attr('data-feetype'),
                    dataRate = PD_CALC.methods.getNum($(this).attr('data-rate')),
                    ele = document.getElementById(dataFee),
                    convRate = PD_CALC.methods.numberWithCommas(PD_CALC.methods.mToF(PD_CALC.methods.getNum(dataRate)));
                if (dataFee.search("Fireplace") == -1 && changeVal === true) {
                    $(this).attr('data-rate', convRate);
                    $(ele).html('');
                    $(ele).html(convRate);
                }
            }
        })
        $('.metres').each(function () {
            $(this).hide();
        })
        $('.feet').each(function () {
            $(this).show();
        })
    }
}
PD_CALC.methods.numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
PD_CALC.methods.fTom = function (dollars) {
    return parseFloat(dollars * 10.7639).toFixed(2);
}
PD_CALC.methods.mToF = function (dollars) {
    return parseFloat(dollars / 10.7639).toFixed(2);
}
PD_CALC.methods.getNum = function (str) {
    if (str.indexOf(',') > -1)
        return parseFloat(str.replace(/,/g, '')).toFixed(2);
    else return parseFloat(str).toFixed(2);
}
PD_CALC.methods.getAddonResult = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum == "NaN" ? 0 : sum;
}
$.fn.hasAttr = function (name) {
    return this.attr(name) !== undefined;
};
PD_CALC.methods.setBaseTotal = function () {
    var sum = 0,
        highest = 0,
        totalEle, calcVal, finalBaseTotal;
    $('.fees').each(function () {
            totalEle = $(this).find('.totals');
            calcVal = $(totalEle).html() == ""? 0 : parseFloat(PD_CALC.methods.getNum($(totalEle).html())) ;
           if($(this).hasAttr('data-total-highest-value')){
                if (calcVal > highest) 
                highest = calcVal;
            }else{
                sum = sum + calcVal;
            }
    });
    finalBaseTotal = sum+highest;
    $("#final-fee-x").html(PD_CALC.methods.numberWithCommas(parseFloat(finalBaseTotal).toFixed(2)));
}
PD_CALC.methods.getBasePermitFeeStd = function (PMV, rfactor, rate, dFactor) {
    if(!dFactor) {
        dFactor = 0;
    }
    var roundOff = Math.ceil(PMV / rfactor) * rfactor;
    if (roundOff <= dFactor) {
        return 0;
    } else {
        var dFactorExp = dFactor == 0 ? roundOff : (roundOff / dFactor);
        var calculated = ((dFactorExp) * rate).toFixed(2);
        return calculated;
    }
}
PD_CALC.methods.getBasePermitFeeDemolition = function (area, rate, min, max) {
    var calc = area * rate;
    if (calc <= min)
        calc = min;
    else if (calc >= max)
        calc = max;
    else
        calc = calc;
    return calc;
}
PD_CALC.methods.calcCheckBox = function (num, ele, totalEle) {
    var checked = false,
        baseFee = $("#base-fee" + num).attr("data-value"),
        dcpFee = $("#dcp-fee" + num).attr("data-value"),
        adFee = $("#ad-fee" + num).attr("data-value"),
        arr = [];
        console.log(baseFee,dcpFee,adFee)
    arr.push(parseFloat(baseFee));
    arr.push(parseFloat(dcpFee));
    arr.push(parseFloat(adFee));
    if (num == 4 || num == 10)
        arr.push(parseFloat($("#grad-fee" + num).attr("data-value")));
    if ($(ele).is(":checked")) {
        $(ele).attr("checked", true);
    }
    checked = $(ele).is(':checked');

    if (checked)
        $(totalEle).html(PD_CALC.methods.numberWithCommas(PD_CALC.methods.getAddonResult(arr).toFixed(2)));
    else
        $(totalEle).html("");
}
PD_CALC.methods.getAddedResult = function (num, value) {
    var min = $("#base-min" + num).attr("data-value"),
        max = $("#base-max" + num).attr("data-value"),
        area = parseInt(value),
        comparator = 10,
        dcpFeeMin = $("#DCP_fee_min" + num).attr("data-value"),
        addFeeMin = $("#ad_fee_min" + num).attr("data-value"),
        dcpFeeMax = $("#DCP_fee_max" + num).attr("data-value"),
        addFeeMax = $("#ad_fee_max" + num).attr("data-value"),
        total = 0;

    if (area <= comparator) {
        total = parseFloat(dcpFeeMin) + parseFloat(addFeeMin);
        total = total + parseFloat(min);
    }
    else {
        total = parseFloat(dcpFeeMax) + parseFloat(addFeeMax);
        total = total + parseFloat(max);
        if (num == 2)
            total = total + parseFloat($("#grade_fee_max2").attr("data-value"));
    }
    $("#total0" + num).html(PD_CALC.methods.numberWithCommas(parseInt(total).toFixed(2)));
}
PD_CALC.methods.minMaxCalc = function (area, rate, min, max) {
    var calc;
    if (area <= rate)
        calc = min * area;
    else calc = max * area;
}
PD_CALC.methods.isNumeric = function (e) {
    var regex = /^(\d+)?([.]?\d*)?(%)?$/,
        value = e.target.value + e.key || '0',
        key = e.key,
        keyCode = e.keyCode;
    if (value.match(regex) || key === 'Backspace' || keyCode === 8) {
        return true;
    } else {
        e.preventDefault();
    }
    if (key !== undefined) {
        if (key !== 'Backspace' && isNaN(Number(key))) {
            e.preventDefault();
        }
        return false;
    }
    if (keyCode !== undefined) {
        if (isNaN(String.fromCharCode(keyCode)) && (keyCode < 97 || keyCode > 105)) {
            e.preventDefault();
        }
        return false;
    }
};
PD_CALC.methods.trimSpaces = function (str) {
    return str.replace(/ +/g, "")
};
PD_CALC.additionalFeesObj = {
    basePermitFee: 0,
    safetyCouncilBasePermit: 0,
    safetyCouncilPartPermit: 0,
    partialPermitFee: 0,
    lotGradingFee: 0,
    waterFee: 0,
    set basePermit(basePermit) {
        this.basePermitFee = isNaN(parseFloat(basePermit)) ? 0 : parseFloat(basePermit);
        PD_CALC.methods.changeTotal(PD_CALC.additionalFeesObj);
    },
    set safetyCouncilBase(safetyCouncilBase) {
        this.safetyCouncilBasePermit = isNaN(parseFloat(safetyCouncilBase)) ? 0 : parseFloat(safetyCouncilBase);
        PD_CALC.methods.changeTotal(PD_CALC.additionalFeesObj);
    },
    set safetyCouncilPart(safetyCouncilPart) {
        this.safetyCouncilPartPermit = isNaN(parseFloat(safetyCouncilPart)) ? 0 : parseFloat(safetyCouncilPart);
        PD_CALC.methods.changeTotal(PD_CALC.additionalFeesObj);
    },
    set partialPermit(partialPermit) {
        this.partialPermitFee = isNaN(parseFloat(partialPermit)) ? 0 : parseFloat(partialPermit);
        PD_CALC.methods.changeTotal(PD_CALC.additionalFeesObj);
    },
    set lotGrading(lotGrading) {
        this.lotGradingFee = isNaN(parseFloat(lotGrading)) ? 0 : parseFloat(lotGrading);
        PD_CALC.methods.changeTotal(PD_CALC.additionalFeesObj);
    },
    set water(water) {
        this.waterFee = isNaN(parseFloat(water)) ? 0 : parseFloat(water);
        PD_CALC.methods.changeTotal(PD_CALC.additionalFeesObj);
    }
};
PD_CALC.methods.changeTotal = function (additionalFeesObj) {
    var sum = 0;
    for (let property in additionalFeesObj) {
        if (additionalFeesObj[property] != undefined)
            sum = sum + parseFloat(additionalFeesObj[property]);
    }
    if (!isNaN(sum))
        $(".step3-final-total").html(PD_CALC.methods.numberWithCommas(parseFloat(sum).toFixed(2)));
    else
        $(".step3-final-total").html("");
    if (Ftype == "new_home") {
        $("#gst").html(parseFloat(gst).toFixed(2));
        sum = sum + gst;
        $("#total-fee-inc-gst").html(PD_CALC.methods.numberWithCommas(sum.toFixed(2)));
    }
}

PD_CALC.methods.calcBasePermitStep = function (num, type) {
    var rate = parseFloat($(rate_ele).html()),
        dFactor = parseInt($(rate_ele).attr('data-attr-dfactor')),
        procFee = $(pf_ele).html() == "" ? 0 : PD_CALC.methods.getNum($(pf_ele).html()),
        num = isNaN(num) ? 0 : num,
        min = $("#bldg_demo_min").attr("data-value"),
        max = $("#bldg_demo_max").attr("data-value"),
        numMult,
        total;
    if (type == "demolition") {
        total = PD_CALC.methods.getBasePermitFeeDemolition(parseFloat(num), parseFloat(rate), parseFloat(min), parseFloat(max));
        if (isNaN(total)) total = 0
        else total = parseFloat(total).toFixed(2);
        $(PMVTotal_ele).html(isNaN(total) ? 0.00 : PD_CALC.methods.numberWithCommas(parseFloat(total).toFixed(2)));
    }
    else if (type == "new_home") {
        numMult = parseFloat(PD_CALC.methods.getBasePermitFeeStd(parseFloat(num), parseFloat(round), parseFloat(rate), dFactor));
        total = numMult + parseFloat(ground_checkbox) + parseFloat(temp_checkbox) + parseFloat(hydronic_heat);
        $(PMVTotal_ele).html(isNaN(total) ? 0.00 : PD_CALC.methods.numberWithCommas(parseFloat(numMult).toFixed(2)));
    }
    else {
        total = PD_CALC.methods.getBasePermitFeeStd(parseInt(num), round, rate, dFactor) == "NaN" ? 0 : PD_CALC.methods.getBasePermitFeeStd(parseInt(num), round, rate, dFactor);
        $(PMVTotal_ele).html(isNaN(total) ? 0.00 : parseFloat(total).toFixed(2));
    }
    var newTotal = parseFloat(total) + parseFloat(procFee)
    $(pfTotal_ele).html(PD_CALC.methods.numberWithCommas(parseFloat($(pf_ele).html()).toFixed(2)));
    $(baseFee_ele).html(PD_CALC.methods.numberWithCommas(parseFloat(newTotal).toFixed(2)));
}
PD_CALC.methods.caclStep1Total = function () {
    if (isNaN(other))
        other = 0
    var sum = 0;
    $(".step1Total").each(function () {
        var num = PD_CALC.methods.getNum($(this).html());
        if (isNaN(parseFloat(num))) {
            sum = sum + 0;
        } else {
            sum = sum + parseFloat(num);
        }
    });
    sum = sum + other
    $(".step1-final-total").html(PD_CALC.methods.numberWithCommas(sum.toFixed(2)));
}
PD_CALC.events.init = function (type, unit) {
    input_ele = '#' + type + '_input',
        rate_ele = '#' + type + '_rate',
        pf_ele = '#' + type + '_min_processing_fee',
        pfTotal_ele = '#' + type + '_min_processing_fee_total',
        baseFee_ele = '#' + type + '_base-fee',
        PMVTotal_ele = '#' + type + '_permit_rate_total',
        round = $(rate_ele).attr('data-round'),
        PartialP_ele = "#" + type + "_partial_permit_input";
    Ftype = type;
    if (type != 'planningApp') {
        $("#units").val(unit);
        PD_CALC.methods.changeUnits(unit, false);
    }
    $('input').keypress(function (e) {
        PD_CALC.methods.isNumeric(e);
    });
    $(input_ele).keyup(function (e) {
        PD_CALC.methods.calcBasePermitStep(this.value, type);
    });
    $("#input01").keyup(function () {
        if (this.value == "")
            $("#total01").html("");
        else PD_CALC.methods.getAddedResult(1, this.value);
        PD_CALC.methods.setBaseTotal();
    })
    $("#input02").keyup(function () {
        if (this.value == "")
            $("#total02").html("");
        else PD_CALC.methods.getAddedResult(2, this.value);
        PD_CALC.methods.setBaseTotal();
    })
    $('input[type="checkbox"]').change(function () {
        if ($(this).hasClass("type2")) {
            var checked = false,
                baseid = "#" + $(this).attr("id") + "_base",
                baseVal = $(baseid).attr("data-value"),
                totalId = "#" + $(this).attr("id") + "_total";
            if ($(this).is(":checked"))
                $(this).attr("checked", true);
            checked = $(this).is(':checked');
            if (checked) {
                $(totalId).html(PD_CALC.methods.numberWithCommas(parseFloat(baseVal).toFixed(2)));
            }
            else {
                $(totalId).html("");
            }
        } else {
            var total_ele = "#" + $(this).attr("id") + "_total",
                num = $(this).attr("data-num");
            PD_CALC.methods.calcCheckBox(num, this, total_ele);
        }
        PD_CALC.methods.setBaseTotal();
    })
    $("#input03").keyup(function () {
        var arr = [],
            total;
        arr.push(parseFloat($("#base-fee8").attr("data-value")));
        arr.push(parseFloat($("#dcp-fee8").attr("data-value")));
        arr.push(parseFloat($("#ad-fee8").attr("data-value")));
        arr.push(parseFloat(this.value != "" ? this.value : 0) * parseFloat($("#input03_rate").attr("data-value")));
        total = PD_CALC.methods.getAddonResult(arr);
        if (this.value == "") {
            $("#input03_totals").html("");
        } else {
            $("#input03_totals").html(PD_CALC.methods.numberWithCommas(parseFloat(total).toFixed(2)));
        }
        PD_CALC.methods.setBaseTotal();
    })
    $("#input04").keyup(function () {
        var arr = [],
            total;
        arr.push(parseFloat($("#base-fee9").attr("data-value")));
        arr.push(parseFloat($("#dcp-fee9").attr("data-value")));
        arr.push(parseFloat($("#ad-fee9").attr("data-value")));
        arr.push(parseFloat(this.value != "" ? this.value : 0) * parseFloat($("#input03_rate").attr("data-value")));
        total = PD_CALC.methods.getAddonResult(arr);
        if (this.value == "") {
            $("#input04_totals").html("");
        } else {
            $("#input04_totals").html(PD_CALC.methods.numberWithCommas(parseFloat(total).toFixed(2)));
        }
        PD_CALC.methods.setBaseTotal();
    })
    $("#input05").keyup(function () {
        var minData = $("#input05_rate").attr("data-min"),
            rateVal = $("#input05_rate").attr("data-value"),
            dcpFee = $("#input05_DCP_fee").attr("data-value"),
            adFee = $("#input05_ad_fee").attr('data-value'),
            totalEle = $("#input05_total"),
            area = parseFloat(rateVal) * parseInt(this.value),
            finalValue = 0,
            arr = [];
        arr.push(parseFloat(dcpFee));
        arr.push(parseFloat(adFee));
        if (this.value == "")
            totalEle.html("")
        else if (area < parseFloat(minData))
            arr.push(parseFloat(minData))
        else
            arr.push(parseFloat(area))
        finalValue = PD_CALC.methods.getAddonResult(arr);
        $(totalEle).html(PD_CALC.methods.numberWithCommas(finalValue.toFixed(2)));
        PD_CALC.methods.setBaseTotal();
    })
    $("#input07,#input06").keyup(function () {
        var area = isNaN(parseInt($("#input06").val())) ? 0 : parseInt($("#input06").val()),
            dwellingUnits = isNaN(parseInt($("#input07").val())) ? 0 : parseInt($("#input07").val()),
            permFee = $("#input06_per_metre").attr("data-value"),
            minFee = $("#input06_min_fee").attr("data-value"),
            dRate = $("#input07_dRate").attr("data-value"),
            baseFee = $("#input07_base").attr("data-value"),
            dcpVal = $("#input07_dcp").attr("data-value"),
            adFee = $("#input07_ad").attr("data-value"),
            arr = [],
            calcArea = 0,
            dwellingFee = dwellingUnits * parseFloat(dRate),
            finalTotal;
        if (dwellingUnits && area && ((parseFloat(area) * parseFloat(permFee)) <= parseFloat(minFee)))
            calcArea = parseFloat(minFee);
        else if (dwellingUnits)
            calcArea = parseFloat(area) * parseFloat(permFee);
        arr.push(parseFloat(baseFee));
        arr.push(parseFloat(dcpVal));
        arr.push(parseFloat(adFee));
        arr.push(dwellingFee);
        arr.push(calcArea);
        finalTotal = PD_CALC.methods.getAddonResult(arr);
        $("#input07_total").html(PD_CALC.methods.numberWithCommas(finalTotal.toFixed(2)));
        if (!dwellingUnits)
            $("#input07_total").html("");
        PD_CALC.methods.setBaseTotal();
    });

    $(".multiForm").keyup(function () {
        var entVal = this.value,
            baseVal = $("#" + $(this).attr("id") + "_base").attr("data-value"),
            totalEle = $("#" + $(this).attr("id") + "_total");
        total = parseInt(entVal) * parseInt(baseVal);
        if (entVal == "")
            $(totalEle).html("");
        else
            $(totalEle).html(PD_CALC.methods.numberWithCommas(total.toFixed(2)));
        PD_CALC.methods.setBaseTotal();
    })
    $(baseFee_ele).on('DOMSubtreeModified', function () {
        var prevBPF = PD_CALC.methods.getNum($(this).html()),
            safetyRate = PD_CALC.methods.getNum($("#safety_fee_base").html()),
            min = PD_CALC.methods.getNum($("#safety_fee_base_min").attr("data-value")),
            max = PD_CALC.methods.getNum($("#safety_fee_base_max").attr("data-value")),
            newBPF = PD_CALC.methods.getBasePermitFeeDemolition(prevBPF, safetyRate / 100, min, max);
        $("#" + type + "_prev_BPT").html(PD_CALC.methods.numberWithCommas(parseFloat(prevBPF).toFixed(2))),
            $("#safety_fee_base_total").html(parseFloat(newBPF).toFixed(2));
        PD_CALC.additionalFeesObj.basePermit = parseFloat(prevBPF);
        PD_CALC.additionalFeesObj.safetyCouncilBase = parseFloat(newBPF);
        if (type == "new_home") {
            PD_CALC.additionalFeesObj.water = parseFloat($("#water_fee").attr("data-value")).toFixed(2)
            $("#water_fee_total").html($("#water_fee").attr("data-value"));
        };
    });

    $(PartialP_ele).keyup(function () {
        if (type == 'commercial') {
            if ($(input_ele).val() == "")
                PD_CALC.methods.calcBasePermitStep("0.00", type);
        } else {
            if ($('.step1-final-total').html() == "")
                $('.step1-final-total').html("0.00");
        }
        var ppfInput = isNaN(this.value) ? 0 : this.value,
            rate = isNaN($("#" + type + "_partial_permit_rate").attr("data-value")) ? 0 : $("#" + type + "_partial_permit_rate").attr("data-value"),
            totalEle = $("#" + type + "_partial_permit_total"),
            min = $("#" + type + "_partial_permit_min").attr("data-min"),
            max = $("#" + type + "_partial_permit_min").attr("data-max"),
            min2, max2, rate2, total2;
        total = PD_CALC.methods.getBasePermitFeeDemolition(parseFloat(ppfInput), parseFloat(rate), parseFloat(min), parseFloat(max));
        if (!isNaN(total))
            $(totalEle).html(PD_CALC.methods.numberWithCommas(parseFloat(total).toFixed(2)));
        else
            $(totalEle).html("");
        $("#" + type + "_PPF_total").html(PD_CALC.methods.numberWithCommas(parseFloat(total).toFixed(2)));
        min2 = $("#safety_fee_partial_min").attr("data-min"),
            max2 = $("#safety_fee_partial_min").attr("data-max"),
            rate2 = $("#safety_fee_partial_rate").attr("data-value"),
            total2 = PD_CALC.methods.getBasePermitFeeDemolition(parseFloat(total), parseFloat(rate2) / 100, parseFloat(min2), parseFloat(max2));
        $("#safety_fee_partial_total").html(isNaN(total2) ? 0 : PD_CALC.methods.numberWithCommas(parseFloat(total2).toFixed(2)));
        PD_CALC.additionalFeesObj.partialPermit = parseFloat(total);
        PD_CALC.additionalFeesObj.safetyCouncilPart = parseFloat(total2);
    });

    $("#lot_grading_input").keyup(function () {
        if (type == 'commercial') {
            if ($(input_ele).val() == "")
                PD_CALC.methods.calcBasePermitStep("0.00", type);
        } else {
            if ($('.step1-final-total').html() == "")
                $('.step1-final-total').html("0.00");
        }
        var lotInput = parseFloat(this.value),
            rate = parseFloat($("#lot_grading_rate_value").attr("data-value"));
        total = lotInput * rate;
        if (this.value != "") {
            $("#lot_grading_total_value").html(PD_CALC.methods.numberWithCommas(parseFloat(total).toFixed(2)));
        } else {
            $("#lot_grading_total_value").html("")
        }
        PD_CALC.additionalFeesObj.lotGrading = total;
    })
    $("#partial_permit_checkbox").change(function () {
        var checked = false,
            partialPermit = $("#partial_permit_F2").attr("data-value"),
            step1Val = $('.step1-final-total').html();
        if ($(this).is(":checked"))
            $(this).attr("checked", true);
        checked = $(this).is(':checked');
        if (checked) {
            if (step1Val == "")
                $('.step1-final-total').html("0.00")
            $("#partial_permit_totalF2").html(PD_CALC.methods.numberWithCommas(parseFloat(partialPermit).toFixed(2)));
            PD_CALC.additionalFeesObj.partialPermit = parseFloat(partialPermit);
            PD_CALC.additionalFeesObj.water = parseFloat($("#water_fee").attr("data-value")).toFixed(2)
            $("#water_fee_total").html($("#water_fee").attr("data-value"));
        } else {
            $("#partial_permit_totalF2").html("");
            PD_CALC.additionalFeesObj.partialPermit = 0;
            PD_CALC.additionalFeesObj.water = 0;
            $("#water_fee_total").html("");
        }
    })
    $(".pmv").keyup(function () {
        if ($(this).attr("data-feeType") == "other") {
            other = parseFloat(this.value);
            $('#other_total').html(parseFloat(other).toFixed(2));
            PD_CALC.methods.caclStep1Total();
        } else {
            var input = PD_CALC.methods.getNum(this.value),
                rate = PD_CALC.methods.getNum($(this).attr("data-rate")),
                totalEle = document.getElementById($(this).attr("data-feeType") + "_total");
            if (this.value == "")
                $(totalEle).html("");
            else
                $(totalEle).html(PD_CALC.methods.numberWithCommas(parseFloat(input * rate).toFixed(2)));
            PD_CALC.methods.caclStep1Total();
        }
    });
    $(".step1-final-total").on('DOMSubtreeModified', function () {
        if (round == undefined || round == "undefined")
            $(".baseFeePrevTotal").html(PD_CALC.methods.numberWithCommas($(this).html()))
        else
            $(".baseFeePrevTotal").html(PD_CALC.methods.numberWithCommas(parseFloat(Math.ceil(PD_CALC.methods.getNum($(this).html()) / round) * round).toFixed(2)));
        PD_CALC.methods.calcBasePermitStep(PD_CALC.methods.getNum($(this).html()), type);
    });
    $(".type3").change(function () {
        var checked = false,
            id = $(this).attr("id"),
            PMVele = $(".step1-final-total");
        if ($(this).is(":checked"))
            $(this).attr("checked", true);
        checked = $(this).is(':checked');
        if (checked) {
            if (id.indexOf("ground") > -1) {
                ground_checkbox = PD_CALC.methods.getNum($("#" + id + "_rate").html());
                gst = gst + parseFloat(ground_checkbox).toFixed(2) * 0.05;
                $("#" + id + "_total").html(ground_checkbox);
            } else if (id.indexOf("temp_heat") > -1) {
                temp_checkbox = PD_CALC.methods.getNum($("#" + id + "_rate").html());
                gst = gst + parseFloat(ground_checkbox).toFixed(2) * 0.05;
                $("#" + id + "_total").html(temp_checkbox);
            } else {
                hydronic_heat = PD_CALC.methods.getNum($("#" + id + "_rate").html());
                gst = gst + parseFloat(ground_checkbox).toFixed(2) * 0.05;
                $("#" + id + "_total").html(hydronic_heat);
            }
        } else {
            if (id.indexOf("ground") > -1) {
                gst = gst - (ground_checkbox * 0.05);
                ground_checkbox = 0;

            } else if (id.indexOf("temp_heat") > -1) {
                gst = gst - (temp_checkbox * 0.05);
                temp_checkbox = 0;

            } else {
                gst = gst - (temp_checkbox * 0.05);
                hydronic_heat = 0

            }
            $("#" + id + "_total").html("");
        }

        if (PMVele.html() == "") {
            $(PMVele).html(0);
            PD_CALC.methods.calcBasePermitStep(0.00, "new_home");
        } else {
            PD_CALC.methods.calcBasePermitStep(parseFloat(PD_CALC.methods.getNum(PMVele.html())), "new_home");
        }
    })
    $(".lowRiseInput").keyup(function () {
        var id = $(this).attr("id"),
            rate = PD_CALC.methods.getNum($("#" + id + "_rate").html()),
            totalEle = $("#" + id + "_total"),
            total;
        if (this.value != "") {
            total = rate * parseFloat(this.value);
            PD_CALC.additionalFeesObj.lotGrading = total;

            if ($(this).attr("id") == "lot_grading2_input")
                $(totalEle).html(parseFloat(total + parseFloat($(this).attr('data-extra'))).toFixed(2));
            else $(totalEle).html(parseFloat(total).toFixed(2));
        } else {
            $(totalEle).html("")
            PD_CALC.additionalFeesObj.lotGrading = 0;
        }
        if ($(".step1-final-total").html() == "")
            $(".step1-final-total").html(0)
    })
    $(document).on('change', '#units', function () {
        PD_CALC.methods.changeUnits(this.value, true);
    });
    $(".switch-view-draft").click(function(){
        var pagePath = $(this).attr("data-pagePath")+PD_CALC.constants.nodePath;
        PD_CALC.methods.callajax(pagePath,"draft");
    })
    $(".switch-view-live").click(function(){
        var pagePath = $(this).attr("data-pagePath")+PD_CALC.constants.nodePath;
        PD_CALC.methods.callajax(pagePath,"live");
    })

}