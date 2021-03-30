// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('views'));
app.use(express.static('node_modules/paper/dist'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
