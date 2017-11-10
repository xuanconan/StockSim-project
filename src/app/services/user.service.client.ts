// executed on client

import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import { Http} from '@angular/http';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

// make class usable for all components
@Injectable()
export class UserService {
  // users are a group of json objects, here will be user(data structure)
  // users: User[] = [
  //   {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
  //   {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
  //   {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
  //   {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }
  //
  // ];
  // inject http service into userService

  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  newId() {
    return (Number( Math.floor((Math.random()) * 10000))).toString();
    // return (Number(this.users[this.users.length - 1]._id) + 1).toString();
  }

  // adds the user parameter instance to the local users array
  createUser(user) {
    const url = 'http://localhost:3100/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId, user) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.put(url, user).map((res: Response) => {
        return res.json();
      });
  }

// returns the user whose username and password match the username and password parameters
  findUserByCredentials(username, password) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    // using http to get the url and work upon that
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  // returns the user in local users array whose _id matches the userId parameter
  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
          return res.json();
        });
  }

  findUserByUsername(username: String) {
    const url = this.baseUrl + '/api/user?username=' + username;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  // removes the user whose _id matches the userId parameter
  deleteUser(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // api = {
  //   'createUser' : this.createUser,
  //   'findUserById': this.findUserById
  // };



}
