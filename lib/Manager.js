
const Employee = require('./Employee')


class Manager extends Employee {

    constructor(id, name, email, officeNum) {
        super(id, name, email); //defines this constructor
        this.officeNum = officeNum
    }

    getofficeNum() {
        return this.officeNum;
    }

    retRole() {
        return "Manager";
    }


};







module.exports = Manager
