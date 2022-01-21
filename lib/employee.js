class Employee{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.role = "Employee";
        this.id = 1; //TODO: Randomly generated.
    }
}

module.exports = Employee;