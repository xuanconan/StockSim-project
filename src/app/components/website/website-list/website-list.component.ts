import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {
  // @ViewChild('f') updateForm: NgForm;
  wid: String;
  userId: String;
  user: any;
  developerId: String;
  websites: Website[];
  description: String;
  pid: String;

  // inject route info in constructor
  constructor(
    private websiteService: WebsiteService,
    private route: ActivatedRoute,
    private userService: UserService,
    private sharedService: SharedService,
    private router: Router) { }

  addclass() {
    if (this.user.role !== 'STUDENT') {
      this.router.navigate(['user', 'website', 'new']);
    } else {
      alert('Student cannot create classes');
    }
  }

  getUser() {
    // this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

  // notify the changes of the route
  ngOnInit() {

      this.getUser();

      this.user = this.sharedService.user;

      this.userId = this.user['_id'];

      this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites) => {
        this.websites = websites;
        console.log(websites);
      });

      // this.websiteService.findAllClasses()
      //   .subscribe((classes) => {
      //     this.websites = classes;
      //     console.log(classes);
      //   });
      // console.log(this.websites);
  }


}
