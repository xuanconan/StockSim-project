module.exports = function(app) {
  // app.post('/api/upload', uploadFile);
  var WIDGETS = require('./widget.mock.service');
  var multer = require('multer');
  var upload = multer({ dest: __dirname +'/../../src/assets/uploads'});


  app.get('/api/widget', findAllWidgets);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPageId);
  app.get('/api/widget/:wgid', findWidgetById);
  app.delete('/api/page/:pid/widget/:wgid', deleteWidget);
  app.put('/api/page/:pid/widget/:wgid', updateWidget);
  app.post('/api/page/:pageId/widget', createWidget);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);



  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // var widget = { url : "assets/uploads/" + filename };

    widget = getWidgetForWid(widgetId);
    widget.url = 'assets/uploads/'+filename;

    var callbackUrl = "http://localhost:4200/profile/" + userId + "/website/"
                      + websiteId + '/page/' + pageId + '/widget/' + widgetId;

    res.redirect(callbackUrl);
  }





  // function reorderWidgets (req, res) {
  //   var pageId = req.params.pageId;
  //   var startIndex = parsenInt(req.query,start);
  //   var endIndex = parsenInt(req.query.end);
  //
  //   widgetModel.reorderWidgets(pageId, startIndex, endIndex)
  //     .then(function(stats)
  //
  //
  // }


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


  function createWidget(req, res) {
    var pageId = req.params['pid'];
    // var widgetId = newId();
    var newWidget = req.body;

    WIDGETS.push(newWidget);

    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
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

  // function newId() {
  //   return (Number( Math.floor((Math.random()) * 10000))).toString();
  // }


};
