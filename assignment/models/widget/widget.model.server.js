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
// WidgetModel.updatePosition = updatePosition;

// function updatePosition (pageId, position) {
//   return Widget.find({_page: pageId}, function (err, widgets) {
//     widgets.forEach (function (widget) {
//       if(widget.position > position){
//         widget.position--;
//         widget.save();
//       }
//     })
//   })
// }

function reorderWidgets(pageId, startIndex, endIndex) {
  return Widget.find({_page:pageId}, function (err,widgets) {
    widgets.forEach (function (widget) {
      if(startIndex < endIndex){
        if(widget.position === startIndex){
          widget.position = endIndex;
          widget.save();
        }else if (widget.position > startIndex && widget.position <= endIndex) {
          widget.position --;
          widget.save();
        }else {
          if(widget.position === startIndex){
            widget.position = endIndex;
            widget.save();
          } else if(widget.position < startIndex && widget.position >= endIndex) {
            widget.position ++;
            widget.save();
          }
        }
      }
    })
  })
}

function updateImage(widgetId, image) {
  var widgetId = widgetId;
  var image = image;
  return WidgetModel.update({_id: widgetId},{
    $set:{
      name: image.name,
      size: image.size,
      width: image.width,
      url: image.url
    }
  });
}

function deleteWidget(pageId, widgetId){
  // return PageModel.remove({_id: pageId});
  return WidgetModel
    .remove({_id: widgetId});
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
  return WidgetModel
    .create(widget)
    // put the page in the website array
    .then(function(widget){
      var newWidget = widget;
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
    .find({_page: pageId})
    .populate('_page','name')
    .exec();
}


