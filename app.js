const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generatePage = require('./src/page-template');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'index.html');
const cssPath = path.join(OUTPUT_DIR, 'style.css')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

const promptManager = () => {
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
            message: 'What is your employee ID? Required!',
            validate: empIdInput => {
                if (!Number.isInteger(empIdInput) || empIdInput < 1) {
                    console.log("Employee Id must be a valid positive number!");
                    return false;
                }
                if (team.some((emp) => empIdInput === emp.getEmpId())) {
                    console.log('This id is already taken please choose another');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? Required!',
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number? Required!',
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
        .then(teamData => {
            team.push(new Manager(teamData.name, teamData.empId, teamData.email, teamData.office));
            if (teamData.confirmEnterEmp) {
                return promptForTeam(teamData);
            } else {
                return team;
            }

        });
};

const promptForTeam = teamData => {
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
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name? Required!",
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
            message: "What is your employee's ID? Required!",
            validate: empIdInput => {
                if (!Number.isInteger(empIdInput) || empIdInput < 1) {
                    console.log("Employee Id must be a valid positive number!")
                    return false;
                }
                if (team.some((emp) => empIdInput === emp.getEmpId())) {
                    console.log('This id is already taken please choose another');
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email address? Required!",
            validate: function (email) {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log(".  Please enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username? Required!",
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
            message: "What is the name of the intern's school? Required!",
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
        .then(teamData => {
            if (teamData.empType === 'Engineer') {
                team.push(new Engineer(teamData.name, teamData.empId, teamData.email, teamData.github));
            } else {
                team.push(new Intern(teamData.name, teamData.empId, teamData.email, teamData.school));
            }
            if (teamData.confirmEnterEmp) {
                return promptForTeam(teamData);
            } else {
                return team;
            }
        });
};

promptManager()
    .then((team) => {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        try {
            fs.writeFileSync(outputPath, generatePage(team), 'utf-8');
            fs.copyFileSync('./src/style.css', cssPath);
        } catch (err) {
            console.log(err);
        }
    });

