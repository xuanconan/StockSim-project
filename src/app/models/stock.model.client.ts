export class Stock {
  userId: String;
  name: String;
  number: Number;
  price: Number;
  currentPrice: Number;
  date: String;
  pid: String;


  constructor(userId: String, name: String, number: Number, price: Number, date: String) {
    this.userId = userId;
    this.name = name;
    this.number = number;
    this.price = price;
    this.date = date;
  }
}
