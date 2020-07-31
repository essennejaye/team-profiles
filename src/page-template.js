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
                <title>Portfoilio Demo</title>
                <link rel="stylesheet" href="https://cdnjs.cloudfare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="style.css">
            </head>

            <body>
                <header>
                    <div class="container flex-row justify-space-between align-center py-3">
                        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
                    </div>
                </header>

                <main class="container my-5">
                    ${name} <br>
                    ${empId} <br>
                    ${email} <br>
                    ${office} <br>
                    ${role}
                </main>

                <footer class="container text-center py-3">
                    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${name}</h3>
                </footer>
            </body>
        </html>
    `;
};