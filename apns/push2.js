
var cert_path = './cert.pem';
var keys_path = './key.pem';

var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = 'D8744073-FF56-42BA-BE38-8632CD3CC49D';
var APNS = require('./apns').createServer(cert_path, keys_path);
console.log(new Buffer(token));
APNS.notify(new Buffer(token,'base64'), push_magic);
//APNS.end();
