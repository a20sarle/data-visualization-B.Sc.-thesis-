const allLabels = HadCRUT5.jsonarray.map(function(e) {
    return e.Time;
});
const allTemp = HadCRUT5.jsonarray.map(function(e) {
    return e.Anomaly;
});

// Change numYears to set how many years to use during measurements
var numYears = 30; // << new baseline
var numDatapoints = 12*numYears;
var labels = allLabels.slice(0,numDatapoints);
// Add groups of data below
var datapoints = allTemp.slice(0,numDatapoints);
var datapoints2 = allTemp.slice(numDatapoints, numDatapoints*2);

// console.log(labels);

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