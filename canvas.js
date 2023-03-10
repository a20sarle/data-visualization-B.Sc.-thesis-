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

// Setup - sets values for labels and datapoints
const labels = jsonfile.jsonarray.map(function(e) {
    return e.label;
 });
const datapoints = jsonfile.jsonarray.map(function(e) {
    return e.temp;
 });

// Config - used to change how the chart behaves
const dataObj = {
    labels: labels,
    datasets: [
        {
            label: "Values",
            data: datapoints
        }
    ]
}

var chartArea = document.getElementById('myChart');
new Chart(chartArea, {
    type: "line", 
    data: dataObj
});