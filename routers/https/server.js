
var iDevice = require('../../db/model');

function server(res,req) {
  var content = '',
  device ={};
  req.on('data',function (data) {
    content += data;
    debug("/login[PUT]:",content);
  });
}

module.exports = server;
