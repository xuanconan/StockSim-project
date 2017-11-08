import { Component, OnInit, ViewChild } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';


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


  // privately declared variable
  constructor(private userService: UserService,
              private router: Router) { }

  // api function for login
  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // calling and subscribe dynamic result from the http function located in user.service.client
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe((user: User) => {
        if (user) {
          // alert(user._id);
          this.router.navigate(['/profile', user._id]);
        } else {
          this.errorFlag = true;
          this.errorMsg = 'Error';
          alert('wrong username or password');
        }
    });
  }


  ngOnInit() {
    this.title = 'This is Login Page';
    this.disabledFlag = true;
  }

}
