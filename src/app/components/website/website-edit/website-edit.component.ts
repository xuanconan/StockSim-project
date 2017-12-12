import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService} from '../../../services/website.service.client';
import { NgForm } from '@angular/forms';
import { Website} from '../../../models/website.model.client';
import { ViewChild } from '@angular/core';
import {SharedService} from '../../../services/shared.service.client';
import { QuillEditorModule } from 'ngx-quill-editor';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('f') updateForm: NgForm;

  wid: String;
  userId: String;
  user: any;
  name: String;
  developerId: String;
  websites: Website[];
  description: String;
  website: any;
  websitename: String;
  updatedUser: any;

  // inject route info in constructor
  constructor(
    private websiteService: WebsiteService,
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private userService: UserService) { }

    getUser() {
      // this.user = JSON.parse(localStorage.getItem("user"));
      this.user = this.sharedService.user;
      this.userId = this.user['_id'];
    }

    // findClassName(classID) {
    //   this.websiteService.findWebsiteById(this.userId, classID)
    //     .subscribe((website) => {
    //       this.websitename = website.name;
    //     });
    // }

    update() {
      if (this.user.role === 'STUDENT') {
        alert ('Students cannot modify class information.');
      } else if (this.user.role === 'TA') {
        alert ('TA cannot modify class information.');
      } else if ((this.user.role === 'PROFESSOR') && (this.user._id !== this.website._user)) {
        alert ('Professors can only modify own class information.');
      }else if ((this.user.role === 'ORGANIZER') && (this.user._id !== this.website._user)) {
        alert ('Organizer can only modify own class information.');
      }else {
        console.log();
        if (!this.website.name) {
          alert('Please input class name');
        } else {
          const newWebsite: Website = {
            _id: this.wid,
            name: this.website.name,
            developerId: this.userId,
            description: this.website.description,
          };
          this.websiteService.updateWebsite(this.wid, newWebsite)
            .subscribe((status) => {
              console.log(status);
              this.router.navigate(['user', 'website']);
            });
        }
      }
    }

    joinClass() {
      console.log(this.user);
     if ((!this.user.class) || (!this.user.competition))  {

       if ((this.website.competition === 0)) {
         this.updatedUser = {
           _id: this.userId,
           username: this.user.username,
           password: this.user.password,
           firstName: this.user.firstName,
           lastName: this.user.lastName,
           email: this.user.email,
           class: this.wid,
           classname: this.website.name,
           competition: this.user.competition,
           competitionName: this.user.competitionName
         };
       } else if ((this.website.competition === 1)) {
         this.updatedUser = {
           _id: this.userId,
           username: this.user.username,
           password: this.user.password,
           firstName: this.user.firstName,
           lastName: this.user.lastName,
           email: this.user.email,
           class: this.user.class,
           classname: this.user.classname,
           competition: this.wid,
           competitionName: this.website.name
         };
       }

       console.log(this.updatedUser);

       this.userService.updateUser(this.userId, this.updatedUser).subscribe((newuser) => {
         // console.log(status);
         this.user = newuser;
         console.log(this.user);
         alert('Welcome to class "' + this.website.name + '"');
         window.location.reload(false); // reload page
       });
     } else {
        alert('You are currently enrolled in an investment class. You can only enroll one each semester.');
      }
    }

    dropClass() {
      if ((this.user.class === '') || ((this.user.class !== this.wid) && (this.user.competition !== this.wid))) {
        alert ('You are currently not enrolled in this class or competition.');
      } else {
        if (this.website.competition === 0) {
          this.updatedUser = {
            _id: this.userId,
            username: this.user.username,
            password: this.user.password,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            class: null,
            classname: null,
            competition: this.user.competition,
            competitionName: this.user.competitionName
          };
        } else {
          this.updatedUser = {
            _id: this.userId,
            username: this.user.username,
            password: this.user.password,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            class: this.user.class,
            classname: this.user.classname,
            competition: null,
            competitionName: null
          };
        }
        console.log(this.updatedUser);

        this.userService.updateUser(this.userId, this.updatedUser).subscribe((newuser) => {
          // console.log(status);
          this.user = newuser;
          console.log(this.user);
          alert('You have dropped class/competition "' + this.website.name + '"');
          this.router.navigate(['user', 'website']);
        });
      }
    }


    goToMyPortfolio() {
      if ( (this.user.role === 'ORGANIZER') && (this.website.competition === 0) ) {
        alert ('Competition organizers cannot check portfolios in normal classes.');
      } else if ((this.user.role === 'STUDENT') && ((this.user.class !== this.website._id) &&
          (this.user.competition !== this.website._id))) {
        alert ('Student may only check portfolios of its own class or competition.');
      } else  {
        this.router.navigate(['user', 'website', this.wid, 'page']);
      }
    }

    deleteWebsite() {
      if (this.user.role === 'STUDENT') {
        alert ('Student cannot delete classes!');
      } else if (this.user.role === 'TA') {
        alert ('TA cannot delete classes!');
      } else if ((this.user.role === 'PROFESSOR') && (this.user._id !== this.website._user)) {
        alert ('Professors can only delete own class.');
      } else if ((this.user.role === 'ORGANIZER') && (this.user._id !== this.website._user)) {
        alert('Competition organizer can only delete own competitions.');
      } else {
        this.websiteService.deleteWebsite(this.userId, this.wid)
          .subscribe((websites: any) => {
            this.router.navigate(['user', 'website']);
          });
      }
    }

  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.route.params.subscribe((params: any) => {
      this.wid = params['wid'];
    });

    this.getUser();

    this.user = this.sharedService.user;

    this.userId = this.user['_id'];

    // this.websiteService.findWebsitesByUser(this.userId)
    //   .subscribe((websites) => {
    //     this.websites = websites;
    //   });

    this.websiteService.findAllClasses()
      .subscribe((classes) => {
        this.websites = classes;
        console.log(classes);
      });

    this.websiteService.findWebsiteById(this.userId, this.wid)
      .subscribe((website) => {
        this.website = website;
      });

    this.userService.findUserById(this.userId).subscribe((user: User) => {
      this.user = user;
      console.log(this.user);
    });
  }
}
