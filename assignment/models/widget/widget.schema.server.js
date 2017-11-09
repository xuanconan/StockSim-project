var mongoose = require('mongoose');
var WidgetSchema = mongoose.Schema({
  _page: {type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'},
  type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']} ,
  name : String,
  text : String,
  placeholder : String,
  description : String,
  url : String,
  width : String,
  height: Number,
  rows : Number,
  size : Number,
  class : String,
  icon : String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated : {type: Date, default : Date.now}
}, {collection: 'widget'});

module.exports = WidgetSchema;
