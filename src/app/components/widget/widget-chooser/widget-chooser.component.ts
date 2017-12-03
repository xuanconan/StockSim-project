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
import { NgSwitch } from '@angular/common';
import { Widget} from '../../../models/widget.model.client';
import { WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})

export class WidgetChooserComponent implements OnInit {

  wid: String;
  userId: String;
  text: String;
  developerId: String;
  websites: Website[];
  pages: Page[];
  pid: String;
  description: String;
  width: String;
  url: String;
  widgets: [{}];
  widget: Widget;
  type: String;

  defaultWidgetValues =
    {
      'HEADING': {
        name: 'HEADING',
        _id: this.widgetService.newId(),
        type: 'HEADING',
        pageId: this.pid,
        size: 0,
        text: '',
        width: '100%',
        url: '',
        placeholder: '',
        rows: 0,
        fomatted: false
      },
      'IMAGE': {
        name: 'IMAGE',
        _id: this.widgetService.newId(),
        type: 'IMAGE',
        pageId: this.pid,
        size: 0,
        text: '',
        width: '100%',
        url: '',
        placeholder: '',
        rows: 0,
        fomatted: false
      },
      'YOUTUBE': {
        name: 'YOUTUBE',
        _id: this.widgetService.newId(),
        type: 'YOUTUBE',
        pageId: this.pid,
        size: 0,
        text: '',
        width: '100%',
        url: '',
        placeholder: '',
        rows: 0,
        fomatted: false
      },
      'HTML': {
        name: 'HTML',
        _id: this.widgetService.newId(),
        type: 'HTML',
        pageId: this.pid,
        size: 0,
        text: '',
        width: '100%',
        url: '',
        placeholder: '',
        rows: 0,
        fomatted: false
      },
      'INPUT': {
        name: 'TEXT INPUT',
        _id: this.widgetService.newId(),
        type: 'INPUT',
        pageId: this.pid,
        size: 0,
        text: '',
        width: '100%',
        url: '',
        placeholder: '',
        rows: 0,
        formatted: false
      }
    };

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService) { }


  createHeader(pageId) {
    const newWidget = {
      name: '',
      _id: this.widgetService.newId(),
      type: 'HEADING',
      pageId: this.pid,
      size: 0,
      text: 'text',
      width: '100%',
      url: 'url'
    };

    this.widgetService.createWidget(pageId, newWidget)
      .subscribe( (widgets) => {
        this.widgets = widgets;
        this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/' + newWidget._id]);
      });

  }


  createImage(pageId) {
    const newWidget: Widget = {
      name: '',
      _id: this.widgetService.newId(),
      type: 'IMAGE',
      pageId: this.pid,
      size: 0,
      text: 'text',
      width: '100%',
      url: 'url'
    };

    this.widgetService.createWidget(pageId, newWidget)
      .subscribe( (widgets) => {
        this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/' + newWidget._id]);
      });
  }

  createYoutube(pageId) {
    const newWidget: Widget = {
      name: '',
      _id: this.widgetService.newId(),
      type: 'YOUTUBE',
      pageId: this.pid,
      size: 0,
      text: 'text',
      width: '100%',
      url: 'undefined'
    };

    this.widget = newWidget;

    this.widgetService.createWidget(pageId, newWidget)
      .subscribe( (widgets) => {
        this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/' + newWidget._id]);
      });
  }

  createWidget(type) {
    this.widget = this.defaultWidgetValues[type];
    this.widgetService.createWidget(this.pid, this.widget)
      .subscribe(
        (newWidget: any) => {
          this.widget = newWidget;
          this.wid = newWidget._id;
          this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/' + this.wid]);
        },
        (error: any) => console.log(error)
      );
  }

  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
      // this.user = this.userService.findUserById(this.userId);
      this.wid = params['wid'];

      this.pid = params['pid'];

    });

  }
}
