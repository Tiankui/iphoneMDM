var token = "B3GAyf+kkM2c9PPw1Ho84ybVp+DB0lWs3uX20uEV3T4=";
var push_magic = '3B80E184-CF1E-4CAE-BE71-347A99AA11D3';
var uuid = "ef7756dcc50295b6f220d25f418c8d1fa539131e";
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
