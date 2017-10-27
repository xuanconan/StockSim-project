// executed on client

import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Response} from '@angular/http';


// make class usable for all components
@Injectable()
export class PageService {

  constructor(private http: Http) {}

  // users are a group of json objects, here will be user(data structure)
  pages: Page[] = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];

  // adds the page parameter instance to the local pages array. The new
  // page's websiteId is set to the websiteId parameter
  newId() {
    return (Number( Math.floor((Math.random()) * 10000))).toString();
  }

  createPage(websiteId, page: Page) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.post(url, page)
      .map((response: Response) => {
        return response.json();
      });

    // this.pages.push(page);
  }

  // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
  findPageByWebsiteId(websiteId: String) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  // retrieves the page in local pages array whose _id matches the pageId parameter
  findPageById(websiteId: String, pageId: String) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page/' + pageId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }


  // updates the page in local pages array whose _id matches the pageId parameter
  updatePage(websiteId: String, pageId: String, page: Page) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page/' + pageId;
    return this.http.put(url, page).map((response: Response) => {
      return response.json();
    });

    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x]._id === pageId) {
    //     this.pages[x].name = page.name;
    //     this.pages[x].description = page.description;
    //   }
    // }
  }

  // removes the page from local pages array whose _id matches the pageId parameter
  deletePage(websiteId, pageId) {
    const url = 'http://localhost:3100/api/website/' + websiteId + '/page/' + pageId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x]._id === pageId) {
    //     this.pages.splice(x, 1);
    //   }
    // }

  }

  // api = {
  //   'createPage' : this.createPage,
  //   'findPageById': this.findPageById
  // };


}
