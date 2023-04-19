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

const datapoints4 = datapoints.slice(6,12);
const datapoints5 = datapoints2.slice(6,12);
const datapoints6 = datapoints.slice(0,6);
const datapoints7 = datapoints2.slice(0,6)
const datapoints8 = datapoints3.slice(0,6)

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
            data: datapoints4
        },{
            name: 'SecondSeries',
            data: datapoints5
        },{
            name: 'extra1',
            data: datapoints6
        },{
            name: 'extra2',
            data: datapoints7
        },{
            name: 'ThirdSeries',
            data: datapoints8
        }
    ],
    xaxis: {
        categories: ["Jan","Feb","Mar","Apr","Maj","Jun"]
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();