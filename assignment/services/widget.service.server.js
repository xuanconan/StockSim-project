module.exports = function(app) {
  app.get('/api/widget', findAllWidgets);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPageId);

  var WIDGETS = require('./widget.mock.service');

  function findAllWidgets(req, res) {
    res.json(WIDGETS);
  }

  function findAllWidgetsForPageId (req, res) {
    var pageId = req.params['pageId'];
    res.json(getWidgetsForPageId(pageId));
  }

  function getWidgetsForPageId (pageId) {
    var widgets = [];
    for (var x = 0; x < WIDGETS.length; x++) {
      if(WIDGETS[x].pageId === pageId) {
        widgets.push(WIDGETS[x]);
      }
    }
    return widgets;
  }

};
