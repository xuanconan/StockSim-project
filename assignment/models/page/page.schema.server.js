var mongoose  = require('mongoose');
var PageSchema = mongoose.Schema ({
  // _id: String,
  _website: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  name: String,
  title: String,
  description: String,
  lastName: String,
  widgets:[{type: mongoose.Schema.Types.ObjectId, ref: 'Widget'}],
  dateCreated : {type: Date, default : Date.now}
}, {collection: 'page'});

module.exports = PageSchema;
