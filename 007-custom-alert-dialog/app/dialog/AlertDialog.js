define([
    'dojo/_base/declare', 
    'dijit/Dialog',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./AlertDialog.html',
    'dijit/form/Button'
], function(declare, Dialog, _WidgetsInTemplateMixin, template){
	return declare('app.dialog.AlertDialog', [Dialog, _WidgetsInTemplateMixin], {
		title: 'Alert',
		templateString: template
	});
});
