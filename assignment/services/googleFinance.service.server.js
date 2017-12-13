module.exports = function (app) {
  var util = require('util');

  require('colors');

  var _ = require('lodash');
  var googleFinance = require('google-finance');
  const stockModel = require('../models/stock/stock.model.server');

  app.get('/api/search/news/:companyname', searchCompanyNews);
  app.get('/api/search/historicals/:companyname/time', searchCompanyHistorical);
  app.post('/api/add/stock', addStock);
  app.get('/api/stock/:userId', findAllStocksForUser);
  app.get('/api/stock/find/stock', findStockForUserandCompany);
  app.get('/api/stock/find/stockid/:stockid', findStockByStockId);
  app.put('/api/stock/update', updateStock);
  // app.get('/api/search/sth', searchSomeNews());



  function searchCompanyNews(req, res) {
    var companyName = req.params['companyname'];
    console.log(companyName);
    googleFinance.companyNews({
      symbol: companyName
    }).then(function (news) {
      console.log(
        util.format(
        '=== %s (%d) ===',
          'NASDAQ:'+companyName,
        news.length
      ).cyan)
      if (news[0]) {
        console.log(
          '%s\n...\n%s',
          JSON.stringify(news[0], null, 2),
          JSON.stringify(news[news.length - 1], null, 2)
        );
        res.json(news);
      } else {
        console.log('N/A');
        res.json(null);
      }
    });
  }

  function searchCompanyHistorical(req, res) {
    var companyName = req.params['companyname'];
    const from = req.query['from'];
    const to = req.query['to'];

    console.log('search');
    googleFinance.historical({
      symbol: companyName,
      from: from,
      to: to
    }).then(function (quotes) {
      console.log(util.format(
        '=== %s (%d) ===',
        'NASDAQ:'+companyName,
        quotes.length
      ).cyan);
      if (quotes[0]) {
        console.log(
          '%s\n...\n%s',
          JSON.stringify(quotes[0], null, 2),
          JSON.stringify(quotes[quotes.length - 1], null, 2)
        );
        res.json(quotes);
      } else {
        console.log('N/A');
        res.json(null);
      }
    });
  }

  function addStock(req, res) {
    const stock = req.body;
    stockModel
      .addStock(stock)
      .then(function (stock) {
        res.json(stock);
      });
  }

  function findAllStocksForUser(req, res) {
    const userId = req.params['userId'];
    stockModel
      .findAllStocksForUser(userId)
      .then(function (stocks) {
        res.json(stocks);
      });
  }

  function findStockForUserandCompany(req, res) {
    const userId = req.query['userId'];
    const companyName = req.query['companyName'];
    stockModel
      .findStockForUserandCompany(userId, companyName)
      .then(function (stock) {
        res.json(stock);
      });
  }

  function updateStock(req, res) {
    const stock = req.body;
    stockModel
      .updateStock(stock)
      .then(function (backstock) {
        res.json(backstock);
      });
  }

  function findStockByStockId(req, res) {
    const stockid = req.params['stockid'];
    stockModel
      .findStockByStockId(stockid)
      .then(function (stock) {
        res.json(stock);
      });
  }

  // function searchSomeNews(req, res) {
  //   var companyName = 'APPL';
  //   googleFinance.companyNews({
  //     symbol: companyName
  //   }).then(function (news) {
  //     console.log(util.format(
  //       '=== %s (%d) ===',
  //       SYMBOL,
  //       news.length
  //     ).cyan);
  //     if (news[0]) {
  //       console.log(
  //         '%s\n...\n%s',
  //         JSON.stringify(news[0], null, 2),
  //         JSON.stringify(news[news.length - 1], null, 2)
  //       );
  //     } else {
  //       console.log('N/A');
  //     }
  //   });
  // }
}
