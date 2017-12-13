import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../../../services/user.service.client';
import {User} from '../../../../models/user.model.client';
import { Router } from '@angular/router';
import { Website} from '../../../../models/website.model.client';
import {WebsiteService} from '../../../../services/website.service.client';
import { NgForm } from '@angular/forms';
import { Page} from '../../../../models/page.model.client';
import { PageService} from '../../../../services/page.service.client';
import { NgSwitch } from '@angular/common';
import {Input} from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import { QuillEditorModule } from 'ngx-quill-editor';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  @Input()
  widgetNew = {name: '', text: ''};
  widget: Widget;
  wid: String;
  userId: String;
  widgets: Widget[];
  pid: String;
  description: String;
  name: String;
  text: String;
  size: Number;
  wgid: String;
  flag = false;
  error: String;
  alert: String;
  widgettext: String;
  widgetname: String;

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'insert content...'
  };

  constructor(    private userService: UserService,
                  private websiteService: WebsiteService,
                  private pageService: PageService,
                  private route: ActivatedRoute,
                  private widgetService: WidgetService,
                  private router: Router) { }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  updateWidget() {
    if (!this.widgetname) {
      alert('Please input widget name');
    } else {
      this.widget.text = this.widgettext;
      this.widget.name = this.widgetname;
      this.widgetService.updateWidget(this.pid, this.wgid, this.widget)
        .subscribe(
          (data: any) => this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/google/list']),
          (error: any) => console.log(error)
        );
    }
  }

  deleteWidget(pageId, widgetId) {
    this.widgetService.deleteWidget(pageId, widgetId)
      .subscribe((widgets) => {
        this.router.navigate(['user' + '/website/' + this.wid + '/page/' + this.pid + '/widget/google/list']);
      });
  }

  ngOnInit() {
    this.error = 'Enter the name of the widget';
    this.alert = '* Enter the widget name';

    this.route.params.subscribe((params: any) => {
      // this.user = this.userService.findUserById(this.userId);
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
    });
    this.widgetService.findWidgetById(this.wgid)
      .subscribe((widget) => {
        this.widget = widget;
        this.name = this.widget.name;
        this.widgettext = this.widget.text;
        this.widgetname = this.widget.name;
        console.log(widget);
      });

  }

}
