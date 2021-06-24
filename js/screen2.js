document.addEventListener('DOMContentLoaded', function() {
    // get a reference to the template script tag
    // compile the template
    // pass the data into the template & get the HTML back
    // get a reference to the element in the DOM where we would like to display the data
    // put the resulting HTML into the target elements innerHTML
    var data = JSON.parse(localStorage.getItem("strObj"));
    var last = data[data.length - 1]
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);
    var userDataElem = document.querySelector(".add");

    // use the compiled the template
    var userDataHTML = userTemplate({
        name: last.name,
        route: last.Route,
        duration: last.Duration
    });
    userDataElem.innerHTML = userDataHTML;

});