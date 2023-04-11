const labels = jsonfile1.jsonarray.map(function (e) {
    return e.label;
});
const datapoints = jsonfile1.jsonarray.map(function (e) {
    return e.temp;
});
const datapoints2 = jsonfile2.jsonarray.map(function (e) {
    return e.temp;
});

var options = {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: 'FirstSeries',
                data: datapoints
            },
            {
                label: 'SecondSeries',
                data: datapoints2
            }
        ]
    },
    options: {
        animation: {
            duration: 1,
            onProgress: function() {
                for(i = 0; i < 1; i++){
                    console.log('animation started');
                    window.localStorage.setItem("start", performance.now());
                }              
            },
            onComplete: function() {
                window.localStorage.setItem("end", performance.now());
                console.log('animation finished');
            }
        }
    }
}

const chartContent = new Chart(document.getElementById('myChart'), options);