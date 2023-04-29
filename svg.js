const allLabels = HadCRUT5.jsonarray.map(function(e) {
    return e.Time;
});
const allTemp = HadCRUT5.jsonarray.map(function(e) {
    return e.Anomaly;
});

// Change numYears to set how many years to use during measurements
var numYears = 86;
var numDatapoints = 12*numYears;
var labels = allLabels.slice(0,numDatapoints);
// Add groups of data below
var datapoints = allTemp.slice(0,numDatapoints);
var datapoints2 = allTemp.slice(numDatapoints, numDatapoints*2);

// Used for increasing lines by splitting datapoints
// var datapoints3 = allTemp.slice(numDatapoints*2, numDatapoints*2+180);
// var datapoints4 = allTemp.slice(numDatapoints*2*2, numDatapoints*2*2+180);

var startNow;
var endNow;
var elapsed;

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
                console.log("Started");
                startNow = performance.now(); 
            },
            animationEnd: function() {
                endNow = performance.now();

                elapsed = (endNow - startNow).toFixed(2);
                window.localStorage.setItem("elapsed", elapsed);

                console.log(elapsed+'ms');

                console.log(elapsed+", finished");

                console.log(window.localStorage.getItem("ready"));
                window.localStorage.setItem("ready", true);
                console.log(window.localStorage.getItem("ready"));

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
        // {
        //     name: 'new',
        //     data: datapoints3
        // },
        // {
        //     name: 'new2',
        //     data: datapoints4
        // },
        {
            name: 'ThirdSeries',
            data: lastDataserie
        }
    ],
    xaxis: {
        categories: labels
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();