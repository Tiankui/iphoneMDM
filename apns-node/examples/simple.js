
var cert_path = './iphoneMDM/apns/cert.pem';
var keys_path = './iphoneMDM/apns/key.pem';
// remember to remove "<", ">" and " "'s

var pushM = "9A078A63-3309-4649-8D16-D39459D48453";
var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var uuid = "ef7756dcc50295b6f220d25f418c8d1fa539131e";
var APNS = require('../../apns').createServer(cert_path, keys_path);
console.log(new Buffer(token,'base64'));
APNS.notify(new Buffer(token,'base64'), pushM);
APNS.end();
