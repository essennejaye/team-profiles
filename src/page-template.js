
const generateEmp = eArr => {
    var result = `
        ${eArr
            .filter((roles) => roles.getRole() == 'Manager')
            .map((mEmp) => {
                return `
                    <div class="card" >
                        <div class="card-header">
                            <h5 class="card-title">${mEmp.getName()}</h5>
                            <h6 class="card-subtitle mb-2"><i class="fa fa-users" aria-hidden="true"></i>  ${mEmp.getRole()}</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: ${mEmp.getEmpId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${mEmp.getEmail()}">${mEmp.getEmail()}</a></li>
                                <li class="list-group-item">Office: ${mEmp.getOffice()}</li>
                            </ul>
                        </div>
                    </div>`;
            })
            .join('')}

        ${eArr
            .filter((roles) => roles.getRole() == 'Engineer')
            .map((eEmp) => {
                return `
                    <div class="card" >
                        <div class="card-header">
                            <h5 class="card-title">${eEmp.getName()}</h5>
                            <h6 class="card-subtitle mb-2"><i class="fa fa-file-image-o" aria-hidden="true"></i>  ${eEmp.getRole()}</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: ${eEmp.getEmpId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${eEmp.getEmail()}">${eEmp.getEmail()}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${eEmp.getGithub()}">${eEmp.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>`;
            })
            .join('')}

        ${eArr
            .filter((roles) => roles.getRole() == 'Intern')
            .map((iEmp) => {
                return `
                    <div class="card" >
                        <div class="card-header">
                            <h5 class="card-title">${iEmp.getName()}</h5>
                            <h6 class="card-subtitle mb-2"><i class="fa fa-graduation-cap" aria-hidden="true"></i>  ${iEmp.getRole()}</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: ${iEmp.getEmpId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${iEmp.getEmail()}">${iEmp.getEmail()}</a></li>
                                <li class="list-group-item">${iEmp.getSchool()}</li>
                            </ul>
                        </div>
                    </div>`;
            })
            .join('')}`
    return result;
};

module.exports = team => {
    var result = `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Profiles</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
                <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="style.css">
            </head>

            <body>
                <header class="header">My Team</header>
                <section class="card-container">
                ${generateEmp(team)}
                </section>
                <footer class="container text-center py-3">
                    <h3 class="text-dark">&copy; ${new Date().getFullYear()} </h3>
                </footer>
            </body>
        </html>`;
    return result;
};

