class Employee{
    /**
     * Creates a new Employee object represented with a given name and email.
     * @param {string} name the employee's name.
     * @param {string} email the employee's email address.
     */
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 1000000);
    }

    /**
     * Retrieves the name of the employee.
     * @returns {string} the employee's name
     */
    getName(){
        return this.name;
    }

    /**
     * Retrieves the id of the employee
     * @returns {number} Employee's unique ID number
     */
    getId(){
        return this.id;
    }

    /**
     * Retrieves the email address of the employee.
     * @returns {string} Employee's email address
     */
    getEmail(){
        return this.email;
    }

    /**
     * Returns the role of the employee
     * @returns {string} specifically "Employee"
     */
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;