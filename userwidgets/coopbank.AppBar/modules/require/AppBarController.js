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
      
      
	};
});