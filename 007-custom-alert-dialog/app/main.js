define([
	'require',
	'dojo/ready'
], function(require, ready){
	
	var app = {};
	
	ready(function(){
		app.alert('Hello World!');
	});
	
	/**
	 * Display alert dialog.
	 */
	app.alert = function(message){
		require(['app/dialog/AlertDialog'], function(Dialog){
			var dialog = new Dialog({ content: message });
			dialog.show();
		});
	};
	
	return app;
});
