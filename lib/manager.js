const Employee = require("./employee");

class Manager extends Employee{
    /**
     * Creates a manager
     * @param {string} name of the manager
     * @param {string} email address of the manager
     * @param {number} officeNumber of the manager's office
     */
    constructor(name, email, officeNumber){
        super(name, email);
        this.officeNumber = officeNumber;
    }

    /**
     * Retrieves the role of the manager
     * @returns {string} "Manager"
     */
    getRole(){
        return "Manager";
    }

    /**
     * Retrieve the office number associated with this manager
     * @returns {string} office number
     */
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;