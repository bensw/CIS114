/*Benjamin Swartz
CIS 114 OL
twitter.js
Assignment 7
5-3-2013*/

$(document).ready(function() {
	$("#f").submit(function() {
		console.log("Submit hit");
		console.log($("#username").val());
		callTwitter($("#username").val());
		return false;
	});
});


function callTwitter(username){
	$("#jstweets").empty();
	$("#jstweets").addClass("twitter");
	$.getJSON(
		"http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + username + "&count=15&callback=?",
		function(data) {
			twitDataCallback(data);
		}	
	);
	return false;
}
function twitDataCallback(twitData) {
	var userData = twitData[0].user;	
	var ct = "<div><img src='"+ userData.profile_image_url + "' alt='twitter pic'>";
	ct += "<a href='http://www.twitter.com/" + userData.screen_name + "'>"
	ct += userData.name + "</a><br>Friends: " + userData.friends_count;
	ct += "<br>Followers: " + userData.followers_count;
	ct += "<br>Listed: " + userData.listed_count;
	ct += "<br>" + userData.description + "</div><br clear='all'>";
	$("#jstweets").append(ct);
	
	$.each(twitData, function(i, item) {
		ct = "<div class='twitline'>" + item.text;
		ct = ct.replace(/http:\/\/\S+/g, '<a href="$&">$&</a>');

		ct += " (<a class='tdate' href='http://www.twitter.com/";
		ct += userData.screen_name + "/status/" + item.id_str;
		ct += "'>" + item.created_at.substr(4,6) + "</a>)</div>";
		$("#jstweets").append(ct);
	});
}
