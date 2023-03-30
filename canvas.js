// Setup - sets values for labels and datapoints
const labels = jsonfile1.jsonarray.map(function (e) {
    return e.label;
});
const datapoints = jsonfile1.jsonarray.map(function (e) {
    return e.temp;
});

const labels2 = jsonfile1.jsonarray.map(function (e) {
    return e.label;
});
const datapoints2 = jsonfile2.jsonarray.map(function (e) {
    return e.temp;
});

// Config - used to change how the chart behaves
const dataObj = {
    labels: labels,
    datasets: [
        {
            label: 'FirstSeries',
            data: datapoints
        },
        {
            label: 'FirstSeries',
            data: datapoints2
        }
    ]
}

var chartArea = document.getElementById('myChart');
const chartContent = new Chart(chartArea, {
    type: "line",
    data: dataObj,
    options: {
        interaction: {
            // intersec must be false for mode 'nearest' since if true, the interaction
            // mode only applies when the mouse position intersects an item on the chart.
            intersect: false,
            mode: 'nearest'
        }
    }
});