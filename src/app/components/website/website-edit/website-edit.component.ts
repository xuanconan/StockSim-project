import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { NgForm } from '@angular/forms';
import { Website} from '../../../models/website.model.client';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') updateForm: NgForm;

  wid: String;
  userId: String;
  user: User;
  name: String;
  developerId: String;
  websites: Website[];
  description: String;
  website: Website;

  // inject route info in constructor
  constructor(
    private websiteService: WebsiteService,
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    update(name: String) {
      const newWebsite: Website = {
        _id: this.wid,
        name: name,
        developerId: this.userId,
        description: '',
      };
      this.websiteService.updateWebsite(this.wid, newWebsite)
        .subscribe((status) => {
          this.router.navigate(['profile', this.userId, 'website']);
          console.log(status);
        });
    }

    deleteWebsite() {
      this.websiteService.deleteWebsite(this.userId, this.wid)
        .subscribe((websites: any) => {
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
      this.websiteService.findWebsitesByUser(this.userId)
        .subscribe((websites) => {
          this.websites = websites;
        });

      this.websiteService.findWebsiteById(this.userId, this.wid)
        .subscribe((website) => {
          this.website = website;
        });
    });
  }
}
