var labels = []
var datab = []
var map = {}
var data = JSON.parse(localStorage.getItem("strObj"));
data.forEach(val => {
    //   labels.push(val.Day)
    //   datab.push(val.Duration)
    ////
    if (map.hasOwnProperty(val.Route)) {

    } else {
        if (undefined == val.Route) {
            console.log("undefined")
        } else {
            map[val.Route] = 0;
        }
    }
});
data.forEach(val => {
    ////
    for (const key in map) {
        if (key == val.Route) {
            var duration = parseFloat(val.Duration)
            map[key] = map[key] + duration
        }
    }
});
for (const key in map) {
    labels.push(key)
    datab.push(map[key])
}


////-----
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Daily Trip Duration (minutes)',
            data: datab,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});