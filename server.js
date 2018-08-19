const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("MONGOOSE CONNECTED SUCCESSFULLY"))
    .catch(error => console.log(error))

const port = 5000;
app.listen(port, () => console.log("SERVER STARTED SUCCESSFULLY "));
