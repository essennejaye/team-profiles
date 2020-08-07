const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, empId, email, school) {
        super(name, empId, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;