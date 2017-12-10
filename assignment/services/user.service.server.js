// expose this as a module
module.exports = function (app) {

  var userModel = require("../models/user/user.model.server");

  // simple username and password based authentication
  var passport  = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;

  var facebookConfig = {
    clientID     : '1539275026193788',
    clientSecret : '98c2926e0b0a8a375978377e9fe550b9',
    // callbackURL  : 'http://localhost:9000/auth/facebook/callback'
    callbackURL  : 'https://webdev-conan-xuan.herokuapp.com/auth/facebook/callback',
    // callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };
  var bcrypt = require('bcrypt-nodejs');

  // url match the pattern by order, once fit, won't continue
  // app.get("/api/user", findAllUsers);
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/register", createUser);
  app.get("/api/user", findUserByCredentials);
  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post("/api/register", register);

  // parse the username and password from the request and search the user by credentials
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn);

  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));

  // Facebook will call back to a URL configured at their developer website, e.g.,
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      // successRedirect: 'http://localhost:4200/profile',
      // failureRedirect: 'http://localhost:4200/login'
      successRedirect: 'https://webdev-conan-xuan.herokuapp.com/profile',
      failureRedirect: 'https://webdev-conan-xuan.herokuapp.com/login'
    }));

  // Create a Web service that uses passport.authenticate() to delegate authentication to facebook
  // app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // Configure the local strategy to parse the username and password
  // from the request and then use the userModel to retrieve the user by username and password.
  passport.use(new LocalStrategy(localStrategy));

  // tell passport how to interpret user
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  //Use the facebook configuration to register a middle tier that will handle facebook related requests
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);  // already in db
          } else {    // if not, insert into db using profile info
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id: profile.id,
                token: token
              },
              role: 'STUDENT',
              class: ''
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }

    // check if the user is logged in
  // Map the Web service to /api/loggedin and use the request's isAuthenticated() to check if
  // passport has already authenticated the user in the session
  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.send('0');
    }
  }

  // Use the request's logout function to invalidate the currently logged in user.
  function logout(req, res) {
    req.logOut(); // passport utility function logout
    res.send(200);
  }

  // an encrypted representation of the user in a cookie, If the user is found,
  // the login function is invoked and the current user is available in req.user.
  function login(req, res) {
    // the login is from req from passport
    res.json(req.user);
  }

  // use the userModel to retrieve the user by username and password.
  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(function (user){
        // if(user && user.username === username && user.password === password) {
        if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function (err){
        if(err) {
          return done(err);
        }
      });
  }

  // Once the user is created in the database, use the request's login() to set the current user.
  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .createUser(user)
      .then(function (user) {
        // tell passport this is the logged in user, login is a utility function from passport
        if (user) {
          req.login(user, function (err) {
            if (err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      });
  }

  // tell passport what we want to store there
  function serializeUser(user, done) {
    done(null, user);
  }

  // retrieve the currently logged in user from the encrypted cookie created in serializeUser
  function deserializeUser(user, done) {
    userModel
      .findUserById(user._id)
      .then(
        function(user){
          // done return null error and a user as currently logged in user
          done(null, user);
        },
        function(err){
          done(err, null);
        }
      );
  }

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
