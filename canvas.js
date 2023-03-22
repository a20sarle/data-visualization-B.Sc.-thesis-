var jsonfile1 = {
    "jsonarray": 
    [{
        "label": "x23-Jan",
        "temp": "-0.7504562"
    },
    {
        "label": "x23-Feb",
        "temp": "0.7986458"
    },
    {
        "label": "x23-Mar",
        "temp": "-0.3363440"
    },
    {
        "label": "x23-Apr",
        "temp": "0.3564235"
    },
    {
        "label": "x23-May",
        "temp": "-0.0335464"
    },
    {
        "label": "x23-Jun",
        "temp": "-0.3092201"
    },
    {
        "label": "x23-Jul",
        "temp": "-0.9677990"
    },
    {
        "label": "x23-Aug",
        "temp": "-1.0353791"
    },
    {
        "label": "x23-Sep",
        "temp": "-0.3264144"
    },
    {
        "label": "x23-Oct",
        "temp": "0.0663818"
    },
    {
        "label": "x23-Nov",
        "temp": "0.2639356"
    },
    {
        "label": "x23-Dec",
        "temp": "0.8554578"
    },
    {
        "label": "x24-Jan",
        "temp": "0.6824531"
    },
    {
        "label": "x24-Feb",
        "temp": "-0.6041756"
    },
    {
        "label": "x24-Mar",
        "temp": "0.5016222"
    },
    {
        "label": "x24-Apr",
        "temp": "0.6409853"
    },
    {
        "label": "x24-May",
        "temp": "1.1878387"
    },
    {
        "label": "x24-Jun",
        "temp": "0.7001389"
    },
    {
        "label": "x24-Jul",
        "temp": "0.1492865"
    },
    {
        "label": "x24-Aug",
        "temp": "-0.2745481"
    },
    {
        "label": "x24-Sep",
        "temp": "-0.2301370"
    },
    {
        "label": "x24-Oct",
        "temp": "0.2913690"
    },
    {
        "label": "x24-Nov",
        "temp": "0.1783383"
    },
    {
        "label": "x24-Dec",
        "temp": "1.0296540"
    }]
};
var jsonfile2 = {
    "jsonarray": 
    [{
        "label": "x23-Jan",
        "temp": "-0.7"
    },
    {
        "label": "x23-Feb",
        "temp": "0.8"
    },
    {
        "label": "x23-Mar",
        "temp": "-0.4"
    },
    {
        "label": "x23-Apr",
        "temp": "0.6"
    },
    {
        "label": "x23-May",
        "temp": "-0.03"
    },
    {
        "label": "x23-Jun",
        "temp": "-0.3"
    },
    {
        "label": "x23-Jul",
        "temp": "-0.9"
    },
    {
        "label": "x23-Aug",
        "temp": "-1.0"
    },
    {
        "label": "x23-Sep",
        "temp": "-0.3"
    },
    {
        "label": "x23-Oct",
        "temp": "0.06"
    },
    {
        "label": "x23-Nov",
        "temp": "0.2"
    },
    {
        "label": "x23-Dec",
        "temp": "0.8"
    },
    {
        "label": "x24-Jan",
        "temp": "0.6"
    },
    {
        "label": "x24-Feb",
        "temp": "-0.6"
    },
    {
        "label": "x24-Mar",
        "temp": "0.5"
    },
    {
        "label": "x24-Apr",
        "temp": "0.6"
    },
    {
        "label": "x24-May",
        "temp": "1.2"
    },
    {
        "label": "x24-Jun",
        "temp": "0.7"
    },
    {
        "label": "x24-Jul",
        "temp": "0.1"
    },
    {
        "label": "x24-Aug",
        "temp": "-0.3"
    },
    {
        "label": "x24-Sep",
        "temp": "-0.2"
    },
    {
        "label": "x24-Oct",
        "temp": "0.3"
    },
    {
        "label": "x24-Nov",
        "temp": "0.2"
    },
    {
        "label": "x24-Dec",
        "temp": "1.0"
    }]
};
// Setup - sets values for labels and datapoints
const labels = jsonfile1.jsonarray.map(function(e) {
    return e.label;
 });
const datapoints = jsonfile1.jsonarray.map(function(e) {
    return e.temp;
 });
 const datapoints2 = jsonfile2.jsonarray.map(function(e) {
    return e.temp + 1;
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