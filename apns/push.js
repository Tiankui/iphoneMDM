var token = "lYYCRY26LDoDXkKpwl4Ux17rj5+e+4roIBjI3QRzPJg=";
var push_magic = '8C985AD4-45BA-4BC5-8E71-C10CC5DD6FBE';
var apn = require('apn');
var options = {
  "gateway":"gateway.push.apple.com",
  "pfx" : __dirname +"/apns-mdm.pfx",
  "passphrase" : "111111"
};

var myDevice = new apn.Device(new Buffer(token,'base64').toString('hex'));
var apnConnection = new apn.Connection(options);
var note = new apn.Notification();
note.setMDM(push_magic);

apnConnection.pushNotification(note, myDevice);
