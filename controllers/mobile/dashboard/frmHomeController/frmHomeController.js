/**
 * Handles home screen localization and menu alert.
 * Author: Bilisuma Tadesse
 * Date: 2025-05-26
 */

define({ 

 onpreshow: function(){
   
   this.view.lblBtnAccounts.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnAccounts");
   this.view.lblBtnBeneficaries.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnBeneficiaries");
   this.view.lblBtnCardhub.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnCardHub");
   this.view.lblBtnChat.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnChat");
   this.view.lblBtnLocation.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnLocation");
   this.view.lblBtnSupport.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnSupport");
   this.view.lblBtnTopup.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnTopup");
   this.view.lblBtnTransaction.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnTransactions");
   this.view.lblBtnTransfer.text=kony.i18n.getLocalizedString("I18n.frmHome.BtnTransfer");
    
 },
  

  onMenuBtnClicked: function() {
  var alertConfig = {
    message: "Not Implemented For Now, only Transaction Menu done",
    alertType: constants.ALERT_TYPE_INFO,
    alertTitle: "Information",
    yesLabel: "OK",
    alertHandler: null
  };

  kony.ui.Alert(alertConfig, {});
}
,
 

  
  

 });