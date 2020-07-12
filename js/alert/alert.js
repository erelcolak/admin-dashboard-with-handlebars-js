// Alert
function Alert(data, func){
	/*
	Global Variables
	*/
	// variables from parameters
	var alertData;
	var alertFnc;
	var alertDuration;
	// Alert container div
	var alertContainer = $('#alerts .alert-container');
	// Alert elements
	var alertElements = $(alertContainer).find('.alert');
	// Default Alert Showing Duration
	var duration = 7000;
	// Alert order for maximum count of alert
	var order = alertElements.length + 1;
	// Maximum alert size
	var maximumAlertCount = 3;

	/*
	Set Variables typeof arguments of function
	*/
	if( arguments.length == 1 ){
		// if it is an object
		if( typeof arguments[0] == 'object'  ){
			alertData = data
			alertFnc = null;
		}
		// else it must be a string
		else{
			alertData = null;
			alertFnc = data;
		}
	}
	else if( arguments.length == 2 ){
		alertData = data;
		alertFnc = func;
	}

	// Create random id for alert
	var alertIdNumber = parseInt(Math.random()*1000);
	// Check Alert Count And Remove First Added One
	if( order > maximumAlertCount ){
		$(alertElements).first().remove();
	}

	// Set Alert Type
	var dataType = function(){
		var typeOfAlert = 'danger';
		if( alertData != null ){
			typeOfAlert = alertData.type;
		}
		return typeOfAlert;
	}
	// Set Alert Text
	var dataText = function(){
		var template = ''
		if( alertData != null ){
			template = '<span class="alert-text">'+alertData.text+'</span>';
		}
		return template;
	}
	// Set Alert fnc
	var fnc = function(){
		var template = '';
		if( alertFnc != null ){
			if( typeof alertFnc != 'string' ){
				alertFnc = alertFnc();
			}
			template = '<span class="alert-function">' + alertFnc + '</span>';
		}
		return template;
	}
	// Set Alert Template
	var alertTemplate = function(){
		var template =
		'<div id="alert' + alertIdNumber + '" class="alert alert-' + dataType() + ' fade in" data-alert-order="' + order + '" >'+
			'<a href="#" class="close" data-dismiss="alert" aria-label="close">'+
				'<i class="fa fa-times"></i>'+
			'</a>'+
			'<div class="alert-body">'+
				dataText()+
				fnc()+
			'</div>';
		'</div>';
		return template;
	}
	 // Append Alert To Alert Container
	$(alertContainer).append( alertTemplate() );
	// Lets Remove Alert with Timeout
	setTimeout( function(){
		$(alertContainer).find('div[id="alert' + alertIdNumber + '"]').remove();
	}, duration );
}

// System Alerts
function SystemAjaxAlert(data){
	for( var i = 0; i < data.Status.length; i++ ){
		var statusI = data.Status[i];
		for( var j = 0; j < data.Status[i].Errors.length; j++ ){
			var errorJ = statusI.Errors[j];
			Alert('<div>Hata Kodu: <strong>' + errorJ.Code + '</strong></div><div>' + errorJ.Text + '</div>');
		}
	}
};
