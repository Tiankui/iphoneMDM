var cert_path = __dirname+'/cert.pem';
var keys_path =__dirname+'/key.pem';
console.log(__dirname);
var data = [
  { push_magic: '99E27BC8-75A3-4990-9B1F-0DCEFA4E5455',
    token: '9M9i7HCuh6fZ7ZGUMzEPHE2q0fRPrSzXaQ8/aVwsWYI=',
    topic: 'com.apple.mgmt.External.1bd04f95-5e5b-471c-b3fc-2be06b526160',
    uuid: 'ef7756dcc50295b6f220d25f418c8d1fa539131e'
},
{ push_magic: '8491AFAA-34CA-47F1-8F74-0ACC38A6D79E',
  token: 'J8zhk3mQIlh7IGfXgBdlDZXA1ztO23h9Vy2toK03UII=',
  topic: 'com.apple.mgmt.External.1bd04f95-5e5b-471c-b3fc-2be06b526160',
  uuid: '5be35fbd2b6c699bd38ada658992e1884c54b568'
},
{ push_magic: '0F5577FF-957E-4D91-9916-A5343712C7A5',
  token: 'GVaUGQZLzxGLgfSvXY0loTHSB3+WS57FIGRJZdy1mrA=',
  topic: 'com.apple.mgmt.External.1bd04f95-5e5b-471c-b3fc-2be06b526160',
  uuid: '3774c2715ee6d40ccd4bcd5dede9ece6c25dcba4'
}];

var APNS = require('./apns').createServer(cert_path, keys_path);
console.log(APNS);
data.forEach(function(item){
  APNS.notify(new Buffer(item.token).toString('base64'), { mdm:item.push_magic,aps:{} });
});
//APNS.end();
