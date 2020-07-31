const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class BuildTeam {

    promptManager = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? '
            },
            {
                type: 'input',
                name: 'empId',
                message: 'What is your employee ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?'
            },
            {
                type: 'input',
                name: 'role',
                message: 'job title leave blank for Manager'
            }
        ])
            .then(({ name, empId, email, office, role }) => {
                this.manager = new Manager(name, empId, email, office, role);
                return this.manager;
            })
    }
};
module.exports = BuildTeam;