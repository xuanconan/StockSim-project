import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {
  // @ViewChild('f') updateForm: NgForm;

  wid: String;
  userId: String;
  user: User;
  developerId: String;
  websites: Website[];
  description: String;
  pid: String;

  // inject route info in constructor
  constructor(
    private userService: UserService,
    private websiteService: WebsiteService,
    private route: ActivatedRoute) { }

  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
      // this.user = this.userService.findUserById(this.userId);
      this.wid = params['wid'];
      // alert('userId: ' + this.userId);
      this.websites = this.websiteService.findWebsitesByUser(this.userId);
      console.log(this.websites);
    });

  }


}
