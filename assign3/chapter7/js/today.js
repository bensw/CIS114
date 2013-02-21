// Name: Ben Swartz
// Course: CIS114
// Filename: today.js
// Chapter: 7
// Assignment: 3
// Date: 2/21/13 

// This function is used to update the text of an HTML element.
// The function takes two arguments: the element's ID and the text message.
function setText(elementId, message) {
    'use strict';


    if ( (typeof elementId == 'string')
    //Make sure elementId is not the empty string
    && (elementId != '')   
    && (typeof message == 'string')
    //Message cannot be the empty string but can be a number
    || (typeof message == 'number') 
    && (message != '')) {
        //Make sure element exists 
            if (document.getElementById(elementId)){
            // Get a reference to the paragraph:
            console.log('Element with id = ' + elementId + " found!");
            var output = document.getElementById(elementId);
        }
        else{
            return;
        }
        // Update the innerText or textContent property of the paragraph:
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    
    } // End of main IF.

} // End of setText() function.

// Call this function when the page has loaded:
function init() {
    'use strict';
    var today = new Date();
    var message = 'Right now it is ' + today.toLocaleDateString();
    message += ' at ' + today.getHours() + ':' + today.getMinutes();

    // Update the page:
    setText('output', message);
    
} // End of init() function.
window.onload = init;