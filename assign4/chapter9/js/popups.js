// Name: Ben Swartz
// Course: CIS114
// Filename: popups.js
// Chapter: 9
// Assignment: 4
// Date: 3/18/13
// Function called when the link is clicked.
function createPopup(e) {
    'use strict';
    
    // Get the event object:
    if (typeof e == 'undefined') var e = window.event;

    // Get the event target:
    var target = e.target || e.srcElement;

    // Check to see if the class is "link"
    if (target.className != "link") {
        return false;
    }
    else{
        // Create the window:
        var popup = window.open(target.href, 'PopUp', 'height=100,width=100,top=100,left=100,location=no,resizable=yes,scrollbars=yes');
        
        // Give the window focus if it's open:
        if ( (popup !== null) && !popup.closed) {
            popup.focus();
            return false; // Prevent the default behavior.
        } else { // Allow the default behavior.
            return true;
        }
    }    
} // End of createPopup() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';
    //Check to see if getElementsByClassName() exists and then loop through the correct list
    var listOfLinks;
    if (document.getElementsByClassName()){
        listOfLinks = document.getElementsByClassName('link');
    }
    else{
        listOfLinks = document.links;
    }
    // Add the click handler to each link:
    for (var i = 0, count = listOfLinks.length; i < count; i++) {
        listOfLinks[i].onclick = createPopup;
    } // End of for loop.

}; // End of onload function.