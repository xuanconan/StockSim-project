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

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  // pass the widget as an input from outside
  @Input()
  widget: Widget;
  wid: String;
  userId: String;
  widgets: Widget[];
  pid: String;
  description: String;
  name: String;
  text: String;
  size: Number;
  wgid: String;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private widgetService: WidgetService) { }


  updateHeader(name, text, size) {

    const newWidget: Widget = {
      _id: this.wgid,
      widgetType: this.widget.widgetType,
      pageId: this.pid,
      size: size,
      text: text,
      width: this.widget.url,
      url: this.widget.url
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

    });

  }

}
