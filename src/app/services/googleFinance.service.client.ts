import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class GoogleFinanceServiceClient {

  constructor(private http: Http) {
  }

  searchCompanyNews(companyName) {
    const url = 'http://localhost:3100/api/search/news/' + companyName;
    return this.http.get(url)
      .map((response: Response) => {
      console.log(response.json(), 'coming from client');
        return response.json();
      });
  }

  searchCompanyHistoricals(companyName, from, to) {
    const url = 'http://localhost:3100/api/search/historicals/' + companyName + '/time?from=' + from + '&to=' + to;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // searchSomeNews() {
  //   const url = 'http://localhost:3100/api/search/sth';
  //   return this.http.get(url)
  //     .map((response: Response) => {
  //       return response.json();
  //     });
  // }
}
