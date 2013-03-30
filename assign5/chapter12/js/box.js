/*
Benjamin Swartz
CIS 114 OL
box.js
Chapters 12
Assignment 5
3-29-2013
*/

function calculate() {
	'use strict';

	var volume;
	var length = document.getElementById('length').value;
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;

	length = Math.abs(length);
	width = Math.abs(width);
	height = Math.abs(height);

    // Check the types and values via assertTrue
    try {
    		assertTrue(((typeof length == 'number') && (length > 0)), 'The length must be a positive number');
    		assertTrue(((typeof width == 'number') && (width > 0)), 'The width must be a positive number');
    		assertTrue(((typeof height == 'number') && (height > 0)), 'The height must be a positive number');
    } catch (err) {
    		console.log('Caught: ' + err.name + ' with: ' + err.message);
    }


	volume = length*width*height;
	volume = volume.toFixed(4);
	document.getElementById('volume').value = volume;
	return false;
}
function assertTrue(expression, message) {
	if (!expression){
		throw {name: "Not a positive number", message: message};
	}
}
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;
