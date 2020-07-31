const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, empId, email, github, role = 'Engineer') {
        super(name, empId, email, role);

        this.github = github;
    }
}
module.exports = Engineer;