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

    // setIntervalX is used as setInterval is predefined.
    function setIntervalX(callback, delay, repetitions) {
        let x = 0;
        let intervalID = setInterval(function () {
            callback();
            if (++x === repetitions) {
                // Used to stop call myFunction.
                clearInterval(intervalID);
            }
        }, delay);
    }

    // Call myFunction every 2 sec but only 10 times.
    // 2000 = delay, 5 = repetitions
    setIntervalX(function () {
        myFunction();
    }, 2000, 10);

    // Print current time to console.
    function myFunction() {
        // let x = 26 + 298;
        let x = 1;

        var chance = new Chance(seed);
        chance = chance.natural({min: 1, max: 20});

        // if (chance % 2 === 0) { x = 324 - 200; }
        if (chance % 2 === 0) { x = 2; }

        seed++;

        console.log("chance:"+chance+", x: " + x);
        clickLabel(x);

        let start = window.localStorage.getItem("start");
        let end = window.localStorage.getItem("end");

        console.log((end - start).toFixed(2));

        measurements.push({ click: x, start: start, end: end, time: (end - start).toFixed(2) });
    }

    function clickLabel(x) {
        let legend = document.querySelector('div.apexcharts-legend div:nth-child('+ x +') span:nth-child('+ x +')');
        legend.click();
        
        // document
        //     .getElementById('myChart')
        //     .dispatchEvent(
        //         new MouseEvent(
        //             "click", // or "mousedown" if the canvas listens for such an event
        //             {
        //                 clientX: x,
        //                 clientY: 98,
        //                 // bubbles: true // "bubbling means that you will also receive an event when any child receives the event."
        //             }
        //         )
        //     );
    }

    // Download generated data
    var downloadBtn = document.getElementById('saveData');
    downloadBtn.setAttribute("download", "measurements.json");
    downloadBtn.onclick = function () {
        var measurementData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(measurements, undefined, 2));
        downloadBtn.setAttribute("href", measurementData);
    };
})();