import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') createForm: NgForm;

  wid: String;
  userId: String;
  user: User;
  name: String;
  developerId: String;
  websitename: String;
  websites: Website[];
  description: String;

  // inject route info in constructor
  constructor(
    private websiteService: WebsiteService,
    private route: ActivatedRoute,
    private router: Router) { }


  create() {

    this.websitename = this.createForm.value.websitename;

    const newWebsite: Website = {
      _id: this.websiteService.newId(),
      name: this.websitename,
      developerId: this.userId,
      description: '',
    };

    this.websiteService.createWebsite(this.userId, newWebsite)
      .subscribe( (websites) => {
        // this.websites = websites;
        this.router.navigate(['profile', this.userId, 'website']);
      });
  }

  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.wid = params['wid'];
      // alert('userId: ' + this.userId);
      // this.websites = this.websiteService.findWebsitesByUser(this.userId);

    });
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe((websites) => {
        this.websites = websites;
      });
  }

}





