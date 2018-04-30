var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "********",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'K%'",
  function(err, result) { /* Velger alle kunder som adresse starter med K.
  Kan skrive "WHERE adress = 'Dronningensgate'" for å finne kunder med den adressen. */
    if (err) throw err;
    console.log(result);
  });
});
