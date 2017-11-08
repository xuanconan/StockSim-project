// executed on client

import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import { User } from '../models/user.model.client';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Response} from '@angular/http';


// make class usable for all components
@Injectable()
export class WebsiteService {

  constructor(private http: Http) {}

  // generate a number for website._id
  newId() {
    return (Number( Math.floor((Math.random()) * 10000))).toString();
  }

  // adds the website parameter instance to the local websites array.
  // The new website's developerId is set to the userId parameter

  createWebsite(userId: String, website: Website) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.post(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  // retrieves the websites in local websites array whose developerId matches the parameter userId

  findWebsitesByUser(userId: String) {
    // initiate the array
    // const webs: Website[] = [];
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  // retrieves the website in local websites array whose _id matches the websiteId parameter

  findWebsiteById(userId: String, websiteId: String) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  // updates the website in local websites array whose _id matches the websiteId parameter

  updateWebsite(websiteId, website) {
    const url = 'http://localhost:3100/api/user/' + website._user + '/website/' + websiteId;
    return this.http.put(url, website)
      .map((response: Response) => {
        return response.json();
      });
  }

  // removes the website from local websites array whose _id matches thewebsiteId parameter

  deleteWebsite(userId, websiteId) {
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });

  }

}
