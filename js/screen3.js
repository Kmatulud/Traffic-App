// var labels = []
// var datab = []
// var map = {}
// var data = JSON.parse(localStorage.getItem("strObj"));
// data.forEach(val => {
//     //   labels.push(val.Day)
//     //   datab.push(val.Duration)
//     ////
//     if (map.hasOwnProperty(val.Route)) {

//     } else {
//         if (undefined == val.Route) {
//             console.log("undefined")
//         } else {
//             map[val.Route] = 0;
//         }
//     }
// });
// data.forEach(val => {
//     ////
//     for (const key in map) {
//         if (key == val.Route) {
//             var duration = parseFloat(val.Duration)
//             map[key] = map[key] + duration
//         }
//     }
// });
// for (const key in map) {
//     labels.push(key)
//     datab.push(map[key])
// }

////-----map data
const list = JSON.parse(localStorage['strObj']);
const durationsForRoutes = list.reduce((map, routeData) => {
    if (!map[routeData.Route]) {
        map[routeData.Route] = [];
    }
    map[routeData.Route].push(Number(routeData.Duration));
    return map;
}, {});
let routeAverages = Object
    .keys(durationsForRoutes)
    .map(key => {
        const durations = durationsForRoutes[key];
        const total = durations.reduce((totalDuration, duration) => {
            totalDuration += duration;
            return totalDuration;
        }, 0)
        const average = total / durations.length
        return {
            route: key,
            average: Number(average.toFixed(2))
        }
    });
const keys = routeAverages.map(routeData => routeData.route);
const totals = routeAverages.map(routeData => routeData.average);
console.log(keys, totals)
    // plug  keys and totals into your graph...
    ////-----
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: keys,
        datasets: [{
            label: 'Daily Trip Duration (minutes)',
            data: totals,
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