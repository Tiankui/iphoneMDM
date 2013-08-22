var apn = require('apn');
var options = {"gateway": "gateway.push.apple.com"};
var apnConnection = new apn.Connection(options);
var iDevice = require('./db/model');

iDevice.find(function(err,arr){
  if(err)console.log('出现错误');
  arr.forEach(function(item,index){
    console.log(item);
    //console.log(new Buffer(item.token).toString('base64'));
    var myDevice = new apn.Device(new Buffer(item.token,'base64'));
    var note = new apn.Notifications();
    note.mdm = item.push_magic;
    console.log(note);
    console.log(myDevice);

  });
  // console.log(myDevice);
});
