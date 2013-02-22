// Name: Ben Swartz
// Course: CIS114
// Filename: membership.js
// Chapter: 8
// Assignment: Midterm
// Date: 2/22/13 

// Function called when the form is submitted.
// Function performs the calculation
// and prevents the default browser behavior.
function calculate(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = U.$('type');
    var years = U.$('years');
    
    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value);
    }
    
    // Check for valid data: 
   if (type && type.value && years && (years > 0) ) {
        
        // Determine the base cost:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        }// End of switch.
        
        // Factor in the number of years:
        cost *= years;
        
        // Discount multiple years:
        if (years > 1) {
            cost *= .80; // 80%
        }
        
        // Show the total amount:
        U.$('cost').value = '$' + cost.toFixed(2);
        
    } else { // Show an error, if submitted:
        if (e.type == 'submit') {
           U.$('cost').value = 'Please enter valid values.';
        }
    }

    // Prevent the form's submission:
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    return false;
        
} // End of calculate() function.

window.onload = function() {
    'use strict';
    U.addEvent(U.$('theForm'), 'submit', calculate);
    //add delegation on the form
    U.addEvent(U.$('theForm'), 'change', calculate);
    // U.addEvent(U.$('years'), 'change', calculate);
};