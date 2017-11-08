var mongoose = require('mongoose');
var widgetSchema = mongoose.Schema({
  _page : {type : mongoose.Schema.ObjectId, ref: "Page"},
  type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']} ,
  name : {type : String},
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
module.exports = widgetSchema;
