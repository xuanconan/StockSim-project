// executed on client

import {Page} from '../models/page.model.client';
import {Injectable} from '@angular/core';


// make class usable for all components
@Injectable()
export class PageService {
  // users are a group of json objects, here will be user(data structure)
  pages: Page[] = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
  ];

  // adds the page parameter instance to the local pages array. The new
  // page's websiteId is set to the websiteId parameter
  newId(){
    return (Number(this.pages[this.pages.length -1]._id) + 1).toString();
  }

  createPage(websiteId, page: Page){
    this.pages.push(page);
  }

  //retrieves the pages in local pages array whose websiteId matches the parameter websiteId
  findPageByWebsiteId(websiteId: String) {
    let pages: Page[] = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x].websiteId === websiteId) {
        pages.push(this.pages[x]);
      }
    }
    return pages;
  }

  //retrieves the page in local pages array whose _id matches the pageId parameter
  findPageById(pageId: String) {
    let pages: Page[] = [];
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        pages.push(this.pages[x]);
      }
    }
    return pages;
  }



  //updates the page in local pages array whose _id matches the pageId parameter
  updatePage(pageId, page) {
    for(let x = 0; x < this.pages.length; x++){
      if (this.pages[x]._id === pageId){
        this.pages[x].name = page.name;
        this.pages[x].description = page.description;
      }
    }
  }

  // removes the page from local pages array whose _id matches the pageId parameter
  deletePage(pageId) {
    for(let x = 0; x < this.pages.length; x++){
      if (this.pages[x]._id === pageId){
        this.pages.splice(x, 1);
      }
    }

  }

  api = {
    'createPage' : this.createPage,
    'findPageById': this.findPageById
  };


}
