
const Employee = require('./Employee')




class Manager extends Employee {

    constructor(id, name, email, office, role) {
        super(id, name, email); //defines this constructor
        this.office = office
        this.role = this.getRole()
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }


}

module.exports = Manager
