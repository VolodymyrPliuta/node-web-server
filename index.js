
var http = require('http');
var time = require('./modules/time');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!, your time is' + JSON.stringify(time.myDateTime()) );
}).listen(8080);
