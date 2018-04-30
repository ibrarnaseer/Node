var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "********",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE IF EXISTS customers";
  // Slette tabell kun hvis den eksisterer (for å ikke få feilmeldinger). 
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table deleted.");
  });
});
