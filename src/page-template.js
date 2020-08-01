const Manager = require('../lib/Manager.js');


module.exports = templateData => {

const {name, empId, email, office, role} = templateData;

return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Profiles</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
                crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudfare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="style.css">
            </head>

            <body>
            
                <header class="header">My Team</header>
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                        <h5 class="card-title">${name}</h5>
                        <h6 class="card-subtitle mb-2">${role}</h6>                     
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id: ${empId}</li>
                            <li class="list-group-item">Email: ${email}</li>
                            <li class="list-group-item">${office}</li>
                      </ul>
                    </div>
                </div>
                <footer class="container text-center py-3">
                    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${name}</h3>
                </footer>
            </body>
        </html>
    `;
};