var express = require('express');
var https = require('https');
var app = express();
var iDevice = require('./db/model');

app.set('views', __dirname + '/views'); //视图文件的目录
app.set('view engine', 'ejs'); //视图模板引擎
app.use(express.bodyParser());
app.use(express.logger('dev'));

app.put('/server',require('./routers/https/server'));
app.put('/checkin',require('./routers/https/checkin'));

module.exports = app;
