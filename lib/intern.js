const Employee = require("./employee");

class Intern{
    /**
     * Creates a new Intern object 
     * @param {string} name of the intern
     * @param {string} email address of the intern
     * @param {string} school attended by the intern
     */
    constructor(name, email, school){
        super(name, email);
        this.school = school;
    }

    /**
     * Retrieves the school of the Intern
     * @returns {string} school the intern attends
     */
    getSchool(){
        return this.school;
    }

    /**
     * Retrieves the intern's role.
     * @returns {string} "Intern"
     */
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;