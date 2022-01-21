const Engineer = require("../lib/engineer");

describe("constructor", () => {
    test("should additionally have a 'github' parameter", () => {
        let engi = new Engineer("Benji", "ben@ben.ji", "benji77");
        expect(engi.github).toBeTruthy();
    });
});
describe("functions", () => {
    describe("getGithub", () => {
        test("should return the employee's github username", () => {
            let github = "myGitHub";
            let engi = new Engineer("Benji", "ben@ben.ji", github);
            expect(engi.getGithub()).toEqual(github);
        });
    });
    describe("getRole", () => {
        test("Should return the 'Engineer' role", () => {
            let engi = new Engineer("Benji", "ben@ben.ji", "benji77");
            expect(engi.getRole()).toEqual("Engineer");
        })
    });
});