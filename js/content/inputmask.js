
/*
###
Request URL's & Data Variables
###
*/

/*
###
Variables
###
*/

/*
###
Functions
###
*/

/*
###
Handlebars Functions & Helpers
###
*/

/*
###
Document on Ready
###
*/
$(document).ready(function(){
	/*
	AJAX Requests when Page Loading
	*/

	/*
	Functions
	*/
	// inputmask - money
	$('#inputMaskMoney').find('input').inputmask({
		alias: 'currency',
		digits: 2,
		prefix: '',
		suffix: '',
		radixPoint: ',',
		autoUnmask: true,
		removeMaskOnSubmit: true,
		unmaskAsNumber: true, // Convert to Floated Number
	});

	// inputmask decimal
	$('#inputMaskDecimal').find('input').inputmask({
		alias: 'numeric',
		digits: 2,
		prefix: '',
		suffix: '',
		radixPoint: ',',
		autoUnmask: true,
		removeMaskOnSubmit: true
	});

	// inputmask - decimal
	$('#inputMaskPhone').find('input').inputmask({
		mask: '0(999)999-9999',
		autoUnmask: true,
		removeMaskOnSubmit: true
	});

	/*
	Event Handlers
	*/
});
