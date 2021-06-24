var usernameElem = document.querySelector("#user");
var routesElem = document.querySelector("#options");
var timeElem = document.querySelector("#time");
var dateElem = document.querySelector("#day");
var buttonElem = document.querySelector(".button");
var clearBtn = document.querySelector(".clear");
//elemenyts

buttonElem.addEventListener("click", function(e) {
    var newArray = [];
    ////global variables
    var day = new Date(dateElem.value).getDay();
    var daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    ///list for week
    var each = routesElem.options[routesElem.selectedIndex].value;

    if (localStorage.getItem("strObj") !== null) {
        var local = JSON.parse(localStorage.getItem("strObj"));
        var full = {
                name: usernameElem.value,
                Route: routesElem.value,
                Duration: timeElem.value,
                Date: dateElem.value,
                Day: daysOfWeek[day],
            }
            // local.push({ Name: usernameElem.value });
            // local.push({ Route: routesElem.value });
            // local.push({ Duration: timeElem.value });
            // local.push({ Date: dateElem.value });
            // local.push({ Day: daysOfWeek[day] });
            // ////adding id to our obj
            // local.push({ id: day });
        local.push(full)
        JSON.stringify(local);
        var strObj = JSON.stringify(local);
        localStorage.setItem("strObj", strObj);
        var newArray = ([].length = 0);
    } else {
        // newArray.push({ Name: usernameElem.value });
        // newArray.push({ Route: routesElem.value });
        // newArray.push({ Duration: timeElem.value });
        // newArray.push({ Date: dateElem.value });
        // newArray.push({ Day: daysOfWeek[day] });
        // newArray.push({ id: day });
        var full = {
            name: usernameElem.value,
            Route: routesElem.value,
            Duration: timeElem.value,
            Date: dateElem.value,
            Day: daysOfWeek[day],
        }
        newArray.push(full)
        JSON.stringify(newArray);
        var strObj = JSON.stringify(newArray);
        localStorage.setItem("strObj", strObj);
        var newArray = ([].length = 0);
    }

    usernameElem.value = "";
    // console.log(each, usernameElem.value, timeElem.value, dateElem.value);
});
clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});