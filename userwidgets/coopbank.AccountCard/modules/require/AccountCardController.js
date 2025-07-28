// Author: Bilisuma Tadesse | Date: 05/26/2025
// Description: Handles account segment data mapping and population.

define(function() {
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
   
    },


    initGettersSetters: function() {},

    preshow: function() {
      var yourBalanceLocale = kony.i18n.getLocalizedString("I18n.AccountCard.lblYourBalance");
      var currencyLocale = kony.i18n.getLocalizedString("I18n.AccounCard.lblCurrency");
      var loanAccLocale = kony.i18n.getLocalizedString("I18n.AccountCard.lblLoan");
      var savingAccLocale = kony.i18n.getLocalizedString("I18n.AccountCard.lblSavings");
      var currentAccLocale = kony.i18n.getLocalizedString("I18n.AccountCard.lblCurrent");
      var creditAccLocale = kony.i18n.getLocalizedString("I18n.AccountCard.lblCredit");

  
      this.view.segAccount.widgetDataMap = {
        cardImage: "cardImage",
        customerName: "customerName",
        accountNumber: "accountNumber",
        balanceLabel: "balanceLabel",
        amount: "amount",
        currency: "currency",       
        accountType: "accountType" 
      };
      

 
      var accountData = [
        {
          cardImage: "cardcaynblue3x.png",
          customerName: "Bilisuma Tadesse",
          accountNumber: "123456789",
          balanceLabel: yourBalanceLocale,
          amount: "10,000",
          currency: currencyLocale,
          accountType: creditAccLocale
        },
        {
          cardImage: "cardredish3x.png",
          customerName: "Bilisuma Tadesse",
          accountNumber: "987654321",
          balanceLabel: yourBalanceLocale,
          amount: "5,500",
          currency: currencyLocale,
          accountType: currentAccLocale
        },
        {
          cardImage: "cardorange3x.png",
          customerName: "Bilisuma Tadesse",
          accountNumber: "111222333",
          balanceLabel: yourBalanceLocale,
          amount: "3,200",
          currency: currencyLocale,
          accountType: loanAccLocale
        }
      ];

      this.view.segAccount.setData(accountData);
    }
  };
});
