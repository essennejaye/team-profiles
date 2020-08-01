const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class BuildTeam {
    constructor() {
        this.empArray = [];
    }

    promptManager = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? '
            },
            {
                type: 'number',
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
                type: 'confirm',
                name: 'confirmEnterEmp',
                message: 'Would you like to enter another employee?',
                default: true
            }
        ])
            .then(mdata => {
                this.empArray.push(new Manager(mdata.name, mdata.empId, mdata.email, mdata.office));
                return mdata.confirmEnterEmp;
            })
    }
    promptForEmployees = () => {
        console.log(`
        ===============
        Add a New Employee
        ===============
        `);
        return inquirer.prompt([
            {
                type: 'list',
                name: 'empType',
                message: 'What type of employee do you wish to enter?',
                choices: ['Engineer', 'Intern'],
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your employee's name?"
            },
            {
                type: 'number',
                name: 'empId',
                message: "What is your employee's ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your employee's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                when: (answers) => answers.empType === 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the name of the intern's school?",
                when: (answers) => answers.empType === 'Intern'
            },
            {
                type: 'confirm',
                name: 'confirmEnterEmp',
                message: 'Would you like to enter another employee?',
                default: true
            }
        ])
            .then(empData => {
                if (empData.empType === 'Engineer') {
                    this.empArray.push(new Engineer(empData.name, empData.empId, empData.email, empData.github));
                } else {
                    this.empArray.push(new Intern(empData.name, empData.empId, empData.email, empData.school));
                }
                if (empData.confirmEnterEmp) {
                    return this.promptForEmployees();
                } else {
                    return this.empArray;
                }
            })
    }
};
module.exports = BuildTeam;