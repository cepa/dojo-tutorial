define([
	'require',
	'dojo/ready',
	'dijit/registry'
], function(require, ready, registry){
	
	var app = {};
	
	ready(function(){
		dojo.connect(registry.byId('mbtnHelp'), 'onClick', app.onHelpButtonClick);
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
	
	/**
	 * Help button click action.
	 */
	app.onHelpButtonClick = function(){
		app.alert('This is a Dojo MenuBar example.');
	};
	
	return app;
});
