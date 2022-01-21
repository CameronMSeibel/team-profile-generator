const Intern = require("../lib/intern");

describe("constructor", () => {
    test("should have a school property", () => {
        let intern = new Intern("Jed", "jed@hmail.net", "For-Profit Online University");
        expect(intern.school).toBeTruthy();
    });
});
describe("functions", () => {
    describe("getSchool", () => {
        test("should return the intern's school", () => {
            let school = "For-Profit Online University"
            let intern = new Intern("Jed", "jed@hmail.net", school);
            expect(intern.getSchool()).toEqual(school);
        });
    })
    describe("getRole", () => {
        test("should return the 'Intern' role", () => {
            let intern = new Intern("Jed", "jed@hmail.net", "For-Profit Online University");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});