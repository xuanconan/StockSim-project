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
import {SharedService} from '../../../services/shared.service.client';

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
  user: any;
  pages: Page[];
  page: Page;
  developerId: String;
  websites: Website[];
  description: String;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService) { }

  getUser() {
    // this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

  update(name, title) {

    const newPage: Page = {
      _id: this.pid,
      name: name,
      websiteId: this.userId,
      description: title,
    };

    this.pageService.updatePage(this.wid, this.pid, newPage)
      .subscribe((pages) => {
        // this.pages = pages;
        this.router.navigate(['user', 'website', this.wid, 'page']);
      });
  }

  // deletePage(pageId) {
  //   this.pageService.deletePage(pageId);
  // }

  deletePage(websiteId, pageId) {
    this.pageService.deletePage(websiteId, pageId)
      .subscribe((pages) => {
        this.pages = pages;
      });
  }

  // notify the changes of the route
  ngOnInit() {
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

    this.pageService.findPagesByWebsiteId(this.wid)
      .subscribe((pages) => {
        this.pages = pages;
      });

    this.getUser();

    this.user = this.sharedService.user;

    this.userId = this.user['_id'];

  }
}

