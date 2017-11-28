// a service for maintaining current information of the user

import {Injectable} from '@angular/core';
@Injectable()
export class SharedService {
  // ba able to track the currently logged in user
  user = '';
}
