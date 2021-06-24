var labels = []
var datab = []
var data = JSON.parse(localStorage.getItem("strObj"));
data.forEach(val => {
    labels.push(val.Day)
    datab.push(val.Duration)
})
console.log(labels, data)
    ////-----
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Daily Trip Duration',
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