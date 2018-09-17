var express = require('express');

var app = express();
app.use('/', express.static('./client/dist'))

app.listen(3005, console.log("Listening on localhost:3005"))