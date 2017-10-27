module.exports = function (app) {


  app.get("/api/website/:websiteId/page", findPageByWebsiteId);
  app.post("/api/website/:websiteId/page", createPage);
  app.delete("/api/website/:websiteId/page/:pageId", deletePage);
  app.get("/api/website/:websiteId/page/:pageId", findPageById);
  app.put("/api/website/:websiteId/page/:pageId", updatePage);

  var PAGES = require("./page.mock.service");

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    var newpage = req.body;
    for(var x = 0; x < PAGES.length; x++) {
      if(PAGES[x]._id === pageId) {
        PAGES[x] = newpage;
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
  }



  function deletePage (req, res) {
    var pageId = req.params['pageId'];
    var websiteId = req.params['websiteId'];
    for(var x = 0; x < PAGES.length; x++) {
      if(PAGES[x]._id === pageId) {
        PAGES.splice(x, 1);
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
}

  function findPageById (req, res) {
    var pageId = req.params['pageId'];
    res.json(getPageForPageId(pageId));
  }



  function findPageByWebsiteId(req, res) {
    var websiteId = req.params['websiteId'];
    res.json(getPagesForWebsiteId(websiteId));

  }


  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    PAGES.push(page);

    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
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
