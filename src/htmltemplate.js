//const Manager = require("../lib/Manager");


const createPage = (employees) => {
    const cards = employees.map((employee) => {
        return ` <div class="card" style="width:13rem" class="tile1">
        <div class="card-body">
            <h3 class="card-tile">Name: ${employee.name} </h3>
             <h3 id="Role">${employee.role} </h3>
            <h4 id="empID">ID:${employee.empID}</h4>
            <a href="#" class="card-link">${employee.email}</a>
            <h4 id="officeNumber">${employee.office || ""}</h4>
            <h4 id="empGitHub">${employee.gitHubName || ""}</h4>
            <h4 id="empSchool">${employee.school || ""}</h4>
        </div>
    </div>`

    })
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <script src="jquery-3.6.0.min.js"></script>
    <title>Team Information</title>
</head>

<body>
    <div class="col p-3 mb-2 bg-warning text-dark">
        <header>

            <div class="col text-center fs-1" style="height: 200px"> Here's Your Team
            </div>

        </header>

        </div> <div class="d-flex flex-wrap justify-content-between" class="backgroundMain">
    ${cards}
   </div>
</body>

    
    `;



}

module.exports = createPage;