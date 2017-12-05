var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');
var PageModel = require('../../models/page/page.model.server');
var WidgetModel = mongoose.model('WidgetModel', widgetSchema);

module.exports = WidgetModel;

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.updateImage = updateImage;
WidgetModel.reorderWidgets = reorderWidgets;
WidgetModel.updatePosition = updatePosition;



function reorderWidgets(pageId, startIndex, endIndex) {
  return WidgetModel
    .find({_page:pageId})
    .then (function (widgets) {
     widgets.forEach(function (widget) {
      console.log(widget.position);
      if(startIndex < endIndex){
        if(widget.position === startIndex){
          widget.position = endIndex;
          console.log(widget.position);
          widget.save();
          console.log(widget.position);
        } else if (widget.position > startIndex && widget.position <= endIndex) {
          widget.position --;
          widget.save();
          console.log(widget.text, widget.position);
        }
      } else {
          if(widget.position === startIndex){
            widget.position = endIndex;
            widget.save();
          } else if(widget.position < startIndex && widget.position >= endIndex) {
            widget.position ++;
            widget.save();
          }
        }
    })
  });
}

function updateImage(widgetId, image) {
  delete image._id;
  return WidgetModel.update({_id: widgetId},{
    $set: image
  });
}

function deleteWidget(pageId, widgetId){
 return  WidgetModel.findOne({_id: widgetId})
    .then (function (widget) {
      var deletedPosition = widget.position;
      console.log(deletedPosition);
      updatePosition(pageId, deletedPosition);
      return WidgetModel.remove({_id: widgetId});
    });

  // return WidgetModel.remove({_id: widgetId});
}

function updateWidget(widgetId, widget) {
  var widgetId = widgetId;
  var newWidget = widget;
  return WidgetModel.update({_id: widgetId},{
    $set:{
      name: newWidget.name,
      text: newWidget.text,
      size: newWidget.size,
      width: newWidget.width,
      url: newWidget.url,
      placeholder: newWidget.placeholder,
      rows: newWidget.rows,
      formatted: newWidget.formatted
    }
  });
}

function createWidget(widget) {
  var newPage = null;
  var aWidget = widget;
  var pageId = aWidget._page;
  var amt;

  WidgetModel
    .find({_page: pageId})
    .then(function (widgets){
      amt = widgets.length;
      aWidget.position = amt;
    });

  return WidgetModel
    .create(aWidget)
    // put the page in the website array
    .then(function(widget){
      var newWidget = widget;
      newWidget.position = amt;
      newWidget.save();
      return PageModel
        .findPageById(newWidget._page)
        .then(function(page){
          page.widgets.push(newWidget._id);
          //return the saved website
          return newWidget;
        });
    });
}

function findWidgetById(widgetId){
  return WidgetModel.findOne({_id: widgetId});
}

function findAllWidgetsForPage(pageId) {
  return WidgetModel
    .find({_page: pageId});
    // .populate('_page','name')
    // .exec();
}


function updatePosition (pageId, position) {
   return WidgetModel.find({_page:pageId}, function (err, widgets) {
    widgets.forEach (function (widget) {
      if(widget.position > position){
        widget.position--;
        widget.save();
      }
    })
  });
}
