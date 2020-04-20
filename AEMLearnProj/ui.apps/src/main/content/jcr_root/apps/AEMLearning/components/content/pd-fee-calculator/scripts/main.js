    "use strict";
    use(["structure-content.js", "planning-app.js"], function (formsJson, planningAppJson) {
        var formType = properties.get("formType", "") == '' ? 'commercial' : properties.get("formType", ""),
            viewType = properties.get("switchView",""),
            buttonText ="",
            calcJson,
            view = {},
            isLive, showButton= "false";
            log.debug("The view type is :: "+viewType)
            
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
                if (today.valueOf() >= draftAvailable.valueOf()) {
                    showButton = "true";  
                    buttonText = getButtonText(draftEffective);
                    log.info("button text is :: "+buttonText)
                }
                return true; // show live calculator
            } else {
                return false; // show draft calculator
            }
        }
        function getButtonText(date) {
            var monthText = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
                month = monthText[date.getMonth()],
                day = date.getDate(),
                year = date.getFullYear(),
                date = month + ' ' + day + ', ' + year;
                return 'Calculator Effective ' + date;
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
        if(viewType !="" && viewType =="draft" && showButton == "true")
        view = calcJson.draft;
        else if(viewType !="" && viewType == "live" && showButton == "true")
        view = calcJson.live;
        log.debug("showButton : : "+showButton)
        if(formType != "planningApp"){
            view.config = calcJson.config;
            view.config.showButton = showButton;
            view.config.buttonText = buttonText;
        }else{
            view.config ={};
            view.config.showButton = showButton;
            view.config.buttonText = buttonText;
        }
        return view;
    })