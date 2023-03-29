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

    // Call myFunction every 2 sec. Use clearInterval(t); to stop.
    var t = setInterval(myFunction, 2000);

    // Print current time to console.
    function myFunction() {
        console.log("Current time: " + new Date().toLocaleTimeString());
    }
})();