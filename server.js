var fs = require('fs'),
    express = require('express'),
    https = require('https'),
    app = express(),
    parser = require('xml2json'),
    apn = require('apn'),
    options = {
      key: fs.readFileSync(__dirname+'/Certificates/server.key'),
      cert: fs.readFileSync(__dirname+'/Certificates/server.pem')
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
      console.log('====================TokenUpdate=====================');
      //取得信息
      device = {
        push_magic: json_content.string[1],
        token: json_content.data,
        topic: json_content.string[2],
        uuid: json_content.string[3]
      };
      console.log(json_content);
      console.log(device);
      console.log('====================END=====================');
    }else{
      console.log("===============认证阶段可再次加判断中断================");
      console.log(content);
      console.log('\n\n\n\n');
    }
  });
  res.send('//');
});

app.all('login',function (req,res) {
  res.send('heino');
});
https.createServer(options,app).listen(8000);
console.log("https-server.......");
app.listen(7000,function () {
  console.log("静态server.......");
});
