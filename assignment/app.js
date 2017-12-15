// server side application

// receive app passing from server.js

// this assignment we'll move all data to server
// all services will be done in services directory
// a service exposes the url and maps to certain data

module.exports = function (app) {
  // calling from user.server.js will have this function operating in console
  require("./services/user.service.server")(app);
  require("./services/widget.service.server")(app);
  require("./services/website.service.server")(app);
  require("./services/page.service.server")(app);
  // require("./services/googleFinance.service.server")(app);
  var db = require("./models/model");
  // var UserSchema = mongoose.Schema;
};
