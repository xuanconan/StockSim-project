module.exports = function(app) {
  app.get('/api/widget', findAllWidgets);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPageId);
  app.get('/api/widget/:wgid', findWidgetById);
  app.delete('/api/page/:pid/widget/:wgid', deleteWidget);
  app.put('/api/page/:pid/widget/:wgid', updateWidget);



  var WIDGETS = require('./widget.mock.service');

  function updateWidget(req, res) {
    var widgetId = req.params['wgid'];
    var pageId = req.params['pid'];
    var newWidget = req.body;
    for (var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x]._id === widgetId) {
        WIDGETS[x] = newWidget;
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
  }


  function deleteWidget(req, res) {
    var widgetId = req.params['wgid'];
    var pageId = req.params['pid'];

    for (var x = 0; x < WIDGETS.length; x++){
      if (WIDGETS[x]._id === widgetId) {
        WIDGETS.splice(x, 1);
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
  }


  function findAllWidgets(req, res) {
    res.json(WIDGETS);
  }

  function findAllWidgetsForPageId (req, res) {
    var pageId = req.params['pageId'];
    res.json(getWidgetsForPageId(pageId));
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['wgid'];

    res.json(getWidgetForWid(widgetId));

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

  function getWidgetForWid (widgetId) {
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId){
        return WIDGETS[i];
      }
    }

  }



};
