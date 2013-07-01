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
			var dialog = new Dialog({ title: 'Alert', content: message });
			dialog.show();
		});
	};
	
	/**
	 * Display login dialog.
	 */
	app.login = function(options){
		require(['app/dialog/LoginDialog'], function(Dialog){
			var dialog = new Dialog(options);
			dialog.show();
		});
	};
	
	/**
	 * Button click action.
	 */
	app.onButtonClick = function(){
		app.login({
			url: appConfig.baseUrl + '/login.php',
			onSuccess: function(response){
				console.log(response.message);
				this.onExecute(); // Hide dialog.
				app.alert('You are successfully logged in!');
			},
			onFailure: function(response){
				console.log(response.message);
				app.alert('Invalid login or password!');
			}
		});
	};
	
	return app;
});
