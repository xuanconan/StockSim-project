// load userSchema from user.schema.server
var mongoose = require('mongoose');
var UserSchema =  require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);

// tide all funciotns with usermodel
UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;


module.exports = UserModel;

function deleteUser (userId) {
  return UserModel.remove({_id: userId});
}

function updateUser(userId, user) {
  var userId = userId;
  var auser = user;
  return UserModel.update({_id: userId},{
    $set: {
      username: auser.username,
      firstName : auser.firstName,
      lastName : auser.lastName}});
}

function createUser(user) {
  return UserModel.create(user);
}

function findUserByUsername(username) {
  // findOne + filter
  return UserModel.findOne({username: username});
}


function findUserByCredentials(username, password) {
  //return a promise for a certain object
  return UserModel.findOne({username: username, password: password});
}

function findAllUsers() {
  UserModel.find(function(err, docs){
    console.log(docs);
  });
}


function findUserById (userId) {
  // findById is a function from UserModel
  return UserModel.findById(userId);
}
