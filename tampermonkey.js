// ==UserScript==
// @name         Measure script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Measure script for interactive performance.
// @author       You
// @match        http://localhost/<path>
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...

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
        myFunction();
    }, 2000, 5);

    // Print current time to console.
    function myFunction() {
        console.log("Current time: " + new Date().toLocaleTimeString());
    }
})();