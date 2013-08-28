var express = require('express');
var https = require('https');
var app = express();
var XMLparser = require('xml2json');
var iDevice = require('./db/model');

app.use(express.bodyParser());
app.use(express.logger('dev'));
app.get('/',function (req,res) {
  res.send('/');
});

app.put('/login',require('./routers/https/server'));

app.put('/checkin',require('./routers/https/login'));

module.exports = app;
