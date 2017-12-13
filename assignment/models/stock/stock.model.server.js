var mongoose = require('mongoose');
var StockSchema = require('./stock.schema.server');
// enable switching database swiftly.
var StockModel = mongoose.model("StockModel", StockSchema);

StockModel.addStock = addStock;
StockModel.findAllStocksForUser = findAllStocksForUser;
StockModel.findAllstocksForPort = findAllstocksForPort;
StockModel.findStockForUserandCompany = findStockForUserandCompany;
StockModel.findStockForPortandCompany = findStockForPortandCompany;
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

function findAllstocksForPort(pid) {
  console.log(StockModel.find({pid: pid}));
  return StockModel
    .find({pid: pid});
}

function findStockForUserandCompany(userId, companyName) {
  return StockModel
    .findOne({userId: userId, name: companyName});
}

function findStockForPortandCompany(pid, companyName) {
  return StockModel
    .findOne({pid: pid, name: companyName});
}

function findStockByStockId(stockId) {
  return StockModel
    .findOne({_id: stockId});
}

function updateStock(stock) {
  var pid = stock.pid;
  var companyName = stock.name;
  console.log('update');
  console.log(stock);
  console.log(userId);
  console.log(StockModel.find({pid: pid, name: companyName}));
  return StockModel.update({pid: pid, name: companyName},{
    $set: {
      price: stock.price,
      number: stock.number,
      date: stock.date
    }});
}
