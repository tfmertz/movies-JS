var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  }
};