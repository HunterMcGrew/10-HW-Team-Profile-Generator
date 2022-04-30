// required stuff
const inquirer = require("inquirer");
const fs = require("fs");
const express = require("express");
const startHtml = require("./src/start-template");
const employeeHtml = require("./src/employee-template");
const finishHtml = require("./src/finish-template");

// import modules from classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

var teamMembers = [];

// add team member function
function addTeamMember() {
    
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your team member's name...",
            name: "name",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("\nPlease enter a valid name...\n");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Enter the team member's ID number...",
            name: "id",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("\nPlease enter a valid ID number...\n");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Please enter the team member's email address...",
            name: "email",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("\nPlease enter a valid email address...\n");
                }
                return true;
            }
        },
        {
            type: "list",
            message: "Select the team member's role...",
            options: [
                "Employee",
                "Intern",
                "Engineer",
                "Manager"
                ],
            name: "role",
        }
    ])
    .then( (name, id, email, role, roleType, addMore) => {

        if (role === "Employee" || "Engineer") {
            let roleType = "GitHub username"; 
        } else if (role === "Intern") {
            let roleType = "college name";
        } else {
            let roleType = "office phone number";
        };

        inquirer.prompt([
            {
                type: "input",
                message: `Please enter ${name}'s ${roleType}...`,
                name: "roleInfo",
                validate: (answer) => {
                    if (answer.length < 1) {
                        return console.log(`\nPlease enter a valid ${roleType}...\n`);
                    }
                    return true;
                }
            },
            {
                type: "list",
                message: "Do you want to add more team members?",
                options: [
                    "yes",
                    "no"
                ],
                name: addMore
            }
        ])
        

    })
    .then( function(name, id, email, role, roleType, teamMember) {
        let data = (name, id, email, role, roleInfo);

        if (role === "Engineer") {
            let teamMember = new Engineer(name, id, email, role, roleType);
        } else if (role === "Intern") {
            let teamMember = new Intern(name, id, email, role, roleType);
        } else {
            let teamMember = new Manager(name, id, email, role, roleType);
        };

        teamMembers.push(teamMembers);
    })

    // then take this info, (maybe push?), tell it what class to use, and send it to the HTML generator
    // take employee info, decide waht role they are, send it to teamMembers array, 
};

// function addEmployee () {

//     fs.appendFile
// }


addTeamMember() // then prompt for questions about team member 
.then( (fs.writeFileSync("./dist/index.html", startHtml)) // generate start-template html file)
.catch((err) => console.log(err))) // check for errors
       
