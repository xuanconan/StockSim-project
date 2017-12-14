module.exports = function (app) {
  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
  app.put("/api/user/:userId/website/:websiteId", updateWebsite);
  app.get("/api/allClasses", getAllClasses);


  var websiteModel = require('../models/website/website.model.server');
  var WEBSITES = require("./website.mock.service");

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    delete website._id;
    website._user = userId;
     websiteModel
      .createWebsite(website)
      .then(function(user){
        websiteModel
          .findAllWebsitesForUser(userId)
          .then(function (websites){
            res.json(websites);
      });
    });
  }

  function getAllClasses (req, res) {
    return websiteModel.findAllClasses()
      .then(function(classes) {
        res.json(classes);
      });
  }

  function findWebsitesByUser(req, res) {
    var userId = req.params['userId'];
    return websiteModel.findAllWebsitesForUser(userId).then(function (websites){
      res.json(websites);
    });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    return websiteModel.deleteWebsite(userId, websiteId).then(function(website) {
      console.log(website);
      res.json(website);

    });
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    var newWebsite = req.body;

    return websiteModel.updateWebsite(websiteId, newWebsite).then(function(website) {
      res.json(website);
    });
  }

  function findWebsiteById (req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    websiteModel.findWebsiteById(websiteId).then(function (website) {
      res.json(website);
    });
  }

  // utility function for get websites by userId
  function getWebsitesForUserId(userId) {
    var websites = [];
    for (var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  // utility function to fetch a web by wid
  function getWebsiteById (websiteId) {
    for (var x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x]._id === websiteId) {
        return WEBSITES[x];
      }
    }
  }

};
