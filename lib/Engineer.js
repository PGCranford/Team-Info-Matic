const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email,) {
        super(name, id, email, 'Engineer');

    }
};
Engineer.prototype.getGithub = function () {
    return this.gitHubName;
}



module.exports = Engineer;

