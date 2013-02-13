// Name: Ben Swartz 
// Course: CIS114
// File Name: zodiac.js
// Chapter: 5 
// Assignment: 2 
// Date: 2-8-13


function findSign() {
	var sign;
	var imgPath;
	var adjustedYear;

	var birthmonth = document.getElementById('month');
	var birthyear = document.getElementById('birthyear');

	var imgtag = document.getElementById('zodiacimgtag');
	var signptag = document.getElementById('signptag');
	if (birthyear.value >= 1901){
		adjustedYear = (birthyear.value - 1900);
		var yearModulo = adjustedYear % 12;
		if (birthmonth.value == '01') yearModulo -= 1;

		switch(yearModulo){
			case 0:
				sign = 'rat';
				break;
			case 1:
				sign = 'ox';
				break;
			case 2:
				sign = 'tiger';
				break;
			case 3:
				sign = 'rabbit';
				break;
			case 4:
				sign = 'dragon';
				break;
			case 5:
				sign = 'snake';
				break;
			case 6:
				sign = 'horse';
				break;
			case 7:
				sign = 'goat';
				break;
			case 8:
				sign = 'monkey';
				break;
			case 9:
				sign = 'rooster';
				break;
			case 10:
				sign = 'dog';
				break;
			case 11:
				sign = 'boar';
				break;
		}

		imgPath = "images/" + sign + ".jpg";

		if (imgtag.src !== undefined) imgtag.src = imgPath;
		signptag.innerHTML = sign;

	} else {
		document.getElementById('birthyear').value = "You must enter a year after 1900!";
	}

	return false;
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = findSign;
}
window.onload = init;

