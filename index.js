const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const inquirer = require("inquirer");
const { generateCard, generatePage } = require("./src/templates");

const questions = [
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

const roleQuestion = {
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

const constructors = {
    Engineer: function(name, email, github){
        return new Engineer(name, email, github);
    },
    Intern: function(name, email, school){
        return new Intern(name, email, school);
    },
    Manager: function(name, email, office){
        return new Manager(name, email, office);
    }
}

let employees = [];

function start(){
    inquirer.prompt(questions)
        .then((answers) => {
            let {name, email, role} = answers;
            console.log(role)
            inquirer.prompt(roleQuestion[role])
                .then((answers) => {
                    console.log(role)
                    employees.push(constructors[role](name, email, answers.special));
                    inquirer.prompt({
                        type: "confirm",
                        name: "continue",
                        message: "Do you need to add another employee?"
                    })
                        .then((answers) => {
                            if(answers.continue){
                                start();
                            }else{
                                writePage();
                            }
                        });
                });
        });
    
}

function writePage(){
    let cards = "";
    for(let employee of employees){
        cards += generateCard(employee);
    }
    fs.writeFile("./dist/team.html", generatePage(cards), (err) => err ? console.error(err) : console.log("Success!"));
}

start();