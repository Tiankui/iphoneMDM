var iDevice = require('../../db/model');
var XMLparser = require('xml2json');

function login(req,res) {
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
      debug("!!!!!!!!!!!!!!!!!!",token);

      iDevice.find({uuid:uuid},function(err,_device){
        if(_device.length){
          debug("update old device date.");
          _device.forEach(function(item){
            iDevice.remove(item,function(err){debug("mongodb err:",err);});
          });
          (new iDevice({
            push_magic: pushMagic,
            token: token,
            topic: topic,
            uuid: uuid}))
          .save(function(err,idevice){
            if(err) debug('idevice无法储存');
            idevice.speak();
          });
        }else{
          //取得信息
          debug("new device data\n");
          (new iDevice({
            push_magic: pushMagic,
            token: token,
            topic: topic,
            uuid: uuid
          })).save(function(err,idevice){
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
}
module.exports = login;
