var apn = require('apn');
var options = {
  "gateway":"gateway.push.apple.com",
  "cert": './cert.pem',
  "key": './key.pem'
};
var apnConnection = new apn.Connection(options);


var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = 'D8744073-FF56-42BA-BE38-8632CD3CC49D';
var uuid = "ef7756dcc50295b6f220d25f418c8d1fa539131e";
var myDevice = new apn.Device(new Buffer(token,'base64').toString('hex'));
var note = new apn.Notification();

note.payload  = {'mdm':push_magic};

apnConnection.pushNotification(note, myDevice);
