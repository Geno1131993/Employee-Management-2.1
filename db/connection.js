mysql = require("mysql");
const util = require("util");




const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    root: "root",
    password: "root",
    database: "employees"
});


connection.connect();


connection.query = util.promisify(connection.query);

