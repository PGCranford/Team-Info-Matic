const Employee = require('./Employee')


class Engineer extends Employee {

    constructor(id, name, email, gitHubName) {
        super(id, name, email); //defines this constructor
        this.gitHubName = gitHubName
        this.role = this.getRole()
    }

    getgitHubName() {
        return this.gitHubName;
    }

    getRole() {
        return "Engineer";
    }


}



module.exports = Engineer;

