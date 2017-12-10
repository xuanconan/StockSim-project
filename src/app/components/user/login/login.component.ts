import { Component, OnInit, ViewChild } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
import { SharedService} from '../../../services/shared.service.client';
import {environment} from '../../../../environments/environment';

// below is an angular component
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hello: String = 'Hello from the component';
  // create component attached to username
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  title: string;
  disabledFlag: boolean;
  errorFlag: boolean;
  errorMsg = 'Invalid user name or password！';
  baseUrl = environment.baseUrl;


  // privately declared variable
  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  // api function for login
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    console.log('data', this.username);
    // calling client side userservice to send login information
    this.userService
      .login(this.username, this.password)
      .subscribe(
        (data: any) => {
      // store current logged in user in SharedService
        this.sharedService.user = data;
        this.router.navigate(['/profile']); },
        (error: any) => {
          console.log(error);
          alert('Invalid username or password');
        }
      );
  }


  ngOnInit() {
    this.title = 'This is Login Page';
    this.disabledFlag = true;
  }

}
