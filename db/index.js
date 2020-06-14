const mysql = require("mysql");
const util = require("util");
const connection = require("./connection");



class DB{
    constructor(connection){
        this.connection = connection;
    }



    
    find_all(){
        return this.connection.query(
            //Updated this with line from Master
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
            );  
    }



    find_all_departments(){
         return this.connection.query(
             //Updated this line from Master
            "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
        );
    }



    employees_by_department(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
            department_id
        );
    }

}








module.exports = new DB(connection);

