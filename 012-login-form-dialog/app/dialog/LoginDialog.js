define([
    'dojo/_base/declare', 
    'dojo/_base/lang',
    'dojo',
    'dijit/Dialog',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/text!./LoginDialog.html',
    'dijit/form/Button',
    'dijit/form/Form',
    'dijit/form/TextBox',
    'dojox/layout/TableContainer'
], function(declare, lang, dojo, Dialog, _WidgetsInTemplateMixin, template){
	return declare('app.dialog.LoginDialog', [Dialog, _WidgetsInTemplateMixin], {
		
		title: 'Login required',
		style: 'width:400px',
		templateString: template,
		
		constructor: function(options){
			lang.mixin(this, options);
		},
		
		onSubmit: function(){
			var widget = this;
			dojo.xhrPost({
				url: this.url,
				form: this.loginForm.id,
				handleAs: 'json',
				load: function(response){
					if (response.status == 'success') {
						widget.onSuccess(response);
					} else {
						widget.onFailure(response);
					}
				}
			});
		},
	
		onSuccess: function(response){
			
		},
		
		onFailure: function(response){
			
		}
	
	});
});
