import { Component, OnInit } from '@angular/core';
import {GoogleFinanceServiceClient} from '../../../../services/googleFinance.service.client';
import {CompanyHistoricalModel} from '../../../../models/company_historical.model.client';

@Component({
  selector: 'app-google-historical',
  templateUrl: './google-historical.component.html',
  styleUrls: ['./google-historical.component.css']
})
export class GoogleHistoricalComponent implements OnInit {

  companyHistoricals: CompanyHistoricalModel[];

  constructor(private googleFinanceService: GoogleFinanceServiceClient) { }

  ngOnInit() {

  }

  searchCompanyHistoricals(companyName, from, to) {
    this.googleFinanceService.searchCompanyHistoricals(companyName, from, to)
      .subscribe((companyHistoricals) => {
        this.companyHistoricals = companyHistoricals;
        console.log(companyHistoricals);
      });
  }
}
