function lastIndex() {
    var data = JSON.parse(localStorage.getItem("strObj"));
    var last = data[data.length - 1]
    var span1 = document.querySelector(".name");
    var routetT = document.querySelector(".route");
    var dura = document.querySelector(".duration");
    span1.innerHTML = last.name
    routetT.innerHTML = last.Route
    dura.innerHTML = last.Duration
}
lastIndex()