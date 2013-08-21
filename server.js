var fs = require('fs'),
    express = require('express'),
    https = require('https'),
    app = express(),
    parser = require('xml2json'),
    apn = require('apn'),
    iDevice = require('./db/model'),
    options = {
      key: fs.readFileSync(__dirname+'/linode-certs/server.key'),
      cert: fs.readFileSync(__dirname+'/linode-certs/server.pem')
      //ca: [fs.readFileSync(__dirname+'/Certificates/ca.crt')]
      //pfx: fs.readFileSync(__dirname+'/Certificates/tomcat.p12')
    };

app.use(express.bodyParser());
app.use(express.logger('dev'));
app.use(express['static'](__dirname));
app.get('/',function (req,res) {
  res.send('/');
});

app.put('/checkin',function (req,res) {
  var content = '',
      device = {};
  req.on("data",function(data){
    content += data;
    var json_content = JSON.parse(parser.toJson(content)).plist.dict;
    if (json_content.string[0] !== 'Authenticate') {
      console.log('====================TokenUpdate=====================\n');
      iDevice.find({uuid:json_content.string[3]},function(err,_device){
        if(_device[0]){
          _device[0].update(
            {push_magic: json_content.string[1]},
            {token: json_content.data},
            {topic: json_content.string[2]},
            {uuid: json_content.string[3]},
            function(err,numberAffected){
              if (err) return handleError(err);
              console.log('The number of updated documents was %d', numberAffected);
              console.log('The raw response from Mongo was ', raw);
            }
          )
          console.log("===========update device:\n"+_device+"\n");
        }else{
          //取得信息
          var newDevice = new iDevice({
            push_magic: json_content.string[1],
            token: json_content.data,
            topic: json_content.string[2],
            uuid: json_content.string[3]
          });
          console.log("===========new device\n"+newDevice+"\n");
          newDevice.save(function(err,idevice){
            if(err)console.log('idevice无法储存');
            idevice.speak();
          })
        }
      });
      //console.log(json_content);
//      console.log(_device);
      console.log('====================END=====================');
    }else{
      console.log("===============认证阶段可再次加判断中断================");
      console.log(content);
      console.log('\n\n\n\n');
    }
  });
  res.send('//');
});

//iDevice.remove({uuid:'ef7756dcc50295b6f220d25f418c8d1fa539131e'},function(err){
  //if(err)console.log(err);
//})
//打印现有数据
iDevice.find(function(err,idevice){
  if(err)console.log('出现错误');
  console.log(idevice);
})
app.all('login',function (req,res) {
  res.send('heino');
});
https.createServer(options,app).listen(8000);
console.log("https-server.......");
app.listen(7000,function () {
  console.log("静态server.......");
});
