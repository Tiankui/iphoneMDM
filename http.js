var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express['static'](__dirname));

app.get('/',require('./routers/http/install'));

module.exports = app;
