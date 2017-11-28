
import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

// make class usable for all components
@Injectable()
export class WidgetService {

  baseUrl = environment.baseUrl;
  // inject http service
  constructor(private http: Http) {}

  newId() {
    return (Number( Math.floor((Math.random()) * 10000))).toString();
  }


  findAllWidgets() {
    // return this.widget;
  //  user http service to return all widgets on the server, dont' forget to change the components
    return this.http.get(this.baseUrl + '/api/widget')
      .map((response: Response) => {
      return response.json();
    });
  }

  // adds the widget parameter instance to the local widgets array. The
  // new widget's pageId is set to the pageId parameter
  createWidget(pageId, newWidget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.post(url, newWidget)
      .map((response: Response) => {
        return response.json();
      });
  }

  // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
  findAllWidgetsForPageId(pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // retrieves the widget in local widgets array whose _id matches the widgetId parameter
  findWidgetById(widgetId) {

    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // updates the widget in local widgets array whose _id matches the widgetId parameter
  updateWidget(pageId, widgetId, widget) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId;
    return this.http.put(url, widget)
      .map((response: Response) => {
        return response.json();
      });
  }

  // removes the widget from local widgets array whose _id matches the widgetId parameter
  deleteWidget(pageId, widgetId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget/' + widgetId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  reorderWidgets(initialIndex, finalIndex, pageId) {
    const url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + initialIndex + '&end=' + finalIndex;
    return this.http.put(url, '')
      .map((res: Response) => {
         return res.json();
        }
      );
  }


}
