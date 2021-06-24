var usernameElem = document.querySelector("#user");
var routesElem = document.querySelector("#options");
var timeElem = document.querySelector("#time");
var dateElem = document.querySelector("#day");
var buttonElem = document.querySelector(".button");
var clearBtn = document.querySelector(".clear");

var array = localStorage.getItem("arr") || [];
var data;
buttonElem.addEventListener("click", function (e) {
	var newArray = [];

	e.preventDefault();
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

	var each = routesElem.options[routesElem.selectedIndex].value;

	if (localStorage.getItem("strObj") !== null) {
		var local = JSON.parse(localStorage.getItem("strObj"));
		local.push({ Name: usernameElem.value });
		local.push({ Route: routesElem.value });
		local.push({ Duration: timeElem.value });
		local.push({ Date: dateElem.value });
		local.push({ Day: daysOfWeek[day] });

		JSON.stringify(local);
		var strObj = JSON.stringify(local);
		localStorage.setItem("strObj", strObj);
		var newArray = ([].length = 0);
	} else {
		newArray.push({ Name: usernameElem.value });
		newArray.push({ Route: routesElem.value });
		newArray.push({ Duration: timeElem.value });
		newArray.push({ Date: dateElem.value });
		newArray.push({ Day: daysOfWeek[day] });

		JSON.stringify(newArray);
		var strObj = JSON.stringify(newArray);
		localStorage.setItem("strObj", strObj);
		var newArray = ([].length = 0);
	}

	array.push(usernameElem.value);
	array.push(each);
	array.push(timeElem.value);
	array.push(dateElem.value);
	array.push(daysOfWeek[day]);
	localStorage.setItem("arr", array);
	localStorage.getItem("arr");

	usernameElem.value = "";
    data = JSON.parse(localStorage.getItem("strObj"));
    
	// console.log(each, usernameElem.value, timeElem.value, dateElem.value);
});
clearBtn.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});
