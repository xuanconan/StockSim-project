module.exports = function (app) {
  var util = require('util');

  require('colors');

  var _ = require('lodash');
  var googleFinance = require('google-finance');

  app.get('/api/search/news/:companyname', searchCompanyNews);
  app.get('/api/search/historicals/:companyname/time', searchCompanyHistorical);
  // app.get('/api/search/sth', searchSomeNews());



  function searchCompanyNews(req, res) {
    var companyName = req.params['companyname'];
    console.log(companyName, "message from google finance server");
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
