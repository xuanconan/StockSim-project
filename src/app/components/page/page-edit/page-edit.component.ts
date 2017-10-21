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

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  @ViewChild('f') updateForm: NgForm;

  wid: String;
  pid: String;
  name: String;
  userId: String;
  title: String;
  user: User;
  developerId: String;
  websites: Website[];
  description: String;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private route: ActivatedRoute) { }

  update(name, title) {

    const newPage: Page = {
      _id: this.pid,
      name: name,
      websiteId: this.userId,
      description: title,
    };

    this.pageService.updatePage(this.pid, newPage);
  }

  deletePage(pageId) {
    this.pageService.deletePage(pageId);
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
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
      console.log(this.websites);
    });

  }
}

