class Employee {
    // super class
    constructor(name, empId, email) {
        this.name = name;
        this.empId = empId;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmpId() {
        return this.empId;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;