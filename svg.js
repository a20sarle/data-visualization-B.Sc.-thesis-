var jsonfile = {
    "jsonarray":
    [{
        "label": "Arctic",
        "temp": 30
    }, {
        "label": "North Atlantic",
        "temp": 40
    }, {
        "label": "South Atlantic",
        "temp": 45
    },{
        "label": "Indian",
        "temp": 50
    },{
        "label": "North Pacific",
        "temp": 49
    },{
        "label": "South Pacific",
        "temp": 60
    },{
        "label": "Southern",
        "temp": 70
    }]
};

const labels = jsonfile.jsonarray.map(function(e) {
    return e.label;
 });
const datapoints = jsonfile.jsonarray.map(function(e) {
    return e.temp;
 });

var options = {
    chart: {
        type: 'line'
    },
    series: [{
        name: 'Values',
        data: datapoints
    }],
    xaxis: {
        categories: labels
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();