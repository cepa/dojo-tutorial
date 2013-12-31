define([
    'dojo/_base/declare',
    'dijit/registry',
    'handlebars'
], function (declare, registry) {
    return declare('app.controller.GridController', [], {
        
        renderGrid: function (title, data) {
            require([
                'dojox/layout/ContentPane',
                'app/grid/Grid',
                'dojo/data/ItemFileWriteStore',
                'dojo/text!app/view/grid.html'
            ], function (ContentPane, Grid, Store, view) {
                // Generate random id.
                var unique = Math.abs(Math.floor(Math.random() * 0xffff));
                
                // Create handlebars template and render content.
                var template = Handlebars.compile(view);
                var content = template({ unique: unique });

                // Create content pane for grid.
                var contentPane = new ContentPane({
                    title:    title,
                    closable: true,
                    content:  content
                });
                
                // Render content pane.
                var tabContainer = registry.byId('tabContainer');
                tabContainer.addChild(contentPane);
                tabContainer.selectChild(contentPane);
                
                // Create grid.
                var grid = new Grid({
                    id: 'grid' + unique,
                    store: new Store({ data: data })
                });
                grid.placeAt('gridPlaceholder' + unique);
                grid.startup();
            });
        }
        
    });
});
