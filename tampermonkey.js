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
    var chance;
    var checkChance;
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
        seed++;
    }, 2000, 5);

    // Print current time to console.
    function myFunction(s) {
        console.log("Current time: " + new Date().toLocaleTimeString());
        var clock = new Date().toLocaleTimeString();

        chance = new Chance(s);
        chance = chance.integer({ min: 1, max: 3 });
        console.log(chance);

        // Checks that seed (s) works, meaning that `chance`
        // and `heckChance` return the same values.
        checkChance = new Chance(s);
        checkChance = checkChance.integer({ min: 1, max: 3 });
        console.log(checkChance+" <-- check");

        measurements.push({ timestamp: clock, chancevalue: chance });
    }

    // Download generated data
    var downloadBtn = document.getElementById('saveData');
    downloadBtn.setAttribute("download", "measurements.json");
    downloadBtn.onclick = function() {
        var measurementData = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(measurements,undefined,2));
        downloadBtn.setAttribute("href", measurementData);
    };
})();