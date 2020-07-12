/* Master */
var _URLLogout = 'staticPages.php';

/* Master */
$('#btnEndSession').on('click', function(e){
	e.preventDefault();
	window.location.href = _URLLogout;
});
