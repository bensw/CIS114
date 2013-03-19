// Name: Ben Swartz
// Course: CIS114
// Filename: os.js
// Chapter: 10
// Assignment: 4
// Date: 3/18/13
// Function called when the first menu's value changes.
// Function updates the second menu.
function updateMenu(os, options) {
    'use strict';
    
    // Get references to the menus:
	// var os = document.getElementById('os');
	var os2 = document.getElementById('os2');

       
	// Empty the second menu:
	while (os2.firstChild) {
		os2.removeChild(os2.firstChild);
	}


	// Update the menu:
	if (options) {
		os2.disabled = false;
		
		// Add the options to the menu:
		for (var i = 0, count = options.length; i < count; i++) {
			var opt = document.createElement('option');
			opt.text = opt.value = options[i];
		    os2.appendChild(opt);
		}
		
	} else { // No selection!
        os2.disabled = true;
	}

} // End of updateMenu() function.

function createFirstMenu(os, options){
	'use strict';
	// Clear out the existing options:
	while (os.firstChild) {
		os.removeChild(os.firstChild);
	}
	
	// Add the new options:
	for (var i = 0, count = options.length; i < count; i++) {
		var opt = document.createElement('option');
		opt.text = opt.value = options[i];
	    os.appendChild(opt);
	}


}

function createSelectMenu(os) {
    'use strict';
    // Create the other select menu:
	var os2 = document.createElement('select');
	os2.id = 'os2';
	os2.disabled = true;
	os.parentNode.appendChild(os2); 
}

function updateMenuOptions() {
	'use strict';
	
	// For storing the options:
	var options = null;

    if (os.value == 'Windows') {
		options = ['7 Home Basic', '7 Home Premium', '7 Professional', '7 Ultimate', 'Vista', 'XP'];
 	} else if (os.value == 'Mac OS X') {
		options = ['10.7 Lion', '10.6 Snow Leopard', '10.5 Leopard', '10.4 Tiger'];
    }

    // Finally, update the options
    updateMenu(os, options)
}

function init(){
	'use strict';

	// Get the os label
	var os = document.getElementById('os');
	// Create the first menu with given options
	var options = ['Choose', 'Windows', 'Mac OS X'];	
	createFirstMenu(os, options)
	//Prep the select menu (secondary menu)
	createSelectMenu(os);
	//onchange update the secondary menu
	os.onchange = updateMenuOptions;

}
// Run init on window load:
window.onload = init;