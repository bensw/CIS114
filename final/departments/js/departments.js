/*Benjamin Swartz
CIS 114 OL
departments.js
Final
5-24-2013 */
$(document).ready(function(){
data = {"depts": [
{"name":"Human Resources",

"employees":[

{"firstName":"Albert",
"lastName":"Einstein",
"department":"Human Resources",
"phoneNumber":"672-263-9510"},

{"firstName":"James",
"lastName":"Beard",
"department":"Human Resources",
"phoneNumber":"747-110-1070"},

{"firstName":"Bill",
"lastName":"Clinton",
"department":"Human Resources",
"phoneNumber":"557-380-3100"}
]},

{"name":"Information Technology",
"employees":[
{"firstName":"George",
"lastName":"Washington",
"department":"Information Technology",
"phoneNumber":"433-865-8102"},

{"firstName":"James",
"lastName":"Madison",
"department":"Information Technology",
"phoneNumber":"071-351-9721"},

{"firstName":"Abraham",
"lastName":"Lincoln",
"department":"Information Technology",
"phoneNumber":"361-920-2054"}
]},

{"name":"Customer Service",
"employees":[

{"firstName":"Barack",
"lastName":"Obama",
"department":"Customer Service",
"phoneNumber":"626-8476-106"},

{"firstName":"Larry",
"lastName":"Page",
"department":"Customer Service",
"phoneNumber":"121-640-6504"},

{"firstName":"Ross",
"lastName":"Perot",
"department":"Customer Service",
"phoneNumber":"506-273-4403"},

{"firstName":"George",
"lastName":"Bush",
"department":"Customer Service",
"phoneNumber":"509-8107-0102"}

]}
]};
	var tpl = "{{#depts}}<h1>{{name}}</h1>" + "<ul>{{#employees}}{{>employee}}{{/employees}}</ul>{{/depts}}";
	var partials = {employee: "<li>{{firstName}} {{lastName}} <span><em> {{phoneNumber}}</em></span> </li>"};
	var html = Mustache.to_html(tpl, data, partials);
	console.log("Html is " + html);
    $('#employees').html(html);
});

