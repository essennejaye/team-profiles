const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, empId, email, office) {
        super(name, empId, email);

        this.office = office;
    }
}
module.exports = Manager;