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
import {environment} from '../../../../environments/environment';
import {OrderByPipe} from './order-by-pipe.pipe';
import { SortableDirective} from './sortable.directive';

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
  pid: String;
  description: String;
  widgets = [];
  youtubeUrl: SafeResourceUrl;
  type: String;
  widget = {type: '', width: ''};
  width: String;
  baseUrl: String;
  url: String;
  page: any;
  imageFileStream: String;
  // testwidth: String;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private widgetService: WidgetService,
    private pageService: PageService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer) { }

  // sanitizer youtuber url
  updateVideoUrl(url: string) {
    // const aurl = 'https://www.youtube.com/embed/qdA32j7_U6U';
    return this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  updateImageUrl(string) {
    let newurl = '';
    if (string.substring(1, 4) === 'ass') {
       newurl = this.baseUrl + string;
    } else {
      newurl = string;
    }
    return newurl;
  }

  reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
      .subscribe(
        (data) => console.log(data)
        // console.log(this.widgets);
      );
    console.log(this.widgets);
  }

  // notify the changes of the route
  ngOnInit() {
    // width = str.substring(0, str.length - 1);
    // this.testwidth = '80%';
    this.baseUrl = environment.baseUrl;
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      // this.user = this.userService.findUserById(this.userId);
      this.wid = params['wid'];
      this.pid = params['pid'];
    });

    this.pageService.findPageById(this.wid, this.pid)
      .subscribe((page) => {
        this.page = page;
      });

    this.widgetService.findAllWidgetsForPageId(this.pid)
      .subscribe((data: any) => {
        this.widgets = data;
        console.log(this.widgets);
      });
  }

}
