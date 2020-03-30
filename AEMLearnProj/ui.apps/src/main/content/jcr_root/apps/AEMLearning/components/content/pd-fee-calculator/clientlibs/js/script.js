const PD_CALC = {};
PD_CALC.constants = {};
PD_CALC.glob = {};
PD_CALC.methods = {};
PD_CALC.events = {};
PD_CALC.methods.logics = {};
PD_CALC.methods.utils = {};

PD_CALC.glob.formName = "";
PD_CALC.constants.CLASS_getFormType = '.pd-formType';
PD_CALC.constants.ATTR_getFormType = "data-form-name";
PD_CALC.methods.getBasePermitFeeStd = function (PMV, rfactor, rate, dFactor = 0) {
    console.log(PMV, rfactor, rate, dFactor);
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

PD_CALC.methods.numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
$(document).ready(function () {
    PD_CALC.glob.formName = $(PD_CALC.constants.CLASS_getFormType).attr(PD_CALC.constants.ATTR_getFormType);
    PD_CALC.events.init(PD_CALC.glob.formName);
})

PD_CALC.events.init = function (type) {
    var input_ele = '#' + type + '_input',
        rate_ele = '#' + type + '_rate',
        pf_ele = '#' + type + '_min_processing_fee',
        pfTotal_ele = '#' + type + '_min_processing_fee_total',
        baseFee_ele = '#' + type + '_base-fee',
        PMVTotal_ele = '#' + type + '_permit_rate_total'

    $('input').keypress(function (e) {
        PD_CALC.methods.isNumeric(e);
    });
    $(input_ele).keyup(function (e) {
        var rate = parseFloat($(rate_ele).html()),
            dFactor = parseInt($(rate_ele).attr('data-attr-dfactor')),
            procFee = $(pf_ele).html(),
            total;

        if(type == "demolition"){
            total = PD_CALC.methods.getBasePermitFeeDemolition(parseInt(this.value),rate,112,4665)
        }else{
            total = PD_CALC.methods.getBasePermitFeeStd(parseInt(this.value), 100, rate, dFactor) == "NaN" ? 0 : PD_CALC.methods.getBasePermitFeeStd(parseInt(this.value), 100, rate, dFactor);
        }
        $(PMVTotal_ele).html(total);
        $(pfTotal_ele).html($(pf_ele).html());
        $(baseFee_ele).html(PD_CALC.methods.numberWithCommas(parseFloat(total) + parseFloat(procFee)));
    });
}
