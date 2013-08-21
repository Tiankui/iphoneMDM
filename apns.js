var apn = require('apn'),
options = {"gateway": "gateway.push.apple.com"},
apnConnection = new apn.Connection(options),
iDevice = require('./db/model');


var pushToDevice = function (token,payload) {
  this.token = token;
  this.payload = payload;
};

pushToDevice.prototype.push = function () {
  var note = new apn.apn.Notification();
  note.payload = this.payload;
  var device = new apn.Device(this.token);
  apnConnection.push(note,device);
};

module.exports = pushToDevice;


iDevice.find(function(err,device){
  console.log(device);
  var pushMSG = new pushToDevice(device.token,{"mdm":device.push_magic});
  pushMSG.push();
});

