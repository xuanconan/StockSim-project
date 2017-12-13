import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Stock} from '../../../../models/stock.model.client';
import {SharedService} from '../../../../services/shared.service.client';
import {GoogleFinanceServiceClient} from '../../../../services/googleFinance.service.client';

@Component({
  selector: 'app-google-stock-list',
  templateUrl: './google-stock-list.component.html',
  styleUrls: ['./google-stock-list.component.css']
})
export class GoogleStockListComponent implements OnInit {

  stocks: Stock[];
  user;
  userId: String;
  wid;
  pid;
  time;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService,
              private googleFinanceSerice: GoogleFinanceServiceClient) { }

  ngOnInit() {
    this.time = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}).slice(0, 10);
    this.activatedRoute.params.subscribe((params: any) => {
      // this.user = this.userService.findUserById(this.userId);
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
    console.log('pid');
    console.log(this.pid);
    this.user = this.sharedService.user;
    console.log(this.user);
    this.userId = this.user['_id'];
    this.googleFinanceSerice.findAllstocksForPort(this.pid)
      .subscribe((stocks) => {
        for (const stock of stocks) {
          console.log(stock);
          this.googleFinanceSerice.searchCompanyHistoricals(stock['name'], this.time, this.time)
            .subscribe((companyHistoricals) => {
              if (companyHistoricals === null || companyHistoricals.length === 0) {
                alert('the stock not existed');
              }else {
                const getstock = companyHistoricals[0];
                stock['currentPrice'] = getstock['open'];
                // console.log('curr');
                // console.log(getstock);
                // console.log(stock['currentPrice']);
              }
            });
        }
        this.stocks = stocks;
      });
  }
}
