// const labels = jsonfile1.jsonarray.map(function(e) {
//     return e.label;
//  });
const datapoints = jsonfile1.jsonarray.map(function(e) {
    return e.Anomaly;
 });
const datapoints2 = jsonfile2.jsonarray.map(function(e) {
    return e.Anomaly;
});
const datapoints3 = jsonfile3.jsonarray.map(function (e) {
    return e.Anomaly;
});

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
        },{
            name: 'SecondSeries',
            data: datapoints2
        },{
            name: 'ThirdSeries',
            data: datapoints3
        }
    ],
    xaxis: {
        categories: ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();