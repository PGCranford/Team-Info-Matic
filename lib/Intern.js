const Employee = require('./Employee')

class Intern extends Employee {

    constructor(id, name, email, school, IDschool) {
        super(id, name, email); //defines this constructor
        this.school = school
        this.role = this.getRole()

    }

    getschool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    getIDschool() {
        return "School:"
    }



}

module.exports = Intern;
