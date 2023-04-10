// Setup - sets values for labels and datapoints
const labels = jsonfile1.jsonarray.map(function (e) {
    return e.label;
});
const datapoints = jsonfile1.jsonarray.map(function (e) {
    return e.temp;
});

const labels2 = jsonfile1.jsonarray.map(function (e) {
    return e.label;
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
            onProgress: function(animation) {
                for(i = 0; i < 1; i++){
                    window.localStorage.setItem("start", performance.now());
                    //console.log('Render in progress!');
                }                
            },
            onComplete: function() {
                window.localStorage.setItem("end", performance.now());
                //console.log('Render complete!');
            }
        }
    }
}

const chartContent = new Chart(document.getElementById('myChart'), options);