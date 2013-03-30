/*
Benjamin Swartz
CIS 114 OL
employee.js
Assignment 5
3-29-2013
*/

function Employee(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.hireDate = new Date();
    this.getName = function() {
        return this.firstName + ' ' + this.lastName;
    };
    this.toString = function() {
    	return 'Name: ' + this.firstName + ' ' + this.lastName + '\n Department: ' + this.department;
    };
}
function Department(name) {
    this.name = name;
    this.employees = [];
    this.addEmployee = function(emp) {
        this.employees.push(emp);
        emp.department = this.name; // To ensure consistency.
    };
}
function createAndPopulateDepartments() {
	//Create Departments
	hr = new Department("Human Resources");
	it = new Department("Information Technology");
	cs = new Department("Customer Service");

	//Create Employees and add them to their respective departments
	e1 = new Employee("Albert", "Einstein", hr);
	e2 = new Employee("James", "Beard", hr);
	e3 = new Employee("Bill", "Clinton", hr);
	hr.addEmployee(e1);
	hr.addEmployee(e2);
	hr.addEmployee(e3);
	e4 = new Employee("George", "Washington", it);
	e5 = new Employee("James", "Madison", it);
	e6 = new Employee("Abraham", "Lincoln", it);
	it.addEmployee(e4);
	it.addEmployee(e5);
	it.addEmployee(e6);
	e7 = new Employee("Barack", "Obama", cs);
	e8 = new Employee("Larry", "Page", cs);
	e9 = new Employee("Ross", "Perot", cs);
	e10 = new Employee("George", "Bush", cs);
	cs.addEmployee(e7);
	cs.addEmployee(e8);
	cs.addEmployee(e9);
	cs.addEmployee(e10);

	//Return with list of departments to make looping easier later
	var departments = [hr, it, cs];
	return departments

}
window.onload = function() {
	'use strict';
	var output = document.getElementById("output");
	var departments = createAndPopulateDepartments();
	
	//Begin with an ordered list:
	// output.innerHTML += "<ul>"
	// For each of the departments created above
	for (var i=0; i<departments.length; i++){
		// For each employee in each department
		for (var j=0; j<departments[i].employees.length; j++){
			//Add that employee's toString() to output's innerHTML
			//Remember '\n' is line break in strings, but in HTML it is <br>
			output.innerHTML += "<p>"
			output.innerHTML += departments[i].employees[j].toString().replace("\n","<br>");
			output.innerHTML += "</p>"
		}
	}
	// output.innerHTML += '</ul>'
}