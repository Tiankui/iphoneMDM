var apn = require('apn'),
    options = {"gateway": "gateway.push.apple.com"},
    apnConnection = new apn.Connection(options);


var pushToDevice = function (token,payload) {
  this.token = token;
  this.payload = payload;
}

pushToDevice.prototype.push = function () {
  var note = new apn.apn.Notification();
  note.payload = this.payload;
  var device = new apn.Device(this.token);
  apnConnection.push(note,device);
}

module.exports = pushToDevice;
