const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, empId, email, school) {
        super(name, empId, email);

        this.school = school;
    }
}
module.exports = Intern;