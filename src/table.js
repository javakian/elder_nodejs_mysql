var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "",
    password: "",
    database: "nodedb"
})

con.connect(function(err) {
    if(err) throw err;
    console.log("connect to the database!");

    //Create Table
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) , email VARCHAR(255)";
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("Table has been Created!");
    });
});