// expose this as a module
module.exports = function (app) {

  // url match the pattern by order, once fit, won't continue
  // app.get("/api/user", findAllUsers);
  app.get("/api/user/hello", helloUser);
  app.get("/api/user/register", createUser);
  app.get("/api/user", findUserByCredentials);
  app.post("/api/user", createUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);


  var users = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'AlicefromServer', lastName: 'Wonder' },
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' },
    {_id: '567', username: 'test', password: 'test', firstName: 'Yeah', lastName: 'Baby' }

  ];

  // function findAllUsers(req, res) {
  //
  //   // send will send back all data types, so we'll json as a dedicated function
  //   // without ambiguity
  //   res.json(users);
  //
  // }

  // call the function by passing in query
  function findUserByCredentials(req, res) {
    // local variables to get the query param from url
    var username = req.query["username"];
    var password = req.query["password"];
    // if there is a username and password
    if (username && password) {
      // username and password verification function
      var user = users.find(function (user){
        return user.username === username &&
               user.password === password;
      });

      if (user) {
        res.json(user);
      } else {
        res.json({});
      }
      return;
      // if only username, return certain user
    }
    else if (username) {
      var user = users.find(function (user){
        return user.username === username
      });
      if(user) {
        res.json(user);
      } else {
        res.json(null);
      }
      return;
    }
    // if nothing, return all users
    res.json(users);
  }


    // all data will be start with user here

  function helloUser(req, res){
    res.send("Hello from userService");
  }


  function findUserById(req, res) {
    // req is from param
    var userId = req.params["userId"];
    // var userId = req.query["userId"]
    // users refer to the array defined at the beginning of the file, function(user) works as a lambda
    var user = users.find(function (user){
      return user._id === userId;
    });
    return res.json(user);
  }

  function updateUser(req, res) {
    var user = req.body;
    var userId = req.userId;

    for(var x = 0; x < users.length; x++) {
      if (users[x]._id === userId) {
        users[x] = user;
      }
    }
    return res.json(user);
  }

  function createUser(req, res) {
    var user = req.body;
    users.push(user);
    return res.json();
  }

};
