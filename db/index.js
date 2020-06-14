const mysql = require("mysql");
const util = require("util");
const connection = require("./connection");



class DB{
    constructor(connection){
        this.connection = connection;
    }
}








module.exports = new DB(connection);

