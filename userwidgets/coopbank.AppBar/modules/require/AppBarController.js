define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}, 
      
      toggleDrawer: function() {
      var currentForm = kony.application.getCurrentForm();
        var drawer = currentForm.Drawer;
        drawer.isVisible = !drawer.isVisible;
    }
      ,
      changeTheme: function(){
        
        
        
    var currentTheme = kony.theme.getCurrentTheme();
    var newTheme = (currentTheme === "lightTheme") ? "darkTheme" : "lightTheme";

    kony.theme.setCurrentTheme(newTheme,
        function() {
            kony.print("Theme successfully changed to " + newTheme);
        },
        function() {
            kony.print("Failed to change theme.");
        }
    );


      
      
	}
};});