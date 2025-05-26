define(function() {

	return {
      
      preshow: function(){
       this.view.lblNavApps.text=kony.i18n.getLocalizedString("I18n.BottomBar.LblApps");
       this.view.lblNavHome.text=kony.i18n.getLocalizedString("I18n.BottomBar.LblHome");
        this.view.lblNavPay.text=kony.i18n.getLocalizedString("I18n.BottomBar.LblPay");
        this.view.lblNavProfile.text=kony.i18n.getLocalizedString("I18n.BottomBar.LblProfile");
        this.view.lblNavScan.text=kony.i18n.getLocalizedString("I18n.BottomBar.LblScan"); 
        
      },
      
       navigateHome: function (){
          var  navObj=new kony.mvc.Navigation("frmHome");
          navObj.navigate(null)
       },
      navigatePay: function (){
          var  navObj=new kony.mvc.Navigation("frmPay");
          navObj.navigate(null)
       },
        navigateApps: function (){
          var  navObj=new kony.mvc.Navigation("frmApps");
          navObj.navigate(null)
       },
       navigateProfile: function (){
          var  navObj=new kony.mvc.Navigation("frmProfile");
          navObj.navigate(null)
       }
      

	};
});