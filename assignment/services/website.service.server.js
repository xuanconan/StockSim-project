module.exports = function (app) {
  app.get("/api/user/:userId/website", findWebsitesByUser);
  app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
  app.post("/api/user/:userId/website", createWebsite);
  app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
  app.put("/api/user/:userId/website/:websiteId", updateWebsite);


  var WEBSITES = require("./website.mock.service");

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var website = req.body;
    WEBSITES.push(website);

    var websites = getWebsitesForUserId(userId);
    res.json(websites);

  }

  function findWebsitesByUser(req, res) {
    var userId = req.params['userId'];
    var websites = getWebsitesForUserId(userId);
    res.json(websites);
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    for (var x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x]._id === websiteId) {
        WEBSITES.splice(x, 1);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
    // var websites = getWebsitesForUserId(userId);
    // return res.json(websites);
  }

  function updateWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    var newWebsite = req.body;
    for (var x = 0; x < WEBSITES.length; x++) {
      if (WEBSITES[x]._id === websiteId) {
        WEBSITES[x] = newWebsite;
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
        return;
      }
    }
  }


  function findWebsiteById (req, res) {
    var websiteId = req.params['websiteId'];
    var userId = req.params['userId'];
    res.json(getWebsiteById(websiteId));

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
