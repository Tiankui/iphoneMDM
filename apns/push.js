var apn = require('apn');
var options = {
  "gateway":"gateway.push.apple.com",
  "batchFeedback": true,
  "interval": 300,
  "cert": './cert.pem',
  "key": './key.pem'
};
var apnConnection = new apn.Connection(options);


var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = '17EE0625-616D-4E58-9238-29D9B7CED77A';
var uuid = "ef7756dcc50295b6f220d25f418c8d1fa539131e";
var myDevice = new apn.Device(new Buffer(token,'base64').toString('hex'));
var note = new apn.Notification();

note.mdm = push_magic;

apnConnection.pushNotification(note, myDevice);

var feedback = new apn.Feedback(options);
feedback.on("feedback", function(devices) {
  devices.forEach(function(item) {
    console.log(111);
    console.log(item);
  });
});

