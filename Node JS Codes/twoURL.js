var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){

    var q = url.parse(req.url, true);
    var path = q.pathname;

    res.writeHead(200, {'Content-Type': 'text/html'});

    // check URL paths
    if(path == "/home"){
        res.write("<h1>Welcome to Home Page</h1>");
    }
    else if(path == "/about"){
        res.write("<h1>Welcome to About Page</h1>");
    }
    else{
        res.write("<h1>Page Not Found</h1>");
    }

    res.end();
});

server.listen(5000);
console.log("Server running at http://localhost:5000/");

//http://localhost:5000/about
//http://localhost:5000/home