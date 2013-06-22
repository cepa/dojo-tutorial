define([
	'dojo/_base/declare',
	'dojo',
	'dijit/form/ValidationTextBox'
], function(declare, dojo, ValidationTextBox){
	return declare('app.form.AjaxValidationTextBox', [ValidationTextBox], {
		
		ajaxUrl: null,
		ajaxLock: false,
		ajaxResult: false,
		
		isValid: function(){
			var widget = this;
			if (!this.ajaxLock && this.ajaxUrl) {
				this.ajaxLock = true;
				dojo.xhrGet({
					url: widget.ajaxUrl + '?value=' + widget.get('value'),
					handleAs: 'json',
					load: function(result){
						widget.ajaxResult = result;
						widget.validate();
						widget.ajaxLock = false;
					}
				});
			}
			return this.ajaxResult;
		}
		
	});
});
