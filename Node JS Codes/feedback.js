var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    var feedback = "Customer Feedback: Good Service\n";

    fs.appendFile("feedback.txt", feedback, function(err){
        if (err) throw err;

        console.log("Feedback added");

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("Customer feedback stored successfully");
        res.end();
    });

});

server.listen(5000);
console.log("Server running at http://localhost:5000/");