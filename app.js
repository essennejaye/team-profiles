const BuildTeam = require('./lib/BuildTeam');
const generatePage = require('./src/page-template');
const fs = require('fs');
const Manager = require('./lib/Manager');

let buildTeam = new BuildTeam();

buildTeam.promptManager()
    .then((manager) => {
        let fileContent = generatePage(manager)
        fs.writeFile('./src/index.html', fileContent, err => {
            if (err) {
                console.log("file not written");
            }
        })
    });

