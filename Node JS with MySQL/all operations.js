const mysql = require("mysql");

// connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "school",
});

// connect
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

/* ------------------ CREATE TABLE ------------------ */
connection.query(
  `CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT
  )`,
  (err) => {
    if (err) throw err;
    console.log("Table created");
  }
);

/* ------------------ INSERT ------------------ */
connection.query(
  `INSERT INTO students (name, age) VALUES 
  ('Rahul', 21),
  ('Priya', 22),
  ('Amit', 19)`,
  (err) => {
    if (err) throw err;
    console.log("Data inserted");
  }
);

/* ------------------ SELECT ------------------ */
connection.query(
  "SELECT * FROM students",
  (err, result) => {
    if (err) throw err;
    console.log("All Students:");
    console.log(result);
  }
);

/* ------------------ WHERE ------------------ */
connection.query(
  "SELECT * FROM students WHERE age > 20",
  (err, result) => {
    if (err) throw err;
    console.log("Age > 20:");
    console.log(result);
  }
);

/* ------------------ ORDER BY ------------------ */
connection.query(
  "SELECT * FROM students ORDER BY age DESC",
  (err, result) => {
    if (err) throw err;
    console.log("Sorted by age:");
    console.log(result);
  }
);

/* ------------------ UPDATE ------------------ */
connection.query(
  "UPDATE students SET age = 25 WHERE name = 'Rahul'",
  (err) => {
    if (err) throw err;
    console.log("Data updated");
  }
);

/* ------------------ DELETE ------------------ */
connection.query(
  "DELETE FROM students WHERE name = 'Amit'",
  (err) => {
    if (err) throw err;
    console.log("Data deleted");
  }
);

/* ------------------ DROP TABLE ------------------ */
// ⚠️ Be careful – deletes entire table
/*
connection.query("DROP TABLE students", (err) => {
  if (err) throw err;
  console.log("Table deleted");
});
*/

// close
connection.end();