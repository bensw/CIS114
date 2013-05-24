/*Benjamin Swartz
CIS 114 OL
map.js
Final
5-24-2013 */

// this variable will collect the html which will eventually be placed in the side_bar 
var side_bar_html = ""; 

// arrays to hold copies of the markers and html used by the side_bar 
// because the function closure trick doesnt work there 
var gmarkers = []; 
var map = null;

function initialize() {
  // create the map
  var myOptions = {
    zoom: 12,
    center: new google.maps.LatLng(41.886732, -87.651441),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map-canvas"),
                                myOptions);
 
  google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
        });

  // Add markers to the map
  // Set up three markers with info windows 
  // add the points    
  var point = new google.maps.LatLng(41.886732, -87.651441);
  var marker = createMarker(point,"Next Restaurant","Next Restaurant<br> <img src='http://profile-a.xx.fbcdn.net/hprofile-prn1/c195.46.570.570/s160x160/923052_584522654913643_598549089_n.jpg' />")
 
  var point = new google.maps.LatLng(41.942152, -87.698056);
  var marker = createMarker(point,"Hot Doug's","Hot Doug's<br> <img src='http://www.hotdougs.com/Images/HotDougslogo_medium.jpg' width='100px' height='110px' />")
 
  var point = new google.maps.LatLng(41.929249, -87.707381);
  var marker = createMarker(point,"Longman & Eagle","Longman & Eagle <br> <img src='http://profile.ak.fbcdn.net/hprofile-ak-frc1/c14.14.173.173/s160x160/420899_10150663980892398_215683766_n.jpg' / >")

  var point = new google.maps.LatLng(41.933010, -87.707506);
  var marker = createMarker(point,"Yusho","Yusho <br> <img src='http://profile.ak.fbcdn.net/hprofile-ak-ash4/s160x160/383801_414820888598406_1106557948_a.png' />")

  var point = new google.maps.LatLng(41.887432, -87.635952);
  var marker = createMarker(point,"Mr. Beef","Mr. Beef <br> <img src='http://www.in-nycsite.com/wp-content/uploads/2012/03/MrBeefSign.jpg' height='100px' width='110px' />")
  
  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side_bar").innerHTML = side_bar_html;
}
 
var infowindow = new google.maps.InfoWindow(
  { 
    size: new google.maps.Size(150,50)
  });
    
// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

// A function to create the marker and set up the event window function 
function createMarker(latlng, name, html) {
    var contentString = html;
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        zIndex: Math.round(latlng.lat()*-100000)<<5
        });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(contentString); 
        infowindow.open(map,marker);
        });
    // save the info we need to use later for the side_bar
    gmarkers.push(marker);
    // add a line to the side_bar html
    side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';
}
google.maps.event.addDomListener(window, "load", initialize);

