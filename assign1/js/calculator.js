/*
Benjamin Swartz
CIS 114 OL
calculator.js
Chapters 1-3
Assignment 1
1-31-2013
*/
function calculate() {
	'use strict';
	var future_value;
	var principal = document.getElementById('principal').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var num_of_years = document.getElementById('num_of_years').value;
	var future_value;
	future_value = principal * Math.pow((1+interest_rate),num_of_years)
	future_value = future_value.toFixed(4);
	document.getElementById('future_value').value = future_value;
	return false;
}
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;
