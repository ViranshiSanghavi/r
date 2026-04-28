var fs = require('fs').promises;

// Writing to file
fs.writeFile("demo.txt", "Hello World\n")
.then(() => {
    console.log("File written successfully");

    // Appending to file
    return fs.appendFile("demo.txt", "This is appended text\n");
})
.then(() => {
    console.log("Data appended successfully");

    // Reading file
    return fs.readFile("demo.txt", "utf8");
})
.then((data) => {
    console.log("File Content:\n" + data);
})
.catch((err) => {
    console.log(err);
});