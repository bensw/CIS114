/*
Benjamin Swartz
CIS 114 OL
box.js
Chapters 1-3
Assignment 1
1-31-2013
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
	volume = length*width*height;
	volume = volume.toFixed(4);
	document.getElementById('volume').value = volume;
	return false;
}
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;
