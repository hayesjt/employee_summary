// REQUIRED PACKAGES FOR APPLICATION TO FUNCTION CORRECTLY
const inquirer = require("inquirer");
const fs = require("fs");

// FIRST MESSAGE THAT POPS UP FOR APPLICATION
console.log("Let's Build your employee summary")

// ENTIRE FUNCTION THAT RUNS THE APPLICATION 
function runAPP() {
    // PROMPTS THE MANAGER TO FILL OUT ALL INFORMATION
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "what is your manager ID?"
        },
        {
            type: "input",
            name: "email",
            message: "what is your email address?"
        },
        {
            type: "input",
            name: "office",
            message: "what is your office number?"
        }
    ]).then(function (answers) {
        // CONFIRM ANSWERS HAS COME INTO THIS FUNCTION 
        // console.log(answers);
        // PROMPTING MANAGER TO FILL OUT EMPLOYEE INFORMATION BEFORE WRITING A FILE
        getTeam();
        // START WRITING HTML PAGE WITH MANAGER INFORMATION
        fs.writeFile(".main.html", ``)
    })
}

function getTeam() {
    return inquirer.prompt([
        {
            type: "list",
            name: "team",
            message: "What type of team member are you adding?",
            choices: [
                "Engineer",
                "Intern",
                "I do not have anymore employees to add"
            ]
        }
    ]).then(function (answer) {
        switch (answer.team) {
            case "Engineer": Engineer();
                break;
            case "Intern": Intern();
                break;
            default:
                console.log(" ________ TEAM IS COMPLETE - OPEN EMPLOYEE FILE ________")
                // APPENDING TEAM INFORMATION TO MAIN.HTML
                fs.appendFile("./main.html", "<body><html>", (err) => {
                    if (err)
                        throw err;
                })
        }
    })
}

// CALLING APP TO RUN
runAPP();