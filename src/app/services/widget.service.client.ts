// executed on client

import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';


// make class usable for all components
@Injectable()
export class WidgetService {
  // users are a group of json objects, here will be user(data structure)
  widget: Widget[] = [
    // { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    // { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    // { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200/"},
    // { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    // { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    // { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%", "url": "https://youtu.be/AM2Ivdi9c4E"},
    // { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
  ];


// adds the widget parameter instance to the local widgets array. The
// new widget's pageId is set to the pageId parameter
  createWidget(pageId, widget) {
      this.widget.push(widget);
  }

  // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
  findWidgetsByPageId(pageId) {
    for (let x = 0; x < this.widget.length; x++) {
      if (this.widget[x].pageId === pageId) {
        return this.widget[x];
      }
    }
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId) {
    for (let x = 0; x < this.widget.length; x++) {
      if (this.widget[x]._id === widgetId) {
        return this.widget[x];
      }
    }
  }

  // updates the widget in local widgets array whose _id matches the widgetId parameter
  updateWidget(widgetId, widget) {
    for (let x = 0; x < this.widget.length; x++) {
      if (this.widget[x]._id === widgetId) {
        this.widget[x].widgetType = widget.widgetType;
        this.widget[x].pageId = widget.pageId;
        this.widget[x].size = widget.size;
        this.widget[x].text = widget.text;
        this.widget[x].url = widget.url;
      }
    }

  }

  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(widgetId) {
    for (let x = 0; x < this.widget.length; x++) {
      if (this.widget[x]._id === widgetId) {
        this.widget.splice(x, 1);
      }
    }
  }

  api = {
    'createWidget' : this.createWidget,
    'findWidgetById': this.findWidgetById
  };


}
