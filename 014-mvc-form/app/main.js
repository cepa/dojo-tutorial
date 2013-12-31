define([
	'require',
	'dojo/ready',
	'dijit/registry',
	'dojox/validate/web'
], function (require, ready, registry) {
	
	var app = {};
	
	ready(function () {
		console.log('loaded');
		require(['app/controller/FormController'], function (FormController) {
		    var controller = new FormController({
		        formId: 'myForm',
		        postUrl: appConfig.baseUrl + '/form.php',
		        entity: {
		            firstName: 'Santa',
		            lastName:  'Claus',
		            email:     'santa@claus.com'
		        }
		    });
		    controller.renderForm(registry.byId('contentPane'));
		});
	});
	
	return app;
});
