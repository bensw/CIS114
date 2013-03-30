// tasks.js #4
// This script manages a to-do list.
/*
Benjamin Swartz
CIS 114 OL
tasks.js
Chapters 14
Assignment 5
3-29-2013
*/

// Function for creating Task objects.
// Function takes two arguments: the task name and its priority.
function Task(name, priority) {
    'use strict';
	
	// Assign the paremeters to variables:
	this.name = name;
	this.priority = priority;

	// Set the completion to false (i.e., not completed).
	this.completed = false;
	
	// Define a toString() method:
	this.toString = function() {
		return this.name + ' (' + this.priority + ')';
	};
	
} // End of Task function.

// Function that sets up the work:
window.onload = function(){
    'use strict';

	// Form references:
	var task = document.getElementById('task');
	var priority = document.getElementById('priority');
	var output = document.getElementById('output');

	// Variable that stores the tasks:
	var tasks = []; 

	// Function called when the form is submitted.
	// Function adds a task to the array.
	document.getElementById('theForm').onsubmit = function() {
		
		// Create a new Task:
		var t = new Task(task.value, priority.value);

		// Add it to the array:
		tasks.push(t);
		
		// Update the output:
        output.innerHTML = ''
        var outHTML =  'There are now <b>' + tasks.length + '</b> item(s) in the to-do list. Just added:<br>' + t.toString();        
        //Add each task to an ordered list
        outHTML += "<ol>";
        for (var i=0; i<tasks.length; i++){
        	outHTML += "<li>" + tasks[i].toString() + "</li>";
        }
        outHTML += "</ol>";
        output.innerHTML = outHTML;
        // Clear tast after update
        task.value = '';
	    // Return false to prevent submission:
        return false;

	}; // End of onsubmit anonymous function.

}; // End of onload anonymous function.