// Generate an array with int values
// based on a constant interval
const anomaliesFinalArray = [];

function getTemperature(min, max) {
    var temp = Math.random() * (max - min) + min;
    return temp.toFixed(7);
}

function getLabel(i) {

    let d = new Date('2023-01-01');

    let month = d.setMonth(d.getMonth() + i);
    formatMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
    month = formatMonth(d);
    
    let year = d.getUTCFullYear();
    year = year.toString().substring(2);

    return "x"+year+"-"+month;
}

// Change i to adjust quantity of datapoints to generate
for (let i = 0; i < 24; i++) {

    var date = getLabel(i);
    var temperature = getTemperature(-1.0448954, 1.2235883);

    anomaliesFinalArray.push({ label: date, temp: temperature });
}

console.log(anomaliesFinalArray);

// Download generated data
var downloadBtn = document.getElementById('generateData');
downloadBtn.setAttribute("download", "temperatures.json");
downloadBtn.onclick = function() {
    var temperatureData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(anomaliesFinalArray,undefined,2));
    downloadBtn.setAttribute("href", temperatureData);
};