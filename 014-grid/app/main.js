define([
	'require',
	'dojo/ready',
	'dijit/registry'
], function (require, ready, registry) {
	
	var app = {};
	
	app.data = {
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
	
	ready(function () {
		console.log('loaded!');
		app.showGrid('gridPlaceholder', app.data);
	});

	app.showGrid = function (placeholderId, data) {
	    require(['dojox/grid/EnhancedGrid', 'dojo/data/ItemFileWriteStore'], function (Grid, Store) {
	        var store = new Store({
	            data: data
	        });
	        
	        var grid = new Grid({
	            id: 'myGrid',
	            store: store,
	            structure: [[
	                {
	                    name:  'First name',
	                    field: 'first_name',
	                    width: '200px'
	                },
                    {
                        name:  'Last name',
                        field: 'last_name',
                        width: '200px'
                    },
                    {
                        name:  'Email',
                        field: 'email_address',
                        width: '350px'
                    },
                    {
                        name:  'Age',
                        field: 'age',
                        width: '80px'
                    },
	            ]]
	        });
	        grid.placeAt(placeholderId);
	        grid.startup();
	    });
	};
	
	return app;
});
