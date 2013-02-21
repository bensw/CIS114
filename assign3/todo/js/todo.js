// Name: Ben Swartz
// Course: CIS114
// Filename: todo.js
// Chapter: 7
// Assignment: 3
// Date: 2/21/13 

// This function does all the work.
// It is immediately-invoked.
(function(){
    
	// Variable that stores the tasks:
    var tasks = []; 

    function updateTasks(tasks){
        var output = document.getElementById('output')
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
    }
	// Function called when the form is submitted.
	// Function adds a task to the global array.
    function addTask() {
        'use strict';
        var task = document.getElementById('task');
        var output = document.getElementById('output');

        if (task.value) {
            tasks.push(task.value);
            updateTasks(tasks);
        
        } // End of task.value IF.
        task.value = '';
	    // Return false to prevent submission:
        return false;

    } // End of addTask() function.

    function deleteTask() {
        'use strict';
        var taskNumber = prompt("Which task (number) would you like to delete?");
        taskNumber -= 1;
        if (tasks[taskNumber]){
            tasks.splice(taskNumber, 1);
            updateTasks(tasks);
        }
    }

    // Initial setup:
    function init() {
        'use strict';
        document.getElementById('add').onclick = addTask;
        document.getElementById('delete').onclick = deleteTask;
    } // End of init() function.
    window.onload = init;

})();