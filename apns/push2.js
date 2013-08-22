
var cert_path = './cert.pem';
var keys_path = './key.pem';

var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = '17EE0625-616D-4E58-9238-29D9B7CED77A';
var APNS = require('./apns').createServer(cert_path, keys_path);
console.log(new Buffer(token));
APNS.notify(new Buffer(token).toString('hex'), push_magic);
//APNS.end();
