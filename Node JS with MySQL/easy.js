const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect(function(err) {
    // SQL QUERY
    con.query("SELECT * FROM student", function(err, result) {
        console.log(result);
    });
});