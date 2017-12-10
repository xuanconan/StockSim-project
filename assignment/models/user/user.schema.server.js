// create the schema for user
// import {Website} from '../../../src/app/models/website.model.client';

var mongoose  = require('mongoose');
var websiteSchema = require('../website/website.schema.server');
var UserSchema = mongoose.Schema ({
  // _id: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
  dateCreated : {type: Date, default : Date.now},
  facebook: {
    id:    String,
    token: String
  },
  role: {type: String, enum: ['ADMIN', 'PROFESSOR', 'STUDENT', 'TA']},
  class: String,
  classname: String
}, {collection: 'user'});

module.exports = UserSchema;
