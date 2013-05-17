/*Benjamin Swartz
CIS 114 OL
stock.js
Assignment 8
5-17-2013*/
var jQT = $.jQTouch({ 
    icon: 'kilo.png'
}); 
$(document).ready(function(){
    $('#createEntry').click(getQuote);
});
function getQuote() {
    var stockSymbol = $('#stockSymbol').val();
    console.log(stockSymbol);
    $.getJSON("https://www.google.com/finance/info?infotype=infoquoteall&q=" + stockSymbol + "&format=json&callback=?", function(data){
    console.log(data);
    var o = "<ul>";
    o += "<li> Company: " + data[0].name + "</li>";
    o += "<li> Symbol: " + data[0].t + "</li>";
    o += "<li> Date: " + data[0].lt + "</li>";
    o += "<li> Current: " + data[0].l + "</li>";
    o += "<li> High: " + data[0].hi + "</li>";
    o += "<li> Low: " + data[0].lo + "</li>";
    o += "<li> Volume: " + data[0].vo + "</li>";
    o += "</ul>";
    console.log(o);
    $('#stockQuote').empty();
    $('#stockQuote').html(o);
    });
    return false;
}