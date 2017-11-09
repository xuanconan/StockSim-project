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
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  // pass the widget as an input from outside
  @Input()
  widget: Widget;
  wid: String;
  userId: String;
  user: User;
  developerId: String;
  websites: Website[];
  pages: Page[];
  pid: String;
  description: String;
  name: String;
  url: String;
  wgid: String;
  text: String;
  widgets: Widget[];
  width: String;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService) { }

  updateYoutube(name, text, url, width) {
    const newWidget: Widget = {
      name: name,
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
        this.router.navigate(['profile/' + this.userId + '/website/' + this.wid + '/page/' + this.pid + '/widget/']);
      });
  }

  deleteWidget(pageId, widgetId) {
    this.widgetService.deleteWidget(pageId, widgetId)
      .subscribe((widgets) => {
        this.router.navigate(['profile/' + this.userId + '/website/' + this.wid + '/page/' + this.pid + '/widget/']);
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

      this.widgetService.findWidgetById(this.wgid)
        .subscribe((widget) => {
          this.widget = widget;
          console.log(widget);
        });

      console.log(this.widget);

    });

  }
}
