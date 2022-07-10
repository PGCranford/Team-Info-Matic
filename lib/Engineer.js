const Employee = require('./Employee')


class Engineer extends Employee {

    constructor(id, name, email, gitHubName) {
        super(id, name, email); //defines this constructor
        this.gitHubName = gitHubName
    }

    getgitHubName() {
        return this.gitHubName;
    }

    retRole() {
        return "Engineer";
    }


}



module.exports = Engineer;

