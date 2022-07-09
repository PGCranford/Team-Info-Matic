
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')
const createPage = require('./createPage')



const manager = managerRole => {

    return inquirer
        .prompt([
            {
                type: "input",
                name: "nameM",
                message: "What is your manager's name?",
                validate: (managerName) => {
                    if (managerName) {
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
                name: "empIDM",
                message: "What is your manager's employee ID?",
                validate: (managerID) => {
                    if (managerID) {
                        return true;
                    }
                    else {
                        console.log("Please enter an ID number");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "emailM",
                message: "What is your manager's email address?",
                validate: (managerEmail) => {
                    if (managerEmail) {
                        return true;
                    }
                    else {
                        console.log("Please an email");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNum ",
                message: "What is your  manager's office number?",
                validate: (managerOffice) => {
                    if (managerOffice) {
                        return true;
                    }
                    else {
                        console.log("Please enter an office number");
                        return false;
                    }
                }
            },
        ])
        .then(({ nameM, empIDM, emailM, officeNum }) => {
            this.Manager = new Manager(nameM, empIDM, emailM, officeNum);

        })
};

const otherRole = roleInput => {

    return inquirer
        .prompt([
            {
                type: "list",
                name: "Role",
                message: "Do you want to include an engineer or an intern on your team?",
                choices: ['engineer', 'intern', 'no'],
            }
        ])
        .then(({ Role }) => {
            if (Role === 'engineer') {
                return inquirer

                    .prompt([
                        {
                            type: "input",
                            name: "nameE",
                            message: "What is your engineer's name?",
                            validate: (engineerInput) => {
                                if (engineerInput) {
                                    return true;
                                }
                                else {
                                    console.log("Please enter a name");
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "empIDE",
                            message: "What is your engineer's employee ID?",
                            validate: (engineerID) => {
                                if (engineerID) {
                                    return true;
                                }
                                else {
                                    console.log("Please enter an ID number");
                                    return false;
                                }
                            }
                        },

                        {
                            type: "input",
                            name: "emailE",
                            message: "What is your engineer's email address?",
                            validate: (engineerEmail) => {
                                if (engineerEmail) {
                                    return true;
                                }
                                else {
                                    console.log("Please an email");
                                    return false;
                                }
                            }
                        },

                        {
                            type: "input",
                            name: "gitHubName",
                            message: "Enter the Git Hub username of your engineer.",
                            validate: (githubInput) => {
                                if (githubInput) {
                                    return true;
                                }
                                else {
                                    console.log("Enter a Git Hub username")
                                    return false;
                                }
                            }

                        }

                    ])
                    .then(({ nameE, empIDE, emailE, gitHubName }) => {
                        this.Engineer = new Engineer(nameE, empIDE, emailE, gitHubName);
                    })
                    .then(otherRole)

            }
            else if (Role === 'intern') {

                return inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "nameI",
                            message: "What is your intern's name?",
                            validate: (internInput) => {
                                if (internInput) {
                                    return true;
                                }
                                else {
                                    console.log("Please enter a name");
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "empIDI",
                            message: "What is your intern's employee ID?",
                            validate: (internID) => {
                                if (internID) {
                                    return true;
                                }
                                else {
                                    console.log("Please enter an ID number");
                                    return false;
                                }
                            }
                        },

                        {
                            type: "input",
                            name: "emailI",
                            message: "What is your intern's email address?",
                            validate: (internEmail) => {
                                if (internEmail) {
                                    return true;
                                }
                                else {
                                    console.log("Please an email");
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "school",
                            message: "What school is your intern attending?",
                            validate: (schoolInput) => {
                                if (schoolInput) {
                                    return true;
                                }
                                else {
                                    console.log("Please enter your intern's school");
                                    return false;
                                }
                            }
                        },

                    ])

                    .then(({ nameI, empIDI, emailI, school }) => {
                        this.Intern = new Intern(nameI, empIDI, emailI, school);
                    })

                    .then(otherRole)


            }
            else if (Role === 'no') {
                return

            }
        });


};


manager()
    // .then(managerData => {
    //     letmanager = (managerData.nameM, manager.empIDM, manager.emailM, manager.officeNum)
    //     return manager
    // })


    .then(otherRole)
    .then(managerRole => {

    })

