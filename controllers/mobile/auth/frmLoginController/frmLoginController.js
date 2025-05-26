/**
 * Login Form Controller for Kony Visualizer
 * 
 * This controller handles:
 * - Setting localized text on the login form during pre-show
 * - Validating email and password fields
 * - Displaying animated modals for validation errors
 * - Navigating to the home screen upon successful login
 * 
 * Author: Bilisuma Tadesse  
 * Date: May 26, 2025
 */



define({
  onPreshow: function () {
    this.view.lblWelcome.text = kony.i18n.getLocalizedString("I18n.frmLogin.LblWelcome");
    this.view.txtEmail.placeholder = kony.i18n.getLocalizedString("I18n.PlaceholderEmail");
    this.view.txtPassword.placeholder = kony.i18n.getLocalizedString("I18n.PlaceholderPassword");
    this.view.lblForgotPwd.text = kony.i18n.getLocalizedString("I18n.frmLogin.LblForgotPassword");
    this.view.lblRemeberMe.text = kony.i18n.getLocalizedString("I18n.frmLogin.LblRememberMe");
    this.view.btnLogin.text = kony.i18n.getLocalizedString("I18n.frmLogin.BtnLogin");
    this.view.dontHaveActLabel.text = kony.i18n.getLocalizedString("I18n.frmLogin.LblNoAccount");
    this.view.swRememberMe.leftSideText = kony.i18n.getLocalizedString("I18n.Switch.On");
    this.view.swRememberMe.rightSideText = kony.i18n.getLocalizedString("I18n.Switch.Off");
    this.view.createActBtn.text = kony.i18n.getLocalizedString("I18n.frmLogin.createAccount");
  },
 

  validateForm: function () {
    var email = (this.view.txtEmail.text || "").trim();
    var password = (this.view.txtPassword.text || "").trim();
    var errors = [];
    var emailRequiredMsg = kony.i18n.getLocalizedString("I18n.frmLogin.ErrEmailRequired");
    var passwordRequiredMsg = kony.i18n.getLocalizedString("I18n.frmLogin.ErrPasswordRequired");
    var emailInvalidMsg = kony.i18n.getLocalizedString("I18n.frmLogin.ErrEmailInvalid");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      errors.push(emailRequiredMsg);
    } else if (!emailRegex.test(email)) {
      errors.push(emailInvalidMsg);
    }

    if (password === "") {
      errors.push(passwordRequiredMsg);
    }

    if (errors.length > 0) {
      var msg = errors.join("\n");
      this.showValidationModal(msg);
      return false;
    }

    return true;
  },

  showValidationModal: function (message) {
    this.view.flxModal.flxModalCard.lblModalMsg.text = message;
    this.view.flxModal.isVisible = true;

    this.view.flxModal.flxModalCard.opacity = 0;
    this.view.flxModal.flxModalCard.scaleX = 0.8;
    this.view.flxModal.flxModalCard.scaleY = 0.8;

    this.view.flxModal.flxModalCard.animate(
      kony.ui.createAnimation({
        0: { opacity: 0, scaleX: 0.8, scaleY: 0.8, stepConfig: { timingFunction: kony.anim.EASE_IN } },
        100: { opacity: 1, scaleX: 1, scaleY: 1, stepConfig: { timingFunction: kony.anim.EASE_OUT } }
      }),
      {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: 0.3
      },
      { animationEnd: function () {} }
    );
  },

  dismissModal: function () {
    this.view.flxModal.flxModalCard.animate(
      kony.ui.createAnimation({
        100: { opacity: 0, scaleX: 0.8, scaleY: 0.8, stepConfig: { timingFunction: kony.anim.EASE_IN } }
      }),
      {
        delay: 0,
        fillMode: kony.anim.FILL_MODE_FORWARDS,
        duration: 0.3
      },
      {
        animationEnd: function () {
          this.view.flxModal.isVisible = false;
        }.bind(this)
      }
    );
  },

  onLogin: function () {
    if (this.validateForm()) {
      var navObj = new kony.mvc.Navigation("frmHome");
      navObj.navigate();
    }
  }
  
});
