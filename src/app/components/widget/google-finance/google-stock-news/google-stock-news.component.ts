import { Component, OnInit } from '@angular/core';
import {CompanyNewsModel} from '../../../../models/company_news.model.client';
import {GoogleFinanceServiceClient} from '../../../../services/googleFinance.service.client';

@Component({
  selector: 'app-google-stock-news',
  templateUrl: './google-stock-news.component.html',
  styleUrls: ['./google-stock-news.component.css']
})
export class GoogleStockNewsComponent implements OnInit {

  companyNews: CompanyNewsModel[];

  constructor(private googleFinanceService: GoogleFinanceServiceClient) { }

  ngOnInit() {
    // this.googleFinanceService.searchSomeNews()
    //   .subscribe((companyNews) => {
    //     this.companyNews = companyNews;
    //     console.log(companyNews);
    //   });
  }

  searchCompany(companyName) {
    this.googleFinanceService.searchCompanyNews(companyName)
      .subscribe((companyNews) => {
        this.companyNews = companyNews;
        console.log(companyNews);
      });
  }

}
