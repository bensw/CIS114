/*Benjamin Swartz
CIS 114 OL
translate.js
Final
5-24-2013 */

$(document).ready(function(){
    $('#translate').click(translate);
});

function translate(){
	var translate_text = $("#en-text").val().replace(" ","+");
	$.getJSON("http://api.apertium.org/json/translate?q=" + translate_text + "&langpair=en|es&callback=?", function(data){
		$('#es-text').empty();
		$('#es-text').html(data.responseData.translatedText);
	});
}