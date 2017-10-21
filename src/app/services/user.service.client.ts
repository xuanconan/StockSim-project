// executed on client

import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

// make class usable for all components
@Injectable()
export class UserService {
  // users are a group of json objects, here will be user(data structure)
  users: User[] = [
    {_id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder' },
    {_id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley' },
    {_id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia' },
    {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi' }

  ];


  newId() {
    return (Number(this.users[this.users.length - 1]._id) + 1).toString();
  }
  // adds the user parameter instance to the local users array
  createUser(user: any) {
    this.users.push(user);
    return user;
  }

  // define validating function
  // findUserByCredentials(username, password) {
  //   return this.users.find(function (user) {
  //     return user.username === username && user.password === password;
  //   });
  // }

// returns the user whose username and password match the username and password parameters
  findUserByCredentials(username, password) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username && this.users[x].password === password) {
        return this.users[x];
      }
    }
    alert('Invalid username or password!');
  }


  // returns the user in local users array whose _id matches the userId parameter
  findUserById(userId: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        return this.users[x];
      }
    }
  }


  findUserByUsername(username: String) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x].username === username) {
        return this.users[x];
      }
    }
  }

  // updates the user in local users array whose _id matches the userId parameter

  updateUser(userId: String, user: User) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === user._id) {
        this.users[x] = user;
        // this.users[x].firstName = user.firstName;
        // this.users[x].lastName = user.lastName;
      }
    }
  }

  // removes the user whose _id matches the userId parameter

  deleteUser(userId: String) {
    // let users: User[]=[];
    // for (let x = 0; x < this.users.length; x++) {
    //     users.push(this.users[x]);
    // }
    // for (let x = 0; x < this.users.length; x++) {
    //   this.users.pop();
    // }
    //
    // for (let x = 0; x < this.users.length; x++) {
    //     if(users[x]._id != userId){
    //       this.users.push(users[x]);
    //     }
    // }


    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
        this.users.splice(x, 1);
      }
    }

  }

  // api = {
  //   'createUser' : this.createUser,
  //   'findUserById': this.findUserById
  // };



}
