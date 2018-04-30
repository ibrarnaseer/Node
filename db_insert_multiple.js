var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "********",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?"; /* sql koden for
  å legge til info i tabeller */
  var values = [ // Lage et array med verdiene som skal inn.
    ['Jon', 'Dokkveien'],
    ['Marie', 'Kongensgate'],
    ['Sarah', 'Dronningensgate'],
    ['Tom', 'Kirkegata']
  ];
  con.query(sql, [values], function(err, result) { // Kjøre sql med [values].
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
