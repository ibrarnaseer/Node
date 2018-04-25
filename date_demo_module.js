var http = require('http'); // Denne linja lar meg bruke http modulen.

var dt = require('./myfirstmodule'); /* denne linja gjør at jeg bruker en
ekstern fil "myfirstmodule" som ligger i samme mappe som denne filen. */

http.createServer(function(req, res){ // Lager server objektet.
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  /* myDateTime er det metoden heter i modulen jeg henter den
  fra (myfirstmodule). res.write er det som skriver respons til klienten. */
  res.end(); // Avslutte responsen.
}) .listen(8080);
