const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, empId, email, office, role = 'Manager') {
        super(name, empId, email, role);

        this.office = office;
    }
} 

module.exports = Manager;