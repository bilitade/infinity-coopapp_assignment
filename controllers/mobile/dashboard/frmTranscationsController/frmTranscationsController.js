/**
 * Displays recent transactions in a segment with search functionality.
 * Author: Bilisuma Tadesse
 * Date: 2025-05-26
 */

define({ 

  preshow: function () {

    this.view.segTransaction.widgetDataMap = {
      txnIcon: "txnIcon",
      txnTitleLabel: "txnTitleLabel",
      txnDate: "txnDate",
      amount: "amount",
      currency: "currency"
    };

    var transactionData = [
      { txnIcon: "debiticon.png", txnTitleLabel: "Payment to ABC Store", txnDate: "2025-05-26", amount: "100", currency: "ETB" },
      { txnIcon: "crediticon.png", txnTitleLabel: "Salary", txnDate: "2025-05-25", amount: "5000", currency: "ETB" },
      { txnIcon: "debiticon.png", txnTitleLabel: "Electricity Bill", txnDate: "2025-05-24", amount: "350", currency: "ETB" },
      { txnIcon: "debiticon.png", txnTitleLabel: "Water Utility", txnDate: "2025-05-23", amount: "120", currency: "ETB" },
      { txnIcon: "crediticon.png", txnTitleLabel: "Bonus Payment", txnDate: "2025-05-22", amount: "1000", currency: "ETB" },
      { txnIcon: "debiticon.png", txnTitleLabel: "Internet Bill", txnDate: "2025-05-21", amount: "200", currency: "ETB" },
      { txnIcon: "debiticon.png", txnTitleLabel: "Taxi Fare", txnDate: "2025-05-20", amount: "80", currency: "ETB" },
      { txnIcon: "crediticon.png", txnTitleLabel: "Refund from Store", txnDate: "2025-05-19", amount: "150", currency: "ETB" },
      { txnIcon: "debiticon.png", txnTitleLabel: "Grocery Purchase", txnDate: "2025-05-18", amount: "600", currency: "ETB" },
      { txnIcon: "debiticon.png", txnTitleLabel: "Mobile Recharge", txnDate: "2025-05-17", amount: "50", currency: "ETB" }
    ];


    this.view.segTransaction.setData(transactionData);
  },

  onsearch: function () {

    if (!this.fullData) {
      this.fullData = this.view.segTransaction.data;
    }

    var searchText = this.view.searchBox.text.toLowerCase().trim();

    if (searchText === "") {
      this.view.segTransaction.setData(this.fullData);
    } else {
      var filteredData = this.fullData.filter(function (item) {
        return item.txnTitleLabel.toLowerCase().includes(searchText) ||
          item.amount.includes(searchText);
      });
      this.view.segTransaction.setData(filteredData);
    }
  }

});
