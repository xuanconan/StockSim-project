// executed on client

import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import {parseHttpResponse} from 'selenium-webdriver/http';
import { Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

// make class usable for all components
@Injectable()
export class UserService {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {}

  baseUrl = environment.baseUrl;

  // Creates a request options object to be optionally provided when instantiating a Request
  options: RequestOptions = new RequestOptions();

  // used by authentication service to verify loggedin user
  loggedIn() {
    const url = this.baseUrl + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user; // setting user so as to share with all components
          return true;
        } else {
          this.router.navigate(['/login']);
          alert('Please login first');
          return false;
        }
      });
  }

  // add a logout API to post a logout request to the server. The API should return an observable
  // for the component to register a callback and receive a server response.
  logout() {
    const url = this.baseUrl + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, {}, this.options)
      .map((response: Response) => {
        return response; // not return a json object
      });
  }

  // posting a register request to the server.
  register (username, password, role) {
    const url = this.baseUrl + '/api/register';
    // create an object to keep track of the username and password
    const credentials = {
      username: username,
      password: password,
      role: role
    };
    // turn on credentials to make sure the communication is secure
    this.options.withCredentials = true;
    // post the url and other staff to passport and convert back with json object
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }


  login(username, password) {
    const url = this.baseUrl + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    // post the body encrypted
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  newId() {
    return (Number( Math.floor((Math.random()) * 10000))).toString();
    // return (Number(this.users[this.users.length - 1]._id) + 1).toString();
  }

  // adds the user parameter instance to the local users array
  createUser(user) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }

  // updates the user in local users array whose _id matches the userId parameter
  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).map((res: Response) => {
        return res.json();
      });
  }

// returns the user whose username and password match the username and password parameters
  findUserByCredentials(username, password) {
    const url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
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
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findAllUsers() {
    const url = this.baseUrl + '/api/user/all';
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
    });
  }

}
