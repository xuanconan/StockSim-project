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
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  @Input()

  widget: {placeholder: '', };
  wid: String;
  userId: String;
  widgets: Widget[];
  pid: String;
  description: String;
  name: String;
  text: String;
  size: Number;
  wgid: String;
  flag = false;

  constructor(private userService: UserService,
              private websiteService: WebsiteService,
              private pageService: PageService,
              private route: ActivatedRoute,
              private widgetService: WidgetService,
              private router: Router) { }

  updateWidget() {
    if (this.widget['name'] === undefined) {
      this.flag = true;
    } else {
      this.widgetService.updateWidget(this.pid, this.wgid, this.widget)
        .subscribe(
          (data: any) => this.router.navigate(['/user', 'website', this.wid, 'page', this.pid, 'widget']),
          (error: any) => console.log(error)
        );
    }
  }

  deleteWidget(pageId, widgetId) {
    this.widgetService.deleteWidget(pageId, widgetId)
      .subscribe((widgets) => {
        this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/']);
      });
  }


  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
    });

    this.widgetService.findWidgetById(this.wgid)
      .subscribe((widget) => {
        this.widget = widget;
        console.log(widget);
      });
  }

}
