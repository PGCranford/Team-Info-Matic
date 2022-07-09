const inquirer = require("inquirer");

class Intern {
    constructor(nameI, empIDI, emailI, school) {
        this.name = nameI;
        this.empID = empIDI;
        this.email = emailI;
        this.school = school;

    }
}

module.exports = Intern;
