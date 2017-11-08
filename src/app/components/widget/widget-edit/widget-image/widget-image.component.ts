import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {User} from '../../../../models/user.model.client';
import { Router } from '@angular/router';
import { Website} from '../../../../models/website.model.client';
import {WebsiteService} from '../../../../services/website.service.client';
import { NgForm } from '@angular/forms';
import { Page} from '../../../../models/page.model.client';
import { PageService} from '../../../../services/page.service.client';
import { NgSwitch } from '@angular/common';
import {Input} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../../../../environments/environment';


@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  // pass the widget as an input from outside
  @Input()
  widget: Widget;
  name: String;
  text: String;
  url: String;
  baseUrl: String;
  width: String;
  wid: String;
  userId: String;
  user: User;
  developerId: String;
  websites: Website[];
  pages: Page[];
  pid: String;
  description: String;
  widgets: Widget[];
  wgid: String;
  images: String[] = [];

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private widgetService: WidgetService,
    private http: Http) { }


  updateImage(name, text, url, width) {
    const newWidget: Widget = {
      _id: this.wgid,
      widgetType: this.widget.widgetType,
      pageId: this.pid,
      size: this.widget.size,
      text: text,
      width: width,
      url: url
    };

    this.widgetService.updateWidget(this.pid, this.wgid, newWidget)
      .subscribe((widgets) => {
        this.widgets = widgets;
      });
  }


  deleteWidget(pageId, widgetId) {
    this.widgetService.deleteWidget(pageId, widgetId)
      .subscribe((widgets) => {
        this.widgets = widgets;
      });
  }

  // notify the changes of the route
  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
      // this.user = this.userService.findUserById(this.userId);
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];

      // this.widgetService.findAllWidgetsForPageId(this.pid)
      //   .subscribe((widgets: Widget[]) => {
      //     this.widgets = widgets;
      //   });

      this.widgetService.findWidgetById(this.wgid)
        .subscribe((widget) => {
          this.widget = widget;
          // this.wgid = widget._id;
        });

      this.http.get('http://localhost:3100/api/upload')
        .map((response: Response) => {
          return response.json();
        })
        .subscribe((images) => {
          this.images = images;
        });
    });

  }

}
