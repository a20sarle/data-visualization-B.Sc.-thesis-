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

    // Declare init value of variables first time the code is run
    var repeated = window.localStorage.getItem("repeated");
    if(repeated === null)
    {
        window.localStorage.setItem("repeated", 0);
        window.localStorage.setItem("seed", 1);
        window.localStorage.setItem("chance", 0);
        window.localStorage.setItem("prevChance", 3);
        window.localStorage.setItem("measurements", "");
     }

     repeated = window.localStorage.getItem("repeated");
     var seed = window.localStorage.getItem("seed");
     var chance = window.localStorage.getItem("chance");
     var prevChance = window.localStorage.getItem("prevChance");
     var measurements = window.localStorage.getItem("measurements");

     repeated++;

    if(repeated < 6){
        myFunction(seed);
        localStorage.setItem('repeated', repeated);
        location.reload();
    }

    // Print current time to console.
    function myFunction(s) {

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

        measurements += '{"btn": "'+chance+'","render": "'+renderTime+'"},';

        prevChance = chance;

        window.localStorage.setItem("repeated", repeated);
        window.localStorage.setItem("seed", seed);
        window.localStorage.setItem("chance", chance);
        window.localStorage.setItem("prevChance", prevChance);
        window.localStorage.setItem("measurements", measurements);
    }

    // Download generated data
    var downloadBtn = document.getElementById('saveData');
    downloadBtn.setAttribute("download", "measurements.json");
    downloadBtn.onclick = function() {
        var measurementData = "data:text/json;charset=utf-8," + encodeURIComponent("["+measurements.slice(0, -1)+"]",undefined,2);
        downloadBtn.setAttribute("href", measurementData);
    };
})();