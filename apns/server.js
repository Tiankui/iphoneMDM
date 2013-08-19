var apn = require('apn');
var options = {"gateway":"gateway.sandbox.push.apple.com"};
var apnConnection = new apn.Connection(options);

var myDevice = new apn.Device('ef7756dcc50295b6f220d25f418c8d1fa539131e');
var note = new apn.Notification();
note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
note.payload = {'messageFrom': 'Caroline'};
console.log(apnConnection);
apnConnection.pushNotification(note, myDevice);
