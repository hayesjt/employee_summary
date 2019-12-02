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
        // START WRITING HTML PAGE WITH MANAGER INFORMATION
        fs.writeFile("main.html", `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Summary</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
        /* Style for shell of employee dashboard page */

        body {
            background-image: url(images/cork-board.png);
        }

        .jumbo {
            margin-top: 10px;
        }

        /* Style for Manger section */

        .manager {
            padding: 10px;
            margin-bottom: 10px;
            background-color: lightslategrey;
            color: white;
        }

        /* Style for Engineer cards */

        .engineer {
            margin-bottom: 5px;
            background-color: maroon;
            color: white;
        }

        /* Style for intern cards */

        .intern {
            margin-bottom: 5px;
            background-color: midnightblue;
            color: white;
        }
    </style>
</head>

<body>
    <div class="jumbotron rounded border border-secondary jumbo text-center">
        <h1 class="display-4">Employee Dashboard</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <!-- Managers Informations -->
                <div class="card manager">
                    <div class="card-body">
                        <h5 class="card-title">Manager: ${answers.name}</h5>
                        <p class="card-text">Employee ID: ${answers.id}</p>
                        <p class="card-text">Email: ${answers.email}</p>
                        <p class="card-text">Office Number: ${answers.office}</p>
                    </div>
                </div>
            </div>
        </div>
        `, (err) => {
            if (err)
                throw err;
        })

        // PROMPTING MANAGER TO FILL OUT EMPLOYEE INFORMATION BEFORE WRITING A FILE
        getTeam();
    });
};

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
            case "Engineer": engineer();
                break;
            case "Intern": intern();
                break;
            default:
                console.log(" ________ TEAM IS COMPLETE - OPEN MAIN.HTML FILE ________")
                // APPENDING TEAM INFORMATION TO MAIN.HTML
                fs.appendFile("main.html", "</div><body><html>", (err) => {
                    if (err)
                        throw err;
                })
        }
    })
}

function engineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineers name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineers ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineers email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineers github username?"
        }
    ]).then(function (answers) {
        // NEED TO CALL TEAM FUNCTION AGAIN IN CASE THEY WANT TO KEEP ADDING EMPLOYEES
        getTeam();

        // APPEND TEAM INFORMATION TO HTML MAIN FILE
        fs.appendFile("main.html", `
            <div class="row text-center">
            <div class="col-md-12 text-center">
            <!-- Engineer Information -->
            <div class="card engineer">
                <div class="card-body ">
                    <h5 class="card-title">Engineer</h5>
                    <p class="card-text">Name: ${answers.name}</p>
                    <p class="card-text">Employee ID: ${answers.id}</p>
                    <p class="card-text">Email: ${answers.email}</p>
                    <p class="card-text">GitHub Profile: ${answers.github}</p>
                </div>
            </div>
        </div>
    </div>
            `, (err) => {
            if (err)
                throw err;
        })
    });
};

function intern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the interns name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the interns ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the inters email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the interns school?"
        }
    ]).then(function (answers) {
        getTeam();

        // APPEND TEAM INFORMATION TO HTML MAIN FILE
        fs.appendFile("main.html", `
        <div class="row text-center">
        <div class="col-md-12 text-center">
    <!-- Intern information -->
    <div class="card intern">
        <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text">Name: ${answers.name}</p>
            <p class="card-text">Employee ID: ${answers.id}</p>
            <p class="card-text">Email: ${answers.email}</p>
            <p class="card-text">School: ${answers.school}</p>
        </div>
    </div>
</div>
</div>
            `, (err) => {
            if (err)
                throw err;
        })
    });
};

// CALLING APP TO RUN
runAPP();