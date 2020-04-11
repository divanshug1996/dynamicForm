"use strict";
use(["structure-content.js", "planning-app.js"], function (formsJson, planningAppJson) {
    log.debug("value from planning app is ::" + planningAppJson.DP.dates["draft_available"])
    var formType = properties.get("formType", ""),
        calcJson,
        view = {},
        isLive;
        log.debug(formType)
    function checkDates(dates) {
        var q = new Date(),
            m = q.getMonth(),
            d = q.getDate(),
            y = q.getFullYear(),
            today = new Date(y, m, d),
            draftAvailable = new Date(dates.draft_available),
            draftEffective = new Date(dates.draft_effective);

        today.setHours(0, 0, 0, 0);
        draftAvailable.setHours(24, 0, 0, 0);
        draftEffective.setHours(24, 0, 0, 0);

        // if today is after the date that Draft Calculators are available (draft_available)
        if (today.valueOf() < draftEffective.valueOf()) {
            // if today is before the date that Draft Calculators are in Effect (draft_effective)... show the buttons.
            // if (today.valueOf() >= draftAvailable.valueOf()) {
            //     showDateButtons(draftEffective);
            //     dateButtonListeners();
            // }
            return true; // show live calculator
        } else {
            return false; // show draft calculator
        }
    }
    if (formType == "planningApp") {
        calcJson = planningAppJson.DP 
        isLive = checkDates(calcJson.dates)
    } else {
        calcJson = formsJson[formType]
        isLive = checkDates(calcJson.config.dates) 
    }
    
    if (isLive) {
        view = calcJson.live;
    } else {
        view = calcJson.draft;
    }
    view.config = calcJson.config;
    return view;
})