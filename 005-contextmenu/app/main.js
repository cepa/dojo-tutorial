define([
	'require',
	'dojo',
	'dojo/ready',
	'dojo/on',
	'dojo/dom'
], function(require, dojo, ready, on, dom){
	
	var app = {};
	
	ready(function(){
		on(dom.byId('mbtnAction1'), 'click', function(){ app.alert('Click Action 1'); });
		on(dom.byId('mbtnAction2'), 'click', function(){ app.alert('Click Action 2'); });
		on(dom.byId('mbtnAction3'), 'click', function(){ app.alert('Click Action 3'); });
		console.log('loaded!');
	});
	
	/**
	 * Display alert dialog.
	 */
	app.alert = function(message){
		require(['dijit/Dialog'], function(Dialog){
			var dialog = new Dialog({ title: 'Hello!', content: message, style: 'width:200px' });
			dialog.show();
		});
	};
	
	return app;
});
