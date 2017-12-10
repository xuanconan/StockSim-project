import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import { NgForm } from '@angular/forms';
import { SharedService} from '../../../services/shared.service.client';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  user: User;
  username: String;
  password: String;
  passwordvalid: String;
  title: String;
  disabledFlag: boolean;
  error: any;
  role: String;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService ) { }

  // function to be call from register
  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.passwordvalid = this.registerForm.value.passwordvalid;

    if (!this.role) {
      alert('Please select your role!');
    } else {
      this.userService.findUserByUsername(this.username)
        .subscribe((user: User) => {
          if (user) {
            alert('Username "' + this.username + '" already exists');
            this.router.navigate(['/register']);
          } else if (this.password !== this.passwordvalid) {
            alert('Please validate your password!');
            this.router.navigate(['/register']);
          } else {
            const newUser = {
              _id: this.userService.newId(),
              username: this.username,
              password: this.password,
              firstName: '',
              lastName: '',
              role: this.role,
              class: null,
              classname: null
            };
            console.log(newUser);
            // this.userService.createUser(newUser).subscribe((auser) => {
            //   this.user = auser;
            //   console.log(this.user);
            //   this.router.navigate(['profile', this.user._id]);
            // });
            this.userService
              .register(this.username, this.password, this.role)
              .subscribe((auser) => {
                  this.sharedService.user = auser;
                  // passport will save user information so no need to include userId in router
                  this.router.navigate(['/profile']);
                  console.log(auser);
                },
                (error: any) => {
                  this.error = error._body;
                });
          }
        });
    }
  }

  ngOnInit() {
    this.title = 'This is Register Page';
    this.disabledFlag = true;

    // this.userService.findUserByUsername(this.username)
    //   .subscribe((user) => {
    //     this.user = user;
    //   });

  }



}
