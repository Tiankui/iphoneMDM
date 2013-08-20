var express = require('express');
var app = express();

app.use(express['static'](__dirname));
app.use(express.logger('dev'));
app.listen(7000,function () {
  console.log("静态server.......");
});
