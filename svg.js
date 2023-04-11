const labels = jsonfile1.jsonarray.map(function(e) {
    return e.label;
 });
const datapoints = jsonfile1.jsonarray.map(function(e) {
    return e.temp;
 });
const datapoints2 = jsonfile2.jsonarray.map(function(e) {
    return e.temp;
});
const datapoints3 = jsonfile3.jsonarray.map(function (e) {
    return e.temp;
});

var options = {
    chart: {
        type: 'line',
        events: {
            updated: function() {
                console.log('animation started');
                window.localStorage.setItem("start", performance.now());
            },
            animationEnd: function() {
                window.localStorage.setItem("end", performance.now());
                console.log('animation finished');
            }
        }
    },
    series: [
        {
            name: 'FirstSeries',
            data: datapoints
        },{
            name: 'SecondSeries',
            data: datapoints2
        },{
            name: 'ThirdSeries',
            data: datapoints3
        }
    ],
    xaxis: {
        categories: labels
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();