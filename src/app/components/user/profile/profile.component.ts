import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  @ViewChild('f') updateForm: NgForm;
  user: User;
  userId: String;
  // user: User;
  username: String;
  email: String;
  firstName: String;
  lastName: String;

  // inject route info in constructor
  constructor(
          private userService: UserService,
          private activatedRoute: ActivatedRoute) { }

  update(username, firstName, lastName) {
    // console.log(user);
    // this.ausername = this.updateForm.value.ausername;
    // this.firstName = this.updateForm.value.firstName;
    // this.lastName = this.updateForm.value.lastName;
    // this.email = this.updateForm.value.email;

    const updatedUser: User = {
      _id: this.userId,
      username: username,
      password: this.user.password,
      firstName: firstName,
      lastName: lastName
      // email: this.email,

    };
    // console.log(updatedUser);
    this.userService.updateUser(this.userId, updatedUser).
    subscribe((user) => {
      this.user = user;
    });
    console.log(this.user);
  }

  // notify the changes of the route
  ngOnInit() {
    // invoke a function that can pass the value of the parameters
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
    });

    // this.user = this.userService.findUserById(this.userId);

    this.userService.findUserById(this.userId).subscribe((user: User) => {
        this.user = user;
        console.log(this.user);
    });
    // alert('userId: ' + this.userId);
  }


}
