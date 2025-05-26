define({ 



  onPreshow: function(){
    this.view.txtFullName.placeholder=kony.i18n.getLocalizedString("I18n.frmRegister.LblFullName");
    this.view.btnAlreadyHaveAccount.text=kony.i18n.getLocalizedString("I18n.frmRegister.LblAlreadyHaveAccount");
    this.view.txtEmail.placeholder=kony.i18n.getLocalizedString("I18n.PlaceholderEmail");
    this.view.txtPwd.placeholder=kony.i18n.getLocalizedString("I18n.PlaceholderPassword");
    this.view.txtPwdConfrim.placeholder=kony.i18n.getLocalizedString("I18n.frmRegister.LblConfirmPassword");
    this.view.lblBirthDate.text=kony.i18n.getLocalizedString("I18n.frmRegister.LblDateOfBirth")
    this.view.lblGender.text=kony.i18n.getLocalizedString("I18n.frmRegister.LblGender");
    this.view.lblErrorMessage.text=kony.i18n.getLocalizedString("I18n.frmRegister.LblAlertAllRequired");
    this.view.txtPhoneNum.placeholder=kony.i18n.getLocalizedString("I18n.frmRegister.LblPhoneNumber");
    this.view.txtAddress.placeholder=kony.i18n.getLocalizedString("I18n.frmRegister.LblAddress");
    
    this.view.radBtnGender.masterData = [
      ["M", kony.i18n.getLocalizedString("I18n.frmRegister.Gender.Male")],
      ["F", kony.i18n.getLocalizedString("I18n.frmRegister.Gender.Female")]
    ];

    this.view.lstNationality.masterData = [
      ["not_selected", kony.i18n.getLocalizedString("I18n.frmRegister.LblNationality")], 
      ["ET", "Ethiopia"],
      ["US", "United States"],
      ["KE", "Kenya"],
      ["NG", "Nigeria"],
      ["IN", "India"]
    ];
    this.view.lstNationality.selectedKey="not_selected";
    this.view.flxRegister.flexAlert.isVisible=false;
    
  },
  
  
 validateForm: function () {
  var fullname = this.view.txtFullName.text.trim();
  var email = this.view.txtEmail.text.trim();
  var pwd = this.view.txtPwd.text;
  var confirmPwd = this.view.txtPwdConfrim.text;
  var phone = this.view.txtPhoneNum.text.trim();
  var address = this.view.txtAddress.text.trim();
  var gender = this.view.radBtnGender.selectedKey;
  var nationality = this.view.lstNationality.selectedKey;

  var isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (
    !fullname ||
    !email ||
    !pwd ||
    !confirmPwd ||
    pwd !== confirmPwd ||
    !isEmailValid ||
    !phone ||
    !address ||
    !gender ||
    nationality === "not_selected"
  ) {
    this.view.lblErrorMessage.text = kony.i18n.getLocalizedString("I18n.frmRegister.LblAlertAllRequired");
    this.view.flxRegister.flexAlert.isVisible = true;
    return false;
  }

  this.view.flxRegister.flexAlert.isVisible = false;
  return true;
},

 onCompelete:function(){
    
     this.validateForm()
  }
  
  

});