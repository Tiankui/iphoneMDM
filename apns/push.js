var token = 'B3GAyf+kkM2c9PPw1Ho84ybVp+DB0lWs3uX20uEV3T4=';
var push_magic = 'D7E9D77C-D11D-4792-A4AB-9522E5B40772';
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
