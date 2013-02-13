// Name: Ben Swartz 
// Course: CIS114
// File Name: membership.js
// Chapter: 5 
// Assignment: 2 
// Date: 2-8-13


// This script calculates the cost of a membership.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    
    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = document.getElementById('type');
    var years = document.getElementById('years');
    var cost_span = document.getElementById('cost');
    
    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
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
        } // End of switch.
        
        // Factor in the number of years:
        cost *= years;
        
        // Discount multiple years:
        switch (years){
            case 2:
                cost*=.90;
                break;
            case 3: 
                cost *=.90;
                break;
            case 4:
                cost *= .85;
                break;
            case 5:
                cost *= .80;
                break;                

        }
        //if it is greater than five give it a 20% discount
        if (years > 5) {
            cost *= .80; // 80%
        }
        
        // Show the total amount:
        cost_span.textContent = '$' + cost.toFixed(2);
        
    } else { // Show an error:
        cost_span.textContent = 'Please enter valid values.';
    }
    
    // Return false to prevent submission:
    return false;
    
} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;