var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'Values',
        data: [30,40,45,50,49,60,70]
    }],
    xaxis: {
        categories: ["Arctic", "North Atlantic", "South Atlantic", "Indian", "North Pacific", "South Pacific", "Southern"]
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();