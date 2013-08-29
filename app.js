var https = require('https');
var iDevice = require('./db/model');
var https_server = require('./https');
var http = require('./http');
var config = require('./config');
debug = function () {};

if(process.env.DEBUG){
  try {
    debug = require('debug')('app');
  } catch(e) {
    console.log("Notice: 'debug' module is not available.");
    debug = function () {};
  }
}

//打印现有数据
iDevice.find(function(err,idevice){
  if(err)console.log('出现错误');
  //iDevice.remove(idevice,function(err){});
  debug("DEVICE DATA ==> \n",idevice);
});

https.createServer(config.httpsOptions,https_server).listen(8000);
debug("port:8000,https-server");

http.listen(7000,function () {
  debug("port:7000,http-server.");
});
