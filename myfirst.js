var http = require('http'); // Require er metoden, ('http') er modulen.

http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}) .listen(8080);
