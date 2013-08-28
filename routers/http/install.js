var fs = require('fs');

function installMobileConfig(req,res) {
  var installFile = fs.readFileSync(__dirname + '/../../install.mobileconfig');
  res.send(installFile);
}

module.exports = installMobileConfig;
