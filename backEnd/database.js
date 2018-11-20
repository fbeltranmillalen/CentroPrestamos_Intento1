const mysql = require('mysql');
const myConnection = require('express-myconnection');
const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'qwer1234',
    port: 3306,
    database: 'centroprestamos_dev'
};

var mySqlConnection = myConnection(mysql, dbOptions, 'single');

module.exports = mySqlConnection;