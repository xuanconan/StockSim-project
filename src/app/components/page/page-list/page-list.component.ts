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
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @ViewChild('f') updateForm: NgForm;

  wid: String;
  userId: String;
  user: User;
  developerId: String;
  websites: Website[];
  pages: [{}];
  pid: String;
  description: String;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private pageService: PageService,
    private route: ActivatedRoute) { }

  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];

      this.wid = params['wid'];

      this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
          console.log(websites);
        });

      this.pageService.findPagesByWebsiteId(this.wid)
        .subscribe((data: any) => {
          this.pages = data;
          console.log(data);
        });
      // this.pages = this.pageService.findPageByWebsiteId(this.wid);

    });

  }
}
