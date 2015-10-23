var express = require('express');
var app = express();

var content = require('./content');

var cors = require('cors');
app.use( cors() );
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.set('port', process.env.PORT || 8888);

app.use(function(req, res) {
  content.get().then(function(body) {
    res.status(200);
    res.send(body);
  }).fail(function(body) {
    res.status(400);
    res.send(body);
  });
});

app.listen(app.get('port'));
