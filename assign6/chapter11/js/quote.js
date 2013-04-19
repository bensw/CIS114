/*Benjamin Swartz
CIS 114 OL
quote.js
Chapter 11
Assignment 6
4-19-2013*/
// Script 10.3 - os.js
// This script creates two linked select menus.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// Create the Ajax object:
	var ajax = getXMLHttpRequestObject();
	
	// Function to be called when the readyState changes:
	ajax.onreadystatechange = function() {

		// Check the readyState property:
		if (ajax.readyState == 4) {
		
			// Check the status code:
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {

				// Parse the response:
				var data = JSON.parse(ajax.responseText);

				// Update the page:
				var output = document.getElementById('quotes');
				for (var item in data){
					if (document.getElementById(data[item].id)!= undefined){
						document.getElementById(data[item].id).innerHTML = "<p>" + data[item].name + " $<span>" + data[item].l + "</span></p>"; 
					}
					else{
						var itemDiv = document.createElement("div")
						itemDiv.setAttribute("id", data[item].id)
						itemDiv.innerHTML = "<p>" + data[item].name + " $<span>" + data[item].l + "</span></p>";
						output.appendChild(itemDiv);
					}
				}
			
		    } // End of status IF.
				
		} // End of readyState IF.

	}; // End of onreadystatechange function.
	
	// Fetch the initial data:
	ajax.open('GET', 'resources/quote.json', true);
	ajax.send(null);
	
	// Use a timer to fetch the data again:
	var stockTimer = setInterval(function() {
	
	    ajax.open('GET', 'resources/quote.json', true);
		ajax.send(null);
	
	}, 60000);
		
    
}; // End of onload anonymous function.