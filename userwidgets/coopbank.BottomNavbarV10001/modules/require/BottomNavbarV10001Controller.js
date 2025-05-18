define(function() {

	return {
      
       navigateHome: function (){
          var  navObj=new kony.mvc.Navigation("frmDashboard");
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