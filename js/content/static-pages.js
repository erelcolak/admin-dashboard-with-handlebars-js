
/*
###
Request URL's & Data Variables
###
*/
var _URLLogin = '';


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
// Validation
function Validation(xhr){
	var validation = true;
	if( $('#UserName').find('input').val() == '' ){
		Alert(alertText.accountPages.login.emptyUserName)
		validation = false;
	}
	if( $('#UserPassword').find('input').val() == '' ){
		Alert(alertText.accountPages.login.emptyPassword)
		validation = false;
	}
	if( validation == false ){
		xhr.abort();
	}
	if( validation == true ){
		Loading(true, '.static-page-form-group-container');
	}
	return validation;
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
	particlesJS.load('particles', 'http://localhost/hipposoft/js/plugins/particle/js/config/particle.json', function() {

	});

	/*
	Event Handlers
	*/
	$('#btnLogin').on('click', function(e){
		e.preventDefault();
		// Ajax Query -
		$.ajax({
			// url: _URLLogin,
			type: 'POST',
			// data: queryData,
			beforeSend: function(xhr){
				Validation(xhr)
			},
			success: function(data){

			},
			error: function(data){
				Alert(alertText.ajax.error)
			},
			complete: function(){
				Loading(false);
				// Redirecting
				Alert(alertText.accountPages.login.loginSuccessfully)
				setTimeout(function(){
					window.location.href = 'index.php';
				}, 2000);
			}
		});
	});
});
