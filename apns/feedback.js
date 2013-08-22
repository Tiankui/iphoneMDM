var apn = require('apn');
var options = {
  "pfx" : __dirname +"/apns-mdm.pfx",
  "passphrase" : "111111"
};

var feedback = new apn.Feedback(options);

feedback.on("feekback",function (devices) {
  console.log(devices);
});
