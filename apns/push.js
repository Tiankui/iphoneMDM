var token = 'm9InC46OPnhOhGSFjB5LCZG4Af0Lc0AoHb7Gkx1IqhQ=';
var push_magic = 'D51BCC87-F892-4103-8037-19C6A6F29E6E';
var apn = require('apn');
var config = require('../config');

var apnConnection = new apn.Connection(config.apnOptions);

function pushToAPNS(token,push_magic) {
  var myDevice = new apn.Device(new Buffer(token,'base64').toString('hex'));
  var note = new apn.Notification();
  note.setMDM(push_magic);
  apnConnection.pushNotification(note, myDevice);
}


module.exports = pushToAPNS;
