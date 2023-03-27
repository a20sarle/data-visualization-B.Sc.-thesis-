const labels = jsonfile1.jsonarray.map(function(e) {
    return e.label;
 });
const datapoints1 = jsonfile1.jsonarray.map(function(e) {
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

var options = {
    chart: {
        type: 'line'
    },
    series: [
        {
            name: 'Values',
            data: datapoints1
        },{
            name: 'Values',
            data: datapoints2
        }
    ],
    xaxis: {
        categories: labels
    }
}

var chart = new ApexCharts(document.querySelector("#myChart"), options);
chart.render();