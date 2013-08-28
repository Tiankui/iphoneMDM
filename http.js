var express = require('express');
var app = express();

app.set('views', __dirname + '/view'); //视图文件的目录
app.set('view engine', 'ejs'); //视图模板引擎
app.engine('.mobileconfig', require('ejs').__express);
app.use(express.bodyParser());
app.use(express.logger('dev'));

app.get('/install.mobileconfig',require('./routers/http/install'));

module.exports = app;
