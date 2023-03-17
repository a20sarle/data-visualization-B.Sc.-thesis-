// Generate an array with int values
// based on a constant interval
const minValue = 1;
const maxValue = 10;
const anomaliesFinalArray = [];

function getTemperature(min, max) {
    var temp = Math.random() * (max - min) + min;
    return temp.toFixed(7);
}

for (let n = minValue; n <= maxValue; n += 1.00) {

    // Randomize a title on format xMMM-DD

    // Ex. "Thu Jul 29 1999 05:36:14 GMT+0200 (Central European Summer Time)"
    var longDate = new Date(new Date() - Math.random()*(1e+12));

    // Ex. "Jul" instead of returning 7 (from Thu Jul 29).
    var formatMonth = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
    var monthShort = formatMonth(longDate);

    // Ex. "29" (from Thu Jul 29).
    var dateShort = longDate.getDate();

    var temparature = getTemperature(-1.0448954, 1.2235883);

    anomaliesFinalArray.push({ label: "x"+monthShort+"-"+dateShort, temp: temparature });
}

console.log(anomaliesFinalArray);