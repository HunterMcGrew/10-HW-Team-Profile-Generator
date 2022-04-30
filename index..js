//node modules
const inquirer = require("inquirer");
const fs = require("fs");

// HTML generation
const startHtml = require("./src/start-template");
const employeeHtml = require("./src/employee-template");
const finishHtml = require("./src/finish-template");

// modules for employee roles
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// team member array
const teamMembers = [];

// employee question prompts
const addEmployee = () => {

    return inquirer.prompt([
        {
            type: "list",
            message: "Select the team members role...",
            name: "role",
            choices: ["Intern", "Engineer", "Manager"]
        },
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
            type: "input",
            message: "What school did they attend?",
            name: "school",
            when: input => input.role === "Intern",
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("\nPlease enter a valid school name...\n");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is their GitHub profile link?",
            name: "github",
            when: input => input.role === "Engineer",
            validate: (answer) => {
                if (answer.legnth < 1) {
                    return console.log("\nPlease enter a valid GitHub profile link...\n");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Enter their office number...",
            name: "office",
            when: input => input.role === "Manager",
            validate: (answer) => {
                if (answer.legnth < 1) {
                    return console.log("\nPlease enter a valid office number...\n");
                }
                return true;
            }
        }

       
    ])
};

addEmployee()
.catch((err) => {console.log(err)})