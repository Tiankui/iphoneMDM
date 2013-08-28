var fs = require('fs');

var httpsOptions = {
  key: fs.readFileSync(__dirname+'/linode/identity.key'),
  cert: fs.readFileSync(__dirname+'/linode/identity.crt'),
  ca: [fs.readFileSync(__dirname+'/linode/cacert.crt')]
};

var apnOptions = {
  "gateway":"gateway.push.apple.com",
  "pfx" : __dirname + "/apns/apns-mdm.pfx",
  "passphrase" : "111111"
};


exports.httpsOptions = httpsOptions;
exports.apnOptions = apnOptions;
