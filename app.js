const BuildTeam = require('./lib/BuildTeam');
const generatePage = require('./src/page-template');
const fs = require('fs');
// const path = require('path');

// const OUTPUT_DIR = path.resolve(__dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, 'index.html');

let buildTeam = new BuildTeam();

buildTeam.promptManager()
    .then((confirmEnterEmp) => {
        if (confirmEnterEmp) {
            buildTeam.promptForEmployees()
                .then((empArray) => {
                    writeToFile(generatePage(empArray));
                })
        } else {
            console.log(buildTeam.empArray);
            writeToFile(generatePage(buildTeam.empArray));
        }
    });
function writeToFile(fileContent) {
    fs.writeFile('./src/index.html', fileContent, err => {
        if (err) {
            console.log("file not written");
        }
    })
}

