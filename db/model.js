var dbURL = 'mongodb://localhost/database',
    mongoose = require('mongoose');

mongoose.connect(dbURL);

var deviceShema = new mongoose.Schema({
  push_magic:String,
  token:String,
  topic:String,
  uuid:String
});

deviceShema.methods.speak = function () {
  var greeting = "===UUID:"+this.uuid+"\n===TOKEN:"+this.token+"\n===TOPIC:"+this.topic+"\n===PUSHMAGIC:"+this.push_magic;
  console.log(greeting);
};

var device = mongoose.model('Device',deviceShema);

module.exports = device;
