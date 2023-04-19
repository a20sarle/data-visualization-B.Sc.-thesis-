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
    chart: {
        type: 'line',
        animations: {
            speed: 1,
        },
        events: {
            updated: function() {
                console.log('animation started');
                window.localStorage.setItem("start", performance.now());
            },
            animationEnd: function() {
                window.localStorage.setItem("end", performance.now());
                console.log('animation finished');

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
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();