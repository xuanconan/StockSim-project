var mongoose = require('mongoose');
var websiteSchema = mongoose.Schema({
  // _user:
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  description: String,
  pages:[{type: mongoose.Schema.Types.ObjectId, ref:'Page'}],
  dateCreated : {type: Date, default : Date.now}
  //overwrite the collection name we want to use
}, {collection: 'website'});
module.exports = websiteSchema;
