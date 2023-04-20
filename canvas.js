const allLabels = HadCRUT5.jsonarray.map(function(e) {
    return e.Time;
});
const allTemp = HadCRUT5.jsonarray.map(function(e) {
    return e.Anomaly;
});

// Change numYears to set how many years to use during measurements
var numYears = 40;
var numMonths = 12*numYears;
var labels = allLabels.slice(0,numMonths);
// Add groups of data below
var datapoints = allTemp.slice(0,numMonths);
var datapoints2 = allTemp.slice(numMonths, numMonths*2);

const lastDataserie = [];
datapoints.forEach(getValues);
function getValues(){
    lastDataserie.push(0);
}

var startNow;
var endNow;

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
                // console.log('animation started');
                startNow = performance.now();
                window.localStorage.setItem("start", startNow); 
            },
            onComplete: function() {
                endNow = performance.now();
                window.localStorage.setItem("end", endNow);
                // console.log('animation finished');

                // let start = window.localStorage.getItem("start");
                // let end = window.localStorage.getItem("end");
                console.log((endNow - startNow).toFixed(2)+", from canvas.js");
            }
        }
    }
}

const chartContent = new Chart(document.getElementById('myChart'), options);