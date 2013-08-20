var fs = require('fs');
var express = require('express');
var https = require('https');
var app = express();

var options = {
  key: fs.readFileSync(__dirname+'/Certificates/server.key'),
  cert: fs.readFileSync(__dirname+'/Certificates/server.pem')
};
app.get('/',function (req,res) {
  console.log(req);
  res.send('/');
});
app.all('/checkin',function (req,res) {
  console.log(req);
  res.send('checkin');
});
app.all('login',function (req,res) {
  console.log(req);
  res.send('heino');
});
https.createServer(options,app).listen(8000);
