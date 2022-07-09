
const fs = require('fs');
const inquirer = require('inquirer');



const Manager = () => {

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
                name: "empID",
                message: "What is your manager's employee ID?",
                validate: (managerID) => {
                    if (managerID) {
                        return true;
                    }
                    else {
                        console.log("Please enter your manager's ");
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
                name: "officeNum ",
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

function otherRole() {

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
                    .then(otherRole)

            }
            else if (Role === 'intern') {
                return inquirer
                    .prompt([

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


                        }

                    ])
                    .then(otherRole)

            }
            else if (Role === 'no') {
                createPage(() => {
                    const createPage = deployHTML(manager, otherRole);

                    fs.writeFile('index.html', pageHtml, err => {
                        if (err) throw new Error(err);
                        console.log("HTML was created!");
                    });

                }
                )


            }

        });



};








manager()
    .then(managerData => {
        let manager = (managerData.name, managerData.email, managerData.office)
        return manager
    })

    .then(otherRole)

