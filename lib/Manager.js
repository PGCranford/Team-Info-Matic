const inquirer = require("inquirer");

class Manager {
    constructor(nameM, empIDM, emailM, officeNum) {
        this.name = nameM;
        this.empID = empIDM;
        this.email = emailM;
        this.officeNum = officeNum;

    }
}


module.exports = Manager
