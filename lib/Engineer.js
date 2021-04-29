const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, empId, email, github) {
        super(name, empId, email);
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;