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

const datapoints4 = datapoints.slice(6,12);
const datapoints5 = datapoints2.slice(6,12);
const datapoints6 = datapoints.slice(0,6);
const datapoints7 = datapoints2.slice(0,6)
const datapoints8 = datapoints3.slice(0,6)

var options = {
    type: "line",
    data: {
        labels: ["Jan","Feb","Mar","Apr","Maj","Jun"],
        datasets: [
            {
                label: 'FirstSeries',
                data: datapoints4
            },
            {
                label: 'SecondSeries',
                data: datapoints5
            },
            {
                label: 'extra1',
                data: datapoints6
            },
            {
                label: 'extra2',
                data: datapoints7
            },
            {
                label: 'ThirdSeries',
                data: datapoints8
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