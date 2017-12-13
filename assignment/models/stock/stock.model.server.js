var mongoose = require('mongoose');
var StockSchema = require('./stock.schema.server');
// enable switching database swiftly.
var StockModel = mongoose.model("StockModel", StockSchema);

StockModel.addStock = addStock;
StockModel.findAllStocksForUser = findAllStocksForUser;
StockModel.findStockForUserandCompany = findStockForUserandCompany;
StockModel.findStockByStockId = findStockByStockId;
StockModel.updateStock = updateStock;

module.exports = StockModel;

function addStock(stock) {
  console.log('model');
  console.log(stock);
  return StockModel.create(stock);
}

function findAllStocksForUser(userId) {
  return StockModel
    .find({userId: userId});
}

function findStockForUserandCompany(userId, companyName) {
  return StockModel
    .findOne({userId: userId, name: companyName});
}

function findStockByStockId(stockId) {
  return StockModel
    .findOne({_id: stockId});
}

function updateStock(stock) {
  var userId = stock.userId;
  var companyName = stock.name;
  console.log('update');
  console.log(stock);
  console.log(userId);
  console.log(companyName);
  return StockModel.update({userId: userId, name: companyName},{
    $set: {
      price: stock.price,
      number: stock.number,
      date: stock.date
    }});
}
