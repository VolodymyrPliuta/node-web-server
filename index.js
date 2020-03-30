
var time = require('./modules/time');

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  // parsing url using one of built-in modules(url)
  var q = url.parse(req.url, true);
  // we are using q.parhname method for this scenario as well methods like q.serch(returns '?year=2017&month=february')
  // q.query(returns an object: { year: 2017, month: 'february' }), q.host
  var filename = "./html" + q.pathname;
  console.log(filename)
  fs.readFile(filename + ".html", function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found, try to hit valid url for example localhost:8080/summer");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
