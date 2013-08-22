var apn = require('apn');
var options = {
  "gateway":"gateway.push.apple.com",
  "batchFeedback": true,
  "interval": 300,
  "cert": './cert.pem',
  "key": './key.pem'
};
var apnConnection = new apn.Connection(options);


var pushM = "9A078A63-3309-4649-8D16-D39459D48453";
var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var uuid = "ef7756dcc50295b6f220d25f418c8d1fa539131e";
var myDevice = new apn.Device(new Buffer(token,'base64').toString('hex'));
var note = new apn.Notification();

note.mdm = pushM;

apnConnection.pushNotification(note, myDevice);

var feedback = new apn.Feedback(options);
feedback.on("feedback", function(devices) {
  devices.forEach(function(item) {
    console.log(111);
    console.log(item);
  });
});

