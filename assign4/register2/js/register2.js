// Name: Ben Swartz
// Course: CIS114
// Filename: register2.js
// Chapter: 10
// Assignment: 4
// Date: 3/18/13
// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
    var email = U.$('email');
    var password = U.$('password');
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var phone = U.$('phone');
	var address = U.$('address');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var ccType = U.$('ccType');
	var ccNumber = U.$('ccNumber');
	var expirationDate = U.$('expirationDate');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;

	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	// Validate the password:
	if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Za-z]).{6,}/.test(password.value)){
		removeErrorMessage('password');
	} else {
		addErrorMessage('password', 'Please enter your password.');
		error = true;		
	}
	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}
	// Validate the last name:
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
		error = true;
	}	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		error = true;
	}

	// Validate the address:
	if (/[0-9]+[A-Za-z0-9\s\-]{2,20}$/.test(address.value)) {
		removeErrorMessage('address');
	} else {
		addErrorMessage('address', 'Please enter your address.');
		error = true
	}

	// Validate the city:
	if (/[A-Za-z\s\-]{2,20}$/.test(city.value)) {
		removeErrorMessage('city');
	} else {
		addErrorMessage('city', 'Please enter your city.');
		error = true
	}
	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		error = true;
	}
	
	// Validate the zip code:
	if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
	} else {
		addErrorMessage('zip', 'Please enter your zip code.');
		error = true;
	}
	// Validate the Credit Card Number:
	if (/([0-9]{4}[\-\s]{0,1}){4}$/.test(ccNumber.value)) {
		removeErrorMessage('ccNumber');
	} else {
		addErrorMessage('ccNumber', 'Please enter your credit card number.');
		error = true;
	}
	// Validate the Expiration Date:
	if (/(0[1-9]|1[0-2])\/\d{4}$/.test(expirationDate.value)) {
		// Create a new date to see if the inputted date is sometime in the future
		var d = new Date()
		var current = [d.getMonth()+1, d.getFullYear()];
		// Split into an array
		var expirationValue = expirationDate.value.split("/");
		// Make it a date object
		expirationValue = new Date(expirationValue[1], expirationValue[0])
		// Get into same ints as current date
		expirationValue = [expirationValue.getMonth(), expirationValue.getFullYear()];
		console.log("expirationValue = [" + expirationValue[0] + "," + expirationValue[1] + "]")
		console.log("current = [" + current[0] + "," + current[1] + "]")
		if (expirationValue[1] > current[1]) {
				removeErrorMessage('expirationDate');
			}
		else if ((expirationValue[0] >= current[0]) && expirationValue[1] == current[1]){
				removeErrorMessage('expirationDate');
		}
		else{
			addErrorMessage('expirationDate', 'Please enter your expiration date.');
			error = true;	
		}
	}

    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips on the phone number:
	U.enableTooltips('phone');
	U.enableTooltips('password');
	U.enableTooltips('ccNumber');
	U.enableTooltips('expirationDate');
    
};