const express = require('express');
//const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(express.static('${__dirname}/../client/build'));

const path = require('path');
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

/*
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "personalSiteDB"
})
connection.connect(function(err) {
  if (err) {
    console.log({...err});
  }
  else {
    console.log("MYSQL CONNECTION SUCCEEDED!");
  }
});
*/

const port = 5000;
app.listen(port, () => console.log("SERVER STARTED SUCCESSFULLY ON PORT " + port));
