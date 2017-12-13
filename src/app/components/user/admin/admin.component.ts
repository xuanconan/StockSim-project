import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { NgForm } from '@angular/forms';
import {environment} from '../../../../environments/environment';
import { SharedService } from '../../../services/shared.service.client';
import {CanActivate} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  baseUrl = environment.baseUrl;
  user: any;
  userId: String;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  class: String;
  youtubeUrl: SafeResourceUrl;
  users: [{}];

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private router: Router,
    public sanitizer: DomSanitizer) { }


  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
    this.class = this.user.class;
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe((status) => {
      console.log(status);
      alert('User ' + this.user.username + ' deleted!');
      window.location.reload(false); // reload page
    });
  }

  ngOnInit() {
    // console.log(this.sharedService.user);
    this.user = this.sharedService.user;

    this.getUser();

    // invoke a function that can pass the value of the parameters
    // this.activatedRoute.params.subscribe((params) => {
    //   this.userId = params['userId'];
    // });

    // this.user = this.userService.findUserById(this.userId);
    this.userService.findUserById(this.userId).subscribe((user: User) => {
      this.user = user;
      // console.log(this.user);
    });

    this.userService.findAllUsers().subscribe((users) => {
      this.users = users;
    });
    // alert('userId: ' + this.userId);
  }

}
