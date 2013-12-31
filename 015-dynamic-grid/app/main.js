define([
	'require',
	'dojo',
	'dojo/ready',
	'dijit/registry'
], function (require, dojo, ready, registry) {
	
	var app = {};
	
	app.idx = 1;
	
    app.getData = function () { 
        return {
            identified: 'id',
            items: [
                {
                    id:            1,
                    first_name:    'Johnnie',
                    last_name:     'Walker',
                    email_address: 'johnnie@walker.com',
                    age:           18
                },
                {
                    id:            1,
                    first_name:    'Jack',
                    last_name:     'Daniels',
                    email_address: 'jack@daniels.com',
                    age:           3
                },
                {
                    id:            1,
                    first_name:    'Moonshine',
                    last_name:     'Booze',
                    email_address: 'get@wasted.com',
                    age:           0
                },
            ]
        };
    };
    
	ready(function () {
		console.log('loaded!');
		
		dojo.connect(registry.byId('mbShowGrid'), 'onClick', function () {
		    require(['app/controller/GridController'], function (Controller) {
		        var controller = new Controller();
		        controller.renderGrid('Grid ' + app.idx++, app.getData());
		    });
		});
	});

	return app;
});
