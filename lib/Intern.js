const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, empId, email, school, role = 'Intern') {
        super(name, empId, email, role);

        this.school = school;
    }
}
module.exports = Intern;