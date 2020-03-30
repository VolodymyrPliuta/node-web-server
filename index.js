
var http = require('http');
var time = require('./modules/time');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('This is your query params look like, ofcourse if had it in url ' + req.url)
  // res.end('Hello World!, your time is' + JSON.stringify(time.myDateTime()) );
}).listen(8080);
