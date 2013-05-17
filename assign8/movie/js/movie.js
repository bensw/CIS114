/*Benjamin Swartz
CIS 114 OL
movie.js
Assignment 8
5-17-2013*/
$(document).ready(function(){
	$("#search").click(searchMovie);
});
function searchMovie(){
	var title = $("#term").val();
	console.log(title);
	$.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/" + title + "?callback=?", function(data) {
		if (data[0] != "Nothing found."){
			$("#movie").empty()
			console.log(data);
			var o = "<h1>" + data[0].name + "</h1>";
			o += "<img id='thePoster' src=" + data[0].posters[0].image.url + " />";
			o += "<h2>Year: " + data[0].released.slice(0,4); + "</h2>";
			o += "<h2>Rating " + data[0].rating + "</h2>";
			o += "<p>" + data[0].overview + "</p>";
			$("#movie").html(o);
		} else {
			$("#movie").empty()
			$("#movie").html("<h1>Sorry, no movie was found</h1>");
		}
	});
}