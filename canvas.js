// Get Canvas element from external HTML file through id
var chartArea = document.getElementById('myChart');

// Setup - sets values for labels and datapoints
const labels = ["Arctic", "North Atlantic", "South Atlantic", "Indian", "North Pacific", "South Pacific", "Southern"];
const datapoints = [30,40,45,50,49,60,70];

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

// Render chart
new Chart(chartArea, {
    type: "line", 
    data: dataObj
});