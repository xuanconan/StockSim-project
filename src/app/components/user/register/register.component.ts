import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  username: String;
  password: String;
  passwordvalid: String;
  title: string;
  disabledFlag: boolean;

  constructor(private userService: UserService,
              private router: Router) { }




  // function to be call from register
  register() {

    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.passwordvalid = this.registerForm.value.passwordvalid;

    // if there is a user, then navigator, will have userID passed too
    if (this.userService.findUserByUsername(this.username)) {
      alert('Username "' + this.username + '" already exists');
      this.router.navigate (['/register']);
    } else if (this.password !== this.passwordvalid) {
      alert('Please validate your password!');
      this.router.navigate(['/register']);
    } else {

      const newUser: User = {
        _id: this.userService.newId(),
        username: this.username,
        password: this.password,
        firstName: '',
        lastName: ''
      };

      this.userService.createUser(newUser);
      this.router.navigate(['profile', newUser._id]);
    }

  }

  ngOnInit() {
    this.title = 'This is Register Page';
    this.disabledFlag = true;
  }

}
