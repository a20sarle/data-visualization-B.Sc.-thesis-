function setData(data) {

    // Setup - sets values for labels and datapoints
    const labels = data.map(function(e) {
        return e.label;
    });
    const datapoints = data.map(function(e) {
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

    drawChart(dataObj);
}

function drawChart(obj) {
    var chartArea = document.getElementById('myChart');
    const chartContent = new Chart(chartArea, {
        type: "line", 
        data: obj,
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
}

function fetchData(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error));
}

fetchData('sample-data.json', setData);