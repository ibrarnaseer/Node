var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; /* bruker url modulen for å
  gjøre om querystring til et objekt */
  var txt = q.year + " " + q.month;
  // returnerer år og måned fra query objektet
  res.end(txt);
}) .listen(8080);
