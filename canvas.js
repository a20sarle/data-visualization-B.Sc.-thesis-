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
            label: 'SecondSeries',
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
        animation: {
            onComplete: function() {
                console.log('Rendered!');
            }
        }
    }
});

function clickLabel() {
    document
        .getElementById('myChart')
        .dispatchEvent(
            new MouseEvent(
                "click", // or "mousedown" if the canvas listens for such an event
                {
                    clientX: 26 + +298,
                    clientY: -127 + +225,
                    // bubbles: true // "bubbling means that you will also receive an event when any child receives the event."
                }
            )
        );
}

const getCoordinates = (event) => {
    const container = chartArea.getBoundingClientRect();
    const x = (event.clientX - container.left) - container.width / 2;
    const y = (event.clientY - container.top) - container.height / 2;
    console.log(`${x}, ${y}`);
};
chartArea.addEventListener('click', getCoordinates);