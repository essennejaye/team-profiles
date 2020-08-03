const generatePage = require('../src/page-template');
// const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const expectedOutput = `
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
                <section class="card-container">





                    <div class="card" style="width: 18rem;">



                        <div class="card-header">
                            <h5 class="card-title">Joe</h5>
                            <h6 class="card-subtitle mb-2">Manager</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: 1</li>
                                <li class="list-group-item">Email: <a href="mailto:satali@yahoo.com">satali@yahoo.com</a></li>
                                <li class="list-group-item">Office: 123</li>
                            </ul>
                        </div>
                    </div>



                    <div class="card" style="width: 18rem;">



                        <div class="card-header">

                            <h5 class="card-title">Sam</h5>
                            <h6 class="card-subtitle mb-2">Engineer</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: 2</li>
                                <li class="list-group-item">Email: <a href="mailto:essennejaye@outlook.com">essennejaye@outlook.com</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/essennejaye"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            <h5 class="card-title">Stan</h5>
                            <h6 class="card-subtitle mb-2">Intern</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: 3</li>
                                <li class="list-group-item">Email: <a href="mailto:sjeffers02@gmail.com">sjeffers02@gmail.com</a></li>
                                <li class="list-group-item">University of Arizona</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <footer class="container text-center py-3">
                    <h3 class="text-dark">&copy; 2020 </h3>
                </footer>
            </body>
        </html>`
        

var mockInput =
    [ new Manager('Joe', 1, 'satali@yahoo.com', '123'),
      new Engineer('Sam', 2, 'essennejaye@outlook.com', 'essennejaye'),
      new Intern('Stan', 3, 'sjeffers02@gmail.com', 'University of Arizona')
        // {
        //     name: 'Joe',
        //     empId: 1,
        //     email: 'sataliaj@yahoo.com',
        //     office: '123',
        // },
        // {
        //     name: 'Sam',
        //     empId: 2,
        //     email: 'essennejaye@outlook.com',
        //     github: 'essennejaye',
        // },
        // {
        //     name: 'Stan',
        //     empId: 3,
        //     email: 'sjeffers02@gmail.com',
        //     github: 'University of Arizona',
        // }
    ];

    test('creates a html file', () => {
        var actualResult =  generatePage(mockInput);

        expect(actualResult).toEqual(expectedOutput);
    })