import { Component, OnInit } from '@angular/core';
import { TestComponent } from '../test/test.component';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
