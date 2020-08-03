const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, empId, email, office) {
        super(name, empId, email);
        this.office = office;
    }
    getRole() {
        return 'Manager';
    }
    getOffice() {
        return this.office;
    }
} 
module.exports = Manager;