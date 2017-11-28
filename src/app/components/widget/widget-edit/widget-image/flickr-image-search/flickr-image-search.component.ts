import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Input} from '@angular/core';
import {WidgetService} from '../../../../../services/widget.service.client';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { FlickrService } from '../../../../../services/flickr.service.clients';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})

export class FlickrImageSearchComponent implements OnInit {
  @Input()
  wid: String;
  userId: String;
  pid: String;
  wgid: String;
  searchText: String;
  photos: any;
  pic: any;
  error: string;
  photo: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private widgetService: WidgetService,
    private http: Http,
    private service: FlickrService
  ) { }


  searchPhotos(searchText) {
    this.service
      .searchPhotos(searchText)
      .subscribe(
        (data: any) => {
          console.log(data);
          let val = data._body;
          val = val.replace('jsonFlickrApi(', '');
          val = val.substring(0, val.length - 1);
          val = JSON.parse(val);
          console.log(val);
          this.photos = val.photos;
        }
      );
  }

  selectPhoto(photo) {
    let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
    url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
    const widget = {
      websiteId: this.wid,
      pageId: this.pid,
      url: url,
      size: 1,
      name: 'Flickr',
      rows: 0,
      placeholder: '',
      formatted: false
    };

    this.widgetService
      .updateWidget(this.pid, this.wgid, widget)
      .subscribe(
        (data: any) => {
          const result = data;
          if (result) { this.router.navigate(['/user/' + '/website/' + this.wid + '/page/' + this.pid + '/widget/'] );
          } else {
            this.error = 'failed!';
          }
        }
      );
  }

    ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
    });
  }

}
