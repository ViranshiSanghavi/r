var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    fs.writeFile("data.txt", "AWT TEE Exam", function(err){
        if (err) throw err;

        console.log("File created"); // shows in terminal

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("File created and data written successfully");
        res.end();
    });

});

server.listen(5000);
console.log("Server running at http://localhost:5000/");