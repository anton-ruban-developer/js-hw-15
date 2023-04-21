class Customer {
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = balance;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get balance() {
    return this._balance;
  }
  set balance(amount) {
    this._balance = amount;
  }
}

const customer1 = new Customer("Taras", "Shevchenko", 1000);
console.log(customer1.fullName());
console.log(customer1.balance);

customer1.balance = 500;
console.log(customer1.balance);
