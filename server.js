var fs = require('fs');
var https = require('https');

var options = {
  key: fs.readFileSync('server_key.pem'),
  cert: fs.readFileSync('indentity.pem')
};

var test = fs.readFileSync('test.mobileconfig');
var server = https.createServer(options,function (req,res) {
  res.writeHead(200,{'Content-Type': 'text/xml'});
  res.end(test);
}).listen(8000);



