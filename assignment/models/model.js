//require mongoose and connect to database
var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/cs5610';

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133964.mlab.com:33964/heroku_1gbtpnhz'; // use yours
}

// var connectionString = 'mongodb://admin:admin@ds133964.mlab.com:33964/heroku_1gbtpnhz';

var db = mongoose.connect(connectionString, { userMongoClient: true });
module.exports = db;
