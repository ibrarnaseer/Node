var mysql = require('mysql'); // Må bruke modulen ('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root", // mySQL brukernavn.
  password: "********" // mySQL passord.
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
