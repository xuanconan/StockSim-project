import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoogleFinanceServiceClient} from '../../../../services/googleFinance.service.client';
import {CompanyHistoricalModel} from '../../../../models/company_historical.model.client';
import {SharedService} from '../../../../services/shared.service.client';


@Component({
  selector: 'app-google-stock-buy',
  templateUrl: './google-stock-buy.component.html',
  styleUrls: ['./google-stock-buy.component.css']
})
export class GoogleStockBuyComponent implements OnInit {

  companyHistoricals: CompanyHistoricalModel[];
  newStock;
  userId: String;
  wid: String;
  pid: String;
  time;
  //
  constructor(private activatedRoute: ActivatedRoute,
              private googleFinanceService: GoogleFinanceServiceClient,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.time = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}).slice(0, 10);
    console.log(this.time);
    this.userId = this.sharedService.user['_id'];
    console.log(this.userId);
    this.activatedRoute.params.subscribe((params: any) => {
      this.wid = params['wid'];
      this.pid = params['pid'];
    });
  }
  //
  searchCompanyHistoricals(companyName) {
    const from = this.time;
    const to = this.time;
    if (companyName.length === 0 || from.length === 0 || to.length === 0) {
      alert('missing info');
      return;
    }
    this.googleFinanceService.searchCompanyHistoricals(companyName, from, to)
      .subscribe((companyHistoricals) => {
        this.companyHistoricals = companyHistoricals;
        console.log(companyHistoricals);
      });
  }


  updateStockNumberPriceDate(stock, companyName, number, price, date) {
    console.log(stock);
    const newPrice = (parseFloat(stock['price']) * parseInt(stock['number'], 10)
      + parseFloat(price) * parseInt(number, 10))
      / (parseInt(stock['number'], 10) + parseInt(number, 10));
    const newNumber = parseInt(stock['number'], 10) + parseInt(number, 10);
    console.log(newPrice);
    console.log(newNumber);
    const newStock = {
      userId: this.userId,
      name: companyName,
      number: newNumber,
      price: newPrice,
      date: date
    };
    this.googleFinanceService.updateStockNumberPriceDate(newStock)
      .subscribe((returnstock) => {
        console.log(returnstock);
      });
  }

  // buyStock(companyName, number) {
  //   const time = this.time;
  //
  //   if (companyName.length === 0 || time.length === 0 || number.length === 0) {
  //     alert('missing info');
  //     return;
  //   }
  //   this.googleFinanceService.findStockForUserandCompany(this.userId, companyName)
  //     .subscribe((findstock) => {
  //       console.log('findstock');
  //       console.log(findstock);
  //       this.googleFinanceService.searchCompanyHistoricals(companyName, time, time)
  //         .subscribe((companyHistoricals) => {
  //           this.companyHistoricals = companyHistoricals;
  //           if (this.companyHistoricals === null || this.companyHistoricals.length === 0) {
  //             alert('the stock not existed');
  //           }else {
  //             const stock = this.companyHistoricals[0];
  //             const newStock = {
  //               userId: this.userId,
  //               pid: this.pid,
  //               name: stock['symbol'],
  //               number: parseInt(number, 10),
  //               price: parseFloat((stock['open']).toString()),
  //               date: stock['date']
  //             };
  //             if (findstock === null) {
  //               console.log('null');
  //               this.googleFinanceService.addStock(newStock)
  //                 .subscribe((getStock) => {
  //                   this.newStock = getStock;
  //                   console.log('successful');
  //                   console.log(getStock);
  //                 });
  //             } else {
  //               console.log('notnull');
  //               const newPrice = newStock['price'];
  //               const newNumber = newStock['number'];
  //               const newDate = newStock['date'];
  //               console.log(newPrice);
  //               console.log(newNumber);
  //               console.log(newDate);
  //               this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
  //             }
  //           }
  //         });
  //
  //     });
  // }

  buyStock2(companyName, number) {
    const time = this.time;

    if (companyName.length === 0 || time.length === 0 || number.length === 0) {
      alert('missing info');
      return;
    }
    this.googleFinanceService.findStockForPortandCompany(this.pid, companyName)
      .subscribe((findstock) => {
        console.log('findstock');
        console.log(findstock);
        this.googleFinanceService.searchCompanyHistoricals(companyName, time, time)
          .subscribe((companyHistoricals) => {
            this.companyHistoricals = companyHistoricals;
            if (this.companyHistoricals === null || this.companyHistoricals.length === 0) {
              alert('the stock not existed');
            }else {
              const stock = this.companyHistoricals[0];
              const newStock = {
                userId: this.userId,
                pid: this.pid,
                name: stock['symbol'],
                number: parseInt(number, 10),
                price: parseFloat((stock['open']).toString()),
                date: stock['date']
              };
              if (findstock === null) {
                console.log('null');
                this.googleFinanceService.addStock(newStock)
                  .subscribe((getStock) => {
                    this.newStock = getStock;
                    console.log('successful');
                    console.log(getStock);
                  });
              } else {
                console.log('notnull');
                const newPrice = newStock['price'];
                const newNumber = newStock['number'];
                const newDate = newStock['date'];
                console.log(newPrice);
                console.log(newNumber);
                console.log(newDate);
                this.updateStockNumberPriceDate(findstock, companyName, newNumber, newPrice, newDate);
              }
            }
          });

      });
  }

}
