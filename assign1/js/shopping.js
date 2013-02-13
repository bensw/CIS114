/*
Benjamin Swartz
CIS 114 OL
shopping.js
Chapters 1-3
Assignment 1
1-31-2013
*/
function calculate() {
	'use strict';
	var total;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;m
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var shipping = document.getElementById('shipping').value;
	total = quantity * price;
	tax /= 100;
	tax++;
	total *= tax;
	total = total+parseFloat(shipping);
	total -= discount;
	
	
	// Format the total:
	total = total.toFixed(2);
	
	document.getElementById('total').value = total;
	return false;    
} // End of calculate() function.

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;