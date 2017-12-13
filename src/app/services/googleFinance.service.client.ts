import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class GoogleFinanceServiceClient {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  searchCompanyNews(companyName) {
    const url = this.baseUrl + '/api/search/news/' + companyName;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  searchCompanyHistoricals(companyName, from, to) {
    const url = this.baseUrl + '/api/search/historicals/' + companyName + '/time?from=' + from + '&to=' + to;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  addStock(stock) {
    const url = this.baseUrl + '/api/add/stock';
    console.log(stock);
    return this.http.post(url, stock)
      .map((response: Response) => {
        return response.json();
      });
  }

  // findAllstocksForUser(userId) {
  //   const url = this.baseUrl + '/api/stock/' + userId;
  //   return this.http.get(url)
  //     .map((response: Response) => {
  //       return response.json();
  //     });
  // }

  findAllstocksForPort(pid) {
    const url = this.baseUrl + '/api/port/' + pid;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  // findStockForUserandCompany(userId, companyName) {
  //   console.log(userId);
  //   console.log(companyName);
  //   const url = this.baseUrl + '/api/stock/find/stock?userId=' + userId + '&companyName=' + companyName;
  //   // const url = this.baseUrl + '/api/stock/find';
  //   return this.http.get(url)
  //     .map((response: Response) => {
  //       return response.json();
  //     });
  // }

  findStockForPortandCompany(pid, companyName) {
    console.log(pid);
    console.log(companyName);
    const url = this.baseUrl + '/api/stock/find/pc?pid=' + pid + '&companyName=' + companyName;
    // const url = this.baseUrl + '/api/stock/find';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateStockNumberPriceDate(stock) {
    const url = this.baseUrl + '/api/stock/update';
    return this.http.put(url, stock)
      .map((response: Response) => {
        return response.json();
      });
  }


  findStockByStockId(stockid) {
    const url = this.baseUrl + '/api/stock/find/stockid/' + stockid;
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
