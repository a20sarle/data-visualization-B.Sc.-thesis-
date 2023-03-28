// Setup - sets values for labels and datapoints
const labels = jsonfile1.jsonarray.map(function(e) {
    return e.label;
 });
const datapoints = jsonfile1.jsonarray.map(function(e) {
    return e.temp;
 });
 const datapoints2 = jsonfile2.jsonarray.map(function(e) {
    return e.temp;
 });

 labels.forEach(element => {
    if(element.includes('x')){
        console.log('x found: '+element);
    } else {
        console.log('x NOT found: '+element);
    }
 });

// Config - used to change how the chart behaves
const dataObj = {
    labels: labels,
    datasets: [
        {
            label: "Values",
            data: datapoints
        },
        {
            label: "Values",
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
        },
        onClick: (e) => {
            const canvasPosition = Chart.helpers.getRelativePosition(e, chartArea);

            // Substitute the appropriate scale IDs
            const dataX = chartContent.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = chartContent.scales.y.getValueForPixel(canvasPosition.y);

            alert("dataX: "+dataX+", dataY: "+dataY);
        }
    }
});

// Function changing -0.75 to 3 in jsonfile1.
// -0.75 is the first temp value in the first object in JSON array.
//      * chartContent  = the chart
//      * data          = data (in 'data: dataObj')
//      * datasets[0]   = the first object of datasets in const 'dataObj'
//      * data[0]       = first index of JSON array 'datapoints' holding temperatures
function updateTheData() {
    chartContent.data.datasets[0].data = datapoints2;
    chartContent.update();
}