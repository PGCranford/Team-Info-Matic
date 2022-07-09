const Intern = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email,) {
        super(name, id, email, 'Intern');

    }
};

module.exports = Intern;
