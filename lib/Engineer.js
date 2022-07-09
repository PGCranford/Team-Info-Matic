const inquirer = require("inquirer");


class Engineer {
    constructor(nameE, empIDE, emailE, gitHubName) {
        this.name = nameE;
        this.empID = empIDE;
        this.email = emailE;
        this.gitHub = gitHubName;

    }
}



module.exports = Engineer;

