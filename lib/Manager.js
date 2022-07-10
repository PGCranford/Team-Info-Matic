
const Employee = require('./Employee')




class Manager extends Employee {

    constructor(id, name, email, office) {
        super(id, name, email); //defines this constructor
        this.office = office
    }

    getOffice() {
        return "Office Number" + this.office;
    }

    retRole() {
        return "Manager";
    }


}

module.exports = Manager
