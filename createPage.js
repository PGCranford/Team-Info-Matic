var employeeNameEl = $('#Name');
var employeRoleEl = document.querySelector('#Role');
var employeeIDEl = document.querySelector('#empID');
var employeeEmailEl = document.querySelector('#empEmail');
var employeeOfficEl = document.querySelector('#officeNumber');
var employeeGitHubEl = document.querySelector('#empGitHub');
var employeeSchoolEl = document.querySelector('#empSchool');

const createPage = () => {

    var appendEmployee = function (Manager) {
        employeeNameEl = "";
        employeRoleEl = "";
        employeeIDEl = "";
        employeeEmailEl = "";
        employeeOfficEl = "";
        employeeGitHubEl = "";
        employeeSchoolEl = "";

        employeeNameEl.appendChild(Manager.name);
    }
    appendEmployee()
};

module.exports = createPage;