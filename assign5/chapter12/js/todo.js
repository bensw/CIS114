/*
Benjamin Swartz
CIS 114 OL
todo.js
Chapters 12
Assignment 5
3-29-2013
*/

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
        try{

            if (tasks[taskNumber]==undefined){
                throw{name: 'Index Out of Range', message: 'Cannot delete a non-existent item from an array'};
                }
            tasks.splice(taskNumber, 1);
            updateTasks(tasks);
        } catch (err) {
            console.log("Caught: " + err.name + " with: " + err.message);
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