import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import {Page} from '../../../models/page.model.client';
import {PageService} from '../../../services/page.service.client';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {WidgetEditComponent} from '../widget-edit/widget-edit.component';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  wid: String;
  userId: String;
  user: User;
  developerId: String;
  websites: Website[];
  pages: Page[];
  pid: String;
  description: String;
  widgets: Widget[];
  aWidgetId: String;
  youtubeUrl: SafeResourceUrl;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private widgetService: WidgetService,
    private pageService: PageService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer) { }

  createWidget(pageId) {
    const newWidget: Widget = {
      _id: this.widgetService.newId(),
      widgetType: '',
      pageId: this.pid,
      size: 0,
      text: '',
      width: '',
      url: ''
    };
    this.widgetService.createWidget(pageId, newWidget)
      .subscribe( (widgets) => {
        this.widgets = widgets;
      });
  }

  // sanitizer youtuber url
  updateVideoUrl(url: string) {
    // const aurl = 'https://www.youtube.com/embed/qdA32j7_U6U';
    return this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
      // this.user = this.userService.findUserById(this.userId);
      this.wid = params['wid'];

      this.pid = params['pid'];

      // alert('userId: ' + this.userId);
      // this.websites = this.websiteService.findWebsitesByUser(this.userId);
      // console.log(this.websites);
      // this.pages = this.pageService.findPageByWebsiteId(this.wid);
      // this.widgets = this.widgetService.findWidgetsByPageId(this.pid);
       this.widgetService.findAllWidgetsForPageId(this.pid)
        .subscribe((widgets: Widget[]) => {
        this.widgets = widgets;
        console.log(this.widgets);
        });

    });

  }

}
