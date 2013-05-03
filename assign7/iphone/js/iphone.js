/*Benjamin Swartz
CIS 114 OL
iphone.js
Assignment 7
5-3-2013*/
var hist = [];
var startUrl = './ix.html';
$(document).ready(function(){
    loadPage(startUrl);
});
function loadPage(url) {
    $('body').append('<div id="progress">Loading...</div>');
    scrollTo(0,0);
    if (url == startUrl) {
        var element = ' #header ul';
    } else {
        var element = ' #content';
    }
    $('#container').load(url + element, function(){
        if (url == startUrl) {
                titleText = 'Home';
        } else {
                titleText = 'Back';
        }
        var title = $('h2').html() || titleText;
        $('h1').html(title); $('h2').remove();
        $('.leftButton').remove();
        hist.unshift({'url':url, 'title':title});
        if (hist.length > 1) {
            $('#header').append('<div class="leftButton">'+hist[1].title+'</div>');
            $('#header .leftButton').click(function(e){
                $(e.target).addClass('clicked');
                var thisPage = hist.shift();
                var previousPage = hist.shift();
                loadPage(previousPage.url);
            });
        }
        $('#container a').click(function(e){
            var url = e.target.href;
            /* NOTE: You MUST replace jonathanstark.com in the following line with your domain name. For more info, please visit http://ofps.oreilly.com/titles/9780596805784/ch03.html#ch03_id35816921 */
                e.preventDefault();
                loadPage(url);
            
        });
        $('#progress').remove();
    });
}