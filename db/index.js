const mysql = require("mysql");
const util = require("util");



const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    root: "root",
    password: "",
    database: "employees"
});


connection.connect();


connection.query = util.promisify(connection.query);



class DB{
    constructor(connection){
        this.connection = connection;
    }
}



module.exports = new DB(connection);

