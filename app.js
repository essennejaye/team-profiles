const BuildTeam = require('./lib/BuildTeam');
const generatePage = require('./src/page-template');
const fs = require('fs');

let buildTeam = new BuildTeam();

buildTeam.promptManager()
    .then((confirmEnterEmp) => {
        if (confirmEnterEmp) {
            buildTeam.promptForEmployees()
            .then((empArray) => {
                
            })
        } else {
            console.log(buildTeam.empArray);
        }        // let fileContent = generatePage(this.empArray)
        // fs.writeFile('./src/index.html', fileContent, err => {
        //     if (err) {
        //         console.log("file not written");
        //     }
        // })
    });

