const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { registerPrompt } = require('inquirer');

class BuildTeam {
    constructor() {
        this.empArray = [];
    }

    promptManager = () => {

        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name? Required.",
                validate: nameInput => {
                    if (!nameInput) {
                        console.log("Please enter the team manager's name!");
                        return false;
                    } return true;
                }
            },
            {
                type: 'number',
                name: 'empId',
                message: 'What is your employee ID?',
                validate: empIdInput => {
                    if (typeof (empIdInput) !== 'number' || empIdInput < 1) {
                        console.log("Employee Id must be a valid positive number!")
                        return false;
                    }
                    if (this.empArray.some((emp) => empIdInput === emp.getEmpId())) {
                        console.log('This id is already taken please choose another');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address',
                validate: emailInput => {
                    if (!emailInput) {
                        console.log("You must enter a valid email address!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?',
                validate: officeInput => {
                    if (!officeInput) {
                        console.log("Please enter the team manager's office number!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'confirm',
                name: 'confirmEnterEmp',
                message: 'Would you like to enter other employees?',
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
                message: "What is your employee's name?",
                validate: nameInput => {
                    if (!nameInput) {
                        console.log("Please enter the team manager's name!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'number',
                name: 'empId',
                message: "What is your employee's ID?",
                validate: empIdInput => {
                    if (typeof (empIdInput) !== 'number' || empIdInput < 1) {
                        console.log("Employee Id must be a valid positive number!")
                        return false;
                    }
                    if (this.empArray.some((emp) => empIdInput === emp.getEmpId())) {
                        console.log('This id is already taken please choose another');
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your employee's email address?",
                validate: emailInput => {
                    if (!emailInput) {
                        console.log("You must enter a valid email address!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                when: (answers) => answers.empType === 'Engineer',
                validate: githubInput => {
                    if (!githubInput) {
                        console.log("You must enter a GitHub user name for the engineer!");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the name of the intern's school?",
                when: (answers) => answers.empType === 'Intern',
                validate: schoolInput => {
                    if (!schoolInput) {
                        console.log('You must enter a school for the intern!')
                        return false;
                    }
                    return true;
                }
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