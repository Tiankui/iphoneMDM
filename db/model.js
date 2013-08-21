var dbURL = 'mongodb://localhost/database',
    mongoose = require('mongoose');

mongoose.connect(dbURL);

var deviceShema = new mongoose.Schema({
  push_magic:String,
  token:String,
  topic:String,
  uuid:String
});

var device = mongoose.model('Device',deviceShema);

module.exports = device;
