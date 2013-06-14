define([
    'dojo/_base/declare', 
    'dijit/Dialog',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./ConfirmDialog.html',
    'dijit/form/Button'
], function(declare,  Dialog, _WidgetsInTemplateMixin, template){
	return declare('app.dialog.ConfirmDialog', [Dialog, _WidgetsInTemplateMixin], {
		
		title: 'Confirm',
		templateString: template,
		
		constructor: function(options){
			if (options.message) {
				this.content = options.message;
			}
		}
	
	});
});
