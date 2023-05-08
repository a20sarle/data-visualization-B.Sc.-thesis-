// ==UserScript==
// @name         Measure script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Measure script for interactive performance.
// @author       You
// @match        http://localhost/<path>
// @require      https://chancejs.com/chance.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    const measurements = [];
    var seed = 0;
    var dataPoints = 0;
    window.localStorage.setItem("done", false);
    let startOfMeasure = 0;
    let endOfMeasure = 0;

    // Run function nextAnimation every .5 sec
    var measurePoint = setInterval(nextAnimation, 500);

    function cancelMeasure(start, end){
        if(end - start > 9000){
            console.log("Timed out, not interactive!");
            clearTimeout(measurePoint);
        }
    }

    // 'done' is set to true in [svg/canvas].js
    // Run a new measurement if the previous animation has finished
    function nextAnimation(){
        endOfMeasure = performance.now();
        cancelMeasure(startOfMeasure, endOfMeasure);
        let finished = window.localStorage.getItem("done");
        // localStorage always stores values in strings
        if(finished == "true"){
            window.localStorage.setItem("done", false);
            // 100 run-time interaction datapoint measures
            if(dataPoints <= 100){
                startOfMeasure = performance.now();
                ++dataPoints;
                measure();
            } else {
                console.log("Completed!");
            };
        }
    }

    function randLabel(){
        // *** C H A N G E: 
        //      label = 1 (SVG)
        //      label = 26 + 190 (Canvas)
        let label = 1;

        var chance = new Chance(seed);
        chance = chance.natural({min: 1, max: 20});

        // *** C H A N G E: 
        //      label = 2 (SVG)
        //      label = 324 - 200 (Canvas)
        if (chance % 2 === 0) { label = 2; }

        seed++;

        return label;
    }

    function click(label) {
        // *** C H A N G E: SVG ↓ 
            let legend = document.querySelector('div.apexcharts-legend div:nth-child('+ label +') span:nth-child('+ label +')');
            legend.click();

        // *** C H A N G E: Canvas ↓
            // document
            //     .getElementById('myChart')
            //     .dispatchEvent(
            //         new MouseEvent(
            //             "click", // or "mousedown" if the canvas listens for such an event
            //             {
            //                 clientX: label,
            //                 clientY: 98,
            //                 // bubbles: true // "bubbling means that you will also receive an event when any child receives the event."
            //             }
            //         )
            //     );
    }

    function measure() {
        let label = randLabel();
        click(label);
        let elapsed = window.localStorage.getItem("elapsed");
        measurements.push({ click: label, time: elapsed});
     }

    // Download generated data
    var downloadBtn = document.getElementById('saveData');
    downloadBtn.setAttribute("download", "file-title-here.json");
    downloadBtn.onclick = function () {
        var measurementData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(measurements, undefined, 2));
        downloadBtn.setAttribute("href", measurementData);
    };
})();