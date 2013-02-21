// Name: Ben Swartz
// Course: CIS114
// Filename: tasks.js
// Chapter: 6
// Assignment: 3
// Date: 2/21/13 


// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
   
    // For the output:
    var message = '';
    console.log(task.value);
    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);



        //Clear the text input
        task.value = "";
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';

        // Get and insert a random task
        // Create a random number betwen 0 and tasks.length - 1
        console.log(tasks.length);
        var rand = Math.floor((Math.random()*tasks.length));
        console.log(rand);
        message += "<p> Here's a random task: " + tasks[rand] + "</p>";
        var endMessage = ['<p>You have ',tasks.length,' task(s) in your to-do list.</p>'];
        endMessage = endMessage.join(' ');
        console.log(endMessage);
        console.log(message);
        message += endMessage
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    var form = document.getElementById('theForm')
    form.onsubmit = addTask;
} // End of init() function.
window.onload = init;