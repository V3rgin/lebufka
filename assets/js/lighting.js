$('#lighting').delegate('form', 'submit', function (e) {
	e.preventDefault();
	var form = $(this);
	$.ajax({
		url: 'server.php',
		type: 'post',
		data: form.serialize(),
		beforeSend: function(){},
		complete: function(){},
		success: function(response) {
			var json = $.parseJSON(response);
			console.log(json);
			/*for (const property in data) {
			
			}*/
		}
	});
});