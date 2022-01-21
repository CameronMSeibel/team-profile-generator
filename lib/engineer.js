const Employee = require("./employee");

class Engineer extends Employee{
    /**
     * Creates a new Engineer object
     * @param {string} name of the engineer employee
     * @param {string} email address of the engineer
     * @param {string} github username of the engineer
     */
    constructor(name, email, github){
        super(name, email);
        this.github = github;
    }

    /**
     * Retrieves the github username of the Engineer
     * @returns {string} engineer's github username
     */
    getGithub(){
        return this.github;
    }

    /**
     * Retrieves the role of the Engineer
     * @returns {string} specifically, "Engineer"
     */
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;