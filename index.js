const { validate } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');


const manager = () => {

    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?",
                validate: (managerInput) => {
                    if (managerInput) {
                        return true;
                    }
                    else {
                        console.log("Please enter your manager's name");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your manager's email address?",
                validate: (managerEmail) => {
                    if (managerEmail) {
                        return true;
                    }
                    else {
                        console.log("Please enter your manager's email");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "office ",
                message: "What is your office number?",
                validate: (managerOffice) => {
                    if (managerOffice) {
                        return true;
                    }
                    else {
                        console.log("Please enter your office number");
                        return false;
                    }
                }
            }
        ])
};

function engineer() {

    return inquirer
        .prompt([
            {
                type: "list",
                name: "engineerRole",
                message: "Do you want to include an engineer on your team?",
                choices: ['Yes', 'No'],
                validate: ({ choices }) => choices
            }
        ])
};

function engineerData(engineerRole) {
    if (engineerRole === 'Yes') {
        return inquirer

            .prompt([

                {
                    type: "input",
                    name: "name",
                    message: "What is your  engineer's name?",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        }
                        else {
                            console.log("Please enter your  engineer's name");
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is your email engineer's adrress ?",
                    validate: (emailInput) => {
                        if (emailInput) {
                            return true;
                        }
                        else {
                            console.log("Please enter your engineer's email");
                            return false;
                        }
                    }
                },


            ])
    }
};




manager()
    .then(managerData => {
        let manager = (managerData.name, managerData.email, managerData.office)
        return manager
    })

    .then(engineer)
    .then(engineerData)

