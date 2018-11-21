const mysql = require('mysql');
//const myConnection = require('express-myconnection');
const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'qwer1234',
    //port: 3306,
    database: 'centroprestamos_dev'
};

var mySqlConnection = mysql.createConnection(dbOptions); //= myConnection(mysql, dbOptions, 'single');

mySqlConnection.connect(function (err){//la conexion se hace en los controladores... creo
    if(err){
        console.log(err);
        console.error('error connecting: ' + err.stack);
        return;
    }
    else{
        console.log('Db is connected')
        console.log('connected as id ' + mySqlConnection.threadId);
    }
});
module.exports = mySqlConnection;