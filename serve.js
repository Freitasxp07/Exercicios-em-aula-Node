var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
}).listen(80);
