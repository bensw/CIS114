// Name: Ben Swartz
// Course: CIS114
// Filename: auction.js
// Chapter: 6
// Assignment: 3
// Date: 2/21/13 


function init() {
    
    // Want to be strict:
    'use strict';

    var today = new Date();
    var end = new Date('31 Oct 2013 5:00:00 UTC');


    // Create a custom message:
    var message = 'There are ' + (end - today)+ ' milliseconds left in the auction! ' ;

    // Get a reference to the paragraph:
    var time_remaining = document.getElementById('time_remaining');
    
    // Update the innerText or textContent property of the paragraph:
    time_remaining.innerText = message;
    
} // End of init() function.

window.onload = init;