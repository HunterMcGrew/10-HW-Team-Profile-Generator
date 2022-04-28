// required stuff
const inquirer = require("inquirer");
const fs = require("fs");
const express = require("express");
const generateHtml = require("./src/page-template");

// import modules from classes
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// add team member function
function addTeamMember() {
    
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your team member's name...",
            name: "name",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("\nPlease enter a valid name...\n");
                }
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
    .then( (name, id, email, role) => {
        
        let roleType = "";

        if (role === "Employee" || "Engineer") {
            roleType = "GitHub username"; 
        } else if (role === "Intern") {
            roleType = "college name";
        } else {
            roleType = "office phone number";
        };

        inquirer.prompt([
            {
                type: "input",
                message: `Please enter ${name}'s ${roleType}...`,
                name: "roleType",
                validate: (answer) => {
                    if (answer.length < 1) {
                        return console.log(`\nPlease enter a valid ${roleType}...\n`);
                    }
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

    // then take this info, (maybe push?), tell it what class to use, and send it to the HTML generator
}

function init () {
    addTeamMember();
       
        
};
