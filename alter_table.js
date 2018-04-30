var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "********",
  database: "mydb" // Database som tabell skal bli gjort endringer i.
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
  "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  // For å legge til primærnøkkel i eksisterende tabell.
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
