define([
    'dojo/_base/declare',
    'dojo',
    'dijit/registry',
    'dojo/ready',
    'Handlebars'
], function (declare, dojo, registry, ready) {
    return declare('app.controller.FormController', [], {
        
        entity: {},
        formId: null,
        postUrl: null,
        
        constructor: function (options) {
            console.log('contstructor');
            dojo.safeMixin(this, options);
        },
        
        renderForm: function (contentPane) {
            var controller = this;
            require(['dojo/text!app/view/form.html'], function (view) {
                // Render view in content pane.
                var template = Handlebars.compile(view);
                contentPane.set('content', template({
                    formId: controller.formId,
                    postUrl: controller.postUrl,
                    entity: controller.entity
                }));
                
                // Connect button onClick action when content pane is rendered.
                ready(function () {
                    dojo.connect(registry.byId('bSubmit'), 'onClick', function () {
                        dojo.xhrPost({
                            form: dojo.byId(controller.formId),
                            handleAs: 'text',
                            load: function (response) {
                                console.log('Success!');
                                controller.renderResponse(response);
                            },
                            error: function () {
                                console.log('Error!');
                            }
                        });
                    });
                });
            });
        },
        
        renderResponse: function (response) {
            var html = '<pre><code>' + response + '</code></pre>';
            var responseContentPane = registry.byId(this.formId + 'Response');
            responseContentPane.set('content', html);
        }
        
    });
});
