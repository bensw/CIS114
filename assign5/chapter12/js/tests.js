// tests.js
// This script runs some tests against the utilities library from Chapter 8.
/*
Benjamin Swartz
CIS 114 OL
tests.js
Chapters 12
Assignment 5
3-29-2013
*/

// Define the tests:
var myTests = function() {
	'use strict';
	
	// Test that $() returns an element when provided with a valid ID:
	function testGetElement() {
		jsUnity.assertions.assertNotNull(U.$('output'));
	}
	
	// Test that $() returns null when provided with an invalid ID:
	function testGetInvalidElement() {
		jsUnity.assertions.assertNull(U.$('doesNotExist'));
	}
	
	// Test that $() returns undefined when given an invalid argument
	function testWrongArgumentTypeGetElement() {
		jsUnity.assertions.assertUndefined(U.$(3.14));
	}

	// Test that $() returns null when passed no arguments
	function testNoArgumentsGetElement() {
		jsUnity.assertions.assertNull(U.$());
	}

	// Test that setText() returns true when provided with a valid ID:
	function testSetText() {
		jsUnity.assertions.assertTrue(U.setText('output', 'test'));
	}
	
	// Test that setText() returns false when provided with an invalid ID:
	function testCannotSetText() {
		jsUnity.assertions.assertFalse(U.setText('doesNotExist', 'test'));
	}
	// Test that setText() returns fales when provided with an invalid argument for id
	function testWrongIdArgumentTypeGetElement() {
		jsUnity.assertions.assertFalse(U.setText(3.14, 'test'))
	}
	// Test that setText() returns fales when provided with an invalid argument for message
	function testWrongMessageArgumentTypeGetElement() {
		jsUnity.assertions.assertFalse(U.setText('output', 3.14))
	}
	// Test that setText() returns false when passed no arguments
	function testNoArgumentsGetElement() {
		jsUnity.assertions.assertFalse(U.setText());
	}	
	
}; // End of myTests anonymous function.

// Define the logging function:
jsUnity.log = function(message) {
	U.$('results').innerHTML += '<p>' + message + '</p>';
};

// Run the tests:
jsUnity.run(myTests);