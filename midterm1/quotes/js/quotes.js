// Name: Ben Swartz
// Course: CIS114
// Filename: quotes.js
// Chapter: 8
// Assignment: Midterm
// Date: 2/22/13 

// This function does all the work.
// It is immediately-invoked.
(function(){
    
	// Variable that stores the quotes:
    var quotes = ["Stealing is stealing, whether you use a computer command or a crowbar and whether you take documents, data, or dollars. -Carmen Ortiz", "Dear Congress, It's no longer OK to not know how the internet works. -Joshua Kopstein","But sharing isn't immoral -- it's a moral imperitive. Only those blinded by greed would refuse to let a friend make a copy. -Aaron Swartz"]


    function updateQuote(quotes){
        var output = document.getElementById('output')
        message = '<h2>Quotes</h2><ol>';
        for (var i = 0, count = quotes.length; i < count; i++) {
            message += '<li>' + quotes[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
    }
	// Function called when the form is submitted.
	// Function adds a quote to the global array.
    function addQuote() {
        'use strict';
        var quote = document.getElementById('quote');
        var output = document.getElementById('output');

        if (quote.value) {
            quotes.push(quote.value);
            updateQuote(quotes);
        
        } // End of quote.value IF.
        quote.value = '';
	    // Return false to prevent submission:
        return false;

    } // End of addQuote() function.
    //Function prompts user for which number quote to delete and checks to make sure it is a valid number then deletes it
    function deleteQuote() {
        'use strict';
        var quoteNumber = prompt("Which quote (number) would you like to delete?");
        quoteNumber -= 1;
        if (quotes[quoteNumber]){
            quotes.splice(quoteNumber, 1);
            updateQuote(quotes);
        }
    }
    //Function prompts user for which number quote to modify, checks to make sure it is a valid number, then allows the user to modiy it
    function modifyQuote() {
        'use strict';
        var quoteNumber = prompt("Which quote (number) would you like to delete?");
        quoteNumber -= 1;
        if (quotes[quoteNumber]){
            quotes[quoteNumber] = prompt("Please modify the text:",quotes[quoteNumber])
            updateQuote(quotes);
        }
    }

    // Initial setup:
    function init() {
        'use strict';
        updateQuote(quotes);
        document.getElementById('add').onclick = addQuote;
        document.getElementById('modify').onclick = modifyQuote;
        document.getElementById('delete').onclick = deleteQuote;
    } // End of init() function.
    window.onload = init;

})();