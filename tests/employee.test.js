const Employee = require("../lib/employee")

describe("constructor", () => {
    test("should have id, name and email", () => {
        let employee = new Employee("Rob", "rob@email.net");
        expect(employee.id && employee.name && employee.email).toBeTruthy();
    });
});
describe("functions", () => {
    describe("getName", () => {
        test("should return employee's name", () => {
            let name = "Rob";
            let employee = new Employee(name, `${name}@email.net`);
            expect(employee.getName()).toEqual(name);
        });
    });
    describe("getId", () => {
        test("should return a unique random id", () => {
            let e1 = new Employee("Rob", "rob@email.net");
            let e2 = new Employee("Bob", "bob@coldmail.gov");
            expect(e1.getId()).not.toEqual(e2.getId());
        });
        test("should return a numeric value", () => {
            let employee = new Employee("Rob", "rob@email.net")
            expect(typeof employee.getId()).toEqual(typeof 1);
        });
    });
    describe("getEmail", () => {
        test("should return an employee's email", () => {
            let email = "rob@email.net";
            let employee = new Employee("Rob", email);
            expect(employee.getEmail()).toEqual(email);
        });
    });
    describe("getRole", () => {
        test("should return 'Employee'", () => {
            let employee = new Employee("Rob", "rob@email.net");
            expect (employee.getRole()).toEqual("Employee");
        });
    });
})