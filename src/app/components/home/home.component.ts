import { Component, OnInit } from '@angular/core';
import { TestComponent } from '../test/test.component';
import {NgModel} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  baseUrl = environment.baseUrl;

  constructor(
    private router: Router
  ) { }

  goLogin() {
    alert('Please login to trade!');
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
