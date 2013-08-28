var fs = require('fs');
var uuid = require('node-uuid');

function installMobileConfig(req,res) {
  res.set('Content-type','application/xml');
  res.render('install.mobileconfig',{organization:"baidu"});
}

module.exports = installMobileConfig;
