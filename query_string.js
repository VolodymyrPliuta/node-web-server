// to check how it works paste to the browser http://localhost:8080/?userName=Vlad&userId=124

var http = require("http")
var url = require("url")

http.createServer(function(req, res) {
    res.writeHead(200, {'Contnt-Type': 'text/html'});
    var parsed = url.parse(req.url, true).query;
    var txt = parsed.userName + " " + parsed.userId
    res.end(txt);

}).listen(8080)