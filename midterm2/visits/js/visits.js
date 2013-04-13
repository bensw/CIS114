/*Name: Ben Swartz
Course: CIS114
Filename: visits.js
Assignment: Midterm 2
Date: 4/12/13 */
window.onload = function (){
	'use strict';

	var count = COOKIE.getCookie('visits');

	if(count){
		count = +count + 1;
		document.getElementById('visitDiv').innerHTML = "Welcome back. You've visited this site " + count + " times!"
	}
	else {
		document.getElementById('visitDiv').innerHTML = "Welcome, this is your first visit"	
		count = 1;
	}
	var future = new Date()
	future.setDate(future.getDate() + 30);
	COOKIE.setCookie("visits", count, future);
}