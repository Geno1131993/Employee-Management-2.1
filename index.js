const {prompt} = require("inquirer");
const db = require("./db");
var table = require("console.table");

start();

function start(){
    console.log("Welcome to the Employee Manager!");
}



async function prompt_user(){
    const {choice} = await prompt([
        {
            type: "list",
            name: "choice",
            message: "Please select an action:",
            choices: [
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View by department",
                    value: "VIEW_BY_DEPARTMENT"
                },
                {
                    name: "View by manager",
                    value: "VIEW_BY_MANAGER"
                },
                {   
                    name: "View employee roles",
                    value: "VIEW ROLES"
                },
                {
                    name: "Add an employee",
                    value: "ADD"
                },
                {
                    name: "Remove employee from system",
                    value: "REMOVE"
                },
                {
                    name: "Update employee status",
                    value: "UPDATE"
                },
                {
                    name: "Update employee's manager",
                    value: "UPDATE_MANAGER"
                },
                {
                    name: "Add a role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove a role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "View departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add a department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove department",
                    value: "REMOVE_DEPARTMENT",
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }

            ]

        }
    ]);

}

