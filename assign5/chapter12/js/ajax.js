// ajax.js # 2
// This script defines a function that creates an XMLHttpRequest object.
/*
Benjamin Swartz
CIS 114 OL
ajax.js
Chapters 12
Assignment 5
3-29-2013
*/

// This function returns an XMLHttpRequest object.
function getXMLHttpRequestObject() {
	
    var ajax = null;

	// Most browsers:
	if (window.XMLHttpRequest) {
	    ajax = new XMLHttpRequest();
	} else if (window.ActiveXObject) { // Older IE.
try {
   ajax = new ActiveXObject('MSXML2.XMLHTTP.3.0');
} catch (ex) {
console.log('Could not create the ActiveXObject: ' + error.message + '\n');
}
	}
	
	// Return the object:
    return ajax;

} // End of getXMLHttpRequestObject() function.