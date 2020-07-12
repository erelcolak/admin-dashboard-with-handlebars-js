
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
function alertWarning(){
	return '<strong>functions returned value</strong>';
}

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

	/*
	Event Handlers
	*/
	$('#btnTest').on('click', function(e){
		e.preventDefault();
		Alert( alertText.general.success, alertWarning() )
	});
});
