define(function() {
    
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

    }, 
    changeTheme: function(){


      var currentTheme = kony.theme.getCurrentTheme();
      var newTheme = (currentTheme === "lightTheme") 
      ? "darkTheme" : "lightTheme";

      kony.theme.setCurrentTheme(newTheme,
                                 function() {
        kony.print("Theme successfully changed to " + newTheme);
      },
                                 function() {
        kony.print("Failed to change theme.");
      }
                                );



    },
    changeLang: function(){
      var self = this;
      var localeMap = {
        "langEn": "en_US",

        "langAm": "am_ET",

        "langOro": "om_ET"
      };

      var selectedKey = this.view.lstLang.selectedKey;

      if (!selectedKey || !localeMap[selectedKey]) {
        alert("Please select a supported language.");
        return;
      }

      var locale = localeMap[selectedKey];

      kony.i18n.setCurrentLocaleAsync(
        locale,
        function() {
   
          var currentFormId = kony.application.getCurrentForm().id;
           new kony.mvc.Navigation(currentFormId).
           navigate();  
        },
        function() {
           alert("Failed to change Language")
        }
      );
    }
  };
});