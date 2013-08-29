var iDevice = require('../../db/model');

function login(res,req) {
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

      var item = iDevice.findOne({uuid:uuid});
      console.log(item);
    }else{
      debug("/checkin[put]:Authenticate");
    }
  });
  res.send('//');
}
module.exports = login;
