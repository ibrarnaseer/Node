var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "********",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function(err, result) {
    /* Sortere resultatet etter navn. Hvis man skriver DESC etter 'name'
    blir det sortert i omvendt alfabetisk rekkefølge. (ORDER BY name DESC) */
    if (err) throw err;
    console.log(result);
  });
});
