// wrap this in a funciton where we can pass app as an argument

// exporting the whole function to server
module.exports = function (app) {

  app.get("/api/hello", hello);

  function hello(req, res) {
    res.send({message: "Hello from Handler 123"});
  }
};
