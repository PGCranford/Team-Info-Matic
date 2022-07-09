
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
            }

        });



};

// function engineerData(Role) {
//     if (Role === 'engineer') {

//         return inquirer

//             .prompt([

//                 {
//                     type: "input",
//                     name: "gitHubName",
//                     message: "Enter the Git Hub username of your engineer.",
//                     validate: (githubInput) => {
//                         if (githubInput) {
//                             return true;
//                         }
//                         else {
//                             console.log("Enter a Git Hub username")
//                             return false;
//                         }
//                     }

//                 }


//             ])


//     };
// }

// function intern() {

//     return inquirer
//         .prompt([
//             {
//                 type: "list",
//                 name: "internRole",
//                 message: "Do you want to include an intern on your team?",
//                 choices: ['Yes', 'No'],
//                 validate: ({ choices }) => choices
//             }
//         ])
// };

// function internData() {

//     return inquirer
//         .prompt([

//             {
//                 type: "input",
//                 name: "school",
//                 message: "What school is your intern attending?",
//                 validate: (schoolInput) => {
//                     if (schoolInput) {
//                         return true;
//                     }
//                     else {
//                         console.log("Please enter your intern's school");
//                         return false;
//                     }
//                 }


//             }

//         ])
// }






manager()
    .then(managerData => {
        let manager = (managerData.name, managerData.email, managerData.office)
        return manager
    })

    .then(otherRole)

