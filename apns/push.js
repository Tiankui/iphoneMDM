var apn = require('apn');
var options = {
  "gateway":"gateway.push.apple.com",
  "cert": __dirname+'/pcert.pem',
  "key": __dirname+'/key.pem'
};
var apnConnection = new apn.Connection(options);


var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = 'C4180E25-EB1B-4CAB-B778-594089ECC6B4';
var uuid = "ef7756dcc50295b6f220d25f418c8d1fa539131e";
var myDevice = new apn.Device(new Buffer(token,'base64').toString('hex'));
var note = new apn.Notification();

note.payload  = {'mdm':push_magic};
note.mdm = push_magic;
console.log(note);

apnConnection.pushNotification(note, myDevice);
