import {Widget} from '../models/widget.model.client';
import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

// make class usable for all components
@Injectable()
export class FlickrService {
  key = '8b20a16ffcd0e29b01491639115b67d7';
  secret = '7daccaf4f367e9f4';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }

}
