var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "********",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function(err, result, fields) {
    /* Velg alle kunder, og returner resultat objektet. Hvis man legger til
    LIMIT 5 (kan være hvilket som helst tall) så viser den bare 5 kunder.
    ("SELECT * FROM customers LIMIT 5").

    Hvis man legger til OFFSET 2 (kan være hvilket som helst tall),
    starter det fra den tredje linja.
    ("SELECT * FROM customers LIMIT 5 OFFSET 2")

    Kan også skrive "SELECT * FROM customers LIMIT 2, 5". Det vil
    gi samme resultat som offset koden over. */
    if (err) throw err;
    console.log(result);
  });
});
