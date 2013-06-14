define([
	'require',
	'dojo/ready',
	'dijit/registry'
], function(require, ready, registry){
	
	var app = {};
	
	ready(function(){
		dojo.connect(registry.byId('btnClickMe'), 'onClick', app.onButtonClick);
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
	 * Button click action.
	 */
	app.onButtonClick = function(){
		require(['dijit/Dialog'], function(Dialog){
			var dialog = new Dialog({
				title: "Some dialog",
				href: appConfig.baseUrl + '/app/view/dialog.html',
				style: "width:400px"
			});
			dialog.show();
		});
	};
	
	return app;
});
