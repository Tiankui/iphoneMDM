var apn = require('../apns2');

var token = "9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=";
var push_magic = '17EE0625-616D-4E58-9238-29D9B7CED77A';



/* 
   Now you may send notifications!
 */

var Push = apn.Push;
var push = Push({
  cert: require('fs').readFileSync(__dirname+'/cert.pem'), 
  key: require('fs').readFileSync(__dirname+'/key.pem')
});
push.on('sent', function (notification) {

  // The notification has been sent to the socket (it may be buffered if the network is slow...)
  console.log('Sent', notification);

});

push.on('notificationError', function (errorCode, uid) {

  // Apple has returned an error:
  console.log('Notification with uid', uid, 'triggered an error:', require('node_apns').APNS.errors[errorCode]);

});

push.on('error', function (error) { console.log('Yipikaye!', error); });
var Notification = apn.Notification,
n = Notification(new Buffer(token,'base64').toString('hex'), {mdm:push_magic});
/*  ^----- fake device token hex string */
console.log(n);
if (n.isValid()) push.sendNotification(n);
