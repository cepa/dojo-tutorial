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
	 * Display confirm dialog.
	 */
	app.confirm = function(options){
		require(['app/dialog/ConfirmDialog'], function(Dialog){
			var dialog = new Dialog(options);
			dialog.show();
		});
	};
	
	/**
	 * Button click action.
	 */
	app.onButtonClick = function(){
		app.confirm({
			message: 'Do you like this demo?',
			onExecute: function(){
				console.log('great! :)');
			},
			onCancel: function(){
				console.log('too bad :<');
			}
		});
	};
	
	return app;
});
