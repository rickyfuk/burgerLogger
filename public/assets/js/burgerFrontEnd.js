$(document).ready(function () {
	// listen to the addburger text area for any change
	$('#addburger').on('change', function () {
		// make the button disable when nth is add in the textbox
		if ($('#addburger').val().trim() != '') {
			$('.addBurgerBTN').removeAttr('disabled');
		} else {
			$('.addBurgerBTN').attr('disabled', 'disabled');
		}
	});

	// send the form infomation to the server
	$('.create-form').on('submit', function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		const newBurger = {
			name: $('#addburger').val().trim(),
			done: false,
		};

		// send the post request
		$.ajax('/api/burger', {
			type: 'POST',
			data: newBurger,
		}).then(function () {
			console.log(`${newBurger.name} is added`);
			// Reload the page to get the updated list
			location.reload();
		});
	});
});
