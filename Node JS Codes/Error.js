var fs = require('fs');

fs.readFile("data1.txt", "utf8", function(err, data){

    if (err) {
        console.log("Error: File does not exist or cannot be accessed");
        return;
    }

    console.log("File Content:");
    console.log(data);

});