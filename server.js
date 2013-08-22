var fs = require('fs');
var express = require('express');
var https = require('https');
var app = express();
var XMLparser = require('xml2json');
var iDevice = require('./db/model');
var debug = function () {};
if(process.env.DEBUG){
  try {
    debug = require('debug')('app');
  } catch(e) {
    console.log("Notice: 'debug' module is not available.");
    debug = function () {};
  }
}

var options = {
  key: fs.readFileSync(__dirname+'/linode/identity.key'),
  cert: fs.readFileSync(__dirname+'/linode/identity.crt'),
  ca: [fs.readFileSync(__dirname+'/linode/cacert.crt')]
};

app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express['static'](__dirname));
app.get('/',function (req,res) {
  res.send('/');
});

app.put('/login',function(req,res) {
  var content = '',
  device ={};
  req.on('data',function (data) {
    content += data;
    debug("/login[PUT]:",content);
  });
});

app.put('/checkin',function (req,res) {
  var content = '',
  device = {};
  req.on("data",function(data){
    content += data;
    var json_content = JSON.parse(XMLparser.toJson(content)).plist.dict;

    if (json_content.string[0] !== 'Authenticate') {

      var pushMagic = json_content.string[1];
      var token = json_content.data[0];
      var topic = json_content.string[2];
      var uuid = json_content.string[3];

      debug("/checkin[put]:UPDATE[XML] =>\n",content);
      debug("/checkin[put]:UPDATE[JSON] =>\n",json_content);

      iDevice.find({uuid:uuid},function(err,_device){
        if(_device[0]){
          debug("update old device date.");
          _device[0].update(
            {push_magic: pushMagic},
            {token: token},
            {topic: topic},
            {uuid: uuid},
            function(err,numberAffected){
              if (err) return handleError(err);
            }
          );
        }else{
          //取得信息
          debug("new device data\n");
          var newDevice = new iDevice({
            push_magic: pushMagic,
            token: token,
            topic: topic,
            uuid: uuid
          });
          newDevice.save(function(err,idevice){
            if(err) debug('idevice无法储存');
            idevice.speak();
          });
        }
      });
    }else{
      debug("/checkin[put]:Authenticate");
    }
  });
  res.send('//');
});

//打印现有数据
iDevice.find(function(err,idevice){
  if(err)console.log('出现错误');
  debug("DEVICE DATA ==> \n",idevice);
  //  iDevice.remove(idevice,function(err){});
});

https.createServer(options,app).listen(8000);
debug("port:8000,https-server");

app.listen(7000,function () {
  debug("port:7000,http-server.");
});
