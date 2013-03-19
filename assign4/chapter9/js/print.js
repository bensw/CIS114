// Name: Ben Swartz
// Course: CIS114
// Filename: print.js
// Chapter: 9
// Assignment: 4
// Date: 3/18/13
// Establish functionality on window load:
window.onload = function() {
    'use strict';

    // Check for print support:
    if (typeof window.print == 'function') {
        
        // Create a button:
        var printButton = document.createElement('button');
        
        // Add the text:
		if (printButton.textContent != 'undefined') {
		    printButton.textContent = 'Print';
		} else {
		    printButton.innerText = 'Print';
		}
        
        // Add a click handler:
        printButton.onclick = function() {
            window.print();
        };
        
        // Add the button to the page:
        document.body.insertBefore(printButton, document.getElementById('main'));
        
    } // End of IF.
}; // End of onload anonymous function.