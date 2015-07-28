openerp.utility_hide_datetime_picker_button_panel = function(instance) {
	instance.web.DateTimeWidget.include({
		picker: function() {
			if (typeof arguments[0] !== 'string'){
				arguments[0]["showButtonPanel"] = false;
			}
	        return $.fn[this.jqueryui_object].apply(this.$input_picker, arguments);
	    },
    });	
}
