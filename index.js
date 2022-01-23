let Manager = require("./lib/manager");
let Engineer = require("./lib/manager");
let Intern = require("./lib/intern");
let inquirer = require("inquirer");

let questions = [
    {
        type: "input",
        name: "name",
        message: "What is your employee's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee's email address?"
    },
    {
        type: "list",
        name: "role",
        message: "What type of employee is this?",
        choices: ["Engineer", "Intern", "Manager"]
    }
];

let roleQuestion = {
    Engineer: {
        type: "input",
        name: "special",
        message: "What is this engineer's github username?"
    },
    Intern: {
        type: "input",
        name: "special",
        message: "What school does this intern attend?"
    },
    Manager: {
        type: "input",
        name: "special",
        message: "What is this manager's office number?"
    },
}

let constructors = {
    Engineer: new Engineer,
    Intern: new Intern,
    Manager: new Manager
}

let employees = [];

function start(){
    inquirer.prompt(questions)
        .then((answers) => {
            let {name, email, role} = answers;
            inquirer.prompt(roleQuestion[role])
                .then((answers) => {
                    employees.push(constructors[role](name, email, answers.special));
                });
        });
    inquirer.prompt({
        type: "confirm",
        name: "continue",
        message: "Do you need to add another employee?"
    })
        .then((answers) => {
            if(answers.continue){
                ask();
            }else{
                writePage();
            }
        });
}

start();