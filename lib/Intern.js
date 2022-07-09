const Intern = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email,) {
        super(name, id, email, 'Intern');

    }
};

Intern.prototype.School = function () {
    return this.school
}

module.exports = Intern;
