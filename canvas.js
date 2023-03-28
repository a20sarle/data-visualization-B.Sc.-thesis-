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

var finalObjLabels = labels.concat(labels2);
console.log(labels);
console.log(labels2);
console.log(finalObjLabels);

var finalObjTemp = datapoints.concat(datapoints2);
console.log(datapoints);
console.log(datapoints2);
console.log(finalObjTemp);

// Config - used to change how the chart behaves
const dataObj = {
    labels: finalObjLabels,
    datasets: [
        {
            label: "Values",
            data: finalObjTemp
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

let button1 = document.getElementById("btnShow1");
button1.addEventListener('click', function () {
    updateTheData(datapoints, labels);
});

let button2 = document.getElementById("btnShow2");
button2.addEventListener('click', function () {
    updateTheData(datapoints2, labels2);
});

let buttonA = document.getElementById("btnShowA");
buttonA.addEventListener('click', function () {
    updateTheData(finalObjTemp, finalObjLabels);
});

// Function changing -0.75 to 3 in jsonfile1.
// -0.75 is the first temp value in the first object in JSON array.
//      * chartContent  = the chart
//      * data          = data (in 'data: dataObj')
//      * datasets[0]   = the first object of datasets in const 'dataObj'
//      * data[0]       = first index of JSON array 'datapoints' holding temperatures
function updateTheData(temp, label) {
    chartContent.data.datasets[0].data = temp;
    chartContent.data.labels = label;
    chartContent.update();
}