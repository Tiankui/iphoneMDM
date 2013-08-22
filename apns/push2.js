
var cert_path = __dirname+'/ssert.pem';
var keys_path = __dirname+'/apns-key.pem';

var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = "741AE100-9414-4371-BE12-8CC6DDF7D09A";
var APNS = require('./apns').createServer(cert_path, keys_path);
console.log(new Buffer(token,'base64').toString());
APNS.notify(new Buffer(token,'base64').toString('hex'), push_magic);
//APNS.end();
