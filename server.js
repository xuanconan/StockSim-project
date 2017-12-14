/**
 * Created by sesha on 6/2/17.
 */

// Get the dependencies
  // express library: easy to make a server, loading module express
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

const cookieParser = require('cookie-parser');
const session      = require('express-session');
const passport = require('passport');

app.use(cookieParser());
// session make sure the cookie is encrypted
// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(session({ secret: "asdfasdf"}));


// set up passport after cookie and session
app.use(passport.initialize());
app.use(passport.session());

// initialize parser for json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));

// CORS  Cross Origin Request: allows browsers access servers to connect to other websites
// we need API supporting CORS
app.use(function(req, res, next) {
  // give permission to domain 4200 to authenticate with security
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");

  // res.header("Access-Control-Allow-Origin", "*"); // * is fine for Heroku as it's the same domain
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  //methods allowed by the service
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  // turn on security credentials
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


const port = process.env.PORT || '9000';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

var mongoose = require('mongoose'); // import it


// load hello, hello is defined in hello.js, which is the anonymous function defined
// in hello.js
// var hello = require("./hello.js");
// hello (app);
//
require("./assignment/app") (app);

app.get("/", function(){
  console.log("Hello from Root Context Handler");
} );


var serverSide = require("./server/test-mongodb/app");
serverSide(app);

// listen to certain param from somewhere and respond by sendting this message
// app.get("/", function(req, res) {
//   res.send("Hello from Root Context Handler");
// });

// we'll listen to something from api/hello. All dynamic should be from api
// get to call function hello
// define function hello, this should be in a separate js file
// app.get("/api/hello", hello);
//
// function hello (req, res) {
//   res.send({message:"Hello from Handler"});
// };



// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});



server.listen(port);

// server.listen( port , () => console.log('Running'));

// user configuration to run server.js

