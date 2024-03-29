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

// Change numYears to adjust quantity of datapoints to generate
// Change to 9000 for 108 000 datapoints
numYears = 660;
numMonths = 12*numYears;
for (let i = 0; i < numMonths; i++) {

    var date = getLabel(i);
    var temperature = getTemperature(-1.0448954, 1.2235883);

    // replace 'temperature' with 0 for dataseries no.3
    anomaliesFinalArray.push({ "Time": date, "Anomaly": temperature });
}

console.log(anomaliesFinalArray);

let arrGenerated = JSON.stringify(anomaliesFinalArray);

console.log(arrGenerated);

// Used for formatting HadCRUT5.
let removedLastQuotation = arrGenerated.replace(/[0-9](")/gi, '');
let removedCelsius = removedLastQuotation.replace(/(C.":")/gi, 'C)":');
let generatedData = removedCelsius.replace(/(y":")/gi, 'y":');
console.log(generatedData);

// Download generated data
var downloadBtn = document.getElementById('generateData');
downloadBtn.setAttribute("download", "temperatures.json");
downloadBtn.onclick = function() {
    var temperatureData = "data:text/json;charset=utf-8," + encodeURIComponent(generatedData,undefined,2);
    downloadBtn.setAttribute("href", temperatureData);
};

// ***** HadCRUT5 - Formatting the label from "Anomaly (deg C)" to "Anomaly" *****
// let strHadCRUT5 = JSON.stringify(HadCRUT5.jsonarray);
// console.log(strHadCRUT5);
// let formattedHadCRUT5 = strHadCRUT5.replace(/\s+[^C]*.[^C]/gi, '');
// console.log(formattedHadCRUT5);

// Download generated data
// var changeLabel = document.getElementById('changeLabel');
// changeLabel.setAttribute("download", "HadCRUT5.json");
// changeLabel.onclick = function() {
//     var finalHadCRUT5 = "data:text/json;charset=utf-8," + encodeURIComponent(formattedHadCRUT5,undefined,2);
//     changeLabel.setAttribute("href", finalHadCRUT5);
// }