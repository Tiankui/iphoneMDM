var apn = require('apn');
var options = {
  "gateway": "gateway.push.apple.com",
  "batchFeedback": true,
  "interval": 300

};
var apnConnection = new apn.Connection(options);
var iDevice = require('./db/model');
var feedback = new apn.Feedback(options);

iDevice.find(function(err,arr){
  if(err)console.log('出现错误');
  arr.forEach(function(item,index){
    console.log(item);
    //console.log(new Buffer(item.token).toString('base64'));
    var myDevice = new apn.Device(new Buffer(item.token,'base64'));
    var note = new apn.Notification();
    note.mdm = item.push_magic;
    note.device = myDevice;
    console.log(note);
    console.log(myDevice);
    apnConnection.pushNotification(note,myDevice);

  });
  // console.log(myDevice);
});

feedback.on("feedback",function(devices){
  devices.forEach(function (item) {
    console.log(item);
  });
});
