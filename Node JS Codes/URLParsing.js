var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){

    // parse URL
    var q = url.parse(req.url, true);

    var pathname = q.pathname;
    var query = q.query;

    res.writeHead(200, {'Content-Type': 'text/plain'});

    // plain text response
    res.write("Path: " + pathname + "\n");
    res.write("Name: " + query.name + "\n");
    res.write("Dept: " + query.dept);

    res.end();
});

server.listen(5000);
console.log("Server running at http://localhost:5000/");

// http://localhost:5000/?name=abc&dept=cse