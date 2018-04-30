var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true); // Gjør querystring til objekt
  var filename = "." + q.pathname; // Sjekker url for filnavn
  fs.readFile(filename, function(err, data) {
    if (err) { // Hvis den ikke finner filen.
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end("404 Not Found");
    } // Hvis filen finnes. 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}) .listen(8080);
