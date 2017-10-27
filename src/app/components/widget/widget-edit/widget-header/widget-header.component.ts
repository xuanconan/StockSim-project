import { Component, OnInit, Input } from '@angular/core';
import { Widget} from '../../../../models/widget.model.client';
import { NgModel} from '@angular/forms';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  // pass the widget as an input from outside
  @Input()
  widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
