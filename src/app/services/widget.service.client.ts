// executed on client

import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

// make class usable for all components
@Injectable()
export class WidgetService {
  // users are a group of json objects, here will be user(data structure)
  // widget: Widget[] = [
  //   { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', width: '', url: ''},
  //   { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: ''},
  //   { _id: '345', widgetType: 'IMAGE', pageId: '321', size: 0, text: 'a', width: '100%', url: 'http://lorempixel.com/400/200/'},
  //   { _id: '456', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: ''},
  //   { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: ''},
  //   { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: 0, text: 'a', width: '100%', url: 'https://youtu.be/AM2Ivdi9c4E'},
  //   { _id: '789', widgetType: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum</p>', width: '', url: ''}
  // ];

  // inject http service
  constructor(private http: Http) {}

  newId() {
    return (Number( Math.floor((Math.random()) * 10000))).toString();
  }

  findAllWidgets() {
    // return this.widget;
  //  user http service to return all widgets on the server, dont' forget to change the components
    return this.http.get('http://localhost:3100/api/widget')
      .map((response: Response) => {
      return response.json();
    });

  }

  // adds the widget parameter instance to the local widgets array. The
  // new widget's pageId is set to the pageId parameter
  createWidget(pageId, widget) {
      // this.widget.push(widget);
  }

  // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
  findAllWidgetsForPageId(pageId) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget';

    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
    // const widgets: Widget[] = [];
    // for (let x = 0; x < this.widget.length; x++) {
    //   if (this.widget[x].pageId === pageId) {
    //     widgets.push(this.widget[x]);
    //   }
    // }
    // return widgets;
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId) {

    const url = 'http://localhost:3100/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
    // const widgets: Widget[] = [];
    // for (let x = 0; x < this.widget.length; x++) {
    //   if (this.widget[x]._id === widgetId) {
    //     widgets.push(this.widget[x]);
    //   }
    // }
    // return widgets;
  }

  // updates the widget in local widgets array whose _id matches the widgetId parameter
  updateWidget(pageId, widgetId, widget) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget/' + widgetId;
    return this.http.put(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(pageId, widgetId) {
    const url = 'http://localhost:3100/api/page/' + pageId + '/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // api = {
  //   'createWidget' : this.createWidget,
  //   'findWidgetById': this.findWidgetById
  // };


}
