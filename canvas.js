// const labels = jsonfile1.jsonarray.map(function (e) {
//     return e.label;
// });
const datapoints = jsonfile1.jsonarray.map(function (e) {
    return e.Anomaly;
});
const datapoints2 = jsonfile2.jsonarray.map(function (e) {
    return e.Anomaly;
});
const datapoints3 = jsonfile3.jsonarray.map(function (e) {
    return e.Anomaly;
});

const datapoints4 = jsonfile4.jsonarray.map(function(e) {
    return e.Anomaly;
});
const datapoints5 = jsonfile5.jsonarray.map(function (e) {
    return e.Anomaly;
});

var options = {
    type: "line",
    data: {
        labels: ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],
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
                label: 'extra1',
                data: datapoints4
            },
            {
                label: 'extra2',
                data: datapoints5
            },
            {
                label: 'ThirdSeries',
                data: datapoints3
            }
        ]
    },
    options: {
        animation: {
            duration: 1,
            onProgress: function() {
                for(i = 0; i < 1; i++){
                    console.log('animation started');
                    window.localStorage.setItem("start", performance.now());
                }              
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