var tls = require('tls');
var fs = require('fs');
var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = "D8744073-FF56-42BA-BE38-8632CD3CC49D";
var options = {
  cert_path : fs.readFileSync(__dirname+'/cert.pem'),
  keys_path : fs.readFileSync(__dirname+'/key.pem')
};

var server = tls.connect(2195,'ssl://gateway.push.apple.com',options,function(){
  console.log(ok);
});
server.addListener('data',function(data){
  console.log(data);
});
server.on('secureConnection', function(stream){
  console.log("has got a connection");
});
server.addListener('error',function(err){
  console.log(err);
});
