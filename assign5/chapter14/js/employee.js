// employee.js #2
// This script creates an object using form data.
/*
Benjamin Swartz
CIS 114 OL
employee.js
Chapters 14
Assignment 5
3-29-2013
*/

// Function called when the form is submitted.
// Function creates a new object.
function process() {
    'use strict';

    // Get form references:
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // Create a new object:
    var employee = new Employee(firstName, lastName, department)
    // var employee = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     department: department,
    //     getName: function() {
    //         return this.lastName + ', ' + this.firstName;
    //     },
    //     hireDate: new Date()
    // }; // Don't forget the semicolon!
    
    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
        
    // Return false:
    return false;
    
} // End of process() function.
// Employee constructor
function Employee(firstName, lastName, department){
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.hireDate = new Date();
    this.getName = function () {
        return this.firstName + ", " + this.lastName;
    };
}
Date.prototype.getMonthName = function() {
    // List of month names
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', "November", 'December'];
    // Index into array based on getMonth() (recall it is 0 indexed) 
    var monthName = monthNames[this.getMonth()];
    return monthName;
}

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;