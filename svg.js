const labels = jsonfile1.jsonarray.map(function(e) {
    return e.label;
 });
const datapoints1 = jsonfile1.jsonarray.map(function(e) {
    return e.temp;
 });
 const datapoints2 = jsonfile2.jsonarray.map(function(e) {
    return e.temp;
 });

var options = {
    chart: {
        type: 'line',
        events: {
            updated: function() {
                console.log("updated");
            },
            animationEnd: function() {
                console.log("animationEnd");
            }
        }
    },
    series: [
        {
            name: 'FirstSeries',
            data: datapoints1
        },{
            name: 'SecondSeries',
            data: datapoints2
        }
    ],
    xaxis: {
        categories: labels
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();