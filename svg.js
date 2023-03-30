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
        type: 'line'
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


let button1 = document.getElementById("btnShow1");
button1.addEventListener('click', function () {
    updateTheData('FirstSeries');
});

let button2 = document.getElementById("btnShow2");
button2.addEventListener('click', function () {
    updateTheData('SecondSeries');
});

function updateTheData(data){
    chart.toggleSeries(data);
}