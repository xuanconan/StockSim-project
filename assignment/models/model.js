//require mongoose and connect to database
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/cs5610', { userMongoClient: true });
module.exports = db;
