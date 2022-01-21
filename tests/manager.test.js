const { describe, test, expect } = require("@jest/globals");
const { exp } = require("prelude-ls");
let Manager = require("../lib/manager");

describe("constructor", () => {
    test("should have officeNumber property", () => {
        const manager = new Manager("Manny", "manny@hmail.gov", 42);
        expect(manager.officeNumber).toBeTruthy();
    });
});
describe("functions", () => {
    describe("getRole", () => {
        test("should return the 'Manager' role", () => {
            const manager = new Manager("Manny", "manny@hmail.gov", 42);
            expect(manager.getRole()).toEqual("Manager");
        })
    })
})