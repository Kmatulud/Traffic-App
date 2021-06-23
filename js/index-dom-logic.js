var usernameElem = document.querySelector('#user');
var locationElem = document.querySelector('#location');
var destinationElem = document.querySelector('#destination');
var dateElem = document.querySelector('#day');
var buttonElem = document.querySelector('.button');
var clearBtn = document.querySelector('.clear');

buttonElem.addEventListener("click", function(){
    var array = localStorage.getItem("arr") || [];
    array.push(usernameElem.value);
    array.push(locationElem.value);
    array.push(destinationElem.value);
    array.push(dateElem.value);
    localStorage.setItem("arr", array);
    localStorage.getItem("arr");

    usernameElem.value = "";
    destinationElem.value = "";
    locationElem.value = "";
})
clearBtn.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})