// import mysql
const mysql = require("mysql");

// create connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "school",
});

// connect to database
connection.connect((err) => {
  if (err) {
    console.log("Error connecting: " + err);
    return;
  }
  console.log("Connected to MySQL!");
});

// SQL query
const query = "SELECT * FROM students WHERE age > 20";

// run query
connection.query(query, (err, result) => {
  if (err) {
    console.log("Error executing query: " + err);
    return;
  }

  console.log("Students with age > 20:");
  console.log(result);
});

// close connection
connection.end();