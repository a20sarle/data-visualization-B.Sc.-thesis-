// Generate an array with int values
// based on a constant interval
const anomaliesFinalArray = [];

function getTemperature(min, max) {
    var temp = Math.random() * (max - min) + min;
    return temp.toFixed(7);
}

function getLabel() {

    // Ex. "Thu Jul 29 1999 05:36:14 GMT+0200 (Central European Summer Time)"
    var longDate = new Date(new Date() - Math.random()*(1e+12));

    // Ex. "Jul" instead of 7 (from Thu Jul 29).
    var formatMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
    var monthShort = formatMonth(longDate);

    // Ex. "29" (from Thu Jul 29).
    var dateShort = longDate.getDate();

    return "x"+monthShort+"-"+dateShort;
}

for (let i = 0; i < 5; i++) {

    var date = getLabel();
    var temperature = getTemperature(-1.0448954, 1.2235883);

    anomaliesFinalArray.push({ label: date, temp: temperature });
}

console.log(anomaliesFinalArray);