//node modules
const inquirer = require("inquirer");
const fs = require("fs");

// HTML generation
const generateHtml = require("./src/start-template");
// const employeeHtml = require("./src/employee-template");
// const finishHtml = require("./src/finish-template");

// modules for employee roles
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// team member array
const teamMembers = [];

// employee question prompts
const addTeamMember = () => {

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
            name: "roleType",
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
            message: "What is their GitHub username?",
            name: "roleType",
            when: input => input.role === "Engineer",
            validate: (answer) => {
                if (answer.legnth < 1) {
                    return console.log("\nPlease enter a valid GitHub username...\n");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Enter their office number...",
            name: "roleType",
            when: input => input.role === "Manager",
            validate: (answer) => {
                if (answer.legnth < 1) {
                    return console.log("\nPlease enter a valid office number...\n");
                }
                return true;
            }
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["yes", "no"],
            name: "addMore"
        }
    ])
    .then(teamMemberData => {
        // taking info gathered above to use on class/tempaltes

        let {role, name, id, email, roleType, addMore} = teamMemberData;

        let teamMember;

        if (role === "Intern") {
            teamMember = new Intern(role, name, id, email, roleType);
        } else if (role === "Engineer") {
            teamMember = new Engineer(role, name, id, email, roleType);
        } else {
            teamMember = new Manager(role, name, id, email, roleType);
        }
        teamMembers.push(teamMember);  // push teamMember to teamMembers Array

        if (addMore === "yes") {
            return addTeamMember(teamMembers);
        } else {
            return teamMembers;
        };

    })
};

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your Team Profile has been successfully generated!");
        }
    }
    )
};


addTeamMember()
.then(teamMembers => {
    return generateHtml(teamMembers);
})
.then(indexHtml  => {return writeFile(indexHtml)})
.catch((err) => {console.log(err)})