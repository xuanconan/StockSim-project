import { Component, OnInit } from '@angular/core';
import {CompanyNewsModel} from '../../../models/company_news.model.client';
import {GoogleFinanceServiceClient} from '../../../services/googleFinance.service.client';
import {ActivatedRoute} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-google-finance',
  templateUrl: './google-finance.component.html',
  styleUrls: ['./google-finance.component.css']
})
export class GoogleFinanceComponent implements OnInit {

  companyNews: CompanyNewsModel[];
  user = {};
  userId: String;

  constructor(private googleFinanceService: GoogleFinanceServiceClient,
              private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.user = this.sharedService.user;
        this.userId = this.user['_id'];
      });
  }

  searchCompany(companyName) {
    this.googleFinanceService.searchCompanyNews(companyName)
      .subscribe((companyNews) => {
        this.companyNews = companyNews;
        console.log(companyNews);
      });
  }

}
