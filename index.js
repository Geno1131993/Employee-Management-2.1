const inquirer = require("inquirer");
var table = require("console.table");
const db = require("./db");



start();



function start(){
    console.log("Welcome to the Employee Manager!");
    prompt_user();
}




async function prompt_user(){
    await inquirer.prompt([
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

    ]).then(choice => {

        console.log(`This is the choice you made: ${choice.choice}`);
        var choice = choice.choice;
        switch (choice){
            case "VIEW_EMPLOYEES":
                return view_employees();
            case "VIEW_BY_DEPARTMENT":
                return view_by_department();
            case "ADD":
                return add_employee();

        }
        
    });
}



async function add_employee(){
    const roles = await db.find_roles();
    const employees = await db.find_all();


    const employee = await inquirer.prompt([
        

    ]);
}



async function view_employees(){
    const employees = await db.find_all();
    console.table(employees);
    prompt_user();
}



async function view_by_department(){
    const departments = await db.find_all_departments();


    const department_options = departments.map(({id, name}) =>({
        name: name,
        value: id
    }));


    const {department_id} = await prompt([
        {
            type: "list",
            name: "department_id",
            message: "Which department roster are you trying to view?",
            choices: department_options
        }
    ]);


    const employees = await db.employees_by_department();

    console.table(employees);

    prompt_user();
}




function exit_cli(){
    console.log("Exiting program.");
    process.exit();
}

