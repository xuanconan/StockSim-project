import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GoogleFinanceServiceClient} from '../../../../services/googleFinance.service.client';
import {CompanyHistoricalModel} from '../../../../models/company_historical.model.client';
import {SharedService} from '../../../../services/shared.service.client';

@Component({
  selector: 'app-google-stock-edit',
  templateUrl: './google-stock-edit.component.html',
  styleUrls: ['./google-stock-edit.component.css']
})
export class GoogleStockEditComponent implements OnInit {

  companyHistoricals: CompanyHistoricalModel[];
  companyHistoricals2: CompanyHistoricalModel[];
  userId: String;
  wid: String;
  pid: String;
  stockid: String;
  stock;
  companyName: String;
  time;

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
      this.stockid = params['stockid'];
    });
    this.googleFinanceService.findStockByStockId(this.stockid)
      .subscribe((stock) => {
        this.stock = stock;
        console.log(stock);
        this.companyName = stock['name'];
      });
  }

  updateStockNumberPriceDateSell(stock, companyName, number, price, date) {
    if (number > stock['number']) {
      alert('sell more stocks than have');
      return null;
    }
    const newPrice = (parseFloat(stock['price']) * parseInt(stock['number'], 10)
      - parseFloat(price) * parseInt(number, 10))
      / (parseInt(stock['number'], 10) - parseInt(number, 10));
    const newNumber = parseInt(stock['number'], 10) - parseInt(number, 10);
    const newStock = {
      userId: this.userId,
      name: companyName,
      number: newNumber,
      price: newPrice,
      date: date
    };
    this.googleFinanceService.updateStockNumberPriceDate(newStock)
      .subscribe((any) => {
        this.googleFinanceService.findStockByStockId(this.stockid)
          .subscribe((returnstock) => {
            this.stock = returnstock;
            console.log(returnstock);
          });
        // location.reload();
      });
  }

  sellStock(number) {
    const time = this.time;
    if (time.length === 0 || number.length === 0) {
      alert('missing info');
      return;
    }
    number = parseInt(number, 10);
    this.googleFinanceService.findStockForPortandCompany(this.pid, this.companyName)
      .subscribe((findstock) => {
        if (findstock === null) {
          alert('the stock not existed');
        }else {
          this.googleFinanceService.searchCompanyHistoricals(this.companyName, time, time)
            .subscribe((companyHistoricals) => {
              this.companyHistoricals = companyHistoricals;
              if (this.companyHistoricals === null || this.companyHistoricals.length === 0) {
                alert('the stock not existed');
              }else {
                const stock = this.companyHistoricals[0];
                const newStock = {
                  userId: this.userId,
                  name: stock['symbol'],
                  number: parseInt(number, 10),
                  price: parseFloat((stock['open']).toString()),
                  date: stock['date']
                };
                if (findstock === null) {
                  console.log('null');
                  return;
                } else {
                  console.log('notnull');
                  const newPrice = newStock['price'];
                  const newNumber = newStock['number'];
                  const newDate = newStock['date'];
                  console.log(newPrice);
                  console.log(newNumber);
                  console.log(newDate);
                  this.updateStockNumberPriceDateSell(findstock, this.companyName, newNumber, newPrice, newDate);
                }
              }
            });
        }
      });
  }

  searchCompanyHistoricals() {
    const companyName = this.companyName;
    const from = this.time;
    const to = this.time;
    if (companyName.length === 0 || from.length === 0 || to.length === 0) {
      alert('missing info');
      return;
    }
    this.googleFinanceService.searchCompanyHistoricals(companyName, from, to)
      .subscribe((companyHistoricals) => {
        this.companyHistoricals2 = companyHistoricals;
        console.log(companyHistoricals);
      });
  }

  // buyStock(number) {
  //   const time = this.time;
  //   const companyName = this.companyName;
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
  //               name: stock['symbol'],
  //               number: parseInt(number, 10),
  //               price: parseFloat((stock['open']).toString()),
  //               date: stock['date']
  //             };
  //             if (findstock === null) {
  //               console.log('null');
  //               this.googleFinanceService.addStock(newStock)
  //                 .subscribe((getStock) => {
  //                   this.stock = getStock;
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
                    this.stock = getStock;
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
      pid: this.pid,
      name: companyName,
      number: newNumber,
      price: newPrice,
      date: date
    };
    this.googleFinanceService.updateStockNumberPriceDate(newStock)
      .subscribe((any) => {
        this.googleFinanceService.findStockByStockId(this.stockid)
          .subscribe((returnstock) => {
            this.stock = returnstock;
            console.log(returnstock);
          });
      });
  }

}
