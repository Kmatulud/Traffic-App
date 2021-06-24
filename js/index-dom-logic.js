var usernameElem = document.querySelector('#user');
var routesElem = document.querySelector('#options');
var timeElem = document.querySelector("#time");
var dateElem = document.querySelector('#day');
var buttonElem = document.querySelector('.button');
var clearBtn = document.querySelector('.clear');

var array = localStorage.getItem("arr") || [];
buttonElem.addEventListener("click", function(e){

    e.preventDefault();
    var day = new Date(dateElem.value).getDay();
    var daysOFWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var each = routesElem.options[routesElem.selectedIndex].value;
    array.push(usernameElem.value);
    array.push(each);
    array.push(timeElem.value);
    array.push(dateElem.value);
    array.push(daysOFWeek[day]);
    localStorage.setItem("arr", array);
    localStorage.getItem("arr");

    usernameElem.value = "";

    console.log(each, usernameElem.value, timeElem.value, dateElem.value);
})
clearBtn.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})