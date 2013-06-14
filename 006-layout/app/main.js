define([
	'require',
	'dojo/ready'
], function(require, ready){
	
	var app = {};
	
	ready(function(){
		console.log('loaded!');
	});
	
	/**
	 * Display alert dialog.
	 */
	app.alert = function(message){
		require(['dijit/Dialog'], function(Dialog){
			var dialog = new Dialog({ title: 'Hello!', content: message });
			dialog.show();
		});
	};
	
	return app;
});
