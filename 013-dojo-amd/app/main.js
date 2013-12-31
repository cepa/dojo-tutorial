define([
	'require',
	'dojo/ready',
	'dijit/registry',
], function (require, ready, registry) {
	
	var app = {};
	
	ready(function () {
		console.log('loaded');
		app.renderDemo();
	});
	
	app.renderDemo = function () {
	    require(['dojo/text!app/view/hello.html', 'jQuery', 'Handlebars'], function (view) {
	        // Render view.
	        var template = Handlebars.compile(view);
	        var html = template({
	            date: (new Date()).toString(),
	            imageUrl: appConfig.baseUrl + '/app/asset/wtf.jpg'
	        });
	        
	        var contentPane = registry.byId('contentPane');
	        contentPane.setContent(html);
	        
	        ready(function () {
	            $('#bClickMe').click(function () {
	                $('.hiddenImage').show('slow');
	                console.log('jquery click');
	            });
	        });
	    });
	};
	
	return app;
});
