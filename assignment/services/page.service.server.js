module.exports = function (app) {

  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.post("/api/website/:websiteId/page", createPage);
  app.delete("/api/website/:websiteId/page/:pageId", deletePage);
  app.get("/api/website/:websiteId/page/:pageId", findPageById);
  app.put("/api/website/:websiteId/page/:pageId", updatePage);

  var PAGES = require("./page.mock.service");
  var pageModel = require('../models/page/page.model.server');

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    delete page._id;
    page._website = websiteId;
    return pageModel
      .createPage(page)
      .then(function(website) {
        pageModel
          .findAllPagesForWebsite(website._id)
          .then(function (pages) {
            res.json(pages);
          });
      });
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    return pageModel.findAllPagesForWebsite(websiteId).then(function (pages) {
      res.json(pages);
    });
  }

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    var newpage = req.body;
    return pageModel.updatePage(pageId, newpage).then(function(page) {
      res.json(page);
    });
  }

  function deletePage (req, res) {
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    return pageModel.deletePage(websiteId, pageId).then(function(page){
      res.json(page);
    });
  }


  function findPageById (req, res) {
    var pageId = req.params['pageId'];
    return pageModel.findPageById(pageId).then(function (page){
      res.json(page);
    });
  }


  function getPageForPageId(pageId) {
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        return PAGES[i];
      }
    }
  }

  function getPagesForWebsiteId(websiteId) {
    var pages = [];
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].websiteId === websiteId) {
        pages.push(PAGES[i]);
      }
    }
    return pages;
  }
};
