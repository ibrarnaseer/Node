var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); /* Kan skrive localhost:8080/'text' så skriver
  den teksten i browseren som /'text' */
  res.end();
}) .listen(8080);
