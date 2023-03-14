// Generate an array with int values
// based on a constant interval
const minValue = 1;
const maxValue = 10;
const anomaliesFinalArray = [];

for (let n = minValue; n <= maxValue; n += 1.00) {
    anomaliesFinalArray.push({ label: n, temp: n });
}

console.log(anomaliesFinalArray);