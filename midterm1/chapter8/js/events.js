// Name: Ben Swartz
// Course: CIS114
// Filename: events.js
// Chapter: 8
// Assignment: Midterm
// Date: 2/22/13 

// Function called when events occur.
// Function reports the event type and target.
function reportEvent(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Get the event target:
    var target = e.target || e.srcElement;
    
    // Establish the output message:
    var msg = target.nodeName + ': ' + e.type + '\n';
    
    // Add the output to the textarea:
    U.$('output').value += msg;
    
} // End of reportEvent() function.

// This function is called when the form is submitted.
// It adds and removes event handlers
// and returns false to prevent submission.
function setHandlers(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') {
        e = window.event;
        console.log('e == undefined');
    }


    // List of possible events:
    var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];
    var message = 'Form has been submitted with the following registered event handlers: ';
    // Add or remove event handlers accordingly:
    for (var i = 0, count = events.length; i < count; i++) {
        var checkbox = U.$(events[i]); // Get the element.
        if (checkbox.checked) { // Is it checked?
            U.addEvent(document, events[i], reportEvent);
            //Append event to message
            message += events[i] + ", ";
        } else {
            U.removeEvent(document, events[i], reportEvent);
        }
    } // End of FOR loop.
    //Check to see if there is a trailing ', ' and remove it:
    if (message[message.length-2] == ','){
        message = message.slice(0,message.length-2);
    }
    // Alert the user of the message
    alert(message);

    // Clear the output textarea:
    U.$('output').value = '';
    
    // Prevent the form's submission:
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    return false;
        
} // End of setHandlers() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    U.addEvent(U.$('theForm'), 'submit', setHandlers);
};