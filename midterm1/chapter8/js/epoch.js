// Name: Ben Swartz
// Course: CIS114
// Filename: epoch.js
// Chapter: 8
// Assignment: Midterm
// Date: 2/22/13 

// Call this function when the page has loaded
// and when mouseovers occur:
function updateDuration() {
    'use strict';
 
     // Get now:
    var now = new Date();

    // Create the message and divide by 1000 to get seconds:
    var message = 'It has been ' + now.getTime()/1000;
    message += ' seconds since the epoch.';

    // Update the page:
    U.setText('output', message);
    
} // End of updateDuration() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    
    // Create the event listener:
    U.addEvent(U.$('update'), 'click', updateDuration);
    
    // Call the function now:
    updateDuration();
    
};