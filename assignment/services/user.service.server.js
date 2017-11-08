// expose this as a module
module.exports = function (app) {

  var userModel = require("../models/user/user.model.server");

  // url match the pattern by order, once fit, won't continue
  // app.get("/api/user", findAllUsers);
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/register", createUser);
  app.get("/api/user", findUserByCredentials);
  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);


  var USERS = require("./user.mock.service");

  function deleteUser (req, res) {
    var userId = req.params.userId;
    return userModel.deleteUser(userId).then(function(user){
      res.json(user);
    });
  }

  function findUserByCredentials(req, res) {
    // local variables to get the query param from url
    var username = req.query["username"];
    var password = req.query["password"];
    // if there is a username and password
    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      // promise object will register a function for the result
      promise.then(function(user){
        res.json(user);
        console.log(result);
      });
      return;
    }
    else if (username) {
      userModel
        .findUserByUsername(username)
        .then(function(user){
        res.json(user);
      });
      return;
    }
    // if nothing, return all users
    res.json(users);
  }

  function updateUser(req, res) {
    var user = req.body;
    var userId = req.params['userId'];

    return userModel.updateUser(userId, user).then(function(user) {
      res.json(user);
    });
  }

    // all data will be start with user here
  function helloUser(req, res){
    res.send("Hello from userService");
  }


  function findUserById(req, res) {
    // req is from param
    var userId = req.params["userId"];
    var promise = userModel.findUserById(userId);
    promise.then(function(user){
      res.json(user);
      console.log(result);
    });
  }



  function createUser(req, res) {
    var user = req.body;
    delete user._id;
    userModel.createUser(user).then(function(user){
      res.json(user);
    });
  }

};
