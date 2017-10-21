import { Component, OnInit, ViewChild } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

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

  login() {
    // console.log('login' + username);
    // console.log(password);
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const user: User = this.userService.findUserByCredentials(this.username, this.password);
    if (user) {
      // alert(user._id);
      this.router.navigate(['/profile', user._id]);
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Error';
      // alert('wrong username or password');
    }
  }


  // // function to be call from outside
  //
  // login(username: String, password: String) {
  //   // fetching data from loginForm
  //   // this.username = this.loginForm.value.username;
  //   // alert('username: ' + username);
  //   // use the router to navigate to certain components
  //   const user: User = this.userService.findUserByCredentials(username, password);
  //   // if there is a user, then navigator, will have userID passed too
  //   if (user) {
  //     this.router.navigate(['/profile', user._id]);
  //   }else {
  //     this.errorFlag = true;
  //     this.errorMsg
  //   }
  //
  //   // if (username === 'alice' && password === '123') {
  //   //   this.router.navigate(['/profile']);
  //   // }
  // }



  ngOnInit() {
    this.title = 'This is Login Page';
    this.disabledFlag = true;
  }

}
