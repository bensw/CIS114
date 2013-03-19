// Name: Ben Swartz
// Course: CIS114
// Filename: cookies.js
// Chapter: 9
// Assignment: 4
// Date: 3/18/13
// Create one global object:
var COOKIE = {
    
    // Function for setting a cookie:
    setCookie: function(name, value, expire, path, domain) {
        'use strict';

        // Add validation!
        if ((typeof name != "string") && (typeof value != "string") && (expire instanceof Date != true){
            console.log("Please use valid inputs for setCookie()!");
            return false;
        }
        else{
            // Begin creating the value string:
            var str =  encodeURIComponent(name) + '=' + encodeURIComponent(value);
        
            // Add the expiration:
            str += ';expires=' + expire.toGMTString(); 
        
            //Add path if it exists
            if (path !== undefined) str += ";path=" + encodeURIComponent(path)

            // Add domain if it exists
            if (domain !== undefined) str += ";domain=" + encodeURIComponent(domain)
            // Create the cookie:
            document.cookie = str;

        }

        
    }, // End of setCookie() function.
    
    // Function for retrieving a cookie value:
    getCookie: function(name) {
        'use strict';

        // Useful to know how long the cookie name is:
        var len = name.length;
        
        // Split the cookie value:
        var cookies = document.cookie.split(';');

        // Loop through the values:
        for (var i = 0, count = cookies.length; i < count; i++) {

            // Lop off an initial space:
            var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];

			// Decode the value:
			value = decodeURIComponent(value);

            // Check if this iteration matches the name:
            if (value.slice(0,len) == name) {

                // Return the part after the equals sign:
                return value.split('=')[1];

            } // End of IF.
            
        } // End of FOR loop.
            
        // Return false if nothing's been returned yet:
        return false;

    }, // End of getCookie() function.
    
    // Function for deleting cookies:
    deleteCookie: function(name, path, domain) {
        'use strict';
        // If path or domain are non-empty, then add them to name
        if (typeof path != 'undefined') {
            name += ";path=" + path;
        }
        if (typeof path != 'undefined'){
            name += ";domain" + domain;
        }

        document.cookie = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT;;
    } // End of deleteCookie() function.

}; // End of COOKIE declaration.