/**
 * ------------------------------------------------------------------
 * Author: Bilisuma Tadesse
 * Date: 05/26/2025
 * Organization: Cooperative Bank of Oromia
 * 
 * Description:
 *   This module manages the registration form UI, validations, and 
 *   animated transitions between steps using Kony Visualizer's AMD pattern.
 * 
 *   - Localized strings (`kony.i18n.getLocalizedString`) are used for all 
 *     UI labels and placeholders to support **dynamic locale/language 
 *     switching at runtime without requiring form recreation**.
 * 
 *   - Animations are defined for fade-in and fade-out transitions to 
 *     provide a smooth user experience between steps of the registration form.
 * 
 *   - Form validation ensures that required fields are completed, email format is valid,
 *     and passwords match before proceeding to the next step or completing registration.
 * ------------------------------------------------------------------
 */




define({
  
  animateFadeIn: kony.ui.createAnimation({
    100: {
      opacity: 1,
      stepConfig: { timingFunction: kony.anim.LINEAR }
    }
  }),

  animateFadeOut: kony.ui.createAnimation({
    100: {
      opacity: 0,
      stepConfig: { timingFunction: kony.anim.LINEAR }
    }
  }),

  animateConfig: {
    duration: 0.3,
    iterationCount: 1,
    fillMode: kony.anim.FILL_MODE_FORWARDS
  },

  onPreshow: function () {
    this.view.txtFullName.placeholder = kony.i18n.getLocalizedString("I18n.frmRegister.LblFullName");
    this.view.btnAlreadyHaveAccount.text = kony.i18n.getLocalizedString("I18n.frmRegister.LblAlreadyHaveAccount");
    this.view.txtEmail.placeholder = kony.i18n.getLocalizedString("I18n.PlaceholderEmail");
    this.view.txtPwd.placeholder = kony.i18n.getLocalizedString("I18n.PlaceholderPassword");
    this.view.txtPwdConfrim.placeholder = kony.i18n.getLocalizedString("I18n.frmRegister.LblConfirmPassword");
    this.view.lblBirthDate.text = kony.i18n.getLocalizedString("I18n.frmRegister.LblDateOfBirth");
    this.view.lblGender.text = kony.i18n.getLocalizedString("I18n.frmRegister.LblGender");
    this.view.lblErrorMessage.text = kony.i18n.getLocalizedString("I18n.frmRegister.LblAlertAllRequired");
    this.view.txtPhoneNum.placeholder = kony.i18n.getLocalizedString("I18n.frmRegister.LblPhoneNumber");
    this.view.txtAddress.placeholder = kony.i18n.getLocalizedString("I18n.frmRegister.LblAddress");
    this.view.btnNext.text=kony.i18n.getLocalizedString("I18n.frmRegister.btnNext");
    this.view.lblAddPwd.text=kony.i18n.getLocalizedString("I18n.frmRegister.LblSetPassword");
    this.view.btnPrev.text=kony.i18n.getLocalizedString("I18n.frmRegister.btnPrevious")
    this.view.btnRegister.text=kony.i18n.getLocalizedString("I18n.frmRegister.BtnRegister")

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
    this.view.lstNationality.selectedKey = "not_selected";
    this.view.flxRegister.flexAlert.isVisible = false;
  },

  validateForm: function () {
  var errors = [];

  var fullname = this.view.txtFullName.text.trim();
  var email = this.view.txtEmail.text.trim();
  var pwd = this.view.txtPwd.text;
  var confirmPwd = this.view.txtPwdConfrim.text;
  var phone = this.view.txtPhoneNum.text.trim();
  var address = this.view.txtAddress.text.trim();
  var gender = this.view.radBtnGender.selectedKey;
  var nationality = this.view.lstNationality.selectedKey;

  var isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!fullname) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrFullNameRequired"));
  }
  if (!email) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrEmailRequired"));
  } else if (!isEmailValid) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrEmailInvalid"));
  }
  if (!pwd) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrPasswordRequired"));
  }
  if (!confirmPwd) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrConfirmPasswordRequired"));
  }
  if (pwd && confirmPwd && pwd !== confirmPwd) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrPasswordMismatch"));
  }
  if (!phone) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrPhoneRequired"));
  }
  if (!address) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrAddressRequired"));
  }
  if (!gender) {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrGenderRequired"));
  }
  if (nationality === "not_selected") {
    errors.push(kony.i18n.getLocalizedString("I18n.frmRegister.ErrNationalityRequired"));
  }

  if (errors.length > 0) {
  
    this.view.lblErrorMessage.text = errors.join("\n");
    this.view.flxRegister.flexAlert.isVisible = true;
    return false;
  } else {
    this.view.flxRegister.flexAlert.isVisible = false;
    return true;
  }
},
  
  
  
  onNext: function () {
    var self = this;
    this.view.flxPersonalInfo.animate(
      self.animateFadeOut,
      self.animateConfig,
      {
        animationEnd: function () {
          self.view.flxPersonalInfo.isVisible = false;
          self.view.flxPasswordSet.isVisible = true;
          self.view.flxPasswordSet.animate(self.animateFadeIn, self.animateConfig, {});
        }
      }
    );
  },
  
  dismissAlert: function(){
    this.view.flexAlert.isVisible=false;
  },

  onPrev: function () {
    var self = this;
    this.view.flxPasswordSet.animate(
      self.animateFadeOut,
      self.animateConfig,
      {
        animationEnd: function () {
          self.view.flxPasswordSet.isVisible = false;
          self.view.flxPersonalInfo.isVisible = true;
          self.view.flxPersonalInfo.animate(self.animateFadeIn, self.animateConfig, {});
        }
      }
    );
  },

  onCompelete: function () {
    if (this.validateForm()) {
      var navObj = new kony.mvc.Navigation("frmLogin");
      navObj.navigate();
    }
  }
  
  
  
  
});
