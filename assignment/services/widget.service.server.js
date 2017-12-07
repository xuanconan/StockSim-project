module.exports = function(app) {
  // app.post('/api/upload', uploadFile);
  var WIDGETS = require('./widget.mock.service');
  var multer = require('multer');
  var upload = multer({ dest: __dirname + '/../../dist/assets/uploads'});


  // app.get('/api/widget', findAllWidgets);
  app.get('/api/page/:pid/widget', findAllWidgetsForPage);
  app.get('/api/widget/:wgid', findWidgetById);
  app.delete('/api/page/:pid/widget/:wgid', deleteWidget);
  app.put('/api/page/:pid/widget/:wgid', updateWidget);
  app.post('/api/page/:pid/widget', createWidget);
  app.post ('/api/upload', upload.single('myFile'), uploadImage);
  app.put('/api/page/:pid/widget',reorderWidgets);


  var widgetModel = require('../models/widget/widget.model.server');


  function reorderWidgets(req,res) {
    var pageId = req.params.pid;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    console.log([pageId,startIndex, endIndex]);
    return widgetModel
      .reorderWidgets(pageId, startIndex, endIndex)
      .then(function (stats) {
        res.send(200);
      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;

    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    // var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // var callbackUrl = "http://localhost:4200/user/website/"
    //   + websiteId + '/page/' + pageId + '/widget/' + widgetId ;

    var callbackUrl = "https://webdev-conan-xuan.herokuapp.com/user/website/"
      + websiteId + '/page/' + pageId + '/widget/' ;

    if(myFile === null) {
      res.redirect(callbackUrl);
      return;
    }
    var url = '/assets/uploads/' + filename;

    var image = {
      url: url,
      name: filename
      // url: path
    };

    widgetModel.updateImage(widgetId, image).then(function(status){
        console.log(stats);
        res.send(200);
      },
      function (err) {
        res.sendStatus(404).send(err);
      });

    res.redirect(callbackUrl);
  }

  function updateWidget(req, res) {
    var widgetId = req.params['wgid'];
    var pageId = req.params['pid'];
    var newWidget = req.body;

    newWidget.position = 0;
    return widgetModel.updateWidget(widgetId, newWidget).then(function(widget){
      res.json(widget);
    });
  }


  function createWidget(req, res) {
    var pageId = req.params['pid'];
    // var widgetId = newId();
    var widget = req.body;
    delete widget._id;

    widget._page = pageId;
    // widget.position = widgetModel.widgetAmount(pageId);
    return widgetModel
      .createWidget(widget)
      .then(function (widget){
        return res.json(widget);
      });
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['wgid'];
    var pageId = req.params['pid'];

    return widgetModel.deleteWidget(pageId, widgetId).then(function(widget){
      res.json(widget);
    });

  }

  function findAllWidgetsForPage (req, res) {
    var pageId = req.params['pid'];
    // res.json(getWidgetsForPageId(pageId));
    return widgetModel.findAllWidgetsForPage(pageId).then(function(widgets) {
      res.json(widgets);
    },
      function (err) {
      res.sendStatus(404).send(err);});
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['wgid'];
    return widgetModel.findWidgetById(widgetId).then(function (widget) {
       res.json(widget);
    });
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
