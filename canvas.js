const allLabels = HadCRUT5.jsonarray.map(function(e) {
    return e.Time;
});
const allTemp = HadCRUT5.jsonarray.map(function(e) {
    return e.Anomaly;
});

var labels = allLabels.slice(0,36);
var datapoints = allTemp.slice(0,36);
var datapoints2 = allTemp.slice(36,72);

const lastDataserie = [];
datapoints.forEach(getValues);
function getValues(){
    lastDataserie.push(0);
}

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
            },
            {
                label: 'ThirdSeries',
                data: lastDataserie
            }
        ]
    },
    options: {
        animation: {
            duration: 1,
            onProgress: function() {
                console.log('animation started');
                window.localStorage.setItem("start", performance.now());          
            },
            onComplete: function() {
                window.localStorage.setItem("end", performance.now());
                console.log('animation finished');

                // let start = window.localStorage.getItem("start");
                // let end = window.localStorage.getItem("end");
                // console.log((end - start).toFixed(2));
            }
        }
    }
}

const chartContent = new Chart(document.getElementById('myChart'), options);