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
    var seed = 1;
    var prevChance = 3;
    var chance;
    const measurements = [];

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

    // Call myFunction every 2 sec but only 5 times.
    // 2000 = delay, 5 = repetitions
    setIntervalX(function(){
        myFunction(seed);
    }, 2000, 5);

    // Print current time to console.
    function myFunction(s) {
        var clock = new Date().toLocaleTimeString();

        do {
            chance = new Chance(s);
            chance = chance.integer({ min: 1, max: 3 });
            s++;
        } 
        // Ensure that the same btn is not pressed twice in a row,
        // as the only measurements of interest is when the chart is updated.
        while(prevChance == chance);

        seed = s;

// S T A R T    M E A S U R I N G
        var start = performance.now();
        document.getElementById('btnShow'+chance).click();
        var end = performance.now();
// E N D    M E A S U R I N G

        var renderTime = (end - start).toFixed(2);
        console.log(chance+", render: "+renderTime);

        measurements.push({ btn: chance, render: renderTime });

        prevChance = chance;
    }

    // Download generated data
    var downloadBtn = document.getElementById('saveData');
    downloadBtn.setAttribute("download", "measurements.json");
    downloadBtn.onclick = function() {
        var measurementData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(measurements,undefined,2));
        downloadBtn.setAttribute("href", measurementData);
    };
})();