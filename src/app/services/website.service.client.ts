// executed on client

import {Website} from '../models/website.model.client';
import {Injectable} from '@angular/core';
import { User } from '../models/user.model.client';



// make class usable for all components
@Injectable()
export class WebsiteService {
  // users are a group of json objects, here will be user(data structure)
  websites: Website[] = [
    {'_id': '123', 'name': 'Facebook', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '234', 'name': 'Tweeter', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '456', 'name': 'Gizmodo', 'developerId': '456', 'description': 'Lorem'},
    {'_id': '890', 'name': 'Go', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '678', 'name': 'Checkers', 'developerId': '123', 'description': 'Lorem'},
    {'_id': '789', 'name': 'Chess', 'developerId': '234', 'description': 'Lorem'}
  ];

  // generate a number for website._id
  newId() {
    return (Number(this.websites[this.websites.length - 1]._id) + 1).toString();
  }

  // adds the website parameter instance to the local websites array.
  // The new website's developerId is set to the userId parameter

  createWebsite(userId: String, website: Website) {
    this.websites.push(website);

  }

  // retrieves the websites in local websites array whose developerId matches the parameter userId

  findWebsitesByUser(userId: String) {
    // initiate the array
    const webs: Website[] = [];

    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x].developerId === userId) {
        webs.push(this.websites[x]);

      }
    }
    return webs;
  }

  // retrieves the website in local websites array whose _id matches the websiteId parameter

  findWebsitesById(websiteId: String) {
    const webs = this.websites;
    for (let x = 0; x < this.websites.length; x++) {
      webs.pop();
    }

    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        webs.push(this.websites[x]);
      }
    }
    return webs;
  }

  // updates the website in local websites array whose _id matches the websiteId parameter

  updateWebsite(websiteId: String, website: Website) {
    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites[x].name = website.name;
        this.websites[x].description = website.description;
        this.websites[x].developerId = website.developerId;
      }

    }
  }

  // removes the website from local websites array whose _id matches thewebsiteId parameter

  deleteWebsite(websiteId) {

    for (let x = 0; x < this.websites.length; x++) {
      if (this.websites[x]._id === websiteId) {
        this.websites.splice(x, 1);
      }
    }
    // return this.websites;

  }

  // api = {
  //   'createWebsite' : this.createWebsite,
  //   'findWebsitesById': this.findWebsitesById,
  //   'updateWebsites': this.updateWebsite
  // };


}
