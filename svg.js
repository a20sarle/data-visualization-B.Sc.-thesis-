const allLabels = HadCRUT5.jsonarray.map(function(e) {
    return e.Time;
});
const allTemp = HadCRUT5.jsonarray.map(function(e) {
    return e.Anomaly;
});

// Change value of 'months' to set quantity of datapoints.
// Set according to: Total amount of datapoints divided by the number of lines to be used.

// Baseline = 100
// Group 1 (small) = 1000
// Group 1 (medium) = 10 000
// Group 2 (big) = 100 000

var months = 100/2;
let startingNum = 0;
function getValue(){
    startingNum++;
    let value = startingNum * months;
    return value;
}

var labels = allLabels.slice(startingNum,months);
// Add groups of data below
var datapoints = allTemp.slice(startingNum,months);
var datapoints2 = allTemp.slice(getValue(), getValue());

console.log(months+" datap. * "+(startingNum/2+1)+" line = "+months*(startingNum/2+1)+" datap. in tot.");

var startNow;
var endNow;
var elapsed;
var i = 0;

const lastDataserie = [];
labels.forEach(getValues);
function getValues(){
    lastDataserie.push(0);
}

var options = {
    chart: {
        type: 'line',
        animations: {
            speed: 1,
        },
        events: {
            updated: function() {
                i++;
                console.log("Started - "+i);
                startNow = performance.now(); 
            },
            animationEnd: function() {
                endNow = performance.now();

                elapsed = (endNow - startNow).toFixed(2);
                window.localStorage.setItem("elapsed", elapsed);

                console.log(elapsed+'ms');

                window.localStorage.setItem("done", true);

                // let start = window.localStorage.getItem("start");
                // let end = window.localStorage.getItem("end");
                // console.log((end - start).toFixed(2));
            }
        }
    },
    series: [
        {
            name: 'FirstSeries',
            data: datapoints
        },
        {
            name: 'SecondSeries',
            data: datapoints2
        },
        {
            name: 'ThirdSeries',
            data: lastDataserie
        }
    ],
    xaxis: {
        categories: labels
    },
    yaxis: {
        min: -0.8,
        max: 0.2,
        tickAmount: 6,
        labels: {
            formatter: function (val) {
                return val.toFixed(1);
            }
        }
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();